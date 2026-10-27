// shared/load-mermaid-bundle-js.zsth.js — Claude Code 2.1.310 模块 chunk-zsth6qpw.js
import { __asset_path } from "../runtime/assets.js";
import { rft } from "../fs/chunk-m1c94bsz.js";
var D = __asset_path("vendor/mermaid.min.js");
var H = `/*! mermaid v11.16.1 | MIT | Copyright (c) 2014 - 2022 Knut Sveidqvist */
`;
async function J() {
  return H + await rft(D, import.meta.dirname);
}
export {
  J as loadMermaidBundleJs
};
