// linux/ui/create-linked-transport-pair.js — Claude Code 2.1.310（linux）模块 chunk-1gqg2z2s.js
class r {
  peer;
  closed = false;
  onclose;
  onerror;
  onmessage;
  _setPeer(e) {
    this.peer = e;
  }
  async start() {
  }
  async send(e) {
    if (this.closed) throw Error("Transport is closed");
    queueMicrotask(() => {
      this.peer?.onmessage?.(e);
    });
  }
  async close() {
    if (this.closed) return;
    if (this.closed = true, this.onclose?.(), this.peer && !this.peer.closed) this.peer.closed = true, this.peer.onclose?.();
  }
}
function o() {
  let e = new r(), s = new r();
  return e._setPeer(s), s._setPeer(e), [e, s];
}
export {
  o as createLinkedTransportPair
};
