// linux/git/session-exists.js — Claude Code 2.1.310（linux）模块 chunk-bznfg5bb.js
import { IRt, yat } from "../shared/checkpoint-restore-failed.js";
import { en } from "../shared/chunk-4ac8e96b.js";
function Xis(e) {
  return { steps: [{ id: "check", status: "running", startedAt: e }, { id: "create", status: "pending" }], rerouted: false, folder: false, bundle: null, fallback: null, requestSent: false };
}
function Jis(e, a, r) {
  switch (a.kind) {
    case "checking":
      return a.folder === true && !e.folder ? { ...e, folder: true } : e;
    case "bundling": {
      if (e.fallback !== null || e.steps.some((n) => n.id === "bundle") || !e.steps.some((n) => n.id === "create" && n.status === "pending")) return e;
      let t = s(e, "check", "completed", r);
      return { ...t, steps: t.steps.flatMap((n) => n.id === "create" ? [{ id: "bundle", status: "running", startedAt: r }, ...a.uploadedBySync === true ? [] : [{ id: "upload", status: "pending" }], n] : [n]), rerouted: a.rerouted, folder: a.folder === true };
    }
    case "bundled": {
      let t = s(e, "bundle", "completed", r);
      return t === e ? e : { ...d(t, "upload", r), bundle: { sizeBytes: a.sizeBytes, scope: a.scope } };
    }
    case "bundle_failed": {
      let t = e.steps.find((l) => l.status === "running" && (l.id === "bundle" || l.id === "upload"));
      if (t === void 0 && e.fallback !== null) return e;
      let n = t === void 0 ? e : s(e, t.id, "failed", r);
      return { ...n, steps: n.steps.filter((l) => !(l.id === "upload" && l.status === "pending")), fallback: a.fallback };
    }
    case "creating":
      return d(s(s(e, "check", "completed", r), "upload", "completed", r), "create", r);
    case "request_sent":
      return e.requestSent ? e : { ...e, requestSent: true };
    case "session_exists":
      return e;
    case "created":
      return s(e, "create", "completed", r);
  }
}
function s(e, a, r, t) {
  return e.steps.some((n) => n.id === a && n.status === "running") ? { ...e, steps: e.steps.map((n) => n.id === a && n.status === "running" ? { ...n, status: r, completedAt: t } : n) } : e;
}
function d(e, a, r) {
  return e.steps.some((t) => t.id === a && t.status === "pending") ? { ...e, steps: e.steps.map((t) => t.id === a && t.status === "pending" ? { ...t, status: "running", startedAt: r } : t) } : e;
}
function qit(e) {
  let a = e.steps.findLast((r) => r.status !== "pending");
  switch (a?.id) {
    case void 0:
    case "check":
      return "checking";
    case "bundle":
      return "bundling";
    case "upload":
      return "uploading";
    case "create":
      return a.status === "completed" ? "created" : "creating";
  }
}
var u = { all: "with history", current_branch: "current branch only", head: "current history only", squashed: "snapshot without history" };
function _Qr(e, a, r) {
  return { label: o(e, a), annotation: `${c(e, a)}${yat(e, r)}`, detail: i(e, a) };
}
function i(e, a) {
  return;
}
function o(e, { rerouted: a, folder: r }) {
  let t = e.status === "completed";
  switch (e.id) {
    case "check":
      if (r) return t ? "Checked this folder" : "Checking this folder";
      return t ? "Checked this checkout" : "Checking this checkout";
    case "bundle":
      if (r) return t ? "Packaged this folder" : "Packaging this folder";
      if (a) return t ? "Packaged local changes" : "Packaging local changes";
      return t ? "Packaged this repository" : "Packaging this repository";
    case "upload":
      if (a) return t ? "Uploaded your working tree" : "Uploading your working tree";
      return t ? "Uploaded this repository" : "Uploading this repository";
    case "create":
      return t ? "Created cloud session" : "Creating cloud session";
  }
}
function c(e, { bundle: a, folder: r }) {
  if (a === null || e.status !== "running" && e.status !== "completed") return "";
  let t = en(a.sizeBytes);
  switch (e.id) {
    case "bundle":
      return e.status === "completed" ? r ? ` · ${t}` : ` · ${t}, ${u[a.scope]}` : "";
    case "upload":
      return e.status === "completed" ? ` · ${t}` : ` ${t}`;
    case "check":
    case "create":
      return "";
  }
}
function bQr(e) {
  let a = IRt("new");
  return qit(e) === "created" ? a.replace(/^Setting up/, "Set up") : `${a}…`;
}
function Qis(e) {
  return e !== null && e.requestSent ? "Cancelled after the create request was sent, so a cloud session may still have been created" : "Cancelled before a cloud session was created";
}
export {
  Jis,
  Qis,
  Xis,
  _Qr,
  bQr,
  qit
};
