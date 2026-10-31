// linux/remote/bridge-inbox-pointer-boundary.js — Claude Code 2.1.310（linux）模块 chunk-2af1bm06.js
import { nt, tt } from "../context/not-admin-owned.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { k } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Di } from "../context/chunk-a8653d40.js";
import { yHe } from "../permissions/session-inbox.js";
import { YBe, mDt, Yut } from "./ccr-external-event-record.ded3.js";
import { hCe } from "../shared/session-activity-parked-exceeds-refcount.js";
import { Jft } from "./bridge-inbox-fetch.js";
import { pAe, Q_t, xZe } from "../tasks/bridge-ingress-demoted.js";
import { cJ } from "../shared/chunk-7894c314.js";
var s = 32, f = 64, c = "session-inbox-unread", p = /* @__PURE__ */ new Set(["request_failed", "http_error", "owner_unverified"]);
function a() {
  return k("tengu_bridge_inbox_pointer_boundary", true);
}
class u {
  tracked = /* @__PURE__ */ new Map();
  announcedAsOwners = /* @__PURE__ */ new Set();
  noteOwnerAnnounced({ inboundOrigin: i, wake: e }) {
    if (i !== Q_t || e === void 0 || !Yut(e)) return;
    let n = e.data.file_id;
    if (typeof n !== "string" || !Jft.test(n)) return;
    if (this.announcedAsOwners.delete(n), this.announcedAsOwners.size >= f) {
      let o = this.announcedAsOwners.values().next().value;
      if (o !== void 0) this.announcedAsOwners.delete(o);
    }
    this.announcedAsOwners.add(n);
  }
  wasAnnouncedAsOwners(i) {
    return this.announcedAsOwners.has(i);
  }
  noteQueued({ inboundOrigin: i, wake: e, uuid: n }) {
    if (this.noteOwnerAnnounced({ inboundOrigin: i, wake: e }), i !== Q_t || e === void 0 || n === void 0 || !mDt(e) || !a()) return;
    let o = e.data.file_id;
    if (typeof o !== "string" || !Jft.test(o)) return;
    if (this.tracked.size >= s) {
      let r = this.tracked.keys().next().value;
      if (r !== void 0) this.tracked.delete(r), t(`[bridge] inbox pointer ${r} forgotten: ${s} pointers already unread`);
    }
    this.tracked.set(o, { uuid: n, delivered: false, renotifyValue: void 0 });
  }
  noteLifecycle(i, e) {
    for (let [n, o] of this.tracked) {
      if (o.uuid !== i) continue;
      switch (e) {
        case "completed":
          o.delivered = true;
          break;
        case "cancelled":
        case "discarded":
        case "refused":
          this.tracked.delete(n);
          break;
        case "queued":
        case "started":
          break;
      }
      return;
    }
  }
  tapCommandLifecycle(i) {
    pAe(i, (e, n) => this.noteLifecycle(e, n));
  }
  noteFetchAttempt(i, e, n) {
    let o = this.tracked.get(i);
    if (o === void 0) return;
    if (!e.ok && p.has(e.reason)) return;
    if (this.tracked.delete(i), o.renotifyValue !== void 0) {
      if (n.removeByFilter(d(o.renotifyValue)), e.ok) g("bridge_inbox_pointer");
    }
  }
  pendingFileIds() {
    return [...this.tracked.keys()];
  }
  renotifyUnfetched(i) {
    try {
      if (this.tracked.size === 0) return;
      if (!a()) {
        this.tracked.clear();
        return;
      }
      if (hCe() > 0) return;
      for (let [e, n] of this.tracked) {
        if (!n.delivered) continue;
        if (n.renotifyValue !== void 0) {
          if (i.peek(d(n.renotifyValue)) !== void 0) continue;
          this.tracked.delete(e), m("bridge_inbox_pointer", "unread_after_renotify"), t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
          continue;
        }
        let o = Di({ taskType: c, status: "pending", summary: `An inbox message announced earlier has not been read (file_id ${e})`, body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${yHe} was not called for it. Call ${yHe} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.` });
        i.enqueuePendingNotification({ mode: "task-notification", agentId: tt(), value: o, skipAttachments: true, priority: "later" }), n.renotifyValue = o, t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`);
      }
    } catch (e) {
      l(e);
    }
  }
}
var LFn = new nt(() => new u());
function d(i) {
  return (e) => e.mode === "task-notification" && e.value === i;
}
function RAi(i, e) {
  try {
    if (!("inbound_origin" in e) || e.inbound_origin !== Q_t) return;
    let n = xZe(e);
    if (n?.inboundOrigin !== Q_t) return;
    let o = cJ(n.content, n.inboundOrigin);
    if (typeof o !== "string") return;
    LFn.of(i).noteOwnerAnnounced({ inboundOrigin: n.inboundOrigin, wake: YBe(o) ?? void 0 });
  } catch (n) {
    t(`[bridge] inbox owner notice not noted: ${n instanceof Error ? n.name : "non-error throw"}`, { level: "error" });
  }
}
export {
  LFn,
  RAi
};
