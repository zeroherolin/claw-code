// telemetry/chunk-27ds9t2x.js — Claude Code 2.1.310 模块 chunk-27ds9t2x.js
import { U } from "../context/not-admin-owned.ersa.js";
function G6s(t, r, o = {}) {
  e().host.telemetryHandles.installMeter(t, r, o);
}
function z6s() {
  return e().host.telemetryHandles.sessionCounter();
}
function wLo() {
  return e().host.telemetryHandles.locCounter();
}
function MQe() {
  return e().host.telemetryHandles.prCounter();
}
function ELo() {
  return e().host.telemetryHandles.commitCounter();
}
function V6s() {
  return e().host.telemetryHandles.costCounter();
}
function p5n() {
  return e().host.telemetryHandles.tokenCounter();
}
function i$r() {
  return e().host.telemetryHandles.codeEditToolDecisionCounter();
}
function K6s() {
  return e().host.telemetryHandles.activeTimeCounter();
}
function f5n() {
  return e().host.telemetryHandles.meterProvider();
}
function vLo(t) {
  e().host.telemetryHandles.replaceMeterProvider(t);
}
function e() {
  return U();
}
export {
  ELo,
  G6s,
  K6s,
  MQe,
  V6s,
  f5n,
  i$r,
  p5n,
  vLo,
  wLo,
  z6s
};
