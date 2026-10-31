// linux/fs/async-hooks.93b1.js — Claude Code 2.1.310（linux）模块 chunk-2qx8pe6s.js
var s = globalThis.process?.getBuiltinModule?.("async_hooks"), bie = s ? (e) => s.AsyncResource.bind(e) : (e) => e;
function Ne(e) {
  if (!e) return false;
  if (typeof e === "boolean") return e;
  let n = String(e).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(n);
}
function is(e) {
  if (e === void 0) return false;
  if (typeof e === "boolean") return !e;
  let n = String(e).toLowerCase().trim();
  return ["0", "false", "no", "off"].includes(n);
}
function yk(e) {
  if (!e || e.startsWith("-") || e.startsWith("/")) return false;
  if (e.includes("..")) return false;
  if (e.split("/").some((n) => n === "." || n === "")) return false;
  return /^[a-zA-Z0-9/._+@-]+$/.test(e);
}
function De() {
  let e = /* @__PURE__ */ new Set();
  return { subscribe(n) {
    let r = bie(n);
    return e.add(r), () => {
      e.delete(r);
    };
  }, emit(...n) {
    let r;
    for (let o of e) try {
      o(...n);
    } catch (i) {
      (r ??= []).push(i);
    }
    if (r) throw r.length === 1 ? r[0] : AggregateError(r, "Signal listener(s) threw");
  }, clear() {
    e.clear();
  } };
}
var a = { english: "en", spanish: "es", español: "es", espanol: "es", french: "fr", français: "fr", francais: "fr", japanese: "ja", 日本語: "ja", german: "de", deutsch: "de", portuguese: "pt", português: "pt", portugues: "pt", italian: "it", italiano: "it", korean: "ko", 한국어: "ko", hindi: "hi", हिन्दी: "hi", हिंदी: "hi", indonesian: "id", "bahasa indonesia": "id", bahasa: "id", russian: "ru", русский: "ru", polish: "pl", polski: "pl", turkish: "tr", türkçe: "tr", turkce: "tr", dutch: "nl", nederlands: "nl", ukrainian: "uk", українська: "uk", greek: "el", ελληνικά: "el", czech: "cs", čeština: "cs", cestina: "cs", danish: "da", dansk: "da", swedish: "sv", svenska: "sv", norwegian: "no", norsk: "no" }, t = /* @__PURE__ */ new Set(["en", "es", "fr", "ja", "de", "pt", "it", "ko", "hi", "id", "ru", "pl", "tr", "nl", "uk", "el", "cs", "da", "sv", "no"]);
function jYe(e) {
  if (!e) return { code: "en" };
  let n = e.toLowerCase().trim();
  if (!n) return { code: "en" };
  if (t.has(n)) return { code: n };
  let r = a[n];
  if (r) return { code: r };
  let o = n.split("-")[0];
  if (o && t.has(o)) return { code: o };
  return { code: "en", fellBackFrom: e };
}
export {
  De,
  Ne,
  bie,
  is,
  jYe,
  yk
};
