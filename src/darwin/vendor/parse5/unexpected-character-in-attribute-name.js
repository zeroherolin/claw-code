// darwin/vendor/parse5/unexpected-character-in-attribute-name.js — Claude Code 2.1.310（darwin）模块 chunk-fm5qea5m.js
var Nt = /* @__PURE__ */ new Set([65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]), m = "�", s;
(function(e) {
  e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(s || (s = {}));
var C = { DASH_DASH: "--", CDATA_START: "[CDATA[", DOCTYPE: "doctype", SCRIPT: "script", PUBLIC: "public", SYSTEM: "system" };
function X(e) {
  return e >= 55296 && e <= 57343;
}
function pe(e) {
  return e >= 56320 && e <= 57343;
}
function Se(e, t) {
  return (e - 55296) * 1024 + 9216 + t;
}
function K(e) {
  return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function V(e) {
  return e >= 64976 && e <= 65007 || Nt.has(e);
}
var o;
(function(e) {
  e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(o || (o = {}));
var Ct = 65536;
class de {
  constructor(e) {
    this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = false, this.lastChunkWritten = false, this.endOfChunkHit = false, this.bufferWaterline = Ct, this.isEol = false, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  get col() {
    return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(e, t) {
    let { line: a, col: n, offset: d } = this, h = n + t, l = d + t;
    return { code: e, startLine: a, endLine: a, startCol: h, endCol: h, startOffset: l, endOffset: l };
  }
  _err(e) {
    if (this.handler.onParseError && this.lastErrOffset !== this.offset) this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(e) {
    if (this.pos !== this.html.length - 1) {
      let t = this.html.charCodeAt(this.pos + 1);
      if (pe(t)) return this.pos++, this._addGap(), Se(e, t);
    } else if (!this.lastChunkWritten) return this.endOfChunkHit = true, s.EOF;
    return this._err(o.surrogateInInputStream), e;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    if (this.willDropParsedChunk()) this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0;
  }
  write(e, t) {
    if (this.html.length > 0) this.html += e;
    else this.html = e;
    this.endOfChunkHit = false, this.lastChunkWritten = t;
  }
  insertHtmlAtCurrentPos(e) {
    this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = false;
  }
  startsWith(e, t) {
    if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, false;
    if (t) return this.html.startsWith(e, this.pos);
    for (let a = 0; a < e.length; a++) if ((this.html.charCodeAt(this.pos + a) | 32) !== e.charCodeAt(a)) return false;
    return true;
  }
  peek(e) {
    let t = this.pos + e;
    if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, s.EOF;
    let a = this.html.charCodeAt(t);
    return a === s.CARRIAGE_RETURN ? s.LINE_FEED : a;
  }
  advance() {
    if (this.pos++, this.isEol) this.isEol = false, this.line++, this.lineStartPos = this.pos;
    if (this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, s.EOF;
    let e = this.html.charCodeAt(this.pos);
    if (e === s.CARRIAGE_RETURN) return this.isEol = true, this.skipNextNewLine = true, s.LINE_FEED;
    if (e === s.LINE_FEED) {
      if (this.isEol = true, this.skipNextNewLine) return this.line--, this.skipNextNewLine = false, this._addGap(), this.advance();
    }
    if (this.skipNextNewLine = false, X(e)) e = this._processSurrogate(e);
    if (!(this.handler.onParseError === null || e > 31 && e < 127 || e === s.LINE_FEED || e === s.CARRIAGE_RETURN || e > 159 && e < 64976)) this._checkForProblematicCharacters(e);
    return e;
  }
  _checkForProblematicCharacters(e) {
    if (K(e)) this._err(o.controlCharacterInInputStream);
    else if (V(e)) this._err(o.noncharacterInInputStream);
  }
  retreat(e) {
    this.pos -= e;
    while (this.pos < this.lastGapPos) this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = false;
  }
}
var f;
(function(e) {
  e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(f || (f = {}));
function z(e, t) {
  for (let a = e.attrs.length - 1; a >= 0; a--) if (e.attrs[a].name === t) return e.attrs[a].value;
  return null;
}
var j = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0)));
var Le = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0)));
var Ee, pt = /* @__PURE__ */ new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Re = (Ee = String.fromCodePoint) !== null && Ee !== void 0 ? Ee : function(e) {
  let t = "";
  if (e > 65535) e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023;
  return t += String.fromCharCode(e), t;
};
function De(e) {
  var t;
  if (e >= 55296 && e <= 57343 || e > 1114111) return 65533;
  return (t = pt.get(e)) !== null && t !== void 0 ? t : e;
}
var N;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(N || (N = {}));
var St = 32, P;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(P || (P = {}));
function Te(e) {
  return e >= N.ZERO && e <= N.NINE;
}
function Lt(e) {
  return e >= N.UPPER_A && e <= N.UPPER_F || e >= N.LOWER_A && e <= N.LOWER_F;
}
function Rt(e) {
  return e >= N.UPPER_A && e <= N.UPPER_Z || e >= N.LOWER_A && e <= N.LOWER_Z || Te(e);
}
function Dt(e) {
  return e === N.EQUALS || Rt(e);
}
var A;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(A || (A = {}));
var D;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(D || (D = {}));
class J {
  constructor(e, t, a) {
    this.decodeTree = e, this.emitCodePoint = t, this.errors = a, this.state = A.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = D.Strict;
  }
  startEntity(e) {
    this.decodeMode = e, this.state = A.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  write(e, t) {
    switch (this.state) {
      case A.EntityStart: {
        if (e.charCodeAt(t) === N.NUM) return this.state = A.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1);
        return this.state = A.NamedEntity, this.stateNamedEntity(e, t);
      }
      case A.NumericStart:
        return this.stateNumericStart(e, t);
      case A.NumericDecimal:
        return this.stateNumericDecimal(e, t);
      case A.NumericHex:
        return this.stateNumericHex(e, t);
      case A.NamedEntity:
        return this.stateNamedEntity(e, t);
    }
  }
  stateNumericStart(e, t) {
    if (t >= e.length) return -1;
    if ((e.charCodeAt(t) | St) === N.LOWER_X) return this.state = A.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1);
    return this.state = A.NumericDecimal, this.stateNumericDecimal(e, t);
  }
  addToNumericResult(e, t, a, n) {
    if (t !== a) {
      let d = a - t;
      this.result = this.result * Math.pow(n, d) + parseInt(e.substr(t, d), n), this.consumed += d;
    }
  }
  stateNumericHex(e, t) {
    let a = t;
    while (t < e.length) {
      let n = e.charCodeAt(t);
      if (Te(n) || Lt(n)) t += 1;
      else return this.addToNumericResult(e, a, t, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(e, a, t, 16), -1;
  }
  stateNumericDecimal(e, t) {
    let a = t;
    while (t < e.length) {
      let n = e.charCodeAt(t);
      if (Te(n)) t += 1;
      else return this.addToNumericResult(e, a, t, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(e, a, t, 10), -1;
  }
  emitNumericEntity(e, t) {
    var a;
    if (this.consumed <= t) return (a = this.errors) === null || a === void 0 || a.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === N.SEMI) this.consumed += 1;
    else if (this.decodeMode === D.Strict) return 0;
    if (this.emitCodePoint(De(this.result), this.consumed), this.errors) {
      if (e !== N.SEMI) this.errors.missingSemicolonAfterCharacterReference();
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  stateNamedEntity(e, t) {
    let { decodeTree: a } = this, n = a[this.treeIndex], d = (n & P.VALUE_LENGTH) >> 14;
    for (; t < e.length; t++, this.excess++) {
      let h = e.charCodeAt(t);
      if (this.treeIndex = gt(a, n, this.treeIndex + Math.max(1, d), h), this.treeIndex < 0) return this.result === 0 || this.decodeMode === D.Attribute && (d === 0 || Dt(h)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = a[this.treeIndex], d = (n & P.VALUE_LENGTH) >> 14, d !== 0) {
        if (h === N.SEMI) return this.emitNamedEntityData(this.treeIndex, d, this.consumed + this.excess);
        if (this.decodeMode !== D.Strict) this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0;
      }
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    var e;
    let { result: t, decodeTree: a } = this, n = (a[t] & P.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  emitNamedEntityData(e, t, a) {
    let { decodeTree: n } = this;
    if (this.emitCodePoint(t === 1 ? n[e] & ~P.VALUE_LENGTH : n[e + 1], a), t === 3) this.emitCodePoint(n[e + 2], a);
    return a;
  }
  end() {
    var e;
    switch (this.state) {
      case A.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== D.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case A.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case A.NumericHex:
        return this.emitNumericEntity(0, 3);
      case A.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case A.EntityStart:
        return 0;
    }
  }
}
function ge(e) {
  let t = "", a = new J(e, (n) => t += Re(n));
  return function(d, h) {
    let l = 0, _ = 0;
    while ((_ = d.indexOf("&", _)) >= 0) {
      t += d.slice(l, _), a.startEntity(h);
      let p = a.write(d, _ + 1);
      if (p < 0) {
        l = _ + a.end();
        break;
      }
      l = _ + p, _ = p === 0 ? l + 1 : l;
    }
    let b = t + d.slice(l);
    return t = "", b;
  };
}
function gt(e, t, a, n) {
  let d = (t & P.BRANCH_LENGTH) >> 7, h = t & P.JUMP_TABLE;
  if (d === 0) return h !== 0 && n === h ? a : -1;
  if (h) {
    let b = n - h;
    return b < 0 || b >= d ? -1 : e[a + b] - 1;
  }
  let l = a, _ = l + d - 1;
  while (l <= _) {
    let b = l + _ >>> 1, p = e[b];
    if (p < n) l = b + 1;
    else if (p > n) _ = b - 1;
    else return e[b + d];
  }
  return -1;
}
var ss = ge(j), rs = ge(Le);
var E;
(function(e) {
  e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(E || (E = {}));
var g;
(function(e) {
  e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(g || (g = {}));
var O;
(function(e) {
  e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(O || (O = {}));
var c;
(function(e) {
  e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(c || (c = {}));
var u;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(u || (u = {}));
var Pt = /* @__PURE__ */ new Map([[c.A, u.A], [c.ADDRESS, u.ADDRESS], [c.ANNOTATION_XML, u.ANNOTATION_XML], [c.APPLET, u.APPLET], [c.AREA, u.AREA], [c.ARTICLE, u.ARTICLE], [c.ASIDE, u.ASIDE], [c.B, u.B], [c.BASE, u.BASE], [c.BASEFONT, u.BASEFONT], [c.BGSOUND, u.BGSOUND], [c.BIG, u.BIG], [c.BLOCKQUOTE, u.BLOCKQUOTE], [c.BODY, u.BODY], [c.BR, u.BR], [c.BUTTON, u.BUTTON], [c.CAPTION, u.CAPTION], [c.CENTER, u.CENTER], [c.CODE, u.CODE], [c.COL, u.COL], [c.COLGROUP, u.COLGROUP], [c.DD, u.DD], [c.DESC, u.DESC], [c.DETAILS, u.DETAILS], [c.DIALOG, u.DIALOG], [c.DIR, u.DIR], [c.DIV, u.DIV], [c.DL, u.DL], [c.DT, u.DT], [c.EM, u.EM], [c.EMBED, u.EMBED], [c.FIELDSET, u.FIELDSET], [c.FIGCAPTION, u.FIGCAPTION], [c.FIGURE, u.FIGURE], [c.FONT, u.FONT], [c.FOOTER, u.FOOTER], [c.FOREIGN_OBJECT, u.FOREIGN_OBJECT], [c.FORM, u.FORM], [c.FRAME, u.FRAME], [c.FRAMESET, u.FRAMESET], [c.H1, u.H1], [c.H2, u.H2], [c.H3, u.H3], [c.H4, u.H4], [c.H5, u.H5], [c.H6, u.H6], [c.HEAD, u.HEAD], [c.HEADER, u.HEADER], [c.HGROUP, u.HGROUP], [c.HR, u.HR], [c.HTML, u.HTML], [c.I, u.I], [c.IMG, u.IMG], [c.IMAGE, u.IMAGE], [c.INPUT, u.INPUT], [c.IFRAME, u.IFRAME], [c.KEYGEN, u.KEYGEN], [c.LABEL, u.LABEL], [c.LI, u.LI], [c.LINK, u.LINK], [c.LISTING, u.LISTING], [c.MAIN, u.MAIN], [c.MALIGNMARK, u.MALIGNMARK], [c.MARQUEE, u.MARQUEE], [c.MATH, u.MATH], [c.MENU, u.MENU], [c.META, u.META], [c.MGLYPH, u.MGLYPH], [c.MI, u.MI], [c.MO, u.MO], [c.MN, u.MN], [c.MS, u.MS], [c.MTEXT, u.MTEXT], [c.NAV, u.NAV], [c.NOBR, u.NOBR], [c.NOFRAMES, u.NOFRAMES], [c.NOEMBED, u.NOEMBED], [c.NOSCRIPT, u.NOSCRIPT], [c.OBJECT, u.OBJECT], [c.OL, u.OL], [c.OPTGROUP, u.OPTGROUP], [c.OPTION, u.OPTION], [c.P, u.P], [c.PARAM, u.PARAM], [c.PLAINTEXT, u.PLAINTEXT], [c.PRE, u.PRE], [c.RB, u.RB], [c.RP, u.RP], [c.RT, u.RT], [c.RTC, u.RTC], [c.RUBY, u.RUBY], [c.S, u.S], [c.SCRIPT, u.SCRIPT], [c.SEARCH, u.SEARCH], [c.SECTION, u.SECTION], [c.SELECT, u.SELECT], [c.SOURCE, u.SOURCE], [c.SMALL, u.SMALL], [c.SPAN, u.SPAN], [c.STRIKE, u.STRIKE], [c.STRONG, u.STRONG], [c.STYLE, u.STYLE], [c.SUB, u.SUB], [c.SUMMARY, u.SUMMARY], [c.SUP, u.SUP], [c.TABLE, u.TABLE], [c.TBODY, u.TBODY], [c.TEMPLATE, u.TEMPLATE], [c.TEXTAREA, u.TEXTAREA], [c.TFOOT, u.TFOOT], [c.TD, u.TD], [c.TH, u.TH], [c.THEAD, u.THEAD], [c.TITLE, u.TITLE], [c.TR, u.TR], [c.TRACK, u.TRACK], [c.TT, u.TT], [c.U, u.U], [c.UL, u.UL], [c.SVG, u.SVG], [c.VAR, u.VAR], [c.WBR, u.WBR], [c.XMP, u.XMP]]);
function x(e) {
  var t;
  return (t = Pt.get(e)) !== null && t !== void 0 ? t : u.UNKNOWN;
}
var T = u, Pe = { [E.HTML]: /* @__PURE__ */ new Set([T.ADDRESS, T.APPLET, T.AREA, T.ARTICLE, T.ASIDE, T.BASE, T.BASEFONT, T.BGSOUND, T.BLOCKQUOTE, T.BODY, T.BR, T.BUTTON, T.CAPTION, T.CENTER, T.COL, T.COLGROUP, T.DD, T.DETAILS, T.DIR, T.DIV, T.DL, T.DT, T.EMBED, T.FIELDSET, T.FIGCAPTION, T.FIGURE, T.FOOTER, T.FORM, T.FRAME, T.FRAMESET, T.H1, T.H2, T.H3, T.H4, T.H5, T.H6, T.HEAD, T.HEADER, T.HGROUP, T.HR, T.HTML, T.IFRAME, T.IMG, T.INPUT, T.LI, T.LINK, T.LISTING, T.MAIN, T.MARQUEE, T.MENU, T.META, T.NAV, T.NOEMBED, T.NOFRAMES, T.NOSCRIPT, T.OBJECT, T.OL, T.P, T.PARAM, T.PLAINTEXT, T.PRE, T.SCRIPT, T.SECTION, T.SELECT, T.SOURCE, T.STYLE, T.SUMMARY, T.TABLE, T.TBODY, T.TD, T.TEMPLATE, T.TEXTAREA, T.TFOOT, T.TH, T.THEAD, T.TITLE, T.TR, T.TRACK, T.UL, T.WBR, T.XMP]), [E.MATHML]: /* @__PURE__ */ new Set([T.MI, T.MO, T.MN, T.MS, T.MTEXT, T.ANNOTATION_XML]), [E.SVG]: /* @__PURE__ */ new Set([T.TITLE, T.FOREIGN_OBJECT, T.DESC]), [E.XLINK]: /* @__PURE__ */ new Set(), [E.XML]: /* @__PURE__ */ new Set(), [E.XMLNS]: /* @__PURE__ */ new Set() }, H = /* @__PURE__ */ new Set([T.H1, T.H2, T.H3, T.H4, T.H5, T.H6]), Mt = /* @__PURE__ */ new Set([c.STYLE, c.SCRIPT, c.XMP, c.IFRAME, c.NOEMBED, c.NOFRAMES, c.PLAINTEXT]);
function Me(e, t) {
  return Mt.has(e) || t && e === c.NOSCRIPT;
}
var r;
(function(e) {
  e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(r || (r = {}));
var QR = { DATA: r.DATA, RCDATA: r.RCDATA, RAWTEXT: r.RAWTEXT, SCRIPT_DATA: r.SCRIPT_DATA, PLAINTEXT: r.PLAINTEXT, CDATA_SECTION: r.CDATA_SECTION };
function Bt(e) {
  return e >= s.DIGIT_0 && e <= s.DIGIT_9;
}
function U(e) {
  return e >= s.LATIN_CAPITAL_A && e <= s.LATIN_CAPITAL_Z;
}
function kt(e) {
  return e >= s.LATIN_SMALL_A && e <= s.LATIN_SMALL_Z;
}
function M(e) {
  return kt(e) || U(e);
}
function xe(e) {
  return M(e) || Bt(e);
}
function Z(e) {
  return e + 32;
}
function ke(e) {
  return e === s.SPACE || e === s.LINE_FEED || e === s.TABULATION || e === s.FORM_FEED;
}
function Be(e) {
  return ke(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN;
}
function Ht(e) {
  if (e === s.NULL) return o.nullCharacterReference;
  else if (e > 1114111) return o.characterReferenceOutsideUnicodeRange;
  else if (X(e)) return o.surrogateCharacterReference;
  else if (V(e)) return o.noncharacterCharacterReference;
  else if (K(e) || e === s.CARRIAGE_RETURN) return o.controlCharacterReference;
  return null;
}
class nDt {
  constructor(e, t) {
    this.options = e, this.handler = t, this.paused = false, this.inLoop = false, this.inForeignNode = false, this.lastStartTagName = "", this.active = false, this.state = r.DATA, this.returnState = r.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new de(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new J(j, (a, n) => {
      this.preprocessor.pos = this.entityStartPos + n - 1, this._flushCodePointConsumedAsCharacterReference(a);
    }, t.onParseError ? { missingSemicolonAfterCharacterReference: () => {
      this._err(o.missingSemicolonAfterCharacterReference, 1);
    }, absenceOfDigitsInNumericCharacterReference: (a) => {
      this._err(o.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + a);
    }, validateNumericCharacterReference: (a) => {
      let n = Ht(a);
      if (n) this._err(n, 1);
    } } : void 0);
  }
  _err(e, t = 0) {
    var a, n;
    (n = (a = this.handler).onParseError) === null || n === void 0 || n.call(a, this.preprocessor.getError(e, t));
  }
  getCurrentLocation(e) {
    if (!this.options.sourceCodeLocationInfo) return null;
    return { startLine: this.preprocessor.line, startCol: this.preprocessor.col - e, startOffset: this.preprocessor.offset - e, endLine: -1, endCol: -1, endOffset: -1 };
  }
  _runParsingLoop() {
    if (this.inLoop) return;
    this.inLoop = true;
    while (this.active && !this.paused) {
      this.consumedAfterSnapshot = 0;
      let e = this._consume();
      if (!this._ensureHibernation()) this._callState(e);
    }
    this.inLoop = false;
  }
  pause() {
    this.paused = true;
  }
  resume(e) {
    if (!this.paused) throw Error("Parser was already resumed");
    if (this.paused = false, this.inLoop) return;
    if (this._runParsingLoop(), !this.paused) e === null || e === void 0 || e();
  }
  write(e, t, a) {
    if (this.active = true, this.preprocessor.write(e, t), this._runParsingLoop(), !this.paused) a === null || a === void 0 || a();
  }
  insertHtmlAtCurrentPos(e) {
    this.active = true, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
  }
  _ensureHibernation() {
    if (this.preprocessor.endOfChunkHit) return this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = false, true;
    return false;
  }
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _advanceBy(e) {
    this.consumedAfterSnapshot += e;
    for (let t = 0; t < e; t++) this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(e, t) {
    if (this.preprocessor.startsWith(e, t)) return this._advanceBy(e.length - 1), true;
    return false;
  }
  _createStartTagToken() {
    this.currentToken = { type: f.START_TAG, tagName: "", tagID: u.UNKNOWN, selfClosing: false, ackSelfClosing: false, attrs: [], location: this.getCurrentLocation(1) };
  }
  _createEndTagToken() {
    this.currentToken = { type: f.END_TAG, tagName: "", tagID: u.UNKNOWN, selfClosing: false, ackSelfClosing: false, attrs: [], location: this.getCurrentLocation(2) };
  }
  _createCommentToken(e) {
    this.currentToken = { type: f.COMMENT, data: "", location: this.getCurrentLocation(e) };
  }
  _createDoctypeToken(e) {
    this.currentToken = { type: f.DOCTYPE, name: e, forceQuirks: false, publicId: null, systemId: null, location: this.currentLocation };
  }
  _createCharacterToken(e, t) {
    this.currentCharacterToken = { type: e, chars: t, location: this.currentLocation };
  }
  _createAttr(e) {
    this.currentAttr = { name: e, value: "" }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var e, t;
    let a = this.currentToken;
    if (z(a, this.currentAttr.name) === null) {
      if (a.attrs.push(this.currentAttr), a.location && this.currentLocation) {
        let n = (e = (t = a.location).attrs) !== null && e !== void 0 ? e : t.attrs = /* @__PURE__ */ Object.create(null);
        n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else this._err(o.duplicateAttribute);
  }
  _leaveAttrValue() {
    if (this.currentLocation) this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset;
  }
  prepareToken(e) {
    if (this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location) e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1;
    this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    let e = this.currentToken;
    if (this.prepareToken(e), e.tagID = x(e.tagName), e.type === f.START_TAG) this.lastStartTagName = e.tagName, this.handler.onStartTag(e);
    else {
      if (e.attrs.length > 0) this._err(o.endTagWithAttributes);
      if (e.selfClosing) this._err(o.endTagWithTrailingSolidus);
      this.handler.onEndTag(e);
    }
    this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(e) {
    this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(e) {
    this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(e) {
    if (this.currentCharacterToken) {
      if (e && this.currentCharacterToken.location) this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset;
      switch (this.currentCharacterToken.type) {
        case f.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case f.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case f.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    let e = this.getCurrentLocation(0);
    if (e) e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset;
    this._emitCurrentCharacterToken(e), this.handler.onEof({ type: f.EOF, location: e }), this.active = false;
  }
  _appendCharToCurrentCharacterToken(e, t) {
    if (this.currentCharacterToken) if (this.currentCharacterToken.type === e) {
      this.currentCharacterToken.chars += t;
      return;
    } else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
    this._createCharacterToken(e, t);
  }
  _emitCodePoint(e) {
    let t = ke(e) ? f.WHITESPACE_CHARACTER : e === s.NULL ? f.NULL_CHARACTER : f.CHARACTER;
    this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
  }
  _emitChars(e) {
    this._appendCharToCurrentCharacterToken(f.CHARACTER, e);
  }
  _startCharacterReference() {
    this.returnState = this.state, this.state = r.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? D.Attribute : D.Legacy);
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === r.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === r.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === r.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(e) {
    if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += String.fromCodePoint(e);
    else this._emitCodePoint(e);
  }
  _callState(e) {
    switch (this.state) {
      case r.DATA: {
        this._stateData(e);
        break;
      }
      case r.RCDATA: {
        this._stateRcdata(e);
        break;
      }
      case r.RAWTEXT: {
        this._stateRawtext(e);
        break;
      }
      case r.SCRIPT_DATA: {
        this._stateScriptData(e);
        break;
      }
      case r.PLAINTEXT: {
        this._statePlaintext(e);
        break;
      }
      case r.TAG_OPEN: {
        this._stateTagOpen(e);
        break;
      }
      case r.END_TAG_OPEN: {
        this._stateEndTagOpen(e);
        break;
      }
      case r.TAG_NAME: {
        this._stateTagName(e);
        break;
      }
      case r.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(e);
        break;
      }
      case r.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(e);
        break;
      }
      case r.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(e);
        break;
      }
      case r.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(e);
        break;
      }
      case r.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(e);
        break;
      }
      case r.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(e);
        break;
      }
      case r.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(e);
        break;
      }
      case r.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(e);
        break;
      }
      case r.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(e);
        break;
      }
      case r.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(e);
        break;
      }
      case r.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(e);
        break;
      }
      case r.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(e);
        break;
      }
      case r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(e);
        break;
      }
      case r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(e);
        break;
      }
      case r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(e);
        break;
      }
      case r.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(e);
        break;
      }
      case r.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(e);
        break;
      }
      case r.ATTRIBUTE_NAME: {
        this._stateAttributeName(e);
        break;
      }
      case r.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(e);
        break;
      }
      case r.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(e);
        break;
      }
      case r.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(e);
        break;
      }
      case r.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(e);
        break;
      }
      case r.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(e);
        break;
      }
      case r.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(e);
        break;
      }
      case r.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(e);
        break;
      }
      case r.BOGUS_COMMENT: {
        this._stateBogusComment(e);
        break;
      }
      case r.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(e);
        break;
      }
      case r.COMMENT_START: {
        this._stateCommentStart(e);
        break;
      }
      case r.COMMENT_START_DASH: {
        this._stateCommentStartDash(e);
        break;
      }
      case r.COMMENT: {
        this._stateComment(e);
        break;
      }
      case r.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(e);
        break;
      }
      case r.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(e);
        break;
      }
      case r.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(e);
        break;
      }
      case r.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(e);
        break;
      }
      case r.COMMENT_END_DASH: {
        this._stateCommentEndDash(e);
        break;
      }
      case r.COMMENT_END: {
        this._stateCommentEnd(e);
        break;
      }
      case r.COMMENT_END_BANG: {
        this._stateCommentEndBang(e);
        break;
      }
      case r.DOCTYPE: {
        this._stateDoctype(e);
        break;
      }
      case r.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(e);
        break;
      }
      case r.DOCTYPE_NAME: {
        this._stateDoctypeName(e);
        break;
      }
      case r.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(e);
        break;
      }
      case r.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(e);
        break;
      }
      case r.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(e);
        break;
      }
      case r.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(e);
        break;
      }
      case r.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(e);
        break;
      }
      case r.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(e);
        break;
      }
      case r.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
        break;
      }
      case r.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(e);
        break;
      }
      case r.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(e);
        break;
      }
      case r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(e);
        break;
      }
      case r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(e);
        break;
      }
      case r.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(e);
        break;
      }
      case r.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(e);
        break;
      }
      case r.CDATA_SECTION: {
        this._stateCdataSection(e);
        break;
      }
      case r.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(e);
        break;
      }
      case r.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(e);
        break;
      }
      case r.CHARACTER_REFERENCE: {
        this._stateCharacterReference();
        break;
      }
      case r.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(e);
        break;
      }
      default:
        throw Error("Unknown state");
    }
  }
  _stateData(e) {
    switch (e) {
      case s.LESS_THAN_SIGN: {
        this.state = r.TAG_OPEN;
        break;
      }
      case s.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._emitCodePoint(e);
        break;
      }
      case s.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _stateRcdata(e) {
    switch (e) {
      case s.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case s.LESS_THAN_SIGN: {
        this.state = r.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _stateRawtext(e) {
    switch (e) {
      case s.LESS_THAN_SIGN: {
        this.state = r.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _stateScriptData(e) {
    switch (e) {
      case s.LESS_THAN_SIGN: {
        this.state = r.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _statePlaintext(e) {
    switch (e) {
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _stateTagOpen(e) {
    if (M(e)) this._createStartTagToken(), this.state = r.TAG_NAME, this._stateTagName(e);
    else switch (e) {
      case s.EXCLAMATION_MARK: {
        this.state = r.MARKUP_DECLARATION_OPEN;
        break;
      }
      case s.SOLIDUS: {
        this.state = r.END_TAG_OPEN;
        break;
      }
      case s.QUESTION_MARK: {
        this._err(o.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = r.BOGUS_COMMENT, this._stateBogusComment(e);
        break;
      }
      case s.EOF: {
        this._err(o.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = r.DATA, this._stateData(e);
    }
  }
  _stateEndTagOpen(e) {
    if (M(e)) this._createEndTagToken(), this.state = r.TAG_NAME, this._stateTagName(e);
    else switch (e) {
      case s.GREATER_THAN_SIGN: {
        this._err(o.missingEndTagName), this.state = r.DATA;
        break;
      }
      case s.EOF: {
        this._err(o.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = r.BOGUS_COMMENT, this._stateBogusComment(e);
    }
  }
  _stateTagName(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this.state = r.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case s.SOLIDUS: {
        this.state = r.SELF_CLOSING_START_TAG;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA, this.emitCurrentTagToken();
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.tagName += m;
        break;
      }
      case s.EOF: {
        this._err(o.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        t.tagName += String.fromCodePoint(U(e) ? Z(e) : e);
    }
  }
  _stateRcdataLessThanSign(e) {
    if (e === s.SOLIDUS) this.state = r.RCDATA_END_TAG_OPEN;
    else this._emitChars("<"), this.state = r.RCDATA, this._stateRcdata(e);
  }
  _stateRcdataEndTagOpen(e) {
    if (M(e)) this.state = r.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e);
    else this._emitChars("</"), this.state = r.RCDATA, this._stateRcdata(e);
  }
  handleSpecialEndTag(e) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, false)) return !this._ensureHibernation();
    this._createEndTagToken();
    let t = this.currentToken;
    switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = r.BEFORE_ATTRIBUTE_NAME, false;
      case s.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = r.SELF_CLOSING_START_TAG, false;
      case s.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = r.DATA, false;
      default:
        return !this._ensureHibernation();
    }
  }
  _stateRcdataEndTagName(e) {
    if (this.handleSpecialEndTag(e)) this._emitChars("</"), this.state = r.RCDATA, this._stateRcdata(e);
  }
  _stateRawtextLessThanSign(e) {
    if (e === s.SOLIDUS) this.state = r.RAWTEXT_END_TAG_OPEN;
    else this._emitChars("<"), this.state = r.RAWTEXT, this._stateRawtext(e);
  }
  _stateRawtextEndTagOpen(e) {
    if (M(e)) this.state = r.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e);
    else this._emitChars("</"), this.state = r.RAWTEXT, this._stateRawtext(e);
  }
  _stateRawtextEndTagName(e) {
    if (this.handleSpecialEndTag(e)) this._emitChars("</"), this.state = r.RAWTEXT, this._stateRawtext(e);
  }
  _stateScriptDataLessThanSign(e) {
    switch (e) {
      case s.SOLIDUS: {
        this.state = r.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case s.EXCLAMATION_MARK: {
        this.state = r.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = r.SCRIPT_DATA, this._stateScriptData(e);
    }
  }
  _stateScriptDataEndTagOpen(e) {
    if (M(e)) this.state = r.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e);
    else this._emitChars("</"), this.state = r.SCRIPT_DATA, this._stateScriptData(e);
  }
  _stateScriptDataEndTagName(e) {
    if (this.handleSpecialEndTag(e)) this._emitChars("</"), this.state = r.SCRIPT_DATA, this._stateScriptData(e);
  }
  _stateScriptDataEscapeStart(e) {
    if (e === s.HYPHEN_MINUS) this.state = r.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-");
    else this.state = r.SCRIPT_DATA, this._stateScriptData(e);
  }
  _stateScriptDataEscapeStartDash(e) {
    if (e === s.HYPHEN_MINUS) this.state = r.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
    else this.state = r.SCRIPT_DATA, this._stateScriptData(e);
  }
  _stateScriptDataEscaped(e) {
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case s.LESS_THAN_SIGN: {
        this.state = r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _stateScriptDataEscapedDash(e) {
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case s.LESS_THAN_SIGN: {
        this.state = r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.state = r.SCRIPT_DATA_ESCAPED, this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = r.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
    }
  }
  _stateScriptDataEscapedDashDash(e) {
    switch (e) {
      case s.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case s.LESS_THAN_SIGN: {
        this.state = r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this.state = r.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.state = r.SCRIPT_DATA_ESCAPED, this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = r.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
    }
  }
  _stateScriptDataEscapedLessThanSign(e) {
    if (e === s.SOLIDUS) this.state = r.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
    else if (M(e)) this._emitChars("<"), this.state = r.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e);
    else this._emitChars("<"), this.state = r.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e);
  }
  _stateScriptDataEscapedEndTagOpen(e) {
    if (M(e)) this.state = r.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e);
    else this._emitChars("</"), this.state = r.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e);
  }
  _stateScriptDataEscapedEndTagName(e) {
    if (this.handleSpecialEndTag(e)) this._emitChars("</"), this.state = r.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e);
  }
  _stateScriptDataDoubleEscapeStart(e) {
    if (this.preprocessor.startsWith(C.SCRIPT, false) && Be(this.preprocessor.peek(C.SCRIPT.length))) {
      this._emitCodePoint(e);
      for (let t = 0; t < C.SCRIPT.length; t++) this._emitCodePoint(this._consume());
      this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else if (!this._ensureHibernation()) this.state = r.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e);
  }
  _stateScriptDataDoubleEscaped(e) {
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case s.LESS_THAN_SIGN: {
        this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _stateScriptDataDoubleEscapedDash(e) {
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case s.LESS_THAN_SIGN: {
        this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
    }
  }
  _stateScriptDataDoubleEscapedDashDash(e) {
    switch (e) {
      case s.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case s.LESS_THAN_SIGN: {
        this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this.state = r.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(m);
        break;
      }
      case s.EOF: {
        this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
    }
  }
  _stateScriptDataDoubleEscapedLessThanSign(e) {
    if (e === s.SOLIDUS) this.state = r.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/");
    else this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e);
  }
  _stateScriptDataDoubleEscapeEnd(e) {
    if (this.preprocessor.startsWith(C.SCRIPT, false) && Be(this.preprocessor.peek(C.SCRIPT.length))) {
      this._emitCodePoint(e);
      for (let t = 0; t < C.SCRIPT.length; t++) this._emitCodePoint(this._consume());
      this.state = r.SCRIPT_DATA_ESCAPED;
    } else if (!this._ensureHibernation()) this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e);
  }
  _stateBeforeAttributeName(e) {
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.SOLIDUS:
      case s.GREATER_THAN_SIGN:
      case s.EOF: {
        this.state = r.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
        break;
      }
      case s.EQUALS_SIGN: {
        this._err(o.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = r.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = r.ATTRIBUTE_NAME, this._stateAttributeName(e);
    }
  }
  _stateAttributeName(e) {
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
      case s.SOLIDUS:
      case s.GREATER_THAN_SIGN:
      case s.EOF: {
        this._leaveAttrName(), this.state = r.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
        break;
      }
      case s.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = r.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case s.QUOTATION_MARK:
      case s.APOSTROPHE:
      case s.LESS_THAN_SIGN: {
        this._err(o.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.currentAttr.name += m;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(U(e) ? Z(e) : e);
    }
  }
  _stateAfterAttributeName(e) {
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.SOLIDUS: {
        this.state = r.SELF_CLOSING_START_TAG;
        break;
      }
      case s.EQUALS_SIGN: {
        this.state = r.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA, this.emitCurrentTagToken();
        break;
      }
      case s.EOF: {
        this._err(o.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = r.ATTRIBUTE_NAME, this._stateAttributeName(e);
    }
  }
  _stateBeforeAttributeValue(e) {
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.QUOTATION_MARK: {
        this.state = r.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case s.APOSTROPHE: {
        this.state = r.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.missingAttributeValue), this.state = r.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = r.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
    }
  }
  _stateAttributeValueDoubleQuoted(e) {
    switch (e) {
      case s.QUOTATION_MARK: {
        this.state = r.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case s.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.currentAttr.value += m;
        break;
      }
      case s.EOF: {
        this._err(o.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(e);
    }
  }
  _stateAttributeValueSingleQuoted(e) {
    switch (e) {
      case s.APOSTROPHE: {
        this.state = r.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case s.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.currentAttr.value += m;
        break;
      }
      case s.EOF: {
        this._err(o.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(e);
    }
  }
  _stateAttributeValueUnquoted(e) {
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this._leaveAttrValue(), this.state = r.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case s.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = r.DATA, this.emitCurrentTagToken();
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this.currentAttr.value += m;
        break;
      }
      case s.QUOTATION_MARK:
      case s.APOSTROPHE:
      case s.LESS_THAN_SIGN:
      case s.EQUALS_SIGN:
      case s.GRAVE_ACCENT: {
        this._err(o.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
        break;
      }
      case s.EOF: {
        this._err(o.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(e);
    }
  }
  _stateAfterAttributeValueQuoted(e) {
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this._leaveAttrValue(), this.state = r.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case s.SOLIDUS: {
        this._leaveAttrValue(), this.state = r.SELF_CLOSING_START_TAG;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = r.DATA, this.emitCurrentTagToken();
        break;
      }
      case s.EOF: {
        this._err(o.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingWhitespaceBetweenAttributes), this.state = r.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
    }
  }
  _stateSelfClosingStartTag(e) {
    switch (e) {
      case s.GREATER_THAN_SIGN: {
        let t = this.currentToken;
        t.selfClosing = true, this.state = r.DATA, this.emitCurrentTagToken();
        break;
      }
      case s.EOF: {
        this._err(o.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.unexpectedSolidusInTag), this.state = r.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
    }
  }
  _stateBogusComment(e) {
    let t = this.currentToken;
    switch (e) {
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA, this.emitCurrentComment(t);
        break;
      }
      case s.EOF: {
        this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.data += m;
        break;
      }
      default:
        t.data += String.fromCodePoint(e);
    }
  }
  _stateMarkupDeclarationOpen(e) {
    if (this._consumeSequenceIfMatch(C.DASH_DASH, true)) this._createCommentToken(C.DASH_DASH.length + 1), this.state = r.COMMENT_START;
    else if (this._consumeSequenceIfMatch(C.DOCTYPE, false)) this.currentLocation = this.getCurrentLocation(C.DOCTYPE.length + 1), this.state = r.DOCTYPE;
    else if (this._consumeSequenceIfMatch(C.CDATA_START, true)) if (this.inForeignNode) this.state = r.CDATA_SECTION;
    else this._err(o.cdataInHtmlContent), this._createCommentToken(C.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = r.BOGUS_COMMENT;
    else if (!this._ensureHibernation()) this._err(o.incorrectlyOpenedComment), this._createCommentToken(2), this.state = r.BOGUS_COMMENT, this._stateBogusComment(e);
  }
  _stateCommentStart(e) {
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.COMMENT_START_DASH;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.abruptClosingOfEmptyComment), this.state = r.DATA;
        let t = this.currentToken;
        this.emitCurrentComment(t);
        break;
      }
      default:
        this.state = r.COMMENT, this._stateComment(e);
    }
  }
  _stateCommentStartDash(e) {
    let t = this.currentToken;
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.COMMENT_END;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.abruptClosingOfEmptyComment), this.state = r.DATA, this.emitCurrentComment(t);
        break;
      }
      case s.EOF: {
        this._err(o.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "-", this.state = r.COMMENT, this._stateComment(e);
    }
  }
  _stateComment(e) {
    let t = this.currentToken;
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.COMMENT_END_DASH;
        break;
      }
      case s.LESS_THAN_SIGN: {
        t.data += "<", this.state = r.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.data += m;
        break;
      }
      case s.EOF: {
        this._err(o.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += String.fromCodePoint(e);
    }
  }
  _stateCommentLessThanSign(e) {
    let t = this.currentToken;
    switch (e) {
      case s.EXCLAMATION_MARK: {
        t.data += "!", this.state = r.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case s.LESS_THAN_SIGN: {
        t.data += "<";
        break;
      }
      default:
        this.state = r.COMMENT, this._stateComment(e);
    }
  }
  _stateCommentLessThanSignBang(e) {
    if (e === s.HYPHEN_MINUS) this.state = r.COMMENT_LESS_THAN_SIGN_BANG_DASH;
    else this.state = r.COMMENT, this._stateComment(e);
  }
  _stateCommentLessThanSignBangDash(e) {
    if (e === s.HYPHEN_MINUS) this.state = r.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
    else this.state = r.COMMENT_END_DASH, this._stateCommentEndDash(e);
  }
  _stateCommentLessThanSignBangDashDash(e) {
    if (e !== s.GREATER_THAN_SIGN && e !== s.EOF) this._err(o.nestedComment);
    this.state = r.COMMENT_END, this._stateCommentEnd(e);
  }
  _stateCommentEndDash(e) {
    let t = this.currentToken;
    switch (e) {
      case s.HYPHEN_MINUS: {
        this.state = r.COMMENT_END;
        break;
      }
      case s.EOF: {
        this._err(o.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "-", this.state = r.COMMENT, this._stateComment(e);
    }
  }
  _stateCommentEnd(e) {
    let t = this.currentToken;
    switch (e) {
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA, this.emitCurrentComment(t);
        break;
      }
      case s.EXCLAMATION_MARK: {
        this.state = r.COMMENT_END_BANG;
        break;
      }
      case s.HYPHEN_MINUS: {
        t.data += "-";
        break;
      }
      case s.EOF: {
        this._err(o.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "--", this.state = r.COMMENT, this._stateComment(e);
    }
  }
  _stateCommentEndBang(e) {
    let t = this.currentToken;
    switch (e) {
      case s.HYPHEN_MINUS: {
        t.data += "--!", this.state = r.COMMENT_END_DASH;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.incorrectlyClosedComment), this.state = r.DATA, this.emitCurrentComment(t);
        break;
      }
      case s.EOF: {
        this._err(o.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "--!", this.state = r.COMMENT, this._stateComment(e);
    }
  }
  _stateDoctype(e) {
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this.state = r.BEFORE_DOCTYPE_NAME;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this.state = r.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), this._createDoctypeToken(null);
        let t = this.currentToken;
        t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingWhitespaceBeforeDoctypeName), this.state = r.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
    }
  }
  _stateBeforeDoctypeName(e) {
    if (U(e)) this._createDoctypeToken(String.fromCharCode(Z(e))), this.state = r.DOCTYPE_NAME;
    else switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), this._createDoctypeToken(m), this.state = r.DOCTYPE_NAME;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.missingDoctypeName), this._createDoctypeToken(null);
        let t = this.currentToken;
        t.forceQuirks = true, this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), this._createDoctypeToken(null);
        let t = this.currentToken;
        t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._createDoctypeToken(String.fromCodePoint(e)), this.state = r.DOCTYPE_NAME;
    }
  }
  _stateDoctypeName(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this.state = r.AFTER_DOCTYPE_NAME;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.name += m;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.name += String.fromCodePoint(U(e) ? Z(e) : e);
    }
  }
  _stateAfterDoctypeName(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        if (this._consumeSequenceIfMatch(C.PUBLIC, false)) this.state = r.AFTER_DOCTYPE_PUBLIC_KEYWORD;
        else if (this._consumeSequenceIfMatch(C.SYSTEM, false)) this.state = r.AFTER_DOCTYPE_SYSTEM_KEYWORD;
        else if (!this._ensureHibernation()) this._err(o.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = true, this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateAfterDoctypePublicKeyword(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this.state = r.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case s.QUOTATION_MARK: {
        this._err(o.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case s.APOSTROPHE: {
        this._err(o.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.missingDoctypePublicIdentifier), t.forceQuirks = true, this.state = r.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = true, this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateBeforeDoctypePublicIdentifier(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.QUOTATION_MARK: {
        t.publicId = "", this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case s.APOSTROPHE: {
        t.publicId = "", this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.missingDoctypePublicIdentifier), t.forceQuirks = true, this.state = r.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = true, this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateDoctypePublicIdentifierDoubleQuoted(e) {
    let t = this.currentToken;
    switch (e) {
      case s.QUOTATION_MARK: {
        this.state = r.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.publicId += m;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.abruptDoctypePublicIdentifier), t.forceQuirks = true, this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.publicId += String.fromCodePoint(e);
    }
  }
  _stateDoctypePublicIdentifierSingleQuoted(e) {
    let t = this.currentToken;
    switch (e) {
      case s.APOSTROPHE: {
        this.state = r.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.publicId += m;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.abruptDoctypePublicIdentifier), t.forceQuirks = true, this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.publicId += String.fromCodePoint(e);
    }
  }
  _stateAfterDoctypePublicIdentifier(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this.state = r.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case s.QUOTATION_MARK: {
        this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case s.APOSTROPHE: {
        this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = true, this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.QUOTATION_MARK: {
        t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case s.APOSTROPHE: {
        t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = true, this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateAfterDoctypeSystemKeyword(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED: {
        this.state = r.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case s.QUOTATION_MARK: {
        this._err(o.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case s.APOSTROPHE: {
        this._err(o.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.missingDoctypeSystemIdentifier), t.forceQuirks = true, this.state = r.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = true, this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateBeforeDoctypeSystemIdentifier(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.QUOTATION_MARK: {
        t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case s.APOSTROPHE: {
        t.systemId = "", this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.missingDoctypeSystemIdentifier), t.forceQuirks = true, this.state = r.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = true, this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateDoctypeSystemIdentifierDoubleQuoted(e) {
    let t = this.currentToken;
    switch (e) {
      case s.QUOTATION_MARK: {
        this.state = r.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.systemId += m;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.abruptDoctypeSystemIdentifier), t.forceQuirks = true, this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.systemId += String.fromCodePoint(e);
    }
  }
  _stateDoctypeSystemIdentifierSingleQuoted(e) {
    let t = this.currentToken;
    switch (e) {
      case s.APOSTROPHE: {
        this.state = r.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter), t.systemId += m;
        break;
      }
      case s.GREATER_THAN_SIGN: {
        this._err(o.abruptDoctypeSystemIdentifier), t.forceQuirks = true, this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.systemId += String.fromCodePoint(e);
    }
  }
  _stateAfterDoctypeSystemIdentifier(e) {
    let t = this.currentToken;
    switch (e) {
      case s.SPACE:
      case s.LINE_FEED:
      case s.TABULATION:
      case s.FORM_FEED:
        break;
      case s.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.EOF: {
        this._err(o.eofInDoctype), t.forceQuirks = true, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(o.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = r.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
    }
  }
  _stateBogusDoctype(e) {
    let t = this.currentToken;
    switch (e) {
      case s.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(t), this.state = r.DATA;
        break;
      }
      case s.NULL: {
        this._err(o.unexpectedNullCharacter);
        break;
      }
      case s.EOF: {
        this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
    }
  }
  _stateCdataSection(e) {
    switch (e) {
      case s.RIGHT_SQUARE_BRACKET: {
        this.state = r.CDATA_SECTION_BRACKET;
        break;
      }
      case s.EOF: {
        this._err(o.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(e);
    }
  }
  _stateCdataSectionBracket(e) {
    if (e === s.RIGHT_SQUARE_BRACKET) this.state = r.CDATA_SECTION_END;
    else this._emitChars("]"), this.state = r.CDATA_SECTION, this._stateCdataSection(e);
  }
  _stateCdataSectionEnd(e) {
    switch (e) {
      case s.GREATER_THAN_SIGN: {
        this.state = r.DATA;
        break;
      }
      case s.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = r.CDATA_SECTION, this._stateCdataSection(e);
    }
  }
  _stateCharacterReference() {
    let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
    if (e < 0) if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
    else {
      this.active = false, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = true;
      return;
    }
    if (e === 0) this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(s.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && xe(this.preprocessor.peek(1)) ? r.AMBIGUOUS_AMPERSAND : this.returnState;
    else this.state = this.returnState;
  }
  _stateAmbiguousAmpersand(e) {
    if (xe(e)) this._flushCodePointConsumedAsCharacterReference(e);
    else {
      if (e === s.SEMICOLON) this._err(o.unknownNamedCharacterReference);
      this.state = this.returnState, this._callState(e);
    }
  }
}
var ye = /* @__PURE__ */ new Set([u.DD, u.DT, u.LI, u.OPTGROUP, u.OPTION, u.P, u.RB, u.RP, u.RT, u.RTC]), He = /* @__PURE__ */ new Set([...ye, u.CAPTION, u.COLGROUP, u.TBODY, u.TD, u.TFOOT, u.TH, u.THEAD, u.TR]), ee = /* @__PURE__ */ new Set([u.APPLET, u.CAPTION, u.HTML, u.MARQUEE, u.OBJECT, u.TABLE, u.TD, u.TEMPLATE, u.TH]), Ut = /* @__PURE__ */ new Set([...ee, u.OL, u.UL]), Ft = /* @__PURE__ */ new Set([...ee, u.BUTTON]), Ue = /* @__PURE__ */ new Set([u.ANNOTATION_XML, u.MI, u.MN, u.MO, u.MS, u.MTEXT]), Fe = /* @__PURE__ */ new Set([u.DESC, u.FOREIGN_OBJECT, u.TITLE]), yt = /* @__PURE__ */ new Set([u.TR, u.TEMPLATE, u.HTML]), wt = /* @__PURE__ */ new Set([u.TBODY, u.TFOOT, u.THEAD, u.TEMPLATE, u.HTML]), Yt = /* @__PURE__ */ new Set([u.TABLE, u.TEMPLATE, u.HTML]), vt = /* @__PURE__ */ new Set([u.TD, u.TH]);
class he {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(e, t, a) {
    this.treeAdapter = t, this.handler = a, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = u.UNKNOWN, this.current = e;
  }
  _indexOf(e) {
    return this.items.lastIndexOf(e, this.stackTop);
  }
  _isInTemplate() {
    return this.currentTagId === u.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === E.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  push(e, t) {
    if (this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate()) this.tmplCount++;
    this.handler.onItemPush(e, t, true);
  }
  pop() {
    let e = this.current;
    if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;
    this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, true);
  }
  replace(e, t) {
    let a = this._indexOf(e);
    if (this.items[a] = t, a === this.stackTop) this.current = t;
  }
  insertAfter(e, t, a) {
    let n = this._indexOf(e) + 1;
    if (this.items.splice(n, 0, t), this.tagIDs.splice(n, 0, a), this.stackTop++, n === this.stackTop) this._updateCurrentElement();
    this.handler.onItemPush(this.current, this.currentTagId, n === this.stackTop);
  }
  popUntilTagNamePopped(e) {
    let t = this.stackTop + 1;
    do
      t = this.tagIDs.lastIndexOf(e, t - 1);
    while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== E.HTML);
    this.shortenToLength(t < 0 ? 0 : t);
  }
  shortenToLength(e) {
    while (this.stackTop >= e) {
      let t = this.current;
      if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount -= 1;
      this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
    }
  }
  popUntilElementPopped(e) {
    let t = this._indexOf(e);
    this.shortenToLength(t < 0 ? 0 : t);
  }
  popUntilPopped(e, t) {
    let a = this._indexOfTagNames(e, t);
    this.shortenToLength(a < 0 ? 0 : a);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(H, E.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(vt, E.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(e, t) {
    for (let a = this.stackTop; a >= 0; a--) if (e.has(this.tagIDs[a]) && this.treeAdapter.getNamespaceURI(this.items[a]) === t) return a;
    return -1;
  }
  clearBackTo(e, t) {
    let a = this._indexOfTagNames(e, t);
    this.shortenToLength(a + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(Yt, E.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(wt, E.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(yt, E.HTML);
  }
  remove(e) {
    let t = this._indexOf(e);
    if (t >= 0) if (t === this.stackTop) this.pop();
    else this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, false);
  }
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === u.BODY ? this.items[1] : null;
  }
  contains(e) {
    return this._indexOf(e) > -1;
  }
  getCommonAncestor(e) {
    let t = this._indexOf(e) - 1;
    return t >= 0 ? this.items[t] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === u.HTML;
  }
  hasInDynamicScope(e, t) {
    for (let a = this.stackTop; a >= 0; a--) {
      let n = this.tagIDs[a];
      switch (this.treeAdapter.getNamespaceURI(this.items[a])) {
        case E.HTML: {
          if (n === e) return true;
          if (t.has(n)) return false;
          break;
        }
        case E.SVG: {
          if (Fe.has(n)) return false;
          break;
        }
        case E.MATHML: {
          if (Ue.has(n)) return false;
          break;
        }
      }
    }
    return true;
  }
  hasInScope(e) {
    return this.hasInDynamicScope(e, ee);
  }
  hasInListItemScope(e) {
    return this.hasInDynamicScope(e, Ut);
  }
  hasInButtonScope(e) {
    return this.hasInDynamicScope(e, Ft);
  }
  hasNumberedHeaderInScope() {
    for (let e = this.stackTop; e >= 0; e--) {
      let t = this.tagIDs[e];
      switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
        case E.HTML: {
          if (H.has(t)) return true;
          if (ee.has(t)) return false;
          break;
        }
        case E.SVG: {
          if (Fe.has(t)) return false;
          break;
        }
        case E.MATHML: {
          if (Ue.has(t)) return false;
          break;
        }
      }
    }
    return true;
  }
  hasInTableScope(e) {
    for (let t = this.stackTop; t >= 0; t--) {
      if (this.treeAdapter.getNamespaceURI(this.items[t]) !== E.HTML) continue;
      switch (this.tagIDs[t]) {
        case e:
          return true;
        case u.TABLE:
        case u.HTML:
          return false;
      }
    }
    return true;
  }
  hasTableBodyContextInTableScope() {
    for (let e = this.stackTop; e >= 0; e--) {
      if (this.treeAdapter.getNamespaceURI(this.items[e]) !== E.HTML) continue;
      switch (this.tagIDs[e]) {
        case u.TBODY:
        case u.THEAD:
        case u.TFOOT:
          return true;
        case u.TABLE:
        case u.HTML:
          return false;
      }
    }
    return true;
  }
  hasInSelectScope(e) {
    for (let t = this.stackTop; t >= 0; t--) {
      if (this.treeAdapter.getNamespaceURI(this.items[t]) !== E.HTML) continue;
      switch (this.tagIDs[t]) {
        case e:
          return true;
        case u.OPTION:
        case u.OPTGROUP:
          break;
        default:
          return false;
      }
    }
    return true;
  }
  generateImpliedEndTags() {
    while (ye.has(this.currentTagId)) this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    while (He.has(this.currentTagId)) this.pop();
  }
  generateImpliedEndTagsWithExclusion(e) {
    while (this.currentTagId !== e && He.has(this.currentTagId)) this.pop();
  }
}
var L;
(function(e) {
  e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(L || (L = {}));
var we = { type: L.Marker };
class le {
  constructor(e) {
    this.treeAdapter = e, this.entries = [], this.bookmark = null;
  }
  _getNoahArkConditionCandidates(e, t) {
    let a = [], n = t.length, d = this.treeAdapter.getTagName(e), h = this.treeAdapter.getNamespaceURI(e);
    for (let l = 0; l < this.entries.length; l++) {
      let _ = this.entries[l];
      if (_.type === L.Marker) break;
      let { element: b } = _;
      if (this.treeAdapter.getTagName(b) === d && this.treeAdapter.getNamespaceURI(b) === h) {
        let p = this.treeAdapter.getAttrList(b);
        if (p.length === n) a.push({ idx: l, attrs: p });
      }
    }
    return a;
  }
  _ensureNoahArkCondition(e) {
    if (this.entries.length < 3) return;
    let t = this.treeAdapter.getAttrList(e), a = this._getNoahArkConditionCandidates(e, t);
    if (a.length < 3) return;
    let n = new Map(t.map((h) => [h.name, h.value])), d = 0;
    for (let h = 0; h < a.length; h++) {
      let l = a[h];
      if (l.attrs.every((_) => n.get(_.name) === _.value)) {
        if (d += 1, d >= 3) this.entries.splice(l.idx, 1);
      }
    }
  }
  insertMarker() {
    this.entries.unshift(we);
  }
  pushElement(e, t) {
    this._ensureNoahArkCondition(e), this.entries.unshift({ type: L.Element, element: e, token: t });
  }
  insertElementAfterBookmark(e, t) {
    let a = this.entries.indexOf(this.bookmark);
    this.entries.splice(a, 0, { type: L.Element, element: e, token: t });
  }
  removeEntry(e) {
    let t = this.entries.indexOf(e);
    if (t >= 0) this.entries.splice(t, 1);
  }
  clearToLastMarker() {
    let e = this.entries.indexOf(we);
    if (e >= 0) this.entries.splice(0, e + 1);
    else this.entries.length = 0;
  }
  getElementEntryInScopeWithTagName(e) {
    let t = this.entries.find((a) => a.type === L.Marker || this.treeAdapter.getTagName(a.element) === e);
    return t && t.type === L.Element ? t : null;
  }
  getElementEntry(e) {
    return this.entries.find((t) => t.type === L.Element && t.element === e);
  }
}
var S = { createDocument() {
  return { nodeName: "#document", mode: O.NO_QUIRKS, childNodes: [] };
}, createDocumentFragment() {
  return { nodeName: "#document-fragment", childNodes: [] };
}, createElement(e, t, a) {
  return { nodeName: e, tagName: e, attrs: a, namespaceURI: t, childNodes: [], parentNode: null };
}, createCommentNode(e) {
  return { nodeName: "#comment", data: e, parentNode: null };
}, createTextNode(e) {
  return { nodeName: "#text", value: e, parentNode: null };
}, appendChild(e, t) {
  e.childNodes.push(t), t.parentNode = e;
}, insertBefore(e, t, a) {
  let n = e.childNodes.indexOf(a);
  e.childNodes.splice(n, 0, t), t.parentNode = e;
}, setTemplateContent(e, t) {
  e.content = t;
}, getTemplateContent(e) {
  return e.content;
}, setDocumentType(e, t, a, n) {
  let d = e.childNodes.find((h) => h.nodeName === "#documentType");
  if (d) d.name = t, d.publicId = a, d.systemId = n;
  else {
    let h = { nodeName: "#documentType", name: t, publicId: a, systemId: n, parentNode: null };
    S.appendChild(e, h);
  }
}, setDocumentMode(e, t) {
  e.mode = t;
}, getDocumentMode(e) {
  return e.mode;
}, detachNode(e) {
  if (e.parentNode) {
    let t = e.parentNode.childNodes.indexOf(e);
    e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
  }
}, insertText(e, t) {
  if (e.childNodes.length > 0) {
    let a = e.childNodes[e.childNodes.length - 1];
    if (S.isTextNode(a)) {
      a.value += t;
      return;
    }
  }
  S.appendChild(e, S.createTextNode(t));
}, insertTextBefore(e, t, a) {
  let n = e.childNodes[e.childNodes.indexOf(a) - 1];
  if (n && S.isTextNode(n)) n.value += t;
  else S.insertBefore(e, S.createTextNode(t), a);
}, adoptAttributes(e, t) {
  let a = new Set(e.attrs.map((n) => n.name));
  for (let n = 0; n < t.length; n++) if (!a.has(t[n].name)) e.attrs.push(t[n]);
}, getFirstChild(e) {
  return e.childNodes[0];
}, getChildNodes(e) {
  return e.childNodes;
}, getParentNode(e) {
  return e.parentNode;
}, getAttrList(e) {
  return e.attrs;
}, getTagName(e) {
  return e.tagName;
}, getNamespaceURI(e) {
  return e.namespaceURI;
}, getTextNodeContent(e) {
  return e.value;
}, getCommentNodeContent(e) {
  return e.data;
}, getDocumentTypeNodeName(e) {
  return e.name;
}, getDocumentTypeNodePublicId(e) {
  return e.publicId;
}, getDocumentTypeNodeSystemId(e) {
  return e.systemId;
}, isTextNode(e) {
  return e.nodeName === "#text";
}, isCommentNode(e) {
  return e.nodeName === "#comment";
}, isDocumentTypeNode(e) {
  return e.nodeName === "#documentType";
}, isElementNode(e) {
  return Object.prototype.hasOwnProperty.call(e, "tagName");
}, setNodeSourceCodeLocation(e, t) {
  e.sourceCodeLocation = t;
}, getNodeSourceCodeLocation(e) {
  return e.sourceCodeLocation;
}, updateNodeSourceCodeLocation(e, t) {
  e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
} };
var ve = "html", Qt = "about:legacy-compat", Gt = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", Qe = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"], Wt = [...Qe, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"], qt = /* @__PURE__ */ new Set(["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"]), Ge = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], Xt = [...Ge, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"];
function Ye(e, t) {
  return t.some((a) => e.startsWith(a));
}
function We(e) {
  return e.name === ve && e.publicId === null && (e.systemId === null || e.systemId === Qt);
}
function qe(e) {
  if (e.name !== ve) return O.QUIRKS;
  let { systemId: t } = e;
  if (t && t.toLowerCase() === Gt) return O.QUIRKS;
  let { publicId: a } = e;
  if (a !== null) {
    if (a = a.toLowerCase(), qt.has(a)) return O.QUIRKS;
    let n = t === null ? Wt : Qe;
    if (Ye(a, n)) return O.QUIRKS;
    if (n = t === null ? Ge : Xt, Ye(a, n)) return O.LIMITED_QUIRKS;
  }
  return O.NO_QUIRKS;
}
var Xe = { TEXT_HTML: "text/html", APPLICATION_XML: "application/xhtml+xml" }, Vt = "definitionurl", zt = "definitionURL", jt = new Map(["attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map((e) => [e.toLowerCase(), e])), Jt = /* @__PURE__ */ new Map([["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: E.XLINK }], ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: E.XLINK }], ["xlink:href", { prefix: "xlink", name: "href", namespace: E.XLINK }], ["xlink:role", { prefix: "xlink", name: "role", namespace: E.XLINK }], ["xlink:show", { prefix: "xlink", name: "show", namespace: E.XLINK }], ["xlink:title", { prefix: "xlink", name: "title", namespace: E.XLINK }], ["xlink:type", { prefix: "xlink", name: "type", namespace: E.XLINK }], ["xml:lang", { prefix: "xml", name: "lang", namespace: E.XML }], ["xml:space", { prefix: "xml", name: "space", namespace: E.XML }], ["xmlns", { prefix: "", name: "xmlns", namespace: E.XMLNS }], ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: E.XMLNS }]]), $t = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map((e) => [e.toLowerCase(), e])), Zt = /* @__PURE__ */ new Set([u.B, u.BIG, u.BLOCKQUOTE, u.BODY, u.BR, u.CENTER, u.CODE, u.DD, u.DIV, u.DL, u.DT, u.EM, u.EMBED, u.H1, u.H2, u.H3, u.H4, u.H5, u.H6, u.HEAD, u.HR, u.I, u.IMG, u.LI, u.LISTING, u.MENU, u.META, u.NOBR, u.OL, u.P, u.PRE, u.RUBY, u.S, u.SMALL, u.SPAN, u.STRONG, u.STRIKE, u.SUB, u.SUP, u.TABLE, u.TT, u.U, u.UL, u.VAR]);
function Ke(e) {
  let t = e.tagID;
  return t === u.FONT && e.attrs.some(({ name: n }) => n === g.COLOR || n === g.SIZE || n === g.FACE) || Zt.has(t);
}
function fe(e) {
  for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === Vt) {
    e.attrs[t].name = zt;
    break;
  }
}
function me(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    let a = jt.get(e.attrs[t].name);
    if (a != null) e.attrs[t].name = a;
  }
}
function te(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    let a = Jt.get(e.attrs[t].name);
    if (a) e.attrs[t].prefix = a.prefix, e.attrs[t].name = a.name, e.attrs[t].namespace = a.namespace;
  }
}
function Ve(e) {
  let t = $t.get(e.tagName);
  if (t != null) e.tagName = t, e.tagID = x(e.tagName);
}
function eu(e, t) {
  return t === E.MATHML && (e === u.MI || e === u.MO || e === u.MN || e === u.MS || e === u.MTEXT);
}
function tu(e, t, a) {
  if (t === E.MATHML && e === u.ANNOTATION_XML) {
    for (let n = 0; n < a.length; n++) if (a[n].name === g.ENCODING) {
      let d = a[n].value.toLowerCase();
      return d === Xe.TEXT_HTML || d === Xe.APPLICATION_XML;
    }
  }
  return t === E.SVG && (e === u.FOREIGN_OBJECT || e === u.DESC || e === u.TITLE);
}
function ze(e, t, a, n) {
  return (!n || n === E.HTML) && tu(e, t, a) || (!n || n === E.MATHML) && eu(e, t);
}
var uu = "hidden", au = 8, su = 3, i;
(function(e) {
  e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(i || (i = {}));
var ru = { startLine: -1, startCol: -1, startOffset: -1, endLine: -1, endCol: -1, endOffset: -1 }, et = /* @__PURE__ */ new Set([u.TABLE, u.TBODY, u.TFOOT, u.THEAD, u.TR]), Je = { scriptingEnabled: true, sourceCodeLocationInfo: false, treeAdapter: S, onParseError: null };
class re {
  constructor(e, t, a = null, n = null) {
    if (this.fragmentContext = a, this.scriptHandler = n, this.currentToken = null, this.stopped = false, this.insertionMode = i.INITIAL, this.originalInsertionMode = i.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = false, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = false, this.framesetOk = true, this.skipNextNewLine = false, this.fosterParentingEnabled = false, this.options = { ...Je, ...e }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError) this.options.sourceCodeLocationInfo = true;
    this.document = t !== null && t !== void 0 ? t : this.treeAdapter.createDocument(), this.tokenizer = new nDt(this.options, this), this.activeFormattingElements = new le(this.treeAdapter), this.fragmentContextID = a ? x(this.treeAdapter.getTagName(a)) : u.UNKNOWN, this._setContextModes(a !== null && a !== void 0 ? a : this.document, this.fragmentContextID), this.openElements = new he(this.document, this.treeAdapter, this);
  }
  static parse(e, t) {
    let a = new this(t);
    return a.tokenizer.write(e, true), a.document;
  }
  static getFragmentParser(e, t) {
    let a = { ...Je, ...t };
    e !== null && e !== void 0 || (e = a.treeAdapter.createElement(c.TEMPLATE, E.HTML, []));
    let n = a.treeAdapter.createElement("documentmock", E.HTML, []), d = new this(a, n, e);
    if (d.fragmentContextID === u.TEMPLATE) d.tmplInsertionModeStack.unshift(i.IN_TEMPLATE);
    return d._initTokenizerForFragmentParsing(), d._insertFakeRootElement(), d._resetInsertionMode(), d._findFormInFragmentContext(), d;
  }
  getFragment() {
    let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(e, t), t;
  }
  _err(e, t, a) {
    var n;
    if (!this.onParseError) return;
    let d = (n = e.location) !== null && n !== void 0 ? n : ru, h = { code: t, startLine: d.startLine, startCol: d.startCol, startOffset: d.startOffset, endLine: a ? d.startLine : d.endLine, endCol: a ? d.startCol : d.endCol, endOffset: a ? d.startOffset : d.endOffset };
    this.onParseError(h);
  }
  onItemPush(e, t, a) {
    var n, d;
    if ((d = (n = this.treeAdapter).onItemPush) === null || d === void 0 || d.call(n, e), a && this.openElements.stackTop > 0) this._setContextModes(e, t);
  }
  onItemPop(e, t) {
    var a, n;
    if (this.options.sourceCodeLocationInfo) this._setEndLocation(e, this.currentToken);
    if ((n = (a = this.treeAdapter).onItemPop) === null || n === void 0 || n.call(a, e, this.openElements.current), t) {
      let d, h;
      if (this.openElements.stackTop === 0 && this.fragmentContext) d = this.fragmentContext, h = this.fragmentContextID;
      else ({ current: d, currentTagId: h } = this.openElements);
      this._setContextModes(d, h);
    }
  }
  _setContextModes(e, t) {
    let a = e === this.document || this.treeAdapter.getNamespaceURI(e) === E.HTML;
    this.currentNotInHTML = !a, this.tokenizer.inForeignNode = !a && !this._isIntegrationPoint(t, e);
  }
  _switchToTextParsing(e, t) {
    this._insertElement(e, E.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = i.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = i.TEXT, this.originalInsertionMode = i.IN_BODY, this.tokenizer.state = QR.PLAINTEXT;
  }
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let e = this.fragmentContext;
    while (e) {
      if (this.treeAdapter.getTagName(e) === c.FORM) {
        this.formElement = e;
        break;
      }
      e = this.treeAdapter.getParentNode(e);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== E.HTML) return;
    switch (this.fragmentContextID) {
      case u.TITLE:
      case u.TEXTAREA: {
        this.tokenizer.state = QR.RCDATA;
        break;
      }
      case u.STYLE:
      case u.XMP:
      case u.IFRAME:
      case u.NOEMBED:
      case u.NOFRAMES:
      case u.NOSCRIPT: {
        this.tokenizer.state = QR.RAWTEXT;
        break;
      }
      case u.SCRIPT: {
        this.tokenizer.state = QR.SCRIPT_DATA;
        break;
      }
      case u.PLAINTEXT: {
        this.tokenizer.state = QR.PLAINTEXT;
        break;
      }
      default:
    }
  }
  _setDocumentType(e) {
    let t = e.name || "", a = e.publicId || "", n = e.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, t, a, n), e.location) {
      let h = this.treeAdapter.getChildNodes(this.document).find((l) => this.treeAdapter.isDocumentTypeNode(l));
      if (h) this.treeAdapter.setNodeSourceCodeLocation(h, e.location);
    }
  }
  _attachElementToTree(e, t) {
    if (this.options.sourceCodeLocationInfo) {
      let a = t && { ...t, startTag: t };
      this.treeAdapter.setNodeSourceCodeLocation(e, a);
    }
    if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
    else {
      let a = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(a, e);
    }
  }
  _appendElement(e, t) {
    let a = this.treeAdapter.createElement(e.tagName, t, e.attrs);
    this._attachElementToTree(a, e.location);
  }
  _insertElement(e, t) {
    let a = this.treeAdapter.createElement(e.tagName, t, e.attrs);
    this._attachElementToTree(a, e.location), this.openElements.push(a, e.tagID);
  }
  _insertFakeElement(e, t) {
    let a = this.treeAdapter.createElement(e, E.HTML, []);
    this._attachElementToTree(a, null), this.openElements.push(a, t);
  }
  _insertTemplate(e) {
    let t = this.treeAdapter.createElement(e.tagName, E.HTML, e.attrs), a = this.treeAdapter.createDocumentFragment();
    if (this.treeAdapter.setTemplateContent(t, a), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(a, null);
  }
  _insertFakeRootElement() {
    let e = this.treeAdapter.createElement(c.HTML, E.HTML, []);
    if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(e, null);
    this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, u.HTML);
  }
  _appendCommentNode(e, t) {
    let a = this.treeAdapter.createCommentNode(e.data);
    if (this.treeAdapter.appendChild(t, a), this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
  }
  _insertCharacters(e) {
    let t, a;
    if (this._shouldFosterParentOnInsertion()) if ({ parent: t, beforeElement: a } = this._findFosterParentingLocation(), a) this.treeAdapter.insertTextBefore(t, e.chars, a);
    else this.treeAdapter.insertText(t, e.chars);
    else t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars);
    if (!e.location) return;
    let n = this.treeAdapter.getChildNodes(t), d = a ? n.lastIndexOf(a) : n.length, h = n[d - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(h)) {
      let { endLine: _, endCol: b, endOffset: p } = e.location;
      this.treeAdapter.updateNodeSourceCodeLocation(h, { endLine: _, endCol: b, endOffset: p });
    } else if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(h, e.location);
  }
  _adoptNodes(e, t) {
    for (let a = this.treeAdapter.getFirstChild(e); a; a = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(a), this.treeAdapter.appendChild(t, a);
  }
  _setEndLocation(e, t) {
    if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
      let a = t.location, n = this.treeAdapter.getTagName(e), d = t.type === f.END_TAG && n === t.tagName ? { endTag: { ...a }, endLine: a.endLine, endCol: a.endCol, endOffset: a.endOffset } : { endLine: a.startLine, endCol: a.startCol, endOffset: a.startOffset };
      this.treeAdapter.updateNodeSourceCodeLocation(e, d);
    }
  }
  shouldProcessStartTagTokenInForeignContent(e) {
    if (!this.currentNotInHTML) return false;
    let t, a;
    if (this.openElements.stackTop === 0 && this.fragmentContext) t = this.fragmentContext, a = this.fragmentContextID;
    else ({ current: t, currentTagId: a } = this.openElements);
    if (e.tagID === u.SVG && this.treeAdapter.getTagName(t) === c.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === E.MATHML) return false;
    return this.tokenizer.inForeignNode || (e.tagID === u.MGLYPH || e.tagID === u.MALIGNMARK) && !this._isIntegrationPoint(a, t, E.HTML);
  }
  _processToken(e) {
    switch (e.type) {
      case f.CHARACTER: {
        this.onCharacter(e);
        break;
      }
      case f.NULL_CHARACTER: {
        this.onNullCharacter(e);
        break;
      }
      case f.COMMENT: {
        this.onComment(e);
        break;
      }
      case f.DOCTYPE: {
        this.onDoctype(e);
        break;
      }
      case f.START_TAG: {
        this._processStartTag(e);
        break;
      }
      case f.END_TAG: {
        this.onEndTag(e);
        break;
      }
      case f.EOF: {
        this.onEof(e);
        break;
      }
      case f.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(e);
        break;
      }
    }
  }
  _isIntegrationPoint(e, t, a) {
    let n = this.treeAdapter.getNamespaceURI(t), d = this.treeAdapter.getAttrList(t);
    return ze(e, n, d, a);
  }
  _reconstructActiveFormattingElements() {
    let e = this.activeFormattingElements.entries.length;
    if (e) {
      let t = this.activeFormattingElements.entries.findIndex((n) => n.type === L.Marker || this.openElements.contains(n.element)), a = t < 0 ? e - 1 : t - 1;
      for (let n = a; n >= 0; n--) {
        let d = this.activeFormattingElements.entries[n];
        this._insertElement(d.token, this.treeAdapter.getNamespaceURI(d.element)), d.element = this.openElements.current;
      }
    }
  }
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = i.IN_ROW;
  }
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(u.P), this.openElements.popUntilTagNamePopped(u.P);
  }
  _resetInsertionMode() {
    for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
      case u.TR: {
        this.insertionMode = i.IN_ROW;
        return;
      }
      case u.TBODY:
      case u.THEAD:
      case u.TFOOT: {
        this.insertionMode = i.IN_TABLE_BODY;
        return;
      }
      case u.CAPTION: {
        this.insertionMode = i.IN_CAPTION;
        return;
      }
      case u.COLGROUP: {
        this.insertionMode = i.IN_COLUMN_GROUP;
        return;
      }
      case u.TABLE: {
        this.insertionMode = i.IN_TABLE;
        return;
      }
      case u.BODY: {
        this.insertionMode = i.IN_BODY;
        return;
      }
      case u.FRAMESET: {
        this.insertionMode = i.IN_FRAMESET;
        return;
      }
      case u.SELECT: {
        this._resetInsertionModeForSelect(e);
        return;
      }
      case u.TEMPLATE: {
        this.insertionMode = this.tmplInsertionModeStack[0];
        return;
      }
      case u.HTML: {
        this.insertionMode = this.headElement ? i.AFTER_HEAD : i.BEFORE_HEAD;
        return;
      }
      case u.TD:
      case u.TH: {
        if (e > 0) {
          this.insertionMode = i.IN_CELL;
          return;
        }
        break;
      }
      case u.HEAD: {
        if (e > 0) {
          this.insertionMode = i.IN_HEAD;
          return;
        }
        break;
      }
    }
    this.insertionMode = i.IN_BODY;
  }
  _resetInsertionModeForSelect(e) {
    if (e > 0) for (let t = e - 1; t > 0; t--) {
      let a = this.openElements.tagIDs[t];
      if (a === u.TEMPLATE) break;
      else if (a === u.TABLE) {
        this.insertionMode = i.IN_SELECT_IN_TABLE;
        return;
      }
    }
    this.insertionMode = i.IN_SELECT;
  }
  _isElementCausesFosterParenting(e) {
    return et.has(e);
  }
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  _findFosterParentingLocation() {
    for (let e = this.openElements.stackTop; e >= 0; e--) {
      let t = this.openElements.items[e];
      switch (this.openElements.tagIDs[e]) {
        case u.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(t) === E.HTML) return { parent: this.treeAdapter.getTemplateContent(t), beforeElement: null };
          break;
        }
        case u.TABLE: {
          let a = this.treeAdapter.getParentNode(t);
          if (a) return { parent: a, beforeElement: t };
          return { parent: this.openElements.items[e - 1], beforeElement: null };
        }
        default:
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  _fosterParentElement(e) {
    let t = this._findFosterParentingLocation();
    if (t.beforeElement) this.treeAdapter.insertBefore(t.parent, e, t.beforeElement);
    else this.treeAdapter.appendChild(t.parent, e);
  }
  _isSpecialElement(e, t) {
    let a = this.treeAdapter.getNamespaceURI(e);
    return Pe[a].has(t);
  }
  onCharacter(e) {
    if (this.skipNextNewLine = false, this.tokenizer.inForeignNode) {
      Ha(this, e);
      return;
    }
    switch (this.insertionMode) {
      case i.INITIAL: {
        F(this, e);
        break;
      }
      case i.BEFORE_HTML: {
        w(this, e);
        break;
      }
      case i.BEFORE_HEAD: {
        Y(this, e);
        break;
      }
      case i.IN_HEAD: {
        v(this, e);
        break;
      }
      case i.IN_HEAD_NO_SCRIPT: {
        Q(this, e);
        break;
      }
      case i.AFTER_HEAD: {
        G(this, e);
        break;
      }
      case i.IN_BODY:
      case i.IN_CAPTION:
      case i.IN_CELL:
      case i.IN_TEMPLATE: {
        ut(this, e);
        break;
      }
      case i.TEXT:
      case i.IN_SELECT:
      case i.IN_SELECT_IN_TABLE: {
        this._insertCharacters(e);
        break;
      }
      case i.IN_TABLE:
      case i.IN_TABLE_BODY:
      case i.IN_ROW: {
        _e(this, e);
        break;
      }
      case i.IN_TABLE_TEXT: {
        ct(this, e);
        break;
      }
      case i.IN_COLUMN_GROUP: {
        ae(this, e);
        break;
      }
      case i.AFTER_BODY: {
        se(this, e);
        break;
      }
      case i.AFTER_AFTER_BODY: {
        ue(this, e);
        break;
      }
      default:
    }
  }
  onNullCharacter(e) {
    if (this.skipNextNewLine = false, this.tokenizer.inForeignNode) {
      ka(this, e);
      return;
    }
    switch (this.insertionMode) {
      case i.INITIAL: {
        F(this, e);
        break;
      }
      case i.BEFORE_HTML: {
        w(this, e);
        break;
      }
      case i.BEFORE_HEAD: {
        Y(this, e);
        break;
      }
      case i.IN_HEAD: {
        v(this, e);
        break;
      }
      case i.IN_HEAD_NO_SCRIPT: {
        Q(this, e);
        break;
      }
      case i.AFTER_HEAD: {
        G(this, e);
        break;
      }
      case i.TEXT: {
        this._insertCharacters(e);
        break;
      }
      case i.IN_TABLE:
      case i.IN_TABLE_BODY:
      case i.IN_ROW: {
        _e(this, e);
        break;
      }
      case i.IN_COLUMN_GROUP: {
        ae(this, e);
        break;
      }
      case i.AFTER_BODY: {
        se(this, e);
        break;
      }
      case i.AFTER_AFTER_BODY: {
        ue(this, e);
        break;
      }
      default:
    }
  }
  onComment(e) {
    if (this.skipNextNewLine = false, this.currentNotInHTML) {
      be(this, e);
      return;
    }
    switch (this.insertionMode) {
      case i.INITIAL:
      case i.BEFORE_HTML:
      case i.BEFORE_HEAD:
      case i.IN_HEAD:
      case i.IN_HEAD_NO_SCRIPT:
      case i.AFTER_HEAD:
      case i.IN_BODY:
      case i.IN_TABLE:
      case i.IN_CAPTION:
      case i.IN_COLUMN_GROUP:
      case i.IN_TABLE_BODY:
      case i.IN_ROW:
      case i.IN_CELL:
      case i.IN_SELECT:
      case i.IN_SELECT_IN_TABLE:
      case i.IN_TEMPLATE:
      case i.IN_FRAMESET:
      case i.AFTER_FRAMESET: {
        be(this, e);
        break;
      }
      case i.IN_TABLE_TEXT: {
        y(this, e);
        break;
      }
      case i.AFTER_BODY: {
        Tu(this, e);
        break;
      }
      case i.AFTER_AFTER_BODY:
      case i.AFTER_AFTER_FRAMESET: {
        hu(this, e);
        break;
      }
      default:
    }
  }
  onDoctype(e) {
    switch (this.skipNextNewLine = false, this.insertionMode) {
      case i.INITIAL: {
        lu(this, e);
        break;
      }
      case i.BEFORE_HEAD:
      case i.IN_HEAD:
      case i.IN_HEAD_NO_SCRIPT:
      case i.AFTER_HEAD: {
        this._err(e, o.misplacedDoctype);
        break;
      }
      case i.IN_TABLE_TEXT: {
        y(this, e);
        break;
      }
      default:
    }
  }
  onStartTag(e) {
    if (this.skipNextNewLine = false, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing) this._err(e, o.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  _processStartTag(e) {
    if (this.shouldProcessStartTagTokenInForeignContent(e)) Ua(this, e);
    else this._startTagOutsideForeignContent(e);
  }
  _startTagOutsideForeignContent(e) {
    switch (this.insertionMode) {
      case i.INITIAL: {
        F(this, e);
        break;
      }
      case i.BEFORE_HTML: {
        fu(this, e);
        break;
      }
      case i.BEFORE_HEAD: {
        _u(this, e);
        break;
      }
      case i.IN_HEAD: {
        R(this, e);
        break;
      }
      case i.IN_HEAD_NO_SCRIPT: {
        Nu(this, e);
        break;
      }
      case i.AFTER_HEAD: {
        Cu(this, e);
        break;
      }
      case i.IN_BODY: {
        I(this, e);
        break;
      }
      case i.IN_TABLE: {
        k(this, e);
        break;
      }
      case i.IN_TABLE_TEXT: {
        y(this, e);
        break;
      }
      case i.IN_CAPTION: {
        ba(this, e);
        break;
      }
      case i.IN_COLUMN_GROUP: {
        Ce(this, e);
        break;
      }
      case i.IN_TABLE_BODY: {
        ce(this, e);
        break;
      }
      case i.IN_ROW: {
        oe(this, e);
        break;
      }
      case i.IN_CELL: {
        Ia(this, e);
        break;
      }
      case i.IN_SELECT: {
        Et(this, e);
        break;
      }
      case i.IN_SELECT_IN_TABLE: {
        Oa(this, e);
        break;
      }
      case i.IN_TEMPLATE: {
        Sa(this, e);
        break;
      }
      case i.AFTER_BODY: {
        Ra(this, e);
        break;
      }
      case i.IN_FRAMESET: {
        Da(this, e);
        break;
      }
      case i.AFTER_FRAMESET: {
        Pa(this, e);
        break;
      }
      case i.AFTER_AFTER_BODY: {
        xa(this, e);
        break;
      }
      case i.AFTER_AFTER_FRAMESET: {
        Ba(this, e);
        break;
      }
      default:
    }
  }
  onEndTag(e) {
    if (this.skipNextNewLine = false, this.currentToken = e, this.currentNotInHTML) Fa(this, e);
    else this._endTagOutsideForeignContent(e);
  }
  _endTagOutsideForeignContent(e) {
    switch (this.insertionMode) {
      case i.INITIAL: {
        F(this, e);
        break;
      }
      case i.BEFORE_HTML: {
        mu(this, e);
        break;
      }
      case i.BEFORE_HEAD: {
        bu(this, e);
        break;
      }
      case i.IN_HEAD: {
        Au(this, e);
        break;
      }
      case i.IN_HEAD_NO_SCRIPT: {
        Iu(this, e);
        break;
      }
      case i.AFTER_HEAD: {
        Ou(this, e);
        break;
      }
      case i.IN_BODY: {
        ne(this, e);
        break;
      }
      case i.TEXT: {
        ca(this, e);
        break;
      }
      case i.IN_TABLE: {
        W(this, e);
        break;
      }
      case i.IN_TABLE_TEXT: {
        y(this, e);
        break;
      }
      case i.IN_CAPTION: {
        Aa(this, e);
        break;
      }
      case i.IN_COLUMN_GROUP: {
        Na(this, e);
        break;
      }
      case i.IN_TABLE_BODY: {
        Ae(this, e);
        break;
      }
      case i.IN_ROW: {
        dt(this, e);
        break;
      }
      case i.IN_CELL: {
        Ca(this, e);
        break;
      }
      case i.IN_SELECT: {
        Tt(this, e);
        break;
      }
      case i.IN_SELECT_IN_TABLE: {
        pa(this, e);
        break;
      }
      case i.IN_TEMPLATE: {
        La(this, e);
        break;
      }
      case i.AFTER_BODY: {
        lt(this, e);
        break;
      }
      case i.IN_FRAMESET: {
        ga(this, e);
        break;
      }
      case i.AFTER_FRAMESET: {
        Ma(this, e);
        break;
      }
      case i.AFTER_AFTER_BODY: {
        ue(this, e);
        break;
      }
      default:
    }
  }
  onEof(e) {
    switch (this.insertionMode) {
      case i.INITIAL: {
        F(this, e);
        break;
      }
      case i.BEFORE_HTML: {
        w(this, e);
        break;
      }
      case i.BEFORE_HEAD: {
        Y(this, e);
        break;
      }
      case i.IN_HEAD: {
        v(this, e);
        break;
      }
      case i.IN_HEAD_NO_SCRIPT: {
        Q(this, e);
        break;
      }
      case i.AFTER_HEAD: {
        G(this, e);
        break;
      }
      case i.IN_BODY:
      case i.IN_TABLE:
      case i.IN_CAPTION:
      case i.IN_COLUMN_GROUP:
      case i.IN_TABLE_BODY:
      case i.IN_ROW:
      case i.IN_CELL:
      case i.IN_SELECT:
      case i.IN_SELECT_IN_TABLE: {
        it(this, e);
        break;
      }
      case i.TEXT: {
        oa(this, e);
        break;
      }
      case i.IN_TABLE_TEXT: {
        y(this, e);
        break;
      }
      case i.IN_TEMPLATE: {
        ht(this, e);
        break;
      }
      case i.AFTER_BODY:
      case i.IN_FRAMESET:
      case i.AFTER_FRAMESET:
      case i.AFTER_AFTER_BODY:
      case i.AFTER_AFTER_FRAMESET: {
        Ie(this, e);
        break;
      }
      default:
    }
  }
  onWhitespaceCharacter(e) {
    if (this.skipNextNewLine) {
      if (this.skipNextNewLine = false, e.chars.charCodeAt(0) === s.LINE_FEED) {
        if (e.chars.length === 1) return;
        e.chars = e.chars.substr(1);
      }
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(e);
      return;
    }
    switch (this.insertionMode) {
      case i.IN_HEAD:
      case i.IN_HEAD_NO_SCRIPT:
      case i.AFTER_HEAD:
      case i.TEXT:
      case i.IN_COLUMN_GROUP:
      case i.IN_SELECT:
      case i.IN_SELECT_IN_TABLE:
      case i.IN_FRAMESET:
      case i.AFTER_FRAMESET: {
        this._insertCharacters(e);
        break;
      }
      case i.IN_BODY:
      case i.IN_CAPTION:
      case i.IN_CELL:
      case i.IN_TEMPLATE:
      case i.AFTER_BODY:
      case i.AFTER_AFTER_BODY:
      case i.AFTER_AFTER_FRAMESET: {
        tt(this, e);
        break;
      }
      case i.IN_TABLE:
      case i.IN_TABLE_BODY:
      case i.IN_ROW: {
        _e(this, e);
        break;
      }
      case i.IN_TABLE_TEXT: {
        nt(this, e);
        break;
      }
      default:
    }
  }
}
function iu(e, t) {
  let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
  if (a) {
    if (!e.openElements.contains(a.element)) e.activeFormattingElements.removeEntry(a), a = null;
    else if (!e.openElements.hasInScope(t.tagID)) a = null;
  } else rt(e, t);
  return a;
}
function nu(e, t) {
  let a = null, n = e.openElements.stackTop;
  for (; n >= 0; n--) {
    let d = e.openElements.items[n];
    if (d === t.element) break;
    if (e._isSpecialElement(d, e.openElements.tagIDs[n])) a = d;
  }
  if (!a) e.openElements.shortenToLength(n < 0 ? 0 : n), e.activeFormattingElements.removeEntry(t);
  return a;
}
function cu(e, t, a) {
  let n = t, d = e.openElements.getCommonAncestor(t);
  for (let h = 0, l = d; l !== a; h++, l = d) {
    d = e.openElements.getCommonAncestor(l);
    let _ = e.activeFormattingElements.getElementEntry(l), b = _ && h >= su;
    if (!_ || b) {
      if (b) e.activeFormattingElements.removeEntry(_);
      e.openElements.remove(l);
    } else {
      if (l = ou(e, _), n === t) e.activeFormattingElements.bookmark = _;
      e.treeAdapter.detachNode(n), e.treeAdapter.appendChild(l, n), n = l;
    }
  }
  return n;
}
function ou(e, t) {
  let a = e.treeAdapter.getNamespaceURI(t.element), n = e.treeAdapter.createElement(t.token.tagName, a, t.token.attrs);
  return e.openElements.replace(t.element, n), t.element = n, n;
}
function du(e, t, a) {
  let n = e.treeAdapter.getTagName(t), d = x(n);
  if (e._isElementCausesFosterParenting(d)) e._fosterParentElement(a);
  else {
    let h = e.treeAdapter.getNamespaceURI(t);
    if (d === u.TEMPLATE && h === E.HTML) t = e.treeAdapter.getTemplateContent(t);
    e.treeAdapter.appendChild(t, a);
  }
}
function Eu(e, t, a) {
  let n = e.treeAdapter.getNamespaceURI(a.element), { token: d } = a, h = e.treeAdapter.createElement(d.tagName, n, d.attrs);
  e._adoptNodes(t, h), e.treeAdapter.appendChild(t, h), e.activeFormattingElements.insertElementAfterBookmark(h, d), e.activeFormattingElements.removeEntry(a), e.openElements.remove(a.element), e.openElements.insertAfter(t, h, d.tagID);
}
function Ne(e, t) {
  for (let a = 0; a < au; a++) {
    let n = iu(e, t);
    if (!n) break;
    let d = nu(e, n);
    if (!d) break;
    e.activeFormattingElements.bookmark = n;
    let h = cu(e, d, n.element), l = e.openElements.getCommonAncestor(n.element);
    if (e.treeAdapter.detachNode(h), l) du(e, l, h);
    Eu(e, d, n);
  }
}
function be(e, t) {
  e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function Tu(e, t) {
  e._appendCommentNode(t, e.openElements.items[0]);
}
function hu(e, t) {
  e._appendCommentNode(t, e.document);
}
function Ie(e, t) {
  if (e.stopped = true, t.location) {
    let a = e.fragmentContext ? 0 : 2;
    for (let n = e.openElements.stackTop; n >= a; n--) e._setEndLocation(e.openElements.items[n], t);
    if (!e.fragmentContext && e.openElements.stackTop >= 0) {
      let n = e.openElements.items[0], d = e.treeAdapter.getNodeSourceCodeLocation(n);
      if (d && !d.endTag) {
        if (e._setEndLocation(n, t), e.openElements.stackTop >= 1) {
          let h = e.openElements.items[1], l = e.treeAdapter.getNodeSourceCodeLocation(h);
          if (l && !l.endTag) e._setEndLocation(h, t);
        }
      }
    }
  }
}
function lu(e, t) {
  e._setDocumentType(t);
  let a = t.forceQuirks ? O.QUIRKS : qe(t);
  if (!We(t)) e._err(t, o.nonConformingDoctype);
  e.treeAdapter.setDocumentMode(e.document, a), e.insertionMode = i.BEFORE_HTML;
}
function F(e, t) {
  e._err(t, o.missingDoctype, true), e.treeAdapter.setDocumentMode(e.document, O.QUIRKS), e.insertionMode = i.BEFORE_HTML, e._processToken(t);
}
function fu(e, t) {
  if (t.tagID === u.HTML) e._insertElement(t, E.HTML), e.insertionMode = i.BEFORE_HEAD;
  else w(e, t);
}
function mu(e, t) {
  let a = t.tagID;
  if (a === u.HTML || a === u.HEAD || a === u.BODY || a === u.BR) w(e, t);
}
function w(e, t) {
  e._insertFakeRootElement(), e.insertionMode = i.BEFORE_HEAD, e._processToken(t);
}
function _u(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.HEAD: {
      e._insertElement(t, E.HTML), e.headElement = e.openElements.current, e.insertionMode = i.IN_HEAD;
      break;
    }
    default:
      Y(e, t);
  }
}
function bu(e, t) {
  let a = t.tagID;
  if (a === u.HEAD || a === u.BODY || a === u.HTML || a === u.BR) Y(e, t);
  else e._err(t, o.endTagWithoutMatchingOpenElement);
}
function Y(e, t) {
  e._insertFakeElement(c.HEAD, u.HEAD), e.headElement = e.openElements.current, e.insertionMode = i.IN_HEAD, e._processToken(t);
}
function R(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.BASE:
    case u.BASEFONT:
    case u.BGSOUND:
    case u.LINK:
    case u.META: {
      e._appendElement(t, E.HTML), t.ackSelfClosing = true;
      break;
    }
    case u.TITLE: {
      e._switchToTextParsing(t, QR.RCDATA);
      break;
    }
    case u.NOSCRIPT: {
      if (e.options.scriptingEnabled) e._switchToTextParsing(t, QR.RAWTEXT);
      else e._insertElement(t, E.HTML), e.insertionMode = i.IN_HEAD_NO_SCRIPT;
      break;
    }
    case u.NOFRAMES:
    case u.STYLE: {
      e._switchToTextParsing(t, QR.RAWTEXT);
      break;
    }
    case u.SCRIPT: {
      e._switchToTextParsing(t, QR.SCRIPT_DATA);
      break;
    }
    case u.TEMPLATE: {
      e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = false, e.insertionMode = i.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(i.IN_TEMPLATE);
      break;
    }
    case u.HEAD: {
      e._err(t, o.misplacedStartTagForHeadElement);
      break;
    }
    default:
      v(e, t);
  }
}
function Au(e, t) {
  switch (t.tagID) {
    case u.HEAD: {
      e.openElements.pop(), e.insertionMode = i.AFTER_HEAD;
      break;
    }
    case u.BODY:
    case u.BR:
    case u.HTML: {
      v(e, t);
      break;
    }
    case u.TEMPLATE: {
      B(e, t);
      break;
    }
    default:
      e._err(t, o.endTagWithoutMatchingOpenElement);
  }
}
function B(e, t) {
  if (e.openElements.tmplCount > 0) {
    if (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== u.TEMPLATE) e._err(t, o.closingOfElementWithOpenChildElements);
    e.openElements.popUntilTagNamePopped(u.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode();
  } else e._err(t, o.endTagWithoutMatchingOpenElement);
}
function v(e, t) {
  e.openElements.pop(), e.insertionMode = i.AFTER_HEAD, e._processToken(t);
}
function Nu(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.BASEFONT:
    case u.BGSOUND:
    case u.HEAD:
    case u.LINK:
    case u.META:
    case u.NOFRAMES:
    case u.STYLE: {
      R(e, t);
      break;
    }
    case u.NOSCRIPT: {
      e._err(t, o.nestedNoscriptInHead);
      break;
    }
    default:
      Q(e, t);
  }
}
function Iu(e, t) {
  switch (t.tagID) {
    case u.NOSCRIPT: {
      e.openElements.pop(), e.insertionMode = i.IN_HEAD;
      break;
    }
    case u.BR: {
      Q(e, t);
      break;
    }
    default:
      e._err(t, o.endTagWithoutMatchingOpenElement);
  }
}
function Q(e, t) {
  let a = t.type === f.EOF ? o.openElementsLeftAfterEof : o.disallowedContentInNoscriptInHead;
  e._err(t, a), e.openElements.pop(), e.insertionMode = i.IN_HEAD, e._processToken(t);
}
function Cu(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.BODY: {
      e._insertElement(t, E.HTML), e.framesetOk = false, e.insertionMode = i.IN_BODY;
      break;
    }
    case u.FRAMESET: {
      e._insertElement(t, E.HTML), e.insertionMode = i.IN_FRAMESET;
      break;
    }
    case u.BASE:
    case u.BASEFONT:
    case u.BGSOUND:
    case u.LINK:
    case u.META:
    case u.NOFRAMES:
    case u.SCRIPT:
    case u.STYLE:
    case u.TEMPLATE:
    case u.TITLE: {
      e._err(t, o.abandonedHeadElementChild), e.openElements.push(e.headElement, u.HEAD), R(e, t), e.openElements.remove(e.headElement);
      break;
    }
    case u.HEAD: {
      e._err(t, o.misplacedStartTagForHeadElement);
      break;
    }
    default:
      G(e, t);
  }
}
function Ou(e, t) {
  switch (t.tagID) {
    case u.BODY:
    case u.HTML:
    case u.BR: {
      G(e, t);
      break;
    }
    case u.TEMPLATE: {
      B(e, t);
      break;
    }
    default:
      e._err(t, o.endTagWithoutMatchingOpenElement);
  }
}
function G(e, t) {
  e._insertFakeElement(c.BODY, u.BODY), e.insertionMode = i.IN_BODY, ie(e, t);
}
function ie(e, t) {
  switch (t.type) {
    case f.CHARACTER: {
      ut(e, t);
      break;
    }
    case f.WHITESPACE_CHARACTER: {
      tt(e, t);
      break;
    }
    case f.COMMENT: {
      be(e, t);
      break;
    }
    case f.START_TAG: {
      I(e, t);
      break;
    }
    case f.END_TAG: {
      ne(e, t);
      break;
    }
    case f.EOF: {
      it(e, t);
      break;
    }
    default:
  }
}
function tt(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function ut(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = false;
}
function pu(e, t) {
  if (e.openElements.tmplCount === 0) e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function Su(e, t) {
  let a = e.openElements.tryPeekProperlyNestedBodyElement();
  if (a && e.openElements.tmplCount === 0) e.framesetOk = false, e.treeAdapter.adoptAttributes(a, t.attrs);
}
function Lu(e, t) {
  let a = e.openElements.tryPeekProperlyNestedBodyElement();
  if (e.framesetOk && a) e.treeAdapter.detachNode(a), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, E.HTML), e.insertionMode = i.IN_FRAMESET;
}
function Ru(e, t) {
  if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
  e._insertElement(t, E.HTML);
}
function Du(e, t) {
  if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
  if (H.has(e.openElements.currentTagId)) e.openElements.pop();
  e._insertElement(t, E.HTML);
}
function gu(e, t) {
  if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
  e._insertElement(t, E.HTML), e.skipNextNewLine = true, e.framesetOk = false;
}
function Pu(e, t) {
  let a = e.openElements.tmplCount > 0;
  if (!e.formElement || a) {
    if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
    if (e._insertElement(t, E.HTML), !a) e.formElement = e.openElements.current;
  }
}
function Mu(e, t) {
  e.framesetOk = false;
  let a = t.tagID;
  for (let n = e.openElements.stackTop; n >= 0; n--) {
    let d = e.openElements.tagIDs[n];
    if (a === u.LI && d === u.LI || (a === u.DD || a === u.DT) && (d === u.DD || d === u.DT)) {
      e.openElements.generateImpliedEndTagsWithExclusion(d), e.openElements.popUntilTagNamePopped(d);
      break;
    }
    if (d !== u.ADDRESS && d !== u.DIV && d !== u.P && e._isSpecialElement(e.openElements.items[n], d)) break;
  }
  if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
  e._insertElement(t, E.HTML);
}
function xu(e, t) {
  if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
  e._insertElement(t, E.HTML), e.tokenizer.state = QR.PLAINTEXT;
}
function Bu(e, t) {
  if (e.openElements.hasInScope(u.BUTTON)) e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u.BUTTON);
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.framesetOk = false;
}
function ku(e, t) {
  let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(c.A);
  if (a) Ne(e, t), e.openElements.remove(a.element), e.activeFormattingElements.removeEntry(a);
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Hu(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Uu(e, t) {
  if (e._reconstructActiveFormattingElements(), e.openElements.hasInScope(u.NOBR)) Ne(e, t), e._reconstructActiveFormattingElements();
  e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Fu(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = false;
}
function yu(e, t) {
  if (e.treeAdapter.getDocumentMode(e.document) !== O.QUIRKS && e.openElements.hasInButtonScope(u.P)) e._closePElement();
  e._insertElement(t, E.HTML), e.framesetOk = false, e.insertionMode = i.IN_TABLE;
}
function at(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, E.HTML), e.framesetOk = false, t.ackSelfClosing = true;
}
function st(e) {
  let t = z(e, g.TYPE);
  return t != null && t.toLowerCase() === uu;
}
function wu(e, t) {
  if (e._reconstructActiveFormattingElements(), e._appendElement(t, E.HTML), !st(t)) e.framesetOk = false;
  t.ackSelfClosing = true;
}
function Yu(e, t) {
  e._appendElement(t, E.HTML), t.ackSelfClosing = true;
}
function vu(e, t) {
  if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
  e._appendElement(t, E.HTML), e.framesetOk = false, t.ackSelfClosing = true;
}
function Qu(e, t) {
  t.tagName = c.IMG, t.tagID = u.IMG, at(e, t);
}
function Gu(e, t) {
  e._insertElement(t, E.HTML), e.skipNextNewLine = true, e.tokenizer.state = QR.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = false, e.insertionMode = i.TEXT;
}
function Wu(e, t) {
  if (e.openElements.hasInButtonScope(u.P)) e._closePElement();
  e._reconstructActiveFormattingElements(), e.framesetOk = false, e._switchToTextParsing(t, QR.RAWTEXT);
}
function qu(e, t) {
  e.framesetOk = false, e._switchToTextParsing(t, QR.RAWTEXT);
}
function $e(e, t) {
  e._switchToTextParsing(t, QR.RAWTEXT);
}
function Xu(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.framesetOk = false, e.insertionMode = e.insertionMode === i.IN_TABLE || e.insertionMode === i.IN_CAPTION || e.insertionMode === i.IN_TABLE_BODY || e.insertionMode === i.IN_ROW || e.insertionMode === i.IN_CELL ? i.IN_SELECT_IN_TABLE : i.IN_SELECT;
}
function Ku(e, t) {
  if (e.openElements.currentTagId === u.OPTION) e.openElements.pop();
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML);
}
function Vu(e, t) {
  if (e.openElements.hasInScope(u.RUBY)) e.openElements.generateImpliedEndTags();
  e._insertElement(t, E.HTML);
}
function zu(e, t) {
  if (e.openElements.hasInScope(u.RUBY)) e.openElements.generateImpliedEndTagsWithExclusion(u.RTC);
  e._insertElement(t, E.HTML);
}
function ju(e, t) {
  if (e._reconstructActiveFormattingElements(), fe(t), te(t), t.selfClosing) e._appendElement(t, E.MATHML);
  else e._insertElement(t, E.MATHML);
  t.ackSelfClosing = true;
}
function Ju(e, t) {
  if (e._reconstructActiveFormattingElements(), me(t), te(t), t.selfClosing) e._appendElement(t, E.SVG);
  else e._insertElement(t, E.SVG);
  t.ackSelfClosing = true;
}
function Ze(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML);
}
function I(e, t) {
  switch (t.tagID) {
    case u.I:
    case u.S:
    case u.B:
    case u.U:
    case u.EM:
    case u.TT:
    case u.BIG:
    case u.CODE:
    case u.FONT:
    case u.SMALL:
    case u.STRIKE:
    case u.STRONG: {
      Hu(e, t);
      break;
    }
    case u.A: {
      ku(e, t);
      break;
    }
    case u.H1:
    case u.H2:
    case u.H3:
    case u.H4:
    case u.H5:
    case u.H6: {
      Du(e, t);
      break;
    }
    case u.P:
    case u.DL:
    case u.OL:
    case u.UL:
    case u.DIV:
    case u.DIR:
    case u.NAV:
    case u.MAIN:
    case u.MENU:
    case u.ASIDE:
    case u.CENTER:
    case u.FIGURE:
    case u.FOOTER:
    case u.HEADER:
    case u.HGROUP:
    case u.DIALOG:
    case u.DETAILS:
    case u.ADDRESS:
    case u.ARTICLE:
    case u.SEARCH:
    case u.SECTION:
    case u.SUMMARY:
    case u.FIELDSET:
    case u.BLOCKQUOTE:
    case u.FIGCAPTION: {
      Ru(e, t);
      break;
    }
    case u.LI:
    case u.DD:
    case u.DT: {
      Mu(e, t);
      break;
    }
    case u.BR:
    case u.IMG:
    case u.WBR:
    case u.AREA:
    case u.EMBED:
    case u.KEYGEN: {
      at(e, t);
      break;
    }
    case u.HR: {
      vu(e, t);
      break;
    }
    case u.RB:
    case u.RTC: {
      Vu(e, t);
      break;
    }
    case u.RT:
    case u.RP: {
      zu(e, t);
      break;
    }
    case u.PRE:
    case u.LISTING: {
      gu(e, t);
      break;
    }
    case u.XMP: {
      Wu(e, t);
      break;
    }
    case u.SVG: {
      Ju(e, t);
      break;
    }
    case u.HTML: {
      pu(e, t);
      break;
    }
    case u.BASE:
    case u.LINK:
    case u.META:
    case u.STYLE:
    case u.TITLE:
    case u.SCRIPT:
    case u.BGSOUND:
    case u.BASEFONT:
    case u.TEMPLATE: {
      R(e, t);
      break;
    }
    case u.BODY: {
      Su(e, t);
      break;
    }
    case u.FORM: {
      Pu(e, t);
      break;
    }
    case u.NOBR: {
      Uu(e, t);
      break;
    }
    case u.MATH: {
      ju(e, t);
      break;
    }
    case u.TABLE: {
      yu(e, t);
      break;
    }
    case u.INPUT: {
      wu(e, t);
      break;
    }
    case u.PARAM:
    case u.TRACK:
    case u.SOURCE: {
      Yu(e, t);
      break;
    }
    case u.IMAGE: {
      Qu(e, t);
      break;
    }
    case u.BUTTON: {
      Bu(e, t);
      break;
    }
    case u.APPLET:
    case u.OBJECT:
    case u.MARQUEE: {
      Fu(e, t);
      break;
    }
    case u.IFRAME: {
      qu(e, t);
      break;
    }
    case u.SELECT: {
      Xu(e, t);
      break;
    }
    case u.OPTION:
    case u.OPTGROUP: {
      Ku(e, t);
      break;
    }
    case u.NOEMBED:
    case u.NOFRAMES: {
      $e(e, t);
      break;
    }
    case u.FRAMESET: {
      Lu(e, t);
      break;
    }
    case u.TEXTAREA: {
      Gu(e, t);
      break;
    }
    case u.NOSCRIPT: {
      if (e.options.scriptingEnabled) $e(e, t);
      else Ze(e, t);
      break;
    }
    case u.PLAINTEXT: {
      xu(e, t);
      break;
    }
    case u.COL:
    case u.TH:
    case u.TD:
    case u.TR:
    case u.HEAD:
    case u.FRAME:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD:
    case u.CAPTION:
    case u.COLGROUP:
      break;
    default:
      Ze(e, t);
  }
}
function $u(e, t) {
  if (e.openElements.hasInScope(u.BODY)) {
    if (e.insertionMode = i.AFTER_BODY, e.options.sourceCodeLocationInfo) {
      let a = e.openElements.tryPeekProperlyNestedBodyElement();
      if (a) e._setEndLocation(a, t);
    }
  }
}
function Zu(e, t) {
  if (e.openElements.hasInScope(u.BODY)) e.insertionMode = i.AFTER_BODY, lt(e, t);
}
function ea(e, t) {
  let a = t.tagID;
  if (e.openElements.hasInScope(a)) e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a);
}
function ta(e) {
  let t = e.openElements.tmplCount > 0, { formElement: a } = e;
  if (!t) e.formElement = null;
  if ((a || t) && e.openElements.hasInScope(u.FORM)) {
    if (e.openElements.generateImpliedEndTags(), t) e.openElements.popUntilTagNamePopped(u.FORM);
    else if (a) e.openElements.remove(a);
  }
}
function ua(e) {
  if (!e.openElements.hasInButtonScope(u.P)) e._insertFakeElement(c.P, u.P);
  e._closePElement();
}
function aa(e) {
  if (e.openElements.hasInListItemScope(u.LI)) e.openElements.generateImpliedEndTagsWithExclusion(u.LI), e.openElements.popUntilTagNamePopped(u.LI);
}
function sa(e, t) {
  let a = t.tagID;
  if (e.openElements.hasInScope(a)) e.openElements.generateImpliedEndTagsWithExclusion(a), e.openElements.popUntilTagNamePopped(a);
}
function ra(e) {
  if (e.openElements.hasNumberedHeaderInScope()) e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped();
}
function ia(e, t) {
  let a = t.tagID;
  if (e.openElements.hasInScope(a)) e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a), e.activeFormattingElements.clearToLastMarker();
}
function na(e) {
  e._reconstructActiveFormattingElements(), e._insertFakeElement(c.BR, u.BR), e.openElements.pop(), e.framesetOk = false;
}
function rt(e, t) {
  let { tagName: a, tagID: n } = t;
  for (let d = e.openElements.stackTop; d > 0; d--) {
    let h = e.openElements.items[d], l = e.openElements.tagIDs[d];
    if (n === l && (n !== u.UNKNOWN || e.treeAdapter.getTagName(h) === a)) {
      if (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.stackTop >= d) e.openElements.shortenToLength(d);
      break;
    }
    if (e._isSpecialElement(h, l)) break;
  }
}
function ne(e, t) {
  switch (t.tagID) {
    case u.A:
    case u.B:
    case u.I:
    case u.S:
    case u.U:
    case u.EM:
    case u.TT:
    case u.BIG:
    case u.CODE:
    case u.FONT:
    case u.NOBR:
    case u.SMALL:
    case u.STRIKE:
    case u.STRONG: {
      Ne(e, t);
      break;
    }
    case u.P: {
      ua(e);
      break;
    }
    case u.DL:
    case u.UL:
    case u.OL:
    case u.DIR:
    case u.DIV:
    case u.NAV:
    case u.PRE:
    case u.MAIN:
    case u.MENU:
    case u.ASIDE:
    case u.BUTTON:
    case u.CENTER:
    case u.FIGURE:
    case u.FOOTER:
    case u.HEADER:
    case u.HGROUP:
    case u.DIALOG:
    case u.ADDRESS:
    case u.ARTICLE:
    case u.DETAILS:
    case u.SEARCH:
    case u.SECTION:
    case u.SUMMARY:
    case u.LISTING:
    case u.FIELDSET:
    case u.BLOCKQUOTE:
    case u.FIGCAPTION: {
      ea(e, t);
      break;
    }
    case u.LI: {
      aa(e);
      break;
    }
    case u.DD:
    case u.DT: {
      sa(e, t);
      break;
    }
    case u.H1:
    case u.H2:
    case u.H3:
    case u.H4:
    case u.H5:
    case u.H6: {
      ra(e);
      break;
    }
    case u.BR: {
      na(e);
      break;
    }
    case u.BODY: {
      $u(e, t);
      break;
    }
    case u.HTML: {
      Zu(e, t);
      break;
    }
    case u.FORM: {
      ta(e);
      break;
    }
    case u.APPLET:
    case u.OBJECT:
    case u.MARQUEE: {
      ia(e, t);
      break;
    }
    case u.TEMPLATE: {
      B(e, t);
      break;
    }
    default:
      rt(e, t);
  }
}
function it(e, t) {
  if (e.tmplInsertionModeStack.length > 0) ht(e, t);
  else Ie(e, t);
}
function ca(e, t) {
  var a;
  if (t.tagID === u.SCRIPT) (a = e.scriptHandler) === null || a === void 0 || a.call(e, e.openElements.current);
  e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function oa(e, t) {
  e._err(t, o.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function _e(e, t) {
  if (et.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = false, e.originalInsertionMode = e.insertionMode, e.insertionMode = i.IN_TABLE_TEXT, t.type) {
    case f.CHARACTER: {
      ct(e, t);
      break;
    }
    case f.WHITESPACE_CHARACTER: {
      nt(e, t);
      break;
    }
  }
  else q(e, t);
}
function da(e, t) {
  e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, E.HTML), e.insertionMode = i.IN_CAPTION;
}
function Ea(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, E.HTML), e.insertionMode = i.IN_COLUMN_GROUP;
}
function Ta(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(c.COLGROUP, u.COLGROUP), e.insertionMode = i.IN_COLUMN_GROUP, Ce(e, t);
}
function ha(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, E.HTML), e.insertionMode = i.IN_TABLE_BODY;
}
function la(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(c.TBODY, u.TBODY), e.insertionMode = i.IN_TABLE_BODY, ce(e, t);
}
function fa(e, t) {
  if (e.openElements.hasInTableScope(u.TABLE)) e.openElements.popUntilTagNamePopped(u.TABLE), e._resetInsertionMode(), e._processStartTag(t);
}
function ma(e, t) {
  if (st(t)) e._appendElement(t, E.HTML);
  else q(e, t);
  t.ackSelfClosing = true;
}
function _a(e, t) {
  if (!e.formElement && e.openElements.tmplCount === 0) e._insertElement(t, E.HTML), e.formElement = e.openElements.current, e.openElements.pop();
}
function k(e, t) {
  switch (t.tagID) {
    case u.TD:
    case u.TH:
    case u.TR: {
      la(e, t);
      break;
    }
    case u.STYLE:
    case u.SCRIPT:
    case u.TEMPLATE: {
      R(e, t);
      break;
    }
    case u.COL: {
      Ta(e, t);
      break;
    }
    case u.FORM: {
      _a(e, t);
      break;
    }
    case u.TABLE: {
      fa(e, t);
      break;
    }
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      ha(e, t);
      break;
    }
    case u.INPUT: {
      ma(e, t);
      break;
    }
    case u.CAPTION: {
      da(e, t);
      break;
    }
    case u.COLGROUP: {
      Ea(e, t);
      break;
    }
    default:
      q(e, t);
  }
}
function W(e, t) {
  switch (t.tagID) {
    case u.TABLE: {
      if (e.openElements.hasInTableScope(u.TABLE)) e.openElements.popUntilTagNamePopped(u.TABLE), e._resetInsertionMode();
      break;
    }
    case u.TEMPLATE: {
      B(e, t);
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TBODY:
    case u.TD:
    case u.TFOOT:
    case u.TH:
    case u.THEAD:
    case u.TR:
      break;
    default:
      q(e, t);
  }
}
function q(e, t) {
  let a = e.fosterParentingEnabled;
  e.fosterParentingEnabled = true, ie(e, t), e.fosterParentingEnabled = a;
}
function nt(e, t) {
  e.pendingCharacterTokens.push(t);
}
function ct(e, t) {
  e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = true;
}
function y(e, t) {
  let a = 0;
  if (e.hasNonWhitespacePendingCharacterToken) for (; a < e.pendingCharacterTokens.length; a++) q(e, e.pendingCharacterTokens[a]);
  else for (; a < e.pendingCharacterTokens.length; a++) e._insertCharacters(e.pendingCharacterTokens[a]);
  e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var ot = /* @__PURE__ */ new Set([u.CAPTION, u.COL, u.COLGROUP, u.TBODY, u.TD, u.TFOOT, u.TH, u.THEAD, u.TR]);
function ba(e, t) {
  let a = t.tagID;
  if (ot.has(a)) {
    if (e.openElements.hasInTableScope(u.CAPTION)) e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = i.IN_TABLE, k(e, t);
  } else I(e, t);
}
function Aa(e, t) {
  let a = t.tagID;
  switch (a) {
    case u.CAPTION:
    case u.TABLE: {
      if (e.openElements.hasInTableScope(u.CAPTION)) {
        if (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = i.IN_TABLE, a === u.TABLE) W(e, t);
      }
      break;
    }
    case u.BODY:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TBODY:
    case u.TD:
    case u.TFOOT:
    case u.TH:
    case u.THEAD:
    case u.TR:
      break;
    default:
      ne(e, t);
  }
}
function Ce(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.COL: {
      e._appendElement(t, E.HTML), t.ackSelfClosing = true;
      break;
    }
    case u.TEMPLATE: {
      R(e, t);
      break;
    }
    default:
      ae(e, t);
  }
}
function Na(e, t) {
  switch (t.tagID) {
    case u.COLGROUP: {
      if (e.openElements.currentTagId === u.COLGROUP) e.openElements.pop(), e.insertionMode = i.IN_TABLE;
      break;
    }
    case u.TEMPLATE: {
      B(e, t);
      break;
    }
    case u.COL:
      break;
    default:
      ae(e, t);
  }
}
function ae(e, t) {
  if (e.openElements.currentTagId === u.COLGROUP) e.openElements.pop(), e.insertionMode = i.IN_TABLE, e._processToken(t);
}
function ce(e, t) {
  switch (t.tagID) {
    case u.TR: {
      e.openElements.clearBackToTableBodyContext(), e._insertElement(t, E.HTML), e.insertionMode = i.IN_ROW;
      break;
    }
    case u.TH:
    case u.TD: {
      e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(c.TR, u.TR), e.insertionMode = i.IN_ROW, oe(e, t);
      break;
    }
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      if (e.openElements.hasTableBodyContextInTableScope()) e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = i.IN_TABLE, k(e, t);
      break;
    }
    default:
      k(e, t);
  }
}
function Ae(e, t) {
  let a = t.tagID;
  switch (t.tagID) {
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      if (e.openElements.hasInTableScope(a)) e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = i.IN_TABLE;
      break;
    }
    case u.TABLE: {
      if (e.openElements.hasTableBodyContextInTableScope()) e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = i.IN_TABLE, W(e, t);
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TD:
    case u.TH:
    case u.TR:
      break;
    default:
      W(e, t);
  }
}
function oe(e, t) {
  switch (t.tagID) {
    case u.TH:
    case u.TD: {
      e.openElements.clearBackToTableRowContext(), e._insertElement(t, E.HTML), e.insertionMode = i.IN_CELL, e.activeFormattingElements.insertMarker();
      break;
    }
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD:
    case u.TR: {
      if (e.openElements.hasInTableScope(u.TR)) e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = i.IN_TABLE_BODY, ce(e, t);
      break;
    }
    default:
      k(e, t);
  }
}
function dt(e, t) {
  switch (t.tagID) {
    case u.TR: {
      if (e.openElements.hasInTableScope(u.TR)) e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = i.IN_TABLE_BODY;
      break;
    }
    case u.TABLE: {
      if (e.openElements.hasInTableScope(u.TR)) e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = i.IN_TABLE_BODY, Ae(e, t);
      break;
    }
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      if (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(u.TR)) e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = i.IN_TABLE_BODY, Ae(e, t);
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TD:
    case u.TH:
      break;
    default:
      W(e, t);
  }
}
function Ia(e, t) {
  let a = t.tagID;
  if (ot.has(a)) {
    if (e.openElements.hasInTableScope(u.TD) || e.openElements.hasInTableScope(u.TH)) e._closeTableCell(), oe(e, t);
  } else I(e, t);
}
function Ca(e, t) {
  let a = t.tagID;
  switch (a) {
    case u.TD:
    case u.TH: {
      if (e.openElements.hasInTableScope(a)) e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = i.IN_ROW;
      break;
    }
    case u.TABLE:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD:
    case u.TR: {
      if (e.openElements.hasInTableScope(a)) e._closeTableCell(), dt(e, t);
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
      break;
    default:
      ne(e, t);
  }
}
function Et(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.OPTION: {
      if (e.openElements.currentTagId === u.OPTION) e.openElements.pop();
      e._insertElement(t, E.HTML);
      break;
    }
    case u.OPTGROUP: {
      if (e.openElements.currentTagId === u.OPTION) e.openElements.pop();
      if (e.openElements.currentTagId === u.OPTGROUP) e.openElements.pop();
      e._insertElement(t, E.HTML);
      break;
    }
    case u.HR: {
      if (e.openElements.currentTagId === u.OPTION) e.openElements.pop();
      if (e.openElements.currentTagId === u.OPTGROUP) e.openElements.pop();
      e._appendElement(t, E.HTML), t.ackSelfClosing = true;
      break;
    }
    case u.INPUT:
    case u.KEYGEN:
    case u.TEXTAREA:
    case u.SELECT: {
      if (e.openElements.hasInSelectScope(u.SELECT)) {
        if (e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode(), t.tagID !== u.SELECT) e._processStartTag(t);
      }
      break;
    }
    case u.SCRIPT:
    case u.TEMPLATE: {
      R(e, t);
      break;
    }
    default:
  }
}
function Tt(e, t) {
  switch (t.tagID) {
    case u.OPTGROUP: {
      if (e.openElements.stackTop > 0 && e.openElements.currentTagId === u.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === u.OPTGROUP) e.openElements.pop();
      if (e.openElements.currentTagId === u.OPTGROUP) e.openElements.pop();
      break;
    }
    case u.OPTION: {
      if (e.openElements.currentTagId === u.OPTION) e.openElements.pop();
      break;
    }
    case u.SELECT: {
      if (e.openElements.hasInSelectScope(u.SELECT)) e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode();
      break;
    }
    case u.TEMPLATE: {
      B(e, t);
      break;
    }
    default:
  }
}
function Oa(e, t) {
  let a = t.tagID;
  if (a === u.CAPTION || a === u.TABLE || a === u.TBODY || a === u.TFOOT || a === u.THEAD || a === u.TR || a === u.TD || a === u.TH) e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode(), e._processStartTag(t);
  else Et(e, t);
}
function pa(e, t) {
  let a = t.tagID;
  if (a === u.CAPTION || a === u.TABLE || a === u.TBODY || a === u.TFOOT || a === u.THEAD || a === u.TR || a === u.TD || a === u.TH) {
    if (e.openElements.hasInTableScope(a)) e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode(), e.onEndTag(t);
  } else Tt(e, t);
}
function Sa(e, t) {
  switch (t.tagID) {
    case u.BASE:
    case u.BASEFONT:
    case u.BGSOUND:
    case u.LINK:
    case u.META:
    case u.NOFRAMES:
    case u.SCRIPT:
    case u.STYLE:
    case u.TEMPLATE:
    case u.TITLE: {
      R(e, t);
      break;
    }
    case u.CAPTION:
    case u.COLGROUP:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      e.tmplInsertionModeStack[0] = i.IN_TABLE, e.insertionMode = i.IN_TABLE, k(e, t);
      break;
    }
    case u.COL: {
      e.tmplInsertionModeStack[0] = i.IN_COLUMN_GROUP, e.insertionMode = i.IN_COLUMN_GROUP, Ce(e, t);
      break;
    }
    case u.TR: {
      e.tmplInsertionModeStack[0] = i.IN_TABLE_BODY, e.insertionMode = i.IN_TABLE_BODY, ce(e, t);
      break;
    }
    case u.TD:
    case u.TH: {
      e.tmplInsertionModeStack[0] = i.IN_ROW, e.insertionMode = i.IN_ROW, oe(e, t);
      break;
    }
    default:
      e.tmplInsertionModeStack[0] = i.IN_BODY, e.insertionMode = i.IN_BODY, I(e, t);
  }
}
function La(e, t) {
  if (t.tagID === u.TEMPLATE) B(e, t);
}
function ht(e, t) {
  if (e.openElements.tmplCount > 0) e.openElements.popUntilTagNamePopped(u.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t);
  else Ie(e, t);
}
function Ra(e, t) {
  if (t.tagID === u.HTML) I(e, t);
  else se(e, t);
}
function lt(e, t) {
  var a;
  if (t.tagID === u.HTML) {
    if (!e.fragmentContext) e.insertionMode = i.AFTER_AFTER_BODY;
    if (e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === u.HTML) {
      e._setEndLocation(e.openElements.items[0], t);
      let n = e.openElements.items[1];
      if (n && !((a = e.treeAdapter.getNodeSourceCodeLocation(n)) === null || a === void 0 ? void 0 : a.endTag)) e._setEndLocation(n, t);
    }
  } else se(e, t);
}
function se(e, t) {
  e.insertionMode = i.IN_BODY, ie(e, t);
}
function Da(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.FRAMESET: {
      e._insertElement(t, E.HTML);
      break;
    }
    case u.FRAME: {
      e._appendElement(t, E.HTML), t.ackSelfClosing = true;
      break;
    }
    case u.NOFRAMES: {
      R(e, t);
      break;
    }
    default:
  }
}
function ga(e, t) {
  if (t.tagID === u.FRAMESET && !e.openElements.isRootHtmlElementCurrent()) {
    if (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== u.FRAMESET) e.insertionMode = i.AFTER_FRAMESET;
  }
}
function Pa(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.NOFRAMES: {
      R(e, t);
      break;
    }
    default:
  }
}
function Ma(e, t) {
  if (t.tagID === u.HTML) e.insertionMode = i.AFTER_AFTER_FRAMESET;
}
function xa(e, t) {
  if (t.tagID === u.HTML) I(e, t);
  else ue(e, t);
}
function ue(e, t) {
  e.insertionMode = i.IN_BODY, ie(e, t);
}
function Ba(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      I(e, t);
      break;
    }
    case u.NOFRAMES: {
      R(e, t);
      break;
    }
    default:
  }
}
function ka(e, t) {
  t.chars = m, e._insertCharacters(t);
}
function Ha(e, t) {
  e._insertCharacters(t), e.framesetOk = false;
}
function ft(e) {
  while (e.treeAdapter.getNamespaceURI(e.openElements.current) !== E.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current)) e.openElements.pop();
}
function Ua(e, t) {
  if (Ke(t)) ft(e), e._startTagOutsideForeignContent(t);
  else {
    let a = e._getAdjustedCurrentElement(), n = e.treeAdapter.getNamespaceURI(a);
    if (n === E.MATHML) fe(t);
    else if (n === E.SVG) Ve(t), me(t);
    if (te(t), t.selfClosing) e._appendElement(t, n);
    else e._insertElement(t, n);
    t.ackSelfClosing = true;
  }
}
function Fa(e, t) {
  if (t.tagID === u.P || t.tagID === u.BR) {
    ft(e), e._endTagOutsideForeignContent(t);
    return;
  }
  for (let a = e.openElements.stackTop; a > 0; a--) {
    let n = e.openElements.items[a];
    if (e.treeAdapter.getNamespaceURI(n) === E.HTML) {
      e._endTagOutsideForeignContent(t);
      break;
    }
    let d = e.treeAdapter.getTagName(n);
    if (d.toLowerCase() === t.tagName) {
      t.tagName = d, e.openElements.shortenToLength(a);
      break;
    }
  }
}
var ya = /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), gs = String.prototype.codePointAt != null ? (e, t) => e.codePointAt(t) : (e, t) => (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t);
function Oe(e, t) {
  return function(n) {
    let d, h = 0, l = "";
    while (d = e.exec(n)) {
      if (h !== d.index) l += n.substring(h, d.index);
      l += t.get(d[0].charCodeAt(0)), h = d.index + 1;
    }
    return l + n.substring(h);
  };
}
var Ps = Oe(/[&<>'"]/g, ya), mt = Oe(/["&\u00A0]/g, /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), _t = Oe(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var wa = /* @__PURE__ */ new Set([c.AREA, c.BASE, c.BASEFONT, c.BGSOUND, c.BR, c.COL, c.EMBED, c.FRAME, c.HR, c.IMG, c.INPUT, c.KEYGEN, c.LINK, c.META, c.PARAM, c.SOURCE, c.TRACK, c.WBR]);
function bt(e, t) {
  return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === E.HTML && wa.has(t.treeAdapter.getTagName(e));
}
var Ya = { treeAdapter: S, scriptingEnabled: true };
function xAr(e, t) {
  let a = { ...Ya, ...t };
  if (bt(e, a)) return "";
  return At(e, a);
}
function At(e, t) {
  let a = "", n = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === c.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === E.HTML ? t.treeAdapter.getTemplateContent(e) : e, d = t.treeAdapter.getChildNodes(n);
  if (d) for (let h of d) a += va(h, t);
  return a;
}
function va(e, t) {
  if (t.treeAdapter.isElementNode(e)) return Qa(e, t);
  if (t.treeAdapter.isTextNode(e)) return Wa(e, t);
  if (t.treeAdapter.isCommentNode(e)) return qa(e, t);
  if (t.treeAdapter.isDocumentTypeNode(e)) return Xa(e, t);
  return "";
}
function Qa(e, t) {
  let a = t.treeAdapter.getTagName(e);
  return `<${a}${Ga(e, t)}>${bt(e, t) ? "" : `${At(e, t)}</${a}>`}`;
}
function Ga(e, { treeAdapter: t }) {
  let a = "";
  for (let n of t.getAttrList(e)) {
    if (a += " ", n.namespace) switch (n.namespace) {
      case E.XML: {
        a += `xml:${n.name}`;
        break;
      }
      case E.XMLNS: {
        if (n.name !== "xmlns") a += "xmlns:";
        a += n.name;
        break;
      }
      case E.XLINK: {
        a += `xlink:${n.name}`;
        break;
      }
      default:
        a += `${n.prefix}:${n.name}`;
    }
    else a += n.name;
    a += `="${mt(n.value)}"`;
  }
  return a;
}
function Wa(e, t) {
  let { treeAdapter: a } = t, n = a.getTextNodeContent(e), d = a.getParentNode(e), h = d && a.isElementNode(d) && a.getTagName(d);
  return h && a.getNamespaceURI(d) === E.HTML && Me(h, t.scriptingEnabled) ? n : _t(n);
}
function qa(e, { treeAdapter: t }) {
  return `<!--${t.getCommentNodeContent(e)}-->`;
}
function Xa(e, { treeAdapter: t }) {
  return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
}
function gjn(e, t) {
  return re.parse(e, t);
}
export {
  QR,
  gjn,
  nDt,
  xAr
};
