// linux/remote/home-settings-mode-prompt-shown.js — Claude Code 2.1.310（linux）模块 chunk-d7jcy8cm.js
import { c } from "../agents/third-party.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { V } from "../context/chunk-e2302e3b.js";
import { Je } from "../ui/aria-hidden.aa9d.js";
import { lt } from "../shared/chunk-76877d92.js";
import { Ee } from "../ui/chunk-067d565d.js";
import { Szn } from "../core/conversation-engine.js";
import { Jn } from "../context/org-memory-writes-setting-changed.js";
import { we } from "../ui/keybinding-auto-hints.js";
import { bPe } from "../ui/chunk-6796d695.js";
import { ft } from "../shared/chunk-c602eee2.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { P, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function Oto({ configHome: _, storageV5: h, origin: d, onDone: w }) {
  let i = d === "first_run", o = bPe(w, { selfOpened: i, onCancelled: (t) => f("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled") });
  lt("confirm:no", () => p("not_now"), { context: "Confirmation", isActive: i && !o.decided }), P(() => {
    a("tengu_home_settings_mode_prompt_shown", { origin: c(d) });
  }, [d]);
  function p(t) {
    if (!o.take()) return;
    if (a("tengu_home_settings_mode_prompt", { choice: c(t), origin: c(d) }), t === "not_now") {
      f("ccr_home_seed_mode_prompt", "dismissed"), o.handBack(t);
      return;
    }
    Szn(t, h).then((u) => {
      if (o.settled()) return;
      switch (u) {
        case "refused":
          m("ccr_home_seed_mode_prompt", "not_written"), o.handBack("not_saved");
          return;
        case "not_stored":
          m("ccr_home_seed_mode_prompt", "not_stored"), o.handBack("not_stored");
          return;
        case "unconfirmed":
          f("ccr_home_seed_mode_prompt", "unconfirmed");
          break;
        case "written":
          if (t === "forward") g("ccr_home_seed_mode_prompt");
          else f("ccr_home_seed_mode_prompt", "declined");
          break;
      }
      o.handBack(t);
    }, (u) => {
      if (l(u), o.settled()) return;
      m("ccr_home_seed_mode_prompt", "write_failed"), o.handBack("not_saved");
    });
  }
  if (o.decided) return o.exitHintShowing ? r(n, { dimColor: true, italic: true, children: ["Press ", o.exit.keyName, " again to exit"] }) : null;
  return r(we, { title: "Use this machine's settings in cloud sessions?", onCancel: () => p("not_now"), isCancelActive: !i, inputGuide: o.exit.pending ? r(n, { children: ["Press ", o.exit.keyName, " again to exit"] }) : r(Ee, { children: [e(V, { chord: "enter", action: "confirm" }), e(ft, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "skip for now" })] }), children: [r(s, { flexDirection: "column", gap: 1, children: [e(n, { bold: true, children: Jn(_) }), e(n, { children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent." }), e(n, { dimColor: true, children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud." })] }), e(Je, { options: [{ label: "Yes, send my settings", value: "forward" }, { label: "No, keep them on this machine", value: "keep_local" }, { label: "Not now", value: "not_now" }], defaultFocusValue: "not_now", hideIndexes: i, disablePrintableKeybindings: i, isDisabled: o.choicesDisabled, refuseInput: o.refuseInput, onChange: p, onCancel: () => p("not_now") })] });
}
export {
  Oto
};
