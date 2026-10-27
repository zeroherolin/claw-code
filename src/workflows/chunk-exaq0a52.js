// workflows/chunk-exaq0a52.js — Claude Code 2.1.310 模块 chunk-exaq0a52.js
import { He } from "../fs/async-hooks.9s1z.js";
import { U, Wr } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { i } from "../shared/environment.9a41.js";
import { I1 } from "../artifacts/cowritten-artifact-html.thm2.js";
import { $n } from "../models/total-tokens-reminder.psq3.js";
var d = "cli";
class r {
  bundledSkills = [];
  bundledSkillKillSwitchSurvivors = /* @__PURE__ */ new Set();
  bundledSkillSessionResetHooks = [];
  bundledSkillsInitialized = false;
  shippedTablesFillFailed = false;
  bundledSkillFilesElsewhere = void 0;
  commandsOffHere = void 0;
  attachedFolderSkills = void 0;
  builtinToolsServedByMcp = void 0;
  builtinCommandTable = void 0;
  builtinCommandNames = void 0;
  shippedCommandNames = void 0;
  loadedCommands = /* @__PURE__ */ new Map();
  skillToolCommands = /* @__PURE__ */ new Map();
  slashCommandToolSkills = /* @__PURE__ */ new Map();
  skillIndex = /* @__PURE__ */ new Map();
  reservedSpellingsByLoadedResult = /* @__PURE__ */ new WeakMap();
  loadedResultsMissingTrustedNames = /* @__PURE__ */ new WeakSet();
  skillDirCommands = /* @__PURE__ */ new Map();
  dynamicSkillStates = /* @__PURE__ */ new Map();
  dynamicSkillStateKey = () => d;
  dynamicSkillsLoaded = He();
  skillsChanged = He();
  isAnnouncingFreshLoad = false;
  shadowedBundledSkills = void 0;
  fallbackShadowTelemetryLogged = /* @__PURE__ */ new Set();
  skillContentIntern = /* @__PURE__ */ new Map();
  skillFiles = /* @__PURE__ */ new WeakMap();
  builtinPlugins = /* @__PURE__ */ new Map();
  builtinPluginsInitialized = false;
  builtinPluginFailures = /* @__PURE__ */ new Map();
  builtinPluginWiredSkills = /* @__PURE__ */ new WeakMap();
  bundledWorkflows = [];
  markdownFiles = /* @__PURE__ */ new Map();
  markdownScansGivenUp = 0;
  agentDefinitions = /* @__PURE__ */ new Map();
  projectAgentsElsewhere = [];
  namesNotShown = /* @__PURE__ */ new Set();
  realSkillRootByCommand = /* @__PURE__ */ new WeakMap();
  projectOutputStylesElsewhere = [];
  outputStyleDirStyles = /* @__PURE__ */ new Map();
  allOutputStyles = /* @__PURE__ */ new Map();
  routines = /* @__PURE__ */ new Map();
  routineCronTasks = /* @__PURE__ */ new Map();
  allWorkflows = /* @__PURE__ */ new Map();
  reservedSpellingsFor(e, t) {
    let n = this.reservedSpellingsByLoadedResult.get(e);
    if (n) return n;
    let l = t();
    return this.reservedSpellingsByLoadedResult.set(e, l), l;
  }
  refusedReservedSkillNames() {
    return Array.from(this.dynamicSkillStates.get(this.dynamicSkillStateKey())?.refusedReservedNames.values() ?? []);
  }
  markLoadedResultMissingTrustedNames(e) {
    this.loadedResultsMissingTrustedNames.add(e);
  }
  loadedResultIsMissingTrustedNames(e) {
    return this.loadedResultsMissingTrustedNames.has(e);
  }
  clearLoadCaches() {
    this.invalidateCommands(), this.skillDirCommands.clear(), this.markdownFiles.clear(), this.agentDefinitions.clear(), this.outputStyleDirStyles.clear(), this.allOutputStyles.clear(), this.routines.clear(), this.routineCronTasks.clear(), this.allWorkflows.clear(), this.namesNotShown.clear();
  }
  invalidateCommands() {
    this.builtinCommandTable = void 0, this.builtinCommandNames = void 0, this.shippedCommandNames = void 0, this.loadedCommands.clear(), this.skillToolCommands.clear(), this.slashCommandToolSkills.clear(), this.skillIndex.clear();
  }
  invalidateSkillDirs() {
    this.skillDirCommands.clear();
    let e = this.dynamicSkillStates.get(this.dynamicSkillStateKey());
    if (e) e.conditionalSkills.clear(), e.activatedConditionalSkillNames.clear();
  }
  evictDynamicSkillState(e) {
    this.dynamicSkillStates.delete(e);
    let t = `${e}:`;
    for (let n of [...this.skillDirCommands.keys()]) if (n.startsWith(t)) this.skillDirCommands.delete(n);
  }
}
function Qoe(e, t, n) {
  let l = e.get(t);
  if (l !== void 0) return l;
  let s = n();
  return e.set(t, s), s;
}
function Zoe(e) {
  return e ?? "\0";
}
var m = new W(() => new r());
function br() {
  return m.of(U().host);
}
function a() {
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return false;
  return !$n();
}
function pii() {
  return i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !i.CLAUDE_CODE_BYOC_ENABLE_DATADOG;
}
function o() {
  return i.CLAUDE_CODE_CUSTOM_OAUTH_URL !== void 0;
}
function Ebn() {
  return !I1() && !o();
}
function p_() {
  return I1() || a() || Wr() !== null || o();
}
function wor() {
  return a() || Wr() !== null || o();
}
function Joe() {
  return i.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL;
}
function q4() {
  if (Joe()) return false;
  return I1();
}
export {
  Ebn,
  Joe,
  Qoe,
  Zoe,
  br,
  p_,
  pii,
  q4,
  wor
};
