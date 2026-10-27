// shared/not-regular.kdmc.js — Claude Code 2.1.310 模块 chunk-kdmcaa31.js
import { EV } from "./project-docs.pfj1.js";
import { uZe, IHe } from "../fs/file-upload.g3fv.js";
var J8e = /[\u202a-\u202e\u2066-\u2069]/;
function Xen(e) {
  return e !== "" && e !== "." && e !== ".." && e.length <= 255 && !/[/\\\p{Cc}]/u.test(e) && !J8e.test(e);
}
function NUn(e, r) {
  return IHe(e, r);
}
function Jen(e) {
  return e instanceof uZe ? "credential_name" : "path_rejected";
}
function SRs(e, r, a) {
  let t = tTr(r) === void 0 ? "Tell the user it was not attached." : "If the user wants it sent, ask them to attach it to the chat themselves.";
  return `Cannot attach "${e}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not sent on Claude's word alone. ${t} ${a}`;
}
function FUn(e, r, a) {
  let t = tTr(r), o = t === void 0 ? "Ask the user to share the file with this session, or to add its folder with /add-dir." : `Files the user attached to this chat are usually in ${t}; give the full path of one of those. If the file is not there, ask the user to attach it to the chat.`;
  return `Cannot attach "${e}": only files this session is allowed to read can be attached. ${o} ${a}`;
}
function tTr(e) {
  if (e.isRemoteMode !== true) return;
  try {
    return EV();
  } catch {
    return;
  }
}
var $So = { too_large: true, hard_links: true, not_regular: true, moved: true, grew: true, open_failed: true, read_failed: true };
function $Un(e) {
  return Object.hasOwn($So, e);
}
function UUn(e, r, a, t) {
  switch (r) {
    case "too_large":
      return { error: `Cannot attach "${e}": files over ${a / 1048576} MiB cannot be attached. ${t}`, code: "too_large" };
    case "hard_links":
      return { error: `Cannot attach "${e}": the file has more than one hard link, which can point at a file outside the folders this session may read. Copy the file and attach the copy. ${t}`, code: "hard_links" };
    case "not_regular":
      return { error: `Cannot attach "${e}": it is not a regular file. Attach files one at a time, not a folder. ${t}`, code: "not_regular" };
    case "moved":
    case "grew":
    case "open_failed":
    case "read_failed":
      return { error: `Could not read "${e}". ${t}`, code: r };
  }
}
export {
  $So,
  $Un,
  FUn,
  J8e,
  Jen,
  NUn,
  SRs,
  UUn,
  Xen,
  tTr
};
