// linux/vendor/zod/string-format.js — Claude Code 2.1.310（linux）模块 chunk-0bqrj5ah.js
import { xar, c7o, Par, Iar, Oci, EEn, Mci, kEn, Pfe, Oar, tSe, Dci, Hci, u7o, TEn, Lci, h4t, f7o, Nci, mAt, I4e, yd, p7o, $ci, Q3r, m7o, Kwi, Vwi, qwi, Ywi, Xwi, Fci, Jwi, ixe, Uci, E$e, g7o, O4e, Z3r, e8r, Bci, y4t, sst, h7o, jci, jw, Qwi, Wci, Cr, M4e, Mar, BZ, jZ } from "../../fs/chunk-41037178.js";
function ns() {
  let e7 = this._zod;
  return e7.message ?? (e7.message = JSON.stringify(e7.def, Par, 2)), e7.message;
}
function is(e7) {
  this._zod.message = e7;
}
var ss = { get: ns, set: is, enumerable: true, configurable: true }, Ie = { value: void 0, enumerable: false }, Kt = new WeakSet([Object.prototype, Error.prototype]), Wt = (e7, t) => {
  e7.name = "$ZodError", Ie.value = t, Object.defineProperty(e7, "issues", Ie), Ie.value = void 0, Object.defineProperty(e7, "message", ss);
  let r = Object.getPrototypeOf(e7);
  if (!Kt.has(r)) Kt.add(r), Object.defineProperty(r, "toString", { configurable: true, enumerable: false, get() {
    let n = () => this.message;
    return Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true }), n;
  }, set(n) {
    Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true });
  } });
}, Gt = Cr("$ZodError", Wt), qt = Cr("$ZodError", Wt, void 0, { Parent: Error });
function cs(e7, t, r) {
  if (!Object.prototype.hasOwnProperty.call(e7, t)) if (t === "__proto__") Object.defineProperty(e7, t, { value: r(), writable: true, enumerable: true, configurable: true });
  else e7[t] = r();
  return e7[t];
}
function Yt(e7, t = (r) => r.message) {
  let r = {}, n = [];
  for (let i of e7.issues) if (i.path.length > 0) cs(r, i.path[0], () => []).push(t(i));
  else n.push(t(i));
  return { formErrors: n, fieldErrors: r };
}
function Xt(e7, t = (r) => r.message) {
  let r = { _errors: [] }, n = (i, s = []) => {
    for (let c of i.issues) if (c.code === "invalid_union" && c.errors.length) c.errors.map((a) => n({ issues: a }, [...s, ...c.path]));
    else if (c.code === "invalid_key") n({ issues: c.issues }, [...s, ...c.path]);
    else if (c.code === "invalid_element") n({ issues: c.issues }, [...s, ...c.path]);
    else {
      let a = [...s, ...c.path];
      if (a.length === 0) r._errors.push(t(c));
      else {
        let l = r, p = 0;
        while (p < a.length) {
          let f = a[p], d = p === a.length - 1;
          if (f === "_errors") {
            if (d) l._errors.push(t(c));
            p++;
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(l, f)) Object.defineProperty(l, f, { value: { _errors: [] }, enumerable: true, writable: true, configurable: true });
          let _ = l[f];
          if (d) _._errors.push(t(c));
          l = _, p++;
        }
      }
    }
  };
  return n(e7), r;
}
function se(e7, t) {
  return { callee: t?.callee ?? e7, Err: t?.Err };
}
var ce = (e7) => {
  let t = (r, n, i, s) => {
    let c = i ? { ...i, async: false } : { async: false }, a = r._zod.run({ value: n, issues: [] }, c);
    if (a instanceof Promise) throw new M4e();
    if (a.issues.length) {
      let l = new (s?.Err ?? e7)(a.issues.map((p) => O4e(p, c, jZ())));
      throw u7o(l, s?.callee ?? t), l;
    }
    return a.value;
  };
  return t;
};
var ue = (e7) => {
  let t = async (r, n, i, s) => {
    let c = i ? { ...i, async: true } : { async: true }, a = r._zod.run({ value: n, issues: [] }, c);
    if (a instanceof Promise) a = await a;
    if (a.issues.length) {
      let l = new (s?.Err ?? e7)(a.issues.map((p) => O4e(p, c, jZ())));
      throw u7o(l, s?.callee ?? t), l;
    }
    return a.value;
  };
  return t;
};
var J = (e7) => (t, r, n) => {
  let i = n ? { ...n, async: false } : { async: false }, s = t._zod.run({ value: r, issues: [] }, i);
  if (s instanceof Promise) throw new M4e();
  return s.issues.length ? Qt(e7, s.issues, i) : { success: true, data: s.value };
}, s7o = J(qt);
function Qt(e7, t, r) {
  let n;
  return { success: false, get error() {
    if (!n) n = new e7(t.map((i) => O4e(i, r, jZ()))), t = void 0, r = void 0;
    return n;
  }, set error(i) {
    n = i, t = void 0, r = void 0;
  } };
}
var ae = (e7) => async (t, r, n) => {
  let i = n ? { ...n, async: true } : { async: true }, s = t._zod.run({ value: r, issues: [] }, i);
  if (s instanceof Promise) s = await s;
  return s.issues.length ? Qt(e7, s.issues, i) : { success: true, data: s.value };
};
var as = Symbol.for("zod.compile.invalid"), ls = Symbol.for("zod.compile.fallback"), Oe = (e7, t, r) => {
  let n = e7._zod.bag.validator;
  if (n !== void 0) {
    if (n(t) !== as) return true;
    if (n.definite === true && r === void 0) return false;
  }
  return ps(e7, t, r);
};
function ps(e7, t, r) {
  let n = r ? { ...r, async: false, abortEarly: true } : { async: false, abortEarly: true }, i = e7._zod.bag.fallbackRun, s;
  if (i) n[ls] = true, s = i({ value: t, issues: [] }, n);
  else s = e7._zod.run({ value: t, issues: [] }, n);
  if (s instanceof Promise) throw new M4e();
  return s.issues.length === 0;
}
var Ae = async (e7, t, r) => {
  let n = r ? { ...r, async: true, abortEarly: true } : { async: true, abortEarly: true }, i = e7._zod.run({ value: t, issues: [] }, n);
  if (i instanceof Promise) i = await i;
  return i.issues.length === 0;
}, er = (e7) => {
  let t = ce(e7), r = (n, i, s, c) => {
    let a = s ? { ...s, direction: "backward" } : { direction: "backward" };
    return t(n, i, a, se(r, c));
  };
  return r;
};
var tr = (e7) => {
  let t = ce(e7), r = (n, i, s, c) => t(n, i, s, se(r, c));
  return r;
};
var rr = (e7) => {
  let t = ue(e7), r = async (n, i, s, c) => {
    let a = s ? { ...s, direction: "backward" } : { direction: "backward" };
    return await t(n, i, a, se(r, c));
  };
  return r;
};
var or = (e7) => {
  let t = ue(e7), r = async (n, i, s, c) => await t(n, i, s, se(r, c));
  return r;
};
var nr = (e7) => (t, r, n) => {
  let i = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return J(e7)(t, r, i);
};
var ir = (e7) => (t, r, n) => J(e7)(t, r, n);
var sr = (e7) => async (t, r, n) => {
  let i = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return ae(e7)(t, r, i);
};
var cr = (e7) => async (t, r, n) => ae(e7)(t, r, n);
var ur = /^[cC][0-9a-z]{6,}$/, ar = /^[0-9a-z]+$/, lr = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, pr = /^[0-9a-vA-V]{20}$/, fr = /^[A-Za-z0-9]{27}$/, dr = /^[a-zA-Z0-9_-]{21}$/;
function mr(e7) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e7}}$`);
}
var hr = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var _r = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Te = (e7) => {
  if (!e7) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e7}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var gr = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var fs = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function xr() {
  return new RegExp(fs, "u");
}
var vr = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var $r = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, zr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, br = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, kr = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var Zr = /^https?$/, wr = /^\+[1-9]\d{6,14}$/;
var Pr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function ds(e7) {
  return new RegExp(`^${e7}$`);
}
var Sr = ds(Pr);
function Ee(e7) {
  return typeof e7.precision === "number" ? e7.precision === -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : e7.precision === 0 ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e7.precision}}` : e7.seconds ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?" : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function Ir(e7) {
  return new RegExp(`^${Ee(e7)}$`);
}
function Or(e7) {
  let t = ["Z"];
  if (e7.offset) t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let r = `${Ee({ precision: e7.precision, seconds: true })}(?:${t.join("|")})`, n = e7.local ? `${r}|${Ee({ precision: e7.precision })}` : r;
  return new RegExp(`^${Pr}T(?:${n})$`);
}
var Ar = /^[\s\S]{0,}$/;
var Ne = /^-?\d+$/, V = /^-?\d+(?:\.\d+)?$/, Er = /^(?:true|false)$/i, Tr = /^null$/i;
var Nr = /^undefined$/i;
var Rr = /^[^A-Z]*$/, Dr = /^[^a-z]*$/;
var i2 = Cr("$ZodCheck", (e7, t) => {
  var r;
  e7._zod ?? (e7._zod = {}), e7._zod.def = t, (r = e7._zod).onattach ?? (r.onattach = []);
});
var Ce = (e7) => {
  let t = e7.value;
  return !Oci(t) && t.length !== void 0;
}, le = { number: "number", bigint: "bigint", object: "date" }, Re = Cr("$ZodCheckLessThan", (e7, t) => {
  i2.init(e7, t);
  let r = le[typeof t.value];
  e7._zod.check = (n) => {
    if (t.inclusive ? n.value <= t.value : n.value < t.value) return;
    n.issues.push({ origin: le[typeof n.value] ?? r, code: "too_big", maximum: typeof t.value === "object" ? t.value.getTime() : t.value, input: n.value, inclusive: t.inclusive, inst: e7, continue: !t.abort });
  };
}), De = Cr("$ZodCheckGreaterThan", (e7, t) => {
  i2.init(e7, t);
  let r = le[typeof t.value];
  e7._zod.check = (n) => {
    if (t.inclusive ? n.value >= t.value : n.value > t.value) return;
    n.issues.push({ origin: le[typeof n.value] ?? r, code: "too_small", minimum: typeof t.value === "object" ? t.value.getTime() : t.value, input: n.value, inclusive: t.inclusive, inst: e7, continue: !t.abort });
  };
}), jr = Cr("$ZodCheckMultipleOf", (e7, t) => {
  i2.init(e7, t), e7._zod.check = (r) => {
    if (typeof r.value !== typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
    if (typeof r.value === "bigint" ? t.value !== BigInt(0) && r.value % t.value === BigInt(0) : Mci(r.value, t.value) === 0) return;
    r.issues.push({ origin: typeof r.value, code: "not_multiple_of", divisor: t.value, input: r.value, inst: e7, continue: !t.abort });
  };
}), Lr = Cr("$ZodCheckNumberFormat", (e7, t) => {
  i2.init(e7, t), t.format = t.format || "float64";
  let r = t.format?.includes("int"), n = r ? "int" : "number", [i, s] = Q3r[t.format];
  e7._zod.check = (c) => {
    let a = c.value;
    if (r) {
      if (!Number.isInteger(a)) {
        c.issues.push({ expected: n, format: t.format, code: "invalid_type", continue: false, input: a, inst: e7 });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        if (a > 0) c.issues.push({ input: a, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e7, origin: n, inclusive: true, continue: !t.abort });
        else c.issues.push({ input: a, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e7, origin: n, inclusive: true, continue: !t.abort });
        return;
      }
    }
    if (a < i) c.issues.push({ origin: "number", input: a, code: "too_small", minimum: i, inclusive: true, inst: e7, continue: !t.abort });
    if (a > s) c.issues.push({ origin: "number", input: a, code: "too_big", maximum: s, inclusive: true, inst: e7, continue: !t.abort });
  };
});
var Fr = Cr("$ZodCheckMaxLength", (e7, t) => {
  var r;
  i2.init(e7, t), (r = e7._zod.def).when ?? (r.when = Ce), e7._zod.check = (n) => {
    let i = n.value, s = i.length;
    if ((typeof i === "string" && s > t.maximum ? Z3r(i) : s) <= t.maximum) return;
    let a = e8r(i);
    n.issues.push({ origin: a, code: "too_big", maximum: t.maximum, inclusive: true, input: i, inst: e7, continue: !t.abort });
  };
}), Mr = Cr("$ZodCheckMinLength", (e7, t) => {
  var r;
  i2.init(e7, t), (r = e7._zod.def).when ?? (r.when = Ce), e7._zod.check = (n) => {
    let i = n.value, s = i.length;
    if ((typeof i === "string" && s >= t.minimum && s < t.minimum * 2 ? Z3r(i) : s) >= t.minimum) return;
    let a = e8r(i);
    n.issues.push({ origin: a, code: "too_small", minimum: t.minimum, inclusive: true, input: i, inst: e7, continue: !t.abort });
  };
}), Ur = Cr("$ZodCheckLengthEquals", (e7, t) => {
  var r;
  i2.init(e7, t), (r = e7._zod.def).when ?? (r.when = Ce), e7._zod.check = (n) => {
    let i = n.value, s = i.length, c = typeof i === "string" && s >= t.length && s <= t.length * 2 ? Z3r(i) : s;
    if (c === t.length) return;
    let a = e8r(i), l = c > t.length;
    n.issues.push({ origin: a, ...l ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }, inclusive: true, exact: true, input: n.value, inst: e7, continue: !t.abort });
  };
}), W = Cr("$ZodCheckStringFormat", (e7, t) => {
  var r, n;
  if (i2.init(e7, t), t.pattern) (r = e7._zod).check ?? (r.check = (i) => {
    if (t.pattern.lastIndex = 0, t.pattern.test(i.value)) return;
    i.issues.push({ origin: "string", code: "invalid_format", format: t.format, input: i.value, ...t.pattern ? { pattern: t.pattern.toString() } : {}, inst: e7, continue: !t.abort });
  });
  else (n = e7._zod).check ?? (n.check = () => {
  });
}), Jr = Cr("$ZodCheckRegex", (e7, t) => {
  W.init(e7, t), e7._zod.check = (r) => {
    if (t.pattern.lastIndex = 0, t.pattern.test(r.value)) return;
    r.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: r.value, pattern: t.pattern.toString(), inst: e7, continue: !t.abort });
  };
}), Br = Cr("$ZodCheckLowerCase", (e7, t) => {
  t.pattern ?? (t.pattern = Rr), W.init(e7, t);
}), Vr = Cr("$ZodCheckUpperCase", (e7, t) => {
  t.pattern ?? (t.pattern = Dr), W.init(e7, t);
}), Kr = Cr("$ZodCheckIncludes", (e7, t) => {
  i2.init(e7, t);
  let r = mAt(t.includes), n = new RegExp(typeof t.position === "number" ? `^.{${t.position},}${r}` : r);
  t.pattern = n, e7._zod.check = (i) => {
    if (i.value.includes(t.includes, t.position)) return;
    i.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t.includes, input: i.value, inst: e7, continue: !t.abort });
  };
}), Wr = Cr("$ZodCheckStartsWith", (e7, t) => {
  i2.init(e7, t);
  let r = new RegExp(`^${mAt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e7._zod.check = (n) => {
    if (n.value.startsWith(t.prefix)) return;
    n.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t.prefix, input: n.value, inst: e7, continue: !t.abort });
  };
}), qr = Cr("$ZodCheckEndsWith", (e7, t) => {
  i2.init(e7, t);
  let r = new RegExp(`.*${mAt(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e7._zod.check = (n) => {
    if (n.value.endsWith(t.suffix)) return;
    n.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t.suffix, input: n.value, inst: e7, continue: !t.abort });
  };
});
var Yr = Cr("$ZodCheckOverwrite", (e7, t) => {
  i2.init(e7, t), e7._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class je {
  constructor(e7 = [], t = {}) {
    this.content = [], this.indent = 0, this.args = e7, this.closed = t;
  }
  indented(e7) {
    this.indent += 1;
    try {
      e7(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(e7) {
    if (typeof e7 === "function") {
      e7(this, { execution: "sync" }), e7(this, { execution: "async" });
      return;
    }
    let r = e7.split(`
`).filter((s) => s), n = Math.min(...r.map((s) => s.length - s.trimStart().length)), i = r.map((s) => s.slice(n)).map((s) => " ".repeat(this.indent * 2) + s);
    for (let s of i) this.content.push(s);
  }
  compile() {
    let e7 = Function, t = this?.content ?? [""];
    return new e7(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${t.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
var Hr = { major: 4, minor: 6, patch: 2 };
var dk = Cr("$ZodType", (e7, t) => {
  var r;
  e7 ?? (e7 = {}), e7._zod.def = t, e7._zod.bag = e7._zod.bag || {}, e7._zod.version = Hr;
  let n = e7._zod.def.checks, i = e7._zod.traits.has("$ZodCheck") ? [e7, ...n ?? []] : n?.length ? [...n] : [];
  for (let s of i) for (let c of s._zod.onattach) c(e7);
  if (i.length === 0) (r = e7._zod).deferred ?? (r.deferred = []), e7._zod.deferred?.push(() => {
    e7._zod.run = e7._zod.parse;
  });
  else {
    let s = (a, l, p) => {
      if (a.memo) return a;
      let f = ixe(a), d;
      for (let _ of l) {
        if (_._zod.def.when) {
          if (Uci(a)) continue;
          if (!_._zod.def.when(a)) continue;
        } else if (f) continue;
        let m = a.issues.length, h = _._zod.check(a);
        if (h instanceof Promise && p?.async === false) throw new M4e();
        if (d || h instanceof Promise) d = (d ?? Promise.resolve()).then(async () => {
          if (await h, a.issues.length === m) return;
          if (g7o(a.issues, m, e7), !f) f = ixe(a, m);
        });
        else {
          if (a.issues.length === m) continue;
          if (g7o(a.issues, m, e7), !f) f = ixe(a, m);
        }
      }
      if (d) return d.then(() => a);
      return a;
    }, c = (a, l, p) => {
      if (ixe(a)) return a.aborted = true, a;
      let f = s(l, i, p);
      if (f instanceof Promise) {
        if (p.async === false) throw new M4e();
        return f.then((d) => e7._zod.parse(d, p));
      }
      return e7._zod.parse(f, p);
    };
    e7._zod.run = (a, l) => {
      if (l.skipChecks) return e7._zod.parse(a, l);
      if (l.direction === "backward") {
        let f = e7._zod.parse({ value: a.value, issues: [] }, { ...l, skipChecks: true });
        if (f instanceof Promise) return f.then((d) => c(d, a, l));
        return c(f, a, l);
      }
      let p = e7._zod.parse(a, l);
      if (p instanceof Promise) {
        if (l.async === false) throw new M4e();
        return p.then((f) => s(f, i, l));
      }
      return s(p, i, l);
    };
  }
}, { get "~standard"() {
  return h7o(this, "~standard", Fe(this));
}, set "~standard"(e7) {
  sst(this, "~standard", e7);
} }), fo = (e7, t) => e7.issues.length ? { issues: e7.issues.map((r) => O4e(r, t, jZ())) } : { value: e7.value };
async function ms(e7, t) {
  let r = { async: true };
  return fo(await e7._zod.run({ value: t, issues: [] }, r), r);
}
function Fe(e7) {
  return { validate: (t) => {
    let r = { async: false };
    try {
      let n = e7._zod.run({ value: t, issues: [] }, r);
      if (!(n instanceof Promise)) return fo(n, r);
    } catch (n) {
    }
    return ms(e7, t);
  }, vendor: "zod", version: 1 };
}
var de = Cr("$ZodString", (e7, t) => {
  dk.init(e7, t), e7._zod.pattern = t.pattern ?? Ar, e7._zod.parse = (r, n) => {
    if (t.coerce) try {
      r.value = String(r.value);
    } catch (i) {
    }
    if (typeof r.value === "string") return r;
    return r.issues.push({ expected: "string", code: "invalid_type", input: r.value, inst: e7 }), r;
  };
}), b = Cr("$ZodStringFormat", (e7, t) => {
  W.init(e7, t), de.init(e7, t);
}), mo = Cr("$ZodGUID", (e7, t) => {
  t.pattern ?? (t.pattern = _r), b.init(e7, t);
}), ho = Cr("$ZodUUID", (e7, t) => {
  if (t.version) {
    let n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
    if (n === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Te(n));
  } else t.pattern ?? (t.pattern = Te());
  b.init(e7, t);
}), _o = Cr("$ZodEmail", (e7, t) => {
  t.pattern ?? (t.pattern = gr), b.init(e7, t);
}), go = 1, xo = 2;
function hs(e7, t) {
  if (!t.normalize && t.protocol?.source === Zr.source && !/^https?:\/\//i.test(e7)) return go;
  try {
    return new URL(e7);
  } catch {
    return xo;
  }
}
var _s = /[\t\n\r]/g;
function gs(e7) {
  return e7.replace(_s, "");
}
function xs(e7, t) {
  return t.lastIndex = 0, t.test(e7.hostname);
}
function vs(e7, t) {
  return t.lastIndex = 0, t.test(e7.protocol.endsWith(":") ? e7.protocol.slice(0, -1) : e7.protocol);
}
var vo = Cr("$ZodURL", (e7, t) => {
  b.init(e7, t), e7._zod.check = (r) => {
    try {
      let n = r.value.trim(), i = hs(n, t);
      if (i === go) {
        r.issues.push({ code: "invalid_format", format: "url", note: "Invalid URL format", input: r.value, inst: e7, continue: !t.abort });
        return;
      }
      if (i === xo) {
        r.issues.push({ code: "invalid_format", format: "url", input: r.value, inst: e7, continue: !t.abort });
        return;
      }
      if (t.hostname && !xs(i, t.hostname)) r.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t.hostname.source, input: r.value, inst: e7, continue: !t.abort });
      if (t.protocol && !vs(i, t.protocol)) r.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t.protocol.source, input: r.value, inst: e7, continue: !t.abort });
      r.value = t.normalize ? i.href : gs(n);
      return;
    } catch (n) {
      r.issues.push({ code: "invalid_format", format: "url", input: r.value, inst: e7, continue: !t.abort });
    }
  };
}), yo = Cr("$ZodEmoji", (e7, t) => {
  t.pattern ?? (t.pattern = xr()), b.init(e7, t);
}), $o = Cr("$ZodNanoID", (e7, t) => {
  if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
  t.pattern ?? (t.pattern = t.length === void 0 ? dr : mr(t.length)), b.init(e7, t);
}), zo = Cr("$ZodCUID", (e7, t) => {
  t.pattern ?? (t.pattern = ur), b.init(e7, t);
}), bo = Cr("$ZodCUID2", (e7, t) => {
  t.pattern ?? (t.pattern = ar), b.init(e7, t);
}), ko = Cr("$ZodULID", (e7, t) => {
  t.pattern ?? (t.pattern = lr), b.init(e7, t);
}), Zo = Cr("$ZodXID", (e7, t) => {
  t.pattern ?? (t.pattern = pr), b.init(e7, t);
}), wo = Cr("$ZodKSUID", (e7, t) => {
  t.pattern ?? (t.pattern = fr), b.init(e7, t);
}), Po = Cr("$ZodISODateTime", (e7, t) => {
  t.pattern ?? (t.pattern = Or(t)), b.init(e7, t);
}), So = Cr("$ZodISODate", (e7, t) => {
  t.pattern ?? (t.pattern = Sr), b.init(e7, t);
}), Io = Cr("$ZodISOTime", (e7, t) => {
  t.pattern ?? (t.pattern = Ir(t)), b.init(e7, t);
}), Oo = Cr("$ZodISODuration", (e7, t) => {
  t.pattern ?? (t.pattern = hr), b.init(e7, t);
}), Ao = Cr("$ZodIPv4", (e7, t) => {
  t.pattern ?? (t.pattern = vr), b.init(e7, t);
}), ys = /^[0-9a-fA-F:.]+$/;
function Eo(e7) {
  if (!ys.test(e7)) return false;
  try {
    return new URL(`http://[${e7}]`), true;
  } catch {
    return false;
  }
}
var To = Cr("$ZodIPv6", (e7, t) => {
  t.pattern ?? (t.pattern = yr), b.init(e7, t), e7._zod.check = (r) => {
    if (!Eo(r.value)) r.issues.push({ code: "invalid_format", format: "ipv6", input: r.value, inst: e7, continue: !t.abort });
  };
});
var No = Cr("$ZodCIDRv4", (e7, t) => {
  t.pattern ?? (t.pattern = $r), b.init(e7, t);
});
function $s(e7) {
  let t = e7.split("/");
  if (t.length !== 2) return false;
  let [r, n] = t;
  if (!n) return false;
  let i = Number(n);
  if (`${i}` !== n) return false;
  if (i < 0 || i > 128) return false;
  return Eo(r);
}
var Co = Cr("$ZodCIDRv6", (e7, t) => {
  t.pattern ?? (t.pattern = zr), b.init(e7, t), e7._zod.check = (r) => {
    if (!$s(r.value)) r.issues.push({ code: "invalid_format", format: "cidrv6", input: r.value, inst: e7, continue: !t.abort });
  };
});
function Ro(e7) {
  if (e7 === "") return true;
  if (/\s/.test(e7)) return false;
  if (e7.length % 4 !== 0) return false;
  try {
    return atob(e7), true;
  } catch {
    return false;
  }
}
var Me = /^[0-9a-zA-Z+/]*={0,2}$/, Do = Cr("$ZodBase64", (e7, t) => {
  t.pattern ?? (t.pattern = Me), b.init(e7, t), e7._zod.check = (r) => {
    if (Ro(r.value)) return;
    r.issues.push({ code: "invalid_format", format: "base64", input: r.value, inst: e7, continue: !t.abort });
  };
}), he = /^[A-Za-z0-9_-]*$/;
function zs(e7) {
  if (!he.test(e7)) return false;
  let t = e7.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ro(r);
}
var jo = Cr("$ZodBase64URL", (e7, t) => {
  t.pattern ?? (t.pattern = he), b.init(e7, t), e7._zod.check = (r) => {
    if (zs(r.value)) return;
    r.issues.push({ code: "invalid_format", format: "base64url", input: r.value, inst: e7, continue: !t.abort });
  };
}), Lo = Cr("$ZodE164", (e7, t) => {
  t.pattern ?? (t.pattern = wr), b.init(e7, t);
});
function bs(e7, t = null) {
  try {
    let r = e7.split(".");
    if (r.length !== 3) return false;
    let [n] = r;
    if (!n) return false;
    let i = JSON.parse(atob(n));
    if ("typ" in i && i?.typ !== "JWT") return false;
    if (!i.alg) return false;
    if (t && (!("alg" in i) || i.alg !== t)) return false;
    return true;
  } catch {
    return false;
  }
}
var Fo = Cr("$ZodJWT", (e7, t) => {
  b.init(e7, t), e7._zod.check = (r) => {
    if (bs(r.value, t.alg)) return;
    r.issues.push({ code: "invalid_format", format: "jwt", input: r.value, inst: e7, continue: !t.abort });
  };
});
var Je = Cr("$ZodNumber", (e7, t) => {
  dk.init(e7, t), e7._zod.pattern = V, e7._zod.parse = (r, n) => {
    if (t.coerce) try {
      r.value = Number(r.value);
    } catch (c) {
    }
    let i = r.value;
    if (typeof i === "number" && !Number.isNaN(i) && Number.isFinite(i)) return r;
    let s = typeof i === "number" ? Number.isNaN(i) ? "NaN" : !Number.isFinite(i) ? String(i) : void 0 : void 0;
    return r.issues.push({ expected: "number", code: "invalid_type", input: i, inst: e7, ...s ? { received: s } : {} }), r;
  };
}), Mo = Cr("$ZodNumberFormat", (e7, t) => {
  Lr.init(e7, t), Je.init(e7, t);
}), Uo = Cr("$ZodBoolean", (e7, t) => {
  dk.init(e7, t), e7._zod.pattern = Er, e7._zod.parse = (r, n) => {
    if (t.coerce) try {
      r.value = Boolean(r.value);
    } catch (s) {
    }
    let i = r.value;
    if (typeof i === "boolean") return r;
    return r.issues.push({ expected: "boolean", code: "invalid_type", input: i, inst: e7 }), r;
  };
});
var Jo = Cr("$ZodUndefined", (e7, t) => {
  dk.init(e7, t), e7._zod.pattern = Nr, e7._zod.values = /* @__PURE__ */ new Set([void 0]), e7._zod.parse = (r, n) => {
    let i = r.value;
    if (typeof i > "u") return r;
    return r.issues.push({ expected: "undefined", code: "invalid_type", input: i, inst: e7 }), r;
  };
}), Bo = Cr("$ZodNull", (e7, t) => {
  dk.init(e7, t), e7._zod.pattern = Tr, e7._zod.values = /* @__PURE__ */ new Set([null]), e7._zod.parse = (r, n) => {
    let i = r.value;
    if (i === null) return r;
    return r.issues.push({ expected: "null", code: "invalid_type", input: i, inst: e7 }), r;
  };
}), Vo = Cr("$ZodAny", (e7, t) => {
  dk.init(e7, t), e7._zod.parse = (r) => r;
}), Ko = Cr("$ZodUnknown", (e7, t) => {
  dk.init(e7, t), e7._zod.parse = (r) => r;
}), Wo = Cr("$ZodNever", (e7, t) => {
  dk.init(e7, t), e7._zod.parse = (r, n) => (r.issues.push({ expected: "never", code: "invalid_type", input: r.value, inst: e7 }), r);
});
function Qr(e7, t, r) {
  if (e7.issues.length) t.issues.push(...E$e(r, e7.issues));
  t.value[r] = e7.value;
}
var Go = Cr("$ZodArray", (e7, t) => {
  dk.init(e7, t);
  let r = BZ.memoizer;
  r?.attach(e7), e7._zod.parse = (n, i) => {
    let s = n.value;
    if (!Array.isArray(s)) return n.issues.push({ expected: "array", code: "invalid_type", input: s, inst: e7 }), n;
    n.value = r ? r.alloc(e7, n, Array(s.length), i) : Array(s.length);
    let c = [], a = i?.abortEarly;
    for (let l = 0; l < s.length; l++) {
      let p = s[l], f = t.element._zod.run({ value: p, issues: [] }, i);
      if (f instanceof Promise) c.push(f.then((d) => Qr(d, n, l)));
      else if (Qr(f, n, l), a && f.issues.length !== 0 && ixe(f)) break;
    }
    if (c.length) return Promise.all(c).then(() => n);
    return n;
  };
});
function fe(e7, t, r, n, i, s) {
  let c = r in n, a = s === "optional";
  if (!c && a && i === "optional") return;
  if (e7.issues.length) {
    if (i !== void 0 && a && !c) return;
    t.issues.push(...E$e(r, e7.issues));
  }
  if (!c && i === void 0) {
    if (!e7.issues.length) t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [r] });
    return;
  }
  if (e7.value === void 0) {
    if (c || i === "defaulted" && !a) t.value[r] = void 0;
  } else t.value[r] = e7.value;
}
var ks = [];
function qo(e7) {
  let t = Object.keys(e7.shape), r = Object.getOwnPropertySymbols(e7.shape), n = r.length ? r : ks, i = n.length ? [...t, ...n] : t;
  for (let c of i) if (!e7.shape?.[c]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
  let s = $ci(e7.shape);
  return { ...e7, allKeys: i, symbolKeys: n, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(s) };
}
function Yo(e7, t, r, n, i, s, c) {
  let a = [], l = i.keySet, p = i.catchall._zod, f = p.def.type, { optin: d, optout: _ } = p, m = 0;
  for (let h in t) {
    if (c && r.issues.length !== m) {
      if (ixe(r, m)) break;
      m = r.issues.length;
    }
    if (l.has(h)) continue;
    if (h === "__proto__") {
      if (f === "never") a.push(h);
      continue;
    }
    if (f === "never") {
      a.push(h);
      continue;
    }
    let g = p.run({ value: t[h], issues: [] }, n);
    if (g instanceof Promise) e7.push(g.then((x) => fe(x, r, h, t, d, _)));
    else fe(g, r, h, t, d, _);
  }
  if (a.length) r.issues.push({ code: "unrecognized_keys", keys: a, input: t, inst: s, continue: true });
  if (!e7.length) return r;
  return Promise.all(e7).then(() => r);
}
var Zs = Cr("$ZodObject", (e7, t) => {
  dk.init(e7, t);
  let r = Object.getOwnPropertyDescriptor(t, "shape"), n = r?.get ? r.get.raw : t.shape ?? {};
  if (n) {
    let p = () => {
      let f = { ...n };
      return Object.defineProperty(t, "shape", { value: f }), p.raw = f, f;
    };
    p.raw = n, Object.defineProperty(t, "shape", { get: p });
  }
  let i = Iar(() => qo(t));
  jw(e7, "propValues", (p) => {
    let f = p.def.shape, d = {};
    for (let _ in f) {
      let m = f[_]._zod;
      if (m.values) {
        if (!Object.prototype.hasOwnProperty.call(d, _)) Pfe(d, _, /* @__PURE__ */ new Set());
        for (let h of m.values) d[_].add(h);
        if (m.optin !== void 0) d[_].add(void 0);
      }
    }
    return d;
  });
  let s = TEn, c = t.catchall, a, l = BZ.memoizer;
  l?.attach(e7), e7._zod.parse = (p, f) => {
    a ?? (a = i.value);
    let d = p.value;
    if (!s(d)) return p.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e7 }), p;
    p.value = l ? l.alloc(e7, p, {}, f) : {};
    let _ = [], m = a.shape, h = f?.abortEarly, g = p.issues.length;
    for (let x of a.allKeys) {
      if (h && p.issues.length !== g) {
        if (ixe(p, g)) break;
        g = p.issues.length;
      }
      if (x === "__proto__") continue;
      let y = m[x], O = y._zod.optin, F = y._zod.optout, U = y._zod.run({ value: d[x], issues: [] }, f);
      if (U instanceof Promise) _.push(U.then((w) => fe(w, p, x, d, O, F)));
      else fe(U, p, x, d, O, F);
    }
    if (!c) return _.length ? Promise.all(_).then(() => p) : p;
    return Yo(_, d, p, f, i.value, e7, h === true);
  };
}), Xo = Cr("$ZodObjectJIT", (e7, t) => {
  Zs.init(e7, t);
  let r = e7._zod.parse, n = Iar(() => qo(t)), i = BZ.memoizer, s = (m) => {
    let h = n.value, g = h.symbolKeys, x = new je(["payload", "ctx"], { shape: m, inst: e7, memo: i, syms: g }), y = (w) => `shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`, O = (w, z) => `
          let ${w}_ab = false;
          for (let i = 0; i < ${w}.issues.length; i++) {
            const iss = ${w}.issues[i];
            iss.path = iss.path ? [${z}, ...iss.path] : [${z}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${w}_ab = true;
          }
          if (${w}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    x.write("const input = payload.value;");
    let F = /* @__PURE__ */ Object.create(null), U = 0;
    for (let w of h.allKeys) F[w] = `key_${U++}`;
    x.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (let w of h.allKeys) {
      if (w === "__proto__") continue;
      let z = F[w], E = typeof w === "symbol" ? `syms[${g.indexOf(w)}]` : Dci(w), Pe = `${E} in input`, Bt = m[w], Se = Bt?._zod?.optin, Vt = Se !== void 0, rs = Bt?._zod?.optout === "optional";
      if (x.write(`const ${z} = ${y(E)};`), Vt && rs) {
        let os = Se === "optional" ? `${z}_present` : `${z}.value !== undefined || ${z}_present`;
        x.write(`
        const ${z}_present = ${Pe};
        if (!${z}.issues.length || ${z}_present) {
          if (${z}.issues.length) {${O(z, E)}
          }

          if (${os}) {
            newResult[${E}] = ${z}.value;
          }
        }

      `);
      } else if (!Vt) x.write(`
        const ${z}_present = ${Pe};
        if (${z}.issues.length) {${O(z, E)}
        }
        if (!${z}_present && !${z}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${E}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${z}_present) {
          newResult[${E}] = ${z}.value;
        }

      `);
      else if (x.write(`
        if (${z}.issues.length) {${O(z, E)}
        }
      `), Se === "defaulted") x.write(`newResult[${E}] = ${z}.value;`);
      else x.write(`
        if (${z}.value !== undefined || ${Pe}) {
          newResult[${E}] = ${z}.value;
        }
      `);
    }
    return x.write("payload.value = newResult;"), x.write("return payload;"), x.compile();
  }, c, a = TEn, l = !BZ.jitless, f = l && Lci.value, d = t.catchall, _;
  e7._zod.parse = (m, h) => {
    _ ?? (_ = n.value);
    let g = m.value;
    if (!a(g)) return m.issues.push({ expected: "object", code: "invalid_type", input: g, inst: e7 }), m;
    if (l && f && h?.async === false && h.jitless !== true) {
      if (!c) c = s(t.shape);
      if (m = c(m, h), !d) return m;
      return Yo([], g, m, h, _, e7, h?.abortEarly === true);
    }
    return r(m, h);
  };
});
function eo(e7, t, r, n) {
  for (let s of e7) if (s.issues.length === 0) return t.value = s.value, t;
  let i = e7.filter((s) => !ixe(s));
  if (i.length === 1) return t.value = i[0].value, i[0];
  return t.issues.push({ code: "invalid_union", input: t.value, inst: r, errors: e7.map((s) => s.issues.map((c) => O4e(c, n, jZ()))) }), t;
}
var Be = Cr("$ZodUnion", (e7, t) => {
  dk.init(e7, t), jw(e7, "optin", (n) => n.def.options.some((i) => i._zod.optin === "defaulted") ? "defaulted" : n.def.options.some((i) => i._zod.optin !== void 0) ? "optional" : void 0), jw(e7, "optout", (n) => n.def.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), jw(e7, "values", (n) => {
    if (n.def.options.every((i) => i._zod.values)) return new Set(n.def.options.flatMap((i) => Array.from(i._zod.values)));
    return;
  }), jw(e7, "pattern", (n) => {
    if (n.def.options.every((i) => i._zod.pattern)) {
      let i = n.def.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${i.map((s) => EEn(s.source)).join("|")})$`);
    }
    return;
  });
  let r = t.options.length === 1 ? t.options[0]._zod.run : null;
  e7._zod.parse = (n, i) => {
    if (r) return r(n, i);
    let s = false, c = [];
    for (let a of t.options) {
      let l = a._zod.run({ value: n.value, issues: [] }, i);
      if (l instanceof Promise) c.push(l), s = true;
      else {
        if (l.issues.length === 0) return l;
        c.push(l);
      }
    }
    if (!s) return eo(c, n, e7, i);
    return Promise.all(c).then((a) => eo(a, n, e7, i));
  };
});
function ws(e7) {
  let t = /* @__PURE__ */ new Map();
  for (let r of e7.options) {
    let n = r._zod.propValues?.[e7.discriminator];
    if (!n || n.size === 0) throw Error(`Invalid discriminated union option at index "${e7.options.indexOf(r)}"`);
    for (let i of n) if (t.has(i)) {
      if (i !== void 0) throw Error(`Duplicate discriminator value "${String(i)}"`);
      t.set(i, null);
    } else t.set(i, r);
  }
  return t;
}
var Ho = Cr("$ZodDiscriminatedUnion", (e7, t) => {
  t.inclusive = false, Be.init(e7, t);
  let r = e7._zod.parse;
  jw(e7, "propValues", (i) => {
    let s = {}, c = 0;
    for (let a of i.def.options) {
      let l = a._zod.propValues;
      if (!l || Object.keys(l).length === 0) throw Error(`Invalid discriminated union option at index "${i.def.options.indexOf(a)}"`);
      if (l[i.def.discriminator]?.has(void 0)) c++;
      for (let [p, f] of Object.entries(l)) {
        if (!Object.prototype.hasOwnProperty.call(s, p)) Pfe(s, p, /* @__PURE__ */ new Set());
        for (let d of f) s[p].add(d);
      }
    }
    if (!i.def.unionFallback && c > 1) s[i.def.discriminator]?.delete(void 0);
    return s;
  }), t.options.forEach((i, s) => {
    let c = Oar(i._zod.def);
    if (c && !Object.prototype.hasOwnProperty.call(c, t.discriminator)) throw Error(`Invalid discriminated union option at index "${s}"`);
  });
  let n = Iar(() => ws(t));
  e7._zod.parse = (i, s) => {
    let c = i.value;
    if (!TEn(c)) return i.issues.push({ code: "invalid_type", expected: "object", input: c, inst: e7 }), i;
    let a = c?.[t.discriminator], l = n.value.get(a);
    if (l && (a !== void 0 || s.direction !== "backward")) return l._zod.run(i, s);
    if (t.unionFallback || s.direction === "backward") return r(i, s);
    return i.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: t.discriminator, options: Array.from(n.value.keys()).filter((p) => n.value.get(p) !== null), input: c, path: [t.discriminator], inst: e7 }), i;
  };
}), Qo = Cr("$ZodIntersection", (e7, t) => {
  dk.init(e7, t), e7._zod.parse = (r, n) => {
    let i = r.value, s = t.left._zod.run({ value: i, issues: [] }, n), c = t.right._zod.run({ value: i, issues: [] }, n);
    if (s instanceof Promise || c instanceof Promise) return Promise.all([s, c]).then(([l, p]) => to(r, l, p));
    return to(r, s, c);
  };
});
function Le(e7, t) {
  if (e7 === t) return { valid: true, data: e7 };
  if (e7 instanceof Date && t instanceof Date && +e7 === +t) return { valid: true, data: e7 };
  if (h4t(e7) && h4t(t)) {
    let r = Object.keys(t), n = Object.keys(e7).filter((s) => r.indexOf(s) !== -1), i = { ...e7, ...t };
    if (Object.prototype.hasOwnProperty.call(i, "__proto__")) delete i.__proto__;
    for (let s of n) {
      if (s === "__proto__") continue;
      let c = Le(e7[s], t[s]);
      if (!c.valid) return { valid: false, mergeErrorPath: [s, ...c.mergeErrorPath] };
      i[s] = c.data;
    }
    return { valid: true, data: i };
  }
  if (Array.isArray(e7) && Array.isArray(t)) {
    if (e7.length !== t.length) return { valid: false, mergeErrorPath: [] };
    let r = [];
    for (let n = 0; n < e7.length; n++) {
      let i = e7[n], s = t[n], c = Le(i, s);
      if (!c.valid) return { valid: false, mergeErrorPath: [n, ...c.mergeErrorPath] };
      r.push(c.data);
    }
    return { valid: true, data: r };
  }
  return { valid: false, mergeErrorPath: [] };
}
function to(e7, t, r) {
  let n = /* @__PURE__ */ new Map(), i, s = /* @__PURE__ */ new Map(), c = (p, f) => {
    let d;
    if (p.code === "unrecognized_keys" && !p.path?.length) i ?? (i = p), d = p.keys;
    else if (p.code === "invalid_key" && p.origin === "record" && p.path?.length === 1) {
      let _ = String(p.path[0]);
      if (!s.has(_)) s.set(_, p);
      d = [_];
    } else return false;
    for (let _ of d) {
      if (!n.has(_)) n.set(_, {});
      n.get(_)[f] = true;
    }
    return true;
  };
  for (let p of t.issues) if (!c(p, "l")) e7.issues.push(p);
  for (let p of r.issues) if (!c(p, "r")) e7.issues.push(p);
  let a = [...n].filter(([, p]) => p.l && p.r).map(([p]) => p);
  if (a.length) {
    let p = i ? a.filter((f) => i.keys.includes(f)) : [];
    if (p.length) e7.issues.push({ ...i, keys: p });
    for (let f of a) if (!p.includes(f) && s.has(f)) e7.issues.push(s.get(f));
  }
  let l = Le(t.value, r.value);
  if (!l.valid) {
    if (ixe(e7)) return e7;
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  }
  return e7.value = l.data, e7;
}
var en = Cr("$ZodTuple", (e7, t) => {
  dk.init(e7, t);
  let r = t.items, n = BZ.memoizer;
  n?.attach(e7), e7._zod.parse = (i, s) => {
    let c = i.value;
    if (!Array.isArray(c)) return i.issues.push({ input: c, inst: e7, expected: "tuple", code: "invalid_type" }), i;
    i.value = n ? n.alloc(e7, i, [], s) : [];
    let a = [], l = ro(r, "optin"), p = ro(r, "optout");
    if (!t.rest) {
      if (c.length < l) return i.issues.push({ code: "too_small", minimum: l, inclusive: true, input: c, inst: e7, origin: "array" }), i;
      if (c.length > r.length) i.issues.push({ code: "too_big", maximum: r.length, inclusive: true, input: c, inst: e7, origin: "array" });
    }
    let f = Array(r.length), d = t.rest ? s?.abortEarly : void 0, _ = false;
    for (let m = 0; m < r.length; m++) {
      let h = r[m]._zod.run({ value: c[m], issues: [] }, s);
      if (h instanceof Promise) a.push(h.then((g) => {
        f[m] = g;
      }));
      else if (f[m] = h, d && !_ && h.issues.length) _ = ixe(h);
    }
    if (t.rest && !_) {
      let m = r.length - 1, h = c.slice(r.length), g = i.issues.length;
      for (let x of h) {
        if (d && i.issues.length !== g) {
          if (ixe(i, g)) break;
          g = i.issues.length;
        }
        m++;
        let y = t.rest._zod.run({ value: x, issues: [] }, s);
        if (y instanceof Promise) a.push(y.then((O) => oo(O, i, m)));
        else oo(y, i, m);
      }
    }
    if (a.length) return Promise.all(a).then(() => no(f, i, r, c, p));
    return no(f, i, r, c, p);
  };
});
function ro(e7, t) {
  for (let r = e7.length - 1; r >= 0; r--) if (!(t === "optin" ? e7[r]._zod.optin !== void 0 : e7[r]._zod.optout === "optional")) return r + 1;
  return 0;
}
function oo(e7, t, r) {
  if (e7.issues.length) t.issues.push(...E$e(r, e7.issues));
  t.value[r] = e7.value;
}
function no(e7, t, r, n, i) {
  for (let s = 0; s < r.length; s++) {
    let c = e7[s], a = s < n.length;
    if (!a && s >= i && r[s]._zod.optin === "optional") {
      t.value.length = s;
      break;
    }
    if (c.issues.length) {
      if (!a && s >= i) {
        t.value.length = s;
        break;
      }
      t.issues.push(...E$e(s, c.issues));
    }
    t.value[s] = c.value;
  }
  for (let s = t.value.length - 1; s >= n.length; s--) if (r[s]._zod.optout === "optional" && t.value[s] === void 0) t.value.length = s;
  else break;
  return t;
}
var tn = Cr("$ZodRecord", (e7, t) => {
  dk.init(e7, t);
  let r = BZ.memoizer;
  r?.attach(e7), e7._zod.parse = (n, i) => {
    let s = n.value;
    if (!h4t(s)) return n.issues.push({ expected: "record", code: "invalid_type", input: s, inst: e7 }), n;
    let c = [], a = t.keyType._zod.values;
    if (a && !t.partial) {
      n.value = r ? r.alloc(e7, n, {}, i) : {};
      let l = /* @__PURE__ */ new Set();
      for (let f of a) if (typeof f === "string" || typeof f === "number" || typeof f === "symbol") {
        if (l.add(typeof f === "number" ? f.toString() : f), f === "__proto__") continue;
        let d = t.keyType._zod.run({ value: f, issues: [] }, i);
        if (d instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (d.issues.length) {
          n.issues.push({ code: "invalid_key", origin: "record", issues: d.issues.map((h) => O4e(h, i, jZ())), input: f, path: [f], inst: e7 });
          continue;
        }
        let _ = d.value;
        if (_ === "__proto__") continue;
        let m = t.valueType._zod.run({ value: s[f], issues: [] }, i);
        if (m instanceof Promise) c.push(m.then((h) => {
          if (h.issues.length) n.issues.push(...E$e(f, h.issues));
          n.value[_] = h.value;
        }));
        else {
          if (m.issues.length) n.issues.push(...E$e(f, m.issues));
          n.value[_] = m.value;
        }
      }
      let p;
      for (let f in s) if (!l.has(f)) if (t.mode === "loose") {
        if (f === "__proto__") continue;
        n.value[f] = s[f];
      } else p = p ?? [], p.push(f);
      if (p && p.length > 0) n.issues.push({ code: "unrecognized_keys", input: s, inst: e7, keys: p, continue: true });
    } else {
      n.value = r ? r.alloc(e7, n, {}, i) : {};
      let l;
      for (let p of Reflect.ownKeys(s)) {
        if (p === "__proto__") continue;
        if (!Object.prototype.propertyIsEnumerable.call(s, p)) continue;
        let f = t.keyType._zod.run({ value: p, issues: [] }, i);
        if (f instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (typeof p === "string" && V.test(p) && f.issues.length) {
          let h = t.keyType._zod.run({ value: Number(p), issues: [] }, i);
          if (h instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          if (h.issues.length === 0) f = h;
        }
        if (f.issues.length) {
          if (t.mode === "loose") n.value[p] = s[p];
          else if (a) l = l ?? [], l.push(p);
          else n.issues.push({ code: "invalid_key", origin: "record", issues: f.issues.map((h) => O4e(h, i, jZ())), input: p, path: [p], inst: e7 });
          continue;
        }
        let _ = f.value;
        if (_ === "__proto__") continue;
        let m = t.valueType._zod.run({ value: s[p], issues: [] }, i);
        if (m instanceof Promise) c.push(m.then((h) => {
          if (h.issues.length) n.issues.push(...E$e(p, h.issues));
          n.value[_] = h.value;
        }));
        else {
          if (m.issues.length) n.issues.push(...E$e(p, m.issues));
          n.value[_] = m.value;
        }
      }
      if (l && l.length > 0) n.issues.push({ code: "unrecognized_keys", input: s, inst: e7, keys: l, continue: true });
    }
    if (c.length) return Promise.all(c).then(() => n);
    return n;
  };
});
var rn = Cr("$ZodEnum", (e7, t) => {
  dk.init(e7, t);
  let r = xar(t.entries), n = new Set(r);
  e7._zod.values = n, jw(e7, "pattern", (i) => {
    let s = xar(i.def.entries).filter((c) => Nci.has(typeof c));
    return new RegExp(s.length ? `^(${s.map((c) => mAt(c.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), e7._zod.parse = (i, s) => {
    let c = i.value;
    if (n.has(c)) return i;
    return i.issues.push({ code: "invalid_value", values: r, input: c, inst: e7 }), i;
  };
}), on = Cr("$ZodLiteral", (e7, t) => {
  dk.init(e7, t);
  let r = new Set(t.values);
  e7._zod.values = r, jw(e7, "pattern", (n) => {
    let i = n.def.values;
    return new RegExp(i.length ? `^(${i.map((s) => typeof s === "string" ? mAt(s) : s ? mAt(s.toString()) : String(s)).join("|")})$` : "^[^\\s\\S]$");
  }), e7._zod.parse = (n, i) => {
    let s = n.value;
    if (r.has(s)) return n;
    return n.issues.push({ code: "invalid_value", values: t.values, input: s, inst: e7 }), n;
  };
});
var nn = Cr("$ZodTransform", (e7, t) => {
  dk.init(e7, t), e7._zod.optin = "optional", BZ.memoizer?.guard(e7), e7._zod.parse = (r, n) => {
    if (n.direction === "backward") throw new Mar(e7.constructor.name);
    let i = t.transform(r.value, r);
    if (n.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((c) => (r.value = c, r));
    if (i instanceof Promise) throw new M4e();
    return r.value = i, r;
  };
});
function io(e7, t) {
  return e7.value = t.issues.length ? void 0 : t.value, e7;
}
var Ve = Cr("$ZodOptional", (e7, t) => {
  dk.init(e7, t), jw(e7, "optin", (r) => r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e7._zod.optout = "optional", jw(e7, "values", (r) => {
    let n = r.def.innerType._zod.values;
    return n ? /* @__PURE__ */ new Set([...n, void 0]) : void 0;
  }), jw(e7, "pattern", (r) => {
    let n = r.def.innerType._zod.pattern;
    return n ? new RegExp(`^(${EEn(n.source)})?$`) : void 0;
  }), e7._zod.parse = (r, n) => {
    if (r.value === void 0) {
      if (t.innerType._zod.optin !== "defaulted") return r;
      let i = t.innerType._zod.run({ value: r.value, issues: [] }, n);
      if (i instanceof Promise) return i.then((s) => io(r, s));
      return io(r, i);
    }
    return t.innerType._zod.run(r, n);
  };
}), sn = Cr("$ZodExactOptional", (e7, t) => {
  Ve.init(e7, t), jw(e7, "values", (r) => r.def.innerType._zod.values), jw(e7, "pattern", (r) => r.def.innerType._zod.pattern), e7._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), cn = Cr("$ZodNullable", (e7, t) => {
  dk.init(e7, t), jw(e7, "optin", (r) => r.def.innerType._zod.optin), jw(e7, "optout", (r) => r.def.innerType._zod.optout), jw(e7, "pattern", (r) => {
    let n = r.def.innerType._zod.pattern;
    return n ? new RegExp(`^(${EEn(n.source)}|null)$`) : void 0;
  }), jw(e7, "values", (r) => r.def.innerType._zod.values ? /* @__PURE__ */ new Set([...r.def.innerType._zod.values, null]) : void 0), e7._zod.parse = (r, n) => {
    if (r.value === null) return r;
    return t.innerType._zod.run(r, n);
  };
}), un = Cr("$ZodDefault", (e7, t) => {
  dk.init(e7, t), e7._zod.optin = "defaulted", jw(e7, "values", (r) => r.def.innerType._zod.values), e7._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    if (r.value === void 0) return r.value = t.defaultValue, r;
    let i = t.innerType._zod.run(r, n);
    if (i instanceof Promise) return i.then((s) => so(s, t));
    return so(i, t);
  };
});
function so(e7, t) {
  if (e7.value === void 0) e7.value = t.defaultValue;
  return e7;
}
var an = Cr("$ZodPrefault", (e7, t) => {
  dk.init(e7, t), e7._zod.optin = "defaulted", jw(e7, "values", (r) => r.def.innerType._zod.values), e7._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    if (r.value === void 0) r.value = t.defaultValue;
    return t.innerType._zod.run(r, n);
  };
}), ln = Cr("$ZodNonOptional", (e7, t) => {
  dk.init(e7, t), jw(e7, "values", (r) => {
    let n = r.def.innerType._zod.values;
    return n ? new Set([...n].filter((i) => i !== void 0)) : void 0;
  }), e7._zod.parse = (r, n) => {
    let i = t.innerType._zod.run(r, n);
    if (i instanceof Promise) return i.then((s) => co(s, e7));
    return co(i, e7);
  };
});
function co(e7, t) {
  if (!e7.issues.length && e7.value === void 0) e7.issues.push({ code: "invalid_type", expected: "nonoptional", input: e7.value, inst: t });
  return e7;
}
function uo(e7, t, r, n) {
  if (!t.issues.length) {
    if (e7.value = t.value, t.memo) e7.memo = true;
    return e7;
  }
  return e7.value = r.catchValue({ ...t, value: e7.value, error: { issues: t.issues.map((i) => O4e(i, n, jZ())) }, input: e7.value }), e7;
}
var pn = Cr("$ZodCatch", (e7, t) => {
  dk.init(e7, t), jw(e7, "optin", (r) => r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), jw(e7, "optout", (r) => r.def.innerType._zod.optout), jw(e7, "values", (r) => r.def.innerType._zod.values), e7._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    let i = t.innerType._zod.run({ value: r.value, issues: [] }, n);
    if (i instanceof Promise) return i.then((s) => uo(r, s, t, n));
    return uo(r, i, t, n);
  };
});
var Ke = Cr("$ZodPipe", (e7, t) => {
  dk.init(e7, t), jw(e7, "values", (r) => r.def.in._zod.values), jw(e7, "optin", (r) => r.def.in._zod.optin), jw(e7, "optout", (r) => r.def.out._zod.optout), jw(e7, "propValues", (r) => r.def.in._zod.propValues), e7._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      let s = t.out._zod.run(r, n);
      if (s instanceof Promise) return s.then((c) => pe(c, t.in, n));
      return pe(s, t.in, n);
    }
    let i = t.in._zod.run(r, n);
    if (i instanceof Promise) return i.then((s) => pe(s, t.out, n));
    return pe(i, t.out, n);
  };
});
function pe(e7, t, r) {
  if (e7.issues.some((n) => n.code !== "unrecognized_keys")) return e7.aborted = true, e7;
  return t._zod.run({ value: e7.value, issues: e7.issues }, r);
}
var fn = Cr("$ZodPreprocess", (e7, t) => {
  Ke.init(e7, t);
}), dn = Cr("$ZodReadonly", (e7, t) => {
  dk.init(e7, t), jw(e7, "propValues", (r) => r.def.innerType._zod.propValues), jw(e7, "values", (r) => r.def.innerType._zod.values), jw(e7, "optin", (r) => r.def.innerType?._zod?.optin), jw(e7, "optout", (r) => r.def.innerType?._zod?.optout), e7._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    let i = t.innerType._zod.run(r, n);
    if (i instanceof Promise) return i.then(ao);
    return ao(i);
  };
});
function ao(e7) {
  if (!e7.memo) e7.value = Object.freeze(e7.value);
  return e7;
}
var V3r = Cr("$ZodLazy", (e7, t) => {
  dk.init(e7, t), kEn(e7._zod, "innerType", () => {
    let r = t;
    if (!r._cachedInner) r._cachedInner = t.getter();
    return r._cachedInner;
  }), jw(e7, "pattern", (r) => r.innerType?._zod?.pattern), jw(e7, "propValues", (r) => r.innerType?._zod?.propValues), jw(e7, "optin", (r) => r.innerType?._zod?.optin ?? void 0), jw(e7, "optout", (r) => r.innerType?._zod?.optout ?? void 0), e7._zod.parse = (r, n) => e7._zod.innerType._zod.run(r, n);
}), mn = Cr("$ZodCustom", (e7, t) => {
  i2.init(e7, t), dk.init(e7, t), e7._zod.parse = (r, n) => r, e7._zod.check = (r) => {
    let n = r.value, i = t.fn(n);
    if (i instanceof Promise) return i.then((s) => lo(s, r, n, e7));
    lo(i, r, n, e7);
    return;
  };
});
function lo(e7, t, r, n) {
  if (!e7) {
    let i = { code: "custom", input: r, inst: n, path: [...n._zod.def.path ?? []], continue: !n._zod.def.abort };
    if (n._zod.def.params) i.params = n._zod.def.params;
    t.issues.push(y4t(i));
  }
}
function po(e7, t, r) {
  if (e7.issues.length) t.issues.push(...E$e(r, e7.issues));
}
var Ps = Cr("$ZodProperties", (e7, t) => {
  dk.init(e7, t), i2.init(e7, t);
  let r = BZ.memoizer;
  r?.attach(e7);
  let n, i = (s, c) => {
    n ?? (n = Reflect.ownKeys(t.shape).map((p) => [p, t.shape[p]]));
    let a = s.value, l;
    for (let [p, f] of n) {
      let d = f._zod.run({ value: a[p], issues: [] }, c);
      if (d instanceof Promise) l ?? (l = []), l.push(d.then((_) => po(_, s, p)));
      else po(d, s, p);
    }
    if (l) return Promise.all(l).then(() => {
      return;
    });
    return;
  };
  e7._zod.parse = (s, c) => {
    let a = s.value;
    if (a === null || typeof a !== "object" && typeof a !== "function") return s.issues.push({ expected: "object", code: "invalid_type", input: a, inst: e7 }), s;
    if (c.direction === "backward") c = { ...c, direction: "forward" };
    if (r) r.alloc(e7, s, a, c);
    let l = i(s, c);
    return l instanceof Promise ? l.then(() => s) : s;
  }, e7._zod.check = (s) => {
    if (s.value == null) {
      s.issues.push({ expected: "object", code: "invalid_type", input: s.value, inst: e7 });
      return;
    }
    return i(s, {});
  };
}, { *[Symbol.iterator]() {
  yield this;
} });
class _n extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform");
    this.name = "ZodCyclicError";
  }
}
var Ge = "~memo", hn = [];
function gn(e7) {
  return e7 !== null && (typeof e7 === "object" || typeof e7 === "function");
}
function We(e7) {
  return e7.map((t) => t.path ? { ...t, path: t.path.slice() } : { ...t });
}
var xn = /* @__PURE__ */ new WeakMap(), G = 0, xe = 1, q = 2;
function ve(e7, t, r) {
  let n = xn.get(e7);
  if (n !== void 0) return n ? q : G;
  if (t.has(e7)) return q;
  t.add(e7);
  let i = G, s = (f) => {
    if (i !== q && f?._zod) {
      let d = ve(f, t, r);
      if (d > i) i = d;
    }
  }, c = (f, d) => {
    let _ = G;
    for (let m of Reflect.ownKeys(f)) {
      let h = Object.getOwnPropertyDescriptor(f, m);
      if (d && !h.enumerable) continue;
      let g = h.get ? xe : h.value?._zod ? ve(h.value, t, r) : G;
      if (g > _) _ = g;
    }
    return _;
  }, a = (f) => {
    if (f > i) i = f;
  }, l = e7._zod.def, p = l.type;
  switch (p) {
    case "object": {
      let f = Oar(l);
      a(f ? c(f, true) : xe), s(l.catchall);
      break;
    }
    case "properties":
      a(c(l.shape, false));
      break;
    case "array":
      s(l.element);
      break;
    case "tuple":
      for (let f of l.items) s(f);
      s(l.rest);
      break;
    case "record":
    case "map":
      s(l.keyType), s(l.valueType);
      break;
    case "set":
      s(l.valueType);
      break;
    case "union":
      for (let f of l.options) s(f);
      break;
    case "intersection":
      s(l.left), s(l.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      s(l.innerType);
      break;
    case "pipe":
      s(l.in), s(l.out);
      break;
    case "function":
      s(l.input), s(l.output);
      break;
    case "lazy": {
      let f = l._cachedInner ?? (r ? e7._zod.innerType : void 0);
      a(f ? ve(f, t, false) : xe);
      break;
    }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (let f in l) {
        let d = Object.getOwnPropertyDescriptor(l, f);
        if (!d || d.get) continue;
        let _ = d.value;
        if (!_ || typeof _ !== "object") continue;
        if (_._zod) s(_);
        else if (Array.isArray(_)) for (let m of _) s(m);
      }
  }
  return t.delete(e7), Ss(e7, i);
}
function Ss(e7, t) {
  if (t !== xe) xn.set(e7, t === q);
  return t;
}
function Is(e7, t) {
  let r = e7.buckets.get(t);
  if (!r) r = /* @__PURE__ */ new WeakMap(), e7.buckets.set(t, r);
  return r;
}
var _e, ge = [], Os = { alloc(e7, t, r) {
  let n = _e;
  if (!n) return r;
  _e = void 0;
  let i = { value: r, issues: null };
  return n.set(t.value, i), ge.push(i), r;
}, guard(e7) {
  var t;
  (t = e7._zod).deferred ?? (t.deferred = []), e7._zod.deferred.push(() => {
    let r = e7._zod.parse, n = (i, s) => {
      if (s.direction !== "backward" && As(s, i.value)) throw new _n();
      return r(i, s);
    };
    if (e7._zod.parse = n, e7._zod.run === r) e7._zod.run = n;
  });
}, attach(e7) {
  var t;
  let r, n = false, i, s;
  (t = e7._zod).deferred ?? (t.deferred = []), e7._zod.deferred.push(() => {
    let c = e7._zod.parse, a = (l, p) => {
      if (r === void 0) {
        let y = ve(e7, /* @__PURE__ */ new Set(), false);
        if (y === G) {
          if (e7._zod.parse = c, e7._zod.run === a) e7._zod.run = c;
          return c(l, p);
        }
        if (y === q || n) r = true;
        else n = true;
      }
      let f = l.value;
      if (!gn(f)) return c(l, p);
      let d = p[Ge];
      if (!d) d = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, p[Ge] = d;
      let _;
      if (i === p) _ = s;
      else _ = Is(d, e7), i = p, s = _;
      let m = _.get(f);
      if (m) {
        if (l.value = m.value, m.issues) {
          if (m.issues.length) l.issues.push(...We(m.issues));
        } else l.memo = true, d.backEdges ?? (d.backEdges = /* @__PURE__ */ new WeakSet()), d.backEdges.add(m.value);
        return l;
      }
      _e = _;
      let h = ge.length, g = c(l, p);
      _e = void 0;
      let x = ge.length > h ? ge.pop() : void 0;
      if (g instanceof Promise) return g.then((y) => {
        if (x) x.issues = y.issues.length ? We(y.issues) : hn;
        return y;
      });
      if (x) x.issues = g.issues.length ? We(g.issues) : hn;
      return g;
    };
    if (e7._zod.parse = a, e7._zod.run === c) e7._zod.run = a;
  });
} };
function vn() {
  return Os;
}
function As(e7, t) {
  let r = e7[Ge]?.backEdges;
  return r !== void 0 && gn(t) && r.has(t);
}
var Es = () => {
  let e7 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
  function t(s) {
    return e7[s] ?? null;
  }
  let r = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", credit_card: "credit card number", iban: "IBAN", jwt: "JWT", template_literal: "input" }, n = { nan: "NaN" };
  function i(s, c) {
    if (s === "number" && typeof c === "number" && !Number.isFinite(c)) return String(c);
    return n[s] ?? s;
  }
  return (s) => {
    switch (s.code) {
      case "invalid_type": {
        let c = i(s.expected), a = Bci(s.input), l = i(a, s.input);
        return `Invalid input: expected ${c}, received ${l}`;
      }
      case "invalid_value":
        if (s.values.length === 1) return `Invalid input: expected ${p7o(s.values[0])}`;
        return `Invalid option: expected one of ${c7o(s.values, "|")}`;
      case "too_big": {
        let c = s.exact ? "exactly " : s.inclusive ? "<=" : "<", a = t(s.origin);
        if (a) return `Too big: expected ${s.origin ?? "value"} to have ${c}${s.maximum.toString()} ${a.unit ?? "elements"}`;
        return `Too big: expected ${s.origin ?? "value"} to be ${c}${s.maximum.toString()}`;
      }
      case "too_small": {
        let c = s.exact ? "exactly " : s.inclusive ? ">=" : ">", a = t(s.origin);
        if (a) return `Too small: expected ${s.origin} to have ${c}${s.minimum.toString()} ${a.unit}`;
        return `Too small: expected ${s.origin} to be ${c}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        let c = s;
        if (c.format === "starts_with") return `Invalid string: must start with "${c.prefix}"`;
        if (c.format === "ends_with") return `Invalid string: must end with "${c.suffix}"`;
        if (c.format === "includes") return `Invalid string: must include "${c.includes}"`;
        if (c.format === "regex") return `Invalid string: must match pattern ${c.pattern}`;
        return `Invalid ${r[c.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${s.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${s.keys.length > 1 ? "s" : ""}: ${c7o(s.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${s.origin}`;
      case "invalid_union":
        if (s.options && Array.isArray(s.options) && s.options.length > 0) return `Invalid discriminator value. Expected ${s.options.map((a) => `'${a}'`).join(" | ")}`;
        if (s.inclusive === false) return "Invalid input: more than one option matched";
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${s.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function qe() {
  return { localeError: Es() };
}
var yn;
class $n {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(e7, ...t) {
    let r = t[0];
    if (this._map.set(e7, r), r && typeof r === "object" && "id" in r) this._idmap.set(r.id, e7);
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(e7) {
    let t = this._map.get(e7);
    if (t && typeof t === "object" && "id" in t) this._idmap.delete(t.id);
    return this._map.delete(e7), this;
  }
  get(e7) {
    let t = e7._zod.parent;
    if (t) {
      let r = { ...this.get(t) ?? {} };
      delete r.id;
      let n = { ...r, ...this._map.get(e7) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(e7);
  }
  has(e7) {
    return this._map.has(e7);
  }
}
function Ts() {
  return new $n();
}
(yn = globalThis).__zod_globalRegistry ?? (yn.__zod_globalRegistry = Ts());
var rst = globalThis.__zod_globalRegistry;
function zn(e7, t) {
  return new e7({ type: "string", ...yd(t) });
}
function Tci(e7, t) {
  return new e7({ type: "string", coerce: true, ...yd(t) });
}
function Ye(e7, t) {
  return new e7({ type: "string", format: "email", check: "string_format", abort: false, ...yd(t) });
}
function bn(e7, t) {
  return new e7({ type: "string", format: "guid", check: "string_format", abort: false, ...yd(t) });
}
function Xe(e7, t) {
  return new e7({ type: "string", format: "uuid", check: "string_format", abort: false, ...yd(t) });
}
function kn(e7, t) {
  return new e7({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...yd(t) });
}
function Zn(e7, t) {
  return new e7({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...yd(t) });
}
function wn(e7, t) {
  return new e7({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...yd(t) });
}
function He(e7, t) {
  return new e7({ type: "string", format: "url", check: "string_format", abort: false, ...yd(t) });
}
function Pn(e7, t) {
  return new e7({ type: "string", format: "emoji", check: "string_format", abort: false, ...yd(t) });
}
function Sn(e7, t) {
  return new e7({ type: "string", format: "nanoid", check: "string_format", abort: false, ...yd(t) });
}
function In(e7, t) {
  return new e7({ type: "string", format: "cuid", check: "string_format", abort: false, ...yd(t) });
}
function On(e7, t) {
  return new e7({ type: "string", format: "cuid2", check: "string_format", abort: false, ...yd(t) });
}
function An(e7, t) {
  return new e7({ type: "string", format: "ulid", check: "string_format", abort: false, ...yd(t) });
}
function En(e7, t) {
  return new e7({ type: "string", format: "xid", check: "string_format", abort: false, ...yd(t) });
}
function Tn(e7, t) {
  return new e7({ type: "string", format: "ksuid", check: "string_format", abort: false, ...yd(t) });
}
function Nn(e7, t) {
  return new e7({ type: "string", format: "ipv4", check: "string_format", abort: false, ...yd(t) });
}
function Cn(e7, t) {
  return new e7({ type: "string", format: "ipv6", check: "string_format", abort: false, ...yd(t) });
}
function Rn(e7, t) {
  return new e7({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...yd(t) });
}
function Dn(e7, t) {
  return new e7({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...yd(t) });
}
function Qe(e7, t) {
  return new e7({ type: "string", format: "base64", check: "string_format", abort: false, ...yd(t) });
}
function jn(e7, t) {
  return new e7({ type: "string", format: "base64url", check: "string_format", abort: false, ...yd(t) });
}
function Ln(e7, t) {
  return new e7({ type: "string", format: "e164", check: "string_format", abort: false, ...yd(t) });
}
function Fn(e7, t) {
  return new e7({ type: "string", format: "jwt", check: "string_format", abort: false, ...yd(t) });
}
var Aci = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function q3r(e7, t) {
  return new e7({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...yd(t) });
}
function Y3r(e7, t) {
  return new e7({ type: "string", format: "date", check: "string_format", ...yd(t) });
}
function Mn(e7, t) {
  return new e7({ type: "string", format: "time", check: "string_format", precision: null, ...yd(t) });
}
function Un(e7, t) {
  return new e7({ type: "string", format: "duration", check: "string_format", ...yd(t) });
}
function Jn(e7, t) {
  return new e7({ type: "number", checks: [], ...yd(t) });
}
function Cci(e7, t) {
  return new e7({ type: "number", coerce: true, checks: [], ...yd(t) });
}
function Bn(e7, t) {
  return new e7({ type: "number", check: "number_format", abort: false, format: "safeint", ...yd(t) });
}
function Vn(e7, t) {
  return new e7({ type: "number", check: "number_format", abort: false, format: "int32", ...yd(t) });
}
function Kn(e7, t) {
  return new e7({ type: "boolean", ...yd(t) });
}
function Rci(e7, t) {
  return new e7({ type: "boolean", coerce: true, ...yd(t) });
}
function Wn(e7, t) {
  return new e7({ type: "undefined", ...yd(t) });
}
function Gn(e7, t) {
  return new e7({ type: "null", ...yd(t) });
}
function qn(e7) {
  return new e7({ type: "any" });
}
function Yn(e7) {
  return new e7({ type: "unknown" });
}
function Xn(e7, t) {
  return new e7({ type: "never", ...yd(t) });
}
function ye(e7, t) {
  return new Re({ check: "less_than", ...yd(t), value: e7, inclusive: false });
}
function Y(e7, t) {
  return new Re({ check: "less_than", ...yd(t), value: e7, inclusive: true });
}
function ze(e7, t) {
  return new De({ check: "greater_than", ...yd(t), value: e7, inclusive: false });
}
function X(e7, t) {
  return new De({ check: "greater_than", ...yd(t), value: e7, inclusive: true });
}
function be(e7, t) {
  return new jr({ check: "multiple_of", ...yd(t), value: e7 });
}
function SEn(e7, t) {
  return new Fr({ check: "max_length", ...yd(t), maximum: e7 });
}
function R(e7, t) {
  return new Mr({ check: "min_length", ...yd(t), minimum: e7 });
}
function ke(e7, t) {
  return new Ur({ check: "length_equals", ...yd(t), length: e7 });
}
function et(e7, t) {
  return new Jr({ check: "string_format", format: "regex", ...yd(t), pattern: e7 });
}
function tt(e7) {
  return new Br({ check: "string_format", format: "lowercase", ...yd(e7) });
}
function rt(e7) {
  return new Vr({ check: "string_format", format: "uppercase", ...yd(e7) });
}
function ot(e7, t) {
  return new Kr({ check: "string_format", format: "includes", ...yd(t), includes: e7 });
}
function nt(e7, t) {
  return new Wr({ check: "string_format", format: "starts_with", ...yd(t), prefix: e7 });
}
function it(e7, t) {
  return new qr({ check: "string_format", format: "ends_with", ...yd(t), suffix: e7 });
}
function C(e7) {
  return new Yr({ check: "overwrite", tx: e7 });
}
function st(e7) {
  return C((t) => t.normalize(e7));
}
function ct() {
  return C((e7) => e7.trim());
}
function ut() {
  return C((e7) => e7.toLowerCase());
}
function at() {
  return C((e7) => e7.toUpperCase());
}
function lt() {
  return C((e7) => Hci(e7));
}
function Hn(e7, t, r) {
  return new e7({ type: "array", element: t, ...yd(r) });
}
function Qn(e7, t, r) {
  let n = yd(r);
  return n.abort ?? (n.abort = true), new e7({ type: "custom", check: "custom", fn: t, ...n });
}
function ei(e7, t, r) {
  return new e7({ type: "custom", check: "custom", fn: t, ...yd(r) });
}
function ti(e7, t) {
  let r = Ns((n) => (n.addIssue = (i) => {
    if (typeof i === "string") n.issues.push(y4t(i, n.value, r._zod.def));
    else {
      let s = i;
      if (s.fatal) s.continue = false;
      if (s.code ?? (s.code = "custom"), !("input" in s)) s.input = n.value;
      s.inst ?? (s.inst = r), s.continue ?? (s.continue = !r._zod.def.abort), n.issues.push(y4t(s));
    }
  }, e7(n.value, n)), t);
  return r;
}
function Ns(e7, t) {
  let r = new i2({ check: "custom", ...yd(t) });
  return r._zod.check = e7, r;
}
function H(e7, ...t) {
  for (let r of t) for (let n of Reflect.ownKeys(r)) if (Object.prototype.propertyIsEnumerable.call(r, n)) Pfe(e7, n, r[n]);
  return e7;
}
function ee(e7) {
  let t = e7?.target ?? "draft-2020-12";
  if (t === "draft-4") t = "draft-04";
  if (t === "draft-7") t = "draft-07";
  return { processors: e7.processors ?? {}, metadataRegistry: e7?.metadata ?? rst, target: t, unrepresentable: e7?.unrepresentable ?? "throw", override: e7?.override ?? (() => {
  }), io: e7?.io ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), sharedDefsExtractedFor: void 0, sharedEmitDoneFor: void 0, cycles: e7?.cycles ?? "ref", reused: e7?.reused ?? "inline", intersections: [], deferred: [], external: e7?.external ?? void 0 };
}
function Z(e7, t, r, n, i) {
  let s = typeof t.unrepresentable === "function" ? t.unrepresentable({ zodSchema: e7, path: n.path, message: i }) : t.unrepresentable;
  if (s === "any") return false;
  if (s === void 0 || s === "throw") throw Error(i);
  return Object.assign(r, s), true;
}
function fC(e7, t, r = { path: [], schemaPath: [] }) {
  var n;
  let i = e7._zod.def, s = t.seen.get(e7);
  if (s) {
    if (s.count++, r.schemaPath.includes(e7)) s.cycle = r.path;
    return s.schema;
  }
  let c = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e7, c), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
  let a = e7._zod.toJSONSchema?.();
  if (a) c.schema = a;
  else {
    let f = { ...r, schemaPath: [...r.schemaPath, e7], path: r.path };
    if (e7._zod.processJSONSchema) e7._zod.processJSONSchema(t, c.schema, f);
    else {
      let _ = c.schema, m = t.processors[i.type];
      if (!m) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      m(e7, t, _, f);
    }
    let d = e7._zod.parent;
    if (d) {
      if (!c.ref) c.ref = d;
      fC(d, t, f), t.seen.get(d).isParent = true;
    }
  }
  let l = t.metadataRegistry.get(e7);
  if (l) H(c.schema, l);
  if (t.io === "input" && P(e7)) delete c.schema.examples, delete c.schema.default;
  if (t.io === "input" && "_prefault" in c.schema) (n = c.schema).default ?? (n.default = c.schema._prefault);
  return delete c.schema._prefault, t.seen.get(e7).schema;
}
function ri(e7) {
  return e7.replace(/~/g, "~0").replace(/\//g, "~1");
}
function te(e7, t) {
  let r = e7.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  if (e7.external && e7.sharedDefsExtractedFor === e7.external) return;
  let n = /* @__PURE__ */ new Map();
  for (let c of e7.seen.entries()) {
    let a = e7.metadataRegistry.get(c[0])?.id;
    if (a) {
      let l = n.get(a);
      if (l && l !== c[0]) throw Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(a, c[0]);
    }
  }
  let i = (c) => {
    let a = e7.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e7.external) {
      let d = e7.external.registry.get(c[0])?.id, _ = e7.external.uri ?? ((h) => h);
      if (d) return { ref: _(d) };
      let m = c[1].defId ?? c[1].schema.id ?? `schema${e7.counter++}`;
      return c[1].defId = m, { defId: m, ref: `${_("__shared")}#/${a}/${ri(m)}` };
    }
    let l = "#", p = `${l}/${a}/`;
    if (c[1] === r && !c[1].schema.id) return { ref: l };
    let f = c[1].schema.id ?? `__schema${e7.counter++}`;
    return { defId: f, ref: p + ri(f) };
  }, s = (c) => {
    if (c[1].schema.$ref) return;
    let a = c[1], { ref: l, defId: p } = i(c);
    if (a.def = { ...a.schema }, p) a.defId = p;
    let f = a.schema;
    for (let d in f) delete f[d];
    f.$ref = l;
  };
  if (e7.cycles === "throw") for (let c of e7.seen.entries()) {
    let a = c[1];
    if (a.cycle) throw Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (let c of e7.seen.entries()) {
    let a = c[1];
    if (t === c[0]) {
      s(c);
      continue;
    }
    if (e7.external) {
      let p = e7.external.registry.get(c[0])?.id;
      if (t !== c[0] && p) {
        s(c);
        continue;
      }
    }
    if (e7.metadataRegistry.get(c[0])?.id) {
      s(c);
      continue;
    }
    if (a.cycle) {
      s(c);
      continue;
    }
    if (a.count > 1) {
      if (e7.reused === "ref") s(c);
    }
  }
  if (e7.external) e7.sharedDefsExtractedFor = e7.external;
}
function ii(e7) {
  let t = e7.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e7.type !== void 0) return;
  let r = [];
  for (let n of t) {
    if (!n || typeof n !== "object") return;
    ii(n);
    let i = Object.keys(n);
    if (i.length !== 1 || i[0] !== "type") return;
    let s = n.type;
    for (let c of Array.isArray(s) ? s : [s]) {
      if (typeof c !== "string") return;
      if (!r.includes(c)) r.push(c);
    }
  }
  delete e7.anyOf, e7.type = r.length === 1 ? r[0] : r;
}
var si = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), oi = ["oneOf", "anyOf"];
function ni(e7) {
  let t = e7.additionalProperties;
  if (t === void 0 || t === false || typeof t !== "object" || t === null) return null;
  return Object.keys(t).length ? t : null;
}
function pt(e7) {
  let t = [];
  for (let s of e7) {
    if (typeof s !== "object" || s.type !== "object") return null;
    for (let c in s) if (!si.has(c)) return null;
    t.push(s);
  }
  let r = {}, n = /* @__PURE__ */ new Set();
  for (let s of t) {
    for (let c in s.properties) {
      if (Object.prototype.hasOwnProperty.call(r, c)) continue;
      let a = [];
      for (let p of t) {
        let f = p.properties?.[c] ?? ni(p);
        if (f === null || f === void 0) continue;
        if (!a.some((d) => JSON.stringify(d) === JSON.stringify(f))) a.push(f);
      }
      let l = a.length === 1 ? a[0] : pt(a) ?? { allOf: a };
      Pfe(r, c, l);
    }
    for (let c of s.required ?? []) n.add(c);
  }
  let i = { type: "object", properties: r };
  if (n.size) i.required = [...n];
  if (t.every((s) => s.additionalProperties === false)) i.additionalProperties = false;
  else {
    let s = [];
    for (let c of t) {
      let a = ni(c);
      if (a && !s.some((l) => JSON.stringify(l) === JSON.stringify(a))) s.push(a);
    }
    if (s.length === 1) i.additionalProperties = s[0];
    else if (s.length > 1) i.additionalProperties = { allOf: s };
  }
  return i;
}
function Cs(e7) {
  let t = e7.allOf;
  if (!Array.isArray(t) || t.length < 2) return;
  for (let i of si) if (i in e7) return;
  let r = t.filter((i) => oi.some((s) => Array.isArray(i[s]))), n = null;
  if (!r.length) n = pt(t);
  else {
    let i = r[0], s = oi.find((l) => Array.isArray(i[l]));
    if (Object.keys(i).length !== 1) return;
    let c = t.filter((l) => l !== i), a = i[s].map((l) => pt([...c, l]));
    if (a.some((l) => !l)) return;
    n = { [s]: a };
  }
  if (!n) return;
  delete e7.allOf, H(e7, n);
}
function re(e7, t) {
  let r = e7.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  let n = (a) => {
    let l = e7.seen.get(a);
    if (l.ref === null) return;
    let p = l.def ?? l.schema, f = { ...p }, d = l.ref;
    if (l.ref = null, d) {
      n(d);
      let m = e7.seen.get(d), h = m.schema;
      if (h.$ref && (e7.target === "draft-07" || e7.target === "draft-04" || e7.target === "openapi-3.0")) p.allOf = p.allOf ?? [], p.allOf.push(h);
      else H(p, h);
      if (H(p, f), a._zod.parent === d) for (let x in p) {
        if (x === "$ref" || x === "allOf") continue;
        if (!(x in f)) delete p[x];
      }
      if (h.$ref && m.def) for (let x in p) {
        if (x === "$ref" || x === "allOf") continue;
        if (x in m.def && JSON.stringify(p[x]) === JSON.stringify(m.def[x])) delete p[x];
      }
    }
    let _ = a._zod.parent;
    if (_ && _ !== d) {
      n(_);
      let m = e7.seen.get(_);
      if (m?.schema.$ref) {
        if (p.$ref = m.schema.$ref, m.def) for (let h in p) {
          if (h === "$ref" || h === "allOf") continue;
          if (h in m.def && JSON.stringify(p[h]) === JSON.stringify(m.def[h])) delete p[h];
        }
      }
    }
    e7.override({ zodSchema: a, jsonSchema: p, path: l.path ?? [] });
  };
  if (!e7.external || e7.sharedEmitDoneFor !== e7.external) {
    for (let a of [...e7.seen.entries()].reverse()) n(a[0]);
    if (e7.target !== "openapi-3.0") for (let a of e7.seen.entries()) ii(a[1].def ?? a[1].schema);
    for (let a of e7.deferred) a();
    if (e7.intersections.length) {
      let a = /* @__PURE__ */ new Map();
      for (let l of e7.seen.values()) for (let p of [l.schema, l.def]) {
        let f = p?.allOf;
        if (!Array.isArray(f)) continue;
        let d = a.get(f);
        if (d) d.push(p);
        else a.set(f, [p]);
      }
      for (let l of e7.intersections) for (let p of a.get(l) ?? []) Cs(p);
    }
  }
  let i = {};
  if (e7.target === "draft-2020-12") i.$schema = "https://json-schema.org/draft/2020-12/schema";
  else if (e7.target === "draft-07") i.$schema = "http://json-schema.org/draft-07/schema#";
  else if (e7.target === "draft-04") i.$schema = "http://json-schema.org/draft-04/schema#";
  else if (e7.target === "openapi-3.0") ;
  if (e7.external?.uri) {
    let a = e7.external.registry.get(t)?.id;
    if (!a) throw Error("Schema is missing an `id` property");
    i.$id = e7.external.uri(a);
  }
  H(i, r.defId ? r.schema : r.def ?? r.schema);
  let s = e7.metadataRegistry.get(t)?.id;
  if (s !== void 0 && i.id === s) delete i.id;
  let c = e7.external?.defs ?? {};
  if (!e7.external || e7.sharedEmitDoneFor !== e7.external) for (let a of e7.seen.entries()) {
    let l = a[1];
    if (l.def && l.defId) {
      if (l.def.id === l.defId) delete l.def.id;
      Pfe(c, l.defId, l.def);
    }
  }
  if (e7.external) e7.sharedEmitDoneFor = e7.external;
  if (e7.external) ;
  else if (Object.keys(c).length > 0) if (e7.target === "draft-2020-12") i.$defs = c;
  else i.definitions = c;
  try {
    let a = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(a, "~standard", { value: { ...t["~standard"], jsonSchema: { input: Q(t, "input", e7.processors), output: Q(t, "output", e7.processors) } }, enumerable: false, writable: false }), a;
  } catch (a) {
    throw Error("Error converting schema to JSON.");
  }
}
function P(e7, t) {
  let r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e7)) return false;
  r.seen.add(e7);
  let n = e7._zod.def;
  if (n.type === "transform") return true;
  if (n.type === "array") return P(n.element, r);
  if (n.type === "set") return P(n.valueType, r);
  if (n.type === "lazy") return P(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault" || n.type === "catch") return P(n.innerType, r);
  if (n.type === "intersection") return P(n.left, r) || P(n.right, r);
  if (n.type === "record" || n.type === "map") return P(n.keyType, r) || P(n.valueType, r);
  if (n.type === "pipe") {
    if (e7._zod.traits.has("$ZodCodec")) return true;
    return P(n.in, r) || P(n.out, r);
  }
  if (n.type === "object") {
    for (let i in n.shape) if (P(n.shape[i], r)) return true;
    return false;
  }
  if (n.type === "union") {
    for (let i of n.options) if (P(i, r)) return true;
    return false;
  }
  if (n.type === "tuple") {
    for (let i of n.items) if (P(i, r)) return true;
    if (n.rest && P(n.rest, r)) return true;
    return false;
  }
  return false;
}
var ci = (e7, t = {}) => (r) => {
  let n = ee({ ...r, processors: t });
  return fC(e7, n), te(n, e7), re(n, e7);
}, Q = (e7, t, r = {}) => (n) => {
  let { libraryOptions: i, target: s } = n ?? {}, c = ee({ ...i ?? {}, target: s, io: t, processors: r });
  return fC(e7, c), te(c, e7), re(c, e7);
};
var D = (e7, t, r) => {
  if (e7[t] === void 0 || r > e7[t]) e7[t] = r;
}, j = (e7, t, r) => {
  if (e7[t] === void 0 || r < e7[t]) e7[t] = r;
}, ui = (e7, t) => {
  D(e7, "minimum", t), j(e7, "maximum", t);
}, di = (e7, t) => {
  if (e7.multipleOf ?? (e7.multipleOf = []), !e7.multipleOf.includes(t)) e7.multipleOf.push(t);
}, mi = (e7, t) => {
  e7.patterns ?? (e7.patterns = /* @__PURE__ */ new Set()), e7.patterns.add(t);
}, hi = (e7, t) => {
  e7.mime = e7.mime ? e7.mime.filter((r) => t.includes(r)) : [...t];
}, _i = (e7, t) => {
  if (e7.format = t, t.includes("int")) e7.isInt = true;
}, ai = (e7, t) => D(e7, "minimum", t.minimum), li = (e7, t) => j(e7, "maximum", t.maximum), pi = (e7) => (t, r) => {
  _i(t, r.format);
  let [n, i] = e7[r.format];
  D(t, "minimum", n), j(t, "maximum", i);
}, Rs = { greater_than: (e7, t) => D(e7, t.inclusive ? "minimum" : "exclusiveMinimum", t.value), less_than: (e7, t) => j(e7, t.inclusive ? "maximum" : "exclusiveMaximum", t.value), multiple_of: (e7, t) => di(e7, t.value), number_format: pi(Q3r), bigint_format: pi(m7o), min_length: ai, max_length: li, length_equals: (e7, t) => ui(e7, t.length), min_size: ai, max_size: li, size_equals: (e7, t) => ui(e7, t.size), string_format: (e7, t) => {
  if (_i(e7, t.format), t.pattern) mi(e7, t.pattern);
  if (t.format === "base64" || t.format === "base64url") e7.contentEncoding = t.format;
  if (t.local || t.precision === -1) e7.laxFormat = true;
}, mime_type: (e7, t) => hi(e7, t.mime) };
function S(e7) {
  let t = {}, r = e7._zod.def, n = e7._zod.traits.has("$ZodCheck") ? [e7, ...r.checks ?? []] : r.checks ?? [];
  for (let s of n) Rs[s._zod.def.check]?.(t, s._zod.def);
  let i = e7._zod.bag;
  if (i.minimum !== void 0) D(t, "minimum", i.minimum);
  if (i.exclusiveMinimum !== void 0) D(t, "exclusiveMinimum", i.exclusiveMinimum);
  if (i.maximum !== void 0) j(t, "maximum", i.maximum);
  if (i.exclusiveMaximum !== void 0) j(t, "exclusiveMaximum", i.exclusiveMaximum);
  if (i.multipleOf !== void 0) di(t, i.multipleOf);
  if (i.format !== void 0) {
    if (t.format ?? (t.format = i.format), i.format.includes("int")) t.isInt = true;
  }
  if (i.mime) hi(t, i.mime);
  for (let s of i.patterns ?? []) mi(t, s);
  return t;
}
var Ds = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, js = /* @__PURE__ */ new Map([[Me, br], [he, kr]]), gi = (e7) => js.get(e7) ?? e7, mt = (e7, t, r, n) => {
  let i = r;
  i.type = "string";
  let { minimum: s, maximum: c, format: a, patterns: l, contentEncoding: p, laxFormat: f } = S(e7);
  if (typeof s === "number") i.minLength = s;
  if (typeof c === "number") i.maxLength = c;
  if (a) {
    if (i.format = Ds[a] ?? a, i.format === "") delete i.format;
    if (a === "time" || f) delete i.format;
  }
  if (p) i.contentEncoding = p;
  if (l && l.size > 0) {
    let d = [...l].map(gi);
    if (d.length === 1) i.pattern = d[0].source;
    else if (d.length > 1) i.allOf = [...d.map((_) => ({ ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {}, pattern: _.source }))];
  }
}, ht = (e7, t, r, n) => {
  let i = r, { minimum: s, maximum: c, multipleOf: a, exclusiveMaximum: l, exclusiveMinimum: p, isInt: f } = S(e7);
  i.type = f ? "integer" : "number";
  let d = typeof p === "number" && p >= (s ?? Number.NEGATIVE_INFINITY), _ = typeof l === "number" && l <= (c ?? Number.POSITIVE_INFINITY), m = t.target === "draft-04" || t.target === "openapi-3.0";
  if (d) if (m) i.minimum = p, i.exclusiveMinimum = true;
  else i.exclusiveMinimum = p;
  else if (typeof s === "number") i.minimum = s;
  if (_) if (m) i.maximum = l, i.exclusiveMaximum = true;
  else i.exclusiveMaximum = l;
  else if (typeof c === "number") i.maximum = c;
  if (a) {
    let h = /* @__PURE__ */ new Set();
    for (let y of a) if (Number.isFinite(y) && y !== 0) h.add(Math.abs(y));
    else Z(e7, t, i, n, `A multipleOf divisor of ${y} cannot be represented in JSON Schema`);
    let [g, ...x] = h;
    if (g !== void 0) i.multipleOf = g;
    if (x.length) i.allOf = [...i.allOf ?? [], ...x.map((y) => ({ multipleOf: y }))];
  }
}, _t = (e7, t, r, n) => {
  r.type = "boolean";
}, xi = (e7, t, r, n) => {
  Z(e7, t, r, n, "BigInt cannot be represented in JSON Schema");
}, vi = (e7, t, r, n) => {
  Z(e7, t, r, n, "Symbols cannot be represented in JSON Schema");
}, gt = (e7, t, r, n) => {
  if (t.target === "openapi-3.0") r.type = "string", r.nullable = true, r.enum = [null];
  else r.type = "null";
}, xt = (e7, t, r, n) => {
  Z(e7, t, r, n, "Undefined cannot be represented in JSON Schema");
}, yi = (e7, t, r, n) => {
  Z(e7, t, r, n, "Void cannot be represented in JSON Schema");
}, vt = (e7, t, r, n) => {
  r.not = {};
}, $t = (e7, t, r, n) => {
}, zt = (e7, t, r, n) => {
}, $i = (e7, t, r, n) => {
  Z(e7, t, r, n, "Date cannot be represented in JSON Schema");
}, bt = (e7, t, r, n) => {
  let i = e7._zod.def, s = xar(i.entries);
  if (s.length === 0) {
    r.not = {};
    return;
  }
  if (s.every((c) => typeof c === "number")) r.type = "number";
  if (s.every((c) => typeof c === "string")) r.type = "string";
  r.enum = s;
}, kt = (e7, t, r, n) => {
  let i = e7._zod.def;
  if (i.values.length === 0) {
    r.not = {};
    return;
  }
  let s = [];
  for (let c of i.values) if (c === void 0) {
    if (Z(e7, t, r, n, "Literal `undefined` cannot be represented in JSON Schema")) return;
  } else if (typeof c === "bigint") {
    if (Z(e7, t, r, n, "BigInt literals cannot be represented in JSON Schema")) return;
    s.push(Number(c));
  } else s.push(c);
  if (s.length === 0) ;
  else if (s.length === 1) {
    let c = s[0];
    if (r.type = c === null ? "null" : typeof c, t.target === "draft-04" || t.target === "openapi-3.0") r.enum = [c];
    else r.const = c;
  } else {
    if (s.every((c) => typeof c === "number")) r.type = "number";
    if (s.every((c) => typeof c === "string")) r.type = "string";
    if (s.every((c) => typeof c === "boolean")) r.type = "boolean";
    if (s.every((c) => c === null)) r.type = "null";
    r.enum = s;
  }
}, zi = (e7, t, r, n) => {
  Z(e7, t, r, n, "NaN cannot be represented in JSON Schema");
}, bi = (e7, t, r, n) => {
  let i = r, s = e7._zod.pattern;
  if (!s) throw Error("Pattern not found in template literal");
  i.type = "string", i.pattern = s.source;
}, ki = (e7, t, r, n) => {
  let i = r;
  i.type = "string", i.format = "binary", i.contentEncoding = "binary";
  let { minimum: s, maximum: c, mime: a } = S(e7);
  if (s !== void 0) i.minLength = s;
  if (c !== void 0) i.maxLength = c;
  if (!a) return;
  if (a.length === 0) i.not = {};
  else if (a.length === 1) i.contentMediaType = a[0];
  else i.anyOf = a.map((l) => ({ contentMediaType: l }));
}, Zi = (e7, t, r, n) => {
  r.type = "boolean";
}, Zt = (e7, t, r, n) => {
  Z(e7, t, r, n, "Custom types cannot be represented in JSON Schema");
}, wi = (e7, t, r, n) => {
  Z(e7, t, r, n, "Function types cannot be represented in JSON Schema");
}, wt = (e7, t, r, n) => {
  Z(e7, t, r, n, "Transforms cannot be represented in JSON Schema");
}, Pi = (e7, t, r, n) => {
  Z(e7, t, r, n, "Map cannot be represented in JSON Schema");
}, Si = (e7, t, r, n) => {
  Z(e7, t, r, n, "Set cannot be represented in JSON Schema");
}, Pt = (e7, t, r, n) => {
  let i = r, s = e7._zod.def, { minimum: c, maximum: a } = S(e7);
  if (typeof c === "number") i.minItems = c;
  if (typeof a === "number") i.maxItems = a;
  i.type = "array", i.items = fC(s.element, t, { ...n, path: [...n.path, "items"] });
};
function L(e7) {
  let t = e7._zod.def;
  if (t.type === "pipe" && t.in._zod.traits.has("$ZodTransform")) return L(t.out);
  if (t.type === "catch") return L(t.innerType);
  return e7._zod.optin;
}
var St = (e7, t, r, n) => {
  let i = r, s = e7._zod.def, c = s.shape;
  if (Object.getOwnPropertySymbols(c).length && Z(e7, t, i, n, "Symbol keys cannot be represented in JSON Schema")) return;
  i.type = "object", i.properties = {};
  for (let f in c) Pfe(i.properties, f, fC(c[f], t, { ...n, path: [...n.path, "properties", f] }));
  let l = new Set(Object.keys(c)), p = new Set([...l].filter((f) => {
    let d = s.shape[f];
    if (t.io === "input") return L(d) === void 0;
    else return d._zod.optout === void 0;
  }));
  if (p.size > 0) i.required = Array.from(p);
  if (s.catchall?._zod.def.type === "never") i.additionalProperties = false;
  else if (!s.catchall) {
    if (t.io === "output") i.additionalProperties = false;
  } else if (s.catchall) i.additionalProperties = fC(s.catchall, t, { ...n, path: [...n.path, "additionalProperties"] });
}, Ls = (e7, t, r, n) => {
  let i = r, s = e7._zod.def;
  if (Object.getOwnPropertySymbols(s.shape).length && Z(e7, t, i, n, "Symbol keys cannot be represented in JSON Schema")) return;
  if (t.io === "output") {
    for (let a in s.shape) if (P(s.shape[a]) && Z(e7, t, i, n, `z.properties() returns its input, so the output of a transforming schema at key "${a}" cannot be represented in JSON Schema`)) return;
  }
  i.type = "object", i.properties = {};
  for (let a in s.shape) Pfe(i.properties, a, fC(s.shape[a], t, { ...n, path: [...n.path, "properties", a] }));
  let c = Object.keys(s.shape).filter((a) => L(s.shape[a]) === void 0);
  if (c.length > 0) i.required = c;
}, It = (e7, t, r, n) => {
  let i = e7._zod.def, s = i.inclusive === false, c = i.options.map((a, l) => fC(a, t, { ...n, path: [...n.path, s ? "oneOf" : "anyOf", l] }));
  if (s) r.oneOf = c;
  else r.anyOf = c;
}, Ot = (e7, t, r, n) => {
  let i = e7._zod.def, s = fC(i.left, t, { ...n, path: [...n.path, "allOf", 0] }), c = fC(i.right, t, { ...n, path: [...n.path, "allOf", 1] }), a = (p) => "allOf" in p && Object.keys(p).length === 1, l = [...a(s) ? s.allOf : [s], ...a(c) ? c.allOf : [c]];
  r.allOf = l, t.intersections.push(l);
}, At = (e7, t, r, n) => {
  let i = r, s = e7._zod.def;
  i.type = "array";
  let c = t.target === "draft-2020-12" ? "prefixItems" : "items", a = t.target === "draft-2020-12" ? "items" : t.target === "openapi-3.0" ? "items" : "additionalItems", l = s.items.map((g, x) => fC(g, t, { ...n, path: [...n.path, c, x] })), p = s.rest ? fC(s.rest, t, { ...n, path: [...n.path, a, ...t.target === "openapi-3.0" ? [s.items.length] : []] }) : null, f = s.items.length;
  while (f > 0) {
    let g = s.items[f - 1];
    if (!(t.io === "input" ? L(g) !== void 0 : g._zod.optout === "optional")) break;
    f--;
  }
  let d = s.items.length, _ = !s.rest;
  if (t.target === "draft-2020-12") {
    if (i.prefixItems = l, _) i.items = false;
    else if (p) i.items = p;
    if (f > 0) i.minItems = f;
    if (_) i.maxItems = d;
  } else if (t.target === "openapi-3.0") {
    if (i.items = { anyOf: l }, p) i.items.anyOf.push(p);
    if (f > 0) i.minItems = f;
    if (_) i.maxItems = d;
  } else {
    if (i.items = l, _) i.additionalItems = false;
    else if (p) i.additionalItems = p;
    if (f > 0) i.minItems = f;
    if (_) i.maxItems = d;
  }
  let { minimum: m, maximum: h } = S(e7);
  if (typeof m === "number") i.minItems = m;
  if (typeof h === "number") i.maxItems = h;
};
function ft(e7, t, r) {
  if (t.$ref) {
    if (r.has(t)) return t;
    r.add(t);
    let h = e7.get(t)?.def;
    if (!h) return t;
    let g = ft(e7, h, r);
    return g === h ? t : g;
  }
  for (let h of ["anyOf", "oneOf"]) {
    let g = t[h];
    if (!Array.isArray(g)) continue;
    let x = g.map((y) => ft(e7, y, r));
    if (x.some((y, O) => y !== g[O])) t = { ...t, [h]: x };
  }
  let n = Array.isArray(t.type) ? t.type : [t.type], i = !n.includes("string") && n.some((h) => h === "number" || h === "integer"), s = t.enum ?? (t.const !== void 0 ? [t.const] : void 0);
  if (!i && !s?.some((h) => typeof h === "number")) return t;
  let { minimum: c, maximum: a, exclusiveMinimum: l, exclusiveMaximum: p, multipleOf: f, format: d, id: _, ...m } = t;
  if (m.enum) m.enum = m.enum.map((h) => typeof h === "number" ? String(h) : h);
  else if (typeof m.const === "number") m.const = String(m.const);
  if (!i) return m;
  if (m.type = "string", !s) m.pattern = (n.includes("number") ? V : Ne).source;
  return m;
}
var dt = /* @__PURE__ */ new WeakMap();
function Fs(e7) {
  let t = /* @__PURE__ */ new Map();
  for (let n of e7.seen.values()) if (n.def && !t.has(n.schema)) t.set(n.schema, n);
  let r = /* @__PURE__ */ new Map();
  for (let n of dt.get(e7) ?? []) {
    let i = e7.seen.get(n), s = (i?.def ?? i?.schema)?.propertyNames;
    if (!s || s === true || r.has(s)) continue;
    let c = ft(t, s, /* @__PURE__ */ new Set());
    if (c !== s) r.set(s, c);
  }
  if (!r.size) return;
  for (let n of e7.seen.values()) for (let i of [n.schema, n.def]) {
    let s = i && r.get(i.propertyNames);
    if (s) i.propertyNames = s;
  }
}
var Et = (e7, t, r, n) => {
  let i = r, s = e7._zod.def;
  i.type = "object";
  let c = s.keyType, a = S(c).patterns;
  if (s.mode === "loose" && a && a.size > 0) {
    let f = fC(s.valueType, t, { ...n, path: [...n.path, "patternProperties", "*"] });
    i.patternProperties = {};
    for (let d of a) Pfe(i.patternProperties, gi(d).source, f);
  } else {
    if (t.target === "draft-07" || t.target === "draft-2020-12") {
      i.propertyNames = fC(s.keyType, t, { ...n, path: [...n.path, "propertyNames"] });
      let f = dt.get(t);
      if (!f) f = [], dt.set(t, f), t.deferred.push(() => Fs(t));
      f.push(e7);
    }
    i.additionalProperties = fC(s.valueType, t, { ...n, path: [...n.path, "additionalProperties"] });
  }
  let l = c._zod.values, p = t.io === "input" && L(s.valueType) !== void 0;
  if (l && !s.partial && !p) {
    let f = [...l].filter((d) => typeof d === "string" || typeof d === "number");
    if (f.length > 0) i.required = f.map(String);
  }
}, Tt = (e7, t, r, n) => {
  let i = e7._zod.def, s = fC(i.innerType, t, n), c = t.seen.get(e7);
  if (t.target === "openapi-3.0") c.ref = i.innerType, r.nullable = true;
  else r.anyOf = [s, { type: "null" }];
}, Nt = (e7, t, r, n) => {
  let i = e7._zod.def;
  fC(i.innerType, t, n);
  let s = t.seen.get(e7);
  s.ref = i.innerType;
}, Ct = Symbol();
function Ii(e7, t, r, n, i) {
  let s = false, c = JSON.stringify(e7, (a, l) => {
    if (typeof l !== "bigint") return l;
    return s = true, null;
  });
  if (!s) return JSON.parse(c);
  return Z(t, r, n, i, "BigInt defaults cannot be represented in JSON Schema"), Ct;
}
var Rt = (e7, t, r, n) => {
  let i = e7._zod.def;
  fC(i.innerType, t, n);
  let s = t.seen.get(e7);
  s.ref = i.innerType;
  let c = Ii(i.defaultValue, e7, t, r, n);
  if (c !== Ct) r.default = c;
}, Dt = (e7, t, r, n) => {
  let i = e7._zod.def;
  fC(i.innerType, t, n);
  let s = t.seen.get(e7);
  if (s.ref = i.innerType, t.io !== "input") return;
  let c = Ii(i.defaultValue, e7, t, r, n);
  if (c !== Ct) r._prefault = c;
}, jt = (e7, t, r, n) => {
  let i = e7._zod.def;
  fC(i.innerType, t, n);
  let s = t.seen.get(e7);
  s.ref = i.innerType;
  let c;
  try {
    c = i.catchValue(void 0);
  } catch {
    Z(e7, t, r, n, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  r.default = c;
}, Lt = (e7, t, r, n) => {
  let i = e7._zod.def, s = i.in._zod.traits.has("$ZodTransform"), c = t.io === "input" ? s ? i.out : i.in : i.out;
  fC(c, t, n);
  let a = t.seen.get(e7);
  a.ref = c;
}, Ft = (e7, t, r, n) => {
  let i = e7._zod.def;
  fC(i.innerType, t, n);
  let s = t.seen.get(e7);
  s.ref = i.innerType, r.readOnly = true;
}, Oi = (e7, t, r, n) => {
  let i = e7._zod.def;
  fC(i.innerType, t, n);
  let s = t.seen.get(e7);
  s.ref = i.innerType;
}, Ze = (e7, t, r, n) => {
  let i = e7._zod.def;
  fC(i.innerType, t, n);
  let s = t.seen.get(e7);
  s.ref = i.innerType;
}, Mt = (e7, t, r, n) => {
  let i = e7._zod.innerType;
  fC(i, t, n);
  let s = t.seen.get(e7);
  s.ref = i;
}, fi = { string: mt, number: ht, boolean: _t, bigint: xi, symbol: vi, null: gt, undefined: xt, void: yi, never: vt, any: $t, unknown: zt, date: $i, enum: bt, literal: kt, nan: zi, template_literal: bi, file: ki, success: Zi, custom: Zt, properties: Ls, function: wi, transform: wt, map: Pi, set: Si, array: Pt, object: St, union: It, intersection: Ot, tuple: At, record: Et, nullable: Tt, nonoptional: Nt, default: Rt, prefault: Dt, catch: jt, pipe: Lt, readonly: Ft, promise: Oi, optional: Ze, lazy: Mt };
function ost(e7, t) {
  if ("_idmap" in e7) {
    let n = e7, i = ee({ ...t, processors: fi }), s = {};
    for (let l of n._idmap.entries()) {
      let [p, f] = l;
      fC(f, i);
    }
    let c = {}, a = { registry: n, uri: t?.uri, defs: s };
    i.external = a;
    for (let l of n._idmap.entries()) {
      let [p, f] = l;
      te(i, f), Pfe(c, p, re(i, f));
    }
    if (Object.keys(s).length > 0) {
      let l = i.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = { [l]: s };
    }
    return { schemas: c };
  }
  let r = ee({ ...t, processors: fi });
  return fC(e7, r), te(r, e7), re(r, e7);
}
var Ai = new WeakSet([Object.prototype, Error.prototype]);
function we(e7, t, r) {
  Object.defineProperty(e7, t, { configurable: true, enumerable: false, get() {
    let n = r(this);
    return Object.defineProperty(this, t, { value: n, configurable: true, writable: true }), n;
  }, set(n) {
    Object.defineProperty(this, t, { value: n, configurable: true, writable: true });
  } });
}
var Ei = (e7, t) => {
  Gt.init(e7, t), e7.name = "ZodError";
  let r = Object.getPrototypeOf(e7);
  if (Ai.has(r)) return;
  Ai.add(r), we(r, "format", (n) => (i) => Xt(n, i)), we(r, "flatten", (n) => (i) => Yt(n, i)), we(r, "addIssue", (n) => (i) => {
    n.issues.push(i), n.message = JSON.stringify(n.issues, Par, 2);
  }), we(r, "addIssues", (n) => (i) => {
    n.issues.push(...i), n.message = JSON.stringify(n.issues, Par, 2);
  }), Object.defineProperty(r, "isEmpty", { configurable: true, enumerable: false, get() {
    return this.issues.length === 0;
  } });
}, pC = Cr("ZodError", Ei), I = Cr("ZodError", Ei, void 0, { Parent: Error });
var Ti = ce(I), Ni = ue(I), X3r = J(I), Ci = ae(I), Ri = er(I), Di = tr(I), ji = rr(I), Li = or(I), Fi = nr(I), Mi = ir(I), Ui = sr(I), Ji = cr(I);
function Gs() {
  if (!BZ.localeError) jZ(qe());
}
function ie() {
  if (!BZ.memoizer) jZ({ memoizer: vn() });
}
var lT = Cr("ZodType", (e7, t) => (Gs(), dk.init(e7, t), e7.def = t, e7.type = t.type, e7), { check(...e7) {
  let t = this.def;
  return this.clone(tSe(t, { checks: [...t.checks ?? [], ...e7.map((r) => typeof r === "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)] }), { parent: true });
}, with(...e7) {
  return this.check(...e7);
}, clone(e7, t) {
  return I4e(this, e7, t);
}, brand() {
  return this;
}, register(e7, t) {
  return e7.add(this, t), this;
}, refine(e7, t) {
  return this.check(Tc(e7, t));
}, superRefine(e7, t) {
  return this.check(Nc(e7, t));
}, overwrite(e7) {
  return this.check(C(e7));
}, optional() {
  return wa(this);
}, exactOptional() {
  return $c(this);
}, nullable() {
  return Bi(this);
}, nullish() {
  return wa(Bi(this));
}, nonoptional(e7) {
  return Pc(this, e7);
}, array() {
  return T(this);
}, or(e7) {
  return $e([this, e7]);
}, and(e7) {
  return Zbe(this, e7);
}, transform(e7) {
  return Vi(this, Hi(e7));
}, default(e7) {
  return kc(this, e7);
}, prefault(e7) {
  return wc(this, e7);
}, catch(e7) {
  return Sc(this, e7);
}, pipe(e7) {
  return Vi(this, e7);
}, readonly() {
  return Ac(this);
}, describe(e7) {
  let t = this.clone();
  return rst.add(t, { description: e7 }), t;
}, meta(...e7) {
  if (e7.length === 0) return rst.get(this);
  let t = this.clone();
  return rst.add(t, e7[0]), t;
}, isOptional() {
  return this.safeParse(void 0).success;
}, isNullable() {
  return this.safeParse(null).success;
}, apply(e7, ...t) {
  return t.length === 0 ? e7(this) : e7(this, ...t);
}, get "~standard"() {
  return h7o(this, "~standard", { ...Fe(this), jsonSchema: { input: Q(this, "input"), output: Q(this, "output") } });
}, set "~standard"(e7) {
  sst(this, "~standard", e7);
}, parse: function e(t, r) {
  return Ti(this, t, r, { callee: e });
}, parseAsync: async function e2(t, r) {
  return await Ni(this, t, r, { callee: e2 });
}, safeParse(e7, t) {
  return X3r(this, e7, t);
}, async safeParseAsync(e7, t) {
  return Ci(this, e7, t);
}, get spa() {
  return this?.safeParseAsync;
}, set spa(e7) {
  sst(this, "spa", e7);
}, validate(e7, t) {
  return Oe(this, e7, t);
}, validateAsync(e7, t) {
  return Ae(this, e7, t);
}, encode: function e3(t, r) {
  return Ri(this, t, r, { callee: e3 });
}, decode: function e4(t, r) {
  return Di(this, t, r, { callee: e4 });
}, encodeAsync: async function e5(t, r) {
  return await ji(this, t, r, { callee: e5 });
}, decodeAsync: async function e6(t, r) {
  return await Li(this, t, r, { callee: e6 });
}, safeEncode(e7, t) {
  return Fi(this, e7, t);
}, safeDecode(e7, t) {
  return Mi(this, e7, t);
}, async safeEncodeAsync(e7, t) {
  return Ui(this, e7, t);
}, async safeDecodeAsync(e7, t) {
  return Ji(this, e7, t);
}, toJSONSchema(e7) {
  return ci(this, {})(e7);
}, get description() {
  return rst.get(this)?.description;
}, get _def() {
  return this._zod.def;
} }), Ki = Cr("_ZodString", (e7, t) => {
  de.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => mt(e7, r, n, i);
}, jci({ format: (e7) => S(e7).format ?? null, minLength: (e7) => S(e7).minimum ?? null, maxLength: (e7) => S(e7).maximum ?? null }, { regex(...e7) {
  return this.check(et(...e7));
}, includes(...e7) {
  return this.check(ot(...e7));
}, startsWith(...e7) {
  return this.check(nt(...e7));
}, endsWith(...e7) {
  return this.check(it(...e7));
}, min(...e7) {
  return this.check(R(...e7));
}, max(...e7) {
  return this.check(SEn(...e7));
}, length(...e7) {
  return this.check(ke(...e7));
}, nonempty(...e7) {
  return this.check(R(1, ...e7));
}, lowercase(e7) {
  return this.check(tt(e7));
}, uppercase(e7) {
  return this.check(rt(e7));
}, trim() {
  return this.check(ct());
}, normalize(...e7) {
  return this.check(st(...e7));
}, toLowerCase() {
  return this.check(ut());
}, toUpperCase() {
  return this.check(at());
}, slugify() {
  return this.check(lt());
} })), wEn = Cr("ZodString", (e7, t) => {
  de.init(e7, t), Ki.init(e7, t);
}, { email(e7) {
  return this.check(Ye(Wi, e7));
}, url(e7) {
  return this.check(He(Gi, e7));
}, jwt(e7) {
  return this.check(Fn(pc, e7));
}, emoji(e7) {
  return this.check(Pn(Hs, e7));
}, guid(e7) {
  return this.check(bn(Xs, e7));
}, uuid(e7) {
  return this.check(Xe(ne, e7));
}, uuidv4(e7) {
  return this.check(kn(ne, e7));
}, uuidv6(e7) {
  return this.check(Zn(ne, e7));
}, uuidv7(e7) {
  return this.check(wn(ne, e7));
}, nanoid(e7) {
  return this.check(Sn(Qs, e7));
}, cuid(e7) {
  return this.check(In(ec, e7));
}, cuid2(e7) {
  return this.check(On(tc, e7));
}, ulid(e7) {
  return this.check(An(rc, e7));
}, base64(e7) {
  return this.check(Qe(qi, e7));
}, base64url(e7) {
  return this.check(jn(ac, e7));
}, xid(e7) {
  return this.check(En(oc, e7));
}, ksuid(e7) {
  return this.check(Tn(nc, e7));
}, ipv4(e7) {
  return this.check(Nn(ic, e7));
}, ipv6(e7) {
  return this.check(Cn(sc, e7));
}, cidrv4(e7) {
  return this.check(Rn(cc, e7));
}, cidrv6(e7) {
  return this.check(Dn(uc, e7));
}, e164(e7) {
  return this.check(Ln(lc, e7));
}, datetime(e7) {
  return this.check(q3r(i7o, e7));
}, date(e7) {
  return this.check(Y3r(a7o, e7));
}, time(e7) {
  return this.check(Mn(qs, e7));
}, duration(e7) {
  return this.check(Un(Ys, e7));
} });
function o(e7) {
  return zn(wEn, e7);
}
var k = Cr("ZodStringFormat", (e7, t) => {
  b.init(e7, t), Ki.init(e7, t);
}), i7o = Cr("ZodISODateTime", (e7, t) => {
  Po.init(e7, t), k.init(e7, t);
}), a7o = Cr("ZodISODate", (e7, t) => {
  So.init(e7, t), k.init(e7, t);
}), qs = Cr("ZodISOTime", (e7, t) => {
  Io.init(e7, t), k.init(e7, t);
}), Ys = Cr("ZodISODuration", (e7, t) => {
  Oo.init(e7, t), k.init(e7, t);
}), Wi = Cr("ZodEmail", (e7, t) => {
  _o.init(e7, t), k.init(e7, t);
});
function xci(e7) {
  return Ye(Wi, e7);
}
var Xs = Cr("ZodGUID", (e7, t) => {
  mo.init(e7, t), k.init(e7, t);
});
var ne = Cr("ZodUUID", (e7, t) => {
  ho.init(e7, t), k.init(e7, t);
});
function m4t(e7) {
  return Xe(ne, e7);
}
var Gi = Cr("ZodURL", (e7, t) => {
  vo.init(e7, t), k.init(e7, t);
});
function x4e(e7) {
  return He(Gi, e7);
}
var Hs = Cr("ZodEmoji", (e7, t) => {
  yo.init(e7, t), k.init(e7, t);
});
var Qs = Cr("ZodNanoID", (e7, t) => {
  $o.init(e7, t), k.init(e7, t);
});
var ec = Cr("ZodCUID", (e7, t) => {
  zo.init(e7, t), k.init(e7, t);
});
var tc = Cr("ZodCUID2", (e7, t) => {
  bo.init(e7, t), k.init(e7, t);
});
var rc = Cr("ZodULID", (e7, t) => {
  ko.init(e7, t), k.init(e7, t);
});
var oc = Cr("ZodXID", (e7, t) => {
  Zo.init(e7, t), k.init(e7, t);
});
var nc = Cr("ZodKSUID", (e7, t) => {
  wo.init(e7, t), k.init(e7, t);
});
var ic = Cr("ZodIPv4", (e7, t) => {
  Ao.init(e7, t), k.init(e7, t);
});
var sc = Cr("ZodIPv6", (e7, t) => {
  To.init(e7, t), k.init(e7, t);
});
var cc = Cr("ZodCIDRv4", (e7, t) => {
  No.init(e7, t), k.init(e7, t);
});
var uc = Cr("ZodCIDRv6", (e7, t) => {
  Co.init(e7, t), k.init(e7, t);
});
var qi = Cr("ZodBase64", (e7, t) => {
  Do.init(e7, t), k.init(e7, t);
});
function Pci(e7) {
  return Qe(qi, e7);
}
var ac = Cr("ZodBase64URL", (e7, t) => {
  jo.init(e7, t), k.init(e7, t);
});
var lc = Cr("ZodE164", (e7, t) => {
  Lo.init(e7, t), k.init(e7, t);
});
var pc = Cr("ZodJWT", (e7, t) => {
  Fo.init(e7, t), k.init(e7, t);
});
var g4t = Cr("ZodNumber", (e7, t) => {
  Je.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => ht(e7, r, n, i), e7.isFinite = true;
}, jci({ minValue: (e7) => {
  let { minimum: t, exclusiveMinimum: r } = S(e7);
  return Math.max(t ?? Number.NEGATIVE_INFINITY, r ?? Number.NEGATIVE_INFINITY);
}, maxValue: (e7) => {
  let { maximum: t, exclusiveMaximum: r } = S(e7);
  return Math.min(t ?? Number.POSITIVE_INFINITY, r ?? Number.POSITIVE_INFINITY);
}, isInt: (e7) => {
  let { isInt: t, multipleOf: r } = S(e7);
  return !!t || !!r?.some(Number.isSafeInteger);
}, format: (e7) => S(e7).format ?? null }, { gt(e7, t) {
  return this.check(ze(e7, t));
}, gte(e7, t) {
  return this.check(X(e7, t));
}, min(e7, t) {
  return this.check(X(e7, t));
}, lt(e7, t) {
  return this.check(ye(e7, t));
}, lte(e7, t) {
  return this.check(Y(e7, t));
}, max(e7, t) {
  return this.check(Y(e7, t));
}, int(e7) {
  return this.check(Bd(e7));
}, safe(e7) {
  return this.check(Bd(e7));
}, positive(e7) {
  return this.check(ze(0, e7));
}, nonnegative(e7) {
  return this.check(X(0, e7));
}, negative(e7) {
  return this.check(ye(0, e7));
}, nonpositive(e7) {
  return this.check(Y(0, e7));
}, multipleOf(e7, t) {
  return this.check(be(e7, t));
}, step(e7, t) {
  return this.check(be(e7, t));
}, finite() {
  return this;
} }));
function v(e7) {
  return Jn(g4t, e7);
}
var Yi = Cr("ZodNumberFormat", (e7, t) => {
  Mo.init(e7, t), g4t.init(e7, t);
});
function Bd(e7) {
  return Bn(Yi, e7);
}
function Ici(e7) {
  return Vn(Yi, e7);
}
var vEn = Cr("ZodBoolean", (e7, t) => {
  Uo.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => _t(e7, r, n, i);
});
function M(e7) {
  return Kn(vEn, e7);
}
var fc = Cr("ZodUndefined", (e7, t) => {
  Jo.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => xt(e7, r, n, i);
});
function kM(e7) {
  return Wn(fc, e7);
}
var dc = Cr("ZodNull", (e7, t) => {
  Bo.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => gt(e7, r, n, i);
});
function sm(e7) {
  return Gn(dc, e7);
}
var mc = Cr("ZodAny", (e7, t) => {
  Vo.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => $t(e7, r, n, i);
});
function UZ() {
  return qn(mc);
}
var hc = Cr("ZodUnknown", (e7, t) => {
  Ko.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => zt(e7, r, n, i);
});
function oe() {
  return Yn(hc);
}
var _c = Cr("ZodNever", (e7, t) => {
  Wo.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => vt(e7, r, n, i);
});
function P4e(e7) {
  return Xn(_c, e7);
}
var l7o = Cr("ZodArray", (e7, t) => {
  ie(), Go.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Pt(e7, r, n, i), e7.element = t.element;
}, { min(e7, t) {
  return this.check(R(e7, t));
}, nonempty(e7) {
  return this.check(R(1, e7));
}, max(e7, t) {
  return this.check(SEn(e7, t));
}, length(e7, t) {
  return this.check(ke(e7, t));
}, unwrap() {
  return this.element;
} });
function T(e7, t) {
  return Hn(l7o, e7, t);
}
var v$e = Cr("ZodObject", (e7, t) => {
  ie(), Xo.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => St(e7, r, n, i), Qwi(e7, "shape", (r) => r._zod.def.shape, false);
}, { keyof() {
  return B(Object.keys(this._zod.def.shape));
}, catchall(e7) {
  return this.clone(tSe(this._zod.def, { catchall: e7 }));
}, passthrough() {
  return this.clone(tSe(this._zod.def, { catchall: oe() }));
}, loose() {
  return this.clone(tSe(this._zod.def, { catchall: oe() }));
}, strict() {
  return this.clone(tSe(this._zod.def, { catchall: P4e() }));
}, strip() {
  return this.clone(tSe(this._zod.def, { catchall: void 0 }));
}, extend(e7) {
  return qwi(this, e7);
}, safeExtend(e7) {
  return Ywi(this, e7);
}, merge(e7) {
  return Xwi(this, e7);
}, pick(e7) {
  return Kwi(this, e7);
}, omit(e7) {
  return Vwi(this, e7);
}, partial(...e7) {
  return Fci(Car, this, e7[0]);
}, exactPartial(...e7) {
  return Fci(Qi, this, e7[0], "exactPartial");
}, required(...e7) {
  return Jwi(es, this, e7[0]);
} });
function u(e7, t) {
  let r = { type: "object", shape: e7 ?? {}, ...yd(t) };
  return new v$e(r);
}
function Ue(e7, t) {
  return new v$e({ type: "object", shape: e7, catchall: P4e(), ...yd(t) });
}
function yt(e7, t) {
  return new v$e({ type: "object", shape: e7, catchall: oe(), ...yd(t) });
}
var Xi = Cr("ZodUnion", (e7, t) => {
  Be.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => It(e7, r, n, i), e7.options = t.options;
});
function $e(e7, t) {
  return new Xi({ type: "union", options: e7, ...yd(t) });
}
var gc = Cr("ZodDiscriminatedUnion", (e7, t) => {
  Xi.init(e7, t), Ho.init(e7, t);
});
function Gr(e7, t, r) {
  return new gc({ type: "union", options: t, discriminator: e7, ...yd(r) });
}
var xc = Cr("ZodIntersection", (e7, t) => {
  Qo.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Ot(e7, r, n, i);
});
function Zbe(e7, t) {
  return new xc({ type: "intersection", left: e7, right: t });
}
var vc = Cr("ZodTuple", (e7, t) => {
  ie(), en.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => At(e7, r, n, i);
}, { rest(e7) {
  return this.clone({ ...this._zod.def, rest: e7 });
}, partial() {
  let e7 = this._zod.def;
  if (e7.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
  return this.clone({ ...e7, items: e7.items.map((t) => new Car({ type: "optional", innerType: t })) });
} });
function Cv(e7, t, r) {
  let n = t instanceof dk, i = n ? r : t;
  return new vc({ type: "tuple", items: e7, rest: n ? t : null, ...yd(i) });
}
var Jt = Cr("ZodRecord", (e7, t) => {
  ie(), tn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Et(e7, r, n, i), e7.keyType = t.keyType, e7.valueType = t.valueType;
});
function me(e7, t, r) {
  if (!t || !t._zod) return new Jt({ type: "record", keyType: o(), valueType: e7, ...yd(t) });
  return new Jt({ type: "record", keyType: e7, valueType: t, ...yd(r) });
}
function eSe(e7, t, r) {
  return new Jt({ type: "record", keyType: e7, valueType: t, ...yd(r), partial: true });
}
var Aar = Cr("ZodEnum", (e7, t) => {
  rn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (n, i, s) => bt(e7, n, i, s), e7.enum = t.entries, e7.options = [...e7._zod.values];
  let r = new Set(Object.keys(t.entries));
  e7.extract = (n, i) => {
    let s = {};
    for (let c of n) if (r.has(c)) s[c] = t.entries[c];
    else throw Error(`Key ${c} not found in enum`);
    return new Aar({ ...t, checks: [], ...yd(i), entries: s });
  }, e7.exclude = (n, i) => {
    let s = { ...t.entries };
    for (let c of n) if (r.has(c)) delete s[c];
    else throw Error(`Key ${c} not found in enum`);
    return new Aar({ ...t, checks: [], ...yd(i), entries: s });
  };
});
function B(e7, t) {
  let r = Array.isArray(e7) ? Object.fromEntries(e7.map((n) => [n, n])) : e7;
  return new Aar({ type: "enum", entries: r, ...yd(t) });
}
var d7o = Cr("ZodLiteral", (e7, t) => {
  on.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => kt(e7, r, n, i), e7.values = new Set(t.values), Object.defineProperty(e7, "value", { get() {
    if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return t.values[0];
  } });
});
function A(e7, t) {
  return new d7o({ type: "literal", values: Array.isArray(e7) ? e7 : [e7], ...yd(t) });
}
var yc = Cr("ZodTransform", (e7, t) => {
  ie(), nn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => wt(e7, r, n, i), e7._zod.parse = (r, n) => {
    if (n.direction === "backward") throw new Mar(e7.constructor.name);
    r.addIssue = (s) => {
      if (typeof s === "string") r.issues.push(y4t(s, r.value, t));
      else {
        let c = s;
        if (c.fatal) c.continue = false;
        if (c.code ?? (c.code = "custom"), !("input" in c)) c.input = r.value;
        c.inst ?? (c.inst = e7), r.issues.push(y4t(c));
      }
    };
    let i = t.transform(r.value, r);
    if (i instanceof Promise) return i.then((s) => (r.value = s, r));
    return r.value = i, r;
  };
});
function Hi(e7) {
  return new yc({ type: "transform", transform: e7 });
}
var Car = Cr("ZodOptional", (e7, t) => {
  Ve.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Ze(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType;
});
function wa(e7) {
  return new Car({ type: "optional", innerType: e7 });
}
var Qi = Cr("ZodExactOptional", (e7, t) => {
  sn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Ze(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType;
});
function $c(e7) {
  return new Qi({ type: "optional", innerType: e7 });
}
var zc = Cr("ZodNullable", (e7, t) => {
  cn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Tt(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType;
});
function Bi(e7) {
  return new zc({ type: "nullable", innerType: e7 });
}
var bc = Cr("ZodDefault", (e7, t) => {
  un.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Rt(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType, e7.removeDefault = e7.unwrap;
});
function kc(e7, t) {
  return new bc({ type: "default", innerType: e7, get defaultValue() {
    return typeof t === "function" ? t() : f7o(t);
  } });
}
var Zc = Cr("ZodPrefault", (e7, t) => {
  an.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Dt(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType;
});
function wc(e7, t) {
  return new Zc({ type: "prefault", innerType: e7, get defaultValue() {
    return typeof t === "function" ? t() : f7o(t);
  } });
}
var es = Cr("ZodNonOptional", (e7, t) => {
  ln.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Nt(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType;
});
function Pc(e7, t) {
  return new es({ type: "nonoptional", innerType: e7, ...yd(t) });
}
var J3r = Cr("ZodCatch", (e7, t) => {
  pn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => jt(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType, e7.removeCatch = e7.unwrap;
});
function Sc(e7, t) {
  return new J3r({ type: "catch", innerType: e7, catchValue: typeof t === "function" ? t : Wci(t) });
}
var Rar = Cr("ZodPipe", (e7, t) => {
  Ke.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Lt(e7, r, n, i), e7.in = t.in, e7.out = t.out;
});
function Vi(e7, t) {
  return new Rar({ type: "pipe", in: e7, out: t });
}
var Ic = Cr("ZodPreprocess", (e7, t) => {
  Rar.init(e7, t), fn.init(e7, t);
}), Oc = Cr("ZodReadonly", (e7, t) => {
  dn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Ft(e7, r, n, i), e7.unwrap = () => e7._zod.def.innerType;
});
function Ac(e7) {
  return new Oc({ type: "readonly", innerType: e7 });
}
var Ec = Cr("ZodLazy", (e7, t) => {
  V3r.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Mt(e7, r, n, i), e7.unwrap = () => e7._zod.def.getter();
});
function gA(e7) {
  return new Ec({ type: "lazy", getter: e7 });
}
var ts = Cr("ZodCustom", (e7, t) => {
  mn.init(e7, t), lT.init(e7, t), e7._zod.processJSONSchema = (r, n, i) => Zt(e7, r, n, i);
});
function $u(e7, t) {
  return Qn(ts, e7 ?? (() => true), t);
}
function Tc(e7, t = {}) {
  return ei(ts, e7, t);
}
function Nc(e7, t) {
  return ti(e7, t);
}
function Ia(e7, t) {
  return new Ic({ type: "pipe", in: Hi(e7), out: t });
}
export {
  $e,
  $u,
  A,
  Aar,
  Aci,
  B,
  Bd,
  Car,
  Cci,
  Cv,
  Gr,
  Ia,
  Ici,
  J3r,
  M,
  P4e,
  Pci,
  Rar,
  Rci,
  SEn,
  T,
  Tci,
  UZ,
  Ue,
  V3r,
  X3r,
  Y3r,
  Zbe,
  a7o,
  d7o,
  dk,
  eSe,
  fC,
  g4t,
  gA,
  i2,
  i7o,
  kM,
  l7o,
  lT,
  m4t,
  me,
  o,
  oe,
  ost,
  pC,
  q3r,
  rst,
  s7o,
  sm,
  u,
  v,
  v$e,
  vEn,
  wEn,
  wa,
  x4e,
  xci,
  yt
};
