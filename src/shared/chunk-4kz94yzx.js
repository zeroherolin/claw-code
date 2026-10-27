// shared/chunk-4kz94yzx.js — Claude Code 2.1.310 模块 chunk-4kz94yzx.js
import { Ye } from "../telemetry/anthropic-workspace-id.36ys.js";
class TQt extends Ye {
  why;
  constructor(e) {
    super(`serving client ${e} while the request was pending`);
    this.why = e;
    this.name = "ServingInstanceGoneError";
  }
}
class AQt extends Ye {
  status;
  constructor(e) {
    super("request event dropped after an upload attempt that may have landed; delivery unknown");
    this.status = e;
    this.name = "RequestDeliveryUnknownError";
  }
}
class Qmo extends Ye {
  constructor() {
    super("request withdrawn before it left this process; not delivered");
    this.name = "RequestWithdrawnUnsentError";
  }
}
class RQt extends Ye {
  status;
  constructor(e) {
    super("request event refused by the session service; not delivered");
    this.status = e;
    this.name = "RequestNotDeliveredError";
  }
}
export {
  AQt,
  Qmo,
  RQt,
  TQt
};
