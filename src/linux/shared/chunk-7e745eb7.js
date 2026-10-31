// linux/shared/chunk-7e745eb7.js — Claude Code 2.1.310（linux）模块 chunk-z2vz1f06.js
import { Nx, kn } from "../settings/global-config-and-gates.js";
function gr(t, { safe: o }) {
  try {
    let { value: r, source: e } = kn(t, o);
    return r === !o && e === "payload" && !Nx() ? !o : o;
  } catch {
    return o;
  }
}
export {
  gr
};
