// dev 分支的测试共用：按脚本回应的假 Anthropic API，用来模拟服务端拒答、指定的工具调用和流式请求 404。

/**
 * 脚本化的假 API：每个流式请求按脚本中对应位置的步骤回应，脚本用完后一律正常回复 FINAL_ANSWER。
 * 步骤：
 *   "refuse"  先输出一段文字（PARTIAL_TEXT_ONE）和一个 Bash 调用（echo TOOL_ONE），再以 frontier_llm 拒答；
 *   "tool"    同样的文字和 Bash 调用，但正常停在 tool_use；
 *   { tool, input }  一个指定工具调用，停在 tool_use（拿到 tool_result 之后的请求回复 FINISHED）；
 *   "ok"      正常回复；
 *   "notfound"  流式请求返回 404，客户端会改用非流式请求重发（记在 nonStreaming 里）。
 * script 为数字 N 时等价于 N 个 "refuse"；为函数时每次收到请求体，返回该次的步骤。
 * 非流式请求（本地分类器等）不走脚本，一律回复 options.nonStreamingText。
 * @returns {{ url: string, requests: {headers: object, body: object}[], nonStreaming: {headers: object, body: object}[], stop: () => void }}
 *   requests 为各流式请求的请求头与 JSON 体；nonStreaming 为非流式 /v1/messages 请求（count_tokens 不记）
 */
export function startScriptedApi(script, options) {
  const nonStreamingText = options?.nonStreamingText ?? "OK";
  const plan =typeof script === "function" ? script : (() => { const steps = Array.isArray(script) ? script : Array.from({ length: script }, () => "refuse"); return (_body, n) => steps[n - 1] ?? "ok"; })();
  const requests = [], nonStreaming = [];
  const usage = { input_tokens: 5, output_tokens: 1, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
  const text = (t) => [{ type: "content_block_start", index: 0, content_block: { type: "text", text: "" } }, { type: "content_block_delta", index: 0, delta: { type: "text_delta", text: t } }, { type: "content_block_stop", index: 0 }];
  const toolUse = (index, id, name, input) => [{ type: "content_block_start", index, content_block: { type: "tool_use", id, name, input: {} } }, { type: "content_block_delta", index, delta: { type: "input_json_delta", partial_json: JSON.stringify(input) } }, { type: "content_block_stop", index }];
  const stop = (reason, details) => [{ type: "message_delta", delta: { stop_reason: reason, stop_sequence: null, ...(details && { stop_details: details }) }, usage: { output_tokens: 3 } }, { type: "message_stop" }];
  const partial = (n) => [...text("PARTIAL_TEXT_ONE"), ...toolUse(1, `toolu_${n}`, "Bash", { command: "echo TOOL_ONE", description: "first" })];
  const server = Bun.serve({
    hostname: "127.0.0.1", port: 0,
    async fetch(req) {
      if (!new URL(req.url).pathname.includes("/v1/messages")) return Response.json({ input_tokens: 1 });
      const body = await req.json().catch(() => ({}));
      if (!body.stream) {
        if (!new URL(req.url).pathname.includes("count_tokens")) nonStreaming.push({ headers: Object.fromEntries(req.headers), body });
        return Response.json({ id: "m", type: "message", role: "assistant", model: body.model, content: [{ type: "text", text: nonStreamingText }], stop_reason: "end_turn", usage });
      }
      requests.push({ headers: Object.fromEntries(req.headers), body });
      const n = requests.length, step = plan(body, n);
      if (step === "notfound") return Response.json({ type: "error", error: { type: "not_found_error", message: "not found" } }, { status: 404, headers: { "request-id": `req_${n}` } });
      const start = { type: "message_start", message: { id: `m_${n}`, type: "message", role: "assistant", model: body.model, content: [], stop_reason: null, stop_sequence: null, usage } };
      const answered = JSON.stringify(body.messages).includes('"tool_result"');
      const events = step === "refuse" ? [...partial(n), ...stop("refusal", { type: "refusal", category: "frontier_llm", explanation: null })]
        : step === "tool" ? [...partial(n), ...stop("tool_use")]
        : typeof step === "object" && !answered ? [...toolUse(0, `toolu_${n}`, step.tool, step.input), ...stop("tool_use")]
        : [...text(typeof step === "object" ? "FINISHED" : "FINAL_ANSWER"), ...stop("end_turn")];
      const body_ = [start, ...events].map((e) => `event: ${e.type}\ndata: ${JSON.stringify(e)}\n\n`).join("");
      return new Response(body_, { headers: { "content-type": "text/event-stream", "request-id": `req_${n}` } });
    },
  });
  return { requests, nonStreaming, url: `http://127.0.0.1:${server.port}`, stop: () => server.stop(true) };
}
