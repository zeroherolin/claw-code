// linux/shared/chunk-6346e686.js — Claude Code 2.1.310（linux）模块 chunk-z1pyxaz3.js
import { Ye } from "../telemetry/anthropic-workspace-id.js";
class g7t extends Ye {
  why;
  constructor(e) {
    super(`serving client ${e} while the request was pending`);
    this.why = e;
    this.name = "ServingInstanceGoneError";
  }
}
class h7t extends Ye {
  status;
  constructor(e) {
    super("request event dropped after an upload attempt that may have landed; delivery unknown");
    this.status = e;
    this.name = "RequestDeliveryUnknownError";
  }
}
class Amo extends Ye {
  constructor() {
    super("request withdrawn before it left this process; not delivered");
    this.name = "RequestWithdrawnUnsentError";
  }
}
class y7t extends Ye {
  status;
  constructor(e) {
    super("request event refused by the session service; not delivered");
    this.status = e;
    this.name = "RequestNotDeliveredError";
  }
}
export {
  Amo,
  g7t,
  h7t,
  y7t
};
