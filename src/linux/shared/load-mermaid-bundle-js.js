// linux/shared/load-mermaid-bundle-js.js — Claude Code 2.1.310（linux）模块 chunk-axeech6e.js
import { __asset_path } from "../../runtime/assets.js";
import { Xft } from "../fs/chunk-2fdec4e0.js";
var D = __asset_path("vendor/mermaid.min.js");
var H = `/*! mermaid v11.16.1 | MIT | Copyright (c) 2014 - 2022 Knut Sveidqvist */
`;
async function J() {
  return H + await Xft(D, import.meta.dirname);
}
export {
  J as loadMermaidBundleJs
};
