import In from "express";
function Dn(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
function gn(m) {
  if (Object.prototype.hasOwnProperty.call(m, "__esModule")) return m;
  var h = m.default;
  if (typeof h == "function") {
    var b = function p() {
      return this instanceof p ? Reflect.construct(h, arguments, this.constructor) : h.apply(this, arguments);
    };
    b.prototype = h.prototype;
  } else b = {};
  return Object.defineProperty(b, "__esModule", { value: !0 }), Object.keys(m).forEach(function(p) {
    var v = Object.getOwnPropertyDescriptor(m, p);
    Object.defineProperty(b, p, v.get ? v : {
      enumerable: !0,
      get: function() {
        return m[p];
      }
    });
  }), b;
}
var ge = { exports: {} };
const bn = {}, Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bn
}, Symbol.toStringTag, { value: "Module" })), B = /* @__PURE__ */ gn(Mn);
var be = { exports: {} }, ye = { exports: {} }, ri;
function zn() {
  if (ri) return ye.exports;
  ri = 1, ye.exports = d, ye.exports.preferredCharsets = d;
  var m = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function h(i) {
    for (var a = i.split(","), e = 0, n = 0; e < a.length; e++) {
      var o = b(a[e].trim(), e);
      o && (a[n++] = o);
    }
    return a.length = n, a;
  }
  function b(i, a) {
    var e = m.exec(i);
    if (!e) return null;
    var n = e[1], o = 1;
    if (e[2])
      for (var s = e[2].split(";"), r = 0; r < s.length; r++) {
        var u = s[r].trim().split("=");
        if (u[0] === "q") {
          o = parseFloat(u[1]);
          break;
        }
      }
    return {
      charset: n,
      q: o,
      i: a
    };
  }
  function p(i, a, e) {
    for (var n = { o: -1, q: 0, s: 0 }, o = 0; o < a.length; o++) {
      var s = v(i, a[o], e);
      s && (n.s - s.s || n.q - s.q || n.o - s.o) < 0 && (n = s);
    }
    return n;
  }
  function v(i, a, e) {
    var n = 0;
    if (a.charset.toLowerCase() === i.toLowerCase())
      n |= 1;
    else if (a.charset !== "*")
      return null;
    return {
      i: e,
      o: a.i,
      q: a.q,
      s: n
    };
  }
  function d(i, a) {
    var e = h(i === void 0 ? "*" : i || "");
    if (!a)
      return e.filter(t).sort(c).map(l);
    var n = a.map(function(s, r) {
      return p(s, e, r);
    });
    return n.filter(t).sort(c).map(function(s) {
      return a[n.indexOf(s)];
    });
  }
  function c(i, a) {
    return a.q - i.q || a.s - i.s || i.o - a.o || i.i - a.i || 0;
  }
  function l(i) {
    return i.charset;
  }
  function t(i) {
    return i.q > 0;
  }
  return ye.exports;
}
var we = { exports: {} }, ci;
function Ln() {
  if (ci) return we.exports;
  ci = 1, we.exports = d, we.exports.preferredEncodings = d;
  var m = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function h(i) {
    for (var a = i.split(","), e = !1, n = 1, o = 0, s = 0; o < a.length; o++) {
      var r = b(a[o].trim(), o);
      r && (a[s++] = r, e = e || v("identity", r), n = Math.min(n, r.q || 1));
    }
    return e || (a[s++] = {
      encoding: "identity",
      q: n,
      i: o
    }), a.length = s, a;
  }
  function b(i, a) {
    var e = m.exec(i);
    if (!e) return null;
    var n = e[1], o = 1;
    if (e[2])
      for (var s = e[2].split(";"), r = 0; r < s.length; r++) {
        var u = s[r].trim().split("=");
        if (u[0] === "q") {
          o = parseFloat(u[1]);
          break;
        }
      }
    return {
      encoding: n,
      q: o,
      i: a
    };
  }
  function p(i, a, e) {
    for (var n = { o: -1, q: 0, s: 0 }, o = 0; o < a.length; o++) {
      var s = v(i, a[o], e);
      s && (n.s - s.s || n.q - s.q || n.o - s.o) < 0 && (n = s);
    }
    return n;
  }
  function v(i, a, e) {
    var n = 0;
    if (a.encoding.toLowerCase() === i.toLowerCase())
      n |= 1;
    else if (a.encoding !== "*")
      return null;
    return {
      i: e,
      o: a.i,
      q: a.q,
      s: n
    };
  }
  function d(i, a) {
    var e = h(i || "");
    if (!a)
      return e.filter(t).sort(c).map(l);
    var n = a.map(function(s, r) {
      return p(s, e, r);
    });
    return n.filter(t).sort(c).map(function(s) {
      return a[n.indexOf(s)];
    });
  }
  function c(i, a) {
    return a.q - i.q || a.s - i.s || i.o - a.o || i.i - a.i || 0;
  }
  function l(i) {
    return i.encoding;
  }
  function t(i) {
    return i.q > 0;
  }
  return we.exports;
}
var Ce = { exports: {} }, pi;
function Un() {
  if (pi) return Ce.exports;
  pi = 1, Ce.exports = d, Ce.exports.preferredLanguages = d;
  var m = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
  function h(i) {
    for (var a = i.split(","), e = 0, n = 0; e < a.length; e++) {
      var o = b(a[e].trim(), e);
      o && (a[n++] = o);
    }
    return a.length = n, a;
  }
  function b(i, a) {
    var e = m.exec(i);
    if (!e) return null;
    var n = e[1], o = e[2], s = n;
    o && (s += "-" + o);
    var r = 1;
    if (e[3])
      for (var u = e[3].split(";"), f = 0; f < u.length; f++) {
        var g = u[f].split("=");
        g[0] === "q" && (r = parseFloat(g[1]));
      }
    return {
      prefix: n,
      suffix: o,
      q: r,
      i: a,
      full: s
    };
  }
  function p(i, a, e) {
    for (var n = { o: -1, q: 0, s: 0 }, o = 0; o < a.length; o++) {
      var s = v(i, a[o], e);
      s && (n.s - s.s || n.q - s.q || n.o - s.o) < 0 && (n = s);
    }
    return n;
  }
  function v(i, a, e) {
    var n = b(i);
    if (!n) return null;
    var o = 0;
    if (a.full.toLowerCase() === n.full.toLowerCase())
      o |= 4;
    else if (a.prefix.toLowerCase() === n.full.toLowerCase())
      o |= 2;
    else if (a.full.toLowerCase() === n.prefix.toLowerCase())
      o |= 1;
    else if (a.full !== "*")
      return null;
    return {
      i: e,
      o: a.i,
      q: a.q,
      s: o
    };
  }
  function d(i, a) {
    var e = h(i === void 0 ? "*" : i || "");
    if (!a)
      return e.filter(t).sort(c).map(l);
    var n = a.map(function(s, r) {
      return p(s, e, r);
    });
    return n.filter(t).sort(c).map(function(s) {
      return a[n.indexOf(s)];
    });
  }
  function c(i, a) {
    return a.q - i.q || a.s - i.s || i.o - a.o || i.i - a.i || 0;
  }
  function l(i) {
    return i.full;
  }
  function t(i) {
    return i.q > 0;
  }
  return Ce.exports;
}
var ke = { exports: {} }, li;
function $n() {
  if (li) return ke.exports;
  li = 1, ke.exports = d, ke.exports.preferredMediaTypes = d;
  var m = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
  function h(o) {
    for (var s = e(o), r = 0, u = 0; r < s.length; r++) {
      var f = b(s[r].trim(), r);
      f && (s[u++] = f);
    }
    return s.length = u, s;
  }
  function b(o, s) {
    var r = m.exec(o);
    if (!r) return null;
    var u = /* @__PURE__ */ Object.create(null), f = 1, g = r[2], k = r[1];
    if (r[3])
      for (var T = n(r[3]).map(a), E = 0; E < T.length; E++) {
        var x = T[E], w = x[0].toLowerCase(), C = x[1], _ = C && C[0] === '"' && C[C.length - 1] === '"' ? C.substr(1, C.length - 2) : C;
        if (w === "q") {
          f = parseFloat(_);
          break;
        }
        u[w] = _;
      }
    return {
      type: k,
      subtype: g,
      params: u,
      q: f,
      i: s
    };
  }
  function p(o, s, r) {
    for (var u = { o: -1, q: 0, s: 0 }, f = 0; f < s.length; f++) {
      var g = v(o, s[f], r);
      g && (u.s - g.s || u.q - g.q || u.o - g.o) < 0 && (u = g);
    }
    return u;
  }
  function v(o, s, r) {
    var u = b(o), f = 0;
    if (!u)
      return null;
    if (s.type.toLowerCase() == u.type.toLowerCase())
      f |= 4;
    else if (s.type != "*")
      return null;
    if (s.subtype.toLowerCase() == u.subtype.toLowerCase())
      f |= 2;
    else if (s.subtype != "*")
      return null;
    var g = Object.keys(s.params);
    if (g.length > 0)
      if (g.every(function(k) {
        return s.params[k] == "*" || (s.params[k] || "").toLowerCase() == (u.params[k] || "").toLowerCase();
      }))
        f |= 1;
      else
        return null;
    return {
      i: r,
      o: s.i,
      q: s.q,
      s: f
    };
  }
  function d(o, s) {
    var r = h(o === void 0 ? "*/*" : o || "");
    if (!s)
      return r.filter(t).sort(c).map(l);
    var u = s.map(function(g, k) {
      return p(g, r, k);
    });
    return u.filter(t).sort(c).map(function(g) {
      return s[u.indexOf(g)];
    });
  }
  function c(o, s) {
    return s.q - o.q || s.s - o.s || o.o - s.o || o.i - s.i || 0;
  }
  function l(o) {
    return o.type + "/" + o.subtype;
  }
  function t(o) {
    return o.q > 0;
  }
  function i(o) {
    for (var s = 0, r = 0; (r = o.indexOf('"', r)) !== -1; )
      s++, r++;
    return s;
  }
  function a(o) {
    var s = o.indexOf("="), r, u;
    return s === -1 ? r = o : (r = o.substr(0, s), u = o.substr(s + 1)), [r, u];
  }
  function e(o) {
    for (var s = o.split(","), r = 1, u = 0; r < s.length; r++)
      i(s[u]) % 2 == 0 ? s[++u] = s[r] : s[u] += "," + s[r];
    return s.length = u + 1, s;
  }
  function n(o) {
    for (var s = o.split(";"), r = 1, u = 0; r < s.length; r++)
      i(s[u]) % 2 == 0 ? s[++u] = s[r] : s[u] += ";" + s[r];
    s.length = u + 1;
    for (var r = 0; r < s.length; r++)
      s[r] = s[r].trim();
    return s;
  }
  return ke.exports;
}
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var ui;
function Hn() {
  if (ui) return be.exports;
  ui = 1;
  var m = zn(), h = Ln(), b = Un(), p = $n();
  be.exports = v, be.exports.Negotiator = v;
  function v(d) {
    if (!(this instanceof v))
      return new v(d);
    this.request = d;
  }
  return v.prototype.charset = function(c) {
    var l = this.charsets(c);
    return l && l[0];
  }, v.prototype.charsets = function(c) {
    return m(this.request.headers["accept-charset"], c);
  }, v.prototype.encoding = function(c) {
    var l = this.encodings(c);
    return l && l[0];
  }, v.prototype.encodings = function(c) {
    return h(this.request.headers["accept-encoding"], c);
  }, v.prototype.language = function(c) {
    var l = this.languages(c);
    return l && l[0];
  }, v.prototype.languages = function(c) {
    return b(this.request.headers["accept-language"], c);
  }, v.prototype.mediaType = function(c) {
    var l = this.mediaTypes(c);
    return l && l[0];
  }, v.prototype.mediaTypes = function(c) {
    return p(this.request.headers.accept, c);
  }, v.prototype.preferredCharset = v.prototype.charset, v.prototype.preferredCharsets = v.prototype.charsets, v.prototype.preferredEncoding = v.prototype.encoding, v.prototype.preferredEncodings = v.prototype.encodings, v.prototype.preferredLanguage = v.prototype.language, v.prototype.preferredLanguages = v.prototype.languages, v.prototype.preferredMediaType = v.prototype.mediaType, v.prototype.preferredMediaTypes = v.prototype.mediaTypes, be.exports;
}
var Be = {};
const Vn = {
  "application/1d-interleaved-parityfec": { source: "iana" },
  "application/3gpdash-qoe-report+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/3gpp-ims+xml": { source: "iana", compressible: !0 },
  "application/3gpphal+json": { source: "iana", compressible: !0 },
  "application/3gpphalforms+json": { source: "iana", compressible: !0 },
  "application/a2l": { source: "iana" },
  "application/ace+cbor": { source: "iana" },
  "application/activemessage": { source: "iana" },
  "application/activity+json": { source: "iana", compressible: !0 },
  "application/alto-costmap+json": { source: "iana", compressible: !0 },
  "application/alto-costmapfilter+json": { source: "iana", compressible: !0 },
  "application/alto-directory+json": { source: "iana", compressible: !0 },
  "application/alto-endpointcost+json": { source: "iana", compressible: !0 },
  "application/alto-endpointcostparams+json": { source: "iana", compressible: !0 },
  "application/alto-endpointprop+json": { source: "iana", compressible: !0 },
  "application/alto-endpointpropparams+json": { source: "iana", compressible: !0 },
  "application/alto-error+json": { source: "iana", compressible: !0 },
  "application/alto-networkmap+json": { source: "iana", compressible: !0 },
  "application/alto-networkmapfilter+json": { source: "iana", compressible: !0 },
  "application/alto-updatestreamcontrol+json": { source: "iana", compressible: !0 },
  "application/alto-updatestreamparams+json": { source: "iana", compressible: !0 },
  "application/aml": { source: "iana" },
  "application/andrew-inset": { source: "iana", extensions: ["ez"] },
  "application/applefile": { source: "iana" },
  "application/applixware": { source: "apache", extensions: ["aw"] },
  "application/at+jwt": { source: "iana" },
  "application/atf": { source: "iana" },
  "application/atfx": { source: "iana" },
  "application/atom+xml": { source: "iana", compressible: !0, extensions: ["atom"] },
  "application/atomcat+xml": { source: "iana", compressible: !0, extensions: ["atomcat"] },
  "application/atomdeleted+xml": { source: "iana", compressible: !0, extensions: ["atomdeleted"] },
  "application/atomicmail": { source: "iana" },
  "application/atomsvc+xml": { source: "iana", compressible: !0, extensions: ["atomsvc"] },
  "application/atsc-dwd+xml": { source: "iana", compressible: !0, extensions: ["dwd"] },
  "application/atsc-dynamic-event-message": { source: "iana" },
  "application/atsc-held+xml": { source: "iana", compressible: !0, extensions: ["held"] },
  "application/atsc-rdt+json": { source: "iana", compressible: !0 },
  "application/atsc-rsat+xml": { source: "iana", compressible: !0, extensions: ["rsat"] },
  "application/atxml": { source: "iana" },
  "application/auth-policy+xml": { source: "iana", compressible: !0 },
  "application/bacnet-xdd+zip": { source: "iana", compressible: !1 },
  "application/batch-smtp": { source: "iana" },
  "application/bdoc": { compressible: !1, extensions: ["bdoc"] },
  "application/beep+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/calendar+json": { source: "iana", compressible: !0 },
  "application/calendar+xml": { source: "iana", compressible: !0, extensions: ["xcs"] },
  "application/call-completion": { source: "iana" },
  "application/cals-1840": { source: "iana" },
  "application/captive+json": { source: "iana", compressible: !0 },
  "application/cbor": { source: "iana" },
  "application/cbor-seq": { source: "iana" },
  "application/cccex": { source: "iana" },
  "application/ccmp+xml": { source: "iana", compressible: !0 },
  "application/ccxml+xml": { source: "iana", compressible: !0, extensions: ["ccxml"] },
  "application/cdfx+xml": { source: "iana", compressible: !0, extensions: ["cdfx"] },
  "application/cdmi-capability": { source: "iana", extensions: ["cdmia"] },
  "application/cdmi-container": { source: "iana", extensions: ["cdmic"] },
  "application/cdmi-domain": { source: "iana", extensions: ["cdmid"] },
  "application/cdmi-object": { source: "iana", extensions: ["cdmio"] },
  "application/cdmi-queue": { source: "iana", extensions: ["cdmiq"] },
  "application/cdni": { source: "iana" },
  "application/cea": { source: "iana" },
  "application/cea-2018+xml": { source: "iana", compressible: !0 },
  "application/cellml+xml": { source: "iana", compressible: !0 },
  "application/cfw": { source: "iana" },
  "application/city+json": { source: "iana", compressible: !0 },
  "application/clr": { source: "iana" },
  "application/clue+xml": { source: "iana", compressible: !0 },
  "application/clue_info+xml": { source: "iana", compressible: !0 },
  "application/cms": { source: "iana" },
  "application/cnrp+xml": { source: "iana", compressible: !0 },
  "application/coap-group+json": { source: "iana", compressible: !0 },
  "application/coap-payload": { source: "iana" },
  "application/commonground": { source: "iana" },
  "application/conference-info+xml": { source: "iana", compressible: !0 },
  "application/cose": { source: "iana" },
  "application/cose-key": { source: "iana" },
  "application/cose-key-set": { source: "iana" },
  "application/cpl+xml": { source: "iana", compressible: !0, extensions: ["cpl"] },
  "application/csrattrs": { source: "iana" },
  "application/csta+xml": { source: "iana", compressible: !0 },
  "application/cstadata+xml": { source: "iana", compressible: !0 },
  "application/csvm+json": { source: "iana", compressible: !0 },
  "application/cu-seeme": { source: "apache", extensions: ["cu"] },
  "application/cwt": { source: "iana" },
  "application/cybercash": { source: "iana" },
  "application/dart": { compressible: !0 },
  "application/dash+xml": { source: "iana", compressible: !0, extensions: ["mpd"] },
  "application/dash-patch+xml": { source: "iana", compressible: !0, extensions: ["mpp"] },
  "application/dashdelta": { source: "iana" },
  "application/davmount+xml": { source: "iana", compressible: !0, extensions: ["davmount"] },
  "application/dca-rft": { source: "iana" },
  "application/dcd": { source: "iana" },
  "application/dec-dx": { source: "iana" },
  "application/dialog-info+xml": { source: "iana", compressible: !0 },
  "application/dicom": { source: "iana" },
  "application/dicom+json": { source: "iana", compressible: !0 },
  "application/dicom+xml": { source: "iana", compressible: !0 },
  "application/dii": { source: "iana" },
  "application/dit": { source: "iana" },
  "application/dns": { source: "iana" },
  "application/dns+json": { source: "iana", compressible: !0 },
  "application/dns-message": { source: "iana" },
  "application/docbook+xml": { source: "apache", compressible: !0, extensions: ["dbk"] },
  "application/dots+cbor": { source: "iana" },
  "application/dskpp+xml": { source: "iana", compressible: !0 },
  "application/dssc+der": { source: "iana", extensions: ["dssc"] },
  "application/dssc+xml": { source: "iana", compressible: !0, extensions: ["xdssc"] },
  "application/dvcs": { source: "iana" },
  "application/ecmascript": { source: "iana", compressible: !0, extensions: ["es", "ecma"] },
  "application/edi-consent": { source: "iana" },
  "application/edi-x12": { source: "iana", compressible: !1 },
  "application/edifact": { source: "iana", compressible: !1 },
  "application/efi": { source: "iana" },
  "application/elm+json": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/elm+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.cap+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/emergencycalldata.comment+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.control+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.deviceinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.ecall.msd": { source: "iana" },
  "application/emergencycalldata.providerinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.serviceinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.subscriberinfo+xml": { source: "iana", compressible: !0 },
  "application/emergencycalldata.veds+xml": { source: "iana", compressible: !0 },
  "application/emma+xml": { source: "iana", compressible: !0, extensions: ["emma"] },
  "application/emotionml+xml": { source: "iana", compressible: !0, extensions: ["emotionml"] },
  "application/encaprtp": { source: "iana" },
  "application/epp+xml": { source: "iana", compressible: !0 },
  "application/epub+zip": { source: "iana", compressible: !1, extensions: ["epub"] },
  "application/eshop": { source: "iana" },
  "application/exi": { source: "iana", extensions: ["exi"] },
  "application/expect-ct-report+json": { source: "iana", compressible: !0 },
  "application/express": { source: "iana", extensions: ["exp"] },
  "application/fastinfoset": { source: "iana" },
  "application/fastsoap": { source: "iana" },
  "application/fdt+xml": { source: "iana", compressible: !0, extensions: ["fdt"] },
  "application/fhir+json": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/fhir+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/fido.trusted-apps+json": { compressible: !0 },
  "application/fits": { source: "iana" },
  "application/flexfec": { source: "iana" },
  "application/font-sfnt": { source: "iana" },
  "application/font-tdpfr": { source: "iana", extensions: ["pfr"] },
  "application/font-woff": { source: "iana", compressible: !1 },
  "application/framework-attributes+xml": { source: "iana", compressible: !0 },
  "application/geo+json": { source: "iana", compressible: !0, extensions: ["geojson"] },
  "application/geo+json-seq": { source: "iana" },
  "application/geopackage+sqlite3": { source: "iana" },
  "application/geoxacml+xml": { source: "iana", compressible: !0 },
  "application/gltf-buffer": { source: "iana" },
  "application/gml+xml": { source: "iana", compressible: !0, extensions: ["gml"] },
  "application/gpx+xml": { source: "apache", compressible: !0, extensions: ["gpx"] },
  "application/gxf": { source: "apache", extensions: ["gxf"] },
  "application/gzip": { source: "iana", compressible: !1, extensions: ["gz"] },
  "application/h224": { source: "iana" },
  "application/held+xml": { source: "iana", compressible: !0 },
  "application/hjson": { extensions: ["hjson"] },
  "application/http": { source: "iana" },
  "application/hyperstudio": { source: "iana", extensions: ["stk"] },
  "application/ibe-key-request+xml": { source: "iana", compressible: !0 },
  "application/ibe-pkg-reply+xml": { source: "iana", compressible: !0 },
  "application/ibe-pp-data": { source: "iana" },
  "application/iges": { source: "iana" },
  "application/im-iscomposing+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/index": { source: "iana" },
  "application/index.cmd": { source: "iana" },
  "application/index.obj": { source: "iana" },
  "application/index.response": { source: "iana" },
  "application/index.vnd": { source: "iana" },
  "application/inkml+xml": { source: "iana", compressible: !0, extensions: ["ink", "inkml"] },
  "application/iotp": { source: "iana" },
  "application/ipfix": { source: "iana", extensions: ["ipfix"] },
  "application/ipp": { source: "iana" },
  "application/isup": { source: "iana" },
  "application/its+xml": { source: "iana", compressible: !0, extensions: ["its"] },
  "application/java-archive": { source: "apache", compressible: !1, extensions: ["jar", "war", "ear"] },
  "application/java-serialized-object": { source: "apache", compressible: !1, extensions: ["ser"] },
  "application/java-vm": { source: "apache", compressible: !1, extensions: ["class"] },
  "application/javascript": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["js", "mjs"] },
  "application/jf2feed+json": { source: "iana", compressible: !0 },
  "application/jose": { source: "iana" },
  "application/jose+json": { source: "iana", compressible: !0 },
  "application/jrd+json": { source: "iana", compressible: !0 },
  "application/jscalendar+json": { source: "iana", compressible: !0 },
  "application/json": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["json", "map"] },
  "application/json-patch+json": { source: "iana", compressible: !0 },
  "application/json-seq": { source: "iana" },
  "application/json5": { extensions: ["json5"] },
  "application/jsonml+json": { source: "apache", compressible: !0, extensions: ["jsonml"] },
  "application/jwk+json": { source: "iana", compressible: !0 },
  "application/jwk-set+json": { source: "iana", compressible: !0 },
  "application/jwt": { source: "iana" },
  "application/kpml-request+xml": { source: "iana", compressible: !0 },
  "application/kpml-response+xml": { source: "iana", compressible: !0 },
  "application/ld+json": { source: "iana", compressible: !0, extensions: ["jsonld"] },
  "application/lgr+xml": { source: "iana", compressible: !0, extensions: ["lgr"] },
  "application/link-format": { source: "iana" },
  "application/load-control+xml": { source: "iana", compressible: !0 },
  "application/lost+xml": { source: "iana", compressible: !0, extensions: ["lostxml"] },
  "application/lostsync+xml": { source: "iana", compressible: !0 },
  "application/lpf+zip": { source: "iana", compressible: !1 },
  "application/lxf": { source: "iana" },
  "application/mac-binhex40": { source: "iana", extensions: ["hqx"] },
  "application/mac-compactpro": { source: "apache", extensions: ["cpt"] },
  "application/macwriteii": { source: "iana" },
  "application/mads+xml": { source: "iana", compressible: !0, extensions: ["mads"] },
  "application/manifest+json": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["webmanifest"] },
  "application/marc": { source: "iana", extensions: ["mrc"] },
  "application/marcxml+xml": { source: "iana", compressible: !0, extensions: ["mrcx"] },
  "application/mathematica": { source: "iana", extensions: ["ma", "nb", "mb"] },
  "application/mathml+xml": { source: "iana", compressible: !0, extensions: ["mathml"] },
  "application/mathml-content+xml": { source: "iana", compressible: !0 },
  "application/mathml-presentation+xml": { source: "iana", compressible: !0 },
  "application/mbms-associated-procedure-description+xml": { source: "iana", compressible: !0 },
  "application/mbms-deregister+xml": { source: "iana", compressible: !0 },
  "application/mbms-envelope+xml": { source: "iana", compressible: !0 },
  "application/mbms-msk+xml": { source: "iana", compressible: !0 },
  "application/mbms-msk-response+xml": { source: "iana", compressible: !0 },
  "application/mbms-protection-description+xml": { source: "iana", compressible: !0 },
  "application/mbms-reception-report+xml": { source: "iana", compressible: !0 },
  "application/mbms-register+xml": { source: "iana", compressible: !0 },
  "application/mbms-register-response+xml": { source: "iana", compressible: !0 },
  "application/mbms-schedule+xml": { source: "iana", compressible: !0 },
  "application/mbms-user-service-description+xml": { source: "iana", compressible: !0 },
  "application/mbox": { source: "iana", extensions: ["mbox"] },
  "application/media-policy-dataset+xml": { source: "iana", compressible: !0, extensions: ["mpf"] },
  "application/media_control+xml": { source: "iana", compressible: !0 },
  "application/mediaservercontrol+xml": { source: "iana", compressible: !0, extensions: ["mscml"] },
  "application/merge-patch+json": { source: "iana", compressible: !0 },
  "application/metalink+xml": { source: "apache", compressible: !0, extensions: ["metalink"] },
  "application/metalink4+xml": { source: "iana", compressible: !0, extensions: ["meta4"] },
  "application/mets+xml": { source: "iana", compressible: !0, extensions: ["mets"] },
  "application/mf4": { source: "iana" },
  "application/mikey": { source: "iana" },
  "application/mipc": { source: "iana" },
  "application/missing-blocks+cbor-seq": { source: "iana" },
  "application/mmt-aei+xml": { source: "iana", compressible: !0, extensions: ["maei"] },
  "application/mmt-usd+xml": { source: "iana", compressible: !0, extensions: ["musd"] },
  "application/mods+xml": { source: "iana", compressible: !0, extensions: ["mods"] },
  "application/moss-keys": { source: "iana" },
  "application/moss-signature": { source: "iana" },
  "application/mosskey-data": { source: "iana" },
  "application/mosskey-request": { source: "iana" },
  "application/mp21": { source: "iana", extensions: ["m21", "mp21"] },
  "application/mp4": { source: "iana", extensions: ["mp4s", "m4p"] },
  "application/mpeg4-generic": { source: "iana" },
  "application/mpeg4-iod": { source: "iana" },
  "application/mpeg4-iod-xmt": { source: "iana" },
  "application/mrb-consumer+xml": { source: "iana", compressible: !0 },
  "application/mrb-publish+xml": { source: "iana", compressible: !0 },
  "application/msc-ivr+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/msc-mixer+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/msword": { source: "iana", compressible: !1, extensions: ["doc", "dot"] },
  "application/mud+json": { source: "iana", compressible: !0 },
  "application/multipart-core": { source: "iana" },
  "application/mxf": { source: "iana", extensions: ["mxf"] },
  "application/n-quads": { source: "iana", extensions: ["nq"] },
  "application/n-triples": { source: "iana", extensions: ["nt"] },
  "application/nasdata": { source: "iana" },
  "application/news-checkgroups": { source: "iana", charset: "US-ASCII" },
  "application/news-groupinfo": { source: "iana", charset: "US-ASCII" },
  "application/news-transmission": { source: "iana" },
  "application/nlsml+xml": { source: "iana", compressible: !0 },
  "application/node": { source: "iana", extensions: ["cjs"] },
  "application/nss": { source: "iana" },
  "application/oauth-authz-req+jwt": { source: "iana" },
  "application/oblivious-dns-message": { source: "iana" },
  "application/ocsp-request": { source: "iana" },
  "application/ocsp-response": { source: "iana" },
  "application/octet-stream": { source: "iana", compressible: !1, extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] },
  "application/oda": { source: "iana", extensions: ["oda"] },
  "application/odm+xml": { source: "iana", compressible: !0 },
  "application/odx": { source: "iana" },
  "application/oebps-package+xml": { source: "iana", compressible: !0, extensions: ["opf"] },
  "application/ogg": { source: "iana", compressible: !1, extensions: ["ogx"] },
  "application/omdoc+xml": { source: "apache", compressible: !0, extensions: ["omdoc"] },
  "application/onenote": { source: "apache", extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"] },
  "application/opc-nodeset+xml": { source: "iana", compressible: !0 },
  "application/oscore": { source: "iana" },
  "application/oxps": { source: "iana", extensions: ["oxps"] },
  "application/p21": { source: "iana" },
  "application/p21+zip": { source: "iana", compressible: !1 },
  "application/p2p-overlay+xml": { source: "iana", compressible: !0, extensions: ["relo"] },
  "application/parityfec": { source: "iana" },
  "application/passport": { source: "iana" },
  "application/patch-ops-error+xml": { source: "iana", compressible: !0, extensions: ["xer"] },
  "application/pdf": { source: "iana", compressible: !1, extensions: ["pdf"] },
  "application/pdx": { source: "iana" },
  "application/pem-certificate-chain": { source: "iana" },
  "application/pgp-encrypted": { source: "iana", compressible: !1, extensions: ["pgp"] },
  "application/pgp-keys": { source: "iana", extensions: ["asc"] },
  "application/pgp-signature": { source: "iana", extensions: ["asc", "sig"] },
  "application/pics-rules": { source: "apache", extensions: ["prf"] },
  "application/pidf+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/pidf-diff+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/pkcs10": { source: "iana", extensions: ["p10"] },
  "application/pkcs12": { source: "iana" },
  "application/pkcs7-mime": { source: "iana", extensions: ["p7m", "p7c"] },
  "application/pkcs7-signature": { source: "iana", extensions: ["p7s"] },
  "application/pkcs8": { source: "iana", extensions: ["p8"] },
  "application/pkcs8-encrypted": { source: "iana" },
  "application/pkix-attr-cert": { source: "iana", extensions: ["ac"] },
  "application/pkix-cert": { source: "iana", extensions: ["cer"] },
  "application/pkix-crl": { source: "iana", extensions: ["crl"] },
  "application/pkix-pkipath": { source: "iana", extensions: ["pkipath"] },
  "application/pkixcmp": { source: "iana", extensions: ["pki"] },
  "application/pls+xml": { source: "iana", compressible: !0, extensions: ["pls"] },
  "application/poc-settings+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/postscript": { source: "iana", compressible: !0, extensions: ["ai", "eps", "ps"] },
  "application/ppsp-tracker+json": { source: "iana", compressible: !0 },
  "application/problem+json": { source: "iana", compressible: !0 },
  "application/problem+xml": { source: "iana", compressible: !0 },
  "application/provenance+xml": { source: "iana", compressible: !0, extensions: ["provx"] },
  "application/prs.alvestrand.titrax-sheet": { source: "iana" },
  "application/prs.cww": { source: "iana", extensions: ["cww"] },
  "application/prs.cyn": { source: "iana", charset: "7-BIT" },
  "application/prs.hpub+zip": { source: "iana", compressible: !1 },
  "application/prs.nprend": { source: "iana" },
  "application/prs.plucker": { source: "iana" },
  "application/prs.rdf-xml-crypt": { source: "iana" },
  "application/prs.xsf+xml": { source: "iana", compressible: !0 },
  "application/pskc+xml": { source: "iana", compressible: !0, extensions: ["pskcxml"] },
  "application/pvd+json": { source: "iana", compressible: !0 },
  "application/qsig": { source: "iana" },
  "application/raml+yaml": { compressible: !0, extensions: ["raml"] },
  "application/raptorfec": { source: "iana" },
  "application/rdap+json": { source: "iana", compressible: !0 },
  "application/rdf+xml": { source: "iana", compressible: !0, extensions: ["rdf", "owl"] },
  "application/reginfo+xml": { source: "iana", compressible: !0, extensions: ["rif"] },
  "application/relax-ng-compact-syntax": { source: "iana", extensions: ["rnc"] },
  "application/remote-printing": { source: "iana" },
  "application/reputon+json": { source: "iana", compressible: !0 },
  "application/resource-lists+xml": { source: "iana", compressible: !0, extensions: ["rl"] },
  "application/resource-lists-diff+xml": { source: "iana", compressible: !0, extensions: ["rld"] },
  "application/rfc+xml": { source: "iana", compressible: !0 },
  "application/riscos": { source: "iana" },
  "application/rlmi+xml": { source: "iana", compressible: !0 },
  "application/rls-services+xml": { source: "iana", compressible: !0, extensions: ["rs"] },
  "application/route-apd+xml": { source: "iana", compressible: !0, extensions: ["rapd"] },
  "application/route-s-tsid+xml": { source: "iana", compressible: !0, extensions: ["sls"] },
  "application/route-usd+xml": { source: "iana", compressible: !0, extensions: ["rusd"] },
  "application/rpki-ghostbusters": { source: "iana", extensions: ["gbr"] },
  "application/rpki-manifest": { source: "iana", extensions: ["mft"] },
  "application/rpki-publication": { source: "iana" },
  "application/rpki-roa": { source: "iana", extensions: ["roa"] },
  "application/rpki-updown": { source: "iana" },
  "application/rsd+xml": { source: "apache", compressible: !0, extensions: ["rsd"] },
  "application/rss+xml": { source: "apache", compressible: !0, extensions: ["rss"] },
  "application/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
  "application/rtploopback": { source: "iana" },
  "application/rtx": { source: "iana" },
  "application/samlassertion+xml": { source: "iana", compressible: !0 },
  "application/samlmetadata+xml": { source: "iana", compressible: !0 },
  "application/sarif+json": { source: "iana", compressible: !0 },
  "application/sarif-external-properties+json": { source: "iana", compressible: !0 },
  "application/sbe": { source: "iana" },
  "application/sbml+xml": { source: "iana", compressible: !0, extensions: ["sbml"] },
  "application/scaip+xml": { source: "iana", compressible: !0 },
  "application/scim+json": { source: "iana", compressible: !0 },
  "application/scvp-cv-request": { source: "iana", extensions: ["scq"] },
  "application/scvp-cv-response": { source: "iana", extensions: ["scs"] },
  "application/scvp-vp-request": { source: "iana", extensions: ["spq"] },
  "application/scvp-vp-response": { source: "iana", extensions: ["spp"] },
  "application/sdp": { source: "iana", extensions: ["sdp"] },
  "application/secevent+jwt": { source: "iana" },
  "application/senml+cbor": { source: "iana" },
  "application/senml+json": { source: "iana", compressible: !0 },
  "application/senml+xml": { source: "iana", compressible: !0, extensions: ["senmlx"] },
  "application/senml-etch+cbor": { source: "iana" },
  "application/senml-etch+json": { source: "iana", compressible: !0 },
  "application/senml-exi": { source: "iana" },
  "application/sensml+cbor": { source: "iana" },
  "application/sensml+json": { source: "iana", compressible: !0 },
  "application/sensml+xml": { source: "iana", compressible: !0, extensions: ["sensmlx"] },
  "application/sensml-exi": { source: "iana" },
  "application/sep+xml": { source: "iana", compressible: !0 },
  "application/sep-exi": { source: "iana" },
  "application/session-info": { source: "iana" },
  "application/set-payment": { source: "iana" },
  "application/set-payment-initiation": { source: "iana", extensions: ["setpay"] },
  "application/set-registration": { source: "iana" },
  "application/set-registration-initiation": { source: "iana", extensions: ["setreg"] },
  "application/sgml": { source: "iana" },
  "application/sgml-open-catalog": { source: "iana" },
  "application/shf+xml": { source: "iana", compressible: !0, extensions: ["shf"] },
  "application/sieve": { source: "iana", extensions: ["siv", "sieve"] },
  "application/simple-filter+xml": { source: "iana", compressible: !0 },
  "application/simple-message-summary": { source: "iana" },
  "application/simplesymbolcontainer": { source: "iana" },
  "application/sipc": { source: "iana" },
  "application/slate": { source: "iana" },
  "application/smil": { source: "iana" },
  "application/smil+xml": { source: "iana", compressible: !0, extensions: ["smi", "smil"] },
  "application/smpte336m": { source: "iana" },
  "application/soap+fastinfoset": { source: "iana" },
  "application/soap+xml": { source: "iana", compressible: !0 },
  "application/sparql-query": { source: "iana", extensions: ["rq"] },
  "application/sparql-results+xml": { source: "iana", compressible: !0, extensions: ["srx"] },
  "application/spdx+json": { source: "iana", compressible: !0 },
  "application/spirits-event+xml": { source: "iana", compressible: !0 },
  "application/sql": { source: "iana" },
  "application/srgs": { source: "iana", extensions: ["gram"] },
  "application/srgs+xml": { source: "iana", compressible: !0, extensions: ["grxml"] },
  "application/sru+xml": { source: "iana", compressible: !0, extensions: ["sru"] },
  "application/ssdl+xml": { source: "apache", compressible: !0, extensions: ["ssdl"] },
  "application/ssml+xml": { source: "iana", compressible: !0, extensions: ["ssml"] },
  "application/stix+json": { source: "iana", compressible: !0 },
  "application/swid+xml": { source: "iana", compressible: !0, extensions: ["swidtag"] },
  "application/tamp-apex-update": { source: "iana" },
  "application/tamp-apex-update-confirm": { source: "iana" },
  "application/tamp-community-update": { source: "iana" },
  "application/tamp-community-update-confirm": { source: "iana" },
  "application/tamp-error": { source: "iana" },
  "application/tamp-sequence-adjust": { source: "iana" },
  "application/tamp-sequence-adjust-confirm": { source: "iana" },
  "application/tamp-status-query": { source: "iana" },
  "application/tamp-status-response": { source: "iana" },
  "application/tamp-update": { source: "iana" },
  "application/tamp-update-confirm": { source: "iana" },
  "application/tar": { compressible: !0 },
  "application/taxii+json": { source: "iana", compressible: !0 },
  "application/td+json": { source: "iana", compressible: !0 },
  "application/tei+xml": { source: "iana", compressible: !0, extensions: ["tei", "teicorpus"] },
  "application/tetra_isi": { source: "iana" },
  "application/thraud+xml": { source: "iana", compressible: !0, extensions: ["tfi"] },
  "application/timestamp-query": { source: "iana" },
  "application/timestamp-reply": { source: "iana" },
  "application/timestamped-data": { source: "iana", extensions: ["tsd"] },
  "application/tlsrpt+gzip": { source: "iana" },
  "application/tlsrpt+json": { source: "iana", compressible: !0 },
  "application/tnauthlist": { source: "iana" },
  "application/token-introspection+jwt": { source: "iana" },
  "application/toml": { compressible: !0, extensions: ["toml"] },
  "application/trickle-ice-sdpfrag": { source: "iana" },
  "application/trig": { source: "iana", extensions: ["trig"] },
  "application/ttml+xml": { source: "iana", compressible: !0, extensions: ["ttml"] },
  "application/tve-trigger": { source: "iana" },
  "application/tzif": { source: "iana" },
  "application/tzif-leap": { source: "iana" },
  "application/ubjson": { compressible: !1, extensions: ["ubj"] },
  "application/ulpfec": { source: "iana" },
  "application/urc-grpsheet+xml": { source: "iana", compressible: !0 },
  "application/urc-ressheet+xml": { source: "iana", compressible: !0, extensions: ["rsheet"] },
  "application/urc-targetdesc+xml": { source: "iana", compressible: !0, extensions: ["td"] },
  "application/urc-uisocketdesc+xml": { source: "iana", compressible: !0 },
  "application/vcard+json": { source: "iana", compressible: !0 },
  "application/vcard+xml": { source: "iana", compressible: !0 },
  "application/vemmi": { source: "iana" },
  "application/vividence.scriptfile": { source: "apache" },
  "application/vnd.1000minds.decision-model+xml": { source: "iana", compressible: !0, extensions: ["1km"] },
  "application/vnd.3gpp-prose+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp-prose-pc3ch+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp-v2x-local-service-information": { source: "iana" },
  "application/vnd.3gpp.5gnas": { source: "iana" },
  "application/vnd.3gpp.access-transfer-events+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.bsf+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.gmop+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.gtpc": { source: "iana" },
  "application/vnd.3gpp.interworking-data": { source: "iana" },
  "application/vnd.3gpp.lpp": { source: "iana" },
  "application/vnd.3gpp.mc-signalling-ear": { source: "iana" },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-payload": { source: "iana" },
  "application/vnd.3gpp.mcdata-service-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-signalling": { source: "iana" },
  "application/vnd.3gpp.mcdata-ue-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcdata-user-profile+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-floor-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-location-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-service-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-signed+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-ue-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcptt-user-profile+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-location-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-service-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-ue-config+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mcvideo-user-profile+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.mid-call+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.ngap": { source: "iana" },
  "application/vnd.3gpp.pfcp": { source: "iana" },
  "application/vnd.3gpp.pic-bw-large": { source: "iana", extensions: ["plb"] },
  "application/vnd.3gpp.pic-bw-small": { source: "iana", extensions: ["psb"] },
  "application/vnd.3gpp.pic-bw-var": { source: "iana", extensions: ["pvb"] },
  "application/vnd.3gpp.s1ap": { source: "iana" },
  "application/vnd.3gpp.sms": { source: "iana" },
  "application/vnd.3gpp.sms+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.srvcc-ext+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.srvcc-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.state-and-event-info+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp.ussd+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp2.bcmcsinfo+xml": { source: "iana", compressible: !0 },
  "application/vnd.3gpp2.sms": { source: "iana" },
  "application/vnd.3gpp2.tcap": { source: "iana", extensions: ["tcap"] },
  "application/vnd.3lightssoftware.imagescal": { source: "iana" },
  "application/vnd.3m.post-it-notes": { source: "iana", extensions: ["pwn"] },
  "application/vnd.accpac.simply.aso": { source: "iana", extensions: ["aso"] },
  "application/vnd.accpac.simply.imp": { source: "iana", extensions: ["imp"] },
  "application/vnd.acucobol": { source: "iana", extensions: ["acu"] },
  "application/vnd.acucorp": { source: "iana", extensions: ["atc", "acutc"] },
  "application/vnd.adobe.air-application-installer-package+zip": { source: "apache", compressible: !1, extensions: ["air"] },
  "application/vnd.adobe.flash.movie": { source: "iana" },
  "application/vnd.adobe.formscentral.fcdt": { source: "iana", extensions: ["fcdt"] },
  "application/vnd.adobe.fxp": { source: "iana", extensions: ["fxp", "fxpl"] },
  "application/vnd.adobe.partial-upload": { source: "iana" },
  "application/vnd.adobe.xdp+xml": { source: "iana", compressible: !0, extensions: ["xdp"] },
  "application/vnd.adobe.xfdf": { source: "iana", extensions: ["xfdf"] },
  "application/vnd.aether.imp": { source: "iana" },
  "application/vnd.afpc.afplinedata": { source: "iana" },
  "application/vnd.afpc.afplinedata-pagedef": { source: "iana" },
  "application/vnd.afpc.cmoca-cmresource": { source: "iana" },
  "application/vnd.afpc.foca-charset": { source: "iana" },
  "application/vnd.afpc.foca-codedfont": { source: "iana" },
  "application/vnd.afpc.foca-codepage": { source: "iana" },
  "application/vnd.afpc.modca": { source: "iana" },
  "application/vnd.afpc.modca-cmtable": { source: "iana" },
  "application/vnd.afpc.modca-formdef": { source: "iana" },
  "application/vnd.afpc.modca-mediummap": { source: "iana" },
  "application/vnd.afpc.modca-objectcontainer": { source: "iana" },
  "application/vnd.afpc.modca-overlay": { source: "iana" },
  "application/vnd.afpc.modca-pagesegment": { source: "iana" },
  "application/vnd.age": { source: "iana", extensions: ["age"] },
  "application/vnd.ah-barcode": { source: "iana" },
  "application/vnd.ahead.space": { source: "iana", extensions: ["ahead"] },
  "application/vnd.airzip.filesecure.azf": { source: "iana", extensions: ["azf"] },
  "application/vnd.airzip.filesecure.azs": { source: "iana", extensions: ["azs"] },
  "application/vnd.amadeus+json": { source: "iana", compressible: !0 },
  "application/vnd.amazon.ebook": { source: "apache", extensions: ["azw"] },
  "application/vnd.amazon.mobi8-ebook": { source: "iana" },
  "application/vnd.americandynamics.acc": { source: "iana", extensions: ["acc"] },
  "application/vnd.amiga.ami": { source: "iana", extensions: ["ami"] },
  "application/vnd.amundsen.maze+xml": { source: "iana", compressible: !0 },
  "application/vnd.android.ota": { source: "iana" },
  "application/vnd.android.package-archive": { source: "apache", compressible: !1, extensions: ["apk"] },
  "application/vnd.anki": { source: "iana" },
  "application/vnd.anser-web-certificate-issue-initiation": { source: "iana", extensions: ["cii"] },
  "application/vnd.anser-web-funds-transfer-initiation": { source: "apache", extensions: ["fti"] },
  "application/vnd.antix.game-component": { source: "iana", extensions: ["atx"] },
  "application/vnd.apache.arrow.file": { source: "iana" },
  "application/vnd.apache.arrow.stream": { source: "iana" },
  "application/vnd.apache.thrift.binary": { source: "iana" },
  "application/vnd.apache.thrift.compact": { source: "iana" },
  "application/vnd.apache.thrift.json": { source: "iana" },
  "application/vnd.api+json": { source: "iana", compressible: !0 },
  "application/vnd.aplextor.warrp+json": { source: "iana", compressible: !0 },
  "application/vnd.apothekende.reservation+json": { source: "iana", compressible: !0 },
  "application/vnd.apple.installer+xml": { source: "iana", compressible: !0, extensions: ["mpkg"] },
  "application/vnd.apple.keynote": { source: "iana", extensions: ["key"] },
  "application/vnd.apple.mpegurl": { source: "iana", extensions: ["m3u8"] },
  "application/vnd.apple.numbers": { source: "iana", extensions: ["numbers"] },
  "application/vnd.apple.pages": { source: "iana", extensions: ["pages"] },
  "application/vnd.apple.pkpass": { compressible: !1, extensions: ["pkpass"] },
  "application/vnd.arastra.swi": { source: "iana" },
  "application/vnd.aristanetworks.swi": { source: "iana", extensions: ["swi"] },
  "application/vnd.artisan+json": { source: "iana", compressible: !0 },
  "application/vnd.artsquare": { source: "iana" },
  "application/vnd.astraea-software.iota": { source: "iana", extensions: ["iota"] },
  "application/vnd.audiograph": { source: "iana", extensions: ["aep"] },
  "application/vnd.autopackage": { source: "iana" },
  "application/vnd.avalon+json": { source: "iana", compressible: !0 },
  "application/vnd.avistar+xml": { source: "iana", compressible: !0 },
  "application/vnd.balsamiq.bmml+xml": { source: "iana", compressible: !0, extensions: ["bmml"] },
  "application/vnd.balsamiq.bmpr": { source: "iana" },
  "application/vnd.banana-accounting": { source: "iana" },
  "application/vnd.bbf.usp.error": { source: "iana" },
  "application/vnd.bbf.usp.msg": { source: "iana" },
  "application/vnd.bbf.usp.msg+json": { source: "iana", compressible: !0 },
  "application/vnd.bekitzur-stech+json": { source: "iana", compressible: !0 },
  "application/vnd.bint.med-content": { source: "iana" },
  "application/vnd.biopax.rdf+xml": { source: "iana", compressible: !0 },
  "application/vnd.blink-idb-value-wrapper": { source: "iana" },
  "application/vnd.blueice.multipass": { source: "iana", extensions: ["mpm"] },
  "application/vnd.bluetooth.ep.oob": { source: "iana" },
  "application/vnd.bluetooth.le.oob": { source: "iana" },
  "application/vnd.bmi": { source: "iana", extensions: ["bmi"] },
  "application/vnd.bpf": { source: "iana" },
  "application/vnd.bpf3": { source: "iana" },
  "application/vnd.businessobjects": { source: "iana", extensions: ["rep"] },
  "application/vnd.byu.uapi+json": { source: "iana", compressible: !0 },
  "application/vnd.cab-jscript": { source: "iana" },
  "application/vnd.canon-cpdl": { source: "iana" },
  "application/vnd.canon-lips": { source: "iana" },
  "application/vnd.capasystems-pg+json": { source: "iana", compressible: !0 },
  "application/vnd.cendio.thinlinc.clientconf": { source: "iana" },
  "application/vnd.century-systems.tcp_stream": { source: "iana" },
  "application/vnd.chemdraw+xml": { source: "iana", compressible: !0, extensions: ["cdxml"] },
  "application/vnd.chess-pgn": { source: "iana" },
  "application/vnd.chipnuts.karaoke-mmd": { source: "iana", extensions: ["mmd"] },
  "application/vnd.ciedi": { source: "iana" },
  "application/vnd.cinderella": { source: "iana", extensions: ["cdy"] },
  "application/vnd.cirpack.isdn-ext": { source: "iana" },
  "application/vnd.citationstyles.style+xml": { source: "iana", compressible: !0, extensions: ["csl"] },
  "application/vnd.claymore": { source: "iana", extensions: ["cla"] },
  "application/vnd.cloanto.rp9": { source: "iana", extensions: ["rp9"] },
  "application/vnd.clonk.c4group": { source: "iana", extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"] },
  "application/vnd.cluetrust.cartomobile-config": { source: "iana", extensions: ["c11amc"] },
  "application/vnd.cluetrust.cartomobile-config-pkg": { source: "iana", extensions: ["c11amz"] },
  "application/vnd.coffeescript": { source: "iana" },
  "application/vnd.collabio.xodocuments.document": { source: "iana" },
  "application/vnd.collabio.xodocuments.document-template": { source: "iana" },
  "application/vnd.collabio.xodocuments.presentation": { source: "iana" },
  "application/vnd.collabio.xodocuments.presentation-template": { source: "iana" },
  "application/vnd.collabio.xodocuments.spreadsheet": { source: "iana" },
  "application/vnd.collabio.xodocuments.spreadsheet-template": { source: "iana" },
  "application/vnd.collection+json": { source: "iana", compressible: !0 },
  "application/vnd.collection.doc+json": { source: "iana", compressible: !0 },
  "application/vnd.collection.next+json": { source: "iana", compressible: !0 },
  "application/vnd.comicbook+zip": { source: "iana", compressible: !1 },
  "application/vnd.comicbook-rar": { source: "iana" },
  "application/vnd.commerce-battelle": { source: "iana" },
  "application/vnd.commonspace": { source: "iana", extensions: ["csp"] },
  "application/vnd.contact.cmsg": { source: "iana", extensions: ["cdbcmsg"] },
  "application/vnd.coreos.ignition+json": { source: "iana", compressible: !0 },
  "application/vnd.cosmocaller": { source: "iana", extensions: ["cmc"] },
  "application/vnd.crick.clicker": { source: "iana", extensions: ["clkx"] },
  "application/vnd.crick.clicker.keyboard": { source: "iana", extensions: ["clkk"] },
  "application/vnd.crick.clicker.palette": { source: "iana", extensions: ["clkp"] },
  "application/vnd.crick.clicker.template": { source: "iana", extensions: ["clkt"] },
  "application/vnd.crick.clicker.wordbank": { source: "iana", extensions: ["clkw"] },
  "application/vnd.criticaltools.wbs+xml": { source: "iana", compressible: !0, extensions: ["wbs"] },
  "application/vnd.cryptii.pipe+json": { source: "iana", compressible: !0 },
  "application/vnd.crypto-shade-file": { source: "iana" },
  "application/vnd.cryptomator.encrypted": { source: "iana" },
  "application/vnd.cryptomator.vault": { source: "iana" },
  "application/vnd.ctc-posml": { source: "iana", extensions: ["pml"] },
  "application/vnd.ctct.ws+xml": { source: "iana", compressible: !0 },
  "application/vnd.cups-pdf": { source: "iana" },
  "application/vnd.cups-postscript": { source: "iana" },
  "application/vnd.cups-ppd": { source: "iana", extensions: ["ppd"] },
  "application/vnd.cups-raster": { source: "iana" },
  "application/vnd.cups-raw": { source: "iana" },
  "application/vnd.curl": { source: "iana" },
  "application/vnd.curl.car": { source: "apache", extensions: ["car"] },
  "application/vnd.curl.pcurl": { source: "apache", extensions: ["pcurl"] },
  "application/vnd.cyan.dean.root+xml": { source: "iana", compressible: !0 },
  "application/vnd.cybank": { source: "iana" },
  "application/vnd.cyclonedx+json": { source: "iana", compressible: !0 },
  "application/vnd.cyclonedx+xml": { source: "iana", compressible: !0 },
  "application/vnd.d2l.coursepackage1p0+zip": { source: "iana", compressible: !1 },
  "application/vnd.d3m-dataset": { source: "iana" },
  "application/vnd.d3m-problem": { source: "iana" },
  "application/vnd.dart": { source: "iana", compressible: !0, extensions: ["dart"] },
  "application/vnd.data-vision.rdz": { source: "iana", extensions: ["rdz"] },
  "application/vnd.datapackage+json": { source: "iana", compressible: !0 },
  "application/vnd.dataresource+json": { source: "iana", compressible: !0 },
  "application/vnd.dbf": { source: "iana", extensions: ["dbf"] },
  "application/vnd.debian.binary-package": { source: "iana" },
  "application/vnd.dece.data": { source: "iana", extensions: ["uvf", "uvvf", "uvd", "uvvd"] },
  "application/vnd.dece.ttml+xml": { source: "iana", compressible: !0, extensions: ["uvt", "uvvt"] },
  "application/vnd.dece.unspecified": { source: "iana", extensions: ["uvx", "uvvx"] },
  "application/vnd.dece.zip": { source: "iana", extensions: ["uvz", "uvvz"] },
  "application/vnd.denovo.fcselayout-link": { source: "iana", extensions: ["fe_launch"] },
  "application/vnd.desmume.movie": { source: "iana" },
  "application/vnd.dir-bi.plate-dl-nosuffix": { source: "iana" },
  "application/vnd.dm.delegation+xml": { source: "iana", compressible: !0 },
  "application/vnd.dna": { source: "iana", extensions: ["dna"] },
  "application/vnd.document+json": { source: "iana", compressible: !0 },
  "application/vnd.dolby.mlp": { source: "apache", extensions: ["mlp"] },
  "application/vnd.dolby.mobile.1": { source: "iana" },
  "application/vnd.dolby.mobile.2": { source: "iana" },
  "application/vnd.doremir.scorecloud-binary-document": { source: "iana" },
  "application/vnd.dpgraph": { source: "iana", extensions: ["dpg"] },
  "application/vnd.dreamfactory": { source: "iana", extensions: ["dfac"] },
  "application/vnd.drive+json": { source: "iana", compressible: !0 },
  "application/vnd.ds-keypoint": { source: "apache", extensions: ["kpxx"] },
  "application/vnd.dtg.local": { source: "iana" },
  "application/vnd.dtg.local.flash": { source: "iana" },
  "application/vnd.dtg.local.html": { source: "iana" },
  "application/vnd.dvb.ait": { source: "iana", extensions: ["ait"] },
  "application/vnd.dvb.dvbisl+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.dvbj": { source: "iana" },
  "application/vnd.dvb.esgcontainer": { source: "iana" },
  "application/vnd.dvb.ipdcdftnotifaccess": { source: "iana" },
  "application/vnd.dvb.ipdcesgaccess": { source: "iana" },
  "application/vnd.dvb.ipdcesgaccess2": { source: "iana" },
  "application/vnd.dvb.ipdcesgpdd": { source: "iana" },
  "application/vnd.dvb.ipdcroaming": { source: "iana" },
  "application/vnd.dvb.iptv.alfec-base": { source: "iana" },
  "application/vnd.dvb.iptv.alfec-enhancement": { source: "iana" },
  "application/vnd.dvb.notif-aggregate-root+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-container+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-generic+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-ia-msglist+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-ia-registration-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-ia-registration-response+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.notif-init+xml": { source: "iana", compressible: !0 },
  "application/vnd.dvb.pfr": { source: "iana" },
  "application/vnd.dvb.service": { source: "iana", extensions: ["svc"] },
  "application/vnd.dxr": { source: "iana" },
  "application/vnd.dynageo": { source: "iana", extensions: ["geo"] },
  "application/vnd.dzr": { source: "iana" },
  "application/vnd.easykaraoke.cdgdownload": { source: "iana" },
  "application/vnd.ecdis-update": { source: "iana" },
  "application/vnd.ecip.rlp": { source: "iana" },
  "application/vnd.eclipse.ditto+json": { source: "iana", compressible: !0 },
  "application/vnd.ecowin.chart": { source: "iana", extensions: ["mag"] },
  "application/vnd.ecowin.filerequest": { source: "iana" },
  "application/vnd.ecowin.fileupdate": { source: "iana" },
  "application/vnd.ecowin.series": { source: "iana" },
  "application/vnd.ecowin.seriesrequest": { source: "iana" },
  "application/vnd.ecowin.seriesupdate": { source: "iana" },
  "application/vnd.efi.img": { source: "iana" },
  "application/vnd.efi.iso": { source: "iana" },
  "application/vnd.emclient.accessrequest+xml": { source: "iana", compressible: !0 },
  "application/vnd.enliven": { source: "iana", extensions: ["nml"] },
  "application/vnd.enphase.envoy": { source: "iana" },
  "application/vnd.eprints.data+xml": { source: "iana", compressible: !0 },
  "application/vnd.epson.esf": { source: "iana", extensions: ["esf"] },
  "application/vnd.epson.msf": { source: "iana", extensions: ["msf"] },
  "application/vnd.epson.quickanime": { source: "iana", extensions: ["qam"] },
  "application/vnd.epson.salt": { source: "iana", extensions: ["slt"] },
  "application/vnd.epson.ssf": { source: "iana", extensions: ["ssf"] },
  "application/vnd.ericsson.quickcall": { source: "iana" },
  "application/vnd.espass-espass+zip": { source: "iana", compressible: !1 },
  "application/vnd.eszigno3+xml": { source: "iana", compressible: !0, extensions: ["es3", "et3"] },
  "application/vnd.etsi.aoc+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.asic-e+zip": { source: "iana", compressible: !1 },
  "application/vnd.etsi.asic-s+zip": { source: "iana", compressible: !1 },
  "application/vnd.etsi.cug+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvcommand+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvdiscovery+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsad-bc+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsad-cod+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsad-npvr+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvservice+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvsync+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.iptvueprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.mcid+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.mheg5": { source: "iana" },
  "application/vnd.etsi.overload-control-policy-dataset+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.pstn+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.sci+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.simservs+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.timestamp-token": { source: "iana" },
  "application/vnd.etsi.tsl+xml": { source: "iana", compressible: !0 },
  "application/vnd.etsi.tsl.der": { source: "iana" },
  "application/vnd.eu.kasparian.car+json": { source: "iana", compressible: !0 },
  "application/vnd.eudora.data": { source: "iana" },
  "application/vnd.evolv.ecig.profile": { source: "iana" },
  "application/vnd.evolv.ecig.settings": { source: "iana" },
  "application/vnd.evolv.ecig.theme": { source: "iana" },
  "application/vnd.exstream-empower+zip": { source: "iana", compressible: !1 },
  "application/vnd.exstream-package": { source: "iana" },
  "application/vnd.ezpix-album": { source: "iana", extensions: ["ez2"] },
  "application/vnd.ezpix-package": { source: "iana", extensions: ["ez3"] },
  "application/vnd.f-secure.mobile": { source: "iana" },
  "application/vnd.familysearch.gedcom+zip": { source: "iana", compressible: !1 },
  "application/vnd.fastcopy-disk-image": { source: "iana" },
  "application/vnd.fdf": { source: "iana", extensions: ["fdf"] },
  "application/vnd.fdsn.mseed": { source: "iana", extensions: ["mseed"] },
  "application/vnd.fdsn.seed": { source: "iana", extensions: ["seed", "dataless"] },
  "application/vnd.ffsns": { source: "iana" },
  "application/vnd.ficlab.flb+zip": { source: "iana", compressible: !1 },
  "application/vnd.filmit.zfc": { source: "iana" },
  "application/vnd.fints": { source: "iana" },
  "application/vnd.firemonkeys.cloudcell": { source: "iana" },
  "application/vnd.flographit": { source: "iana", extensions: ["gph"] },
  "application/vnd.fluxtime.clip": { source: "iana", extensions: ["ftc"] },
  "application/vnd.font-fontforge-sfd": { source: "iana" },
  "application/vnd.framemaker": { source: "iana", extensions: ["fm", "frame", "maker", "book"] },
  "application/vnd.frogans.fnc": { source: "iana", extensions: ["fnc"] },
  "application/vnd.frogans.ltf": { source: "iana", extensions: ["ltf"] },
  "application/vnd.fsc.weblaunch": { source: "iana", extensions: ["fsc"] },
  "application/vnd.fujifilm.fb.docuworks": { source: "iana" },
  "application/vnd.fujifilm.fb.docuworks.binder": { source: "iana" },
  "application/vnd.fujifilm.fb.docuworks.container": { source: "iana" },
  "application/vnd.fujifilm.fb.jfi+xml": { source: "iana", compressible: !0 },
  "application/vnd.fujitsu.oasys": { source: "iana", extensions: ["oas"] },
  "application/vnd.fujitsu.oasys2": { source: "iana", extensions: ["oa2"] },
  "application/vnd.fujitsu.oasys3": { source: "iana", extensions: ["oa3"] },
  "application/vnd.fujitsu.oasysgp": { source: "iana", extensions: ["fg5"] },
  "application/vnd.fujitsu.oasysprs": { source: "iana", extensions: ["bh2"] },
  "application/vnd.fujixerox.art-ex": { source: "iana" },
  "application/vnd.fujixerox.art4": { source: "iana" },
  "application/vnd.fujixerox.ddd": { source: "iana", extensions: ["ddd"] },
  "application/vnd.fujixerox.docuworks": { source: "iana", extensions: ["xdw"] },
  "application/vnd.fujixerox.docuworks.binder": { source: "iana", extensions: ["xbd"] },
  "application/vnd.fujixerox.docuworks.container": { source: "iana" },
  "application/vnd.fujixerox.hbpl": { source: "iana" },
  "application/vnd.fut-misnet": { source: "iana" },
  "application/vnd.futoin+cbor": { source: "iana" },
  "application/vnd.futoin+json": { source: "iana", compressible: !0 },
  "application/vnd.fuzzysheet": { source: "iana", extensions: ["fzs"] },
  "application/vnd.genomatix.tuxedo": { source: "iana", extensions: ["txd"] },
  "application/vnd.gentics.grd+json": { source: "iana", compressible: !0 },
  "application/vnd.geo+json": { source: "iana", compressible: !0 },
  "application/vnd.geocube+xml": { source: "iana", compressible: !0 },
  "application/vnd.geogebra.file": { source: "iana", extensions: ["ggb"] },
  "application/vnd.geogebra.slides": { source: "iana" },
  "application/vnd.geogebra.tool": { source: "iana", extensions: ["ggt"] },
  "application/vnd.geometry-explorer": { source: "iana", extensions: ["gex", "gre"] },
  "application/vnd.geonext": { source: "iana", extensions: ["gxt"] },
  "application/vnd.geoplan": { source: "iana", extensions: ["g2w"] },
  "application/vnd.geospace": { source: "iana", extensions: ["g3w"] },
  "application/vnd.gerber": { source: "iana" },
  "application/vnd.globalplatform.card-content-mgt": { source: "iana" },
  "application/vnd.globalplatform.card-content-mgt-response": { source: "iana" },
  "application/vnd.gmx": { source: "iana", extensions: ["gmx"] },
  "application/vnd.google-apps.document": { compressible: !1, extensions: ["gdoc"] },
  "application/vnd.google-apps.presentation": { compressible: !1, extensions: ["gslides"] },
  "application/vnd.google-apps.spreadsheet": { compressible: !1, extensions: ["gsheet"] },
  "application/vnd.google-earth.kml+xml": { source: "iana", compressible: !0, extensions: ["kml"] },
  "application/vnd.google-earth.kmz": { source: "iana", compressible: !1, extensions: ["kmz"] },
  "application/vnd.gov.sk.e-form+xml": { source: "iana", compressible: !0 },
  "application/vnd.gov.sk.e-form+zip": { source: "iana", compressible: !1 },
  "application/vnd.gov.sk.xmldatacontainer+xml": { source: "iana", compressible: !0 },
  "application/vnd.grafeq": { source: "iana", extensions: ["gqf", "gqs"] },
  "application/vnd.gridmp": { source: "iana" },
  "application/vnd.groove-account": { source: "iana", extensions: ["gac"] },
  "application/vnd.groove-help": { source: "iana", extensions: ["ghf"] },
  "application/vnd.groove-identity-message": { source: "iana", extensions: ["gim"] },
  "application/vnd.groove-injector": { source: "iana", extensions: ["grv"] },
  "application/vnd.groove-tool-message": { source: "iana", extensions: ["gtm"] },
  "application/vnd.groove-tool-template": { source: "iana", extensions: ["tpl"] },
  "application/vnd.groove-vcard": { source: "iana", extensions: ["vcg"] },
  "application/vnd.hal+json": { source: "iana", compressible: !0 },
  "application/vnd.hal+xml": { source: "iana", compressible: !0, extensions: ["hal"] },
  "application/vnd.handheld-entertainment+xml": { source: "iana", compressible: !0, extensions: ["zmm"] },
  "application/vnd.hbci": { source: "iana", extensions: ["hbci"] },
  "application/vnd.hc+json": { source: "iana", compressible: !0 },
  "application/vnd.hcl-bireports": { source: "iana" },
  "application/vnd.hdt": { source: "iana" },
  "application/vnd.heroku+json": { source: "iana", compressible: !0 },
  "application/vnd.hhe.lesson-player": { source: "iana", extensions: ["les"] },
  "application/vnd.hl7cda+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.hl7v2+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.hp-hpgl": { source: "iana", extensions: ["hpgl"] },
  "application/vnd.hp-hpid": { source: "iana", extensions: ["hpid"] },
  "application/vnd.hp-hps": { source: "iana", extensions: ["hps"] },
  "application/vnd.hp-jlyt": { source: "iana", extensions: ["jlt"] },
  "application/vnd.hp-pcl": { source: "iana", extensions: ["pcl"] },
  "application/vnd.hp-pclxl": { source: "iana", extensions: ["pclxl"] },
  "application/vnd.httphone": { source: "iana" },
  "application/vnd.hydrostatix.sof-data": { source: "iana", extensions: ["sfd-hdstx"] },
  "application/vnd.hyper+json": { source: "iana", compressible: !0 },
  "application/vnd.hyper-item+json": { source: "iana", compressible: !0 },
  "application/vnd.hyperdrive+json": { source: "iana", compressible: !0 },
  "application/vnd.hzn-3d-crossword": { source: "iana" },
  "application/vnd.ibm.afplinedata": { source: "iana" },
  "application/vnd.ibm.electronic-media": { source: "iana" },
  "application/vnd.ibm.minipay": { source: "iana", extensions: ["mpy"] },
  "application/vnd.ibm.modcap": { source: "iana", extensions: ["afp", "listafp", "list3820"] },
  "application/vnd.ibm.rights-management": { source: "iana", extensions: ["irm"] },
  "application/vnd.ibm.secure-container": { source: "iana", extensions: ["sc"] },
  "application/vnd.iccprofile": { source: "iana", extensions: ["icc", "icm"] },
  "application/vnd.ieee.1905": { source: "iana" },
  "application/vnd.igloader": { source: "iana", extensions: ["igl"] },
  "application/vnd.imagemeter.folder+zip": { source: "iana", compressible: !1 },
  "application/vnd.imagemeter.image+zip": { source: "iana", compressible: !1 },
  "application/vnd.immervision-ivp": { source: "iana", extensions: ["ivp"] },
  "application/vnd.immervision-ivu": { source: "iana", extensions: ["ivu"] },
  "application/vnd.ims.imsccv1p1": { source: "iana" },
  "application/vnd.ims.imsccv1p2": { source: "iana" },
  "application/vnd.ims.imsccv1p3": { source: "iana" },
  "application/vnd.ims.lis.v2.result+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolproxy+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolproxy.id+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolsettings+json": { source: "iana", compressible: !0 },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": { source: "iana", compressible: !0 },
  "application/vnd.informedcontrol.rms+xml": { source: "iana", compressible: !0 },
  "application/vnd.informix-visionary": { source: "iana" },
  "application/vnd.infotech.project": { source: "iana" },
  "application/vnd.infotech.project+xml": { source: "iana", compressible: !0 },
  "application/vnd.innopath.wamp.notification": { source: "iana" },
  "application/vnd.insors.igm": { source: "iana", extensions: ["igm"] },
  "application/vnd.intercon.formnet": { source: "iana", extensions: ["xpw", "xpx"] },
  "application/vnd.intergeo": { source: "iana", extensions: ["i2g"] },
  "application/vnd.intertrust.digibox": { source: "iana" },
  "application/vnd.intertrust.nncp": { source: "iana" },
  "application/vnd.intu.qbo": { source: "iana", extensions: ["qbo"] },
  "application/vnd.intu.qfx": { source: "iana", extensions: ["qfx"] },
  "application/vnd.iptc.g2.catalogitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.conceptitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.knowledgeitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.newsitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.newsmessage+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.packageitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.iptc.g2.planningitem+xml": { source: "iana", compressible: !0 },
  "application/vnd.ipunplugged.rcprofile": { source: "iana", extensions: ["rcprofile"] },
  "application/vnd.irepository.package+xml": { source: "iana", compressible: !0, extensions: ["irp"] },
  "application/vnd.is-xpr": { source: "iana", extensions: ["xpr"] },
  "application/vnd.isac.fcs": { source: "iana", extensions: ["fcs"] },
  "application/vnd.iso11783-10+zip": { source: "iana", compressible: !1 },
  "application/vnd.jam": { source: "iana", extensions: ["jam"] },
  "application/vnd.japannet-directory-service": { source: "iana" },
  "application/vnd.japannet-jpnstore-wakeup": { source: "iana" },
  "application/vnd.japannet-payment-wakeup": { source: "iana" },
  "application/vnd.japannet-registration": { source: "iana" },
  "application/vnd.japannet-registration-wakeup": { source: "iana" },
  "application/vnd.japannet-setstore-wakeup": { source: "iana" },
  "application/vnd.japannet-verification": { source: "iana" },
  "application/vnd.japannet-verification-wakeup": { source: "iana" },
  "application/vnd.jcp.javame.midlet-rms": { source: "iana", extensions: ["rms"] },
  "application/vnd.jisp": { source: "iana", extensions: ["jisp"] },
  "application/vnd.joost.joda-archive": { source: "iana", extensions: ["joda"] },
  "application/vnd.jsk.isdn-ngn": { source: "iana" },
  "application/vnd.kahootz": { source: "iana", extensions: ["ktz", "ktr"] },
  "application/vnd.kde.karbon": { source: "iana", extensions: ["karbon"] },
  "application/vnd.kde.kchart": { source: "iana", extensions: ["chrt"] },
  "application/vnd.kde.kformula": { source: "iana", extensions: ["kfo"] },
  "application/vnd.kde.kivio": { source: "iana", extensions: ["flw"] },
  "application/vnd.kde.kontour": { source: "iana", extensions: ["kon"] },
  "application/vnd.kde.kpresenter": { source: "iana", extensions: ["kpr", "kpt"] },
  "application/vnd.kde.kspread": { source: "iana", extensions: ["ksp"] },
  "application/vnd.kde.kword": { source: "iana", extensions: ["kwd", "kwt"] },
  "application/vnd.kenameaapp": { source: "iana", extensions: ["htke"] },
  "application/vnd.kidspiration": { source: "iana", extensions: ["kia"] },
  "application/vnd.kinar": { source: "iana", extensions: ["kne", "knp"] },
  "application/vnd.koan": { source: "iana", extensions: ["skp", "skd", "skt", "skm"] },
  "application/vnd.kodak-descriptor": { source: "iana", extensions: ["sse"] },
  "application/vnd.las": { source: "iana" },
  "application/vnd.las.las+json": { source: "iana", compressible: !0 },
  "application/vnd.las.las+xml": { source: "iana", compressible: !0, extensions: ["lasxml"] },
  "application/vnd.laszip": { source: "iana" },
  "application/vnd.leap+json": { source: "iana", compressible: !0 },
  "application/vnd.liberty-request+xml": { source: "iana", compressible: !0 },
  "application/vnd.llamagraphics.life-balance.desktop": { source: "iana", extensions: ["lbd"] },
  "application/vnd.llamagraphics.life-balance.exchange+xml": { source: "iana", compressible: !0, extensions: ["lbe"] },
  "application/vnd.logipipe.circuit+zip": { source: "iana", compressible: !1 },
  "application/vnd.loom": { source: "iana" },
  "application/vnd.lotus-1-2-3": { source: "iana", extensions: ["123"] },
  "application/vnd.lotus-approach": { source: "iana", extensions: ["apr"] },
  "application/vnd.lotus-freelance": { source: "iana", extensions: ["pre"] },
  "application/vnd.lotus-notes": { source: "iana", extensions: ["nsf"] },
  "application/vnd.lotus-organizer": { source: "iana", extensions: ["org"] },
  "application/vnd.lotus-screencam": { source: "iana", extensions: ["scm"] },
  "application/vnd.lotus-wordpro": { source: "iana", extensions: ["lwp"] },
  "application/vnd.macports.portpkg": { source: "iana", extensions: ["portpkg"] },
  "application/vnd.mapbox-vector-tile": { source: "iana", extensions: ["mvt"] },
  "application/vnd.marlin.drm.actiontoken+xml": { source: "iana", compressible: !0 },
  "application/vnd.marlin.drm.conftoken+xml": { source: "iana", compressible: !0 },
  "application/vnd.marlin.drm.license+xml": { source: "iana", compressible: !0 },
  "application/vnd.marlin.drm.mdcf": { source: "iana" },
  "application/vnd.mason+json": { source: "iana", compressible: !0 },
  "application/vnd.maxar.archive.3tz+zip": { source: "iana", compressible: !1 },
  "application/vnd.maxmind.maxmind-db": { source: "iana" },
  "application/vnd.mcd": { source: "iana", extensions: ["mcd"] },
  "application/vnd.medcalcdata": { source: "iana", extensions: ["mc1"] },
  "application/vnd.mediastation.cdkey": { source: "iana", extensions: ["cdkey"] },
  "application/vnd.meridian-slingshot": { source: "iana" },
  "application/vnd.mfer": { source: "iana", extensions: ["mwf"] },
  "application/vnd.mfmp": { source: "iana", extensions: ["mfm"] },
  "application/vnd.micro+json": { source: "iana", compressible: !0 },
  "application/vnd.micrografx.flo": { source: "iana", extensions: ["flo"] },
  "application/vnd.micrografx.igx": { source: "iana", extensions: ["igx"] },
  "application/vnd.microsoft.portable-executable": { source: "iana" },
  "application/vnd.microsoft.windows.thumbnail-cache": { source: "iana" },
  "application/vnd.miele+json": { source: "iana", compressible: !0 },
  "application/vnd.mif": { source: "iana", extensions: ["mif"] },
  "application/vnd.minisoft-hp3000-save": { source: "iana" },
  "application/vnd.mitsubishi.misty-guard.trustweb": { source: "iana" },
  "application/vnd.mobius.daf": { source: "iana", extensions: ["daf"] },
  "application/vnd.mobius.dis": { source: "iana", extensions: ["dis"] },
  "application/vnd.mobius.mbk": { source: "iana", extensions: ["mbk"] },
  "application/vnd.mobius.mqy": { source: "iana", extensions: ["mqy"] },
  "application/vnd.mobius.msl": { source: "iana", extensions: ["msl"] },
  "application/vnd.mobius.plc": { source: "iana", extensions: ["plc"] },
  "application/vnd.mobius.txf": { source: "iana", extensions: ["txf"] },
  "application/vnd.mophun.application": { source: "iana", extensions: ["mpn"] },
  "application/vnd.mophun.certificate": { source: "iana", extensions: ["mpc"] },
  "application/vnd.motorola.flexsuite": { source: "iana" },
  "application/vnd.motorola.flexsuite.adsi": { source: "iana" },
  "application/vnd.motorola.flexsuite.fis": { source: "iana" },
  "application/vnd.motorola.flexsuite.gotap": { source: "iana" },
  "application/vnd.motorola.flexsuite.kmr": { source: "iana" },
  "application/vnd.motorola.flexsuite.ttc": { source: "iana" },
  "application/vnd.motorola.flexsuite.wem": { source: "iana" },
  "application/vnd.motorola.iprm": { source: "iana" },
  "application/vnd.mozilla.xul+xml": { source: "iana", compressible: !0, extensions: ["xul"] },
  "application/vnd.ms-3mfdocument": { source: "iana" },
  "application/vnd.ms-artgalry": { source: "iana", extensions: ["cil"] },
  "application/vnd.ms-asf": { source: "iana" },
  "application/vnd.ms-cab-compressed": { source: "iana", extensions: ["cab"] },
  "application/vnd.ms-color.iccprofile": { source: "apache" },
  "application/vnd.ms-excel": { source: "iana", compressible: !1, extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] },
  "application/vnd.ms-excel.addin.macroenabled.12": { source: "iana", extensions: ["xlam"] },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": { source: "iana", extensions: ["xlsb"] },
  "application/vnd.ms-excel.sheet.macroenabled.12": { source: "iana", extensions: ["xlsm"] },
  "application/vnd.ms-excel.template.macroenabled.12": { source: "iana", extensions: ["xltm"] },
  "application/vnd.ms-fontobject": { source: "iana", compressible: !0, extensions: ["eot"] },
  "application/vnd.ms-htmlhelp": { source: "iana", extensions: ["chm"] },
  "application/vnd.ms-ims": { source: "iana", extensions: ["ims"] },
  "application/vnd.ms-lrm": { source: "iana", extensions: ["lrm"] },
  "application/vnd.ms-office.activex+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-officetheme": { source: "iana", extensions: ["thmx"] },
  "application/vnd.ms-opentype": { source: "apache", compressible: !0 },
  "application/vnd.ms-outlook": { compressible: !1, extensions: ["msg"] },
  "application/vnd.ms-package.obfuscated-opentype": { source: "apache" },
  "application/vnd.ms-pki.seccat": { source: "apache", extensions: ["cat"] },
  "application/vnd.ms-pki.stl": { source: "apache", extensions: ["stl"] },
  "application/vnd.ms-playready.initiator+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-powerpoint": { source: "iana", compressible: !1, extensions: ["ppt", "pps", "pot"] },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": { source: "iana", extensions: ["ppam"] },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": { source: "iana", extensions: ["pptm"] },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": { source: "iana", extensions: ["sldm"] },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": { source: "iana", extensions: ["ppsm"] },
  "application/vnd.ms-powerpoint.template.macroenabled.12": { source: "iana", extensions: ["potm"] },
  "application/vnd.ms-printdevicecapabilities+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-printing.printticket+xml": { source: "apache", compressible: !0 },
  "application/vnd.ms-printschematicket+xml": { source: "iana", compressible: !0 },
  "application/vnd.ms-project": { source: "iana", extensions: ["mpp", "mpt"] },
  "application/vnd.ms-tnef": { source: "iana" },
  "application/vnd.ms-windows.devicepairing": { source: "iana" },
  "application/vnd.ms-windows.nwprinting.oob": { source: "iana" },
  "application/vnd.ms-windows.printerpairing": { source: "iana" },
  "application/vnd.ms-windows.wsd.oob": { source: "iana" },
  "application/vnd.ms-wmdrm.lic-chlg-req": { source: "iana" },
  "application/vnd.ms-wmdrm.lic-resp": { source: "iana" },
  "application/vnd.ms-wmdrm.meter-chlg-req": { source: "iana" },
  "application/vnd.ms-wmdrm.meter-resp": { source: "iana" },
  "application/vnd.ms-word.document.macroenabled.12": { source: "iana", extensions: ["docm"] },
  "application/vnd.ms-word.template.macroenabled.12": { source: "iana", extensions: ["dotm"] },
  "application/vnd.ms-works": { source: "iana", extensions: ["wps", "wks", "wcm", "wdb"] },
  "application/vnd.ms-wpl": { source: "iana", extensions: ["wpl"] },
  "application/vnd.ms-xpsdocument": { source: "iana", compressible: !1, extensions: ["xps"] },
  "application/vnd.msa-disk-image": { source: "iana" },
  "application/vnd.mseq": { source: "iana", extensions: ["mseq"] },
  "application/vnd.msign": { source: "iana" },
  "application/vnd.multiad.creator": { source: "iana" },
  "application/vnd.multiad.creator.cif": { source: "iana" },
  "application/vnd.music-niff": { source: "iana" },
  "application/vnd.musician": { source: "iana", extensions: ["mus"] },
  "application/vnd.muvee.style": { source: "iana", extensions: ["msty"] },
  "application/vnd.mynfc": { source: "iana", extensions: ["taglet"] },
  "application/vnd.nacamar.ybrid+json": { source: "iana", compressible: !0 },
  "application/vnd.ncd.control": { source: "iana" },
  "application/vnd.ncd.reference": { source: "iana" },
  "application/vnd.nearst.inv+json": { source: "iana", compressible: !0 },
  "application/vnd.nebumind.line": { source: "iana" },
  "application/vnd.nervana": { source: "iana" },
  "application/vnd.netfpx": { source: "iana" },
  "application/vnd.neurolanguage.nlu": { source: "iana", extensions: ["nlu"] },
  "application/vnd.nimn": { source: "iana" },
  "application/vnd.nintendo.nitro.rom": { source: "iana" },
  "application/vnd.nintendo.snes.rom": { source: "iana" },
  "application/vnd.nitf": { source: "iana", extensions: ["ntf", "nitf"] },
  "application/vnd.noblenet-directory": { source: "iana", extensions: ["nnd"] },
  "application/vnd.noblenet-sealer": { source: "iana", extensions: ["nns"] },
  "application/vnd.noblenet-web": { source: "iana", extensions: ["nnw"] },
  "application/vnd.nokia.catalogs": { source: "iana" },
  "application/vnd.nokia.conml+wbxml": { source: "iana" },
  "application/vnd.nokia.conml+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.iptv.config+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.isds-radio-presets": { source: "iana" },
  "application/vnd.nokia.landmark+wbxml": { source: "iana" },
  "application/vnd.nokia.landmark+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.landmarkcollection+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.n-gage.ac+xml": { source: "iana", compressible: !0, extensions: ["ac"] },
  "application/vnd.nokia.n-gage.data": { source: "iana", extensions: ["ngdat"] },
  "application/vnd.nokia.n-gage.symbian.install": { source: "iana", extensions: ["n-gage"] },
  "application/vnd.nokia.ncd": { source: "iana" },
  "application/vnd.nokia.pcd+wbxml": { source: "iana" },
  "application/vnd.nokia.pcd+xml": { source: "iana", compressible: !0 },
  "application/vnd.nokia.radio-preset": { source: "iana", extensions: ["rpst"] },
  "application/vnd.nokia.radio-presets": { source: "iana", extensions: ["rpss"] },
  "application/vnd.novadigm.edm": { source: "iana", extensions: ["edm"] },
  "application/vnd.novadigm.edx": { source: "iana", extensions: ["edx"] },
  "application/vnd.novadigm.ext": { source: "iana", extensions: ["ext"] },
  "application/vnd.ntt-local.content-share": { source: "iana" },
  "application/vnd.ntt-local.file-transfer": { source: "iana" },
  "application/vnd.ntt-local.ogw_remote-access": { source: "iana" },
  "application/vnd.ntt-local.sip-ta_remote": { source: "iana" },
  "application/vnd.ntt-local.sip-ta_tcp_stream": { source: "iana" },
  "application/vnd.oasis.opendocument.chart": { source: "iana", extensions: ["odc"] },
  "application/vnd.oasis.opendocument.chart-template": { source: "iana", extensions: ["otc"] },
  "application/vnd.oasis.opendocument.database": { source: "iana", extensions: ["odb"] },
  "application/vnd.oasis.opendocument.formula": { source: "iana", extensions: ["odf"] },
  "application/vnd.oasis.opendocument.formula-template": { source: "iana", extensions: ["odft"] },
  "application/vnd.oasis.opendocument.graphics": { source: "iana", compressible: !1, extensions: ["odg"] },
  "application/vnd.oasis.opendocument.graphics-template": { source: "iana", extensions: ["otg"] },
  "application/vnd.oasis.opendocument.image": { source: "iana", extensions: ["odi"] },
  "application/vnd.oasis.opendocument.image-template": { source: "iana", extensions: ["oti"] },
  "application/vnd.oasis.opendocument.presentation": { source: "iana", compressible: !1, extensions: ["odp"] },
  "application/vnd.oasis.opendocument.presentation-template": { source: "iana", extensions: ["otp"] },
  "application/vnd.oasis.opendocument.spreadsheet": { source: "iana", compressible: !1, extensions: ["ods"] },
  "application/vnd.oasis.opendocument.spreadsheet-template": { source: "iana", extensions: ["ots"] },
  "application/vnd.oasis.opendocument.text": { source: "iana", compressible: !1, extensions: ["odt"] },
  "application/vnd.oasis.opendocument.text-master": { source: "iana", extensions: ["odm"] },
  "application/vnd.oasis.opendocument.text-template": { source: "iana", extensions: ["ott"] },
  "application/vnd.oasis.opendocument.text-web": { source: "iana", extensions: ["oth"] },
  "application/vnd.obn": { source: "iana" },
  "application/vnd.ocf+cbor": { source: "iana" },
  "application/vnd.oci.image.manifest.v1+json": { source: "iana", compressible: !0 },
  "application/vnd.oftn.l10n+json": { source: "iana", compressible: !0 },
  "application/vnd.oipf.contentaccessdownload+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.contentaccessstreaming+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.cspg-hexbinary": { source: "iana" },
  "application/vnd.oipf.dae.svg+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.dae.xhtml+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.mippvcontrolmessage+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.pae.gem": { source: "iana" },
  "application/vnd.oipf.spdiscovery+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.spdlist+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.ueprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.oipf.userprofile+xml": { source: "iana", compressible: !0 },
  "application/vnd.olpc-sugar": { source: "iana", extensions: ["xo"] },
  "application/vnd.oma-scws-config": { source: "iana" },
  "application/vnd.oma-scws-http-request": { source: "iana" },
  "application/vnd.oma-scws-http-response": { source: "iana" },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.drm-trigger+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.imd+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.ltkm": { source: "iana" },
  "application/vnd.oma.bcast.notification+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.provisioningtrigger": { source: "iana" },
  "application/vnd.oma.bcast.sgboot": { source: "iana" },
  "application/vnd.oma.bcast.sgdd+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.sgdu": { source: "iana" },
  "application/vnd.oma.bcast.simple-symbol-container": { source: "iana" },
  "application/vnd.oma.bcast.smartcard-trigger+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.sprov+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.bcast.stkm": { source: "iana" },
  "application/vnd.oma.cab-address-book+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-feature-handler+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-pcc+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-subs-invite+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.cab-user-prefs+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.dcd": { source: "iana" },
  "application/vnd.oma.dcdc": { source: "iana" },
  "application/vnd.oma.dd2+xml": { source: "iana", compressible: !0, extensions: ["dd2"] },
  "application/vnd.oma.drm.risd+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.group-usage-list+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.lwm2m+cbor": { source: "iana" },
  "application/vnd.oma.lwm2m+json": { source: "iana", compressible: !0 },
  "application/vnd.oma.lwm2m+tlv": { source: "iana" },
  "application/vnd.oma.pal+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.detailed-progress-report+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.final-report+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.groups+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.invocation-descriptor+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.poc.optimized-progress-report+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.push": { source: "iana" },
  "application/vnd.oma.scidm.messages+xml": { source: "iana", compressible: !0 },
  "application/vnd.oma.xcap-directory+xml": { source: "iana", compressible: !0 },
  "application/vnd.omads-email+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.omads-file+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.omads-folder+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.omaloc-supl-init": { source: "iana" },
  "application/vnd.onepager": { source: "iana" },
  "application/vnd.onepagertamp": { source: "iana" },
  "application/vnd.onepagertamx": { source: "iana" },
  "application/vnd.onepagertat": { source: "iana" },
  "application/vnd.onepagertatp": { source: "iana" },
  "application/vnd.onepagertatx": { source: "iana" },
  "application/vnd.openblox.game+xml": { source: "iana", compressible: !0, extensions: ["obgx"] },
  "application/vnd.openblox.game-binary": { source: "iana" },
  "application/vnd.openeye.oeb": { source: "iana" },
  "application/vnd.openofficeorg.extension": { source: "apache", extensions: ["oxt"] },
  "application/vnd.openstreetmap.data+xml": { source: "iana", compressible: !0, extensions: ["osm"] },
  "application/vnd.opentimestamps.ots": { source: "iana" },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawing+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": { source: "iana", compressible: !1, extensions: ["pptx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": { source: "iana", extensions: ["sldx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": { source: "iana", extensions: ["ppsx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.template": { source: "iana", extensions: ["potx"] },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { source: "iana", compressible: !1, extensions: ["xlsx"] },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": { source: "iana", extensions: ["xltx"] },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.theme+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.vmldrawing": { source: "iana" },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { source: "iana", compressible: !1, extensions: ["docx"] },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": { source: "iana", extensions: ["dotx"] },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-package.core-properties+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": { source: "iana", compressible: !0 },
  "application/vnd.openxmlformats-package.relationships+xml": { source: "iana", compressible: !0 },
  "application/vnd.oracle.resource+json": { source: "iana", compressible: !0 },
  "application/vnd.orange.indata": { source: "iana" },
  "application/vnd.osa.netdeploy": { source: "iana" },
  "application/vnd.osgeo.mapguide.package": { source: "iana", extensions: ["mgp"] },
  "application/vnd.osgi.bundle": { source: "iana" },
  "application/vnd.osgi.dp": { source: "iana", extensions: ["dp"] },
  "application/vnd.osgi.subsystem": { source: "iana", extensions: ["esa"] },
  "application/vnd.otps.ct-kip+xml": { source: "iana", compressible: !0 },
  "application/vnd.oxli.countgraph": { source: "iana" },
  "application/vnd.pagerduty+json": { source: "iana", compressible: !0 },
  "application/vnd.palm": { source: "iana", extensions: ["pdb", "pqa", "oprc"] },
  "application/vnd.panoply": { source: "iana" },
  "application/vnd.paos.xml": { source: "iana" },
  "application/vnd.patentdive": { source: "iana" },
  "application/vnd.patientecommsdoc": { source: "iana" },
  "application/vnd.pawaafile": { source: "iana", extensions: ["paw"] },
  "application/vnd.pcos": { source: "iana" },
  "application/vnd.pg.format": { source: "iana", extensions: ["str"] },
  "application/vnd.pg.osasli": { source: "iana", extensions: ["ei6"] },
  "application/vnd.piaccess.application-licence": { source: "iana" },
  "application/vnd.picsel": { source: "iana", extensions: ["efif"] },
  "application/vnd.pmi.widget": { source: "iana", extensions: ["wg"] },
  "application/vnd.poc.group-advertisement+xml": { source: "iana", compressible: !0 },
  "application/vnd.pocketlearn": { source: "iana", extensions: ["plf"] },
  "application/vnd.powerbuilder6": { source: "iana", extensions: ["pbd"] },
  "application/vnd.powerbuilder6-s": { source: "iana" },
  "application/vnd.powerbuilder7": { source: "iana" },
  "application/vnd.powerbuilder7-s": { source: "iana" },
  "application/vnd.powerbuilder75": { source: "iana" },
  "application/vnd.powerbuilder75-s": { source: "iana" },
  "application/vnd.preminet": { source: "iana" },
  "application/vnd.previewsystems.box": { source: "iana", extensions: ["box"] },
  "application/vnd.proteus.magazine": { source: "iana", extensions: ["mgz"] },
  "application/vnd.psfs": { source: "iana" },
  "application/vnd.publishare-delta-tree": { source: "iana", extensions: ["qps"] },
  "application/vnd.pvi.ptid1": { source: "iana", extensions: ["ptid"] },
  "application/vnd.pwg-multiplexed": { source: "iana" },
  "application/vnd.pwg-xhtml-print+xml": { source: "iana", compressible: !0 },
  "application/vnd.qualcomm.brew-app-res": { source: "iana" },
  "application/vnd.quarantainenet": { source: "iana" },
  "application/vnd.quark.quarkxpress": { source: "iana", extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"] },
  "application/vnd.quobject-quoxdocument": { source: "iana" },
  "application/vnd.radisys.moml+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-conf+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-conn+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-dialog+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-audit-stream+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-conf+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-base+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-group+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-speech+xml": { source: "iana", compressible: !0 },
  "application/vnd.radisys.msml-dialog-transform+xml": { source: "iana", compressible: !0 },
  "application/vnd.rainstor.data": { source: "iana" },
  "application/vnd.rapid": { source: "iana" },
  "application/vnd.rar": { source: "iana", extensions: ["rar"] },
  "application/vnd.realvnc.bed": { source: "iana", extensions: ["bed"] },
  "application/vnd.recordare.musicxml": { source: "iana", extensions: ["mxl"] },
  "application/vnd.recordare.musicxml+xml": { source: "iana", compressible: !0, extensions: ["musicxml"] },
  "application/vnd.renlearn.rlprint": { source: "iana" },
  "application/vnd.resilient.logic": { source: "iana" },
  "application/vnd.restful+json": { source: "iana", compressible: !0 },
  "application/vnd.rig.cryptonote": { source: "iana", extensions: ["cryptonote"] },
  "application/vnd.rim.cod": { source: "apache", extensions: ["cod"] },
  "application/vnd.rn-realmedia": { source: "apache", extensions: ["rm"] },
  "application/vnd.rn-realmedia-vbr": { source: "apache", extensions: ["rmvb"] },
  "application/vnd.route66.link66+xml": { source: "iana", compressible: !0, extensions: ["link66"] },
  "application/vnd.rs-274x": { source: "iana" },
  "application/vnd.ruckus.download": { source: "iana" },
  "application/vnd.s3sms": { source: "iana" },
  "application/vnd.sailingtracker.track": { source: "iana", extensions: ["st"] },
  "application/vnd.sar": { source: "iana" },
  "application/vnd.sbm.cid": { source: "iana" },
  "application/vnd.sbm.mid2": { source: "iana" },
  "application/vnd.scribus": { source: "iana" },
  "application/vnd.sealed.3df": { source: "iana" },
  "application/vnd.sealed.csf": { source: "iana" },
  "application/vnd.sealed.doc": { source: "iana" },
  "application/vnd.sealed.eml": { source: "iana" },
  "application/vnd.sealed.mht": { source: "iana" },
  "application/vnd.sealed.net": { source: "iana" },
  "application/vnd.sealed.ppt": { source: "iana" },
  "application/vnd.sealed.tiff": { source: "iana" },
  "application/vnd.sealed.xls": { source: "iana" },
  "application/vnd.sealedmedia.softseal.html": { source: "iana" },
  "application/vnd.sealedmedia.softseal.pdf": { source: "iana" },
  "application/vnd.seemail": { source: "iana", extensions: ["see"] },
  "application/vnd.seis+json": { source: "iana", compressible: !0 },
  "application/vnd.sema": { source: "iana", extensions: ["sema"] },
  "application/vnd.semd": { source: "iana", extensions: ["semd"] },
  "application/vnd.semf": { source: "iana", extensions: ["semf"] },
  "application/vnd.shade-save-file": { source: "iana" },
  "application/vnd.shana.informed.formdata": { source: "iana", extensions: ["ifm"] },
  "application/vnd.shana.informed.formtemplate": { source: "iana", extensions: ["itp"] },
  "application/vnd.shana.informed.interchange": { source: "iana", extensions: ["iif"] },
  "application/vnd.shana.informed.package": { source: "iana", extensions: ["ipk"] },
  "application/vnd.shootproof+json": { source: "iana", compressible: !0 },
  "application/vnd.shopkick+json": { source: "iana", compressible: !0 },
  "application/vnd.shp": { source: "iana" },
  "application/vnd.shx": { source: "iana" },
  "application/vnd.sigrok.session": { source: "iana" },
  "application/vnd.simtech-mindmapper": { source: "iana", extensions: ["twd", "twds"] },
  "application/vnd.siren+json": { source: "iana", compressible: !0 },
  "application/vnd.smaf": { source: "iana", extensions: ["mmf"] },
  "application/vnd.smart.notebook": { source: "iana" },
  "application/vnd.smart.teacher": { source: "iana", extensions: ["teacher"] },
  "application/vnd.snesdev-page-table": { source: "iana" },
  "application/vnd.software602.filler.form+xml": { source: "iana", compressible: !0, extensions: ["fo"] },
  "application/vnd.software602.filler.form-xml-zip": { source: "iana" },
  "application/vnd.solent.sdkm+xml": { source: "iana", compressible: !0, extensions: ["sdkm", "sdkd"] },
  "application/vnd.spotfire.dxp": { source: "iana", extensions: ["dxp"] },
  "application/vnd.spotfire.sfs": { source: "iana", extensions: ["sfs"] },
  "application/vnd.sqlite3": { source: "iana" },
  "application/vnd.sss-cod": { source: "iana" },
  "application/vnd.sss-dtf": { source: "iana" },
  "application/vnd.sss-ntf": { source: "iana" },
  "application/vnd.stardivision.calc": { source: "apache", extensions: ["sdc"] },
  "application/vnd.stardivision.draw": { source: "apache", extensions: ["sda"] },
  "application/vnd.stardivision.impress": { source: "apache", extensions: ["sdd"] },
  "application/vnd.stardivision.math": { source: "apache", extensions: ["smf"] },
  "application/vnd.stardivision.writer": { source: "apache", extensions: ["sdw", "vor"] },
  "application/vnd.stardivision.writer-global": { source: "apache", extensions: ["sgl"] },
  "application/vnd.stepmania.package": { source: "iana", extensions: ["smzip"] },
  "application/vnd.stepmania.stepchart": { source: "iana", extensions: ["sm"] },
  "application/vnd.street-stream": { source: "iana" },
  "application/vnd.sun.wadl+xml": { source: "iana", compressible: !0, extensions: ["wadl"] },
  "application/vnd.sun.xml.calc": { source: "apache", extensions: ["sxc"] },
  "application/vnd.sun.xml.calc.template": { source: "apache", extensions: ["stc"] },
  "application/vnd.sun.xml.draw": { source: "apache", extensions: ["sxd"] },
  "application/vnd.sun.xml.draw.template": { source: "apache", extensions: ["std"] },
  "application/vnd.sun.xml.impress": { source: "apache", extensions: ["sxi"] },
  "application/vnd.sun.xml.impress.template": { source: "apache", extensions: ["sti"] },
  "application/vnd.sun.xml.math": { source: "apache", extensions: ["sxm"] },
  "application/vnd.sun.xml.writer": { source: "apache", extensions: ["sxw"] },
  "application/vnd.sun.xml.writer.global": { source: "apache", extensions: ["sxg"] },
  "application/vnd.sun.xml.writer.template": { source: "apache", extensions: ["stw"] },
  "application/vnd.sus-calendar": { source: "iana", extensions: ["sus", "susp"] },
  "application/vnd.svd": { source: "iana", extensions: ["svd"] },
  "application/vnd.swiftview-ics": { source: "iana" },
  "application/vnd.sycle+xml": { source: "iana", compressible: !0 },
  "application/vnd.syft+json": { source: "iana", compressible: !0 },
  "application/vnd.symbian.install": { source: "apache", extensions: ["sis", "sisx"] },
  "application/vnd.syncml+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["xsm"] },
  "application/vnd.syncml.dm+wbxml": { source: "iana", charset: "UTF-8", extensions: ["bdm"] },
  "application/vnd.syncml.dm+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["xdm"] },
  "application/vnd.syncml.dm.notification": { source: "iana" },
  "application/vnd.syncml.dmddf+wbxml": { source: "iana" },
  "application/vnd.syncml.dmddf+xml": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["ddf"] },
  "application/vnd.syncml.dmtnds+wbxml": { source: "iana" },
  "application/vnd.syncml.dmtnds+xml": { source: "iana", charset: "UTF-8", compressible: !0 },
  "application/vnd.syncml.ds.notification": { source: "iana" },
  "application/vnd.tableschema+json": { source: "iana", compressible: !0 },
  "application/vnd.tao.intent-module-archive": { source: "iana", extensions: ["tao"] },
  "application/vnd.tcpdump.pcap": { source: "iana", extensions: ["pcap", "cap", "dmp"] },
  "application/vnd.think-cell.ppttc+json": { source: "iana", compressible: !0 },
  "application/vnd.tmd.mediaflex.api+xml": { source: "iana", compressible: !0 },
  "application/vnd.tml": { source: "iana" },
  "application/vnd.tmobile-livetv": { source: "iana", extensions: ["tmo"] },
  "application/vnd.tri.onesource": { source: "iana" },
  "application/vnd.trid.tpt": { source: "iana", extensions: ["tpt"] },
  "application/vnd.triscape.mxs": { source: "iana", extensions: ["mxs"] },
  "application/vnd.trueapp": { source: "iana", extensions: ["tra"] },
  "application/vnd.truedoc": { source: "iana" },
  "application/vnd.ubisoft.webplayer": { source: "iana" },
  "application/vnd.ufdl": { source: "iana", extensions: ["ufd", "ufdl"] },
  "application/vnd.uiq.theme": { source: "iana", extensions: ["utz"] },
  "application/vnd.umajin": { source: "iana", extensions: ["umj"] },
  "application/vnd.unity": { source: "iana", extensions: ["unityweb"] },
  "application/vnd.uoml+xml": { source: "iana", compressible: !0, extensions: ["uoml"] },
  "application/vnd.uplanet.alert": { source: "iana" },
  "application/vnd.uplanet.alert-wbxml": { source: "iana" },
  "application/vnd.uplanet.bearer-choice": { source: "iana" },
  "application/vnd.uplanet.bearer-choice-wbxml": { source: "iana" },
  "application/vnd.uplanet.cacheop": { source: "iana" },
  "application/vnd.uplanet.cacheop-wbxml": { source: "iana" },
  "application/vnd.uplanet.channel": { source: "iana" },
  "application/vnd.uplanet.channel-wbxml": { source: "iana" },
  "application/vnd.uplanet.list": { source: "iana" },
  "application/vnd.uplanet.list-wbxml": { source: "iana" },
  "application/vnd.uplanet.listcmd": { source: "iana" },
  "application/vnd.uplanet.listcmd-wbxml": { source: "iana" },
  "application/vnd.uplanet.signal": { source: "iana" },
  "application/vnd.uri-map": { source: "iana" },
  "application/vnd.valve.source.material": { source: "iana" },
  "application/vnd.vcx": { source: "iana", extensions: ["vcx"] },
  "application/vnd.vd-study": { source: "iana" },
  "application/vnd.vectorworks": { source: "iana" },
  "application/vnd.vel+json": { source: "iana", compressible: !0 },
  "application/vnd.verimatrix.vcas": { source: "iana" },
  "application/vnd.veritone.aion+json": { source: "iana", compressible: !0 },
  "application/vnd.veryant.thin": { source: "iana" },
  "application/vnd.ves.encrypted": { source: "iana" },
  "application/vnd.vidsoft.vidconference": { source: "iana" },
  "application/vnd.visio": { source: "iana", extensions: ["vsd", "vst", "vss", "vsw"] },
  "application/vnd.visionary": { source: "iana", extensions: ["vis"] },
  "application/vnd.vividence.scriptfile": { source: "iana" },
  "application/vnd.vsf": { source: "iana", extensions: ["vsf"] },
  "application/vnd.wap.sic": { source: "iana" },
  "application/vnd.wap.slc": { source: "iana" },
  "application/vnd.wap.wbxml": { source: "iana", charset: "UTF-8", extensions: ["wbxml"] },
  "application/vnd.wap.wmlc": { source: "iana", extensions: ["wmlc"] },
  "application/vnd.wap.wmlscriptc": { source: "iana", extensions: ["wmlsc"] },
  "application/vnd.webturbo": { source: "iana", extensions: ["wtb"] },
  "application/vnd.wfa.dpp": { source: "iana" },
  "application/vnd.wfa.p2p": { source: "iana" },
  "application/vnd.wfa.wsc": { source: "iana" },
  "application/vnd.windows.devicepairing": { source: "iana" },
  "application/vnd.wmc": { source: "iana" },
  "application/vnd.wmf.bootstrap": { source: "iana" },
  "application/vnd.wolfram.mathematica": { source: "iana" },
  "application/vnd.wolfram.mathematica.package": { source: "iana" },
  "application/vnd.wolfram.player": { source: "iana", extensions: ["nbp"] },
  "application/vnd.wordperfect": { source: "iana", extensions: ["wpd"] },
  "application/vnd.wqd": { source: "iana", extensions: ["wqd"] },
  "application/vnd.wrq-hp3000-labelled": { source: "iana" },
  "application/vnd.wt.stf": { source: "iana", extensions: ["stf"] },
  "application/vnd.wv.csp+wbxml": { source: "iana" },
  "application/vnd.wv.csp+xml": { source: "iana", compressible: !0 },
  "application/vnd.wv.ssp+xml": { source: "iana", compressible: !0 },
  "application/vnd.xacml+json": { source: "iana", compressible: !0 },
  "application/vnd.xara": { source: "iana", extensions: ["xar"] },
  "application/vnd.xfdl": { source: "iana", extensions: ["xfdl"] },
  "application/vnd.xfdl.webform": { source: "iana" },
  "application/vnd.xmi+xml": { source: "iana", compressible: !0 },
  "application/vnd.xmpie.cpkg": { source: "iana" },
  "application/vnd.xmpie.dpkg": { source: "iana" },
  "application/vnd.xmpie.plan": { source: "iana" },
  "application/vnd.xmpie.ppkg": { source: "iana" },
  "application/vnd.xmpie.xlim": { source: "iana" },
  "application/vnd.yamaha.hv-dic": { source: "iana", extensions: ["hvd"] },
  "application/vnd.yamaha.hv-script": { source: "iana", extensions: ["hvs"] },
  "application/vnd.yamaha.hv-voice": { source: "iana", extensions: ["hvp"] },
  "application/vnd.yamaha.openscoreformat": { source: "iana", extensions: ["osf"] },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": { source: "iana", compressible: !0, extensions: ["osfpvg"] },
  "application/vnd.yamaha.remote-setup": { source: "iana" },
  "application/vnd.yamaha.smaf-audio": { source: "iana", extensions: ["saf"] },
  "application/vnd.yamaha.smaf-phrase": { source: "iana", extensions: ["spf"] },
  "application/vnd.yamaha.through-ngn": { source: "iana" },
  "application/vnd.yamaha.tunnel-udpencap": { source: "iana" },
  "application/vnd.yaoweme": { source: "iana" },
  "application/vnd.yellowriver-custom-menu": { source: "iana", extensions: ["cmp"] },
  "application/vnd.youtube.yt": { source: "iana" },
  "application/vnd.zul": { source: "iana", extensions: ["zir", "zirz"] },
  "application/vnd.zzazz.deck+xml": { source: "iana", compressible: !0, extensions: ["zaz"] },
  "application/voicexml+xml": { source: "iana", compressible: !0, extensions: ["vxml"] },
  "application/voucher-cms+json": { source: "iana", compressible: !0 },
  "application/vq-rtcpxr": { source: "iana" },
  "application/wasm": { source: "iana", compressible: !0, extensions: ["wasm"] },
  "application/watcherinfo+xml": { source: "iana", compressible: !0, extensions: ["wif"] },
  "application/webpush-options+json": { source: "iana", compressible: !0 },
  "application/whoispp-query": { source: "iana" },
  "application/whoispp-response": { source: "iana" },
  "application/widget": { source: "iana", extensions: ["wgt"] },
  "application/winhlp": { source: "apache", extensions: ["hlp"] },
  "application/wita": { source: "iana" },
  "application/wordperfect5.1": { source: "iana" },
  "application/wsdl+xml": { source: "iana", compressible: !0, extensions: ["wsdl"] },
  "application/wspolicy+xml": { source: "iana", compressible: !0, extensions: ["wspolicy"] },
  "application/x-7z-compressed": { source: "apache", compressible: !1, extensions: ["7z"] },
  "application/x-abiword": { source: "apache", extensions: ["abw"] },
  "application/x-ace-compressed": { source: "apache", extensions: ["ace"] },
  "application/x-amf": { source: "apache" },
  "application/x-apple-diskimage": { source: "apache", extensions: ["dmg"] },
  "application/x-arj": { compressible: !1, extensions: ["arj"] },
  "application/x-authorware-bin": { source: "apache", extensions: ["aab", "x32", "u32", "vox"] },
  "application/x-authorware-map": { source: "apache", extensions: ["aam"] },
  "application/x-authorware-seg": { source: "apache", extensions: ["aas"] },
  "application/x-bcpio": { source: "apache", extensions: ["bcpio"] },
  "application/x-bdoc": { compressible: !1, extensions: ["bdoc"] },
  "application/x-bittorrent": { source: "apache", extensions: ["torrent"] },
  "application/x-blorb": { source: "apache", extensions: ["blb", "blorb"] },
  "application/x-bzip": { source: "apache", compressible: !1, extensions: ["bz"] },
  "application/x-bzip2": { source: "apache", compressible: !1, extensions: ["bz2", "boz"] },
  "application/x-cbr": { source: "apache", extensions: ["cbr", "cba", "cbt", "cbz", "cb7"] },
  "application/x-cdlink": { source: "apache", extensions: ["vcd"] },
  "application/x-cfs-compressed": { source: "apache", extensions: ["cfs"] },
  "application/x-chat": { source: "apache", extensions: ["chat"] },
  "application/x-chess-pgn": { source: "apache", extensions: ["pgn"] },
  "application/x-chrome-extension": { extensions: ["crx"] },
  "application/x-cocoa": { source: "nginx", extensions: ["cco"] },
  "application/x-compress": { source: "apache" },
  "application/x-conference": { source: "apache", extensions: ["nsc"] },
  "application/x-cpio": { source: "apache", extensions: ["cpio"] },
  "application/x-csh": { source: "apache", extensions: ["csh"] },
  "application/x-deb": { compressible: !1 },
  "application/x-debian-package": { source: "apache", extensions: ["deb", "udeb"] },
  "application/x-dgc-compressed": { source: "apache", extensions: ["dgc"] },
  "application/x-director": { source: "apache", extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"] },
  "application/x-doom": { source: "apache", extensions: ["wad"] },
  "application/x-dtbncx+xml": { source: "apache", compressible: !0, extensions: ["ncx"] },
  "application/x-dtbook+xml": { source: "apache", compressible: !0, extensions: ["dtb"] },
  "application/x-dtbresource+xml": { source: "apache", compressible: !0, extensions: ["res"] },
  "application/x-dvi": { source: "apache", compressible: !1, extensions: ["dvi"] },
  "application/x-envoy": { source: "apache", extensions: ["evy"] },
  "application/x-eva": { source: "apache", extensions: ["eva"] },
  "application/x-font-bdf": { source: "apache", extensions: ["bdf"] },
  "application/x-font-dos": { source: "apache" },
  "application/x-font-framemaker": { source: "apache" },
  "application/x-font-ghostscript": { source: "apache", extensions: ["gsf"] },
  "application/x-font-libgrx": { source: "apache" },
  "application/x-font-linux-psf": { source: "apache", extensions: ["psf"] },
  "application/x-font-pcf": { source: "apache", extensions: ["pcf"] },
  "application/x-font-snf": { source: "apache", extensions: ["snf"] },
  "application/x-font-speedo": { source: "apache" },
  "application/x-font-sunos-news": { source: "apache" },
  "application/x-font-type1": { source: "apache", extensions: ["pfa", "pfb", "pfm", "afm"] },
  "application/x-font-vfont": { source: "apache" },
  "application/x-freearc": { source: "apache", extensions: ["arc"] },
  "application/x-futuresplash": { source: "apache", extensions: ["spl"] },
  "application/x-gca-compressed": { source: "apache", extensions: ["gca"] },
  "application/x-glulx": { source: "apache", extensions: ["ulx"] },
  "application/x-gnumeric": { source: "apache", extensions: ["gnumeric"] },
  "application/x-gramps-xml": { source: "apache", extensions: ["gramps"] },
  "application/x-gtar": { source: "apache", extensions: ["gtar"] },
  "application/x-gzip": { source: "apache" },
  "application/x-hdf": { source: "apache", extensions: ["hdf"] },
  "application/x-httpd-php": { compressible: !0, extensions: ["php"] },
  "application/x-install-instructions": { source: "apache", extensions: ["install"] },
  "application/x-iso9660-image": { source: "apache", extensions: ["iso"] },
  "application/x-iwork-keynote-sffkey": { extensions: ["key"] },
  "application/x-iwork-numbers-sffnumbers": { extensions: ["numbers"] },
  "application/x-iwork-pages-sffpages": { extensions: ["pages"] },
  "application/x-java-archive-diff": { source: "nginx", extensions: ["jardiff"] },
  "application/x-java-jnlp-file": { source: "apache", compressible: !1, extensions: ["jnlp"] },
  "application/x-javascript": { compressible: !0 },
  "application/x-keepass2": { extensions: ["kdbx"] },
  "application/x-latex": { source: "apache", compressible: !1, extensions: ["latex"] },
  "application/x-lua-bytecode": { extensions: ["luac"] },
  "application/x-lzh-compressed": { source: "apache", extensions: ["lzh", "lha"] },
  "application/x-makeself": { source: "nginx", extensions: ["run"] },
  "application/x-mie": { source: "apache", extensions: ["mie"] },
  "application/x-mobipocket-ebook": { source: "apache", extensions: ["prc", "mobi"] },
  "application/x-mpegurl": { compressible: !1 },
  "application/x-ms-application": { source: "apache", extensions: ["application"] },
  "application/x-ms-shortcut": { source: "apache", extensions: ["lnk"] },
  "application/x-ms-wmd": { source: "apache", extensions: ["wmd"] },
  "application/x-ms-wmz": { source: "apache", extensions: ["wmz"] },
  "application/x-ms-xbap": { source: "apache", extensions: ["xbap"] },
  "application/x-msaccess": { source: "apache", extensions: ["mdb"] },
  "application/x-msbinder": { source: "apache", extensions: ["obd"] },
  "application/x-mscardfile": { source: "apache", extensions: ["crd"] },
  "application/x-msclip": { source: "apache", extensions: ["clp"] },
  "application/x-msdos-program": { extensions: ["exe"] },
  "application/x-msdownload": { source: "apache", extensions: ["exe", "dll", "com", "bat", "msi"] },
  "application/x-msmediaview": { source: "apache", extensions: ["mvb", "m13", "m14"] },
  "application/x-msmetafile": { source: "apache", extensions: ["wmf", "wmz", "emf", "emz"] },
  "application/x-msmoney": { source: "apache", extensions: ["mny"] },
  "application/x-mspublisher": { source: "apache", extensions: ["pub"] },
  "application/x-msschedule": { source: "apache", extensions: ["scd"] },
  "application/x-msterminal": { source: "apache", extensions: ["trm"] },
  "application/x-mswrite": { source: "apache", extensions: ["wri"] },
  "application/x-netcdf": { source: "apache", extensions: ["nc", "cdf"] },
  "application/x-ns-proxy-autoconfig": { compressible: !0, extensions: ["pac"] },
  "application/x-nzb": { source: "apache", extensions: ["nzb"] },
  "application/x-perl": { source: "nginx", extensions: ["pl", "pm"] },
  "application/x-pilot": { source: "nginx", extensions: ["prc", "pdb"] },
  "application/x-pkcs12": { source: "apache", compressible: !1, extensions: ["p12", "pfx"] },
  "application/x-pkcs7-certificates": { source: "apache", extensions: ["p7b", "spc"] },
  "application/x-pkcs7-certreqresp": { source: "apache", extensions: ["p7r"] },
  "application/x-pki-message": { source: "iana" },
  "application/x-rar-compressed": { source: "apache", compressible: !1, extensions: ["rar"] },
  "application/x-redhat-package-manager": { source: "nginx", extensions: ["rpm"] },
  "application/x-research-info-systems": { source: "apache", extensions: ["ris"] },
  "application/x-sea": { source: "nginx", extensions: ["sea"] },
  "application/x-sh": { source: "apache", compressible: !0, extensions: ["sh"] },
  "application/x-shar": { source: "apache", extensions: ["shar"] },
  "application/x-shockwave-flash": { source: "apache", compressible: !1, extensions: ["swf"] },
  "application/x-silverlight-app": { source: "apache", extensions: ["xap"] },
  "application/x-sql": { source: "apache", extensions: ["sql"] },
  "application/x-stuffit": { source: "apache", compressible: !1, extensions: ["sit"] },
  "application/x-stuffitx": { source: "apache", extensions: ["sitx"] },
  "application/x-subrip": { source: "apache", extensions: ["srt"] },
  "application/x-sv4cpio": { source: "apache", extensions: ["sv4cpio"] },
  "application/x-sv4crc": { source: "apache", extensions: ["sv4crc"] },
  "application/x-t3vm-image": { source: "apache", extensions: ["t3"] },
  "application/x-tads": { source: "apache", extensions: ["gam"] },
  "application/x-tar": { source: "apache", compressible: !0, extensions: ["tar"] },
  "application/x-tcl": { source: "apache", extensions: ["tcl", "tk"] },
  "application/x-tex": { source: "apache", extensions: ["tex"] },
  "application/x-tex-tfm": { source: "apache", extensions: ["tfm"] },
  "application/x-texinfo": { source: "apache", extensions: ["texinfo", "texi"] },
  "application/x-tgif": { source: "apache", extensions: ["obj"] },
  "application/x-ustar": { source: "apache", extensions: ["ustar"] },
  "application/x-virtualbox-hdd": { compressible: !0, extensions: ["hdd"] },
  "application/x-virtualbox-ova": { compressible: !0, extensions: ["ova"] },
  "application/x-virtualbox-ovf": { compressible: !0, extensions: ["ovf"] },
  "application/x-virtualbox-vbox": { compressible: !0, extensions: ["vbox"] },
  "application/x-virtualbox-vbox-extpack": { compressible: !1, extensions: ["vbox-extpack"] },
  "application/x-virtualbox-vdi": { compressible: !0, extensions: ["vdi"] },
  "application/x-virtualbox-vhd": { compressible: !0, extensions: ["vhd"] },
  "application/x-virtualbox-vmdk": { compressible: !0, extensions: ["vmdk"] },
  "application/x-wais-source": { source: "apache", extensions: ["src"] },
  "application/x-web-app-manifest+json": { compressible: !0, extensions: ["webapp"] },
  "application/x-www-form-urlencoded": { source: "iana", compressible: !0 },
  "application/x-x509-ca-cert": { source: "iana", extensions: ["der", "crt", "pem"] },
  "application/x-x509-ca-ra-cert": { source: "iana" },
  "application/x-x509-next-ca-cert": { source: "iana" },
  "application/x-xfig": { source: "apache", extensions: ["fig"] },
  "application/x-xliff+xml": { source: "apache", compressible: !0, extensions: ["xlf"] },
  "application/x-xpinstall": { source: "apache", compressible: !1, extensions: ["xpi"] },
  "application/x-xz": { source: "apache", extensions: ["xz"] },
  "application/x-zmachine": { source: "apache", extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"] },
  "application/x400-bp": { source: "iana" },
  "application/xacml+xml": { source: "iana", compressible: !0 },
  "application/xaml+xml": { source: "apache", compressible: !0, extensions: ["xaml"] },
  "application/xcap-att+xml": { source: "iana", compressible: !0, extensions: ["xav"] },
  "application/xcap-caps+xml": { source: "iana", compressible: !0, extensions: ["xca"] },
  "application/xcap-diff+xml": { source: "iana", compressible: !0, extensions: ["xdf"] },
  "application/xcap-el+xml": { source: "iana", compressible: !0, extensions: ["xel"] },
  "application/xcap-error+xml": { source: "iana", compressible: !0 },
  "application/xcap-ns+xml": { source: "iana", compressible: !0, extensions: ["xns"] },
  "application/xcon-conference-info+xml": { source: "iana", compressible: !0 },
  "application/xcon-conference-info-diff+xml": { source: "iana", compressible: !0 },
  "application/xenc+xml": { source: "iana", compressible: !0, extensions: ["xenc"] },
  "application/xhtml+xml": { source: "iana", compressible: !0, extensions: ["xhtml", "xht"] },
  "application/xhtml-voice+xml": { source: "apache", compressible: !0 },
  "application/xliff+xml": { source: "iana", compressible: !0, extensions: ["xlf"] },
  "application/xml": { source: "iana", compressible: !0, extensions: ["xml", "xsl", "xsd", "rng"] },
  "application/xml-dtd": { source: "iana", compressible: !0, extensions: ["dtd"] },
  "application/xml-external-parsed-entity": { source: "iana" },
  "application/xml-patch+xml": { source: "iana", compressible: !0 },
  "application/xmpp+xml": { source: "iana", compressible: !0 },
  "application/xop+xml": { source: "iana", compressible: !0, extensions: ["xop"] },
  "application/xproc+xml": { source: "apache", compressible: !0, extensions: ["xpl"] },
  "application/xslt+xml": { source: "iana", compressible: !0, extensions: ["xsl", "xslt"] },
  "application/xspf+xml": { source: "apache", compressible: !0, extensions: ["xspf"] },
  "application/xv+xml": { source: "iana", compressible: !0, extensions: ["mxml", "xhvml", "xvml", "xvm"] },
  "application/yang": { source: "iana", extensions: ["yang"] },
  "application/yang-data+json": { source: "iana", compressible: !0 },
  "application/yang-data+xml": { source: "iana", compressible: !0 },
  "application/yang-patch+json": { source: "iana", compressible: !0 },
  "application/yang-patch+xml": { source: "iana", compressible: !0 },
  "application/yin+xml": { source: "iana", compressible: !0, extensions: ["yin"] },
  "application/zip": { source: "iana", compressible: !1, extensions: ["zip"] },
  "application/zlib": { source: "iana" },
  "application/zstd": { source: "iana" },
  "audio/1d-interleaved-parityfec": { source: "iana" },
  "audio/32kadpcm": { source: "iana" },
  "audio/3gpp": { source: "iana", compressible: !1, extensions: ["3gpp"] },
  "audio/3gpp2": { source: "iana" },
  "audio/aac": { source: "iana" },
  "audio/ac3": { source: "iana" },
  "audio/adpcm": { source: "apache", extensions: ["adp"] },
  "audio/amr": { source: "iana", extensions: ["amr"] },
  "audio/amr-wb": { source: "iana" },
  "audio/amr-wb+": { source: "iana" },
  "audio/aptx": { source: "iana" },
  "audio/asc": { source: "iana" },
  "audio/atrac-advanced-lossless": { source: "iana" },
  "audio/atrac-x": { source: "iana" },
  "audio/atrac3": { source: "iana" },
  "audio/basic": { source: "iana", compressible: !1, extensions: ["au", "snd"] },
  "audio/bv16": { source: "iana" },
  "audio/bv32": { source: "iana" },
  "audio/clearmode": { source: "iana" },
  "audio/cn": { source: "iana" },
  "audio/dat12": { source: "iana" },
  "audio/dls": { source: "iana" },
  "audio/dsr-es201108": { source: "iana" },
  "audio/dsr-es202050": { source: "iana" },
  "audio/dsr-es202211": { source: "iana" },
  "audio/dsr-es202212": { source: "iana" },
  "audio/dv": { source: "iana" },
  "audio/dvi4": { source: "iana" },
  "audio/eac3": { source: "iana" },
  "audio/encaprtp": { source: "iana" },
  "audio/evrc": { source: "iana" },
  "audio/evrc-qcp": { source: "iana" },
  "audio/evrc0": { source: "iana" },
  "audio/evrc1": { source: "iana" },
  "audio/evrcb": { source: "iana" },
  "audio/evrcb0": { source: "iana" },
  "audio/evrcb1": { source: "iana" },
  "audio/evrcnw": { source: "iana" },
  "audio/evrcnw0": { source: "iana" },
  "audio/evrcnw1": { source: "iana" },
  "audio/evrcwb": { source: "iana" },
  "audio/evrcwb0": { source: "iana" },
  "audio/evrcwb1": { source: "iana" },
  "audio/evs": { source: "iana" },
  "audio/flexfec": { source: "iana" },
  "audio/fwdred": { source: "iana" },
  "audio/g711-0": { source: "iana" },
  "audio/g719": { source: "iana" },
  "audio/g722": { source: "iana" },
  "audio/g7221": { source: "iana" },
  "audio/g723": { source: "iana" },
  "audio/g726-16": { source: "iana" },
  "audio/g726-24": { source: "iana" },
  "audio/g726-32": { source: "iana" },
  "audio/g726-40": { source: "iana" },
  "audio/g728": { source: "iana" },
  "audio/g729": { source: "iana" },
  "audio/g7291": { source: "iana" },
  "audio/g729d": { source: "iana" },
  "audio/g729e": { source: "iana" },
  "audio/gsm": { source: "iana" },
  "audio/gsm-efr": { source: "iana" },
  "audio/gsm-hr-08": { source: "iana" },
  "audio/ilbc": { source: "iana" },
  "audio/ip-mr_v2.5": { source: "iana" },
  "audio/isac": { source: "apache" },
  "audio/l16": { source: "iana" },
  "audio/l20": { source: "iana" },
  "audio/l24": { source: "iana", compressible: !1 },
  "audio/l8": { source: "iana" },
  "audio/lpc": { source: "iana" },
  "audio/melp": { source: "iana" },
  "audio/melp1200": { source: "iana" },
  "audio/melp2400": { source: "iana" },
  "audio/melp600": { source: "iana" },
  "audio/mhas": { source: "iana" },
  "audio/midi": { source: "apache", extensions: ["mid", "midi", "kar", "rmi"] },
  "audio/mobile-xmf": { source: "iana", extensions: ["mxmf"] },
  "audio/mp3": { compressible: !1, extensions: ["mp3"] },
  "audio/mp4": { source: "iana", compressible: !1, extensions: ["m4a", "mp4a"] },
  "audio/mp4a-latm": { source: "iana" },
  "audio/mpa": { source: "iana" },
  "audio/mpa-robust": { source: "iana" },
  "audio/mpeg": { source: "iana", compressible: !1, extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] },
  "audio/mpeg4-generic": { source: "iana" },
  "audio/musepack": { source: "apache" },
  "audio/ogg": { source: "iana", compressible: !1, extensions: ["oga", "ogg", "spx", "opus"] },
  "audio/opus": { source: "iana" },
  "audio/parityfec": { source: "iana" },
  "audio/pcma": { source: "iana" },
  "audio/pcma-wb": { source: "iana" },
  "audio/pcmu": { source: "iana" },
  "audio/pcmu-wb": { source: "iana" },
  "audio/prs.sid": { source: "iana" },
  "audio/qcelp": { source: "iana" },
  "audio/raptorfec": { source: "iana" },
  "audio/red": { source: "iana" },
  "audio/rtp-enc-aescm128": { source: "iana" },
  "audio/rtp-midi": { source: "iana" },
  "audio/rtploopback": { source: "iana" },
  "audio/rtx": { source: "iana" },
  "audio/s3m": { source: "apache", extensions: ["s3m"] },
  "audio/scip": { source: "iana" },
  "audio/silk": { source: "apache", extensions: ["sil"] },
  "audio/smv": { source: "iana" },
  "audio/smv-qcp": { source: "iana" },
  "audio/smv0": { source: "iana" },
  "audio/sofa": { source: "iana" },
  "audio/sp-midi": { source: "iana" },
  "audio/speex": { source: "iana" },
  "audio/t140c": { source: "iana" },
  "audio/t38": { source: "iana" },
  "audio/telephone-event": { source: "iana" },
  "audio/tetra_acelp": { source: "iana" },
  "audio/tetra_acelp_bb": { source: "iana" },
  "audio/tone": { source: "iana" },
  "audio/tsvcis": { source: "iana" },
  "audio/uemclip": { source: "iana" },
  "audio/ulpfec": { source: "iana" },
  "audio/usac": { source: "iana" },
  "audio/vdvi": { source: "iana" },
  "audio/vmr-wb": { source: "iana" },
  "audio/vnd.3gpp.iufp": { source: "iana" },
  "audio/vnd.4sb": { source: "iana" },
  "audio/vnd.audiokoz": { source: "iana" },
  "audio/vnd.celp": { source: "iana" },
  "audio/vnd.cisco.nse": { source: "iana" },
  "audio/vnd.cmles.radio-events": { source: "iana" },
  "audio/vnd.cns.anp1": { source: "iana" },
  "audio/vnd.cns.inf1": { source: "iana" },
  "audio/vnd.dece.audio": { source: "iana", extensions: ["uva", "uvva"] },
  "audio/vnd.digital-winds": { source: "iana", extensions: ["eol"] },
  "audio/vnd.dlna.adts": { source: "iana" },
  "audio/vnd.dolby.heaac.1": { source: "iana" },
  "audio/vnd.dolby.heaac.2": { source: "iana" },
  "audio/vnd.dolby.mlp": { source: "iana" },
  "audio/vnd.dolby.mps": { source: "iana" },
  "audio/vnd.dolby.pl2": { source: "iana" },
  "audio/vnd.dolby.pl2x": { source: "iana" },
  "audio/vnd.dolby.pl2z": { source: "iana" },
  "audio/vnd.dolby.pulse.1": { source: "iana" },
  "audio/vnd.dra": { source: "iana", extensions: ["dra"] },
  "audio/vnd.dts": { source: "iana", extensions: ["dts"] },
  "audio/vnd.dts.hd": { source: "iana", extensions: ["dtshd"] },
  "audio/vnd.dts.uhd": { source: "iana" },
  "audio/vnd.dvb.file": { source: "iana" },
  "audio/vnd.everad.plj": { source: "iana" },
  "audio/vnd.hns.audio": { source: "iana" },
  "audio/vnd.lucent.voice": { source: "iana", extensions: ["lvp"] },
  "audio/vnd.ms-playready.media.pya": { source: "iana", extensions: ["pya"] },
  "audio/vnd.nokia.mobile-xmf": { source: "iana" },
  "audio/vnd.nortel.vbk": { source: "iana" },
  "audio/vnd.nuera.ecelp4800": { source: "iana", extensions: ["ecelp4800"] },
  "audio/vnd.nuera.ecelp7470": { source: "iana", extensions: ["ecelp7470"] },
  "audio/vnd.nuera.ecelp9600": { source: "iana", extensions: ["ecelp9600"] },
  "audio/vnd.octel.sbc": { source: "iana" },
  "audio/vnd.presonus.multitrack": { source: "iana" },
  "audio/vnd.qcelp": { source: "iana" },
  "audio/vnd.rhetorex.32kadpcm": { source: "iana" },
  "audio/vnd.rip": { source: "iana", extensions: ["rip"] },
  "audio/vnd.rn-realaudio": { compressible: !1 },
  "audio/vnd.sealedmedia.softseal.mpeg": { source: "iana" },
  "audio/vnd.vmx.cvsd": { source: "iana" },
  "audio/vnd.wave": { compressible: !1 },
  "audio/vorbis": { source: "iana", compressible: !1 },
  "audio/vorbis-config": { source: "iana" },
  "audio/wav": { compressible: !1, extensions: ["wav"] },
  "audio/wave": { compressible: !1, extensions: ["wav"] },
  "audio/webm": { source: "apache", compressible: !1, extensions: ["weba"] },
  "audio/x-aac": { source: "apache", compressible: !1, extensions: ["aac"] },
  "audio/x-aiff": { source: "apache", extensions: ["aif", "aiff", "aifc"] },
  "audio/x-caf": { source: "apache", compressible: !1, extensions: ["caf"] },
  "audio/x-flac": { source: "apache", extensions: ["flac"] },
  "audio/x-m4a": { source: "nginx", extensions: ["m4a"] },
  "audio/x-matroska": { source: "apache", extensions: ["mka"] },
  "audio/x-mpegurl": { source: "apache", extensions: ["m3u"] },
  "audio/x-ms-wax": { source: "apache", extensions: ["wax"] },
  "audio/x-ms-wma": { source: "apache", extensions: ["wma"] },
  "audio/x-pn-realaudio": { source: "apache", extensions: ["ram", "ra"] },
  "audio/x-pn-realaudio-plugin": { source: "apache", extensions: ["rmp"] },
  "audio/x-realaudio": { source: "nginx", extensions: ["ra"] },
  "audio/x-tta": { source: "apache" },
  "audio/x-wav": { source: "apache", extensions: ["wav"] },
  "audio/xm": { source: "apache", extensions: ["xm"] },
  "chemical/x-cdx": { source: "apache", extensions: ["cdx"] },
  "chemical/x-cif": { source: "apache", extensions: ["cif"] },
  "chemical/x-cmdf": { source: "apache", extensions: ["cmdf"] },
  "chemical/x-cml": { source: "apache", extensions: ["cml"] },
  "chemical/x-csml": { source: "apache", extensions: ["csml"] },
  "chemical/x-pdb": { source: "apache" },
  "chemical/x-xyz": { source: "apache", extensions: ["xyz"] },
  "font/collection": { source: "iana", extensions: ["ttc"] },
  "font/otf": { source: "iana", compressible: !0, extensions: ["otf"] },
  "font/sfnt": { source: "iana" },
  "font/ttf": { source: "iana", compressible: !0, extensions: ["ttf"] },
  "font/woff": { source: "iana", extensions: ["woff"] },
  "font/woff2": { source: "iana", extensions: ["woff2"] },
  "image/aces": { source: "iana", extensions: ["exr"] },
  "image/apng": { compressible: !1, extensions: ["apng"] },
  "image/avci": { source: "iana", extensions: ["avci"] },
  "image/avcs": { source: "iana", extensions: ["avcs"] },
  "image/avif": { source: "iana", compressible: !1, extensions: ["avif"] },
  "image/bmp": { source: "iana", compressible: !0, extensions: ["bmp"] },
  "image/cgm": { source: "iana", extensions: ["cgm"] },
  "image/dicom-rle": { source: "iana", extensions: ["drle"] },
  "image/emf": { source: "iana", extensions: ["emf"] },
  "image/fits": { source: "iana", extensions: ["fits"] },
  "image/g3fax": { source: "iana", extensions: ["g3"] },
  "image/gif": { source: "iana", compressible: !1, extensions: ["gif"] },
  "image/heic": { source: "iana", extensions: ["heic"] },
  "image/heic-sequence": { source: "iana", extensions: ["heics"] },
  "image/heif": { source: "iana", extensions: ["heif"] },
  "image/heif-sequence": { source: "iana", extensions: ["heifs"] },
  "image/hej2k": { source: "iana", extensions: ["hej2"] },
  "image/hsj2": { source: "iana", extensions: ["hsj2"] },
  "image/ief": { source: "iana", extensions: ["ief"] },
  "image/jls": { source: "iana", extensions: ["jls"] },
  "image/jp2": { source: "iana", compressible: !1, extensions: ["jp2", "jpg2"] },
  "image/jpeg": { source: "iana", compressible: !1, extensions: ["jpeg", "jpg", "jpe"] },
  "image/jph": { source: "iana", extensions: ["jph"] },
  "image/jphc": { source: "iana", extensions: ["jhc"] },
  "image/jpm": { source: "iana", compressible: !1, extensions: ["jpm"] },
  "image/jpx": { source: "iana", compressible: !1, extensions: ["jpx", "jpf"] },
  "image/jxr": { source: "iana", extensions: ["jxr"] },
  "image/jxra": { source: "iana", extensions: ["jxra"] },
  "image/jxrs": { source: "iana", extensions: ["jxrs"] },
  "image/jxs": { source: "iana", extensions: ["jxs"] },
  "image/jxsc": { source: "iana", extensions: ["jxsc"] },
  "image/jxsi": { source: "iana", extensions: ["jxsi"] },
  "image/jxss": { source: "iana", extensions: ["jxss"] },
  "image/ktx": { source: "iana", extensions: ["ktx"] },
  "image/ktx2": { source: "iana", extensions: ["ktx2"] },
  "image/naplps": { source: "iana" },
  "image/pjpeg": { compressible: !1 },
  "image/png": { source: "iana", compressible: !1, extensions: ["png"] },
  "image/prs.btif": { source: "iana", extensions: ["btif"] },
  "image/prs.pti": { source: "iana", extensions: ["pti"] },
  "image/pwg-raster": { source: "iana" },
  "image/sgi": { source: "apache", extensions: ["sgi"] },
  "image/svg+xml": { source: "iana", compressible: !0, extensions: ["svg", "svgz"] },
  "image/t38": { source: "iana", extensions: ["t38"] },
  "image/tiff": { source: "iana", compressible: !1, extensions: ["tif", "tiff"] },
  "image/tiff-fx": { source: "iana", extensions: ["tfx"] },
  "image/vnd.adobe.photoshop": { source: "iana", compressible: !0, extensions: ["psd"] },
  "image/vnd.airzip.accelerator.azv": { source: "iana", extensions: ["azv"] },
  "image/vnd.cns.inf2": { source: "iana" },
  "image/vnd.dece.graphic": { source: "iana", extensions: ["uvi", "uvvi", "uvg", "uvvg"] },
  "image/vnd.djvu": { source: "iana", extensions: ["djvu", "djv"] },
  "image/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
  "image/vnd.dwg": { source: "iana", extensions: ["dwg"] },
  "image/vnd.dxf": { source: "iana", extensions: ["dxf"] },
  "image/vnd.fastbidsheet": { source: "iana", extensions: ["fbs"] },
  "image/vnd.fpx": { source: "iana", extensions: ["fpx"] },
  "image/vnd.fst": { source: "iana", extensions: ["fst"] },
  "image/vnd.fujixerox.edmics-mmr": { source: "iana", extensions: ["mmr"] },
  "image/vnd.fujixerox.edmics-rlc": { source: "iana", extensions: ["rlc"] },
  "image/vnd.globalgraphics.pgb": { source: "iana" },
  "image/vnd.microsoft.icon": { source: "iana", compressible: !0, extensions: ["ico"] },
  "image/vnd.mix": { source: "iana" },
  "image/vnd.mozilla.apng": { source: "iana" },
  "image/vnd.ms-dds": { compressible: !0, extensions: ["dds"] },
  "image/vnd.ms-modi": { source: "iana", extensions: ["mdi"] },
  "image/vnd.ms-photo": { source: "apache", extensions: ["wdp"] },
  "image/vnd.net-fpx": { source: "iana", extensions: ["npx"] },
  "image/vnd.pco.b16": { source: "iana", extensions: ["b16"] },
  "image/vnd.radiance": { source: "iana" },
  "image/vnd.sealed.png": { source: "iana" },
  "image/vnd.sealedmedia.softseal.gif": { source: "iana" },
  "image/vnd.sealedmedia.softseal.jpg": { source: "iana" },
  "image/vnd.svf": { source: "iana" },
  "image/vnd.tencent.tap": { source: "iana", extensions: ["tap"] },
  "image/vnd.valve.source.texture": { source: "iana", extensions: ["vtf"] },
  "image/vnd.wap.wbmp": { source: "iana", extensions: ["wbmp"] },
  "image/vnd.xiff": { source: "iana", extensions: ["xif"] },
  "image/vnd.zbrush.pcx": { source: "iana", extensions: ["pcx"] },
  "image/webp": { source: "apache", extensions: ["webp"] },
  "image/wmf": { source: "iana", extensions: ["wmf"] },
  "image/x-3ds": { source: "apache", extensions: ["3ds"] },
  "image/x-cmu-raster": { source: "apache", extensions: ["ras"] },
  "image/x-cmx": { source: "apache", extensions: ["cmx"] },
  "image/x-freehand": { source: "apache", extensions: ["fh", "fhc", "fh4", "fh5", "fh7"] },
  "image/x-icon": { source: "apache", compressible: !0, extensions: ["ico"] },
  "image/x-jng": { source: "nginx", extensions: ["jng"] },
  "image/x-mrsid-image": { source: "apache", extensions: ["sid"] },
  "image/x-ms-bmp": { source: "nginx", compressible: !0, extensions: ["bmp"] },
  "image/x-pcx": { source: "apache", extensions: ["pcx"] },
  "image/x-pict": { source: "apache", extensions: ["pic", "pct"] },
  "image/x-portable-anymap": { source: "apache", extensions: ["pnm"] },
  "image/x-portable-bitmap": { source: "apache", extensions: ["pbm"] },
  "image/x-portable-graymap": { source: "apache", extensions: ["pgm"] },
  "image/x-portable-pixmap": { source: "apache", extensions: ["ppm"] },
  "image/x-rgb": { source: "apache", extensions: ["rgb"] },
  "image/x-tga": { source: "apache", extensions: ["tga"] },
  "image/x-xbitmap": { source: "apache", extensions: ["xbm"] },
  "image/x-xcf": { compressible: !1 },
  "image/x-xpixmap": { source: "apache", extensions: ["xpm"] },
  "image/x-xwindowdump": { source: "apache", extensions: ["xwd"] },
  "message/cpim": { source: "iana" },
  "message/delivery-status": { source: "iana" },
  "message/disposition-notification": { source: "iana", extensions: ["disposition-notification"] },
  "message/external-body": { source: "iana" },
  "message/feedback-report": { source: "iana" },
  "message/global": { source: "iana", extensions: ["u8msg"] },
  "message/global-delivery-status": { source: "iana", extensions: ["u8dsn"] },
  "message/global-disposition-notification": { source: "iana", extensions: ["u8mdn"] },
  "message/global-headers": { source: "iana", extensions: ["u8hdr"] },
  "message/http": { source: "iana", compressible: !1 },
  "message/imdn+xml": { source: "iana", compressible: !0 },
  "message/news": { source: "iana" },
  "message/partial": { source: "iana", compressible: !1 },
  "message/rfc822": { source: "iana", compressible: !0, extensions: ["eml", "mime"] },
  "message/s-http": { source: "iana" },
  "message/sip": { source: "iana" },
  "message/sipfrag": { source: "iana" },
  "message/tracking-status": { source: "iana" },
  "message/vnd.si.simp": { source: "iana" },
  "message/vnd.wfa.wsc": { source: "iana", extensions: ["wsc"] },
  "model/3mf": { source: "iana", extensions: ["3mf"] },
  "model/e57": { source: "iana" },
  "model/gltf+json": { source: "iana", compressible: !0, extensions: ["gltf"] },
  "model/gltf-binary": { source: "iana", compressible: !0, extensions: ["glb"] },
  "model/iges": { source: "iana", compressible: !1, extensions: ["igs", "iges"] },
  "model/mesh": { source: "iana", compressible: !1, extensions: ["msh", "mesh", "silo"] },
  "model/mtl": { source: "iana", extensions: ["mtl"] },
  "model/obj": { source: "iana", extensions: ["obj"] },
  "model/step": { source: "iana" },
  "model/step+xml": { source: "iana", compressible: !0, extensions: ["stpx"] },
  "model/step+zip": { source: "iana", compressible: !1, extensions: ["stpz"] },
  "model/step-xml+zip": { source: "iana", compressible: !1, extensions: ["stpxz"] },
  "model/stl": { source: "iana", extensions: ["stl"] },
  "model/vnd.collada+xml": { source: "iana", compressible: !0, extensions: ["dae"] },
  "model/vnd.dwf": { source: "iana", extensions: ["dwf"] },
  "model/vnd.flatland.3dml": { source: "iana" },
  "model/vnd.gdl": { source: "iana", extensions: ["gdl"] },
  "model/vnd.gs-gdl": { source: "apache" },
  "model/vnd.gs.gdl": { source: "iana" },
  "model/vnd.gtw": { source: "iana", extensions: ["gtw"] },
  "model/vnd.moml+xml": { source: "iana", compressible: !0 },
  "model/vnd.mts": { source: "iana", extensions: ["mts"] },
  "model/vnd.opengex": { source: "iana", extensions: ["ogex"] },
  "model/vnd.parasolid.transmit.binary": { source: "iana", extensions: ["x_b"] },
  "model/vnd.parasolid.transmit.text": { source: "iana", extensions: ["x_t"] },
  "model/vnd.pytha.pyox": { source: "iana" },
  "model/vnd.rosette.annotated-data-model": { source: "iana" },
  "model/vnd.sap.vds": { source: "iana", extensions: ["vds"] },
  "model/vnd.usdz+zip": { source: "iana", compressible: !1, extensions: ["usdz"] },
  "model/vnd.valve.source.compiled-map": { source: "iana", extensions: ["bsp"] },
  "model/vnd.vtu": { source: "iana", extensions: ["vtu"] },
  "model/vrml": { source: "iana", compressible: !1, extensions: ["wrl", "vrml"] },
  "model/x3d+binary": { source: "apache", compressible: !1, extensions: ["x3db", "x3dbz"] },
  "model/x3d+fastinfoset": { source: "iana", extensions: ["x3db"] },
  "model/x3d+vrml": { source: "apache", compressible: !1, extensions: ["x3dv", "x3dvz"] },
  "model/x3d+xml": { source: "iana", compressible: !0, extensions: ["x3d", "x3dz"] },
  "model/x3d-vrml": { source: "iana", extensions: ["x3dv"] },
  "multipart/alternative": { source: "iana", compressible: !1 },
  "multipart/appledouble": { source: "iana" },
  "multipart/byteranges": { source: "iana" },
  "multipart/digest": { source: "iana" },
  "multipart/encrypted": { source: "iana", compressible: !1 },
  "multipart/form-data": { source: "iana", compressible: !1 },
  "multipart/header-set": { source: "iana" },
  "multipart/mixed": { source: "iana" },
  "multipart/multilingual": { source: "iana" },
  "multipart/parallel": { source: "iana" },
  "multipart/related": { source: "iana", compressible: !1 },
  "multipart/report": { source: "iana" },
  "multipart/signed": { source: "iana", compressible: !1 },
  "multipart/vnd.bint.med-plus": { source: "iana" },
  "multipart/voice-message": { source: "iana" },
  "multipart/x-mixed-replace": { source: "iana" },
  "text/1d-interleaved-parityfec": { source: "iana" },
  "text/cache-manifest": { source: "iana", compressible: !0, extensions: ["appcache", "manifest"] },
  "text/calendar": { source: "iana", extensions: ["ics", "ifb"] },
  "text/calender": { compressible: !0 },
  "text/cmd": { compressible: !0 },
  "text/coffeescript": { extensions: ["coffee", "litcoffee"] },
  "text/cql": { source: "iana" },
  "text/cql-expression": { source: "iana" },
  "text/cql-identifier": { source: "iana" },
  "text/css": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["css"] },
  "text/csv": { source: "iana", compressible: !0, extensions: ["csv"] },
  "text/csv-schema": { source: "iana" },
  "text/directory": { source: "iana" },
  "text/dns": { source: "iana" },
  "text/ecmascript": { source: "iana" },
  "text/encaprtp": { source: "iana" },
  "text/enriched": { source: "iana" },
  "text/fhirpath": { source: "iana" },
  "text/flexfec": { source: "iana" },
  "text/fwdred": { source: "iana" },
  "text/gff3": { source: "iana" },
  "text/grammar-ref-list": { source: "iana" },
  "text/html": { source: "iana", compressible: !0, extensions: ["html", "htm", "shtml"] },
  "text/jade": { extensions: ["jade"] },
  "text/javascript": { source: "iana", compressible: !0 },
  "text/jcr-cnd": { source: "iana" },
  "text/jsx": { compressible: !0, extensions: ["jsx"] },
  "text/less": { compressible: !0, extensions: ["less"] },
  "text/markdown": { source: "iana", compressible: !0, extensions: ["markdown", "md"] },
  "text/mathml": { source: "nginx", extensions: ["mml"] },
  "text/mdx": { compressible: !0, extensions: ["mdx"] },
  "text/mizar": { source: "iana" },
  "text/n3": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["n3"] },
  "text/parameters": { source: "iana", charset: "UTF-8" },
  "text/parityfec": { source: "iana" },
  "text/plain": { source: "iana", compressible: !0, extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] },
  "text/provenance-notation": { source: "iana", charset: "UTF-8" },
  "text/prs.fallenstein.rst": { source: "iana" },
  "text/prs.lines.tag": { source: "iana", extensions: ["dsc"] },
  "text/prs.prop.logic": { source: "iana" },
  "text/raptorfec": { source: "iana" },
  "text/red": { source: "iana" },
  "text/rfc822-headers": { source: "iana" },
  "text/richtext": { source: "iana", compressible: !0, extensions: ["rtx"] },
  "text/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
  "text/rtp-enc-aescm128": { source: "iana" },
  "text/rtploopback": { source: "iana" },
  "text/rtx": { source: "iana" },
  "text/sgml": { source: "iana", extensions: ["sgml", "sgm"] },
  "text/shaclc": { source: "iana" },
  "text/shex": { source: "iana", extensions: ["shex"] },
  "text/slim": { extensions: ["slim", "slm"] },
  "text/spdx": { source: "iana", extensions: ["spdx"] },
  "text/strings": { source: "iana" },
  "text/stylus": { extensions: ["stylus", "styl"] },
  "text/t140": { source: "iana" },
  "text/tab-separated-values": { source: "iana", compressible: !0, extensions: ["tsv"] },
  "text/troff": { source: "iana", extensions: ["t", "tr", "roff", "man", "me", "ms"] },
  "text/turtle": { source: "iana", charset: "UTF-8", extensions: ["ttl"] },
  "text/ulpfec": { source: "iana" },
  "text/uri-list": { source: "iana", compressible: !0, extensions: ["uri", "uris", "urls"] },
  "text/vcard": { source: "iana", compressible: !0, extensions: ["vcard"] },
  "text/vnd.a": { source: "iana" },
  "text/vnd.abc": { source: "iana" },
  "text/vnd.ascii-art": { source: "iana" },
  "text/vnd.curl": { source: "iana", extensions: ["curl"] },
  "text/vnd.curl.dcurl": { source: "apache", extensions: ["dcurl"] },
  "text/vnd.curl.mcurl": { source: "apache", extensions: ["mcurl"] },
  "text/vnd.curl.scurl": { source: "apache", extensions: ["scurl"] },
  "text/vnd.debian.copyright": { source: "iana", charset: "UTF-8" },
  "text/vnd.dmclientscript": { source: "iana" },
  "text/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
  "text/vnd.esmertec.theme-descriptor": { source: "iana", charset: "UTF-8" },
  "text/vnd.familysearch.gedcom": { source: "iana", extensions: ["ged"] },
  "text/vnd.ficlab.flt": { source: "iana" },
  "text/vnd.fly": { source: "iana", extensions: ["fly"] },
  "text/vnd.fmi.flexstor": { source: "iana", extensions: ["flx"] },
  "text/vnd.gml": { source: "iana" },
  "text/vnd.graphviz": { source: "iana", extensions: ["gv"] },
  "text/vnd.hans": { source: "iana" },
  "text/vnd.hgl": { source: "iana" },
  "text/vnd.in3d.3dml": { source: "iana", extensions: ["3dml"] },
  "text/vnd.in3d.spot": { source: "iana", extensions: ["spot"] },
  "text/vnd.iptc.newsml": { source: "iana" },
  "text/vnd.iptc.nitf": { source: "iana" },
  "text/vnd.latex-z": { source: "iana" },
  "text/vnd.motorola.reflex": { source: "iana" },
  "text/vnd.ms-mediapackage": { source: "iana" },
  "text/vnd.net2phone.commcenter.command": { source: "iana" },
  "text/vnd.radisys.msml-basic-layout": { source: "iana" },
  "text/vnd.senx.warpscript": { source: "iana" },
  "text/vnd.si.uricatalogue": { source: "iana" },
  "text/vnd.sosi": { source: "iana" },
  "text/vnd.sun.j2me.app-descriptor": { source: "iana", charset: "UTF-8", extensions: ["jad"] },
  "text/vnd.trolltech.linguist": { source: "iana", charset: "UTF-8" },
  "text/vnd.wap.si": { source: "iana" },
  "text/vnd.wap.sl": { source: "iana" },
  "text/vnd.wap.wml": { source: "iana", extensions: ["wml"] },
  "text/vnd.wap.wmlscript": { source: "iana", extensions: ["wmls"] },
  "text/vtt": { source: "iana", charset: "UTF-8", compressible: !0, extensions: ["vtt"] },
  "text/x-asm": { source: "apache", extensions: ["s", "asm"] },
  "text/x-c": { source: "apache", extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"] },
  "text/x-component": { source: "nginx", extensions: ["htc"] },
  "text/x-fortran": { source: "apache", extensions: ["f", "for", "f77", "f90"] },
  "text/x-gwt-rpc": { compressible: !0 },
  "text/x-handlebars-template": { extensions: ["hbs"] },
  "text/x-java-source": { source: "apache", extensions: ["java"] },
  "text/x-jquery-tmpl": { compressible: !0 },
  "text/x-lua": { extensions: ["lua"] },
  "text/x-markdown": { compressible: !0, extensions: ["mkd"] },
  "text/x-nfo": { source: "apache", extensions: ["nfo"] },
  "text/x-opml": { source: "apache", extensions: ["opml"] },
  "text/x-org": { compressible: !0, extensions: ["org"] },
  "text/x-pascal": { source: "apache", extensions: ["p", "pas"] },
  "text/x-processing": { compressible: !0, extensions: ["pde"] },
  "text/x-sass": { extensions: ["sass"] },
  "text/x-scss": { extensions: ["scss"] },
  "text/x-setext": { source: "apache", extensions: ["etx"] },
  "text/x-sfv": { source: "apache", extensions: ["sfv"] },
  "text/x-suse-ymp": { compressible: !0, extensions: ["ymp"] },
  "text/x-uuencode": { source: "apache", extensions: ["uu"] },
  "text/x-vcalendar": { source: "apache", extensions: ["vcs"] },
  "text/x-vcard": { source: "apache", extensions: ["vcf"] },
  "text/xml": { source: "iana", compressible: !0, extensions: ["xml"] },
  "text/xml-external-parsed-entity": { source: "iana" },
  "text/yaml": { compressible: !0, extensions: ["yaml", "yml"] },
  "video/1d-interleaved-parityfec": { source: "iana" },
  "video/3gpp": { source: "iana", extensions: ["3gp", "3gpp"] },
  "video/3gpp-tt": { source: "iana" },
  "video/3gpp2": { source: "iana", extensions: ["3g2"] },
  "video/av1": { source: "iana" },
  "video/bmpeg": { source: "iana" },
  "video/bt656": { source: "iana" },
  "video/celb": { source: "iana" },
  "video/dv": { source: "iana" },
  "video/encaprtp": { source: "iana" },
  "video/ffv1": { source: "iana" },
  "video/flexfec": { source: "iana" },
  "video/h261": { source: "iana", extensions: ["h261"] },
  "video/h263": { source: "iana", extensions: ["h263"] },
  "video/h263-1998": { source: "iana" },
  "video/h263-2000": { source: "iana" },
  "video/h264": { source: "iana", extensions: ["h264"] },
  "video/h264-rcdo": { source: "iana" },
  "video/h264-svc": { source: "iana" },
  "video/h265": { source: "iana" },
  "video/iso.segment": { source: "iana", extensions: ["m4s"] },
  "video/jpeg": { source: "iana", extensions: ["jpgv"] },
  "video/jpeg2000": { source: "iana" },
  "video/jpm": { source: "apache", extensions: ["jpm", "jpgm"] },
  "video/jxsv": { source: "iana" },
  "video/mj2": { source: "iana", extensions: ["mj2", "mjp2"] },
  "video/mp1s": { source: "iana" },
  "video/mp2p": { source: "iana" },
  "video/mp2t": { source: "iana", extensions: ["ts"] },
  "video/mp4": { source: "iana", compressible: !1, extensions: ["mp4", "mp4v", "mpg4"] },
  "video/mp4v-es": { source: "iana" },
  "video/mpeg": { source: "iana", compressible: !1, extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] },
  "video/mpeg4-generic": { source: "iana" },
  "video/mpv": { source: "iana" },
  "video/nv": { source: "iana" },
  "video/ogg": { source: "iana", compressible: !1, extensions: ["ogv"] },
  "video/parityfec": { source: "iana" },
  "video/pointer": { source: "iana" },
  "video/quicktime": { source: "iana", compressible: !1, extensions: ["qt", "mov"] },
  "video/raptorfec": { source: "iana" },
  "video/raw": { source: "iana" },
  "video/rtp-enc-aescm128": { source: "iana" },
  "video/rtploopback": { source: "iana" },
  "video/rtx": { source: "iana" },
  "video/scip": { source: "iana" },
  "video/smpte291": { source: "iana" },
  "video/smpte292m": { source: "iana" },
  "video/ulpfec": { source: "iana" },
  "video/vc1": { source: "iana" },
  "video/vc2": { source: "iana" },
  "video/vnd.cctv": { source: "iana" },
  "video/vnd.dece.hd": { source: "iana", extensions: ["uvh", "uvvh"] },
  "video/vnd.dece.mobile": { source: "iana", extensions: ["uvm", "uvvm"] },
  "video/vnd.dece.mp4": { source: "iana" },
  "video/vnd.dece.pd": { source: "iana", extensions: ["uvp", "uvvp"] },
  "video/vnd.dece.sd": { source: "iana", extensions: ["uvs", "uvvs"] },
  "video/vnd.dece.video": { source: "iana", extensions: ["uvv", "uvvv"] },
  "video/vnd.directv.mpeg": { source: "iana" },
  "video/vnd.directv.mpeg-tts": { source: "iana" },
  "video/vnd.dlna.mpeg-tts": { source: "iana" },
  "video/vnd.dvb.file": { source: "iana", extensions: ["dvb"] },
  "video/vnd.fvt": { source: "iana", extensions: ["fvt"] },
  "video/vnd.hns.video": { source: "iana" },
  "video/vnd.iptvforum.1dparityfec-1010": { source: "iana" },
  "video/vnd.iptvforum.1dparityfec-2005": { source: "iana" },
  "video/vnd.iptvforum.2dparityfec-1010": { source: "iana" },
  "video/vnd.iptvforum.2dparityfec-2005": { source: "iana" },
  "video/vnd.iptvforum.ttsavc": { source: "iana" },
  "video/vnd.iptvforum.ttsmpeg2": { source: "iana" },
  "video/vnd.motorola.video": { source: "iana" },
  "video/vnd.motorola.videop": { source: "iana" },
  "video/vnd.mpegurl": { source: "iana", extensions: ["mxu", "m4u"] },
  "video/vnd.ms-playready.media.pyv": { source: "iana", extensions: ["pyv"] },
  "video/vnd.nokia.interleaved-multimedia": { source: "iana" },
  "video/vnd.nokia.mp4vr": { source: "iana" },
  "video/vnd.nokia.videovoip": { source: "iana" },
  "video/vnd.objectvideo": { source: "iana" },
  "video/vnd.radgamettools.bink": { source: "iana" },
  "video/vnd.radgamettools.smacker": { source: "iana" },
  "video/vnd.sealed.mpeg1": { source: "iana" },
  "video/vnd.sealed.mpeg4": { source: "iana" },
  "video/vnd.sealed.swf": { source: "iana" },
  "video/vnd.sealedmedia.softseal.mov": { source: "iana" },
  "video/vnd.uvvu.mp4": { source: "iana", extensions: ["uvu", "uvvu"] },
  "video/vnd.vivo": { source: "iana", extensions: ["viv"] },
  "video/vnd.youtube.yt": { source: "iana" },
  "video/vp8": { source: "iana" },
  "video/vp9": { source: "iana" },
  "video/webm": { source: "apache", compressible: !1, extensions: ["webm"] },
  "video/x-f4v": { source: "apache", extensions: ["f4v"] },
  "video/x-fli": { source: "apache", extensions: ["fli"] },
  "video/x-flv": { source: "apache", compressible: !1, extensions: ["flv"] },
  "video/x-m4v": { source: "apache", extensions: ["m4v"] },
  "video/x-matroska": { source: "apache", compressible: !1, extensions: ["mkv", "mk3d", "mks"] },
  "video/x-mng": { source: "apache", extensions: ["mng"] },
  "video/x-ms-asf": { source: "apache", extensions: ["asf", "asx"] },
  "video/x-ms-vob": { source: "apache", extensions: ["vob"] },
  "video/x-ms-wm": { source: "apache", extensions: ["wm"] },
  "video/x-ms-wmv": { source: "apache", compressible: !1, extensions: ["wmv"] },
  "video/x-ms-wmx": { source: "apache", extensions: ["wmx"] },
  "video/x-ms-wvx": { source: "apache", extensions: ["wvx"] },
  "video/x-msvideo": { source: "apache", extensions: ["avi"] },
  "video/x-sgi-movie": { source: "apache", extensions: ["movie"] },
  "video/x-smv": { source: "apache", extensions: ["smv"] },
  "x-conference/x-cooltalk": { source: "apache", extensions: ["ice"] },
  "x-shader/x-fragment": { compressible: !0 },
  "x-shader/x-vertex": { compressible: !0 }
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var Ne, di;
function Wn() {
  return di || (di = 1, Ne = Vn), Ne;
}
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var mi;
function Kn() {
  return mi || (mi = 1, function(m) {
    var h = Wn(), b = B.extname, p = /^\s*([^;\s]*)(?:;|\s|$)/, v = /^text\//i;
    m.charset = d, m.charsets = { lookup: d }, m.contentType = c, m.extension = l, m.extensions = /* @__PURE__ */ Object.create(null), m.lookup = t, m.types = /* @__PURE__ */ Object.create(null), i(m.extensions, m.types);
    function d(a) {
      if (!a || typeof a != "string")
        return !1;
      var e = p.exec(a), n = e && h[e[1].toLowerCase()];
      return n && n.charset ? n.charset : e && v.test(e[1]) ? "UTF-8" : !1;
    }
    function c(a) {
      if (!a || typeof a != "string")
        return !1;
      var e = a.indexOf("/") === -1 ? m.lookup(a) : a;
      if (!e)
        return !1;
      if (e.indexOf("charset") === -1) {
        var n = m.charset(e);
        n && (e += "; charset=" + n.toLowerCase());
      }
      return e;
    }
    function l(a) {
      if (!a || typeof a != "string")
        return !1;
      var e = p.exec(a), n = e && m.extensions[e[1].toLowerCase()];
      return !n || !n.length ? !1 : n[0];
    }
    function t(a) {
      if (!a || typeof a != "string")
        return !1;
      var e = b("x." + a).toLowerCase().substr(1);
      return e && m.types[e] || !1;
    }
    function i(a, e) {
      var n = ["nginx", "apache", void 0, "iana"];
      Object.keys(h).forEach(function(s) {
        var r = h[s], u = r.extensions;
        if (!(!u || !u.length)) {
          a[s] = u;
          for (var f = 0; f < u.length; f++) {
            var g = u[f];
            if (e[g]) {
              var k = n.indexOf(h[e[g]].source), T = n.indexOf(r.source);
              if (e[g] !== "application/octet-stream" && (k > T || k === T && e[g].substr(0, 12) === "application/"))
                continue;
            }
            e[g] = s;
          }
        }
      });
    }
  }(Be)), Be;
}
/*!
 * accepts
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Ie, fi;
function ai() {
  if (fi) return Ie;
  fi = 1;
  var m = Hn(), h = Kn();
  Ie = b;
  function b(d) {
    if (!(this instanceof b))
      return new b(d);
    this.headers = d.headers, this.negotiator = new m(d);
  }
  b.prototype.type = b.prototype.types = function(d) {
    var c = d;
    if (c && !Array.isArray(c)) {
      c = new Array(arguments.length);
      for (var l = 0; l < c.length; l++)
        c[l] = arguments[l];
    }
    if (!c || c.length === 0)
      return this.negotiator.mediaTypes();
    if (!this.headers.accept)
      return c[0];
    var t = c.map(p), i = this.negotiator.mediaTypes(t.filter(v)), a = i[0];
    return a ? c[t.indexOf(a)] : !1;
  }, b.prototype.encoding = b.prototype.encodings = function(d) {
    var c = d;
    if (c && !Array.isArray(c)) {
      c = new Array(arguments.length);
      for (var l = 0; l < c.length; l++)
        c[l] = arguments[l];
    }
    return !c || c.length === 0 ? this.negotiator.encodings() : this.negotiator.encodings(c)[0] || !1;
  }, b.prototype.charset = b.prototype.charsets = function(d) {
    var c = d;
    if (c && !Array.isArray(c)) {
      c = new Array(arguments.length);
      for (var l = 0; l < c.length; l++)
        c[l] = arguments[l];
    }
    return !c || c.length === 0 ? this.negotiator.charsets() : this.negotiator.charsets(c)[0] || !1;
  }, b.prototype.lang = b.prototype.langs = b.prototype.language = b.prototype.languages = function(d) {
    var c = d;
    if (c && !Array.isArray(c)) {
      c = new Array(arguments.length);
      for (var l = 0; l < c.length; l++)
        c[l] = arguments[l];
    }
    return !c || c.length === 0 ? this.negotiator.languages() : this.negotiator.languages(c)[0] || !1;
  };
  function p(d) {
    return d.indexOf("/") === -1 ? h.lookup(d) : d;
  }
  function v(d) {
    return typeof d == "string";
  }
  return Ie;
}
var De = {}, V = {}, Me = { exports: {} };
/*!
 * base64id v0.1.0
 */
var hi;
function yn() {
  return hi || (hi = 1, function(m, h) {
    var b = B, p = function() {
    };
    p.prototype.getRandomBytes = function(v) {
      var d = 4096, c = this;
      if (v = v || 12, v > d)
        return b.randomBytes(v);
      var l = parseInt(d / v), t = parseInt(l * 0.85);
      if (!t || (this.bytesBufferIndex == null && (this.bytesBufferIndex = -1), this.bytesBufferIndex == l && (this.bytesBuffer = null, this.bytesBufferIndex = -1), (this.bytesBufferIndex == -1 || this.bytesBufferIndex > t) && (this.isGeneratingBytes || (this.isGeneratingBytes = !0, b.randomBytes(d, function(a, e) {
        c.bytesBuffer = e, c.bytesBufferIndex = 0, c.isGeneratingBytes = !1;
      })), this.bytesBufferIndex == -1)))
        return b.randomBytes(v);
      var i = this.bytesBuffer.slice(v * this.bytesBufferIndex, v * (this.bytesBufferIndex + 1));
      return this.bytesBufferIndex++, i;
    }, p.prototype.generateId = function() {
      var v = Buffer.alloc(15);
      return v.writeInt32BE ? (this.sequenceNumber = this.sequenceNumber + 1 | 0, v.writeInt32BE(this.sequenceNumber, 11), b.randomBytes ? this.getRandomBytes(12).copy(v) : [0, 4, 8].forEach(function(d) {
        v.writeInt32BE(Math.random() * Math.pow(2, 32) | 0, d);
      }), v.toString("base64").replace(/\//g, "_").replace(/\+/g, "-")) : Math.abs(Math.random() * Math.random() * Date.now() | 0).toString() + Math.abs(Math.random() * Math.random() * Date.now() | 0).toString();
    }, m.exports = new p();
  }(Me)), Me.exports;
}
var _e = {}, ae = {}, se = {}, ze = {}, Z = {}, M = {}, vi;
function si() {
  if (vi) return M;
  vi = 1, Object.defineProperty(M, "__esModule", { value: !0 }), M.ERROR_PACKET = M.PACKET_TYPES_REVERSE = M.PACKET_TYPES = void 0;
  const m = /* @__PURE__ */ Object.create(null);
  M.PACKET_TYPES = m, m.open = "0", m.close = "1", m.ping = "2", m.pong = "3", m.message = "4", m.upgrade = "5", m.noop = "6";
  const h = /* @__PURE__ */ Object.create(null);
  M.PACKET_TYPES_REVERSE = h, Object.keys(m).forEach((p) => {
    h[m[p]] = p;
  });
  const b = { type: "error", data: "parser error" };
  return M.ERROR_PACKET = b, M;
}
var xi;
function Jn() {
  if (xi) return Z;
  xi = 1, Object.defineProperty(Z, "__esModule", { value: !0 }), Z.encodePacket = void 0, Z.encodePacketToBinary = t;
  const m = si(), h = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", b = typeof ArrayBuffer == "function", p = (i) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(i) : i && i.buffer instanceof ArrayBuffer, v = ({ type: i, data: a }, e, n) => h && a instanceof Blob ? e ? n(a) : d(a, n) : b && (a instanceof ArrayBuffer || p(a)) ? e ? n(a) : d(new Blob([a]), n) : n(m.PACKET_TYPES[i] + (a || ""));
  Z.encodePacket = v;
  const d = (i, a) => {
    const e = new FileReader();
    return e.onload = function() {
      const n = e.result.split(",")[1];
      a("b" + (n || ""));
    }, e.readAsDataURL(i);
  };
  function c(i) {
    return i instanceof Uint8Array ? i : i instanceof ArrayBuffer ? new Uint8Array(i) : new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
  }
  let l;
  function t(i, a) {
    if (h && i.data instanceof Blob)
      return i.data.arrayBuffer().then(c).then(a);
    if (b && (i.data instanceof ArrayBuffer || p(i.data)))
      return a(c(i.data));
    v(i, !1, (e) => {
      l || (l = new TextEncoder()), a(l.encode(e));
    });
  }
  return Z;
}
var te = {}, W = {}, gi;
function Yn() {
  if (gi) return W;
  gi = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.decode = W.encode = void 0;
  const m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let v = 0; v < m.length; v++)
    h[m.charCodeAt(v)] = v;
  const b = (v) => {
    let d = new Uint8Array(v), c, l = d.length, t = "";
    for (c = 0; c < l; c += 3)
      t += m[d[c] >> 2], t += m[(d[c] & 3) << 4 | d[c + 1] >> 4], t += m[(d[c + 1] & 15) << 2 | d[c + 2] >> 6], t += m[d[c + 2] & 63];
    return l % 3 === 2 ? t = t.substring(0, t.length - 1) + "=" : l % 3 === 1 && (t = t.substring(0, t.length - 2) + "=="), t;
  };
  W.encode = b;
  const p = (v) => {
    let d = v.length * 0.75, c = v.length, l, t = 0, i, a, e, n;
    v[v.length - 1] === "=" && (d--, v[v.length - 2] === "=" && d--);
    const o = new ArrayBuffer(d), s = new Uint8Array(o);
    for (l = 0; l < c; l += 4)
      i = h[v.charCodeAt(l)], a = h[v.charCodeAt(l + 1)], e = h[v.charCodeAt(l + 2)], n = h[v.charCodeAt(l + 3)], s[t++] = i << 2 | a >> 4, s[t++] = (a & 15) << 4 | e >> 2, s[t++] = (e & 3) << 6 | n & 63;
    return o;
  };
  return W.decode = p, W;
}
var bi;
function Qn() {
  if (bi) return te;
  bi = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.decodePacket = void 0;
  const m = si(), h = Yn(), b = typeof ArrayBuffer == "function", p = (c, l) => {
    if (typeof c != "string")
      return {
        type: "message",
        data: d(c, l)
      };
    const t = c.charAt(0);
    return t === "b" ? {
      type: "message",
      data: v(c.substring(1), l)
    } : m.PACKET_TYPES_REVERSE[t] ? c.length > 1 ? {
      type: m.PACKET_TYPES_REVERSE[t],
      data: c.substring(1)
    } : {
      type: m.PACKET_TYPES_REVERSE[t]
    } : m.ERROR_PACKET;
  };
  te.decodePacket = p;
  const v = (c, l) => {
    if (b) {
      const t = (0, h.decode)(c);
      return d(t, l);
    } else
      return { base64: !0, data: c };
  }, d = (c, l) => {
    switch (l) {
      case "blob":
        return c instanceof Blob ? c : new Blob([c]);
      case "arraybuffer":
      default:
        return c instanceof ArrayBuffer ? c : c.buffer;
    }
  };
  return te;
}
var yi;
function Oe() {
  return yi || (yi = 1, function(m) {
    Object.defineProperty(m, "__esModule", { value: !0 }), m.decodePayload = m.decodePacket = m.encodePayload = m.encodePacket = m.protocol = void 0, m.createPacketEncoderStream = l, m.createPacketDecoderStream = e;
    const h = Jn();
    Object.defineProperty(m, "encodePacket", { enumerable: !0, get: function() {
      return h.encodePacket;
    } });
    const b = Qn();
    Object.defineProperty(m, "decodePacket", { enumerable: !0, get: function() {
      return b.decodePacket;
    } });
    const p = si(), v = "", d = (n, o) => {
      const s = n.length, r = new Array(s);
      let u = 0;
      n.forEach((f, g) => {
        (0, h.encodePacket)(f, !1, (k) => {
          r[g] = k, ++u === s && o(r.join(v));
        });
      });
    };
    m.encodePayload = d;
    const c = (n, o) => {
      const s = n.split(v), r = [];
      for (let u = 0; u < s.length; u++) {
        const f = (0, b.decodePacket)(s[u], o);
        if (r.push(f), f.type === "error")
          break;
      }
      return r;
    };
    m.decodePayload = c;
    function l() {
      return new TransformStream({
        transform(n, o) {
          (0, h.encodePacketToBinary)(n, (s) => {
            const r = s.length;
            let u;
            if (r < 126)
              u = new Uint8Array(1), new DataView(u.buffer).setUint8(0, r);
            else if (r < 65536) {
              u = new Uint8Array(3);
              const f = new DataView(u.buffer);
              f.setUint8(0, 126), f.setUint16(1, r);
            } else {
              u = new Uint8Array(9);
              const f = new DataView(u.buffer);
              f.setUint8(0, 127), f.setBigUint64(1, BigInt(r));
            }
            n.data && typeof n.data != "string" && (u[0] |= 128), o.enqueue(u), o.enqueue(s);
          });
        }
      });
    }
    let t;
    function i(n) {
      return n.reduce((o, s) => o + s.length, 0);
    }
    function a(n, o) {
      if (n[0].length === o)
        return n.shift();
      const s = new Uint8Array(o);
      let r = 0;
      for (let u = 0; u < o; u++)
        s[u] = n[0][r++], r === n[0].length && (n.shift(), r = 0);
      return n.length && r < n[0].length && (n[0] = n[0].slice(r)), s;
    }
    function e(n, o) {
      t || (t = new TextDecoder());
      const s = [];
      let r = 0, u = -1, f = !1;
      return new TransformStream({
        transform(g, k) {
          for (s.push(g); ; ) {
            if (r === 0) {
              if (i(s) < 1)
                break;
              const T = a(s, 1);
              f = (T[0] & 128) === 128, u = T[0] & 127, u < 126 ? r = 3 : u === 126 ? r = 1 : r = 2;
            } else if (r === 1) {
              if (i(s) < 2)
                break;
              const T = a(s, 2);
              u = new DataView(T.buffer, T.byteOffset, T.length).getUint16(0), r = 3;
            } else if (r === 2) {
              if (i(s) < 8)
                break;
              const T = a(s, 8), E = new DataView(T.buffer, T.byteOffset, T.length), x = E.getUint32(0);
              if (x > Math.pow(2, 21) - 1) {
                k.enqueue(p.ERROR_PACKET);
                break;
              }
              u = x * Math.pow(2, 32) + E.getUint32(4), r = 3;
            } else {
              if (i(s) < u)
                break;
              const T = a(s, u);
              k.enqueue((0, b.decodePacket)(f ? T : t.decode(T), o)), r = 0;
            }
            if (u === 0 || u > n) {
              k.enqueue(p.ERROR_PACKET);
              break;
            }
          }
        }
      });
    }
    m.protocol = 4;
  }(ze)), ze;
}
var Le = {};
/*! https://mths.be/utf8js v2.1.2 by @mathias */
var Ue, wi;
function Gn() {
  if (wi) return Ue;
  wi = 1;
  var m = String.fromCharCode;
  function h(o) {
    for (var s = [], r = 0, u = o.length, f, g; r < u; )
      f = o.charCodeAt(r++), f >= 55296 && f <= 56319 && r < u ? (g = o.charCodeAt(r++), (g & 64512) == 56320 ? s.push(((f & 1023) << 10) + (g & 1023) + 65536) : (s.push(f), r--)) : s.push(f);
    return s;
  }
  function b(o) {
    for (var s = o.length, r = -1, u, f = ""; ++r < s; )
      u = o[r], u > 65535 && (u -= 65536, f += m(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), f += m(u);
    return f;
  }
  function p(o, s) {
    if (o >= 55296 && o <= 57343) {
      if (s)
        throw Error("Lone surrogate U+" + o.toString(16).toUpperCase() + " is not a scalar value");
      return !1;
    }
    return !0;
  }
  function v(o, s) {
    return m(o >> s & 63 | 128);
  }
  function d(o, s) {
    if ((o & 4294967168) == 0)
      return m(o);
    var r = "";
    return (o & 4294965248) == 0 ? r = m(o >> 6 & 31 | 192) : (o & 4294901760) == 0 ? (p(o, s) || (o = 65533), r = m(o >> 12 & 15 | 224), r += v(o, 6)) : (o & 4292870144) == 0 && (r = m(o >> 18 & 7 | 240), r += v(o, 12), r += v(o, 6)), r += m(o & 63 | 128), r;
  }
  function c(o, s) {
    s = s || {};
    for (var r = s.strict !== !1, u = h(o), f = u.length, g = -1, k, T = ""; ++g < f; )
      k = u[g], T += d(k, r);
    return T;
  }
  function l() {
    if (e >= a)
      throw Error("Invalid byte index");
    var o = i[e] & 255;
    if (e++, (o & 192) == 128)
      return o & 63;
    throw Error("Invalid continuation byte");
  }
  function t(o) {
    var s, r, u, f, g;
    if (e > a)
      throw Error("Invalid byte index");
    if (e == a)
      return !1;
    if (s = i[e] & 255, e++, (s & 128) == 0)
      return s;
    if ((s & 224) == 192) {
      if (r = l(), g = (s & 31) << 6 | r, g >= 128)
        return g;
      throw Error("Invalid continuation byte");
    }
    if ((s & 240) == 224) {
      if (r = l(), u = l(), g = (s & 15) << 12 | r << 6 | u, g >= 2048)
        return p(g, o) ? g : 65533;
      throw Error("Invalid continuation byte");
    }
    if ((s & 248) == 240 && (r = l(), u = l(), f = l(), g = (s & 7) << 18 | r << 12 | u << 6 | f, g >= 65536 && g <= 1114111))
      return g;
    throw Error("Invalid UTF-8 detected");
  }
  var i, a, e;
  function n(o, s) {
    s = s || {};
    var r = s.strict !== !1;
    i = h(o), a = i.length, e = 0;
    for (var u = [], f; (f = t(r)) !== !1; )
      u.push(f);
    return b(u);
  }
  return Ue = {
    version: "2.1.2",
    encode: c,
    decode: n
  }, Ue;
}
var Ci;
function Xn() {
  return Ci || (Ci = 1, function(m) {
    Object.defineProperty(m, "__esModule", { value: !0 }), m.packets = m.protocol = void 0, m.encodePacket = c, m.encodeBase64Packet = t, m.decodePacket = i, m.decodeBase64Packet = e, m.encodePayload = n, m.decodePayload = r, m.encodePayloadAsBinary = k, m.decodePayloadAsBinary = E;
    var h = Gn();
    m.protocol = 3;
    const b = (x) => {
      for (const w of x)
        if (w.data instanceof ArrayBuffer || ArrayBuffer.isView(w.data))
          return !0;
      return !1;
    };
    m.packets = {
      open: 0,
      close: 1,
      ping: 2,
      pong: 3,
      message: 4,
      upgrade: 5,
      noop: 6
    };
    var p = Object.keys(m.packets), v = { type: "error", data: "parser error" };
    const d = Buffer.concat([]);
    function c(x, w, C, _) {
      if (typeof w == "function" && (_ = w, w = null), typeof C == "function" && (_ = C, C = null), Buffer.isBuffer(x.data))
        return l(x, w, _);
      if (x.data && (x.data.buffer || x.data) instanceof ArrayBuffer)
        return l({ type: x.type, data: g(x.data) }, w, _);
      var F = m.packets[x.type];
      return x.data !== void 0 && (F += C ? h.encode(String(x.data), { strict: !1 }) : String(x.data)), _("" + F);
    }
    function l(x, w, C) {
      if (!w)
        return t(x, C);
      var _ = x.data, F = Buffer.allocUnsafe(1);
      return F[0] = m.packets[x.type], C(Buffer.concat([F, _]));
    }
    function t(x, w) {
      var C = Buffer.isBuffer(x.data) ? x.data : g(x.data), _ = "b" + m.packets[x.type];
      return _ += C.toString("base64"), w(_);
    }
    function i(x, w, C) {
      if (x === void 0)
        return v;
      var _;
      if (typeof x == "string")
        return _ = x.charAt(0), _ === "b" ? e(x.slice(1), w) : C && (x = a(x), x === !1) || Number(_) != _ || !p[_] ? v : x.length > 1 ? { type: p[_], data: x.slice(1) } : { type: p[_] };
      if (w === "arraybuffer") {
        var F = new Uint8Array(x);
        return _ = F[0], { type: p[_], data: F.buffer.slice(1) };
      }
      return x instanceof ArrayBuffer && (x = g(x)), _ = x[0], { type: p[_], data: x.slice(1) };
    }
    function a(x) {
      try {
        x = h.decode(x, { strict: !1 });
      } catch {
        return !1;
      }
      return x;
    }
    function e(x, w) {
      var C = p[x.charAt(0)], _ = Buffer.from(x.slice(1), "base64");
      if (w === "arraybuffer") {
        for (var F = new Uint8Array(_.length), S = 0; S < F.length; S++)
          F[S] = _[S];
        _ = F.buffer;
      }
      return { type: C, data: _ };
    }
    function n(x, w, C) {
      if (typeof w == "function" && (C = w, w = null), w && b(x))
        return k(x, C);
      if (!x.length)
        return C("0:");
      function _(F, S) {
        c(F, w, !1, function(j) {
          S(null, o(j));
        });
      }
      s(x, _, function(F, S) {
        return C(S.join(""));
      });
    }
    function o(x) {
      return x.length + ":" + x;
    }
    function s(x, w, C) {
      const _ = new Array(x.length);
      let F = 0;
      for (let S = 0; S < x.length; S++)
        w(x[S], (j, R) => {
          _[S] = R, ++F === x.length && C(null, _);
        });
    }
    function r(x, w, C) {
      if (typeof x != "string")
        return E(x, w, C);
      if (typeof w == "function" && (C = w, w = null), x === "")
        return C(v, 0, 1);
      for (var _ = "", F, S, j, R = 0, y = x.length; R < y; R++) {
        var A = x.charAt(R);
        if (A !== ":") {
          _ += A;
          continue;
        }
        if (_ === "" || _ != (F = Number(_)) || (S = x.slice(R + 1, R + 1 + F), _ != S.length))
          return C(v, 0, 1);
        if (S.length) {
          if (j = i(S, w, !1), v.type === j.type && v.data === j.data)
            return C(v, 0, 1);
          var O = C(j, R + F, y);
          if (O === !1)
            return;
        }
        R += F, _ = "";
      }
      if (_ !== "")
        return C(v, 0, 1);
    }
    function u(x) {
      for (var w = "", C = 0, _ = x.length; C < _; C++)
        w += String.fromCharCode(x[C]);
      return w;
    }
    function f(x) {
      for (var w = Buffer.allocUnsafe(x.length), C = 0, _ = x.length; C < _; C++)
        w.writeUInt8(x.charCodeAt(C), C);
      return w;
    }
    function g(x) {
      var w = x.byteLength || x.length, C = x.byteOffset || 0;
      return Buffer.from(x.buffer || x, C, w);
    }
    function k(x, w) {
      if (!x.length)
        return w(d);
      s(x, T, function(C, _) {
        return w(Buffer.concat(_));
      });
    }
    function T(x, w) {
      function C(_) {
        var F = "" + _.length, S;
        if (typeof _ == "string") {
          S = Buffer.allocUnsafe(F.length + 2), S[0] = 0;
          for (var j = 0; j < F.length; j++)
            S[j + 1] = parseInt(F[j], 10);
          return S[S.length - 1] = 255, w(null, Buffer.concat([S, f(_)]));
        }
        S = Buffer.allocUnsafe(F.length + 2), S[0] = 1;
        for (var j = 0; j < F.length; j++)
          S[j + 1] = parseInt(F[j], 10);
        S[S.length - 1] = 255, w(null, Buffer.concat([S, _]));
      }
      c(x, !0, !0, C);
    }
    function E(x, w, C) {
      typeof w == "function" && (C = w, w = null);
      for (var _ = x, F = [], S; _.length > 0; ) {
        var j = "", R = _[0] === 0;
        for (S = 1; _[S] !== 255; S++) {
          if (j.length > 310)
            return C(v, 0, 1);
          j += "" + _[S];
        }
        _ = _.slice(j.length + 1);
        var y = parseInt(j, 10), A = _.slice(1, y + 1);
        R && (A = u(A)), F.push(A), _ = _.slice(y + 1);
      }
      var O = F.length;
      for (S = 0; S < O; S++) {
        var P = F[S];
        C(i(P, w, !0), S, O);
      }
    }
  }(Le)), Le;
}
var Ee = { exports: {} }, $e, ki;
function Zn() {
  if (ki) return $e;
  ki = 1;
  var m = 1e3, h = m * 60, b = h * 60, p = b * 24, v = p * 7, d = p * 365.25;
  $e = function(a, e) {
    e = e || {};
    var n = typeof a;
    if (n === "string" && a.length > 0)
      return c(a);
    if (n === "number" && isFinite(a))
      return e.long ? t(a) : l(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function c(a) {
    if (a = String(a), !(a.length > 100)) {
      var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (e) {
        var n = parseFloat(e[1]), o = (e[2] || "ms").toLowerCase();
        switch (o) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * d;
          case "weeks":
          case "week":
          case "w":
            return n * v;
          case "days":
          case "day":
          case "d":
            return n * p;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * b;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * h;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * m;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return;
        }
      }
    }
  }
  function l(a) {
    var e = Math.abs(a);
    return e >= p ? Math.round(a / p) + "d" : e >= b ? Math.round(a / b) + "h" : e >= h ? Math.round(a / h) + "m" : e >= m ? Math.round(a / m) + "s" : a + "ms";
  }
  function t(a) {
    var e = Math.abs(a);
    return e >= p ? i(a, e, p, "day") : e >= b ? i(a, e, b, "hour") : e >= h ? i(a, e, h, "minute") : e >= m ? i(a, e, m, "second") : a + " ms";
  }
  function i(a, e, n, o) {
    var s = e >= n * 1.5;
    return Math.round(a / n) + " " + o + (s ? "s" : "");
  }
  return $e;
}
var He, _i;
function ea() {
  if (_i) return He;
  _i = 1;
  function m(h) {
    p.debug = p, p.default = p, p.coerce = i, p.disable = c, p.enable = d, p.enabled = l, p.humanize = Zn(), p.destroy = a, Object.keys(h).forEach((e) => {
      p[e] = h[e];
    }), p.names = [], p.skips = [], p.formatters = {};
    function b(e) {
      let n = 0;
      for (let o = 0; o < e.length; o++)
        n = (n << 5) - n + e.charCodeAt(o), n |= 0;
      return p.colors[Math.abs(n) % p.colors.length];
    }
    p.selectColor = b;
    function p(e) {
      let n, o = null, s, r;
      function u(...f) {
        if (!u.enabled)
          return;
        const g = u, k = Number(/* @__PURE__ */ new Date()), T = k - (n || k);
        g.diff = T, g.prev = n, g.curr = k, n = k, f[0] = p.coerce(f[0]), typeof f[0] != "string" && f.unshift("%O");
        let E = 0;
        f[0] = f[0].replace(/%([a-zA-Z%])/g, (w, C) => {
          if (w === "%%")
            return "%";
          E++;
          const _ = p.formatters[C];
          if (typeof _ == "function") {
            const F = f[E];
            w = _.call(g, F), f.splice(E, 1), E--;
          }
          return w;
        }), p.formatArgs.call(g, f), (g.log || p.log).apply(g, f);
      }
      return u.namespace = e, u.useColors = p.useColors(), u.color = p.selectColor(e), u.extend = v, u.destroy = p.destroy, Object.defineProperty(u, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => o !== null ? o : (s !== p.namespaces && (s = p.namespaces, r = p.enabled(e)), r),
        set: (f) => {
          o = f;
        }
      }), typeof p.init == "function" && p.init(u), u;
    }
    function v(e, n) {
      const o = p(this.namespace + (typeof n > "u" ? ":" : n) + e);
      return o.log = this.log, o;
    }
    function d(e) {
      p.save(e), p.namespaces = e, p.names = [], p.skips = [];
      let n;
      const o = (typeof e == "string" ? e : "").split(/[\s,]+/), s = o.length;
      for (n = 0; n < s; n++)
        o[n] && (e = o[n].replace(/\*/g, ".*?"), e[0] === "-" ? p.skips.push(new RegExp("^" + e.slice(1) + "$")) : p.names.push(new RegExp("^" + e + "$")));
    }
    function c() {
      const e = [
        ...p.names.map(t),
        ...p.skips.map(t).map((n) => "-" + n)
      ].join(",");
      return p.enable(""), e;
    }
    function l(e) {
      if (e[e.length - 1] === "*")
        return !0;
      let n, o;
      for (n = 0, o = p.skips.length; n < o; n++)
        if (p.skips[n].test(e))
          return !1;
      for (n = 0, o = p.names.length; n < o; n++)
        if (p.names[n].test(e))
          return !0;
      return !1;
    }
    function t(e) {
      return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function i(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }
    function a() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return p.enable(p.load()), p;
  }
  return He = m, He;
}
var Ei;
function L() {
  return Ei || (Ei = 1, function(m, h) {
    h.formatArgs = p, h.save = v, h.load = d, h.useColors = b, h.storage = c(), h.destroy = /* @__PURE__ */ (() => {
      let t = !1;
      return () => {
        t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), h.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function b() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let t;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function p(t) {
      if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + m.exports.humanize(this.diff), !this.useColors)
        return;
      const i = "color: " + this.color;
      t.splice(1, 0, i, "color: inherit");
      let a = 0, e = 0;
      t[0].replace(/%[a-zA-Z%]/g, (n) => {
        n !== "%%" && (a++, n === "%c" && (e = a));
      }), t.splice(e, 0, i);
    }
    h.log = console.debug || console.log || (() => {
    });
    function v(t) {
      try {
        t ? h.storage.setItem("debug", t) : h.storage.removeItem("debug");
      } catch {
      }
    }
    function d() {
      let t;
      try {
        t = h.storage.getItem("debug");
      } catch {
      }
      return !t && typeof process < "u" && "env" in process && (t = process.env.DEBUG), t;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    m.exports = ea()(h);
    const { formatters: l } = m.exports;
    l.j = function(t) {
      try {
        return JSON.stringify(t);
      } catch (i) {
        return "[UnexpectedJSONParseError]: " + i.message;
      }
    };
  }(Ee, Ee.exports)), Ee.exports;
}
var Si;
function ee() {
  if (Si) return se;
  Si = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.Transport = void 0;
  const m = B, h = Oe(), b = Xn(), v = (0, L().default)("engine:transport");
  function d() {
  }
  class c extends m.EventEmitter {
    get readyState() {
      return this._readyState;
    }
    set readyState(t) {
      v("readyState updated from %s to %s (%s)", this._readyState, t, this.name), this._readyState = t;
    }
    /**
     * Transport constructor.
     *
     * @param {EngineRequest} req
     */
    constructor(t) {
      super(), this.writable = !1, this._readyState = "open", this.discarded = !1, this.protocol = t._query.EIO === "4" ? 4 : 3, this.parser = this.protocol === 4 ? h : b, this.supportsBinary = !(t._query && t._query.b64);
    }
    /**
     * Flags the transport as discarded.
     *
     * @package
     */
    discard() {
      this.discarded = !0;
    }
    /**
     * Called with an incoming HTTP request.
     *
     * @param req
     * @package
     */
    onRequest(t) {
    }
    /**
     * Closes the transport.
     *
     * @package
     */
    close(t) {
      this.readyState === "closed" || this.readyState === "closing" || (this.readyState = "closing", this.doClose(t || d));
    }
    /**
     * Called with a transport error.
     *
     * @param {String} msg - message error
     * @param {Object} desc - error description
     * @protected
     */
    onError(t, i) {
      if (this.listeners("error").length) {
        const a = new Error(t);
        a.type = "TransportError", a.description = i, this.emit("error", a);
      } else
        v("ignored transport error %s (%s)", t, i);
    }
    /**
     * Called with parsed out a packets from the data stream.
     *
     * @param {Object} packet
     * @protected
     */
    onPacket(t) {
      this.emit("packet", t);
    }
    /**
     * Called with the encoded packet data.
     *
     * @param {String} data
     * @protected
     */
    onData(t) {
      this.onPacket(this.parser.decodePacket(t));
    }
    /**
     * Called upon transport close.
     *
     * @protected
     */
    onClose() {
      this.readyState = "closed", this.emit("close");
    }
  }
  return se.Transport = c, se;
}
var Ai;
function wn() {
  if (Ai) return ae;
  Ai = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.Polling = void 0;
  const m = ee(), h = B, b = ai(), v = (0, L().default)("engine:polling"), d = {
    gzip: h.createGzip,
    deflate: h.createDeflate
  };
  class c extends m.Transport {
    /**
     * HTTP polling constructor.
     */
    constructor(t) {
      super(t), this.closeTimeout = 30 * 1e3;
    }
    /**
     * Transport name
     */
    get name() {
      return "polling";
    }
    /**
     * Overrides onRequest.
     *
     * @param {EngineRequest} req
     * @package
     */
    onRequest(t) {
      const i = t.res;
      t.res = null, t.method === "GET" ? this.onPollRequest(t, i) : t.method === "POST" ? this.onDataRequest(t, i) : (i.writeHead(500), i.end());
    }
    /**
     * The client sends a request awaiting for us to send data.
     *
     * @private
     */
    onPollRequest(t, i) {
      if (this.req) {
        v("request overlap"), this.onError("overlap from client"), i.writeHead(400), i.end();
        return;
      }
      v("setting request"), this.req = t, this.res = i;
      const a = () => {
        this.onError("poll connection closed prematurely");
      }, e = () => {
        t.removeListener("close", a), this.req = this.res = null;
      };
      t.cleanup = e, t.on("close", a), this.writable = !0, this.emit("ready"), this.writable && this.shouldClose && (v("triggering empty send to append close packet"), this.send([{ type: "noop" }]));
    }
    /**
     * The client sends a request with data.
     *
     * @private
     */
    onDataRequest(t, i) {
      if (this.dataReq) {
        this.onError("data request overlap from client"), i.writeHead(400), i.end();
        return;
      }
      const a = t.headers["content-type"] === "application/octet-stream";
      if (a && this.protocol === 4)
        return this.onError("invalid content");
      this.dataReq = t, this.dataRes = i;
      let e = a ? Buffer.concat([]) : "";
      const n = () => {
        t.removeListener("data", s), t.removeListener("end", r), t.removeListener("close", o), this.dataReq = this.dataRes = e = null;
      }, o = () => {
        n(), this.onError("data request connection closed prematurely");
      }, s = (u) => {
        let f;
        a ? (e = Buffer.concat([e, u]), f = e.length) : (e += u, f = Buffer.byteLength(e)), f > this.maxHttpBufferSize && (i.writeHead(413).end(), n());
      }, r = () => {
        this.onData(e);
        const u = {
          // text/html is required instead of text/plain to avoid an
          // unwanted download dialog on certain user-agents (GH-43)
          "Content-Type": "text/html",
          "Content-Length": "2"
        };
        i.writeHead(200, this.headers(t, u)), i.end("ok"), n();
      };
      t.on("close", o), a || t.setEncoding("utf8"), t.on("data", s), t.on("end", r);
    }
    /**
     * Processes the incoming data payload.
     *
     * @param data - encoded payload
     * @protected
     */
    onData(t) {
      v('received "%s"', t);
      const i = (a) => {
        if (a.type === "close")
          return v("got xhr close packet"), this.onClose(), !1;
        this.onPacket(a);
      };
      this.protocol === 3 ? this.parser.decodePayload(t, i) : this.parser.decodePayload(t).forEach(i);
    }
    /**
     * Overrides onClose.
     *
     * @private
     */
    onClose() {
      this.writable && this.send([{ type: "noop" }]), super.onClose();
    }
    send(t) {
      this.writable = !1, this.shouldClose && (v("appending close packet to payload"), t.push({ type: "close" }), this.shouldClose(), this.shouldClose = null);
      const i = (a) => {
        const e = t.some((n) => n.options && n.options.compress);
        this.write(a, { compress: e });
      };
      this.protocol === 3 ? this.parser.encodePayload(t, this.supportsBinary, i) : this.parser.encodePayload(t, i);
    }
    /**
     * Writes data as response to poll request.
     *
     * @param {String} data
     * @param {Object} options
     * @private
     */
    write(t, i) {
      v('writing "%s"', t), this.doWrite(t, i, () => {
        this.req.cleanup(), this.emit("drain");
      });
    }
    /**
     * Performs the write.
     *
     * @protected
     */
    doWrite(t, i, a) {
      const e = typeof t == "string", o = {
        "Content-Type": e ? "text/plain; charset=UTF-8" : "application/octet-stream"
      }, s = (f) => {
        o["Content-Length"] = typeof f == "string" ? Buffer.byteLength(f) : f.length, this.res.writeHead(200, this.headers(this.req, o)), this.res.end(f), a();
      };
      if (!this.httpCompression || !i.compress) {
        s(t);
        return;
      }
      if ((e ? Buffer.byteLength(t) : t.length) < this.httpCompression.threshold) {
        s(t);
        return;
      }
      const u = b(this.req).encodings(["gzip", "deflate"]);
      if (!u) {
        s(t);
        return;
      }
      this.compress(t, u, (f, g) => {
        if (f) {
          this.res.writeHead(500), this.res.end(), a(f);
          return;
        }
        o["Content-Encoding"] = u, s(g);
      });
    }
    /**
     * Compresses data.
     *
     * @private
     */
    compress(t, i, a) {
      v("compressing");
      const e = [];
      let n = 0;
      d[i](this.httpCompression).on("error", a).on("data", function(o) {
        e.push(o), n += o.length;
      }).on("end", function() {
        a(null, Buffer.concat(e, n));
      }).end(t);
    }
    /**
     * Closes the transport.
     *
     * @private
     */
    doClose(t) {
      v("closing");
      let i;
      this.dataReq && (v("aborting ongoing data request"), this.dataReq.destroy());
      const a = () => {
        clearTimeout(i), t(), this.onClose();
      };
      this.writable ? (v("transport writable - closing right away"), this.send([{ type: "close" }]), a()) : this.discarded ? (v("transport discarded - closing right away"), a()) : (v("transport not writable - buffering orderly close"), this.shouldClose = a, i = setTimeout(a, this.closeTimeout));
    }
    /**
     * Returns headers for a response.
     *
     * @param {http.IncomingMessage} req
     * @param {Object} headers - extra headers
     * @private
     */
    headers(t, i = {}) {
      const a = t.headers["user-agent"];
      return a && (~a.indexOf(";MSIE") || ~a.indexOf("Trident/")) && (i["X-XSS-Protection"] = "0"), i["cache-control"] = "no-store", this.emit("headers", i, t), i;
    }
  }
  return ae.Polling = c, ae;
}
var oe = {}, Ti;
function ia() {
  if (Ti) return oe;
  Ti = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.JSONP = void 0;
  const m = wn(), h = B, b = /\\\\n/g, p = /(\\)?\\n/g;
  class v extends m.Polling {
    /**
     * JSON-P polling transport.
     */
    constructor(c) {
      super(c), this.head = "___eio[" + (c._query.j || "").replace(/[^0-9]/g, "") + "](", this.foot = ");";
    }
    onData(c) {
      c = h.parse(c).d, typeof c == "string" && (c = c.replace(p, function(l, t) {
        return t ? l : `
`;
      }), super.onData(c.replace(b, "\\n")));
    }
    doWrite(c, l, t) {
      const i = JSON.stringify(c).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      c = this.head + i + this.foot, super.doWrite(c, l, t);
    }
  }
  return oe.JSONP = v, oe;
}
var re = {}, Fi;
function na() {
  if (Fi) return re;
  Fi = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.WebSocket = void 0;
  const m = ee(), b = (0, L().default)("engine:ws");
  class p extends m.Transport {
    /**
     * WebSocket transport
     *
     * @param {EngineRequest} req
     */
    constructor(d) {
      super(d), this._doSend = (c) => {
        this.socket.send(c, this._onSent);
      }, this._doSendLast = (c) => {
        this.socket.send(c, this._onSentLast);
      }, this._onSent = (c) => {
        c && this.onError("write error", c.stack);
      }, this._onSentLast = (c) => {
        c ? this.onError("write error", c.stack) : (this.emit("drain"), this.writable = !0, this.emit("ready"));
      }, this.socket = d.websocket, this.socket.on("message", (c, l) => {
        const t = l ? c : c.toString();
        b('received "%s"', t), super.onData(t);
      }), this.socket.once("close", this.onClose.bind(this)), this.socket.on("error", this.onError.bind(this)), this.writable = !0, this.perMessageDeflate = null;
    }
    /**
     * Transport name
     */
    get name() {
      return "websocket";
    }
    /**
     * Advertise upgrade support.
     */
    get handlesUpgrades() {
      return !0;
    }
    send(d) {
      this.writable = !1;
      for (let c = 0; c < d.length; c++) {
        const l = d[c], t = c + 1 === d.length;
        this._canSendPreEncodedFrame(l) ? this.socket._sender.sendFrame(
          // @ts-ignore
          l.options.wsPreEncodedFrame,
          t ? this._onSentLast : this._onSent
        ) : this.parser.encodePacket(l, this.supportsBinary, t ? this._doSendLast : this._doSend);
      }
    }
    /**
     * Whether the encoding of the WebSocket frame can be skipped.
     * @param packet
     * @private
     */
    _canSendPreEncodedFrame(d) {
      var c, l, t;
      return !this.perMessageDeflate && typeof ((l = (c = this.socket) === null || c === void 0 ? void 0 : c._sender) === null || l === void 0 ? void 0 : l.sendFrame) == "function" && // @ts-ignore
      ((t = d.options) === null || t === void 0 ? void 0 : t.wsPreEncodedFrame) !== void 0;
    }
    doClose(d) {
      b("closing"), this.socket.close(), d && d();
    }
  }
  return re.WebSocket = p, re;
}
var ce = {}, Ri;
function Cn() {
  if (Ri) return ce;
  Ri = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.WebTransport = void 0;
  const m = ee(), h = L(), b = Oe(), p = (0, h.default)("engine:webtransport");
  class v extends m.Transport {
    constructor(c, l, t) {
      super({ _query: { EIO: "4" } }), this.session = c;
      const i = (0, b.createPacketEncoderStream)();
      i.readable.pipeTo(l.writable).catch(() => {
        p("the stream was closed");
      }), this.writer = i.writable.getWriter(), (async () => {
        try {
          for (; ; ) {
            const { value: a, done: e } = await t.read();
            if (e) {
              p("session is closed");
              break;
            }
            p("received chunk: %o", a), this.onPacket(a);
          }
        } catch (a) {
          p("error while reading: %s", a.message);
        }
      })(), c.closed.then(() => this.onClose()), this.writable = !0;
    }
    get name() {
      return "webtransport";
    }
    async send(c) {
      this.writable = !1;
      try {
        for (let l = 0; l < c.length; l++) {
          const t = c[l];
          await this.writer.write(t);
        }
      } catch (l) {
        p("error while writing: %s", l.message);
      }
      this.emit("drain"), this.writable = !0, this.emit("ready");
    }
    doClose(c) {
      p("closing WebTransport session"), this.session.close(), c && c();
    }
  }
  return ce.WebTransport = v, ce;
}
var ji;
function kn() {
  if (ji) return _e;
  ji = 1, Object.defineProperty(_e, "__esModule", { value: !0 });
  const m = wn(), h = ia(), b = na(), p = Cn();
  _e.default = {
    polling: v,
    websocket: b.WebSocket,
    webtransport: p.WebTransport
  };
  function v(d) {
    return typeof d._query.j == "string" ? new h.JSONP(d) : new m.Polling(d);
  }
  return v.upgradesTo = ["websocket", "webtransport"], _e;
}
var pe = {}, Oi;
function _n() {
  if (Oi) return pe;
  Oi = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.Socket = void 0;
  const m = B, h = L(), b = B, p = (0, h.default)("engine:socket");
  class v extends m.EventEmitter {
    get readyState() {
      return this._readyState;
    }
    set readyState(c) {
      p("readyState updated from %s to %s", this._readyState, c), this._readyState = c;
    }
    constructor(c, l, t, i, a) {
      super(), this._readyState = "opening", this.upgrading = !1, this.upgraded = !1, this.writeBuffer = [], this.packetsFn = [], this.sentCallbackFn = [], this.cleanupFn = [], this.id = c, this.server = l, this.request = i, this.protocol = a, i && (i.websocket && i.websocket._socket ? this.remoteAddress = i.websocket._socket.remoteAddress : this.remoteAddress = i.connection.remoteAddress), this.pingTimeoutTimer = null, this.pingIntervalTimer = null, this.setTransport(t), this.onOpen();
    }
    /**
     * Called upon transport considered open.
     *
     * @private
     */
    onOpen() {
      this.readyState = "open", this.transport.sid = this.id, this.sendPacket("open", JSON.stringify({
        sid: this.id,
        upgrades: this.getAvailableUpgrades(),
        pingInterval: this.server.opts.pingInterval,
        pingTimeout: this.server.opts.pingTimeout,
        maxPayload: this.server.opts.maxHttpBufferSize
      })), this.server.opts.initialPacket && this.sendPacket("message", this.server.opts.initialPacket), this.emit("open"), this.protocol === 3 ? this.resetPingTimeout() : this.schedulePing();
    }
    /**
     * Called upon transport packet.
     *
     * @param {Object} packet
     * @private
     */
    onPacket(c) {
      if (this.readyState !== "open")
        return p("packet received with closed socket");
      switch (p(`received packet ${c.type}`), this.emit("packet", c), c.type) {
        case "ping":
          if (this.transport.protocol !== 3) {
            this.onError(new Error("invalid heartbeat direction"));
            return;
          }
          p("got ping"), this.pingTimeoutTimer.refresh(), this.sendPacket("pong"), this.emit("heartbeat");
          break;
        case "pong":
          if (this.transport.protocol === 3) {
            this.onError(new Error("invalid heartbeat direction"));
            return;
          }
          p("got pong"), (0, b.clearTimeout)(this.pingTimeoutTimer), this.pingIntervalTimer.refresh(), this.emit("heartbeat");
          break;
        case "error":
          this.onClose("parse error");
          break;
        case "message":
          this.emit("data", c.data), this.emit("message", c.data);
          break;
      }
    }
    /**
     * Called upon transport error.
     *
     * @param {Error} err - error object
     * @private
     */
    onError(c) {
      p("transport error"), this.onClose("transport error", c);
    }
    /**
     * Pings client every `this.pingInterval` and expects response
     * within `this.pingTimeout` or closes connection.
     *
     * @private
     */
    schedulePing() {
      this.pingIntervalTimer = (0, b.setTimeout)(() => {
        p("writing ping packet - expecting pong within %sms", this.server.opts.pingTimeout), this.sendPacket("ping"), this.resetPingTimeout();
      }, this.server.opts.pingInterval);
    }
    /**
     * Resets ping timeout.
     *
     * @private
     */
    resetPingTimeout() {
      (0, b.clearTimeout)(this.pingTimeoutTimer), this.pingTimeoutTimer = (0, b.setTimeout)(() => {
        this.readyState !== "closed" && this.onClose("ping timeout");
      }, this.protocol === 3 ? this.server.opts.pingInterval + this.server.opts.pingTimeout : this.server.opts.pingTimeout);
    }
    /**
     * Attaches handlers for the given transport.
     *
     * @param {Transport} transport
     * @private
     */
    setTransport(c) {
      const l = this.onError.bind(this), t = () => this.flush(), i = this.onPacket.bind(this), a = this.onDrain.bind(this), e = this.onClose.bind(this, "transport close");
      this.transport = c, this.transport.once("error", l), this.transport.on("ready", t), this.transport.on("packet", i), this.transport.on("drain", a), this.transport.once("close", e), this.cleanupFn.push(function() {
        c.removeListener("error", l), c.removeListener("ready", t), c.removeListener("packet", i), c.removeListener("drain", a), c.removeListener("close", e);
      });
    }
    /**
     * Upon transport "drain" event
     *
     * @private
     */
    onDrain() {
      if (this.sentCallbackFn.length > 0) {
        p("executing batch send callback");
        const c = this.sentCallbackFn.shift();
        if (c)
          for (let l = 0; l < c.length; l++)
            c[l](this.transport);
      }
    }
    /**
     * Upgrades socket to the given transport
     *
     * @param {Transport} transport
     * @private
     */
    /* private */
    _maybeUpgrade(c) {
      p('might upgrade socket transport from "%s" to "%s"', this.transport.name, c.name), this.upgrading = !0;
      const l = (0, b.setTimeout)(() => {
        p("client did not complete upgrade - closing transport"), e(), c.readyState === "open" && c.close();
      }, this.server.opts.upgradeTimeout);
      let t;
      const i = (r) => {
        r.type === "ping" && r.data === "probe" ? (p("got probe ping packet, sending pong"), c.send([{ type: "pong", data: "probe" }]), this.emit("upgrading", c), clearInterval(t), t = setInterval(a, 100)) : r.type === "upgrade" && this.readyState !== "closed" ? (p("got upgrade packet - upgrading"), e(), this.transport.discard(), this.upgraded = !0, this.clearTransport(), this.setTransport(c), this.emit("upgrade", c), this.flush(), this.readyState === "closing" && c.close(() => {
          this.onClose("forced close");
        })) : (e(), c.close());
      }, a = () => {
        this.transport.name === "polling" && this.transport.writable && (p("writing a noop packet to polling for fast upgrade"), this.transport.send([{ type: "noop" }]));
      }, e = () => {
        this.upgrading = !1, clearInterval(t), (0, b.clearTimeout)(l), c.removeListener("packet", i), c.removeListener("close", o), c.removeListener("error", n), this.removeListener("close", s);
      }, n = (r) => {
        p("client did not complete upgrade - %s", r), e(), c.close(), c = null;
      }, o = () => {
        n("transport closed");
      }, s = () => {
        n("socket closed");
      };
      c.on("packet", i), c.once("close", o), c.once("error", n), this.once("close", s);
    }
    /**
     * Clears listeners and timers associated with current transport.
     *
     * @private
     */
    clearTransport() {
      let c;
      const l = this.cleanupFn.length;
      for (let t = 0; t < l; t++)
        c = this.cleanupFn.shift(), c();
      this.transport.on("error", function() {
        p("error triggered by discarded transport");
      }), this.transport.close(), (0, b.clearTimeout)(this.pingTimeoutTimer);
    }
    /**
     * Called upon transport considered closed.
     * Possible reasons: `ping timeout`, `client error`, `parse error`,
     * `transport error`, `server close`, `transport close`
     */
    onClose(c, l) {
      this.readyState !== "closed" && (this.readyState = "closed", (0, b.clearTimeout)(this.pingIntervalTimer), (0, b.clearTimeout)(this.pingTimeoutTimer), process.nextTick(() => {
        this.writeBuffer = [];
      }), this.packetsFn = [], this.sentCallbackFn = [], this.clearTransport(), this.emit("close", c, l));
    }
    /**
     * Sends a message packet.
     *
     * @param {Object} data
     * @param {Object} options
     * @param {Function} callback
     * @return {Socket} for chaining
     */
    send(c, l, t) {
      return this.sendPacket("message", c, l, t), this;
    }
    /**
     * Alias of {@link send}.
     *
     * @param data
     * @param options
     * @param callback
     */
    write(c, l, t) {
      return this.sendPacket("message", c, l, t), this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type - packet type
     * @param {String} data
     * @param {Object} options
     * @param {Function} callback
     *
     * @private
     */
    sendPacket(c, l, t = {}, i) {
      if (typeof t == "function" && (i = t, t = {}), this.readyState !== "closing" && this.readyState !== "closed") {
        p('sending packet "%s" (%s)', c, l), t.compress = t.compress !== !1;
        const a = {
          type: c,
          options: t
        };
        l && (a.data = l), this.emit("packetCreate", a), this.writeBuffer.push(a), typeof i == "function" && this.packetsFn.push(i), this.flush();
      }
    }
    /**
     * Attempts to flush the packets buffer.
     *
     * @private
     */
    flush() {
      if (this.readyState !== "closed" && this.transport.writable && this.writeBuffer.length) {
        p("flushing buffer to transport"), this.emit("flush", this.writeBuffer), this.server.emit("flush", this, this.writeBuffer);
        const c = this.writeBuffer;
        this.writeBuffer = [], this.packetsFn.length ? (this.sentCallbackFn.push(this.packetsFn), this.packetsFn = []) : this.sentCallbackFn.push(null), this.transport.send(c), this.emit("drain"), this.server.emit("drain", this);
      }
    }
    /**
     * Get available upgrades for this socket.
     *
     * @private
     */
    getAvailableUpgrades() {
      const c = [], l = this.server.upgrades(this.transport.name);
      for (let t = 0; t < l.length; ++t) {
        const i = l[t];
        this.server.opts.transports.indexOf(i) !== -1 && c.push(i);
      }
      return c;
    }
    /**
     * Closes the socket and underlying transport.
     *
     * @param {Boolean} discard - optional, discard the transport
     * @return {Socket} for chaining
     */
    close(c) {
      if (c && (this.readyState === "open" || this.readyState === "closing"))
        return this.closeTransport(c);
      if (this.readyState === "open") {
        if (this.readyState = "closing", this.writeBuffer.length) {
          p("there are %d remaining packets in the buffer, waiting for the 'drain' event", this.writeBuffer.length), this.once("drain", () => {
            p("all packets have been sent, closing the transport"), this.closeTransport(c);
          });
          return;
        }
        p("the buffer is empty, closing the transport right away"), this.closeTransport(c);
      }
    }
    /**
     * Closes the underlying transport.
     *
     * @param {Boolean} discard
     * @private
     */
    closeTransport(c) {
      p("closing the transport (discard? %s)", !!c), c && this.transport.discard(), this.transport.close(this.onClose.bind(this, "forced close"));
    }
  }
  return pe.Socket = v, pe;
}
var Se = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Pi;
function aa() {
  if (Pi) return Se;
  Pi = 1, Se.parse = c, Se.serialize = i;
  var m = Object.prototype.toString, h = Object.prototype.hasOwnProperty, b = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/, p = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/, v = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, d = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function c(o, s) {
    if (typeof o != "string")
      throw new TypeError("argument str must be a string");
    var r = {}, u = o.length;
    if (u < 2) return r;
    var f = s && s.decode || a, g = 0, k = 0, T = 0;
    do {
      if (k = o.indexOf("=", g), k === -1) break;
      if (T = o.indexOf(";", g), T === -1)
        T = u;
      else if (k > T) {
        g = o.lastIndexOf(";", k - 1) + 1;
        continue;
      }
      var E = l(o, g, k), x = t(o, k, E), w = o.slice(E, x);
      if (!h.call(r, w)) {
        var C = l(o, k + 1, T), _ = t(o, T, C);
        o.charCodeAt(C) === 34 && o.charCodeAt(_ - 1) === 34 && (C++, _--);
        var F = o.slice(C, _);
        r[w] = n(F, f);
      }
      g = T + 1;
    } while (g < u);
    return r;
  }
  function l(o, s, r) {
    do {
      var u = o.charCodeAt(s);
      if (u !== 32 && u !== 9) return s;
    } while (++s < r);
    return r;
  }
  function t(o, s, r) {
    for (; s > r; ) {
      var u = o.charCodeAt(--s);
      if (u !== 32 && u !== 9) return s + 1;
    }
    return r;
  }
  function i(o, s, r) {
    var u = r && r.encode || encodeURIComponent;
    if (typeof u != "function")
      throw new TypeError("option encode is invalid");
    if (!b.test(o))
      throw new TypeError("argument name is invalid");
    var f = u(s);
    if (!p.test(f))
      throw new TypeError("argument val is invalid");
    var g = o + "=" + f;
    if (!r) return g;
    if (r.maxAge != null) {
      var k = Math.floor(r.maxAge);
      if (!isFinite(k))
        throw new TypeError("option maxAge is invalid");
      g += "; Max-Age=" + k;
    }
    if (r.domain) {
      if (!v.test(r.domain))
        throw new TypeError("option domain is invalid");
      g += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!d.test(r.path))
        throw new TypeError("option path is invalid");
      g += "; Path=" + r.path;
    }
    if (r.expires) {
      var T = r.expires;
      if (!e(T) || isNaN(T.valueOf()))
        throw new TypeError("option expires is invalid");
      g += "; Expires=" + T.toUTCString();
    }
    if (r.httpOnly && (g += "; HttpOnly"), r.secure && (g += "; Secure"), r.partitioned && (g += "; Partitioned"), r.priority) {
      var E = typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority;
      switch (E) {
        case "low":
          g += "; Priority=Low";
          break;
        case "medium":
          g += "; Priority=Medium";
          break;
        case "high":
          g += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (r.sameSite) {
      var x = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
      switch (x) {
        case !0:
          g += "; SameSite=Strict";
          break;
        case "lax":
          g += "; SameSite=Lax";
          break;
        case "strict":
          g += "; SameSite=Strict";
          break;
        case "none":
          g += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return g;
  }
  function a(o) {
    return o.indexOf("%") !== -1 ? decodeURIComponent(o) : o;
  }
  function e(o) {
    return m.call(o) === "[object Date]";
  }
  function n(o, s) {
    try {
      return s(o);
    } catch {
      return o;
    }
  }
  return Se;
}
var Ve, qi;
function sa() {
  return qi || (qi = 1, Ve = function() {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  }), Ve;
}
var We = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ke, Bi;
function ta() {
  if (Bi) return Ke;
  Bi = 1;
  var m = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function p(d) {
    if (d == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(d);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var d = new String("abc");
      if (d[5] = "de", Object.getOwnPropertyNames(d)[0] === "5")
        return !1;
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var t = Object.getOwnPropertyNames(c).map(function(a) {
        return c[a];
      });
      if (t.join("") !== "0123456789")
        return !1;
      var i = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(a) {
        i[a] = a;
      }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ke = v() ? Object.assign : function(d, c) {
    for (var l, t = p(d), i, a = 1; a < arguments.length; a++) {
      l = Object(arguments[a]);
      for (var e in l)
        h.call(l, e) && (t[e] = l[e]);
      if (m) {
        i = m(l);
        for (var n = 0; n < i.length; n++)
          b.call(l, i[n]) && (t[i[n]] = l[i[n]]);
      }
    }
    return t;
  }, Ke;
}
var Ae = { exports: {} };
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
var Ni;
function oa() {
  if (Ni) return Ae.exports;
  Ni = 1, Ae.exports = p, Ae.exports.append = h;
  var m = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
  function h(v, d) {
    if (typeof v != "string")
      throw new TypeError("header argument is required");
    if (!d)
      throw new TypeError("field argument is required");
    for (var c = Array.isArray(d) ? d : b(String(d)), l = 0; l < c.length; l++)
      if (!m.test(c[l]))
        throw new TypeError("field argument contains an invalid header name");
    if (v === "*")
      return v;
    var t = v, i = b(v.toLowerCase());
    if (c.indexOf("*") !== -1 || i.indexOf("*") !== -1)
      return "*";
    for (var a = 0; a < c.length; a++) {
      var e = c[a].toLowerCase();
      i.indexOf(e) === -1 && (i.push(e), t = t ? t + ", " + c[a] : c[a]);
    }
    return t;
  }
  function b(v) {
    for (var d = 0, c = [], l = 0, t = 0, i = v.length; t < i; t++)
      switch (v.charCodeAt(t)) {
        case 32:
          l === d && (l = d = t + 1);
          break;
        case 44:
          c.push(v.substring(l, d)), l = d = t + 1;
          break;
        default:
          d = t + 1;
          break;
      }
    return c.push(v.substring(l, d)), c;
  }
  function p(v, d) {
    if (!v || !v.getHeader || !v.setHeader)
      throw new TypeError("res argument is required");
    var c = v.getHeader("Vary") || "", l = Array.isArray(c) ? c.join(", ") : String(c);
    (c = h(l, d)) && v.setHeader("Vary", c);
  }
  return Ae.exports;
}
var Ii;
function En() {
  return Ii || (Ii = 1, function() {
    var m = ta(), h = oa(), b = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: !1,
      optionsSuccessStatus: 204
    };
    function p(s) {
      return typeof s == "string" || s instanceof String;
    }
    function v(s, r) {
      if (Array.isArray(r)) {
        for (var u = 0; u < r.length; ++u)
          if (v(s, r[u]))
            return !0;
        return !1;
      } else return p(r) ? s === r : r instanceof RegExp ? r.test(s) : !!r;
    }
    function d(s, r) {
      var u = r.headers.origin, f = [], g;
      return !s.origin || s.origin === "*" ? f.push([{
        key: "Access-Control-Allow-Origin",
        value: "*"
      }]) : p(s.origin) ? (f.push([{
        key: "Access-Control-Allow-Origin",
        value: s.origin
      }]), f.push([{
        key: "Vary",
        value: "Origin"
      }])) : (g = v(u, s.origin), f.push([{
        key: "Access-Control-Allow-Origin",
        value: g ? u : !1
      }]), f.push([{
        key: "Vary",
        value: "Origin"
      }])), f;
    }
    function c(s) {
      var r = s.methods;
      return r.join && (r = s.methods.join(",")), {
        key: "Access-Control-Allow-Methods",
        value: r
      };
    }
    function l(s) {
      return s.credentials === !0 ? {
        key: "Access-Control-Allow-Credentials",
        value: "true"
      } : null;
    }
    function t(s, r) {
      var u = s.allowedHeaders || s.headers, f = [];
      return u ? u.join && (u = u.join(",")) : (u = r.headers["access-control-request-headers"], f.push([{
        key: "Vary",
        value: "Access-Control-Request-Headers"
      }])), u && u.length && f.push([{
        key: "Access-Control-Allow-Headers",
        value: u
      }]), f;
    }
    function i(s) {
      var r = s.exposedHeaders;
      if (r)
        r.join && (r = r.join(","));
      else return null;
      return r && r.length ? {
        key: "Access-Control-Expose-Headers",
        value: r
      } : null;
    }
    function a(s) {
      var r = (typeof s.maxAge == "number" || s.maxAge) && s.maxAge.toString();
      return r && r.length ? {
        key: "Access-Control-Max-Age",
        value: r
      } : null;
    }
    function e(s, r) {
      for (var u = 0, f = s.length; u < f; u++) {
        var g = s[u];
        g && (Array.isArray(g) ? e(g, r) : g.key === "Vary" && g.value ? h(r, g.value) : g.value && r.setHeader(g.key, g.value));
      }
    }
    function n(s, r, u, f) {
      var g = [], k = r.method && r.method.toUpperCase && r.method.toUpperCase();
      k === "OPTIONS" ? (g.push(d(s, r)), g.push(l(s)), g.push(c(s)), g.push(t(s, r)), g.push(a(s)), g.push(i(s)), e(g, u), s.preflightContinue ? f() : (u.statusCode = s.optionsSuccessStatus, u.setHeader("Content-Length", "0"), u.end())) : (g.push(d(s, r)), g.push(l(s)), g.push(i(s)), e(g, u), f());
    }
    function o(s) {
      var r = null;
      return typeof s == "function" ? r = s : r = function(u, f) {
        f(null, s);
      }, function(f, g, k) {
        r(f, function(T, E) {
          if (T)
            k(T);
          else {
            var x = m({}, b, E), w = null;
            x.origin && typeof x.origin == "function" ? w = x.origin : x.origin && (w = function(C, _) {
              _(null, x.origin);
            }), w ? w(f.headers.origin, function(C, _) {
              C || !_ ? k(C) : (x.origin = _, n(x, f, g, k));
            }) : k();
          }
        });
      };
    }
    We.exports = o;
  }()), We.exports;
}
var Di;
function Sn() {
  if (Di) return V;
  Di = 1, Object.defineProperty(V, "__esModule", { value: !0 }), V.Server = V.BaseServer = void 0;
  const m = B, h = B, b = yn(), p = kn(), v = B, d = _n(), c = L(), l = aa(), t = sa(), i = Cn(), a = Oe(), e = (0, c.default)("engine"), n = Symbol("responseHeaders");
  function o(E) {
    try {
      const x = JSON.parse(E);
      if (typeof x.sid == "string")
        return x.sid;
    } catch {
    }
  }
  class s extends v.EventEmitter {
    /**
     * Server constructor.
     *
     * @param {Object} opts - options
     */
    constructor(x = {}) {
      super(), this.middlewares = [], this.clients = {}, this.clientsCount = 0, this.opts = Object.assign({
        wsEngine: t.Server,
        pingTimeout: 2e4,
        pingInterval: 25e3,
        upgradeTimeout: 1e4,
        maxHttpBufferSize: 1e6,
        transports: ["polling", "websocket"],
        // WebTransport is disabled by default
        allowUpgrades: !0,
        httpCompression: {
          threshold: 1024
        },
        cors: !1,
        allowEIO3: !1
      }, x), x.cookie && (this.opts.cookie = Object.assign({
        name: "io",
        path: "/",
        // @ts-ignore
        httpOnly: x.cookie.path !== !1,
        sameSite: "lax"
      }, x.cookie)), this.opts.cors && this.use(En()(this.opts.cors)), x.perMessageDeflate && (this.opts.perMessageDeflate = Object.assign({
        threshold: 1024
      }, x.perMessageDeflate)), this.init();
    }
    /**
     * Compute the pathname of the requests that are handled by the server
     * @param options
     * @protected
     */
    _computePath(x) {
      let w = (x.path || "/engine.io").replace(/\/$/, "");
      return x.addTrailingSlash !== !1 && (w += "/"), w;
    }
    /**
     * Returns a list of available transports for upgrade given a certain transport.
     *
     * @return {Array}
     */
    upgrades(x) {
      return this.opts.allowUpgrades ? p.default[x].upgradesTo || [] : [];
    }
    /**
     * Verifies a request.
     *
     * @param {EngineRequest} req
     * @param upgrade - whether it's an upgrade request
     * @param fn
     * @protected
     */
    verify(x, w, C) {
      const _ = x._query.transport;
      if (!~this.opts.transports.indexOf(_) || _ === "webtransport")
        return e('unknown transport "%s"', _), C(u.errors.UNKNOWN_TRANSPORT, { transport: _ });
      if (T(x.headers.origin)) {
        const j = x.headers.origin;
        return x.headers.origin = null, e("origin header invalid"), C(u.errors.BAD_REQUEST, {
          name: "INVALID_ORIGIN",
          origin: j
        });
      }
      const S = x._query.sid;
      if (S) {
        if (!this.clients.hasOwnProperty(S))
          return e('unknown sid "%s"', S), C(u.errors.UNKNOWN_SID, {
            sid: S
          });
        const j = this.clients[S].transport.name;
        if (!w && j !== _)
          return e("bad request: unexpected transport without upgrade"), C(u.errors.BAD_REQUEST, {
            name: "TRANSPORT_MISMATCH",
            transport: _,
            previousTransport: j
          });
      } else
        return x.method !== "GET" ? C(u.errors.BAD_HANDSHAKE_METHOD, {
          method: x.method
        }) : _ === "websocket" && !w ? (e("invalid transport upgrade"), C(u.errors.BAD_REQUEST, {
          name: "TRANSPORT_HANDSHAKE_ERROR"
        })) : this.opts.allowRequest ? this.opts.allowRequest(x, (j, R) => {
          if (!R)
            return C(u.errors.FORBIDDEN, {
              message: j
            });
          C();
        }) : C();
      C();
    }
    /**
     * Adds a new middleware.
     *
     * @example
     * import helmet from "helmet";
     *
     * engine.use(helmet());
     *
     * @param fn
     */
    use(x) {
      this.middlewares.push(x);
    }
    /**
     * Apply the middlewares to the request.
     *
     * @param req
     * @param res
     * @param callback
     * @protected
     */
    _applyMiddlewares(x, w, C) {
      if (this.middlewares.length === 0)
        return e("no middleware to apply, skipping"), C();
      const _ = (F) => {
        e("applying middleware n°%d", F + 1), this.middlewares[F](x, w, (S) => {
          if (S)
            return C(S);
          F + 1 < this.middlewares.length ? _(F + 1) : C();
        });
      };
      _(0);
    }
    /**
     * Closes all clients.
     */
    close() {
      e("closing all open clients");
      for (let x in this.clients)
        this.clients.hasOwnProperty(x) && this.clients[x].close(!0);
      return this.cleanup(), this;
    }
    /**
     * generate a socket id.
     * Overwrite this method to generate your custom socket id
     *
     * @param {IncomingMessage} req - the request object
     */
    generateId(x) {
      return b.generateId();
    }
    /**
     * Handshakes a new client.
     *
     * @param {String} transportName
     * @param {Object} req - the request object
     * @param {Function} closeConnection
     *
     * @protected
     */
    async handshake(x, w, C) {
      const _ = w._query.EIO === "4" ? 4 : 3;
      if (_ === 3 && !this.opts.allowEIO3) {
        e("unsupported protocol version"), this.emit("connection_error", {
          req: w,
          code: u.errors.UNSUPPORTED_PROTOCOL_VERSION,
          message: u.errorMessages[u.errors.UNSUPPORTED_PROTOCOL_VERSION],
          context: {
            protocol: _
          }
        }), C(u.errors.UNSUPPORTED_PROTOCOL_VERSION);
        return;
      }
      let F;
      try {
        F = await this.generateId(w);
      } catch (R) {
        e("error while generating an id"), this.emit("connection_error", {
          req: w,
          code: u.errors.BAD_REQUEST,
          message: u.errorMessages[u.errors.BAD_REQUEST],
          context: {
            name: "ID_GENERATION_ERROR",
            error: R
          }
        }), C(u.errors.BAD_REQUEST);
        return;
      }
      e('handshaking client "%s"', F);
      try {
        var S = this.createTransport(x, w);
        x === "polling" ? (S.maxHttpBufferSize = this.opts.maxHttpBufferSize, S.httpCompression = this.opts.httpCompression) : x === "websocket" && (S.perMessageDeflate = this.opts.perMessageDeflate);
      } catch (R) {
        e('error handshaking to transport "%s"', x), this.emit("connection_error", {
          req: w,
          code: u.errors.BAD_REQUEST,
          message: u.errorMessages[u.errors.BAD_REQUEST],
          context: {
            name: "TRANSPORT_HANDSHAKE_ERROR",
            error: R
          }
        }), C(u.errors.BAD_REQUEST);
        return;
      }
      const j = new d.Socket(F, this, S, w, _);
      return S.on("headers", (R, y) => {
        !y._query.sid && (this.opts.cookie && (R["Set-Cookie"] = [
          // @ts-ignore
          (0, l.serialize)(this.opts.cookie.name, F, this.opts.cookie)
        ]), this.emit("initial_headers", R, y)), this.emit("headers", R, y);
      }), S.onRequest(w), this.clients[F] = j, this.clientsCount++, j.once("close", () => {
        delete this.clients[F], this.clientsCount--;
      }), this.emit("connection", j), S;
    }
    async onWebTransportSession(x) {
      const w = setTimeout(() => {
        e("the client failed to establish a bidirectional stream in the given period"), x.close();
      }, this.opts.upgradeTimeout), _ = await x.incomingBidirectionalStreams.getReader().read();
      if (_.done) {
        e("session is closed");
        return;
      }
      const F = _.value, S = (0, a.createPacketDecoderStream)(this.opts.maxHttpBufferSize, "nodebuffer"), j = F.readable.pipeThrough(S).getReader(), { value: R, done: y } = await j.read();
      if (y) {
        e("stream is closed");
        return;
      }
      if (clearTimeout(w), R.type !== "open")
        return e("invalid WebTransport handshake"), x.close();
      if (R.data === void 0) {
        const P = new i.WebTransport(x, F, j), q = b.generateId();
        e('handshaking client "%s" (WebTransport)', q);
        const N = new d.Socket(q, this, P, null, 4);
        this.clients[q] = N, this.clientsCount++, N.once("close", () => {
          delete this.clients[q], this.clientsCount--;
        }), this.emit("connection", N);
        return;
      }
      const A = o(R.data);
      if (!A)
        return e("invalid WebTransport handshake"), x.close();
      const O = this.clients[A];
      if (!O)
        e("upgrade attempt for closed client"), x.close();
      else if (O.upgrading)
        e("transport has already been trying to upgrade"), x.close();
      else if (O.upgraded)
        e("transport had already been upgraded"), x.close();
      else {
        e("upgrading existing transport");
        const P = new i.WebTransport(x, F, j);
        O._maybeUpgrade(P);
      }
    }
  }
  V.BaseServer = s, s.errors = {
    UNKNOWN_TRANSPORT: 0,
    UNKNOWN_SID: 1,
    BAD_HANDSHAKE_METHOD: 2,
    BAD_REQUEST: 3,
    FORBIDDEN: 4,
    UNSUPPORTED_PROTOCOL_VERSION: 5
  }, s.errorMessages = {
    0: "Transport unknown",
    1: "Session ID unknown",
    2: "Bad handshake method",
    3: "Bad request",
    4: "Forbidden",
    5: "Unsupported protocol version"
  };
  class r {
    constructor(x, w) {
      this.req = x, this.socket = w, x[n] = {};
    }
    setHeader(x, w) {
      this.req[n][x] = w;
    }
    getHeader(x) {
      return this.req[n][x];
    }
    removeHeader(x) {
      delete this.req[n][x];
    }
    write() {
    }
    writeHead() {
    }
    end() {
      this.socket.destroy();
    }
  }
  class u extends s {
    /**
     * Initialize websocket server
     *
     * @protected
     */
    init() {
      ~this.opts.transports.indexOf("websocket") && (this.ws && this.ws.close(), this.ws = new this.opts.wsEngine({
        noServer: !0,
        clientTracking: !1,
        perMessageDeflate: this.opts.perMessageDeflate,
        maxPayload: this.opts.maxHttpBufferSize
      }), typeof this.ws.on == "function" && this.ws.on("headers", (x, w) => {
        const C = w[n] || {};
        delete w[n], !w._query.sid && this.emit("initial_headers", C, w), this.emit("headers", C, w), e("writing headers: %j", C), Object.keys(C).forEach((F) => {
          x.push(`${F}: ${C[F]}`);
        });
      }));
    }
    cleanup() {
      this.ws && (e("closing webSocketServer"), this.ws.close());
    }
    /**
     * Prepares a request by processing the query string.
     *
     * @private
     */
    prepare(x) {
      x._query || (x._query = ~x.url.indexOf("?") ? m.parse((0, h.parse)(x.url).query) : {});
    }
    createTransport(x, w) {
      return new p.default[x](w);
    }
    /**
     * Handles an Engine.IO HTTP request.
     *
     * @param {EngineRequest} req
     * @param {ServerResponse} res
     */
    handleRequest(x, w) {
      e('handling "%s" http request "%s"', x.method, x.url), this.prepare(x), x.res = w;
      const C = (_, F) => {
        if (_ !== void 0) {
          this.emit("connection_error", {
            req: x,
            code: _,
            message: u.errorMessages[_],
            context: F
          }), f(w, _, F);
          return;
        }
        if (x._query.sid)
          e("setting new request for existing client"), this.clients[x._query.sid].transport.onRequest(x);
        else {
          const S = (j, R) => f(w, j, R);
          this.handshake(x._query.transport, x, S);
        }
      };
      this._applyMiddlewares(x, w, (_) => {
        _ ? C(u.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" }) : this.verify(x, !1, C);
      });
    }
    /**
     * Handles an Engine.IO HTTP Upgrade.
     */
    handleUpgrade(x, w, C) {
      this.prepare(x);
      const _ = new r(x, w), F = (S, j) => {
        if (S !== void 0) {
          this.emit("connection_error", {
            req: x,
            code: S,
            message: u.errorMessages[S],
            context: j
          }), g(w, S, j);
          return;
        }
        const R = Buffer.from(C);
        C = null, _.writeHead(), this.ws.handleUpgrade(x, w, R, (y) => {
          this.onWebSocket(x, w, y);
        });
      };
      this._applyMiddlewares(x, _, (S) => {
        S ? F(u.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" }) : this.verify(x, !0, F);
      });
    }
    /**
     * Called upon a ws.io connection.
     *
     * @param {ws.Socket} websocket
     * @private
     */
    onWebSocket(x, w, C) {
      if (C.on("error", F), p.default[x._query.transport] !== void 0 && !p.default[x._query.transport].prototype.handlesUpgrades) {
        e("transport doesnt handle upgraded requests"), C.close();
        return;
      }
      const _ = x._query.sid;
      if (x.websocket = C, _) {
        const S = this.clients[_];
        if (!S)
          e("upgrade attempt for closed client"), C.close();
        else if (S.upgrading)
          e("transport has already been trying to upgrade"), C.close();
        else if (S.upgraded)
          e("transport had already been upgraded"), C.close();
        else {
          e("upgrading existing transport"), C.removeListener("error", F);
          const j = this.createTransport(x._query.transport, x);
          j.perMessageDeflate = this.opts.perMessageDeflate, S._maybeUpgrade(j);
        }
      } else {
        const S = (j, R) => g(w, j, R);
        this.handshake(x._query.transport, x, S);
      }
      function F() {
        e("websocket error before upgrade");
      }
    }
    /**
     * Captures upgrade requests for a http.Server.
     *
     * @param {http.Server} server
     * @param {Object} options
     */
    attach(x, w = {}) {
      const C = this._computePath(w), _ = w.destroyUpgradeTimeout || 1e3;
      function F(j) {
        return C === j.url.slice(0, C.length);
      }
      const S = x.listeners("request").slice(0);
      x.removeAllListeners("request"), x.on("close", this.close.bind(this)), x.on("listening", this.init.bind(this)), x.on("request", (j, R) => {
        if (F(j))
          e('intercepting request for path "%s"', C), this.handleRequest(j, R);
        else {
          let y = 0;
          const A = S.length;
          for (; y < A; y++)
            S[y].call(x, j, R);
        }
      }), ~this.opts.transports.indexOf("websocket") && x.on("upgrade", (j, R, y) => {
        F(j) ? this.handleUpgrade(j, R, y) : w.destroyUpgrade !== !1 && setTimeout(function() {
          if (R.writable && R.bytesWritten <= 0)
            return R.on("error", (A) => {
              e("error while destroying upgrade: %s", A.message);
            }), R.end();
        }, _);
      });
    }
  }
  V.Server = u;
  function f(E, x, w) {
    const C = x === u.errors.FORBIDDEN ? 403 : 400, _ = w && w.message ? w.message : u.errorMessages[x];
    E.writeHead(C, { "Content-Type": "application/json" }), E.end(JSON.stringify({
      code: x,
      message: _
    }));
  }
  function g(E, x, w = {}) {
    if (E.on("error", () => {
      e("ignoring error from closed connection");
    }), E.writable) {
      const C = w.message || u.errorMessages[x], _ = Buffer.byteLength(C);
      E.write(`HTTP/1.1 400 Bad Request\r
Connection: close\r
Content-type: text/html\r
Content-Length: ` + _ + `\r
\r
` + C);
    }
    E.destroy();
  }
  const k = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    // 0 - 15
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // 16 - 31
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    // 32 - 47
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    // 48 - 63
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    // 64 - 79
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    // 80 - 95
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    // 96 - 111
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    // 112 - 127
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    // 128 ...
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
    // ... 255
  ];
  function T(E) {
    if (E += "", E.length < 1)
      return !1;
    if (!k[E.charCodeAt(0)])
      return e('invalid header, index 0, char "%s"', E.charCodeAt(0)), !0;
    if (E.length < 2)
      return !1;
    if (!k[E.charCodeAt(1)])
      return e('invalid header, index 1, char "%s"', E.charCodeAt(1)), !0;
    if (E.length < 3)
      return !1;
    if (!k[E.charCodeAt(2)])
      return e('invalid header, index 2, char "%s"', E.charCodeAt(2)), !0;
    if (E.length < 4)
      return !1;
    if (!k[E.charCodeAt(3)])
      return e('invalid header, index 3, char "%s"', E.charCodeAt(3)), !0;
    for (let x = 4; x < E.length; ++x)
      if (!k[E.charCodeAt(x)])
        return e('invalid header, index "%i", char "%s"', x, E.charCodeAt(x)), !0;
    return !1;
  }
  return V;
}
var le = {}, Te = {}, ue = {}, Mi;
function ra() {
  if (Mi) return ue;
  Mi = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.Polling = void 0;
  const m = ee(), h = B, b = ai(), v = (0, L().default)("engine:polling"), d = {
    gzip: h.createGzip,
    deflate: h.createDeflate
  };
  class c extends m.Transport {
    /**
     * HTTP polling constructor.
     */
    constructor(t) {
      super(t), this.closeTimeout = 30 * 1e3;
    }
    /**
     * Transport name
     */
    get name() {
      return "polling";
    }
    /**
     * Overrides onRequest.
     *
     * @param req
     *
     * @private
     */
    onRequest(t) {
      const i = t.res;
      t.res = null, t.getMethod() === "get" ? this.onPollRequest(t, i) : t.getMethod() === "post" ? this.onDataRequest(t, i) : (i.writeStatus("500 Internal Server Error"), i.end());
    }
    /**
     * The client sends a request awaiting for us to send data.
     *
     * @private
     */
    onPollRequest(t, i) {
      if (this.req) {
        v("request overlap"), this.onError("overlap from client"), i.writeStatus("500 Internal Server Error"), i.end();
        return;
      }
      v("setting request"), this.req = t, this.res = i;
      const a = () => {
        this.writable = !1, this.onError("poll connection closed prematurely");
      }, e = () => {
        this.req = this.res = null;
      };
      t.cleanup = e, i.onAborted(a), this.writable = !0, this.emit("ready"), this.writable && this.shouldClose && (v("triggering empty send to append close packet"), this.send([{ type: "noop" }]));
    }
    /**
     * The client sends a request with data.
     *
     * @private
     */
    onDataRequest(t, i) {
      if (this.dataReq) {
        this.onError("data request overlap from client"), i.writeStatus("500 Internal Server Error"), i.end();
        return;
      }
      const a = Number(t.headers["content-length"]);
      if (!a) {
        this.onError("content-length header required"), i.writeStatus("411 Length Required").end();
        return;
      }
      if (a > this.maxHttpBufferSize) {
        this.onError("payload too large"), i.writeStatus("413 Payload Too Large").end();
        return;
      }
      if (t.headers["content-type"] === "application/octet-stream" && this.protocol === 4)
        return this.onError("invalid content");
      this.dataReq = t, this.dataRes = i;
      let n, o = 0;
      const s = {
        // text/html is required instead of text/plain to avoid an
        // unwanted download dialog on certain user-agents (GH-43)
        "Content-Type": "text/html"
      };
      this.headers(t, s);
      for (let u in s)
        i.writeHeader(u, String(s[u]));
      const r = (u) => {
        this.onData(u.toString()), this.onDataRequestCleanup(), i.cork(() => {
          i.end("ok");
        });
      };
      i.onAborted(() => {
        this.onDataRequestCleanup(), this.onError("data request connection closed prematurely");
      }), i.onData((u, f) => {
        const g = o + u.byteLength;
        if (g > a) {
          this.onError("content-length mismatch"), i.close();
          return;
        }
        if (!n) {
          if (f) {
            r(Buffer.from(u));
            return;
          }
          n = Buffer.allocUnsafe(a);
        }
        if (Buffer.from(u).copy(n, o), f) {
          if (g != a) {
            this.onError("content-length mismatch"), i.writeStatus("400 Content-Length Mismatch").end(), this.onDataRequestCleanup();
            return;
          }
          r(n);
          return;
        }
        o = g;
      });
    }
    /**
     * Cleanup request.
     *
     * @private
     */
    onDataRequestCleanup() {
      this.dataReq = this.dataRes = null;
    }
    /**
     * Processes the incoming data payload.
     *
     * @param {String} encoded payload
     * @private
     */
    onData(t) {
      v('received "%s"', t);
      const i = (a) => {
        if (a.type === "close")
          return v("got xhr close packet"), this.onClose(), !1;
        this.onPacket(a);
      };
      this.protocol === 3 ? this.parser.decodePayload(t, i) : this.parser.decodePayload(t).forEach(i);
    }
    /**
     * Overrides onClose.
     *
     * @private
     */
    onClose() {
      this.writable && this.send([{ type: "noop" }]), super.onClose();
    }
    /**
     * Writes a packet payload.
     *
     * @param {Object} packet
     * @private
     */
    send(t) {
      this.writable = !1, this.shouldClose && (v("appending close packet to payload"), t.push({ type: "close" }), this.shouldClose(), this.shouldClose = null);
      const i = (a) => {
        const e = t.some((n) => n.options && n.options.compress);
        this.write(a, { compress: e });
      };
      this.protocol === 3 ? this.parser.encodePayload(t, this.supportsBinary, i) : this.parser.encodePayload(t, i);
    }
    /**
     * Writes data as response to poll request.
     *
     * @param {String} data
     * @param {Object} options
     * @private
     */
    write(t, i) {
      v('writing "%s"', t), this.doWrite(t, i, () => {
        this.req.cleanup(), this.emit("drain");
      });
    }
    /**
     * Performs the write.
     *
     * @private
     */
    doWrite(t, i, a) {
      const e = typeof t == "string", o = {
        "Content-Type": e ? "text/plain; charset=UTF-8" : "application/octet-stream"
      }, s = (f) => {
        this.headers(this.req, o), this.res.cork(() => {
          Object.keys(o).forEach((g) => {
            this.res.writeHeader(g, String(o[g]));
          }), this.res.end(f);
        }), a();
      };
      if (!this.httpCompression || !i.compress) {
        s(t);
        return;
      }
      if ((e ? Buffer.byteLength(t) : t.length) < this.httpCompression.threshold) {
        s(t);
        return;
      }
      const u = b(this.req).encodings(["gzip", "deflate"]);
      if (!u) {
        s(t);
        return;
      }
      this.compress(t, u, (f, g) => {
        if (f) {
          this.res.writeStatus("500 Internal Server Error"), this.res.end(), a(f);
          return;
        }
        o["Content-Encoding"] = u, s(g);
      });
    }
    /**
     * Compresses data.
     *
     * @private
     */
    compress(t, i, a) {
      v("compressing");
      const e = [];
      let n = 0;
      d[i](this.httpCompression).on("error", a).on("data", function(o) {
        e.push(o), n += o.length;
      }).on("end", function() {
        a(null, Buffer.concat(e, n));
      }).end(t);
    }
    /**
     * Closes the transport.
     *
     * @private
     */
    doClose(t) {
      v("closing");
      let i;
      const a = () => {
        clearTimeout(i), t(), this.onClose();
      };
      this.writable ? (v("transport writable - closing right away"), this.send([{ type: "close" }]), a()) : this.discarded ? (v("transport discarded - closing right away"), a()) : (v("transport not writable - buffering orderly close"), this.shouldClose = a, i = setTimeout(a, this.closeTimeout));
    }
    /**
     * Returns headers for a response.
     *
     * @param req - request
     * @param {Object} extra headers
     * @private
     */
    headers(t, i) {
      i = i || {};
      const a = t.headers["user-agent"];
      return a && (~a.indexOf(";MSIE") || ~a.indexOf("Trident/")) && (i["X-XSS-Protection"] = "0"), i["cache-control"] = "no-store", this.emit("headers", i, t), i;
    }
  }
  return ue.Polling = c, ue;
}
var de = {}, zi;
function ca() {
  if (zi) return de;
  zi = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.WebSocket = void 0;
  const m = ee(), b = (0, L().default)("engine:ws");
  class p extends m.Transport {
    /**
     * WebSocket transport
     *
     * @param req
     */
    constructor(d) {
      super(d), this.writable = !1, this.perMessageDeflate = null;
    }
    /**
     * Transport name
     */
    get name() {
      return "websocket";
    }
    /**
     * Advertise upgrade support.
     */
    get handlesUpgrades() {
      return !0;
    }
    /**
     * Writes a packet payload.
     *
     * @param {Array} packets
     * @private
     */
    send(d) {
      this.writable = !1;
      for (let c = 0; c < d.length; c++) {
        const l = d[c], t = c + 1 === d.length, i = (a) => {
          const e = typeof a != "string", n = this.perMessageDeflate && Buffer.byteLength(a) > this.perMessageDeflate.threshold;
          b('writing "%s"', a), this.socket.send(a, e, n), t && (this.emit("drain"), this.writable = !0, this.emit("ready"));
        };
        l.options && typeof l.options.wsPreEncoded == "string" ? i(l.options.wsPreEncoded) : this.parser.encodePacket(l, this.supportsBinary, i);
      }
    }
    /**
     * Closes the transport.
     *
     * @private
     */
    doClose(d) {
      b("closing"), d && d(), this.socket.end();
    }
  }
  return de.WebSocket = p, de;
}
var Li;
function pa() {
  if (Li) return Te;
  Li = 1, Object.defineProperty(Te, "__esModule", { value: !0 });
  const m = ra(), h = ca();
  return Te.default = {
    polling: m.Polling,
    websocket: h.WebSocket
  }, Te;
}
var Ui;
function la() {
  if (Ui) return le;
  Ui = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.uServer = void 0;
  const m = L(), h = Sn(), b = pa(), p = (0, m.default)("engine:uws");
  class v extends h.BaseServer {
    init() {
    }
    cleanup() {
    }
    /**
     * Prepares a request by processing the query string.
     *
     * @private
     */
    prepare(l, t) {
      l.method = l.getMethod().toUpperCase(), l.url = l.getUrl();
      const i = new URLSearchParams(l.getQuery());
      l._query = Object.fromEntries(i.entries()), l.headers = {}, l.forEach((a, e) => {
        l.headers[a] = e;
      }), l.connection = {
        remoteAddress: Buffer.from(t.getRemoteAddressAsText()).toString()
      }, t.onAborted(() => {
        p("response has been aborted");
      });
    }
    createTransport(l, t) {
      return new b.default[l](t);
    }
    /**
     * Attach the engine to a µWebSockets.js server
     * @param app
     * @param options
     */
    attach(l, t = {}) {
      const i = this._computePath(t);
      l.any(i, this.handleRequest.bind(this)).ws(i, {
        compression: t.compression,
        idleTimeout: t.idleTimeout,
        maxBackpressure: t.maxBackpressure,
        maxPayloadLength: this.opts.maxHttpBufferSize,
        upgrade: this.handleUpgrade.bind(this),
        open: (a) => {
          const e = a.getUserData().transport;
          e.socket = a, e.writable = !0, e.emit("ready");
        },
        message: (a, e, n) => {
          a.getUserData().transport.onData(n ? e : Buffer.from(e).toString());
        },
        close: (a, e, n) => {
          a.getUserData().transport.onClose(e, n);
        }
      });
    }
    _applyMiddlewares(l, t, i) {
      if (this.middlewares.length === 0)
        return i();
      l.res = new d(t), super._applyMiddlewares(l, l.res, (a) => {
        l.res.writeHead(), i(a);
      });
    }
    handleRequest(l, t) {
      p('handling "%s" http request "%s"', t.getMethod(), t.getUrl()), this.prepare(t, l), t.res = l;
      const i = (a, e) => {
        if (a !== void 0) {
          this.emit("connection_error", {
            req: t,
            code: a,
            message: h.Server.errorMessages[a],
            context: e
          }), this.abortRequest(t.res, a, e);
          return;
        }
        if (t._query.sid)
          p("setting new request for existing client"), this.clients[t._query.sid].transport.onRequest(t);
        else {
          const n = (o, s) => this.abortRequest(l, o, s);
          this.handshake(t._query.transport, t, n);
        }
      };
      this._applyMiddlewares(t, l, (a) => {
        a ? i(h.Server.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" }) : this.verify(t, !1, i);
      });
    }
    handleUpgrade(l, t, i) {
      p("on upgrade"), this.prepare(t, l), t.res = l;
      const a = async (e, n) => {
        if (e !== void 0) {
          this.emit("connection_error", {
            req: t,
            code: e,
            message: h.Server.errorMessages[e],
            context: n
          }), this.abortRequest(l, e, n);
          return;
        }
        const o = t._query.sid;
        let s;
        if (o) {
          const r = this.clients[o];
          if (r) {
            if (r.upgrading)
              return p("transport has already been trying to upgrade"), l.close();
            if (r.upgraded)
              return p("transport had already been upgraded"), l.close();
            p("upgrading existing transport"), s = this.createTransport(t._query.transport, t), r._maybeUpgrade(s);
          } else return p("upgrade attempt for closed client"), l.close();
        } else if (s = await this.handshake(t._query.transport, t, (r, u) => this.abortRequest(l, r, u)), !s)
          return;
        t.res.writeStatus("101 Switching Protocols"), l.upgrade({
          transport: s
        }, t.getHeader("sec-websocket-key"), t.getHeader("sec-websocket-protocol"), t.getHeader("sec-websocket-extensions"), i);
      };
      this._applyMiddlewares(t, l, (e) => {
        e ? a(h.Server.errors.BAD_REQUEST, { name: "MIDDLEWARE_FAILURE" }) : this.verify(t, !0, a);
      });
    }
    abortRequest(l, t, i) {
      const a = t === h.Server.errors.FORBIDDEN ? "403 Forbidden" : "400 Bad Request", e = i && i.message ? i.message : h.Server.errorMessages[t];
      l.writeStatus(a), l.writeHeader("Content-Type", "application/json"), l.end(JSON.stringify({
        code: t,
        message: e
      }));
    }
  }
  le.uServer = v;
  class d {
    constructor(l) {
      this.res = l, this.statusWritten = !1, this.headers = [], this.isAborted = !1;
    }
    set statusCode(l) {
      l && this.writeStatus(l === 200 ? "200 OK" : "204 No Content");
    }
    writeHead(l) {
      this.statusCode = l;
    }
    setHeader(l, t) {
      Array.isArray(t) ? t.forEach((i) => {
        this.writeHeader(l, i);
      }) : this.writeHeader(l, t);
    }
    removeHeader() {
    }
    // needed by vary: https://github.com/jshttp/vary/blob/5d725d059b3871025cf753e9dfa08924d0bcfa8f/index.js#L134
    getHeader() {
    }
    writeStatus(l) {
      if (!this.isAborted)
        return this.res.writeStatus(l), this.statusWritten = !0, this.writeBufferedHeaders(), this;
    }
    writeHeader(l, t) {
      this.isAborted || l !== "Content-Length" && (this.statusWritten ? this.res.writeHeader(l, t) : this.headers.push([l, t]));
    }
    writeBufferedHeaders() {
      this.headers.forEach(([l, t]) => {
        this.res.writeHeader(l, t);
      });
    }
    end(l) {
      this.isAborted || this.res.cork(() => {
        this.statusWritten || this.writeBufferedHeaders(), this.res.end(l);
      });
    }
    onData(l) {
      this.isAborted || this.res.onData(l);
    }
    onAborted(l) {
      this.isAborted || this.res.onAborted(() => {
        this.isAborted = !0, l();
      });
    }
    cork(l) {
      this.isAborted || this.res.cork(l);
    }
  }
  return le;
}
var $i;
function ua() {
  return $i || ($i = 1, function(m) {
    Object.defineProperty(m, "__esModule", { value: !0 }), m.protocol = m.Transport = m.Socket = m.uServer = m.parser = m.transports = m.Server = void 0, m.listen = t, m.attach = i;
    const h = B, b = Sn();
    Object.defineProperty(m, "Server", { enumerable: !0, get: function() {
      return b.Server;
    } });
    const p = kn();
    m.transports = p.default;
    const v = Oe();
    m.parser = v;
    var d = la();
    Object.defineProperty(m, "uServer", { enumerable: !0, get: function() {
      return d.uServer;
    } });
    var c = _n();
    Object.defineProperty(m, "Socket", { enumerable: !0, get: function() {
      return c.Socket;
    } });
    var l = ee();
    Object.defineProperty(m, "Transport", { enumerable: !0, get: function() {
      return l.Transport;
    } }), m.protocol = v.protocol;
    function t(a, e, n) {
      typeof e == "function" && (n = e, e = {});
      const o = (0, h.createServer)(function(r, u) {
        u.writeHead(501), u.end("Not Implemented");
      }), s = i(o, e);
      return s.httpServer = o, o.listen(a, n), s;
    }
    function i(a, e) {
      const n = new b.Server(e);
      return n.attach(a, e), n;
    }
  }(De)), De;
}
var me = {}, Je = {};
function I(m) {
  if (m) return da(m);
}
function da(m) {
  for (var h in I.prototype)
    m[h] = I.prototype[h];
  return m;
}
I.prototype.on = I.prototype.addEventListener = function(m, h) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + m] = this._callbacks["$" + m] || []).push(h), this;
};
I.prototype.once = function(m, h) {
  function b() {
    this.off(m, b), h.apply(this, arguments);
  }
  return b.fn = h, this.on(m, b), this;
};
I.prototype.off = I.prototype.removeListener = I.prototype.removeAllListeners = I.prototype.removeEventListener = function(m, h) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var b = this._callbacks["$" + m];
  if (!b) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + m], this;
  for (var p, v = 0; v < b.length; v++)
    if (p = b[v], p === h || p.fn === h) {
      b.splice(v, 1);
      break;
    }
  return b.length === 0 && delete this._callbacks["$" + m], this;
};
I.prototype.emit = function(m) {
  this._callbacks = this._callbacks || {};
  for (var h = new Array(arguments.length - 1), b = this._callbacks["$" + m], p = 1; p < arguments.length; p++)
    h[p - 1] = arguments[p];
  if (b) {
    b = b.slice(0);
    for (var p = 0, v = b.length; p < v; ++p)
      b[p].apply(this, h);
  }
  return this;
};
I.prototype.emitReserved = I.prototype.emit;
I.prototype.listeners = function(m) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + m] || [];
};
I.prototype.hasListeners = function(m) {
  return !!this.listeners(m).length;
};
const ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Emitter: I
}, Symbol.toStringTag, { value: "Module" })), fa = /* @__PURE__ */ gn(ma);
var K = {}, J = {}, Hi;
function An() {
  if (Hi) return J;
  Hi = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.hasBinary = J.isBinary = void 0;
  const m = typeof ArrayBuffer == "function", h = (l) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(l) : l.buffer instanceof ArrayBuffer, b = Object.prototype.toString, p = typeof Blob == "function" || typeof Blob < "u" && b.call(Blob) === "[object BlobConstructor]", v = typeof File == "function" || typeof File < "u" && b.call(File) === "[object FileConstructor]";
  function d(l) {
    return m && (l instanceof ArrayBuffer || h(l)) || p && l instanceof Blob || v && l instanceof File;
  }
  J.isBinary = d;
  function c(l, t) {
    if (!l || typeof l != "object")
      return !1;
    if (Array.isArray(l)) {
      for (let i = 0, a = l.length; i < a; i++)
        if (c(l[i]))
          return !0;
      return !1;
    }
    if (d(l))
      return !0;
    if (l.toJSON && typeof l.toJSON == "function" && arguments.length === 1)
      return c(l.toJSON(), !0);
    for (const i in l)
      if (Object.prototype.hasOwnProperty.call(l, i) && c(l[i]))
        return !0;
    return !1;
  }
  return J.hasBinary = c, J;
}
var Vi;
function ha() {
  if (Vi) return K;
  Vi = 1, Object.defineProperty(K, "__esModule", { value: !0 }), K.reconstructPacket = K.deconstructPacket = void 0;
  const m = An();
  function h(d) {
    const c = [], l = d.data, t = d;
    return t.data = b(l, c), t.attachments = c.length, { packet: t, buffers: c };
  }
  K.deconstructPacket = h;
  function b(d, c) {
    if (!d)
      return d;
    if ((0, m.isBinary)(d)) {
      const l = { _placeholder: !0, num: c.length };
      return c.push(d), l;
    } else if (Array.isArray(d)) {
      const l = new Array(d.length);
      for (let t = 0; t < d.length; t++)
        l[t] = b(d[t], c);
      return l;
    } else if (typeof d == "object" && !(d instanceof Date)) {
      const l = {};
      for (const t in d)
        Object.prototype.hasOwnProperty.call(d, t) && (l[t] = b(d[t], c));
      return l;
    }
    return d;
  }
  function p(d, c) {
    return d.data = v(d.data, c), delete d.attachments, d;
  }
  K.reconstructPacket = p;
  function v(d, c) {
    if (!d)
      return d;
    if (d && d._placeholder === !0) {
      if (typeof d.num == "number" && d.num >= 0 && d.num < c.length)
        return c[d.num];
      throw new Error("illegal attachments");
    } else if (Array.isArray(d))
      for (let l = 0; l < d.length; l++)
        d[l] = v(d[l], c);
    else if (typeof d == "object")
      for (const l in d)
        Object.prototype.hasOwnProperty.call(d, l) && (d[l] = v(d[l], c));
    return d;
  }
  return K;
}
var Fe = { exports: {} }, Ye, Wi;
function va() {
  if (Wi) return Ye;
  Wi = 1;
  var m = 1e3, h = m * 60, b = h * 60, p = b * 24, v = p * 7, d = p * 365.25;
  Ye = function(a, e) {
    e = e || {};
    var n = typeof a;
    if (n === "string" && a.length > 0)
      return c(a);
    if (n === "number" && isFinite(a))
      return e.long ? t(a) : l(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function c(a) {
    if (a = String(a), !(a.length > 100)) {
      var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (e) {
        var n = parseFloat(e[1]), o = (e[2] || "ms").toLowerCase();
        switch (o) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * d;
          case "weeks":
          case "week":
          case "w":
            return n * v;
          case "days":
          case "day":
          case "d":
            return n * p;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * b;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * h;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * m;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return;
        }
      }
    }
  }
  function l(a) {
    var e = Math.abs(a);
    return e >= p ? Math.round(a / p) + "d" : e >= b ? Math.round(a / b) + "h" : e >= h ? Math.round(a / h) + "m" : e >= m ? Math.round(a / m) + "s" : a + "ms";
  }
  function t(a) {
    var e = Math.abs(a);
    return e >= p ? i(a, e, p, "day") : e >= b ? i(a, e, b, "hour") : e >= h ? i(a, e, h, "minute") : e >= m ? i(a, e, m, "second") : a + " ms";
  }
  function i(a, e, n, o) {
    var s = e >= n * 1.5;
    return Math.round(a / n) + " " + o + (s ? "s" : "");
  }
  return Ye;
}
var Qe, Ki;
function xa() {
  if (Ki) return Qe;
  Ki = 1;
  function m(h) {
    p.debug = p, p.default = p, p.coerce = i, p.disable = c, p.enable = d, p.enabled = l, p.humanize = va(), p.destroy = a, Object.keys(h).forEach((e) => {
      p[e] = h[e];
    }), p.names = [], p.skips = [], p.formatters = {};
    function b(e) {
      let n = 0;
      for (let o = 0; o < e.length; o++)
        n = (n << 5) - n + e.charCodeAt(o), n |= 0;
      return p.colors[Math.abs(n) % p.colors.length];
    }
    p.selectColor = b;
    function p(e) {
      let n, o = null, s, r;
      function u(...f) {
        if (!u.enabled)
          return;
        const g = u, k = Number(/* @__PURE__ */ new Date()), T = k - (n || k);
        g.diff = T, g.prev = n, g.curr = k, n = k, f[0] = p.coerce(f[0]), typeof f[0] != "string" && f.unshift("%O");
        let E = 0;
        f[0] = f[0].replace(/%([a-zA-Z%])/g, (w, C) => {
          if (w === "%%")
            return "%";
          E++;
          const _ = p.formatters[C];
          if (typeof _ == "function") {
            const F = f[E];
            w = _.call(g, F), f.splice(E, 1), E--;
          }
          return w;
        }), p.formatArgs.call(g, f), (g.log || p.log).apply(g, f);
      }
      return u.namespace = e, u.useColors = p.useColors(), u.color = p.selectColor(e), u.extend = v, u.destroy = p.destroy, Object.defineProperty(u, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => o !== null ? o : (s !== p.namespaces && (s = p.namespaces, r = p.enabled(e)), r),
        set: (f) => {
          o = f;
        }
      }), typeof p.init == "function" && p.init(u), u;
    }
    function v(e, n) {
      const o = p(this.namespace + (typeof n > "u" ? ":" : n) + e);
      return o.log = this.log, o;
    }
    function d(e) {
      p.save(e), p.namespaces = e, p.names = [], p.skips = [];
      let n;
      const o = (typeof e == "string" ? e : "").split(/[\s,]+/), s = o.length;
      for (n = 0; n < s; n++)
        o[n] && (e = o[n].replace(/\*/g, ".*?"), e[0] === "-" ? p.skips.push(new RegExp("^" + e.slice(1) + "$")) : p.names.push(new RegExp("^" + e + "$")));
    }
    function c() {
      const e = [
        ...p.names.map(t),
        ...p.skips.map(t).map((n) => "-" + n)
      ].join(",");
      return p.enable(""), e;
    }
    function l(e) {
      if (e[e.length - 1] === "*")
        return !0;
      let n, o;
      for (n = 0, o = p.skips.length; n < o; n++)
        if (p.skips[n].test(e))
          return !1;
      for (n = 0, o = p.names.length; n < o; n++)
        if (p.names[n].test(e))
          return !0;
      return !1;
    }
    function t(e) {
      return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function i(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }
    function a() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return p.enable(p.load()), p;
  }
  return Qe = m, Qe;
}
var Ji;
function ga() {
  return Ji || (Ji = 1, function(m, h) {
    h.formatArgs = p, h.save = v, h.load = d, h.useColors = b, h.storage = c(), h.destroy = /* @__PURE__ */ (() => {
      let t = !1;
      return () => {
        t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), h.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function b() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let t;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function p(t) {
      if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + m.exports.humanize(this.diff), !this.useColors)
        return;
      const i = "color: " + this.color;
      t.splice(1, 0, i, "color: inherit");
      let a = 0, e = 0;
      t[0].replace(/%[a-zA-Z%]/g, (n) => {
        n !== "%%" && (a++, n === "%c" && (e = a));
      }), t.splice(e, 0, i);
    }
    h.log = console.debug || console.log || (() => {
    });
    function v(t) {
      try {
        t ? h.storage.setItem("debug", t) : h.storage.removeItem("debug");
      } catch {
      }
    }
    function d() {
      let t;
      try {
        t = h.storage.getItem("debug");
      } catch {
      }
      return !t && typeof process < "u" && "env" in process && (t = process.env.DEBUG), t;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    m.exports = xa()(h);
    const { formatters: l } = m.exports;
    l.j = function(t) {
      try {
        return JSON.stringify(t);
      } catch (i) {
        return "[UnexpectedJSONParseError]: " + i.message;
      }
    };
  }(Fe, Fe.exports)), Fe.exports;
}
var Yi;
function Pe() {
  return Yi || (Yi = 1, function(m) {
    Object.defineProperty(m, "__esModule", { value: !0 }), m.Decoder = m.Encoder = m.PacketType = m.protocol = void 0;
    const h = fa, b = ha(), p = An(), d = (0, ga().default)("socket.io-parser"), c = [
      "connect",
      "connect_error",
      "disconnect",
      "disconnecting",
      "newListener",
      "removeListener"
      // used by the Node.js EventEmitter
    ];
    m.protocol = 5;
    var l;
    (function(n) {
      n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
    })(l = m.PacketType || (m.PacketType = {}));
    class t {
      /**
       * Encoder constructor
       *
       * @param {function} replacer - custom replacer to pass down to JSON.parse
       */
      constructor(o) {
        this.replacer = o;
      }
      /**
       * Encode a packet as a single string if non-binary, or as a
       * buffer sequence, depending on packet type.
       *
       * @param {Object} obj - packet object
       */
      encode(o) {
        return d("encoding packet %j", o), (o.type === l.EVENT || o.type === l.ACK) && (0, p.hasBinary)(o) ? this.encodeAsBinary({
          type: o.type === l.EVENT ? l.BINARY_EVENT : l.BINARY_ACK,
          nsp: o.nsp,
          data: o.data,
          id: o.id
        }) : [this.encodeAsString(o)];
      }
      /**
       * Encode packet as string.
       */
      encodeAsString(o) {
        let s = "" + o.type;
        return (o.type === l.BINARY_EVENT || o.type === l.BINARY_ACK) && (s += o.attachments + "-"), o.nsp && o.nsp !== "/" && (s += o.nsp + ","), o.id != null && (s += o.id), o.data != null && (s += JSON.stringify(o.data, this.replacer)), d("encoded %j as %s", o, s), s;
      }
      /**
       * Encode packet as 'buffer sequence' by removing blobs, and
       * deconstructing packet into object with placeholders and
       * a list of buffers.
       */
      encodeAsBinary(o) {
        const s = (0, b.deconstructPacket)(o), r = this.encodeAsString(s.packet), u = s.buffers;
        return u.unshift(r), u;
      }
    }
    m.Encoder = t;
    function i(n) {
      return Object.prototype.toString.call(n) === "[object Object]";
    }
    class a extends h.Emitter {
      /**
       * Decoder constructor
       *
       * @param {function} reviver - custom reviver to pass down to JSON.stringify
       */
      constructor(o) {
        super(), this.reviver = o;
      }
      /**
       * Decodes an encoded packet string into packet JSON.
       *
       * @param {String} obj - encoded packet
       */
      add(o) {
        let s;
        if (typeof o == "string") {
          if (this.reconstructor)
            throw new Error("got plaintext data when reconstructing a packet");
          s = this.decodeString(o);
          const r = s.type === l.BINARY_EVENT;
          r || s.type === l.BINARY_ACK ? (s.type = r ? l.EVENT : l.ACK, this.reconstructor = new e(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
        } else if ((0, p.isBinary)(o) || o.base64)
          if (this.reconstructor)
            s = this.reconstructor.takeBinaryData(o), s && (this.reconstructor = null, super.emitReserved("decoded", s));
          else
            throw new Error("got binary data when not reconstructing a packet");
        else
          throw new Error("Unknown type: " + o);
      }
      /**
       * Decode a packet String (JSON data)
       *
       * @param {String} str
       * @return {Object} packet
       */
      decodeString(o) {
        let s = 0;
        const r = {
          type: Number(o.charAt(0))
        };
        if (l[r.type] === void 0)
          throw new Error("unknown packet type " + r.type);
        if (r.type === l.BINARY_EVENT || r.type === l.BINARY_ACK) {
          const f = s + 1;
          for (; o.charAt(++s) !== "-" && s != o.length; )
            ;
          const g = o.substring(f, s);
          if (g != Number(g) || o.charAt(s) !== "-")
            throw new Error("Illegal attachments");
          r.attachments = Number(g);
        }
        if (o.charAt(s + 1) === "/") {
          const f = s + 1;
          for (; ++s && !(o.charAt(s) === "," || s === o.length); )
            ;
          r.nsp = o.substring(f, s);
        } else
          r.nsp = "/";
        const u = o.charAt(s + 1);
        if (u !== "" && Number(u) == u) {
          const f = s + 1;
          for (; ++s; ) {
            const g = o.charAt(s);
            if (g == null || Number(g) != g) {
              --s;
              break;
            }
            if (s === o.length)
              break;
          }
          r.id = Number(o.substring(f, s + 1));
        }
        if (o.charAt(++s)) {
          const f = this.tryParse(o.substr(s));
          if (a.isPayloadValid(r.type, f))
            r.data = f;
          else
            throw new Error("invalid payload");
        }
        return d("decoded %s as %j", o, r), r;
      }
      tryParse(o) {
        try {
          return JSON.parse(o, this.reviver);
        } catch {
          return !1;
        }
      }
      static isPayloadValid(o, s) {
        switch (o) {
          case l.CONNECT:
            return i(s);
          case l.DISCONNECT:
            return s === void 0;
          case l.CONNECT_ERROR:
            return typeof s == "string" || i(s);
          case l.EVENT:
          case l.BINARY_EVENT:
            return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && c.indexOf(s[0]) === -1);
          case l.ACK:
          case l.BINARY_ACK:
            return Array.isArray(s);
        }
      }
      /**
       * Deallocates a parser's resources
       */
      destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
      }
    }
    m.Decoder = a;
    class e {
      constructor(o) {
        this.packet = o, this.buffers = [], this.reconPack = o;
      }
      /**
       * Method to be called when binary data received from connection
       * after a BINARY_EVENT packet.
       *
       * @param {Buffer | ArrayBuffer} binData - the raw binary data received
       * @return {null | Object} returns null if more binary data is expected or
       *   a reconstructed packet object if all buffers have been received.
       */
      takeBinaryData(o) {
        if (this.buffers.push(o), this.buffers.length === this.reconPack.attachments) {
          const s = (0, b.reconstructPacket)(this.reconPack, this.buffers);
          return this.finishedReconstruction(), s;
        }
        return null;
      }
      /**
       * Cleans up binary packet reconstruction variables.
       */
      finishedReconstruction() {
        this.reconPack = null, this.buffers = [];
      }
    }
  }(Je)), Je;
}
var Re = { exports: {} }, Ge, Qi;
function ba() {
  if (Qi) return Ge;
  Qi = 1;
  var m = 1e3, h = m * 60, b = h * 60, p = b * 24, v = p * 7, d = p * 365.25;
  Ge = function(a, e) {
    e = e || {};
    var n = typeof a;
    if (n === "string" && a.length > 0)
      return c(a);
    if (n === "number" && isFinite(a))
      return e.long ? t(a) : l(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function c(a) {
    if (a = String(a), !(a.length > 100)) {
      var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (e) {
        var n = parseFloat(e[1]), o = (e[2] || "ms").toLowerCase();
        switch (o) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * d;
          case "weeks":
          case "week":
          case "w":
            return n * v;
          case "days":
          case "day":
          case "d":
            return n * p;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * b;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * h;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * m;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return;
        }
      }
    }
  }
  function l(a) {
    var e = Math.abs(a);
    return e >= p ? Math.round(a / p) + "d" : e >= b ? Math.round(a / b) + "h" : e >= h ? Math.round(a / h) + "m" : e >= m ? Math.round(a / m) + "s" : a + "ms";
  }
  function t(a) {
    var e = Math.abs(a);
    return e >= p ? i(a, e, p, "day") : e >= b ? i(a, e, b, "hour") : e >= h ? i(a, e, h, "minute") : e >= m ? i(a, e, m, "second") : a + " ms";
  }
  function i(a, e, n, o) {
    var s = e >= n * 1.5;
    return Math.round(a / n) + " " + o + (s ? "s" : "");
  }
  return Ge;
}
var Xe, Gi;
function ya() {
  if (Gi) return Xe;
  Gi = 1;
  function m(h) {
    p.debug = p, p.default = p, p.coerce = i, p.disable = c, p.enable = d, p.enabled = l, p.humanize = ba(), p.destroy = a, Object.keys(h).forEach((e) => {
      p[e] = h[e];
    }), p.names = [], p.skips = [], p.formatters = {};
    function b(e) {
      let n = 0;
      for (let o = 0; o < e.length; o++)
        n = (n << 5) - n + e.charCodeAt(o), n |= 0;
      return p.colors[Math.abs(n) % p.colors.length];
    }
    p.selectColor = b;
    function p(e) {
      let n, o = null, s, r;
      function u(...f) {
        if (!u.enabled)
          return;
        const g = u, k = Number(/* @__PURE__ */ new Date()), T = k - (n || k);
        g.diff = T, g.prev = n, g.curr = k, n = k, f[0] = p.coerce(f[0]), typeof f[0] != "string" && f.unshift("%O");
        let E = 0;
        f[0] = f[0].replace(/%([a-zA-Z%])/g, (w, C) => {
          if (w === "%%")
            return "%";
          E++;
          const _ = p.formatters[C];
          if (typeof _ == "function") {
            const F = f[E];
            w = _.call(g, F), f.splice(E, 1), E--;
          }
          return w;
        }), p.formatArgs.call(g, f), (g.log || p.log).apply(g, f);
      }
      return u.namespace = e, u.useColors = p.useColors(), u.color = p.selectColor(e), u.extend = v, u.destroy = p.destroy, Object.defineProperty(u, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => o !== null ? o : (s !== p.namespaces && (s = p.namespaces, r = p.enabled(e)), r),
        set: (f) => {
          o = f;
        }
      }), typeof p.init == "function" && p.init(u), u;
    }
    function v(e, n) {
      const o = p(this.namespace + (typeof n > "u" ? ":" : n) + e);
      return o.log = this.log, o;
    }
    function d(e) {
      p.save(e), p.namespaces = e, p.names = [], p.skips = [];
      let n;
      const o = (typeof e == "string" ? e : "").split(/[\s,]+/), s = o.length;
      for (n = 0; n < s; n++)
        o[n] && (e = o[n].replace(/\*/g, ".*?"), e[0] === "-" ? p.skips.push(new RegExp("^" + e.slice(1) + "$")) : p.names.push(new RegExp("^" + e + "$")));
    }
    function c() {
      const e = [
        ...p.names.map(t),
        ...p.skips.map(t).map((n) => "-" + n)
      ].join(",");
      return p.enable(""), e;
    }
    function l(e) {
      if (e[e.length - 1] === "*")
        return !0;
      let n, o;
      for (n = 0, o = p.skips.length; n < o; n++)
        if (p.skips[n].test(e))
          return !1;
      for (n = 0, o = p.names.length; n < o; n++)
        if (p.names[n].test(e))
          return !0;
      return !1;
    }
    function t(e) {
      return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function i(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }
    function a() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return p.enable(p.load()), p;
  }
  return Xe = m, Xe;
}
var Xi;
function ie() {
  return Xi || (Xi = 1, function(m, h) {
    h.formatArgs = p, h.save = v, h.load = d, h.useColors = b, h.storage = c(), h.destroy = /* @__PURE__ */ (() => {
      let t = !1;
      return () => {
        t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), h.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function b() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let t;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function p(t) {
      if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + m.exports.humanize(this.diff), !this.useColors)
        return;
      const i = "color: " + this.color;
      t.splice(1, 0, i, "color: inherit");
      let a = 0, e = 0;
      t[0].replace(/%[a-zA-Z%]/g, (n) => {
        n !== "%%" && (a++, n === "%c" && (e = a));
      }), t.splice(e, 0, i);
    }
    h.log = console.debug || console.log || (() => {
    });
    function v(t) {
      try {
        t ? h.storage.setItem("debug", t) : h.storage.removeItem("debug");
      } catch {
      }
    }
    function d() {
      let t;
      try {
        t = h.storage.getItem("debug");
      } catch {
      }
      return !t && typeof process < "u" && "env" in process && (t = process.env.DEBUG), t;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    m.exports = ya()(h);
    const { formatters: l } = m.exports;
    l.j = function(t) {
      try {
        return JSON.stringify(t);
      } catch (i) {
        return "[UnexpectedJSONParseError]: " + i.message;
      }
    };
  }(Re, Re.exports)), Re.exports;
}
var Zi;
function wa() {
  if (Zi) return me;
  Zi = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.Client = void 0;
  const m = Pe(), h = ie(), b = B, p = h("socket.io:client");
  class v {
    /**
     * Client constructor.
     *
     * @param server instance
     * @param conn
     * @package
     */
    constructor(c, l) {
      this.sockets = /* @__PURE__ */ new Map(), this.nsps = /* @__PURE__ */ new Map(), this.server = c, this.conn = l, this.encoder = c.encoder, this.decoder = new c._parser.Decoder(), this.id = l.id, this.setup();
    }
    /**
     * @return the reference to the request that originated the Engine.IO connection
     *
     * @public
     */
    get request() {
      return this.conn.request;
    }
    /**
     * Sets up event listeners.
     *
     * @private
     */
    setup() {
      this.onclose = this.onclose.bind(this), this.ondata = this.ondata.bind(this), this.onerror = this.onerror.bind(this), this.ondecoded = this.ondecoded.bind(this), this.decoder.on("decoded", this.ondecoded), this.conn.on("data", this.ondata), this.conn.on("error", this.onerror), this.conn.on("close", this.onclose), this.connectTimeout = setTimeout(() => {
        this.nsps.size === 0 ? (p("no namespace joined yet, close the client"), this.close()) : p("the client has already joined a namespace, nothing to do");
      }, this.server._connectTimeout);
    }
    /**
     * Connects a client to a namespace.
     *
     * @param {String} name - the namespace
     * @param {Object} auth - the auth parameters
     * @private
     */
    connect(c, l = {}) {
      if (this.server._nsps.has(c))
        return p("connecting to namespace %s", c), this.doConnect(c, l);
      this.server._checkNamespace(c, l, (t) => {
        t ? this.doConnect(c, l) : (p("creation of namespace %s was denied", c), this._packet({
          type: m.PacketType.CONNECT_ERROR,
          nsp: c,
          data: {
            message: "Invalid namespace"
          }
        }));
      });
    }
    /**
     * Connects a client to a namespace.
     *
     * @param name - the namespace
     * @param {Object} auth - the auth parameters
     *
     * @private
     */
    doConnect(c, l) {
      const t = this.server.of(c);
      t._add(this, l, (i) => {
        this.sockets.set(i.id, i), this.nsps.set(t.name, i), this.connectTimeout && (clearTimeout(this.connectTimeout), this.connectTimeout = void 0);
      });
    }
    /**
     * Disconnects from all namespaces and closes transport.
     *
     * @private
     */
    _disconnect() {
      for (const c of this.sockets.values())
        c.disconnect();
      this.sockets.clear(), this.close();
    }
    /**
     * Removes a socket. Called by each `Socket`.
     *
     * @private
     */
    _remove(c) {
      if (this.sockets.has(c.id)) {
        const l = this.sockets.get(c.id).nsp.name;
        this.sockets.delete(c.id), this.nsps.delete(l);
      } else
        p("ignoring remove for %s", c.id);
    }
    /**
     * Closes the underlying connection.
     *
     * @private
     */
    close() {
      this.conn.readyState === "open" && (p("forcing transport close"), this.conn.close(), this.onclose("forced server close"));
    }
    /**
     * Writes a packet to the transport.
     *
     * @param {Object} packet object
     * @param {Object} opts
     * @private
     */
    _packet(c, l = {}) {
      if (this.conn.readyState !== "open") {
        p("ignoring packet write %j", c);
        return;
      }
      const t = l.preEncoded ? c : this.encoder.encode(c);
      this.writeToEngine(t, l);
    }
    writeToEngine(c, l) {
      if (l.volatile && !this.conn.transport.writable) {
        p("volatile packet is discarded since the transport is not currently writable");
        return;
      }
      const t = Array.isArray(c) ? c : [c];
      for (const i of t)
        this.conn.write(i, l);
    }
    /**
     * Called with incoming transport data.
     *
     * @private
     */
    ondata(c) {
      try {
        this.decoder.add(c);
      } catch (l) {
        p("invalid packet format"), this.onerror(l);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(c) {
      let l, t;
      if (this.conn.protocol === 3) {
        const a = b.parse(c.nsp, !0);
        l = a.pathname, t = a.query;
      } else
        l = c.nsp, t = c.data;
      const i = this.nsps.get(l);
      !i && c.type === m.PacketType.CONNECT ? this.connect(l, t) : i && c.type !== m.PacketType.CONNECT && c.type !== m.PacketType.CONNECT_ERROR ? process.nextTick(function() {
        i._onpacket(c);
      }) : (p("invalid state (packet type: %s)", c.type), this.close());
    }
    /**
     * Handles an error.
     *
     * @param {Object} err object
     * @private
     */
    onerror(c) {
      for (const l of this.sockets.values())
        l._onerror(c);
      this.conn.close();
    }
    /**
     * Called upon transport close.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(c, l) {
      p("client close with reason %s", c), this.destroy();
      for (const t of this.sockets.values())
        t._onclose(c, l);
      this.sockets.clear(), this.decoder.destroy();
    }
    /**
     * Cleans up event listeners.
     * @private
     */
    destroy() {
      this.conn.removeListener("data", this.ondata), this.conn.removeListener("error", this.onerror), this.conn.removeListener("close", this.onclose), this.decoder.removeListener("decoded", this.ondecoded), this.connectTimeout && (clearTimeout(this.connectTimeout), this.connectTimeout = void 0);
    }
  }
  return me.Client = v, me;
}
var fe = {}, Y = {}, he = {}, en;
function ti() {
  if (en) return he;
  en = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.StrictEventEmitter = void 0;
  const m = B;
  class h extends m.EventEmitter {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    on(p, v) {
      return super.on(p, v);
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    once(p, v) {
      return super.once(p, v);
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */
    emit(p, ...v) {
      return super.emit(p, ...v);
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */
    emitReserved(p, ...v) {
      return super.emit(p, ...v);
    }
    /**
     * Emits an event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can get around the strict typing. This is useful for
     * calling `emit.apply`, which can be called as `emitUntyped.apply`.
     *
     * @param ev Event name
     * @param args Arguments to emit along with the event
     */
    emitUntyped(p, ...v) {
      return super.emit(p, ...v);
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */
    listeners(p) {
      return super.listeners(p);
    }
  }
  return he.StrictEventEmitter = h, he;
}
var Q = {}, ve = {}, nn;
function Tn() {
  return nn || (nn = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.RESERVED_EVENTS = void 0, ve.RESERVED_EVENTS = /* @__PURE__ */ new Set([
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
  ])), ve;
}
var an;
function Fn() {
  if (an) return Q;
  an = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.RemoteSocket = Q.BroadcastOperator = void 0;
  const m = Tn(), h = Pe();
  class b {
    constructor(d, c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), t = {}) {
      this.adapter = d, this.rooms = c, this.exceptRooms = l, this.flags = t;
    }
    /**
     * Targets a room when emitting.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * io.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(d) {
      const c = new Set(this.rooms);
      return Array.isArray(d) ? d.forEach((l) => c.add(l)) : c.add(d), new b(this.adapter, c, this.exceptRooms, this.flags);
    }
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * // disconnect all clients in the "room-101" room
     * io.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(d) {
      return this.to(d);
    }
    /**
     * Excludes a room when emitting.
     *
     * @example
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * io.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * io.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(d) {
      const c = new Set(this.exceptRooms);
      return Array.isArray(d) ? d.forEach((l) => c.add(l)) : c.add(d), new b(this.adapter, this.rooms, c, this.flags);
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * io.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return a new BroadcastOperator instance
     */
    compress(d) {
      const c = Object.assign({}, this.flags, { compress: d });
      return new b(this.adapter, this.rooms, this.exceptRooms, c);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return a new BroadcastOperator instance
     */
    get volatile() {
      const d = Object.assign({}, this.flags, { volatile: !0 });
      return new b(this.adapter, this.rooms, this.exceptRooms, d);
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients on this node
     * io.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
      const d = Object.assign({}, this.flags, { local: !0 });
      return new b(this.adapter, this.rooms, this.exceptRooms, d);
    }
    /**
     * Adds a timeout in milliseconds for the next operation
     *
     * @example
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(d) {
      const c = Object.assign({}, this.flags, { timeout: d });
      return new b(this.adapter, this.rooms, this.exceptRooms, c);
    }
    /**
     * Emits to all clients.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients
     * io.emit("foo", "bar");
     *
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an acknowledgement expected from all connected clients
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @return Always true
     */
    emit(d, ...c) {
      if (m.RESERVED_EVENTS.has(d))
        throw new Error(`"${String(d)}" is a reserved event name`);
      const l = [d, ...c], t = {
        type: h.PacketType.EVENT,
        data: l
      };
      if (!(typeof l[l.length - 1] == "function"))
        return this.adapter.broadcast(t, {
          rooms: this.rooms,
          except: this.exceptRooms,
          flags: this.flags
        }), !0;
      const a = l.pop();
      let e = !1, n = [];
      const o = setTimeout(() => {
        e = !0, a.apply(this, [
          new Error("operation has timed out"),
          this.flags.expectSingleResponse ? null : n
        ]);
      }, this.flags.timeout);
      let s = -1, r = 0, u = 0;
      const f = () => {
        !e && s === r && n.length === u && (clearTimeout(o), a.apply(this, [
          null,
          this.flags.expectSingleResponse ? n[0] : n
        ]));
      };
      return this.adapter.broadcastWithAck(t, {
        rooms: this.rooms,
        except: this.exceptRooms,
        flags: this.flags
      }, (g) => {
        u += g, r++, f();
      }, (g) => {
        n.push(g), f();
      }), this.adapter.serverCount().then((g) => {
        s = g, f();
      }), !0;
    }
    /**
     * Emits an event and waits for an acknowledgement from all clients.
     *
     * @example
     * try {
     *   const responses = await io.timeout(1000).emitWithAck("some-event");
     *   console.log(responses); // one response per client
     * } catch (e) {
     *   // some clients did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when all clients have acknowledged the event
     */
    emitWithAck(d, ...c) {
      return new Promise((l, t) => {
        c.push((i, a) => i ? (i.responses = a, t(i)) : l(a)), this.emit(d, ...c);
      });
    }
    /**
     * Gets a list of clients.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Server#serverSideEmit} or
     * {@link fetchSockets} instead.
     */
    allSockets() {
      if (!this.adapter)
        throw new Error("No adapter for this namespace, are you trying to get the list of clients of a dynamic namespace?");
      return this.adapter.sockets(this.rooms);
    }
    /**
     * Returns the matching socket instances. This method works across a cluster of several Socket.IO servers.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // return all Socket instances
     * const sockets = await io.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await io.in("room1").fetchSockets();
     *
     * for (const socket of sockets) {
     *   console.log(socket.id);
     *   console.log(socket.handshake);
     *   console.log(socket.rooms);
     *   console.log(socket.data);
     *
     *   socket.emit("hello");
     *   socket.join("room1");
     *   socket.leave("room2");
     *   socket.disconnect();
     * }
     */
    fetchSockets() {
      return this.adapter.fetchSockets({
        rooms: this.rooms,
        except: this.exceptRooms,
        flags: this.flags
      }).then((d) => d.map((c) => c.server ? c : new p(this.adapter, c)));
    }
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     *
     * // make all socket instances join the "room1" room
     * io.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * io.in("room1").socketsJoin(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsJoin(d) {
      this.adapter.addSockets({
        rooms: this.rooms,
        except: this.exceptRooms,
        flags: this.flags
      }, Array.isArray(d) ? d : [d]);
    }
    /**
     * Makes the matching socket instances leave the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances leave the "room1" room
     * io.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * io.in("room1").socketsLeave(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsLeave(d) {
      this.adapter.delSockets({
        rooms: this.rooms,
        except: this.exceptRooms,
        flags: this.flags
      }, Array.isArray(d) ? d : [d]);
    }
    /**
     * Makes the matching socket instances disconnect.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * io.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * io.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(d = !1) {
      this.adapter.disconnectSockets({
        rooms: this.rooms,
        except: this.exceptRooms,
        flags: this.flags
      }, d);
    }
  }
  Q.BroadcastOperator = b;
  class p {
    constructor(d, c) {
      this.id = c.id, this.handshake = c.handshake, this.rooms = new Set(c.rooms), this.data = c.data, this.operator = new b(d, /* @__PURE__ */ new Set([this.id]), /* @__PURE__ */ new Set(), {
        expectSingleResponse: !0
        // so that remoteSocket.emit() with acknowledgement behaves like socket.emit()
      });
    }
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * const sockets = await io.fetchSockets();
     *
     * for (const socket of sockets) {
     *   if (someCondition) {
     *     socket.timeout(1000).emit("some-event", (err) => {
     *       if (err) {
     *         // the client did not acknowledge the event in the given delay
     *       }
     *     });
     *   }
     * }
     *
     * // note: if possible, using a room instead of looping over all sockets is preferable
     * io.timeout(1000).to(someConditionRoom).emit("some-event", (err, responses) => {
     *   // ...
     * });
     *
     * @param timeout
     */
    timeout(d) {
      return this.operator.timeout(d);
    }
    emit(d, ...c) {
      return this.operator.emit(d, ...c);
    }
    /**
     * Joins a room.
     *
     * @param {String|Array} room - room or array of rooms
     */
    join(d) {
      return this.operator.socketsJoin(d);
    }
    /**
     * Leaves a room.
     *
     * @param {String} room
     */
    leave(d) {
      return this.operator.socketsLeave(d);
    }
    /**
     * Disconnects this client.
     *
     * @param {Boolean} close - if `true`, closes the underlying connection
     * @return {Socket} self
     */
    disconnect(d = !1) {
      return this.operator.disconnectSockets(d), this;
    }
  }
  return Q.RemoteSocket = p, Q;
}
var sn;
function Rn() {
  if (sn) return Y;
  sn = 1;
  var m = Y && Y.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(Y, "__esModule", { value: !0 }), Y.Socket = void 0;
  const h = Pe(), b = m(ie()), p = ti(), v = m(yn()), d = Fn(), c = Tn(), l = (0, b.default)("socket.io:socket"), t = /* @__PURE__ */ new Set([
    "transport error",
    "transport close",
    "forced close",
    "ping timeout",
    "server shutting down",
    "forced server close"
  ]);
  function i() {
  }
  class a extends p.StrictEventEmitter {
    /**
     * Interface to a `Client` for a given `Namespace`.
     *
     * @param {Namespace} nsp
     * @param {Client} client
     * @param {Object} auth
     * @package
     */
    constructor(n, o, s, r) {
      super(), this.nsp = n, this.client = o, this.recovered = !1, this.data = {}, this.connected = !1, this.acks = /* @__PURE__ */ new Map(), this.fns = [], this.flags = {}, this.server = n.server, this.adapter = this.nsp.adapter, r ? (this.id = r.sid, this.pid = r.pid, r.rooms.forEach((u) => this.join(u)), this.data = r.data, r.missedPackets.forEach((u) => {
        this.packet({
          type: h.PacketType.EVENT,
          data: u
        });
      }), this.recovered = !0) : (o.conn.protocol === 3 ? this.id = n.name !== "/" ? n.name + "#" + o.id : o.id : this.id = v.default.generateId(), this.server._opts.connectionStateRecovery && (this.pid = v.default.generateId())), this.handshake = this.buildHandshake(s), this.on("error", i);
    }
    /**
     * Builds the `handshake` BC object
     *
     * @private
     */
    buildHandshake(n) {
      var o, s, r, u;
      return {
        headers: ((o = this.request) === null || o === void 0 ? void 0 : o.headers) || {},
        time: /* @__PURE__ */ new Date() + "",
        address: this.conn.remoteAddress,
        xdomain: !!(!((s = this.request) === null || s === void 0) && s.headers.origin),
        // @ts-ignore
        secure: !this.request || !!this.request.connection.encrypted,
        issued: +/* @__PURE__ */ new Date(),
        url: (r = this.request) === null || r === void 0 ? void 0 : r.url,
        // @ts-ignore
        query: ((u = this.request) === null || u === void 0 ? void 0 : u._query) || {},
        auth: n
      };
    }
    /**
     * Emits to this client.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.emit("hello", "world");
     *
     *   // all serializable datastructures are supported (no need to call JSON.stringify)
     *   socket.emit("hello", 1, "2", { 3: ["4"], 5: Buffer.from([6]) });
     *
     *   // with an acknowledgement from the client
     *   socket.emit("hello", "world", (val) => {
     *     // ...
     *   });
     * });
     *
     * @return Always returns `true`.
     */
    emit(n, ...o) {
      if (c.RESERVED_EVENTS.has(n))
        throw new Error(`"${String(n)}" is a reserved event name`);
      const s = [n, ...o], r = {
        type: h.PacketType.EVENT,
        data: s
      };
      if (typeof s[s.length - 1] == "function") {
        const f = this.nsp._ids++;
        l("emitting packet with ack id %d", f), this.registerAckCallback(f, s.pop()), r.id = f;
      }
      const u = Object.assign({}, this.flags);
      return this.flags = {}, this.nsp.server.opts.connectionStateRecovery ? this.adapter.broadcast(r, {
        rooms: /* @__PURE__ */ new Set([this.id]),
        except: /* @__PURE__ */ new Set(),
        flags: u
      }) : (this.notifyOutgoingListeners(r), this.packet(r, u)), !0;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * io.on("connection", async (socket) => {
     *   // without timeout
     *   const response = await socket.emitWithAck("hello", "world");
     *
     *   // with a specific timeout
     *   try {
     *     const response = await socket.timeout(1000).emitWithAck("hello", "world");
     *   } catch (err) {
     *     // the client did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @return a Promise that will be fulfilled when the client acknowledges the event
     */
    emitWithAck(n, ...o) {
      const s = this.flags.timeout !== void 0;
      return new Promise((r, u) => {
        o.push((f, g) => s ? f ? u(f) : r(g) : r(f)), this.emit(n, ...o);
      });
    }
    /**
     * @private
     */
    registerAckCallback(n, o) {
      const s = this.flags.timeout;
      if (s === void 0) {
        this.acks.set(n, o);
        return;
      }
      const r = setTimeout(() => {
        l("event with ack id %d has timed out after %d ms", n, s), this.acks.delete(n), o.call(this, new Error("operation has timed out"));
      }, s);
      this.acks.set(n, (...u) => {
        clearTimeout(r), o.apply(this, [null, ...u]);
      });
    }
    /**
     * Targets a room when broadcasting.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients in the “room-101” room, except this socket
     *   socket.to("room-101").emit("foo", "bar");
     *
     *   // the code above is equivalent to:
     *   io.to("room-101").except(socket.id).emit("foo", "bar");
     *
     *   // with an array of rooms (a client will be notified at most once)
     *   socket.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     *   // with multiple chained calls
     *   socket.to("room-101").to("room-102").emit("foo", "bar");
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(n) {
      return this.newBroadcastOperator().to(n);
    }
    /**
     * Targets a room when broadcasting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * io.on("connection", (socket) => {
     *   // disconnect all clients in the "room-101" room, except this socket
     *   socket.in("room-101").disconnectSockets();
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(n) {
      return this.newBroadcastOperator().in(n);
    }
    /**
     * Excludes a room when broadcasting.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     *   // and this socket
     *   socket.except("room-101").emit("foo", "bar");
     *
     *   // with an array of rooms
     *   socket.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     *   // with multiple chained calls
     *   socket.except("room-101").except("room-102").emit("foo", "bar");
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(n) {
      return this.newBroadcastOperator().except(n);
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.send("hello");
     *
     *   // this is equivalent to
     *   socket.emit("message", "hello");
     * });
     *
     * @return self
     */
    send(...n) {
      return this.emit("message", ...n), this;
    }
    /**
     * Sends a `message` event. Alias of {@link send}.
     *
     * @return self
     */
    write(...n) {
      return this.emit("message", ...n), this;
    }
    /**
     * Writes a packet.
     *
     * @param {Object} packet - packet object
     * @param {Object} opts - options
     * @private
     */
    packet(n, o = {}) {
      n.nsp = this.nsp.name, o.compress = o.compress !== !1, this.client._packet(n, o);
    }
    /**
     * Joins a room.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // join a single room
     *   socket.join("room1");
     *
     *   // join multiple rooms
     *   socket.join(["room1", "room2"]);
     * });
     *
     * @param {String|Array} rooms - room or array of rooms
     * @return a Promise or nothing, depending on the adapter
     */
    join(n) {
      return l("join room %s", n), this.adapter.addAll(this.id, new Set(Array.isArray(n) ? n : [n]));
    }
    /**
     * Leaves a room.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // leave a single room
     *   socket.leave("room1");
     *
     *   // leave multiple rooms
     *   socket.leave("room1").leave("room2");
     * });
     *
     * @param {String} room
     * @return a Promise or nothing, depending on the adapter
     */
    leave(n) {
      return l("leave room %s", n), this.adapter.del(this.id, n);
    }
    /**
     * Leave all rooms.
     *
     * @private
     */
    leaveAll() {
      this.adapter.delAll(this.id);
    }
    /**
     * Called by `Namespace` upon successful
     * middleware execution (ie: authorization).
     * Socket is added to namespace array before
     * call to join, so adapters can access it.
     *
     * @private
     */
    _onconnect() {
      l("socket connected - writing packet"), this.connected = !0, this.join(this.id), this.conn.protocol === 3 ? this.packet({ type: h.PacketType.CONNECT }) : this.packet({
        type: h.PacketType.CONNECT,
        data: { sid: this.id, pid: this.pid }
      });
    }
    /**
     * Called with each packet. Called by `Client`.
     *
     * @param {Object} packet
     * @private
     */
    _onpacket(n) {
      switch (l("got packet %j", n), n.type) {
        case h.PacketType.EVENT:
          this.onevent(n);
          break;
        case h.PacketType.BINARY_EVENT:
          this.onevent(n);
          break;
        case h.PacketType.ACK:
          this.onack(n);
          break;
        case h.PacketType.BINARY_ACK:
          this.onack(n);
          break;
        case h.PacketType.DISCONNECT:
          this.ondisconnect();
          break;
      }
    }
    /**
     * Called upon event packet.
     *
     * @param {Packet} packet - packet object
     * @private
     */
    onevent(n) {
      const o = n.data || [];
      if (l("emitting event %j", o), n.id != null && (l("attaching ack callback to event"), o.push(this.ack(n.id))), this._anyListeners && this._anyListeners.length) {
        const s = this._anyListeners.slice();
        for (const r of s)
          r.apply(this, o);
      }
      this.dispatch(o);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @param {Number} id - packet id
     * @private
     */
    ack(n) {
      const o = this;
      let s = !1;
      return function() {
        if (s)
          return;
        const r = Array.prototype.slice.call(arguments);
        l("sending ack %j", r), o.packet({
          id: n,
          type: h.PacketType.ACK,
          data: r
        }), s = !0;
      };
    }
    /**
     * Called upon ack packet.
     *
     * @private
     */
    onack(n) {
      const o = this.acks.get(n.id);
      typeof o == "function" ? (l("calling ack %s with %j", n.id, n.data), o.apply(this, n.data), this.acks.delete(n.id)) : l("bad ack %s", n.id);
    }
    /**
     * Called upon client disconnect packet.
     *
     * @private
     */
    ondisconnect() {
      l("got disconnect packet"), this._onclose("client namespace disconnect");
    }
    /**
     * Handles a client error.
     *
     * @private
     */
    _onerror(n) {
      this.emitReserved("error", n);
    }
    /**
     * Called upon closing. Called by `Client`.
     *
     * @param {String} reason
     * @param description
     * @throw {Error} optional error object
     *
     * @private
     */
    _onclose(n, o) {
      if (!this.connected)
        return this;
      l("closing socket - reason %s", n), this.emitReserved("disconnecting", n, o), this.server._opts.connectionStateRecovery && t.has(n) && (l("connection state recovery is enabled for sid %s", this.id), this.adapter.persistSession({
        sid: this.id,
        pid: this.pid,
        rooms: [...this.rooms],
        data: this.data
      })), this._cleanup(), this.client._remove(this), this.connected = !1, this.emitReserved("disconnect", n, o);
    }
    /**
     * Makes the socket leave all the rooms it was part of and prevents it from joining any other room
     *
     * @private
     */
    _cleanup() {
      this.leaveAll(), this.nsp._remove(this), this.join = i;
    }
    /**
     * Produces an `error` packet.
     *
     * @param {Object} err - error object
     *
     * @private
     */
    _error(n) {
      this.packet({ type: h.PacketType.CONNECT_ERROR, data: n });
    }
    /**
     * Disconnects this client.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // disconnect this socket (the connection might be kept alive for other namespaces)
     *   socket.disconnect();
     *
     *   // disconnect this socket and close the underlying connection
     *   socket.disconnect(true);
     * })
     *
     * @param {Boolean} close - if `true`, closes the underlying connection
     * @return self
     */
    disconnect(n = !1) {
      return this.connected ? (n ? this.client._disconnect() : (this.packet({ type: h.PacketType.DISCONNECT }), this._onclose("server namespace disconnect")), this) : this;
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.compress(false).emit("hello");
     * });
     *
     * @param {Boolean} compress - if `true`, compresses the sending data
     * @return {Socket} self
     */
    compress(n) {
      return this.flags.compress = n, this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.volatile.emit("hello"); // the client may or may not receive it
     * });
     *
     * @return {Socket} self
     */
    get volatile() {
      return this.flags.volatile = !0, this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to every sockets but the
     * sender.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients, except this socket
     *   socket.broadcast.emit("foo", "bar");
     * });
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get broadcast() {
      return this.newBroadcastOperator();
    }
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients on this node, except this socket
     *   socket.local.emit("foo", "bar");
     * });
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local() {
      return this.newBroadcastOperator().local;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the client:
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.timeout(5000).emit("my-event", (err) => {
     *     if (err) {
     *       // the client did not acknowledge the event in the given delay
     *     }
     *   });
     * });
     *
     * @returns self
     */
    timeout(n) {
      return this.flags.timeout = n, this;
    }
    /**
     * Dispatch incoming event to socket listeners.
     *
     * @param {Array} event - event that will get emitted
     * @private
     */
    dispatch(n) {
      l("dispatching an event %j", n), this.run(n, (o) => {
        process.nextTick(() => {
          if (o)
            return this._onerror(o);
          this.connected ? super.emitUntyped.apply(this, n) : l("ignore packet received after disconnection");
        });
      });
    }
    /**
     * Sets up socket middleware.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.use(([event, ...args], next) => {
     *     if (isUnauthorized(event)) {
     *       return next(new Error("unauthorized event"));
     *     }
     *     // do not forget to call next
     *     next();
     *   });
     *
     *   socket.on("error", (err) => {
     *     if (err && err.message === "unauthorized event") {
     *       socket.disconnect();
     *     }
     *   });
     * });
     *
     * @param {Function} fn - middleware function (event, next)
     * @return {Socket} self
     */
    use(n) {
      return this.fns.push(n), this;
    }
    /**
     * Executes the middleware for an incoming event.
     *
     * @param {Array} event - event that will get emitted
     * @param {Function} fn - last fn call in the middleware
     * @private
     */
    run(n, o) {
      if (!this.fns.length)
        return o();
      const s = this.fns.slice(0);
      function r(u) {
        s[u](n, (f) => {
          if (f)
            return o(f);
          if (!s[u + 1])
            return o();
          r(u + 1);
        });
      }
      r(0);
    }
    /**
     * Whether the socket is currently disconnected
     */
    get disconnected() {
      return !this.connected;
    }
    /**
     * A reference to the request that originated the underlying Engine.IO Socket.
     */
    get request() {
      return this.client.request;
    }
    /**
     * A reference to the underlying Client transport connection (Engine.IO Socket object).
     *
     * @example
     * io.on("connection", (socket) => {
     *   console.log(socket.conn.transport.name); // prints "polling" or "websocket"
     *
     *   socket.conn.once("upgrade", () => {
     *     console.log(socket.conn.transport.name); // prints "websocket"
     *   });
     * });
     */
    get conn() {
      return this.client.conn;
    }
    /**
     * Returns the rooms the socket is currently in.
     *
     * @example
     * io.on("connection", (socket) => {
     *   console.log(socket.rooms); // Set { <socket.id> }
     *
     *   socket.join("room1");
     *
     *   console.log(socket.rooms); // Set { <socket.id>, "room1" }
     * });
     */
    get rooms() {
      return this.adapter.socketRooms(this.id) || /* @__PURE__ */ new Set();
    }
    /**
     * Adds a listener that will be fired when any event is received. The event name is passed as the first argument to
     * the callback.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.onAny((event, ...args) => {
     *     console.log(`got event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    onAny(n) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.push(n), this;
    }
    /**
     * Adds a listener that will be fired when any event is received. The event name is passed as the first argument to
     * the callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     */
    prependAny(n) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(n), this;
    }
    /**
     * Removes the listener that will be fired when any event is received.
     *
     * @example
     * io.on("connection", (socket) => {
     *   const catchAllListener = (event, ...args) => {
     *     console.log(`got event ${event}`);
     *   }
     *
     *   socket.onAny(catchAllListener);
     *
     *   // remove a specific listener
     *   socket.offAny(catchAllListener);
     *
     *   // or remove all listeners
     *   socket.offAny();
     * });
     *
     * @param listener
     */
    offAny(n) {
      if (!this._anyListeners)
        return this;
      if (n) {
        const o = this._anyListeners;
        for (let s = 0; s < o.length; s++)
          if (n === o[s])
            return o.splice(s, 1), this;
      } else
        this._anyListeners = [];
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is sent. The event name is passed as the first argument to
     * the callback.
     *
     * Note: acknowledgements sent to the client are not included.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.onAnyOutgoing((event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    onAnyOutgoing(n) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(n), this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.prependAnyOutgoing((event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(n) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(n), this;
    }
    /**
     * Removes the listener that will be fired when any event is sent.
     *
     * @example
     * io.on("connection", (socket) => {
     *   const catchAllListener = (event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   }
     *
     *   socket.onAnyOutgoing(catchAllListener);
     *
     *   // remove a specific listener
     *   socket.offAnyOutgoing(catchAllListener);
     *
     *   // or remove all listeners
     *   socket.offAnyOutgoing();
     * });
     *
     * @param listener - the catch-all listener
     */
    offAnyOutgoing(n) {
      if (!this._anyOutgoingListeners)
        return this;
      if (n) {
        const o = this._anyOutgoingListeners;
        for (let s = 0; s < o.length; s++)
          if (n === o[s])
            return o.splice(s, 1), this;
      } else
        this._anyOutgoingListeners = [];
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent (emit or broadcast)
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(n) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const o = this._anyOutgoingListeners.slice();
        for (const s of o)
          s.apply(this, n.data);
      }
    }
    newBroadcastOperator() {
      const n = Object.assign({}, this.flags);
      return this.flags = {}, new d.BroadcastOperator(this.adapter, /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set([this.id]), n);
    }
  }
  return Y.Socket = a, Y;
}
var tn;
function jn() {
  return tn || (tn = 1, function(m) {
    var h = fe && fe.__importDefault || function(t) {
      return t && t.__esModule ? t : { default: t };
    };
    Object.defineProperty(m, "__esModule", { value: !0 }), m.Namespace = m.RESERVED_EVENTS = void 0;
    const b = Rn(), p = ti(), v = h(ie()), d = Fn(), c = (0, v.default)("socket.io:namespace");
    m.RESERVED_EVENTS = /* @__PURE__ */ new Set(["connect", "connection", "new_namespace"]);
    class l extends p.StrictEventEmitter {
      /**
       * Namespace constructor.
       *
       * @param server instance
       * @param name
       */
      constructor(i, a) {
        super(), this.sockets = /* @__PURE__ */ new Map(), this._preConnectSockets = /* @__PURE__ */ new Map(), this._fns = [], this._ids = 0, this.server = i, this.name = a, this._initAdapter();
      }
      /**
       * Initializes the `Adapter` for this nsp.
       * Run upon changing adapter by `Server#adapter`
       * in addition to the constructor.
       *
       * @private
       */
      _initAdapter() {
        this.adapter = new (this.server.adapter())(this);
      }
      /**
       * Registers a middleware, which is a function that gets executed for every incoming {@link Socket}.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * myNamespace.use((socket, next) => {
       *   // ...
       *   next();
       * });
       *
       * @param fn - the middleware function
       */
      use(i) {
        return this._fns.push(i), this;
      }
      /**
       * Executes the middleware for an incoming client.
       *
       * @param socket - the socket that will get added
       * @param fn - last fn call in the middleware
       * @private
       */
      run(i, a) {
        if (!this._fns.length)
          return a();
        const e = this._fns.slice(0);
        function n(o) {
          e[o](i, (s) => {
            if (s)
              return a(s);
            if (!e[o + 1])
              return a();
            n(o + 1);
          });
        }
        n(0);
      }
      /**
       * Targets a room when emitting.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // the “foo” event will be broadcast to all connected clients in the “room-101” room
       * myNamespace.to("room-101").emit("foo", "bar");
       *
       * // with an array of rooms (a client will be notified at most once)
       * myNamespace.to(["room-101", "room-102"]).emit("foo", "bar");
       *
       * // with multiple chained calls
       * myNamespace.to("room-101").to("room-102").emit("foo", "bar");
       *
       * @param room - a room, or an array of rooms
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      to(i) {
        return new d.BroadcastOperator(this.adapter).to(i);
      }
      /**
       * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // disconnect all clients in the "room-101" room
       * myNamespace.in("room-101").disconnectSockets();
       *
       * @param room - a room, or an array of rooms
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      in(i) {
        return new d.BroadcastOperator(this.adapter).in(i);
      }
      /**
       * Excludes a room when emitting.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
       * myNamespace.except("room-101").emit("foo", "bar");
       *
       * // with an array of rooms
       * myNamespace.except(["room-101", "room-102"]).emit("foo", "bar");
       *
       * // with multiple chained calls
       * myNamespace.except("room-101").except("room-102").emit("foo", "bar");
       *
       * @param room - a room, or an array of rooms
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      except(i) {
        return new d.BroadcastOperator(this.adapter).except(i);
      }
      /**
       * Adds a new client.
       *
       * @return {Socket}
       * @private
       */
      async _add(i, a, e) {
        var n;
        c("adding socket to nsp %s", this.name);
        const o = await this._createSocket(i, a);
        if (this._preConnectSockets.set(o.id, o), // @ts-ignore
        !((n = this.server.opts.connectionStateRecovery) === null || n === void 0) && n.skipMiddlewares && o.recovered && i.conn.readyState === "open")
          return this._doConnect(o, e);
        this.run(o, (s) => {
          process.nextTick(() => {
            if (i.conn.readyState !== "open") {
              c("next called after client was closed - ignoring socket"), o._cleanup();
              return;
            }
            if (s)
              return c("middleware error, sending CONNECT_ERROR packet to the client"), o._cleanup(), i.conn.protocol === 3 ? o._error(s.data || s.message) : o._error({
                message: s.message,
                data: s.data
              });
            this._doConnect(o, e);
          });
        });
      }
      async _createSocket(i, a) {
        const e = a.pid, n = a.offset;
        if (
          // @ts-ignore
          this.server.opts.connectionStateRecovery && typeof e == "string" && typeof n == "string"
        ) {
          let o;
          try {
            o = await this.adapter.restoreSession(e, n);
          } catch (s) {
            c("error while restoring session: %s", s);
          }
          if (o)
            return c("connection state recovered for sid %s", o.sid), new b.Socket(this, i, a, o);
        }
        return new b.Socket(this, i, a);
      }
      _doConnect(i, a) {
        this._preConnectSockets.delete(i.id), this.sockets.set(i.id, i), i._onconnect(), a && a(i), this.emitReserved("connect", i), this.emitReserved("connection", i);
      }
      /**
       * Removes a client. Called by each `Socket`.
       *
       * @private
       */
      _remove(i) {
        this.sockets.delete(i.id) || this._preConnectSockets.delete(i.id);
      }
      /**
       * Emits to all connected clients.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * myNamespace.emit("hello", "world");
       *
       * // all serializable datastructures are supported (no need to call JSON.stringify)
       * myNamespace.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
       *
       * // with an acknowledgement from the clients
       * myNamespace.timeout(1000).emit("some-event", (err, responses) => {
       *   if (err) {
       *     // some clients did not acknowledge the event in the given delay
       *   } else {
       *     console.log(responses); // one response per client
       *   }
       * });
       *
       * @return Always true
       */
      emit(i, ...a) {
        return new d.BroadcastOperator(this.adapter).emit(i, ...a);
      }
      /**
       * Sends a `message` event to all clients.
       *
       * This method mimics the WebSocket.send() method.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * myNamespace.send("hello");
       *
       * // this is equivalent to
       * myNamespace.emit("message", "hello");
       *
       * @return self
       */
      send(...i) {
        return this.emit("message", ...i), this;
      }
      /**
       * Sends a `message` event to all clients. Sends a `message` event. Alias of {@link send}.
       *
       * @return self
       */
      write(...i) {
        return this.emit("message", ...i), this;
      }
      /**
       * Sends a message to the other Socket.IO servers of the cluster.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * myNamespace.serverSideEmit("hello", "world");
       *
       * myNamespace.on("hello", (arg1) => {
       *   console.log(arg1); // prints "world"
       * });
       *
       * // acknowledgements (without binary content) are supported too:
       * myNamespace.serverSideEmit("ping", (err, responses) => {
       *  if (err) {
       *     // some servers did not acknowledge the event in the given delay
       *   } else {
       *     console.log(responses); // one response per server (except the current one)
       *   }
       * });
       *
       * myNamespace.on("ping", (cb) => {
       *   cb("pong");
       * });
       *
       * @param ev - the event name
       * @param args - an array of arguments, which may include an acknowledgement callback at the end
       */
      serverSideEmit(i, ...a) {
        if (m.RESERVED_EVENTS.has(i))
          throw new Error(`"${String(i)}" is a reserved event name`);
        return a.unshift(i), this.adapter.serverSideEmit(a), !0;
      }
      /**
       * Sends a message and expect an acknowledgement from the other Socket.IO servers of the cluster.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * try {
       *   const responses = await myNamespace.serverSideEmitWithAck("ping");
       *   console.log(responses); // one response per server (except the current one)
       * } catch (e) {
       *   // some servers did not acknowledge the event in the given delay
       * }
       *
       * @param ev - the event name
       * @param args - an array of arguments
       *
       * @return a Promise that will be fulfilled when all servers have acknowledged the event
       */
      serverSideEmitWithAck(i, ...a) {
        return new Promise((e, n) => {
          a.push((o, s) => o ? (o.responses = s, n(o)) : e(s)), this.serverSideEmit(i, ...a);
        });
      }
      /**
       * Called when a packet is received from another Socket.IO server
       *
       * @param args - an array of arguments, which may include an acknowledgement callback at the end
       *
       * @private
       */
      _onServerSideEmit(i) {
        super.emitUntyped.apply(this, i);
      }
      /**
       * Gets a list of clients.
       *
       * @deprecated this method will be removed in the next major release, please use {@link Namespace#serverSideEmit} or
       * {@link Namespace#fetchSockets} instead.
       */
      allSockets() {
        return new d.BroadcastOperator(this.adapter).allSockets();
      }
      /**
       * Sets the compress flag.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * myNamespace.compress(false).emit("hello");
       *
       * @param compress - if `true`, compresses the sending data
       * @return self
       */
      compress(i) {
        return new d.BroadcastOperator(this.adapter).compress(i);
      }
      /**
       * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
       * receive messages (because of network slowness or other issues, or because they’re connected through long polling
       * and is in the middle of a request-response cycle).
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * myNamespace.volatile.emit("hello"); // the clients may or may not receive it
       *
       * @return self
       */
      get volatile() {
        return new d.BroadcastOperator(this.adapter).volatile;
      }
      /**
       * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // the “foo” event will be broadcast to all connected clients on this node
       * myNamespace.local.emit("foo", "bar");
       *
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      get local() {
        return new d.BroadcastOperator(this.adapter).local;
      }
      /**
       * Adds a timeout in milliseconds for the next operation.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * myNamespace.timeout(1000).emit("some-event", (err, responses) => {
       *   if (err) {
       *     // some clients did not acknowledge the event in the given delay
       *   } else {
       *     console.log(responses); // one response per client
       *   }
       * });
       *
       * @param timeout
       */
      timeout(i) {
        return new d.BroadcastOperator(this.adapter).timeout(i);
      }
      /**
       * Returns the matching socket instances.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // return all Socket instances
       * const sockets = await myNamespace.fetchSockets();
       *
       * // return all Socket instances in the "room1" room
       * const sockets = await myNamespace.in("room1").fetchSockets();
       *
       * for (const socket of sockets) {
       *   console.log(socket.id);
       *   console.log(socket.handshake);
       *   console.log(socket.rooms);
       *   console.log(socket.data);
       *
       *   socket.emit("hello");
       *   socket.join("room1");
       *   socket.leave("room2");
       *   socket.disconnect();
       * }
       */
      fetchSockets() {
        return new d.BroadcastOperator(this.adapter).fetchSockets();
      }
      /**
       * Makes the matching socket instances join the specified rooms.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // make all socket instances join the "room1" room
       * myNamespace.socketsJoin("room1");
       *
       * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
       * myNamespace.in("room1").socketsJoin(["room2", "room3"]);
       *
       * @param room - a room, or an array of rooms
       */
      socketsJoin(i) {
        return new d.BroadcastOperator(this.adapter).socketsJoin(i);
      }
      /**
       * Makes the matching socket instances leave the specified rooms.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // make all socket instances leave the "room1" room
       * myNamespace.socketsLeave("room1");
       *
       * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
       * myNamespace.in("room1").socketsLeave(["room2", "room3"]);
       *
       * @param room - a room, or an array of rooms
       */
      socketsLeave(i) {
        return new d.BroadcastOperator(this.adapter).socketsLeave(i);
      }
      /**
       * Makes the matching socket instances disconnect.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       * const myNamespace = io.of("/my-namespace");
       *
       * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
       * myNamespace.disconnectSockets();
       *
       * // make all socket instances in the "room1" room disconnect and close the underlying connections
       * myNamespace.in("room1").disconnectSockets(true);
       *
       * @param close - whether to close the underlying connection
       */
      disconnectSockets(i = !1) {
        return new d.BroadcastOperator(this.adapter).disconnectSockets(i);
      }
    }
    m.Namespace = l;
  }(fe)), fe;
}
var G = {}, Ze = {}, X = {}, z = {}, on;
function Ca() {
  if (on) return z;
  on = 1, Object.defineProperty(z, "__esModule", { value: !0 }), z.yeast = z.decode = z.encode = void 0;
  const m = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), h = 64, b = {};
  let p = 0, v = 0, d;
  function c(i) {
    let a = "";
    do
      a = m[i % h] + a, i = Math.floor(i / h);
    while (i > 0);
    return a;
  }
  z.encode = c;
  function l(i) {
    let a = 0;
    for (v = 0; v < i.length; v++)
      a = a * h + b[i.charAt(v)];
    return a;
  }
  z.decode = l;
  function t() {
    const i = c(+/* @__PURE__ */ new Date());
    return i !== d ? (p = 0, d = i) : i + "." + c(p++);
  }
  for (z.yeast = t; v < h; v++)
    b[m[v]] = v;
  return z;
}
var ei, rn;
function ka() {
  return rn || (rn = 1, ei = function() {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  }), ei;
}
var cn;
function On() {
  if (cn) return X;
  cn = 1;
  var m;
  Object.defineProperty(X, "__esModule", { value: !0 }), X.SessionAwareAdapter = X.Adapter = void 0;
  const h = B, b = Ca(), p = ka(), v = typeof ((m = p == null ? void 0 : p.Sender) === null || m === void 0 ? void 0 : m.frame) == "function";
  class d extends h.EventEmitter {
    /**
     * In-memory adapter constructor.
     *
     * @param {Namespace} nsp
     */
    constructor(i) {
      super(), this.nsp = i, this.rooms = /* @__PURE__ */ new Map(), this.sids = /* @__PURE__ */ new Map(), this.encoder = i.server.encoder;
    }
    /**
     * To be overridden
     */
    init() {
    }
    /**
     * To be overridden
     */
    close() {
    }
    /**
     * Returns the number of Socket.IO servers in the cluster
     *
     * @public
     */
    serverCount() {
      return Promise.resolve(1);
    }
    /**
     * Adds a socket to a list of room.
     *
     * @param {SocketId}  id      the socket id
     * @param {Set<Room>} rooms   a set of rooms
     * @public
     */
    addAll(i, a) {
      this.sids.has(i) || this.sids.set(i, /* @__PURE__ */ new Set());
      for (const e of a)
        this.sids.get(i).add(e), this.rooms.has(e) || (this.rooms.set(e, /* @__PURE__ */ new Set()), this.emit("create-room", e)), this.rooms.get(e).has(i) || (this.rooms.get(e).add(i), this.emit("join-room", e, i));
    }
    /**
     * Removes a socket from a room.
     *
     * @param {SocketId} id     the socket id
     * @param {Room}     room   the room name
     */
    del(i, a) {
      this.sids.has(i) && this.sids.get(i).delete(a), this._del(a, i);
    }
    _del(i, a) {
      const e = this.rooms.get(i);
      e != null && (e.delete(a) && this.emit("leave-room", i, a), e.size === 0 && this.rooms.delete(i) && this.emit("delete-room", i));
    }
    /**
     * Removes a socket from all rooms it's joined.
     *
     * @param {SocketId} id   the socket id
     */
    delAll(i) {
      if (this.sids.has(i)) {
        for (const a of this.sids.get(i))
          this._del(a, i);
        this.sids.delete(i);
      }
    }
    /**
     * Broadcasts a packet.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @public
     */
    broadcast(i, a) {
      const e = a.flags || {}, n = {
        preEncoded: !0,
        volatile: e.volatile,
        compress: e.compress
      };
      i.nsp = this.nsp.name;
      const o = this._encode(i, n);
      this.apply(a, (s) => {
        typeof s.notifyOutgoingListeners == "function" && s.notifyOutgoingListeners(i), s.client.writeToEngine(o, n);
      });
    }
    /**
     * Broadcasts a packet and expects multiple acknowledgements.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @param clientCountCallback - the number of clients that received the packet
     * @param ack                 - the callback that will be called for each client response
     *
     * @public
     */
    broadcastWithAck(i, a, e, n) {
      const o = a.flags || {}, s = {
        preEncoded: !0,
        volatile: o.volatile,
        compress: o.compress
      };
      i.nsp = this.nsp.name, i.id = this.nsp._ids++;
      const r = this._encode(i, s);
      let u = 0;
      this.apply(a, (f) => {
        u++, f.acks.set(i.id, n), typeof f.notifyOutgoingListeners == "function" && f.notifyOutgoingListeners(i), f.client.writeToEngine(r, s);
      }), e(u);
    }
    _encode(i, a) {
      const e = this.encoder.encode(i);
      if (v && e.length === 1 && typeof e[0] == "string") {
        const n = Buffer.from("4" + e[0]);
        a.wsPreEncodedFrame = p.Sender.frame(n, {
          readOnly: !1,
          mask: !1,
          rsv1: !1,
          opcode: 1,
          fin: !0
        });
      }
      return e;
    }
    /**
     * Gets a list of sockets by sid.
     *
     * @param {Set<Room>} rooms   the explicit set of rooms to check.
     */
    sockets(i) {
      const a = /* @__PURE__ */ new Set();
      return this.apply({ rooms: i }, (e) => {
        a.add(e.id);
      }), Promise.resolve(a);
    }
    /**
     * Gets the list of rooms a given socket has joined.
     *
     * @param {SocketId} id   the socket id
     */
    socketRooms(i) {
      return this.sids.get(i);
    }
    /**
     * Returns the matching socket instances
     *
     * @param opts - the filters to apply
     */
    fetchSockets(i) {
      const a = [];
      return this.apply(i, (e) => {
        a.push(e);
      }), Promise.resolve(a);
    }
    /**
     * Makes the matching socket instances join the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to join
     */
    addSockets(i, a) {
      this.apply(i, (e) => {
        e.join(a);
      });
    }
    /**
     * Makes the matching socket instances leave the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to leave
     */
    delSockets(i, a) {
      this.apply(i, (e) => {
        a.forEach((n) => e.leave(n));
      });
    }
    /**
     * Makes the matching socket instances disconnect
     *
     * @param opts - the filters to apply
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(i, a) {
      this.apply(i, (e) => {
        e.disconnect(a);
      });
    }
    apply(i, a) {
      const e = i.rooms, n = this.computeExceptSids(i.except);
      if (e.size) {
        const o = /* @__PURE__ */ new Set();
        for (const s of e)
          if (this.rooms.has(s))
            for (const r of this.rooms.get(s)) {
              if (o.has(r) || n.has(r))
                continue;
              const u = this.nsp.sockets.get(r);
              u && (a(u), o.add(r));
            }
      } else
        for (const [o] of this.sids) {
          if (n.has(o))
            continue;
          const s = this.nsp.sockets.get(o);
          s && a(s);
        }
    }
    computeExceptSids(i) {
      const a = /* @__PURE__ */ new Set();
      if (i && i.size > 0)
        for (const e of i)
          this.rooms.has(e) && this.rooms.get(e).forEach((n) => a.add(n));
      return a;
    }
    /**
     * Send a packet to the other Socket.IO servers in the cluster
     * @param packet - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit(i) {
      console.warn("this adapter does not support the serverSideEmit() functionality");
    }
    /**
     * Save the client session in order to restore it upon reconnection.
     */
    persistSession(i) {
    }
    /**
     * Restore the session and find the packets that were missed by the client.
     * @param pid
     * @param offset
     */
    restoreSession(i, a) {
      return null;
    }
  }
  X.Adapter = d;
  class c extends d {
    constructor(i) {
      super(i), this.nsp = i, this.sessions = /* @__PURE__ */ new Map(), this.packets = [], this.maxDisconnectionDuration = i.server.opts.connectionStateRecovery.maxDisconnectionDuration, setInterval(() => {
        const e = Date.now() - this.maxDisconnectionDuration;
        this.sessions.forEach((n, o) => {
          n.disconnectedAt < e && this.sessions.delete(o);
        });
        for (let n = this.packets.length - 1; n >= 0; n--)
          if (this.packets[n].emittedAt < e) {
            this.packets.splice(0, n + 1);
            break;
          }
      }, 60 * 1e3).unref();
    }
    persistSession(i) {
      i.disconnectedAt = Date.now(), this.sessions.set(i.pid, i);
    }
    restoreSession(i, a) {
      const e = this.sessions.get(i);
      if (!e)
        return null;
      if (e.disconnectedAt + this.maxDisconnectionDuration < Date.now())
        return this.sessions.delete(i), null;
      const o = this.packets.findIndex((r) => r.id === a);
      if (o === -1)
        return null;
      const s = [];
      for (let r = o + 1; r < this.packets.length; r++) {
        const u = this.packets[r];
        l(e.rooms, u.opts) && s.push(u.data);
      }
      return Promise.resolve(Object.assign(Object.assign({}, e), { missedPackets: s }));
    }
    broadcast(i, a) {
      var e;
      const n = i.type === 2, o = i.id === void 0, s = ((e = a.flags) === null || e === void 0 ? void 0 : e.volatile) === void 0;
      if (n && o && s) {
        const r = (0, b.yeast)();
        i.data.push(r), this.packets.push({
          id: r,
          opts: a,
          data: i.data,
          emittedAt: Date.now()
        });
      }
      super.broadcast(i, a);
    }
  }
  X.SessionAwareAdapter = c;
  function l(t, i) {
    const a = i.rooms.size === 0 || t.some((n) => i.rooms.has(n)), e = t.every((n) => !i.except.has(n));
    return a && e;
  }
  return X;
}
var xe = {}, je = { exports: {} }, ii, pn;
function _a() {
  if (pn) return ii;
  pn = 1;
  var m = 1e3, h = m * 60, b = h * 60, p = b * 24, v = p * 7, d = p * 365.25;
  ii = function(a, e) {
    e = e || {};
    var n = typeof a;
    if (n === "string" && a.length > 0)
      return c(a);
    if (n === "number" && isFinite(a))
      return e.long ? t(a) : l(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function c(a) {
    if (a = String(a), !(a.length > 100)) {
      var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (e) {
        var n = parseFloat(e[1]), o = (e[2] || "ms").toLowerCase();
        switch (o) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * d;
          case "weeks":
          case "week":
          case "w":
            return n * v;
          case "days":
          case "day":
          case "d":
            return n * p;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * b;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * h;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * m;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return;
        }
      }
    }
  }
  function l(a) {
    var e = Math.abs(a);
    return e >= p ? Math.round(a / p) + "d" : e >= b ? Math.round(a / b) + "h" : e >= h ? Math.round(a / h) + "m" : e >= m ? Math.round(a / m) + "s" : a + "ms";
  }
  function t(a) {
    var e = Math.abs(a);
    return e >= p ? i(a, e, p, "day") : e >= b ? i(a, e, b, "hour") : e >= h ? i(a, e, h, "minute") : e >= m ? i(a, e, m, "second") : a + " ms";
  }
  function i(a, e, n, o) {
    var s = e >= n * 1.5;
    return Math.round(a / n) + " " + o + (s ? "s" : "");
  }
  return ii;
}
var ni, ln;
function Ea() {
  if (ln) return ni;
  ln = 1;
  function m(h) {
    p.debug = p, p.default = p, p.coerce = i, p.disable = c, p.enable = d, p.enabled = l, p.humanize = _a(), p.destroy = a, Object.keys(h).forEach((e) => {
      p[e] = h[e];
    }), p.names = [], p.skips = [], p.formatters = {};
    function b(e) {
      let n = 0;
      for (let o = 0; o < e.length; o++)
        n = (n << 5) - n + e.charCodeAt(o), n |= 0;
      return p.colors[Math.abs(n) % p.colors.length];
    }
    p.selectColor = b;
    function p(e) {
      let n, o = null, s, r;
      function u(...f) {
        if (!u.enabled)
          return;
        const g = u, k = Number(/* @__PURE__ */ new Date()), T = k - (n || k);
        g.diff = T, g.prev = n, g.curr = k, n = k, f[0] = p.coerce(f[0]), typeof f[0] != "string" && f.unshift("%O");
        let E = 0;
        f[0] = f[0].replace(/%([a-zA-Z%])/g, (w, C) => {
          if (w === "%%")
            return "%";
          E++;
          const _ = p.formatters[C];
          if (typeof _ == "function") {
            const F = f[E];
            w = _.call(g, F), f.splice(E, 1), E--;
          }
          return w;
        }), p.formatArgs.call(g, f), (g.log || p.log).apply(g, f);
      }
      return u.namespace = e, u.useColors = p.useColors(), u.color = p.selectColor(e), u.extend = v, u.destroy = p.destroy, Object.defineProperty(u, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => o !== null ? o : (s !== p.namespaces && (s = p.namespaces, r = p.enabled(e)), r),
        set: (f) => {
          o = f;
        }
      }), typeof p.init == "function" && p.init(u), u;
    }
    function v(e, n) {
      const o = p(this.namespace + (typeof n > "u" ? ":" : n) + e);
      return o.log = this.log, o;
    }
    function d(e) {
      p.save(e), p.namespaces = e, p.names = [], p.skips = [];
      let n;
      const o = (typeof e == "string" ? e : "").split(/[\s,]+/), s = o.length;
      for (n = 0; n < s; n++)
        o[n] && (e = o[n].replace(/\*/g, ".*?"), e[0] === "-" ? p.skips.push(new RegExp("^" + e.slice(1) + "$")) : p.names.push(new RegExp("^" + e + "$")));
    }
    function c() {
      const e = [
        ...p.names.map(t),
        ...p.skips.map(t).map((n) => "-" + n)
      ].join(",");
      return p.enable(""), e;
    }
    function l(e) {
      if (e[e.length - 1] === "*")
        return !0;
      let n, o;
      for (n = 0, o = p.skips.length; n < o; n++)
        if (p.skips[n].test(e))
          return !1;
      for (n = 0, o = p.names.length; n < o; n++)
        if (p.names[n].test(e))
          return !0;
      return !1;
    }
    function t(e) {
      return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function i(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }
    function a() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return p.enable(p.load()), p;
  }
  return ni = m, ni;
}
var un;
function Sa() {
  return un || (un = 1, function(m, h) {
    h.formatArgs = p, h.save = v, h.load = d, h.useColors = b, h.storage = c(), h.destroy = /* @__PURE__ */ (() => {
      let t = !1;
      return () => {
        t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), h.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function b() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let t;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function p(t) {
      if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + m.exports.humanize(this.diff), !this.useColors)
        return;
      const i = "color: " + this.color;
      t.splice(1, 0, i, "color: inherit");
      let a = 0, e = 0;
      t[0].replace(/%[a-zA-Z%]/g, (n) => {
        n !== "%%" && (a++, n === "%c" && (e = a));
      }), t.splice(e, 0, i);
    }
    h.log = console.debug || console.log || (() => {
    });
    function v(t) {
      try {
        t ? h.storage.setItem("debug", t) : h.storage.removeItem("debug");
      } catch {
      }
    }
    function d() {
      let t;
      try {
        t = h.storage.getItem("debug");
      } catch {
      }
      return !t && typeof process < "u" && "env" in process && (t = process.env.DEBUG), t;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    m.exports = Ea()(h);
    const { formatters: l } = m.exports;
    l.j = function(t) {
      try {
        return JSON.stringify(t);
      } catch (i) {
        return "[UnexpectedJSONParseError]: " + i.message;
      }
    };
  }(je, je.exports)), je.exports;
}
var dn;
function Aa() {
  return dn || (dn = 1, function(m) {
    var h = xe && xe.__rest || function(s, r) {
      var u = {};
      for (var f in s) Object.prototype.hasOwnProperty.call(s, f) && r.indexOf(f) < 0 && (u[f] = s[f]);
      if (s != null && typeof Object.getOwnPropertySymbols == "function")
        for (var g = 0, f = Object.getOwnPropertySymbols(s); g < f.length; g++)
          r.indexOf(f[g]) < 0 && Object.prototype.propertyIsEnumerable.call(s, f[g]) && (u[f[g]] = s[f[g]]);
      return u;
    };
    Object.defineProperty(m, "__esModule", { value: !0 }), m.ClusterAdapterWithHeartbeat = m.ClusterAdapter = m.MessageType = void 0;
    const b = On(), p = Sa(), v = B, d = (0, p.debug)("socket.io-adapter"), c = "emitter", l = 5e3;
    function t() {
      return (0, v.randomBytes)(8).toString("hex");
    }
    var i;
    (function(s) {
      s[s.INITIAL_HEARTBEAT = 1] = "INITIAL_HEARTBEAT", s[s.HEARTBEAT = 2] = "HEARTBEAT", s[s.BROADCAST = 3] = "BROADCAST", s[s.SOCKETS_JOIN = 4] = "SOCKETS_JOIN", s[s.SOCKETS_LEAVE = 5] = "SOCKETS_LEAVE", s[s.DISCONNECT_SOCKETS = 6] = "DISCONNECT_SOCKETS", s[s.FETCH_SOCKETS = 7] = "FETCH_SOCKETS", s[s.FETCH_SOCKETS_RESPONSE = 8] = "FETCH_SOCKETS_RESPONSE", s[s.SERVER_SIDE_EMIT = 9] = "SERVER_SIDE_EMIT", s[s.SERVER_SIDE_EMIT_RESPONSE = 10] = "SERVER_SIDE_EMIT_RESPONSE", s[s.BROADCAST_CLIENT_COUNT = 11] = "BROADCAST_CLIENT_COUNT", s[s.BROADCAST_ACK = 12] = "BROADCAST_ACK", s[s.ADAPTER_CLOSE = 13] = "ADAPTER_CLOSE";
    })(i = m.MessageType || (m.MessageType = {}));
    function a(s) {
      return {
        rooms: [...s.rooms],
        except: [...s.except],
        flags: s.flags
      };
    }
    function e(s) {
      return {
        rooms: new Set(s.rooms),
        except: new Set(s.except),
        flags: s.flags
      };
    }
    class n extends b.Adapter {
      constructor(r) {
        super(r), this.requests = /* @__PURE__ */ new Map(), this.ackRequests = /* @__PURE__ */ new Map(), this.uid = t();
      }
      /**
       * Called when receiving a message from another member of the cluster.
       *
       * @param message
       * @param offset
       * @protected
       */
      onMessage(r, u) {
        if (r.uid === this.uid)
          return d("[%s] ignore message from self", this.uid);
        switch (d("[%s] new event of type %d from %s", this.uid, r.type, r.uid), r.type) {
          case i.BROADCAST: {
            if (r.data.requestId !== void 0)
              super.broadcastWithAck(r.data.packet, e(r.data.opts), (g) => {
                d("[%s] waiting for %d client acknowledgements", this.uid, g), this.publishResponse(r.uid, {
                  type: i.BROADCAST_CLIENT_COUNT,
                  data: {
                    requestId: r.data.requestId,
                    clientCount: g
                  }
                });
              }, (g) => {
                d("[%s] received acknowledgement with value %j", this.uid, g), this.publishResponse(r.uid, {
                  type: i.BROADCAST_ACK,
                  data: {
                    requestId: r.data.requestId,
                    packet: g
                  }
                });
              });
            else {
              const g = r.data.packet, k = e(r.data.opts);
              this.addOffsetIfNecessary(g, k, u), super.broadcast(g, k);
            }
            break;
          }
          case i.SOCKETS_JOIN:
            super.addSockets(e(r.data.opts), r.data.rooms);
            break;
          case i.SOCKETS_LEAVE:
            super.delSockets(e(r.data.opts), r.data.rooms);
            break;
          case i.DISCONNECT_SOCKETS:
            super.disconnectSockets(e(r.data.opts), r.data.close);
            break;
          case i.FETCH_SOCKETS: {
            d("[%s] calling fetchSockets with opts %j", this.uid, r.data.opts), super.fetchSockets(e(r.data.opts)).then((f) => {
              this.publishResponse(r.uid, {
                type: i.FETCH_SOCKETS_RESPONSE,
                data: {
                  requestId: r.data.requestId,
                  sockets: f.map((g) => {
                    const k = g.handshake, { sessionStore: T } = k, E = h(k, ["sessionStore"]);
                    return {
                      id: g.id,
                      handshake: E,
                      rooms: [...g.rooms],
                      data: g.data
                    };
                  })
                }
              });
            });
            break;
          }
          case i.SERVER_SIDE_EMIT: {
            const f = r.data.packet;
            if (!(r.data.requestId !== void 0)) {
              this.nsp._onServerSideEmit(f);
              return;
            }
            let k = !1;
            const T = (E) => {
              k || (k = !0, d("[%s] calling acknowledgement with %j", this.uid, E), this.publishResponse(r.uid, {
                type: i.SERVER_SIDE_EMIT_RESPONSE,
                data: {
                  requestId: r.data.requestId,
                  packet: E
                }
              }));
            };
            this.nsp._onServerSideEmit([...f, T]);
            break;
          }
          // @ts-ignore
          case i.BROADCAST_CLIENT_COUNT:
          // @ts-ignore
          case i.BROADCAST_ACK:
          // @ts-ignore
          case i.FETCH_SOCKETS_RESPONSE:
          // @ts-ignore
          case i.SERVER_SIDE_EMIT_RESPONSE:
            this.onResponse(r);
            break;
          default:
            d("[%s] unknown message type: %s", this.uid, r.type);
        }
      }
      /**
       * Called when receiving a response from another member of the cluster.
       *
       * @param response
       * @protected
       */
      onResponse(r) {
        var u, f;
        const g = r.data.requestId;
        switch (d("[%s] received response %s to request %s", this.uid, r.type, g), r.type) {
          case i.BROADCAST_CLIENT_COUNT: {
            (u = this.ackRequests.get(g)) === null || u === void 0 || u.clientCountCallback(r.data.clientCount);
            break;
          }
          case i.BROADCAST_ACK: {
            (f = this.ackRequests.get(g)) === null || f === void 0 || f.ack(r.data.packet);
            break;
          }
          case i.FETCH_SOCKETS_RESPONSE: {
            const k = this.requests.get(g);
            if (!k)
              return;
            k.current++, r.data.sockets.forEach((T) => k.responses.push(T)), k.current === k.expected && (clearTimeout(k.timeout), k.resolve(k.responses), this.requests.delete(g));
            break;
          }
          case i.SERVER_SIDE_EMIT_RESPONSE: {
            const k = this.requests.get(g);
            if (!k)
              return;
            k.current++, k.responses.push(r.data.packet), k.current === k.expected && (clearTimeout(k.timeout), k.resolve(null, k.responses), this.requests.delete(g));
            break;
          }
          default:
            d("[%s] unknown response type: %s", this.uid, r.type);
        }
      }
      async broadcast(r, u) {
        var f;
        if (!((f = u.flags) === null || f === void 0 ? void 0 : f.local))
          try {
            const k = await this.publishAndReturnOffset({
              type: i.BROADCAST,
              data: {
                packet: r,
                opts: a(u)
              }
            });
            this.addOffsetIfNecessary(r, u, k);
          } catch (k) {
            return d("[%s] error while broadcasting message: %s", this.uid, k.message);
          }
        super.broadcast(r, u);
      }
      /**
       * Adds an offset at the end of the data array in order to allow the client to receive any missed packets when it
       * reconnects after a temporary disconnection.
       *
       * @param packet
       * @param opts
       * @param offset
       * @private
       */
      addOffsetIfNecessary(r, u, f) {
        var g;
        if (!this.nsp.server.opts.connectionStateRecovery)
          return;
        const k = r.type === 2, T = r.id === void 0, E = ((g = u.flags) === null || g === void 0 ? void 0 : g.volatile) === void 0;
        k && T && E && r.data.push(f);
      }
      broadcastWithAck(r, u, f, g) {
        var k;
        if (!((k = u == null ? void 0 : u.flags) === null || k === void 0 ? void 0 : k.local)) {
          const E = t();
          this.ackRequests.set(E, {
            clientCountCallback: f,
            ack: g
          }), this.publish({
            type: i.BROADCAST,
            data: {
              packet: r,
              requestId: E,
              opts: a(u)
            }
          }), setTimeout(() => {
            this.ackRequests.delete(E);
          }, u.flags.timeout);
        }
        super.broadcastWithAck(r, u, f, g);
      }
      async addSockets(r, u) {
        var f;
        if (!((f = r.flags) === null || f === void 0 ? void 0 : f.local))
          try {
            await this.publishAndReturnOffset({
              type: i.SOCKETS_JOIN,
              data: {
                opts: a(r),
                rooms: u
              }
            });
          } catch (k) {
            d("[%s] error while publishing message: %s", this.uid, k.message);
          }
        super.addSockets(r, u);
      }
      async delSockets(r, u) {
        var f;
        if (!((f = r.flags) === null || f === void 0 ? void 0 : f.local))
          try {
            await this.publishAndReturnOffset({
              type: i.SOCKETS_LEAVE,
              data: {
                opts: a(r),
                rooms: u
              }
            });
          } catch (k) {
            d("[%s] error while publishing message: %s", this.uid, k.message);
          }
        super.delSockets(r, u);
      }
      async disconnectSockets(r, u) {
        var f;
        if (!((f = r.flags) === null || f === void 0 ? void 0 : f.local))
          try {
            await this.publishAndReturnOffset({
              type: i.DISCONNECT_SOCKETS,
              data: {
                opts: a(r),
                close: u
              }
            });
          } catch (k) {
            d("[%s] error while publishing message: %s", this.uid, k.message);
          }
        super.disconnectSockets(r, u);
      }
      async fetchSockets(r) {
        var u;
        const [f, g] = await Promise.all([
          super.fetchSockets(r),
          this.serverCount()
        ]), k = g - 1;
        if (!((u = r.flags) === null || u === void 0) && u.local || k <= 0)
          return f;
        const T = t();
        return new Promise((E, x) => {
          const w = setTimeout(() => {
            const _ = this.requests.get(T);
            _ && (x(new Error(`timeout reached: only ${_.current} responses received out of ${_.expected}`)), this.requests.delete(T));
          }, r.flags.timeout || l), C = {
            type: i.FETCH_SOCKETS,
            resolve: E,
            timeout: w,
            current: 0,
            expected: k,
            responses: f
          };
          this.requests.set(T, C), this.publish({
            type: i.FETCH_SOCKETS,
            data: {
              opts: a(r),
              requestId: T
            }
          });
        });
      }
      async serverSideEmit(r) {
        if (!(typeof r[r.length - 1] == "function"))
          return this.publish({
            type: i.SERVER_SIDE_EMIT,
            data: {
              packet: r
            }
          });
        const f = r.pop(), g = await this.serverCount() - 1;
        if (d('[%s] waiting for %d responses to "serverSideEmit" request', this.uid, g), g <= 0)
          return f(null, []);
        const k = t(), T = setTimeout(() => {
          const x = this.requests.get(k);
          x && (f(new Error(`timeout reached: only ${x.current} responses received out of ${x.expected}`), x.responses), this.requests.delete(k));
        }, l), E = {
          type: i.SERVER_SIDE_EMIT,
          resolve: f,
          timeout: T,
          current: 0,
          expected: g,
          responses: []
        };
        this.requests.set(k, E), this.publish({
          type: i.SERVER_SIDE_EMIT,
          data: {
            requestId: k,
            packet: r
          }
        });
      }
      publish(r) {
        this.publishAndReturnOffset(r).catch((u) => {
          d("[%s] error while publishing message: %s", this.uid, u);
        });
      }
      publishAndReturnOffset(r) {
        return r.uid = this.uid, r.nsp = this.nsp.name, this.doPublish(r);
      }
      publishResponse(r, u) {
        u.uid = this.uid, u.nsp = this.nsp.name, this.doPublishResponse(r, u).catch((f) => {
          d("[%s] error while publishing response: %s", this.uid, f);
        });
      }
    }
    m.ClusterAdapter = n;
    class o extends n {
      constructor(r, u) {
        super(r), this.nodesMap = /* @__PURE__ */ new Map(), this.customRequests = /* @__PURE__ */ new Map(), this._opts = Object.assign({
          heartbeatInterval: 5e3,
          heartbeatTimeout: 1e4
        }, u), this.cleanupTimer = setInterval(() => {
          const f = Date.now();
          this.nodesMap.forEach((g, k) => {
            f - g > this._opts.heartbeatTimeout && (d("[%s] node %s seems down", this.uid, k), this.removeNode(k));
          });
        }, 1e3);
      }
      init() {
        this.publish({
          type: i.INITIAL_HEARTBEAT
        });
      }
      scheduleHeartbeat() {
        this.heartbeatTimer ? this.heartbeatTimer.refresh() : this.heartbeatTimer = setTimeout(() => {
          this.publish({
            type: i.HEARTBEAT
          });
        }, this._opts.heartbeatInterval);
      }
      close() {
        this.publish({
          type: i.ADAPTER_CLOSE
        }), clearTimeout(this.heartbeatTimer), this.cleanupTimer && clearInterval(this.cleanupTimer);
      }
      onMessage(r, u) {
        if (r.uid === this.uid)
          return d("[%s] ignore message from self", this.uid);
        switch (r.uid && r.uid !== c && this.nodesMap.set(r.uid, Date.now()), d("[%s] new event of type %d from %s", this.uid, r.type, r.uid), r.type) {
          case i.INITIAL_HEARTBEAT:
            this.publish({
              type: i.HEARTBEAT
            });
            break;
          case i.HEARTBEAT:
            break;
          case i.ADAPTER_CLOSE:
            this.removeNode(r.uid);
            break;
          default:
            super.onMessage(r, u);
        }
      }
      serverCount() {
        return Promise.resolve(1 + this.nodesMap.size);
      }
      publish(r) {
        return this.scheduleHeartbeat(), super.publish(r);
      }
      async serverSideEmit(r) {
        if (!(typeof r[r.length - 1] == "function"))
          return this.publish({
            type: i.SERVER_SIDE_EMIT,
            data: {
              packet: r
            }
          });
        const f = r.pop(), g = this.nodesMap.size;
        if (d('[%s] waiting for %d responses to "serverSideEmit" request', this.uid, g), g <= 0)
          return f(null, []);
        const k = t(), T = setTimeout(() => {
          const x = this.customRequests.get(k);
          x && (f(new Error(`timeout reached: missing ${x.missingUids.size} responses`), x.responses), this.customRequests.delete(k));
        }, l), E = {
          type: i.SERVER_SIDE_EMIT,
          resolve: f,
          timeout: T,
          missingUids: /* @__PURE__ */ new Set([...this.nodesMap.keys()]),
          responses: []
        };
        this.customRequests.set(k, E), this.publish({
          type: i.SERVER_SIDE_EMIT,
          data: {
            requestId: k,
            packet: r
          }
        });
      }
      async fetchSockets(r) {
        var u;
        const [f, g] = await Promise.all([
          super.fetchSockets({
            rooms: r.rooms,
            except: r.except,
            flags: {
              local: !0
            }
          }),
          this.serverCount()
        ]), k = g - 1;
        if (!((u = r.flags) === null || u === void 0) && u.local || k <= 0)
          return f;
        const T = t();
        return new Promise((E, x) => {
          const w = setTimeout(() => {
            const _ = this.customRequests.get(T);
            _ && (x(new Error(`timeout reached: missing ${_.missingUids.size} responses`)), this.customRequests.delete(T));
          }, r.flags.timeout || l), C = {
            type: i.FETCH_SOCKETS,
            resolve: E,
            timeout: w,
            missingUids: /* @__PURE__ */ new Set([...this.nodesMap.keys()]),
            responses: f
          };
          this.customRequests.set(T, C), this.publish({
            type: i.FETCH_SOCKETS,
            data: {
              opts: a(r),
              requestId: T
            }
          });
        });
      }
      onResponse(r) {
        const u = r.data.requestId;
        switch (d("[%s] received response %s to request %s", this.uid, r.type, u), r.type) {
          case i.FETCH_SOCKETS_RESPONSE: {
            const f = this.customRequests.get(u);
            if (!f)
              return;
            r.data.sockets.forEach((g) => f.responses.push(g)), f.missingUids.delete(r.uid), f.missingUids.size === 0 && (clearTimeout(f.timeout), f.resolve(f.responses), this.customRequests.delete(u));
            break;
          }
          case i.SERVER_SIDE_EMIT_RESPONSE: {
            const f = this.customRequests.get(u);
            if (!f)
              return;
            f.responses.push(r.data.packet), f.missingUids.delete(r.uid), f.missingUids.size === 0 && (clearTimeout(f.timeout), f.resolve(null, f.responses), this.customRequests.delete(u));
            break;
          }
          default:
            super.onResponse(r);
        }
      }
      removeNode(r) {
        this.customRequests.forEach((u, f) => {
          u.missingUids.delete(r), u.missingUids.size === 0 && (clearTimeout(u.timeout), u.type === i.FETCH_SOCKETS ? u.resolve(u.responses) : u.type === i.SERVER_SIDE_EMIT && u.resolve(null, u.responses), this.customRequests.delete(f));
        }), this.nodesMap.delete(r);
      }
    }
    m.ClusterAdapterWithHeartbeat = o;
  }(xe)), xe;
}
var mn;
function oi() {
  return mn || (mn = 1, function(m) {
    Object.defineProperty(m, "__esModule", { value: !0 }), m.MessageType = m.ClusterAdapterWithHeartbeat = m.ClusterAdapter = m.SessionAwareAdapter = m.Adapter = void 0;
    var h = On();
    Object.defineProperty(m, "Adapter", { enumerable: !0, get: function() {
      return h.Adapter;
    } }), Object.defineProperty(m, "SessionAwareAdapter", { enumerable: !0, get: function() {
      return h.SessionAwareAdapter;
    } });
    var b = Aa();
    Object.defineProperty(m, "ClusterAdapter", { enumerable: !0, get: function() {
      return b.ClusterAdapter;
    } }), Object.defineProperty(m, "ClusterAdapterWithHeartbeat", { enumerable: !0, get: function() {
      return b.ClusterAdapterWithHeartbeat;
    } }), Object.defineProperty(m, "MessageType", { enumerable: !0, get: function() {
      return b.MessageType;
    } });
  }(Ze)), Ze;
}
var fn;
function Ta() {
  if (fn) return G;
  fn = 1;
  var m = G && G.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(G, "__esModule", { value: !0 }), G.ParentNamespace = void 0;
  const h = jn(), b = oi(), v = (0, m(ie()).default)("socket.io:parent-namespace");
  class d extends h.Namespace {
    constructor(t) {
      super(t, "/_" + d.count++), this.children = /* @__PURE__ */ new Set();
    }
    /**
     * @private
     */
    _initAdapter() {
      this.adapter = new c(this);
    }
    emit(t, ...i) {
      return this.children.forEach((a) => {
        a.emit(t, ...i);
      }), !0;
    }
    createChild(t) {
      v("creating child namespace %s", t);
      const i = new h.Namespace(this.server, t);
      if (this._fns.forEach((a) => i.use(a)), this.listeners("connect").forEach((a) => i.on("connect", a)), this.listeners("connection").forEach((a) => i.on("connection", a)), this.children.add(i), this.server._opts.cleanupEmptyChildNamespaces) {
        const a = i._remove;
        i._remove = (e) => {
          a.call(i, e), i.sockets.size === 0 && (v("closing child namespace %s", t), i.adapter.close(), this.server._nsps.delete(i.name), this.children.delete(i));
        };
      }
      return this.server._nsps.set(t, i), this.server.sockets.emitReserved("new_namespace", i), i;
    }
    fetchSockets() {
      throw new Error("fetchSockets() is not supported on parent namespaces");
    }
  }
  G.ParentNamespace = d, d.count = 0;
  class c extends b.Adapter {
    broadcast(t, i) {
      this.nsp.children.forEach((a) => {
        a.adapter.broadcast(t, i);
      });
    }
  }
  return G;
}
var $ = {}, hn;
function Fa() {
  if (hn) return $;
  hn = 1;
  var m = $ && $.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty($, "__esModule", { value: !0 }), $.patchAdapter = i, $.restoreAdapter = e, $.serveFile = o;
  const h = oi(), b = B, v = (0, m(ie()).default)("socket.io:adapter-uws"), d = "", { addAll: c, del: l, broadcast: t } = h.Adapter.prototype;
  function i(s) {
    h.Adapter.prototype.addAll = function(r, u) {
      const f = !this.sids.has(r);
      c.call(this, r, u);
      const g = this.nsp.sockets.get(r) || this.nsp._preConnectSockets.get(r);
      if (g) {
        if (g.conn.transport.name === "websocket") {
          a(this.nsp.name, g, f, u);
          return;
        }
        f && g.conn.on("upgrade", () => {
          const k = this.sids.get(r);
          k && a(this.nsp.name, g, f, k);
        });
      }
    }, h.Adapter.prototype.del = function(r, u) {
      l.call(this, r, u);
      const f = this.nsp.sockets.get(r) || this.nsp._preConnectSockets.get(r);
      if (f && f.conn.transport.name === "websocket") {
        const g = f.conn.id, k = f.conn.transport.socket, T = `${this.nsp.name}${d}${u}`;
        v("unsubscribe connection %s from topic %s", g, T), k.unsubscribe(T);
      }
    }, h.Adapter.prototype.broadcast = function(r, u) {
      if (!(u.rooms.size <= 1 && u.except.size === 0)) {
        t.call(this, r, u);
        return;
      }
      const g = u.flags || {}, k = {
        preEncoded: !0,
        volatile: g.volatile,
        compress: g.compress
      };
      r.nsp = this.nsp.name;
      const T = this.encoder.encode(r), E = u.rooms.size === 0 ? this.nsp.name : `${this.nsp.name}${d}${u.rooms.keys().next().value}`;
      v("fast publish to %s", E), T.forEach((x) => {
        const w = typeof x != "string";
        s.publish(E, w ? x : "4" + x, w);
      }), this.apply(u, (x) => {
        x.conn.transport.name !== "websocket" && x.client.writeToEngine(T, k);
      });
    };
  }
  function a(s, r, u, f) {
    const g = r.conn.id, k = r.conn.transport.socket;
    u && (v("subscribe connection %s to topic %s", g, s), k.subscribe(s)), f.forEach((T) => {
      const E = `${s}${d}${T}`;
      v("subscribe connection %s to topic %s", g, E), k.subscribe(E);
    });
  }
  function e() {
    h.Adapter.prototype.addAll = c, h.Adapter.prototype.del = l, h.Adapter.prototype.broadcast = t;
  }
  const n = (s) => {
    const { buffer: r, byteOffset: u, byteLength: f } = s;
    return r.slice(u, u + f);
  };
  function o(s, r) {
    const { size: u } = (0, b.statSync)(r), f = (0, b.createReadStream)(r), g = () => !f.destroyed && f.destroy(), k = (E) => {
      throw g(), E;
    }, T = (E) => {
      const x = n(E);
      s.cork(() => {
        const w = s.getWriteOffset(), [C, _] = s.tryEnd(x, u);
        !_ && !C && (f.pause(), s.onWritable((F) => {
          const [S, j] = s.tryEnd(x.slice(F - w), u);
          return !j && S && f.resume(), S;
        }));
      });
    };
    s.onAborted(g), f.on("data", T).on("error", k).on("end", g);
  }
  return $;
}
const Ra = "4.8.1", ja = {
  version: Ra
};
var H = ge.exports, vn;
function Oa() {
  return vn || (vn = 1, function(m, h) {
    var b = H && H.__createBinding || (Object.create ? function(R, y, A, O) {
      O === void 0 && (O = A);
      var P = Object.getOwnPropertyDescriptor(y, A);
      (!P || ("get" in P ? !y.__esModule : P.writable || P.configurable)) && (P = { enumerable: !0, get: function() {
        return y[A];
      } }), Object.defineProperty(R, O, P);
    } : function(R, y, A, O) {
      O === void 0 && (O = A), R[O] = y[A];
    }), p = H && H.__setModuleDefault || (Object.create ? function(R, y) {
      Object.defineProperty(R, "default", { enumerable: !0, value: y });
    } : function(R, y) {
      R.default = y;
    }), v = H && H.__importStar || function(R) {
      if (R && R.__esModule) return R;
      var y = {};
      if (R != null) for (var A in R) A !== "default" && Object.prototype.hasOwnProperty.call(R, A) && b(y, R, A);
      return p(y, R), y;
    }, d = H && H.__importDefault || function(R) {
      return R && R.__esModule ? R : { default: R };
    };
    Object.defineProperty(h, "__esModule", { value: !0 }), h.Namespace = h.Socket = h.Server = void 0;
    const c = B, l = B, t = B, i = ai(), a = B, e = B, n = ua(), o = wa(), s = B, r = jn();
    Object.defineProperty(h, "Namespace", { enumerable: !0, get: function() {
      return r.Namespace;
    } });
    const u = Ta(), f = oi(), g = v(Pe()), k = d(ie()), T = Rn();
    Object.defineProperty(h, "Socket", { enumerable: !0, get: function() {
      return T.Socket;
    } });
    const E = ti(), x = Fa(), w = d(En()), C = (0, k.default)("socket.io:server"), _ = ja.version, F = /\.map/;
    class S extends E.StrictEventEmitter {
      constructor(y, A = {}) {
        super(), this._nsps = /* @__PURE__ */ new Map(), this.parentNsps = /* @__PURE__ */ new Map(), this.parentNamespacesFromRegExp = /* @__PURE__ */ new Map(), typeof y == "object" && y instanceof Object && !y.listen && (A = y, y = void 0), this.path(A.path || "/socket.io"), this.connectTimeout(A.connectTimeout || 45e3), this.serveClient(A.serveClient !== !1), this._parser = A.parser || g, this.encoder = new this._parser.Encoder(), this.opts = A, A.connectionStateRecovery ? (A.connectionStateRecovery = Object.assign({
          maxDisconnectionDuration: 2 * 60 * 1e3,
          skipMiddlewares: !0
        }, A.connectionStateRecovery), this.adapter(A.adapter || f.SessionAwareAdapter)) : this.adapter(A.adapter || f.Adapter), A.cleanupEmptyChildNamespaces = !!A.cleanupEmptyChildNamespaces, this.sockets = this.of("/"), (y || typeof y == "number") && this.attach(y), this.opts.cors && (this._corsMiddleware = (0, w.default)(this.opts.cors));
      }
      get _opts() {
        return this.opts;
      }
      serveClient(y) {
        return arguments.length ? (this._serveClient = y, this) : this._serveClient;
      }
      /**
       * Executes the middleware for an incoming namespace not already created on the server.
       *
       * @param name - name of incoming namespace
       * @param auth - the auth parameters
       * @param fn - callback
       *
       * @private
       */
      _checkNamespace(y, A, O) {
        if (this.parentNsps.size === 0)
          return O(!1);
        const P = this.parentNsps.keys(), q = () => {
          const N = P.next();
          if (N.done)
            return O(!1);
          N.value(y, A, (D, U) => {
            if (D || !U)
              return q();
            if (this._nsps.has(y))
              return C("dynamic namespace %s already exists", y), O(this._nsps.get(y));
            const ne = this.parentNsps.get(N.value).createChild(y);
            C("dynamic namespace %s was created", y), O(ne);
          });
        };
        q();
      }
      path(y) {
        if (!arguments.length)
          return this._path;
        this._path = y.replace(/\/$/, "");
        const A = this._path.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        return this.clientPathRegex = new RegExp("^" + A + "/socket\\.io(\\.msgpack|\\.esm)?(\\.min)?\\.js(\\.map)?(?:\\?|$)"), this;
      }
      connectTimeout(y) {
        return y === void 0 ? this._connectTimeout : (this._connectTimeout = y, this);
      }
      adapter(y) {
        if (!arguments.length)
          return this._adapter;
        this._adapter = y;
        for (const A of this._nsps.values())
          A._initAdapter();
        return this;
      }
      /**
       * Attaches socket.io to a server or port.
       *
       * @param srv - server or port
       * @param opts - options passed to engine.io
       * @return self
       */
      listen(y, A = {}) {
        return this.attach(y, A);
      }
      /**
       * Attaches socket.io to a server or port.
       *
       * @param srv - server or port
       * @param opts - options passed to engine.io
       * @return self
       */
      attach(y, A = {}) {
        if (typeof y == "function") {
          const O = "You are trying to attach socket.io to an express request handler function. Please pass a http.Server instance.";
          throw new Error(O);
        }
        if (Number(y) == y && (y = Number(y)), typeof y == "number") {
          C("creating http server and binding to %d", y);
          const O = y;
          y = c.createServer((P, q) => {
            q.writeHead(404), q.end();
          }), y.listen(O);
        }
        return Object.assign(A, this.opts), A.path = A.path || this._path, this.initEngine(y, A), this;
      }
      attachApp(y, A = {}) {
        Object.assign(A, this.opts), A.path = A.path || this._path, C("creating uWebSockets.js-based engine with opts %j", A);
        const O = new n.uServer(A);
        O.attach(y, A), this.bind(O), this._serveClient && y.get(`${this._path}/*`, (P, q) => {
          if (!this.clientPathRegex.test(q.getUrl())) {
            q.setYield(!0);
            return;
          }
          const N = q.getUrl().replace(this._path, "").replace(/\?.*$/, "").replace(/^\//, ""), D = F.test(N), U = D ? "map" : "source", ne = '"' + _ + '"', Bn = "W/" + ne, qe = q.getHeader("if-none-match");
          if (qe && (ne === qe || Bn === qe)) {
            C("serve client %s 304", U), P.writeStatus("304 Not Modified"), P.end();
            return;
          }
          C("serve client %s", U), P.writeHeader("cache-control", "public, max-age=0"), P.writeHeader("content-type", "application/" + (D ? "json" : "javascript") + "; charset=utf-8"), P.writeHeader("etag", ne);
          const Nn = e.join(__dirname, "../client-dist/", N);
          (0, x.serveFile)(P, Nn);
        }), (0, x.patchAdapter)(y);
      }
      /**
       * Initialize engine
       *
       * @param srv - the server to attach to
       * @param opts - options passed to engine.io
       * @private
       */
      initEngine(y, A) {
        C("creating engine.io instance with opts %j", A), this.eio = (0, n.attach)(y, A), this._serveClient && this.attachServe(y), this.httpServer = y, this.bind(this.eio);
      }
      /**
       * Attaches the static file serving.
       *
       * @param srv http server
       * @private
       */
      attachServe(y) {
        C("attaching client serving req handler");
        const A = y.listeners("request").slice(0);
        y.removeAllListeners("request"), y.on("request", (O, P) => {
          if (this.clientPathRegex.test(O.url))
            this._corsMiddleware ? this._corsMiddleware(O, P, () => {
              this.serve(O, P);
            }) : this.serve(O, P);
          else
            for (let q = 0; q < A.length; q++)
              A[q].call(y, O, P);
        });
      }
      /**
       * Handles a request serving of client source and map
       *
       * @param req
       * @param res
       * @private
       */
      serve(y, A) {
        const O = y.url.replace(this._path, "").replace(/\?.*$/, ""), P = F.test(O), q = P ? "map" : "source", N = '"' + _ + '"', D = "W/" + N, U = y.headers["if-none-match"];
        if (U && (N === U || D === U)) {
          C("serve client %s 304", q), A.writeHead(304), A.end();
          return;
        }
        C("serve client %s", q), A.setHeader("Cache-Control", "public, max-age=0"), A.setHeader("Content-Type", "application/" + (P ? "json" : "javascript") + "; charset=utf-8"), A.setHeader("ETag", N), S.sendFile(O, y, A);
      }
      /**
       * @param filename
       * @param req
       * @param res
       * @private
       */
      static sendFile(y, A, O) {
        const P = (0, l.createReadStream)(e.join(__dirname, "../client-dist/", y)), q = i(A).encodings(["br", "gzip", "deflate"]), N = (D) => {
          D && O.end();
        };
        switch (q) {
          case "br":
            O.writeHead(200, { "content-encoding": "br" }), (0, a.pipeline)(P, (0, t.createBrotliCompress)(), O, N);
            break;
          case "gzip":
            O.writeHead(200, { "content-encoding": "gzip" }), (0, a.pipeline)(P, (0, t.createGzip)(), O, N);
            break;
          case "deflate":
            O.writeHead(200, { "content-encoding": "deflate" }), (0, a.pipeline)(P, (0, t.createDeflate)(), O, N);
            break;
          default:
            O.writeHead(200), (0, a.pipeline)(P, O, N);
        }
      }
      /**
       * Binds socket.io to an engine.io instance.
       *
       * @param engine engine.io (or compatible) server
       * @return self
       */
      bind(y) {
        return this.engine = y, this.engine.on("connection", this.onconnection.bind(this)), this;
      }
      /**
       * Called with each incoming transport connection.
       *
       * @param {engine.Socket} conn
       * @return self
       * @private
       */
      onconnection(y) {
        C("incoming connection with id %s", y.id);
        const A = new o.Client(this, y);
        return y.protocol === 3 && A.connect("/"), this;
      }
      /**
       * Looks up a namespace.
       *
       * @example
       * // with a simple string
       * const myNamespace = io.of("/my-namespace");
       *
       * // with a regex
       * const dynamicNsp = io.of(/^\/dynamic-\d+$/).on("connection", (socket) => {
       *   const namespace = socket.nsp; // newNamespace.name === "/dynamic-101"
       *
       *   // broadcast to all clients in the given sub-namespace
       *   namespace.emit("hello");
       * });
       *
       * @param name - nsp name
       * @param fn optional, nsp `connection` ev handler
       */
      of(y, A) {
        if (typeof y == "function" || y instanceof RegExp) {
          const P = new u.ParentNamespace(this);
          return C("initializing parent namespace %s", P.name), typeof y == "function" ? this.parentNsps.set(y, P) : (this.parentNsps.set((q, N, D) => D(null, y.test(q)), P), this.parentNamespacesFromRegExp.set(y, P)), A && P.on("connect", A), P;
        }
        String(y)[0] !== "/" && (y = "/" + y);
        let O = this._nsps.get(y);
        if (!O) {
          for (const [P, q] of this.parentNamespacesFromRegExp)
            if (P.test(y))
              return C("attaching namespace %s to parent namespace %s", y, P), q.createChild(y);
          C("initializing namespace %s", y), O = new r.Namespace(this, y), this._nsps.set(y, O), y !== "/" && this.sockets.emitReserved("new_namespace", O);
        }
        return A && O.on("connect", A), O;
      }
      /**
       * Closes server connection
       *
       * @param [fn] optional, called as `fn([err])` on error OR all conns closed
       */
      async close(y) {
        await Promise.allSettled([...this._nsps.values()].map(async (A) => {
          A.sockets.forEach((O) => {
            O._onclose("server shutting down");
          }), await A.adapter.close();
        })), this.engine.close(), (0, x.restoreAdapter)(), this.httpServer ? this.httpServer.close(y) : y && y();
      }
      /**
       * Registers a middleware, which is a function that gets executed for every incoming {@link Socket}.
       *
       * @example
       * io.use((socket, next) => {
       *   // ...
       *   next();
       * });
       *
       * @param fn - the middleware function
       */
      use(y) {
        return this.sockets.use(y), this;
      }
      /**
       * Targets a room when emitting.
       *
       * @example
       * // the “foo” event will be broadcast to all connected clients in the “room-101” room
       * io.to("room-101").emit("foo", "bar");
       *
       * // with an array of rooms (a client will be notified at most once)
       * io.to(["room-101", "room-102"]).emit("foo", "bar");
       *
       * // with multiple chained calls
       * io.to("room-101").to("room-102").emit("foo", "bar");
       *
       * @param room - a room, or an array of rooms
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      to(y) {
        return this.sockets.to(y);
      }
      /**
       * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
       *
       * @example
       * // disconnect all clients in the "room-101" room
       * io.in("room-101").disconnectSockets();
       *
       * @param room - a room, or an array of rooms
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      in(y) {
        return this.sockets.in(y);
      }
      /**
       * Excludes a room when emitting.
       *
       * @example
       * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
       * io.except("room-101").emit("foo", "bar");
       *
       * // with an array of rooms
       * io.except(["room-101", "room-102"]).emit("foo", "bar");
       *
       * // with multiple chained calls
       * io.except("room-101").except("room-102").emit("foo", "bar");
       *
       * @param room - a room, or an array of rooms
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      except(y) {
        return this.sockets.except(y);
      }
      /**
       * Sends a `message` event to all clients.
       *
       * This method mimics the WebSocket.send() method.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
       *
       * @example
       * io.send("hello");
       *
       * // this is equivalent to
       * io.emit("message", "hello");
       *
       * @return self
       */
      send(...y) {
        return this.sockets.emit("message", ...y), this;
      }
      /**
       * Sends a `message` event to all clients. Alias of {@link send}.
       *
       * @return self
       */
      write(...y) {
        return this.sockets.emit("message", ...y), this;
      }
      /**
       * Sends a message to the other Socket.IO servers of the cluster.
       *
       * @example
       * io.serverSideEmit("hello", "world");
       *
       * io.on("hello", (arg1) => {
       *   console.log(arg1); // prints "world"
       * });
       *
       * // acknowledgements (without binary content) are supported too:
       * io.serverSideEmit("ping", (err, responses) => {
       *  if (err) {
       *     // some servers did not acknowledge the event in the given delay
       *   } else {
       *     console.log(responses); // one response per server (except the current one)
       *   }
       * });
       *
       * io.on("ping", (cb) => {
       *   cb("pong");
       * });
       *
       * @param ev - the event name
       * @param args - an array of arguments, which may include an acknowledgement callback at the end
       */
      serverSideEmit(y, ...A) {
        return this.sockets.serverSideEmit(y, ...A);
      }
      /**
       * Sends a message and expect an acknowledgement from the other Socket.IO servers of the cluster.
       *
       * @example
       * try {
       *   const responses = await io.serverSideEmitWithAck("ping");
       *   console.log(responses); // one response per server (except the current one)
       * } catch (e) {
       *   // some servers did not acknowledge the event in the given delay
       * }
       *
       * @param ev - the event name
       * @param args - an array of arguments
       *
       * @return a Promise that will be fulfilled when all servers have acknowledged the event
       */
      serverSideEmitWithAck(y, ...A) {
        return this.sockets.serverSideEmitWithAck(y, ...A);
      }
      /**
       * Gets a list of socket ids.
       *
       * @deprecated this method will be removed in the next major release, please use {@link Server#serverSideEmit} or
       * {@link Server#fetchSockets} instead.
       */
      allSockets() {
        return this.sockets.allSockets();
      }
      /**
       * Sets the compress flag.
       *
       * @example
       * io.compress(false).emit("hello");
       *
       * @param compress - if `true`, compresses the sending data
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      compress(y) {
        return this.sockets.compress(y);
      }
      /**
       * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
       * receive messages (because of network slowness or other issues, or because they’re connected through long polling
       * and is in the middle of a request-response cycle).
       *
       * @example
       * io.volatile.emit("hello"); // the clients may or may not receive it
       *
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      get volatile() {
        return this.sockets.volatile;
      }
      /**
       * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
       *
       * @example
       * // the “foo” event will be broadcast to all connected clients on this node
       * io.local.emit("foo", "bar");
       *
       * @return a new {@link BroadcastOperator} instance for chaining
       */
      get local() {
        return this.sockets.local;
      }
      /**
       * Adds a timeout in milliseconds for the next operation.
       *
       * @example
       * io.timeout(1000).emit("some-event", (err, responses) => {
       *   if (err) {
       *     // some clients did not acknowledge the event in the given delay
       *   } else {
       *     console.log(responses); // one response per client
       *   }
       * });
       *
       * @param timeout
       */
      timeout(y) {
        return this.sockets.timeout(y);
      }
      /**
       * Returns the matching socket instances.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       * // return all Socket instances
       * const sockets = await io.fetchSockets();
       *
       * // return all Socket instances in the "room1" room
       * const sockets = await io.in("room1").fetchSockets();
       *
       * for (const socket of sockets) {
       *   console.log(socket.id);
       *   console.log(socket.handshake);
       *   console.log(socket.rooms);
       *   console.log(socket.data);
       *
       *   socket.emit("hello");
       *   socket.join("room1");
       *   socket.leave("room2");
       *   socket.disconnect();
       * }
       */
      fetchSockets() {
        return this.sockets.fetchSockets();
      }
      /**
       * Makes the matching socket instances join the specified rooms.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       *
       * // make all socket instances join the "room1" room
       * io.socketsJoin("room1");
       *
       * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
       * io.in("room1").socketsJoin(["room2", "room3"]);
       *
       * @param room - a room, or an array of rooms
       */
      socketsJoin(y) {
        return this.sockets.socketsJoin(y);
      }
      /**
       * Makes the matching socket instances leave the specified rooms.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       * // make all socket instances leave the "room1" room
       * io.socketsLeave("room1");
       *
       * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
       * io.in("room1").socketsLeave(["room2", "room3"]);
       *
       * @param room - a room, or an array of rooms
       */
      socketsLeave(y) {
        return this.sockets.socketsLeave(y);
      }
      /**
       * Makes the matching socket instances disconnect.
       *
       * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
       *
       * @example
       * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
       * io.disconnectSockets();
       *
       * // make all socket instances in the "room1" room disconnect and close the underlying connections
       * io.in("room1").disconnectSockets(true);
       *
       * @param close - whether to close the underlying connection
       */
      disconnectSockets(y = !1) {
        return this.sockets.disconnectSockets(y);
      }
    }
    h.Server = S, Object.keys(s.EventEmitter.prototype).filter(function(R) {
      return typeof s.EventEmitter.prototype[R] == "function";
    }).forEach(function(R) {
      S.prototype[R] = function() {
        return this.sockets[R].apply(this.sockets, arguments);
      };
    }), m.exports = (R, y) => new S(R, y), m.exports.Server = S, m.exports.Namespace = r.Namespace, m.exports.Socket = T.Socket;
  }(ge, ge.exports)), ge.exports;
}
var Pa = Oa();
const qa = /* @__PURE__ */ Dn(Pa), { Server: Ba, Namespace: Da, Socket: Ma } = qa, Pn = In(), qn = bn.createServer(Pn), Na = new Ba(qn);
Pn.get("/", (m, h) => {
  h.send("Hello from Express!");
});
Na.on("connection", (m) => {
  console.log("A user connected"), m.emit("message", "Welcome to the server"), m.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
const xn = 3e3;
qn.listen(xn, () => {
  console.log(`Server running on http://localhost:${xn}`);
});
