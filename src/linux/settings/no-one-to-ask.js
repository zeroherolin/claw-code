// linux/settings/no-one-to-ask.js — Claude Code 2.1.310（linux）模块 chunk-ajtgp75s.js
import { b, c } from "../agents/third-party.js";
import { d, Vt } from "../telemetry/anthropic-workspace-id.js";
import { q, tt, ye, J } from "../context/not-admin-owned.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { yH } from "./global-config-and-gates.js";
import { Mr } from "../models/claude-3-5-sonnet.js";
import { bt, t, _6 } from "../fs/gitlab-runner-authentication-token.js";
import { pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { _7, Ph } from "./built-in.js";
import { cLt, HC, bIs, SIs, Kvo, cWn, Xp, sGn, ule, JIr, $Ao, UAo, Don, VMr, qMr, GNs, QMr, ZMr, Dsn, yKn, eDr, Hsn, fi, ePo, tPo, Za, D_ } from "../core/conversation-engine.js";
import { FE } from "../fs/files-directories.js";
import { Bre, KG } from "../plugins/entry-refused.js";
import { mr } from "../workflows/chunk-5e65bb82.js";
import { Zp } from "../plugins/plugin-command-source-refresh.js";
import { r5n, gde, XUt, f8, vG } from "../mcp/copy-failed.js";
import { IS } from "../telemetry/chunk-d4426fa7.js";
import { G8e, ift } from "../tools/permission-confirm-with-user.js";
import { YB } from "../shared/chunk-82199314.js";
import { i7 } from "../shared/dev-mods.js";
import { $r } from "../vendor/react/chunk-0b0bf45d.js";
var N = {};
$r(N, { DEV_MODS_PLACEHOLDER: () => Ze, default: () => N });
var fo = { explain: "explain", allow: "enable", not_now: "decline" };
var lo = { no_one_to_ask: "no_one_to_ask", host_closed: "closed", no_selection: "unpicked", error: "retry" };
function po(o) {
  switch (o.kind) {
    case "chose":
      return fo[o.value];
    case "declined":
      return "decline";
    case "aborted":
      return "withdrawn";
    case "unanswered":
      return lo[o.reason];
  }
}
var uo = 2e3;
var co = (o) => o === "now" ? "now" : "when this turn ends";
var go = (o) => `They'll load ${co(o)}, and they'll reload whenever they change. A mod is code, and it runs with the same access you have here.`;
var Jo = [{ value: "explain", label: "How does this work?" }, { value: "allow", label: "Turn them on" }, { value: "not_now", label: "Not now" }];
function ho(o) {
  let e = o === "now", r = !ye();
  return ["A mod is a small program that changes how Claude looks or behaves here.", "Claude wrote these mods, and they run with the same access you have.", e ? "If you turn them on, they'll load now and reload whenever they change." : "Once they're on, they load when this turn ends and reload when they change.", "That lasts for the rest of this session, even if it restarts.", "If you choose Not now, nothing new will load until this session next starts.", ...r ? ["You can see what's loaded, and turn it off, with /plugin."] : []].join(`
`);
}
var oe = "Mods";
var F = "Turn on the mods Claude writes in this session?";
var re = (o) => `${F}

${go(o)}`;
var te = "mod_hot_reload";
var se = (o) => `${F}

${ho(o)}`;
var yo = 3;
async function eo(o, e) {
  let r = yKn.isRunning() ? "turn-end" : "now", n = e === 0 ? re(r) : se(r), i = po(await ift({ canUseTool: o.binding.canUseTool, toolUseContext: o.binding.toolContext(o.abortController), source: te, header: oe, question: n, choices: Jo, personOnly: true }));
  if (i !== "explain") return i;
  return g("plugin_dev_mods", { answer: b("explain") }), e < yo ? eo(o, e + 1) : "decline";
}
var vo = { no_one_to_ask: "no_one_to_ask", closed: "host_closed", unpicked: "no_selection" };
async function wo(o, e) {
  let r = Xp();
  if (r === void 0) return f("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let s = new AbortController();
  e?.addEventListener("abort", () => s.abort(), { once: true });
  try {
    let n = await eo({ binding: r, folder: o, abortController: s }, 0), i = vo[n];
    return i === void 0 ? g("plugin_dev_mods", { answer: c(n) }) : f("plugin_dev_mods", i), n;
  } catch (n) {
    return t(`dev mods: the ask failed, asked again later: ${d(n)}`, { level: "error" }), "retry";
  }
}
function U() {
  let o = Xp();
  if (o === void 0) return true;
  try {
    return G8e(o.toolContext(new AbortController()));
  } catch (e) {
    return t(`dev mods: no context to ask in yet: ${d(e)}`, { level: "error" }), true;
  }
}
import { join as fe } from "path";
var R = (o) => fe(i7(), o);
var Do = [{ refusal: "diskless", isRefused: J }, { refusal: "hooks_modules_off", isRefused: () => !IS() }, { refusal: "all_hooks_disabled", isRefused: Ph }, { refusal: "sideload_disabled", isRefused: KG }, { refusal: "local_dirs_blocked", isRefused: () => !Bre() }, { refusal: "managed_hooks_only", isRefused: () => pe("policySettings")?.allowManagedHooksOnly === true }, { refusal: "hooks_disabled_in_settings", isRefused: _7 }, { refusal: "safe_mode", isRefused: Mr }, { refusal: "bare_mode", isRefused: () => mr("hooks") }, { refusal: "untrusted", isRefused: () => !yH() }];
function y() {
  return Do.find((o) => o.isRefused())?.refusal;
}
function O() {
  let o = y();
  if (o !== void 0) f("plugin_dev_mods", o), t(`dev mods: mod hot-reloading is off here (${o})`);
  return o;
}
import { mkdir as Ke } from "fs/promises";
var _o = 3;
function ko(o, e) {
  let r = /* @__PURE__ */ new Set(), s = new Set(e.loaded), n = false, i = false, a = false, u, l = 0, S = Number.NEGATIVE_INFINITY, w = false, Q = 0, z = false, P = false, G = false, D = false, W, Uo = e.watchRoot(o, () => {
    n = true, no();
  }), $o = e.turn.onBegin(() => {
    l += 1, z = e.turn.isPersonTurn();
  }), jo = e.turn.onEnd((p) => void Z(() => Ko(p ? "wait" : "wake")));
  function so() {
    W?.(), W = void 0;
  }
  function no() {
    if (D || i) return;
    if (so(), e.turn.isRunning()) {
      Z(H);
      return;
    }
    W = e.clock.setTimeout(() => void Z(H), e.quietMs);
  }
  async function Z(p) {
    try {
      await p();
    } catch (h) {
      t(`dev mods: the watch on ${o} failed: ${d(h)}`, { level: "error" });
    }
  }
  async function Ko(p) {
    if (a) {
      a = false;
      for (let h of await e.listChildren(o) ?? []) r.add(h);
    }
    if (i) {
      await io(p);
      return;
    }
    if (w) w = false, await H();
  }
  async function io(p) {
    if (D) return;
    if (e.refusal()) {
      await E(), e.stopped("refused");
      return;
    }
    let h = p, oo = e.turn.onBegin(() => {
      h = "wait";
    }), I = e.turn.onEnd((A) => {
      h = A ? "wait" : "wake";
    });
    try {
      await Promise.all([E(), e.enable(o, () => h)]);
    } finally {
      oo(), I();
    }
    e.stopped("enabled");
  }
  async function H() {
    W = void 0;
    let p = e.turn.isRunning() && n && S === Number.NEGATIVE_INFINITY, h = D || i, oo = e.turn.isRunning() && !p;
    if (h || G || oo || S === l) {
      w = !h;
      return;
    }
    G = true;
    let I = false;
    try {
      let A = p ? [] : (await e.listChildren(o) ?? []).filter((C) => !r.has(C)), Bo = p || A.length > 0 && (n || A.some((C) => !s.has(C)));
      if (D || !Bo) return;
      if (e.turn.isRunning() && !p) {
        w = true;
        return;
      }
      if (e.refusal()) {
        await E(), e.stopped("refused");
        return;
      }
      S = l, z = false;
      let ao = new AbortController();
      u = ao;
      let mo = await e.ask(o, ao.signal).finally(() => {
        u = void 0;
      });
      if (D) return;
      switch (mo) {
        case "enable":
          if (e.turn.isRunning() && !e.refusal()) {
            i = true, e.deferred();
            return;
          }
          await io("wake");
          return;
        case "decline": {
          P = false, Q = 0, a = e.turn.isRunning();
          let C = await e.listChildren(o);
          for (let Vo of [...A, ...C ?? []]) r.add(Vo);
          return;
        }
        case "withdrawn":
          if (!P) P = true, e.unanswered();
          w = true;
          return;
        case "retry":
          w = true;
          return;
        case "closed":
        case "unpicked":
          if (!P) P = true, e.unanswered();
          if (!z) Q += 1;
          if (Q >= _o) {
            await E(), e.stopped("no_pick");
            return;
          }
          if (mo === "unpicked") {
            S = e.turn.isRunning() ? l - 1 : l, w = true;
            return;
          }
          S = l - 1, I = true;
          break;
        case "no_one_to_ask":
          await E(), e.stopped("no_one_to_ask");
          return;
      }
    } finally {
      G = false;
    }
    if (I) await H();
  }
  async function E() {
    if (D) return;
    D = true, w = false, so(), u?.abort(), $o(), jo(), await Uo.close();
  }
  return no(), { declined: () => [...r], isClosed: () => D, dispose: E };
}
var Mo = "This session's mods will load once this turn ends.";
function To(o, e) {
  let r = HC.get();
  if (r?.stage !== "watching" || r.folder !== o) return;
  switch (e) {
    case "refused":
      HC.set({ stage: "wanted", folder: o, ...r.loaded !== void 0 && { loaded: r.loaded } });
      return;
    case "no_one_to_ask":
    case "no_pick":
      HC.set({ stage: "off", folder: o });
      return;
    case "enabled":
      return;
  }
}
import { utimes as De } from "fs/promises";
async function _(o) {
  let e = /* @__PURE__ */ new Date();
  await De(o, e, e).catch((r) => t(`dev mods: ${o} keeps its old time: ${d(r)}`));
}
function j() {
  if (SIs.get() !== void 0) return;
  SIs.set(yKn.onEnd(() => {
    try {
      for (let o of [...gde.get() ?? [], ...XUt.get() ?? []]) _(o);
    } catch (o) {
      t(`dev mods: the turn-end refresh failed: ${d(o)}`, { level: "error" });
    }
  }));
}
import { basename as Me } from "path";
function L(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  return vG(Hsn, JIr(Me(o), e)), m("plugin_dev_mods", r), t(`dev mods: ${s} ${o} failed: ${d(e)}`, { level: "error" }), "failed";
}
function bo(o, e, r) {
  return { root: o, before: /* @__PURE__ */ new Map(), after: r.after, present: r.present, unserved: r.unserved, outcome: e };
}
async function So(o, e, r) {
  let s = await ZMr(o) ?? [], i = e === "reloaded" ? await fi(r.storageV5, r.credentials) : { enabled: [], disabled: [] }, [a] = GNs([...i.enabled, ...i.disabled], [o]);
  for (let u of $Ao(bo(o, e, { present: s, after: a?.loaded ?? /* @__PURE__ */ new Map(), unserved: a?.unserved ?? /* @__PURE__ */ new Set() }), eDr, (l) => sGn.get()?.isUnloaded(l) ?? false)) f8(u.plugin, u.text);
}
async function K(o, e) {
  let r = Xp()?.toolContext(new AbortController());
  await So(o, e, { storageV5: r?.storageV5, credentials: r?.credentials }).catch((s) => t(`dev mods: the lines for ${o} were not told: ${d(s)}`, { level: "error" }));
}
async function B(o) {
  try {
    await ule.get()?.joinPluginDir(o);
  } catch (e) {
    let r = HC.get();
    if ((r?.stage === "watching" || r?.stage === "consented") && r.folder === o) HC.set({ stage: "wanted", folder: o, ...r.stage === "watching" && r.loaded !== void 0 && { loaded: r.loaded } });
    return L(o, e, "enable_failed"), { kind: "off", reason: d(e) };
  }
  try {
    HC.set({ stage: "enabled", folder: o }), gde.set(YB(gde.get() ?? [], [o])), j(), await _(o), await X(0);
    let e = Xp()?.toolContext(new AbortController());
    ePo(o, e?.storageV5);
    let r = await Dsn();
    return await K(o, r), g("plugin_dev_mods", { enabled: true }), { kind: "enabled", load: r };
  } catch (e) {
    return { kind: "enabled", load: L(o, e, "enable_failed") };
  }
}
function Eo(o, e) {
  switch (e) {
    case "reloaded":
      return `The person enabled mod hot-reloading for this session and the mods under ${o} loaded: they load and reload by themselves as their files change; the transcript names any mod that failed.`;
    case "held":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} wait for /reload-plugins (the load would rewrite the prompt cache): they are NOT loaded yet.`;
    case "unbound":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (this session cannot reload its plugins; only a restart loads them).`;
    case "failed":
      return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`;
  }
}
function Ro(o, e) {
  switch (e.kind) {
    case "enabled":
      return Eo(o, e.load);
    case "declined":
      return `The person declined mod hot-reloading: what this run wrote under ${o} is written but NOT loaded (a mod that loaded when the session started keeps running as it loaded). Do not say the change is running. It loads the next time this session starts (/reload-plugins reloads only a mod that loaded at the start); the person can ask again.`;
    case "unanswered":
      return `The person has not answered the mod hot-reloading question yet; it is asked again once a turn ends. What this run wrote under ${o} is written but NOT loaded yet. Do not say it was declined, and do not suggest --plugin-dir or a restart.`;
    case "off":
      return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`;
  }
}
var to = (o, e) => qMr(Ro(o, e));
var V = { kind: "unanswered" };
function k(o, e, r = "wake") {
  let s = e.kind === "enabled", n = s && r === "wake";
  if (s) D_((i) => i.value === to(o, V));
  Za({ agentId: tt(), value: to(o, e), mode: "task-notification", skipAttachments: true, isMeta: VMr, ...!n && { passive: true }, priority: "next" });
}
var fJt = "nobody could be asked";
function Y(o) {
  if (Kvo.get() === o) return;
  Kvo.set(o), k(o, { kind: "off", reason: fJt });
}
var Oo = "the question got no pick three times";
var Po = { hooks_modules_off: "hooks modules are switched off in this process", all_hooks_disabled: "the organization disables all hooks", sideload_disabled: "the organization forbids side-loaded plugins", local_dirs_blocked: "the organization blocks plugins from local folders", managed_hooks_only: "the organization allows only managed hooks", hooks_disabled_in_settings: "hooks are turned off in your settings (disableAllHooks)", safe_mode: "the session runs in safe mode", diskless: "this kind of cloud session has no disk to load mods from", bare_mode: "the session runs in bare mode", untrusted: "the workspace is not trusted" };
function Ao(o, e) {
  switch (o) {
    case "enabled":
      return;
    case "refused":
      if (e === void 0) return;
      return { kind: "off", reason: Po[e] };
    case "no_one_to_ask":
      return { kind: "off", reason: fJt };
    case "no_pick":
      return { kind: "off", reason: Oo };
  }
}
function Co(o, e) {
  let r = Ao(e, y());
  if (e === "no_one_to_ask") Y(o);
  else if (r !== void 0) k(o, r);
}
function Lo(o, e) {
  let r = FE.watch(o, { persistent: true, ignoreInitial: true, followSymlinks: false, ignorePermissionErrors: true, ignored: UAo(o, _6(), () => false), usePolling: true, interval: Don, binaryInterval: Don }), s = () => e();
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), r.on("unlinkDir", s), r.on("error", (n) => t(`dev mods: the watch on ${o}: ${d(n)}`, { level: "warn" })), { close: () => r.close() };
}
async function M() {
  try {
    let o = HC.get();
    if (o?.stage !== "wanted") return;
    if (y() !== void 0) return;
    if (!U()) {
      if (f("plugin_dev_mods", "no_one_to_ask"), HC.set({ stage: "off", folder: o.folder }), o.loaded === void 0) Y(o.folder);
      return;
    }
    await Ke(o.folder, { recursive: true });
    let e = HC.get();
    if (e?.stage !== "wanted") return;
    let { folder: r, loaded: s } = e, n = {}, i = ko(r, { watchRoot: Lo, loaded: s ?? [], listChildren: ZMr, refusal: O, ask: async (a, u) => {
      let l = await wo(a, u);
      if (l !== "no_one_to_ask" && l !== "retry") Kvo.set(void 0);
      if (l === "decline") k(a, { kind: "declined" });
      return l;
    }, enable: async (a, u) => k(a, await B(a), u()), deferred: () => f8(Hsn, Mo), unanswered: () => k(r, V), stopped: (a) => {
      n.release?.(), To(r, a), Co(r, a);
    }, clock: QMr, turn: yKn, quietMs: uo });
    HC.set({ stage: "watching", folder: r, watch: i, ...s !== void 0 && { loaded: s } }), n.release = bt(() => i.dispose());
  } catch (o) {
    t(`dev mods: the watch did not start: ${d(o)}`, { level: "error" });
  }
}
import { readdirSync as Qe } from "fs";
import { join as qe } from "path";
import { statSync as Ve } from "fs";
function No(o) {
  try {
    return Ve(o, { throwIfNoEntry: false })?.isFile() === true;
  } catch (e) {
    if (Vt(e)) return false;
    throw e;
  }
}
function Wo(o) {
  try {
    return Qe(o, { withFileTypes: true }).filter((e) => (e.isDirectory() || e.isSymbolicLink()) && cWn(e.name)).map((e) => e.name).filter((e) => No(qe(o, e, Zp))).toSorted();
  } catch (e) {
    if (Vt(e)) return;
    throw e;
  }
}
async function Ho(o) {
  try {
    let e = Wo(o);
    if (e === void 0 || e.length === 0) {
      let r = e !== void 0 && U();
      HC.set(r ? { stage: "wanted", folder: o, loaded: e } : void 0), await M();
      return;
    }
    HC.set({ stage: "wanted", folder: o, loaded: e }), XUt.set(YB(XUt.get() ?? [], [o])), await ule.get()?.joinPluginDir(o), j(), await _(o), await X(0), await K(o, await Dsn()), g("plugin_dev_mods", { loaded_at_start: true }), await M();
  } catch (e) {
    let r = HC.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === o) HC.set({ stage: "wanted", folder: o }), M();
    L(o, e, "load_failed");
  }
}
function T() {
  try {
    let o = HC.get();
    switch (o?.stage) {
      case "consented":
        if (y() === void 0) B(o.folder);
        return;
      case "present":
        if (y() === void 0) Ho(o.folder);
        return;
      case "wanted":
        M();
        return;
      case "enabled":
        _(o.folder);
        return;
      case void 0:
      case "watching":
      case "off":
        return;
    }
  } catch (o) {
    t(`dev mods: the catch-up failed: ${d(o)}`, { level: "error" });
  }
}
async function Io() {
  let o = HC.get(), e = R(q());
  try {
    if (o?.stage === "watching" && o.folder !== e) await o.watch.dispose();
    let r = HC.get(), s = r !== void 0 && r.folder !== e, n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) HC.set({ stage: "wanted", folder: e });
    if (r5n.set(T), O() === void 0) await M();
  } catch (r) {
    t(`dev mods: handing out ${e} started nothing: ${d(r)}`, { level: "error" });
  }
  return e;
}
var Ze = "${CLAUDE_DEV_MODS_DIR}";
async function Pdo(o, e) {
  let { DEV_MODS_PLACEHOLDER: r } = N;
  if (!o.includes(r)) return o;
  let s = e.isPreload ? R(q()) : await Io();
  return o.replaceAll(r, s);
}
function Fo() {
  let o = R(q()), e = HC.get();
  if (e !== void 0 && e.folder === o && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${d(s)}`));
  HC.set({ stage: "present", folder: o }), r5n.set(T), T();
}
import { mkdirSync as rr } from "fs";
function xbr() {
  bIs.set(Pdo);
  try {
    let o = tPo(), e = HC.get();
    if (!(o !== void 0 && cLt(o, q()) && !(e?.stage === "enabled" && e.folder === o))) {
      Fo();
      return;
    }
    if (e?.stage === "watching") e.watch.dispose().catch((s) => t(`dev mods: the watch did not close: ${d(s)}`));
    if (HC.set({ stage: "consented", folder: o }), r5n.set(T), O() === void 0) rr(o, { recursive: true }), T();
  } catch (o) {
    t(`dev mods: the restore failed: ${d(o)}`, { level: "error" });
  }
}
export {
  Pdo,
  fJt,
  xbr
};
