// ui/chunk-8154ws29.js — Claude Code 2.1.310 模块 chunk-8154ws29.js
import { Rj, Re, UF } from "../settings/global-config-and-gates.27xj.js";
import { Me } from "../shared/chunk-y6x1q9pp.js";
import { w } from "./chunk-zqxc4qtb.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { cr } from "./chunk-jz19cqtw.js";
import { hUe, DPe, we } from "./keybinding-auto-hints.yb17.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
function uur(L) {
  let o = w(20), { customApiKeyTruncated: a, onDone: c } = L, { storageV5: d } = Me(), y = hUe() ? 2 : 0, C;
  if (o[0] !== a || o[1] !== c || o[2] !== d) C = function t2(V) {
    G: switch (V) {
      case "yes": {
        Re((D) => {
          let { approved: H, rejected: O } = UF(D);
          return { ...D, customApiKeyResponses: { approved: [...H, a], rejected: O } };
        }, d), Rj(), c(true);
        break G;
      }
      case "no": {
        Re((I) => {
          let { approved: Y, rejected: q } = UF(I);
          return { ...I, customApiKeyResponses: { approved: Y, rejected: [...q, a] } };
        }, d), c(false);
      }
    }
  }, o[0] = a, o[1] = c, o[2] = d, o[3] = C;
  else C = o[3];
  let t = C, i;
  if (o[4] !== t) i = () => t("no"), o[4] = t, o[5] = i;
  else i = o[5];
  let P;
  if (o[6] === b) P = e(DPe, { bold: true, children: "ANTHROPIC_API_KEY" }), o[6] = P;
  else P = o[6];
  let u;
  if (o[7] !== a) u = r(n, { children: [P, r(n, { children: [": sk-ant-...", a] })] }), o[7] = a, o[8] = u;
  else u = o[8];
  let p;
  if (o[9] !== y || o[10] !== u) p = e(s, { paddingLeft: y, children: u }), o[9] = y, o[10] = u, o[11] = p;
  else p = o[11];
  let T;
  if (o[12] === b) T = e(n, { children: "Do you want to use this API key?" }), o[12] = T;
  else T = o[12];
  let k;
  if (o[13] === b) k = r(n, { children: ["No (", e(DPe, { bold: true, children: "recommended" }), ")"] }), o[13] = k;
  else k = o[13];
  let m;
  if (o[14] !== t) m = e(cr, { hideIndexes: true, focus: "cancel", cancelLabel: k, onConfirm: () => t("yes"), onCancel: () => t("no") }), o[14] = t, o[15] = m;
  else m = o[15];
  let K;
  if (o[16] !== i || o[17] !== p || o[18] !== m) K = r(we, { title: "Detected a custom API key in your environment", color: "warning", onCancel: i, exitOnCtrlCD: true, children: [p, T, m] }), o[16] = i, o[17] = p, o[18] = m, o[19] = K;
  else K = o[19];
  return K;
}
export {
  uur
};
