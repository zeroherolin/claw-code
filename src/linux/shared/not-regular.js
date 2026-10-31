// linux/shared/not-regular.js — Claude Code 2.1.310（linux）模块 chunk-5tt7a3m0.js
import { uV } from "./project-docs.js";
import { rZe, THe } from "../fs/file-upload.js";
var W8e = /[\u202a-\u202e\u2066-\u2069]/;
function Hen(e) {
  return e !== "" && e !== "." && e !== ".." && e.length <= 255 && !/[/\\\p{Cc}]/u.test(e) && !W8e.test(e);
}
function _Un(e, r) {
  return THe(e, r);
}
function Len(e) {
  return e instanceof rZe ? "credential_name" : "path_rejected";
}
function HCs(e, r, a) {
  let t = HTr(r) === void 0 ? "Tell the user it was not attached." : "If the user wants it sent, ask them to attach it to the chat themselves.";
  return `Cannot attach "${e}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not sent on Claude's word alone. ${t} ${a}`;
}
function bUn(e, r, a) {
  let t = HTr(r), o = t === void 0 ? "Ask the user to share the file with this session, or to add its folder with /add-dir." : `Files the user attached to this chat are usually in ${t}; give the full path of one of those. If the file is not there, ask the user to attach it to the chat.`;
  return `Cannot attach "${e}": only files this session is allowed to read can be attached. ${o} ${a}`;
}
function HTr(e) {
  if (e.isRemoteMode !== true) return;
  try {
    return uV();
  } catch {
    return;
  }
}
var dbo = { too_large: true, hard_links: true, not_regular: true, moved: true, grew: true, open_failed: true, read_failed: true };
function SUn(e) {
  return Object.hasOwn(dbo, e);
}
function wUn(e, r, a, t) {
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
  HCs,
  HTr,
  Hen,
  Len,
  SUn,
  W8e,
  _Un,
  bUn,
  dbo,
  wUn
};
