// darwin/remote/home-settings-mode-prompt-shown.js — Claude Code 2.1.310（darwin）模块 chunk-g1j4fgt9.js
import { c } from "../agents/third-party.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { q } from "../context/chunk-e2302e3b.js";
import { Je } from "../ui/aria-hidden.aa9d.js";
import { lt } from "../shared/chunk-76877d92.js";
import { ve } from "../ui/chunk-067d565d.js";
import { BGn } from "../core/conversation-engine.js";
import { Jn } from "../context/org-memory-writes-setting-changed.js";
import { we } from "../ui/keybinding-auto-hints.js";
import { CPe } from "../ui/chunk-6796d695.js";
import { pt } from "../shared/chunk-c602eee2.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { P, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function ono({ configHome: _, storageV5: h, origin: d, onDone: w }) {
  let i = d === "first_run", o = CPe(w, { selfOpened: i, onCancelled: (t) => p("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled") });
  lt("confirm:no", () => u("not_now"), { context: "Confirmation", isActive: i && !o.decided }), P(() => {
    a("tengu_home_settings_mode_prompt_shown", { origin: c(d) });
  }, [d]);
  function u(t) {
    if (!o.take()) return;
    if (a("tengu_home_settings_mode_prompt", { choice: c(t), origin: c(d) }), t === "not_now") {
      p("ccr_home_seed_mode_prompt", "dismissed"), o.handBack(t);
      return;
    }
    BGn(t, h).then((f) => {
      if (o.settled()) return;
      switch (f) {
        case "refused":
          m("ccr_home_seed_mode_prompt", "not_written"), o.handBack("not_saved");
          return;
        case "not_stored":
          m("ccr_home_seed_mode_prompt", "not_stored"), o.handBack("not_stored");
          return;
        case "unconfirmed":
          p("ccr_home_seed_mode_prompt", "unconfirmed");
          break;
        case "written":
          if (t === "forward") g("ccr_home_seed_mode_prompt");
          else p("ccr_home_seed_mode_prompt", "declined");
          break;
      }
      o.handBack(t);
    }, (f) => {
      if (l(f), o.settled()) return;
      m("ccr_home_seed_mode_prompt", "write_failed"), o.handBack("not_saved");
    });
  }
  if (o.decided) return o.exitHintShowing ? r(n, { dimColor: true, italic: true, children: ["Press ", o.exit.keyName, " again to exit"] }) : null;
  return r(we, { title: "Use this machine's settings in cloud sessions?", onCancel: () => u("not_now"), isCancelActive: !i, inputGuide: o.exit.pending ? r(n, { children: ["Press ", o.exit.keyName, " again to exit"] }) : r(ve, { children: [e(q, { chord: "enter", action: "confirm" }), e(pt, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "skip for now" })] }), children: [r(s, { flexDirection: "column", gap: 1, children: [e(n, { bold: true, children: Jn(_) }), e(n, { children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent." }), e(n, { dimColor: true, children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud." })] }), e(Je, { options: [{ label: "Yes, send my settings", value: "forward" }, { label: "No, keep them on this machine", value: "keep_local" }, { label: "Not now", value: "not_now" }], defaultFocusValue: "not_now", hideIndexes: i, disablePrintableKeybindings: i, isDisabled: o.choicesDisabled, refuseInput: o.refuseInput, onChange: u, onCancel: () => u("not_now") })] });
}
export {
  ono
};
