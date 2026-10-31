// linux/shared/chunk-4ac8e96b.js — Claude Code 2.1.310（linux）模块 chunk-rc7xvf0x.js
function en(r) {
  let e = r / 1024;
  if (e < 1) return `${r} bytes`;
  if (e < 1024) return `${e.toFixed(1).replace(/\.0$/, "")}KB`;
  let t = e / 1024;
  if (t < 1024) return `${t.toFixed(1).replace(/\.0$/, "")}MB`;
  return `${(t / 1024).toFixed(1).replace(/\.0$/, "")}GB`;
}
function Q4t(r) {
  if (r < 1e3) return `${r} B`;
  if (r < 999500) return `${Math.round(r / 1e3)} kB`;
  return `${(r / 1e6).toFixed(1).replace(/\.0$/, "")} MB`;
}
export {
  Q4t,
  en
};
