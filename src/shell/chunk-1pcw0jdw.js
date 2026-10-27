// shell/chunk-1pcw0jdw.js — Claude Code 2.1.310 模块 chunk-1pcw0jdw.js
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
class e {
  claudeTempDir = void 0;
  childProcessTmpDir = void 0;
  bundledSkillsRoot = void 0;
  scratchpadDirBySessionId = /* @__PURE__ */ new Map();
  resolvedWorkingDirPaths = /* @__PURE__ */ new Map();
  workingDirPathsHeldAsNamed = /* @__PURE__ */ new Set();
  compiledPatternsByRules = /* @__PURE__ */ new WeakMap();
  physicalTwinsByPattern = /* @__PURE__ */ new Map();
  composedRepoRules = {};
  giveUpProbes = /* @__PURE__ */ new WeakMap();
  reportedGiveUps = /* @__PURE__ */ new Set();
  reportedSecondRootMountMatches = /* @__PURE__ */ new Set();
  reportedSecondRootMountFlagThrow = false;
  eventsLoggedOnce = /* @__PURE__ */ new Set();
  trustedSymlinkEquivalences = void 0;
  userSkillsBaseSpellingsFolded = void 0;
  resolvedSandboxConfigPaths = /* @__PURE__ */ new Map();
  canonicalHomedirByHome = /* @__PURE__ */ new Map();
  foldedSegmentsBySpelling = /* @__PURE__ */ new Map();
  settingsFileLinks = void 0;
  reset() {
    delete this.composedRepoRules.native, delete this.composedRepoRules.upload, this.claudeTempDir = void 0, this.childProcessTmpDir = void 0, this.bundledSkillsRoot = void 0, this.scratchpadDirBySessionId.clear(), this.resolvedWorkingDirPaths.clear(), this.workingDirPathsHeldAsNamed.clear(), this.trustedSymlinkEquivalences = void 0, this.userSkillsBaseSpellingsFolded = void 0, this.resolvedSandboxConfigPaths.clear(), this.canonicalHomedirByHome.clear(), this.foldedSegmentsBySpelling.clear(), this.physicalTwinsByPattern.clear(), this.reportedGiveUps.clear(), this.reportedSecondRootMountMatches.clear(), this.reportedSecondRootMountFlagThrow = false, this.eventsLoggedOnce.clear(), this.settingsFileLinks = void 0;
  }
}
var n = new W(() => new e());
function Wv() {
  return n.of(U().host);
}
function r7s() {
  return U().host.clock;
}
export {
  Wv,
  r7s
};
