// linux/telemetry/chunk-63c0e0aa.js — Claude Code 2.1.310（linux）模块 chunk-1jwvas5k.js
import { U } from "../context/not-admin-owned.js";
function sKs(t, r, o = {}) {
  e().host.telemetryHandles.installMeter(t, r, o);
}
function iKs() {
  return e().host.telemetryHandles.sessionCounter();
}
function VLo() {
  return e().host.telemetryHandles.locCounter();
}
function T7e() {
  return e().host.telemetryHandles.prCounter();
}
function qLo() {
  return e().host.telemetryHandles.commitCounter();
}
function aKs() {
  return e().host.telemetryHandles.costCounter();
}
function K5n() {
  return e().host.telemetryHandles.tokenCounter();
}
function U$r() {
  return e().host.telemetryHandles.codeEditToolDecisionCounter();
}
function lKs() {
  return e().host.telemetryHandles.activeTimeCounter();
}
function V5n() {
  return e().host.telemetryHandles.meterProvider();
}
function YLo(t) {
  e().host.telemetryHandles.replaceMeterProvider(t);
}
function e() {
  return U();
}
export {
  K5n,
  T7e,
  U$r,
  V5n,
  VLo,
  YLo,
  aKs,
  iKs,
  lKs,
  qLo,
  sKs
};
