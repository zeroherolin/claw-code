// linux/shared/chunk-e0f9c244.js — Claude Code 2.1.310（linux）模块 chunk-a71v9rqe.js
import { Ii } from "../shell/invalid-type.js";
var Fwo = { delete_asset: "ask", delete_artifact: "ask", read_shared_artifact: "blocked", ...{} };
function Z1n(e) {
  return { ...e, ...Ii(Fwo, (s, r) => e?.[r] === "blocked") };
}
export {
  Fwo,
  Z1n
};
