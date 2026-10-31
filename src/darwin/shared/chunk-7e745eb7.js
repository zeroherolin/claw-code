// darwin/shared/chunk-7e745eb7.js — Claude Code 2.1.310（darwin）模块 chunk-7bt27r62.js
import { Ux, kn } from "../settings/global-config-and-gates.js";
function gr(t, { safe: o }) {
  try {
    let { value: r, source: e } = kn(t, o);
    return r === !o && e === "payload" && !Ux() ? !o : o;
  } catch {
    return o;
  }
}
export {
  gr
};
