// darwin/shared/chunk-4bbbe120.js — Claude Code 2.1.310（darwin）模块 chunk-4yx6r993.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
class e {
  binding = void 0;
  currentToolUseContext = void 0;
  currentOnProgress = void 0;
  callsInFlight = 0;
  unregisterLockCleanup = void 0;
  activeThisTurn = false;
  runLoopPump = void 0;
  runLoopPumpRetainCount = 0;
  escHotkeyRegistered = false;
  frozenCoordinateMode = void 0;
  hostAdapter = void 0;
  swiftModule = void 0;
  inputModule = void 0;
  reset() {
    if (this.unregisterLockCleanup !== void 0 || this.escHotkeyRegistered || this.runLoopPump !== void 0) throw Error("ComputerUseSession.reset() called while the lock cleanup, Esc hotkey, or run-loop pump is still registered");
    this.binding = void 0, this.currentToolUseContext = void 0, this.currentOnProgress = void 0, this.callsInFlight = 0, this.activeThisTurn = false, this.runLoopPumpRetainCount = 0, this.frozenCoordinateMode = void 0, this.hostAdapter = void 0, this.swiftModule = void 0, this.inputModule = void 0;
  }
}
var n = new W(() => new e());
function o_() {
  return n.of(U().host);
}
export {
  o_
};
