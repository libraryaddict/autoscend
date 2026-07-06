var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/autoscend/auto_post_adv.ts
var auto_post_adv_exports = {};
__export(auto_post_adv_exports, {
  main: () => main
});
module.exports = __toCommonJS(auto_post_adv_exports);

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[_n++]
          };
        },
        e: function e2(r2) {
          throw r2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r2 = t.next();
      return a = r2.done, r2;
    },
    e: function e2(r2) {
      u = true, o = r2;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}

// src/autoscend/auto_post_adv.ts
var import_kolmafia136 = require("kolmafia");

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// node_modules/libram/dist/template-string.js
var import_kolmafia = require("kolmafia");

// node_modules/libram/dist/utils.js
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(
    str.split("")
  ), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function concatTemplateString2(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => acc + literal + (placeholders[i] ?? ""), "");
};
var handleTypeGetError = (Type, error) => {
  var message = `${error}`;
  var match = message.match(RegExp(`Bad ${Type.name.toLowerCase()} value: .*`));
  if (match) {
    (0, import_kolmafia.print)(`${match[0]}; if you're certain that this ${Type.name} exists and is spelled correctly, please update KoLMafia`, "red");
  } else {
    (0, import_kolmafia.print)(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction2(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia.abort)();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = (name) => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = (Type) => {
  var tagFunction = function tagFunction2(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia.abort)();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
var $bounty = createSingleConstant(import_kolmafia.Bounty, import_kolmafia.toBounty);
var $bounties = createPluralConstant(import_kolmafia.Bounty);
var $class = createSingleConstant(import_kolmafia.Class, import_kolmafia.toClass);
var $classes = createPluralConstant(import_kolmafia.Class);
var $coinmaster = createSingleConstant(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster);
var $coinmasters = createPluralConstant(import_kolmafia.Coinmaster);
var $effect = createSingleConstant(import_kolmafia.Effect, import_kolmafia.toEffect);
var $effects = createPluralConstant(import_kolmafia.Effect);
var $element = createSingleConstant(import_kolmafia.Element, import_kolmafia.toElement);
var $elements = createPluralConstant(import_kolmafia.Element);
var $familiar = createSingleConstant(import_kolmafia.Familiar, import_kolmafia.toFamiliar);
var $familiars = createPluralConstant(import_kolmafia.Familiar);
var $item = createSingleConstant(import_kolmafia.Item, import_kolmafia.toItem);
var $items = createPluralConstant(import_kolmafia.Item);
var $location = createSingleConstant(import_kolmafia.Location, import_kolmafia.toLocation);
var $locations = createPluralConstant(import_kolmafia.Location);
var $modifier = createSingleConstant(import_kolmafia.Modifier, import_kolmafia.toModifier);
var $modifiers = createPluralConstant(import_kolmafia.Modifier);
var $monster = createSingleConstant(import_kolmafia.Monster, import_kolmafia.toMonster);
var $monsters = createPluralConstant(import_kolmafia.Monster);
var $path = createSingleConstant(import_kolmafia.Path, import_kolmafia.toPath);
var $paths = createPluralConstant(import_kolmafia.Path);
var $phylum = createSingleConstant(import_kolmafia.Phylum, import_kolmafia.toPhylum);
var $phyla = createPluralConstant(import_kolmafia.Phylum);
var $servant = createSingleConstant(import_kolmafia.Servant, import_kolmafia.toServant);
var $servants = createPluralConstant(import_kolmafia.Servant);
var $skill = createSingleConstant(import_kolmafia.Skill, import_kolmafia.toSkill);
var $skills = createPluralConstant(import_kolmafia.Skill);
var $slot = createSingleConstant(import_kolmafia.Slot, import_kolmafia.toSlot);
var $slots = createPluralConstant(import_kolmafia.Slot);
var $stat = createSingleConstant(import_kolmafia.Stat, import_kolmafia.toStat);
var $stats = createPluralConstant(import_kolmafia.Stat);
var $thrall = createSingleConstant(import_kolmafia.Thrall, import_kolmafia.toThrall);
var $thralls = createPluralConstant(import_kolmafia.Thrall);

// src/autoscend/auto_acquire.ts
var import_kolmafia135 = require("kolmafia");

// src/autoscend/auto_consume.ts
var import_kolmafia134 = require("kolmafia");

// src/autoscend.ts
var import_kolmafia133 = require("kolmafia");

// src/autoscend/auto_adventure.ts
var import_kolmafia121 = require("kolmafia");

// src/autoscend/auto_util.ts
var import_kolmafia120 = require("kolmafia");

// src/autoscend/auto_buff.ts
var import_kolmafia115 = require("kolmafia");

// src/autoscend/auto_equipment.ts
var import_kolmafia114 = require("kolmafia");

// src/autoscend/auto_familiar.ts
var import_kolmafia113 = require("kolmafia");

// src/autoscend/iotms/mr2014.ts
var import_kolmafia112 = require("kolmafia");

// src/autoscend/auto_powerlevel.ts
var import_kolmafia111 = require("kolmafia");

// src/autoscend/auto_providers.ts
var import_kolmafia110 = require("kolmafia");

// src/autoscend/auto_restore.ts
var import_kolmafia108 = require("kolmafia");

// src/autoscend/iotms/clan.ts
var import_kolmafia107 = require("kolmafia");

// src/autoscend/paths/avatar_of_boris.ts
var import_kolmafia3 = require("kolmafia");

// src/autoscend/utils/kolmafiaUtils.ts
var import_kolmafia2 = require("kolmafia");
var CtorLeaf = /* @__PURE__ */ _createClass(
  function CtorLeaf2(ctor2) {
    _classCallCheck(this, CtorLeaf2);
    this.ctor = ctor2;
  }
);
function fileAsMap(filename, schema) {
  var depth = schema.length - 1;
  var root = /* @__PURE__ */ new Map();
  var _iterator = _createForOfIteratorHelper(
    (0, import_kolmafia2.fileToBuffer)(filename).split(/\r?\n/)
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var line = _step.value;
      if (!line || line.startsWith("#")) continue;
      var parts = line.split("	");
      var current = root;
      for (var i = 0; i < depth; i++) {
        var key = schema[i](parts[i] ?? "");
        if (i < depth - 1) {
          if (!current.has(key)) current.set(key, /* @__PURE__ */ new Map());
          current = current.get(key);
          continue;
        }
        var leaf = schema[depth];
        current.set(
          key,
          leaf instanceof CtorLeaf ? _construct(
            leaf.ctor,
            _toConsumableArray(parts.slice(depth))
          ) : leaf(parts[depth] ?? "")
        );
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return root;
}
var AshMatcher = /* @__PURE__ */ (function() {
  function AshMatcher2(pattern, string) {
    _classCallCheck(this, AshMatcher2);
    _defineProperty(this, "pattern", void 0);
    _defineProperty(this, "string", void 0);
    _defineProperty(this, "match", null);
    _defineProperty(this, "appendPosition", 0);
    this.pattern = new RegExp(pattern, "gs");
    this.string = string;
  }
  return _createClass(AshMatcher2, [{ key: "find", value: function find() {
    return (this.match = this.pattern.exec(this.string)) !== null;
  } }, {
    key: "group",
    value: function group() {
      var _group = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (!this.match) return "";
      if (typeof _group === "number")
        return this.match[_group] !== void 0 ? this.match[_group] : "";
      return this.match.groups && this.match.groups[_group] !== void 0 ? this.match.groups[_group] : "";
    }
    // [start, end] for a group, or [-1, -1] if it didn't participate / can't be located.
    // Group 0 is exact; subgroups are located left-to-right in the match (exact for
    // ordered, unambiguous captures — approximate for nested/repeated ones).
  }, { key: "_span", value: function _span(group) {
    if (!this.match) return [-1, -1];
    var base = this.match.index;
    if (group === 0) return [base, base + this.match[0].length];
    if (this.match[group] === void 0) return [-1, -1];
    var cursor = 0;
    for (var g = 1; g <= group; g++) {
      var t = this.match[g];
      if (t === void 0) continue;
      var at = this.match[0].indexOf(t, cursor);
      if (at === -1) return [-1, -1];
      if (g === group) return [base + at, base + at + t.length];
      cursor = at + t.length;
    }
    return [-1, -1];
  } }, { key: "start", value: function start() {
    var group = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this._span(group)[0];
  } }, { key: "end", value: function end() {
    var group = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this._span(group)[1];
  } }, { key: "groupCount", value: function groupCount() {
    var _RegExp$exec;
    return (((_RegExp$exec = new RegExp(`${this.pattern.source}|`).exec("")) === null || _RegExp$exec === void 0 ? void 0 : _RegExp$exec.length) || 1) - 1;
  } }, {
    key: "groupNames",
    value: function groupNames() {
      var res = /* @__PURE__ */ new Map();
      var _iterator2 = _createForOfIteratorHelper(
        this.pattern.source.matchAll(
          /\(\?<([a-zA-Z][a-zA-Z0-9]*)>/g
        )
      ), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var match = _step2.value;
          res.set(match[1], true);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return res;
    }
    // Convert Java-style tokens ($0, $1.., ${name}, \x) into a native JS replacement string.
  }, { key: "_toReplacement", value: function _toReplacement(replacement) {
    return replacement.replace(
      /\\(.)|\$([0-9]+)|\$\{([a-zA-Z][a-zA-Z0-9]*)\}/g,
      (m, esc, g, n) => {
        if (esc !== void 0) return esc === "$" ? "$$" : esc;
        if (g !== void 0) return g === "0" ? "$&" : `$${g}`;
        if (n !== void 0) return `$<${n}>`;
        return m;
      }
    );
  } }, { key: "replaceAll", value: function replaceAll(replacement) {
    return this.string.replace(this.pattern, this._toReplacement(replacement));
  } }, { key: "replaceFirst", value: function replaceFirst(replacement) {
    var nonGlobal = new RegExp(
      this.pattern.source,
      this.pattern.flags.replace("g", "")
    );
    return this.string.replace(nonGlobal, this._toReplacement(replacement));
  } }, { key: "reset", value: function reset(string) {
    this.pattern.lastIndex = 0;
    this.match = null;
    this.appendPosition = 0;
    if (string !== void 0) this.string = string;
    return this;
  } }, { key: "appendReplacement", value: function appendReplacement(replacement) {
    var rep = replacement.replace(
      /\\(.)|\$([0-9]+)|\$\{([a-zA-Z][a-zA-Z0-9]*)\}/g,
      (m, esc, g, n) => {
        var _groups;
        if (esc !== void 0) return esc;
        if (g === "0") return this.match[0];
        if (g !== void 0) return this.match[g] || "";
        if (n !== void 0) return ((_groups = this.match.groups) === null || _groups === void 0 ? void 0 : _groups[n]) || "";
        return m;
      }
    );
    var res = this.string.substring(this.appendPosition, this.match.index) + rep;
    this.appendPosition = this.pattern.lastIndex;
    return res;
  } }, { key: "appendTail", value: function appendTail() {
    return this.string.substring(this.appendPosition);
  } }]);
})();

// src/autoscend/paths/avatar_of_boris.ts
function is_boris() {
  return (0, import_kolmafia3.myPath)() === $path`Avatar of Boris`;
}
function borisAcquireHP(goal) {
  if (!is_boris()) {
    return false;
  }
  while ((0, import_kolmafia3.myHp)() < goal) {
    var missingHP = goal - (0, import_kolmafia3.myHp)();
    var failed_acquireMP = (0, import_kolmafia3.myMaxmp)() < 11;
    var castAmount = missingHP / 2;
    if (missingHP === 1) {
      castAmount = 1;
    }
    var mp_desired = (0, import_kolmafia3.toInt)((0, import_kolmafia3.min)(castAmount, 0.9 * (0, import_kolmafia3.myMaxmp)()));
    if ((0, import_kolmafia3.myMp)() < mp_desired && (0, import_kolmafia3.myMaxmp)() > 10) {
      if (!acquireMP$1(mp_desired)) {
        failed_acquireMP = true;
      }
    }
    castAmount = (0, import_kolmafia3.min)((0, import_kolmafia3.myMp)(), castAmount);
    if ((0, import_kolmafia3.myMp)() === 0) {
      break;
    }
    (0, import_kolmafia3.useSkill)(castAmount, $skill`Laugh It Off`);
    if (failed_acquireMP) {
      break;
    }
    if (goal > (0, import_kolmafia3.myMaxhp)()) {
      break;
    }
  }
  return goal >= (0, import_kolmafia3.myHp)();
}

// src/autoscend/paths/avatar_of_jarlsberg.ts
var import_kolmafia4 = require("kolmafia");
function is_jarlsberg() {
  return (0, import_kolmafia4.myPath)() === $path`Avatar of Jarlsberg`;
}

// src/autoscend/paths/avatar_of_sneaky_pete.ts
var import_kolmafia5 = require("kolmafia");
function is_pete() {
  return (0, import_kolmafia5.myPath)() === $path`Avatar of Sneaky Pete`;
}
function pete_peelOutRemaining() {
  if ((0, import_kolmafia5.getProperty)("peteMotorbikeTires") === "Racing Slicks") {
    return 30 - (0, import_kolmafia5.toInt)((0, import_kolmafia5.getProperty)("_petePeeledOut"));
  }
  return 10 - (0, import_kolmafia5.toInt)((0, import_kolmafia5.getProperty)("_petePeeledOut"));
}

// src/autoscend/paths/casual.ts
var import_kolmafia106 = require("kolmafia");

// src/autoscend/quests/level_08.ts
var import_kolmafia105 = require("kolmafia");

// src/autoscend/auto_routing.ts
var import_kolmafia104 = require("kolmafia");

// src/autoscend/auto_zone.ts
var import_kolmafia103 = require("kolmafia");

// src/autoscend/autoscend_record.ts
var import_kolmafia6 = require("kolmafia");
var generic_t = /* @__PURE__ */ _createClass(
  function generic_t2() {
    var _error = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var _boolean = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var _int = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var _float = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var _string = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
    var _item = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : import_kolmafia6.Item.none;
    var _location = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : import_kolmafia6.Location.none;
    var _class = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : import_kolmafia6.Class.none;
    var _stat = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : import_kolmafia6.Stat.none;
    var _skill = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : import_kolmafia6.Skill.none;
    var _effect = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : import_kolmafia6.Effect.none;
    var _familiar = arguments.length > 11 && arguments[11] !== void 0 ? arguments[11] : import_kolmafia6.Familiar.none;
    var _slot = arguments.length > 12 && arguments[12] !== void 0 ? arguments[12] : import_kolmafia6.Slot.none;
    var _monster = arguments.length > 13 && arguments[13] !== void 0 ? arguments[13] : import_kolmafia6.Monster.none;
    var _element = arguments.length > 14 && arguments[14] !== void 0 ? arguments[14] : import_kolmafia6.Element.none;
    var _phylum = arguments.length > 15 && arguments[15] !== void 0 ? arguments[15] : import_kolmafia6.Phylum.none;
    _classCallCheck(this, generic_t2);
    this._error = _error;
    this._boolean = _boolean;
    this._int = _int;
    this._float = _float;
    this._string = _string;
    this._item = _item;
    this._location = _location;
    this._class = _class;
    this._stat = _stat;
    this._skill = _skill;
    this._effect = _effect;
    this._familiar = _familiar;
    this._slot = _slot;
    this._monster = _monster;
    this._element = _element;
    this._phylum = _phylum;
  }
);

// src/autoscend/iotms/mr2016.ts
var import_kolmafia102 = require("kolmafia");

// src/autoscend/auto_list.ts
var import_kolmafia7 = require("kolmafia");
function itemList() {
  var retval = /* @__PURE__ */ new Map();
  return retval;
}
function List$8(data) {
  var retval = /* @__PURE__ */ new Map();
  var temp = /* @__PURE__ */ new Map();
  var _iterator0 = _createForOfIteratorHelper(
    data
  ), _step0;
  try {
    for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
      var _step0$value = _slicedToArray(_step0.value, 2), idx = _step0$value[0], el = _step0$value[1];
      temp.set(idx, el);
    }
  } catch (err) {
    _iterator0.e(err);
  } finally {
    _iterator0.f();
  }
  temp = new Map(_toConsumableArray(temp.entries()).sort((a, b) => a[0] - b[0]));
  var index = 0;
  var _iterator1 = _createForOfIteratorHelper(
    temp
  ), _step1;
  try {
    for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
      var _step1$value = _slicedToArray(_step1.value, 2), _idx3 = _step1$value[0], _el3 = _step1$value[1];
      retval.set(index, _el3);
      index = index + 1;
    }
  } catch (err) {
    _iterator1.e(err);
  } finally {
    _iterator1.f();
  }
  return retval;
}
function ListInsert$3(list, what) {
  var retval = List$8(list);
  retval.set(retval.size, what);
  return List$8(retval);
}

// src/autoscend/paths/gelatinous_noob.ts
var import_kolmafia9 = require("kolmafia");

// src/autoscend/iotms/mr2011.ts
var import_kolmafia8 = require("kolmafia");
function hasLegionKnife() {
  if (!(0, import_kolmafia8.isUnrestricted)($item`Loathing Legion knife`)) {
    return false;
  }
  if ((0, import_kolmafia8.inHardcore)()) {
    return false;
  }
  var _iterator = _createForOfIteratorHelper(import_kolmafia8.Item.get(
    Object.keys((0, import_kolmafia8.getRelated)($item`Loathing Legion knife`, "fold"))
  )), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var it = _step.value;
      if ((0, import_kolmafia8.itemAmount)(it) > 0) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}

// src/autoscend/paths/gelatinous_noob.ts
function in_gnoob() {
  return (0, import_kolmafia9.myPath)() === $path`Gelatinous Noob`;
}

// src/autoscend/paths/kingdom_of_exploathing.ts
var import_kolmafia101 = require("kolmafia");

// src/autoscend/iotms/mr2019.ts
var import_kolmafia100 = require("kolmafia");

// src/autoscend/paths/actually_ed_the_undying.ts
var import_kolmafia99 = require("kolmafia");

// src/autoscend/iotms/elementalPlanes.ts
var import_kolmafia10 = require("kolmafia");
function getCharterIndexable() {
  var charters = /* @__PURE__ */ new Map();
  charters.set($element`cold`, $item`airplane charter: The Glaciest`);
  charters.set($element`hot`, $item`airplane charter: That 70s Volcano`);
  charters.set($element`sleaze`, $item`airplane charter: Spring Break Beach`);
  charters.set($element`spooky`, $item`airplane charter: Conspiracy Island`);
  charters.set($element`stench`, $item`airplane charter: Dinseylandfill`);
  return charters;
}
function elementalPlanes_access(ele) {
  var charters = getCharterIndexable();
  return (0, import_kolmafia10.toBoolean)((0, import_kolmafia10.getProperty)(`${ele}AirportAlways`)) && (0, import_kolmafia10.isUnrestricted)(charters.get(ele) ?? charters.set(ele, import_kolmafia10.Item.none).get(ele));
}

// src/autoscend/iotms/mr2015.ts
var import_kolmafia97 = require("kolmafia");

// src/autoscend/paths/avatar_of_west_of_loathing.ts
var import_kolmafia11 = require("kolmafia");
function in_awol() {
  return (0, import_kolmafia11.myPath)() === $path`Avatar of West of Loathing`;
}
function awol_walkBuff() {
  if (!(0, import_kolmafia11.haveSkill)($skill`Walk: Leisurely Amble`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Prideful Strut`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Cautious Prowl`)) {
    return import_kolmafia11.Effect.none;
  }
  if ((0, import_kolmafia11.haveSkill)($skill`Walk: Leisurely Amble`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Prideful Strut`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Cautious Prowl`)) {
    return $effect`Leisurely Amblin'`;
  }
  if (!(0, import_kolmafia11.haveSkill)($skill`Walk: Leisurely Amble`) && (0, import_kolmafia11.haveSkill)($skill`Walk: Prideful Strut`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Cautious Prowl`)) {
    return $effect`Prideful Strut`;
  }
  if (!(0, import_kolmafia11.haveSkill)($skill`Walk: Leisurely Amble`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Prideful Strut`) && (0, import_kolmafia11.haveSkill)($skill`Walk: Cautious Prowl`)) {
    return $effect`Cautious Prowl`;
  }
  if ((0, import_kolmafia11.haveSkill)($skill`Walk: Leisurely Amble`) && (0, import_kolmafia11.haveSkill)($skill`Walk: Prideful Strut`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Cautious Prowl`)) {
    if ($locations`The Boss Bat's Lair, The Hidden Temple, The Themthar Hills`.includes(
      (0, import_kolmafia11.myLocation)()
    )) {
      return $effect`Leisurely Amblin'`;
    }
    if ((0, import_kolmafia11.myLevel)() < 13) {
      return $effect`Prideful Strut`;
    }
    return $effect`Leisurely Amblin'`;
  }
  if ((0, import_kolmafia11.haveSkill)($skill`Walk: Leisurely Amble`) && !(0, import_kolmafia11.haveSkill)($skill`Walk: Prideful Strut`) && (0, import_kolmafia11.haveSkill)($skill`Walk: Cautious Prowl`)) {
    if ($locations`The Boss Bat's Lair, The Hidden Temple, The Themthar Hills`.includes(
      (0, import_kolmafia11.myLocation)()
    )) {
      return $effect`Leisurely Amblin'`;
    }
    return $effect`Cautious Prowl`;
  }
  if (!(0, import_kolmafia11.haveSkill)($skill`Walk: Leisurely Amble`) && (0, import_kolmafia11.haveSkill)($skill`Walk: Prideful Strut`) && (0, import_kolmafia11.haveSkill)($skill`Walk: Cautious Prowl`)) {
    if ((0, import_kolmafia11.myLevel)() <= 6) {
      return $effect`Prideful Strut`;
    }
    return $effect`Cautious Prowl`;
  }
  if ($locations`The Boss Bat's Lair, The Hidden Temple, The Themthar Hills`.includes(
    (0, import_kolmafia11.myLocation)()
  )) {
    return $effect`Leisurely Amblin'`;
  }
  if ((0, import_kolmafia11.myLevel)() <= 6) {
    return $effect`Prideful Strut`;
  }
  return $effect`Cautious Prowl`;
}

// src/autoscend/paths/heavy_rains.ts
var import_kolmafia12 = require("kolmafia");
function in_heavyrains() {
  return (0, import_kolmafia12.myPath)() === $path`Heavy Rains`;
}

// src/autoscend/paths/legacy_of_loathing.ts
var import_kolmafia96 = require("kolmafia");

// src/autoscend/iotms/mr2023.ts
var import_kolmafia95 = require("kolmafia");

// src/autoscend/combat/auto_combat_util.ts
var import_kolmafia94 = require("kolmafia");

// src/autoscend/iotms/mr2017.ts
var import_kolmafia93 = require("kolmafia");

// src/autoscend/paths/dark_gyffte.ts
var import_kolmafia92 = require("kolmafia");

// src/autoscend/quests/level_12.ts
var import_kolmafia91 = require("kolmafia");

// src/autoscend/combat/auto_combat_quest.ts
var import_kolmafia89 = require("kolmafia");

// src/autoscend/paths/fall_of_the_dinosaurs.ts
var import_kolmafia13 = require("kolmafia");
function in_fotd() {
  return (0, import_kolmafia13.myPath)() === $path`Fall of the Dinosaurs`;
}

// src/autoscend/paths/g_lover.ts
var import_kolmafia14 = require("kolmafia");
function in_glover() {
  return (0, import_kolmafia14.myPath)() === $path`G-Lover`;
}
function glover_usable(it) {
  if (!in_glover()) {
    return true;
  }
  if ((0, import_kolmafia14.containsText)(it, "g")) {
    return true;
  }
  if ((0, import_kolmafia14.containsText)(it, "G")) {
    return true;
  }
  var checkItem = (0, import_kolmafia14.toItem)(it);
  if (checkItem !== import_kolmafia14.Item.none && import_kolmafia14.Item.get(
    [
      "SpinMaster&trade; lathe",
      // it works since there's no "use" link
      "&quot;I Voted!&quot; sticker",
      // free fights still work for I voted! sticker
      "ninja carabiner",
      "ninja crampons",
      "ninja rope",
      "eXtreme scarf",
      "snowboarder pants",
      "eXtreme mittens",
      "linoleum ore",
      "chrome ore",
      "asbestos ore",
      "loadstone",
      "amulet of extreme plot significance",
      "titanium assault umbrella",
      "antique machete",
      "half-size scalpel",
      "head mirror",
      "wet stew",
      "UV-resistant compass",
      "Talisman o' Namsilat",
      "unstable fulminate",
      "Orcish baseball cap",
      "Orcish frat-paddle",
      "filthy knitted dread sack",
      "filthy corduroys",
      "continuum transfunctioner",
      "beer helmet",
      "distressed denim pants",
      "reinforced beaded headband",
      "bullet-proof corduroys"
    ]
  ).includes(checkItem)) {
    return true;
  }
  return false;
}
function glover_usable$1(eff) {
  if (!in_glover()) {
    return true;
  }
  if ($effects`Stone-Faced`.includes(eff)) {
    return true;
  }
  return glover_usable(eff.toString());
}

// src/autoscend/combat/auto_combat.ts
var import_kolmafia87 = require("kolmafia");

// src/autoscend/paths/avant_guard.ts
var import_kolmafia63 = require("kolmafia");

// src/autoscend/iotms/mr2024.ts
var import_kolmafia62 = require("kolmafia");

// src/c2t_apron.ts
var import_kolmafia15 = require("kolmafia");

// src/c2t_megg.ts
var import_kolmafia16 = require("kolmafia");
var c2t_megg_oldFam = import_kolmafia16.Familiar.none;
var c2t_megg_oldEq = import_kolmafia16.Item.none;

// src/autoscend/paths/adventurer_meats_world.ts
var import_kolmafia61 = require("kolmafia");

// src/autoscend/iotms/mr2025.ts
var import_kolmafia60 = require("kolmafia");

// src/autoscend/paths/hattrick.ts
var import_kolmafia17 = require("kolmafia");
function in_hattrick() {
  return (0, import_kolmafia17.myPath)() === $path`Hat Trick`;
}

// src/autoscend/paths/zootomist.ts
var import_kolmafia59 = require("kolmafia");

// src/autoscend/iotms/mr2022.ts
var import_kolmafia58 = require("kolmafia");

// src/autoscend/paths/path_of_the_plumber.ts
var import_kolmafia18 = require("kolmafia");
function in_plumber() {
  return (0, import_kolmafia18.myPath)() === $path`Path of the Plumber`;
}
function plumber_equippedHammer() {
  return (0, import_kolmafia18.equippedItem)($slot`weapon`) === $item`hammer` || (0, import_kolmafia18.equippedItem)($slot`weapon`) === $item`heavy hammer`;
}
function plumber_equippedFlower() {
  return (0, import_kolmafia18.equippedItem)($slot`weapon`) === $item`[10462]fire flower` || (0, import_kolmafia18.equippedItem)($slot`weapon`) === $item`bonfire flower`;
}
function plumber_equippedBoots() {
  return (0, import_kolmafia18.haveEquipped)($item`work boots`) || (0, import_kolmafia18.haveEquipped)($item`fancy boots`);
}
function plumber_ppCost(sk) {
  switch (sk) {
    case $skill`[25001]Hammer Throw`:
    case $skill`[25003]Juggle Fireballs`:
    case $skill`[25005]Spin Jump`:
      return 1;
    case $skill`[25002]Ultra Smash`:
    case $skill`[25004]Fireball Barrage`:
    case $skill`[25006]Multi-Bounce`:
      return 2;
    default:
      return 0;
  }
}
function plumber_skillValid(sk) {
  if (!in_plumber()) {
    return true;
  }
  if (import_kolmafia18.Skill.get(
    [
      "Jump Attack",
      "[25005]Spin Jump",
      "[25006]Multi-Bounce"
    ]
  ).includes(sk)) {
    return plumber_equippedBoots();
  } else if (import_kolmafia18.Skill.get(
    [
      "Fireball Toss",
      "[25003]Juggle Fireballs",
      "[25004]Fireball Barrage"
    ]
  ).includes(sk)) {
    return plumber_equippedFlower();
  } else if (import_kolmafia18.Skill.get(
    [
      "Hammer Smash",
      "[25001]Hammer Throw",
      "[25002]Ultra Smash"
    ]
  ).includes(sk)) {
    return plumber_equippedHammer();
  }
  return true;
}

// src/autoscend/paths/pocket_familiars.ts
var import_kolmafia19 = require("kolmafia");
function in_pokefam() {
  return (0, import_kolmafia19.myPath)() === $path`Pocket Familiars`;
}

// src/autoscend/paths/small.ts
var import_kolmafia20 = require("kolmafia");
function in_small() {
  return (0, import_kolmafia20.myPath)() === $path`A Shrunken Adventurer am I`;
}

// src/autoscend/paths/two_crazy_random_summer.ts
var import_kolmafia21 = require("kolmafia");
function in_tcrs() {
  return (0, import_kolmafia21.myPath)() === $path`Two Crazy Random Summer`;
}

// src/autoscend/paths/wereprofessor.ts
var import_kolmafia22 = require("kolmafia");
function in_wereprof() {
  return (0, import_kolmafia22.myPath)() === $path`WereProfessor`;
}
function is_werewolf() {
  if (!in_wereprof()) {
    return false;
  }
  if ((0, import_kolmafia22.haveEffect)($effect`Savage Beast`) > 0) {
    return true;
  }
  return false;
}
function is_professor() {
  if (!in_wereprof()) {
    return false;
  }
  if ((0, import_kolmafia22.haveEffect)($effect`Mild-Mannered Professor`) > 0) {
    return true;
  }
  return false;
}
function wereprof_oculus() {
  if (!in_wereprof()) {
    return false;
  }
  if ((0, import_kolmafia22.haveEquipped)($item`biphasic molecular oculus`) || (0, import_kolmafia22.haveEquipped)($item`triphasic molecular oculus`)) {
    return true;
  }
  return false;
}
function wereprof_usable(str) {
  if (!in_wereprof()) {
    return true;
  }
  if (str === "Stooper") {
    return false;
  }
  return true;
}

// src/autoscend/quests/level_09.ts
var import_kolmafia57 = require("kolmafia");

// src/autoscend/iotms/mr2018.ts
var import_kolmafia56 = require("kolmafia");

// src/autoscend/paths/bees_hate_you.ts
var import_kolmafia23 = require("kolmafia");
function in_bhy() {
  return (0, import_kolmafia23.myPath)() === $path`Bees Hate You`;
}
function bhy_usable(str) {
  if (!in_bhy()) {
    return true;
  }
  switch (str) {
    case "Cobb's Knob map":
    case "ball polish":
    case "black market map":
    case "boring binder clip":
    case "beehive":
    case "electric boning knife":
    case "ninja carabiner":
    case "Orcish baseball cap":
    case "reinforced beaded headband":
    case "bullet-proof corduroys":
    case "blackberry galoshes":
    case "titanium assault umbrella":
    case "Knob Goblin harem pants":
    case "Knob Goblin harem veil":
      return true;
  }
  if ((0, import_kolmafia23.containsText)(str, "b")) {
    return false;
  }
  if ((0, import_kolmafia23.containsText)(str, "B")) {
    return false;
  }
  return true;
}
function bhy_is_item_valid(it) {
  if (!in_bhy()) {
    (0, import_kolmafia23.abort)(
      "bhy_is_item_valid(item it) should never be called outside of bees hate you path."
    );
  }
  if ((0, import_kolmafia23.toSlot)(it) !== import_kolmafia23.Slot.none) {
    return (0, import_kolmafia23.isUnrestricted)(it);
  }
  if ($items`Cobb's Knob map, enchanted bean, ball polish, black market map, boring binder clip, beehive, electric boning knife`.includes(
    it
  )) {
    return true;
  }
  return bhy_usable(it.toString()) && (0, import_kolmafia23.isUnrestricted)(it);
}

// src/autoscend/paths/disguises_delimit.ts
var import_kolmafia24 = require("kolmafia");
function in_disguises() {
  return (0, import_kolmafia24.myPath)() === $path`Disguises Delimit`;
}

// src/autoscend/paths/one_crazy_random_summer.ts
var import_kolmafia25 = require("kolmafia");
function in_ocrs() {
  return (0, import_kolmafia25.myPath)() === $path`One Crazy Random Summer`;
}
function ocrs_postHelper() {
  if (in_ocrs()) {
    return false;
  }
  (0, import_kolmafia25.setProperty)("auto_useCleesh", false.toString());
  return true;
}

// src/autoscend/paths/quantum_terrarium.ts
var import_kolmafia55 = require("kolmafia");

// src/autoscend/quests/level_11.ts
var import_kolmafia54 = require("kolmafia");

// src/autoscend/iotms/mr2020.ts
var import_kolmafia26 = require("kolmafia");
function auto_haveBirdADayCalendar() {
  return (0, import_kolmafia26.itemAmount)($item`Bird-a-Day calendar`) > 0 && auto_is_valid($item`Bird-a-Day calendar`);
}
function auto_birdIsValid() {
  if (!auto_haveBirdADayCalendar()) {
    return false;
  }
  if (auto_birdsLeftToday() === 0) {
    return false;
  }
  if (!(0, import_kolmafia26.toBoolean)((0, import_kolmafia26.getProperty)("_canSeekBirds"))) {
    (0, import_kolmafia26.use)(1, $item`Bird-a-Day calendar`);
  }
  return true;
}
function auto_birdsSought() {
  return (0, import_kolmafia26.toInt)((0, import_kolmafia26.getProperty)("_birdsSoughtToday"));
}
function auto_birdsLeftToday() {
  return 6 - auto_birdsSought();
}
function auto_birdCanSeek() {
  if (!auto_birdIsValid()) {
    return false;
  }
  return auto_have_skill($skill`Seek out a Bird`);
}
function auto_favoriteBirdCanSeek() {
  if ((0, import_kolmafia26.toBoolean)((0, import_kolmafia26.getProperty)("_favoriteBirdVisited"))) {
    return false;
  }
  return auto_have_skill($skill`Visit your Favorite Bird`);
}
function auto_hasPowerfulGlove() {
  return possessEquipment($item`Powerful Glove`) && auto_is_valid($item`mint-in-box Powerful Glove`);
}
function auto_powerfulGloveCharges() {
  if (!auto_hasPowerfulGlove()) {
    return 0;
  }
  return 100 - (0, import_kolmafia26.toInt)((0, import_kolmafia26.getProperty)("_powerfulGloveBatteryPowerUsed"));
}
function auto_powerfulGloveNoncombatSkill(sk) {
  if (!auto_hasPowerfulGlove() || !auto_is_valid$2(sk)) {
    return false;
  }
  if (auto_powerfulGloveCharges() < 5) {
    return false;
  }
  var old = import_kolmafia26.Item.none;
  if (!(0, import_kolmafia26.haveEquipped)($item`Powerful Glove`)) {
    old = (0, import_kolmafia26.equippedItem)($slot`acc3`);
    (0, import_kolmafia26.equip)($slot`acc3`, $item`Powerful Glove`);
  }
  var ret = (0, import_kolmafia26.useSkill)(1, sk);
  if (old !== import_kolmafia26.Item.none) {
    (0, import_kolmafia26.equip)($slot`acc3`, old);
  }
  if (ret) {
    handleTracker(sk.toString(), "auto_powerfulglove");
  } else {
    var page = (0, import_kolmafia26.visitUrl)("desc_item.php?whichitem=991142661");
    if ((0, import_kolmafia26.containsText)(page, "The Glove's battery is fully depleted.")) {
      auto_log_error(
        "Mafia's Powerful Glove battery tracking was wrong, correcting."
      );
      (0, import_kolmafia26.setProperty)("_powerfulGloveBatteryPowerUsed", 100 .toString());
    }
  }
  return ret;
}
function auto_powerfulGloveReplacesAvailable(inCombat) {
  if (!auto_hasPowerfulGlove()) {
    return 0;
  }
  if (inCombat && !(0, import_kolmafia26.haveEquipped)($item`Powerful Glove`)) {
    return 0;
  }
  return (0, import_kolmafia26.toInt)(auto_powerfulGloveCharges() / 10);
}
function auto_powerfulGloveNoncombat() {
  if (0 < (0, import_kolmafia26.haveEffect)($effect`Invisible Avatar`)) {
    return false;
  }
  return auto_powerfulGloveNoncombatSkill($skill`CHEAT CODE: Invisible Avatar`);
}
function auto_powerfulGloveStats() {
  return auto_powerfulGloveNoncombatSkill($skill`CHEAT CODE: Triple Size`);
}
function auto_canFightPiranhaPlant() {
  var numMushroomFights = in_plumber() ? 5 : 1;
  if (auto_is_valid($item`packet of mushroom spores`) && $item`packet of mushroom spores`.toString() in (0, import_kolmafia26.getCampground)() && (0, import_kolmafia26.toInt)((0, import_kolmafia26.getProperty)("_mushroomGardenFights")) < numMushroomFights) {
    return true;
  }
  return false;
}
function auto_canTendMushroomGarden() {
  if (auto_is_valid($item`packet of mushroom spores`) && $item`packet of mushroom spores`.toString() in (0, import_kolmafia26.getCampground)() && !(0, import_kolmafia26.toBoolean)((0, import_kolmafia26.getProperty)("_mushroomGardenVisited"))) {
    return true;
  }
  return false;
}
function auto_piranhaPlantFightsRemaining() {
  if (auto_canFightPiranhaPlant()) {
    var numMushroomFights = in_plumber() ? 5 : 1;
    return numMushroomFights - (0, import_kolmafia26.toInt)((0, import_kolmafia26.getProperty)("_mushroomGardenFights"));
  }
  return 0;
}
function auto_hasRetrocape() {
  return possessEquipment($item`unwrapped knock-off retro superhero cape`) && auto_is_valid($item`unwrapped knock-off retro superhero cape`);
}

// src/autoscend/iotms/mr2026.ts
var import_kolmafia27 = require("kolmafia");
function auto_haveEternityCodpiece() {
  if (auto_is_valid($item`The Eternity Codpiece`) && (0, import_kolmafia27.availableAmount)($item`The Eternity Codpiece`) > 0) {
    return true;
  }
  return false;
}
function auto_isInEternityCodpiece(it) {
  var _iterator = _createForOfIteratorHelper(
    $slots`codpiece1, codpiece2, codpiece3, codpiece4, codpiece5`
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var s = _step.value;
      var b = true;
      if ((0, import_kolmafia27.equippedItem)(s) === it) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
function auto_haveLegendarySealClubbingClub() {
  if (auto_is_valid($item`legendary seal-clubbing club`) && (0, import_kolmafia27.availableAmount)($item`legendary seal-clubbing club`) > 0) {
    return true;
  }
  return false;
}
function auto_clubEmBackInTimesRemaining() {
  if (!auto_haveLegendarySealClubbingClub()) {
    return 0;
  }
  return 5 - (0, import_kolmafia27.toInt)((0, import_kolmafia27.getProperty)("_clubEmTimeUsed"));
}
function wantToClubEmBackInTime(loc, enemy) {
  if (auto_clubEmBackInTimesRemaining() === 0) {
    return false;
  }
  if (isFreeMonster$1(enemy, loc)) {
    return false;
  }
  if ((0, import_kolmafia27.canInteract)()) {
    return false;
  }
  return auto_wantToFreeKillWithNoDrops(loc, enemy);
}
function auto_haveHeartstone() {
  if (!auto_is_valid($item`Heartstone`)) {
    return false;
  }
  if ((0, import_kolmafia27.availableAmount)($item`Heartstone`) > 0) {
    return true;
  }
  if (auto_isInEternityCodpiece($item`Heartstone`)) {
    return true;
  }
  return false;
}
function auto_heartstoneLuckRemaining() {
  if (!auto_haveHeartstone()) {
    return 0;
  }
  if ((0, import_kolmafia27.getProperty)("heartstoneLuckUnlocked") !== "true") {
    return 0;
  }
  if ((0, import_kolmafia27.toBoolean)((0, import_kolmafia27.getProperty)("_heartstoneLuckUsed"))) {
    return 0;
  }
  return 1;
}
function auto_haveArchaeologistSpade() {
  if (auto_is_valid($item`Archaeologist's Spade`) && (0, import_kolmafia27.availableAmount)($item`Archaeologist's Spade`) > 0) {
    return true;
  }
  return false;
}
function auto_spadeDigsRemaining() {
  if (!auto_haveArchaeologistSpade()) {
    return 0;
  }
  return 11 - (0, import_kolmafia27.toInt)((0, import_kolmafia27.getProperty)("_archSpadeDigs"));
}
function auto_spadeDigItem() {
  var SPADE = $item`Archaeologist's Spade`;
  var choice_adv_num = 1596;
  var choice_num = 1;
  var choice_url = `choice.php?pwd&whichchoice=${choice_adv_num}&option=${choice_num}`;
  var use_url = `inv_use.php?pwd&which=3&whichitem=${SPADE.id}`;
  var n_digs = auto_spadeDigsRemaining();
  if (n_digs > 0) {
    (0, import_kolmafia27.visitUrl)(use_url);
    var result_1 = (0, import_kolmafia27.visitUrl)(choice_url);
    var drops = new Map(
      Object.entries((0, import_kolmafia27.extractItems)(result_1)).map(
        (_ref) => {
          var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
          return [
            import_kolmafia27.Item.get(_k),
            _v
          ];
        }
      )
    );
    var my_drop = import_kolmafia27.Item.none;
    var total_items_dropped = 0;
    var _iterator2 = _createForOfIteratorHelper(
      drops
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2), it = _step2$value[0], n = _step2$value[1];
        my_drop = it;
        total_items_dropped += n;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (total_items_dropped !== 1) {
      auto_log_error(
        `Seem to have got ${total_items_dropped} from spade dig nearby, expecting 1.`
      );
      handleTracker$2(
        SPADE.toString(),
        (0, import_kolmafia27.myLocation)().toString(),
        `Dig up something nearby reported ${total_items_dropped} drops`,
        "auto_otherstuff"
      );
      return total_items_dropped !== 0;
    }
    if (n_digs > auto_spadeDigsRemaining()) {
      handleTracker$2(
        SPADE.toString(),
        `Dig up something nearby - ${(0, import_kolmafia27.myLocation)()}`,
        my_drop.toString(),
        "auto_otherstuff"
      );
      return true;
    }
    handleTracker$1(
      SPADE.toString(),
      "FAILED: Dig up something nearby",
      "auto_otherstuff"
    );
  }
  return false;
}

// src/autoscend/paths/avatar_of_shadows_over_loathing.ts
var import_kolmafia28 = require("kolmafia");
function in_aosol() {
  return (0, import_kolmafia28.myPath)() === $path`Avatar of Shadows Over Loathing`;
}
function auto_pigSkinnerAcquireHP(goal) {
  while ((0, import_kolmafia28.myHp)() < goal) {
    break;
  }
  return goal >= (0, import_kolmafia28.myHp)();
}
function auto_cheeseWizardAcquireHP(goal) {
  while ((0, import_kolmafia28.myHp)() < goal) {
    break;
  }
  return goal >= (0, import_kolmafia28.myHp)();
}
function auto_jazzAgentAcquireHP(goal) {
  while ((0, import_kolmafia28.myHp)() < goal) {
    break;
  }
  return goal >= (0, import_kolmafia28.myHp)();
}

// src/autoscend/paths/live_ascend_repeat.ts
var import_kolmafia29 = require("kolmafia");
function in_lar() {
  return (0, import_kolmafia29.myPath)() === $path`Live. Ascend. Repeat.`;
}

// src/autoscend/paths/low_key_summer.ts
var import_kolmafia53 = require("kolmafia");

// src/autoscend/quests/level_02.ts
var import_kolmafia30 = require("kolmafia");

// src/autoscend/quests/level_03.ts
var import_kolmafia31 = require("kolmafia");

// src/autoscend/quests/level_04.ts
var import_kolmafia32 = require("kolmafia");

// src/autoscend/quests/level_05.ts
var import_kolmafia52 = require("kolmafia");

// src/autoscend/paths/you_robot.ts
var import_kolmafia51 = require("kolmafia");

// src/autoscend/quests/level_10.ts
var import_kolmafia50 = require("kolmafia");

// src/autoscend/paths/way_of_the_surprising_fist.ts
var import_kolmafia33 = require("kolmafia");
function in_wotsf() {
  return (0, import_kolmafia33.myPath)() === $path`Way of the Surprising Fist`;
}

// src/autoscend/quests/level_13.ts
var import_kolmafia49 = require("kolmafia");

// src/autoscend/iotms/mr2021.ts
var import_kolmafia39 = require("kolmafia");

// src/autoscend/auto_craft.ts
var import_kolmafia34 = require("kolmafia");
function canUntinker() {
  if (hasLegionKnife() && auto_is_valid($item`Loathing Legion universal screwdriver`)) {
    return true;
  }
  return (0, import_kolmafia34.getProperty)("questM01Untinker") === "finished";
}

// src/autoscend/paths/kolhs.ts
var import_kolmafia35 = require("kolmafia");
function in_kolhs() {
  return (0, import_kolmafia35.myPath)() === $path`KOLHS`;
}
function kolhs_mandatorySchool() {
  if (!in_kolhs()) {
    return false;
  }
  return (0, import_kolmafia35.toInt)((0, import_kolmafia35.getProperty)("_kolhsAdventures")) < 40;
}

// src/autoscend/paths/wildfire.ts
var import_kolmafia36 = require("kolmafia");
function in_wildfire() {
  return (0, import_kolmafia36.myPath)() === $path`Wildfire`;
}

// src/autoscend/quests/level_07.ts
var import_kolmafia38 = require("kolmafia");

// src/autoscend/paths/zombie_slayer.ts
var import_kolmafia37 = require("kolmafia");
function in_zombieSlayer() {
  return (0, import_kolmafia37.myPath)() === $path`Zombie Slayer`;
}
function lureMinions(target) {
  if (!in_zombieSlayer() || !auto_have_skill($skill`Lure Minions`)) {
    return false;
  }
  if ((0, import_kolmafia37.myMp)() >= target) {
    return true;
  }
  var brains_needed = (0, import_kolmafia37.fullnessLimit)() - (0, import_kolmafia37.myFullness)() + (0, import_kolmafia37.ceil)((0, import_kolmafia37.fullnessLimit)() / 2);
  function check_brains(brains) {
    if (brains_needed === 0) {
      return brains;
    }
    var temp = (0, import_kolmafia37.max)(brains - brains_needed, 0);
    brains_needed = (0, import_kolmafia37.max)(brains_needed - brains, 0);
    return temp;
  }
  var exchanged = false;
  function lure(x, type_1) {
    x = (0, import_kolmafia37.min)((0, import_kolmafia37.ceil)((0, import_kolmafia37.toFloat)(target - (0, import_kolmafia37.myMp)()) / type_1), x);
    if (x > 0) {
      if (!exchanged) {
        (0, import_kolmafia37.visitUrl)(
          `runskillz.php?action=Skillz&whichskill=12002&pwd&quantity=1&targetplayer=${(0, import_kolmafia37.myId)()}`
        );
      }
      (0, import_kolmafia37.visitUrl)(`choice.php?pwd&whichchoice=599&option=${type_1}&quantity=${x}`);
      exchanged = true;
    }
    return (0, import_kolmafia37.myMp)() >= target;
  }
  check_brains((0, import_kolmafia37.itemAmount)($item`hunter brain`));
  check_brains((0, import_kolmafia37.itemAmount)($item`boss brain`));
  var spare_good = check_brains((0, import_kolmafia37.itemAmount)($item`good brain`));
  var spare_decent = check_brains((0, import_kolmafia37.itemAmount)($item`decent brain`));
  var spare_crappy = check_brains((0, import_kolmafia37.itemAmount)($item`crappy brain`));
  if (lure(spare_crappy, 1) || lure(spare_decent, 2) || lure(spare_good, 3)) {
  }
  if (exchanged) {
    (0, import_kolmafia37.visitUrl)("choice.php?pwd&whichchoice=599&option=5");
  }
  return (0, import_kolmafia37.myHp)() >= target;
}
function summonMinions(target, meat_reserve) {
  if (!in_zombieSlayer() || !auto_have_skill($skill`Summon Minion`)) {
    return false;
  }
  if ((0, import_kolmafia37.myMp)() >= target) {
    return true;
  }
  var x = target - (0, import_kolmafia37.myMp)();
  if (auto_have_skill($skill`Summon Horde`)) {
    x = (0, import_kolmafia37.ceil)(x / 12);
    x = (0, import_kolmafia37.min)(((0, import_kolmafia37.myMeat)() - meat_reserve) / 1e3, x);
    if (x > 0) {
      (0, import_kolmafia37.visitUrl)(
        `runskillz.php?action=Skillz&whichskill=12026&pwd&quantity=1&targetplayer=${(0, import_kolmafia37.myId)()}`
      );
      for (var cast = 1, _last_5 = x, _step_5 = 1, _up_5 = cast <= _last_5, _inc_5 = _up_5 ? Math.abs(_step_5) : -Math.abs(_step_5); _up_5 ? cast <= _last_5 : cast >= _last_5; cast += _inc_5) {
        (0, import_kolmafia37.visitUrl)("choice.php?pwd&whichchoice=601&option=1");
      }
      (0, import_kolmafia37.visitUrl)("choice.php?pwd&whichchoice=601&option=2");
    }
  } else {
    x = (0, import_kolmafia37.min)(((0, import_kolmafia37.myMeat)() - meat_reserve) / 100, x);
    if (x > 0) {
      (0, import_kolmafia37.visitUrl)(
        `runskillz.php?action=Skillz&whichskill=12021&pwd&quantity=1&targetplayer=${(0, import_kolmafia37.myId)()}`
      );
      (0, import_kolmafia37.visitUrl)(`choice.php?pwd&whichchoice=600&option=1&quantity=${x}`);
      (0, import_kolmafia37.visitUrl)("choice.php?pwd&whichchoice=600&option=2");
    }
  }
  return (0, import_kolmafia37.myHp)() >= target;
}
function zombieSlayer_acquireMP(goal, meat_reserve) {
  if (!in_zombieSlayer()) {
    return false;
  }
  if ((0, import_kolmafia37.myMp)() >= goal) {
    return true;
  }
  return lureMinions(goal) || summonMinions(goal, meat_reserve);
}
function zombieSlayer_acquireMP$1(goal) {
  return zombieSlayer_acquireMP(goal, meatReserve());
}
function zombieSlayer_acquireHP(goal) {
  if (!in_zombieSlayer()) {
    return false;
  }
  if ((0, import_kolmafia37.myHp)() >= goal) {
    return true;
  }
  var missingHP = goal - (0, import_kolmafia37.myHp)();
  if (auto_have_skill($skill`Devour Minions`)) {
    while ((missingHP > (0, import_kolmafia37.floor)((0, import_kolmafia37.myMaxhp)() * 0.3) || ((0, import_kolmafia37.haveEffect)($effect`Thrice-Cursed`) > 0 || (0, import_kolmafia37.haveEffect)($effect`Twice-Cursed`) > 0 || (0, import_kolmafia37.haveEffect)($effect`Once-Cursed`) > 0) && !(internalQuestStatus("questL11Curses") > 1 || (0, import_kolmafia37.itemAmount)($item`moss-covered stone sphere`) > 0)) && zombieSlayer_acquireMP$1((0, import_kolmafia37.mpCost)($skill`Devour Minions`))) {
      (0, import_kolmafia37.useSkill)(1, $skill`Devour Minions`);
      if ((0, import_kolmafia37.myHp)() >= goal) {
        break;
      }
      if (missingHP === goal - (0, import_kolmafia37.myHp)()) {
        break;
      }
      missingHP = goal - (0, import_kolmafia37.myHp)();
    }
    missingHP = goal - (0, import_kolmafia37.myHp)();
  }
  if (auto_have_skill($skill`Bite Minion`)) {
    while (missingHP > 0 && zombieSlayer_acquireMP$1((0, import_kolmafia37.mpCost)($skill`Bite Minion`))) {
      (0, import_kolmafia37.useSkill)(1, $skill`Bite Minion`);
      if ((0, import_kolmafia37.myHp)() >= goal) {
        break;
      }
      if (missingHP === goal - (0, import_kolmafia37.myHp)()) {
        break;
      }
      missingHP = goal - (0, import_kolmafia37.myHp)();
    }
  }
  return (0, import_kolmafia37.myHp)() >= goal;
}
function zombieSlayer_usable(fam) {
  if (!in_zombieSlayer()) {
    return true;
  }
  return (0, import_kolmafia37.containsText)(fam.attributes, "undead");
}

// src/autoscend/quests/level_07.ts
function cyrptEvilBonus(inCombat) {
  var cyrptBonus = is_pete() && (0, import_kolmafia38.getProperty)("peteMotorbikeCowling") === "Ghost Vacuum" ? 1 : 0;
  cyrptBonus += (0, import_kolmafia38.toInt)((0, import_kolmafia38.getProperty)("_nightmareFuelCharges")) > 0 ? 2 : 0;
  if (inCombat) {
    cyrptBonus += (0, import_kolmafia38.equippedItem)($slot`back`) === $item`unwrapped knock-off retro superhero cape` && auto_is_valid$2($skill`Slay the Dead`) && (0, import_kolmafia38.getProperty)("retroCapeSuperhero") === "vampire" && (0, import_kolmafia38.getProperty)("retroCapeWashingInstructions") === "kill" && (0, import_kolmafia38.itemType)((0, import_kolmafia38.equippedItem)($slot`weapon`)) === "sword" ? 1 : 0;
    cyrptBonus += (0, import_kolmafia38.equippedItem)($slot`hat`) === $item`gravy boat` && auto_is_valid($item`gravy boat`) ? 1 : 0;
  } else {
    cyrptBonus += auto_hasRetrocape() && auto_is_valid$2($skill`Slay the Dead`) && auto_forceEquipSword(true) ? 1 : 0;
    cyrptBonus += possessEquipment($item`gravy boat`) && auto_is_valid($item`gravy boat`) ? 1 : 0;
  }
  return cyrptBonus;
}
function cyrptEvilBonus$1() {
  return cyrptEvilBonus(false);
}

// src/autoscend/iotms/mr2021.ts
function auto_haveCrystalBall() {
  var crystal_ball = wrap_item($item`miniature crystal ball`);
  return possessEquipment(crystal_ball) && auto_is_valid(crystal_ball) && pathHasFamiliar();
}
function crystalBallMonster(loc) {
  var crystalBallPredictions = new Map(
    (0, import_kolmafia39.splitString)((0, import_kolmafia39.getProperty)("crystalBallPredictions"), "[|]").map(
      (_v, _i) => [
        _i,
        _v
      ]
    )
  );
  if ((crystalBallPredictions.get(0) ?? crystalBallPredictions.set(0, "").get(0)) === "") {
    return import_kolmafia39.Monster.none;
  }
  var _iterator = _createForOfIteratorHelper(
    crystalBallPredictions.keys()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var i = _step.value;
      var thisPrediction = new Map(
        (0, import_kolmafia39.splitString)(
          crystalBallPredictions.get(i) ?? crystalBallPredictions.set(i, "").get(i),
          ":"
        ).map((_v, _i) => [_i, _v])
      );
      if ((0, import_kolmafia39.toLocation)(thisPrediction.get(1) ?? thisPrediction.set(1, "").get(1)) !== loc) {
        continue;
      }
      return (0, import_kolmafia39.toMonster)(thisPrediction.get(2) ?? thisPrediction.set(2, "").get(2));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return import_kolmafia39.Monster.none;
}
function auto_allowCrystalBall(predicted_monster, loc) {
  if ($locations`Next to that Barrel with Something Burning in it, Out by that Rusted-Out Car, Over Where the Old Tires Are, Near an Abandoned Refrigerator`.includes(
    loc
  )) {
    return false;
  }
  if (predicted_monster === import_kolmafia39.Monster.none) {
    return true;
  }
  if ((0, import_kolmafia39.toBoolean)((0, import_kolmafia39.getProperty)("mappingMonsters"))) {
    return true;
  }
  if ((0, import_kolmafia39.haveEffect)($effect`Lucky!`) > 0) {
    if (loc === $location`The Hidden Temple`) {
      return true;
    }
  }
  if ((0, import_kolmafia39.isBanished)(predicted_monster) || auto_wantToReplace(predicted_monster, loc) || auto_wantToBanish(predicted_monster, loc) || auto_wantToBanish$1((0, import_kolmafia39.monsterPhylum)(predicted_monster), loc)) {
    return false;
  }
  return true;
}
function auto_forceHandleCrystalBall(loc) {
  var predicted_monster = crystalBallMonster(loc);
  var shouldForceEquip = false;
  if (predicted_monster !== import_kolmafia39.Monster.none) {
    if ((auto_wantToSniff(predicted_monster, loc) || isSniffed$1(
      //sniff targets are wanted monsters TODO it's not exhaustive, neither is careAboutDrops()
      predicted_monster
    ) || import_kolmafia39.Monster.get(
      [
        //ball will likely be forbidden before getting to last monster, but last wanted one isn't sniff target
        "monstrous boiler",
        "beanbat"
      ]
    ).includes(predicted_monster)) && (auto_combat_appearance_rates(
      //some wanted monsters are not sniff targets
      loc,
      false
    ).get(predicted_monster) ?? auto_combat_appearance_rates(
      //some wanted monsters are not sniff targets
      loc,
      false
    ).set(predicted_monster, 0).get(predicted_monster)) < 100) {
      shouldForceEquip = true;
    }
  }
  var crystal_ball = wrap_item($item`miniature crystal ball`);
  if (shouldForceEquip) {
    addToMaximize(`+equip ${crystal_ball.toString()}`);
    (0, import_kolmafia39.setProperty)("auto_nextEncounter", predicted_monster.toString());
    return true;
  } else if (!auto_allowCrystalBall(predicted_monster, loc)) {
    addToMaximize(`-equip ${crystal_ball.toString()}`);
    return true;
  }
  return false;
}
function simulatePreAdvForCrystalBall(place) {
  var considerCrystalBallBonus = false;
  if (!auto_queueIgnore() && (0, import_kolmafia39.toMonster)((0, import_kolmafia39.getProperty)("auto_nextEncounter")) === import_kolmafia39.Monster.none && !auto_forceHandleCrystalBall(place)) {
    considerCrystalBallBonus = true;
  }
  var possible_monsters = /* @__PURE__ */ new Map();
  if ((0, import_kolmafia39.toMonster)((0, import_kolmafia39.getProperty)("auto_nextEncounter")) !== import_kolmafia39.Monster.none) {
    possible_monsters.set(
      possible_monsters.size,
      (0, import_kolmafia39.toMonster)((0, import_kolmafia39.getProperty)("auto_nextEncounter"))
    );
  } else {
    var _iterator2 = _createForOfIteratorHelper(
      (0, import_kolmafia39.getMonsters)(place).entries()
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _appearanceRates, _mon$toString;
        var _step2$value = _slicedToArray(_step2.value, 2), i = _step2$value[0], mon = _step2$value[1];
        if (((_appearanceRates = (0, import_kolmafia39.appearanceRates)(place))[_mon$toString = mon.toString()] ?? (_appearanceRates[_mon$toString] = 0)) > 0) {
          possible_monsters.set(possible_monsters.size, mon);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  var zoneHasUnwantedMonsters = false;
  var zoneHasWantedMonsters = false;
  if (!auto_queueIgnore()) {
    var _iterator3 = _createForOfIteratorHelper(possible_monsters), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray(_step3.value, 2), _i2 = _step3$value[0], _mon = _step3$value[1];
        if (auto_wantToYellowRay(_mon, place)) {
          zoneHasWantedMonsters = true;
        }
        if (auto_wantToBanish(_mon, place)) {
          zoneHasUnwantedMonsters = true;
        }
        if (auto_wantToReplace(_mon, place)) {
          zoneHasUnwantedMonsters = true;
        }
        if (auto_wantToSniff(_mon, place)) {
          zoneHasWantedMonsters = true;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  if (considerCrystalBallBonus) {
    var crystalBallMaximizerBonus = 0 + (zoneHasUnwantedMonsters ? 300 : 0) + (zoneHasWantedMonsters ? 300 : 0);
    if (crystalBallMaximizerBonus !== 0) {
      var crystal_ball = wrap_item($item`miniature crystal ball`);
      addToMaximize(
        `+${crystalBallMaximizerBonus}bonus ${crystal_ball.toString()}`
      );
    }
  }
}
function auto_haveEmotionChipSkills() {
  return auto_is_valid$2($skill`Emotionally Chipped`) && (0, import_kolmafia39.haveSkill)($skill`Emotionally Chipped`) || auto_is_valid$2($skill`Replica Emotionally Chipped`) && (0, import_kolmafia39.haveSkill)($skill`Replica Emotionally Chipped`);
}
function auto_canFeelEnvy() {
  if (!auto_is_valid$2($skill`Feel Envy`)) {
    return false;
  }
  return auto_haveEmotionChipSkills() && (0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("_feelEnvyUsed")) < 3;
}
function auto_canFeelHatred() {
  if (!auto_is_valid$2($skill`Feel Hatred`)) {
    return false;
  }
  return auto_haveEmotionChipSkills() && (0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("_feelHatredUsed")) < 3;
}
function auto_haveBackupCamera() {
  return possessEquipment($item`backup camera`) && auto_is_valid($item`backup camera`);
}
function auto_backupUsesLeft() {
  if (auto_haveBackupCamera()) {
    return 11 + (in_robot() ? 5 : 0) - (0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("_backUpUses"));
  }
  return 0;
}
function auto_backupTarget() {
  if (!auto_haveBackupCamera()) {
    return false;
  }
  if (auto_backupUsesLeft() < 1) {
    return false;
  }
  if ((0, import_kolmafia39.toBoolean)((0, import_kolmafia39.getProperty)("auto_beatenUpLastAdv"))) {
    return false;
  }
  if ((0, import_kolmafia39.toLocation)((0, import_kolmafia39.getProperty)("nextAdventure")) === import_kolmafia39.Location.none) {
    return false;
  }
  if ((0, import_kolmafia39.toLocation)((0, import_kolmafia39.getProperty)("nextAdventure")) === $location`An Unusually Quiet Barroom Brawl`) {
    return false;
  }
  var wantBackupLFM = (0, import_kolmafia39.itemAmount)($item`barrel of gunpowder`) < 5 && (0, import_kolmafia39.getProperty)("sidequestLighthouseCompleted") === "none" && internalQuestStatus("questL12War") === 1 && !auto_hasAutumnaton() && !in_koe();
  var habitatZombieEvil = auto_habitatMonster() === $monster`modern zmobie` ? auto_habitatFightsLeft() * (5 + cyrptEvilBonus$1()) : 0;
  var wantBackupZmobie = (0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("cyrptAlcoveEvilness")) > 14 + cyrptEvilBonus$1() + habitatZombieEvil && internalQuestStatus("questL07Cyrptic") === 0;
  switch ((0, import_kolmafia39.toMonster)((0, import_kolmafia39.getProperty)("lastCopyableMonster"))) {
    case $monster`lobsterfrogman`:
      if (wantBackupLFM) {
        return true;
      }
      break;
    case $monster`modern zmobie`:
      if (wantBackupZmobie) {
        return true;
      }
      break;
    case $monster`sausage goblin`:
      if (!wantBackupLFM && !wantBackupZmobie && auto_backupUsesLeft() > 5) {
        return true;
      }
      break;
    case $monster`Eldritch Tentacle`:
      if (auto_backupUsesLeft() > 6) {
        return true;
      }
      if ((0, import_kolmafia39.myAdventures)() <= 1 + auto_advToReserve() && inebriety_left() === 0 && stomach_left() < 1) {
        return true;
      }
      break;
    case $monster`fantasy bandit`:
      if (!acquiredFantasyRealmToken() && auto_backupUsesLeft() >= 5 - fantasyBanditsFought() && auto_habitatMonster() !== $monster`fantasy bandit`) {
        return true;
      }
      break;
    case $monster`Green Ops Soldier`:
      if ((0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("hippiesDefeated")) > 399 && (0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("hippiesDefeated")) < 1e3 && !in_koe()) {
        return true;
      }
      break;
    case $monster`Skinflute`:
    case $monster`Camel's Toe`:
      if (needStarKey() && (0, import_kolmafia39.itemAmount)($item`star`) < 8 && (0, import_kolmafia39.itemAmount)($item`line`) < 7) {
        return true;
      }
      break;
    default:
      break;
  }
  return false;
}
var $_batteryPoints_points;
function batteryPoints(battery) {
  $_batteryPoints_points ?? ($_batteryPoints_points = /* @__PURE__ */ new Map(
    [
      [$item`battery (AAA)`, 1],
      [$item`battery (AA)`, 2],
      [$item`battery (D)`, 3],
      [$item`battery (9-Volt)`, 4],
      [$item`battery (lantern)`, 5],
      [$item`battery (car)`, 6]
    ]
  ));
  return $_batteryPoints_points.get(battery) ?? $_batteryPoints_points.set(battery, 0).get(battery);
}
function totalBatteryPoints() {
  var totalPoints = 0;
  var _iterator4 = _createForOfIteratorHelper(
    $items`battery (AAA), battery (AA), battery (D), battery (9-Volt), battery (lantern), battery (car)`
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var it = _step4.value;
      totalPoints += (0, import_kolmafia39.availableAmount)(it) * batteryPoints(it);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return totalPoints;
}
function batteryCombine(battery) {
  return batteryCombine$1(battery, false);
}
function batteryCombine$1(battery, simulate) {
  if (batteryPoints(battery) === 0) {
    return false;
  }
  if ((0, import_kolmafia39.availableAmount)(battery) >= 1) {
    return true;
  }
  if (battery === $item`battery (AA)`) {
    if ((0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 2) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (AAA)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1;
    }
    return false;
  } else if (battery === $item`battery (D)`) {
    if ((0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 1) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (AA)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (D)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // If crafting requires multiple steps, we rely on recursion.
      $item`battery (AAA)`
    ) >= 3) {
      if (simulate) {
        return true;
      }
      batteryCombine($item`battery (AA)`);
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (AA)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (D)`) >= 1;
    }
    return false;
  } else if (battery === $item`battery (9-Volt)`) {
    if ((0, import_kolmafia39.availableAmount)($item`battery (D)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 1) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (D)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (9-Volt)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // Single step.
      $item`battery (AA)`
    ) >= 2) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (AA)`, $item`battery (AA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (9-Volt)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // Every multi step case with recursion.
      $item`battery (AAA)`
    ) >= 4 || (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 2) {
      if (simulate) {
        return true;
      }
      batteryCombine($item`battery (D)`);
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (D)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (9-Volt)`) >= 1;
    }
    return false;
  } else if (battery === $item`battery (lantern)`) {
    if ((0, import_kolmafia39.availableAmount)($item`battery (9-Volt)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 1) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (9-Volt)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (lantern)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // Single step.
      $item`battery (D)`
    ) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (D)`, $item`battery (AA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (lantern)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // Every multi step case with recursion.
      $item`battery (AAA)`
    ) >= 5 || (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 3 || (0, import_kolmafia39.availableAmount)($item`battery (D)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 2 || (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 2 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 1) {
      if (simulate) {
        return true;
      }
      batteryCombine($item`battery (9-Volt)`);
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (9-Volt)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (lantern)`) >= 1;
    }
    return false;
  } else if (battery === $item`battery (car)`) {
    if ((0, import_kolmafia39.availableAmount)($item`battery (lantern)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 1) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (lantern)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (car)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // Single step.
      $item`battery (9-Volt)`
    ) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (9-Volt)`, $item`battery (AA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (car)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // Single step.
      $item`battery (D)`
    ) >= 2) {
      if (simulate) {
        return true;
      }
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (D)`, $item`battery (D)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (car)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // The only multi-step case that can't be resolved by the same function (can't turn AAs into a lantern without a AA or D)
      $item`battery (AA)`
    ) >= 3) {
      if (simulate) {
        return true;
      }
      batteryCombine($item`battery (9-Volt)`);
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (9-Volt)`, $item`battery (AA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (car)`) >= 1;
    } else if ((0, import_kolmafia39.availableAmount)(
      // Every other multi step case with recursion.
      $item`battery (AAA)`
    ) >= 6 || (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 4 || (0, import_kolmafia39.availableAmount)($item`battery (D)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 3 || (0, import_kolmafia39.availableAmount)($item`battery (9-Volt)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 2 || (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 2 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 2 || (0, import_kolmafia39.availableAmount)($item`battery (D)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AA)`) >= 1 && (0, import_kolmafia39.availableAmount)($item`battery (AAA)`) >= 1) {
      if (simulate) {
        return true;
      }
      batteryCombine($item`battery (lantern)`);
      (0, import_kolmafia39.craft)("combine", 1, $item`battery (lantern)`, $item`battery (AAA)`);
      return (0, import_kolmafia39.availableAmount)($item`battery (car)`) >= 1;
    }
  }
  return false;
}
function can_get_battery(target) {
  if (batteryPoints(target) === 0) {
    return false;
  }
  if ((0, import_kolmafia39.availableAmount)(target) > 0) {
    return true;
  }
  if (canUntinker()) {
    return totalBatteryPoints() >= batteryPoints(target);
  }
  return batteryCombine$1(target, true);
}
function auto_haveFireExtinguisher() {
  var exting = wrap_item($item`industrial fire extinguisher`);
  return possessEquipment(exting) && auto_is_valid(exting);
}
function auto_fireExtinguisherCharges() {
  if (!auto_haveFireExtinguisher()) {
    return 0;
  }
  return (0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("_fireExtinguisherCharge"));
}
function auto_FireExtinguisherCombatString(place) {
  if (auto_fireExtinguisherCharges() < 20 || !auto_is_valid$2($skill`Fire Extinguisher: Zone Specific`)) {
    return "";
  }
  if (in_wereprof()) {
    return "";
  }
  if ($locations`Guano Junction, The Batrat and Ratbat Burrow, The Beanbat Chamber`.includes(
    place
  ) && !(0, import_kolmafia39.toBoolean)((0, import_kolmafia39.getProperty)("fireExtinguisherBatHoleUsed"))) {
    if (internalQuestStatus("questL04Bat") < 3) {
      return `skill ${$skill`Fire Extinguisher: Zone Specific`}`;
    }
  }
  if (place === $location`Cobb's Knob Harem` && !(0, import_kolmafia39.toBoolean)((0, import_kolmafia39.getProperty)("fireExtinguisherHaremUsed")) && !possessOutfit$1("Knob Goblin Harem Girl Disguise")) {
    return `skill ${$skill`Fire Extinguisher: Zone Specific`}`;
  }
  if (place === $location`The Defiled Niche` && !(0, import_kolmafia39.toBoolean)((0, import_kolmafia39.getProperty)("fireExtinguisherCyrptUsed"))) {
    return `skill ${$skill`Fire Extinguisher: Zone Specific`}`;
  }
  if (place === $location`The Smut Orc Logging Camp` && !(0, import_kolmafia39.toBoolean)((0, import_kolmafia39.getProperty)("fireExtinguisherChasmUsed")) && (0, import_kolmafia39.toInt)((0, import_kolmafia39.getProperty)("chasmBridgeProgress")) < bridgeGoal() && !auto_hasAutumnaton()) {
    return `skill ${$skill`Fire Extinguisher: Zone Specific`}`;
  }
  if (place === $location`The Arid\, Extra-Dry Desert` && $location`The Arid\, Extra-Dry Desert`.turnsSpent > 0 && !(0, import_kolmafia39.toBoolean)((0, import_kolmafia39.getProperty)("fireExtinguisherDesertUsed")) && !auto_haveBofa()) {
    return `skill ${$skill`Fire Extinguisher: Zone Specific`}`;
  }
  return "";
}

// src/autoscend/paths/bugbear_invasion.ts
var import_kolmafia40 = require("kolmafia");
function in_bugbear() {
  return (0, import_kolmafia40.myPath)() === $path`Bugbear Invasion`;
}
function bugbear_Status(loc) {
  if (loc.zone !== "Mothership") {
    (0, import_kolmafia40.abort)("Invalid Mothership zone");
  }
  return (0, import_kolmafia40.getProperty)(`status${(0, import_kolmafia40.replaceString)(loc.toString(), " ", "")}`);
}
function bugbear_BioDataRemaining(loc) {
  var value = bugbear_Status(loc);
  if (value === "unlocked" || value === "open" || value === "cleared") {
    return 0;
  }
  switch (loc) {
    case $location`Waste Processing`:
    case $location`Medbay`:
    case $location`Sonar`:
      return 3 - (0, import_kolmafia40.toInt)(value);
    case $location`Science Lab`:
    case $location`Morgue`:
    case $location`Special Ops`:
      return 6 - (0, import_kolmafia40.toInt)(value);
    case $location`Engineering`:
    case $location`Navigation`:
    case $location`Galley`:
      return 9 - (0, import_kolmafia40.toInt)(value);
    default:
      (0, import_kolmafia40.abort)(`Invalid Biodata location ${loc}`);
  }
  return 0;
}

// src/autoscend/paths/the_source.ts
var import_kolmafia48 = require("kolmafia");

// src/autoscend/quests/optional.ts
var import_kolmafia47 = require("kolmafia");

// src/autoscend/paths/grey_goo.ts
var import_kolmafia41 = require("kolmafia");

// src/autoscend/paths/license_to_adventure.ts
var import_kolmafia42 = require("kolmafia");
function in_lta() {
  return (0, import_kolmafia42.myPath)() === $path`License to Adventure`;
}
var bondDrinksCached = /* @__PURE__ */ new Map();
function bondDrinks() {
  if (bondDrinksCached.size === 0) {
    bondDrinksCached = itemList();
    var _iterator = _createForOfIteratorHelper(
      $items.all()
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var it = _step.value;
        if (it.inebriety > 0 && it.smallimage === "martini.gif" && (0, import_kolmafia42.isUnrestricted)(it)) {
          bondDrinksCached = ListInsert$3(bondDrinksCached, it);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return bondDrinksCached;
}

// src/autoscend/paths/nuclear_autumn.ts
var import_kolmafia43 = require("kolmafia");
function in_nuclear() {
  return (0, import_kolmafia43.myPath)() === $path`Nuclear Autumn`;
}

// src/autoscend/paths/picky.ts
var import_kolmafia44 = require("kolmafia");

// src/autoscend/quests/level_06.ts
var import_kolmafia45 = require("kolmafia");

// src/autoscend/quests/level_any.ts
var import_kolmafia46 = require("kolmafia");
function freeCandyFightsLeft() {
  if (!auto_is_valid($item`map to a candy-rich block`)) {
    return 0;
  }
  if ((0, import_kolmafia46.toBoolean)((0, import_kolmafia46.getProperty)("_mapToACandyRichBlockUsed")) && (0, import_kolmafia46.toBoolean)((0, import_kolmafia46.getProperty)("_auto_candyMapCompleted"))) {
    return 0;
  }
  if (!(0, import_kolmafia46.toBoolean)((0, import_kolmafia46.getProperty)("_mapToACandyRichBlockUsed")) && (0, import_kolmafia46.itemAmount)($item`map to a candy-rich block`) > 0) {
    return 5;
  }
  var blockHtml = (0, import_kolmafia46.visitUrl)(
    "place.php?whichplace=town&action=town_trickortreat"
  );
  var block = (0, import_kolmafia46.getProperty)("_trickOrTreatBlock");
  var m = new AshMatcher("D", block);
  var n_unused_dark = 0;
  while (m.find()) {
    n_unused_dark++;
  }
  return n_unused_dark;
}

// src/autoscend/quests/optional.ts
function LX_unlockThinknerdWarehouse(spend_resources) {
  if (internalQuestStatus("questM22Shirt") > -1) {
    return false;
  }
  auto_log_debug$1(
    `Trying to unlock [The Thinknerd Warehouse] with spend_resources set to ${spend_resources}`
  );
  function useLetter() {
    if ((0, import_kolmafia47.itemAmount)($item`Letter for Melvign the Gnome`) > 0) {
      if ((0, import_kolmafia47.use)(1, $item`Letter for Melvign the Gnome`)) {
        auto_log_debug$1("Successfully unlocked the [The Thinknerd Warehouse]");
        return true;
      } else {
        (0, import_kolmafia47.abort)(
          "Somehow failed to use [Letter for Melvign the Gnome]... aborting to prevent infinite loops"
        );
      }
    }
    return false;
  }
  var target_shirt = import_kolmafia47.Item.none;
  var hasShirt = false;
  var _iterator = _createForOfIteratorHelper(import_kolmafia47.Item.get(Object.keys((0, import_kolmafia47.getInventory)()))), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var it = _step.value;
      if ((0, import_kolmafia47.toSlot)(it) === $slot`shirt`) {
        target_shirt = it;
        hasShirt = true;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  function useShirtThenLetter() {
    if (!hasShirt) {
      return false;
    }
    var temp = (0, import_kolmafia47.visitUrl)(
      `inv_equip.php?pwd&which=2&action=equip&whichitem=${(0, import_kolmafia47.toInt)(target_shirt)}`
    );
    if (useLetter()) {
      return true;
    }
    auto_log_error(
      `For some reason LX_unlockThinknerdWarehouse failed when trying to use the shirt [${target_shirt}] to get [Letter for Melvign the Gnome] to start the quest`
    );
    return false;
  }
  function getShirtWhenHaveNone(it2) {
    if (hasShirt) {
      return;
    }
    if (canPull$1(it2)) {
      if (pullXWhenHaveY(it2, 1, 0)) {
        target_shirt = it2;
        hasShirt = true;
      }
    } else if ((0, import_kolmafia47.creatableAmount)(it2) > 0 && (spend_resources || (0, import_kolmafia47.knollAvailable)())) {
      if ((0, import_kolmafia47.create)(1, it2)) {
        target_shirt = it2;
        hasShirt = true;
      }
    }
  }
  if (useLetter()) {
    return true;
  }
  if (useShirtThenLetter()) {
    return true;
  }
  januaryToteAcquire($item`Letter for Melvign the Gnome`);
  if (useLetter()) {
    return true;
  }
  getShirtWhenHaveNone($item`Sneaky Pete's leather jacket`);
  getShirtWhenHaveNone($item`Sneaky Pete's leather jacket (collar popped)`);
  getShirtWhenHaveNone($item`Professor What T-Shirt`);
  getShirtWhenHaveNone($item`white snakeskin duster`);
  getShirtWhenHaveNone($item`clownskin harness`);
  getShirtWhenHaveNone($item`demonskin jacket`);
  getShirtWhenHaveNone($item`gnauga hide vest`);
  getShirtWhenHaveNone($item`tuxedo shirt`);
  getShirtWhenHaveNone($item`yak anorak`);
  getShirtWhenHaveNone($item`hipposkin poncho`);
  getShirtWhenHaveNone($item`lynyrdskin tunic`);
  getShirtWhenHaveNone($item`bat-ass leather jacket`);
  if (spend_resources && auto_wishesAvailable() > 0 && (0, import_kolmafia47.itemAmount)($item`blessed rustproof +2 gray dragon scale mail`) === 0) {
    makeGenieWish("for a blessed rustproof +2 gray dragon scale mail");
    target_shirt = $item`blessed rustproof +2 gray dragon scale mail`;
    hasShirt = true;
  }
  if (useShirtThenLetter()) {
    return true;
  }
  auto_log_debug$1("Failed to unlock [The Thinknerd Warehouse]");
  return false;
}
function LX_doingPirates() {
  return in_lowkeysummer();
}
function numPirateInsults() {
  var retval = 0;
  var i = 1;
  while (i <= 8) {
    if ((0, import_kolmafia47.getProperty)(`lastPirateInsult${i}`) === "true") {
      retval = retval + 1;
    }
    i = i + 1;
  }
  return retval;
}
var $_f_epicWeapons;
$_f_epicWeapons ?? ($_f_epicWeapons = /* @__PURE__ */ new Map(
  [
    [$class`Seal Clubber`, $item`Hammer of Smiting`],
    [$class`Turtle Tamer`, $item`Chelonian Morningstar`],
    [$class`Pastamancer`, $item`Greek Pasta Spoon of Peril`],
    [$class`Sauceror`, $item`17-alarm Saucepan`],
    [$class`Disco Bandit`, $item`Shagadelic Disco Banjo`],
    [$class`Accordion Thief`, $item`Squeezebox of the Ages`]
  ]
));
var $_f_starterWeapons;
$_f_starterWeapons ?? ($_f_starterWeapons = /* @__PURE__ */ new Map(
  [
    [$class`Seal Clubber`, $item`seal-clubbing club`],
    [$class`Turtle Tamer`, $item`turtle totem`],
    [$class`Pastamancer`, $item`pasta spoon`],
    [$class`Sauceror`, $item`saucepan`],
    [$class`Disco Bandit`, $item`disco ball`],
    [$class`Accordion Thief`, $item`stolen accordion`]
  ]
));

// src/autoscend/paths/the_source.ts
function in_theSource() {
  return (0, import_kolmafia48.myPath)() === $path`The Source`;
}

// src/autoscend/quests/level_13.ts
function needStarKey() {
  if ((0, import_kolmafia49.containsText)((0, import_kolmafia49.getProperty)("nsTowerDoorKeysUsed"), "star key")) {
    return false;
  }
  if ((0, import_kolmafia49.itemAmount)($item`Richard's star key`) > 0 || (0, import_kolmafia49.creatableAmount)($item`Richard's star key`) > 0) {
    return false;
  }
  return true;
}
function needDigitalKey() {
  if (isActuallyEd()) {
    return false;
  }
  if ((0, import_kolmafia49.containsText)((0, import_kolmafia49.getProperty)("nsTowerDoorKeysUsed"), "digital key")) {
    return false;
  }
  if ((0, import_kolmafia49.itemAmount)($item`digital key`) > 0) {
    return false;
  }
  return true;
}
function need8BitPoints() {
  if ((0, import_kolmafia49.toInt)((0, import_kolmafia49.getProperty)("8BitScore")) >= 1e4) {
    return false;
  }
  return needDigitalKey();
}
function towerKeyCount$1(effective) {
  if (isActuallyEd()) {
    return 3;
  }
  var tokens = (0, import_kolmafia49.itemAmount)($item`fat loot token`);
  if ((0, import_kolmafia49.itemAmount)($item`Boris's key`) > 0 || (0, import_kolmafia49.containsText)(
    (0, import_kolmafia49.getProperty)("nsTowerDoorKeysUsed"),
    $item`Boris's key`.toString()
  )) {
    tokens = tokens + 1;
  }
  if ((0, import_kolmafia49.itemAmount)($item`Jarlsberg's key`) > 0 || (0, import_kolmafia49.containsText)(
    (0, import_kolmafia49.getProperty)("nsTowerDoorKeysUsed"),
    $item`Jarlsberg's key`.toString()
  )) {
    tokens = tokens + 1;
  }
  if ((0, import_kolmafia49.itemAmount)($item`Sneaky Pete's key`) > 0 || (0, import_kolmafia49.containsText)(
    (0, import_kolmafia49.getProperty)("nsTowerDoorKeysUsed"),
    $item`Sneaky Pete's key`.toString()
  )) {
    tokens = tokens + 1;
  }
  if (effective && (0, import_kolmafia49.itemAmount)($item`daily dungeon malware`) > 0 && !(0, import_kolmafia49.toBoolean)((0, import_kolmafia49.getProperty)("_dailyDungeonMalwareUsed")) && !(0, import_kolmafia49.toBoolean)((0, import_kolmafia49.getProperty)("dailyDungeonDone")) && (0, import_kolmafia49.toInt)((0, import_kolmafia49.getProperty)("_lastDailyDungeonRoom")) < 14 && !in_pokefam()) {
    tokens = tokens + 1;
  }
  return tokens;
}
function prepForMegaloCity() {
  if (isGuildClass()) {
    return true;
  }
  if ((0, import_kolmafia49.myMeat)() >= 6e3 && (0, import_kolmafia49.gnomadsAvailable)() && !hasTorso$1() && hasUsefulShirt()) {
    (0, import_kolmafia49.visitUrl)("gnomes.php?action=trainskill&whichskill=12");
  }
  var aegis = $item`autumnal aegis`;
  if ((0, import_kolmafia49.availableAmount)(aegis) > 0 || !auto_is_valid(aegis)) {
    return true;
  }
  if (!isGuildClass() && (0, import_kolmafia49.availableAmount)(aegis) === 0) {
    auto_makeAutumnalAegis();
  }
  if (in_zootomist() && (0, import_kolmafia49.availableAmount)(aegis) === 0) {
    pullXWhenHaveY(aegis, 1, 0);
  }
  return (0, import_kolmafia49.availableAmount)(aegis) > 0;
}

// src/autoscend/paths/you_robot.ts
function in_robot() {
  return (0, import_kolmafia51.myPath)() === $path`You\, Robot`;
}
function robot_cpu(choice, want_buy) {
  var upgrade = "";
  var name = "";
  var energy_cost = 0;
  switch (choice) {
    case 1:
      name = "[Leverage Coprocessing]";
      upgrade = "robot_muscle";
      energy_cost = 30;
      break;
    case 2:
      name = "[Dynamic Arcane Flux Modeling]";
      upgrade = "robot_mysticality";
      energy_cost = 30;
      break;
    case 3:
      name = "[Upgraded Fashion Sensor]";
      upgrade = "robot_moxie";
      energy_cost = 30;
      break;
    case 4:
      name = "[Financial Neural Net]";
      upgrade = "robot_meat";
      energy_cost = 30;
      break;
    case 5:
      name = "[Spatial Compression Functions]";
      upgrade = "robot_hp1";
      energy_cost = 40;
      break;
    case 6:
      name = "[Self-Repair Routines]";
      upgrade = "robot_regen";
      energy_cost = 40;
      break;
    case 7:
      name = "[Weather Control Algorithms]";
      upgrade = "robot_resist";
      energy_cost = 40;
      break;
    case 8:
      name = "[Improved Optical Processing]";
      upgrade = "robot_items";
      energy_cost = 40;
      break;
    case 9:
      name = "[Topology Grid]";
      upgrade = "robot_shirt";
      energy_cost = 50;
      break;
    case 10:
      name = "[Overclocking]";
      upgrade = "robot_energy";
      energy_cost = 50;
      break;
    case 11:
      name = "[Biomass Processing Function]";
      upgrade = "robot_potions";
      energy_cost = 50;
      break;
    case 12:
      name = "[Holographic Deflector Projection]";
      upgrade = "robot_hp2";
      energy_cost = 50;
      break;
    default:
      (0, import_kolmafia51.abort)(
        `boolean robot_cpu(int choice) does not recognize the choice: ${choice}`
      );
  }
  if ((0, import_kolmafia51.containsText)((0, import_kolmafia51.getProperty)("youRobotCPUUpgrades"), upgrade)) {
    return true;
  } else if (!want_buy) {
    return false;
  }
  if ((0, import_kolmafia51.myRobotEnergy)() < energy_cost) {
    return false;
  }
  var starting_energy = (0, import_kolmafia51.myRobotEnergy)();
  auto_log_info$1(`Upgrading CPU with ${name}`);
  (0, import_kolmafia51.visitUrl)("place.php?whichplace=scrapheap&action=sh_configure");
  (0, import_kolmafia51.visitUrl)("choice.php?whichchoice=1445&show=cpus");
  (0, import_kolmafia51.visitUrl)(
    `choice.php?pwd&whichchoice=1445&part=cpus&show=cpus&option=2&p=${upgrade}`
  );
  if ((0, import_kolmafia51.myRobotEnergy)() !== starting_energy - energy_cost) {
    (0, import_kolmafia51.abort)(`Mysteriously failed to upgrade the CPU with ${choice}. Beep Boop.`);
  }
  return true;
}

// src/autoscend/paths/low_key_summer.ts
var lowKeys = /* @__PURE__ */ new Map();
lowKeys.set($item`clown car key`, $location`The "Fun" House`);
lowKeys.set($item`batting cage key`, $location`The Bat Hole Entrance`);
lowKeys.set($item`aquí`, $location`South of the Border`);
lowKeys.set($item`knob labinet key`, $location`Cobb's Knob Laboratory`);
lowKeys.set($item`weremoose key`, $location`Cobb's Knob Menagerie\, Level 2`);
lowKeys.set($item`peg key`, $location`The Obligatory Pirate's Cove`);
lowKeys.set($item`kekekey`, $location`The Valley of Rof L'm Fao`);
lowKeys.set($item`rabbit's foot key`, $location`The Dire Warren`);
lowKeys.set($item`knob shaft skate key`, $location`The Knob Shaft`);
lowKeys.set($item`ice key`, $location`The Icy Peak`);
lowKeys.set($item`anchovy can key`, $location`The Haunted Pantry`);
lowKeys.set($item`cactus key`, $location`The Arid\, Extra-Dry Desert`);
lowKeys.set($item`f'c'le sh'c'le k'y`, $location`The F'c'le`);
lowKeys.set($item`treasure chest key`, $location`Belowdecks`);
lowKeys.set($item`demonic key`, $location`Pandamonium Slums`);
lowKeys.set($item`key sausage`, $location`Cobb's Knob Kitchens`);
lowKeys.set($item`knob treasury key`, $location`Cobb's Knob Treasury`);
lowKeys.set($item`scrap metal key`, $location`The Old Landfill`);
lowKeys.set($item`black rose key`, $location`The Haunted Conservatory`);
lowKeys.set($item`actual skeleton key`, $location`The Skeleton Store`);
lowKeys.set($item`music box key`, $location`The Haunted Nursery`);
lowKeys.set($item`deep-fried key`, $location`Madness Bakery`);
lowKeys.set($item`discarded bike lock key`, $location`The Overgrown Lot`);
function in_lowkeysummer() {
  return (0, import_kolmafia53.myPath)() === $path`Low Key Summer`;
}
function lowkey_needKey(key) {
  if (internalQuestStatus("questL13Final") !== 5) {
    return false;
  }
  return (0, import_kolmafia53.availableAmount)(key) === 0 && !(0, import_kolmafia53.containsText)((0, import_kolmafia53.getProperty)("nsTowerDoorKeysUsed"), key.toString());
}
function lowkey_keyDelayRemaining(loc) {
  if (!in_lowkeysummer()) {
    return 0;
  }
  return (0, import_kolmafia53.max)(11 - loc.turnsSpent, 0);
}
function lowkey_nextAvailableKeyDelayLocation() {
  if (!in_lowkeysummer()) {
    return import_kolmafia53.Location.none;
  }
  var _iterator3 = _createForOfIteratorHelper(
    lowKeys.keys()
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var key = _step3.value;
      var loc = lowKeys.get(key) ?? lowKeys.set(key, import_kolmafia53.Location.none).get(key);
      if (lowkey_needKey(key) && zone_isAvailable$1(loc) && lowkey_keyDelayRemaining(loc) > 0 && loc.wanderers) {
        return loc;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return import_kolmafia53.Location.none;
}

// src/autoscend/quests/level_11.ts
function getShenZonesTurnsSpent() {
  var delayValues = /* @__PURE__ */ new Map();
  if ((0, import_kolmafia54.getProperty)("auto_shenZonesTurnsSpent") !== "") {
    var zones = new Map(
      (0, import_kolmafia54.splitString)((0, import_kolmafia54.getProperty)("auto_shenZonesTurnsSpent"), ";").map(
        (_v, _i) => [_i, _v]
      )
    );
    var _iterator6 = _createForOfIteratorHelper(
      zones
    ), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var _step6$value = _slicedToArray(_step6.value, 2), _ = _step6$value[0], zone = _step6$value[1];
        var loc = (0, import_kolmafia54.toLocation)((0, import_kolmafia54.substring)(zone, 0, (0, import_kolmafia54.indexOf)(zone, ":")));
        var turns_spent = (0, import_kolmafia54.toInt)(
          (0, import_kolmafia54.substring)(zone, (0, import_kolmafia54.indexOf)(zone, ":") + 1)
        );
        delayValues.set(loc, turns_spent);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  return delayValues;
}

// src/autoscend/paths/quantum_terrarium.ts
function in_quantumTerrarium() {
  return (0, import_kolmafia55.myPath)() === $path`Quantum Terrarium`;
}

// src/autoscend/iotms/mr2018.ts
function isjanuaryToteAvailable() {
  var tote = wrap_item($item`January's Garbage Tote`);
  return (0, import_kolmafia56.itemAmount)(tote) > 0 && auto_is_valid(tote) && !in_bhy();
}
function januaryToteAcquire(it) {
  if (!isjanuaryToteAvailable()) {
    return false;
  }
  (0, import_kolmafia56.setProperty)("auto_januaryToteAcquireCalledThisTurn", true.toString());
  if ($items`deceased crimbo tree, broken champagne bottle, makeshift garbage shirt`.includes(
    it
  )) {
    removeFromMaximize(`-equip ${it}`);
  }
  if ((0, import_kolmafia56.availableAmount)(it) > 0) {
    var leftover_charges = 0;
    if ((0, import_kolmafia56.toBoolean)((0, import_kolmafia56.getProperty)("_garbageItemChanged"))) {
      return true;
    } else {
      switch (it) {
        case $item`deceased crimbo tree`:
          leftover_charges = (0, import_kolmafia56.toInt)((0, import_kolmafia56.getProperty)("garbageTreeCharge"));
          break;
        case $item`broken champagne bottle`:
          leftover_charges = (0, import_kolmafia56.toInt)((0, import_kolmafia56.getProperty)("garbageChampagneCharge"));
          break;
        case $item`tinsel tights`:
          leftover_charges = 1;
          break;
        case $item`wad of used tape`:
          leftover_charges = 1;
          break;
        case $item`makeshift garbage shirt`:
          leftover_charges = (0, import_kolmafia56.toInt)((0, import_kolmafia56.getProperty)("garbageShirtCharge"));
          break;
      }
    }
    if (leftover_charges > 0) {
      return true;
    }
  }
  var choice = 0;
  switch (it) {
    case $item`deceased crimbo tree`:
      choice = 1;
      break;
    case $item`broken champagne bottle`:
      choice = 2;
      break;
    case $item`tinsel tights`:
      choice = 3;
      break;
    case $item`wad of used tape`:
      choice = 4;
      break;
    case $item`makeshift garbage shirt`:
      choice = 5;
      break;
    case $item`Letter for Melvign the Gnome`:
      choice = 7;
      break;
  }
  if (choice === 2) {
    if (in_wotsf() || is_boris()) {
      return false;
    }
  }
  if (choice === 5 && !hasTorso$1()) {
    return false;
  }
  if (choice === 0) {
    return false;
  }
  if (choice === 7) {
    if ((0, import_kolmafia56.getProperty)("questM22Shirt") !== "unstarted" || (0, import_kolmafia56.itemAmount)($item`Letter for Melvign the Gnome`) > 0) {
      return false;
    }
    if ((0, import_kolmafia56.availableAmount)($item`makeshift garbage shirt`) === 0) {
      var tote = wrap_item($item`January's Garbage Tote`);
      (0, import_kolmafia56.visitUrl)(
        `inv_use.php?pwd=${(0, import_kolmafia56.myHash)()}&which=3&whichitem=${tote.id}`,
        false
      );
      (0, import_kolmafia56.runChoice)(5);
    }
    (0, import_kolmafia56.visitUrl)("inv_equip.php?pwd=&which=2&action=equip&whichitem=9699");
  } else {
    var _tote = wrap_item($item`January's Garbage Tote`);
    (0, import_kolmafia56.visitUrl)(`inv_use.php?pwd=${(0, import_kolmafia56.myHash)()}&which=3&whichitem=${_tote.id}`, false);
    (0, import_kolmafia56.runChoice)(choice);
  }
  if ((0, import_kolmafia56.itemAmount)(it) > 0) {
    return true;
  }
  return false;
}
function fantasyBanditsFought() {
  if ((0, import_kolmafia56.containsText)((0, import_kolmafia56.getProperty)("_frMonstersKilled"), "fantasy bandit")) {
    var _iterator = _createForOfIteratorHelper(
      (0, import_kolmafia56.splitString)(
        (0, import_kolmafia56.getProperty)("_frMonstersKilled"),
        ","
      ).entries()
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _step$value = _slicedToArray(_step.value, 2), idx = _step$value[0], it = _step$value[1];
        if ((0, import_kolmafia56.containsText)(it, "fantasy bandit")) {
          var _splitString, _2;
          var count_1 = (0, import_kolmafia56.toInt)((_splitString = (0, import_kolmafia56.splitString)(it, ":"))[_2 = 1] ?? (_splitString[_2] = ""));
          return count_1;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return 0;
}
function acquiredFantasyRealmToken() {
  return fantasyBanditsFought() >= 5;
}
function neverendingPartyRemainingFreeFights() {
  if (!neverendingPartyAvailable()) {
    return 0;
  }
  if (in_disguises() || in_ocrs()) {
    return 0;
  }
  if ((0, import_kolmafia56.toBoolean)((0, import_kolmafia56.getProperty)("_neverendingPartyToday"))) {
    return 0;
  }
  return 10 - (0, import_kolmafia56.toInt)((0, import_kolmafia56.getProperty)("_neverendingPartyFreeTurns"));
}
function neverendingPartyAvailable() {
  if (!(0, import_kolmafia56.toBoolean)((0, import_kolmafia56.getProperty)("neverendingPartyAlways")) && !(0, import_kolmafia56.toBoolean)((0, import_kolmafia56.getProperty)("_neverendingPartyToday"))) {
    return false;
  }
  if (!auto_is_valid($item`Neverending Party invitation envelope`)) {
    return false;
  }
  if ((0, import_kolmafia56.getProperty)("_questPartyFair") === "finished") {
    return false;
  }
  return true;
}
function auto_latteDropName(l) {
  switch (l) {
    case $location`The Mouldering Mansion`:
      return "ancient";
    case $location`The Overgrown Lot`:
      return "basil";
    case $location`Whitey's Grove`:
      return "belgian";
    case $location`The Bugbear Pen`:
      return "bug-thistle";
    case $location`Madness Bakery`:
      return "butternut";
    case $location`The Black Forest`:
      return "cajun";
    case $location`The Haunted Billiards Room`:
      return "chalk";
    case $location`The Dire Warren`:
      return "carrot";
    case $location`Barrrney's Barrr`:
      return "carrrdamom";
    case $location`The Haunted Kitchen`:
      return "chili";
    case $location`The Sleazy Back Alley`:
      return "cloves";
    case $location`The Haunted Boiler Room`:
      return "coal";
    case $location`The Icy Peak`:
      return "cocoa";
    case $location`The Cola Wars Battlefield`:
      return "diet";
    case $location`Itznotyerzitz Mine`:
      return "dwarf";
    case $location`The Feeding Chamber`:
      return "filth";
    case $location`The Road to the White Citadel`:
      return "flour";
    case $location`The Fungal Nethers`:
      return "fungus";
    case $location`The Hidden Park`:
      return "grass";
    case $location`Cobb's Knob Barracks`:
      return "greasy";
    case $location`The Daily Dungeon`:
      return "healing";
    case $location`The Dark Neck of the Woods`:
      return "hellion";
    case $location`Wartime Frat House (Hippy Disguise)`:
      return "greek";
    case $location`The Old Rubee Mine`:
      return "grobold";
    case $location`The Bat Hole Entrance`:
      return "guarna";
    case $location`1st Floor\, Shiawase-Mitsuhama Building`:
      return "gunpowder";
    case $location`Hobopolis Town Square`:
      return "hobo";
    case $location`The Haunted Library`:
      return "ink";
    case $location`Wartime Hippy Camp (Frat Disguise)`:
      return "kombucha";
    case $location`The Defiled Niche`:
      return "lihc";
    case $location`The Arid\, Extra-Dry Desert`:
      return "lizard";
    case $location`Cobb's Knob Laboratory`:
      return "mega";
    case $location`The Unquiet Garves`:
      return "mold";
    case $location`The Briniest Deepests`:
      return "msg";
    case $location`The Haunted Pantry`:
      return "noodles";
    case $location`The Ice Hole`:
      return "norwhal";
    case $location`The Old Landfill`:
      return "oil";
    case $location`The Haunted Gallery`:
      return "paint";
    case $location`The Stately Pleasure Dome`:
      return "paradise";
    case $location`The Spooky Forest`:
      return "rawhide";
    case $location`The Brinier Deepers`:
      return "rock";
    case $location`The Briny Deeps`:
      return "salt";
    case $location`Noob Cave`:
      return "sandalwood";
    case $location`Cobb's Knob Kitchens`:
      return "sausage";
    case $location`The Hole in the Sky`:
      return "space";
    case $location`The Copperhead Club`:
      return "squash";
    case $location`The Caliginous Abyss`:
      return "squamous";
    case $location`The VERY Unquiet Garves`:
      return "teeth";
    case $location`The Middle Chamber`:
      return "venom";
    case $location`The Dark Elbow of the Woods`:
      return "vitamins";
    case $location`The Dark Heart of the Woods`:
      return "wing";
    default:
      return "";
  }
}
function auto_latteDropAvailable(l) {
  if ((0, import_kolmafia56.availableAmount)($item`latte lovers member's mug`) === 0) {
    return false;
  }
  var latteDrop = auto_latteDropName(l);
  if (latteDrop === "") {
    return false;
  }
  return !(0, import_kolmafia56.containsText)((0, import_kolmafia56.getProperty)("latteUnlocks"), latteDrop);
}
function auto_haveVotingBooth() {
  return ((0, import_kolmafia56.toBoolean)((0, import_kolmafia56.getProperty)("_voteToday")) || (0, import_kolmafia56.toBoolean)((0, import_kolmafia56.getProperty)("voteAlways"))) && (0, import_kolmafia56.isUnrestricted)($item`voter registration form`);
}
function auto_voteMonster() {
  return auto_voteMonster$1(false);
}
function auto_voteMonster$1(freeMon) {
  return auto_voteMonster$2(freeMon, import_kolmafia56.Location.none);
}
function auto_voteMonster$2(freeMon, loc) {
  if (!auto_haveVotingBooth()) {
    return false;
  }
  if ((0, import_kolmafia56.getProperty)("_voteModifier") === "") {
    return false;
  }
  if ((0, import_kolmafia56.toInt)((0, import_kolmafia56.getProperty)("lastVoteMonsterTurn")) >= (0, import_kolmafia56.totalTurnsPlayed)()) {
    return false;
  }
  if ((0, import_kolmafia56.totalTurnsPlayed)() % 11 !== 1) {
    return false;
  }
  if (!possessEquipment($item`"I Voted!" sticker`) || !(0, import_kolmafia56.isUnrestricted)($item`"I Voted!" sticker`)) {
    return false;
  }
  if (freeMon && (0, import_kolmafia56.toInt)((0, import_kolmafia56.getProperty)("_voteFreeFights")) >= 3) {
    return false;
  }
  if (loc === import_kolmafia56.Location.none) {
    return true;
  }
  if (autoEquip($slot`acc3`, $item`"I Voted!" sticker`)) {
    (0, import_kolmafia56.setProperty)("auto_nextEncounter", (0, import_kolmafia56.getProperty)("_voteMonster"));
    return autoAdv$2(loc);
  }
  (0, import_kolmafia56.setProperty)("auto_nextEncounter", "");
  return false;
}

// src/autoscend/quests/level_09.ts
function bridgeGoal() {
  return !auto_haveBatWings() ? 30 : 25;
}
function fastenerCount() {
  var base = (0, import_kolmafia57.toInt)((0, import_kolmafia57.getProperty)("chasmBridgeProgress"));
  base = base + (0, import_kolmafia57.itemAmount)($item`thick caulk`);
  base = base + (0, import_kolmafia57.itemAmount)($item`long hard screw`);
  base = base + (0, import_kolmafia57.itemAmount)($item`messy butt joint`);
  base = base + 5 * (0, import_kolmafia57.itemAmount)($item`smut orc keepsake box`);
  return base;
}
function lumberCount() {
  var base = (0, import_kolmafia57.toInt)((0, import_kolmafia57.getProperty)("chasmBridgeProgress"));
  base = base + (0, import_kolmafia57.itemAmount)($item`morningwood plank`);
  base = base + (0, import_kolmafia57.itemAmount)($item`raging hardwood plank`);
  base = base + (0, import_kolmafia57.itemAmount)($item`weirdwood plank`);
  base = base + 5 * (0, import_kolmafia57.itemAmount)($item`smut orc keepsake box`);
  return base;
}
function hedgeTrimmersNeeded() {
  var twinPeakProgress = (0, import_kolmafia57.toInt)((0, import_kolmafia57.getProperty)("twinPeakProgress"));
  var needStench = (twinPeakProgress & 1) === 0;
  var needFood = (twinPeakProgress & 2) === 0;
  var needJar = (twinPeakProgress & 4) === 0;
  var needInit = needStench || needFood || needJar || twinPeakProgress === 7;
  var neededTrimmers = -(0, import_kolmafia57.itemAmount)($item`rusty hedge trimmers`);
  if (needStench) {
    neededTrimmers++;
  }
  if (needFood) {
    neededTrimmers++;
  }
  if (needJar) {
    neededTrimmers++;
  }
  if (needInit) {
    neededTrimmers++;
  }
  return neededTrimmers;
}

// src/autoscend/iotms/mr2022.ts
function auto_haveCursedMagnifyingGlass() {
  if (possessEquipment($item`cursed magnifying glass`) && auto_can_equip($item`cursed magnifying glass`)) {
    return true;
  }
  return false;
}
function auto_voidMonster() {
  return auto_voidMonster$1(import_kolmafia58.Location.none);
}
function auto_voidMonster$1(loc) {
  if (!auto_haveCursedMagnifyingGlass()) {
    return false;
  }
  if (is_professor()) {
    return false;
  }
  if ((0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("_voidFreeFights")) >= 5 || (0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("cursedMagnifyingGlassCount")) !== 13) {
    return false;
  }
  if (loc === import_kolmafia58.Location.none) {
    return true;
  }
  if (autoEquip$1($item`cursed magnifying glass`)) {
    (0, import_kolmafia58.setProperty)("auto_nextEncounter", "void guy");
    return autoAdv$2(loc);
  }
  (0, import_kolmafia58.setProperty)("auto_nextEncounter", "");
  return false;
}
function auto_haveCosmicBowlingBall() {
  return (0, import_kolmafia58.toBoolean)((0, import_kolmafia58.getProperty)("hasCosmicBowlingBall")) && auto_is_valid($item`cosmic bowling ball`) && (0, import_kolmafia58.availableAmount)($item`cosmic bowling ball`) > 0;
}
function auto_bowlingBallCombatString(place, speculation) {
  if (!auto_haveCosmicBowlingBall()) {
    return "";
  }
  if (is_professor()) {
    return "";
  }
  if (place === $location`The Hidden Bowling Alley` && (0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("auto_bowledAtAlley")) !== (0, import_kolmafia58.myAscensions)()) {
    if (!speculation) {
      (0, import_kolmafia58.setProperty)("auto_bowledAtAlley", (0, import_kolmafia58.myAscensions)().toString());
      auto_log_info$1(
        "Cosmic Bowling Ball used at Hidden Bowling Alley to advance quest."
      );
    }
    return useItem($item`cosmic bowling ball`, !speculation);
  }
  if (canUse$2($skill`Bowl Sideways`)) {
    if (isAboutToPowerlevel()) {
      return useSkill$1($skill`Bowl Sideways`, !speculation);
    }
    if ((0, import_kolmafia58.toBoolean)((0, import_kolmafia58.getProperty)("_auto_farmingKaAsEd"))) {
      return useSkill$1($skill`Bowl Sideways`, !speculation);
    }
  }
  if (canUse$2($skill`Bowl Straight Up`)) {
    var itemNeed = zone_needItem(place);
    if (itemNeed._boolean) {
      if ((0, import_kolmafia58.itemDropModifier)() < itemNeed._float) {
        return useSkill$1($skill`Bowl Straight Up`, !speculation);
      }
    }
    if (place === $location`The Themthar Hills`) {
      return useSkill$1($skill`Bowl Straight Up`, !speculation);
    }
  }
  return "";
}
function auto_haveGreyGoose() {
  if (auto_have_familiar($familiar`Grey Goose`)) {
    return true;
  }
  return false;
}
function gooseExpectedDrones() {
  if (!auto_haveGreyGoose()) {
    return 0;
  }
  var gooseWeight = (0, import_kolmafia58.familiarWeight)($familiar`Grey Goose`);
  if (gooseWeight < 5) {
    return 0;
  }
  return gooseWeight - 5;
}
function dronesOut() {
  if (!auto_haveGreyGoose()) {
    return false;
  }
  if ((0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("gooseDronesRemaining")) > 0) {
    return true;
  }
  return false;
}
function auto_canUseJuneCleaver() {
  if (possessEquipment($item`June cleaver`) && (0, import_kolmafia58.canEquip)($item`June cleaver`) && auto_is_valid($item`June cleaver`)) {
    return true;
  }
  return false;
}
function canUseSweatpants() {
  if (possessEquipment($item`designer sweatpants`) && (0, import_kolmafia58.canEquip)($item`designer sweatpants`) && auto_is_valid($item`designer sweatpants`)) {
    return true;
  }
  return false;
}
function getSweat() {
  return (0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("sweat"));
}
function auto_hasStillSuit() {
  return possessEquipment($item`tiny stillsuit`) && auto_is_valid($item`tiny stillsuit`);
}
function auto_expectedStillsuitAdvs() {
  if (!auto_hasStillSuit()) {
    return 0;
  }
  var sweat = (0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("familiarSweat"));
  if (sweat < 10) {
    return 0;
  }
  return (0, import_kolmafia58.round)(sweat ** 0.4);
}
function auto_hasParka() {
  var parka = wrap_item($item`Jurassic Parka`);
  return possessEquipment(parka) && auto_is_valid(parka);
}
function auto_hasAutumnaton() {
  return (0, import_kolmafia58.toBoolean)((0, import_kolmafia58.getProperty)("hasAutumnaton")) && auto_is_valid($item`autumn-aton`) && !in_pokefam();
}
function auto_autumnatonQuestingIn() {
  return (0, import_kolmafia58.toLocation)((0, import_kolmafia58.getProperty)("autumnatonQuestLocation"));
}
function auto_hasSpeakEasy() {
  return auto_is_valid($item`deed to Oliver's Place`) && (0, import_kolmafia58.toBoolean)((0, import_kolmafia58.getProperty)("ownsSpeakeasy"));
}
function auto_remainingSpeakeasyFreeFights() {
  if (!auto_hasSpeakEasy()) {
    return 0;
  }
  return (0, import_kolmafia58.max)(3 - (0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("_speakeasyFreeFights")), 0);
}

// src/autoscend/paths/zootomist.ts
var $_f_ZOOPART_NONE;
$_f_ZOOPART_NONE ?? ($_f_ZOOPART_NONE = 0);
var $_f_ZOOPART_HEAD;
$_f_ZOOPART_HEAD ?? ($_f_ZOOPART_HEAD = 1);
var $_f_ZOOPART_L_SHOULDER;
$_f_ZOOPART_L_SHOULDER ?? ($_f_ZOOPART_L_SHOULDER = 2);
var $_f_ZOOPART_R_SHOULDER;
$_f_ZOOPART_R_SHOULDER ?? ($_f_ZOOPART_R_SHOULDER = 3);
var $_f_ZOOPART_L_HAND;
$_f_ZOOPART_L_HAND ?? ($_f_ZOOPART_L_HAND = 4);
var $_f_ZOOPART_R_HAND;
$_f_ZOOPART_R_HAND ?? ($_f_ZOOPART_R_HAND = 5);
var $_f_ZOOPART_R_NIPPLE;
$_f_ZOOPART_R_NIPPLE ?? ($_f_ZOOPART_R_NIPPLE = 6);
var $_f_ZOOPART_L_NIPPLE;
$_f_ZOOPART_L_NIPPLE ?? ($_f_ZOOPART_L_NIPPLE = 7);
var $_f_ZOOPART_L_BUTTOCK;
$_f_ZOOPART_L_BUTTOCK ?? ($_f_ZOOPART_L_BUTTOCK = 8);
var $_f_ZOOPART_R_BUTTOCK;
$_f_ZOOPART_R_BUTTOCK ?? ($_f_ZOOPART_R_BUTTOCK = 9);
var $_f_ZOOPART_L_FOOT;
$_f_ZOOPART_L_FOOT ?? ($_f_ZOOPART_L_FOOT = 10);
var $_f_ZOOPART_R_FOOT;
$_f_ZOOPART_R_FOOT ?? ($_f_ZOOPART_R_FOOT = 11);
function in_zootomist() {
  return (0, import_kolmafia59.myPath)() === $path`Z is for Zootomist`;
}
function zoo_graftedToPart(bodyPart) {
  switch (bodyPart) {
    case $_f_ZOOPART_HEAD:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedHeadFamiliar")));
    case $_f_ZOOPART_L_SHOULDER:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedShoulderLeftFamiliar")));
    case $_f_ZOOPART_R_SHOULDER:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedShoulderRightFamiliar")));
    case $_f_ZOOPART_L_HAND:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedHandLeftFamiliar")));
    case $_f_ZOOPART_R_HAND:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedHandRightFamiliar")));
    case $_f_ZOOPART_R_NIPPLE:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedNippleRightFamiliar")));
    case $_f_ZOOPART_L_NIPPLE:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedNippleLeftFamiliar")));
    case $_f_ZOOPART_L_BUTTOCK:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedButtCheekLeftFamiliar")));
    case $_f_ZOOPART_R_BUTTOCK:
      return (0, import_kolmafia59.toFamiliar)(
        (0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedButtCheekRightFamiliar"))
      );
    case $_f_ZOOPART_L_FOOT:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedFootLeftFamiliar")));
    case $_f_ZOOPART_R_FOOT:
      return (0, import_kolmafia59.toFamiliar)((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedFootRightFamiliar")));
    default:
      return import_kolmafia59.Familiar.none;
  }
}
function getZooKickYR() {
  function isYR$1(fam_id) {
    var fam = (0, import_kolmafia59.toFamiliar)(fam_id);
    return $familiars`Quantum Entangler, Foul Ball, Defective Childrens' Stapler`.includes(
      fam
    );
  }
  if (isYR$1((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedFootLeftFamiliar")))) {
    return $skill`Left %n Kick`;
  }
  if (isYR$1((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedFootRightFamiliar")))) {
    return $skill`Right %n Kick`;
  }
  return import_kolmafia59.Skill.none;
}
function getZooKickSniff() {
  var haveYR = yellowRayCombatString$1(import_kolmafia59.Monster.none, false) !== "";
  if (leftKickHasSniff() && leftKickHasInstaKill() && !haveYR) {
    return $skill`Left %n Kick`;
  }
  if (rightKickHasSniff() && rightKickHasInstaKill() && !haveYR) {
    return $skill`Right %n Kick`;
  }
  return import_kolmafia59.Skill.none;
}
function getZooKickBanish() {
  if ((0, import_kolmafia59.haveEffect)($effect`Everything Looks Blue`) > 0) {
    return import_kolmafia59.Skill.none;
  }
  function isBanish(fam_id) {
    var fam = (0, import_kolmafia59.toFamiliar)(fam_id);
    return $familiars`Dire Cassava, Phantom Limb, MagiMechTech MicroMechaMech`.includes(
      fam
    );
  }
  if (isBanish((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedFootLeftFamiliar")))) {
    return $skill`Left %n Kick`;
  }
  if (isBanish((0, import_kolmafia59.toInt)((0, import_kolmafia59.getProperty)("zootGraftedFootRightFamiliar")))) {
    return $skill`Right %n Kick`;
  }
  return import_kolmafia59.Skill.none;
}
function getZooKickInstaKill() {
  if (yellowRayCombatString$1(import_kolmafia59.Monster.none, false) !== "") {
    return import_kolmafia59.Skill.none;
  }
  if (leftKickHasInstaKill()) {
    return import_kolmafia59.Skill.none;
  }
  if (rightKickHasInstaKill()) {
    return import_kolmafia59.Skill.none;
  }
  return import_kolmafia59.Skill.none;
}
function getZooBestPunch() {
  return getZooBestPunch$1($monster`fluffy bunny`);
}
function getZooBestPunch$1(m) {
  if ((0, import_kolmafia59.haveSkill)($skill`Left %n Punch`)) {
    return $skill`Left %n Punch`;
  } else {
    return import_kolmafia59.Skill.none;
  }
}
function leftKickHasSniff() {
  var fAttrs = zoo_graftedToPart($_f_ZOOPART_L_FOOT).attributes;
  var attrs = new Map(
    (0, import_kolmafia59.splitString)(fAttrs, "; ").map((_v, _i) => [_i, _v])
  );
  var sniffs = /* @__PURE__ */ new Map(
    [
      [0, "animal"],
      [1, "haseyes"],
      [2, "hot"],
      [3, "humanoid"],
      [4, "mineral"],
      [5, "orb"],
      [6, "sentient"],
      [7, "software"]
    ]
  );
  var _iterator14 = _createForOfIteratorHelper(
    attrs
  ), _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
      var _step14$value = _slicedToArray(_step14.value, 2), i = _step14$value[0], attr = _step14$value[1];
      var _iterator15 = _createForOfIteratorHelper(
        sniffs
      ), _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
          var _step15$value = _slicedToArray(_step15.value, 2), j = _step15$value[0], sniff = _step15$value[1];
          if (sniff === attr) {
            return true;
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return false;
}
function leftKickHasInstaKill() {
  var fAttrs = zoo_graftedToPart($_f_ZOOPART_L_FOOT).attributes;
  var attrs = new Map(
    (0, import_kolmafia59.splitString)(fAttrs, "; ").map((_v, _i) => [_i, _v])
  );
  var instakills = /* @__PURE__ */ new Map(
    [
      [0, "bite"],
      [1, "cute"],
      [2, "evil"],
      [3, "food"],
      [4, "hasstinger"],
      [5, "object"],
      [6, "reallyevil"],
      [7, "stench"]
    ]
  );
  var _iterator18 = _createForOfIteratorHelper(
    attrs
  ), _step18;
  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
      var _step18$value = _slicedToArray(_step18.value, 2), i = _step18$value[0], attr = _step18$value[1];
      var _iterator19 = _createForOfIteratorHelper(
        instakills
      ), _step19;
      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
          var _step19$value = _slicedToArray(_step19.value, 2), j = _step19$value[0], instakill = _step19$value[1];
          if (instakill === attr) {
            return true;
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
  return false;
}
function rightKickHasSniff() {
  var fAttrs = zoo_graftedToPart($_f_ZOOPART_R_FOOT).attributes;
  var attrs = new Map(
    (0, import_kolmafia59.splitString)(fAttrs, "; ").map((_v, _i) => [_i, _v])
  );
  var sniffs = /* @__PURE__ */ new Map(
    [
      [0, "animal"],
      [1, "haseyes"],
      [2, "hot"],
      [3, "humanoid"],
      [4, "mineral"],
      [5, "orb"],
      [6, "sentient"],
      [7, "software"]
    ]
  );
  var _iterator20 = _createForOfIteratorHelper(
    attrs
  ), _step20;
  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
      var _step20$value = _slicedToArray(_step20.value, 2), i = _step20$value[0], attr = _step20$value[1];
      var _iterator21 = _createForOfIteratorHelper(
        sniffs
      ), _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
          var _step21$value = _slicedToArray(_step21.value, 2), j = _step21$value[0], sniff = _step21$value[1];
          if (sniff === attr) {
            return true;
          }
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
  return false;
}
function rightKickHasInstaKill() {
  var fAttrs = zoo_graftedToPart($_f_ZOOPART_R_FOOT).attributes;
  var attrs = new Map(
    (0, import_kolmafia59.splitString)(fAttrs, "; ").map((_v, _i) => [_i, _v])
  );
  var instakills = /* @__PURE__ */ new Map(
    [
      [0, "bite"],
      [1, "cute"],
      [2, "evil"],
      [3, "food"],
      [4, "hasstinger"],
      [5, "object"],
      [6, "reallyevil"],
      [7, "stench"]
    ]
  );
  var _iterator24 = _createForOfIteratorHelper(
    attrs
  ), _step24;
  try {
    for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
      var _step24$value = _slicedToArray(_step24.value, 2), i = _step24$value[0], attr = _step24$value[1];
      var _iterator25 = _createForOfIteratorHelper(
        instakills
      ), _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
          var _step25$value = _slicedToArray(_step25.value, 2), j = _step25$value[0], instakill = _step25$value[1];
          if (instakill === attr) {
            return true;
          }
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
    }
  } catch (err) {
    _iterator24.e(err);
  } finally {
    _iterator24.f();
  }
  return false;
}

// src/autoscend/iotms/mr2025.ts
function auto_haveMcHugeLargeSkis() {
  if (auto_is_valid($item`McHugeLarge duffel bag`) && (0, import_kolmafia60.availableAmount)($item`McHugeLarge duffel bag`) > 0) {
    return true;
  }
  return false;
}
function auto_canEquipAllMcHugeLarge() {
  if (!auto_haveMcHugeLargeSkis()) {
    return false;
  }
  var success = true;
  var _iterator = _createForOfIteratorHelper(
    $items`McHugeLarge duffel bag, McHugeLarge right pole, McHugeLarge left pole, McHugeLarge right ski, McHugeLarge left ski`
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var it = _step.value;
      success = (0, import_kolmafia60.canEquip)(it) && success;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return success;
}
function auto_McLargeHugeSniffsLeft() {
  if (!auto_haveMcHugeLargeSkis()) {
    return 0;
  }
  var used = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_mcHugeLargeSlashUses"));
  return 3 - used;
}
function auto_haveCupidBow() {
  var bow = $item`toy Cupid bow`;
  return auto_is_valid(bow) && possessEquipment(bow);
}
function auto_haveAprilShowerShield() {
  var shield = $item`April Shower Thoughts shield`;
  return auto_is_valid(shield) && possessEquipment(shield);
}
function auto_equipAprilShieldBuff() {
  if (!auto_haveAprilShowerShield()) {
    return false;
  }
  if ((0, import_kolmafia60.weaponHands)((0, import_kolmafia60.equippedItem)($slot`weapon`)) > 1) {
    (0, import_kolmafia60.equip)(import_kolmafia60.Item.none, $slot`weapon`);
  }
  return autoForceEquip$2($item`April Shower Thoughts shield`, true);
}
function auto_unequipAprilShieldBuff() {
  if ((0, import_kolmafia60.haveEquipped)($item`April Shower Thoughts shield`)) {
    return autoForceEquip($slot`off-hand`, import_kolmafia60.Item.none, true);
  }
  return true;
}
function auto_canNorthernExplosionFE() {
  if (!auto_haveAprilShowerShield()) {
    return false;
  }
  if (!auto_have_skill($skill`Northern Explosion`)) {
    return false;
  }
  if ((0, import_kolmafia60.toBoolean)((0, import_kolmafia60.getProperty)("_aprilShowerNorthernExplosion"))) {
    return false;
  }
  return true;
}
function auto_havePeridot() {
  var pop = $item`Peridot of Peril`;
  return auto_is_valid(pop) && possessEquipment(pop);
}
function haveUsedPeridot(loc) {
  var perilLocs = new Map(
    (0, import_kolmafia60.splitString)((0, import_kolmafia60.getProperty)("_perilLocations"), ",").map((_v, _i) => [_i, _v])
  );
  var _iterator4 = _createForOfIteratorHelper(
    perilLocs
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _step4$value = _slicedToArray(_step4.value, 2), i = _step4$value[0], str = _step4$value[1];
      if (loc === (0, import_kolmafia60.toInt)(str)) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return false;
}
function haveUsedPeridot$1(loc) {
  return haveUsedPeridot((0, import_kolmafia60.toInt)(loc));
}
function auto_haveMobiusRing() {
  var ring = $item`Möbius ring`;
  return auto_is_valid(ring) && possessEquipment(ring);
}
function auto_timeIsAStripPossible() {
  if (!auto_haveMobiusRing()) {
    return false;
  }
  return (0, import_kolmafia60.turnsUntilMobiusNoncombatAvailable)() === 0;
}
function auto_timeCopFights() {
  return (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_timeCopsFoughtToday"));
}
function auto_haveMonodent() {
  var dent = $item`Monodent of the Sea`;
  return auto_is_valid(dent) && possessEquipment(dent);
}
function auto_talkToSomeFish(loc, enemy) {
  if (!auto_haveMonodent()) {
    return false;
  }
  if (!auto_is_valid$2($skill`Sea *dent: Talk to Some Fish`)) {
    return false;
  }
  if (isFreeMonster$1(enemy, loc)) {
    return false;
  }
  if (enemy === $monster`some fish`) {
    return false;
  }
  if (loc === $location`The Battlefield (Frat Uniform)` || loc === $location`The Battlefield (Hippy Uniform)`) {
    return false;
  }
  if (loc === $location`The Haunted Bedroom`) {
    return false;
  }
  if (loc === $location`The Fungus Plains`) {
    return false;
  }
  if (auto_bczRefractedGaze() && auto_BCZEquipped()) {
    return true;
  }
  return auto_wantToFreeKillWithNoDrops(loc, enemy);
}
function auto_throwLightningRemaining() {
  if (!auto_haveMonodent() || !auto_is_valid$2($skill`Sea *dent: Throw a Lightning Bolt`)) {
    return 0;
  }
  return 11 - (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_seadentLightningUsed"));
}
function auto_haveBCZ() {
  if (auto_is_valid($item`blood cubic zirconia`) && possessEquipment($item`blood cubic zirconia`)) {
    return true;
  }
  if (auto_haveEternityCodpiece() && auto_isInEternityCodpiece($item`blood cubic zirconia`)) {
    return true;
  }
  return false;
}
function auto_getItemToEquipBCZ() {
  if (auto_haveEternityCodpiece() && auto_isInEternityCodpiece($item`blood cubic zirconia`)) {
    return $item`The Eternity Codpiece`;
  }
  if (auto_haveBCZ()) {
    return $item`blood cubic zirconia`;
  }
  return import_kolmafia60.Item.none;
}
function auto_BCZEquipped() {
  if (auto_isInEternityCodpiece($item`blood cubic zirconia`) && (0, import_kolmafia60.haveEquipped)($item`The Eternity Codpiece`)) {
    return true;
  }
  if ((0, import_kolmafia60.haveEquipped)($item`blood cubic zirconia`)) {
    return true;
  }
  return false;
}
function auto_wantToBCZ(sk) {
  if (!auto_haveBCZ() || !canUse$2(sk) || in_zootomist()) {
    return false;
  }
  var bloodBathCasts = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_bczBloodBathCasts"));
  var bloodGeyserCasts = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_bczBloodGeyserCasts"));
  var bloodThinnerCasts = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_bczBloodThinnerCasts"));
  var dialItUpCasts = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_bczDialitupCasts"));
  var pheromoneCocktailCasts = (0, import_kolmafia60.toInt)(
    (0, import_kolmafia60.getProperty)("_bczPheromoneCocktailCasts")
  );
  var refractedGazeCasts = (0, import_kolmafia60.toInt)(
    (0, import_kolmafia60.getProperty)("_bczRefractedGazeCasts")
  );
  var spinalTapasCasts = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_bczSpinalTapasCasts"));
  var sweatBulletsCasts = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_bczSweatBulletsCasts"));
  var sweatEquityCasts = (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("_bczSweatEquityCasts"));
  function auto_bczCastMath(cast) {
    if (cast === 12) {
      return 42e4;
    }
    var castMath = cast;
    if (cast > 12) {
      castMath -= 1;
    }
    var castMathFloor = (0, import_kolmafia60.floor)(castMath / 3);
    if (cast > 12) {
      castMathFloor += 1;
    }
    var castMathModulo = castMath % 3;
    var substatBase = 0;
    switch (castMathModulo) {
      case 0:
        substatBase = 11;
        break;
      case 1:
        substatBase = 23;
        break;
      case 2:
        substatBase = 37;
        break;
    }
    return substatBase * 10 ** castMathFloor;
  }
  function statChange(st, casts) {
    var level = (0, import_kolmafia60.myLevel)();
    if ((0, import_kolmafia60.myLevel)() >= 13) {
      level = 13;
    }
    switch (true) {
      case (level < 10 && casts >= 3):
        return false;
      case (level < 11 && casts >= 5):
        return false;
      case (in_amw() && casts >= 5):
        return false;
      case st === (0, import_kolmafia60.myPrimestat)():
        return (0, import_kolmafia60.myBasestat)(stat_to_substat(st)) - level_to_min_substat(level) > auto_bczCastMath(casts);
      case ((0, import_kolmafia60.myBasestat)(st) < 70 && casts < 3):
        return (0, import_kolmafia60.myBasestat)(stat_to_substat(st)) - (0, import_kolmafia60.myBasestat)(st) ** 2 > auto_bczCastMath(casts);
      default:
        return (0, import_kolmafia60.myBasestat)(st) ** 2 - 70 ** 2 > auto_bczCastMath(casts);
    }
  }
  switch (sk) {
    case $skill`BCZ: Blood Geyser`:
      return statChange($stat`Muscle`, bloodGeyserCasts) && bloodGeyserCasts < 6;
    case $skill`BCZ: Blood Bath`:
      return statChange($stat`Muscle`, bloodBathCasts) && bloodBathCasts < 6;
    case $skill`BCZ: Create Blood Thinner`:
      if (!canChew($item`blood thinner`)) {
        return false;
      }
      return statChange($stat`Muscle`, bloodThinnerCasts) && bloodThinnerCasts === 0;
    case $skill`BCZ: Dial it up to 11`:
      return statChange($stat`Mysticality`, dialItUpCasts) && dialItUpCasts < 3;
    case $skill`BCZ: Refracted Gaze`:
      return statChange($stat`Mysticality`, refractedGazeCasts) && refractedGazeCasts < 6;
    case $skill`BCZ: Prepare Spinal Tapas`:
      if (!canEat$1($item`spinal tapas`)) {
        return false;
      }
      return statChange($stat`Mysticality`, spinalTapasCasts) && spinalTapasCasts < 3;
    case $skill`BCZ: Sweat Bullets`:
      return statChange($stat`Moxie`, sweatBulletsCasts) && sweatBulletsCasts < 6;
    case $skill`BCZ: Sweat Equity`:
      return statChange($stat`Moxie`, sweatEquityCasts) && sweatEquityCasts < 2;
    case $skill`BCZ: Craft a Pheromone Cocktail`:
      if (!canDrink$1($item`pheromone cocktail`)) {
        return false;
      }
      return statChange($stat`Moxie`, pheromoneCocktailCasts) && pheromoneCocktailCasts < 6;
    default:
      return false;
  }
}
function auto_bczRefractedGaze() {
  if (!auto_wantToBCZ($skill`BCZ: Refracted Gaze`)) {
    return false;
  }
  if (auto_havePeridot() && !haveUsedPeridot$1((0, import_kolmafia60.myLocation)())) {
    return false;
  }
  if ((0, import_kolmafia60.myLocation)() === $location`The Smut Orc Logging Camp` && lumberCount() < bridgeGoal() && fastenerCount() < bridgeGoal() || (0, import_kolmafia60.myLocation)() === $location`The Penultimate Fantasy Airship` && (0, import_kolmafia60.itemAmount)($item`Mohawk wig`) < 1 && (0, import_kolmafia60.itemAmount)($item`amulet of extreme plot significance`) < 1 || (0, import_kolmafia60.myLocation)() === $location`The Battlefield (Frat Uniform)` || (0, import_kolmafia60.myLocation)() === $location`A-Boo Peak` && (0, import_kolmafia60.itemAmount)($item`A-Boo clue`) * 30 < (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("booPeakProgress")) || (0, import_kolmafia60.myLocation)() === $location`Cobb's Knob Harem` && ((0, import_kolmafia60.lastMonster)() === $monster`Knob Goblin Harem Guard` || (0, import_kolmafia60.lastMonster)() === $monster`some fish`) || (0, import_kolmafia60.myLocation)() === $location`Twin Peak` && (0, import_kolmafia60.itemAmount)($item`rusty hedge trimmers`) < 4 || (0, import_kolmafia60.myLocation)() === $location`The Black Forest` && !(0, import_kolmafia60.blackMarketAvailable)() && (0, import_kolmafia60.itemAmount)($item`reassembled blackbird`) === 0 && (0, import_kolmafia60.monsterPhylum)() !== $phylum`beast` || (0, import_kolmafia60.myLocation)() === $location`Whitey's Grove` && (0, import_kolmafia60.itemAmount)($item`lion oil`) === 0 && (0, import_kolmafia60.itemAmount)($item`bird rib`) === 0 && (0, import_kolmafia60.itemAmount)($item`wet stew`) === 0 && (0, import_kolmafia60.itemAmount)($item`wet stunt nut stew`) === 0 && (0, import_kolmafia60.monsterPhylum)() !== $phylum`beast` || (0, import_kolmafia60.myLocation)() === $location`The Hidden Apartment Building` && ((0, import_kolmafia60.lastMonster)() === $monster`pygmy shaman` || (0, import_kolmafia60.lastMonster)() === $monster`some fish`) || (0, import_kolmafia60.myLocation)() === $location`The Defiled Nook` && ((0, import_kolmafia60.lastMonster)() === $monster`party skelteon` || (0, import_kolmafia60.lastMonster)() === $monster`some fish`) || (0, import_kolmafia60.myLocation)() === $location`The Hole in the Sky` && needStarKey() && ((0, import_kolmafia60.monsterPhylum)() === $phylum`constellation` && (0, import_kolmafia60.lastMonster)() !== $monster`Astronomer` || (0, import_kolmafia60.lastMonster)() === $monster`some fish`) || (0, import_kolmafia60.myLocation)() === $location`Guano Junction` && internalQuestStatus("questL04Bat") < 3) {
    return true;
  }
  return false;
}
function auto_haveShrunkenHead() {
  if ((0, import_kolmafia60.toBoolean)((0, import_kolmafia60.getProperty)("hasShrunkenHead")) && auto_is_valid($item`shrunken head`)) {
    return true;
  }
  return false;
}
function auto_wantToShrunkenHead(enemy) {
  if (!auto_haveShrunkenHead()) {
    return false;
  }
  if (!canUse$2($skill`Prepare to reanimate your Foe`)) {
    return false;
  }
  if (!enemy.copyable) {
    return false;
  }
  var hasItem = false;
  var _iterator20 = _createForOfIteratorHelper(
    (0, import_kolmafia60.shrunkenHeadZombie)(enemy).entries()
  ), _step20;
  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
      var _step20$value = _slicedToArray(_step20.value, 2), i = _step20$value[0], bonus = _step20$value[1];
      if ((0, import_kolmafia60.containsText)(bonus, "Attack")) {
        return false;
      }
      if ((0, import_kolmafia60.containsText)(bonus, "Item Drop")) {
        hasItem = true;
      }
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
  return hasItem;
}
function auto_haveCrimboSkeleton() {
  if (auto_have_familiar($familiar`Skeleton of Crimbo Past`)) {
    return true;
  }
  return false;
}

// src/autoscend/paths/adventurer_meats_world.ts
function in_amw() {
  return (0, import_kolmafia61.myPath)() === $path`Adventurer Meats World`;
}
function amw_canAfford(sk) {
  return (0, import_kolmafia61.myMeat)() >= 10 + (0, import_kolmafia61.meatCost)(sk);
}

// src/autoscend/iotms/mr2024.ts
function auto_haveSpringShoes() {
  if (auto_is_valid($item`spring shoes`) && (0, import_kolmafia62.availableAmount)($item`spring shoes`) > 0) {
    return true;
  }
  return false;
}
function auto_haveAprilingBandHelmet() {
  if (auto_is_valid($item`Apriling band helmet`) && (0, import_kolmafia62.availableAmount)($item`Apriling band helmet`) > 0) {
    return true;
  }
  return false;
}
function auto_AprilSaxLuckyLeft() {
  if (!auto_haveAprilingBandHelmet()) {
    return 0;
  }
  if ((0, import_kolmafia62.availableAmount)($item`Apriling band saxophone`) === 0) {
    return 0;
  }
  return 3 - (0, import_kolmafia62.toInt)((0, import_kolmafia62.getProperty)("_aprilBandSaxophoneUses"));
}
function auto_haveDarts() {
  if (auto_is_valid($item`Everfull Dart Holster`) && possessEquipment($item`Everfull Dart Holster`)) {
    return true;
  }
  return false;
}
function dartELRcd() {
  var perks = /* @__PURE__ */ new Map();
  var cd = 50;
  perks = new Map(
    (0, import_kolmafia62.splitString)((0, import_kolmafia62.toLowerCase)((0, import_kolmafia62.getProperty)("everfullDartPerks")), ",").map(
      (_v, _i) => [_i, _v]
    )
  );
  var _iterator4 = _createForOfIteratorHelper(
    perks.keys()
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var perk = _step4.value;
      if ((0, import_kolmafia62.containsText)(perks.get(perk) ?? perks.set(perk, "").get(perk), "impress")) {
        cd -= 10;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return cd;
}
function dartSkill() {
  var curDartboard = /* @__PURE__ */ new Map();
  curDartboard = new Map(
    (0, import_kolmafia62.splitString)((0, import_kolmafia62.toLowerCase)((0, import_kolmafia62.getProperty)("_currentDartboard")), ",").map(
      (_v, _i) => [_i, _v]
    )
  );
  var _iterator5 = _createForOfIteratorHelper(
    curDartboard.keys()
  ), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var sk = _step5.value;
      if ((0, import_kolmafia62.containsText)(
        curDartboard.get(sk) ?? curDartboard.set(sk, "").get(sk),
        "butt"
      )) {
        auto_log_info("Going for the butt", "blue");
        return (0, import_kolmafia62.toSkill)(
          (0, import_kolmafia62.toInt)(
            (0, import_kolmafia62.substring)(
              curDartboard.get(sk) ?? curDartboard.set(sk, "").get(sk),
              0,
              4
            )
          )
        );
      } else if ((0, import_kolmafia62.containsText)(
        curDartboard.get(sk) ?? curDartboard.set(sk, "").get(sk),
        "torso"
      ) || (0, import_kolmafia62.containsText)(sk.toString(), "pseudopod")) {
        auto_log_info("Going for the chest", "blue");
        return (0, import_kolmafia62.toSkill)(
          (0, import_kolmafia62.toInt)(
            (0, import_kolmafia62.substring)(
              curDartboard.get(sk) ?? curDartboard.set(sk, "").get(sk),
              0,
              4
            )
          )
        );
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return (0, import_kolmafia62.toSkill)(7513);
}
function auto_haveRoman() {
  if (auto_is_valid($item`Roman Candelabra`) && possessEquipment($item`Roman Candelabra`)) {
    return true;
  }
  return false;
}
function auto_haveBatWings() {
  if (auto_is_valid($item`bat wings`) && possessEquipment($item`bat wings`)) {
    return true;
  }
  return false;
}
function auto_haveSeptEmberCenser() {
  if (in_koe()) {
    return false;
  }
  if (auto_is_valid($item`Sept-Ember Censer`) && (0, import_kolmafia62.availableAmount)($item`Sept-Ember Censer`) > 0) {
    return true;
  }
  return false;
}
function remainingEmbers() {
  if (!auto_haveSeptEmberCenser()) {
    return 0;
  }
  if (!(0, import_kolmafia62.toBoolean)((0, import_kolmafia62.getProperty)("_septEmberBalanceChecked"))) {
    (0, import_kolmafia62.use)($item`Sept-Ember Censer`);
  }
  return (0, import_kolmafia62.toInt)((0, import_kolmafia62.getProperty)("availableSeptEmbers"));
}
function auto_goingToMouthwashLevel() {
  if (!auto_haveSeptEmberCenser()) {
    return false;
  }
  if (auto_ignoreExperience()) {
    return false;
  }
  if (in_glover() || in_bhy() || in_plumber() || in_amw()) {
    return false;
  }
  var disregard_karma = (0, import_kolmafia62.toBoolean)(
    (0, import_kolmafia62.getProperty)("auto_disregardInstantKarma")
  );
  var happy_to_overlevel = disregard_karma && remainingEmbers() < 4;
  var want_to_mouthwash_level = (0, import_kolmafia62.myLevel)() < 13 || happy_to_overlevel;
  want_to_mouthwash_level = want_to_mouthwash_level && (0, import_kolmafia62.myLevel)() < 15;
  return remainingEmbers() >= 2 && want_to_mouthwash_level;
}
function expected_mouthwash_main_substat$1(cold_res) {
  var boost_factor = 1 + stat_exp_percent((0, import_kolmafia62.myPrimestat)()) / 100;
  return boost_factor * 14 * cold_res ** 1.7 / 2;
}
function expected_level_after_mouthwash() {
  return expected_level_after_mouthwash$2(
    1,
    (0, import_kolmafia62.numericModifier)(import_kolmafia62.Modifier.get("Cold Resistance"))
  );
}
function expected_level_after_mouthwash$2(n_mouthwash, cold_res) {
  var gained_main_substats = n_mouthwash * expected_mouthwash_main_substat$1(cold_res);
  var old_main_substats = (0, import_kolmafia62.myBasestat)(stat_to_substat((0, import_kolmafia62.myPrimestat)()));
  var new_main_substats = old_main_substats + gained_main_substats;
  var level = substat_to_level$1((0, import_kolmafia62.toInt)(new_main_substats));
  return level;
}

// src/autoscend/paths/avant_guard.ts
function in_avantGuard() {
  return (0, import_kolmafia63.myPath)() === $path`Avant Guard`;
}
function ag_is_bodyguard() {
  if ((0, import_kolmafia63.containsText)((0, import_kolmafia63.getProperty)("lastEncounter"), "bodyguard to")) {
    return true;
  }
  return false;
}

// src/autoscend/combat/auto_combat_awol.ts
var import_kolmafia64 = require("kolmafia");
function awol_combat_helper(page) {
  if ((0, import_kolmafia64.myDaycount)() === 1 && (0, import_kolmafia64.myTurncount)() < 10) {
    (0, import_kolmafia64.setProperty)("auto_noSnakeOil", 0 .toString());
  }
  if ((0, import_kolmafia64.containsText)(
    page,
    "Your oil extractor is completely clogged up at this point"
  )) {
    (0, import_kolmafia64.setProperty)("auto_noSnakeOil", (0, import_kolmafia64.myDaycount)().toString());
  }
  if ((0, import_kolmafia64.toInt)((0, import_kolmafia64.getProperty)("_oilExtracted")) >= 100) {
    (0, import_kolmafia64.setProperty)("auto_noSnakeOil", (0, import_kolmafia64.myDaycount)().toString());
  }
  if (!combat_status_check("extractSnakeOil") && (0, import_kolmafia64.toInt)((0, import_kolmafia64.getProperty)("auto_noSnakeOil")) === (0, import_kolmafia64.myDaycount)()) {
    combat_status_add("extractSnakeOil");
  }
}

// src/autoscend/combat/auto_combat_default_stage1.ts
var import_kolmafia76 = require("kolmafia");

// src/autoscend/combat/auto_combat_adventurer_meats_world.ts
var import_kolmafia65 = require("kolmafia");
function amw_wanttoPP(enemy) {
  if (!in_amw() || !auto_have_skill($skill`Chicken Fingers`)) {
    return false;
  }
  if (!canSurvive$1(8)) {
    return false;
  }
  return true;
}
function auto_combatMeatGolemStage3(round_1, enemy, text) {
  if (!in_amw()) {
    return "";
  }
  if (((0, import_kolmafia65.monsterHp)() - (0, import_kolmafia65.myBuffedstat)($stat`Muscle`)) / (0, import_kolmafia65.monsterHp)() < 0.55) {
    return "";
  }
  if (canUse($skill`Meat Cleaver`, true, true) && ((!canSurvive$1(8) || (0, import_kolmafia65.monsterHp)() >= 500) && canSurvive$1(0.7) || enemy === $monster`The Manwich` || enemy === $monster`The Big Mac Wisniewski` || enemy === $monster`Naughty Sorceress\, all sausage`)) {
    return useSkill$2($skill`Meat Cleaver`);
  }
  return "";
}
function auto_combatMeatGolemStage5(round_1, enemy, text) {
  if (!in_amw()) {
    return "";
  }
  if ((!canSurvive$1(1.4) || (0, import_kolmafia65.myHp)() < 0.5 * (0, import_kolmafia65.myMaxhp)()) && canUse$1($skill`Chew the Fat`, false) && (0, import_kolmafia65.myHp)() < (0, import_kolmafia65.myMaxhp)() * 0.95) {
    return useSkill$1($skill`Chew the Fat`, false);
  }
  if (canUse$1($skill`Steak Through the Heart`, true) && (0, import_kolmafia65.combatSkillAvailable)($skill`Steak Through the Heart`) && round_1 > 12) {
    return useSkill$1($skill`Steak Through the Heart`, true);
  }
  if (canUse$1($skill`Wet Rub`, true) && ((0, import_kolmafia65.monsterHp)() >= 400 || enemy === $monster`The Manwich` || enemy === $monster`The Big Mac Wisniewski` || enemy === $monster`Naughty Sorceress\, all sausage`)) {
    return useSkill$1($skill`Wet Rub`, true);
  }
  if (canUse($skill`Meat Cleaver`, true, true) && ((0, import_kolmafia65.monsterHp)() >= 400 || enemy === $monster`The Manwich` || enemy === $monster`The Big Mac Wisniewski` || enemy === $monster`Naughty Sorceress\, all sausage`)) {
    return useSkill$1($skill`Meat Cleaver`, true);
  }
  if ((0, import_kolmafia65.haveEquipped)($item`Everfull Dart Holster`) && (0, import_kolmafia65.toInt)((0, import_kolmafia65.getProperty)("_dartsLeft")) > 0) {
    return useSkill$2(dartSkill());
  }
  var beef_shank_value = (0, import_kolmafia65.myBuffedstat)($stat`Muscle`);
  var spicy_meatball_value = (0, import_kolmafia65.myBuffedstat)($stat`Mysticality`);
  var bacon_ray_value = (0, import_kolmafia65.toInt)(0.55 * (0, import_kolmafia65.myBuffedstat)($stat`Moxie`));
  if (!canUse$1($skill`Beef Shank`, false) || enemy.physicalResistance > 70) {
    beef_shank_value = 0;
  }
  if (!canUse$1($skill`Spicy Meatball`, false) || enemy.defenseElement === $element`hot`) {
    spicy_meatball_value = 0;
  }
  if (!canUse$1($skill`Bacon Ray`, false) || enemy.defenseElement === $element`sleaze`) {
    bacon_ray_value = 0;
  }
  if (enemy.defenseElement === $element`cold` || enemy.defenseElement === $element`spooky`) {
    spicy_meatball_value = 2 * spicy_meatball_value;
  } else if (enemy.defenseElement === $element`stench` || enemy.defenseElement === $element`hot`) {
    bacon_ray_value = 2 * bacon_ray_value;
  }
  if (spicy_meatball_value > bacon_ray_value && spicy_meatball_value > beef_shank_value) {
    return useSkill$1($skill`Spicy Meatball`, false);
  } else if (bacon_ray_value > beef_shank_value) {
    return useSkill$1($skill`Bacon Ray`, false);
  } else if (beef_shank_value !== 0) {
    return useSkill$1($skill`Beef Shank`, false);
  }
  return "";
}

// src/autoscend/combat/auto_combat_bees_hate_you.ts
var import_kolmafia66 = require("kolmafia");
function auto_combatBHYStage1(round_1, enemy, text) {
  if (enemy === $monster`Guy Made Of Bees`) {
    if (canUse$4($item`antique hand mirror`)) {
      return useItem$1($item`antique hand mirror`);
    } else {
      (0, import_kolmafia66.abort)(
        "We attacked [Guy Made Of Bees] without an [antique hand mirror]. Report this then get the mirror before running autoscend again"
      );
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_disguises_delimit.ts
var import_kolmafia67 = require("kolmafia");
function disguises_combat_helper(round_1, enemy, text) {
  if (!in_disguises()) {
    return;
  }
  var disguises = -1;
  var maskMatch = new AshMatcher("mask(\\d+).png", text);
  if (maskMatch.find()) {
    disguises = (0, import_kolmafia67.toInt)(maskMatch.group(1));
    if (round_1 === 0) {
      auto_log_info(`Found mask: ${disguises}`, "green");
    }
  } else if (enemy === $monster`Your Shadow`) {
    disguises = 1;
    auto_log_info("Found mask: 1", "green");
  } else {
    (0, import_kolmafia67.abort)(
      `Failed to identify the mask worn by the monster [${enemy}]. Finish this combat manually then run me again`
    );
  }
  (0, import_kolmafia67.setProperty)("_auto_combatDisguisesDelimitMask", disguises.toString());
}
function auto_combatDisguisesStage1(round_1, enemy, text) {
  if (!in_disguises()) {
    return "";
  }
  var disguises = (0, import_kolmafia67.toInt)(
    (0, import_kolmafia67.getProperty)("_auto_combatDisguisesDelimitMask")
  );
  if (disguises === 7 && canUse$2($skill`Swap Mask`)) {
    return useSkill$2($skill`Swap Mask`);
  }
  if (disguises === 3) {
    if (canSurvive$1(1.5)) {
      return "attack with weapon";
    }
    (0, import_kolmafia67.abort)(
      "May not be able to survive combat. Is swapping protest mask still not allowing us to do anything?"
    );
  }
  if ((0, import_kolmafia67.myMask)() === "protest mask" && canUse$2($skill`Swap Mask`)) {
    return useSkill$2($skill`Swap Mask`);
  }
  return "";
}
function auto_combatDisguisesStage5(round_1, enemy, text) {
  if (!in_disguises()) {
    return "";
  }
  var disguises = (0, import_kolmafia67.toInt)(
    (0, import_kolmafia67.getProperty)("_auto_combatDisguisesDelimitMask")
  );
  if (disguises === 13) {
    if (enemy.physicalResistance >= 80) {
      if ((0, import_kolmafia67.myHp)() > (0, import_kolmafia67.monsterHp)() + 150 && canUse$1($skill`Saucestorm`, false)) {
        return useSkill$1($skill`Saucestorm`, false);
      }
      if (canUse$2($skill`Implode Universe`)) {
        return useSkill$1($skill`Implode Universe`, true);
      }
      (0, import_kolmafia67.abort)(
        "Not sure how to handle a physically resistent enemy wearing a welding mask."
      );
    }
    if (canSurvive$1(1.5) && round_1 < 10) {
      return "attack with weapon";
    }
    if (canUse$2($skill`Implode Universe`)) {
      return useSkill$1($skill`Implode Universe`, true);
    }
    (0, import_kolmafia67.abort)("Not sure how to handle welding mask.");
  }
  if (disguises === 25) {
    var hot_dmg = (0, import_kolmafia67.toInt)((0, import_kolmafia67.min)(10, (0, import_kolmafia67.numericModifier)("hot damage")));
    var cold_dmg = (0, import_kolmafia67.toInt)((0, import_kolmafia67.min)(10, (0, import_kolmafia67.numericModifier)("cold damage")));
    var stench_dmg = (0, import_kolmafia67.toInt)((0, import_kolmafia67.min)(10, (0, import_kolmafia67.numericModifier)("stench damage")));
    var sleaze_dmg = (0, import_kolmafia67.toInt)((0, import_kolmafia67.min)(10, (0, import_kolmafia67.numericModifier)("sleaze damage")));
    var spooky_dmg = (0, import_kolmafia67.toInt)((0, import_kolmafia67.min)(10, (0, import_kolmafia67.numericModifier)("spooky damage")));
    var attack_dmg = 10 + hot_dmg + cold_dmg + stench_dmg + sleaze_dmg + spooky_dmg;
    if (attack_dmg > 20) {
      return "attack with weapon";
    }
    if (canUse$1($skill`Saucestorm`, false)) {
      return useSkill$1($skill`Saucestorm`, false);
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_fall_of_the_dinosaurs.ts
var import_kolmafia68 = require("kolmafia");
function fotd_combat_helper() {
  if (!in_fotd()) {
    return;
  }
  var dino_list = new Map(
    (0, import_kolmafia68.splitString)(
      "chicken archelon ghostasaurus flatusaurus spikolodon pterodactyl velociraptor kachungasaur dilophosaur",
      " "
    ).map((_v, _i) => [_i, _v])
  );
  var _iterator = _createForOfIteratorHelper(
    dino_list.keys()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var d = _step.value;
      var dino = dino_list.get(d) ?? dino_list.set(d, "").get(d);
      if ((0, import_kolmafia68.lastMonster)().randomModifiers.includes(dino)) {
        (0, import_kolmafia68.setProperty)("_auto_combatFotdDinosaur", dino);
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function auto_combatFallOfTheDinosaursStage1(round_1, enemy, text) {
  if (!in_fotd()) {
    return "";
  }
  var dino = (0, import_kolmafia68.getProperty)("_auto_combatFotdDinosaur");
  if (dino === "velociraptor") {
    return "attack with weapon";
  }
  return "";
}
function auto_combatFallOfTheDinosaursStage5(round_1, enemy, text) {
  if (!in_fotd()) {
    return "";
  }
  var dino = (0, import_kolmafia68.getProperty)("_auto_combatFotdDinosaur");
  if (dino === "archelon") {
    if (enemy.physicalResistance >= 80 && !haveUsed($skill`Silent Treatment`)) {
      if (canUse$2($skill`Implode Universe`)) {
        return useSkill$1($skill`Implode Universe`, true);
      }
      if (canUse$2($skill`Silent Treatment`)) {
        return useSkill$1($skill`Silent Treatment`, true);
      }
      (0, import_kolmafia68.abort)(
        "Not sure how to handle a physically resistent enemy eaten by a glass-shelled archelon."
      );
    }
    if (canSurvive$1(1.5) && round_1 < 25) {
      return "attack with weapon";
    }
    if (canUse$2($skill`Implode Universe`)) {
      return useSkill$1($skill`Implode Universe`, true);
    }
    (0, import_kolmafia68.abort)("Not sure how to handle monster eaten by a glass-shelled archelon.");
  }
  if (dino === "pterodactyl") {
    if (canUse$1($skill`Snipe Pterodactyl`, false)) {
      return useSkill$1($skill`Snipe Pterodactyl`, false);
    }
    if (canUse$1($skill`Saucegeyser`, false)) {
      return useSkill$1($skill`Saucegeyser`, false);
    }
    if (canUse$1($skill`Saucestorm`, false)) {
      return useSkill$1($skill`Saucestorm`, false);
    }
  }
  if (dino === "spikolodon") {
    if (canUse$1($skill`Saucegeyser`, false)) {
      return useSkill$1($skill`Saucegeyser`, false);
    }
    if (canUse$1($skill`Saucestorm`, false)) {
      return useSkill$1($skill`Saucestorm`, false);
    }
  }
  if (dino === "ghostasaurus") {
    var dino_difficulty = (0, import_kolmafia68.containsText)(enemy.attributes, "Scale:") ? 0 : (0, import_kolmafia68.toInt)(enemy.baseAttack / 1.8);
    if (dino_difficulty >= 75 && canUse$2($skill`Silent Treatment`)) {
      return useSkill$1($skill`Silent Treatment`, true);
    }
    if (canUse$1($skill`Saucestorm`, false)) {
      return useSkill$1($skill`Saucestorm`, false);
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_heavy_rains.ts
var import_kolmafia69 = require("kolmafia");
function auto_combatHeavyRainsStage1(round_1, enemy, text) {
  if (enemy.toString() === "Gurgle") {
    if (canUse$2($skill`Summon Love Stinkbug`)) {
      return useSkill$2($skill`Summon Love Stinkbug`);
    }
    return "attack with weapon";
  }
  if (enemy.toString() === "Dr. Aquard") {
    if (canUse$2($skill`Curse of Weaksauce`)) {
      return useSkill$2($skill`Curse of Weaksauce`);
    }
    if (canUse$2($skill`Micrometeorite`)) {
      return useSkill$2($skill`Micrometeorite`);
    }
    if (canUse$2($skill`Summon Love Stinkbug`)) {
      return useSkill$2($skill`Summon Love Stinkbug`);
    }
    return "attack with weapon";
  }
  return "";
}
function auto_combatHeavyRainsStage3(round_1, enemy, text) {
  if ($monsters`Big Wisnaqua, The Aquaman, The Rain King`.includes(enemy)) {
    if (round_1 === 1 && (0, import_kolmafia69.toInt)((0, import_kolmafia69.getProperty)("auto_combatHandlerThunderBird")) === 0) {
      var targetThunderBird = 3;
      if ((0, import_kolmafia69.monsterLevelAdjustment)() > 80) {
        targetThunderBird++;
      }
      if ((0, import_kolmafia69.monsterLevelAdjustment)() > 110) {
        targetThunderBird++;
      }
      if ((0, import_kolmafia69.monsterLevelAdjustment)() > 150) {
        targetThunderBird++;
      }
      (0, import_kolmafia69.setProperty)(
        "auto_combatHandlerThunderBird",
        targetThunderBird.toString()
      );
    }
    if ((0, import_kolmafia69.monsterLevelAdjustment)() > 150) {
      if ((0, import_kolmafia69.itemAmount)($item`crayon shavings`) > 1 && auto_have_skill($skill`Ambidextrous Funkslinging`)) {
        (0, import_kolmafia69.setProperty)(
          "auto_combatHandlerThunderBird",
          ((0, import_kolmafia69.toInt)((0, import_kolmafia69.getProperty)("auto_combatHandlerThunderBird")) - 4).toString()
        );
        return `item ${$item`crayon shavings`}, ${$item`crayon shavings`}`;
      }
      if ((0, import_kolmafia69.itemAmount)($item`crayon shavings`) > 0) {
        (0, import_kolmafia69.setProperty)(
          "auto_combatHandlerThunderBird",
          ((0, import_kolmafia69.toInt)((0, import_kolmafia69.getProperty)("auto_combatHandlerThunderBird")) - 2).toString()
        );
        return `item ${$item`crayon shavings`}`;
      }
    } else {
      if (canUse$2($skill`Micrometeorite`)) {
        (0, import_kolmafia69.setProperty)(
          "auto_combatHandlerThunderBird",
          ((0, import_kolmafia69.toInt)((0, import_kolmafia69.getProperty)("auto_combatHandlerThunderBird")) - 1).toString()
        );
        return useSkill$2($skill`Micrometeorite`);
      }
      if (canUse$2($skill`Curse of Weaksauce`) && (0, import_kolmafia69.myMp)() >= 50 && auto_have_skill($skill`Itchy Curse Finger`)) {
        return useSkill$2($skill`Curse of Weaksauce`);
      }
      if (canUse$2($skill`Thunderstrike`) && (0, import_kolmafia69.myThunder)() >= 5) {
        return useSkill$2($skill`Thunderstrike`);
      }
      if (canUse$2($skill`Curse of Weaksauce`) && (0, import_kolmafia69.myMp)() >= 50) {
        return useSkill$2($skill`Curse of Weaksauce`);
      }
    }
    if ((0, import_kolmafia69.myThunder)() === 0 && (0, import_kolmafia69.toInt)((0, import_kolmafia69.getProperty)("auto_combatHandlerThunderBird")) > 0) {
      (0, import_kolmafia69.setProperty)("auto_combatHandlerThunderBird", 0 .toString());
    }
    if ((0, import_kolmafia69.toInt)((0, import_kolmafia69.getProperty)("auto_combatHandlerThunderBird")) > 0 && canUse$1($skill`Thunder Bird`, false)) {
      (0, import_kolmafia69.setProperty)(
        "auto_combatHandlerThunderBird",
        ((0, import_kolmafia69.toInt)((0, import_kolmafia69.getProperty)("auto_combatHandlerThunderBird")) - 1).toString()
      );
      return useSkill$1($skill`Thunder Bird`, false);
    }
  }
  return "";
}
function auto_combatHeavyRainsStage5(round_1, enemy, text) {
  if (enemy.toString() === "The Rain King") {
    if ((0, import_kolmafia69.getProperty)("auto_rain_king_combat") === "attack") {
      if (canUse$1($skill`Lunging Thrust-Smack`, false)) {
        return useSkill$1($skill`Lunging Thrust-Smack`, false);
      }
      if (canUse$1($skill`Thrust-Smack`, false)) {
        return useSkill$1($skill`Thrust-Smack`, false);
      }
      if (canUse$1($skill`Lunge Smack`, false)) {
        return useSkill$1($skill`Lunge Smack`, false);
      }
      return "attack with weapon";
    }
    if ((0, import_kolmafia69.getProperty)("auto_rain_king_combat") === "saucestorm" && canUse$1($skill`Saucestorm`, false)) {
      return useSkill$1($skill`Saucestorm`, false);
    }
    if ((0, import_kolmafia69.getProperty)("auto_rain_king_combat") === "weapon_of_the_pastalord" && canUse$1($skill`Weapon of the Pastalord`, false)) {
      return useSkill$1($skill`Weapon of the Pastalord`, false);
    }
    if ((0, import_kolmafia69.getProperty)("auto_rain_king_combat") === "turtleini" && canUse$1($skill`Turtleini`, false)) {
      return useSkill$1($skill`Turtleini`, false);
    }
    (0, import_kolmafia69.abort)("I am not sure how to finish this battle");
  }
  if (enemy === $monster`storm cow` && auto_have_skill($skill`Unleash the Greash`)) {
    return useSkill$1($skill`Unleash the Greash`, false);
  }
  return "";
}

// src/autoscend/combat/auto_combat_kingdom_of_exploathing.ts
var import_kolmafia70 = require("kolmafia");
function auto_combatExploathingStage1(round_1, enemy, text) {
  if (enemy === $monster`the invader` && canUse$1($skill`Lunging Thrust-Smack`, false) && (0, import_kolmafia70.haveEquipped)($item`June cleaver`)) {
    return useSkill$1($skill`Lunging Thrust-Smack`, false);
  }
  if (enemy === $monster`the invader` && canUse$1($skill`Weapon of the Pastalord`, false)) {
    return useSkill$1($skill`Weapon of the Pastalord`, false);
  }
  if (enemy === $monster`skeleton astronaut`) {
    if ((0, import_kolmafia70.myDaycount)() === 1 && canUse$3($item`exploding cigar`, false)) {
      return useItem$1($item`exploding cigar`);
    }
    var dmg = 0;
    var _iterator = _createForOfIteratorHelper(
      $elements`hot, cold, sleaze, spooky, stench`
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var el = _step.value;
        dmg += (0, import_kolmafia70.toInt)((0, import_kolmafia70.min)(10, (0, import_kolmafia70.numericModifier)(`${el.toString()} Damage`)));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (dmg >= 10 && (0, import_kolmafia70.buffedHitStat)() >= 120 + (0, import_kolmafia70.monsterLevelAdjustment)()) {
      return "attack with weapon";
    } else if (canUse$1($skill`Saucestorm`, false)) {
      return useSkill$1($skill`Saucestorm`, false);
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_mr2012.ts
var import_kolmafia71 = require("kolmafia");
function auto_combat_nanorhinoBuff(round_1, enemy, text) {
  if ((0, import_kolmafia71.myFamiliar)() !== $familiar`Nanorhino` || combat_status_check("nanorhino_buffed")) {
    return "";
  }
  if ((0, import_kolmafia71.toInt)((0, import_kolmafia71.getProperty)("_nanorhinoCharge")) < 100) {
    return "";
  }
  var target = import_kolmafia71.Skill.none;
  var target_mark = false;
  switch ((0, import_kolmafia71.myPrimestat)()) {
    case $stat`Muscle`:
      if (target === import_kolmafia71.Skill.none && in_glover() && canUse$2($skill`Lunge Smack`) && canSurvive$1(4)) {
        target = $skill`Lunge Smack`;
      }
      if (target === import_kolmafia71.Skill.none && canUse$2($skill`Shell Up`)) {
        target = $skill`Shell Up`;
      }
      if (target === import_kolmafia71.Skill.none && stunnable(enemy) && canUse$2($skill`Club Foot`) && (0, import_kolmafia71.myClass)() === $class`Seal Clubber` && (0, import_kolmafia71.myMp)() > 25) {
        target = $skill`Club Foot`;
      }
      if (target === import_kolmafia71.Skill.none && canSurvive$1(4)) {
        var _iterator = _createForOfIteratorHelper($skills`Toss, Clobber, Lunge Smack, Thrust-Smack, Headbutt, Kneebutt, Lunging Thrust-Smack, Club Foot, Shieldbutt, Spirit Snap, Cavalcade of Fury, Northern Explosion, Spectral Snapper`), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var sk = _step.value;
            if (canUse$2(sk)) {
              target = sk;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      break;
    case $stat`Mysticality`:
      break;
    case $stat`Moxie`:
      if (target === import_kolmafia71.Skill.none && (0, import_kolmafia71.myClass)() === $class`Disco Bandit` && auto_have_skill($skill`Disco State of Mind`) && auto_have_skill($skill`Flashy Dancer`) && stunnable(enemy)) {
        var _iterator2 = _createForOfIteratorHelper($skills`Disco Dance of Doom, Disco Dance II: Electric Boogaloo, Disco Dance 3: Back in the Habit`), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _sk = _step2.value;
            if (canUse$2(_sk)) {
              target = _sk;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (target === import_kolmafia71.Skill.none && canUse$2($skill`Accordion Bash`)) {
        target = $skill`Accordion Bash`;
        target_mark = true;
      }
      if (!canSurvive$1(4)) {
        break;
      }
      if (target === import_kolmafia71.Skill.none && canUse$2($skill`Cadenza`)) {
        target = $skill`Cadenza`;
        target_mark = true;
      }
      if (target === import_kolmafia71.Skill.none) {
        var _iterator3 = _createForOfIteratorHelper($skills`Sing, Suckerpunch, Disco Eye-Poke, Dissonant Riff`), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _sk2 = _step3.value;
            if (canUse$2(_sk2)) {
              target = _sk2;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      break;
  }
  combat_status_add("nanorhino_buffed");
  if (target !== import_kolmafia71.Skill.none) {
    return useSkill$1(target, target_mark);
  }
  return "";
}

// src/autoscend/combat/auto_combat_pete.ts
var import_kolmafia72 = require("kolmafia");
function auto_combatPeteStage1(round_1, enemy, text) {
  if ((0, import_kolmafia72.myClass)() === $class`Avatar of Sneaky Pete` && canSurvive$1(3)) {
    var maxAudience = 30;
    if ($items`Sneaky Pete's leather jacket, Sneaky Pete's leather jacket (collar popped)`.includes(
      (0, import_kolmafia72.equippedItem)($slot`shirt`)
    )) {
      maxAudience = 50;
    }
    if (canUse$2($skill`Mug for the Audience`) && ((0, import_kolmafia72.myAudience)() < maxAudience || disregardInstantKarma())) {
      return useSkill$2($skill`Mug for the Audience`);
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_the_source.ts
var import_kolmafia73 = require("kolmafia");
function auto_combatTheSourceStage1(round_1, enemy, text) {
  if ($monsters`One Thousand Source Agents, Source Agent`.includes(enemy)) {
    if (auto_have_skill($skill`Data Siphon`)) {
      if ((0, import_kolmafia73.myMp)() < 50) {
        if (auto_have_skill($skill`Source Punch`) && (0, import_kolmafia73.myMp)() >= (0, import_kolmafia73.mpCost)($skill`Source Punch`)) {
          return useSkill$1($skill`Source Punch`, false);
        }
      } else if ((0, import_kolmafia73.myMp)() > 125) {
        if (canUse$2($skill`Reboot`) && ((0, import_kolmafia73.haveEffect)($effect`Latency`) > 0 || (0, import_kolmafia73.myHp)() * 2 < (0, import_kolmafia73.myMaxhp)())) {
          return useSkill$2($skill`Reboot`);
        }
        if (canUse$2($skill`Humiliating Hack`)) {
          return useSkill$2($skill`Humiliating Hack`);
        }
        if (canUse$2($skill`Disarmament`)) {
          return useSkill$2($skill`Disarmament`);
        }
        if (canUse$2($skill`Big Guns`) && (0, import_kolmafia73.myHp)() < 100) {
          return useSkill$2($skill`Big Guns`);
        }
      } else if ((0, import_kolmafia73.myMp)() > 100) {
        if (canUse$2($skill`Humiliating Hack`)) {
          return useSkill$2($skill`Humiliating Hack`);
        }
        if (canUse$2($skill`Disarmament`)) {
          return useSkill$2($skill`Disarmament`);
        }
      }
      if (canUse$1($skill`Source Kick`, false)) {
        return useSkill$1($skill`Source Kick`, false);
      }
    }
    if (canUse$2($skill`Big Guns`)) {
      return useSkill$2($skill`Big Guns`);
    }
    if (canUse$1($skill`Source Punch`, false)) {
      return useSkill$1($skill`Source Punch`, false);
    }
    return "runaway";
  }
  return "";
}
function auto_combatTheSourceStage4(round_1, enemy, text) {
  if (canUse$2($skill`Portscan`) && (0, import_kolmafia73.myLocation)().turnsSpent < 8 && (0, import_kolmafia73.toInt)((0, import_kolmafia73.getProperty)("_sourceTerminalPortscanUses")) < 3 && !(0, import_kolmafia73.toBoolean)((0, import_kolmafia73.getProperty)("_portscanPending"))) {
    if ($locations`The Castle in the Clouds in the Sky (Ground Floor), The Haunted Bathroom, The Haunted Gallery`.includes(
      (0, import_kolmafia73.myLocation)()
    )) {
      (0, import_kolmafia73.setProperty)("_portscanPending", true.toString());
      return useSkill$2($skill`Portscan`);
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_wereprofessor.ts
var import_kolmafia74 = require("kolmafia");
function auto_combatWereProfessorStage1(round_1, enemy, text) {
  if (!in_wereprof()) {
    return "";
  }
  if (is_professor()) {
    (0, import_kolmafia74.setProperty)("auto_skipStage3", true.toString());
  }
  if (enemy === $monster`wall of bones`) {
    if (canUse$2($skill`Slaughter`) && (0, import_kolmafia74.haveEffect)($effect`Everything Looks Red`) === 0) {
      return useSkill$2($skill`Slaughter`);
    }
  }
  return "";
}
function auto_combatWereProfessorStage4(round_1, enemy, text) {
  if (!in_wereprof()) {
    return "";
  }
  var _iterator = _createForOfIteratorHelper(
    (0, import_kolmafia74.splitString)(
      (0, import_kolmafia74.getProperty)("wereProfessorAdvancedResearch"),
      ","
    )
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var str = _step.value;
      if ((0, import_kolmafia74.toInt)(str) == enemy.id) {
        return "";
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (is_professor() && wereprof_oculus() && !haveUsed((0, import_kolmafia74.toSkill)(7512))) {
    markAsUsed((0, import_kolmafia74.toSkill)(7512));
    return (0, import_kolmafia74.toSkill)(7512).toString();
  }
  return "";
}
function auto_combatWereProfessorStage5(round_1, enemy, text) {
  if (!in_wereprof()) {
    return "";
  }
  var enemy_physical_immune = enemy.physicalResistance > 99;
  var enemy_physical_res = 1 - enemy.physicalResistance * 0.01;
  var dmg = 0;
  if (is_werewolf()) {
    if (enemy_physical_immune && canUse$1($skill`Bite`, true)) {
      return useSkill$1($skill`Bite`, true);
    } else if ((0, import_kolmafia74.haveEquipped)($item`Everfull Dart Holster`) && (0, import_kolmafia74.toInt)((0, import_kolmafia74.getProperty)("_dartsLeft")) > 0) {
      return useSkill$2(dartSkill());
    }
    if (!enemy_physical_immune && canUse$1($skill`Rend`, false)) {
      return useSkill$1($skill`Rend`, true);
    }
    return "attack with weapon";
  }
  if (is_professor()) {
    if ((0, import_kolmafia74.haveEquipped)($item`Everfull Dart Holster`) && (0, import_kolmafia74.toInt)((0, import_kolmafia74.getProperty)("_dartsLeft")) > 0) {
      return useSkill$2(dartSkill());
    } else if (auto_haveCosmicBowlingBall() && canUse$4($item`cosmic bowling ball`) && !enemy_physical_immune && (0, import_kolmafia74.monsterHp)() < 100) {
      return useItem$1($item`cosmic bowling ball`);
    } else {
      return "runaway";
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_wildfire.ts
var import_kolmafia75 = require("kolmafia");
function auto_combatWildfireStage1(round_1, enemy, text) {
  if (!in_wildfire()) {
    return "";
  }
  if ($monsters`Groar\, Except Hot, The Man on Fire, The Big Ignatowicz`.includes(
    enemy
  )) {
    if ((0, import_kolmafia75.haveEquipped)($item`industrial fire extinguisher`) && canUse$2($skill`Curse of Weaksauce`) && (0, import_kolmafia75.haveSkill)($skill`Itchy Curse Finger`) && (0, import_kolmafia75.myClass)() === $class`Sauceror`) {
      return useSkill$2($skill`Curse of Weaksauce`);
    }
    if (canUse$2($skill`Stuffed Mortar Shell`)) {
      return useSkill$2($skill`Stuffed Mortar Shell`);
    }
    if ($elements`sleaze, stench`.includes(currentFlavour()) && canUse$2($skill`Weapon of the Pastalord`)) {
      return useSkill$1($skill`Weapon of the Pastalord`, false);
    }
    if (canUse$1($skill`Saucegeyser`, false)) {
      return useSkill$1($skill`Saucegeyser`, false);
    }
    (0, import_kolmafia75.abort)(`We do not know what to do next against [${enemy}].`);
  }
  if ($monster`wall of meat` === enemy) {
    if (canUse$2($skill`Stuffed Mortar Shell`)) {
      return useSkill$2($skill`Stuffed Mortar Shell`);
    }
    if (canUse$2($skill`Weapon of the Pastalord`) && (0, import_kolmafia75.mpCost)($skill`Weapon of the Pastalord`) < (0, import_kolmafia75.mpCost)($skill`Saucegeyser`)) {
      return useSkill$1($skill`Weapon of the Pastalord`, false);
    }
    if (canUse$1($skill`Saucegeyser`, false)) {
      return useSkill$1($skill`Saucegeyser`, false);
    }
    (0, import_kolmafia75.abort)(`We do not know what to do next against [${enemy}].`);
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage1.ts
function auto_combatDefaultStage1(round_1, enemy, text) {
  var retval = "";
  retval = auto_combatHeavyRainsStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatTheSourceStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatExploathingStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatPeteStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatBHYStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatDisguisesStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatWildfireStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatFallOfTheDinosaursStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatWereProfessorStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  if (in_avantGuard() && ag_is_bodyguard() && (0, import_kolmafia76.itemAmount)($item`waffle`) > 0 && (0, import_kolmafia76.myLocation)() === $location`The Themthar Hills` && enemy !== $monster`dirty thieving brigand`) {
    handleTracker$1(
      enemy.toString(),
      $item`waffle`.toString(),
      "auto_replaces"
    );
    return useItems$1($item`waffle`, import_kolmafia76.Item.none);
  }
  if (enemy === $monster`Your Shadow`) {
    if (in_amw() && canUse$1($skill`Chew the Fat`, false)) {
      return useSkill$1($skill`Chew the Fat`, false);
    }
    if (in_plumber()) {
      if ((0, import_kolmafia76.itemAmount)($item`super deluxe mushroom`) > 0) {
        return `item ${$item`super deluxe mushroom`}`;
      }
      (0, import_kolmafia76.abort)(
        "Oh no, I don't have any super deluxe mushrooms to deal with this shadow plumber :("
      );
    }
    var ambi = auto_have_skill($skill`Ambidextrous Funkslinging`);
    var hand_1 = import_kolmafia76.Item.none;
    var hand_2 = import_kolmafia76.Item.none;
    var icup = $item`Rain-Doh indigo cup`;
    if (canUse$4(icup)) {
      if ((0, import_kolmafia76.myMaxhp)() > 500 && hand_1 === import_kolmafia76.Item.none) {
        markAsUsed$1(icup);
        hand_1 = icup;
      } else if (ambi && (0, import_kolmafia76.myMaxhp)() > 250 && hand_1 === import_kolmafia76.Item.none) {
        markAsUsed$1(icup);
        hand_1 = icup;
      }
    }
    var _iterator = _createForOfIteratorHelper($items`gauze garter, filthy poultice, red pixel potion`), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var it = _step.value;
        if (hand_1 === import_kolmafia76.Item.none && (0, import_kolmafia76.itemAmount)(it) > 0) {
          hand_1 = it;
        }
        if (hand_2 === import_kolmafia76.Item.none) {
          if ((0, import_kolmafia76.itemAmount)(it) > 1) {
            hand_2 = it;
          } else if ((0, import_kolmafia76.itemAmount)(it) > 0 && hand_1 !== it) {
            hand_2 = it;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (ambi && hand_1 !== import_kolmafia76.Item.none && hand_2 !== import_kolmafia76.Item.none) {
      return `item ${hand_1}, ${hand_2}`;
    }
    if (hand_1 !== import_kolmafia76.Item.none) {
      return `item ${hand_1}`;
    }
    if ((0, import_kolmafia76.itemAmount)($item`scented massage oil`) === 0) {
      (0, import_kolmafia76.abort)("Uh oh, I ran out of healing items to use against your shadow");
    } else {
      (0, import_kolmafia76.abort)(
        "Uh oh, I ran out of simple healing items to use against your shadow. You could win manually with Scented Massage oil though."
      );
    }
  }
  if (enemy === $monster`wall of meat`) {
    if (canUse$2($skill`Make it Rain`)) {
      return useSkill$2($skill`Make it Rain`);
    }
  }
  if (enemy === $monster`wall of skin`) {
    if ((0, import_kolmafia76.itemAmount)($item`beehive`) > 0) {
      return `item ${$item`beehive`}`;
    }
    if (canUse$2($skill`Shell Up`) && round_1 >= 3) {
      return useSkill$2($skill`Shell Up`);
    }
    if (canUse$2($skill`Sauceshell`) && round_1 >= 4) {
      return useSkill$2($skill`Sauceshell`);
    }
    if (canUse$1($skill`Belch The Rainbow`, false)) {
      return useSkill$1($skill`Belch The Rainbow`, false);
    }
    if (canUse$1($skill`Kneebutt`, false)) {
      return useSkill$1($skill`Kneebutt`, false);
    }
    if (canUse$1($skill`Headbutt`, false)) {
      return useSkill$1($skill`Headbutt`, false);
    }
    return "attack with weapon";
  }
  if (enemy === $monster`wall of bones`) {
    if ((0, import_kolmafia76.itemAmount)($item`electric boning knife`) > 0) {
      return `item ${$item`electric boning knife`}`;
    }
    if ((0, import_kolmafia76.myHp)() * 4 < (0, import_kolmafia76.myMaxhp)() && (0, import_kolmafia76.haveEffect)($effect`Takin' It Greasy`) > 0) {
      return useSkill$1($skill`Unleash the Greash`, false);
    }
    if (canUse$1($skill`Surprisingly Sweet Slash`, true) && auto_remainingCandyCaneSlashes() > 0) {
      return useSkill$1($skill`Surprisingly Sweet Slash`, true);
    }
    if (canUse$1($skill`Garbage Nova`, false)) {
      return useSkill$1($skill`Garbage Nova`, false);
    }
    if (canUse$1($skill`Saucegeyser`, false)) {
      return useSkill$2($skill`Saucegeyser`);
    }
  }
  retval = auto_combat_nanorhinoBuff(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  var ableToPickpocket = $classes`Accordion Thief, Avatar of Sneaky Pete, Disco Bandit, Gelatinous Noob`.includes(
    (0, import_kolmafia76.myClass)()
  ) || (0, import_kolmafia76.haveEffect)($effect`Riboflavin'`) > 0 || amw_wanttoPP(enemy);
  if (!combat_status_check("pickpocket") && ableToPickpocket && (0, import_kolmafia76.containsText)(text, 'value="Pick') && canSurvive$1(4)) {
    var tryIt = false;
    var _iterator2 = _createForOfIteratorHelper(
      (0, import_kolmafia76.itemDropsArray)(enemy).entries()
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2), i = _step2$value[0], drop = _step2$value[1];
        if (drop.type === "0") {
          tryIt = true;
        }
        if (drop.rate > 0 && drop.type !== "n" && drop.type !== "c" && drop.type !== "b") {
          tryIt = true;
        }
        if (tryIt) {
          if (auto_have_skill($skill`Sticky Fingers`) && canSurvive$1(8)) {
          } else if (drop.type !== "p" && effectiveDropChance(drop.drop, (0, import_kolmafia76.toFloat)(drop.rate)) >= 100) {
            tryIt = false;
          }
          if (tryIt) {
            break;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (tryIt) {
      combat_status_add("pickpocket");
      var attemptSteal = (0, import_kolmafia76.steal)();
      return "pickpocket";
    }
  }
  if (auto_canCircadianRhythm() && (auto_circadianRhythmTarget(enemy) || auto_circadianRhythmTarget$1((0, import_kolmafia76.monsterPhylum)(enemy))) && canUse$2($skill`Recall Facts: %phylum Circadian Rhythms`) && !ag_is_bodyguard()) {
    handleTracker$1(
      $skill`Recall Facts: %phylum Circadian Rhythms`.toString(),
      (0, import_kolmafia76.monsterPhylum)(enemy).toString(),
      "auto_otherstuff"
    );
    return useSkill$2($skill`Recall Facts: %phylum Circadian Rhythms`);
  }
  if (auto_canHabitat() && auto_habitatTarget(enemy) && canUse$2($skill`Recall Facts: Monster Habitats`) && !ag_is_bodyguard()) {
    handleTracker$1(
      $skill`Recall Facts: Monster Habitats`.toString(),
      enemy.toString(),
      "auto_copies"
    );
    return useSkill$2($skill`Recall Facts: Monster Habitats`);
  }
  if (auto_canRWBBlast() && auto_RWBBlastTarget(enemy) && canUse$2($skill`%fn\, fire a Red\, White and Blue Blast`)) {
    handleTracker$1(
      $skill`%fn\, fire a Red\, White and Blue Blast`.toString(),
      enemy.toString(),
      "auto_copies"
    );
    return useSkill$2($skill`%fn\, fire a Red\, White and Blue Blast`);
  }
  var backedUpMonster = (0, import_kolmafia76.toMonster)(
    (0, import_kolmafia76.getProperty)("lastCopyableMonster")
  );
  var reserveAdvsForFreeFights = (0, import_kolmafia76.myAdventures)() < 3 && !isFreeMonster(backedUpMonster);
  if (auto_backupTarget() && enemy !== backedUpMonster && canUse$2($skill`Back-Up to your Last Enemy`) && !reserveAdvsForFreeFights) {
    handleTracker$1(
      enemy.toString(),
      $skill`Back-Up to your Last Enemy`.toString(),
      "auto_replaces"
    );
    handleTracker$1(
      backedUpMonster.toString(),
      $skill`Back-Up to your Last Enemy`.toString(),
      "auto_copies"
    );
    return useSkill$2($skill`Back-Up to your Last Enemy`);
  }
  if ($monsters`pygmy bowler, bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, red butler`.includes(
    enemy
  ) && canUse$2($skill`%fn\, spit on them!`)) {
    handleTracker$1(
      $skill`%fn\, spit on them!`.toString(),
      enemy.toString(),
      "auto_otherstuff"
    );
    return useSkill$1($skill`%fn\, spit on them!`, true);
  }
  if (canUse$2($skill`%fn\, let's pledge allegiance to a Zone`)) {
    auto_getCitizenZone((0, import_kolmafia76.myLocation)(), true);
    return useSkill$1($skill`%fn\, let's pledge allegiance to a Zone`, true);
  }
  if (canUse$2($skill`Duplicate`) && (0, import_kolmafia76.toInt)((0, import_kolmafia76.getProperty)("_sourceTerminalDuplicateUses")) === 0 && !inAftercore() && !in_nuclear()) {
    if ($monsters`dairy goat`.includes(enemy)) {
      return useSkill$2($skill`Duplicate`);
    }
  }
  if (auto_talkToSomeFish((0, import_kolmafia76.myLocation)(), enemy) && auto_have_skill($skill`Sea *dent: Talk to Some Fish`)) {
    handleTracker$1(
      enemy.toString(),
      $skill`Sea *dent: Talk to Some Fish`.toString(),
      "auto_otherstuff"
    );
    return useSkill$2($skill`Sea *dent: Talk to Some Fish`);
  }
  if ((0, import_kolmafia76.haveEffect)($effect`Temporary Amnesia`) > 0) {
    return "attack with weapon";
  }
  if ((0, import_kolmafia76.haveEquipped)($item`Drunkula's wineglass`)) {
    return "attack with weapon";
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage2.ts
var import_kolmafia78 = require("kolmafia");

// src/autoscend/combat/auto_combat_dark_gyffte.ts
var import_kolmafia77 = require("kolmafia");
function auto_combatDarkGyffteStage2(round_1, enemy, text) {
  if (bat_shouldEnsorcel(enemy) && canUse$2($skill`Ensorcel`) && (0, import_kolmafia77.toInt)((0, import_kolmafia77.getProperty)("auto_bat_ensorcels")) < 3) {
    (0, import_kolmafia77.setProperty)(
      "auto_bat_ensorcels",
      ((0, import_kolmafia77.toInt)((0, import_kolmafia77.getProperty)("auto_bat_ensorcels")) + 1).toString()
    );
    handleTracker$1(
      enemy.toString(),
      $skill`Ensorcel`.toString(),
      "auto_otherstuff"
    );
    return useSkill$2($skill`Ensorcel`);
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage2.ts
function auto_combatDefaultStage2(round_1, enemy, text) {
  var retval = "";
  if ((0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("auto_skipStage2"))) {
    return "";
  }
  var guardee = import_kolmafia78.Monster.none;
  if (in_avantGuard() && ag_is_bodyguard()) {
    guardee = (0, import_kolmafia78.toMonster)(
      (0, import_kolmafia78.substring)(
        (0, import_kolmafia78.getProperty)("lastEncounter"),
        (0, import_kolmafia78.indexOf)(
          (0, import_kolmafia78.getProperty)("lastEncounter"),
          " acting as the bodyguard to a "
        ) + 30
      )
    );
  }
  if (auto_wantToSniff(enemy, (0, import_kolmafia78.myLocation)()) && getSniffer$1(enemy) !== import_kolmafia78.Skill.none && !ag_is_bodyguard()) {
    auto_log_debug$1(
      `Skipping stage 2 of combat for now as we intend to olfact [${enemy}]`
    );
    return "";
  }
  if ((0, import_kolmafia78.myLocation)() === $location`The Daily Dungeon` && (0, import_kolmafia78.itemAmount)($item`daily dungeon malware`) > 0 && auto_is_valid($item`daily dungeon malware`) && towerKeyCount$1(false) < 2 && !(0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("_dailyDungeonMalwareUsed"))) {
    auto_log_debug$1(
      "Skipping stage 2 of combat for now as we intend to use Daily Dungeon Malware"
    );
    return "";
  }
  retval = auto_combatDarkGyffteStage2(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  if (auto_bczRefractedGaze() && !combat_status_check("droptablereplaced") && auto_have_skill($skill`BCZ: Refracted Gaze`)) {
    handleTracker$1(
      enemy.toString(),
      $skill`BCZ: Refracted Gaze`.toString(),
      "auto_otherstuff"
    );
    combat_status_add("droptablereplaced");
    return useSkill$2($skill`BCZ: Refracted Gaze`);
  }
  var extinguisherSkill = auto_FireExtinguisherCombatString((0, import_kolmafia78.myLocation)());
  if (extinguisherSkill !== "" && (0, import_kolmafia78.haveEquipped)(wrap_item($item`industrial fire extinguisher`)) && enemy !== $monster`screambat`) {
    handleTracker$1(
      enemy.toString(),
      (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(extinguisherSkill, 6)).toString(),
      "auto_otherstuff"
    );
    return extinguisherSkill;
  }
  if (canUse$3($item`glark cable`, true) && (0, import_kolmafia78.myLocation)() === $location`The Red Zeppelin` && (0, import_kolmafia78.getProperty)("questL11Ron") === "step3" && (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("_glarkCableUses")) < 5) {
    if ($monsters`man with the red buttons, red butler, Red Fox, red skeleton`.includes(
      enemy
    )) {
      handleTracker$1(
        enemy.toString(),
        $item`glark cable`.toString(),
        "auto_instakill"
      );
      return useItem$1($item`glark cable`);
    }
  }
  if (canUse$4($item`cigarette lighter`) && (0, import_kolmafia78.myLocation)() === $location`A Mob of Zeppelin Protesters` && (0, import_kolmafia78.getProperty)("questL11Ron") === "step1") {
    handleTracker$1(
      enemy.toString(),
      $item`cigarette lighter`.toString(),
      "auto_instakill"
    );
    return useItems$1($item`cigarette lighter`, import_kolmafia78.Item.none);
  }
  if ((0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("auto_usePowerPill")) && (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("_powerPillUses")) < 20 && instakillable(enemy)) {
    if ((0, import_kolmafia78.itemAmount)($item`power pill`) > 0) {
      handleTracker$1(
        enemy.toString(),
        $item`power pill`.toString(),
        "auto_instakill"
      );
      return `item ${$item`power pill`}`;
    }
  }
  if ((0, import_kolmafia78.myFamiliar)() === $familiar`Pair of Stomping Boots` && (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("_bootStomps")) < 7 && instakillable(enemy) && (0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("bootsCharged"))) {
    if (!$monsters`dairy goat, lobsterfrogman`.includes(enemy) && !careAboutDrops(enemy) && !$locations`The Laugh Floor, Infernal Rackets Backstage`.includes(
      (0, import_kolmafia78.myLocation)()
    ) && canUse$2($skill`Release the Boots`)) {
      return useSkill$2($skill`Release the Boots`);
    }
  }
  if (enemy === $monster`tomb rat king` && (0, import_kolmafia78.itemAmount)($item`crumbling wooden wheel`) + (0, import_kolmafia78.itemAmount)($item`tomb ratchet`) < 10 && canUse$2($skill`Do an epic McTwist!`) && !(0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("_epicMcTwistUsed"))) {
    handleTracker$1(
      enemy.toString(),
      $skill`Do an epic McTwist!`.toString(),
      "auto_otherstuff"
    );
    return useSkill$2($skill`Do an epic McTwist!`);
  }
  if (enemy === $monster`mountain man` && (0, import_kolmafia78.myDaycount)() === 1 && !auto_turbo() && canUse$2($skill`Do an epic McTwist!`) && !(0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("_epicMcTwistUsed"))) {
    handleTracker$1(
      enemy.toString(),
      $skill`Do an epic McTwist!`.toString(),
      "auto_otherstuff"
    );
    return useSkill$2($skill`Do an epic McTwist!`);
  }
  if (auto_wantToShrunkenHead(enemy)) {
    handleTracker$1(
      enemy.toString(),
      $skill`Prepare to reanimate your Foe`.toString(),
      "auto_otherstuff"
    );
    return useSkill$2($skill`Prepare to reanimate your Foe`);
  }
  var douse = $skill`Douse Foe`;
  var isDouseTarget = wantToDouse(enemy) && round_1 < maxRoundsToDouse(enemy) - 1;
  var douseAvailable = canUse$1(douse, false) && auto_dousesRemaining() > 0;
  var willDouse = isDouseTarget && douseAvailable;
  var swoopAvailable = canUse$1($skill`Swoop like a Bat`, true) && (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("_batWingsSwoopUsed")) < 11;
  var willSwoop = auto_swoopLocations().has((0, import_kolmafia78.myLocation)()) && swoopAvailable;
  if ((!combat_status_check("yellowray") && auto_wantToYellowRay(enemy, (0, import_kolmafia78.myLocation)()) || combat_status_check("droptablereplaced")) && !willDouse && !willSwoop) {
    var combatAction = yellowRayCombatString(
      enemy,
      true,
      $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
        enemy
      )
    );
    if (combatAction !== "") {
      combat_status_add("yellowray");
      if ((0, import_kolmafia78.indexOf)(combatAction, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(combatAction, 6)).toString(),
          "auto_yellowRays"
        );
      } else if ((0, import_kolmafia78.indexOf)(combatAction, "item") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(combatAction, 5)).toString(),
          "auto_yellowRays"
        );
      } else {
        auto_log_warning(
          `Unable to track yellow ray behavior: ${combatAction}`,
          "red"
        );
      }
      if (combatAction === useSkill$1($skill`Asdon Martin: Missile Launcher`, false)) {
        (0, import_kolmafia78.setProperty)("_missileLauncherUsed", true.toString());
      }
      return combatAction;
    } else {
      auto_log_warning("Wanted a yellow ray but we can not find one.", "red");
    }
  }
  if ((0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("auto_useCleesh"))) {
    if (canUse$2($skill`CLEESH`)) {
      (0, import_kolmafia78.setProperty)("auto_useCleesh", false.toString());
      return useSkill$2($skill`CLEESH`);
    }
  }
  if (wantToClubEmBackInTime((0, import_kolmafia78.myLocation)(), enemy)) {
    if (canUse$2($skill`Club 'Em Back in Time`)) {
      handleTracker$1(
        enemy.toString(),
        $skill`Club 'Em Back in Time`.toString(),
        "auto_instakill"
      );
      return useSkill$2($skill`Club 'Em Back in Time`);
    }
  }
  if (wantToThrowGravel((0, import_kolmafia78.myLocation)(), enemy)) {
    handleTracker$1(
      enemy.toString(),
      $item`groveling gravel`.toString(),
      "auto_instakill"
    );
    return useItem$1($item`groveling gravel`);
  }
  if (!combat_status_check("banishercheck") && !combat_status_check("droptablereplaced") && auto_wantToBanish(enemy, (0, import_kolmafia78.myLocation)())) {
    var freeRunAction = freeRunCombatStringPreBanish(
      enemy,
      (0, import_kolmafia78.myLocation)(),
      true
    );
    if (freeRunAction !== "") {
      if ((0, import_kolmafia78.indexOf)(freeRunAction, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(freeRunAction, 6)).toString(),
          "auto_freeruns"
        );
      } else if ((0, import_kolmafia78.indexOf)(freeRunAction, "item") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(freeRunAction, 5)).toString(),
          "auto_freeruns"
        );
      } else {
        auto_log_warning(
          `Unable to track runaway behavior: ${freeRunAction}`,
          "red"
        );
      }
      return freeRunAction;
    }
  }
  if (!combat_status_check("banishercheck") && !combat_status_check("phylumbanishercheck") && !combat_status_check("droptablereplaced") && auto_wantToBanish$1((0, import_kolmafia78.monsterPhylum)(enemy), (0, import_kolmafia78.myLocation)()) && auto_habitatMonster() !== enemy) {
    var banishAction = banisherCombatString(
      (0, import_kolmafia78.monsterPhylum)(enemy),
      (0, import_kolmafia78.myLocation)(),
      true
    );
    if (banishAction !== "") {
      auto_log_info(`Looking at banishAction: ${banishAction}`, "green");
      combat_status_add("banisher");
      if ((0, import_kolmafia78.indexOf)(banishAction, "skill") === 0) {
        handleTracker$2(
          (0, import_kolmafia78.monsterPhylum)(enemy).toString(),
          (0, import_kolmafia78.myLocation)().toString(),
          (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(banishAction, 6)).toString(),
          "auto_banishes"
        );
      } else if ((0, import_kolmafia78.indexOf)(banishAction, "item") === 0) {
        handleTracker$2(
          (0, import_kolmafia78.monsterPhylum)(enemy).toString(),
          (0, import_kolmafia78.myLocation)().toString(),
          (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(banishAction, 5)).toString(),
          "auto_banishes"
        );
      } else {
        auto_log_warning(
          `Unable to track banisher behavior: ${banishAction}`,
          "red"
        );
      }
      return banishAction;
    }
    combat_status_add("phylumbanishercheck");
  }
  if (!combat_status_check("banishercheck") && !combat_status_check("droptablereplaced") && auto_wantToBanish(guardee, (0, import_kolmafia78.myLocation)())) {
    var _freeRunAction = freeRunCombatStringPreBanish(
      enemy,
      (0, import_kolmafia78.myLocation)(),
      true
    );
    if (_freeRunAction !== "") {
      if ((0, import_kolmafia78.indexOf)(_freeRunAction, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(_freeRunAction, 6)).toString(),
          "auto_freeruns"
        );
      } else if ((0, import_kolmafia78.indexOf)(_freeRunAction, "item") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_freeRunAction, 5)).toString(),
          "auto_freeruns"
        );
      } else {
        auto_log_warning(
          `Unable to track runaway behavior: ${_freeRunAction}`,
          "red"
        );
      }
      return _freeRunAction;
    }
  }
  if (!combat_status_check("banishercheck") && !combat_status_check("phylumbanishercheck") && !combat_status_check("droptablereplaced") && auto_wantToBanish(enemy, (0, import_kolmafia78.myLocation)()) && !ag_is_bodyguard()) {
    var _banishAction = banisherCombatString$1(
      enemy,
      (0, import_kolmafia78.myLocation)(),
      true
    );
    if (_banishAction !== "") {
      auto_log_info(`Looking at banishAction: ${_banishAction}`, "green");
      combat_status_add("banisher");
      if ((0, import_kolmafia78.indexOf)(_banishAction, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(_banishAction, 6)).toString(),
          "auto_banishes"
        );
      } else if ((0, import_kolmafia78.indexOf)(_banishAction, "item") === 0) {
        if ((0, import_kolmafia78.containsText)(_banishAction, ", none")) {
          var commapos = (0, import_kolmafia78.indexOf)(_banishAction, ", none");
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_banishAction, 5, commapos)).toString(),
            "auto_banishes"
          );
        } else {
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_banishAction, 5)).toString(),
            "auto_banishes"
          );
        }
      } else {
        auto_log_warning(
          `Unable to track banisher behavior: ${_banishAction}`,
          "red"
        );
      }
      return _banishAction;
    }
    combat_status_add("banishercheck");
  }
  if (!combat_status_check("freeruncheck") && !combat_status_check("droptablereplaced") && (auto_wantToFreeRun(enemy, (0, import_kolmafia78.myLocation)()) || auto_forceFreeRun(true) || auto_wantToBanish(enemy, (0, import_kolmafia78.myLocation)()) || auto_wantToBanish$1((0, import_kolmafia78.monsterPhylum)(enemy), (0, import_kolmafia78.myLocation)()) && auto_habitatMonster() !== enemy || auto_wantToFreeRun(guardee, (0, import_kolmafia78.myLocation)()) || auto_wantToBanish(guardee, (0, import_kolmafia78.myLocation)()))) {
    var _freeRunAction2 = freeRunCombatString(enemy, (0, import_kolmafia78.myLocation)(), true);
    if (_freeRunAction2 !== "") {
      if ((0, import_kolmafia78.indexOf)(_freeRunAction2, "runaway familiar") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toFamiliar)((0, import_kolmafia78.substring)(_freeRunAction2, 17)).toString(),
          "auto_freeruns"
        );
        _freeRunAction2 = "runaway";
      } else if ((0, import_kolmafia78.indexOf)(_freeRunAction2, "runaway item") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_freeRunAction2, 13)).toString(),
          "auto_freeruns"
        );
        _freeRunAction2 = "runaway";
      } else if ((0, import_kolmafia78.indexOf)(_freeRunAction2, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(_freeRunAction2, 6)).toString(),
          "auto_freeruns"
        );
      } else if ((0, import_kolmafia78.indexOf)(_freeRunAction2, "item") === 0) {
        if ((0, import_kolmafia78.containsText)(_freeRunAction2, ", none")) {
          var _commapos = (0, import_kolmafia78.indexOf)(_freeRunAction2, ", none");
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_freeRunAction2, 5, _commapos)).toString(),
            "auto_freeruns"
          );
        } else {
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_freeRunAction2, 5)).toString(),
            "auto_freeruns"
          );
        }
      } else {
        auto_log_warning(
          `Unable to track runaway behavior: ${_freeRunAction2}`,
          "red"
        );
      }
      return _freeRunAction2;
    }
    combat_status_add("freeruncheck");
  }
  if (!combat_status_check("replacercheck") && !combat_status_check("droptablereplaced") && auto_wantToReplace(enemy, (0, import_kolmafia78.myLocation)())) {
    var _combatAction = replaceMonsterCombatString(enemy, true);
    if (_combatAction !== "") {
      combat_status_add("replacer");
      if ((0, import_kolmafia78.indexOf)(_combatAction, "skill") === 0) {
        if ((0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(_combatAction, 6)) === $skill`CHEAT CODE: Replace Enemy`) {
          handleTracker(
            $skill`CHEAT CODE: Replace Enemy`.toString(),
            "auto_powerfulglove"
          );
        }
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia78.toSkill)((0, import_kolmafia78.substring)(_combatAction, 6)).toString(),
          "auto_replaces"
        );
      } else if ((0, import_kolmafia78.indexOf)(_combatAction, "item") === 0) {
        if ((0, import_kolmafia78.containsText)(_combatAction, ", none")) {
          var _commapos2 = (0, import_kolmafia78.indexOf)(_combatAction, ", none");
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_combatAction, 5, _commapos2)).toString(),
            "auto_replaces"
          );
        } else {
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia78.toItem)((0, import_kolmafia78.substring)(_combatAction, 5)).toString(),
            "auto_replaces"
          );
        }
      } else {
        auto_log_warning(
          `Unable to track replacer behavior: ${_combatAction}`,
          "red"
        );
      }
      return _combatAction;
    } else {
      auto_log_warning("Wanted a replacer but we can not find one.", "red");
    }
    combat_status_add("replacercheck");
  }
  if (enemy === $monster`tomb rat` && (0, import_kolmafia78.itemAmount)($item`tangle of rat tails`) > 0 && (0, import_kolmafia78.itemAmount)($item`tomb ratchet`) + (0, import_kolmafia78.itemAmount)($item`crumbling wooden wheel`) < 10 && $location`The Middle Chamber`.fireLevel < 3) {
    var res = `item ${$item`tangle of rat tails`}`;
    if (auto_have_skill($skill`Ambidextrous Funkslinging`)) {
      res += ", none";
    }
    return res;
  }
  if (in_bugbear()) {
    if (enemy === $monster`bugbear scientist` && (0, import_kolmafia78.itemAmount)($item`quantum nanopolymer spider web`) > 0) {
      return `item ${$item`quantum nanopolymer spider web`}`;
    }
    if (enemy === $monster`liquid metal bugbear` && (0, import_kolmafia78.itemAmount)($item`drone self-destruct chip`) > 0) {
      return `item ${$item`drone self-destruct chip`}`;
    }
  }
  var couldInstaKill = true;
  if ($monsters`smut orc pipelayer, smut orc jacker, smut orc screwer, smut orc nailer`.includes(
    enemy
  ) && (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("chasmBridgeProgress")) < bridgeGoal()) {
    if ((0, import_kolmafia78.myAdventures)() > 6) {
      couldInstaKill = false;
    }
  } else if ($monsters`lobsterfrogman`.includes(enemy)) {
    if (auto_have_skill($skill`Digitize`) && (0, import_kolmafia78.getProperty)("_sourceTerminalDigitizeMonster") !== enemy.toString()) {
      couldInstaKill = false;
    }
  } else if ($monsters`Racecar Bob, Bob Racecar`.includes(enemy) && (0, import_kolmafia78.itemAmount)($item`photograph of a dog`) === 0 && internalQuestStatus("questL11Palindome") < 2) {
    couldInstaKill = false;
  } else if (wantToForceDrop(enemy)) {
    couldInstaKill = false;
  } else if ($monsters`dirty thieving brigand`.includes(enemy)) {
    couldInstaKill = false;
  }
  if (instakillable(enemy) && !isFreeMonster$1(enemy, (0, import_kolmafia78.myLocation)()) && couldInstaKill) {
    var wantFreeKillNowEspecially = false;
    var waitForDesert = false;
    if ((0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("desertExploration")) < 100 && !isActuallyEd()) {
      var currentDesertProgressPerTurn = 1 + ((0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("bondDesert")) ? 2 : 0) + ((0, import_kolmafia78.getProperty)("peteMotorbikeHeadlight") === "Blacklight Bulb" ? 2 : 0) + ((0, import_kolmafia78.myFamiliar)() === $familiar`Melodramedary` ? 1 : 0) + 2 * (0, import_kolmafia78.min)(1, (0, import_kolmafia78.equippedAmount)($item`survival knife`)) + (0, import_kolmafia78.equippedAmount)($item`UV-resistant compass`) + 2 * (0, import_kolmafia78.equippedAmount)($item`ornate dowsing rod`);
      var fightsLeftToExplore = (0, import_kolmafia78.ceil)(
        (100 - (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("desertExploration"))) / currentDesertProgressPerTurn
      );
      if ((0, import_kolmafia78.haveEffect)($effect`Ultrahydrated`) > 0 && (0, import_kolmafia78.haveEffect)($effect`Ultrahydrated`) < fightsLeftToExplore) {
        wantFreeKillNowEspecially = true;
      } else {
        waitForDesert = (0, import_kolmafia78.myBasestat)((0, import_kolmafia78.myPrimestat)()) >= 95;
      }
    }
    var waitForCyrpt = false;
    if ((0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("cyrptAlcoveEvilness")) >= 18 + cyrptEvilBonus(true)) {
      if ((0, import_kolmafia78.myLocation)() === $location`The Defiled Alcove` && (0, import_kolmafia78.haveEffect)($effect`Bow-Legged Swagger`) === 1) {
        wantFreeKillNowEspecially = true;
      } else if (auto_have_skill($skill`Bow-Legged Swagger`) && (0, import_kolmafia78.myBasestat)((0, import_kolmafia78.myPrimestat)()) >= 35 && !(0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("_bowleggedSwaggerUsed"))) {
        waitForCyrpt = true;
      }
    }
    if ((0, import_kolmafia78.haveEffect)($effect`Steely-Eyed Squint`) === 1 && $locations`The Haunted Wine Cellar, The Haunted Laundry Room, The Hatching Chamber, The Feeding Chamber, The Royal Guard Chamber`.includes(
      (0, import_kolmafia78.myLocation)()
    )) {
      wantFreeKillNowEspecially = true;
    }
    var reserveFreekills = (0, import_kolmafia78.myAdventures)() >= 9 && !wantFreeKillNowEspecially && (waitForDesert || waitForCyrpt);
    if (canUse$2($skill`Darts: Aim for the Bullseye`) && (0, import_kolmafia78.haveEffect)($effect`Everything Looks Red`) === 0 && dartELRcd() <= 40) {
      (0, import_kolmafia78.setProperty)("auto_instakillSource", "darts bullseye");
      (0, import_kolmafia78.setProperty)("auto_instakillSuccess", true.toString());
      loopHandlerDelayAll();
      return useSkill$2($skill`Darts: Aim for the Bullseye`);
    }
    if (canUse$2($skill`Free-For-All`) && (0, import_kolmafia78.haveEffect)($effect`Everything Looks Red`) === 0 && (wantFreeKillNowEspecially || !reserveFreekills) && (0, import_kolmafia78.myMp)() > 80) {
      handleTracker$1(
        enemy.toString(),
        $skill`Free-For-All`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return useSkill$2($skill`Free-For-All`);
    }
    if (canUse$2($skill`Lightning Strike`) && (wantFreeKillNowEspecially || !reserveFreekills || (0, import_kolmafia78.myLightning)() >= 60)) {
      handleTracker$1(
        enemy.toString(),
        $skill`Lightning Strike`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return useSkill$2($skill`Lightning Strike`);
    }
    var z_kick = getZooKickInstaKill();
    if (canUse$2(z_kick)) {
      (0, import_kolmafia78.setProperty)("auto_instakillSource", "zootomist kick");
      (0, import_kolmafia78.setProperty)("auto_instakillSuccess", true.toString());
      loopHandlerDelayAll();
      return useSkill$2(z_kick);
    }
    if (canUse$2($skill`Chest X-Ray`) && auto_chestXraysRemaining() > 0) {
      if (wantFreeKillNowEspecially || !reserveFreekills || inAftercore() || (0, import_kolmafia78.myDaycount)() >= 3) {
        handleTracker$1(
          enemy.toString(),
          $skill`Chest X-Ray`.toString(),
          "auto_instakill"
        );
        loopHandlerDelayAll();
        return useSkill$2($skill`Chest X-Ray`);
      }
    }
    if (canUse$2($skill`Fire the Jokester's Gun`) && auto_jokesterGunFreeKillAvailable() && (wantFreeKillNowEspecially || !reserveFreekills)) {
      handleTracker$1(
        enemy.toString(),
        $skill`Fire the Jokester's Gun`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return useSkill$2($skill`Fire the Jokester's Gun`);
    }
    if (auto_wantToBCZ($skill`BCZ: Sweat Bullets`) && (wantFreeKillNowEspecially || !reserveFreekills)) {
      handleTracker$1(
        enemy.toString(),
        $skill`BCZ: Sweat Bullets`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return useSkill$2($skill`BCZ: Sweat Bullets`);
    }
    if (canUse$2($skill`Shattering Punch`) && (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("_shatteringPunchUsed")) < 3 && !reserveFreekills) {
      if (!wantFreeKillNowEspecially && (0, import_kolmafia78.myDaycount)() === 1 && (0, import_kolmafia78.myTurncount)() < 100 && (0, import_kolmafia78.myMp)() < 80) {
      } else {
        handleTracker$1(
          enemy.toString(),
          $skill`Shattering Punch`.toString(),
          "auto_instakill"
        );
        loopHandlerDelayAll();
        return useSkill$2($skill`Shattering Punch`);
      }
    }
    if (canUse$2($skill`Gingerbread Mob Hit`) && !(0, import_kolmafia78.toBoolean)((0, import_kolmafia78.getProperty)("_gingerbreadMobHitUsed")) && !reserveFreekills && (0, import_kolmafia78.myMp)() > 50) {
      handleTracker$1(
        enemy.toString(),
        $skill`Gingerbread Mob Hit`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return useSkill$2($skill`Gingerbread Mob Hit`);
    }
    if (canUse$4($item`replica bat-oomerang`) && !reserveFreekills) {
      if ((0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("auto_batoomerangDay")) !== (0, import_kolmafia78.myDaycount)()) {
        (0, import_kolmafia78.setProperty)("auto_batoomerangDay", (0, import_kolmafia78.myDaycount)().toString());
        (0, import_kolmafia78.setProperty)("auto_batoomerangUse", 0 .toString());
      }
      if ((0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("auto_batoomerangUse")) < 3) {
        (0, import_kolmafia78.setProperty)(
          "auto_batoomerangUse",
          ((0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("auto_batoomerangUse")) + 1).toString()
        );
        handleTracker$1(
          enemy.toString(),
          $item`replica bat-oomerang`.toString(),
          "auto_instakill"
        );
        loopHandlerDelayAll();
        return useItem$1($item`replica bat-oomerang`);
      }
    }
    if (canUse$4($item`shadow brick`) && (0, import_kolmafia78.toInt)((0, import_kolmafia78.getProperty)("_shadowBricksUsed")) < 13 && !reserveFreekills) {
      handleTracker$1(
        enemy.toString(),
        $item`shadow brick`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return useItems$1($item`shadow brick`, import_kolmafia78.Item.none);
    }
  }
  if (canUse$2($skill`Slay the Dead`) && enemy.phylum === $phylum`undead`) {
    return useSkill$2($skill`Slay the Dead`);
  }
  if (canUse$4($item`exploding cigar`) && haveUsed($skill`Duplicate`)) {
    return useItem$1($item`exploding cigar`);
  }
  if (canUse$2($skill`Slaughter`) && (0, import_kolmafia78.haveEffect)($effect`Everything Looks Red`) === 0) {
    (0, import_kolmafia78.setProperty)("auto_instakillSource", "slaughter");
    (0, import_kolmafia78.setProperty)("auto_instakillSuccess", true.toString());
    loopHandlerDelayAll();
    return useSkill$2($skill`Slaughter`);
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage3.ts
var import_kolmafia80 = require("kolmafia");

// src/autoscend/combat/auto_combat_zombie_slayer.ts
var import_kolmafia79 = require("kolmafia");
function wantBearHug(enemy) {
  return canUse$2($skill`Bear Hug`) && (0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("_bearHugs")) < 10 && !enemy.boss && !(0, import_kolmafia79.containsText)(enemy.attributes, "FREE") && enemy.group > 1;
}
function wantKodiakMoment(enemy) {
  return canUse$2($skill`Kodiak Moment`) && enemy.physicalResistance >= 80;
}
function auto_combatZombieSlayerStage3(round_1, enemy, text) {
  if (!in_zombieSlayer()) {
    return "";
  }
  if (canUse$2($skill`Infectious Bite`) && canSurvive$1(4)) {
    return useSkill$2($skill`Infectious Bite`);
  }
  if (canUse$2($skill`Meat Shields`) && enemy.boss && canSurvive$1(4)) {
    return useSkill$2($skill`Meat Shields`);
  }
  if (canUse$2($skill`Bear-ly Legal`) && !wantBearHug(enemy) && !wantKodiakMoment(enemy)) {
    return useSkill$2($skill`Bear-ly Legal`);
  }
  return "";
}
function auto_combatZombieSlayerStage4(round_1, enemy, text) {
  if (!in_zombieSlayer()) {
    return "";
  }
  if (canUse$2($skill`Smash & Graaagh`) && (0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("_zombieSmashPocketsUsed")) < 30 && canSurvive$1(2)) {
    var doSmash = false;
    if (enemy === $monster`Big Wheelin' Twins` && !possessEquipment($item`badge of authority`)) {
      doSmash = true;
    }
    if (enemy === $monster`mountain man` && (0, import_kolmafia79.itemAmount)((0, import_kolmafia79.toItem)((0, import_kolmafia79.getProperty)("trapperOre"))) < 3) {
      doSmash = true;
    }
    if (enemy === $monster`fishy pirate` && !possessEquipment($item`perfume-soaked bandana`)) {
      doSmash = true;
    }
    if (enemy === $monster`garbage tourist` && (0, import_kolmafia79.itemAmount)($item`bag of park garbage`) === 0) {
      doSmash = true;
    }
    if (enemy === $monster`dairy goat` && (0, import_kolmafia79.itemAmount)($item`goat cheese`) < 3) {
      doSmash = true;
    }
    if (enemy === $monster`monstrous boiler` && (0, import_kolmafia79.itemAmount)($item`red-hot boilermaker`) < 1 && (0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("booPeakProgress")) > 0) {
      doSmash = true;
    }
    if (enemy === $monster`Fitness Giant` && (0, import_kolmafia79.itemAmount)($item`pec oil`) < 1 && (0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("booPeakProgress")) > 0) {
      doSmash = true;
    }
    if (enemy === $monster`Renaissance Giant` && (0, import_kolmafia79.itemAmount)($item`Ye Olde Meade`) < 1) {
      doSmash = true;
    }
    if ($monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal`.includes(
      enemy
    )) {
      doSmash = true;
    }
    if ($monsters`beanbat, bookbat`.includes(enemy)) {
      doSmash = true;
    }
    if (enemy === $monster`banshee librarian` && (0, import_kolmafia79.itemAmount)($item`killing jar`) < 1 && (0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("desertExploration")) < 100 && ((0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("gnasirProgress")) & 4) === 0) {
      doSmash = true;
    }
    if ((enemy === $monster`toothy sklelton` || enemy === $monster`spiny skelelton`) && (0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("cyrptNookEvilness")) > 14 + cyrptEvilBonus(true)) {
      doSmash = true;
    }
    if (enemy === $monster`oil baron` && (0, import_kolmafia79.itemAmount)($item`bubblin' crude`) < 12 && (0, import_kolmafia79.itemAmount)($item`jar of oil`) === 0) {
      doSmash = true;
    }
    if (enemy === $monster`blackberry bush` && (0, import_kolmafia79.itemAmount)($item`blackberry`) < 3 && !possessEquipment($item`blackberry galoshes`)) {
      doSmash = true;
    }
    if (enemy === $monster`pygmy bowler` && (0, import_kolmafia79.toInt)((0, import_kolmafia79.getProperty)("_zombieSmashPocketsUsed")) < 26) {
      doSmash = true;
    }
    if ($monsters`filthworm drone, filthworm royal guard, larval filthworm`.includes(
      enemy
    )) {
      doSmash = true;
    }
    if (enemy === $monster`Knob Goblin Madam`) {
      if ((0, import_kolmafia79.itemAmount)($item`Knob Goblin perfume`) === 0) {
        doSmash = true;
      }
    }
    if (enemy === $monster`Knob Goblin Harem Girl`) {
      if (!possessEquipment($item`Knob Goblin harem veil`) || !possessEquipment($item`Knob Goblin harem pants`)) {
        doSmash = true;
      }
    }
    if (((0, import_kolmafia79.myLocation)() === $location`The Hippy Camp` || (0, import_kolmafia79.myLocation)() === $location`Wartime Hippy Camp`) && (0, import_kolmafia79.containsText)(enemy.toString(), "hippy") && (0, import_kolmafia79.myLevel)() >= 12) {
      if (!possessEquipment($item`filthy knitted dread sack`) || !possessEquipment($item`filthy corduroys`)) {
        doSmash = true;
      }
    }
    if ((0, import_kolmafia79.myLocation)() === $location`Wartime Frat House`) {
      if (!possessEquipment($item`beer helmet`) || !possessEquipment($item`bejeweled pledge pin`) || !possessEquipment($item`distressed denim pants`)) {
        doSmash = true;
      }
    }
    if (enemy === $monster`dopey 7-Foot Dwarf` && !possessEquipment($item`miner's helmet`)) {
      doSmash = true;
    }
    if (enemy === $monster`grumpy 7-Foot Dwarf` && !possessEquipment($item`7-Foot Dwarven mattock`)) {
      doSmash = true;
    }
    if (enemy === $monster`sleepy 7-Foot Dwarf` && !possessEquipment($item`miner's pants`)) {
      doSmash = true;
    }
    if (enemy === $monster`Burly Sidekick` && !possessEquipment($item`Mohawk wig`)) {
      doSmash = true;
    }
    if (enemy === $monster`Spunky Princess` && !possessEquipment($item`titanium assault umbrella`) && !possessEquipment($item`unbreakable umbrella`)) {
      doSmash = true;
    }
    if (enemy === $monster`Quiet Healer` && !possessEquipment($item`amulet of extreme plot significance`)) {
      doSmash = true;
    }
    if (enemy === $monster`Copperhead Club bartender` && internalQuestStatus("questL11Ron") < 2) {
      doSmash = true;
    }
    if (doSmash) {
      handleTracker$1(
        enemy.toString(),
        $skill`Smash & Graaagh`.toString(),
        "auto_otherstuff"
      );
      return useSkill$2($skill`Smash & Graaagh`);
    }
  }
  return "";
}
function auto_combatZombieSlayerStage5(round_1, enemy, text) {
  if (!in_zombieSlayer()) {
    return "";
  }
  if (wantBearHug(enemy)) {
    return useSkill$2($skill`Bear Hug`);
  }
  if (round_1 < 20 && canSurvive$1(5) && auto_have_skill($skill`Plague Claws`) && enemy.physicalResistance < 80) {
    return useSkill$2($skill`Plague Claws`);
  }
  if (wantKodiakMoment(enemy)) {
    return useSkill$2($skill`Kodiak Moment`);
  }
  if (canUse$2($skill`Bilious Burst`) && enemy.physicalResistance >= 80) {
    return useSkill$2($skill`Bilious Burst`);
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage3.ts
function auto_combatDefaultStage3(round_1, enemy, text) {
  var retval = "";
  (0, import_kolmafia80.setProperty)("auto_instakillSuccess", false.toString());
  if ((0, import_kolmafia80.toBoolean)((0, import_kolmafia80.getProperty)("auto_skipStage2"))) {
    (0, import_kolmafia80.setProperty)("auto_skipStage2", false.toString());
  }
  if ((0, import_kolmafia80.toBoolean)((0, import_kolmafia80.getProperty)("auto_skipStage3"))) {
    return "";
  }
  retval = auto_combatHeavyRainsStage3(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatZombieSlayerStage3(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatMeatGolemStage3(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  if (canUse$2($skill`Bad Medicine`) && (0, import_kolmafia80.myMp)() >= 3 * (0, import_kolmafia80.mpCost)($skill`Bad Medicine`)) {
    return useSkill$2($skill`Bad Medicine`);
  }
  if (canUse$2($skill`Intimidating Bellow`) && (0, import_kolmafia80.expectedDamage)() > 0 && !enemyCanBlocksSkills()) {
    return useSkill$2($skill`Intimidating Bellow`);
  }
  var enemy_la = (0, import_kolmafia80.monsterLevelAdjustment)();
  if (canUse$2($skill`Tunnel Downwards`) && (0, import_kolmafia80.haveEffect)($effect`Shape of...Mole!`) > 0 && (0, import_kolmafia80.myLocation)() === $location`Mt. Molehill`) {
    return useSkill$2($skill`Tunnel Downwards`);
  }
  if (canUse$2($skill`Emit Matter Duplicating Drones`) && (0, import_kolmafia80.myFamiliar)() === $familiar`Grey Goose`) {
    var emitDrones = false;
    var canExtingo = true;
    if (auto_fireExtinguisherCharges() <= 30 || !canUse$1($skill`Fire Extinguisher: Polar Vortex`, false)) {
      canExtingo = false;
    }
    var drones = gooseExpectedDrones() >= 1;
    if ($item`sonar-in-a-biscuit`.toString() in (0, import_kolmafia80.itemDrops)(enemy) && (0, import_kolmafia80.itemDrops)(enemy).size <= 2 && internalQuestStatus("questL04Bat") <= 1 && drones) {
      emitDrones = true;
    }
    if ($item`stone wool`.toString() in (0, import_kolmafia80.itemDrops)(enemy) && (0, import_kolmafia80.itemAmount)($item`stone wool`) < 2 && drones) {
      emitDrones = true;
    }
    if (enemy === $monster`dairy goat` && (canExtingo = false)) {
      emitDrones = true;
    }
    if (enemy === $monster`smut orc pervert` && auto_autumnatonQuestingIn() !== $location`The Smut Orc Logging Camp` && (0, import_kolmafia80.myLocation)() === $location`The Smut Orc Logging Camp` && drones) {
      emitDrones = true;
    }
    if (canExtingo = false) {
      emitDrones = true;
    }
    if ((0, import_kolmafia80.myLocation)() === $location`The Hole in the Sky` && $item`star`.toString() in (0, import_kolmafia80.itemDrops)(enemy) && $item`line`.toString() in (0, import_kolmafia80.itemDrops)(enemy) && needStarKey() && (0, import_kolmafia80.itemAmount)($item`star`) < 8 && (0, import_kolmafia80.itemAmount)($item`line`) < 7 && drones) {
      emitDrones = true;
    }
    if (enemy === $monster`blackberry bush` && drones) {
      emitDrones = true;
    }
    if (enemy === $monster`red butler` && drones) {
      emitDrones = true;
    }
    if (canExtingo = false) {
      emitDrones = true;
    }
    if (enemy === $monster`tomb rat king` && (0, import_kolmafia80.itemAmount)($item`crumbling wooden wheel`) + (0, import_kolmafia80.itemAmount)($item`tomb ratchet`) < 10 && drones) {
      emitDrones = true;
    }
    if ($monsters`two-headed shadow bat, shadowboner shadowdagon`.includes(
      enemy
    ) && drones) {
      emitDrones = true;
    }
    if (enemy === $monster`Green Ops Soldier` && drones) {
      emitDrones = true;
    }
    if (dronesOut()) {
      emitDrones = false;
    }
    if (emitDrones) {
      handleTracker$1(
        enemy.toString(),
        $skill`Emit Matter Duplicating Drones`.toString(),
        "auto_otherstuff"
      );
      return useSkill$2($skill`Emit Matter Duplicating Drones`);
    }
  }
  if (canUse$2($skill`Hugs and Kisses!`) && (0, import_kolmafia80.myFamiliar)() === $familiar`XO Skeleton` && (0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("_xoHugsUsed")) < 11) {
    var forceDrop = false;
    if ($monsters`filthworm drone, filthworm royal guard, larval filthworm`.includes(
      enemy
    )) {
      forceDrop = true;
    }
    if ((0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("_xoHugsUsed")) < 8) {
      if (enemy === $monster`Burly Sidekick` && !possessEquipment($item`Mohawk wig`)) {
        forceDrop = true;
      }
      if ($monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal`.includes(
        enemy
      )) {
        forceDrop = true;
      }
      if (enemy === $monster`banshee librarian` && 0 === (0, import_kolmafia80.itemAmount)($item`killing jar`)) {
        forceDrop = true;
      }
      if ($item`sonar-in-a-biscuit`.toString() in (0, import_kolmafia80.itemDrops)(enemy) && (0, import_kolmafia80.itemDrops)(enemy).size <= 2 && (0, import_kolmafia80.getProperty)("questL04Bat") !== "finished") {
        forceDrop = true;
      }
    }
    if (forceDrop) {
      handleTracker$1(
        enemy.toString(),
        $skill`Hugs and Kisses!`.toString(),
        "auto_otherstuff"
      );
      return useSkill$2($skill`Hugs and Kisses!`);
    }
  }
  if (wantToDouse(enemy) && round_1 <= maxRoundsToDouse(enemy) && !(0, import_kolmafia80.toBoolean)((0, import_kolmafia80.getProperty)("_douseFoeSuccess"))) {
    var douse = $skill`Douse Foe`;
    var douseAvailable = canUse$1(douse, false) && auto_dousesRemaining() > 0;
    if (douseAvailable) {
      handleTracker$1(enemy.toString(), douse.toString(), "auto_otherstuff");
      return useSkill$2(douse);
    }
  }
  if (wantToForceDrop(enemy)) {
    var polarVortexAvailable = canUse$1($skill`Fire Extinguisher: Polar Vortex`, false) && auto_fireExtinguisherCharges() > 10;
    var mildEvilAvailable = canUse$1($skill`Perpetrate Mild Evil`, false) && (0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("_mildEvilPerpetrated")) < 3;
    var swoopAvailable = canUse$1($skill`Swoop like a Bat`, true) && (0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("_batWingsSwoopUsed")) < 11;
    if (swoopAvailable) {
      handleTracker$1(
        enemy.toString(),
        $skill`Swoop like a Bat`.toString(),
        "auto_otherstuff"
      );
      return useSkill$2($skill`Swoop like a Bat`);
    }
    if (mildEvilAvailable) {
      handleTracker$1(
        enemy.toString(),
        $skill`Perpetrate Mild Evil`.toString(),
        "auto_otherstuff"
      );
      return useSkill$2($skill`Perpetrate Mild Evil`);
    }
    if (polarVortexAvailable) {
      handleTracker$1(
        enemy.toString(),
        $skill`Fire Extinguisher: Polar Vortex`.toString(),
        "auto_otherstuff"
      );
      return useSkill$2($skill`Fire Extinguisher: Polar Vortex`);
    }
  }
  var doWeaksauce = true;
  if ((0, import_kolmafia80.buffedHitStat)() - 20 > (0, import_kolmafia80.monsterDefense)()) {
    doWeaksauce = false;
  }
  if ((0, import_kolmafia80.myClass)() === $class`Sauceror`) {
    doWeaksauce = true;
  }
  if (enemy === $monster`invader bullet`) {
    doWeaksauce = false;
  }
  if (canUse$2($skill`Curse of Weaksauce`) && (0, import_kolmafia80.haveSkill)($skill`Itchy Curse Finger`) && (0, import_kolmafia80.myMp)() >= 60 && doWeaksauce) {
    return useSkill$2($skill`Curse of Weaksauce`);
  }
  if (enemy === $monster`Eldritch Tentacle`) {
    enemy_la = 151;
  }
  if (enemy === $monster`invader bullet`) {
    enemy_la = 151;
  }
  if ($monsters`Naughty Sorceress, Naughty Sorceress (2)`.includes(enemy) && !(0, import_kolmafia80.toBoolean)((0, import_kolmafia80.getProperty)("auto_confidence"))) {
    enemy_la = 151;
  }
  if ($monsters`%alucard%, Jake Norris, Ricardo Belmont, Jayden Belmont, Sharona, Greg Dagreasy, Travis Belmont, Chad Alacarte`.includes(
    enemy
  )) {
    enemy_la = 151;
  }
  if (enemy_la <= 150) {
    if (canUse$2($skill`Curse of Weaksauce`) && (0, import_kolmafia80.haveSkill)($skill`Itchy Curse Finger`) && (0, import_kolmafia80.myMp)() >= 60 && doWeaksauce) {
      return useSkill$2($skill`Curse of Weaksauce`);
    }
    if ((0, import_kolmafia80.monsterHp)() > 1500 || enemy.physicalResistance > 90) {
      if (canUse$2($skill`Surprisingly Sweet Slash`) && auto_remainingCandyCaneSlashes() > 1) {
        return useSkill$2($skill`Surprisingly Sweet Slash`);
      }
      if (canUse$4($item`autumnic bomb`)) {
        return useItem$1($item`autumnic bomb`);
      }
    }
    if (canUse$2($skill`Surprisingly Sweet Slash`) && !in_avantGuard() && auto_remainingCandyCaneSlashes() > 1) {
      return useSkill$2($skill`Surprisingly Sweet Slash`);
    }
    if (canUse$2($skill`Loofah Lei Lasso`)) {
      return useSkill$2($skill`Loofah Lei Lasso`);
    }
    if ($item`Daily Affirmation: Keep Free Hate in your Heart`.combat) {
      if (canUse$4($item`Daily Affirmation: Keep Free Hate in your Heart`) && inAftercore() && (0, import_kolmafia80.hippyStoneBroken)() && !(0, import_kolmafia80.toBoolean)((0, import_kolmafia80.getProperty)("_affirmationHateUsed"))) {
        return useItem$1(
          $item`Daily Affirmation: Keep Free Hate in your Heart`
        );
      }
    }
    if (canUse$2($skill`Canhandle`)) {
      if ($items`Frigid Northern Beans, Heimz Fortified Kidney Beans, Hellfire Spicy Beans, Mixed Garbanzos and Chickpeas, Pork 'n' Pork 'n' Pork 'n' Beans, Shrub's Premium Baked Beans, Tesla's Electroplated Beans, Trader Olaf's Exotic Stinkbeans, World's Blackest-Eyed Peas`.includes(
        (0, import_kolmafia80.equippedItem)($slot`off-hand`)
      )) {
        return useSkill$2($skill`Canhandle`);
      }
    }
    if (canUse$2($skill`Curse of Weaksauce`) && (0, import_kolmafia80.myClass)() === $class`Sauceror` && doWeaksauce) {
      var MPafterWeaksauce = (0, import_kolmafia80.myMp)() - (0, import_kolmafia80.mpCost)($skill`Curse of Weaksauce`);
      var canCastAfterWeaksauce = false;
      var _iterator = _createForOfIteratorHelper(
        $skills`Saucestorm, Stuffed Mortar Shell, Saucegeyser`
      ), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var sp = _step.value;
          if (canUse$1(sp, false) && MPafterWeaksauce >= (0, import_kolmafia80.mpCost)(sp)) {
            canCastAfterWeaksauce = true;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!canCastAfterWeaksauce) {
        if (canUse$1($skill`Wave of Sauce`, false) && (0, import_kolmafia80.monsterElement)(enemy) !== $element`hot` && MPafterWeaksauce >= (0, import_kolmafia80.mpCost)($skill`Wave of Sauce`)) {
          canCastAfterWeaksauce = true;
        } else if (canUse$1($skill`Saucecicle`, false) && (0, import_kolmafia80.monsterElement)(enemy) !== $element`cold` && MPafterWeaksauce >= (0, import_kolmafia80.mpCost)($skill`Saucecicle`)) {
          canCastAfterWeaksauce = true;
        }
      }
      if (canCastAfterWeaksauce) {
        return useSkill$2($skill`Curse of Weaksauce`);
      }
    }
    if (canUse$2($skill`Detect Weakness`)) {
      return useSkill$2($skill`Detect Weakness`);
    }
    if (canUse$2($skill`Deploy Robo-Handcuffs`)) {
      return useSkill$2($skill`Deploy Robo-Handcuffs`);
    }
    if (canUse$2($skill`Pocket Crumbs`)) {
      return useSkill$2($skill`Pocket Crumbs`);
    }
    if (canUse$2($skill`Micrometeorite`)) {
      return useSkill$2($skill`Micrometeorite`);
    }
    if (canUse$4($item`cow poker`)) {
      if ($monsters`caugr, moomy, Pharaoh Amoon-Ra Cowtep, pyrobove, spidercow`.includes(
        enemy
      )) {
        return useItem$1($item`cow poker`);
      }
    }
    if (canUse$4($item`western-style skinning knife`)) {
      if ($monsters`caugr, coal snake, diamondback rattler, frontwinder, grizzled bear, mountain lion`.includes(
        enemy
      )) {
        return useItem$1($item`western-style skinning knife`);
      }
    }
    if ((0, import_kolmafia80.myLocation)() === $location`The Smut Orc Logging Camp` && canSurvive$1(1) && (0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("chasmBridgeProgress")) < bridgeGoal()) {
      var coldMortarShell = canUse$2($skill`Stuffed Mortar Shell`) && (0, import_kolmafia80.haveEffect)($effect`Spirit of Peppermint`) !== 0;
      var coldSkillToUse = import_kolmafia80.Skill.none;
      var coldAttackDamageMultiplier = 1;
      if ((0, import_kolmafia80.myClass)() === $class`Seal Clubber`) {
        if (canUse$1($skill`Lunging Thrust-Smack`, false)) {
          coldAttackDamageMultiplier = 3;
        } else if (canUse$1($skill`Thrust-Smack`, false)) {
          coldAttackDamageMultiplier = 2;
        }
      }
      var coldAttackDamage = (0, import_kolmafia80.toInt)(
        (0, import_kolmafia80.numericModifier)("cold damage") * coldAttackDamageMultiplier
      );
      if (canUse$1($skill`Saucegeyser`, false) && (0, import_kolmafia80.numericModifier)("Cold Spell Damage") > (0, import_kolmafia80.numericModifier)("Hot Spell Damage")) {
        coldSkillToUse = $skill`Saucegeyser`;
      } else if (canUse$1($skill`Saucecicle`, false)) {
        coldSkillToUse = $skill`Saucecicle`;
      } else if (canUse$1($skill`Cannelloni Cannon`, false) && (0, import_kolmafia80.haveEffect)($effect`Spirit of Peppermint`) !== 0) {
        coldSkillToUse = $skill`Cannelloni Cannon`;
      } else if (canUse$1($skill`Northern Explosion`, false) && !auto_canNorthernExplosionFE()) {
        coldSkillToUse = $skill`Northern Explosion`;
      } else if ((0, import_kolmafia80.monsterLevelAdjustment)() < -65 && canUse$1($skill`Saucestorm`, false)) {
        coldSkillToUse = $skill`Saucestorm`;
      } else if (coldAttackDamage > 3 * (0, import_kolmafia80.max)(1, 69 + (0, import_kolmafia80.monsterLevelAdjustment)())) {
        if ((0, import_kolmafia80.myClass)() === $class`Seal Clubber`) {
          if (canUse$1($skill`Lunging Thrust-Smack`, false)) {
            coldSkillToUse = $skill`Lunging Thrust-Smack`;
          } else if (canUse$1($skill`Thrust-Smack`, false)) {
            coldSkillToUse = $skill`Thrust-Smack`;
          } else if (canUse$1($skill`Lunge Smack`, false)) {
            coldSkillToUse = $skill`Lunge Smack`;
          }
        }
      } else if (canUse$1($skill`Saucegeyser`, false) && (0, import_kolmafia80.numericModifier)("Cold Spell Damage") === (0, import_kolmafia80.numericModifier)("Hot Spell Damage")) {
        coldSkillToUse = $skill`Saucegeyser`;
      } else if (in_nuclear() && canUse$1($skill`Throat Refrigerant`, false)) {
        coldSkillToUse = $skill`Throat Refrigerant`;
      }
      var MPreservedForColdSpells = coldMortarShell ? (0, import_kolmafia80.mpCost)($skill`Stuffed Mortar Shell`) : 0;
      if (coldSkillToUse !== import_kolmafia80.Skill.none) {
        MPreservedForColdSpells += (0, import_kolmafia80.mpCost)(coldSkillToUse);
      }
      if (canUse$1($skill`Gallapagosian Mating Call`, false) && (0, import_kolmafia80.myMp)() >= MPreservedForColdSpells + (0, import_kolmafia80.mpCost)($skill`Gallapagosian Mating Call`)) {
        var useMiniSniff = false;
        var sniffedLumber = isSniffed$1($monster`smut orc pipelayer`) || isSniffed$1($monster`smut orc jacker`);
        var sniffedFastener = isSniffed$1($monster`smut orc screwer`) || isSniffed$1($monster`smut orc nailer`);
        var haveLumberBias = (0, import_kolmafia80.equippedAmount)($item`logging hatchet`) > 0 && (0, import_kolmafia80.equippedAmount)($item`loadstone`) === 0;
        var haveFastenerBias = (0, import_kolmafia80.equippedAmount)($item`loadstone`) > 0 && (0, import_kolmafia80.equippedAmount)($item`logging hatchet`) === 0;
        if (enemy === $monster`smut orc pipelayer` || enemy === $monster`smut orc jacker`) {
          if (!sniffedLumber) {
            if (fastenerCount() >= 30 && lumberCount() < 29) {
              useMiniSniff = true;
            } else if (haveFastenerBias && fastenerCount() >= lumberCount()) {
              useMiniSniff = true;
            } else if (fastenerCount() > lumberCount() + 2) {
              useMiniSniff = true;
            } else if (sniffedFastener && !haveLumberBias && fastenerCount() > lumberCount()) {
              useMiniSniff = true;
            }
          }
        } else if (enemy === $monster`smut orc screwer` || enemy === $monster`smut orc nailer`) {
          if (!sniffedFastener) {
            if (lumberCount() >= 30 && fastenerCount() < 29) {
              useMiniSniff = true;
            } else if (haveLumberBias && lumberCount() >= fastenerCount()) {
              useMiniSniff = true;
            } else if (lumberCount() > fastenerCount() + 2) {
              useMiniSniff = true;
            } else if (sniffedLumber && !haveFastenerBias && lumberCount() > fastenerCount()) {
              useMiniSniff = true;
            }
          }
        }
        if (useMiniSniff) {
          handleTracker$1(
            enemy.toString(),
            $skill`Gallapagosian Mating Call`.toString(),
            "auto_sniffs"
          );
          return useSkill$1($skill`Gallapagosian Mating Call`, false);
        }
      }
      if (coldMortarShell) {
        return useSkill$2($skill`Stuffed Mortar Shell`);
      } else if (coldSkillToUse !== import_kolmafia80.Skill.none) {
        return useSkill$1(coldSkillToUse, false);
      } else if (!in_robot() && $classes`Seal Clubber, Turtle Tamer, Pastamancer, Sauceror, Disco Bandit, Accordion Thief`.includes(
        (0, import_kolmafia80.myClass)()
      )) {
        if (coldAttackDamage > 69 + (0, import_kolmafia80.monsterLevelAdjustment)() && coldAttackDamage > 0) {
          if ((0, import_kolmafia80.myClass)() === $class`Seal Clubber`) {
            if (canUse$1($skill`Lunging Thrust-Smack`, false)) {
              return useSkill$1($skill`Lunging Thrust-Smack`, false);
            } else if (canUse$1($skill`Thrust-Smack`, false)) {
              return useSkill$1($skill`Thrust-Smack`, false);
            } else if (canUse$1($skill`Lunge Smack`, false)) {
              return useSkill$1($skill`Lunge Smack`, false);
            } else {
              return "attack with weapon";
            }
          } else {
            return "attack with weapon";
          }
        } else if ((0, import_kolmafia80.monsterLevelAdjustment)() <= -25 && canUse$1($skill`Saucestorm`, false)) {
          auto_log_warning(
            "None of the best [cold] skills available against smut orcs but trying weaker alternative in view of the negative monster level.",
            "red"
          );
          return useSkill$1($skill`Saucestorm`, false);
        } else {
          auto_log_warning(
            "None of our preferred [cold] skills available against smut orcs. Engaging in Fisticuffs.",
            "red"
          );
        }
      }
    }
    if ((0, import_kolmafia80.myLocation)() === $location`The Haunted Kitchen` && canUse$2($skill`Become a Cloud of Mist`) && (0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("_vampyreCloakeFormUses")) < 10) {
      var hot = (0, import_kolmafia80.toInt)((0, import_kolmafia80.numericModifier)("Hot Resistance"));
      var stench = (0, import_kolmafia80.toInt)((0, import_kolmafia80.numericModifier)("Stench Resistance"));
      if ((hot < 9 && hot % 3 !== 0 || stench < 9 && stench % 3 !== 0) && canUse$2($skill`Become a Cloud of Mist`)) {
        return useSkill$2($skill`Become a Cloud of Mist`);
      }
    }
    if (enemy === $monster`dirty thieving brigand` && canUse$2($skill`Become a Wolf`) && (0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("_vampyreCloakeFormUses")) < 10) {
      return useSkill$2($skill`Become a Wolf`);
    }
    if (canUse$2($skill`Air Dirty Laundry`)) {
      return useSkill$2($skill`Air Dirty Laundry`);
    }
    if (canUse$2($skill`Cowboy Kick`)) {
      return useSkill$2($skill`Cowboy Kick`);
    }
    if (canUse$2($skill`Fire Death Ray`)) {
      return useSkill$2($skill`Fire Death Ray`);
    }
    if (canUse$2($skill`Ply Reality`)) {
      return useSkill$2($skill`Ply Reality`);
    }
    if (canUse$4($item`Rain-Doh indigo cup`)) {
      return useItem$1($item`Rain-Doh indigo cup`);
    }
    if (canUse$2($skill`Summon Love Mosquito`)) {
      return useSkill$2($skill`Summon Love Mosquito`);
    }
    if (canUse$4($item`tomayohawk-style reflex hammer`)) {
      return useItem$1($item`tomayohawk-style reflex hammer`);
    }
    if (canUse$2($skill`Tear Away your Pants!`) && ((0, import_kolmafia80.getProperty)("auto_forceNonCombatSource") === "" && !(auto_wantToSniff(enemy, (0, import_kolmafia80.myLocation)()) && getSniffer$1(enemy) !== import_kolmafia80.Skill.none) || (0, import_kolmafia80.monsterPhylum)() === $phylum`plant`)) {
      return useSkill$2($skill`Tear Away your Pants!`);
    }
    if (canUse$2($skill`Disarming Thrust`)) {
      return useSkill$2($skill`Disarming Thrust`);
    }
    if (canUse$2($skill`Barrage of Tears`)) {
      return useSkill$2($skill`Barrage of Tears`);
    }
    if (canUse$2($skill`Cadenza`) && (0, import_kolmafia80.itemType)((0, import_kolmafia80.equippedItem)($slot`weapon`)) === "accordion") {
      if ($items`Accordion of Jordion, accordionoid rocca, non-Euclidean non-accordion, Shakespeare's Sister's Accordion, zombie accordion`.includes(
        (0, import_kolmafia80.equippedItem)($slot`weapon`)
      )) {
        return useSkill$2($skill`Cadenza`);
      }
    }
    if (canUse$2($skill`Extract`) && (0, import_kolmafia80.myMp)() > (0, import_kolmafia80.mpCost)($skill`Extract`) * 3 && (0, import_kolmafia80.itemAmount)($item`Source essence`) <= 60 && canSurvive$1(2)) {
      return useSkill$2($skill`Extract`);
    }
    if (canUse$2($skill`Extract Jelly`) && (0, import_kolmafia80.myMp)() > (0, import_kolmafia80.mpCost)($skill`Extract Jelly`) * 3 && canSurvive$1(2) && (0, import_kolmafia80.myFamiliar)() === $familiar`Space Jellyfish` && (0, import_kolmafia80.toInt)((0, import_kolmafia80.getProperty)("_spaceJellyfishDrops")) < 3 && $elements`hot, spooky, stench`.includes((0, import_kolmafia80.monsterElement)(enemy))) {
      return useSkill$2($skill`Extract Jelly`);
    }
    if (canUse$2($skill`Science! Fight with Medicine`) && (0, import_kolmafia80.myHp)() * 2 < (0, import_kolmafia80.myMaxhp)()) {
      return useSkill$2($skill`Science! Fight with Medicine`);
    }
    if (canUse$2($skill`Science! Fight with Rational Thought`) && (0, import_kolmafia80.haveEffect)($effect`Rational Thought`) < 10) {
      return useSkill$2($skill`Science! Fight with Rational Thought`);
    }
    if (canUse$4($item`Time-Spinner`)) {
      return useItem$1($item`Time-Spinner`);
    }
    if (canUse$2($skill`Sing Along`)) {
      if (canSurvive$1(2) && (0, import_kolmafia80.getProperty)("boomBoxSong") === "Remainin' Alive") {
        return useSkill$2($skill`Sing Along`);
      }
      if (canSurvive$1(5) && (0, import_kolmafia80.getProperty)("boomBoxSong") === "Total Eclipse of Your Meat" && (0, import_kolmafia80.expectedDamage)() < 10 && !in_wotsf()) {
        return useSkill$2($skill`Sing Along`);
      }
      if (canSurvive$1(3) && (0, import_kolmafia80.getProperty)("boomBoxSong") === "Total Eclipse of Your Meat" && $monsters`dirty thieving brigand, wall of meat`.includes(enemy)) {
        return useSkill$2($skill`Sing Along`);
      }
    }
  }
  if (enemy_la < 100 && stunnable(enemy)) {
    if (canUse$4($item`Rain-Doh blue balls`)) {
      return useItem$1($item`Rain-Doh blue balls`);
    }
    if (canUse$2($skill`Summon Love Gnats`)) {
      return useSkill$2($skill`Summon Love Gnats`);
    }
    if (!((0, import_kolmafia80.haveEquipped)($item`protonic accelerator pack`) && isGhost(enemy))) {
      if (canUse$2($skill`Summon Love Stinkbug`) && haveUsed($skill`Summon Love Gnats`) && !(0, import_kolmafia80.containsText)(text, "STUN RESIST")) {
        return useSkill$2($skill`Summon Love Stinkbug`);
      }
    }
  }
  if (canUse$2($skill`Curse of Weaksauce`) && (0, import_kolmafia80.myClass)() === $class`Sauceror` && ((0, import_kolmafia80.myMp)() >= 32 || haveUsed($skill`Stuffed Mortar Shell`)) && doWeaksauce) {
    return useSkill$2($skill`Curse of Weaksauce`);
  }
  if ((0, import_kolmafia80.myClass)() === $class`Turtle Tamer` && canUse$2($skill`Spirit Snap`) && (0, import_kolmafia80.myMp)() > 80) {
    if ((0, import_kolmafia80.haveEffect)($effect`Blessing of the Storm Tortoise`) > 0 && (0, import_kolmafia80.monsterHp)() > 0.15 * (0, import_kolmafia80.myBuffedstat)($stat`Muscle`) || (0, import_kolmafia80.haveEffect)($effect`Grand Blessing of the Storm Tortoise`) > 0 && (0, import_kolmafia80.monsterHp)() > 0.2 * (0, import_kolmafia80.myBuffedstat)($stat`Muscle`) || (0, import_kolmafia80.haveEffect)($effect`Glorious Blessing of the Storm Tortoise`) > 0 && (0, import_kolmafia80.monsterHp)() > 0.25 * (0, import_kolmafia80.myBuffedstat)($stat`Muscle`)) {
      return useSkill$2($skill`Spirit Snap`);
    }
  }
  if (canUse$2($skill`Thunderstrike`) && enemy_la <= 150 && !canSurvive$1(5)) {
    combat_status_add("stunned");
    return useSkill$2($skill`Thunderstrike`);
  }
  if (enemy_la <= 100 && stunnable(enemy) && (!canSurvive$1(5) || $monsters`Groar`.includes(enemy))) {
    var stunner = getStunner(enemy);
    if (stunner !== import_kolmafia80.Skill.none) {
      combat_status_add("stunned");
      return useSkill$2(stunner);
    }
  }
  if (auto_wantToBCZ($skill`BCZ: Blood Geyser`) && canUse$2($skill`BCZ: Blood Geyser`) && enemy_la <= 150 && !canSurvive$1(5)) {
    combat_status_add("stunned");
    return useSkill$2($skill`BCZ: Blood Geyser`);
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage4.ts
var import_kolmafia82 = require("kolmafia");

// src/autoscend/combat/auto_combat_license_to_adventure.ts
var import_kolmafia81 = require("kolmafia");
function auto_combatLicenseToAdventureStage4(round_1, enemy, text) {
  if ((0, import_kolmafia81.myLocation)() === $location`Super Villain's Lair` && in_lta() && canSurvive$1(2) && enemy === $monster`Villainous Minion`) {
    if (!(0, import_kolmafia81.toBoolean)((0, import_kolmafia81.getProperty)("_villainLairCanLidUsed")) && (0, import_kolmafia81.itemAmount)($item`razor-sharp can lid`) > 0) {
      return `item ${$item`razor-sharp can lid`}`;
    }
    if (!(0, import_kolmafia81.toBoolean)((0, import_kolmafia81.getProperty)("_villainLairWebUsed")) && (0, import_kolmafia81.itemAmount)($item`spider web`) > 0) {
      return `item ${$item`spider web`}`;
    }
    if (!(0, import_kolmafia81.toBoolean)((0, import_kolmafia81.getProperty)("_villainLairFirecrackerUsed")) && (0, import_kolmafia81.itemAmount)($item`Knob Goblin firecracker`) > 0) {
      return `item ${$item`Knob Goblin firecracker`}`;
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage4.ts
function auto_combatDefaultStage4(round_1, enemy, text) {
  var retval = "";
  if ((0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("auto_skipStage3"))) {
    (0, import_kolmafia82.setProperty)("auto_skipStage3", false.toString());
  }
  retval = auto_combatTheSourceStage4(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatLicenseToAdventureStage4(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatZombieSlayerStage4(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatWereProfessorStage4(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  if ((0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("auto_skipStage4"))) {
    return "";
  }
  if (auto_wantToSniff(enemy, (0, import_kolmafia82.myLocation)()) && !ag_is_bodyguard()) {
    var sniffer = getSniffer$1(enemy);
    if (sniffer !== import_kolmafia82.Skill.none) {
      if (sniffer === $skill`Perceive Soul`) {
        (0, import_kolmafia82.setProperty)("auto_bat_soulmonster", enemy.toString());
      }
      handleTracker$1(enemy.toString(), sniffer.toString(), "auto_sniffs");
      combat_status_add("sniffed");
      return useSkill$2(sniffer);
    }
  }
  if (enemy === $monster`animated ornate nightstand` && (0, import_kolmafia82.myFamiliar)() === $familiar`Nosy Nose` && !is100FamRun() && canUse$2($skill`Get a Good Whiff of This Guy`) && !isSniffed(enemy, $skill`Get a Good Whiff of This Guy`)) {
    handleTracker$1(
      enemy.toString(),
      $skill`Get a Good Whiff of This Guy`.toString(),
      "auto_sniffs"
    );
    return useSkill$2($skill`Get a Good Whiff of This Guy`);
  }
  if (!haveUsed$1($item`Rain-Doh black box`) && !in_heavyrains() && (0, import_kolmafia82.toInt)((0, import_kolmafia82.getProperty)("_raindohCopiesMade")) < 5 && !ag_is_bodyguard()) {
    if (enemy === $monster`modern zmobie` && (0, import_kolmafia82.toInt)((0, import_kolmafia82.getProperty)("auto_modernzmobiecount")) < 3) {
      (0, import_kolmafia82.setProperty)("auto_doCombatCopy", "yes");
    }
  }
  if (canUse$4($item`Rain-Doh black box`) && (0, import_kolmafia82.getProperty)("auto_doCombatCopy") === "yes" && enemy !== $monster`gourmet gourami` && !ag_is_bodyguard()) {
    (0, import_kolmafia82.setProperty)("auto_doCombatCopy", "no");
    markAsUsed$1($item`Rain-Doh black box`);
    if ((0, import_kolmafia82.toInt)((0, import_kolmafia82.getProperty)("_raindohCopiesMade")) < 5) {
      handleTracker$1(
        enemy.toString(),
        $item`Rain-Doh black box`.toString(),
        "auto_copies"
      );
      return `item ${$item`Rain-Doh black box`}`;
    }
    auto_log_warning(
      "Can not issue copy directive because we have no copies left",
      "red"
    );
  }
  if ((0, import_kolmafia82.getProperty)("auto_doCombatCopy") === "yes") {
    (0, import_kolmafia82.setProperty)("auto_doCombatCopy", "no");
  }
  if ((0, import_kolmafia82.myLocation)() === $location`The Daily Dungeon`) {
    if (towerKeyCount$1(false) < 2 && !(0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("_dailyDungeonMalwareUsed")) && (0, import_kolmafia82.itemAmount)($item`daily dungeon malware`) > 0) {
      if ($monsters`apathetic lizardman, dairy ooze, dodecapede, giant giant moth, mayonnaise wasp, pencil golem, sabre-toothed lime, tonic water elemental, vampire clam`.includes(
        enemy
      )) {
        return `item ${$item`daily dungeon malware`}`;
      }
    }
  }
  if (canUse$2($skill`Digitize`) && (0, import_kolmafia82.toInt)((0, import_kolmafia82.getProperty)("_sourceTerminalDigitizeUses")) === 0 && !inAftercore()) {
    if ($monsters`lobsterfrogman`.includes(enemy)) {
      if ((0, import_kolmafia82.getProperty)("_sourceTerminalDigitizeMonster") !== enemy.toString()) {
        handleTracker$1(
          enemy.toString(),
          $skill`Digitize`.toString(),
          "auto_copies"
        );
        return useSkill$2($skill`Digitize`);
      }
    }
  }
  if (canUse$2($skill`Digitize`) && (0, import_kolmafia82.toInt)((0, import_kolmafia82.getProperty)("_sourceTerminalDigitizeUses")) < 3 && !inAftercore()) {
    if ((0, import_kolmafia82.getProperty)("auto_digitizeDirective") === enemy.toString()) {
      if ((0, import_kolmafia82.getProperty)("_sourceTerminalDigitizeMonster") !== enemy.toString()) {
        handleTracker$1(
          enemy.toString(),
          $skill`Digitize`.toString(),
          "auto_copies"
        );
        return useSkill$2($skill`Digitize`);
      }
    }
  }
  if (auto_wantToCopy(enemy, (0, import_kolmafia82.myLocation)()) && !ag_is_bodyguard()) {
    var copier = getCopier$1(enemy);
    if (copier !== import_kolmafia82.Skill.none && canUse$2(copier)) {
      if (copier === $skill`Blow the Purple Candle!`) {
        (0, import_kolmafia82.setProperty)("auto_purple_candled", enemy.toString());
      }
      handleTracker$1(enemy.toString(), copier.toString(), "auto_copies");
      combat_status_add("copied");
      return useSkill$2(copier);
    }
  }
  if (canUse$2($skill`Steal Accordion`) && (0, import_kolmafia82.myClass)() === $class`Accordion Thief` && canSurvive$1(2)) {
    return useSkill$2($skill`Steal Accordion`);
  }
  if (canUse$4($item`abstraction: sensation`) && enemy === $monster`Performer of Actions`) {
    return useItem$1($item`abstraction: sensation`);
  }
  if (canUse$4($item`abstraction: thought`) && enemy === $monster`Perceiver of Sensations`) {
    return useItem$1($item`abstraction: thought`);
  }
  if (canUse$4($item`abstraction: action`) && enemy === $monster`Thinker of Thoughts`) {
    return useItem$1($item`abstraction: action`);
  }
  if ((0, import_kolmafia82.monsterLevelAdjustment)() <= 150) {
    if (canUse$2($skill`Loofah Leglifts`)) {
      return useSkill$2($skill`Loofah Leglifts`);
    }
    if (canUse$2($skill`Loofah Hosenzittern`)) {
      return useSkill$2($skill`Loofah Hosenzittern`);
    }
    if (canUse$2($skill`Loofah Head-Scratch`)) {
      return useSkill$2($skill`Loofah Head-Scratch`);
    }
  }
  if ((0, import_kolmafia82.myFamiliar)() === $familiar`Stocking Mimic` && round_1 < 12 && canSurvive$1(1.5)) {
    if ((0, import_kolmafia82.itemAmount)($item`seal tooth`) > 0) {
      return `item ${$item`seal tooth`}`;
    }
  }
  var wink_skill = import_kolmafia82.Skill.none;
  if (canUse$2($skill`Wink at`)) {
    wink_skill = $skill`Wink at`;
  }
  if (canUse$2($skill`Fire a badly romantic arrow`)) {
    wink_skill = $skill`Fire a badly romantic arrow`;
  }
  if (wink_skill !== import_kolmafia82.Skill.none) {
    if ($monsters`lobsterfrogman, modern zmobie`.includes(enemy)) {
      return useSkill$2(wink_skill);
    }
  }
  if (canUse$4($item`The Big Book of Pirate Insults`) && numPirateInsults() < 8 && internalQuestStatus("questM12Pirate") < 5) {
    if ($locations`Barrrney's Barrr, The Obligatory Pirate's Cove`.includes(
      (0, import_kolmafia82.myLocation)()
    )) {
      return useItem$1($item`The Big Book of Pirate Insults`);
    }
  }
  if ((0, import_kolmafia82.itemAmount)($item`cocktail napkin`) > 0) {
    if ($monsters`clingy pirate (female), clingy pirate (male)`.includes(enemy)) {
      return `item ${$item`cocktail napkin`}`;
    }
  }
  var flyer = $item`rock band flyers`;
  if (auto_warSide() === "hippy") {
    flyer = $item`jam band flyers`;
  }
  if (canUse$4(flyer) && (0, import_kolmafia82.toInt)((0, import_kolmafia82.getProperty)("flyeredML")) < 1e4 && (0, import_kolmafia82.myLocation)() !== $location`The Battlefield (Frat Uniform)` && (0, import_kolmafia82.myLocation)() !== $location`The Battlefield (Hippy Uniform)` && !(0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("auto_ignoreFlyer"))) {
    var shouldFlyer = false;
    var staggeringFlyer = false;
    var flyerWith = import_kolmafia82.Item.none;
    if ((0, import_kolmafia82.myClass)() === $class`Disco Bandit` && auto_have_skill($skill`Deft Hands`) && !combat_status_check("(it")) {
      staggeringFlyer = true;
    }
    if (auto_have_skill($skill`Ambidextrous Funkslinging`)) {
      if (canUse$4($item`Time-Spinner`)) {
        flyerWith = $item`Time-Spinner`;
        staggeringFlyer = true;
      } else if (canUse$4($item`beehive`)) {
        if ((0, import_kolmafia82.myClass)() === $class`Sauceror` && haveUsed($skill`Curse of Weaksauce`)) {
          var beehiveDamage = (0, import_kolmafia82.ceil)(
            30 * combatItemDamageMultiplier() * MLDamageToMonsterMultiplier()
          );
          if ((0, import_kolmafia82.monsterHp)() > beehiveDamage) {
            flyerWith = $item`beehive`;
            staggeringFlyer = true;
          }
        } else {
          flyerWith = $item`beehive`;
          staggeringFlyer = true;
        }
      }
    }
    if (staggeringFlyer && (!stunnable(enemy) || (0, import_kolmafia82.monsterLevelAdjustment)() > 150)) {
      staggeringFlyer = false;
    }
    var stunned = false;
    if (!staggeringFlyer && stunnable(enemy)) {
      var stunner = getStunner(enemy);
      stunned = combat_status_check("stunned");
      if (stunner !== import_kolmafia82.Skill.none && !stunned) {
        combat_status_add("stunned");
        return useSkill$2(stunner);
      }
    }
    if (canSurvive$1(3) || stunned || staggeringFlyer) {
      shouldFlyer = true;
    }
    if (shouldFlyer) {
      if (flyerWith !== import_kolmafia82.Item.none) {
        return useItems$1(flyer, flyerWith);
      } else {
        return useItem$1(flyer);
      }
    }
  }
  if (canUse$4($item`chaos butterfly`) && !(0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("chaosButterflyThrown")) && !(0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("auto_skipL12Farm"))) {
    if (canUse$4($item`Time-Spinner`) && auto_have_skill($skill`Ambidextrous Funkslinging`)) {
      return useItems$1($item`chaos butterfly`, $item`Time-Spinner`);
    }
    return useItem$1($item`chaos butterfly`);
  }
  if (canUse$4($item`disposable instant camera`)) {
    if ($monsters`Bob Racecar, Racecar Bob`.includes(enemy)) {
      return useItem$1($item`disposable instant camera`);
    }
  }
  if ((0, import_kolmafia82.itemAmount)($item`Duskwalker syringe`) > 0) {
    if ($monsters`oil baron, oil cartel, oil slick, oil tycoon`.includes(enemy)) {
      return `item ${$item`Duskwalker syringe`}`;
    }
  }
  if (canUse$4($item`DNA extraction syringe`) && (0, import_kolmafia82.monsterLevelAdjustment)() < 150) {
    if ((0, import_kolmafia82.monsterPhylum)(enemy) !== (0, import_kolmafia82.toPhylum)((0, import_kolmafia82.getProperty)("dnaSyringe"))) {
      return useItem$1($item`DNA extraction syringe`);
    }
  }
  if (!in_plumber() && !in_darkGyffte() && !in_zombieSlayer() && canUse$2(
    //paths that do not use MP
    $skill`Gulp Latte`
  ) && (0, import_kolmafia82.myMp)() * 2 < (0, import_kolmafia82.myMaxmp)()) {
    return useSkill$2($skill`Gulp Latte`);
  }
  if (!in_plumber() && !in_darkGyffte() && !in_zombieSlayer() && canUse$2(
    //paths that do not use MP
    $skill`Spring Raindrop Attack`
  ) && (0, import_kolmafia82.myMp)() < 0.9 * (0, import_kolmafia82.myMaxmp)()) {
    return useSkill$2($skill`Spring Raindrop Attack`);
  }
  if (!((0, import_kolmafia82.haveEquipped)($item`protonic accelerator pack`) && isGhost(enemy))) {
    if (canUse$2($skill`Summon Love Stinkbug`) && enemy.physicalResistance >= 100 && (0, import_kolmafia82.monsterElement)(enemy) !== $element`stench`) {
      return useSkill$2($skill`Summon Love Stinkbug`);
    }
  }
  if (fullness_left() > 0 && canUse$4($item`red rocket`) && (0, import_kolmafia82.haveEffect)($effect`Everything Looks Red`) <= 0 && (0, import_kolmafia82.haveEffect)($effect`Ready to Eat`) <= 0 && canSurvive$1(5) && (0, import_kolmafia82.myAdventures)() < 100) {
    if (in_plumber()) {
      return useItem$1($item`red rocket`);
    }
    return useItem$1($item`red rocket`);
  }
  if (auto_bowlingBallCombatString((0, import_kolmafia82.myLocation)(), true) !== "" && !enemy.boss) {
    return auto_bowlingBallCombatString((0, import_kolmafia82.myLocation)(), false);
  }
  if (canUse$2($skill`McHugeLarge Avalanche`) && (0, import_kolmafia82.getProperty)("auto_forceNonCombatSource") === "McHugeLarge left ski" && !(0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("auto_avalancheDeployed"))) {
    (0, import_kolmafia82.setProperty)("auto_avalancheDeployed", true.toString());
    return useSkill$2($skill`McHugeLarge Avalanche`);
  }
  if (canUse$2($skill`Launch spikolodon spikes`) && (0, import_kolmafia82.getProperty)("auto_forceNonCombatSource") === "jurassic parka" && !(0, import_kolmafia82.toBoolean)((0, import_kolmafia82.getProperty)("auto_parkaSpikesDeployed"))) {
    (0, import_kolmafia82.setProperty)("auto_parkaSpikesDeployed", true.toString());
    return useSkill$2($skill`Launch spikolodon spikes`);
  }
  if (shouldCinchoConfetti() && canSurvive$1(5)) {
    return useSkill$2($skill`Cincho: Confetti Extravaganza`);
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage5.ts
var import_kolmafia85 = require("kolmafia");

// src/autoscend/combat/auto_combat_gelatinous_noob.ts
function auto_combatGelatinousNoobStage5(round_1, enemy, text) {
  if (!in_gnoob()) {
    return "";
  }
  if (canUse$1($skill`Gelatinous Kick`, false) && haveUsed($skill`Duplicate`)) {
    if ($monsters`dairy goat`.includes(enemy)) {
      return useSkill$1($skill`Gelatinous Kick`, false);
    }
  }
  return "";
}

// src/autoscend/combat/auto_combat_plumber.ts
var import_kolmafia83 = require("kolmafia");
function auto_combatPlumberStage5(round_1, enemy, text) {
  if ((0, import_kolmafia83.myClass)() !== $class`Plumber`) {
    return "";
  }
  if ((0, import_kolmafia83.myPp)() > 2 && canUse$1($skill`[7332]Juggle Fireballs`, true)) {
    return useSkill$2($skill`[7332]Juggle Fireballs`);
  }
  if (enemy.physicalResistance >= 80 || (0, import_kolmafia83.myLocation)() === $location`The Smut Orc Logging Camp` && 0 < (0, import_kolmafia83.equippedAmount)($item`frosty button`)) {
    if (canUse$1($skill`[7333]Fireball Barrage`, false)) {
      return useSkill$2($skill`[7333]Fireball Barrage`);
    }
    if (canUse$1($skill`Beach Combo`, true)) {
      return useSkill$2($skill`Beach Combo`);
    }
    if (canUse$1($skill`Fireball Toss`, false)) {
      return useSkill$1($skill`Fireball Toss`, false);
    }
  }
  if (canUse$1($skill`[7336]Multi-Bounce`, false)) {
    return useSkill$2($skill`[7336]Multi-Bounce`);
  }
  if (canUse$1($skill`Beach Combo`, true)) {
    return useSkill$2($skill`Beach Combo`);
  }
  if (canUse$1($skill`Jump Attack`, false)) {
    return useSkill$1($skill`Jump Attack`, false);
  }
  if (canUse$1($skill`[7333]Fireball Barrage`, false)) {
    {
      return useSkill$2($skill`[7333]Fireball Barrage`);
    }
    return useSkill$1($skill`Fireball Toss`, false);
  }
  return "";
}

// src/autoscend/combat/auto_combat_you_robot.ts
var import_kolmafia84 = require("kolmafia");
function auto_combat_robot_stage5(round_1, enemy, text) {
  if (!in_robot()) {
    return "";
  }
  var enemy_physical_immune = enemy.physicalResistance > 99;
  var enemy_hot_immune = (0, import_kolmafia84.monsterElement)(enemy) === $element`hot` || enemy === $monster`Protector S. P. E. C. T. R. E.`;
  var enemy_physical_res = 1 - enemy.physicalResistance * 0.01;
  var dmg = 0;
  if (canUse$1($skill`Snipe`, false) && !enemy_physical_immune) {
    var better_than_crotch_burn = (0, import_kolmafia84.monsterHp)() > 40 || enemy_hot_immune;
    dmg = (0, import_kolmafia84.myBuffedstat)($stat`Mysticality`) * enemy_physical_res;
    if (canSurvive$1(turns_to_kill(dmg)) && better_than_crotch_burn) {
      return useSkill$1($skill`Snipe`, false);
    }
  }
  if (canUse$1($skill`Blow Snow`, false) && $monsters`smut orc jacker, smut orc nailer, smut orc pipelayer, smut orc screwer`.includes(
    enemy
  )) {
    if (canSurvive$1(turns_to_kill((0, import_kolmafia84.myBuffedstat)($stat`Muscle`)))) {
      return useSkill$1($skill`Blow Snow`, false);
    }
  }
  if (canUse$1($skill`Swing Pound-O-Tron`, false) && !enemy_physical_immune) {
    dmg = (20 + 0.1 * (0, import_kolmafia84.myBuffedstat)($stat`Muscle`)) * enemy_physical_res;
    if (canSurvive$1(turns_to_kill(dmg))) {
      return useSkill$1($skill`Swing Pound-O-Tron`, false);
    }
  }
  if (canUse$1($skill`Crotch Burn`, false) && !enemy_hot_immune) {
    dmg = 20 + 0.1 * (0, import_kolmafia84.myBuffedstat)($stat`Mysticality`);
    if (canSurvive$1(turns_to_kill(dmg))) {
      return useSkill$1($skill`Crotch Burn`, false);
    }
  }
  if (canUse$1($skill`Shoot Pea`, false) && !enemy_physical_immune) {
    dmg = (20 + 0.1 * (0, import_kolmafia84.myBuffedstat)($stat`Moxie`)) * enemy_physical_res;
    if (canSurvive$1(turns_to_kill(dmg))) {
      return useSkill$1($skill`Shoot Pea`, false);
    }
  }
  if ((0, import_kolmafia84.equippedItem)($slot`weapon`) === import_kolmafia84.Item.none) {
    (0, import_kolmafia84.abort)("Robot does not know how to fight this enemy. Beep Boop.");
  }
  return "";
}

// src/autoscend/combat/auto_combat_default_stage5.ts
function auto_combatDefaultStage5(round_1, enemy, text) {
  var retval = "";
  if ((0, import_kolmafia85.toBoolean)((0, import_kolmafia85.getProperty)("auto_skipStage4"))) {
    (0, import_kolmafia85.setProperty)("auto_skipStage4", false.toString());
  }
  retval = auto_combatHeavyRainsStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatPlumberStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatDisguisesStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatGelatinousNoobStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combat_robot_stage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatZombieSlayerStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatFallOfTheDinosaursStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatWereProfessorStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatMeatGolemStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  if (canUse$2($skill`Loofah Stew`) && (0, import_kolmafia85.monsterElement)(enemy) !== $element`cold`) {
    return useSkill$1($skill`Loofah Stew`, false);
  }
  if (canUse$2($skill`Loofah Lava`) && (0, import_kolmafia85.monsterElement)(enemy) !== $element`hot`) {
    return useSkill$1($skill`Loofah Lava`, false);
  }
  var type_1 = (0, import_kolmafia85.monsterPhylum)(enemy);
  var attackMinor = "attack with weapon";
  var attackMajor = "attack with weapon";
  var costMinor = 0;
  var costMajor = 0;
  var damageReceived = 0;
  if (round_1 !== 0) {
    damageReceived = (0, import_kolmafia85.toInt)((0, import_kolmafia85.getProperty)("auto_combatHP")) - (0, import_kolmafia85.myHp)();
  }
  if (enemy === $monster`LOV Enforcer` && canUse$1($skill`Saucestorm`, false)) {
    return useSkill$1($skill`Saucestorm`, false);
  }
  if ((0, import_kolmafia85.myClass)() === $class`Seal Clubber`) {
    if (enemy === $monster`hellseal pup`) {
      return useSkill$1($skill`Clobber`, false);
    }
    if (enemy === $monster`mother hellseal`) {
      if (canUse$4($item`Rain-Doh indigo cup`)) {
        return useItem$1($item`Rain-Doh indigo cup`);
      }
      return useSkill$1($skill`Lunging Thrust-Smack`, false);
    }
  }
  if (enemy === $monster`french guard turtle` && (0, import_kolmafia85.haveEquipped)($item`fouet de tortue-dressage`) && (0, import_kolmafia85.myMp)() >= (0, import_kolmafia85.mpCost)($skill`Apprivoisez la tortue`)) {
    return useSkill$1($skill`Apprivoisez la tortue`, false);
  }
  if ((0, import_kolmafia85.haveEquipped)($item`protonic accelerator pack`) && isGhost(enemy) && !combat_status_check("skipGhostbusting")) {
    var stunner = getStunner(enemy);
    if (stunner !== import_kolmafia85.Skill.none) {
      combat_status_add("stunned");
      return useSkill$2(stunner);
    }
    var shots_takens = usedCount($skill`Shoot Ghost`);
    if (canUse$1($skill`Shoot Ghost`, false) && shots_takens < 3) {
      var shotsLeft = 3 - shots_takens;
      if (canSurviveShootGhost(enemy, shotsLeft)) {
        markAsUsed($skill`Shoot Ghost`);
        return useSkill$1($skill`Shoot Ghost`, false);
      } else {
        combat_status_add("skipGhostbusting");
      }
    }
    if (canUse$2($skill`Trap Ghost`) && shots_takens === 3) {
      auto_log_info("Busting makes me feel good!!", "green");
      return useSkill$2($skill`Trap Ghost`);
    }
  }
  if ((0, import_kolmafia85.myClass)() === $class`Turtle Tamer` && canUse$2($skill`Spirit Snap`) && (0, import_kolmafia85.myMp)() > 80) {
    if ((0, import_kolmafia85.haveEffect)($effect`Glorious Blessing of the War Snapper`) > 0) {
      return useSkill$2($skill`Spirit Snap`);
    }
    if ((0, import_kolmafia85.haveEffect)($effect`Glorious Blessing of She-Who-Was`) > 0 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`spooky`) {
      return useSkill$2($skill`Spirit Snap`);
    }
  }
  if (canUse$2($skill`Candyblast`) && (0, import_kolmafia85.myMp)() > 60 && inAftercore()) {
    return useSkill$2($skill`Candyblast`);
  }
  if ((0, import_kolmafia85.myClass)() !== $class`Sauceror` && canUse$2(auto_spoonCombatSkill())) {
    return useSkill$2(auto_spoonCombatSkill());
  }
  if (auto_haveCosmicBowlingBall() && canUse$4($item`cosmic bowling ball`) && (0, import_kolmafia85.monsterHp)() < 100) {
    return useItem$1($item`cosmic bowling ball`);
  }
  if (canUse$2($skill`Surprisingly Sweet Stab`)) {
    return useSkill$2($skill`Surprisingly Sweet Stab`);
  }
  if ((0, import_kolmafia85.haveEquipped)($item`Everfull Dart Holster`) && (0, import_kolmafia85.toInt)((0, import_kolmafia85.getProperty)("_dartsLeft")) > 0 && !$monsters`Naughty Sorceress, Naughty Sorceress (2)`.includes(enemy)) {
    return useSkill$1(dartSkill(), false);
  }
  if (canUse$2($skill`Stuffed Mortar Shell`) && (0, import_kolmafia85.myClass)() === $class`Sauceror` && canSurvive$1(2) && (currentFlavour() !== (0, import_kolmafia85.monsterElement)(enemy) || currentFlavour() === import_kolmafia85.Element.none)) {
    (0, import_kolmafia85.setProperty)("_auto_combatTracker_MortarRound", round_1.toString());
    return useSkill$2($skill`Stuffed Mortar Shell`);
  }
  if ((0, import_kolmafia85.haveEquipped)($item`Roman Candelabra`) && (0, import_kolmafia85.haveEffect)($effect`Everything Looks Red`) === 0 && !auto_haveDarts()) {
    return useSkill$2($skill`Blow the Red Candle!`);
  }
  {
    var mortar_round = 0;
    var punch = import_kolmafia85.Skill.none;
    switch ((0, import_kolmafia85.myClass)()) {
      case $class`Seal Clubber`:
        attackMinor = "attack with weapon";
        if (canUse$1($skill`Lunge Smack`, false) && (0, import_kolmafia85.weaponType)((0, import_kolmafia85.equippedItem)($slot`weapon`)) === $stat`Muscle`) {
          attackMinor = useSkill$1($skill`Lunge Smack`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Lunge Smack`);
        }
        if (canUse$1($skill`Lunging Thrust-Smack`, false) && (0, import_kolmafia85.weaponType)((0, import_kolmafia85.equippedItem)($slot`weapon`)) === $stat`Muscle`) {
          attackMajor = useSkill$1($skill`Lunging Thrust-Smack`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Lunging Thrust-Smack`);
        }
        if ((0, import_kolmafia85.buffedHitStat)() - 20 < (0, import_kolmafia85.monsterDefense)() && canUse$1($skill`Saucestorm`, false) && !hasClubEquipped()) {
          attackMajor = useSkill$1($skill`Saucestorm`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
        }
        if (enemy.physicalResistance > 80) {
          var _iterator = _createForOfIteratorHelper(
            $skills`Saucestorm, Saucegeyser`
          ), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var sk = _step.value;
              if (canUse$1(sk, false)) {
                attackMinor = useSkill$1(sk, false);
                attackMajor = useSkill$1(sk, false);
                costMinor = (0, import_kolmafia85.mpCost)(sk);
                costMajor = (0, import_kolmafia85.mpCost)(sk);
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (canUse$1($skill`Northern Explosion`, false) && !auto_canNorthernExplosionFE()) {
            attackMinor = useSkill$1($skill`Northern Explosion`, false);
            attackMajor = useSkill$1($skill`Northern Explosion`, false);
            costMinor = (0, import_kolmafia85.mpCost)($skill`Northern Explosion`);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Northern Explosion`);
          }
        }
        break;
      case $class`Turtle Tamer`:
        attackMinor = "attack with weapon";
        if ((0, import_kolmafia85.myMp)() > 150 && canUse$1($skill`Shieldbutt`, false)) {
          attackMinor = useSkill$1($skill`Shieldbutt`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Shieldbutt`);
        } else if ((0, import_kolmafia85.myMp)() > 80 && (0, import_kolmafia85.myHp)() * 2 < (0, import_kolmafia85.myMaxhp)() && canUse$1($skill`Kneebutt`, false)) {
          attackMinor = useSkill$1($skill`Kneebutt`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Kneebutt`);
        }
        if ((round_1 > 15 || (0, import_kolmafia85.myHp)() * 2 < (0, import_kolmafia85.myMaxhp)()) && canUse$1($skill`Kneebutt`, false)) {
          attackMajor = useSkill$1($skill`Kneebutt`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Kneebutt`);
        }
        if (canUse$1($skill`Shieldbutt`, false)) {
          attackMajor = useSkill$1($skill`Shieldbutt`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Shieldbutt`);
        }
        if ((0, import_kolmafia85.buffedHitStat)() - 20 < (0, import_kolmafia85.monsterDefense)() && canUse$1($skill`Saucestorm`, false)) {
          attackMajor = useSkill$1($skill`Saucestorm`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
        }
        if (enemy.physicalResistance > 80) {
          var _iterator2 = _createForOfIteratorHelper(
            $skills`Saucestorm, Saucegeyser`
          ), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _sk = _step2.value;
              if (canUse$1(_sk, false)) {
                attackMinor = useSkill$1(_sk, false);
                attackMajor = useSkill$1(_sk, false);
                costMinor = (0, import_kolmafia85.mpCost)(_sk);
                costMajor = (0, import_kolmafia85.mpCost)(_sk);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        break;
      case $class`Pastamancer`:
        if (canUse$1($skill`Cannelloni Cannon`, false)) {
          attackMinor = useSkill$1($skill`Cannelloni Cannon`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Cannelloni Cannon`);
        }
        if (canUse$1($skill`Weapon of the Pastalord`, false)) {
          attackMajor = useSkill$2($skill`Weapon of the Pastalord`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Weapon of the Pastalord`);
        }
        if (canUse$1($skill`Saucestorm`, false)) {
          attackMajor = useSkill$1($skill`Saucestorm`, false);
          attackMinor = useSkill$1($skill`Saucestorm`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
        }
        if (canUse$1($skill`Utensil Twist`, false) && (0, import_kolmafia85.itemType)((0, import_kolmafia85.equippedItem)($slot`weapon`)) === "utensil") {
          if ((0, import_kolmafia85.equippedItem)($slot`weapon`) === $item`Hand that Rocks the Ladle`) {
            attackMajor = useSkill$1($skill`Utensil Twist`, false);
            attackMinor = useSkill$1($skill`Utensil Twist`, false);
            costMinor = (0, import_kolmafia85.mpCost)($skill`Utensil Twist`);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Utensil Twist`);
          } else if (enemy.physicalResistance <= 80 && attackMinor !== useSkill$1($skill`Saucestorm`, false)) {
            attackMinor = useSkill$1($skill`Utensil Twist`, false);
            costMinor = (0, import_kolmafia85.mpCost)($skill`Utensil Twist`);
          }
        }
        if ((in_glover() || attackMinor === "attack with weapon") && canUse$1($skill`Saucegeyser`, false)) {
          attackMinor = useSkill$1($skill`Saucegeyser`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Saucegeyser`);
        }
        break;
      case $class`Sauceror`:
        if (canUse$1($skill`Saucegeyser`, false)) {
          attackMinor = useSkill$1($skill`Saucegeyser`, false);
          attackMajor = useSkill$1($skill`Saucegeyser`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Saucegeyser`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucegeyser`);
        } else if (canUse$1($skill`Saucecicle`, false) && (0, import_kolmafia85.monsterElement)(enemy) !== $element`cold`) {
          attackMinor = useSkill$1($skill`Saucecicle`, false);
          attackMajor = useSkill$1($skill`Saucecicle`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Saucecicle`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucecicle`);
        } else if (canUse$1($skill`Saucestorm`, false)) {
          attackMinor = useSkill$1($skill`Saucestorm`, false);
          attackMajor = useSkill$1($skill`Saucestorm`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
        } else if (canUse$1($skill`Wave of Sauce`, false) && (0, import_kolmafia85.monsterElement)(enemy) !== $element`hot`) {
          attackMinor = useSkill$1($skill`Wave of Sauce`, false);
          attackMajor = useSkill$1($skill`Wave of Sauce`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Wave of Sauce`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Wave of Sauce`);
        } else if (canUse$1($skill`Stream of Sauce`, false) && (0, import_kolmafia85.monsterElement)(enemy) !== $element`hot`) {
          attackMinor = useSkill$1($skill`Stream of Sauce`, false);
          attackMajor = useSkill$1($skill`Stream of Sauce`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Stream of Sauce`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Stream of Sauce`);
        }
        mortar_round = (0, import_kolmafia85.toInt)((0, import_kolmafia85.getProperty)("_auto_combatTracker_MortarRound"));
        if (mortar_round > -1 && mortar_round === round_1 - 1 && canSurvive$1(2)) {
          if ((0, import_kolmafia85.monsterHp)() > 1 && canUse$3($item`seal tooth`, false)) {
            return useItem($item`seal tooth`, false);
          }
          if ((0, import_kolmafia85.monsterHp)() > 15 && canUse$1($skill`Salsaball`, false)) {
            return useSkill$1($skill`Salsaball`, false);
          }
        }
        break;
      case $class`Avatar of Boris`:
        if (canUse$1($skill`Heroic Belch`, false) && enemy.physicalResistance >= 80 && $element`stench` !== (0, import_kolmafia85.monsterElement)(enemy)) {
          attackMinor = useSkill$2($skill`Heroic Belch`);
          attackMajor = useSkill$2($skill`Heroic Belch`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Heroic Belch`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Heroic Belch`);
        }
        if (canUse$1($skill`Mighty Axing`, false)) {
          attackMinor = useSkill$1($skill`Mighty Axing`, false);
          attackMajor = useSkill$1($skill`Mighty Axing`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Mighty Axing`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Mighty Axing`);
        }
        if (canUse$1($skill`Cleave`, false)) {
          attackMajor = useSkill$1($skill`Cleave`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Cleave`);
        }
        if ((0, import_kolmafia85.equippedItem)($slot`weapon`) === $item`Trusty` && canUse$1($skill`Throw Trusty`, false) && $monsters`apathetic lizardman, Procrastination Giant`.includes(enemy)) {
          attackMinor = useSkill$1($skill`Throw Trusty`, false);
          attackMajor = useSkill$1($skill`Throw Trusty`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Throw Trusty`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Throw Trusty`);
        }
        if (canUse$1($skill`Heroic Belch`, false) && enemy.physicalResistance >= 100 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`stench` && (0, import_kolmafia85.myFullness)() >= 5) {
          attackMinor = useSkill$1($skill`Heroic Belch`, false);
          attackMajor = useSkill$1($skill`Heroic Belch`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Heroic Belch`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Heroic Belch`);
        }
        break;
      case $class`Avatar of Jarlsberg`:
        attackMinor = useSkill$1($skill`Curdle`, false);
        attackMajor = useSkill$1($skill`Curdle`, false);
        costMinor = (0, import_kolmafia85.mpCost)($skill`Curdle`);
        costMajor = (0, import_kolmafia85.mpCost)($skill`Curdle`);
        if (enemy.physicalResistance < 50) {
          if (canUse$1($skill`Chop`, false)) {
            attackMinor = useSkill$1($skill`Chop`, false);
            attackMajor = useSkill$1($skill`Chop`, false);
            costMinor = (0, import_kolmafia85.mpCost)($skill`Chop`);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Chop`);
          }
          if (canUse$1($skill`Slice`, false)) {
            attackMajor = useSkill$1($skill`Slice`, false);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Slice`);
          }
        }
        if ($elements`cold, spooky`.includes((0, import_kolmafia85.monsterElement)(enemy)) && canUse$2($skill`Bake`)) {
          attackMinor = useSkill$2($skill`Bake`);
          attackMajor = useSkill$2($skill`Bake`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Bake`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Bake`);
        } else if ($elements`cold, spooky`.includes((0, import_kolmafia85.monsterElement)(enemy)) && canUse$1($skill`Boil`, false)) {
          attackMinor = useSkill$1($skill`Boil`, false);
          attackMajor = useSkill$1($skill`Boil`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Boil`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Boil`);
        } else if ($elements`stench, sleaze`.includes((0, import_kolmafia85.monsterElement)(enemy)) && canUse$1($skill`Freeze`, false)) {
          attackMinor = useSkill$1($skill`Freeze`, false);
          attackMajor = useSkill$1($skill`Freeze`, false);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Freeze`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Freeze`);
        } else if (enemy.physicalResistance >= 50) {
          if ((0, import_kolmafia85.monsterElement)(enemy) !== $element`hot` && canUse$2($skill`Bake`)) {
            attackMinor = useSkill$2($skill`Bake`);
            attackMajor = useSkill$2($skill`Bake`);
            costMinor = (0, import_kolmafia85.mpCost)($skill`Bake`);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Bake`);
          } else if ((0, import_kolmafia85.monsterElement)(enemy) !== $element`hot` && canUse$1($skill`Boil`, false)) {
            attackMinor = useSkill$1($skill`Boil`, false);
            attackMajor = useSkill$1($skill`Boil`, false);
            costMinor = (0, import_kolmafia85.mpCost)($skill`Boil`);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Boil`);
          } else if ((0, import_kolmafia85.monsterElement)(enemy) !== $element`cold` && canUse$1($skill`Freeze`, false)) {
            attackMinor = useSkill$1($skill`Freeze`, false);
            attackMajor = useSkill$1($skill`Freeze`, false);
            costMinor = (0, import_kolmafia85.mpCost)($skill`Freeze`);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Freeze`);
          }
        }
        if ($elements`hot, stench`.includes((0, import_kolmafia85.monsterElement)(enemy)) && canUse$1($skill`Fry`, false)) {
          attackMajor = useSkill$1($skill`Fry`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Fry`);
        } else if ((0, import_kolmafia85.monsterElement)(enemy) !== import_kolmafia85.Element.none && canUse$1($skill`Grill`, false)) {
          attackMajor = useSkill$1($skill`Grill`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Grill`);
        } else if (enemy.physicalResistance >= 50) {
          if ((0, import_kolmafia85.monsterElement)(enemy) !== $element`sleaze` && canUse$1($skill`Fry`, false)) {
            attackMajor = useSkill$1($skill`Fry`, false);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Fry`);
          } else if (canUse$1($skill`Grill`, false)) {
            attackMajor = useSkill$1($skill`Grill`, false);
            costMajor = (0, import_kolmafia85.mpCost)($skill`Grill`);
          }
        }
        break;
      case $class`Avatar of Sneaky Pete`:
        if (canUse$1($skill`Pop Wheelie`, false)) {
          attackMajor = useSkill$1($skill`Pop Wheelie`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Pop Wheelie`);
        }
        if (canUse$2($skill`Smoke Break`) && enemy.physicalResistance >= 80) {
          attackMinor = useSkill$2($skill`Smoke Break`);
          attackMajor = useSkill$2($skill`Smoke Break`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Smoke Break`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Smoke Break`);
        } else if (canUse$2($skill`Flash Headlight`) && enemy.physicalResistance >= 80 && ((0, import_kolmafia85.getProperty)("peteMotorbikeHeadlight") === "Party Bulb" || (0, import_kolmafia85.getProperty)("peteMotorbikeHeadlight") === "Blacklight Bulb" && (0, import_kolmafia85.monsterElement)(enemy) !== $element`sleaze`)) {
          attackMinor = useSkill$2($skill`Flash Headlight`);
          attackMajor = useSkill$2($skill`Flash Headlight`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Flash Headlight`);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Flash Headlight`);
        } else if (canUse$3($item`firebomb`, false) && enemy.physicalResistance >= 100 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`hot`) {
          attackMinor = useItem($item`firebomb`, false);
          attackMajor = useItem($item`firebomb`, false);
          costMinor = 0;
          costMajor = 0;
        }
        break;
      case $class`Accordion Thief`:
        if (canUse$2($skill`Cadenza`) && (0, import_kolmafia85.itemType)((0, import_kolmafia85.equippedItem)($slot`weapon`)) === "accordion" && canSurvive$1(2)) {
          if ($items`accordion file, alarm accordion, autocalliope, Bal-musette accordion, baritone accordion, Cajun accordion, ghost accordion, peace accordion, pentatonic accordion, pygmy concertinette, Skipper's accordion, Squeezebox of the Ages, The Trickster's Trikitixa`.includes(
            (0, import_kolmafia85.equippedItem)($slot`weapon`)
          )) {
            return useSkill$2($skill`Cadenza`);
          }
        }
        if ((0, import_kolmafia85.buffedHitStat)() - 20 < (0, import_kolmafia85.monsterDefense)() && canUse$1($skill`Saucestorm`, false)) {
          attackMajor = useSkill$1($skill`Saucestorm`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
        }
        if (enemy.physicalResistance > 80) {
          var _iterator3 = _createForOfIteratorHelper(
            $skills`Saucestorm, Saucegeyser`
          ), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _sk2 = _step3.value;
              if (canUse$1(_sk2, false)) {
                attackMinor = useSkill$1(_sk2, false);
                attackMajor = useSkill$1(_sk2, false);
                costMinor = (0, import_kolmafia85.mpCost)(_sk2);
                costMajor = (0, import_kolmafia85.mpCost)(_sk2);
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        break;
      case $class`Disco Bandit`:
        if (auto_have_skill($skill`Disco State of Mind`) && auto_have_skill($skill`Flashy Dancer`) && auto_have_skill($skill`Disco Greed`) && auto_have_skill($skill`Disco Bravado`) && stunnable(enemy) && (0, import_kolmafia85.monsterLevelAdjustment)() < 150) {
          var mpRegen = ((0, import_kolmafia85.numericModifier)("MP Regen Min") + (0, import_kolmafia85.numericModifier)("MP Regen Max")) / 2;
          var netCost = 0;
          var _iterator4 = _createForOfIteratorHelper(
            $skills`Disco Dance of Doom, Disco Dance II: Electric Boogaloo, Disco Dance 3: Back in the Habit`
          ), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var dance = _step4.value;
              netCost += (0, import_kolmafia85.mpCost)(dance);
              if (canUse$2(dance) && mpRegen > netCost * 2) {
                return useSkill$2(dance);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        if ((0, import_kolmafia85.buffedHitStat)() - 20 < (0, import_kolmafia85.monsterDefense)() && canUse$1($skill`Saucestorm`, false)) {
          attackMajor = useSkill$1($skill`Saucestorm`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Saucestorm`);
        }
        if (enemy.physicalResistance > 80) {
          var _iterator5 = _createForOfIteratorHelper(
            $skills`Saucestorm, Saucegeyser`
          ), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var _sk3 = _step5.value;
              if (canUse$1(_sk3, false)) {
                attackMinor = useSkill$1(_sk3, false);
                attackMajor = useSkill$1(_sk3, false);
                costMinor = (0, import_kolmafia85.mpCost)(_sk3);
                costMajor = (0, import_kolmafia85.mpCost)(_sk3);
                break;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        break;
      case $class`Cow Puncher`:
      case $class`Beanslinger`:
      case $class`Snake Oiler`:
        if (canUse$2($skill`Extract Oil`) && (0, import_kolmafia85.myHp)() > 80 && (0, import_kolmafia85.myMp)() >= 3 * (0, import_kolmafia85.mpCost)($skill`Extract Oil`)) {
          if ($monsters`aggressive grass snake, bacon snake, Batsnake, black adder, Burning Snake of Fire, coal snake, diamondback rattler, frontwinder, Frozen Solid Snake, king snake, licorice snake, mutant rattlesnake, prince snake, sewer snake with a sewer snake in it, Snakeleton, The Snake With Like Ten Heads, tomb asp, Trouser Snake, whitesnake`.includes(
            enemy
          ) && (0, import_kolmafia85.itemAmount)($item`snake oil`) < 4) {
            return useSkill$2($skill`Extract Oil`);
          } else if ($phyla`beast, dude, hippy, humanoid, orc, pirate`.includes(
            type_1
          ) && (0, import_kolmafia85.itemAmount)($item`skin oil`) < 3) {
            return useSkill$2($skill`Extract Oil`);
          } else if ($phyla`bug, construct, constellation, demon, elemental, elf, fish, goblin, hobo, horror, mer-kin, penguin, plant, slime, weird`.includes(
            type_1
          ) && (0, import_kolmafia85.itemAmount)($item`unusual oil`) < 4) {
            return useSkill$2($skill`Extract Oil`);
          } else if ($phyla`undead`.includes(type_1) && (0, import_kolmafia85.itemAmount)($item`eldritch oil`) < 5) {
            return useSkill$2($skill`Extract Oil`);
          }
        }
        if (canUse$2($skill`Good Medicine`) && (0, import_kolmafia85.myMp)() >= 3 * (0, import_kolmafia85.mpCost)($skill`Good Medicine`)) {
          return useSkill$2($skill`Good Medicine`);
        }
        if (canUse$1($skill`Lavafava`, false) && enemy.defenseElement !== $element`hot`) {
          attackMajor = useSkill$1($skill`Lavafava`, false);
          attackMinor = useSkill$1($skill`Lavafava`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Lavafava`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Lavafava`);
        }
        if (canUse$1($skill`Beanstorm`, false)) {
          attackMajor = useSkill$1($skill`Beanstorm`, false);
          attackMinor = useSkill$1($skill`Beanstorm`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Beanstorm`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Beanstorm`);
        }
        if (canUse$1($skill`Fan Hammer`, false) && enemy.physicalResistance < 80) {
          attackMajor = useSkill$1($skill`Fan Hammer`, false);
          attackMinor = useSkill$1($skill`Fan Hammer`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Fan Hammer`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Fan Hammer`);
        }
        if (canUse$1($skill`Snakewhip`, false) && enemy.physicalResistance < 80) {
          attackMajor = useSkill$1($skill`Snakewhip`, false);
          attackMinor = useSkill$1($skill`Snakewhip`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Snakewhip`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Snakewhip`);
        }
        if (canUse$1($skill`Pungent Mung`, false) && enemy.defenseElement !== $element`stench`) {
          attackMajor = useSkill$1($skill`Pungent Mung`, false);
          attackMinor = useSkill$1($skill`Pungent Mung`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Pungent Mung`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Pungent Mung`);
        }
        if (canUse$1($skill`Cowcall`, false) && type_1 !== $phylum`undead` && enemy.defenseElement !== $element`spooky` && ((0, import_kolmafia85.haveEffect)($effect`Cowrruption`) >= 60 || (0, import_kolmafia85.myClass)() === $class`Cow Puncher`)) {
          attackMajor = useSkill$1($skill`Cowcall`, false);
          attackMinor = useSkill$1($skill`Cowcall`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Cowcall`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Cowcall`);
        }
        break;
      case $class`Vampyre`:
        var _iterator6 = _createForOfIteratorHelper(
          $skills`Chill of the Tomb, Blood Spike, Piercing Gaze, Savage Bite`
        ), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var _sk4 = _step6.value;
            if (_sk4 === $skill`Chill of the Tomb` && (0, import_kolmafia85.monsterElement)(enemy) === $element`cold`) {
              continue;
            }
            if (canUse$1(_sk4, false) && (0, import_kolmafia85.myHp)() > (0, import_kolmafia85.hpCost)(_sk4)) {
              attackMajor = useSkill$1(_sk4, false);
              attackMinor = useSkill$1(_sk4, false);
              break;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        if ((0, import_kolmafia85.myHp)() > 0.5 * (0, import_kolmafia85.myMaxhp)() && attackMajor === useSkill$1($skill`Chill of the Tomb`, false) && (0, import_kolmafia85.myLocation)() === $location`The Smut Orc Logging Camp`) {
          break;
        }
        if ((0, import_kolmafia85.myHp)() < (0, import_kolmafia85.myMaxhp)() && ((0, import_kolmafia85.monsterHp)() <= 30 || (0, import_kolmafia85.monsterHp)() <= 100 && auto_have_skill($skill`Hypnotic Eyes`)) && canUse$2($skill`Dark Feast`)) {
          return useSkill$2($skill`Dark Feast`);
        }
        if (attackMinor === "attack with weapon" && !(0, import_kolmafia85.haveSkill)($skill`Preternatural Strength`) && canUse$4($item`beehive`) && $stat`Moxie` !== (0, import_kolmafia85.weaponType)((0, import_kolmafia85.equippedItem)($slot`weapon`))) {
          attackMinor = useItem($item`beehive`, false);
        }
        break;
      case $class`Pig Skinner`:
        attackMinor = "attack with weapon";
        if (canUse$1($skill`Ball Throw`, true) && enemy.physicalResistance < 80) {
          attackMajor = useSkill$1($skill`Ball Throw`, true);
          attackMinor = useSkill$1($skill`Ball Throw`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Ball Throw`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Ball Throw`);
        }
        if (canUse$1($skill`Hot Foot`, true) && enemy.defenseElement !== $element`hot` && !enemyCanBlocksSkills()) {
          attackMajor = useSkill$1($skill`Hot Foot`, true);
          attackMinor = useSkill$1($skill`Hot Foot`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Hot Foot`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Hot Foot`);
        }
        if (canUse$1($skill`Stop Hitting Yourself`, true) && enemy.physicalResistance < 80) {
          attackMajor = useSkill$1($skill`Stop Hitting Yourself`, true);
          attackMinor = useSkill$1($skill`Stop Hitting Yourself`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Stop Hitting Yourself`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Stop Hitting Yourself`);
        }
        if ((0, import_kolmafia85.myHp)() / 0.5 < (0, import_kolmafia85.myMaxhp)() && canUse$1($skill`Second Wind`, true)) {
          attackMajor = useSkill$1($skill`Second Wind`, true);
          attackMinor = useSkill$1($skill`Second Wind`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Second Wind`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Second Wind`);
        }
        break;
      case $class`Cheese Wizard`:
        attackMinor = "attack with weapon";
        if (canUse$2($skill`Parmesan Missile`)) {
          attackMajor = useSkill$1($skill`Parmesan Missile`, false);
          attackMinor = useSkill$1($skill`Parmesan Missile`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Parmesan Missile`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Parmesan Missile`);
        }
        if (canUse$2($skill`Crack Knuckles`) && enemy.physicalResistance < 80) {
          attackMajor = useSkill$1($skill`Crack Knuckles`, true);
          attackMinor = useSkill$1($skill`Crack Knuckles`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Crack Knuckles`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Crack Knuckles`);
        }
        if (canUse$1($skill`Mind Melt`, true)) {
          attackMajor = useSkill$1($skill`Mind Melt`, true);
          attackMinor = useSkill$1($skill`Mind Melt`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Mind Melt`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Mind Melt`);
        }
        if (canUse$1($skill`Stilton Splatter`, true) && enemy.physicalResistance < 80) {
          attackMajor = useSkill$1($skill`Stilton Splatter`, true);
          attackMinor = useSkill$1($skill`Stilton Splatter`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Stilton Splatter`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Stilton Splatter`);
        }
        if (canUse$1($skill`Emmental Elemental`, true) && (0, import_kolmafia85.myHp)() / 0.7 < (0, import_kolmafia85.myMaxhp)()) {
          attackMajor = useSkill$1($skill`Emmental Elemental`, true);
          attackMinor = useSkill$1($skill`Emmental Elemental`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Emmental Elemental`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Emmental Elemental`);
        }
        break;
      case $class`Jazz Agent`:
        attackMinor = "attack with weapon";
        if (canUse$1($skill`Orchestra Strike`, false) && enemy.physicalResistance < 80) {
          attackMajor = useSkill$1($skill`Orchestra Strike`, false);
          attackMinor = useSkill$1($skill`Orchestra Strike`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Orchestra Strike`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Orchestra Strike`);
        }
        if (canUse$1($skill`Sax of Violence`, false) && enemy.defenseElement !== $element`sleaze`) {
          attackMajor = useSkill$1($skill`Sax of Violence`, false);
          attackMinor = useSkill$1($skill`Sax of Violence`, false);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Sax of Violence`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Sax of Violence`);
        }
        if (canUse$1($skill`Venomous Riff`, true)) {
          attackMajor = useSkill$1($skill`Venomous Riff`, true);
          attackMinor = useSkill$1($skill`Venomous Riff`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Venomous Riff`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Venomous Riff`);
        }
        if (canUse$1($skill`Knife In The Darkness`, true) && zone_combatMod((0, import_kolmafia85.myLocation)())._int < 0) {
          attackMajor = useSkill$1($skill`Knife In The Darkness`, true);
          attackMinor = useSkill$1($skill`Knife In The Darkness`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Knife In The Darkness`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Knife In The Darkness`);
        }
        if (canUse($skill`Grit Teeth`, false, true) && (0, import_kolmafia85.myHp)() < (0, import_kolmafia85.myMaxhp)() && combat_status_check("stunned") && round_1 < 5) {
          attackMajor = useSkill$1($skill`Grit Teeth`, true);
          attackMinor = useSkill$1($skill`Grit Teeth`, true);
          costMajor = (0, import_kolmafia85.mpCost)($skill`Grit Teeth`);
          costMinor = (0, import_kolmafia85.mpCost)($skill`Grit Teeth`);
        }
        break;
      case $class`Zootomist`:
        punch = getZooBestPunch$1(enemy);
        if (punch === import_kolmafia85.Skill.none) {
          return "attack with weapon";
        }
        attackMajor = useSkill$1(punch, false);
        attackMinor = useSkill$1(punch, false);
        costMajor = (0, import_kolmafia85.mpCost)(punch);
        costMinor = (0, import_kolmafia85.mpCost)(punch);
        break;
    }
  }
  if ((0, import_kolmafia85.myHp)() * 10 / 3 < (0, import_kolmafia85.myMaxhp)()) {
    if (canUse$2($skill`Thunderstrike`) && (0, import_kolmafia85.monsterLevelAdjustment)() <= 150) {
      return useSkill$2($skill`Thunderstrike`);
    }
    if (canUse$2($skill`Unleash the Greash`) && (0, import_kolmafia85.monsterElement)(enemy) !== $element`sleaze` && (0, import_kolmafia85.haveEffect)($effect`Takin' It Greasy`) > 100) {
      return useSkill$2($skill`Unleash the Greash`);
    }
    if (canUse$2($skill`Thousand-Yard Stare`) && (0, import_kolmafia85.monsterElement)(enemy) !== $element`spooky` && (0, import_kolmafia85.haveEffect)($effect`Intimidating Mien`) > 100) {
      return useSkill$2($skill`Thousand-Yard Stare`);
    }
    if ($monsters`Aquagoblin, Lord Soggyraven, Groar, The Big Wisniewski, The Man`.includes(
      enemy
    ) && (0, import_kolmafia85.myMp)() >= costMajor) {
      return attackMajor;
    }
    if ((0, import_kolmafia85.myClass)() === $class`Turtle Tamer` && canUse$2($skill`Spirit Snap`)) {
      if ((0, import_kolmafia85.haveEffect)($effect`Blessing of the Storm Tortoise`) > 0 || (0, import_kolmafia85.haveEffect)($effect`Grand Blessing of the Storm Tortoise`) > 0 || (0, import_kolmafia85.haveEffect)($effect`Glorious Blessing of the Storm Tortoise`) > 0 || (0, import_kolmafia85.haveEffect)($effect`Glorious Blessing of the War Snapper`) > 0 || (0, import_kolmafia85.haveEffect)($effect`Glorious Blessing of She-Who-Was`) > 0) {
        return useSkill$2($skill`Spirit Snap`);
      }
    }
    if (canUse$2($skill`Northern Explosion`) && !auto_canNorthernExplosionFE() && (0, import_kolmafia85.myClass)() === $class`Seal Clubber` && (0, import_kolmafia85.monsterElement)(enemy) !== $element`cold` && (hasClubEquipped() || (0, import_kolmafia85.buffedHitStat)() - 20 > (0, import_kolmafia85.monsterDefense)())) {
      return useSkill$2($skill`Northern Explosion`);
    }
    if (!combat_status_check("last attempt") && (0, import_kolmafia85.myMp)() >= costMajor) {
      if (canSurvive$1(1.4)) {
        combat_status_add("last attempt");
        auto_log_warning("Uh oh, I'm having trouble in combat.", "red");
      }
      return attackMajor;
    }
    if (canSurvive$1(2.5)) {
      auto_log_warning(
        "Hmmm, I don't really know what to do in this combat but it looks like I'll live.",
        "red"
      );
      if ((0, import_kolmafia85.myMp)() >= costMajor) {
        return attackMajor;
      } else if ((0, import_kolmafia85.myMp)() >= costMinor) {
        return attackMinor;
      }
      return "attack with weapon";
    }
    if ((0, import_kolmafia85.myLocation)() !== $location`The Slime Tube`) {
      (0, import_kolmafia85.abort)("Could not handle monster, sorry");
    }
  }
  if ((0, import_kolmafia85.monsterLevelAdjustment)() > 150 && (0, import_kolmafia85.myMp)() >= 45 && canUse$2($skill`Shell Up`) && (0, import_kolmafia85.myClass)() === $class`Turtle Tamer`) {
    return useSkill$2($skill`Shell Up`);
  }
  if (enemy.physicalResistance >= 100 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`cold` && canUse$1($skill`Throat Refrigerant`, false)) {
    return useSkill$1($skill`Throat Refrigerant`, false);
  }
  if (enemy.physicalResistance >= 100 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`hot` && canUse$1($skill`Boiling Tear Ducts`, false)) {
    return useSkill$1($skill`Boiling Tear Ducts`, false);
  }
  if (enemy.physicalResistance >= 100 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`sleaze` && canUse$2($skill`Projectile Salivary Glands`)) {
    return useSkill$2($skill`Projectile Salivary Glands`);
  }
  if (enemy.physicalResistance >= 100 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`spooky` && canUse$1($skill`Translucent Skin`, false)) {
    return useSkill$1($skill`Translucent Skin`, false);
  }
  if (enemy.physicalResistance >= 100 && (0, import_kolmafia85.monsterElement)(enemy) !== $element`stench` && canUse$1($skill`Skunk Glands`, false)) {
    return useSkill$1($skill`Skunk Glands`, false);
  }
  if (enemy.physicalResistance >= 80 && attackMinor === "attack with weapon") {
    var success = false;
    var m_hot = 1;
    var m_cold = 1;
    var m_spooky = 1;
    var m_sleaze = 1;
    var m_stench = 1;
    switch ((0, import_kolmafia85.monsterElement)(enemy)) {
      case $element`hot`:
        m_hot = 0;
        m_sleaze = 2;
        m_stench = 2;
        break;
      case $element`cold`:
        m_cold = 0;
        m_hot = 2;
        m_spooky = 2;
        break;
      case $element`spooky`:
        m_spooky = 0;
        m_hot = 2;
        m_stench = 2;
        break;
      case $element`sleaze`:
        m_sleaze = 0;
        m_cold = 2;
        m_spooky = 2;
        break;
      case $element`stench`:
        m_stench = 0;
        m_sleaze = 2;
        m_cold = 2;
        break;
    }
    var elementalDamage = (0, import_kolmafia85.toInt)(
      m_hot * (0, import_kolmafia85.numericModifier)("hot damage") + m_cold * (0, import_kolmafia85.numericModifier)("cold damage") + m_spooky * (0, import_kolmafia85.numericModifier)("spooky damage") + m_sleaze * (0, import_kolmafia85.numericModifier)("sleaze damage") + m_stench * (0, import_kolmafia85.numericModifier)("stench damage")
    );
    if (elementalDamage * 5 < (0, import_kolmafia85.monsterHp)()) {
      (0, import_kolmafia85.abort)(
        "I am fighting a physically immune monster and I do not know how to kill it"
      );
    }
  }
  if (enemy === $monster`Wu Tang the Betrayer`) {
    var _iterator7 = _createForOfIteratorHelper(
      $skills`Spectral Snapper, Stinkpalm, Drunken Baby Style, Zendo Kobushi Kancho, Chilled Monkey Brain Technique, Knuckle Sandwich, Seven-Finger Strike, Flying Fire Fist`
    ), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _sk5 = _step7.value;
        if (canUse$1(_sk5, false)) {
          return useSkill$1(_sk5, false);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    (0, import_kolmafia85.abort)(
      "Wu Tang the Betrayer is immune to spells and normal attacks, and I do not know how to kill him"
    );
  }
  if ((0, import_kolmafia85.myLocation)() === $location`The X-32-F Combat Training Snowman` && (0, import_kolmafia85.containsText)(text, "Cattle Prod") && (0, import_kolmafia85.myMp)() >= costMajor) {
    return attackMajor;
  }
  if ((0, import_kolmafia85.monsterLevelAdjustment)() > 150 && (0, import_kolmafia85.myMp)() >= costMajor && attackMajor !== "attack with weapon") {
    return attackMajor;
  }
  if ($monsters`Aquagoblin, Lord Soggyraven, Groar, The Big Wisniewski, The Man`.includes(
    enemy
  ) && (0, import_kolmafia85.myMp)() >= costMajor) {
    return attackMajor;
  }
  if (canUse$1($skill`Lunge Smack`, false) && attackMinor !== "attack with weapon" && (0, import_kolmafia85.weaponType)((0, import_kolmafia85.equippedItem)($slot`weapon`)) === $stat`Muscle`) {
    return attackMinor;
  }
  if ((0, import_kolmafia85.myMp)() >= costMinor && attackMinor !== "attack with weapon") {
    return attackMinor;
  }
  if (round_1 > 20 && canUse$1($skill`Saucestorm`, false)) {
    return useSkill$1($skill`Saucestorm`, false);
  }
  if (attackMinor === "attack with weapon" && (0, import_kolmafia85.monsterDefense)() > 20 && (0, import_kolmafia85.buffedHitStat)() - 20 < (0, import_kolmafia85.monsterDefense)() && canUse$1($skill`Saucestorm`, false)) {
    return useSkill$1($skill`Saucestorm`, false);
  }
  return attackMinor;
}

// src/autoscend/combat/auto_combat_ocrs.ts
var import_kolmafia86 = require("kolmafia");
function ocrs_combat_helper(page) {
  if (!in_ocrs()) {
    auto_log_error("Should not be in ocrs_combat_helper if not on the path!");
  }
  if (isFreeMonster((0, import_kolmafia86.lastMonster)())) {
    if (!combat_status_check("cleesh") && auto_have_skill($skill`CLEESH`) && (0, import_kolmafia86.myMp)() > 10) {
      (0, import_kolmafia86.setProperty)("auto_useCleesh", false.toString());
      combat_status_add("cleesh");
    }
  }
  if ((0, import_kolmafia86.lastMonster)().randomModifiers.includes("unstoppable")) {
    if (!combat_status_check("unstoppable")) {
      var _iterator = _createForOfIteratorHelper(
        $items`DNA extraction syringe, Rain-Doh indigo cup, Rain-Doh blue balls`
      ), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var it = _step.value;
          markAsUsed$1(it);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(
        $skills`Air Dirty Laundry, Ply Reality, Summon Love Mosquito, Summon Love Gnats, Micrometeorite`
      ), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var sk = _step2.value;
          markAsUsed(sk);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }
  if ((0, import_kolmafia86.lastMonster)().randomModifiers.includes("annoying")) {
    if ((0, import_kolmafia86.containsText)(
      page,
      "makes the most annoying noise you've ever heard, stopping you in your tracks."
    )) {
      auto_log_warning("Last action failed, uh oh! Trying to undo!", "olive");
      (0, import_kolmafia86.setProperty)("_auto_combatState", (0, import_kolmafia86.getProperty)("auto_funCombatHandler"));
    }
    (0, import_kolmafia86.setProperty)("auto_funCombatHandler", (0, import_kolmafia86.getProperty)("_auto_combatState"));
  }
  if ((0, import_kolmafia86.lastMonster)().randomModifiers.includes("restless")) {
    if ((0, import_kolmafia86.containsText)(page, "moves out of the way")) {
      auto_log_warning("Last action failed, uh oh! Trying to undo!", "olive");
      (0, import_kolmafia86.setProperty)("_auto_combatState", (0, import_kolmafia86.getProperty)("auto_funCombatHandler"));
    }
    if ((0, import_kolmafia86.containsText)(page, "quickly moves out of the way")) {
      auto_log_warning("Last action failed, uh oh! Trying to undo!", "olive");
      (0, import_kolmafia86.setProperty)("_auto_combatState", (0, import_kolmafia86.getProperty)("auto_funCombatHandler"));
    }
    if ((0, import_kolmafia86.containsText)(page, "will have moved by the time")) {
      auto_log_warning("Last action failed, uh oh! Trying to undo!", "olive");
      (0, import_kolmafia86.setProperty)("_auto_combatState", (0, import_kolmafia86.getProperty)("auto_funCombatHandler"));
    }
    (0, import_kolmafia86.setProperty)("auto_funCombatHandler", (0, import_kolmafia86.getProperty)("_auto_combatState"));
  }
  if ((0, import_kolmafia86.lastMonster)().randomModifiers.includes("phase-shifting")) {
    if ((0, import_kolmafia86.containsText)(page, "blinks out of existence before")) {
      auto_log_warning("Last action failed, uh oh! Trying to undo!", "olive");
      (0, import_kolmafia86.setProperty)("_auto_combatState", (0, import_kolmafia86.getProperty)("auto_funCombatHandler"));
    }
    (0, import_kolmafia86.setProperty)("auto_funCombatHandler", (0, import_kolmafia86.getProperty)("_auto_combatState"));
  }
  if ((0, import_kolmafia86.lastMonster)().randomModifiers.includes("cartwheeling")) {
    if ((0, import_kolmafia86.containsText)(page, "cartwheels out of the way")) {
      auto_log_warning("Last action failed, uh oh! Trying to undo!", "olive");
      (0, import_kolmafia86.setProperty)("_auto_combatState", (0, import_kolmafia86.getProperty)("auto_funCombatHandler"));
    }
    (0, import_kolmafia86.setProperty)("auto_funCombatHandler", (0, import_kolmafia86.getProperty)("_auto_combatState"));
  }
  (0, import_kolmafia86.setProperty)("auto_useCleesh", false.toString());
  if ((0, import_kolmafia86.lastMonster)().randomModifiers.includes("ticking")) {
    if (!combat_status_check("cleesh") && auto_have_skill($skill`CLEESH`) && (0, import_kolmafia86.myMp)() > 10) {
      (0, import_kolmafia86.setProperty)("auto_useCleesh", true.toString());
    }
  }
  if ((0, import_kolmafia86.lastMonster)().randomModifiers.includes("untouchable")) {
    if (!combat_status_check("cleesh") && auto_have_skill($skill`CLEESH`) && (0, import_kolmafia86.myMp)() > 10) {
      (0, import_kolmafia86.setProperty)("auto_useCleesh", true.toString());
    }
  }
  return (0, import_kolmafia86.lastMonster)();
}

// src/autoscend/combat/auto_combat.ts
function auto_combatInitialize(round_1, enemy, text) {
  if (round_1 !== 0) {
    return;
  }
  switch (enemy) {
    case $monster`Government agent`:
      (0, import_kolmafia87.setProperty)("_portscanPending", false.toString());
      (0, import_kolmafia87.stopCounter)("portscan.edu");
      break;
    case $monster`possessed wine rack`:
      (0, import_kolmafia87.setProperty)(
        "auto_wineracksencountered",
        ((0, import_kolmafia87.toInt)((0, import_kolmafia87.getProperty)("auto_wineracksencountered")) + 1).toString()
      );
      break;
    case $monster`cabinet of Dr. Limpieza`:
      (0, import_kolmafia87.setProperty)(
        "auto_cabinetsencountered",
        ((0, import_kolmafia87.toInt)((0, import_kolmafia87.getProperty)("auto_cabinetsencountered")) + 1).toString()
      );
      break;
    case $monster`junksprite bender`:
    case $monster`junksprite melter`:
    case $monster`junksprite sharpener`:
      (0, import_kolmafia87.setProperty)(
        "auto_junkspritesencountered",
        ((0, import_kolmafia87.toInt)((0, import_kolmafia87.getProperty)("auto_junkspritesencountered")) + 1).toString()
      );
      break;
  }
  (0, import_kolmafia87.removeProperty)("_auto_combatState");
  (0, import_kolmafia87.removeProperty)("auto_funCombatHandler");
  (0, import_kolmafia87.removeProperty)("auto_funPrefix");
  (0, import_kolmafia87.setProperty)("auto_combatHandlerThunderBird", "0");
  (0, import_kolmafia87.setProperty)("_auto_combatTracker_MortarRound", (-1).toString());
  var tolog = `auto_combat initialized fighting [${enemy}]: atk = ${(0, import_kolmafia87.monsterAttack)()}. def = ${(0, import_kolmafia87.monsterDefense)()}. HP = ${(0, import_kolmafia87.monsterHp)()}. LA = ${(0, import_kolmafia87.monsterLevelAdjustment)()}`;
  if (in_wildfire()) {
    tolog += `. fire = ${(0, import_kolmafia87.myLocation)().fireLevel}`;
  }
  auto_log_info(tolog, "blue");
}
function auto_combatHandler(round_1, enemy, text) {
  if (round_1 > defaultRoundLimit() && !$monsters`The Man, The Big Wisniewski`.includes(enemy)) {
    if (canUse$2($skill`Implode Universe`)) {
      return useSkill$1($skill`Implode Universe`, true);
    }
    (0, import_kolmafia87.abort)(
      `Some sort of problem occurred, it is past round ${defaultRoundLimit()} but we are still in non-gremlin combat...`
    );
  }
  if (round_1 > 45) {
    (0, import_kolmafia87.abort)(
      "Some sort of problem occurred, it is past round 45 but we are still in a combat with a war boss..."
    );
  }
  auto_combatInitialize(round_1, enemy, text);
  var retval = "";
  var blocked = (0, import_kolmafia87.containsText)(text, "(STUN RESISTED)");
  (0, import_kolmafia87.setProperty)("auto_combatHP", (0, import_kolmafia87.myHp)().toString());
  (0, import_kolmafia87.setProperty)("auto_diag_round", round_1.toString());
  if (in_ocrs()) {
    enemy = ocrs_combat_helper(text);
    enemy = (0, import_kolmafia87.lastMonster)();
  }
  if (in_awol()) {
    awol_combat_helper(text);
  }
  if (in_pokefam()) {
    if ((0, import_kolmafia87.gitExists)("Ezandora-Helix-Fossil")) {
      auto_log_info("Combat via Ezandora:", "green");
      var ignore = (0, import_kolmafia87.cliExecute)("Pocket Familiars");
      return "";
    }
  }
  if (in_avantGuard() && ag_is_bodyguard() && (0, import_kolmafia87.getProperty)("_auto_combatState") !== "(it11311)") {
    enemy = (0, import_kolmafia87.toMonster)(
      (0, import_kolmafia87.substring)(
        (0, import_kolmafia87.getProperty)("lastEncounter"),
        0,
        (0, import_kolmafia87.indexOf)((0, import_kolmafia87.getProperty)("lastEncounter"), " acting as")
      )
    );
  }
  disguises_combat_helper(round_1, enemy, text);
  fotd_combat_helper();
  if ((0, import_kolmafia87.getProperty)("auto_combatDirective") !== "") {
    var actions = new Map(
      (0, import_kolmafia87.splitString)((0, import_kolmafia87.getProperty)("auto_combatDirective"), ";").map(
        (_v, _i) => [
          _i,
          _v
        ]
      )
    );
    var idx = 0;
    if (round_1 === 0) {
      if ((actions.get(0) ?? actions.set(0, "").get(0)) !== "start") {
        (0, import_kolmafia87.setProperty)("auto_combatDirective", "");
        idx = -1;
      } else {
        idx = 1;
      }
    }
    if (idx >= 0) {
      var doThis = actions.get(idx) ?? actions.set(idx, "").get(idx);
      while ((0, import_kolmafia87.containsText)(doThis, "(") && (0, import_kolmafia87.containsText)(doThis, ")") && idx < actions.size) {
        combat_status_add(doThis);
        idx++;
        if (idx >= actions.size) {
          break;
        }
        doThis = actions.get(idx) ?? actions.set(idx, "").get(idx);
      }
      var restore = "";
      for (var i = idx + 1; i < actions.size; i++) {
        restore += actions.get(i) ?? actions.set(i, "").get(i);
        if (i + 1 < actions.size) {
          restore += ";";
        }
      }
      (0, import_kolmafia87.setProperty)("auto_combatDirective", restore);
      if (idx < actions.size) {
        return doThis;
      }
    }
  }
  retval = auto_combatDefaultStage1(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatDefaultStage2(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatDefaultStage3(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatDefaultStage4(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  retval = auto_combatDefaultStage5(round_1, enemy, text);
  if (retval !== "") {
    return retval;
  }
  (0, import_kolmafia87.abort)("We reached the end of combat script without finding anything to do");
  return "";
}

// src/autoscend/combat/auto_combat_ed.ts
var import_kolmafia88 = require("kolmafia");
function auto_edCombatHandler(round_1, enemy, text) {
  var blocked = (0, import_kolmafia88.containsText)(text, "(STUN RESISTED)");
  var damageReceived = 0;
  if (!isActuallyEd()) {
    (0, import_kolmafia88.abort)(
      "Not in Actually Ed the Undying, this combat filter will result in massive suckage."
    );
  }
  if (round_1 === 0) {
    (0, import_kolmafia88.removeProperty)("_auto_combatState");
    if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) === 0) {
      (0, import_kolmafia88.setProperty)(
        "auto_edCombatCount",
        (1 + (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("auto_edCombatCount"))).toString()
      );
    }
    if (!ed_needShop()) {
      (0, import_kolmafia88.setProperty)("auto_edStatus", "dying");
    } else {
      (0, import_kolmafia88.setProperty)("auto_edStatus", "UNDYING!");
    }
    auto_log_info(
      `auto_combat initialized fighting [${enemy}]: atk = ${(0, import_kolmafia88.monsterAttack)()}. def = ${(0, import_kolmafia88.monsterDefense)()}. HP = ${(0, import_kolmafia88.monsterHp)()}. LA = ${(0, import_kolmafia88.monsterLevelAdjustment)()}`,
      "blue"
    );
  } else {
    damageReceived = (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("auto_combatHP")) - (0, import_kolmafia88.myHp)();
    (0, import_kolmafia88.setProperty)("auto_combatHP", (0, import_kolmafia88.myHp)().toString());
  }
  (0, import_kolmafia88.setProperty)(
    "auto_edCombatRoundCount",
    (1 + (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("auto_edCombatRoundCount"))).toString()
  );
  if ($locations`The Hippy Camp, The Outskirts of Cobb's Knob, The Spooky Forest`.includes(
    (0, import_kolmafia88.myLocation)()
  )) {
    if ((0, import_kolmafia88.myMp)() < (0, import_kolmafia88.mpCost)($skill`Fist of the Mummy`) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) < 2) {
      var _iterator = _createForOfIteratorHelper(
        $items`holy spring water, spirit beer, sacramental wine`
      ), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var it = _step.value;
          if (canUse$4(it)) {
            return useItem(it, false);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
  if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) >= 2) {
    (0, import_kolmafia88.setProperty)("auto_edStatus", "dying");
  }
  if (round_1 > 60) {
    (0, import_kolmafia88.abort)("Somehow got to 60 rounds.... aborting");
  }
  if ($monsters`LOV Enforcer, LOV Engineer, LOV Equivocator`.includes(enemy)) {
    (0, import_kolmafia88.setProperty)("auto_edStatus", "dying");
  }
  if (auto_backupTarget() && enemy !== (0, import_kolmafia88.toMonster)((0, import_kolmafia88.getProperty)("lastCopyableMonster")) && canUse$2($skill`Back-Up to your Last Enemy`)) {
    handleTracker$1(
      enemy.toString(),
      $skill`Back-Up to your Last Enemy`.toString(),
      "auto_replaces"
    );
    handleTracker$1(
      (0, import_kolmafia88.toMonster)((0, import_kolmafia88.getProperty)("lastCopyableMonster")).toString(),
      $skill`Back-Up to your Last Enemy`.toString(),
      "auto_copies"
    );
    return useSkill$2($skill`Back-Up to your Last Enemy`);
  }
  if ((0, import_kolmafia88.haveEffect)($effect`Temporary Amnesia`) > 0) {
    return "attack with weapon";
  }
  if (canUse$2($skill`Pocket Crumbs`)) {
    return useSkill$2($skill`Pocket Crumbs`);
  }
  if (canUse$2($skill`Micrometeorite`)) {
    return useSkill$2($skill`Micrometeorite`);
  }
  if (canUse$2($skill`Air Dirty Laundry`)) {
    return useSkill$2($skill`Air Dirty Laundry`);
  }
  if (canUse$2($skill`Summon Love Scarabs`)) {
    return useSkill$2($skill`Summon Love Scarabs`);
  }
  if (canUse$4($item`Time-Spinner`)) {
    return useItem$1($item`Time-Spinner`);
  }
  if (canUse$2($skill`Sing Along`)) {
    if ((0, import_kolmafia88.getProperty)("boomBoxSong") === "Remainin' Alive" || (0, import_kolmafia88.getProperty)("boomBoxSong") === "Total Eclipse of Your Meat" && canSurvive$1(2)) {
      return useSkill$2($skill`Sing Along`);
    }
  }
  if ((0, import_kolmafia88.haveEquipped)($item`protonic accelerator pack`) && isGhost(enemy) && !combat_status_check("skipGhostbusting")) {
    var stunner = getStunner(enemy);
    if (stunner !== import_kolmafia88.Skill.none) {
      combat_status_add("stunned");
      return useSkill$2(stunner);
    }
    var shots_takens = usedCount($skill`Shoot Ghost`);
    if (canUse$1($skill`Shoot Ghost`, false) && shots_takens < 3) {
      var survive_needed = 3.05 - (0, import_kolmafia88.toFloat)(shots_takens);
      if (canSurvive$1(survive_needed)) {
        markAsUsed($skill`Shoot Ghost`);
        return useSkill$1($skill`Shoot Ghost`, false);
      } else {
        combat_status_add("skipGhostbusting");
      }
    }
    if (canUse$2($skill`Trap Ghost`) && shots_takens === 3) {
      auto_log_info("Busting makes me feel good!!", "green");
      return useSkill$2($skill`Trap Ghost`);
    }
  }
  var extinguisherSkill = auto_FireExtinguisherCombatString((0, import_kolmafia88.myLocation)());
  if (extinguisherSkill !== "" && (0, import_kolmafia88.haveEquipped)($item`industrial fire extinguisher`)) {
    handleTracker$1(
      enemy.toString(),
      (0, import_kolmafia88.toSkill)((0, import_kolmafia88.substring)(extinguisherSkill, 6)).toString(),
      "auto_otherstuff"
    );
    return extinguisherSkill;
  }
  var doInstaKill = true;
  if ($monsters`lobsterfrogman`.includes(enemy)) {
    if (auto_have_skill($skill`Digitize`) && (0, import_kolmafia88.getProperty)("_sourceTerminalDigitizeMonster") !== enemy.toString()) {
      doInstaKill = false;
    }
  }
  if ((0, import_kolmafia88.getProperty)("auto_edStatus") === "UNDYING!") {
    if (canUse$2($skill`Summon Love Gnats`)) {
      return useSkill$2($skill`Summon Love Gnats`);
    }
  } else if ((0, import_kolmafia88.getProperty)("auto_edStatus") === "dying") {
    var doStunner = true;
    if ((0, import_kolmafia88.monsterLevelAdjustment)() > 50 && canSurvive$1(1.15)) {
      doStunner = false;
    }
    if (doStunner) {
      if (canUse$2($skill`Summon Love Gnats`)) {
        return useSkill$2($skill`Summon Love Gnats`);
      }
    }
  } else {
    auto_log_warning("Ed combat state does not exist, winging it....", "red");
  }
  if (canUse$2($skill`Fire Sewage Pistol`)) {
    return useSkill$2($skill`Fire Sewage Pistol`);
  }
  if (enemy === $monster`Protagonist`) {
    (0, import_kolmafia88.setProperty)("auto_edStatus", "dying");
  }
  if ((0, import_kolmafia88.myLocation)() !== $location`The Battlefield (Frat Uniform)` && (0, import_kolmafia88.myLocation)() !== $location`The Battlefield (Hippy Uniform)` && !(0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("auto_ignoreFlyer"))) {
    if (canUse$4($item`rock band flyers`) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("flyeredML")) < 1e4) {
      if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) < 2 && (0, import_kolmafia88.getProperty)("auto_edStatus") === "dying") {
        (0, import_kolmafia88.setProperty)("auto_edStatus", "UNDYING!");
      }
      return useItem$1($item`rock band flyers`);
    }
    if (canUse$4($item`jam band flyers`) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("flyeredML")) < 1e4) {
      if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) < 2 && (0, import_kolmafia88.getProperty)("auto_edStatus") === "dying") {
        (0, import_kolmafia88.setProperty)("auto_edStatus", "UNDYING!");
      }
      return useItem$1($item`jam band flyers`);
    }
  }
  if (canUse$4($item`chaos butterfly`) && !(0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("chaosButterflyThrown")) && !(0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("auto_skipL12Farm"))) {
    return useItem$1($item`chaos butterfly`);
  }
  if (enemy === $monster`dirty thieving brigand` && canUse$2($skill`Curse of Fortune`)) {
    if ((0, import_kolmafia88.itemAmount)($item`Ka coin`) > 0 && (0, import_kolmafia88.myHp)() > (0, import_kolmafia88.expectedDamage)() + 15) {
      (0, import_kolmafia88.setProperty)("auto_edStatus", "dying");
      return useSkill$2($skill`Curse of Fortune`);
    } else if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) === 0 && (0, import_kolmafia88.myMaxhp)() > (0, import_kolmafia88.expectedDamage)() + 15) {
      (0, import_kolmafia88.setProperty)("auto_edStatus", "UNDYING!");
    }
  }
  if (canUse$2($skill`Curse of Stench`) && (0, import_kolmafia88.toMonster)((0, import_kolmafia88.getProperty)("stenchCursedMonster")) !== enemy && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) < 3) {
    if (auto_wantToSniff(enemy, (0, import_kolmafia88.myLocation)())) {
      handleTracker$1(
        enemy.toString(),
        $skill`Curse of Stench`.toString(),
        "auto_sniffs"
      );
      return useSkill$2($skill`Curse of Stench`);
    }
  }
  if ((0, import_kolmafia88.myLocation)() === $location`The Secret Council Warehouse`) {
    if (canUse$2($skill`Curse of Stench`) && (0, import_kolmafia88.toMonster)((0, import_kolmafia88.getProperty)("stenchCursedMonster")) !== enemy && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) < 3) {
      var doStench = false;
      if (enemy === $monster`warehouse guard`) {
        var progress = (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("warehouseProgress"));
        progress = progress + 8 * (0, import_kolmafia88.itemAmount)($item`warehouse inventory page`);
        if (progress >= 50) {
          doStench = true;
        }
      }
      if (enemy === $monster`warehouse clerk`) {
        var _progress = (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("warehouseProgress"));
        _progress = _progress + 8 * (0, import_kolmafia88.itemAmount)($item`warehouse map page`);
        if (_progress >= 50) {
          doStench = true;
        }
      }
      if (doStench) {
        handleTracker$1(
          enemy.toString(),
          $skill`Curse of Stench`.toString(),
          "auto_sniffs"
        );
        return useSkill$2($skill`Curse of Stench`);
      }
    }
  }
  if ((0, import_kolmafia88.myLocation)() === $location`The Smut Orc Logging Camp`) {
    if (canUse$2($skill`Curse of Stench`) && (0, import_kolmafia88.toMonster)((0, import_kolmafia88.getProperty)("stenchCursedMonster")) !== enemy && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) < 3) {
      var _doStench = false;
      var stenched = (0, import_kolmafia88.toLowerCase)((0, import_kolmafia88.getProperty)("stenchCursedMonster"));
      if (fastenerCount() >= 30 && stenched !== "smut orc pipelayer" && stenched !== "smut orc jacker") {
        if (enemy === $monster`smut orc pipelayer` || enemy === $monster`smut orc jacker`) {
          _doStench = true;
        }
      }
      if (lumberCount() >= 30 && stenched !== "smut orc screwer" && stenched !== "smut orc nailer") {
        if (enemy === $monster`smut orc screwer` || enemy === $monster`smut orc nailer`) {
          _doStench = true;
        }
      }
      if (_doStench) {
        handleTracker$1(
          enemy.toString(),
          $skill`Curse of Stench`.toString(),
          "auto_sniffs"
        );
        return useSkill$2($skill`Curse of Stench`);
      }
    }
  }
  if (!combat_status_check("yellowray") && auto_wantToYellowRay(enemy, (0, import_kolmafia88.myLocation)())) {
    var combatAction = yellowRayCombatString(
      enemy,
      true,
      $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
        enemy
      )
    );
    if (combatAction !== "") {
      combat_status_add("yellowray");
      if ((0, import_kolmafia88.indexOf)(combatAction, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toSkill)((0, import_kolmafia88.substring)(combatAction, 6)).toString(),
          "auto_yellowRays"
        );
      } else if ((0, import_kolmafia88.indexOf)(combatAction, "item") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toItem)((0, import_kolmafia88.substring)(combatAction, 5)).toString(),
          "auto_yellowRays"
        );
      } else {
        auto_log_warning(
          `Unable to track yellow ray behavior: ${combatAction}`,
          "red"
        );
      }
      if (combatAction === useSkill$1($skill`Asdon Martin: Missile Launcher`, false)) {
        (0, import_kolmafia88.setProperty)("_missileLauncherUsed", true.toString());
      }
      return combatAction;
    } else {
      auto_log_warning("Wanted a yellow ray but we can not find one.", "red");
    }
  }
  if (!combat_status_check("banishercheck") && auto_wantToBanish(enemy, (0, import_kolmafia88.myLocation)())) {
    var banishAction = banisherCombatString$1(
      enemy,
      (0, import_kolmafia88.myLocation)(),
      true
    );
    if (banishAction !== "") {
      auto_log_info(`Looking at banishAction: ${banishAction}`, "green");
      combat_status_add("banisher");
      if ((0, import_kolmafia88.indexOf)(banishAction, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toSkill)((0, import_kolmafia88.substring)(banishAction, 6)).toString(),
          "auto_banishes"
        );
      } else if ((0, import_kolmafia88.indexOf)(banishAction, "item") === 0) {
        if ((0, import_kolmafia88.containsText)(banishAction, ", none")) {
          var commapos = (0, import_kolmafia88.indexOf)(banishAction, ", none");
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia88.toItem)((0, import_kolmafia88.substring)(banishAction, 5, commapos)).toString(),
            "auto_banishes"
          );
        } else {
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia88.toItem)((0, import_kolmafia88.substring)(banishAction, 5)).toString(),
            "auto_banishes"
          );
        }
      } else {
        auto_log_warning(
          `Unable to track banisher behavior: ${banishAction}`,
          "red"
        );
      }
      return banishAction;
    }
    combat_status_add("banishercheck");
  }
  if (!combat_status_check("freeruncheck") && (auto_wantToFreeRun(enemy, (0, import_kolmafia88.myLocation)()) || auto_wantToBanish(enemy, (0, import_kolmafia88.myLocation)()))) {
    var freeRunAction = freeRunCombatString(enemy, (0, import_kolmafia88.myLocation)(), true);
    if (freeRunAction !== "") {
      if ((0, import_kolmafia88.indexOf)(freeRunAction, "runaway familiar") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toFamiliar)((0, import_kolmafia88.substring)(freeRunAction, 17)).toString(),
          "auto_freeruns"
        );
        freeRunAction = "runaway";
      } else if ((0, import_kolmafia88.indexOf)(freeRunAction, "runaway item") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toItem)((0, import_kolmafia88.substring)(freeRunAction, 13)).toString(),
          "auto_freeruns"
        );
        freeRunAction = "runaway";
      } else if ((0, import_kolmafia88.indexOf)(freeRunAction, "skill") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toSkill)((0, import_kolmafia88.substring)(freeRunAction, 6)).toString(),
          "auto_freeruns"
        );
      } else if ((0, import_kolmafia88.indexOf)(freeRunAction, "item") === 0) {
        if ((0, import_kolmafia88.containsText)(freeRunAction, ", none")) {
          var _commapos = (0, import_kolmafia88.indexOf)(freeRunAction, ", none");
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia88.toItem)((0, import_kolmafia88.substring)(freeRunAction, 5, _commapos)).toString(),
            "auto_freeruns"
          );
        } else {
          handleTracker$1(
            enemy.toString(),
            (0, import_kolmafia88.toItem)((0, import_kolmafia88.substring)(freeRunAction, 5)).toString(),
            "auto_freeruns"
          );
        }
      } else {
        auto_log_warning(
          `Unable to track runaway behavior: ${freeRunAction}`,
          "red"
        );
      }
      return freeRunAction;
    }
    combat_status_add("freeruncheck");
  }
  if (!combat_status_check("replacercheck") && auto_wantToReplace(enemy, (0, import_kolmafia88.myLocation)())) {
    var _combatAction = replaceMonsterCombatString(enemy, true);
    if (_combatAction !== "") {
      combat_status_add("replacer");
      if ((0, import_kolmafia88.indexOf)(_combatAction, "skill") === 0) {
        if ((0, import_kolmafia88.toSkill)((0, import_kolmafia88.substring)(_combatAction, 6)) === $skill`CHEAT CODE: Replace Enemy`) {
          handleTracker(
            $skill`CHEAT CODE: Replace Enemy`.toString(),
            "auto_powerfulglove"
          );
        }
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toSkill)((0, import_kolmafia88.substring)(_combatAction, 6)).toString(),
          "auto_replaces"
        );
      } else if ((0, import_kolmafia88.indexOf)(_combatAction, "item") === 0) {
        handleTracker$1(
          enemy.toString(),
          (0, import_kolmafia88.toItem)((0, import_kolmafia88.substring)(_combatAction, 5)).toString(),
          "auto_replaces"
        );
      } else {
        auto_log_warning(
          `Unable to track replacer behavior: ${_combatAction}`,
          "red"
        );
      }
      return _combatAction;
    } else {
      auto_log_warning("Wanted a replacer but we can not find one.", "red");
    }
    combat_status_add("replacercheck");
  }
  if (canUse$4($item`disposable instant camera`) && $monsters`Bob Racecar, Racecar Bob`.includes(enemy)) {
    return useItem$1($item`disposable instant camera`);
  }
  if ((0, import_kolmafia88.myLocation)() === $location`Oil Peak` && canUse$4($item`Duskwalker syringe`)) {
    var oilProgress = (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("twinPeakProgress"));
    var wantCrude = (oilProgress & 4) === 0;
    if ((0, import_kolmafia88.itemAmount)($item`bubblin' crude`) > 11 || (0, import_kolmafia88.itemAmount)($item`jar of oil`) > 0) {
      wantCrude = false;
    }
    if (wantCrude) {
      return useItem$1($item`Duskwalker syringe`);
    }
  }
  if (canUse$4($item`glark cable`) && (0, import_kolmafia88.myLocation)() === $location`The Red Zeppelin` && internalQuestStatus("questL11Ron") === 3 && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_glarkCableUses")) < 5 && (0, import_kolmafia88.getProperty)("auto_edStatus") === "dying") {
    if ($monsters`man with the red buttons, red butler, Red Fox, red skeleton`.includes(
      enemy
    )) {
      return useItem$1($item`glark cable`);
    }
  }
  if (!(0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("edUsedLash")) && canUse$2($skill`Lash of the Cobra`) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edLashCount")) < 30) {
    var doLash = false;
    if (enemy === $monster`shadow slab`) {
      doLash = true;
    }
    if (enemy === $monster`Big Wheelin' Twins` && !possessEquipment($item`badge of authority`)) {
      doLash = true;
    }
    if (enemy === $monster`fishy pirate` && !possessEquipment($item`perfume-soaked bandana`)) {
      doLash = true;
    }
    if (enemy === $monster`funky pirate` && !possessEquipment($item`sewage-clogged pistol`) && elementalPlanes_access($element`spooky`)) {
      doLash = true;
    }
    if (enemy === $monster`garbage tourist` && (0, import_kolmafia88.itemAmount)($item`bag of park garbage`) === 0) {
      doLash = true;
    }
    if (enemy === $monster`dairy goat` && (0, import_kolmafia88.itemAmount)($item`goat cheese`) < 3) {
      doLash = true;
    }
    if (enemy === $monster`monstrous boiler` && (0, import_kolmafia88.itemAmount)($item`red-hot boilermaker`) < 1 && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("booPeakProgress")) > 0) {
      doLash = true;
    }
    if (enemy === $monster`Fitness Giant` && (0, import_kolmafia88.itemAmount)($item`pec oil`) < 1 && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("booPeakProgress")) > 0) {
      doLash = true;
    }
    if (enemy === $monster`Renaissance Giant` && (0, import_kolmafia88.itemAmount)($item`Ye Olde Meade`) < 1) {
      doLash = true;
    }
    if ($monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal`.includes(
      enemy
    )) {
      doLash = true;
    }
    if ($monsters`beanbat, bookbat`.includes(enemy)) {
      doLash = true;
    }
    if ((enemy === $monster`toothy sklelton` || enemy === $monster`spiny skelelton`) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("cyrptNookEvilness")) > 14 + cyrptEvilBonus(true)) {
      doLash = true;
    }
    if (enemy === $monster`oil baron` && (0, import_kolmafia88.itemAmount)($item`bubblin' crude`) < 12 && (0, import_kolmafia88.itemAmount)($item`jar of oil`) === 0) {
      doLash = true;
    }
    if (enemy === $monster`blackberry bush` && (0, import_kolmafia88.itemAmount)($item`blackberry`) < 3 && !possessEquipment($item`blackberry galoshes`)) {
      doLash = true;
    }
    if (enemy === $monster`pygmy bowler` && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edLashCount")) < 26) {
      doLash = true;
    }
    if ($monsters`filthworm drone, filthworm royal guard, larval filthworm`.includes(
      enemy
    )) {
      doLash = true;
    }
    if (enemy === $monster`Knob Goblin Madam`) {
      if ((0, import_kolmafia88.itemAmount)($item`Knob Goblin perfume`) === 0) {
        doLash = true;
      }
    }
    if (enemy === $monster`Knob Goblin Harem Girl`) {
      if (!possessEquipment($item`Knob Goblin harem veil`) || !possessEquipment($item`Knob Goblin harem pants`)) {
        doLash = true;
      }
    }
    if (((0, import_kolmafia88.myLocation)() === $location`The Hippy Camp` || (0, import_kolmafia88.myLocation)() === $location`Wartime Hippy Camp`) && (0, import_kolmafia88.containsText)(enemy.toString(), "hippy") && (0, import_kolmafia88.myLevel)() >= 12) {
      if (!possessEquipment($item`filthy knitted dread sack`) || !possessEquipment($item`filthy corduroys`)) {
        if ((0, import_kolmafia88.getProperty)("auto_edStatus") !== "dying") {
          doLash = true;
        }
      }
    }
    if ((0, import_kolmafia88.myLocation)() === $location`Wartime Frat House`) {
      if (!possessEquipment($item`beer helmet`) || !possessEquipment($item`bejeweled pledge pin`) || !possessEquipment($item`distressed denim pants`)) {
        doLash = true;
      }
    }
    if (enemy === $monster`dopey 7-Foot Dwarf` && !possessEquipment($item`miner's helmet`)) {
      doLash = true;
    }
    if (enemy === $monster`grumpy 7-Foot Dwarf` && !possessEquipment($item`7-Foot Dwarven mattock`)) {
      doLash = true;
    }
    if (enemy === $monster`sleepy 7-Foot Dwarf` && !possessEquipment($item`miner's pants`)) {
      doLash = true;
    }
    if (enemy === $monster`Burly Sidekick` && !possessEquipment($item`Mohawk wig`)) {
      doLash = true;
    }
    if (enemy === $monster`Spunky Princess` && !possessEquipment($item`titanium assault umbrella`) && !possessEquipment($item`unbreakable umbrella`)) {
      doLash = true;
    }
    if (enemy === $monster`Quiet Healer` && !possessEquipment($item`amulet of extreme plot significance`)) {
      doLash = true;
    }
    if (enemy === $monster`warehouse clerk`) {
      var _progress2 = (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("warehouseProgress"));
      _progress2 = _progress2 + 8 * (0, import_kolmafia88.itemAmount)($item`warehouse inventory page`);
      if (_progress2 < 50) {
        doLash = true;
      }
    }
    if (enemy === $monster`warehouse guard`) {
      var _progress3 = (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("warehouseProgress"));
      _progress3 = _progress3 + 8 * (0, import_kolmafia88.itemAmount)($item`warehouse map page`);
      if (_progress3 < 50) {
        doLash = true;
      }
    }
    if (enemy === $monster`Copperhead Club bartender` && internalQuestStatus("questL11Ron") < 2) {
      doLash = true;
    }
    if (doLash) {
      handleTracker(enemy.toString(), "auto_lashes");
      return useSkill$2($skill`Lash of the Cobra`);
    }
  }
  if (!combat_status_check("talismanofrenenutet") && canUse$4($item`talisman of Renenutet`)) {
    var doRenenutet = false;
    if (enemy === $monster`cabinet of Dr. Limpieza` && $location`The Haunted Laundry Room`.turnsSpent > 2) {
      doRenenutet = true;
    }
    if (enemy === $monster`possessed wine rack` && $location`The Haunted Wine Cellar`.turnsSpent > 2) {
      doRenenutet = true;
    }
    if (enemy === $monster`Baa'baa'bu'ran` && (0, import_kolmafia88.itemAmount)($item`stone wool`) < 2) {
      doRenenutet = true;
    }
    if ($monsters`mountain man, warehouse clerk, warehouse guard, waiter dressed as a ninja, ninja dressed as a waiter`.includes(
      enemy
    )) {
      doRenenutet = true;
    }
    if (enemy === $monster`Quiet Healer` && !possessEquipment($item`amulet of extreme plot significance`)) {
      doRenenutet = true;
    }
    if (enemy === $monster`pygmy janitor` && (0, import_kolmafia88.itemAmount)($item`book of matches`) === 0 && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("hiddenTavernUnlock")) !== (0, import_kolmafia88.myAscensions)()) {
      doRenenutet = true;
    }
    if (enemy === $monster`blackberry bush`) {
      if (!possessEquipment($item`blackberry galoshes`) && (0, import_kolmafia88.itemAmount)($item`blackberry`) < 3) {
        doRenenutet = true;
      }
    }
    if ((0, import_kolmafia88.myLocation)() === $location`Wartime Frat House`) {
      if (!possessEquipment($item`beer helmet`) || !possessEquipment($item`bejeweled pledge pin`) || !possessEquipment($item`distressed denim pants`)) {
        doRenenutet = true;
      }
    }
    if ($monsters`Battlie Knight Ghost, Claybender Sorcerer Ghost, Dusken Raider Ghost, Space Tourist Explorer Ghost, Whatsian Commando Ghost`.includes(
      enemy
    )) {
      if ((0, import_kolmafia88.itemAmount)($item`A-Boo clue`) < (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("booPeakProgress")) / 30) {
        doRenenutet = true;
      }
    }
    if ($monsters`toothy sklelton, spiny skelelton`.includes(enemy)) {
      if ((0, import_kolmafia88.myLocation)() === $location`The Defiled Nook` && (0, import_kolmafia88.itemAmount)($item`evil eye`) === 0) {
        doRenenutet = true;
      }
    }
    if ($monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal`.includes(
      enemy
    )) {
      if ((0, import_kolmafia88.itemAmount)($item`rusty hedge trimmers`) === 0) {
        doRenenutet = true;
      }
    }
    if ($monsters`Blue Oyster cultist`.includes(enemy)) {
      doRenenutet = true;
    }
    if (doRenenutet) {
      if (!combat_status_check("curseofindecision") && canUse$2($skill`Curse of Indecision`)) {
        combat_status_add("curseofindecision");
        return useSkill$2($skill`Curse of Indecision`);
      }
      combat_status_add("talismanofrenenutet");
      handleTracker(enemy.toString(), "auto_renenutet");
      (0, import_kolmafia88.setProperty)("auto_edStatus", "dying");
      return useItem$1($item`talisman of Renenutet`);
    }
  }
  if (canUse$4($item`cigarette lighter`) && (0, import_kolmafia88.myLocation)() === $location`A Mob of Zeppelin Protesters` && internalQuestStatus("questL11Ron") === 1 && (0, import_kolmafia88.getProperty)("auto_edStatus") === "dying") {
    return useItem$1($item`cigarette lighter`);
  }
  if (enemy === $monster`pygmy orderlies` && canUse$3($item`short writ of habeas corpus`, false) && (0, import_kolmafia88.haveEffect)($effect`Everything Looks Green`) === 0) {
    return useItem$1($item`short writ of habeas corpus`);
  }
  if (canUse$2($skill`Darts: Aim for the Bullseye`) && (0, import_kolmafia88.haveEffect)($effect`Everything Looks Red`) === 0 && dartELRcd() <= 40) {
    (0, import_kolmafia88.setProperty)("auto_instakillSource", "darts bullseye");
    (0, import_kolmafia88.setProperty)("auto_instakillSuccess", true.toString());
    loopHandlerDelayAll();
    return useSkill$2($skill`Darts: Aim for the Bullseye`);
  }
  if (auto_bowlingBallCombatString((0, import_kolmafia88.myLocation)(), true) !== "" && !enemy.boss) {
    return auto_bowlingBallCombatString((0, import_kolmafia88.myLocation)(), false);
  }
  if (canUse$2($skill`McHugeLarge Avalanche`) && (0, import_kolmafia88.getProperty)("auto_forceNonCombatSource") === "McHugeLarge left ski" && !(0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("auto_avalancheDeployed"))) {
    (0, import_kolmafia88.setProperty)("auto_avalancheDeployed", true.toString());
    return useSkill$2($skill`McHugeLarge Avalanche`);
  }
  if (canUse$2($skill`Launch spikolodon spikes`) && (0, import_kolmafia88.getProperty)("auto_forceNonCombatSource") === "jurassic parka" && !(0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("auto_parkaSpikesDeployed"))) {
    (0, import_kolmafia88.setProperty)("auto_parkaSpikesDeployed", true.toString());
    return useSkill$2($skill`Launch spikolodon spikes`);
  }
  if (instakillable(enemy) && !isFreeMonster$1(enemy, (0, import_kolmafia88.myLocation)()) && doInstaKill) {
    if (!combat_status_check("batoomerang") && (0, import_kolmafia88.itemAmount)($item`replica bat-oomerang`) > 0) {
      if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("auto_batoomerangDay")) !== (0, import_kolmafia88.myDaycount)()) {
        (0, import_kolmafia88.setProperty)("auto_batoomerangDay", (0, import_kolmafia88.myDaycount)().toString());
        (0, import_kolmafia88.setProperty)("auto_batoomerangUse", 0 .toString());
      }
      if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("auto_batoomerangUse")) < 3) {
        (0, import_kolmafia88.setProperty)(
          "auto_batoomerangUse",
          ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("auto_batoomerangUse")) + 1).toString()
        );
        combat_status_add("batoomerang");
        handleTracker$1(
          enemy.toString(),
          $item`replica bat-oomerang`.toString(),
          "auto_instakill"
        );
        loopHandlerDelayAll();
        return `item ${$item`replica bat-oomerang`}`;
      }
    }
    if (canUse$4($item`shadow brick`) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_shadowBricksUsed")) < 13) {
      handleTracker$1(
        enemy.toString(),
        $item`shadow brick`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return useItems$1($item`shadow brick`, import_kolmafia88.Item.none);
    }
    if (!combat_status_check("jokesterGun") && (0, import_kolmafia88.equippedItem)($slot`weapon`) === $item`The Jokester's gun` && !(0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("_firedJokestersGun")) && auto_have_skill($skill`Fire the Jokester's Gun`)) {
      combat_status_add("jokesterGun");
      handleTracker$1(
        enemy.toString(),
        $skill`Fire the Jokester's Gun`.toString(),
        "auto_instakill"
      );
      loopHandlerDelayAll();
      return `skill${$skill`Fire the Jokester's Gun`}`;
    }
    if (canUse$2($skill`Slay the Dead`) && enemy.phylum === $phylum`undead`) {
      return useSkill$2($skill`Slay the Dead`);
    }
  }
  if ((0, import_kolmafia88.getProperty)("auto_edStatus") === "UNDYING!") {
    if ((0, import_kolmafia88.myLocation)() === $location`The Secret Government Laboratory`) {
      if ((0, import_kolmafia88.itemAmount)($item`rock band flyers`) === 0 && (0, import_kolmafia88.itemAmount)($item`jam band flyers`) === 0) {
        if (!combat_status_check("love stinkbug") && (0, import_kolmafia88.toBoolean)((0, import_kolmafia88.getProperty)("lovebugsUnlocked"))) {
          combat_status_add("love stinkbug2");
          return `skill ${$skill`Summon Love Stinkbug`}`;
        }
      }
    }
    if (canUse$3($item`seal tooth`, false)) {
      return "use Seal Tooth; repeat; ";
    }
    return "skill Mild Curse; repeat; ";
  }
  if ((0, import_kolmafia88.haveEquipped)($item`Everfull Dart Holster`) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_dartsLeft")) > 0) {
    return useSkill$1(dartSkill(), false);
  }
  if ((0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_edDefeats")) < 2) {
    if (wantToForceDrop(enemy)) {
      var polarVortexAvailable = canUse$1($skill`Fire Extinguisher: Polar Vortex`, false) && auto_fireExtinguisherCharges() > 10;
      var mildEvilAvailable = canUse$1($skill`Perpetrate Mild Evil`, false) && (0, import_kolmafia88.toInt)((0, import_kolmafia88.getProperty)("_mildEvilPerpetrated")) < 3;
      if (mildEvilAvailable) {
        handleTracker$1(
          enemy.toString(),
          $skill`Perpetrate Mild Evil`.toString(),
          "auto_otherstuff"
        );
        return useSkill$2($skill`Perpetrate Mild Evil`);
      }
      if (polarVortexAvailable) {
        handleTracker$1(
          enemy.toString(),
          $skill`Fire Extinguisher: Polar Vortex`.toString(),
          "auto_otherstuff"
        );
        return useSkill$2($skill`Fire Extinguisher: Polar Vortex`);
      }
    }
  }
  if (canUse$2(auto_spoonCombatSkill())) {
    return useSkill$2(auto_spoonCombatSkill());
  }
  if ((0, import_kolmafia88.myLocation)() === $location`The Secret Government Laboratory` && canUse$1($skill`Roar of the Lion`, false)) {
    if (canUse$1($skill`Storm of the Scarab`, false) && (0, import_kolmafia88.myBuffedstat)($stat`Mysticality`) >= 60) {
      return useSkill$1($skill`Storm of the Scarab`, false);
    }
    return useSkill$1($skill`Roar of the Lion`, false);
  }
  if ($locations`Pirates of the Garbage Barges, The SMOOCH Army HQ, VYKEA`.includes(
    (0, import_kolmafia88.myLocation)()
  ) && canUse$1($skill`Storm of the Scarab`, false)) {
    return useSkill$1($skill`Storm of the Scarab`, false);
  }
  if ($locations`The Hippy Camp, The Outskirts of Cobb's Knob, The Spooky Forest, The Batrat and Ratbat Burrow, The Boss Bat's Lair, Cobb's Knob Harem`.includes(
    (0, import_kolmafia88.myLocation)()
  ) && canUse$1($skill`Fist of the Mummy`, false)) {
    return useSkill$1($skill`Fist of the Mummy`, false);
  }
  var fightStat = (0, import_kolmafia88.myBuffedstat)((0, import_kolmafia88.weaponType)((0, import_kolmafia88.equippedItem)($slot`weapon`))) - 20;
  if (fightStat > (0, import_kolmafia88.monsterDefense)() && round_1 < 20 && canSurvive$1(1.1) && (0, import_kolmafia88.getProperty)("auto_edStatus") === "UNDYING!") {
    return "attack with weapon";
  }
  if (canUse$2($skill`Cowboy Kick`)) {
    return useSkill$2($skill`Cowboy Kick`);
  }
  if (canUse$4($item`ice-cold Cloaca Zero`) && (0, import_kolmafia88.myMp)() < 15 && (0, import_kolmafia88.myMaxmp)() > 200) {
    return useItem$1($item`ice-cold Cloaca Zero`);
  }
  if (canUse$1($skill`Storm of the Scarab`, false) && (0, import_kolmafia88.myBuffedstat)($stat`Mysticality`) > 35) {
    return useSkill$1($skill`Storm of the Scarab`, false);
  }
  if (enemy.physicalResistance >= 100 || round_1 >= 25 || canSurvive$1(1.25)) {
    if (canUse$1($skill`Fist of the Mummy`, false)) {
      return useSkill$1($skill`Fist of the Mummy`, false);
    }
  }
  if ((0, import_kolmafia88.myMp)() < (0, import_kolmafia88.mpCost)($skill`Storm of the Scarab`)) {
    var _iterator2 = _createForOfIteratorHelper(
      $items`holy spring water, spirit beer, sacramental wine`
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _it = _step2.value;
        if (canUse$4(_it)) {
          return useItem(_it, false);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (round_1 >= 29) {
    auto_log_error(
      "About to UNDYING too much but have no other combat resolution. Please report this."
    );
  }
  if (fightStat > (0, import_kolmafia88.monsterDefense)() && round_1 < 20 && canSurvive$1(1.1) && (0, import_kolmafia88.getProperty)("auto_edStatus") === "dying") {
    auto_log_warning(
      `Attacking with weapon because we don't have enough MP. Expected damage: ${(0, import_kolmafia88.expectedDamage)()}, current hp: ${(0, import_kolmafia88.myHp)()}`,
      "red"
    );
    return "attack with weapon";
  }
  return useSkill$1($skill`Mild Curse`, false);
}

// src/autoscend/paths/i_love_u_hate.ts
var import_kolmafia90 = require("kolmafia");
function in_iluh() {
  return (0, import_kolmafia90.myPath)() === $path`11 Things I Hate About U`;
}
function iluh_foodConsumable(str) {
  if (!in_iluh()) {
    return true;
  }
  var foodConsume = (0, import_kolmafia90.toLowerCase)(str);
  if ((0, import_kolmafia90.containsText)(foodConsume, "stunt nut") || (0, import_kolmafia90.containsText)(foodConsume, "wet stew") || (0, import_kolmafia90.containsText)(foodConsume, "wet stunt nut stew")) {
    return true;
  }
  if ((0, import_kolmafia90.containsText)(foodConsume, "u")) {
    return false;
  }
  if ((0, import_kolmafia90.containsText)(foodConsume, "i")) {
    return true;
  }
  return false;
}
function iluh_famAllowed(fam) {
  if (!in_iluh()) {
    return true;
  }
  if ((0, import_kolmafia90.containsText)((0, import_kolmafia90.toLowerCase)(fam), "u")) {
    return false;
  }
  return true;
}

// src/autoscend/quests/level_12.ts
function auto_warSide() {
  if ((0, import_kolmafia91.toBoolean)((0, import_kolmafia91.getProperty)("auto_hippyInstead"))) {
    return "hippy";
  } else {
    return "fratboy";
  }
}

// src/autoscend/paths/dark_gyffte.ts
function in_darkGyffte() {
  return (0, import_kolmafia92.myPath)() === $path`Dark Gyffte`;
}
function bat_maxHPCost(sk) {
  switch (sk) {
    case $skill`Baleful Howl`:
    case $skill`Intimidating Aura`:
    case $skill`Mist Form`:
    case $skill`Sharp Eyes`:
      return 30;
    case $skill`Madness of Untold Aeons`:
      return 25;
    case $skill`Crush`:
    case $skill`Wolf Form`:
    case $skill`Blood Spike`:
    case $skill`Blood Cloak`:
    case $skill`Macabre Cunning`:
    case $skill`Piercing Gaze`:
    case $skill`Ensorcel`:
    case $skill`Flock of Bats Form`:
      return 20;
    case $skill`Ceaseless Snarl`:
    case $skill`Preternatural Strength`:
    case $skill`Blood Chains`:
    case $skill`Sanguine Magnetism`:
    case $skill`Perceive Soul`:
    case $skill`Sinister Charm`:
    case $skill`Batlike Reflexes`:
    case $skill`Spot Weakness`:
      return 15;
    case $skill`Savage Bite`:
    case $skill`[24017]Ferocity`:
    case $skill`Chill of the Tomb`:
    case $skill`Spectral Awareness`:
      return 10;
    case $skill`Flesh Scent`:
    case $skill`Hypnotic Eyes`:
      return 5;
    default:
      return 0;
  }
}
function bat_baseHP() {
  return 20 * (0, import_kolmafia92.min)(23, (0, import_kolmafia92.toInt)((0, import_kolmafia92.getProperty)("darkGyfftePoints"))) + (0, import_kolmafia92.myBasestat)($stat`Muscle`) + 20;
}
function bat_desiredSkills$1(hpLeft, forcedPicks) {
  var costSoFar = 0;
  var baseHP = bat_baseHP();
  var picks = /* @__PURE__ */ new Map();
  if ((0, import_kolmafia92.getProperty)("_auto_bat_bloodBank") !== "2") {
    forcedPicks.set($skill`Intimidating Aura`, true);
  }
  function addPick(sk2) {
    if (picks.has(sk2)) {
      return true;
    }
    if (baseHP - costSoFar - bat_maxHPCost(sk2) < hpLeft) {
      return false;
    }
    costSoFar += bat_maxHPCost(sk2);
    picks.set(sk2, true);
    return true;
  }
  var _iterator4 = _createForOfIteratorHelper(
    forcedPicks.keys()
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var sk = _step4.value;
      addPick(sk);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var _iterator5 = _createForOfIteratorHelper(
    import_kolmafia92.Skill.get(
      [
        "Chill of the Tomb",
        "Blood Chains",
        "Madness of Untold Aeons",
        "Sinister Charm",
        "Blood Cloak",
        "Baleful Howl",
        "Perceive Soul",
        "Hypnotic Eyes",
        "Ensorcel",
        "Sharp Eyes",
        "Batlike Reflexes",
        "Ceaseless Snarl",
        "Flock of Bats Form",
        "Mist Form",
        "Sanguine Magnetism",
        "Macabre Cunning",
        "[24017]Ferocity",
        "Flesh Scent",
        "Wolf Form",
        "Spot Weakness",
        "Preternatural Strength",
        "Savage Bite",
        "Intimidating Aura",
        "Spectral Awareness",
        "Piercing Gaze",
        "Blood Spike"
      ]
    )
  ), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _sk = _step5.value;
      addPick(_sk);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return picks;
}
function bat_reallyPickSkills(hpLeft) {
  var requiredSkills = /* @__PURE__ */ new Map();
  bat_reallyPickSkills$1(hpLeft, requiredSkills);
}
function bat_reallyPickSkills$1(hpLeft, requiredSkills) {
  if (!in_darkGyffte() && (0, import_kolmafia92.myClass)().toString() !== "Astral Spirit") {
    return;
  }
  (0, import_kolmafia92.visitUrl)("campground.php?action=coffin");
  var picks = bat_desiredSkills$1(
    hpLeft,
    requiredSkills
  );
  var url = `choice.php?whichchoice=1342&option=2&pwd=${(0, import_kolmafia92.myHash)()}`;
  var _iterator6 = _createForOfIteratorHelper(
    picks
  ), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var _step6$value = _slicedToArray(_step6.value, 2), sk = _step6$value[0], _ = _step6$value[1];
      url += "&sk[]=";
      url += ((0, import_kolmafia92.toInt)(sk) - 24e3).toString();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  (0, import_kolmafia92.visitUrl)(url);
  (0, import_kolmafia92.visitUrl)(`choice.php?whichchoice=1342&option=1&pwd=${(0, import_kolmafia92.myHash)()}`);
}
function bat_haveEnsorcelee() {
  if (!auto_have_skill($skill`Ensorcel`)) {
    return false;
  }
  return (0, import_kolmafia92.getProperty)("ensorcelee") !== "";
}
function bat_shouldEnsorcel(m) {
  if (!in_darkGyffte() || !auto_have_skill($skill`Ensorcel`)) {
    return false;
  }
  if ((0, import_kolmafia92.monsterPhylum)(m) === $phylum`goblin` && !isFreeMonster$1(m, (0, import_kolmafia92.myLocation)()) && !bat_haveEnsorcelee()) {
    return true;
  }
  return false;
}
function bat_skillValid(sk) {
  if ($skills`Savage Bite, Crush, Baleful Howl, Ceaseless Snarl`.includes(sk) && (0, import_kolmafia92.haveEffect)($effect`Bats Form`) + (0, import_kolmafia92.haveEffect)($effect`Mist Form`) > 0) {
    return false;
  }
  if ($skills`Blood Spike, Blood Chains, Chill of the Tomb, Blood Cloak`.includes(
    sk
  ) && (0, import_kolmafia92.haveEffect)($effect`Wolf Form`) + (0, import_kolmafia92.haveEffect)($effect`Bats Form`) > 0) {
    return false;
  }
  if ($skills`Piercing Gaze, Perceive Soul, Ensorcel, Spectral Awareness`.includes(
    sk
  ) && (0, import_kolmafia92.haveEffect)($effect`Wolf Form`) + (0, import_kolmafia92.haveEffect)($effect`Mist Form`) > 0) {
    return false;
  }
  if ((0, import_kolmafia92.mpCost)(sk) > 0 && in_darkGyffte()) {
    return false;
  }
  return true;
}

// src/autoscend/iotms/mr2017.ts
function asdonCanMissile() {
  return auto_get_campground().has($item`Asdon Martin keyfob (on ring)`) && (0, import_kolmafia93.getFuel)() >= (0, import_kolmafia93.fuelCost)($skill`Asdon Martin: Missile Launcher`) && !(0, import_kolmafia93.toBoolean)((0, import_kolmafia93.getProperty)("_missileLauncherUsed"));
}
function auto_wishesAvailable() {
  var wishes = 0;
  var bottle = wrap_item($item`genie bottle`);
  if ((0, import_kolmafia93.itemAmount)(bottle) > 0 && auto_is_valid(bottle)) {
    wishes += 3 - (0, import_kolmafia93.toInt)((0, import_kolmafia93.getProperty)("_genieWishesUsed"));
  }
  if (auto_is_valid($item`pocket wish`)) {
    wishes += (0, import_kolmafia93.itemAmount)($item`pocket wish`);
  }
  return wishes;
}
function makeGenieWish(wish) {
  var starting_wishes = auto_wishesAvailable();
  if (starting_wishes < 1) {
    return false;
  }
  var wish_provider = 0;
  var bottle = wrap_item($item`genie bottle`);
  if (auto_is_valid(bottle) && (0, import_kolmafia93.itemAmount)(bottle) > 0 && (0, import_kolmafia93.toInt)((0, import_kolmafia93.getProperty)("_genieWishesUsed")) < 3) {
    wish_provider = (0, import_kolmafia93.toInt)(bottle);
  } else if ((0, import_kolmafia93.itemAmount)($item`pocket wish`) > 0 && auto_is_valid($item`pocket wish`)) {
    wish_provider = (0, import_kolmafia93.toInt)($item`pocket wish`);
  }
  if (wish_provider === 0) {
    auto_log_warning(
      "auto_wishesAvailable() thinks I have remaining wishes but makeGenieWish(string wish) was unable to find a valid source for them. wishing failed",
      "red"
    );
    return false;
  }
  var page = (0, import_kolmafia93.visitUrl)(
    `inv_use.php?pwd=${(0, import_kolmafia93.myHash)()}&which=3&whichitem=${wish_provider}`,
    false
  );
  page = (0, import_kolmafia93.visitUrl)(`choice.php?pwd=&whichchoice=1267&option=1&wish=${wish}`);
  if (auto_wishesAvailable() === starting_wishes) {
    auto_log_warning(`Wish: '${wish}' failed`, "red");
    return false;
  }
  handleTracker$2(
    (0, import_kolmafia93.toItem)(wish_provider).toString(),
    (0, import_kolmafia93.myLocation)().toString(),
    wish,
    "auto_wishes"
  );
  return true;
}
function auto_hasMeteorLore() {
  return (0, import_kolmafia93.haveSkill)($skill`Meteor Lore`) && auto_is_valid($item`Pocket Meteor Guide`) && auto_is_valid$2($skill`Meteor Lore`);
}
function auto_macroMeteoritesUsed() {
  return (0, import_kolmafia93.toInt)((0, import_kolmafia93.getProperty)("_macrometeoriteUses"));
}
function auto_macrometeoritesAvailable() {
  if (!auto_hasMeteorLore()) {
    return 0;
  }
  return 10 - auto_macroMeteoritesUsed();
}

// src/autoscend/combat/auto_combat_util.ts
var $_canUse_SkillSet = /* @__PURE__ */ _createClass(
  function $_canUse_SkillSet2() {
    var count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var skills = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Map();
    _classCallCheck(this, $_canUse_SkillSet2);
    this.count = count;
    this.skills = skills;
  }
);
var $_static_1 = false;
function defaultRoundLimit() {
  return 25;
}
function haveUsed(sk) {
  return (0, import_kolmafia94.containsText)(
    (0, import_kolmafia94.getProperty)("_auto_combatState"),
    `(sk${(0, import_kolmafia94.toInt)(sk).toString()})`
  );
}
function haveUsed$1(it) {
  return (0, import_kolmafia94.containsText)(
    (0, import_kolmafia94.getProperty)("_auto_combatState"),
    `(it${(0, import_kolmafia94.toInt)(it).toString()})`
  );
}
function usedCount(sk) {
  var m = new AshMatcher(
    `(sk${(0, import_kolmafia94.toInt)(sk).toString()})`,
    (0, import_kolmafia94.getProperty)("_auto_combatState")
  );
  var count_1 = 0;
  while (m.find()) {
    ++count_1;
  }
  return count_1;
}
function markAsUsed(sk) {
  (0, import_kolmafia94.setProperty)(
    "_auto_combatState",
    `${(0, import_kolmafia94.getProperty)("_auto_combatState")}(sk${(0, import_kolmafia94.toInt)(sk).toString()})`
  );
}
function markAsUsed$1(it) {
  if (it !== import_kolmafia94.Item.none) {
    (0, import_kolmafia94.setProperty)(
      "_auto_combatState",
      `${(0, import_kolmafia94.getProperty)("_auto_combatState")}(it${(0, import_kolmafia94.toInt)(it).toString()})`
    );
  }
}
var $_canUse_exclusives;
function canUse(sk, onlyOnce, inCombat) {
  if (onlyOnce && haveUsed(sk)) {
    return false;
  }
  if (!auto_have_skill(sk)) {
    return false;
  }
  if (inCombat) {
    if ((0, import_kolmafia94.myMp)() < (0, import_kolmafia94.mpCost)(sk) || (0, import_kolmafia94.myHp)() <= (0, import_kolmafia94.hpCost)(sk) || (0, import_kolmafia94.getFuel)() < (0, import_kolmafia94.fuelCost)(sk) || (0, import_kolmafia94.myLightning)() < (0, import_kolmafia94.lightningCost)(sk) || (0, import_kolmafia94.myThunder)() < (0, import_kolmafia94.thunderCost)(sk) || (0, import_kolmafia94.myRain)() < (0, import_kolmafia94.rainCost)(sk) || (0, import_kolmafia94.mySoulsauce)() < (0, import_kolmafia94.soulsauceCost)(sk) || (0, import_kolmafia94.myPp)() < plumber_ppCost(sk) || (0, import_kolmafia94.myMeat)() < (0, import_kolmafia94.meatCost)(sk)) {
      return false;
    }
  } else {
    if ((0, import_kolmafia94.myMaxmp)() < (0, import_kolmafia94.mpCost)(sk) || (0, import_kolmafia94.myMaxhp)() <= (0, import_kolmafia94.hpCost)(sk) || (0, import_kolmafia94.getFuel)() < (0, import_kolmafia94.fuelCost)(sk) || (0, import_kolmafia94.myLightning)() < (0, import_kolmafia94.lightningCost)(sk) || (0, import_kolmafia94.myThunder)() < (0, import_kolmafia94.thunderCost)(sk) || (0, import_kolmafia94.myRain)() < (0, import_kolmafia94.rainCost)(sk) || (0, import_kolmafia94.mySoulsauce)() < (0, import_kolmafia94.soulsauceCost)(sk) || (0, import_kolmafia94.myMeat)() < (0, import_kolmafia94.meatCost)(sk)) {
      return false;
    }
  }
  if (sk === $skill`Shieldbutt` && !hasShieldEquipped()) {
    return false;
  }
  $_canUse_exclusives ?? ($_canUse_exclusives = /* @__PURE__ */ new Map());
  if (!$_static_1) {
    $_canUse_exclusives.set(
      $_canUse_exclusives.size,
      new $_canUse_SkillSet(
        1,
        /* @__PURE__ */ new Map(
          [
            [$skill`Curse of Vichyssoise`, true],
            [$skill`Curse of Marinara`, true],
            [$skill`Curse of the Thousand Islands`, true],
            [$skill`Curse of Weaksauce`, true]
          ]
        )
      )
    );
    $_canUse_exclusives.set(
      $_canUse_exclusives.size,
      new $_canUse_SkillSet(
        (0, import_kolmafia94.equippedAmount)($item`vampyric cloake`),
        /* @__PURE__ */ new Map(
          [
            [$skill`Become a Wolf`, true],
            [$skill`Become a Cloud of Mist`, true],
            [$skill`Become a Bat`, true]
          ]
        )
      )
    );
    $_canUse_exclusives.set(
      $_canUse_exclusives.size,
      new $_canUse_SkillSet(
        1,
        /* @__PURE__ */ new Map(
          [
            [$skill`Shadow Noodles`, true],
            [$skill`Entangling Noodles`, true]
          ]
        )
      )
    );
    $_canUse_exclusives.set(
      $_canUse_exclusives.size,
      new $_canUse_SkillSet(
        1,
        /* @__PURE__ */ new Map(
          [
            [$skill`Silent Slam`, true],
            [$skill`Silent Squirt`, true],
            [$skill`Silent Slice`, true]
          ]
        )
      )
    );
    $_canUse_exclusives.set(
      $_canUse_exclusives.size,
      new $_canUse_SkillSet(
        (0, import_kolmafia94.equippedAmount)(wrap_item($item`haiku katana`)),
        /* @__PURE__ */ new Map(
          [
            [$skill`The 17 Cuts`, true],
            [$skill`Falling Leaf Whirlwind`, true],
            [$skill`Spring Raindrop Attack`, true],
            [$skill`Summer Siesta`, true],
            [$skill`Winter's Bite Technique`, true]
          ]
        )
      )
    );
    $_canUse_exclusives.set(
      $_canUse_exclusives.size,
      new $_canUse_SkillSet(
        (0, import_kolmafia94.equippedAmount)($item`bottle-rocket crossbow`) + (0, import_kolmafia94.equippedAmount)($item`replica bottle-rocket crossbow`),
        /* @__PURE__ */ new Map(
          [
            [$skill`Fire red bottle-rocket`, true],
            [$skill`Fire blue bottle-rocket`, true],
            [$skill`Fire orange bottle-rocket`, true],
            [$skill`Fire purple bottle-rocket`, true],
            [$skill`Fire black bottle-rocket`, true]
          ]
        )
      )
    );
    $_canUse_exclusives.set(
      $_canUse_exclusives.size,
      new $_canUse_SkillSet(
        1,
        /* @__PURE__ */ new Map(
          [
            [$skill`Kodiak Moment`, true],
            [$skill`Grizzly Scene`, true],
            [$skill`Bear-Backrub`, true],
            [$skill`Bear-ly Legal`, true],
            [$skill`Bear Hug`, true]
          ]
        )
      )
    );
    $_static_1 = true;
  }
  var _iterator = _createForOfIteratorHelper(
    $_canUse_exclusives
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray(_step.value, 2), i = _step$value[0], set = _step$value[1];
      if (set.skills.has(sk)) {
        var total = 0;
        var _iterator2 = _createForOfIteratorHelper(
          set.skills.keys()
        ), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var check_1 = _step2.value;
            total += usedCount(check_1);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (total >= set.count) {
          return false;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
function canUse$1(sk, onlyOnce) {
  return canUse(sk, onlyOnce, true);
}
function canUse$2(sk) {
  return canUse$1(sk, true);
}
function canUse$3(it, onlyOnce) {
  if (onlyOnce && haveUsed$1(it)) {
    return false;
  }
  if ((0, import_kolmafia94.itemAmount)(it) === 0) {
    return false;
  }
  if (!auto_is_valid(it)) {
    return false;
  }
  return true;
}
function canUse$4(it) {
  return canUse$3(it, true);
}
function useSkill$1(sk, mark) {
  if (mark) {
    markAsUsed(sk);
  }
  return `skill ${sk.name}`;
}
function useSkill$2(sk) {
  return useSkill$1(sk, true);
}
function useItem(it, mark) {
  if (mark) {
    markAsUsed$1(it);
  }
  if (auto_have_skill($skill`Ambidextrous Funkslinging`)) {
    return `item ${it}, none`;
  }
  return `item ${it}`;
}
function useItem$1(it) {
  return useItem(it, true);
}
function useItems(it1, it2, mark) {
  if (mark) {
    markAsUsed$1(it1);
    markAsUsed$1(it2);
  }
  return `item ${it1}, ${it2}`;
}
function useItems$1(it1, it2) {
  return useItems(it1, it2, true);
}
function isSniffed(enemy, sk) {
  var search = "";
  if (sk === $skill`Get a Good Whiff of This Guy`) {
    search = "Nosy Nose";
  } else {
    search = sk.toString();
  }
  var tracked = (0, import_kolmafia94.trackedBy)(enemy);
  var _iterator3 = _createForOfIteratorHelper(
    tracked.keys()
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var n = _step3.value;
      if ((tracked[n] ?? (tracked[n] = "")) === search) {
        return true;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return false;
}
function isSniffed$1(enemy) {
  var _iterator4 = _createForOfIteratorHelper($skills`Transcendent Olfaction, Make Friends, Long Con, Perceive Soul, Gallapagosian Mating Call, Monkey Point, Offer Latte to Opponent, Motif, Hunt, McHugeLarge Slash, Left %n Kick, Right %n Kick, Meat Cute`), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var sk = _step4.value;
      if (isSniffed(enemy, sk)) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return false;
}
function getSniffer(enemy, inCombat) {
  if (canUse($skill`Transcendent Olfaction`, true, inCombat) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_olfactionsUsed")) < 3 && !isSniffed(enemy, $skill`Transcendent Olfaction`)) {
    return $skill`Transcendent Olfaction`;
  }
  if (canUse($skill`Make Friends`, true, inCombat) && (0, import_kolmafia94.myAudience)() >= 20 && !isSniffed(enemy, $skill`Make Friends`)) {
    return $skill`Make Friends`;
  }
  if (canUse($skill`Hunt`, true, inCombat) && (0, import_kolmafia94.haveEffect)($effect`Everything Looks Red`) === 0 && !isSniffed(enemy, $skill`Hunt`)) {
    return $skill`Hunt`;
  }
  if (canUse($skill`Meat Cute`, true, inCombat) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_meatCuteUsed")) < 5 && !isSniffed(enemy, $skill`Meat Cute`)) {
    return $skill`Meat Cute`;
  }
  if (canUse($skill`Long Con`, true, inCombat) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_longConUsed")) < 5 && !isSniffed(enemy, $skill`Long Con`)) {
    return $skill`Long Con`;
  }
  if (canUse($skill`Perceive Soul`, true, inCombat) && !isSniffed(enemy, $skill`Perceive Soul`)) {
    return $skill`Perceive Soul`;
  }
  if (canUse($skill`Motif`, true, inCombat) && !isSniffed(enemy, $skill`Motif`) && (0, import_kolmafia94.haveEffect)($effect`Everything Looks Blue`) === 0) {
    return $skill`Motif`;
  }
  if (inCombat) {
    if (canUse($skill`Monkey Point`, true, inCombat) && !isSniffed(enemy, $skill`Monkey Point`)) {
      return $skill`Monkey Point`;
    }
    if (canUse($skill`McHugeLarge Slash`, true, inCombat) && !isSniffed(enemy, $skill`McHugeLarge Slash`) && auto_McLargeHugeSniffsLeft() > 0) {
      return $skill`McHugeLarge Slash`;
    }
  } else {
    if (auto_monkeyPawWishesLeft() === 1 && !isSniffed(enemy, $skill`Monkey Point`)) {
      return $skill`Monkey Point`;
    }
    if (possessEquipment($item`McHugeLarge left pole`) && !isSniffed(enemy, $skill`McHugeLarge Slash`) && auto_McLargeHugeSniffsLeft() > 0) {
      return $skill`McHugeLarge Slash`;
    }
  }
  if (canUse($skill`Gallapagosian Mating Call`, true, inCombat) && !isSniffed(enemy, $skill`Gallapagosian Mating Call`)) {
    return $skill`Gallapagosian Mating Call`;
  }
  if ((0, import_kolmafia94.myFamiliar)() === $familiar`Nosy Nose` && canUse$2($skill`Get a Good Whiff of This Guy`) && !isSniffed(enemy, $skill`Get a Good Whiff of This Guy`)) {
    return $skill`Get a Good Whiff of This Guy`;
  }
  if (canUse($skill`Offer Latte to Opponent`, true, inCombat) && !(0, import_kolmafia94.toBoolean)((0, import_kolmafia94.getProperty)("_latteCopyUsed")) && !isSniffed(enemy, $skill`Offer Latte to Opponent`)) {
    return $skill`Offer Latte to Opponent`;
  }
  var z_kick = getZooKickSniff();
  if (canUse$2(z_kick)) {
    return z_kick;
  }
  return import_kolmafia94.Skill.none;
}
function getSniffer$1(enemy) {
  return getSniffer(enemy, true);
}
function getCopier(enemy, inCombat) {
  if (auto_haveRoman() && (0, import_kolmafia94.haveEffect)($effect`Everything Looks Purple`) === 0 || (0, import_kolmafia94.haveEquipped)($item`Roman Candelabra`) && canUse($skill`Blow the Purple Candle!`, true, inCombat) && (0, import_kolmafia94.haveEffect)($effect`Everything Looks Purple`) === 0) {
    return $skill`Blow the Purple Candle!`;
  }
  if (auto_haveEagle() && canUse($skill`%fn\, fire a Red\, White and Blue Blast`, true, inCombat) && !((0, import_kolmafia94.haveEffect)($effect`Everything Looks Red\, White and Blue`) > 0) && enemy.copyable) {
    return $skill`%fn\, fire a Red\, White and Blue Blast`;
  }
  return import_kolmafia94.Skill.none;
}
function getCopier$1(enemy) {
  return getCopier(enemy, true);
}
function getStunner(enemy) {
  if (canUse$2($skill`Blow the Blue Candle!`) && (0, import_kolmafia94.haveEffect)($effect`Everything Looks Blue`) === 0) {
    return $skill`Blow the Blue Candle!`;
  }
  switch ((0, import_kolmafia94.myClass)()) {
    case $class`Seal Clubber`:
      if (canUse$2($skill`Club Foot`) && ((0, import_kolmafia94.myFury)() > 0 || hasClubEquipped())) {
        return $skill`Club Foot`;
      }
      break;
    case $class`Turtle Tamer`:
      if (canUse$2($skill`Shell Up`)) {
        if ((0, import_kolmafia94.haveEffect)($effect`Blessing of the Storm Tortoise`) > 0 || (0, import_kolmafia94.haveEffect)($effect`Grand Blessing of the Storm Tortoise`) > 0 || (0, import_kolmafia94.haveEffect)($effect`Glorious Blessing of the Storm Tortoise`) > 0) {
          return $skill`Shell Up`;
        }
      }
      break;
    case $class`Accordion Thief`:
      if (canUse$2($skill`Accordion Bash`) && (0, import_kolmafia94.itemType)((0, import_kolmafia94.equippedItem)($slot`weapon`)) === "accordion") {
        return $skill`Accordion Bash`;
      }
      break;
    case $class`Pastamancer`:
      if (canUse$2($skill`Entangling Noodles`)) {
        return $skill`Entangling Noodles`;
      }
      break;
    case $class`Sauceror`:
      if (canUse$2($skill`Soul Bubble`)) {
        return $skill`Soul Bubble`;
      }
      break;
    case $class`Avatar of Boris`:
      if (canUse$2($skill`Broadside`)) {
        return $skill`Broadside`;
      }
      break;
    case $class`Avatar of Sneaky Pete`:
      if (canUse$2($skill`Snap Fingers`)) {
        return $skill`Snap Fingers`;
      }
      break;
    case $class`Avatar of Jarlsberg`:
      if (canUse$2($skill`Blend`)) {
        return $skill`Blend`;
      }
      break;
    case $class`Cow Puncher`:
    case $class`Beanslinger`:
    case $class`Snake Oiler`:
      if (canUse$2($skill`Beanscreen`)) {
        return $skill`Beanscreen`;
      }
      if (canUse$2($skill`Hogtie`) && !haveUsed($skill`Beanscreen`) && enemy.parts.includes("leg")) {
        return $skill`Hogtie`;
      }
      break;
    case $class`Vampyre`:
      if (canUse$2($skill`Blood Chains`) && (0, import_kolmafia94.myHp)() > 3 * (0, import_kolmafia94.hpCost)($skill`Blood Chains`)) {
        return $skill`Blood Chains`;
      }
      break;
    case $class`Pig Skinner`:
      if (canUse$2($skill`Noogie`)) {
        return $skill`Noogie`;
      }
      break;
    case $class`Cheese Wizard`:
      if (canUse$2($skill`Gather Cheese-Chi`)) {
        return $skill`Gather Cheese-Chi`;
      }
      break;
    case $class`Jazz Agent`:
      if (canUse$1($skill`Drum Roll`, true)) {
        return $skill`Drum Roll`;
      }
      break;
    case $class`Meat Golem`:
      if (canUse$1($skill`Meat Locker`, true)) {
        return $skill`Meat Locker`;
      }
      break;
  }
  if (canUse$2($skill`Sweat Flood`) && (getSweat() > 98 || (0, import_kolmafia94.containsText)((0, import_kolmafia94.getProperty)("_auto_combatState"), "last attempt"))) {
    return $skill`Sweat Flood`;
  }
  if (canUse$2($skill`Summon Love Gnats`)) {
    return $skill`Summon Love Gnats`;
  }
  if (canUse$2($skill`Mind Bullets`)) {
    return $skill`Mind Bullets`;
  }
  return import_kolmafia94.Skill.none;
}
function enemyCanBlocksSkills() {
  var enemy = (0, import_kolmafia94.lastMonster)();
  if ($monsters`Bonerdagon, Naughty Sorceress, Naughty Sorceress (2)`.includes(
    enemy
  )) {
    return true;
  }
  return false;
}
function canSurvive(mult, add_1) {
  var damage = (0, import_kolmafia94.expectedDamage)();
  damage *= (0, import_kolmafia94.toInt)(mult);
  damage += add_1;
  return damage < (0, import_kolmafia94.myHp)();
}
function canSurvive$1(mult) {
  return canSurvive(mult, 0);
}
function hasClubEquipped() {
  return (0, import_kolmafia94.itemType)((0, import_kolmafia94.equippedItem)($slot`weapon`)) === "club" || (0, import_kolmafia94.itemType)((0, import_kolmafia94.equippedItem)($slot`weapon`)) === "sword" && (0, import_kolmafia94.haveEffect)($effect`Iron Palms`) > 0;
}
function banisherCombatString(enemyPhylum, loc, inCombat) {
  if (inAftercore()) {
    return "";
  }
  if (in_pokefam()) {
    return "";
  }
  if (!auto_wantToBanish$1(enemyPhylum, loc)) {
    return "";
  }
  if (inCombat) {
    auto_log_info(
      `Finding a phylum banisher to use on ${enemyPhylum} at ${loc}`,
      "green"
    );
  }
  if (inCombat ? (0, import_kolmafia94.myFamiliar)() === $familiar`Patriotic Eagle` && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("screechCombats")) === 0 && !in_glover() : !in_avantGuard() && pathAllowsChangingFamiliar() && !auto_famKill($familiar`Patriotic Eagle`, loc) && auto_have_familiar($familiar`Patriotic Eagle`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("screechCombats")) === 0 && !in_glover()) {
    return `skill${$skill`%fn\, Release the Patriotic Screech!`}`;
  }
  return "";
}
function banisherCombatString$1(enemy, loc, inCombat) {
  if (inAftercore()) {
    return "";
  }
  if (in_pokefam()) {
    return "";
  }
  if ((0, import_kolmafia94.isBanished)(enemy)) {
    return "";
  }
  if (!auto_wantToBanish(enemy, loc)) {
    return "";
  }
  if (inCombat) {
    auto_log_info(`Finding a banisher to use on ${enemy} at ${loc}`, "green");
  }
  var useFree = true;
  if (is_werewolf()) {
    useFree = false;
  }
  var used = auto_banishesUsedAt(loc);
  if ((inCombat ? auto_have_skill($skill`Spring Kick`) : possessEquipment($item`spring shoes`)) && auto_is_valid$2($skill`Spring Kick`) && !used.has("Spring Kick")) {
    return `skill ${$skill`Spring Kick`}`;
  }
  if (auto_have_skill($skill`Peel Out`) && pete_peelOutRemaining() > 0 && (0, import_kolmafia94.getProperty)("peteMotorbikeMuffler") === "Extra-Smelly Muffler" && !used.has("Peel Out") && useFree) {
    return `skill ${$skill`Peel Out`}`;
  }
  if (auto_have_skill($skill`Howl of the Alpha`) && (0, import_kolmafia94.myMp)() > (0, import_kolmafia94.mpCost)($skill`Howl of the Alpha`) && !used.has("Howl of the Alpha")) {
    return `skill ${$skill`Howl of the Alpha`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Throw Latte on Opponent`) : possessEquipment($item`latte lovers member's mug`)) && auto_is_valid$2($skill`Throw Latte on Opponent`) && !(0, import_kolmafia94.toBoolean)((0, import_kolmafia94.getProperty)("_latteBanishUsed")) && !used.has("Throw Latte on Opponent") && useFree) {
    return `skill ${$skill`Throw Latte on Opponent`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Give Your Opponent the Stinkeye`) : possessEquipment($item`stinky cheese eye`)) && auto_is_valid$2($skill`Give Your Opponent the Stinkeye`) && !(0, import_kolmafia94.toBoolean)((0, import_kolmafia94.getProperty)("_stinkyCheeseBanisherUsed")) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Give Your Opponent the Stinkeye`) && useFree) {
    return `skill ${$skill`Give Your Opponent the Stinkeye`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Creepy Grin`) : possessEquipment($item`V for Vivala mask`)) && auto_is_valid$2($skill`Creepy Grin`) && !(0, import_kolmafia94.toBoolean)((0, import_kolmafia94.getProperty)("_vmaskBanisherUsed")) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Creepy Grin`) && useFree) {
    return `skill ${$skill`Creepy Grin`}`;
  }
  if (auto_have_skill($skill`Baleful Howl`) && (0, import_kolmafia94.myHp)() > (0, import_kolmafia94.hpCost)($skill`Baleful Howl`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_balefulHowlUses")) < 10 && !used.has("baleful howl") && useFree) {
    loopHandlerDelayAll();
    return `skill ${$skill`Baleful Howl`}`;
  }
  if (auto_have_skill($skill`Thunder Clap`) && (0, import_kolmafia94.myThunder)() >= (0, import_kolmafia94.thunderCost)($skill`Thunder Clap`) && !used.has("thunder clap")) {
    return `skill ${$skill`Thunder Clap`}`;
  }
  if (auto_have_skill($skill`Asdon Martin: Spring-Loaded Front Bumper`) && auto_is_valid$2($skill`Asdon Martin: Spring-Loaded Front Bumper`) && (0, import_kolmafia94.getFuel)() >= (0, import_kolmafia94.fuelCost)($skill`Asdon Martin: Spring-Loaded Front Bumper`) && !used.has("Spring-Loaded Front Bumper") && useFree) {
    if (!(0, import_kolmafia94.containsText)(
      (0, import_kolmafia94.getProperty)("banishedMonsters"),
      "Spring-Loaded Front Bumper"
    )) {
      return `skill ${$skill`Asdon Martin: Spring-Loaded Front Bumper`}`;
    }
  }
  if (auto_have_skill($skill`Curse of Vacation`) && (0, import_kolmafia94.myMp)() > (0, import_kolmafia94.mpCost)($skill`Curse of Vacation`) && !used.has("curse of vacation")) {
    return `skill ${$skill`Curse of Vacation`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Show them your ring`) : possessEquipment($item`mafia middle finger ring`)) && auto_is_valid$2($skill`Show them your ring`) && (0, import_kolmafia94.canEquip)($item`mafia middle finger ring`) && !(0, import_kolmafia94.toBoolean)((0, import_kolmafia94.getProperty)("_mafiaMiddleFingerRingUsed")) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Show them your ring`) && useFree) {
    return `skill ${$skill`Show them your ring`}`;
  }
  if (auto_have_skill($skill`Batter Up!`) && (0, import_kolmafia94.myFury)() >= 5 && (inCombat ? hasClubEquipped() : true) && auto_is_valid$2($skill`Batter Up!`) && !used.has("batter up!")) {
    return `skill ${$skill`Batter Up!`}`;
  }
  if (inCombat ? auto_have_skill($skill`Mark Your Territory`) && !used.has("Mark Your Territory") : auto_is_valid$2($skill`Mark Your Territory`) && (auto_have_skill($skill`Mark Your Territory`) || (0, import_kolmafia94.availableAmount)($item`pheromone cocktail`) > 0 && canDrink$1($item`pheromone cocktail`) && inebriety_left() > 1 && !isActuallyEd())) {
    return `skill ${$skill`Mark Your Territory`}`;
  }
  var z_kick = getZooKickBanish();
  if (auto_have_skill(z_kick) && (0, import_kolmafia94.myMp)() > (0, import_kolmafia94.mpCost)(z_kick)) {
    return `skill ${z_kick}`;
  }
  if (auto_have_skill($skill`Banishing Shout`) && (0, import_kolmafia94.myMp)() > (0, import_kolmafia94.mpCost)($skill`Banishing Shout`) && !used.has("banishing shout")) {
    return `skill ${$skill`Banishing Shout`}`;
  }
  if (auto_have_skill($skill`Walk Away From Explosion`) && (0, import_kolmafia94.myMp)() > (0, import_kolmafia94.mpCost)($skill`Walk Away From Explosion`) && (0, import_kolmafia94.haveEffect)($effect`Bored With Explosions`) === 0 && !used.has("walk away from explosion")) {
    return `skill ${$skill`Walk Away From Explosion`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Talk About Politics`) : possessEquipment($item`Pantsgiving`)) && auto_is_valid$2($skill`Talk About Politics`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_pantsgivingBanish")) < 5 && (0, import_kolmafia94.haveEquipped)($item`Pantsgiving`) && !used.has("pantsgiving")) {
    return `skill ${$skill`Talk About Politics`}`;
  }
  if (inCombat ? auto_have_skill($skill`Reflex Hammer`) : auto_reflexHammersRemaining() > 0 && !used.has("Reflex Hammer") && useFree) {
    return `skill ${$skill`Reflex Hammer`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Show your boring familiar pictures`) : possessEquipment($item`familiar scrapbook`)) && auto_is_valid$2($skill`Show your boring familiar pictures`) && ((0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("scrapbookCharges")) >= 200 || (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("scrapbookCharges")) >= 100 && (0, import_kolmafia94.myLevel)() >= 13) && !used.has("Show Your Boring Familiar Pictures") && useFree) {
    return `skill ${$skill`Show your boring familiar pictures`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Bowl a Curveball`) : (0, import_kolmafia94.itemAmount)($item`cosmic bowling ball`) > 0) && auto_is_valid$2($skill`Bowl a Curveball`) && !used.has("Bowl a Curveball") && useFree) {
    return `skill ${$skill`Bowl a Curveball`}`;
  }
  if (auto_canFeelHatred() && auto_is_valid$2($skill`Feel Hatred`) && !used.has("Feel Hatred") && useFree) {
    return `skill ${$skill`Feel Hatred`}`;
  }
  if (auto_have_skill($skill`[7510]Punt`) && !used.has("Punt")) {
    return `skill ${$skill`[7510]Punt`}`;
  }
  if (auto_have_skill($skill`Snokebomb`) && auto_is_valid$2($skill`Snokebomb`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_snokebombUsed")) < 3 && (0, import_kolmafia94.myMp)() - 20 >= (0, import_kolmafia94.mpCost)($skill`Snokebomb`) && !used.has("snokebomb") && useFree) {
    return `skill ${$skill`Snokebomb`}`;
  }
  if ((0, import_kolmafia94.itemAmount)($item`stuffed yam stinkbomb`) > 0 && !used.has("stuffed yam stinkbomb") && auto_is_valid($item`stuffed yam stinkbomb`)) {
    return `item ${$item`stuffed yam stinkbomb`}`;
  }
  if (inCombat ? (0, import_kolmafia94.itemAmount)($item`handful of split pea soup`) > 0 && !used.has("Handful of split pea soup") && auto_is_valid($item`handful of split pea soup`) && useFree : (0, import_kolmafia94.itemAmount)($item`handful of split pea soup`) > 0 || (0, import_kolmafia94.itemAmount)($item`whirled peas`) >= 2) {
    return `item ${$item`handful of split pea soup`}`;
  }
  if (auto_have_skill($skill`[28021]Punt`) && (0, import_kolmafia94.myMp)() > (0, import_kolmafia94.mpCost)($skill`[28021]Punt`) && !used.has("Punt")) {
    return `skill ${$skill`[28021]Punt`}`;
  }
  var saber = wrap_item($item`Fourth of May Cosplay Saber`);
  if ((inCombat ? (0, import_kolmafia94.haveEquipped)(saber) : possessEquipment(saber)) && auto_is_valid$2($skill`Use the Force`) && auto_saberChargesAvailable() > 0 && !used.has("Saber Force")) {
    if (enemy === import_kolmafia94.Monster.none || enemy.copyable) {
      return auto_combatSaberBanish();
    }
  }
  if ((inCombat ? auto_have_skill($skill`KGB tranquilizer dart`) : possessEquipment($item`Kremlin's Greatest Briefcase`)) && auto_is_valid$2($skill`KGB tranquilizer dart`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_kgbTranquilizerDartUses")) < 3 && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`KGB tranquilizer dart`) && !used.has("KGB tranquilizer dart") && useFree) {
    var useIt = true;
    if ((0, import_kolmafia94.getProperty)("sidequestJunkyardCompleted") !== "none" && (0, import_kolmafia94.myDaycount)() >= 2 && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_kgbTranquilizerDartUses")) >= 2) {
      useIt = false;
    }
    if (useIt) {
      return `skill ${$skill`KGB tranquilizer dart`}`;
    }
  }
  if ((inCombat ? auto_have_skill($skill`Monkey Slap`) : possessEquipment($item`cursed monkey's paw`)) && auto_is_valid$2($skill`Monkey Slap`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_monkeyPawWishesUsed")) === 0 && !used.has("Monkey Slap")) {
    return `skill ${$skill`Monkey Slap`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Sea *dent: Throw a Lightning Bolt`) : possessEquipment($item`Monodent of the Sea`)) && auto_throwLightningRemaining() > 0 && !used.has("Sea *dent: Throw a Lightning Bolt")) {
    return `skill ${$skill`Sea *dent: Throw a Lightning Bolt`}`;
  }
  if (canUse$2($skill`Unleash Nanites`) && (0, import_kolmafia94.haveEffect)($effect`Nanobrawny`) >= 40) {
    return `skill ${$skill`Unleash Nanites`}`;
  }
  if (auto_have_skill($skill`Beancannon`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_beancannonUses")) < 5 && (0, import_kolmafia94.myMp)() - 20 >= (0, import_kolmafia94.mpCost)($skill`Beancannon`) && !used.has("beancannon")) {
    var haveBeans = false;
    var _iterator6 = _createForOfIteratorHelper(
      $items`Frigid Northern Beans, Heimz Fortified Kidney Beans, Hellfire Spicy Beans, Mixed Garbanzos and Chickpeas, Pork 'n' Pork 'n' Pork 'n' Beans, Shrub's Premium Baked Beans, Tesla's Electroplated Beans, Trader Olaf's Exotic Stinkbeans, World's Blackest-Eyed Peas`
    ), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var beancan = _step6.value;
        if (inCombat ? (0, import_kolmafia94.equippedItem)($slot`off-hand`) === beancan : possessEquipment(beancan)) {
          haveBeans = true;
          break;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (haveBeans) {
      return `skill ${$skill`Beancannon`}`;
    }
  }
  if ((0, import_kolmafia94.itemAmount)($item`human musk`) > 0 && !used.has("human musk") && auto_is_valid($item`human musk`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_humanMuskUses")) < 3 && useFree) {
    return `item ${$item`human musk`}`;
  }
  if (inCombat ? auto_have_skill($skill`Breathe Out`) && auto_is_valid$2($skill`Breathe Out`) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Breathe Out`) && !used.has("breathe out") && useFree : auto_is_valid$2($skill`Breathe Out`) && (auto_have_skill($skill`Breathe Out`) || (0, import_kolmafia94.availableAmount)($item`hot jelly`) > 0 && spleen_left() > 1 && !isActuallyEd())) {
    return `skill ${$skill`Breathe Out`}`;
  }
  if (inCombat ? auto_have_skill($skill`Punch Out your Foe`) && auto_is_valid$2($skill`Punch Out your Foe`) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Punch Out your Foe`) && !used.has("punch out your foe") && useFree : auto_is_valid$2($skill`Punch Out your Foe`) && (auto_have_skill($skill`Punch Out your Foe`) || (0, import_kolmafia94.availableAmount)($item`scoop of pre-workout powder`) > 0 && spleen_left() > 3 && !isActuallyEd())) {
    return `skill ${$skill`Punch Out your Foe`}`;
  }
  if (!$monsters`natural spider, Tan Gnat, tomb servant, upgraded ram`.includes(
    enemy
  )) {
    return "";
  }
  var keep = 1;
  if ((0, import_kolmafia94.getProperty)("sidequestJunkyardCompleted") !== "none") {
    keep = 0;
  }
  if ((0, import_kolmafia94.itemAmount)($item`Louder Than Bomb`) > keep && !used.has("louder than bomb") && auto_is_valid($item`Louder Than Bomb`) && useFree) {
    return `item ${$item`Louder Than Bomb`}`;
  }
  if ((0, import_kolmafia94.itemAmount)($item`tennis ball`) > keep && !used.has("tennis ball") && auto_is_valid($item`tennis ball`) && useFree) {
    return `item ${$item`tennis ball`}`;
  }
  if ((0, import_kolmafia94.itemAmount)($item`deathchucks`) > keep && !used.has("deathchucks") && auto_is_valid($item`deathchucks`) && useFree) {
    return `item ${$item`deathchucks`}`;
  }
  if ((0, import_kolmafia94.itemAmount)($item`divine champagne popper`) > keep && !used.has("divine champagne popper") && auto_is_valid($item`divine champagne popper`) && useFree) {
    return `item ${$item`divine champagne popper`}`;
  }
  if ((0, import_kolmafia94.itemAmount)($item`anchor bomb`) > keep && !used.has("anchor bomb") && auto_is_valid($item`anchor bomb`) && useFree) {
    return `item ${$item`anchor bomb`}`;
  }
  return "";
}
function yellowRayCombatString(target, inCombat, noForceDrop) {
  if (in_wildfire() && inCombat && (0, import_kolmafia94.myLocation)().fireLevel > 2) {
    if ((0, import_kolmafia94.haveEquipped)(wrap_item($item`Fourth of May Cosplay Saber`)) && auto_saberChargesAvailable() > 0) {
      if (target === import_kolmafia94.Monster.none || target.copyable && !noForceDrop) {
        return auto_combatSaberYR();
      }
    } else {
      return "";
    }
  }
  if (in_zootomist() && (0, import_kolmafia94.haveEffect)($effect`Everything Looks Yellow`) <= 0) {
    var kick = getZooKickYR();
    if (kick !== import_kolmafia94.Skill.none) {
      return `skill ${kick}`;
    }
  }
  var free_monster = isFreeMonster$1(target, (0, import_kolmafia94.myLocation)()) || (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("breathitinCharges")) > 0 && (0, import_kolmafia94.myLocation)().environment === "outdoor";
  if ((0, import_kolmafia94.haveEffect)($effect`Everything Looks Yellow`) <= 0) {
    if (auto_have_skill($skill`Fondeluge`) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Fondeluge`)) {
      return `skill ${$skill`Fondeluge`}`;
    }
    if ((0, import_kolmafia94.itemAmount)($item`yellowcake bomb`) > 0 && auto_is_valid($item`yellowcake bomb`)) {
      return `item ${$item`yellowcake bomb`}`;
    }
    if (free_monster && (0, import_kolmafia94.itemAmount)($item`yellow rocket`) > 0 && auto_is_valid($item`yellow rocket`)) {
      return `item ${$item`yellow rocket`}`;
    }
    if (inCombat ? (0, import_kolmafia94.haveSkill)($skill`Spit jurassic acid`) : auto_hasParka() && auto_is_valid$2($skill`Spit jurassic acid`) && hasTorso$1()) {
      return `skill ${$skill`Spit jurassic acid`}`;
    }
    if ((0, import_kolmafia94.itemAmount)($item`yellow rocket`) > 0 && auto_is_valid($item`yellow rocket`)) {
      return `item ${$item`yellow rocket`}`;
    }
    if ((0, import_kolmafia94.itemAmount)($item`spitball`) > 0 && auto_is_valid($item`spitball`)) {
      return `item ${$item`spitball`}`;
    }
    if (inCombat ? (0, import_kolmafia94.haveSkill)($skill`Blow the Yellow Candle!`) : auto_haveRoman() && auto_can_equip($item`Roman Candelabra`) && auto_is_valid$2($skill`Blow the Yellow Candle!`)) {
      return `skill ${$skill`Blow the Yellow Candle!`}`;
    }
    if (inCombat ? (0, import_kolmafia94.haveSkill)($skill`Unleash the Devil's Kiss`) : auto_hasRetrocape() && auto_is_valid$2($skill`Unleash the Devil's Kiss`)) {
      return `skill ${$skill`Unleash the Devil's Kiss`}`;
    }
    if (auto_have_skill($skill`Disintegrate`) && auto_is_valid$2($skill`Disintegrate`) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Disintegrate`)) {
      return `skill ${$skill`Disintegrate`}`;
    }
    if (auto_have_skill($skill`Ball Lightning`) && (0, import_kolmafia94.myLightning)() >= (0, import_kolmafia94.lightningCost)($skill`Ball Lightning`)) {
      return `skill ${$skill`Ball Lightning`}`;
    }
    if (auto_have_skill($skill`Wrath of Ra`) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Wrath of Ra`)) {
      return `skill ${$skill`Wrath of Ra`}`;
    }
    if ((0, import_kolmafia94.itemAmount)($item`mayo lance`) > 0 && auto_is_valid($item`mayo lance`) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("mayoLevel")) > 0 && auto_is_valid($item`mayo lance`)) {
      return `item ${$item`mayo lance`}`;
    }
    if ((0, import_kolmafia94.getProperty)("peteMotorbikeHeadlight") === "Ultrabright Yellow Bulb" && auto_have_skill($skill`Flash Headlight`) && (0, import_kolmafia94.myMp)() >= (0, import_kolmafia94.mpCost)($skill`Flash Headlight`)) {
      return `skill ${$skill`Flash Headlight`}`;
    }
    var _iterator7 = _createForOfIteratorHelper(
      $items`Golden Light, pumpkin bomb, unbearable light, viral video, micronova`
    ), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var it = _step7.value;
        if ((0, import_kolmafia94.itemAmount)(it) > 0 && auto_is_valid(it)) {
          return `item ${it}`;
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (auto_have_skill($skill`Unleash Cowrruption`) && (0, import_kolmafia94.haveEffect)($effect`Cowrruption`) >= 30) {
      return `skill ${$skill`Unleash Cowrruption`}`;
    }
    if ((inCombat ? (0, import_kolmafia94.myFamiliar)() === $familiar`Crimbo Shrub` : auto_have_familiar($familiar`Crimbo Shrub`)) && auto_is_valid$2($skill`Open a Big Yellow Present`) && (0, import_kolmafia94.getProperty)("shrubGifts") === "yellow") {
      return `skill ${$skill`Open a Big Yellow Present`}`;
    }
  }
  if (asdonCanMissile()) {
    return `skill ${$skill`Asdon Martin: Missile Launcher`}`;
  }
  if (auto_canNorthernExplosionFE()) {
    return `skill ${$skill`Northern Explosion`}`;
  }
  if (auto_canFeelEnvy()) {
    return `skill ${$skill`Feel Envy`}`;
  }
  var saber = wrap_item($item`Fourth of May Cosplay Saber`);
  if ((inCombat ? (0, import_kolmafia94.haveEquipped)(saber) : possessEquipment(saber)) && auto_saberChargesAvailable() > 0) {
    if (target === import_kolmafia94.Monster.none || target.copyable && !noForceDrop) {
      return auto_combatSaberYR();
    }
  }
  if (inCombat ? (0, import_kolmafia94.haveSkill)($skill`Shocking Lick`) : (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("shockingLickCharges")) > 0 || can_get_battery($item`battery (9-Volt)`)) {
    return `skill ${$skill`Shocking Lick`}`;
  }
  return "";
}
function yellowRayCombatString$1(target, inCombat) {
  return yellowRayCombatString(target, inCombat, false);
}
function replaceMonsterCombatString(target, inCombat) {
  if (in_pokefam()) {
    return "";
  }
  if (auto_macrometeoritesAvailable() > 0 && auto_is_valid$2($skill`Macrometeorite`)) {
    return `skill ${$skill`Macrometeorite`}`;
  }
  if (auto_powerfulGloveReplacesAvailable(inCombat) > 0 && auto_is_valid$2($skill`CHEAT CODE: Replace Enemy`)) {
    return `skill ${$skill`CHEAT CODE: Replace Enemy`}`;
  }
  if (canUse$4($item`waffle`) && !in_avantGuard()) {
    return useItems$1($item`waffle`, import_kolmafia94.Item.none);
  }
  return "";
}
function turns_to_kill(dmg) {
  return (0, import_kolmafia94.toFloat)((0, import_kolmafia94.monsterHp)()) / dmg;
}
function combat_status_check(mark) {
  return (0, import_kolmafia94.containsText)((0, import_kolmafia94.getProperty)("_auto_combatState"), mark);
}
function combat_status_add(mark) {
  var st = (0, import_kolmafia94.getProperty)("_auto_combatState");
  if (!combat_status_check(mark)) {
    st = `${st}(${mark})`;
  }
  (0, import_kolmafia94.setProperty)("_auto_combatState", st);
}
function wantToForceDrop(enemy) {
  var mildEvilAvailable = canUse$1($skill`Perpetrate Mild Evil`, false) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_mildEvilPerpetrated")) < 3;
  var swoopAvailable = canUse$1($skill`Swoop like a Bat`, true) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_batWingsSwoopUsed")) < 11;
  var forceDrop = false;
  if (!combat_status_check("yellowray")) {
    if (enemy === $monster`larval filthworm` && (0, import_kolmafia94.itemAmount)($item`filthworm hatchling scent gland`) < 1) {
      forceDrop = true;
    }
    if (enemy === $monster`filthworm drone` && (0, import_kolmafia94.itemAmount)($item`filthworm drone scent gland`) < 1) {
      forceDrop = true;
    }
    if (enemy === $monster`filthworm royal guard` && (0, import_kolmafia94.itemAmount)($item`filthworm royal guard scent gland`) < 1) {
      forceDrop = true;
    }
  }
  if (auto_fireExtinguisherCharges() > 20 || mildEvilAvailable || swoopAvailable) {
    var dropsFromYR = 0;
    if (combat_status_check("yellowray")) {
      dropsFromYR = 1;
    }
    if ($monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal`.includes(
      enemy
    )) {
      if (hedgeTrimmersNeeded() + dropsFromYR > 0) {
        forceDrop = true;
      }
    }
    if (enemy === $monster`pygmy bowler` && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("hiddenBowlingAlleyProgress")) + (0, import_kolmafia94.itemAmount)($item`bowling ball`) + dropsFromYR < 6) {
      forceDrop = true;
    }
    if (enemy === $monster`dairy goat` && (0, import_kolmafia94.itemAmount)($item`goat cheese`) + dropsFromYR < 3) {
      forceDrop = true;
    }
    if ($item`shadow brick`.toString() in (0, import_kolmafia94.itemDrops)(enemy) && auto_neededShadowBricks() + dropsFromYR > 0) {
      forceDrop = true;
    }
    if (enemy === $monster`Baa'baa'bu'ran` && ((0, import_kolmafia94.itemAmount)($item`stone wool`) === 0 || (0, import_kolmafia94.toBoolean)(dropsFromYR))) {
      forceDrop = true;
    }
  }
  if (isActuallyEd() && (0, import_kolmafia94.myLocation)() === $location`The Secret Council Warehouse`) {
    var progress = (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("warehouseProgress"));
    if (enemy === $monster`warehouse guard`) {
      var n_pages = (0, import_kolmafia94.itemAmount)($item`warehouse map page`);
      var progress_with_pages = progress + n_pages * 8;
      if (progress_with_pages < 39) {
        forceDrop = true;
      }
    } else if (enemy === $monster`warehouse clerk`) {
      var _n_pages = (0, import_kolmafia94.itemAmount)($item`warehouse inventory page`);
      var _progress_with_pages = progress + _n_pages * 8;
      if (_progress_with_pages < 39) {
        forceDrop = true;
      }
    }
  }
  return forceDrop;
}
function wantToDouse(enemy) {
  switch (enemy) {
    case $monster`larval filthworm`:
      return (0, import_kolmafia94.itemAmount)($item`filthworm hatchling scent gland`) === 0;
    case $monster`filthworm drone`:
      return (0, import_kolmafia94.itemAmount)($item`filthworm drone scent gland`) === 0;
    case $monster`filthworm royal guard`:
      return (0, import_kolmafia94.itemAmount)($item`filthworm royal guard scent gland`) === 0;
    case $monster`shadow slab`:
      return (0, import_kolmafia94.itemAmount)($item`shadow brick`) < 13;
  }
  return false;
}
function maxRoundsToDouse(enemy) {
  var rounds = defaultRoundLimit() - 3;
  if (auto_isShadowRiftMonster(enemy)) {
    rounds -= 3;
  }
  if ((0, import_kolmafia94.myClass)() === $class`Disco Bandit`) {
    rounds -= 3;
  }
  var flyer = auto_warSide() === "hippy" ? $item`jam band flyers` : $item`rock band flyers`;
  if (canUse$4(flyer) && (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("flyeredML")) < 1e4) {
    rounds -= 1;
  }
  if (canUse$2($skill`Tear Away your Pants!`)) {
    rounds -= 1;
  }
  if (canUse$2($skill`Perpetrate Mild Evil`)) {
    rounds -= auto_remainingMildEvilUses();
  }
  if (canUse$2($skill`Swoop like a Bat`)) {
    rounds -= 1;
  }
  if (canUse$2($skill`Fire Extinguisher: Polar Vortex`)) {
    rounds -= auto_fireExtinguisherCharges();
  }
  return rounds;
}
function canSurviveShootGhost(enemy, shots) {
  var damage = 0;
  switch (enemy) {
    case $monster`the ghost of Oily McBindle`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.4 * (0, import_kolmafia94.elementalResistance)($element`sleaze`) / 100
      );
      break;
    case $monster`boneless blobghost`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.45 * (0, import_kolmafia94.elementalResistance)($element`spooky`) / 100
      );
      break;
    case $monster`the ghost of Monsieur Baguelle`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.5 * (0, import_kolmafia94.elementalResistance)($element`hot`) / 100
      );
      break;
    case $monster`The Headless Horseman`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.55 * (0, import_kolmafia94.elementalResistance)($element`spooky`) / 100
      );
      break;
    case $monster`The Icewoman`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.6 * (0, import_kolmafia94.elementalResistance)($element`cold`) / 100
      );
      break;
    case $monster`The ghost of Ebenoozer Screege`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.65 * (0, import_kolmafia94.elementalResistance)($element`spooky`) / 100
      );
      break;
    case $monster`The ghost of Lord Montague Spookyraven`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.7 * (0, import_kolmafia94.elementalResistance)($element`stench`) / 100
      );
      break;
    case $monster`The ghost of Vanillica "Trashblossom" Gorton`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.75 * (0, import_kolmafia94.elementalResistance)($element`stench`) / 100
      );
      break;
    case $monster`The ghost of Sam McGee`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.8 * (0, import_kolmafia94.elementalResistance)($element`hot`) / 100
      );
      break;
    case $monster`The ghost of Richard Cockingham`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.85 * (0, import_kolmafia94.elementalResistance)($element`spooky`) / 100
      );
      break;
    case $monster`The ghost of Waldo the Carpathian`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.9 * (0, import_kolmafia94.elementalResistance)($element`hot`) / 100
      );
      break;
    case $monster`Emily Koops\, a spooky lime`:
      damage = (0, import_kolmafia94.toInt)(
        (0, import_kolmafia94.myMaxhp)() * 0.95 * (0, import_kolmafia94.elementalResistance)($element`spooky`) / 100
      );
      break;
    case $monster`The ghost of Jim Unfortunato`:
      damage = (0, import_kolmafia94.toInt)((0, import_kolmafia94.myMaxhp)() * (0, import_kolmafia94.elementalResistance)($element`sleaze`) / 100);
      break;
    default:
      damage = (0, import_kolmafia94.toInt)((0, import_kolmafia94.myMaxhp)() * 0.3);
  }
  return (0, import_kolmafia94.myHp)() > damage * shots;
}
function auto_remainingMildEvilUses() {
  if (!(0, import_kolmafia94.haveSkill)($skill`Perpetrate Mild Evil`)) {
    return 0;
  }
  return 3 - (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("_mildEvilPerpetrated"));
}

// src/autoscend/iotms/mr2023.ts
function wantToThrowGravel(loc, enemy) {
  if ((0, import_kolmafia95.itemAmount)($item`groveling gravel`) === 0) {
    return false;
  }
  if (!auto_is_valid($item`groveling gravel`)) {
    return false;
  }
  if (isFreeMonster$1(enemy, loc)) {
    return false;
  }
  if ((0, import_kolmafia95.canInteract)()) {
    return false;
  }
  return auto_wantToFreeKillWithNoDrops(loc, enemy);
}
function auto_havePayPhone() {
  return auto_is_valid($item`closed-circuit pay phone`) && (0, import_kolmafia95.itemAmount)($item`closed-circuit pay phone`) > 0;
}
function auto_allRifts() {
  return /* @__PURE__ */ new Map(
    [
      [$location`Shadow Rift (Desert Beach)`, true],
      [$location`Shadow Rift (Forest Village)`, true],
      [$location`Shadow Rift (Mt. McLargeHuge)`, true],
      [$location`Shadow Rift (Somewhere Over the Beanstalk)`, true],
      [$location`Shadow Rift (Spookyraven Manor Third Floor)`, true],
      [$location`Shadow Rift (The 8-Bit Realm)`, true],
      [$location`Shadow Rift (The Ancient Buried Pyramid)`, true],
      [$location`Shadow Rift (The Castle in the Clouds in the Sky)`, true],
      [$location`Shadow Rift (The Distant Woods)`, true],
      [$location`Shadow Rift (The Hidden City)`, true],
      [$location`Shadow Rift (The Misspelled Cemetary)`, true],
      [$location`Shadow Rift (The Nearby Plains)`, true],
      [$location`Shadow Rift (The Right Side of the Tracks)`, true]
    ]
  );
}
function auto_availableBrickRift() {
  if (!auto_havePayPhone()) {
    return import_kolmafia95.Location.none;
  }
  if (in_avantGuard() && !auto_haveQueuedForcedNonCombat()) {
    return import_kolmafia95.Location.none;
  }
  var riftsWithBricks = $locations`Shadow Rift (The Ancient Buried Pyramid), Shadow Rift (The Hidden City), Shadow Rift (The Misspelled Cemetary)`;
  var riftsWithWishes = auto_riftsWithWishes();
  if (auto_haveBofa() && auto_wishFactsLeft() > 0) {
    var _iterator = _createForOfIteratorHelper(
      riftsWithBricks
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var loc = _step.value;
        if (riftsWithWishes.has(loc) && (0, import_kolmafia95.canAdventure)(loc)) {
          return loc;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var _iterator2 = _createForOfIteratorHelper(riftsWithBricks), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _loc = _step2.value;
      if ((0, import_kolmafia95.canAdventure)(_loc)) {
        return _loc;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return import_kolmafia95.Location.none;
}
function auto_riftsWithWishes() {
  var out = /* @__PURE__ */ new Map();
  var _iterator3 = _createForOfIteratorHelper(
    auto_allRifts().keys()
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var loc = _step3.value;
      var _iterator4 = _createForOfIteratorHelper(
        import_kolmafia95.Monster.get(Object.keys((0, import_kolmafia95.getLocationMonsters)(loc)))
      ), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var m = _step4.value;
          if ((0, import_kolmafia95.itemFact)(m) === $item`pocket wish`) {
            out.set(loc, true);
            break;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return out;
}
function auto_neededShadowBricks() {
  if (!auto_havePayPhone() || in_avantGuard()) {
    return 0;
  }
  var currentBricks = (0, import_kolmafia95.itemAmount)($item`shadow brick`);
  var bricksUsedToday = (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_shadowBricksUsed"));
  return (0, import_kolmafia95.max)(0, 13 - currentBricks - bricksUsedToday);
}
function auto_isShadowRiftMonster(m) {
  var reg = $monsters`shadow bat, shadow cow, shadow devil, shadow guy, shadow hexagon, shadow orb, shadow prism, shadow slab, shadow snake, shadow spider, shadow stalk, shadow tree`;
  var boss = $monsters`shadow cauldron, shadow matrix, shadow orrery, shadow scythe, shadow spire, shadow tongue`;
  return reg.includes(m) || boss.includes(m);
}
var $_auto_haveMonkeyPaw_paw;
function auto_haveMonkeyPaw() {
  $_auto_haveMonkeyPaw_paw ?? ($_auto_haveMonkeyPaw_paw = $item`cursed monkey's paw`);
  return auto_is_valid($_auto_haveMonkeyPaw_paw) && ((0, import_kolmafia95.itemAmount)($_auto_haveMonkeyPaw_paw) > 0 || (0, import_kolmafia95.haveEquipped)($_auto_haveMonkeyPaw_paw));
}
function auto_monkeyPawWishesLeft() {
  if (auto_haveMonkeyPaw()) {
    return 5 - (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_monkeyPawWishesUsed"));
  }
  return 0;
}
var $_auto_haveCincho_cincho;
function auto_haveCincho() {
  $_auto_haveCincho_cincho ?? ($_auto_haveCincho_cincho = wrap_item($item`Cincho de Mayo`));
  if (auto_is_valid($_auto_haveCincho_cincho) && ((0, import_kolmafia95.itemAmount)($_auto_haveCincho_cincho) > 0 || (0, import_kolmafia95.haveEquipped)($_auto_haveCincho_cincho))) {
    return true;
  }
  return false;
}
function auto_currentCinch() {
  if (!auto_haveCincho()) {
    return 0;
  }
  return 100 - (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_cinchUsed"));
}
function auto_cinchFromNextRest() {
  var cinchoRestsAlready = (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_cinchoRests"));
  cinchoRestsAlready++;
  return auto_cinchFromRestN(cinchoRestsAlready);
}
function auto_cinchFromRestN(n) {
  var cinchGainedFromRest = 5;
  if (n <= 5) {
    cinchGainedFromRest = 30;
  } else if (n === 6) {
    cinchGainedFromRest = 25;
  } else if (n === 7) {
    cinchGainedFromRest = 20;
  } else if (n === 8) {
    cinchGainedFromRest = 15;
  } else if (n === 9) {
    cinchGainedFromRest = 10;
  }
  return cinchGainedFromRest;
}
function auto_cinchAfterNextRest() {
  return auto_currentCinch() + auto_cinchFromNextRest();
}
function auto_nextRestOverCinch() {
  return auto_cinchAfterNextRest() > 100;
}
function shouldCinchoConfetti() {
  if (!canUse$2($skill`Cincho: Confetti Extravaganza`)) {
    return false;
  }
  if (!disregardInstantKarma()) {
    return false;
  }
  if (auto_currentCinch() > 60) {
    return false;
  }
  if (haveFreeRestAvailable() || (0, import_kolmafia95.numericModifier)("Free Rests") < auto_potentialMaxFreeRests()) {
    return false;
  }
  return true;
}
function auto_haveIdolMicrophone() {
  if ((0, import_kolmafia95.itemAmount)($item`Loathing Idol Microphone`) > 0) {
    return true;
  }
  if ((0, import_kolmafia95.itemAmount)($item`Loathing Idol Microphone (75% charged)`) > 0) {
    return true;
  }
  if ((0, import_kolmafia95.itemAmount)($item`Loathing Idol Microphone (50% charged)`) > 0) {
    return true;
  }
  if ((0, import_kolmafia95.itemAmount)($item`Loathing Idol Microphone (25% charged)`) > 0) {
    return true;
  }
  return false;
}
function auto_dousesRemaining() {
  var fluda = $item`Flash Liquidizer Ultra Dousing Accessory`;
  if ((0, import_kolmafia95.availableAmount)(fluda) < 1 || !auto_is_valid(fluda)) {
    return 0;
  }
  return 3 - (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_douseFoeUses"));
}
var $_auto_haveAugustScepter_scepter;
function auto_haveAugustScepter() {
  $_auto_haveAugustScepter_scepter ?? ($_auto_haveAugustScepter_scepter = wrap_item($item`august scepter`));
  if (auto_is_valid($_auto_haveAugustScepter_scepter) && ((0, import_kolmafia95.itemAmount)($_auto_haveAugustScepter_scepter) > 0 || (0, import_kolmafia95.haveEquipped)($_auto_haveAugustScepter_scepter))) {
    return true;
  }
  return false;
}
function auto_haveBofa() {
  return auto_is_valid$2($skill`Just the Facts`) && (0, import_kolmafia95.haveSkill)($skill`Just the Facts`);
}
function auto_canHabitat() {
  if (!auto_haveBofa()) {
    return false;
  }
  if ((0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_monsterHabitatsRecalled")) >= 3) {
    return false;
  }
  if ((0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_monsterHabitatsFightsLeft")) > 0) {
    switch ((0, import_kolmafia95.toMonster)((0, import_kolmafia95.getProperty)("_monsterHabitatsMonster"))) {
      case $monster`fantasy bandit`:
        return fantasyBanditsFought() < 5;
      case $monster`modern zmobie`:
        return (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("cyrptAlcoveEvilness")) > 13;
      case $monster`dirty old lihc`:
        return (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("cyrptNicheEvilness")) > 13;
      default:
        return false;
    }
  }
  return true;
}
function auto_habitatTarget(target) {
  if (!auto_canHabitat()) {
    return false;
  }
  if ((0, import_kolmafia95.toMonster)((0, import_kolmafia95.getProperty)("_monsterHabitatsMonster")) === target && (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_monsterHabitatsFightsLeft")) > 0) {
    return false;
  }
  {
    var sonofa_complete = false;
    switch (target) {
      case $monster`fantasy bandit`:
        return fantasyBanditsFought() === 0;
      case $monster`modern zmobie`:
        return (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("cyrptAlcoveEvilness")) - 5 * (5 + cyrptEvilBonus$1()) > 13;
      case $monster`dirty old lihc`:
        return in_avantGuard() && (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("cyrptNicheEvilness")) - 5 * (3 + cyrptEvilBonus$1()) > 13;
      case $monster`lobsterfrogman`:
        sonofa_complete = (0, import_kolmafia95.getProperty)("sidequestLighthouseCompleted") === "hippy" || (0, import_kolmafia95.getProperty)("sidequestLighthouseCompleted") === "fratboy";
        return !sonofa_complete && (0, import_kolmafia95.itemAmount)($item`barrel of gunpowder`) < 4;
      case $monster`Eldritch Tentacle`:
        if ((0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_eldritchTentaclesFoughtToday")) > 5) {
          return false;
        }
        return !in_avantGuard() && ((0, import_kolmafia95.toMonster)((0, import_kolmafia95.getProperty)("auto_habitatMonster")) === target || (0, import_kolmafia95.toMonster)((0, import_kolmafia95.getProperty)("_monsterHabitatsMonster")) === target && (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_monsterHabitatsFightsLeft")) === 0);
      default:
        return (0, import_kolmafia95.toMonster)((0, import_kolmafia95.getProperty)("auto_habitatMonster")) === target;
    }
  }
  return false;
}
function auto_habitatFightsLeft() {
  return (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_monsterHabitatsFightsLeft"));
}
function auto_habitatMonster() {
  if ((0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_monsterHabitatsFightsLeft")) > 0) {
    return (0, import_kolmafia95.toMonster)((0, import_kolmafia95.getProperty)("_monsterHabitatsMonster"));
  }
  return import_kolmafia95.Monster.none;
}
function auto_canCircadianRhythm() {
  if (!auto_haveBofa()) {
    return false;
  }
  if ((0, import_kolmafia95.toBoolean)((0, import_kolmafia95.getProperty)("_circadianRhythmsRecalled"))) {
    return false;
  }
  return true;
}
function auto_circadianRhythmTarget(target) {
  if (!auto_canCircadianRhythm()) {
    return false;
  }
  if (!$monsters`shadow bat, shadow cow, shadow devil, shadow guy, shadow hexagon, shadow orb, shadow prism, shadow slab, shadow snake, shadow spider, shadow stalk, shadow tree`.includes(
    target
  )) {
    return false;
  }
  return true;
}
function auto_circadianRhythmTarget$1(target) {
  if (!auto_canCircadianRhythm()) {
    return false;
  }
  if (!($phyla`orc, hippy`.includes(target) && $locations`The Battlefield (Hippy Uniform), The Battlefield (Frat Uniform)`.includes(
    (0, import_kolmafia95.myLocation)()
  ))) {
    return false;
  }
  return true;
}
function auto_wishFactsLeft() {
  if (!auto_haveBofa()) {
    return 0;
  }
  return 3 - (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_bookOfFactsWishes"));
}
function auto_haveEagle() {
  if (canChangeToFamiliar($familiar`Patriotic Eagle`)) {
    return true;
  }
  return false;
}
function auto_canRWBBlast() {
  if (!auto_haveEagle()) {
    return false;
  }
  if (!auto_is_valid$2($skill`%fn\, fire a Red\, White and Blue Blast`)) {
    return false;
  }
  if ((0, import_kolmafia95.haveEffect)($effect`Everything Looks Red\, White and Blue`) > 0) {
    return false;
  }
  if (auto_habitatMonster() !== import_kolmafia95.Monster.none) {
    return false;
  }
  return true;
}
function auto_RWBBlastTarget(target) {
  if (!auto_canRWBBlast()) {
    return false;
  }
  switch (target) {
    case $monster`modern zmobie`:
      return (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("cyrptAlcoveEvilness")) - 3 * (5 + cyrptEvilBonus$1()) > 13;
    case $monster`dirty old lihc`:
      return (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("cyrptNicheEvilness")) - 3 * (3 + cyrptEvilBonus$1()) > 13;
    default:
      return (0, import_kolmafia95.toMonster)((0, import_kolmafia95.getProperty)("rwbMonster")) === target;
  }
  return false;
}
function activeCitZoneMod() {
  if (!auto_haveEagle() || (0, import_kolmafia95.haveEffect)($effect`Citizen of a Zone`) === 0) {
    return "";
  }
  (0, import_kolmafia95.visitUrl)("desc_effect.php?whicheffect=9391a5f7577e30ac3af6309804da6944");
  var activeCitZoneMod_1 = (0, import_kolmafia95.toLowerCase)(
    (0, import_kolmafia95.getProperty)("_citizenZoneMods")
  );
  return activeCitZoneMod_1;
}
function auto_citZoneModIsGoal(goal) {
  var activeCitZoneMod_1 = activeCitZoneMod();
  if ((0, import_kolmafia95.containsText)(activeCitZoneMod_1, goal) || goal === "spec" && (0, import_kolmafia95.containsText)(activeCitZoneMod_1, "cold resistance")) {
    return true;
  }
  return false;
}
function auto_citizenZonePrep(goal) {
  var activeCitZoneMod_1 = activeCitZoneMod();
  if ((0, import_kolmafia95.myMeat)() < meatReserve() && goal !== "mp") {
    return false;
  }
  if ((0, import_kolmafia95.haveEffect)($effect`Citizen of a Zone`) > 0 && (0, import_kolmafia95.containsText)(activeCitZoneMod_1, goal)) {
    auto_log_info$1("No need to remove Citizen of a Zone");
    return false;
  }
  if ((0, import_kolmafia95.haveEffect)($effect`Citizen of a Zone`) > 0 && !(0, import_kolmafia95.containsText)(activeCitZoneMod_1, goal) && (0, import_kolmafia95.itemAmount)($item`soft green echo eyedrop antidote`) === 0) {
    auto_log_info$1("Can't remove Citizen of a Zone");
    return false;
  }
  if (!auto_citZoneModIsGoal(goal) && (0, import_kolmafia95.itemAmount)($item`soft green echo eyedrop antidote`) > 0) {
    uneffect($effect`Citizen of a Zone`);
    if ((0, import_kolmafia95.haveEffect)($effect`Citizen of a Zone`) > 0) {
      auto_log_debug$1("Tried to remove Citizen of a Zone but couldn't");
      return false;
    }
  }
  return true;
}
function citizenZones(goal) {
  if (goal === "meat") {
    return /* @__PURE__ */ new Map(
      [
        [$location`The Battlefield (Frat Uniform)`, true],
        [$location`The Battlefield (Hippy Uniform)`, true],
        [$location`The Hidden Hospital`, true],
        [$location`The Haunted Bathroom`, true],
        [$location`The Castle in the Clouds in the Sky (Basement)`, true],
        [$location`Lair of the Ninja Snowmen`, true],
        [$location`The Defiled Cranny`, true],
        [$location`The Laugh Floor`, true],
        [$location`The Batrat and Ratbat Burrow`, true],
        [$location`The Sleazy Back Alley`, true]
      ]
    );
  }
  if (goal === "item") {
    return /* @__PURE__ */ new Map(
      [
        [$location`The Haunted Laundry Room`, true],
        [$location`Whitey's Grove`, true],
        [$location`The Icy Peak`, true],
        [$location`Itznotyerzitz Mine`, true],
        [$location`The Dark Heart of the Woods`, true],
        [$location`The Hidden Temple`, true],
        [$location`The Haunted Library`, true],
        [$location`The Bat Hole Entrance`, true],
        [$location`Noob Cave`, true]
      ]
    );
  }
  if (goal === "init") {
    return /* @__PURE__ */ new Map(
      [
        [$location`The Feeding Chamber`, true],
        [$location`An Unusually Quiet Barroom Brawl`, true],
        [$location`Oil Peak`, true],
        [$location`Cobb's Knob Kitchens`, true],
        [$location`The VERY Unquiet Garves`, true],
        [$location`The Haunted Kitchen`, true]
      ]
    );
  }
  if (goal === "mp") {
    return /* @__PURE__ */ new Map(
      [
        [$location`The Upper Chamber`, true],
        [$location`Inside the Palindome`, true],
        [$location`A-Boo Peak`, true],
        [$location`The Hippy Camp`, true],
        [$location`Megalo-City`, true],
        [$location`Shadow Rift`, true],
        [$location`Vanya's Castle`, true],
        [$location`The Hatching Chamber`, true],
        [$location`Wartime Hippy Camp (Frat Disguise)`, true],
        [$location`The Orcish Frat House`, true],
        [$location`The Middle Chamber`, true],
        [$location`The Black Forest`, true],
        [$location`The Haunted Ballroom`, true],
        [$location`The Red Zeppelin`, true],
        [$location`The Hidden Park`, true],
        [$location`Twin Peak`, true],
        [$location`The Smut Orc Logging Camp`, true],
        [$location`The Daily Dungeon`, true],
        [$location`The Spooky Forest`, true]
      ]
    );
  }
  if (goal === "spec") {
    return /* @__PURE__ */ new Map([[$location`The Outskirts of Cobb's Knob`, true]]);
  }
  return /* @__PURE__ */ new Map([[import_kolmafia95.Location.none, true]]);
}
function auto_getCitizenZone(loc, inCombat) {
  var eagle = $familiar`Patriotic Eagle`;
  var meatZones = citizenZones("meat");
  var itemZones = citizenZones("item");
  var initZones = citizenZones("init");
  var mpZones = citizenZones("mp");
  var specZones = citizenZones("spec");
  var activeCitZoneMod_1 = activeCitZoneMod();
  var goal = "";
  if (!(0, import_kolmafia95.canAdventure)(loc)) {
    return false;
  }
  if (specZones.has(loc)) {
    if (auto_goingToMouthwashLevel() && expected_level_after_mouthwash() < 13 && (0, import_kolmafia95.turnsPlayed)() === 0) {
      goal = "spec";
    }
  }
  if (meatZones.has(loc)) {
    goal = "meat";
  } else if (itemZones.has(loc)) {
    goal = "item";
  } else if (initZones.has(loc)) {
    goal = "init";
  } else if (mpZones.has(loc)) {
    goal = "mp";
  } else {
    auto_log_debug$1(
      "Somehow we got here and don't actually want to use the Eagle"
    );
    return false;
  }
  if (!auto_citizenZonePrep(goal)) {
    return false;
  }
  function wantToFreeRun() {
    if (loc === solveDelayZone$1()) {
      return true;
    }
    return false;
  }
  if (!inCombat) {
    if ((0, import_kolmafia95.useFamiliar)(eagle)) {
      if (wantToFreeRun()) {
        (0, import_kolmafia95.setProperty)("auto_forceFreeRun", true.toString());
      }
      if (!autoAdv$2(loc)) {
        auto_log_debug$1(
          `Attempted to get citizen of a zone buff for ${goal} goal however we failed.`
        );
        return false;
      }
    }
  } else {
    handleTracker$2(
      "Citizen of a Zone",
      (0, import_kolmafia95.myLocation)().toString(),
      goal,
      "auto_otherstuff"
    );
    return true;
  }
  return false;
}
function auto_haveBurningLeaves() {
  return auto_is_valid$4("Burning Leaves") && $item`A Guide to Burning Leaves`.toString() in (0, import_kolmafia95.getCampground)();
}
function auto_makeAutumnalAegis() {
  if (!auto_haveBurningLeaves()) {
    return false;
  }
  if ((0, import_kolmafia95.creatableAmount)($item`autumnal aegis`) > 0 && (0, import_kolmafia95.itemAmount)($item`autumnal aegis`) === 0) {
    if ((0, import_kolmafia95.create)(1, $item`autumnal aegis`)) {
      handleTracker$1(
        "Burning Leaves",
        `Claimed ${$item`autumnal aegis`}`,
        "auto_iotm_claim"
      );
    }
  }
  return (0, import_kolmafia95.availableAmount)($item`autumnal aegis`) > 0;
}
function auto_remainingBurningLeavesFights() {
  if (!auto_haveBurningLeaves()) {
    return 0;
  }
  return 5 - (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_leafMonstersFought"));
}
function auto_haveCCSC() {
  if (auto_can_equip($item`candy cane sword cane`) && (0, import_kolmafia95.availableAmount)($item`candy cane sword cane`) > 0) {
    return true;
  }
  return false;
}
function auto_remainingCandyCaneSlashes() {
  if (!auto_haveCCSC()) {
    return 0;
  }
  return 11 - (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("_surprisinglySweetSlashUsed"));
}

// src/autoscend/paths/legacy_of_loathing.ts
function in_lol() {
  return (0, import_kolmafia96.myPath)() === $path`Legacy of Loathing`;
}
function auto_ItemToReplica(it) {
  switch (it) {
    case $item`Mr. Accessory`:
      return $item`replica Mr. Accessory`;
    case $item`crimbo elfling`:
      return $item`replica crimbo elfling`;
    case $item`Dark Jill-O-Lantern`:
      return $item`replica Dark Jill-O-Lantern`;
    case $item`hand turkey outline`:
      return $item`replica hand turkey outline`;
    case $item`miniature gravy-covered maypole`:
      return $item`replica miniature gravy-covered maypole`;
    case $item`pygmy bugbear shaman`:
      return $item`replica pygmy bugbear shaman`;
    case $item`wax lips`:
      return $item`replica wax lips`;
    case $item`jewel-eyed wizard hat`:
      return $item`replica jewel-eyed wizard hat`;
    case $item`plastic pumpkin bucket`:
      return $item`replica plastic pumpkin bucket`;
    case $item`Tome of Snowcone Summoning`:
      return $item`replica Tome of Snowcone Summoning`;
    case $item`bottle-rocket crossbow`:
      return $item`replica bottle-rocket crossbow`;
    case $item`navel ring of navel gazing`:
      return $item`replica navel ring of navel gazing`;
    case $item`V for Vivala mask`:
      return $item`replica V for Vivala mask`;
    case $item`cotton candy cocoon`:
      return $item`replica cotton candy cocoon`;
    case $item`haiku katana`:
      return $item`replica haiku katana`;
    case $item`little box of fireworks`:
      return $item`replica little box of fireworks`;
    case $item`Apathargic Bandersnatch`:
      return $item`replica Apathargic Bandersnatch`;
    case $item`Elvish sunglasses`:
      return $item`replica Elvish sunglasses`;
    case $item`squamous polyp`:
      return $item`replica squamous polyp`;
    case $item`Greatest American Pants`:
      return $item`replica Greatest American Pants`;
    case $item`Juju Mojo Mask`:
      return $item`replica Juju Mojo Mask`;
    case $item`organ grinder`:
      return $item`replica organ grinder`;
    case $item`a cute angel`:
      return $item`replica cute angel`;
    case $item`Operation Patriot Shield`:
      return $item`replica Operation Patriot Shield`;
    case $item`plastic vampire fangs`:
      return $item`replica plastic vampire fangs`;
    case $item`Camp Scout backpack`:
      return $item`replica Camp Scout backpack`;
    case $item`deactivated nanobots`:
      return $item`replica deactivated nanobots`;
    case $item`Libram of Resolutions`:
      return $item`replica Libram of Resolutions`;
    case $item`Order of the Green Thumb Order Form`:
      return $item`replica Order of the Green Thumb Order Form`;
    case $item`over-the-shoulder Folder Holder`:
      return $item`replica over-the-shoulder Folder Holder`;
    case $item`The Smith's Tome`:
      return $item`replica Smith's Tome`;
    case $item`Crimbo sapling`:
      return $item`replica Crimbo sapling`;
    case $item`Little Geneticist DNA-Splicing Lab`:
      return $item`replica Little Geneticist DNA-Splicing Lab`;
    case $item`still grill`:
      return $item`replica still grill`;
    case $item`Chateau Mantegna room key`:
      return $item`replica Chateau Mantegna room key`;
    case $item`Deck of Every Card`:
      return $item`replica Deck of Every Card`;
    case $item`Witchess Set`:
      return $item`replica Witchess Set`;
    case $item`disconnected intergnat`:
      return $item`replica disconnected intergnat`;
    case $item`Source terminal`:
      return $item`replica Source terminal`;
    case $item`yellow puck`:
      return $item`replica yellow puck`;
    case $item`genie bottle`:
      return $item`replica genie bottle`;
    case $item`space planula`:
      return $item`replica space planula`;
    case $item`unpowered Robortender`:
      return $item`replica unpowered Robortender`;
    case $item`God Lobster Egg`:
      return $item`replica God Lobster Egg`;
    case $item`January's Garbage Tote`:
      return $item`replica January's Garbage Tote`;
    case $item`Neverending Party invitation envelope`:
      return $item`replica Neverending Party invitation envelope`;
    case $item`Fourth of May Cosplay Saber`:
      return $item`replica Fourth of May Cosplay Saber`;
    case $item`hewn moon-rune spoon`:
      return $item`replica hewn moon-rune spoon`;
    case $item`Kramco Sausage-o-Matic™`:
      return $item`replica Kramco Sausage-o-Matic™`;
    case $item`baby camelCalf`:
      return $item`replica baby camelCalf`;
    case $item`Cargo Cultist Shorts`:
      return $item`replica Cargo Cultist Shorts`;
    case $item`Powerful Glove`:
      return $item`replica Powerful Glove`;
    case $item`emotion chip`:
      return $item`replica emotion chip`;
    case $item`industrial fire extinguisher`:
      return $item`replica industrial fire extinguisher`;
    case $item`miniature crystal ball`:
      return $item`replica miniature crystal ball`;
    case $item`designer sweatpants`:
      return $item`replica designer sweatpants`;
    case $item`grey gosling`:
      return $item`replica grey gosling`;
    case $item`Jurassic Parka`:
      return $item`replica Jurassic Parka`;
    case $item`Cincho de Mayo`:
      return $item`replica Cincho de Mayo`;
    case $item`2002 Mr. Store Catalog`:
      return $item`Replica 2002 Mr. Store Catalog`;
    case $item`august scepter`:
      return $item`replica august scepter`;
  }
  return it;
}

// src/autoscend/iotms/mr2015.ts
function chateaumantegna_available() {
  var chateau_key = wrap_item($item`Chateau Mantegna room key`);
  if (!in_lol() && (0, import_kolmafia97.toBoolean)((0, import_kolmafia97.getProperty)("chateauAvailable")) && (0, import_kolmafia97.isUnrestricted)(chateau_key)) {
    return true;
  }
  if (in_lol() && (0, import_kolmafia97.toBoolean)((0, import_kolmafia97.getProperty)("replicaChateauAvailable")) && (0, import_kolmafia97.isUnrestricted)(chateau_key)) {
    return true;
  }
  return false;
}
function chateaumantegna_decorations() {
  var retval = /* @__PURE__ */ new Map();
  if (!chateaumantegna_available()) {
    return retval;
  }
  var chateau = (0, import_kolmafia97.toLowerCase)((0, import_kolmafia97.visitUrl)("place.php?whichplace=chateau"));
  if ((0, import_kolmafia97.containsText)(chateau, "electric muscle stimulator")) {
    retval.set($item`electric muscle stimulator`, true);
  } else if ((0, import_kolmafia97.containsText)(chateau, "foreign language tapes")) {
    retval.set($item`foreign language tapes`, true);
  } else if ((0, import_kolmafia97.containsText)(chateau, "bowl of potpourri")) {
    retval.set($item`bowl of potpourri`, true);
  }
  if ((0, import_kolmafia97.containsText)(chateau, "antler chandelier")) {
    retval.set($item`antler chandelier`, true);
  } else if ((0, import_kolmafia97.containsText)(chateau, "artificial skylight")) {
    retval.set($item`artificial skylight`, true);
  } else if ((0, import_kolmafia97.containsText)(chateau, "ceiling fan")) {
    retval.set($item`ceiling fan`, true);
  }
  if ((0, import_kolmafia97.containsText)(chateau, "continental juice bar")) {
    retval.set($item`continental juice bar`, true);
  } else if ((0, import_kolmafia97.containsText)(chateau, "fancy stationery set")) {
    retval.set($item`fancy stationery set`, true);
  } else if ((0, import_kolmafia97.containsText)(chateau, "swiss piggy bank")) {
    retval.set($item`Swiss piggy bank`, true);
  }
  return retval;
}
function chateaumantegna_buyStuff(toBuy) {
  if (!chateaumantegna_available()) {
    return;
  }
  if (toBuy === $item`electric muscle stimulator` && (0, import_kolmafia97.myMeat)() >= 500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=411&quantity=1",
      true
    );
  }
  if (toBuy === $item`foreign language tapes` && (0, import_kolmafia97.myMeat)() >= 500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=412&quantity=1",
      true
    );
  }
  if (toBuy === $item`bowl of potpourri` && (0, import_kolmafia97.myMeat)() >= 500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=413&quantity=1",
      true
    );
  }
  if (toBuy === $item`antler chandelier` && (0, import_kolmafia97.myMeat)() >= 1500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=415&quantity=1",
      true
    );
  }
  if (toBuy === $item`artificial skylight` && (0, import_kolmafia97.myMeat)() >= 1500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=416&quantity=1",
      true
    );
  }
  if (toBuy === $item`ceiling fan` && (0, import_kolmafia97.myMeat)() >= 1500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=414&quantity=1",
      true
    );
  }
  if (toBuy === $item`continental juice bar` && (0, import_kolmafia97.myMeat)() >= 2500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=418&quantity=1",
      true
    );
  }
  if (toBuy === $item`fancy calligraphy pen` && (0, import_kolmafia97.myMeat)() >= 2500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=419&quantity=1",
      true
    );
  }
  if (toBuy === $item`Swiss piggy bank` && (0, import_kolmafia97.myMeat)() >= 2500) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=417&quantity=1",
      true
    );
  }
  if (toBuy === $item`alpine watercolor set` && (0, import_kolmafia97.myMeat)() >= 5e3) {
    (0, import_kolmafia97.visitUrl)(
      "shop.php?pwd=&whichshop=chateau&action=buyitem&whichrow=420&quantity=1",
      true
    );
  }
}
function chateaumantegna_nightstandSet() {
  if (!chateaumantegna_available()) {
    return false;
  }
  var myStat = (0, import_kolmafia97.myPrimestat)();
  if (myStat === import_kolmafia97.Stat.none) {
    return false;
  }
  if (inAftercore()) {
    return false;
  }
  if ((0, import_kolmafia97.myLevel)() >= 13) {
    if ((0, import_kolmafia97.toInt)((0, import_kolmafia97.getProperty)("nsContestants2")) === -1) {
      myStat = (0, import_kolmafia97.toStat)((0, import_kolmafia97.getProperty)("nsChallenge1"));
    } else {
      return false;
    }
  }
  var furniture = chateaumantegna_decorations();
  var need = import_kolmafia97.Item.none;
  if (myStat === $stat`Muscle`) {
    need = $item`electric muscle stimulator`;
  } else if (myStat === $stat`Mysticality`) {
    need = $item`foreign language tapes`;
  } else if (myStat === $stat`Moxie`) {
    need = $item`bowl of potpourri`;
  }
  if (need === import_kolmafia97.Item.none) {
    return false;
  }
  if (furniture.get(need) ?? furniture.set(need, false).get(need)) {
    return false;
  }
  if ((0, import_kolmafia97.myMeat)() < (0, import_kolmafia97.npcPrice)(need)) {
    return false;
  }
  auto_log_info(
    "We have the wrong Chateau Nightstand item, replacing.",
    "blue"
  );
  chateaumantegna_buyStuff(need);
  return true;
}

// src/autoscend/quests/level_01.ts
var import_kolmafia98 = require("kolmafia");

// src/autoscend/paths/actually_ed_the_undying.ts
function isActuallyEd() {
  return (0, import_kolmafia99.myPath)() === $path`Actually Ed the Undying`;
}
function ed_spleen_limit() {
  var limit = 5;
  var _iterator = _createForOfIteratorHelper(
    $skills`Extra Spleen, Another Extra Spleen, Yet Another Extra Spleen, Still Another Extra Spleen, Just One More Extra Spleen, Okay Seriously\, This is the Last Spleen`
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var sk = _step.value;
      if ((0, import_kolmafia99.haveSkill)(sk)) {
        limit += 5;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return limit;
}
function ed_nextUpgrade() {
  var coins = (0, import_kolmafia99.itemAmount)($item`Ka coin`);
  var canEat_1 = ((0, import_kolmafia99.spleenLimit)() - (0, import_kolmafia99.mySpleenUse)()) / 5;
  if (!(0, import_kolmafia99.haveSkill)($skill`Upgraded Legs`) && (0, import_kolmafia99.toBoolean)((0, import_kolmafia99.getProperty)("auto_needLegs"))) {
    return $skill`Upgraded Legs`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Extra Spleen`) && canEat_1 < 1) {
    return $skill`Extra Spleen`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Another Extra Spleen`) && canEat_1 < 1) {
    return $skill`Another Extra Spleen`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Replacement Liver`)) {
    return $skill`Replacement Liver`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Upgraded Legs`)) {
    return $skill`Upgraded Legs`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`More Legs`)) {
    return $skill`More Legs`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Yet Another Extra Spleen`) && (0, import_kolmafia99.haveSkill)($skill`Another Extra Spleen`)) {
    return $skill`Yet Another Extra Spleen`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Still Another Extra Spleen`)) {
    return $skill`Still Another Extra Spleen`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Just One More Extra Spleen`)) {
    return $skill`Just One More Extra Spleen`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Replacement Stomach`)) {
    return $skill`Replacement Stomach`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Elemental Wards`)) {
    return $skill`Elemental Wards`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Okay Seriously\, This is the Last Spleen`)) {
    return $skill`Okay Seriously\, This is the Last Spleen`;
  } else if (!possessEquipment($item`The Crown of Ed the Undying`) && !(0, import_kolmafia99.haveSkill)($skill`Tougher Skin`)) {
    return $skill`Tougher Skin`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`More Elemental Wards`)) {
    return $skill`More Elemental Wards`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Even More Elemental Wards`)) {
    return $skill`Even More Elemental Wards`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Healing Scarabs`) && (0, import_kolmafia99.myDaycount)() >= 2) {
    return $skill`Healing Scarabs`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Tougher Skin`) && (0, import_kolmafia99.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Tougher Skin`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Armor Plating`) && (0, import_kolmafia99.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Armor Plating`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Upgraded Spine`) && (0, import_kolmafia99.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Upgraded Spine`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Upgraded Arms`) && (0, import_kolmafia99.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Upgraded Arms`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Arm Blade`) && (0, import_kolmafia99.myDaycount)() >= 4 && coins >= 100) {
    return $skill`Arm Blade`;
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Bone Spikes`) && (0, import_kolmafia99.myDaycount)() >= 4 && coins >= 100) {
    return $skill`Bone Spikes`;
  }
  return import_kolmafia99.Skill.none;
}
var $_ed_KaCost_kaNeeded;
function ed_KaCost(upgrade) {
  $_ed_KaCost_kaNeeded ?? ($_ed_KaCost_kaNeeded = /* @__PURE__ */ new Map(
    [
      [$skill`Extra Spleen`, 5],
      [$skill`Another Extra Spleen`, 10],
      [$skill`Upgraded Legs`, 10],
      [$skill`Tougher Skin`, 10],
      [$skill`Armor Plating`, 10],
      [$skill`Healing Scarabs`, 10],
      [$skill`Elemental Wards`, 10],
      [$skill`Yet Another Extra Spleen`, 15],
      [$skill`Still Another Extra Spleen`, 20],
      [$skill`More Legs`, 20],
      [$skill`Upgraded Arms`, 20],
      [$skill`Upgraded Spine`, 20],
      [$skill`Bone Spikes`, 20],
      [$skill`Arm Blade`, 20],
      [$skill`More Elemental Wards`, 20],
      [$skill`Just One More Extra Spleen`, 25],
      [$skill`Replacement Stomach`, 30],
      [$skill`Replacement Liver`, 30],
      [$skill`Okay Seriously\, This is the Last Spleen`, 30],
      [$skill`Even More Elemental Wards`, 30]
    ]
  ));
  if ($_ed_KaCost_kaNeeded.has(upgrade)) {
    return $_ed_KaCost_kaNeeded.get(upgrade) ?? $_ed_KaCost_kaNeeded.set(upgrade, 0).get(upgrade);
  } else {
    return -1;
  }
}
function ed_needShop() {
  if (!isActuallyEd()) {
    return false;
  }
  if ((0, import_kolmafia99.haveSkill)($skill`Upgraded Legs`) && (0, import_kolmafia99.toBoolean)((0, import_kolmafia99.getProperty)("auto_needLegs"))) {
    (0, import_kolmafia99.setProperty)("auto_needLegs", false.toString());
  }
  var coins = (0, import_kolmafia99.itemAmount)($item`Ka coin`);
  if ((0, import_kolmafia99.toBoolean)((0, import_kolmafia99.getProperty)("auto_needLegs")) && coins >= ed_KaCost($skill`Upgraded Legs`)) {
    auto_log_info$1(
      "Ed needs legs (and can afford them)! UNDYING for a free trip to the Underworld!"
    );
    return true;
  }
  var canEat_1 = ((0, import_kolmafia99.spleenLimit)() - (0, import_kolmafia99.mySpleenUse)()) / 5;
  canEat_1 = (0, import_kolmafia99.max)(0, canEat_1 - (0, import_kolmafia99.itemAmount)($item`mummified beef haunch`));
  if (canEat_1 > 0 && coins >= 15) {
    auto_log_info$1(
      "Ed needs beef haunches (and can afford them)! UNDYING for a free trip to the Underworld!"
    );
    return true;
  }
  if (coins >= 1 && (0, import_kolmafia99.myMp)() < (0, import_kolmafia99.mpCost)($skill`Storm of the Scarab`)) {
    if ((0, import_kolmafia99.itemAmount)($item`holy spring water`) < 1 && (0, import_kolmafia99.itemAmount)($item`spirit beer`) < 1 && (0, import_kolmafia99.itemAmount)($item`sacramental wine`) < 1) {
      auto_log_info$1(
        "Ed needs MP restores! UNDYING for a free trip to the Underworld!"
      );
      return true;
    }
  }
  var nextUpgrade = ed_nextUpgrade();
  var requiredKa = ed_KaCost(nextUpgrade);
  if (canEat_1 < 1 && requiredKa !== -1 && coins >= requiredKa) {
    auto_log_info$1(
      `Ed needs ${nextUpgrade.toString()} (and can afford it)! UNDYING for a free trip to the Underworld!`
    );
    return true;
  } else if ((0, import_kolmafia99.haveSkill)($skill`Okay Seriously\, This is the Last Spleen`) && canEat_1 < 1) {
    if ((0, import_kolmafia99.itemAmount)($item`talisman of Renenutet`) < 1 && (0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("auto_renenutetBought")) < 7 && coins >= 7 - (0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("auto_renenutetBought"))) {
      auto_log_info$1(
        "Ed needs Talismens of Renenutet! UNDYING for a free trip to the Underworld!"
      );
      return true;
    } else if ((0, import_kolmafia99.itemAmount)($item`linen bandages`) < 1 && coins >= 4) {
      auto_log_info$1(
        "Ed needs Linen Bandages! UNDYING for a free trip to the Underworld!"
      );
      return true;
    } else if ((0, import_kolmafia99.itemAmount)($item`holy spring water`) < 1 && coins >= 1 && (0, import_kolmafia99.myMaxmp)() - (0, import_kolmafia99.myMp)() > 50) {
      auto_log_info$1(
        "Ed needs Holy Spring Water! UNDYING for a free trip to the Underworld!"
      );
      return true;
    } else if ((0, import_kolmafia99.itemAmount)($item`talisman of Horus`) < 1 && coins >= 5) {
      auto_log_info$1(
        "Ed needs Talismens of Horus! UNDYING for a free trip to the Underworld!"
      );
      return true;
    } else if ((0, import_kolmafia99.itemAmount)($item`spirit beer`) < 1 && coins >= 30) {
      auto_log_info$1(
        "Ed needs Spirit Beer! UNDYING for a free trip to the Underworld!"
      );
      return true;
    } else if ((0, import_kolmafia99.itemAmount)($item`soft green echo eyedrop antidote`) + (0, import_kolmafia99.itemAmount)($item`ancient cure-all`) < 1 && coins >= 30) {
      auto_log_info$1(
        "Ed needs Ancient Cure-All! UNDYING for a free trip to the Underworld!"
      );
      return true;
    } else if ((0, import_kolmafia99.itemAmount)($item`sacramental wine`) < 1 && coins >= 30) {
      auto_log_info$1(
        "Ed needs Sacramental Wine! UNDYING for a free trip to the Underworld!"
      );
      return true;
    }
  }
  return false;
}
function ed_shopping() {
  var $_ed_skillID_skillIDs;
  function ed_skillID(upgrade) {
    $_ed_skillID_skillIDs ?? ($_ed_skillID_skillIDs = /* @__PURE__ */ new Map(
      [
        [$skill`Replacement Stomach`, 28],
        [$skill`Replacement Liver`, 29],
        [$skill`Extra Spleen`, 30],
        [$skill`Another Extra Spleen`, 31],
        [$skill`Yet Another Extra Spleen`, 32],
        [$skill`Still Another Extra Spleen`, 33],
        [$skill`Just One More Extra Spleen`, 34],
        [$skill`Okay Seriously\, This is the Last Spleen`, 35],
        [$skill`Upgraded Legs`, 36],
        [$skill`Upgraded Arms`, 37],
        [$skill`Upgraded Spine`, 38],
        [$skill`Tougher Skin`, 39],
        [$skill`Armor Plating`, 40],
        [$skill`Bone Spikes`, 41],
        [$skill`Arm Blade`, 42],
        [$skill`Healing Scarabs`, 43],
        [$skill`Elemental Wards`, 44],
        [$skill`More Elemental Wards`, 45],
        [$skill`Even More Elemental Wards`, 46],
        [$skill`More Legs`, 48]
      ]
    ));
    if ($_ed_skillID_skillIDs.has(upgrade)) {
      return $_ed_skillID_skillIDs.get(upgrade) ?? $_ed_skillID_skillIDs.set(upgrade, 0).get(upgrade);
    } else {
      return -1;
    }
  }
  auto_log_info("Time to shop!", "red");
  if ((0, import_kolmafia99.toBoolean)((0, import_kolmafia99.getProperty)("auto_pvpEnable")) && !(0, import_kolmafia99.hippyStoneBroken)()) {
    (0, import_kolmafia99.visitUrl)("peevpee.php?action=smashstone&pwd&confirm=on", true);
    (0, import_kolmafia99.visitUrl)("place.php?whichplace=edunder&action=edunder_hippy");
    (0, import_kolmafia99.visitUrl)("choice.php?pwd&whichchoice=1057&option=1", true);
  }
  var coins = (0, import_kolmafia99.itemAmount)($item`Ka coin`);
  if (!(0, import_kolmafia99.haveSkill)($skill`Upgraded Legs`) && (0, import_kolmafia99.toBoolean)((0, import_kolmafia99.getProperty)("auto_needLegs"))) {
    if (coins >= 10) {
      auto_log_info("Buying Upgraded Legs", "green");
      (0, import_kolmafia99.setProperty)("auto_needLegs", false.toString());
      (0, import_kolmafia99.visitUrl)("place.php?whichplace=edunder&action=edunder_bodyshop");
      (0, import_kolmafia99.visitUrl)("choice.php?pwd&skillid=36&option=1&whichchoice=1052", true);
      (0, import_kolmafia99.visitUrl)("choice.php?pwd&option=2&whichchoice=1052", true);
      coins -= 10;
    } else {
      coins = 0;
    }
  }
  var canEat_1 = (ed_spleen_limit() - (0, import_kolmafia99.mySpleenUse)()) / 5;
  canEat_1 -= (0, import_kolmafia99.itemAmount)($item`mummified beef haunch`);
  while (coins >= 15 && canEat_1 > 0) {
    (0, import_kolmafia99.visitUrl)(
      "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=428",
      true
    );
    auto_log_info("Buying a mummified beef haunch!", "green");
    coins -= 15;
    canEat_1--;
  }
  if (!(0, import_kolmafia99.toBoolean)((0, import_kolmafia99.getProperty)("lovebugsUnlocked")) && coins >= 1 && (0, import_kolmafia99.itemAmount)($item`holy spring water`) === 0 && (0, import_kolmafia99.myMp)() < (0, import_kolmafia99.mpCost)($skill`Storm of the Scarab`)) {
    auto_log_info("Buying Holy Spring Water", "green");
    (0, import_kolmafia99.visitUrl)(
      "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=436",
      true
    );
    coins -= 1;
  }
  if (canEat_1 < 1) {
    var nextUpgrade = ed_nextUpgrade();
    var requiredKa = ed_KaCost(nextUpgrade);
    if (requiredKa !== -1 && coins >= requiredKa) {
      auto_log_info(
        `Buying ${nextUpgrade.toString()} (${requiredKa.toString()} Ka).`,
        "green"
      );
      var skillBuy = ed_skillID(nextUpgrade);
      if (skillBuy !== 0) {
        (0, import_kolmafia99.visitUrl)("place.php?whichplace=edunder&action=edunder_bodyshop");
        (0, import_kolmafia99.visitUrl)(
          `choice.php?pwd&skillid=${skillBuy}&option=1&whichchoice=1052`,
          true
        );
        (0, import_kolmafia99.visitUrl)("choice.php?pwd&option=2&whichchoice=1052", true);
        coins -= requiredKa;
      }
    } else if ((0, import_kolmafia99.haveSkill)($skill`Okay Seriously\, This is the Last Spleen`) && canEat_1 < 1) {
      while ((0, import_kolmafia99.itemAmount)($item`talisman of Renenutet`) < 7 && (0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("auto_renenutetBought")) < 7 && coins >= 1) {
        auto_log_info("Buying Talisman of Renenutet", "green");
        (0, import_kolmafia99.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=439",
          true
        );
        (0, import_kolmafia99.setProperty)(
          "auto_renenutetBought",
          (1 + (0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("auto_renenutetBought"))).toString()
        );
        coins -= 1;
      }
      while ((0, import_kolmafia99.itemAmount)($item`linen bandages`) < 8 && coins >= 1) {
        auto_log_info("Buying Linen Bandages", "green");
        (0, import_kolmafia99.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=429",
          true
        );
        coins -= 1;
      }
      if ((0, import_kolmafia99.itemAmount)($item`holy spring water`) === 0 && coins >= 1) {
        auto_log_info("Buying Holy Spring Water", "green");
        (0, import_kolmafia99.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=436",
          true
        );
        coins -= 1;
      }
      while ((0, import_kolmafia99.itemAmount)($item`talisman of Horus`) < 2 && coins >= 5) {
        auto_log_info("Buying Talisman of Horus", "green");
        (0, import_kolmafia99.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=693",
          true
        );
        coins -= 5;
      }
      if ((0, import_kolmafia99.itemAmount)($item`spirit beer`) === 0 && coins >= 30) {
        auto_log_info("Buying Spirit Beer", "green");
        (0, import_kolmafia99.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=432",
          true
        );
        coins -= 2;
      }
      if ((0, import_kolmafia99.itemAmount)($item`soft green echo eyedrop antidote`) + (0, import_kolmafia99.itemAmount)($item`ancient cure-all`) < 2 && coins >= 30) {
        auto_log_info("Buying Ancient Cure-all", "green");
        (0, import_kolmafia99.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=435",
          true
        );
        coins -= 3;
      }
      if ((0, import_kolmafia99.itemAmount)($item`sacramental wine`) === 0 && coins >= 30) {
        auto_log_info("Buying Sacramental Wine", "green");
        (0, import_kolmafia99.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=433",
          true
        );
        coins -= 3;
      }
    }
  }
  return true;
}
function edUnderworldAdv() {
  if (!isActuallyEd()) {
    (0, import_kolmafia99.abort)("edUnderworldAdv() should not have been called as not ed.");
  }
  if ((0, import_kolmafia99.myAdventures)() === 0) {
    (0, import_kolmafia99.abort)(
      "Tried to spend 1 adv as ed visiting the underworld when we have no adv left"
    );
  }
  auto_log_info("Visiting the underworld via the pyramid gate", "blue");
  var initial_turncount = (0, import_kolmafia99.myTurncount)();
  (0, import_kolmafia99.visitUrl)("place.php?whichplace=edbase&action=edbase_portal");
  (0, import_kolmafia99.runChoice)(1);
  (0, import_kolmafia99.runChoice)(1);
  ed_shopping();
  (0, import_kolmafia99.visitUrl)("place.php?whichplace=edunder&action=edunder_leave");
  (0, import_kolmafia99.runChoice)(1);
  return (0, import_kolmafia99.myTurncount)() === 1 + initial_turncount;
}
function edAcquireHP() {
  if (!isActuallyEd()) {
    return false;
  }
  if ((0, import_kolmafia99.myHp)() > 0) {
    return true;
  }
  var _iterator3 = _createForOfIteratorHelper(
    $items`linen bandages, cotton bandages, silk bandages`
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var it = _step3.value;
      if ((0, import_kolmafia99.itemAmount)(it) > 0) {
        (0, import_kolmafia99.use)(1, $item`linen bandages`);
        break;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if ((0, import_kolmafia99.myHp)() === 0) {
    edUnderworldAdv();
  }
  if ((0, import_kolmafia99.myHp)() === 0) {
    (0, import_kolmafia99.abort)("Ed somehow failed to restore HP and can not continue");
  }
  return true;
}

// src/autoscend/iotms/mr2019.ts
function auto_sausageEaten() {
  return (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_sausagesEaten"));
}
function auto_sausageLeftToday() {
  return 23 - auto_sausageEaten();
}
function auto_sausageUnitsNeededForSausage(numSaus) {
  return 111 * numSaus;
}
function auto_sausageMeatPasteNeededForSausage(numSaus) {
  return (0, import_kolmafia100.ceil)((0, import_kolmafia100.toFloat)(auto_sausageUnitsNeededForSausage(numSaus)) / 10);
}
function auto_sausageFightsToday() {
  return (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_sausageFights"));
}
function auto_sausageBlocked() {
  if (in_tcrs()) {
    return true;
  }
  if (!canEat$1($item`magical sausage`)) {
    return true;
  }
  if (auto_sausageLeftToday() <= 0) {
    return true;
  }
  if (stomach_left() < 0) {
    return true;
  }
  return false;
}
function auto_sausageGrind(numSaus) {
  return auto_sausageGrind$1(numSaus, false);
}
function auto_sausageGrind$1(numSaus, failIfCantMakeAll) {
  if ((0, import_kolmafia100.myTurncount)() < 90 || !isDesertAvailable()) {
    return false;
  }
  if (in_tcrs()) {
    return false;
  }
  var casingsOwned = (0, import_kolmafia100.itemAmount)($item`magical sausage casing`);
  if (casingsOwned === 0) {
    return false;
  }
  if (!possessEquipment(wrap_item($item`Kramco Sausage-o-Matic™`))) {
    return false;
  }
  if (numSaus <= 0) {
    return false;
  }
  if (casingsOwned < numSaus) {
    if (failIfCantMakeAll) {
      return false;
    }
    numSaus = casingsOwned;
  }
  var sausMade = (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_sausagesMade"));
  var pastesNeeded = 0;
  var pastesAvail = (0, import_kolmafia100.itemAmount)($item`meat paste`);
  var meatToSave = 1e3 + meatReserve();
  for (var i = 1, _last_3 = numSaus, _step_3 = 1, _up_3 = i <= _last_3, _inc_3 = _up_3 ? Math.abs(_step_3) : -Math.abs(_step_3); _up_3 ? i <= _last_3 : i >= _last_3; i += _inc_3) {
    var sausNum = i + sausMade;
    var pastesForThisSaus = auto_sausageMeatPasteNeededForSausage(sausNum);
    if ((pastesNeeded + pastesForThisSaus - pastesAvail) * 10 + meatToSave > (0, import_kolmafia100.myMeat)()) {
      if (failIfCantMakeAll) {
        return false;
      }
      if (i === 1) {
        return false;
      }
      numSaus = i - 1;
      break;
    }
    pastesNeeded += pastesForThisSaus;
  }
  auto_log_info("Let's grind some sausage!", "blue");
  if (!(0, import_kolmafia100.create)(numSaus, $item`magical sausage`)) {
    auto_log_warning("Something went wrong while grinding sausage...", "red");
    return false;
  }
  loopHandlerDelayAll();
  return true;
}
function auto_sausageEatEmUp(maxToEat) {
  if (auto_sausageBlocked()) {
    return false;
  }
  if ((0, import_kolmafia100.itemAmount)($item`magical sausage`) < 1) {
    return false;
  }
  var noMP = in_darkGyffte();
  var originalMp = (0, import_kolmafia100.myMaxmp)();
  if (!noMP) {
    auto_log_info(
      "We're gonna slurp up some sausage, let's make sure we have enough max mp",
      "blue"
    );
    (0, import_kolmafia100.cliExecute)("checkpoint");
    addToMaximize("1000mp,-tie");
    equipMaximizedGear();
  }
  while (maxToEat > 0 && (0, import_kolmafia100.itemAmount)($item`magical sausage`) > 0) {
    if (auto_sausageLeftToday() <= 0) {
      break;
    }
    if (!noMP) {
      var desiredMp = (0, import_kolmafia100.max)((0, import_kolmafia100.myMaxmp)() - 999, 0);
      var mpToBurn = (0, import_kolmafia100.max)((0, import_kolmafia100.myMp)() - desiredMp, 0);
      if (mpToBurn > 0) {
        auto_burnMP(mpToBurn);
      }
    }
    if (!(0, import_kolmafia100.eat)(1, $item`magical sausage`)) {
      auto_log_warning("Somehow failed to eat a sausage! What??", "red");
      return false;
    }
    handleTracker($item`magical sausage`.toString(), "auto_eaten");
    maxToEat--;
  }
  if (!noMP) {
    var _mpToBurn = (0, import_kolmafia100.max)((0, import_kolmafia100.myMp)() - originalMp, 0);
    if (_mpToBurn > 0) {
      auto_burnMP(_mpToBurn);
    }
    (0, import_kolmafia100.cliExecute)("outfit checkpoint");
  }
  return true;
}
function auto_haveKramcoSausageOMatic() {
  var kramco = wrap_item($item`Kramco Sausage-o-Matic™`);
  if (possessEquipment(kramco) && auto_can_equip(kramco)) {
    return true;
  }
  return false;
}
function auto_sausageGoblin() {
  return auto_sausageGoblin$2(import_kolmafia100.Location.none, null);
}
function auto_sausageGoblin$2(loc, option) {
  if (!auto_haveKramcoSausageOMatic()) {
    return false;
  }
  var sausageFights = (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_sausageFights"));
  var numerator = (0, import_kolmafia100.totalTurnsPlayed)() - (0, import_kolmafia100.toFloat)((0, import_kolmafia100.getProperty)("_lastSausageMonsterTurn")) + 1;
  var denominator = 5 + sausageFights * 3 + (0, import_kolmafia100.max)(0, sausageFights - 5) ** 3;
  if (sausageFights > 0 && numerator / denominator < 1) {
    return false;
  }
  if (loc === import_kolmafia100.Location.none) {
    return true;
  }
  if (autoEquip$1(wrap_item($item`Kramco Sausage-o-Matic™`))) {
    (0, import_kolmafia100.setProperty)("auto_nextEncounter", "sausage goblin");
    return autoAdv(1, loc, option);
  }
  (0, import_kolmafia100.setProperty)("auto_nextEncounter", "");
  return false;
}
function auto_haveLilDoctorBag() {
  if (auto_is_valid($item`Lil' Doctor™ bag`) && (0, import_kolmafia100.availableAmount)($item`Lil' Doctor™ bag`) > 0) {
    return true;
  }
  return false;
}
function auto_chestXraysRemaining() {
  if (!auto_haveLilDoctorBag() || !auto_is_valid$2($skill`Chest X-Ray`)) {
    return 0;
  }
  return 3 - (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_chestXRayUsed"));
}
function auto_reflexHammersRemaining() {
  if (!auto_haveLilDoctorBag() || !auto_is_valid$2($skill`Reflex Hammer`)) {
    return 0;
  }
  return 3 - (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_reflexHammerUsed"));
}
function auto_saberChargesAvailable() {
  var saber = wrap_item($item`Fourth of May Cosplay Saber`);
  if (!(0, import_kolmafia100.isUnrestricted)(saber)) {
    return 0;
  }
  if (!possessEquipment(saber)) {
    return 0;
  }
  if (!auto_is_valid$2($skill`Use the Force`)) {
    return 0;
  }
  return 5 - (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_saberForceUses"));
}
function auto_combatSaberBanish() {
  (0, import_kolmafia100.setProperty)("choiceAdventure1387", 1 .toString());
  return `skill ${$skill`Use the Force`}`;
}
function auto_combatSaberYR() {
  (0, import_kolmafia100.setProperty)("choiceAdventure1387", 3 .toString());
  return `skill ${$skill`Use the Force`}`;
}
function auto_spoonCombatSkill() {
  switch ((0, import_kolmafia100.myPrimestat)()) {
    case $stat`Muscle`:
      return $skill`Dragoon Platoon`;
    case $stat`Mysticality`:
      return $skill`Spittoon Monsoon`;
    case $stat`Moxie`:
      return $skill`Festoon Buffoon`;
    default:
      (0, import_kolmafia100.abort)("Invalid mainstat, what?");
      return import_kolmafia100.Skill.none;
  }
}
function auto_campawayAvailable() {
  return (0, import_kolmafia100.isUnrestricted)($item`Distant Woods Getaway Brochure`) && (0, import_kolmafia100.toBoolean)((0, import_kolmafia100.getProperty)("getawayCampsiteUnlocked"));
}

// src/autoscend/paths/kingdom_of_exploathing.ts
function in_koe() {
  return (0, import_kolmafia101.myPath)() === $path`Kingdom of Exploathing`;
}
function koe_NeedWhitePixels() {
  if (!needDigitalKey()) {
    return false;
  }
  var pixels_needed = (0, import_kolmafia101.toBoolean)((0, import_kolmafia101.getProperty)("spaceInvaderDefeated")) ? 30 : 20;
  return (0, import_kolmafia101.itemAmount)($item`white pixel`) < pixels_needed;
}

// src/autoscend/iotms/mr2016.ts
function auto_haveJokestersGun() {
  if (possessEquipment($item`The Jokester's gun`) && auto_can_equip($item`The Jokester's gun`)) {
    return true;
  }
  return false;
}
function auto_jokesterGunFreeKillAvailable() {
  if (!auto_haveJokestersGun() || !auto_is_valid$2($skill`Fire the Jokester's Gun`)) {
    return false;
  }
  return !(0, import_kolmafia102.toBoolean)((0, import_kolmafia102.getProperty)("_firedJokestersGun"));
}
function snojoFightAvailable() {
  if (!(0, import_kolmafia102.isUnrestricted)($item`X-32-F snowman crate`)) {
    return false;
  }
  if (!(0, import_kolmafia102.toBoolean)((0, import_kolmafia102.getProperty)("snojoAvailable"))) {
    return false;
  }
  if (in_koe()) {
    return false;
  }
  if ((0, import_kolmafia102.myInebriety)() > (0, import_kolmafia102.inebrietyLimit)()) {
    return false;
  }
  if (!inAftercore()) {
    var controls = /* @__PURE__ */ new Map();
    controls.set("MUSCLE", 1);
    controls.set("MYSTICALITY", 2);
    controls.set("MOXIE", 3);
    controls.set("Muscle", 1);
    controls.set("Mysticality", 2);
    controls.set("Moxie", 3);
    var standard = /* @__PURE__ */ new Map();
    standard.set(0, "Moxie");
    standard.set(1, "Mysticality");
    standard.set(2, "Muscle");
    standard.set(3, "Moxie");
    if (is_boris() && (possessEquipment($item`Boris's Helm`) || possessEquipment($item`Boris's Helm (askew)`))) {
      standard.set(0, "Muscle");
      standard.set(1, "Mysticality");
      standard.set(2, "Moxie");
      standard.set(3, "Mysticality");
    }
    if (in_lta()) {
      standard.set(0, "Mysticality");
      standard.set(1, "Moxie");
      standard.set(2, "Muscle");
      standard.set(3, "Mysticality");
    }
    if (is_jarlsberg()) {
      standard.set(0, "Mysticality");
      standard.set(1, "Moxie");
      standard.set(2, "Muscle");
      standard.set(3, "Moxie");
    }
    if ((0, import_kolmafia102.toInt)(
      (0, import_kolmafia102.getProperty)(
        `snojo${standard.get(0) ?? standard.set(0, "").get(0)}Wins`
      )
    ) < 14 && (0, import_kolmafia102.getProperty)("snojoSetting") !== (0, import_kolmafia102.toUpperCase)(standard.get(0) ?? standard.set(0, "").get(0))) {
      var temp = (0, import_kolmafia102.visitUrl)(
        "place.php?whichplace=snojo&action=snojo_controller"
      );
      temp = (0, import_kolmafia102.runChoice)(
        controls.get(standard.get(0) ?? standard.set(0, "").get(0)) ?? controls.set(standard.get(0) ?? standard.set(0, "").get(0), 0).get(standard.get(0) ?? standard.set(0, "").get(0))
      );
    }
    if ((0, import_kolmafia102.getProperty)("snojoSetting") === (0, import_kolmafia102.toUpperCase)(standard.get(0) ?? standard.set(0, "").get(0)) && (0, import_kolmafia102.toInt)(
      (0, import_kolmafia102.getProperty)(
        `snojo${standard.get(0) ?? standard.set(0, "").get(0)}Wins`
      )
    ) >= 14 && (0, import_kolmafia102.getProperty)("snojoSetting") !== (0, import_kolmafia102.toUpperCase)(standard.get(1) ?? standard.set(1, "").get(1)) && (0, import_kolmafia102.toInt)(
      (0, import_kolmafia102.getProperty)(
        `snojo${standard.get(1) ?? standard.set(1, "").get(1)}Wins`
      )
    ) < 14) {
      var _temp = (0, import_kolmafia102.visitUrl)(
        "place.php?whichplace=snojo&action=snojo_controller"
      );
      _temp = (0, import_kolmafia102.runChoice)(
        controls.get(standard.get(1) ?? standard.set(1, "").get(1)) ?? controls.set(standard.get(1) ?? standard.set(1, "").get(1), 0).get(standard.get(1) ?? standard.set(1, "").get(1))
      );
    }
    if ((0, import_kolmafia102.getProperty)("snojoSetting") === (0, import_kolmafia102.toUpperCase)(standard.get(1) ?? standard.set(1, "").get(1)) && (0, import_kolmafia102.toInt)(
      (0, import_kolmafia102.getProperty)(
        `snojo${standard.get(1) ?? standard.set(1, "").get(1)}Wins`
      )
    ) >= 14 && (0, import_kolmafia102.getProperty)("snojoSetting") !== (0, import_kolmafia102.toUpperCase)(standard.get(2) ?? standard.set(2, "").get(2)) && (0, import_kolmafia102.toInt)(
      (0, import_kolmafia102.getProperty)(
        `snojo${standard.get(2) ?? standard.set(2, "").get(2)}Wins`
      )
    ) < 14) {
      var _temp2 = (0, import_kolmafia102.visitUrl)(
        "place.php?whichplace=snojo&action=snojo_controller"
      );
      _temp2 = (0, import_kolmafia102.runChoice)(
        controls.get(standard.get(2) ?? standard.set(2, "").get(2)) ?? controls.set(standard.get(2) ?? standard.set(2, "").get(2), 0).get(standard.get(2) ?? standard.set(2, "").get(2))
      );
    }
    if ((0, import_kolmafia102.getProperty)("snojoSetting") === (0, import_kolmafia102.toUpperCase)(standard.get(2) ?? standard.set(2, "").get(2)) && (0, import_kolmafia102.toInt)(
      (0, import_kolmafia102.getProperty)(
        `snojo${standard.get(2) ?? standard.set(2, "").get(2)}Wins`
      )
    ) >= 11 && (0, import_kolmafia102.getProperty)("snojoSetting") !== (0, import_kolmafia102.toUpperCase)(standard.get(3) ?? standard.set(3, "").get(3))) {
      var _temp3 = (0, import_kolmafia102.visitUrl)(
        "place.php?whichplace=snojo&action=snojo_controller"
      );
      _temp3 = (0, import_kolmafia102.runChoice)(
        controls.get(standard.get(3) ?? standard.set(3, "").get(3)) ?? controls.set(standard.get(3) ?? standard.set(3, "").get(3), 0).get(standard.get(3) ?? standard.set(3, "").get(3))
      );
    }
  }
  if ((0, import_kolmafia102.getProperty)("snojoSetting") === "NONE") {
    auto_log_info(
      `Snojo not set, attempting to set to ${(0, import_kolmafia102.myPrimestat)()}`,
      "blue"
    );
    (0, import_kolmafia102.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
  }
  return (0, import_kolmafia102.toInt)((0, import_kolmafia102.getProperty)("_snojoFreeFights")) < 10;
}
function isOverdueDigitize() {
  if ((0, import_kolmafia102.toInt)((0, import_kolmafia102.getProperty)("_sourceTerminalDigitizeUses")) === 0) {
    return false;
  }
  if ((0, import_kolmafia102.getCounters)("Digitize Monster", 1, 200) === "Digitize Monster") {
    return false;
  }
  if ((0, import_kolmafia102.containsText)((0, import_kolmafia102.getProperty)("_tempRelayCounters"), "Digitize Monster")) {
    return false;
  }
  if ((0, import_kolmafia102.getCounters)("Digitize Monster", 0, 0) === "Digitize Monster") {
    return true;
  }
  return false;
}
function expectGhostReport() {
  if ((0, import_kolmafia102.totalTurnsPlayed)() >= (0, import_kolmafia102.toInt)((0, import_kolmafia102.getProperty)("nextParanormalActivity"))) {
    if ((0, import_kolmafia102.totalTurnsPlayed)() > (0, import_kolmafia102.toInt)((0, import_kolmafia102.getProperty)("nextParanormalActivity"))) {
      var page = (0, import_kolmafia102.visitUrl)("charpane.php");
      var myGhost = new AshMatcher(
        '<tr rel="protonquest">(?:.*?)<b>(.*?)</b>',
        page
      );
      if (myGhost.find()) {
        var goal = (0, import_kolmafia102.toLocation)(myGhost.group(1));
        (0, import_kolmafia102.setProperty)("ghostLocation", goal.toString());
        (0, import_kolmafia102.setProperty)("questPAGhost", "started");
      }
    }
    if ((0, import_kolmafia102.getProperty)("questPAGhost") === "unstarted") {
      return true;
    }
  }
  return false;
}
function haveGhostReport() {
  if ((0, import_kolmafia102.getProperty)("questPAGhost") === "unstarted") {
    return false;
  }
  if ((0, import_kolmafia102.getProperty)("questPAGhost") === "started" && (0, import_kolmafia102.getProperty)("ghostLocation") !== "") {
    return true;
  }
  return false;
}

// src/autoscend/auto_zone.ts
function zone_unlock(loc) {
  var unlocked = false;
  if (loc === $location`The Thinknerd Warehouse`) {
    unlocked = LX_unlockThinknerdWarehouse(false);
  } else {
    auto_log_debug$1(`Don't know how to unlock ${loc}`);
    return false;
  }
  if (!unlocked) {
    auto_log_debug$1(`Wasnt able to unlock ${loc}`);
  }
  return unlocked;
}
function zone_isAvailable(loc, unlockIfPossible) {
  if (zone_available(loc)) {
    return true;
  }
  if (unlockIfPossible) {
    zone_unlock(loc);
  }
  return zone_available(loc);
}
function zone_isAvailable$1(loc) {
  return zone_isAvailable(loc, true);
}
function zone_delayable() {
  var retval = /* @__PURE__ */ new Map();
  var _iterator = _createForOfIteratorHelper(
    $locations.all()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var loc = _step.value;
      var locValue = zone_delay(loc);
      if (locValue._boolean && zone_isAvailable$1(loc)) {
        retval.set(loc, locValue._int);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return retval;
}
function zone_needItem(loc) {
  var retval = new generic_t();
  var value = 0;
  {
    var getMilk = false;
    var milksPerMilk = 0;
    var milkUsed = 0;
    switch (loc) {
      case $location`Hero's Field`:
        value = 20;
        break;
      case $location`The Hole in the Sky`:
        if ((0, import_kolmafia103.itemAmount)($item`star`) < 8 || (0, import_kolmafia103.itemAmount)($item`line`) < 7) {
          value = 30;
        }
        break;
      case $location`The Orcish Frat House`:
      case $location`The Hippy Camp`:
        value = 5;
        break;
      case $location`Wartime Frat House`:
        if (!possessOutfit$1("Frat Warrior Fatigues") && !(0, import_kolmafia103.isWearingOutfit)("War Hippy Fatigues")) {
          value = 5;
        }
        break;
      case $location`Wartime Hippy Camp`:
        if (!possessOutfit$1("War Hippy Fatigues") && !(0, import_kolmafia103.isWearingOutfit)("Frat Warrior Fatigues")) {
          value = 5;
        }
        break;
      case $location`The Battlefield (Frat Uniform)`:
      case $location`The Battlefield (Hippy Uniform)`:
        value = 5;
        break;
      case $location`The Hatching Chamber`:
      case $location`The Feeding Chamber`:
      case $location`The Royal Guard Chamber`:
        value = 10;
        break;
      case $location`The Oasis`:
        if ((0, import_kolmafia103.haveEffect)($effect`Ultrahydrated`) > 0) {
          value = 30;
        }
        break;
      case $location`The Middle Chamber`:
        value = 20;
        break;
      case $location`The Haunted Library`:
        if ((0, import_kolmafia103.itemAmount)($item`killing jar`) < 1 && ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("gnasirProgress")) & 4) === 0 && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("desertExploration")) < 100) {
          value = 10;
        }
        break;
      case $location`The Haunted Laundry Room`:
        value = 5 * (1 + (0, import_kolmafia103.toFloat)((0, import_kolmafia103.getProperty)("auto_cabinetsencountered")));
        break;
      case $location`The Haunted Wine Cellar`:
        value = 5 * (1 + (0, import_kolmafia103.toFloat)((0, import_kolmafia103.getProperty)("auto_wineracksencountered")));
        break;
      case $location`The Hidden Park`:
        if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("hiddenTavernUnlock")) < (0, import_kolmafia103.myAscensions)()) {
          value = 20;
        }
        break;
      case $location`The Hidden Bowling Alley`:
        if ((0, import_kolmafia103.itemAmount)($item`bowling ball`) === 0 && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("hiddenBowlingAlleyProgress")) < 5) {
          value = 40;
        }
        break;
      case $location`The Hidden Temple`:
        if ((0, import_kolmafia103.haveEffect)($effect`Stone-Faced`) === 0) {
          value = 20;
        }
        break;
      case $location`The Black Forest`:
        if (!possessEquipment($item`blackberry galoshes`)) {
          value = 20;
        }
        break;
      case $location`Inside the Palindome`:
        if ((0, import_kolmafia103.itemAmount)($item`stunt nuts`) === 0 && (0, import_kolmafia103.itemAmount)($item`wet stunt nut stew`) === 0) {
          value = 30;
        }
        break;
      case $location`Whitey's Grove`:
        if (((0, import_kolmafia103.itemAmount)($item`lion oil`) === 0 || (0, import_kolmafia103.itemAmount)($item`bird rib`) === 0) && (0, import_kolmafia103.itemAmount)($item`wet stew`) === 0 && (0, import_kolmafia103.itemAmount)($item`wet stunt nut stew`) === 0 && internalQuestStatus("questL11Palindome") < 5) {
          value = 25;
        }
        break;
      case $location`The Copperhead Club`:
      case $location`A Mob of Zeppelin Protesters`:
        if (internalQuestStatus("questL11Ron") >= 1) {
          value = 15;
        }
        break;
      case $location`The Red Zeppelin`:
        value = 30;
        break;
      case $location`The Penultimate Fantasy Airship`:
        if (!possessEquipment($item`amulet of extreme plot significance`)) {
          value = 10;
        }
        if (!possessEquipment($item`Mohawk wig`)) {
          value = 10;
        }
        break;
      case $location`The Castle in the Clouds in the Sky (Basement)`:
        value = 40;
        break;
      case $location`The Castle in the Clouds in the Sky (Ground Floor)`:
        value = 20;
        break;
      case $location`The Smut Orc Logging Camp`:
        if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("chasmBridgeProgress")) < bridgeGoal()) {
          value = 10;
        }
        break;
      case $location`A-Boo Peak`:
        if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("auto_aboopending")) === 0) {
          value = 15;
        }
        break;
      case $location`Twin Peak`:
        value = 15;
        break;
      case $location`Oil Peak`:
        if (((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("twinPeakProgress")) & 4) === 0 && (0, import_kolmafia103.itemAmount)($item`bubblin' crude`) < 12 && (0, import_kolmafia103.itemAmount)($item`jar of oil`) < 1) {
          if ((0, import_kolmafia103.monsterLevelAdjustment)() > 100) {
            value = 10;
          } else if ((0, import_kolmafia103.monsterLevelAdjustment)() > 50) {
            value = 30;
          } else if ((0, import_kolmafia103.monsterLevelAdjustment)() > 20) {
            value = 10;
          }
        }
        break;
      case $location`The Valley of Rof L'm Fao`:
        if ((0, import_kolmafia103.itemAmount)($item`lowercase N`) === 0 && (0, import_kolmafia103.itemAmount)($item`ND`) === 0 && (0, import_kolmafia103.itemAmount)($item`Wand of Nagamar`) === 0 && (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("auto_wandOfNagamar"))) {
          value = 30;
        }
      case $location`Itznotyerzitz Mine`:
        if (!possessOutfit$1("Mining Gear") && cloversAvailable$1() === 0) {
          value = 10;
        }
        break;
      case $location`The Goatlet`:
        getMilk = ((0, import_kolmafia103.haveSkill)($skill`Advanced Saucecrafting`) || (0, import_kolmafia103.myClass)() === $class`Sauceror` && ((0, import_kolmafia103.guildAvailable)() || !(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("auto_skipUnlockGuild")))) && (0, import_kolmafia103.fullnessLimit)() !== 0;
        milksPerMilk = (0, import_kolmafia103.myClass)() === $class`Sauceror` ? 3 : 1;
        milkUsed = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_milkOfMagnesiumUsed")) || fullness_left() === 0 ? 1 : 0;
        if ((0, import_kolmafia103.itemAmount)($item`milk of magnesium`) + milksPerMilk * (0, import_kolmafia103.itemAmount)($item`glass of goat's milk`) + milkUsed >= 3) {
          getMilk = false;
        }
        if (getMilk) {
          value = 20;
        } else {
          value = 40;
        }
        break;
      case $location`The eXtreme Slope`:
        if (!possessOutfit$1("eXtreme Cold-Weather Gear")) {
          value = 10;
        }
      case $location`The Defiled Nook`:
        if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("cyrptNookEvilness")) > 14) {
          value = 20;
        }
        break;
      case $location`The Dark Neck of the Woods`:
      case $location`The Dark Heart of the Woods`:
      case $location`The Dark Elbow of the Woods`:
      case $location`Pandamonium Slums`:
        if (LX_doingPirates() && (0, import_kolmafia103.itemAmount)($item`hot wing`) < 3 && internalQuestStatus("questM12Pirate") <= 2) {
          value = 30;
        }
        break;
      case $location`Cobb's Knob Barracks`:
        if (!(0, import_kolmafia103.haveOutfit)("Knob Goblin Elite Guard Uniform")) {
          value = 10;
        }
        break;
      case $location`Cobb's Knob Harem`:
        if ((0, import_kolmafia103.itemAmount)($item`Knob Goblin perfume`) === 0) {
          value = 25;
        }
        if (!possessOutfit$1("Knob Goblin Harem Girl Disguise")) {
          value = 20;
        }
        break;
      case $location`The Beanbat Chamber`:
        if ((0, import_kolmafia103.itemAmount)($item`enchanted bean`) === 0) {
          value = 50;
        }
        if (internalQuestStatus("questL04Bat") < 3) {
          value = 10;
        }
        break;
      case $location`The Batrat and Ratbat Burrow`:
        if (internalQuestStatus("questL04Bat") < 3) {
          value = 15;
        }
        break;
      case $location`The Bat Hole Entrance`:
      case $location`Guano Junction`:
        if (internalQuestStatus("questL04Bat") < 3) {
          value = 10;
        }
        break;
      case $location`The Laugh Floor`:
        if ((0, import_kolmafia103.itemAmount)($item`imp air`) < 5) {
          value = 15;
        }
        break;
      case $location`Infernal Rackets Backstage`:
        if ((0, import_kolmafia103.itemAmount)($item`bus pass`) < 5) {
          value = 15;
        }
        break;
      case $location`Barrrney's Barrr`:
        if ((0, import_kolmafia103.itemAmount)($item`cocktail napkin`) === 0) {
          value = 10;
        }
        break;
      case $location`The F'c'le`:
        if ((0, import_kolmafia103.itemAmount)($item`ball polish`) === 0 || (0, import_kolmafia103.itemAmount)($item`mizzenmast mop`) === 0 || (0, import_kolmafia103.itemAmount)($item`rigging shampoo`) === 0) {
          if (!possessEquipment($item`pirate fledges`)) {
            value = 30;
          }
        }
        break;
      case $location`The Obligatory Pirate's Cove`:
        if (!possessOutfit$1("Swashbuckling Getup") && !possessEquipment($item`pirate fledges`)) {
          value = 10;
        }
      case $location`The Old Landfill`:
        value = 5 * (1 + (0, import_kolmafia103.toFloat)((0, import_kolmafia103.getProperty)("auto_junkspritesencountered")));
        break;
      case $location`The Deep Machine Tunnels`:
        value = 30;
        break;
      case $location`Barf Mountain`:
        retval._float = 15;
        break;
      case import_kolmafia103.Location.get("The Velvet / Gold Mine"):
        if (!canYellowRay$1()) {
          retval._float = 10;
        }
        break;
      case $location`The Haunted Pantry`:
        break;
      case $location`The Skeleton Store`:
        break;
      case $location`The Secret Government Laboratory`:
        break;
      case $location`Waste Processing`:
        if (!possessEquipment($item`bugbear communicator badge`)) {
          retval._float = 20;
        }
        break;
      case $location`Science Lab`:
        retval._float = 30;
        break;
      case $location`Engineering`:
        retval._float = 50;
        break;
      case $location`Fight in the Dirt`:
        value = 50;
        break;
      case $location`Fight in the Tall Grass`:
        value = 50;
        break;
      case $location`Fight in the Very Tall Grass`:
        value = 50;
        break;
      case $location`Shadow Rift (The Ancient Buried Pyramid)`:
      case $location`Shadow Rift (The Hidden City)`:
      case $location`Shadow Rift (The Misspelled Cemetary)`:
        value = 10;
        break;
      default:
        retval._error = true;
        break;
    }
  }
  if (expectGhostReport() && loc === (0, import_kolmafia103.toLocation)((0, import_kolmafia103.getProperty)("ghostLocation")) && (0, import_kolmafia103.getProperty)("questPAGhost") === "started") {
    value = 0;
  }
  if (value !== 0) {
    retval._boolean = true;
    retval._float = 1e4 / value;
    if (in_lar()) {
      retval._float = 5e3 / value;
    }
    retval._float -= 100;
  }
  return retval;
}
function zone_combatMod(loc) {
  var retval = new generic_t();
  var delay = zone_delay(loc);
  var value = 0;
  switch (loc) {
    case $location`The Orcish Frat House`:
    case $location`The Hippy Camp`:
      if ((0, import_kolmafia103.myLevel)() >= 9) {
        value = -85;
      }
      break;
    case $location`Wartime Frat House`:
    case $location`Wartime Hippy Camp`:
      value = -80;
      break;
    case $location`Sonofa Beach`:
      if (auto_voteMonster()) {
        var _iterator2 = _createForOfIteratorHelper(
          $slots`acc3, acc2, acc1`
        ), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var sl = _step2.value;
            if ((0, import_kolmafia103.getProperty)(`_auto_maximize_equip_${sl.toString()}`) === $item`"I Voted!" sticker`.toString()) {
              value = 0;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (auto_sausageGoblin() && (0, import_kolmafia103.getProperty)("_auto_maximize_equip_off-hand") === $item`Kramco Sausage-o-Matic™`.toString()) {
        value = 0;
        break;
      }
      value = 90;
      break;
    case $location`The Upper Chamber`:
      value = -85;
      break;
    case $location`The Haunted Billiards Room`:
      value = -85;
      break;
    case $location`The Haunted Gallery`:
      if (delay._int === 0 || !(0, import_kolmafia103.containsText)((0, import_kolmafia103.getProperty)("relayCounters"), "Garden Banished")) {
        value = -80;
      }
      break;
    case $location`The Haunted Bathroom`:
      if (delay._int === 0) {
        value = -90;
      }
      break;
    case $location`The Haunted Ballroom`:
      if (delay._int === 0 && loc.turnsSpent > 0) {
        value = -90;
      }
      break;
    case $location`The Hidden Park`:
      value = -85;
      break;
    case $location`The Hidden Temple`:
      if ((0, import_kolmafia103.haveEffect)($effect`Stone-Faced`) === 0) {
        value = -90;
      }
      break;
    case $location`A Mob of Zeppelin Protesters`:
      if (internalQuestStatus("questL11Ron") >= 1) {
        value = -70;
      }
      break;
    case $location`The Black Forest`:
      if (internalQuestStatus("questL13Final") < 6) {
        value = 5;
      } else if (internalQuestStatus("questL13Final") === 6) {
        value = -95;
      }
      break;
    case $location`Inside the Palindome`:
      if (((0, import_kolmafia103.itemAmount)($item`photograph of a red nugget`) === 0 || (0, import_kolmafia103.itemAmount)($item`photograph of an ostrich egg`) === 0 || (0, import_kolmafia103.itemAmount)($item`photograph of God`) === 0) && internalQuestStatus("questL11Palindome") <= 2) {
        value = -70;
      } else if (3 <= internalQuestStatus("questL11Palindome") && internalQuestStatus("questL11Palindome") <= 4) {
        value = 25;
      }
      break;
    case $location`Whitey's Grove`:
      if (((0, import_kolmafia103.itemAmount)($item`lion oil`) === 0 || (0, import_kolmafia103.itemAmount)($item`bird rib`) === 0) && (0, import_kolmafia103.itemAmount)($item`wet stew`) === 0 && (0, import_kolmafia103.itemAmount)($item`wet stunt nut stew`) === 0 && internalQuestStatus("questL11Palindome") < 5) {
        value = 15;
      }
      break;
    case $location`The Penultimate Fantasy Airship`:
      if (delay._int === 0 || auto_haveBatWings() && (0, import_kolmafia103.availableAmount)($item`S.O.C.K.`) === 0) {
        value = -80;
      } else if (in_bugbear() && bugbear_BioDataRemaining($location`Engineering`) > 0) {
        value = 10;
      } else {
      }
      break;
    case $location`The Castle in the Clouds in the Sky (Basement)`:
    case $location`The Castle in the Clouds in the Sky (Ground Floor)`:
    case $location`The Castle in the Clouds in the Sky (Top Floor)`:
      value = -95;
      break;
    case $location`Twin Peak`:
      value = -85;
      break;
    case $location`The eXtreme Slope`:
      value = -95;
      break;
    case $location`Itznotyerzitz Mine`:
      if (!possessOutfit$1("Mining Gear") && cloversAvailable$1() === 0) {
        value = -90;
      }
      break;
    case $location`Lair of the Ninja Snowmen`:
      if (internalQuestStatus("questL08Trapper") < 3 && !L8_forceExtremeInstead() && (0, import_kolmafia103.itemAmount)($item`ninja carabiner`) === 0) {
        value = 80;
      }
      break;
    case $location`The Dark Neck of the Woods`:
    case $location`The Dark Heart of the Woods`:
    case $location`The Dark Elbow of the Woods`:
      value = -95;
      break;
    case $location`The Defiled Cranny`:
    case $location`The Defiled Alcove`:
      value = -85;
      break;
    case $location`The Typical Tavern Cellar`:
      break;
    case $location`The Spooky Forest`:
      if (delay._int === 0) {
        value = -85;
      }
      break;
    case $location`The Laugh Floor`:
      if ((0, import_kolmafia103.itemAmount)($item`Azazel's lollipop`) < 1) {
        value = (0, import_kolmafia103.toInt)(15);
      }
      break;
    case $location`Infernal Rackets Backstage`:
      if ((0, import_kolmafia103.itemAmount)($item`Azazel's unicorn`) < 1) {
        value = -70;
      }
      break;
    case $location`Barrrney's Barrr`:
      if (numPirateInsults() >= 6) {
        value = -80;
      } else {
        value = 20;
      }
      break;
    case $location`The F'c'le`:
      if (!possessEquipment($item`pirate fledges`)) {
        value = 20;
      }
      break;
    case $location`The Poop Deck`:
      value = -80;
      break;
    case $location`The Obligatory Pirate's Cove`:
      if (!possessOutfit$1("Swashbuckling Getup")) {
        if ((0, import_kolmafia103.itemAmount)($item`The Big Book of Pirate Insults`) > 0 && numPirateInsults() < 3) {
          value = 0;
        } else {
          value = -60;
        }
      } else if (numPirateInsults() < 8) {
        value = 40;
      }
      break;
    case $location`The Knob Shaft`:
      value = 15;
      break;
    case $location`South of the Border`:
      value = 50;
      break;
    case $location`The Icy Peak`:
      value = 15;
      break;
    case $location`Pandamonium Slums`:
      value = 5;
      break;
    case $location`The Haunted Pantry`:
      value = 20;
      break;
    case $location`Cobb's Knob Treasury`:
      value = 15;
      break;
    case $location`The VERY Unquiet Garves`:
      if ((0, import_kolmafia103.itemAmount)($item`Wand of Nagamar`) === 0 && internalQuestStatus("questL13Final") === 12 && !in_koe()) {
        value = -100;
      }
      break;
    case $location`Super Villain's Lair`:
      if (!(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_villainLairColorChoiceUsed")) || !(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_villainLairDoorChoiceUsed")) || !(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_villainLairSymbologyChoiceUsed"))) {
        value = -70;
      }
      break;
    case $location`Through the Spacegate`:
      value = 5;
      break;
    case $location`The Ice Hotel`:
      value = -85;
      break;
    case $location`Sonar`:
      value = -70;
      break;
    case $location`Morgue`:
      if ((0, import_kolmafia103.itemAmount)($item`bugbear autopsy tweezers`) > 0) {
        value = -70;
      }
      break;
    default:
      retval._error = true;
      break;
  }
  if (in_lar()) {
    value = 0;
  }
  if (expectGhostReport() && loc === (0, import_kolmafia103.toLocation)((0, import_kolmafia103.getProperty)("ghostLocation")) && (0, import_kolmafia103.getProperty)("questPAGhost") === "started") {
    value = 0;
  }
  if (value !== 0) {
    retval._boolean = true;
    retval._int = value;
  }
  return retval;
}
function zone_delay(loc) {
  var retval = new generic_t();
  var value = 0;
  var shenZones = getShenZonesTurnsSpent();
  switch (loc) {
    case $location`The Oasis`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("desertExploration")) < 100 && (0, import_kolmafia103.haveEffect)($effect`Ultrahydrated`) > 0) {
        value = 5 - loc.turnsSpent;
      }
      break;
    case $location`The Upper Chamber`:
      value = 5 - loc.turnsSpent;
      break;
    case $location`The Middle Chamber`:
      value = 10 - loc.turnsSpent;
      break;
    case $location`The Haunted Gallery`:
      value = 5 - loc.turnsSpent;
      break;
    case $location`The Haunted Bathroom`:
      value = 5 - loc.turnsSpent;
      break;
    case $location`The Haunted Ballroom`:
      value = 5 - loc.turnsSpent;
      break;
    case $location`The Hidden Park`:
      if (!possessEquipment($item`antique machete`) && !possessEquipment($item`muculent machete`) && (0, import_kolmafia103.inHardcore)()) {
        value = 6 - loc.turnsSpent;
      }
      break;
    case $location`The Hidden Apartment Building`:
      if (internalQuestStatus("questL11Curses") < 2) {
        if (loc.turnsSpent < 9) {
          value = 8 - loc.turnsSpent;
        } else {
          value = 7 - (loc.turnsSpent - 9) % 8;
        }
      }
      break;
    case $location`The Hidden Office Building`:
      if (internalQuestStatus("questL11Business") < 2) {
        if (loc.turnsSpent < 6) {
          value = 5 - loc.turnsSpent;
        } else {
          value = 4 - (loc.turnsSpent - 6) % 5;
        }
      }
      break;
    case $location`The Spooky Forest`:
      value = 5 - loc.turnsSpent;
      break;
    case $location`The Boss Bat's Lair`:
      value = 4 - loc.turnsSpent;
      break;
    case $location`The Outskirts of Cobb's Knob`:
      if (internalQuestStatus("questL05Goblin") < 1) {
        value = 10 - loc.turnsSpent;
      } else {
        retval._error = true;
      }
      break;
    case $location`The Penultimate Fantasy Airship`:
      if ((0, import_kolmafia103.getProperty)("questL10Garbage") === "step2") {
        value = 5 - loc.turnsSpent;
      } else if ((0, import_kolmafia103.getProperty)("questL10Garbage") === "step3") {
        value = 10 - loc.turnsSpent;
      } else if ((0, import_kolmafia103.getProperty)("questL10Garbage") === "step4") {
        value = 15 - loc.turnsSpent;
      } else if ((0, import_kolmafia103.getProperty)("questL10Garbage") === "step5") {
        value = 20 - loc.turnsSpent;
      } else if ((0, import_kolmafia103.getProperty)("questL10Garbage") === "step6") {
        value = 25 - loc.turnsSpent;
      }
      break;
    case $location`The Castle in the Clouds in the Sky (Ground Floor)`:
      value = 10 - loc.turnsSpent;
      break;
    case $location`The Haunted Pantry`:
      if (isGuildClass() && (0, import_kolmafia103.myPrimestat)() === $stat`Mysticality` && !(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("auto_skipUnlockGuild"))) {
        value = 5 - loc.turnsSpent;
      }
      break;
    case $location`The Sleazy Back Alley`:
      if (isGuildClass() && (0, import_kolmafia103.myPrimestat)() === $stat`Moxie` && !(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("auto_skipUnlockGuild"))) {
        value = 5 - loc.turnsSpent;
      }
      break;
    case $location`The Smut Orc Logging Camp`:
      if (shenZones.has(loc) && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("chasmBridgeProgress")) >= bridgeGoal()) {
        value = 3 - (loc.turnsSpent - (shenZones.get(loc) ?? shenZones.set(loc, 0).get(loc)));
      }
      break;
    case $location`The Hole in the Sky`:
      if (shenZones.has(loc) && !needStarKey()) {
        value = 3 - (loc.turnsSpent - (shenZones.get(loc) ?? shenZones.set(loc, 0).get(loc)));
      }
      break;
    case $location`The Unquiet Garves`:
    case $location`The Castle in the Clouds in the Sky (Top Floor)`:
    case $location`Lair of the Ninja Snowmen`:
    case $location`The Batrat and Ratbat Burrow`:
      if (shenZones.has(loc)) {
        value = 3 - (loc.turnsSpent - (shenZones.get(loc) ?? shenZones.set(loc, 0).get(loc)));
      }
      break;
    case $location`The Copperhead Club`:
      if (internalQuestStatus("questL11Shen") > 0 && internalQuestStatus("questL11Shen") < 8) {
        value = 5 - (loc.turnsSpent - (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("auto_lastShenTurn")));
      }
      break;
    case $location`The Hallowed Halls`:
    case $location`Art Class`:
    case $location`Chemistry Class`:
    case $location`Shop Class`:
      if (kolhs_mandatorySchool()) {
        value = 40 - (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("_kolhsAdventures"));
      }
      break;
    case $location`Vanya's Castle`:
      if (need8BitPoints() && possessEquipment($item`continuum transfunctioner`) && ((0, import_kolmafia103.getProperty)("8BitColor") === "black" || (0, import_kolmafia103.getProperty)("8BitColor") === "")) {
        value = 5 - (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("8BitBonusTurns"));
      }
      break;
    case $location`The Fungus Plains`:
      if (need8BitPoints() && possessEquipment($item`continuum transfunctioner`) && (0, import_kolmafia103.getProperty)("8BitColor") === "red") {
        value = 5 - (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("8BitBonusTurns"));
      }
      break;
    case $location`Megalo-City`:
      if (need8BitPoints() && possessEquipment($item`continuum transfunctioner`) && (0, import_kolmafia103.getProperty)("8BitColor") === "blue") {
        value = 5 - (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("8BitBonusTurns"));
      }
      break;
    case $location`Hero's Field`:
      if (need8BitPoints() && possessEquipment($item`continuum transfunctioner`) && (0, import_kolmafia103.getProperty)("8BitColor") === "green") {
        value = 5 - (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("8BitBonusTurns"));
      }
      break;
    default:
      retval._error = true;
      break;
  }
  if (value > 0) {
    retval._boolean = true;
    retval._int = value;
  }
  return retval;
}
function zone_available(loc) {
  var retval = false;
  if (kolhs_mandatorySchool()) {
    if ($locations`The Hallowed Halls, Art Class, Chemistry Class, Shop Class`.includes(
      loc
    )) {
      retval = true;
    }
    return retval;
  }
  switch (loc) {
    case $location`The Copperhead Club`:
    case $location`A Mob of Zeppelin Protesters`:
      if (internalQuestStatus("questL11Shen") >= 0) {
        retval = true;
      }
      break;
    case $location`The Red Zeppelin`:
      if (internalQuestStatus("questL11Ron") >= 2) {
        retval = true;
      }
      break;
    case $location`Super Villain's Lair`:
      if (in_lta() && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("_villainLairProgress")) < 999 && (0, import_kolmafia103.getProperty)("_auto_bondBriefing") === "started") {
        retval = true;
      }
      break;
    case $location`South of the Border`:
    case $location`The Shore\, Inc. Travel Agency`:
      if (isDesertAvailable()) {
        retval = true;
      }
      break;
    case $location`The Arid\, Extra-Dry Desert`:
      if (internalQuestStatus("questL11Desert") >= 0) {
        retval = true;
      }
      break;
    case $location`The Oasis`:
      if ($location`The Arid\, Extra-Dry Desert`.turnsSpent > 0) {
        retval = true;
      }
      break;
    case $location`The Upper Chamber`:
      if (internalQuestStatus("questL11Pyramid") >= 0) {
        retval = true;
      }
      break;
    case $location`The Middle Chamber`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("middleChamberUnlock"));
      break;
    case $location`The Lower Chambers`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("lowerChamberUnlock"));
      break;
    case $location`The Daily Dungeon`:
      retval = !(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("dailyDungeonDone"));
      break;
    case $location`The Overgrown Lot`:
      if (internalQuestStatus("questM24Doc") >= 0) {
        retval = true;
      }
      break;
    case $location`The Skeleton Store`:
      if (internalQuestStatus("questM23Meatsmith") >= 0) {
        retval = true;
      }
      break;
    case $location`Madness Bakery`:
      if (internalQuestStatus("questM25Armorer") >= 0) {
        retval = true;
      }
      break;
    case $location`The Deep Machine Tunnels`:
      if ((0, import_kolmafia103.haveFamiliar)($familiar`Machine Elf`) || (0, import_kolmafia103.haveEffect)($effect`Inside The Snowglobe`) > 0) {
        retval = true;
      }
      break;
    case $location`The Haunted Pantry`:
    case $location`The Haunted Kitchen`:
    case $location`The Haunted Conservatory`:
      if (internalQuestStatus("questM20Necklace") >= 0) {
        retval = true;
      }
      break;
    case $location`The Haunted Gallery`:
    case $location`The Haunted Bathroom`:
    case $location`The Haunted Bedroom`:
      if (internalQuestStatus("questM21Dance") >= 1) {
        retval = true;
      }
      break;
    case $location`The Haunted Billiards Room`:
      if ((0, import_kolmafia103.itemAmount)($item`Spookyraven billiards room key`) > 0) {
        retval = true;
      }
      break;
    case $location`The Haunted Library`:
      if ((0, import_kolmafia103.itemAmount)($item`[7302]Spookyraven library key`) > 0) {
        retval = true;
      }
      break;
    case $location`The Haunted Ballroom`:
      if (internalQuestStatus("questM21Dance") >= 3) {
        retval = true;
      }
      break;
    case $location`The Haunted Boiler Room`:
    case $location`The Haunted Laundry Room`:
    case $location`The Haunted Wine Cellar`:
      if (internalQuestStatus("questL11Manor") >= 1) {
        retval = true;
      }
      break;
    case $location`Summoning Chamber`:
      if (internalQuestStatus("questL11Manor") >= 11) {
        retval = true;
      }
      break;
    case $location`The Hidden Park`:
    case $location`An Overgrown Shrine (Northwest)`:
    case $location`An Overgrown Shrine (Southwest)`:
    case $location`An Overgrown Shrine (Northeast)`:
    case $location`An Overgrown Shrine (Southeast)`:
    case $location`A Massive Ziggurat`:
      if (internalQuestStatus("questL11Worship") >= 3) {
        retval = true;
      }
      break;
    case $location`The Hidden Apartment Building`:
      if (internalQuestStatus("questL11Curses") >= 0) {
        retval = true;
      }
      break;
    case $location`The Hidden Hospital`:
      if (internalQuestStatus("questL11Doctor") >= 0) {
        retval = true;
      }
      break;
    case $location`The Hidden Office Building`:
      if (internalQuestStatus("questL11Business") >= 0) {
        retval = true;
      }
      break;
    case $location`The Hidden Bowling Alley`:
      if (internalQuestStatus("questL11Spare") >= 0) {
        retval = true;
      }
      break;
    case $location`The Typical Tavern Cellar`:
      if (internalQuestStatus("questL03Rat") >= 0) {
        retval = true;
      }
      break;
    case $location`The Spooky Forest`:
      if (internalQuestStatus("questL02Larva") >= 0 || internalQuestStatus("questG02Whitecastle") >= 0) {
        retval = true;
      }
      break;
    case $location`The Hidden Temple`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastTempleUnlock")) === (0, import_kolmafia103.myAscensions)()) {
        retval = true;
      }
      break;
    case $location`Vanya's Castle`:
    case $location`The Fungus Plains`:
    case $location`Megalo-City`:
    case $location`Hero's Field`:
      if (possessEquipment($item`continuum transfunctioner`) && (internalQuestStatus("questL02Larva") >= 0 || internalQuestStatus("questG02Whitecastle") >= 0)) {
        retval = true;
      }
      break;
    case $location`The Black Forest`:
      if (internalQuestStatus("questL11MacGuffin") >= 0) {
        retval = true;
      }
      break;
    case $location`The Bat Hole Entrance`:
      if (internalQuestStatus("questL04Bat") >= 0) {
        retval = true;
      }
      break;
    case $location`Guano Junction`:
      if (elemental_resist($element`stench`) >= 1 && internalQuestStatus("questL04Bat") >= 0) {
        retval = true;
      }
      break;
    case $location`The Batrat and Ratbat Burrow`:
      if (internalQuestStatus("questL04Bat") >= 1) {
        retval = true;
      }
      break;
    case $location`The Beanbat Chamber`:
      if (internalQuestStatus("questL04Bat") >= 2) {
        retval = true;
      }
      break;
    case $location`The Boss Bat's Lair`:
      if (internalQuestStatus("questL04Bat") === 3) {
        retval = true;
      }
      break;
    case $location`The VERY Unquiet Garves`:
      if ((0, import_kolmafia103.getProperty)("questL07Cyrptic") === "finished") {
        retval = true;
      }
      break;
    case $location`Whitey's Grove`:
      if (internalQuestStatus("questG02Whitecastle") >= 0 || internalQuestStatus("questL11Palindome") >= 3) {
        retval = true;
      }
      break;
    case $location`Inside the Palindome`:
      if (possessEquipment($item`Talisman o' Namsilat`)) {
        retval = true;
      }
      break;
    case $location`Noob Cave`:
    case $location`The Outskirts of Cobb's Knob`:
      retval = true;
      break;
    case $location`Cobb's Knob Barracks`:
    case $location`Cobb's Knob Kitchens`:
    case $location`Cobb's Knob Harem`:
    case $location`Cobb's Knob Treasury`:
    case $location`Throne Room`:
      if (internalQuestStatus("questL05Goblin") >= 1) {
        retval = true;
      }
      break;
    case $location`The Dark Neck of the Woods`:
    case $location`The Dark Heart of the Woods`:
    case $location`The Dark Elbow of the Woods`:
      if (internalQuestStatus("questL06Friar") >= 0 && (0, import_kolmafia103.getProperty)("questL06Friar") !== "finished") {
        retval = true;
      }
      break;
    case $location`The Defiled Nook`:
    case $location`The Defiled Cranny`:
    case $location`The Defiled Alcove`:
    case $location`The Defiled Niche`:
      if (internalQuestStatus("questL07Cyrptic") >= 0) {
        retval = true;
      }
      break;
    case $location`Pandamonium Slums`:
    case $location`The Laugh Floor`:
    case $location`Infernal Rackets Backstage`:
      if (internalQuestStatus("questL06Friar") >= 10) {
        retval = true;
      }
      break;
    case $location`The Obligatory Pirate's Cove`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)()) {
        if ((0, import_kolmafia103.getProperty)("questL12War") === "unstarted" || (0, import_kolmafia103.getProperty)("questL12War") === "finished") {
          retval = true;
        }
      }
      break;
    case $location`Barrrney's Barrr`:
      if (((0, import_kolmafia103.haveOutfit)("swashbuckling getup") || possessEquipment($item`pirate fledges`)) && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)()) {
        if ((0, import_kolmafia103.getProperty)("questL12War") === "unstarted" || (0, import_kolmafia103.getProperty)("questL12War") === "finished") {
          retval = true;
        }
      }
      break;
    case $location`The F'c'le`:
      if (((0, import_kolmafia103.haveOutfit)("swashbuckling getup") || possessEquipment($item`pirate fledges`)) && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)() && internalQuestStatus("questM12Pirate") >= 5) {
        if ((0, import_kolmafia103.getProperty)("questL12War") === "unstarted" || (0, import_kolmafia103.getProperty)("questL12War") === "finished") {
          retval = true;
        }
      }
      break;
    case $location`The Poop Deck`:
      if (((0, import_kolmafia103.haveOutfit)("swashbuckling getup") || possessEquipment($item`pirate fledges`)) && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)() && internalQuestStatus("questM12Pirate") >= 6) {
        if ((0, import_kolmafia103.getProperty)("questL12War") === "unstarted" || (0, import_kolmafia103.getProperty)("questL12War") === "finished") {
          retval = true;
        }
      }
      break;
    case $location`Belowdecks`:
      if (((0, import_kolmafia103.haveOutfit)("swashbuckling getup") || possessEquipment($item`pirate fledges`)) && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)() && (0, import_kolmafia103.getProperty)("questM12Pirate") === "finished") {
        if ((0, import_kolmafia103.getProperty)("questL12War") === "unstarted" || (0, import_kolmafia103.getProperty)("questL12War") === "finished") {
          retval = true;
        }
      }
      break;
    case $location`The Smut Orc Logging Camp`:
      if (internalQuestStatus("questL09Topping") >= 0) {
        retval = true;
      }
      break;
    case $location`A-Boo Peak`:
    case $location`Twin Peak`:
    case $location`Oil Peak`:
      if (internalQuestStatus("questL09Topping") >= 1) {
        retval = true;
      }
      break;
    case $location`The Orcish Frat House`:
    case $location`The Hippy Camp`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)()) {
        retval = true;
      }
      break;
    case $location`The Orcish Frat House (In Disguise)`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)() && (0, import_kolmafia103.haveOutfit)("Frat Boy Ensemble") && internalQuestStatus("questL12War") !== 0 && internalQuestStatus(
        //mafia always calls location Wartime with L12 quest
        "questL12War"
      ) !== 1) {
        retval = true;
      }
      break;
    case $location`The Hippy Camp (In Disguise)`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastIslandUnlock")) === (0, import_kolmafia103.myAscensions)() && (0, import_kolmafia103.haveOutfit)("Filthy Hippy Disguise") && internalQuestStatus("questL12War") !== 0 && internalQuestStatus(
        //mafia always calls location Wartime with L12 quest
        "questL12War"
      ) !== 1) {
        retval = true;
      }
      break;
    case $location`Wartime Hippy Camp (Frat Disguise)`:
      if (internalQuestStatus("questL12War") === 0 && ((0, import_kolmafia103.haveOutfit)("frat warrior fatigues") || (0, import_kolmafia103.haveOutfit)("frat boy ensemble"))) {
        retval = true;
      }
      break;
    case $location`The Battlefield (Frat Uniform)`:
      if (internalQuestStatus("questL12War") >= 1 && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("hippiesDefeated")) < 1e3 && (0, import_kolmafia103.haveOutfit)("frat warrior fatigues") && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`Wartime Frat House (Hippy Disguise)`:
      if (internalQuestStatus("questL12War") === 0 && ((0, import_kolmafia103.haveOutfit)("war hippy fatigues") || (0, import_kolmafia103.haveOutfit)("filthy hippy disguise"))) {
        retval = true;
      }
      break;
    case $location`The Battlefield (Hippy Uniform)`:
      if (internalQuestStatus("questL12War") >= 1 && (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("fratboysDefeated")) < 1e3 && (0, import_kolmafia103.haveOutfit)("war hippy fatigues") && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`Next to that Barrel with Something Burning in it`:
    case $location`Near an Abandoned Refrigerator`:
    case $location`Over Where the Old Tires Are`:
    case $location`Out by that Rusted-Out Car`:
      if (internalQuestStatus("questL12War") >= 1 && ((0, import_kolmafia103.getProperty)("sidequestJunkyardCompleted") === "none" || (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("flyeredML")) < 1e4) && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`Sonofa Beach`:
      if (internalQuestStatus("questL12War") >= 1) {
        retval = true;
      }
      break;
    case $location`The Themthar Hills`:
      if (internalQuestStatus("questL12War") >= 1 && (0, import_kolmafia103.getProperty)("sidequestNunsCompleted") === "none" && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`The Hatching Chamber`:
      if (internalQuestStatus("questL12War") >= 1 && (0, import_kolmafia103.getProperty)("sidequestOrchardCompleted") === "none" && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`The Feeding Chamber`:
      if (internalQuestStatus("questL12War") >= 1 && (0, import_kolmafia103.getProperty)("sidequestOrchardCompleted") === "none" && (0, import_kolmafia103.haveEffect)($effect`Filthworm Larva Stench`) > 0 && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`The Royal Guard Chamber`:
      if (internalQuestStatus("questL12War") >= 1 && (0, import_kolmafia103.getProperty)("sidequestOrchardCompleted") === "none" && (0, import_kolmafia103.haveEffect)($effect`Filthworm Drone Stench`) > 0 && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`The Filthworm Queen's Chamber`:
      if (internalQuestStatus("questL12War") >= 1 && (0, import_kolmafia103.getProperty)("sidequestOrchardCompleted") === "none" && (0, import_kolmafia103.itemAmount)($item`heart of the filthworm queen`) === 0 && (0, import_kolmafia103.haveEffect)($effect`Filthworm Guard Stench`) > 0 && (0, import_kolmafia103.getProperty)("questL12War") !== "finished") {
        retval = true;
      }
      break;
    case $location`Itznotyerzitz Mine`:
    case $location`The Goatlet`:
      if (internalQuestStatus("questL08Trapper") >= 1) {
        retval = true;
      }
      break;
    case $location`The eXtreme Slope`:
    case $location`Lair of the Ninja Snowmen`:
      if (internalQuestStatus("questL08Trapper") >= 2) {
        retval = true;
      }
      break;
    case $location`Mist-Shrouded Peak`:
      if (internalQuestStatus("questL08Trapper") >= 3) {
        retval = true;
      }
      break;
    case $location`The Icy Peak`:
      if (internalQuestStatus("questL08Trapper") >= 6) {
        retval = true;
      }
      break;
    case $location`The Penultimate Fantasy Airship`:
      if (internalQuestStatus("questL10Garbage") >= 1) {
        retval = true;
      }
      break;
    case $location`The Castle in the Clouds in the Sky (Basement)`:
      if ((0, import_kolmafia103.itemAmount)($item`S.O.C.K.`) > 0) {
        retval = true;
      }
      break;
    case $location`The Castle in the Clouds in the Sky (Ground Floor)`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastCastleGroundUnlock")) === (0, import_kolmafia103.myAscensions)()) {
        retval = true;
      }
      break;
    case $location`The Castle in the Clouds in the Sky (Top Floor)`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastCastleTopUnlock")) === (0, import_kolmafia103.myAscensions)()) {
        retval = true;
      }
      break;
    case $location`The Hole in the Sky`:
      if ((0, import_kolmafia103.itemAmount)($item`steam-powered model rocketship`) > 0 || in_koe()) {
        retval = true;
      }
      break;
    case $location`The Tunnel of L.O.V.E.`:
      if ((0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("loveTunnelAvailable")) && !(0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_loveTunnelUsed"))) {
        retval = true;
      }
      break;
    case $location`Fastest Adventurer Contest`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("nsContestants1")) > 0) {
        retval = true;
      }
      break;
    case $location`The Enormous Greater-Than Sign`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastPlusSignUnlock")) < (0, import_kolmafia103.myAscensions)()) {
        retval = true;
      }
      break;
    case $location`The Dungeons of Doom`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("lastPlusSignUnlock")) === (0, import_kolmafia103.myAscensions)()) {
        retval = true;
      }
      break;
    case $location`The Limerick Dungeon`:
    case $location`The Sleazy Back Alley`:
    case $location`The Haiku Dungeon`:
      retval = true;
      break;
    case $location`Smartest Adventurer Contest`:
    case $location`Strongest Adventurer Contest`:
    case $location`Smoothest Adventurer Contest`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("nsContestants2")) > 0) {
        retval = true;
      }
      break;
    case $location`Coldest Adventurer Contest`:
    case $location`Hottest Adventurer Contest`:
    case $location`Sleaziest Adventurer Contest`:
    case $location`Spookiest Adventurer Contest`:
    case $location`Stinkiest Adventurer Contest`:
      if ((0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("nsContestants3")) > 0) {
        retval = true;
      }
      break;
    case $location`Tower Level 1`:
      if ((0, import_kolmafia103.getProperty)("questL13Final") === "step6") {
        retval = true;
      }
      break;
    case $location`Tower Level 2`:
      if ((0, import_kolmafia103.getProperty)("questL13Final") === "step7") {
        retval = true;
      }
      break;
    case $location`Tower Level 3`:
      if ((0, import_kolmafia103.getProperty)("questL13Final") === "step8") {
        retval = true;
      }
      break;
    case $location`Tower Level 4`:
      if ((0, import_kolmafia103.getProperty)("questL13Final") === "step9") {
        retval = true;
      }
      break;
    case $location`Tower Level 5`:
      if ((0, import_kolmafia103.getProperty)("questL13Final") === "step10") {
        retval = true;
      }
      break;
    case $location`The Naughty Sorceress' Chamber`:
      if ((0, import_kolmafia103.getProperty)("questL13Final") === "step11") {
        retval = true;
      }
      break;
    case $location`Barf Mountain`:
    case $location`Pirates of the Garbage Barges`:
    case $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`:
    case $location`The Toxic Teacups`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("stenchAirportAlways")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_stenchAirportToday"));
      break;
    case $location`The Fun-Guy Mansion`:
    case $location`The Sunken Party Yacht`:
    case $location`Sloppy Seconds Diner`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("sleazeAirportAlways")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_sleazeAirportToday"));
      break;
    case $location`The Secret Government Laboratory`:
    case $location`The Deep Dark Jungle`:
    case $location`The Mansion of Dr. Weirdeaux`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("spookyAirportAlways")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_spookyAirportToday"));
      break;
    case $location`The Ice Hotel`:
    case $location`VYKEA`:
    case $location`The Ice Hole`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("coldAirportAlways")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_coldAirportToday"));
      break;
    case $location`The SMOOCH Army HQ`:
    case $location`LavaCo™ Lamp Factory`:
    case import_kolmafia103.Location.get("The Velvet / Gold Mine"):
    case $location`The Bubblin' Caldera`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("hotAirportAlways")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_hotAirportToday"));
      break;
    case $location`The X-32-F Combat Training Snowman`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("snojoAvailable"));
      break;
    case $location`Through the Spacegate`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("spacegateAlways")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_spacegateToday"));
      break;
    case $location`The Old Landfill`:
      if (internalQuestStatus("questM19Hippy") >= 0) {
        retval = true;
      }
      break;
    case $location`Cobb's Knob Laboratory`:
    case $location`The Knob Shaft`:
      if ((0, import_kolmafia103.itemAmount)($item`Cobb's Knob lab key`) > 0) {
        retval = true;
      }
      break;
    case $location`Cobb's Knob Menagerie\, Level 1`:
    case $location`Cobb's Knob Menagerie\, Level 2`:
    case $location`Cobb's Knob Menagerie\, Level 3`:
      if ((0, import_kolmafia103.itemAmount)($item`Cobb's Knob Menagerie key`) > 0) {
        retval = true;
      }
      break;
    case $location`The Red Queen's Garden`:
      if ((0, import_kolmafia103.haveEffect)($effect`Down the Rabbit Hole`) > 0) {
        retval = true;
      }
      break;
    case $location`The Bugbear Pen`:
      if (internalQuestStatus("questM03Bugbear") >= 0) {
        retval = true;
      }
      break;
    case $location`The Spooky Gravy Burrow`:
      if (internalQuestStatus("questM03Bugbear") >= 99) {
        retval = true;
      }
      break;
    case $location`Investigating a Plaintive Telegram`:
      if ((0, import_kolmafia103.itemAmount)($item`plaintive telegram`) > 0 && internalQuestStatus("questLTTQuestByWire") >= 0) {
        retval = true;
      }
      break;
    case $location`Drunken Stupor`:
      if (inebriety_left() < 0) {
        retval = true;
      }
      break;
    case $location`Thugnderdome`:
      if (isDesertAvailable()) {
        retval = (0, import_kolmafia103.gnomadsAvailable)();
      }
      break;
    case $location`Camp Logging Camp`:
      if (!in_koe() && (0, import_kolmafia103.canadiaAvailable)()) {
        retval = true;
      }
      break;
    case $location`The Thinknerd Warehouse`:
      if (internalQuestStatus("questM22Shirt") >= 0) {
        retval = true;
      }
      break;
    case $location`Gingerbread Upscale Retail District`:
      if ((0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("gingerRetailUnlocked"))) {
        retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("gingerbreadCityAvailable")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_gingerbreadCityToday"));
      }
      break;
    case $location`Gingerbread Sewers`:
      if ((0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("gingerSewersUnlocked"))) {
        retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("gingerbreadCityAvailable")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_gingerbreadCityToday"));
      }
      break;
    case $location`Gingerbread Civic Center`:
    case $location`Gingerbread Industrial Zone`:
    case $location`Gingerbread Train Station`:
      retval = (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("gingerbreadCityAvailable")) || (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("_gingerbreadCityToday"));
      break;
    case $location`The Bandit Crossroads`:
      retval = (0, import_kolmafia103.containsText)((0, import_kolmafia103.getProperty)("_frAreasUnlocked"), loc.toString());
      break;
    case $location`The Towering Mountains`:
      retval = (0, import_kolmafia103.containsText)((0, import_kolmafia103.getProperty)("_frAreasUnlocked"), loc.toString());
      break;
    case $location`The Mystic Wood`:
      retval = (0, import_kolmafia103.containsText)((0, import_kolmafia103.getProperty)("_frAreasUnlocked"), loc.toString());
      break;
    case $location`The Putrid Swamp`:
      retval = (0, import_kolmafia103.containsText)((0, import_kolmafia103.getProperty)("_frAreasUnlocked"), loc.toString());
      break;
    case $location`The Cursed Village`:
      retval = (0, import_kolmafia103.containsText)((0, import_kolmafia103.getProperty)("_frAreasUnlocked"), loc.toString());
      break;
    case $location`The Sprawling Cemetery`:
      retval = (0, import_kolmafia103.containsText)((0, import_kolmafia103.getProperty)("_frAreasUnlocked"), loc.toString());
      break;
    case $location`Monorail Work Site`:
      retval = false;
      break;
    case $location`Your Mushroom Garden`:
      retval = auto_canFightPiranhaPlant() || auto_canTendMushroomGarden();
      break;
  }
  var canAdvRetval = (0, import_kolmafia103.canAdventure)(loc);
  if (canAdvRetval !== retval) {
    auto_log_debug$1(
      `Uh oh, autoscend and mafia's can_adventure() dont agree on whether we can adventure at ${loc} (autoscend: ${retval}, can_adventure(): ${canAdvRetval}). Will assume location available if either is true.`
    );
    retval = retval || canAdvRetval;
  }
  return retval;
}
function zone_hasLuckyAdventure(loc) {
  if ($locations`Vanya's Castle, The Fungus Plains, Megalo-City, Hero's Field, A Maze of Sewer Tunnels, A Mob of Zeppelin Protesters, A-Boo Peak, An Octopus's Garden, Art Class, Cola Wars Battlefield (Cloaca Uniform), Cola Wars Battlefield (Dyspepsi Uniform), The Cola Wars Battlefield, Burnbarrel Blvd., Camp Logging Camp, Chemistry Class, Cobb's Knob Barracks, Cobb's Knob Harem, Cobb's Knob Kitchens, Cobb's Knob Laboratory, Cobb's Knob Menagerie\, Level 2, Cobb's Knob Treasury, Elf Alley, Exposure Esplanade, The Orcish Frat House, The Orcish Frat House (In Disguise), Guano Junction, The Hippy Camp, The Hippy Camp (In Disguise), Itznotyerzitz Mine, Lair of the Ninja Snowmen, Lemon Party, Madness Reef, Oil Peak, Outskirts of Camp Logging Camp, Pandamonium Slums, Shop Class, South of the Border, The "Fun" House, The Ancient Hobo Burial Ground, The Batrat and Ratbat Burrow, The Black Forest, The Brinier Deepers, The Briny Deeps, The Bugbear Pen, The Castle in the Clouds in the Sky (Basement), The Castle in the Clouds in the Sky (Ground Floor), The Castle in the Clouds in the Sky (Top Floor), The Copperhead Club, The Dark Elbow of the Woods, The Dark Heart of the Woods, The Dark Neck of the Woods, The Dive Bar, The Goatlet, The Hallowed Halls, The Haunted Ballroom, The Haunted Billiards Room, The Haunted Boiler Room, The Haunted Conservatory, The Haunted Gallery, The Haunted Kitchen, The Haunted Library, The Haunted Pantry, The Haunted Storage Room, The Heap, The Hidden Park, The Hidden Temple, The Icy Peak, The Knob Shaft, The Limerick Dungeon, The Mer-Kin Outpost, The Oasis, The Obligatory Pirate's Cove, The Outskirts of Cobb's Knob, The Poker Room, The Primordial Soup, The Purple Light District, The Red Zeppelin, The Roulette Tables, The Sleazy Back Alley, The Smut Orc Logging Camp, The Spectral Pickle Factory, The Spooky Forest, The Spooky Gravy Burrow, The Unquiet Garves, The VERY Unquiet Garves, The Valley of Rof L'm Fao, The Wreck of the Edgar Fitzsimmons, Thugnderdome, Tower Ruins, Twin Peak, Vanya's Castle Chapel, Whitey's Grove, Ye Olde Medievale Villagee`.includes(
    loc
  )) {
    return true;
  }
  return false;
}
function auto_swoopLocations() {
  return /* @__PURE__ */ new Map(
    [
      [$location`The Hatching Chamber`, true],
      [$location`The Feeding Chamber`, true],
      [$location`The Royal Guard Chamber`, true],
      [$location`The Hidden Temple`, true],
      [$location`The Goatlet`, true]
    ]
  );
}

// src/autoscend/auto_routing.ts
function solveDelayZone(skipOutdoorZones) {
  var delayableZones = zone_delayable();
  var burnZone = import_kolmafia104.Location.none;
  if (delayableZones.size > 0) {
    var _iterator = _createForOfIteratorHelper(delayableZones), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _step$value = _slicedToArray(_step.value, 2), loc = _step$value[0], delay = _step$value[1];
        if (skipOutdoorZones && loc.environment === "outdoor") {
          continue;
        }
        if (burnZone === import_kolmafia104.Location.none || delay < (delayableZones.get(burnZone) ?? delayableZones.set(burnZone, 0).get(burnZone))) {
          burnZone = loc;
        }
        if (loc === $location`The Spooky Forest` && delay === (delayableZones.get(burnZone) ?? delayableZones.set(burnZone, 0).get(burnZone))) {
          burnZone = loc;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (burnZone === $location`Megalo-City`) {
    prepForMegaloCity();
  }
  if (burnZone !== import_kolmafia104.Location.none) {
    return burnZone;
  }
  if (!skipOutdoorZones && zone_isAvailable$1($location`The Arid\, Extra-Dry Desert`) && $location`The Arid\, Extra-Dry Desert`.turnsSpent >= 1 && $location`The Arid\, Extra-Dry Desert`.turnsSpent < 10) {
    burnZone = $location`The Arid\, Extra-Dry Desert`;
  }
  if (in_koe() && $location`The Exploaded Battlefield`.turnsSpent < 5) {
    burnZone = $location`The Exploaded Battlefield`;
  }
  if (in_lowkeysummer()) {
    burnZone = lowkey_nextAvailableKeyDelayLocation();
  }
  return burnZone;
}
function solveDelayZone$1() {
  return solveDelayZone(false);
}

// src/autoscend/quests/level_08.ts
function L8_forceExtremeInstead() {
  if ((0, import_kolmafia105.availableAmount)($item`ninja crampons`) > 0) {
    return false;
  }
  if (auto_canEquipAllMcHugeLarge()) {
    (0, import_kolmafia105.setProperty)("auto_L8_extremeInstead", true.toString());
  }
  return (0, import_kolmafia105.toBoolean)((0, import_kolmafia105.getProperty)("auto_L8_extremeInstead"));
}

// src/autoscend/paths/casual.ts
function inAftercore() {
  return (0, import_kolmafia106.toBoolean)((0, import_kolmafia106.getProperty)("kingLiberated"));
}

// src/autoscend/iotms/clan.ts
function hotTubSoaksRemaining() {
  if ((0, import_kolmafia107.toInt)((0, import_kolmafia107.getProperty)("hiddenApartmentProgress")) < 7) {
    var haveCurse = false;
    var _iterator2 = _createForOfIteratorHelper(
      $effects`Once-Cursed, Thrice-Cursed, Twice-Cursed`
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var eff = _step2.value;
        if ((0, import_kolmafia107.haveEffect)(eff) > 0) {
          haveCurse = true;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (haveCurse) {
      return 0;
    }
  }
  return 5 - (0, import_kolmafia107.toInt)((0, import_kolmafia107.getProperty)("_hotTubSoaks"));
}
function isHotTubAvailable() {
  return (0, import_kolmafia107.itemAmount)($item`Clan VIP Lounge key`) > 0 && (0, import_kolmafia107.isUnrestricted)($item`Clan VIP Lounge key`);
}
function doHottub() {
  if (!(isHotTubAvailable() && hotTubSoaksRemaining() > 0)) {
    return 0;
  }
  (0, import_kolmafia107.cliExecute)("hottub");
  return hotTubSoaksRemaining();
}
function isSpeakeasyDrink(drink_1) {
  return $items`glass of "milk", cup of "tea", thermos of "whiskey", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy`.includes(
    drink_1
  );
}

// src/autoscend/auto_restore.ts
var __RestorationMetadata = /* @__PURE__ */ _createClass(
  function __RestorationMetadata2() {
    var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var hpRestored = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var restoresVariableHp = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    var mpRestored = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    var restoresVariableMp = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "";
    var softReserveLimit = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
    var hardReserveLimit = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 0;
    var removesBeatenUp = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : false;
    var removesEffects = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : /* @__PURE__ */ new Map();
    var givesEffects = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : /* @__PURE__ */ new Map();
    var maximaValues = arguments.length > 11 && arguments[11] !== void 0 ? arguments[11] : /* @__PURE__ */ new Map();
    _classCallCheck(this, __RestorationMetadata2);
    this.name = name;
    this.type = type;
    this.hpRestored = hpRestored;
    this.restoresVariableHp = restoresVariableHp;
    this.mpRestored = mpRestored;
    this.restoresVariableMp = restoresVariableMp;
    this.softReserveLimit = softReserveLimit;
    this.hardReserveLimit = hardReserveLimit;
    this.removesBeatenUp = removesBeatenUp;
    this.removesEffects = removesEffects;
    this.givesEffects = givesEffects;
    this.maximaValues = maximaValues;
  }
);
var __RestorationOptimization = /* @__PURE__ */ _createClass(
  function __RestorationOptimization2() {
    var metadata = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new __RestorationMetadata();
    var vars = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Map();
    var objectiveValues = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Map();
    var constraints = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : /* @__PURE__ */ new Map();
    _classCallCheck(this, __RestorationOptimization2);
    this.metadata = metadata;
    this.vars = vars;
    this.objectiveValues = objectiveValues;
    this.constraints = constraints;
  }
);
function to_string$1(o, simple) {
  function list_to_string$2(values) {
    var s = "{";
    var first = true;
    var _iterator2 = _createForOfIteratorHelper(
      values
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2), k = _step2$value[0], v = _step2$value[1];
        if (first) {
          first = false;
        } else {
          s += ", ";
        }
        s += `${k}: ${v}`;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    s += "}";
    return s;
  }
  function list_to_string$3(values) {
    var s = "{";
    var first = true;
    var _iterator3 = _createForOfIteratorHelper(
      values
    ), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray(_step3.value, 2), k = _step3$value[0], v = _step3$value[1];
        if (first) {
          first = false;
        } else {
          s += ", ";
        }
        s += `${k}: ${v}`;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    s += "}";
    return s;
  }
  if (simple) {
    return `(${o.metadata.name}, hp: ${o.objectiveValues.get("hp_total_restored") ?? o.objectiveValues.set("hp_total_restored", 0).get("hp_total_restored")}, mp: ${o.objectiveValues.get("mp_total_restored") ?? o.objectiveValues.set("mp_total_restored", 0).get("mp_total_restored")}, negative effects remaining: ${o.objectiveValues.get("negative_status_effects_remaining") ?? o.objectiveValues.set("negative_status_effects_remaining", 0).get("negative_status_effects_remaining")})`;
  }
  var vars_str = list_to_string$2(o.vars);
  var constraints_str = list_to_string$3(o.constraints);
  var objective_values_str = list_to_string$2(o.objectiveValues);
  return `__RestorationOptimization(name: ${o.metadata.name}, vars: ${vars_str}, constraints: ${constraints_str}, objective_values: ${objective_values_str})`;
}
function to_string$2(optima, simple) {
  var val = "";
  var first = true;
  var _iterator4 = _createForOfIteratorHelper(
    optima
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _step4$value = _slicedToArray(_step4.value, 2), i = _step4$value[0], o = _step4$value[1];
      if (first) {
        first = false;
      } else {
        val += "; ";
      }
      val += `${i} - ${to_string$1(o, simple)}`;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return val;
}
function auto_log_restore_debug(s, level) {
  if ((0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("auto_log_level")) < 3) {
    return;
  }
  if ((0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("auto_log_level_restore")) >= level) {
    auto_log_debug$1(s);
  }
}
var $_f___all_negative_effects;
$_f___all_negative_effects ?? ($_f___all_negative_effects = /* @__PURE__ */ new Map());
var $_f___known_restoration_sources;
$_f___known_restoration_sources ?? ($_f___known_restoration_sources = /* @__PURE__ */ new Map());
var $_f___restore_maximizer_cache;
$_f___restore_maximizer_cache ?? ($_f___restore_maximizer_cache = /* @__PURE__ */ new Map());
var $_f___RESTORE_ALL;
$_f___RESTORE_ALL ?? ($_f___RESTORE_ALL = "all");
var $_f___RESTORE_HALF;
$_f___RESTORE_HALF ?? ($_f___RESTORE_HALF = "half");
var $_f___RESTORE_SCALING;
$_f___RESTORE_SCALING ?? ($_f___RESTORE_SCALING = "scaling");
var $_f___HOT_TUB;
$_f___HOT_TUB ?? ($_f___HOT_TUB = "a relaxing hot tub");
var $_f___NUNS;
$_f___NUNS ?? ($_f___NUNS = "the nunnery");
var $___init_restoration_metadata_resotration_filename;
var $___init_restoration_metadata_negative_effects_filename;
function __init_restoration_metadata() {
  $___init_restoration_metadata_resotration_filename ?? ($___init_restoration_metadata_resotration_filename = "autoscend_restoration.txt");
  $___init_restoration_metadata_negative_effects_filename ?? ($___init_restoration_metadata_negative_effects_filename = "autoscend_negative_effects.txt");
  function parse_effects(name, effects_list) {
    effects_list = (0, import_kolmafia108.toLowerCase)(effects_list);
    var parsed_effects = /* @__PURE__ */ new Map();
    if (effects_list === "all negative") {
      parsed_effects = $_f___all_negative_effects;
    } else if (effects_list !== "none" && effects_list !== "") {
      var _iterator5 = _createForOfIteratorHelper(
        (0, import_kolmafia108.splitString)(effects_list, ",").entries()
      ), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var _step5$value = _slicedToArray(_step5.value, 2), _ = _step5$value[0], s = _step5$value[1];
          var e = (0, import_kolmafia108.toEffect)(s);
          if (e !== import_kolmafia108.Effect.none) {
            parsed_effects.set(e, true);
          } else {
            auto_log_warning$1(
              `Unknown effect found parsing restoration metadata: ${name} removes effect: ${s}`
            );
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    return parsed_effects;
  }
  function parse_restored_amount(restored_str) {
    restored_str = (0, import_kolmafia108.toLowerCase)(restored_str);
    if (restored_str === "all" || restored_str === "half" || restored_str === "scaling") {
      return 0;
    } else {
      return (0, import_kolmafia108.toFloat)(restored_str);
    }
  }
  function parse_restores_variable(restored_str) {
    restored_str = (0, import_kolmafia108.toLowerCase)(restored_str);
    if (restored_str === "all") {
      return $_f___RESTORE_ALL;
    } else if (restored_str === "half") {
      return $_f___RESTORE_HALF;
    } else if (restored_str === "scaling") {
      return $_f___RESTORE_SCALING;
    }
    return "";
  }
  function init() {
    $_f___all_negative_effects = fileAsMap(
      $___init_restoration_metadata_negative_effects_filename,
      [import_kolmafia108.toEffect, import_kolmafia108.toBoolean]
    );
    var parsed_records = /* @__PURE__ */ new Map();
    var raw_data = fileAsMap(
      $___init_restoration_metadata_resotration_filename,
      [
        String,
        String,
        String,
        String,
        String,
        String,
        String,
        String,
        String
      ]
    );
    for (var _i = 0, _arr = ["item", "skill", "clan", "dwelling", "place"]; _i < _arr.length; _i++) {
      var type_1 = _arr[_i];
      var _iterator6 = _createForOfIteratorHelper(
        raw_data.get(type_1) ?? raw_data.set(type_1, /* @__PURE__ */ new Map()).get(type_1)
      ), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _step6$value = _slicedToArray(_step6.value, 2), idx = _step6$value[0], _v0 = _step6$value[1];
          var _iterator7 = _createForOfIteratorHelper(
            _v0
          ), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              var _step7$value = _slicedToArray(_step7.value, 2), name = _step7$value[0], _v1 = _step7$value[1];
              var _iterator8 = _createForOfIteratorHelper(
                _v1
              ), _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                  var _step8$value = _slicedToArray(_step8.value, 2), hp_restored = _step8$value[0], _v2 = _step8$value[1];
                  var _iterator9 = _createForOfIteratorHelper(
                    _v2
                  ), _step9;
                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                      var _step9$value = _slicedToArray(_step9.value, 2), mp_restored = _step9$value[0], _v3 = _step9$value[1];
                      var _iterator0 = _createForOfIteratorHelper(
                        _v3
                      ), _step0;
                      try {
                        for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
                          var _step0$value = _slicedToArray(_step0.value, 2), soft_reserve_limit = _step0$value[0], _v4 = _step0$value[1];
                          var _iterator1 = _createForOfIteratorHelper(
                            _v4
                          ), _step1;
                          try {
                            for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                              var _step1$value = _slicedToArray(_step1.value, 2), hard_reserve_limit = _step1$value[0], _v5 = _step1$value[1];
                              var _iterator10 = _createForOfIteratorHelper(
                                _v5
                              ), _step10;
                              try {
                                for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                                  var _step10$value = _slicedToArray(_step10.value, 2), removes_effects = _step10$value[0], _v6 = _step10$value[1];
                                  var gives_effects = _v6;
                                  var parsed = new __RestorationMetadata();
                                  parsed.type = type_1;
                                  parsed.name = (0, import_kolmafia108.toLowerCase)(name);
                                  parsed.hpRestored = parse_restored_amount(hp_restored);
                                  parsed.restoresVariableHp = parse_restores_variable(hp_restored);
                                  parsed.mpRestored = parse_restored_amount(mp_restored);
                                  parsed.restoresVariableMp = parse_restores_variable(mp_restored);
                                  parsed.softReserveLimit = (0, import_kolmafia108.toInt)(soft_reserve_limit);
                                  parsed.hardReserveLimit = (0, import_kolmafia108.toInt)(hard_reserve_limit);
                                  parsed.removesEffects = parse_effects(
                                    parsed.name,
                                    removes_effects
                                  );
                                  parsed.removesBeatenUp = parsed.removesEffects.has(
                                    $effect`Beaten Up`
                                  );
                                  parsed.givesEffects = parse_effects(
                                    parsed.name,
                                    gives_effects
                                  );
                                  $_f___known_restoration_sources.set(parsed.name, parsed);
                                }
                              } catch (err) {
                                _iterator10.e(err);
                              } finally {
                                _iterator10.f();
                              }
                            }
                          } catch (err) {
                            _iterator1.e(err);
                          } finally {
                            _iterator1.f();
                          }
                        }
                      } catch (err) {
                        _iterator0.e(err);
                      } finally {
                        _iterator0.f();
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
    if ((0, import_kolmafia108.getProperty)("sidequestNunsCompleted") === "fratboy") {
      ($_f___known_restoration_sources.get("the nunnery") ?? $_f___known_restoration_sources.set("the nunnery", new __RestorationMetadata()).get("the nunnery")).mpRestored = 1e3;
    }
    if ((0, import_kolmafia108.myPath)() === $path`Disguises Delimit`) {
      for (var _i2 = 0, _arr2 = ["gauze garter", "filthy poultice"]; _i2 < _arr2.length; _i2++) {
        var specialname = _arr2[_i2];
        var parsedSpecial = $_f___known_restoration_sources.get(specialname) ?? $_f___known_restoration_sources.set(specialname, new __RestorationMetadata()).get(specialname);
        if (parsedSpecial.hardReserveLimit < 4) {
          continue;
        }
        parsedSpecial.hardReserveLimit += 4;
      }
    }
  }
  auto_log_info$1("Loading restoration data.");
  init();
  $_f___restore_maximizer_cache.clear();
}
function __restoration_methods() {
  if ($_f___known_restoration_sources.size === 0) {
    __init_restoration_metadata();
  }
  return $_f___known_restoration_sources;
}
var __PRIMARY_SORT_KEYS = /* @__PURE__ */ new Map(
  [
    ["hp_total_restored", true],
    ["mp_total_restored", true]
  ]
);
var __MAXIMIZE_KEYS = /* @__PURE__ */ new Map(
  [
    ["total_uses_available", true],
    ["hp_per_meat_spent", true],
    ["hp_per_coinmaster_token_spent", true],
    ["hp_per_mp_spent", true],
    ["mp_per_meat_spent", true],
    ["mp_per_coinmaster_token_spent", true]
  ]
);
var __MINIMIZE_KEYS = /* @__PURE__ */ new Map(
  [
    ["total_uses_needed", true],
    ["hp_total_wasted_goal", true],
    // candidate for removal
    ["hp_total_short_goal", true],
    ["mp_total_wasted_goal", true],
    // candidate for removal
    ["mp_total_short_goal", true],
    ["hp_total_wasted_max", true],
    ["hp_total_short_max", true],
    // candidate for removal
    ["mp_total_wasted_max", true],
    ["mp_total_short_max", true],
    // candidate for removal
    ["total_mp_used", true],
    ["total_meat_used", true],
    ["total_coinmaster_tokens_used", true],
    ["negative_status_effects_remaining", true],
    ["soft_reserve_limit_uses", true]
  ]
);
var __VARS_KEYS = /* @__PURE__ */ new Map(
  [
    ["hp_goal", true],
    ["hp_starting", true],
    ["hp_max", true],
    ["hp_restored_per_use", true],
    ["hp_uses_needed_for_goal", true],
    ["mp_goal", true],
    ["mp_starting", true],
    ["mp_max", true],
    ["mp_restored_per_use", true],
    ["mp_uses_needed_for_goal", true],
    ["blood_skill_opportunity_casts_goal", true],
    ["blood_skill_opportunity_casts_max", true],
    ["amount_creatable", true],
    ["amount_buyable", true],
    ["meat_per_use", true],
    ["tokens_per_use", true],
    ["total_creatable", true],
    ["total_buyable", true],
    ["reserve_limit_hard", true],
    ["total_uses_remaining", true],
    // candidate for removal
    ["soft_reserve_limit", true],
    ["hard_reserve_limit", true],
    ["hp_max_restorable", true],
    ["mp_max_restorable", true],
    ["meat_available_to_spend", true]
  ]
);
var __CONSTRAINT_KEYS = /* @__PURE__ */ new Map(
  [
    ["is_ever_useable", true],
    ["is_currently_useable", true],
    ["have_required_resources", true],
    ["restores_needed_resources", true],
    ["meets_hard_reserve_limit", true]
  ]
);
var __OBJECTIVE_RANKS = /* @__PURE__ */ new Map(
  [
    ["hp_total_restored", 1],
    ["mp_total_restored", 1],
    ["negative_status_effects_remaining", 1],
    ["soft_reserve_limit_uses", 2],
    ["total_coinmaster_tokens_used", 3],
    ["hp_per_coinmaster_token_spent", 3],
    ["mp_per_coinmaster_token_spent", 3],
    ["total_meat_used", 4],
    ["hp_per_meat_spent", 4],
    ["mp_per_meat_spent", 4],
    ["hp_per_mp_spent", 5],
    ["hp_total_short_goal", 6],
    ["mp_total_short_goal", 6],
    ["mp_total_wasted_max", 6],
    ["hp_total_wasted_max", 6],
    ["total_uses_needed", 7]
  ]
);
var __RANKED_GOAL_DESCRIPTIONS = /* @__PURE__ */ new Map(
  [
    [1, "remove negative status effects"],
    [2, "maintain soft reserve limit (keep at least N on hand if possible)"],
    [
      3,
      "try not to spend coinmaster tokens, maximizing hp/mp restored per token spent if we must spend"
    ],
    [
      4,
      "try not to spend meat, maximizing hp/mp restored per meat spent if we must spend"
    ],
    [
      5,
      "try to spend less mp, maximizing hp restored per mp spent if we must spend"
    ],
    [6, "minimize hp/mp shortage to goal and wasted hp/mp over max"],
    [7, "minimize number of uses needed to reach goal"]
  ]
);
function __calculate_objective_values(hp_goal, mp_goal, meat_reserve, useFreeRests, metadata) {
  var optimization_parameters = new __RestorationOptimization();
  function set_value(name, value) {
    if (__MAXIMIZE_KEYS.has(name) || __MINIMIZE_KEYS.has(name) || __PRIMARY_SORT_KEYS.has(name)) {
      optimization_parameters.objectiveValues.set(name, value);
    } else if (__VARS_KEYS.has(name)) {
      optimization_parameters.vars.set(name, value);
    } else {
      (0, import_kolmafia108.abort)(
        `void set_value(string name, float value) was asked to store the undefined key = ${name}`
      );
    }
  }
  function set_value$1(name, value) {
    if (__CONSTRAINT_KEYS.has(name)) {
      optimization_parameters.constraints.set(name, value);
    } else {
      (0, import_kolmafia108.abort)(
        `void set_value(string name, boolean value) was asked to store the undefined key = ${name}`
      );
    }
  }
  function get_value(name) {
    if (__MAXIMIZE_KEYS.has(name) || __MINIMIZE_KEYS.has(name) || __PRIMARY_SORT_KEYS.has(name)) {
      return optimization_parameters.objectiveValues.get(name) ?? optimization_parameters.objectiveValues.set(name, 0).get(name);
    } else if (__VARS_KEYS.has(name)) {
      return optimization_parameters.vars.get(name) ?? optimization_parameters.vars.set(name, 0).get(name);
    }
    (0, import_kolmafia108.abort)(
      `float get_value(string name) was asked to return the undefined key = ${name}`
    );
    return 0;
  }
  function get_value$1(resource_type, name) {
    return get_value(`${resource_type}_${name}`);
  }
  function hp_restored_per_use() {
    var restored_amount = metadata.hpRestored;
    if (metadata.restoresVariableHp === $_f___RESTORE_ALL) {
      restored_amount = (0, import_kolmafia108.myMaxhp)();
    } else if (metadata.restoresVariableHp === $_f___RESTORE_HALF) {
      restored_amount = (0, import_kolmafia108.floor)((0, import_kolmafia108.myMaxhp)() / 2);
    }
    if (metadata.type === "dwelling") {
      restored_amount += (0, import_kolmafia108.numericModifier)("Bonus Resting HP");
    }
    if (metadata.name === "disco nap" && auto_have_skill($skill`Adventurer of Leisure`)) {
      restored_amount = 40;
    }
    return restored_amount;
  }
  function mp_restored_per_use() {
    var restored_amount = metadata.mpRestored;
    if (metadata.restoresVariableMp === $_f___RESTORE_ALL) {
      restored_amount = (0, import_kolmafia108.myMaxmp)();
    } else if (metadata.restoresVariableMp === $_f___RESTORE_HALF) {
      restored_amount = (0, import_kolmafia108.floor)((0, import_kolmafia108.myMaxmp)() / 2);
    } else if (metadata.restoresVariableMp === $_f___RESTORE_SCALING) {
      if (metadata.name === "magical mystery juice") {
        restored_amount = (0, import_kolmafia108.myLevel)() * 1.5 + 5;
      } else if (metadata.name === "generic mana potion") {
        restored_amount = (0, import_kolmafia108.myLevel)() * 2.5;
      }
    }
    if (metadata.type === "dwelling") {
      restored_amount += (0, import_kolmafia108.numericModifier)("Bonus Resting MP");
    }
    if (metadata.name === "disco nap" && auto_haveAprilShowerShield() && (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("_aprilShowerDiscoNap")) < 5 && (0, import_kolmafia108.myMp)() > (0, import_kolmafia108.mpCost)($skill`Disco Nap`)) {
      restored_amount = 100 - 20 * (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("_aprilShowerDiscoNap"));
    }
    return restored_amount;
  }
  function uses_needed_to_reach_goal(resource_type) {
    var goal = get_value$1(resource_type, "goal");
    var starting = get_value$1(resource_type, "starting");
    var per_use = get_value$1(resource_type, "restored_per_use");
    if (per_use < 1) {
      return 0;
    }
    return (0, import_kolmafia108.max)((0, import_kolmafia108.ceil)((goal - starting) / per_use), 1);
  }
  function total_uses_needed() {
    return (0, import_kolmafia108.max)(
      get_value$1("hp", "uses_needed_for_goal"),
      get_value$1("mp", "uses_needed_for_goal")
    );
  }
  function meat_per_use() {
    if (metadata.type === "item") {
      var i = (0, import_kolmafia108.toItem)(metadata.name);
      if ((0, import_kolmafia108.canInteract)() || (0, import_kolmafia108.myMeat)() > 2e4) {
        var price = 999999;
        if ((0, import_kolmafia108.isTradeable)(i)) {
          price = (0, import_kolmafia108.min)(price, auto_mall_price(i));
        }
        if ((0, import_kolmafia108.npcPrice)(i) > 0) {
          price = (0, import_kolmafia108.min)(price, (0, import_kolmafia108.npcPrice)(i));
        }
        return price;
      } else {
        return (0, import_kolmafia108.npcPrice)(i);
      }
    } else if (metadata.type === "skill") {
      var meat_per_mp = 9;
      if ((0, import_kolmafia108.dispensaryAvailable)() || (0, import_kolmafia108.blackMarketAvailable)()) {
        meat_per_mp = 8;
      }
      if ((0, import_kolmafia108.getProperty)("questM24Doc") === "finished") {
        meat_per_mp = 6;
      }
      if (auto_have_skill($skill`Five Finger Discount`)) {
        meat_per_mp = meat_per_mp * 0.95;
      }
      if (isMystGuildStoreAvailable()) {
        var mmj_cost = auto_have_skill($skill`Five Finger Discount`) ? 95 : 100;
        var mmj_mp_restored = (0, import_kolmafia108.toInt)((0, import_kolmafia108.myLevel)() * 1.5 + 5);
        var mmj_meat_per_mp = mmj_cost / mmj_mp_restored;
        meat_per_mp = (0, import_kolmafia108.min)(meat_per_mp, mmj_meat_per_mp);
      }
      if ((0, import_kolmafia108.myClass)() === $class`Sauceror` || (0, import_kolmafia108.canInteract)()) {
        meat_per_mp = 0;
      }
      var s = (0, import_kolmafia108.toSkill)(metadata.name);
      return (0, import_kolmafia108.mpCost)(s) * meat_per_mp;
    } else {
      return 0;
    }
  }
  function tokens_per_use() {
    if (metadata.type !== "item") {
      return 0;
    }
    var i = (0, import_kolmafia108.toItem)(metadata.name);
    if (i.seller !== import_kolmafia108.Coinmaster.none) {
      return (0, import_kolmafia108.sellPrice)(i.seller, i);
    }
    return 0;
  }
  function total_creatable() {
    if (metadata.type !== "item") {
      return 0;
    }
    return (0, import_kolmafia108.creatableAmount)((0, import_kolmafia108.toItem)(metadata.name));
  }
  function total_buyable() {
    if (metadata.type !== "item") {
      return 0;
    }
    var price_per = 0;
    var currency_available = 0;
    var it = (0, import_kolmafia108.toItem)(metadata.name);
    var mall_buyable = (0, import_kolmafia108.canInteract)() && (0, import_kolmafia108.isTradeable)(it);
    if (mall_buyable || (0, import_kolmafia108.npcPrice)(it) > 0) {
      price_per = get_value("meat_per_use");
      currency_available = (0, import_kolmafia108.max)(0, (0, import_kolmafia108.myMeat)() - meat_reserve);
    } else if (get_value("tokens_per_use") > 0) {
      price_per = get_value("tokens_per_use");
      currency_available = it.seller.availableTokens;
    }
    if (currency_available === 0) {
      return 0;
    }
    return (0, import_kolmafia108.floor)(currency_available / price_per);
  }
  function total_uses_available() {
    var available = 0;
    if (metadata.type === "dwelling") {
      available = freeRestsRemaining();
    } else if (metadata.type === "item") {
      available = (0, import_kolmafia108.itemAmount)((0, import_kolmafia108.toItem)(metadata.name)) + get_value("total_buyable") + get_value("total_creatable");
    } else if (metadata.type === "skill") {
      var dailyLimit = (0, import_kolmafia108.toSkill)(metadata.name).dailylimit;
      var mpCost_1 = (0, import_kolmafia108.mpCost)((0, import_kolmafia108.toSkill)(metadata.name));
      if (dailyLimit !== -1 && mpCost_1 > 0) {
        available = (0, import_kolmafia108.min)(dailyLimit, (0, import_kolmafia108.floor)(get_value("mp_starting") / mpCost_1));
      } else if (dailyLimit !== -1) {
        available = dailyLimit;
      } else {
        available = (0, import_kolmafia108.floor)(get_value("mp_starting") / mpCost_1);
      }
    } else if (metadata.name === $_f___HOT_TUB) {
      available = hotTubSoaksRemaining();
    } else if (metadata.name === $_f___NUNS) {
      available = 3 - (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("nunsVisits"));
    }
    return (0, import_kolmafia108.max)(0, available);
  }
  function total_uses_remaining() {
    return (0, import_kolmafia108.max)(
      0,
      get_value("total_uses_available") - get_value("total_uses_needed")
    );
  }
  function soft_reserve_limit_uses() {
    return (0, import_kolmafia108.max)(
      0,
      get_value("soft_reserve_limit") - get_value("total_uses_remaining")
    );
  }
  function max_restorable(resource_type) {
    return get_value("total_uses_needed") * get_value$1(resource_type, "restored_per_use");
  }
  function total_wasted(resource_type, goal) {
    if (resource_type === "hp" && metadata.restoresVariableHp === $_f___RESTORE_ALL || resource_type === "mp" && metadata.restoresVariableMp === $_f___RESTORE_ALL) {
      return 0;
    }
    if (resource_type === "hp" && metadata.type === "skill") {
      return 0;
    }
    return (0, import_kolmafia108.max)(
      0,
      get_value$1(resource_type, "starting") + get_value$1(resource_type, "max_restorable") - goal
    );
  }
  function blood_skill_opportunity_casts(goal) {
    var bloodBondAvailable = auto_have_skill($skill`Blood Bond`) && pathHasFamiliar() && (0, import_kolmafia108.myMaxhp)() > (0, import_kolmafia108.hpCost)(
      //checks if player can use familiars in this run
      $skill`Blood Bond`
    ) && goal > (9 - hp_regen()) * 10 && (0, import_kolmafia108.toBoolean)(
      // blood bond drains hp after combat, make sure we dont accidentally kill the player
      (0, import_kolmafia108.getProperty)("auto_restoreUseBloodBond")
    );
    var bloodBubbleAvailable = auto_have_skill($skill`Blood Bubble`) && (0, import_kolmafia108.myMaxhp)() > (0, import_kolmafia108.hpCost)($skill`Blood Bubble`);
    var waste = total_wasted("hp", goal);
    var blood_cost = (0, import_kolmafia108.hpCost)($skill`Blood Bond`);
    if (waste <= blood_cost || !(bloodBubbleAvailable || bloodBondAvailable)) {
      return 0;
    }
    var hp_to_burn = 0;
    if ((0, import_kolmafia108.myHp)() > 0) {
      hp_to_burn = (0, import_kolmafia108.min)((0, import_kolmafia108.myHp)() - 1, waste);
    }
    return (0, import_kolmafia108.floor)(hp_to_burn / blood_cost);
  }
  function blood_adjusted_waste(goal) {
    var blood_cost = (0, import_kolmafia108.hpCost)($skill`Blood Bond`);
    var casts = blood_skill_opportunity_casts(goal);
    var waste = total_wasted("hp", goal);
    if (casts < 1) {
      return waste;
    } else {
      return waste - casts * (0, import_kolmafia108.hpCost)($skill`Blood Bond`);
    }
  }
  function total_short(resource_type, goal) {
    return (0, import_kolmafia108.max)(
      0,
      goal - (get_value$1(resource_type, "starting") + get_value$1(resource_type, "max_restorable"))
    );
  }
  function total_mp_used() {
    if (metadata.type !== "skill") {
      return -1;
    }
    return total_uses_needed() * (0, import_kolmafia108.mpCost)((0, import_kolmafia108.toSkill)(metadata.name));
  }
  function total_meat_used() {
    if (metadata.type !== "item" && metadata.type !== "skill") {
      return -1;
    }
    var needed = 0;
    if (metadata.type === "item") {
      var i = (0, import_kolmafia108.toItem)(metadata.name);
      needed = (0, import_kolmafia108.max)(0, total_uses_needed() - (0, import_kolmafia108.itemAmount)(i));
    } else if (metadata.type === "skill") {
      needed = total_uses_needed();
    }
    var price = get_value("meat_per_use");
    if (price < 0) {
      return -1;
    }
    return price * needed;
  }
  function meat_available_to_spend() {
    return (0, import_kolmafia108.max)(0, (0, import_kolmafia108.myMeat)() - meat_reserve);
  }
  function total_coinmaster_tokens_used() {
    if (metadata.type !== "item") {
      return -1;
    }
    var i = (0, import_kolmafia108.toItem)(metadata.name);
    if (i.seller !== import_kolmafia108.Coinmaster.none) {
      return -1;
    }
    var needed = (0, import_kolmafia108.max)(0, total_uses_needed() - (0, import_kolmafia108.itemAmount)(i));
    var price = (0, import_kolmafia108.sellPrice)(i.seller, i);
    return needed * price;
  }
  function negative_status_effects_remaining() {
    var negative_effects_active = 0;
    var _iterator11 = _createForOfIteratorHelper(
      Object.entries((0, import_kolmafia108.myEffects)()).map(
        (_ref) => {
          var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
          return [import_kolmafia108.Effect.get(_k), _v];
        }
      )
    ), _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
        var _step11$value = _slicedToArray(_step11.value, 2), e = _step11$value[0], _ = _step11$value[1];
        if (e !== $effect`Beaten Up` && $_f___all_negative_effects.has(e) && !metadata.removesEffects.has(e)) {
          negative_effects_active++;
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return negative_effects_active;
  }
  function resource_value_per_meat_spent(resource_type) {
    if (get_value("total_meat_used") <= 0) {
      return -1;
    }
    return get_value$1(resource_type, "total_restored") / get_value("total_meat_used");
  }
  function resource_value_per_coinmaster_token_spent(resource_type) {
    if (get_value("total_coinmaster_tokens_used") <= 0) {
      return -1;
    }
    return get_value$1(resource_type, "total_restored") / get_value("total_coinmaster_tokens_used");
  }
  function hp_per_mp_spent() {
    if (get_value("total_mp_used") <= 0) {
      return -1;
    }
    return get_value("hp_total_restored") / get_value("total_mp_used");
  }
  function total_restored(resource_type) {
    var starting = get_value$1(resource_type, "starting");
    var goal = (0, import_kolmafia108.min)(
      get_value$1(resource_type, "max_restorable") + starting,
      get_value$1(resource_type, "max")
    );
    if (resource_type === "hp" && goal > starting) {
      var blood_cost = (0, import_kolmafia108.hpCost)($skill`Blood Bond`);
      var casts = blood_skill_opportunity_casts(goal);
      if (casts > 0) {
        starting = (0, import_kolmafia108.max)(starting - casts * blood_cost, 0);
      }
    }
    return goal - starting;
  }
  function is_ever_useable() {
    if (metadata.type === "item") {
      var i = (0, import_kolmafia108.toItem)(metadata.name);
      return auto_is_valid(i);
    }
    if (metadata.type === "skill") {
      return auto_is_valid$2((0, import_kolmafia108.toSkill)(metadata.name));
    }
    if (metadata.type === "dwelling") {
      var d = (0, import_kolmafia108.toItem)(metadata.name);
      return d === $item`Chateau Mantegna room key` && chateaumantegna_available() || d === $item`Distant Woods Getaway Brochure` && auto_campawayAvailable() || d === (0, import_kolmafia108.getDwelling)() && !haveAnyIotmAlternativeRestSiteAvailable();
    }
    if (metadata.name === $_f___HOT_TUB) {
      return isHotTubAvailable();
    }
    if (metadata.name === $_f___NUNS) {
      return (0, import_kolmafia108.getProperty)("sidequestNunsCompleted") !== "none";
    }
    return true;
  }
  function is_currently_useable() {
    if (metadata.type === "item") {
      var i = (0, import_kolmafia108.toItem)(metadata.name);
      if (i.dailyusesleft === 0) {
        return false;
      }
      var mall_buyable = (0, import_kolmafia108.canInteract)() && auto_mall_price(i) > 0;
      var npc_meat_buyable = (0, import_kolmafia108.npcPrice)(i) > 0;
      var coinmaster_buyable = i.seller !== import_kolmafia108.Coinmaster.none && (0, import_kolmafia108.isAccessible)(i.seller) && (0, import_kolmafia108.toBoolean)((0, import_kolmafia108.getProperty)("autoSatisfyWithCoinmasters"));
      var can_buy = meat_reserve < (0, import_kolmafia108.myMeat)() && (npc_meat_buyable || mall_buyable);
      return (0, import_kolmafia108.availableAmount)(i) > 0 || can_buy || coinmaster_buyable;
    }
    if (metadata.type === "skill") {
      return auto_have_skill((0, import_kolmafia108.toSkill)(metadata.name));
    }
    if (metadata.type === "dwelling") {
      return useFreeRests && haveFreeRestAvailable();
    }
    if (metadata.name === $_f___HOT_TUB) {
      return hotTubSoaksRemaining() > 0;
    }
    if (metadata.name === $_f___NUNS) {
      return (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("nunsVisits")) < 3;
    }
    return true;
  }
  function have_required_resources() {
    if (metadata.type === "skill") {
      var s = (0, import_kolmafia108.toSkill)(metadata.name);
      if (s.dailylimit !== -1) {
        return s.dailylimit > 0;
      }
      if ((0, import_kolmafia108.myMaxmp)() >= (0, import_kolmafia108.mpCost)(s)) {
        return true;
      }
    }
    return get_value("total_uses_available") > 0;
  }
  function restores_needed_resources() {
    if (hp_goal > (0, import_kolmafia108.myHp)() && get_value("hp_restored_per_use") === 0) {
      return false;
    }
    if (mp_goal > (0, import_kolmafia108.myMp)() && get_value("mp_restored_per_use") === 0) {
      return false;
    }
    return true;
  }
  function meets_hard_reserve_limit() {
    return get_value("total_uses_remaining") >= get_value("hard_reserve_limit");
  }
  optimization_parameters.metadata = metadata;
  set_value("hp_goal", hp_goal);
  set_value("hp_starting", (0, import_kolmafia108.myHp)());
  set_value("hp_max", (0, import_kolmafia108.myMaxhp)());
  set_value("hp_restored_per_use", hp_restored_per_use());
  set_value("hp_uses_needed_for_goal", uses_needed_to_reach_goal("hp"));
  set_value("mp_goal", mp_goal);
  set_value("mp_starting", (0, import_kolmafia108.myMp)());
  set_value("mp_max", (0, import_kolmafia108.myMaxmp)());
  set_value("mp_restored_per_use", mp_restored_per_use());
  set_value("mp_uses_needed_for_goal", uses_needed_to_reach_goal("mp"));
  set_value("meat_per_use", meat_per_use());
  set_value("tokens_per_use", tokens_per_use());
  set_value("total_uses_needed", total_uses_needed());
  set_value("total_buyable", total_buyable());
  set_value("total_creatable", total_creatable());
  set_value("soft_reserve_limit", metadata.softReserveLimit);
  set_value("hard_reserve_limit", metadata.hardReserveLimit);
  set_value("total_uses_available", total_uses_available());
  set_value("total_uses_remaining", total_uses_remaining());
  set_value("soft_reserve_limit_uses", soft_reserve_limit_uses());
  set_value("hp_max_restorable", max_restorable("hp"));
  set_value("hp_total_restored", total_restored("hp"));
  set_value("hp_total_wasted_goal", blood_adjusted_waste(hp_goal));
  set_value("hp_total_short_goal", total_short("hp", hp_goal));
  set_value("hp_total_wasted_max", blood_adjusted_waste((0, import_kolmafia108.myMaxhp)()));
  set_value("hp_total_short_max", total_short("hp", (0, import_kolmafia108.myMaxhp)()));
  set_value("mp_max_restorable", max_restorable("mp"));
  set_value("mp_total_restored", total_restored("mp"));
  set_value("mp_total_wasted_goal", total_wasted("mp", mp_goal));
  set_value("mp_total_short_goal", total_short("mp", mp_goal));
  set_value("mp_total_wasted_max", total_wasted("mp", (0, import_kolmafia108.myMaxmp)()));
  set_value("mp_total_short_max", total_short("mp", (0, import_kolmafia108.myMaxmp)()));
  set_value("total_mp_used", total_mp_used());
  set_value("total_meat_used", total_meat_used());
  set_value("meat_available_to_spend", meat_available_to_spend());
  set_value("total_coinmaster_tokens_used", total_coinmaster_tokens_used());
  set_value("hp_per_meat_spent", resource_value_per_meat_spent("hp"));
  set_value(
    "hp_per_coinmaster_token_spent",
    resource_value_per_coinmaster_token_spent("hp")
  );
  set_value("hp_per_mp_spent", hp_per_mp_spent());
  set_value("mp_per_meat_spent", resource_value_per_meat_spent("mp"));
  set_value(
    "mp_per_coinmaster_token_spent",
    resource_value_per_coinmaster_token_spent("mp")
  );
  set_value$1("is_ever_useable", is_ever_useable());
  set_value$1("is_currently_useable", is_currently_useable());
  set_value$1("have_required_resources", have_required_resources());
  set_value$1("restores_needed_resources", restores_needed_resources());
  set_value$1("meets_hard_reserve_limit", meets_hard_reserve_limit());
  set_value(
    "blood_skill_opportunity_casts_goal",
    blood_skill_opportunity_casts(hp_goal)
  );
  set_value(
    "blood_skill_opportunity_casts_max",
    blood_skill_opportunity_casts((0, import_kolmafia108.myMaxhp)())
  );
  set_value(
    "negative_status_effects_remaining",
    negative_status_effects_remaining()
  );
  return optimization_parameters;
}
function __maximize_restore_options(hp_goal, mp_goal, meat_reserve, useFreeRests) {
  function slice(p, start_1, stop) {
    var subset = /* @__PURE__ */ new Map();
    if (start_1 >= 0 && start_1 <= p.size && stop >= 0 && stop <= p.size) {
      var i = start_1;
      while (i < stop) {
        subset.set(
          subset.size,
          p.get(i) ?? p.set(i, new __RestorationOptimization()).get(i)
        );
        i++;
      }
    }
    return subset;
  }
  function copy(p) {
    return slice(p, 0, p.size);
  }
  function combine(left, right) {
    var i = 0;
    while (i < right.size) {
      left.set(
        left.size,
        right.get(i) ?? right.set(i, new __RestorationOptimization()).get(i)
      );
      i++;
    }
    return left;
  }
  function weighted_sum(o, keys, value_ranks) {
    var sum = 0;
    var _iterator12 = _createForOfIteratorHelper(
      keys
    ), _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
        var _step12$value = _slicedToArray(_step12.value, 2), s = _step12$value[0], _ = _step12$value[1];
        sum += (o.objectiveValues.get(s) ?? o.objectiveValues.set(s, 0).get(s)) * (value_ranks.get(s) ?? value_ranks.set(s, 0).get(s));
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    return sum;
  }
  function ordered_ranks(weights) {
    var unordered = /* @__PURE__ */ new Map();
    var value_set = /* @__PURE__ */ new Map();
    var _iterator13 = _createForOfIteratorHelper(
      weights
    ), _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
        var _step13$value = _slicedToArray(_step13.value, 2), s = _step13$value[0], w = _step13$value[1];
        if (!value_set.has(w)) {
          value_set.set(w, true);
          unordered.set(unordered.size, w);
        }
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    unordered = new Map(_toConsumableArray(unordered.entries()).sort((a, b) => a[1] - b[1]));
    return unordered;
  }
  function non_dominated_set(T, B, value_ranks, rank, maximize_keys, minimize_keys) {
    var M = /* @__PURE__ */ new Map();
    var dominated = /* @__PURE__ */ new Map();
    var Ti = 0;
    var Bi = 0;
    while (Ti < T.size) {
      Bi = 0;
      while (Bi < B.size) {
        if (dominated.has(
          (B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).metadata.name
        )) {
          Bi++;
          continue;
        }
        var T_dominance = 0;
        var B_dominance = 0;
        var _iterator14 = _createForOfIteratorHelper(
          value_ranks
        ), _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
            var _step14$value = _slicedToArray(_step14.value, 2), key = _step14$value[0], r = _step14$value[1];
            if (r === rank) {
              if (((T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).objectiveValues.get(key) ?? (T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).objectiveValues.set(key, 0).get(key)) === -1 || ((B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).objectiveValues.get(key) ?? (B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).objectiveValues.set(key, 0).get(key)) === -1) {
                continue;
              }
              if (((T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).objectiveValues.get(key) ?? (T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).objectiveValues.set(key, 0).get(key)) < ((B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).objectiveValues.get(key) ?? (B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).objectiveValues.set(key, 0).get(key))) {
                if (maximize_keys.has(key)) {
                  B_dominance++;
                } else if (minimize_keys.has(key)) {
                  T_dominance++;
                }
              } else if (((T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).objectiveValues.get(key) ?? (T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).objectiveValues.set(key, 0).get(key)) > ((B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).objectiveValues.get(key) ?? (B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).objectiveValues.set(key, 0).get(key))) {
                if (maximize_keys.has(key)) {
                  T_dominance++;
                } else if (minimize_keys.has(key)) {
                  B_dominance++;
                }
              }
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
        if (T_dominance > B_dominance) {
          dominated.set(
            (B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).metadata.name,
            true
          );
        } else if (B_dominance > T_dominance) {
          dominated.set(
            (T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).metadata.name,
            true
          );
          break;
        }
        Bi++;
      }
      if (!dominated.has(
        (T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)).metadata.name
      )) {
        M.set(
          M.size,
          T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti)
        );
      } else {
        auto_log_restore_debug(
          `Removed from consideration: ${to_string$1(T.get(Ti) ?? T.set(Ti, new __RestorationOptimization()).get(Ti), true)}`,
          1
        );
      }
      Ti++;
    }
    Bi = 0;
    while (Bi < B.size) {
      if (!dominated.has(
        (B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)).metadata.name
      )) {
        M.set(
          M.size,
          B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi)
        );
      } else {
        auto_log_restore_debug(
          `Removed from consideration: ${to_string$1(B.get(Bi) ?? B.set(Bi, new __RestorationOptimization()).get(Bi), true)}`,
          1
        );
      }
      Bi++;
    }
    return M;
  }
  function ranked_optimization(p, value_ranks, rank, maximize_keys, minimize_keys) {
    if (p.size === 1) {
      return p;
    } else {
      var mid = (0, import_kolmafia108.floor)(p.size / 2);
      var T = ranked_optimization(
        slice(p, 0, mid),
        value_ranks,
        rank,
        maximize_keys,
        minimize_keys
      );
      var B = ranked_optimization(
        slice(p, mid, p.size),
        value_ranks,
        rank,
        maximize_keys,
        minimize_keys
      );
      return non_dominated_set(
        T,
        B,
        value_ranks,
        rank,
        maximize_keys,
        minimize_keys
      );
    }
  }
  function ranked_optimization$1(p, value_ranks, maximize_keys, minimize_keys) {
    auto_log_restore_debug(
      `Beginning optimization of ${p.size} restoration options.`,
      1
    );
    if (p.size === 0) {
      return p;
    }
    var ranked = copy(p);
    var ranks = ordered_ranks(value_ranks);
    auto_log_restore_debug(
      `${ranked.size} options before optimization: ${to_string$2(ranked, false)}`,
      2
    );
    var _iterator15 = _createForOfIteratorHelper(
      ranks
    ), _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
        var _step15$value = _slicedToArray(_step15.value, 2), _ = _step15$value[0], rank = _step15$value[1];
        var desc = __RANKED_GOAL_DESCRIPTIONS.has(rank) ? __RANKED_GOAL_DESCRIPTIONS.get(rank) ?? __RANKED_GOAL_DESCRIPTIONS.set(rank, "").get(rank) : "whoops, someone changed things and didnt update the descriptions. Bad dev.";
        auto_log_restore_debug(
          `Rank ${rank} optimization, prefer to... ${desc}`,
          1
        );
        if (ranked.size <= 1) {
          break;
        }
        ranked = ranked_optimization(
          ranked,
          value_ranks,
          rank,
          maximize_keys,
          minimize_keys
        );
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    return ranked;
  }
  function partition(p, sort_keys, value_ranks, left_index, right_index) {
    var pivot_value = (0, import_kolmafia108.toInt)(
      weighted_sum(
        p.get(left_index) ?? p.set(left_index, new __RestorationOptimization()).get(left_index),
        sort_keys,
        value_ranks
      )
    );
    var l = left_index + 1;
    var r = right_index;
    var done = false;
    var swap = new __RestorationOptimization();
    while (!done) {
      while (l <= r) {
        if (weighted_sum(
          p.get(l) ?? p.set(l, new __RestorationOptimization()).get(l),
          sort_keys,
          value_ranks
        ) >= pivot_value) {
          l++;
        } else {
          break;
        }
      }
      while (r >= l) {
        if (weighted_sum(
          p.get(r) ?? p.set(r, new __RestorationOptimization()).get(r),
          sort_keys,
          value_ranks
        ) <= pivot_value) {
          r--;
        } else {
          break;
        }
      }
      if (r < l) {
        done = true;
      } else {
        swap = p.get(l) ?? p.set(l, new __RestorationOptimization()).get(l);
        p.set(l, p.get(r) ?? p.set(r, new __RestorationOptimization()).get(r));
        p.set(r, swap);
      }
    }
    swap = p.get(left_index) ?? p.set(left_index, new __RestorationOptimization()).get(left_index);
    p.set(
      left_index,
      p.get(r) ?? p.set(r, new __RestorationOptimization()).get(r)
    );
    p.set(r, swap);
    return r;
  }
  function quick_sort_maximize(p, sort_keys, value_ranks, left_index, right_index) {
    if (left_index < right_index) {
      var pivot = partition(
        p,
        sort_keys,
        value_ranks,
        left_index,
        right_index
      );
      quick_sort_maximize(p, sort_keys, value_ranks, left_index, pivot - 1);
      quick_sort_maximize(p, sort_keys, value_ranks, pivot + 1, right_index);
    }
  }
  function quick_sort_maximize$1(p, sort_keys, value_ranks) {
    auto_log_restore_debug(
      `Sorting ${p.size} options by primary objectives.`,
      1
    );
    if (p.size > 1) {
      quick_sort_maximize(p, sort_keys, value_ranks, 0, p.size - 1);
    }
  }
  function apply_constraints(p, constraint_keys) {
    var c = p.size;
    auto_log_restore_debug(`Applying constraints to ${c} objective values.`, 1);
    var constrained = /* @__PURE__ */ new Map();
    var _iterator16 = _createForOfIteratorHelper(
      p
    ), _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
        var _step16$value = _slicedToArray(_step16.value, 2), _ = _step16$value[0], o = _step16$value[1];
        var fail = false;
        var _iterator17 = _createForOfIteratorHelper(
          constraint_keys
        ), _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
            var _step17$value = _slicedToArray(_step17.value, 2), c_1 = _step17$value[0], __1 = _step17$value[1];
            if (!(o.constraints.get(c_1) ?? o.constraints.set(c_1, false).get(c_1))) {
              fail = true;
              break;
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        if (!fail) {
          constrained.set(constrained.size, o);
        }
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    auto_log_restore_debug(
      `Removed  ${c - constrained.size} restore options from consideration.`,
      1
    );
    return constrained;
  }
  function calculate_objective_values() {
    if ($_f___restore_maximizer_cache.size > 0) {
      auto_log_restore_debug(
        "Recalculating cached restore objective values.",
        0
      );
      var _iterator18 = _createForOfIteratorHelper(
        $_f___restore_maximizer_cache
      ), _step18;
      try {
        var _loop = function _loop2() {
          var _step18$value = _slicedToArray(_step18.value, 2), i = _step18$value[0], o2 = _step18$value[1];
          var recalculated = (() => {
            var _val = __calculate_objective_values(
              hp_goal,
              mp_goal,
              meat_reserve,
              useFreeRests,
              o2.metadata
            );
            $_f___restore_maximizer_cache.set(i, _val);
            return _val;
          })();
        };
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    } else {
      auto_log_restore_debug("Calculating restore objective values.", 0);
      var _iterator19 = _createForOfIteratorHelper(
        __restoration_methods()
      ), _step19;
      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
          var _step19$value = _slicedToArray(_step19.value, 2), name = _step19$value[0], metadata = _step19$value[1];
          var o = __calculate_objective_values(
            hp_goal,
            mp_goal,
            meat_reserve,
            useFreeRests,
            metadata
          );
          if (o.constraints.get("is_ever_useable") ?? o.constraints.set("is_ever_useable", false).get("is_ever_useable")) {
            $_f___restore_maximizer_cache.set(
              $_f___restore_maximizer_cache.size,
              o
            );
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }
    return $_f___restore_maximizer_cache;
  }
  var optimized = calculate_objective_values();
  optimized = apply_constraints(optimized, __CONSTRAINT_KEYS);
  quick_sort_maximize$1(optimized, __PRIMARY_SORT_KEYS, __OBJECTIVE_RANKS);
  return ranked_optimization$1(
    optimized,
    __OBJECTIVE_RANKS,
    __MAXIMIZE_KEYS,
    __MINIMIZE_KEYS
  );
}
function __restore(resource_type, goal, meat_reserve, useFreeRests) {
  function current_resource() {
    if (resource_type === "hp") {
      return (0, import_kolmafia108.myHp)();
    } else if (resource_type === "mp") {
      return (0, import_kolmafia108.myMp)();
    }
    return -1;
  }
  function max_resource() {
    if (resource_type === "hp") {
      return (0, import_kolmafia108.myMaxhp)();
    } else if (resource_type === "mp") {
      return (0, import_kolmafia108.myMaxmp)();
    }
    return -1;
  }
  function hp_target() {
    if (resource_type === "hp") {
      return goal;
    } else {
      return (0, import_kolmafia108.myHp)();
    }
  }
  function mp_target() {
    if (resource_type === "mp") {
      return goal;
    } else {
      return (0, import_kolmafia108.myMp)();
    }
  }
  function pick_blood_skill(final_hp) {
    var bloodBondAvailable = auto_have_skill($skill`Blood Bond`) && pathHasFamiliar() && (0, import_kolmafia108.myMaxhp)() > (0, import_kolmafia108.hpCost)($skill`Blood Bond`) && final_hp > (9 - hp_regen()) * 10 && (0, import_kolmafia108.toBoolean)(
      // blood bond drains hp after combat, make sure we dont accidentally kill the player
      (0, import_kolmafia108.getProperty)("auto_restoreUseBloodBond")
    );
    var bloodBubbleAvailable = auto_have_skill($skill`Blood Bubble`) && (0, import_kolmafia108.myMaxhp)() > (0, import_kolmafia108.hpCost)($skill`Blood Bubble`);
    var blood_skill = import_kolmafia108.Skill.none;
    if (bloodBondAvailable && bloodBubbleAvailable) {
      if ((0, import_kolmafia108.haveEffect)($effect`Blood Bond`) > (0, import_kolmafia108.haveEffect)($effect`Blood Bubble`)) {
        blood_skill = $skill`Blood Bubble`;
      } else {
        blood_skill = $skill`Blood Bond`;
      }
    } else if (bloodBondAvailable) {
      blood_skill = $skill`Blood Bond`;
    } else if (bloodBubbleAvailable) {
      blood_skill = $skill`Blood Bubble`;
    }
    return blood_skill;
  }
  function use_opportunity_blood_skills(hp_restored_per_use_1, final_hp) {
    if (!auto_have_skill($skill`Blood Bond`) && !auto_have_skill($skill`Blood Bubble`)) {
      return false;
    }
    var restored = (0, import_kolmafia108.myHp)() + hp_restored_per_use_1;
    var waste = (0, import_kolmafia108.min)((0, import_kolmafia108.myHp)() - 1, restored - (0, import_kolmafia108.myMaxhp)());
    if (waste <= 0) {
      return true;
    }
    var casts_total = waste / 30;
    if (casts_total <= 0) {
      return true;
    }
    var skill_ratios = /* @__PURE__ */ new Map();
    var total_ratio = 0;
    if (auto_have_skill($skill`Blood Bubble`)) {
      var bubble_ratio = 1 / 3;
      skill_ratios.set($skill`Blood Bubble`, bubble_ratio);
      total_ratio += bubble_ratio;
    }
    if (auto_have_skill($skill`Blood Bond`)) {
      var bond_ratio = 1 / 10;
      skill_ratios.set($skill`Blood Bond`, bond_ratio);
      total_ratio += bond_ratio;
    }
    var casts_so_far = 0;
    var to_cast = /* @__PURE__ */ new Map();
    var _iterator20 = _createForOfIteratorHelper(
      skill_ratios
    ), _step20;
    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
        var _step20$value = _slicedToArray(_step20.value, 2), sk = _step20$value[0], ratio = _step20$value[1];
        var times_to_cast = (0, import_kolmafia108.floor)(casts_total * ratio / total_ratio);
        to_cast.set(sk, times_to_cast);
        casts_so_far += times_to_cast;
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
    if (casts_so_far < casts_total) {
      to_cast.set(
        pick_blood_skill(final_hp),
        (to_cast.get(pick_blood_skill(final_hp)) ?? 0) + casts_total - casts_so_far
      );
    }
    var success2 = true;
    var _iterator21 = _createForOfIteratorHelper(
      to_cast
    ), _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
        var _step21$value = _slicedToArray(_step21.value, 2), _sk = _step21$value[0], times = _step21$value[1];
        success2 = (0, import_kolmafia108.toBoolean)((0, import_kolmafia108.toInt)(success2) & (0, import_kolmafia108.toInt)((0, import_kolmafia108.useSkill)(times, _sk)));
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    return success2;
  }
  function use_restore(metadata, meat_reserve2, useFreeRests2) {
    if (metadata.name === "") {
      return false;
    }
    auto_log_info(
      `Using ${metadata.type} ${metadata.name} as restore.`,
      "blue"
    );
    if (metadata.type === "item") {
      var i2 = (0, import_kolmafia108.toItem)(metadata.name);
      return (0, import_kolmafia108.retrieveItem)(1, i2) && (0, import_kolmafia108.use)(1, i2);
    }
    if (metadata.type === "dwelling") {
      return doFreeRest();
    }
    if (metadata.name === $_f___HOT_TUB) {
      var pre_soaks = hotTubSoaksRemaining();
      return doHottub() === pre_soaks - 1;
    }
    if (metadata.name === $_f___NUNS) {
      var pre_visits = (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("nunsVisits"));
      (0, import_kolmafia108.cliExecute)("nuns");
      var post_visits = (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("nunsVisits"));
      return pre_visits === post_visits - 1;
    }
    if (metadata.type === "skill") {
      var s = (0, import_kolmafia108.toSkill)(metadata.name);
      if ((0, import_kolmafia108.myMp)() < (0, import_kolmafia108.mpCost)(s) && !acquireMP$3((0, import_kolmafia108.mpCost)(s), 0, useFreeRests2)) {
        auto_log_warning(`Couldnt acquire enough MP to cast ${s}`, "red");
        return false;
      }
      return (0, import_kolmafia108.useSkill)(1, s);
    }
    return false;
  }
  function list_to_string(e_list) {
    var s = "[";
    var first = true;
    var _iterator22 = _createForOfIteratorHelper(
      e_list.keys()
    ), _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        var e = _step22.value;
        if (first) {
          first = false;
        } else {
          s += ", ";
        }
        s += e.toString();
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    s += "]";
    return s;
  }
  function negative_effects() {
    var negative = /* @__PURE__ */ new Map();
    var _iterator23 = _createForOfIteratorHelper(
      Object.entries((0, import_kolmafia108.myEffects)()).map(
        (_ref3) => {
          var _ref4 = _slicedToArray(_ref3, 2), _k = _ref4[0], _v = _ref4[1];
          return [import_kolmafia108.Effect.get(_k), _v];
        }
      )
    ), _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
        var _step23$value = _slicedToArray(_step23.value, 2), e = _step23$value[0], _ = _step23$value[1];
        if ($_f___all_negative_effects.has(e)) {
          negative.set(e, true);
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
    return negative;
  }
  function recover_discount_pants() {
    var _iterator24 = _createForOfIteratorHelper(
      $items`designer sweatpants, Travoltan trousers`
    ), _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
        var discountpants2 = _step24.value;
        if ((0, import_kolmafia108.closetAmount)(discountpants2) > 0) {
          (0, import_kolmafia108.takeCloset)(1, discountpants2);
        }
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  }
  auto_log_info(
    `Target ${resource_type} => ${goal} - Considering restore options at ${(0, import_kolmafia108.myHp)()}/${(0, import_kolmafia108.myMaxhp)()} HP with ${(0, import_kolmafia108.myMp)()}/${(0, import_kolmafia108.myMaxmp)()} MP`,
    "blue"
  );
  auto_log_info$1(
    `Active Negative Effects => ${list_to_string(negative_effects())}`
  );
  while (current_resource() < goal) {
    if (goal > max_resource()) {
      goal = max_resource();
    }
    var options = __maximize_restore_options(
      hp_target(),
      mp_target(),
      meat_reserve,
      useFreeRests
    );
    if (options.size === 0) {
      auto_log_error(
        `Target ${resource_type} => ${goal} - couldnt determine an effective restoration mechanism`
      );
      if ((0, import_kolmafia108.toBoolean)((0, import_kolmafia108.getProperty)("auto_ignoreRestoreFailure")) || (0, import_kolmafia108.toBoolean)((0, import_kolmafia108.getProperty)("_auto_ignoreRestoreFailureToday"))) {
        auto_log_error("Ignoring the error as per user instructions");
        return false;
      }
      (0, import_kolmafia108.print)(
        "Aborting due to restore failure... you can override this setting for today by entering in gCLI:",
        "blue"
      );
      (0, import_kolmafia108.print)("set _auto_ignoreRestoreFailureToday = true", "blue");
      (0, import_kolmafia108.print)(
        "You can override this setting forever by entering in gCLI:",
        "blue"
      );
      (0, import_kolmafia108.print)("set auto_ignoreRestoreFailure = true", "blue");
      (0, import_kolmafia108.abort)();
    }
    var success = false;
    var _iterator25 = _createForOfIteratorHelper(
      options
    ), _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        var _step25$value = _slicedToArray(_step25.value, 2), i = _step25$value[0], o = _step25$value[1];
        if (o.metadata.type === "item" && (0, import_kolmafia108.itemAmount)((0, import_kolmafia108.toItem)(o.metadata.name)) === 0) {
          var _iterator26 = _createForOfIteratorHelper($items`designer sweatpants, Travoltan trousers`), _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
              var discountpants = _step26.value;
              if ((0, import_kolmafia108.itemAmount)(discountpants) > 0) {
                var mustnotpants = false;
                (0, import_kolmafia108.cliExecute)(`whatif equip ${discountpants}; quiet`);
                if (resource_type === "hp" && goal > (0, import_kolmafia108.numericModifier)("_spec", "Buffed HP Maximum")) {
                  mustnotpants = true;
                }
                if (resource_type === "mp" && goal > (0, import_kolmafia108.numericModifier)("_spec", "Buffed MP Maximum")) {
                  mustnotpants = true;
                }
                if (mustnotpants) {
                  auto_log_info$1("Avoiding any discount pants restore loops");
                  (0, import_kolmafia108.putCloset)(1, discountpants);
                }
              }
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
        }
        use_opportunity_blood_skills(
          (0, import_kolmafia108.toInt)(
            o.vars.get("hp_restored_per_use") ?? o.vars.set("hp_restored_per_use", 0).get("hp_restored_per_use")
          ),
          (0, import_kolmafia108.toInt)(
            (0, import_kolmafia108.myHp)() + (o.vars.get("hp_total_restored") ?? o.vars.set("hp_total_restored", 0).get("hp_total_restored"))
          )
        );
        success = use_restore(o.metadata, meat_reserve, useFreeRests);
        if (success) {
          break;
        } else {
          auto_log_warning$1(
            `Target ${resource_type} => ${goal} option ${o.metadata.name} failed. Trying next option (if available).`
          );
        }
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
    if (!success) {
      if (options.size === 1 && (options.get(0) ?? options.set(0, new __RestorationOptimization()).get(0)).metadata.name === "rest upside down") {
        var current_back = (0, import_kolmafia108.equippedItem)($slot`back`);
        if (current_resource() < max_resource() - (0, import_kolmafia108.numericModifier)(current_back, `Maximum ${resource_type}`)) {
          auto_log_info$1("Manually equipping the bat wings");
          (0, import_kolmafia108.equip)($item`bat wings`);
          recover_discount_pants();
          success = (0, import_kolmafia108.useSkill)(1, $skill`Rest upside down`);
          (0, import_kolmafia108.equip)(current_back);
          return success;
        }
      }
      auto_log_warning(
        `Target ${resource_type} => ${goal} - Uh oh. All restore options tried (${options.size}) failed. Sorry.`,
        "red"
      );
      recover_discount_pants();
      return false;
    }
  }
  recover_discount_pants();
  return true;
}
function __cure_bad_stuff() {
  var _iterator27 = _createForOfIteratorHelper(
    $effects`Hardly Poisoned at All, A Little Bit Poisoned, Somewhat Poisoned, Really Quite Poisoned, Majorly Poisoned, Toad In The Hole`
  ), _step27;
  try {
    for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
      var e = _step27.value;
      if ((0, import_kolmafia108.haveEffect)(e) > 0) {
        uneffect(e);
      }
    }
  } catch (err) {
    _iterator27.e(err);
  } finally {
    _iterator27.f();
  }
  if ((0, import_kolmafia108.haveEffect)($effect`Beaten Up`) > 0) {
    auto_log_info$1(
      "Ouch, you got beaten up. Lets get you patched up, if we can."
    );
    uneffect($effect`Beaten Up`);
    if ((0, import_kolmafia108.haveEffect)($effect`Beaten Up`) > 0) {
      auto_log_warning(
        "Well, you're still beaten up, thats probably not great...",
        "red"
      );
    }
  }
}
function acquireMP$1(goal) {
  return acquireMP$2(goal, meatReserve());
}
function acquireMP$2(goal, meat_reserve) {
  return acquireMP$3(goal, meat_reserve, true);
}
function acquireMP$3(goal, meat_reserve, useFreeRests) {
  if (in_darkGyffte()) {
    return false;
  } else if (in_zombieSlayer()) {
    return zombieSlayer_acquireMP(goal, meat_reserve);
  }
  var isMax = goal === (0, import_kolmafia108.myMaxmp)();
  __cure_bad_stuff();
  if (isMax) {
    goal = (0, import_kolmafia108.myMaxmp)();
  } else if (goal > (0, import_kolmafia108.myMaxmp)()) {
    return false;
  } else if ((0, import_kolmafia108.myMp)() >= goal) {
    return true;
  }
  buffMaintain$4($effect`The Odour of Magick`);
  buffMaintain$4($effect`Using Protection`);
  buffMaintain$4($effect`Tingly Tongue`);
  buffMaintain$4($effect`Tingling Insides`);
  buffMaintain$4($effect`Wisdom of the Autumn Years`);
  if (auto_equipAprilShieldBuff() && !(0, import_kolmafia108.toBoolean)((0, import_kolmafia108.getProperty)("_aprilShowerSimmer"))) {
    buffMaintain$4($effect`Simmering`);
  }
  if ((0, import_kolmafia108.myMaxmp)() - (0, import_kolmafia108.myMp)() > 300) {
    if (!auto_sausageBlocked()) {
      if ((0, import_kolmafia108.itemAmount)($item`magical sausage`) < 1 && (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("_sausagesMade")) < 23) {
        auto_sausageGrind(1);
      }
      auto_sausageEatEmUp(1);
      goal = (0, import_kolmafia108.min)(goal, (0, import_kolmafia108.myMaxmp)());
    }
  }
  if ((0, import_kolmafia108.myClass)() === $class`Sauceror`) {
    var MPtoRestore = goal - (0, import_kolmafia108.myMp)();
    var casts = (0, import_kolmafia108.ceil)((0, import_kolmafia108.toFloat)(MPtoRestore) / 15);
    casts = (0, import_kolmafia108.min)(casts, (0, import_kolmafia108.mySoulsauce)() / 5);
    if (casts > 0) {
      var excessMP = (0, import_kolmafia108.myMp)() + 15 * casts - (0, import_kolmafia108.myMaxmp)();
      if (excessMP > 0) {
        if ((0, import_kolmafia108.myMp)() < excessMP && casts > 1) {
          casts -= 1;
          (0, import_kolmafia108.useSkill)(1, $skill`Soul Food`);
        }
        if ((0, import_kolmafia108.myMp)() > 0) {
          auto_burnMP((0, import_kolmafia108.min)(excessMP, (0, import_kolmafia108.myMp)()));
        }
      }
      (0, import_kolmafia108.useSkill)(casts, $skill`Soul Food`);
      if ((0, import_kolmafia108.myMp)() >= goal) {
        return true;
      }
    }
  }
  if (canUseSweatpants() && (getSweat() >= 95 || (0, import_kolmafia108.myMeat)() < meatReserve() + 500)) {
    var _MPtoRestore = goal - (0, import_kolmafia108.myMp)();
    var _casts = (0, import_kolmafia108.ceil)((0, import_kolmafia108.toFloat)(_MPtoRestore) / 50);
    _casts = (0, import_kolmafia108.min)(_casts, (getSweat() - 90) / 5);
    if (_casts > 0) {
      var _excessMP = (0, import_kolmafia108.myMp)() + 50 * _casts - (0, import_kolmafia108.myMaxmp)();
      if (_excessMP > 0) {
        if ((0, import_kolmafia108.myMp)() < _excessMP && _casts > 1) {
          _casts -= 1;
          (0, import_kolmafia108.useSkill)(1, $skill`Sip Some Sweat`);
        }
        if ((0, import_kolmafia108.myMp)() > 0) {
          auto_burnMP((0, import_kolmafia108.min)(_excessMP, (0, import_kolmafia108.myMp)()));
        }
      }
      (0, import_kolmafia108.useSkill)(_casts, $skill`Sip Some Sweat`);
      if ((0, import_kolmafia108.myMp)() >= goal) {
        return true;
      }
    }
  }
  __restore("mp", goal, meat_reserve, useFreeRests);
  return (0, import_kolmafia108.myMp)() >= goal;
}
function acquireHP() {
  var goal = (0, import_kolmafia108.min)((0, import_kolmafia108.myMaxhp)(), 800);
  if ((0, import_kolmafia108.myPath)() === $path`Disguises Delimit`) {
    goal = (0, import_kolmafia108.toInt)((0, import_kolmafia108.myMaxhp)() * 0.8);
  }
  if (in_amw()) {
    goal = (0, import_kolmafia108.toInt)((0, import_kolmafia108.myMaxhp)() * 0.6);
  }
  return acquireHP$1(goal);
}
function acquireHP$1(goal) {
  return acquireHP$2(goal, meatReserve());
}
function acquireHP$2(goal, meat_reserve) {
  return acquireHP$3(goal, meat_reserve, true);
}
function acquireHP$3(goal, meat_reserve, useFreeRests) {
  if (isActuallyEd()) {
    return edAcquireHP();
  }
  if (in_darkGyffte()) {
    if ((0, import_kolmafia108.myHp)() === 0) {
      bat_reallyPickSkills(20);
      return true;
    }
    return false;
  }
  if (in_pokefam() && !(0, import_kolmafia108.toBoolean)((0, import_kolmafia108.getProperty)("_auto_forcePokefamRestore"))) {
    return false;
  }
  (0, import_kolmafia108.setProperty)("_auto_forcePokefamRestore", false.toString());
  if (possessEquipment($item`Hand in Glove`)) {
    var initial_maxHP = (0, import_kolmafia108.myMaxhp)();
    (0, import_kolmafia108.cliExecute)("refresh status");
    if (initial_maxHP === (0, import_kolmafia108.myMaxhp)()) {
      auto_log_restore_debug(
        "I just refreshed status because I detected [Hand in Glove]. But it turned out to not have been necessary",
        1
      );
    } else {
      auto_log_restore_debug(
        "I just refreshed status because I detected [Hand in Glove] and it corrected my maxHP value. This prevented an infinite loop",
        0
      );
    }
  }
  var isMax = goal === (0, import_kolmafia108.myMaxhp)();
  __cure_bad_stuff();
  if (isMax) {
    goal = (0, import_kolmafia108.myMaxhp)();
  } else if (goal > (0, import_kolmafia108.myMaxhp)()) {
    return false;
  } else if ((0, import_kolmafia108.myHp)() >= goal * 0.95) {
    return true;
  }
  buffMaintain$4($effect`Extra-Green`);
  if ((0, import_kolmafia108.myClass)() === $class`Pig Skinner` && (0, import_kolmafia108.haveSkill)($skill`Second Wind`)) {
    return auto_pigSkinnerAcquireHP((0, import_kolmafia108.toInt)(0.7 * goal));
  }
  if ((0, import_kolmafia108.myClass)() === $class`Cheese Wizard` && (0, import_kolmafia108.haveSkill)($skill`Emmental Elemental`)) {
    return auto_cheeseWizardAcquireHP(
      (0, import_kolmafia108.toInt)(goal - 0.3 * (0, import_kolmafia108.myBuffedstat)($stat`Moxie`))
    );
  }
  if ((0, import_kolmafia108.myClass)() === $class`Jazz Agent` && (0, import_kolmafia108.haveSkill)($skill`Grit Teeth`)) {
    return auto_jazzAgentAcquireHP(goal - 60);
  }
  if (is_boris()) {
    return borisAcquireHP(goal);
  }
  if (in_zombieSlayer()) {
    return zombieSlayer_acquireHP(goal);
  }
  if ((0, import_kolmafia108.myClass)() === $class`Plumber`) {
    while ((0, import_kolmafia108.myHp)() < goal && (0, import_kolmafia108.myHp)() < (0, import_kolmafia108.myMaxhp)() && (0, import_kolmafia108.itemAmount)($item`coin`) > 400) {
      (0, import_kolmafia108.retrieveItem)(1, $item`super deluxe mushroom`);
      (0, import_kolmafia108.use)(1, $item`super deluxe mushroom`);
    }
    if ((0, import_kolmafia108.myHp)() <= 10) {
      auto_log_info$1("Spending a turn to heal.");
      (0, import_kolmafia108.visitUrl)("place.php?whichplace=mario&action=mush_saveblock");
    }
  } else {
    if ((0, import_kolmafia108.haveSkill)($skill`Cannelloni Cocoon`)) {
      var coc_tries = 0;
      while (goal - (0, import_kolmafia108.myHp)() > 20 && coc_tries++ < 3) {
        (0, import_kolmafia108.useSkill)($skill`Cannelloni Cocoon`);
      }
    }
    __restore("hp", goal, meat_reserve, useFreeRests);
  }
  return (0, import_kolmafia108.myHp)() >= goal;
}
function doRest() {
  if (auto_haveCrimboSkeleton() && (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("_knuckleboneRests")) < 5) {
    (0, import_kolmafia108.useFamiliar)($familiar`Skeleton of Crimbo Past`);
  }
  if (chateaumantegna_available()) {
    (0, import_kolmafia108.cliExecute)("outfit save Backup");
    chateaumantegna_nightstandSet();
    var restBonus = chateaumantegna_decorations();
    var bonus = import_kolmafia108.Stat.none;
    if (restBonus.has($item`electric muscle stimulator`)) {
      bonus = $stat`Muscle`;
    } else if (restBonus.has($item`foreign language tapes`)) {
      bonus = $stat`Mysticality`;
    } else if (restBonus.has($item`bowl of potpourri`)) {
      bonus = $stat`Moxie`;
    }
    var closet = false;
    var grab = import_kolmafia108.Item.none;
    var replace_1 = import_kolmafia108.Item.none;
    switch (bonus) {
      case $stat`Muscle`:
        replace_1 = (0, import_kolmafia108.equippedItem)($slot`off-hand`);
        grab = $item`fake washboard`;
        break;
      case $stat`Mysticality`:
        replace_1 = (0, import_kolmafia108.equippedItem)($slot`off-hand`);
        grab = $item`basaltamander buckler`;
        break;
      case $stat`Moxie`:
        replace_1 = (0, import_kolmafia108.equippedItem)($slot`weapon`);
        grab = $item`backwoods banjo`;
        break;
    }
    if (grab !== import_kolmafia108.Item.none && possessEquipment(grab) && replace_1 !== grab && (0, import_kolmafia108.canEquip)(grab)) {
      (0, import_kolmafia108.equip)(grab);
    }
    if (!possessEquipment(grab) && replace_1 !== grab && (0, import_kolmafia108.closetAmount)(grab) > 0 && (0, import_kolmafia108.canEquip)(grab)) {
      closet = true;
      (0, import_kolmafia108.takeCloset)(1, grab);
      (0, import_kolmafia108.equip)(grab);
    }
    equipStatgainIncreasers$1(bonus, true);
    (0, import_kolmafia108.cliExecute)("rest chateau");
    if (replace_1 !== grab && replace_1 !== import_kolmafia108.Item.none) {
      (0, import_kolmafia108.equip)(replace_1);
    }
    (0, import_kolmafia108.cliExecute)("outfit Backup");
    if (closet) {
      if ((0, import_kolmafia108.itemAmount)(grab) > 0) {
        (0, import_kolmafia108.putCloset)(1, grab);
      }
    }
  } else if (is_professor()) {
    (0, import_kolmafia108.visitUrl)("place.php?whichplace=wereprof_cottage&action=wereprof_sleep");
  } else {
    (0, import_kolmafia108.setProperty)("restUsingChateau", false.toString());
    (0, import_kolmafia108.cliExecute)("rest");
    (0, import_kolmafia108.setProperty)("restUsingChateau", true.toString());
  }
  return (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("timesRested"));
}
function haveFreeRestAvailable() {
  if (auto_haveCincho() && auto_nextRestOverCinch()) {
    return false;
  }
  return (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("timesRested")) < (0, import_kolmafia108.totalFreeRests)();
}
function freeRestsRemaining() {
  if (auto_haveCincho() && auto_nextRestOverCinch()) {
    return 0;
  }
  return (0, import_kolmafia108.max)(0, (0, import_kolmafia108.totalFreeRests)() - (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("timesRested")));
}
function auto_potentialMaxFreeRests() {
  var potential = (0, import_kolmafia108.toInt)((0, import_kolmafia108.numericModifier)("Free Rests"));
  if (auto_canUseJuneCleaver() && !possessEquipment($item`mother's necklace`)) {
    potential += 5;
  }
  if (auto_haveBurningLeaves() && !($item`forest canopy bed`.toString() in (0, import_kolmafia108.getCampground)())) {
    potential += 5;
  }
  return potential;
}
function haveAnyIotmAlternativeRestSiteAvailable() {
  return chateaumantegna_available() || auto_campawayAvailable();
}
function doFreeRest() {
  if (haveFreeRestAvailable()) {
    var restorableMp = (0, import_kolmafia108.myMaxmp)() - (0, import_kolmafia108.myMp)();
    var mpToBurn = 0;
    if (chateaumantegna_available() || auto_campawayAvailable()) {
      mpToBurn = 100 - restorableMp;
    } else if ((0, import_kolmafia108.getDwelling)() === $item`Frobozz Real-Estate Company Instant House (TM)`) {
      mpToBurn = 40 - restorableMp;
    } else if ((0, import_kolmafia108.getDwelling)() === $item`Newbiesport™ tent`) {
      mpToBurn = 10 - restorableMp;
    } else {
      mpToBurn = 5 - restorableMp;
    }
    if (mpToBurn > 0) {
      auto_burnMP(mpToBurn);
    }
    var hpMp_before = (0, import_kolmafia108.myHp)() + (0, import_kolmafia108.myMp)();
    var rest_count = (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("timesRested"));
    var result_1 = doRest() > rest_count;
    var hpMp_after = (0, import_kolmafia108.myHp)() + (0, import_kolmafia108.myMp)();
    var success = hpMp_after > hpMp_before || result_1;
    return success;
  }
  return false;
}
function hp_regen() {
  return 0.5 * ((0, import_kolmafia108.numericModifier)("HP Regen Min") + (0, import_kolmafia108.numericModifier)("HP Regen Max"));
}
function uneffect(toRemove) {
  if ((0, import_kolmafia108.haveEffect)(toRemove) === 0) {
    return true;
  }
  if ($effects`Driving Intimidatingly, Driving Obnoxiously, Driving Observantly, Driving Quickly, Driving Recklessly, Driving Safely, Driving Stealthily, Driving Wastefully, Driving Waterproofly`.includes(
    toRemove
  ) && auto_get_campground().has($item`Asdon Martin keyfob (on ring)`)) {
    (0, import_kolmafia108.visitUrl)("campground.php?pwd=&preaction=undrive");
    return true;
  }
  if ((0, import_kolmafia108.cliExecute)(`uneffect ${toRemove}`)) {
    return true;
  }
  if ((0, import_kolmafia108.itemAmount)($item`soft green echo eyedrop antidote`) > 0) {
    (0, import_kolmafia108.visitUrl)(`uneffect.php?pwd=&using=Yep.&whicheffect=${(0, import_kolmafia108.toInt)(toRemove)}`);
    auto_log_info(
      "Effect removed by Soft Green Echo Eyedrop Antidote.",
      "blue"
    );
    return true;
  } else if ((0, import_kolmafia108.itemAmount)($item`ancient cure-all`) > 0) {
    (0, import_kolmafia108.visitUrl)(`uneffect.php?pwd=&using=Yep.&whicheffect=${(0, import_kolmafia108.toInt)(toRemove)}`);
    auto_log_info("Effect removed by Ancient Cure-All.", "blue");
    return true;
  }
  return false;
}

// src/autoscend/iotms/ttt.ts
var import_kolmafia109 = require("kolmafia");
function auto_haveARB() {
  return possessEquipment($item`Allied Radio Backpack`) && auto_is_valid($item`Allied Radio Backpack`);
}
function auto_canARBSupplyDrop() {
  return auto_ARBSupplyDropsLeft() > 0;
}
function auto_ARBSupplyDropsLeft() {
  if (!auto_is_valid($item`Allied Radio Backpack`)) {
    return 0;
  }
  var n_backpack_left = auto_haveARB() ? 3 - (0, import_kolmafia109.toInt)((0, import_kolmafia109.getProperty)("_alliedRadioDropsUsed")) : 0;
  return n_backpack_left + (0, import_kolmafia109.itemAmount)($item`handheld Allied radio`);
}
function ARBSupplyDrop(req) {
  if (!auto_canARBSupplyDrop()) {
    return false;
  }
  var radio = "";
  switch (req) {
    case "non-combat":
    case "nc":
    case "sniper support":
      radio = "sniper support";
      break;
    case "item drop":
    case "item":
    case "materiel intel":
      if ((0, import_kolmafia109.toBoolean)((0, import_kolmafia109.getProperty)("_alliedRadioMaterielIntel"))) {
        return false;
      }
      radio = "materiel intel";
      break;
    case "res":
    case "wsb":
      if ((0, import_kolmafia109.toBoolean)((0, import_kolmafia109.getProperty)("_alliedRadioWildsunBoon"))) {
        return false;
      }
      radio = "wildsun boon";
      break;
    case "food":
    case "rations":
      radio = "rations";
      break;
    case "drink":
    case "fuel":
      radio = "fuel";
      break;
    case "ellipsoidtine":
      radio = "ellipsoidtine";
      break;
    case "radio":
    default:
      radio = "radio";
      break;
  }
  if ((0, import_kolmafia109.alliedRadio)(radio)) {
    handleTracker$1(
      $item`Allied Radio Backpack`.toString(),
      radio,
      "auto_iotm_claim"
    );
    return true;
  }
  return false;
}

// src/autoscend/auto_powerlevel.ts
function isAboutToPowerlevel() {
  return (0, import_kolmafia111.toInt)((0, import_kolmafia111.getProperty)("auto_powerLevelLastLevel")) === (0, import_kolmafia111.myLevel)();
}
function disregardInstantKarma() {
  if (inAftercore()) {
    return true;
  }
  if ((0, import_kolmafia111.myLevel)() !== 13) {
    return true;
  }
  return (0, import_kolmafia111.toBoolean)((0, import_kolmafia111.getProperty)("auto_disregardInstantKarma"));
}
function auto_freeCombatsRemaining() {
  return auto_freeCombatsRemaining$1(false);
}
function auto_freeCombatsRemaining$1(print_remaining_fights) {
  if (in_avantGuard()) {
    return 0;
  }
  function logRemainingFights(msg) {
    if (!print_remaining_fights) {
      return;
    }
    (0, import_kolmafia111.print)(msg, "red");
  }
  var count_1 = 0;
  logRemainingFights("Remaining Free Fights:");
  if (!in_koe() && canChangeToFamiliar($familiar`Machine Elf`)) {
    var temp = 5 - (0, import_kolmafia111.toInt)((0, import_kolmafia111.getProperty)("_machineTunnelsAdv"));
    count_1 += temp;
    logRemainingFights(`Machine Elf = ${temp}`);
  }
  if (snojoFightAvailable()) {
    var _temp = 10 - (0, import_kolmafia111.toInt)((0, import_kolmafia111.getProperty)("_snojoFreeFights"));
    count_1 += _temp;
    logRemainingFights(`Snojo = ${_temp}`);
  }
  if (canChangeToFamiliar($familiar`God Lobster`) && disregardInstantKarma()) {
    var _temp2 = 3 - (0, import_kolmafia111.toInt)((0, import_kolmafia111.getProperty)("_godLobsterFights"));
    count_1 += _temp2;
    logRemainingFights(`God Lobster = ${_temp2}`);
  }
  if (neverendingPartyRemainingFreeFights() > 0) {
    var _temp3 = neverendingPartyRemainingFreeFights();
    count_1 += _temp3;
    logRemainingFights(`Neverending Party = ${_temp3}`);
  }
  if ((0, import_kolmafia111.toBoolean)((0, import_kolmafia111.getProperty)("_eldritchTentacleFought")) === false) {
    count_1++;
    logRemainingFights("Tent Tentacle = 1");
  }
  if (auto_have_skill($skill`Evoke Eldritch Horror`) && (0, import_kolmafia111.toBoolean)((0, import_kolmafia111.getProperty)("_eldritchHorrorEvoked")) === false) {
    count_1++;
    logRemainingFights("Evoke Eldritch = 1");
  }
  if (auto_canFightPiranhaPlant()) {
    var _temp4 = auto_piranhaPlantFightsRemaining();
    count_1 += _temp4;
    logRemainingFights(`Piranha Plant Fights = ${_temp4}`);
  }
  if (auto_canTendMushroomGarden()) {
    count_1++;
    logRemainingFights("Tend to Mushroom Garden = 1");
  }
  if (auto_hasSpeakEasy() && auto_remainingSpeakeasyFreeFights() > 0) {
    var _temp5 = auto_remainingSpeakeasyFreeFights();
    count_1 += _temp5;
    logRemainingFights(`Oliver's Place = ${_temp5}`);
  }
  if (auto_haveBurningLeaves()) {
    var _temp6 = (0, import_kolmafia111.min)(
      auto_remainingBurningLeavesFights(),
      (0, import_kolmafia111.floor)((0, import_kolmafia111.itemAmount)($item`inflammable leaf`) / 11)
    );
    count_1 += _temp6;
    logRemainingFights(`Burning Leaves = ${_temp6}`);
  }
  var free_candy = freeCandyFightsLeft();
  count_1 += free_candy;
  logRemainingFights(`Trick or Treating = ${free_candy}`);
  return count_1;
}

// src/autoscend/iotms/mr2014.ts
var $_f_importantMonsters;
$_f_importantMonsters ?? ($_f_importantMonsters = import_kolmafia112.Monster.get(
  [
    // L4:
    "beanbat",
    // L5:
    "Knob Goblin Harem Girl",
    // L7:
    "dirty old lihc",
    // L8:
    "dairy goat",
    // L9:
    "bearpig topiary animal",
    "elephant (meatcar?) topiary animal",
    "spider (duck?) topiary animal",
    // L10:
    "Quiet Healer",
    "Burly Sidekick",
    // L11:
    // Hidden City:
    "baa-relief sheep",
    "pygmy bowler",
    "pygmy shaman",
    "pygmy janitor",
    "pygmy witch accountant",
    "pygmy witch surgeon",
    // Spookyraven:
    "animated ornate nightstand",
    "elegant animated nightstand",
    "cabinet of Dr. Limpieza",
    "possessed wine rack",
    "monstrous boiler",
    "writing desk",
    "chalkdust wraith",
    "banshee librarian",
    // Palindome:
    "whitesnake",
    "white lion",
    // Zeppelin:
    "man with the red buttons",
    "red butler",
    "red skeleton",
    // Desert:
    "blur",
    "tomb rat",
    // L12:
    "batwinged gremlin (tool)",
    "erudite gremlin (tool)",
    "spider gremlin (tool)",
    "vegetable gremlin (tool)"
  ]
));

// src/autoscend/auto_familiar.ts
function is100FamRun() {
  if ((0, import_kolmafia113.toFamiliar)((0, import_kolmafia113.getProperty)("auto_100familiar")) === import_kolmafia113.Familiar.none) {
    return false;
  }
  return true;
}
function isAttackFamiliar(fam) {
  if (fam.physicalDamage || fam.elementalDamage) {
    return true;
  }
  if ($familiars`Mini-Crimbot, El Vibrato Megadrone, Reanimated Reanimator, Comma Chameleon, Mad Hatrack, Fancypants Scarecrow`.includes(
    fam
  )) {
    return true;
  }
  if (fam === $familiar`Mini-Adventurer`) {
    var miniAdvClass = (0, import_kolmafia113.toInt)((0, import_kolmafia113.getProperty)("miniAdvClass"));
    if (miniAdvClass === 1 || miniAdvClass === 2 && (0, import_kolmafia113.myLevel)() >= 5 || miniAdvClass === 3 && (0, import_kolmafia113.myLevel)() >= 15 || miniAdvClass === 4 && (0, import_kolmafia113.myLevel)() >= 5 || miniAdvClass === 5 && (0, import_kolmafia113.myLevel)() >= 10) {
      return true;
    }
    return false;
  }
  if (fam === $familiar`Reagnimated Gnome`) {
    if (possessEquipment($item`gnomish athlete's foot`)) {
      return true;
    }
    return false;
  }
  if (import_kolmafia113.Familiar.get([
    "Doppelshifter",
    //random familiar every fight. can be an attack familiar
    "Dandy Lion"
    //attacks if you equip a whip.
  ]).includes(fam)) {
    return true;
  }
  return false;
}
function auto_famKill(fam, place) {
  if (!isAttackFamiliar(fam)) {
    return false;
  }
  var passiveDamage = (0, import_kolmafia113.toInt)(
    (0, import_kolmafia113.numericModifier)("Damage Aura") + (0, import_kolmafia113.numericModifier)("Sporadic Damage Aura ") + (0, import_kolmafia113.numericModifier)("Thorns") + (0, import_kolmafia113.numericModifier)("Sporadic Thorns")
  );
  var _iterator = _createForOfIteratorHelper(
    auto_combat_appearance_rates$1(place)
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray(_step.value, 2), mon = _step$value[0], freq = _step$value[1];
      if (freq <= 0) {
        continue;
      }
      if (mon !== import_kolmafia113.Monster.none && (0, import_kolmafia113.monsterHp)(mon) < (0, import_kolmafia113.floor)(1.5 * (auto_famWeight$1(fam) + 3)) + passiveDamage) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
function pathHasFamiliar() {
  if (is_boris() || is_jarlsberg() || is_pete() || isActuallyEd() || in_darkGyffte() || in_lta() || in_pokefam()) {
    return false;
  }
  if (in_robot() && (0, import_kolmafia113.toInt)((0, import_kolmafia113.getProperty)("youRobotTop")) !== 2) {
    return false;
  }
  return true;
}
function pathAllowsChangingFamiliar() {
  if (!pathHasFamiliar()) {
    return false;
  }
  if (in_quantumTerrarium()) {
    return false;
  }
  return true;
}
function auto_have_familiar(fam) {
  if (!pathHasFamiliar()) {
    return false;
  }
  if (!auto_is_valid$1(fam)) {
    return false;
  }
  var blacklist = /* @__PURE__ */ new Map();
  if ((0, import_kolmafia113.getProperty)("auto_blacklistFamiliar") !== "") {
    var noFams = new Map(
      (0, import_kolmafia113.splitString)((0, import_kolmafia113.getProperty)("auto_blacklistFamiliar"), ";").map(
        (_v, _i) => [
          _i,
          _v
        ]
      )
    );
    var _iterator2 = _createForOfIteratorHelper(
      noFams
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2), index = _step2$value[0], fam_1 = _step2$value[1];
        blacklist.set((0, import_kolmafia113.toFamiliar)(trim(fam_1)), 1);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (blacklist.has(fam)) {
    return false;
  }
  return (0, import_kolmafia113.haveFamiliar)(fam);
}
function canChangeFamiliar() {
  if (!pathHasFamiliar() || !pathAllowsChangingFamiliar()) {
    return false;
  }
  if (is100FamRun()) {
    return false;
  }
  if ((0, import_kolmafia113.toBoolean)((0, import_kolmafia113.getProperty)("auto_disableFamiliarChanging"))) {
    return false;
  }
  return true;
}
function canChangeToFamiliar(target) {
  if ((0, import_kolmafia113.myFamiliar)() === target) {
    return true;
  }
  if ((0, import_kolmafia113.toBoolean)((0, import_kolmafia113.getProperty)("auto_disableFamiliarChanging"))) {
    return false;
  }
  if (!auto_have_familiar(target)) {
    return false;
  }
  if (!auto_is_valid$1(target)) {
    return false;
  }
  if ((0, import_kolmafia113.toFamiliar)((0, import_kolmafia113.getProperty)("auto_100familiar")) === target) {
    return true;
  }
  if (kolhs_mandatorySchool() || (0, import_kolmafia113.getProperty)(
    //we are in kolhs and are adventuring in a school zone
    "_NC772_directive"
  ) !== "") {
    if (target !== $familiar`Steam-Powered Cheerleader` && (0, import_kolmafia113.familiarWeight)(
      //sole exception to the rule
      target
    ) > 10) {
      return false;
    }
  }
  if (in_avantGuard()) {
    if ($familiar`Burly Bodyguard` === target) {
      return true;
    } else if ((0, import_kolmafia113.toBoolean)((0, import_kolmafia113.getProperty)("auto_nonAdvLoc"))) {
      if ($familiar`Gelatinous Cubeling` === target && (0, import_kolmafia113.inHardcore)()) {
        return true;
      } else if ($familiars`Cookbookbat, Mini Kiwi`.includes(target)) {
        return true;
      }
    }
    return false;
  }
  if (target === import_kolmafia113.Familiar.none) {
    return false;
  }
  if (target === (0, import_kolmafia113.myFamiliar)() && in_quantumTerrarium()) {
    return true;
  }
  if (!canChangeFamiliar()) {
    return false;
  }
  if (target === (0, import_kolmafia113.myEnthronedFamiliar)() || target === (0, import_kolmafia113.myBjornedFamiliar)()) {
    return false;
  }
  return true;
}
function handleFamiliar$1(fam) {
  if (!pathHasFamiliar() || !pathAllowsChangingFamiliar()) {
    return false;
  }
  if (fam === import_kolmafia113.Familiar.none) {
    return false;
  }
  if ((0, import_kolmafia113.toFamiliar)((0, import_kolmafia113.getProperty)("auto_familiarChoice")) === fam) {
    return true;
  }
  if (fam === $familiar`Ms. Puck Man` && !auto_have_familiar($familiar`Ms. Puck Man`) && auto_have_familiar($familiar`Puck Man`)) {
    fam = $familiar`Puck Man`;
  }
  if (fam === $familiar`Puck Man` && !auto_have_familiar($familiar`Puck Man`) && auto_have_familiar($familiar`Ms. Puck Man`)) {
    fam = $familiar`Ms. Puck Man`;
  }
  if (!canChangeToFamiliar(fam)) {
    return false;
  }
  if ((0, import_kolmafia113.myBjornedFamiliar)() === fam) {
    return false;
  }
  (0, import_kolmafia113.setProperty)("auto_familiarChoice", fam.toString());
  (0, import_kolmafia113.setProperty)("_auto_thisLoopHandleFamiliar", true.toString());
  return true;
}
function auto_famWeight(fam, include_equip) {
  var famEquipWeight = 0;
  if (fam === import_kolmafia113.Familiar.none) {
    return 0;
  }
  if (!include_equip) {
    famEquipWeight = (0, import_kolmafia113.toInt)(
      (0, import_kolmafia113.numericModifier)((0, import_kolmafia113.familiarEquippedEquipment)(fam), "Familiar Weight")
    );
  }
  return (0, import_kolmafia113.familiarWeight)(fam) + (0, import_kolmafia113.weightAdjustment)() - famEquipWeight;
}
function auto_famWeight$1(fam) {
  return auto_famWeight(fam, true);
}

// src/autoscend/auto_equipment.ts
function getMaximizeSlotPref(s) {
  return `_auto_maximize_equip_${s.toString()}`;
}
function getTentativeMaximizeEquip(s) {
  return (0, import_kolmafia114.toItem)((0, import_kolmafia114.getProperty)(getMaximizeSlotPref(s)));
}
function autoEquip(s, it) {
  if (!possessEquipment(it) || !auto_can_equip(it)) {
    return false;
  }
  if (s === $slot`acc3` && it.toString() === (0, import_kolmafia114.getProperty)("_auto_maximize_equip_acc1") || it.toString() === (0, import_kolmafia114.getProperty)("_auto_maximize_equip_acc2") || it.toString() === (0, import_kolmafia114.getProperty)("_auto_maximize_equip_acc3")) {
    auto_log_warning$1(`Ignoring duplicate equip of accessory ${it}`);
    return true;
  }
  var acc1_empty = "" === (0, import_kolmafia114.getProperty)("_auto_maximize_equip_acc1") && !(0, import_kolmafia114.containsText)((0, import_kolmafia114.getProperty)("auto_maximize_current"), "acc1");
  var acc2_empty = "" === (0, import_kolmafia114.getProperty)("_auto_maximize_equip_acc2") && !(0, import_kolmafia114.containsText)((0, import_kolmafia114.getProperty)("auto_maximize_current"), "acc2");
  var acc3_empty = "" === (0, import_kolmafia114.getProperty)("_auto_maximize_equip_acc3") && !(0, import_kolmafia114.containsText)((0, import_kolmafia114.getProperty)("auto_maximize_current"), "acc3");
  if ((0, import_kolmafia114.itemType)(it) === "accessory" && s === $slot`acc3` && !acc3_empty) {
    if (acc2_empty) {
      s = $slot`acc2`;
    } else if (acc1_empty) {
      s = $slot`acc1`;
    } else {
      auto_log_warning(
        `We can not equip ${it} because our slots are all full.`,
        "red"
      );
      return false;
    }
  }
  auto_log_info(`Equipping ${it} to slot ${s}`, "gold");
  return tryAddItemToMaximize(s, it);
}
function autoEquip$1(it) {
  return autoEquip((0, import_kolmafia114.toSlot)(it), it);
}
function autoForceEquip(s, it, noMaximize) {
  if (it === import_kolmafia114.Item.none) {
    return (0, import_kolmafia114.equip)(s, it);
  }
  if (!possessEquipment(it) || !auto_can_equip(it)) {
    return false;
  }
  if ($slot`off-hand` === s) {
    if ((0, import_kolmafia114.weaponHands)((0, import_kolmafia114.equippedItem)($slot`weapon`)) > 1) {
      if (!noMaximize) {
        removeFromMaximize(`+equip ${(0, import_kolmafia114.equippedItem)($slot`weapon`)}`);
      }
      (0, import_kolmafia114.equip)($slot`weapon`, import_kolmafia114.Item.none);
    }
    if (!noMaximize) {
      removeFromMaximize(`-equip ${it}`);
      addToMaximize("-off-hand, 1hand");
    }
    return (0, import_kolmafia114.equip)($slot`off-hand`, it);
  }
  if ((0, import_kolmafia114.equip)(s, it)) {
    if (!noMaximize) {
      removeFromMaximize(`-equip ${it}`);
      addToMaximize(`-${s}`);
    }
    return true;
  }
  return false;
}
function autoForceEquip$1(s, it) {
  return autoForceEquip(s, it, false);
}
function autoForceEquip$2(it, noMaximize) {
  if ((0, import_kolmafia114.toSlot)(it) === $slot`acc1`) {
    return autoForceEquip($slot`acc3`, it, noMaximize);
  }
  return autoForceEquip((0, import_kolmafia114.toSlot)(it), it, noMaximize);
}
function autoOutfit(toWear) {
  if (!possessOutfit(toWear, true)) {
    return false;
  }
  auto_log_debug(`Adding outfit "${toWear}" to maximizer statement`, "gold");
  var CommonOutfitAccessories = $items`eXtreme mittens, bejeweled pledge pin, round purple sunglasses, Oscus's pelt, stuffed shoulder parrot`;
  var pass_1 = true;
  var _iterator = _createForOfIteratorHelper(
    (0, import_kolmafia114.outfitPieces)(toWear).entries()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray(_step.value, 2), i = _step$value[0], it = _step$value[1];
      if (CommonOutfitAccessories.includes(it)) {
        pass_1 = pass_1 && autoEquip($slot`acc3`, it);
      } else {
        pass_1 = pass_1 && autoEquip$1(it);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return pass_1;
}
function tryAddItemToMaximize(s, it) {
  if (!$slots`hat, back, shirt, weapon, off-hand, pants, acc1, acc2, acc3, familiar`.includes(
    s
  )) {
    auto_log_error(`But ${s} is an invalid equip slot... What?`);
    return false;
  }
  switch (s) {
    case $slot`weapon`:
      if ((0, import_kolmafia114.weaponHands)(it) > 1) {
        (0, import_kolmafia114.setProperty)(getMaximizeSlotPref($slot`off-hand`), "");
      }
      break;
    case $slot`off-hand`:
      if ((0, import_kolmafia114.weaponHands)(getTentativeMaximizeEquip($slot`weapon`)) > 1) {
        (0, import_kolmafia114.setProperty)(getMaximizeSlotPref($slot`weapon`), "");
      }
      break;
  }
  var itString = it.toString();
  itString = (0, import_kolmafia114.replaceString)(itString, ",", "");
  (0, import_kolmafia114.setProperty)(getMaximizeSlotPref(s), itString);
  return true;
}
function speculatedMaximizerEquipment(statement) {
  var res = /* @__PURE__ */ new Map();
  var weaponPicked = false;
  var offhandPicked = false;
  var _iterator4 = _createForOfIteratorHelper(
    (0, import_kolmafia114.maximize)(statement, 0, 0, true, true).entries()
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _step4$value = _slicedToArray(_step4.value, 2), i = _step4$value[0], entry = _step4$value[1];
      if (i > 15) {
        break;
      }
      var maximizerText = entry.display;
      if ((0, import_kolmafia114.containsText)(maximizerText, "unequip ")) {
        continue;
      }
      if (!(0, import_kolmafia114.containsText)(maximizerText, "equip ")) {
        var keeping = entry.command === "" && (0, import_kolmafia114.containsText)(maximizerText, "keep ");
        if (!keeping) {
          continue;
        }
      }
      var maximizerItem = entry.item;
      if (maximizerItem === import_kolmafia114.Item.none) {
        continue;
      }
      var maximizerItemSlot = (0, import_kolmafia114.toSlot)(maximizerItem);
      if (maximizerItemSlot === import_kolmafia114.Slot.none) {
        continue;
      }
      var overrideSlot = import_kolmafia114.Slot.none;
      if (maximizerItemSlot === $slot`weapon`) {
        if (weaponPicked) {
          if (!offhandPicked && auto_have_skill($skill`Double-Fisted Skull Smashing`) && (0, import_kolmafia114.weaponType)(maximizerItem) === (0, import_kolmafia114.weaponType)(
            res.get($slot`weapon`) ?? res.set($slot`weapon`, import_kolmafia114.Item.none).get($slot`weapon`)
          ) && (0, import_kolmafia114.itemType)(maximizerItem) !== "chefstaff") {
            overrideSlot = $slot`off-hand`;
            offhandPicked = true;
          } else if ((0, import_kolmafia114.myFamiliar)() === $familiar`Disembodied Hand` && (0, import_kolmafia114.weaponHands)(maximizerItem) === 1 && (0, import_kolmafia114.itemType)(maximizerItem) !== "chefstaff" && (0, import_kolmafia114.itemType)(maximizerItem) !== "accordion") {
            overrideSlot = $slot`familiar`;
          } else {
            auto_log_debug(
              "There are more weapons than we can wear in speculatedMaximizerEquipment, something must be wrong",
              "gold"
            );
            continue;
          }
        } else {
          weaponPicked = true;
          if ((0, import_kolmafia114.weaponHands)(maximizerItem) > 1) {
            offhandPicked = true;
          }
        }
      } else if (maximizerItemSlot === $slot`off-hand`) {
        if (offhandPicked) {
          if ((0, import_kolmafia114.myFamiliar)() === $familiar`Left-Hand Man`) {
            overrideSlot = $slot`familiar`;
          } else {
            auto_log_debug(
              "Off-hand slot is getting more than one use in speculatedMaximizerEquipment but familiar is not Left-Hand Man, something must be wrong",
              "gold"
            );
            continue;
          }
        } else {
          offhandPicked = true;
        }
      } else if (maximizerItemSlot === $slot`acc1` && (res.get($slot`acc1`) ?? res.set($slot`acc1`, import_kolmafia114.Item.none).get($slot`acc1`)) !== import_kolmafia114.Item.none) {
        if ((res.get($slot`acc2`) ?? res.set($slot`acc2`, import_kolmafia114.Item.none).get($slot`acc2`)) !== import_kolmafia114.Item.none) {
          overrideSlot = $slot`acc3`;
        } else {
          overrideSlot = $slot`acc2`;
        }
      }
      if (overrideSlot !== import_kolmafia114.Slot.none) {
        maximizerItemSlot = overrideSlot;
      }
      if ((res.get(maximizerItemSlot) ?? res.set(maximizerItemSlot, import_kolmafia114.Item.none).get(maximizerItemSlot)) !== import_kolmafia114.Item.none) {
        auto_log_debug(
          `Duplicate entry skipped for slot ${maximizerItemSlot.toString()} in speculatedMaximizerEquipment, something must be wrong`,
          "gold"
        );
        continue;
      }
      res.set(maximizerItemSlot, maximizerItem);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return res;
}
function equipStatgainIncreasers(increaseThisStat, alwaysEquip) {
  if (auto_ignoreExperience()) {
    return;
  }
  var maximizerStatement = "";
  var _iterator5 = _createForOfIteratorHelper(
    increaseThisStat.keys()
  ), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var st = _step5.value;
      if (!(increaseThisStat.get(st) ?? increaseThisStat.set(st, false).get(st))) {
        continue;
      }
      var statWeight = "";
      if (st === (0, import_kolmafia114.myPrimestat)()) {
        if (disregardInstantKarma()) {
          statWeight = "2";
        }
      } else if ((0, import_kolmafia114.myBasestat)((0, import_kolmafia114.myPrimestat)()) > 122 && (0, import_kolmafia114.myBasestat)(st) < 70) {
        if (st === $stat`Mysticality` || st === $stat`Moxie`) {
          statWeight = "3";
        }
      }
      maximizerStatement += `${statWeight}${st.toString()} experience percent,`;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var simulatedEquipment = speculatedMaximizerEquipment(maximizerStatement);
  var canIncreaseStatgains = false;
  var _iterator6 = _createForOfIteratorHelper(
    increaseThisStat.keys()
  ), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var _st = _step6.value;
      if (!(increaseThisStat.get(_st) ?? increaseThisStat.set(_st, false).get(_st))) {
        continue;
      }
      var modifierString = `${_st.toString()} experience percent`;
      if (simValue(modifierString) > (0, import_kolmafia114.numericModifier)(modifierString)) {
        canIncreaseStatgains = true;
        break;
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  if (!canIncreaseStatgains) {
    return;
  }
  var statgainIncreasers = /* @__PURE__ */ new Map();
  var _iterator7 = _createForOfIteratorHelper(
    simulatedEquipment.keys()
  ), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var _sl = _step7.value;
      var _iterator10 = _createForOfIteratorHelper(
        increaseThisStat.keys()
      ), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          var _st2 = _step10.value;
          if (!(increaseThisStat.get(_st2) ?? increaseThisStat.set(_st2, false).get(_st2))) {
            continue;
          }
          if ((0, import_kolmafia114.numericModifier)(
            simulatedEquipment.get(_sl) ?? simulatedEquipment.set(_sl, import_kolmafia114.Item.none).get(_sl),
            `${_st2.toString()} experience percent`
          ) !== 0) {
            statgainIncreasers.set(
              _sl,
              simulatedEquipment.get(_sl) ?? simulatedEquipment.set(_sl, import_kolmafia114.Item.none).get(_sl)
            );
            break;
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  if ((statgainIncreasers.get($slot`off-hand`) ?? statgainIncreasers.set($slot`off-hand`, import_kolmafia114.Item.none).get($slot`off-hand`)) !== import_kolmafia114.Item.none && (statgainIncreasers.get($slot`weapon`) ?? statgainIncreasers.set($slot`weapon`, import_kolmafia114.Item.none).get($slot`weapon`)) === import_kolmafia114.Item.none) {
    var currentWeaponIncompatibleWithSimulatedOffHand = (0, import_kolmafia114.weaponHands)((0, import_kolmafia114.equippedItem)($slot`weapon`)) > 1 || (0, import_kolmafia114.toSlot)(
      statgainIncreasers.get($slot`off-hand`) ?? statgainIncreasers.set($slot`off-hand`, import_kolmafia114.Item.none).get($slot`off-hand`)
    ) === $slot`weapon` && (0, import_kolmafia114.weaponType)(
      statgainIncreasers.get($slot`off-hand`) ?? statgainIncreasers.set($slot`off-hand`, import_kolmafia114.Item.none).get($slot`off-hand`)
    ) !== (0, import_kolmafia114.weaponType)((0, import_kolmafia114.equippedItem)($slot`weapon`));
    if (currentWeaponIncompatibleWithSimulatedOffHand) {
      statgainIncreasers.set(
        $slot`weapon`,
        simulatedEquipment.get($slot`weapon`) ?? simulatedEquipment.set($slot`weapon`, import_kolmafia114.Item.none).get($slot`weapon`)
      );
    }
  } else if ((statgainIncreasers.get($slot`weapon`) ?? statgainIncreasers.set($slot`weapon`, import_kolmafia114.Item.none).get($slot`weapon`)) !== import_kolmafia114.Item.none && (statgainIncreasers.get($slot`off-hand`) ?? statgainIncreasers.set($slot`off-hand`, import_kolmafia114.Item.none).get($slot`off-hand`)) === import_kolmafia114.Item.none && (0, import_kolmafia114.toSlot)((0, import_kolmafia114.equippedItem)($slot`off-hand`)) === $slot`weapon`) {
    var currentOffHandIncompatibleWithSimulatedWeapon = (0, import_kolmafia114.weaponType)(
      statgainIncreasers.get($slot`weapon`) ?? statgainIncreasers.set($slot`weapon`, import_kolmafia114.Item.none).get($slot`weapon`)
    ) !== (0, import_kolmafia114.weaponType)((0, import_kolmafia114.equippedItem)($slot`off-hand`));
    if (currentOffHandIncompatibleWithSimulatedWeapon) {
      statgainIncreasers.set(
        $slot`off-hand`,
        simulatedEquipment.get($slot`off-hand`) ?? simulatedEquipment.set($slot`off-hand`, import_kolmafia114.Item.none).get($slot`off-hand`)
      );
    }
  }
  var HPlost = 0;
  var mostHPlost = 0;
  var MPlost = 0;
  var mostMPlost = 0;
  var speculateOneItem = "";
  var speculateAllItems = "";
  var _iterator8 = _createForOfIteratorHelper(
    statgainIncreasers.keys()
  ), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var _sl2 = _step8.value;
      speculateOneItem = `equip ${_sl2.toString()} ${(statgainIncreasers.get(_sl2) ?? statgainIncreasers.set(_sl2, import_kolmafia114.Item.none).get(_sl2)).toString()}; `;
      (0, import_kolmafia114.cliExecute)(`speculate quiet; ${speculateOneItem}`);
      HPlost = (0, import_kolmafia114.toInt)((0, import_kolmafia114.myHp)() - simValue("Buffed HP Maximum"));
      MPlost = (0, import_kolmafia114.toInt)((0, import_kolmafia114.myMp)() - simValue("Buffed MP Maximum"));
      if (HPlost <= 0 && MPlost <= 0) {
        (0, import_kolmafia114.equip)(
          statgainIncreasers.get(_sl2) ?? statgainIncreasers.set(_sl2, import_kolmafia114.Item.none).get(_sl2),
          _sl2
        );
        continue;
      }
      speculateAllItems += speculateOneItem;
      if (speculateAllItems !== speculateOneItem) {
        (0, import_kolmafia114.cliExecute)(`speculate quiet; ${speculateAllItems}`);
        HPlost = (0, import_kolmafia114.toInt)((0, import_kolmafia114.myHp)() - simValue("Buffed HP Maximum"));
        MPlost = (0, import_kolmafia114.toInt)((0, import_kolmafia114.myMp)() - simValue("Buffed MP Maximum"));
      }
      if (HPlost > mostHPlost) {
        mostHPlost = HPlost;
      }
      if (MPlost > mostMPlost) {
        mostMPlost = MPlost;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  if (mostHPlost === 0 && mostMPlost === 0) {
    auto_log_debug(
      "Done increasing incoming stat gains using equipment",
      "gold"
    );
    return;
  }
  var targetedHP = (0, import_kolmafia114.myHp)() + mostHPlost;
  var targetedMP = (0, import_kolmafia114.myMp)() + mostMPlost;
  maximizerStatement = `HP ${targetedHP}min ${targetedHP}max, MP ${targetedMP}min ${targetedMP}max,`;
  var _iterator9 = _createForOfIteratorHelper(
    statgainIncreasers.keys()
  ), _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
      var _sl3 = _step9.value;
      maximizerStatement += `-${_sl3.toString()},`;
      if ((0, import_kolmafia114.toSlot)(
        statgainIncreasers.get(_sl3) ?? statgainIncreasers.set(_sl3, import_kolmafia114.Item.none).get(_sl3)
      ) === $slot`weapon`) {
        if ((0, import_kolmafia114.weaponHands)(
          statgainIncreasers.get(_sl3) ?? statgainIncreasers.set(_sl3, import_kolmafia114.Item.none).get(_sl3)
        ) > 1) {
          maximizerStatement += "-off-hand,";
        }
        if ((0, import_kolmafia114.weaponType)(
          statgainIncreasers.get(_sl3) ?? statgainIncreasers.set(_sl3, import_kolmafia114.Item.none).get(_sl3)
        ) === $stat`Moxie`) {
          maximizerStatement += "-melee,";
        } else {
          maximizerStatement += "+melee,";
        }
      }
      if (_sl3 === $slot`off-hand` && (statgainIncreasers.get($slot`weapon`) ?? statgainIncreasers.set($slot`weapon`, import_kolmafia114.Item.none).get($slot`weapon`)) === import_kolmafia114.Item.none) {
        maximizerStatement += "1handed,";
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  if (!(0, import_kolmafia114.maximize)(maximizerStatement, true)) {
    if (!alwaysEquip) {
      return;
    }
  }
  auto_log_info(
    "Trying to put on some more equipment first to avoid losing HP or MP before equipping to increase incoming statgains",
    "blue"
  );
  simulatedEquipment.clear();
  simulatedEquipment = speculatedMaximizerEquipment(maximizerStatement);
  var _iterator0 = _createForOfIteratorHelper(
    simulatedEquipment.keys()
  ), _step0;
  try {
    for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
      var _sl4 = _step0.value;
      speculateOneItem = `equip ${_sl4.toString()} ${(simulatedEquipment.get(_sl4) ?? simulatedEquipment.set(_sl4, import_kolmafia114.Item.none).get(_sl4)).toString()}; `;
      (0, import_kolmafia114.cliExecute)(`speculate quiet; ${speculateOneItem}`);
      if (simValue("Buffed HP Maximum") < (0, import_kolmafia114.myHp)()) {
        continue;
      }
      if (simValue("Buffed MP Maximum") < (0, import_kolmafia114.myMp)()) {
        continue;
      }
      (0, import_kolmafia114.equip)(
        simulatedEquipment.get(_sl4) ?? simulatedEquipment.set(_sl4, import_kolmafia114.Item.none).get(_sl4),
        _sl4
      );
    }
  } catch (err) {
    _iterator0.e(err);
  } finally {
    _iterator0.f();
  }
  var doEquips = false;
  if ((0, import_kolmafia114.myMaxhp)() >= targetedHP && (0, import_kolmafia114.myMaxmp)() >= targetedMP) {
    doEquips = true;
  } else if (alwaysEquip) {
    auto_burnMP(targetedMP - (0, import_kolmafia114.myMaxmp)());
    doEquips = true;
  }
  if (doEquips) {
    var _iterator1 = _createForOfIteratorHelper(
      statgainIncreasers.keys()
    ), _step1;
    try {
      for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
        var sl = _step1.value;
        (0, import_kolmafia114.equip)(
          statgainIncreasers.get(sl) ?? statgainIncreasers.set(sl, import_kolmafia114.Item.none).get(sl),
          sl
        );
      }
    } catch (err) {
      _iterator1.e(err);
    } finally {
      _iterator1.f();
    }
  }
}
function equipStatgainIncreasers$1(increaseThisStat, alwaysEquip) {
  var increaseThisStatAggregate = /* @__PURE__ */ new Map();
  increaseThisStatAggregate.set(increaseThisStat, true);
  equipStatgainIncreasers(increaseThisStatAggregate, alwaysEquip);
}
function addBonusToMaximize(it, amt) {
  if (possessEquipment(it) && auto_can_equip(it)) {
    addToMaximize(`+${amt}bonus ${it}`);
  }
}
function finalizeMaximize(speculative) {
  if (auto_hasStillSuit() && pathHasFamiliar() && (0, import_kolmafia114.inebrietyLimit)() > 0 && !in_kolhs() && !in_small()) {
    addBonusToMaximize(
      $item`tiny stillsuit`,
      100 + (0, import_kolmafia114.toInt)(100 * (0, import_kolmafia114.min)(1, 10 / (0, import_kolmafia114.max)(1, auto_expectedStillsuitAdvs())))
    );
  }
  if (speculative && auto_haveCrystalBall()) {
    simulatePreAdvForCrystalBall((0, import_kolmafia114.myLocation)());
  }
  var nextMonster = (0, import_kolmafia114.toMonster)((0, import_kolmafia114.getProperty)("auto_nextEncounter"));
  var nextMonsterIsFree = nextMonster !== import_kolmafia114.Monster.none && isFreeMonster(nextMonster) || (0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("breathitinCharges")) > 0 && (0, import_kolmafia114.myLocation)().environment === "outdoor";
  if (auto_haveKramcoSausageOMatic()) {
    var saveGoblinForDelay = auto_sausageFightsToday() < 8 && !zone_delay((0, import_kolmafia114.myLocation)())._boolean && solveDelayZone$1() !== import_kolmafia114.Location.none;
    var dontSausageBackups = auto_backupTarget() && !$monsters`sausage goblin, Eldritch Tentacle`.includes(
      (0, import_kolmafia114.toMonster)((0, import_kolmafia114.getProperty)("lastCopyableMonster"))
    );
    if (saveGoblinForDelay || dontSausageBackups || (0, import_kolmafia114.toBoolean)((0, import_kolmafia114.getProperty)("mappingMonsters"))) {
      addToMaximize(
        `-equip ${wrap_item($item`Kramco Sausage-o-Matic™`).toString()}`
      );
    }
  }
  if (auto_haveMobiusRing()) {
    if (auto_timeCopFights() >= 11) {
      if ((0, import_kolmafia114.toBoolean)((0, import_kolmafia114.getProperty)("mappingMonsters")) || auto_backupTarget() || !(0, import_kolmafia114.inHardcore)()) {
        addToMaximize(`-equip ${$item`Möbius ring`.toString()}`);
      }
    } else {
      var mobius_bonus = 200;
      if (in_amw()) {
        mobius_bonus = 1e3;
      }
      if (!(0, import_kolmafia114.toBoolean)((0, import_kolmafia114.getProperty)("_mobiusRingPrimed"))) {
        addBonusToMaximize($item`Möbius ring`, mobius_bonus);
      } else if (!nextMonsterIsFree && zone_delay(
        // If the current zone has any delay, equip the ring for a chance at a free time cop or +paradoxicity
        // time cop chance is conjectured to be a flat chance, doubling every 5 paradoxicity, starting at 2%
        // we probably want to target 15 for 16% chance
        (0, import_kolmafia114.myLocation)()
      )._boolean) {
        addBonusToMaximize($item`Möbius ring`, 200);
      } else if (auto_timeIsAStripPossible()) {
        addBonusToMaximize($item`Möbius ring`, mobius_bonus);
      }
    }
  }
  if (auto_haveCursedMagnifyingGlass()) {
    if ((0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("cursedMagnifyingGlassCount")) === 13) {
      if ((0, import_kolmafia114.toBoolean)((0, import_kolmafia114.getProperty)("mappingMonsters")) || auto_backupTarget() || (0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("_voidFreeFights")) >= 5 && (0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("cursedMagnifyingGlassCount")) >= 13 && !(0, import_kolmafia114.inHardcore)()) {
        addToMaximize(`-equip ${$item`cursed magnifying glass`.toString()}`);
      }
    } else if (!nextMonsterIsFree && (0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("cursedMagnifyingGlassCount")) < 13 && solveDelayZone$1() !== import_kolmafia114.Location.none) {
      addBonusToMaximize($item`cursed magnifying glass`, 200);
    }
  }
  var _iterator16 = _createForOfIteratorHelper(
    $slots`hat, back, shirt, weapon, off-hand, pants, acc1, acc2, acc3, familiar`
  ), _step16;
  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
      var s = _step16.value;
      var pref = getMaximizeSlotPref(s);
      var toEquip = (0, import_kolmafia114.getProperty)(pref);
      if (toEquip !== "") {
        removeFromMaximize(`-equip ${toEquip}`);
        addToMaximize(`+equip ${toEquip}`);
      }
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
  if (in_wereprof() && auto_haveDarts()) {
    if (is_werewolf()) {
      addBonusToMaximize($item`Everfull Dart Holster`, 1e3);
    } else {
      addToMaximize(`+equip ${$item`Everfull Dart Holster`}`);
    }
  }
  if (is_professor() && (possessEquipment($item`biphasic molecular oculus`) || possessEquipment($item`triphasic molecular oculus`))) {
    var monster_list = new Map(
      Object.entries((0, import_kolmafia114.appearanceRates)((0, import_kolmafia114.myLocation)())).map(
        (_ref) => {
          var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
          return [
            import_kolmafia114.Monster.get(_k),
            _v
          ];
        }
      )
    );
    var advresearch = (0, import_kolmafia114.getProperty)("wereProfessorAdvancedResearch");
    var nooculus = false;
    var monseen = 0;
    var totalmob = 0;
    var _iterator17 = _createForOfIteratorHelper(monster_list), _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
        var _step17$value = _slicedToArray(_step17.value, 2), mob = _step17$value[0], freq = _step17$value[1];
        if (freq > 0 && mob.id > 0 && mob.copyable && !mob.boss) {
          totalmob += 1;
        }
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    var _iterator18 = _createForOfIteratorHelper(monster_list), _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
        var _step18$value = _slicedToArray(_step18.value, 2), _mob = _step18$value[0], _freq = _step18$value[1];
        if (_freq > 0 && _mob.id > 0 && _mob.copyable && !_mob.boss) {
          if ((0, import_kolmafia114.containsText)(advresearch, _mob.id.toString())) {
            monseen += 1;
          }
        }
        if (monseen === totalmob) {
          nooculus = true;
        }
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
    if ($locations`The Battlefield (Frat Uniform), The Battlefield (Hippy Uniform), The Orcish Frat House, The Hippy Camp, The Orcish Frat House (In Disguise), The Hippy Camp (In Disguise), Next to that Barrel with Something Burning in it, Out by that Rusted-Out Car, Over Where the Old Tires Are, Near an Abandoned Refrigerator, Sonofa Beach, The Themthar Hills, McMillicancuddy's Barn, McMillicancuddy's Pond, McMillicancuddy's Back 40, McMillicancuddy's Other Back 40, Cobb's Knob Barracks, Cobb's Knob Harem, Throne Room, The Hidden Hospital`.includes(
      (0, import_kolmafia114.myLocation)()
    )) {
      nooculus = true;
    }
    if (!nooculus) {
      if (possessEquipment($item`biphasic molecular oculus`)) {
        addToMaximize(`+equip ${$item`biphasic molecular oculus`}`);
      } else {
        addToMaximize(`+equip ${$item`triphasic molecular oculus`}`);
      }
    }
  }
  if (is_professor() && (possessEquipment($item`high-tension exoskeleton`) || possessEquipment($item`ultra-high-tension exoskeleton`) || possessEquipment($item`irresponsible-tension exoskeleton`))) {
    if (!$locations`The Battlefield (Frat Uniform), The Battlefield (Hippy Uniform), The Orcish Frat House, The Hippy Camp, The Orcish Frat House (In Disguise), The Hippy Camp (In Disguise), Next to that Barrel with Something Burning in it, Out by that Rusted-Out Car, Over Where the Old Tires Are, Near an Abandoned Refrigerator, Sonofa Beach, The Themthar Hills, McMillicancuddy's Barn, McMillicancuddy's Pond, McMillicancuddy's Back 40, McMillicancuddy's Other Back 40, Cobb's Knob Barracks, Cobb's Knob Harem, Throne Room`.includes(
      (0, import_kolmafia114.myLocation)()
    )) {
      if (possessEquipment($item`high-tension exoskeleton`)) {
        addToMaximize(`+equip ${$item`high-tension exoskeleton`}`);
      } else if (possessEquipment($item`ultra-high-tension exoskeleton`)) {
        addToMaximize(`+equip ${$item`ultra-high-tension exoskeleton`}`);
      } else {
        addToMaximize(`+equip ${$item`irresponsible-tension exoskeleton`}`);
      }
    }
  }
  if (auto_haveSpringShoes()) {
    if ((0, import_kolmafia114.itemAmount)($item`ultra-soft ferns`) < 4 || (0, import_kolmafia114.itemAmount)($item`crunchy brush`) < 4) {
      addBonusToMaximize($item`spring shoes`, 200);
    } else if ((0, import_kolmafia114.myMeat)() < meatReserve()) {
      addBonusToMaximize($item`spring shoes`, 200);
    } else if ((0, import_kolmafia114.myHp)() < 0.5 * (0, import_kolmafia114.myMaxhp)() && (0, import_kolmafia114.myHp)() > 0) {
      addBonusToMaximize($item`spring shoes`, 200);
    } else {
      addBonusToMaximize($item`spring shoes`, 50);
    }
  }
  if (auto_haveBatWings() && (0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("_batWingsFreeFights")) < 5) {
    addBonusToMaximize($item`bat wings`, 200);
  }
  if (in_koe() && auto_hasPowerfulGlove()) {
    if (koe_NeedWhitePixels()) {
      addBonusToMaximize($item`Powerful Glove`, 250);
    }
  }
  if (pathHasFamiliar()) {
    addBonusToMaximize($item`familiar scrapbook`, 200);
  }
  if (!nextMonsterIsFree) {
    addBonusToMaximize($item`mafia thumb ring`, 200);
  }
  if (possessEquipment($item`carnivorous potted plant`)) {
    if ((0, import_kolmafia114.toBoolean)((0, import_kolmafia114.getProperty)("mappingMonsters")) || auto_backupTarget()) {
      addToMaximize(`-equip ${$item`carnivorous potted plant`.toString()}`);
    } else if ((nextMonster === import_kolmafia114.Monster.none || instakillable(nextMonster)) && !in_pokefam() && (0, import_kolmafia114.getProperty)("auto_MLSafetyLimit") === "" || (0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("auto_MLSafetyLimit")) >= 25) {
      addBonusToMaximize($item`carnivorous potted plant`, 200);
    }
  }
  addBonusToMaximize($item`Mr. Screege's spectacles`, 100);
  addBonusToMaximize($item`can of mixed everything`, 100);
  if ((0, import_kolmafia114.haveEffect)($effect`Blood Bubble`) === 0) {
    addBonusToMaximize($item`Eight Days a Week Pill Keeper`, 100);
  }
  if (in_heavyrains()) {
    if (possessEquipment($item`Thor's Pliers`)) {
      addBonusToMaximize($item`Thor's Pliers`, 400);
    }
  }
  if (auto_canUseJuneCleaver()) {
    if ((0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("_juneCleaverFightsLeft")) < (0, import_kolmafia114.myAdventures)() * 1.1 || (0, import_kolmafia114.fullnessLimit)() === 0 && (0, import_kolmafia114.inebrietyLimit)() === 0 || consumptionProgress() < 1) {
      addBonusToMaximize($item`June cleaver`, 200);
    }
  }
  if (canUseSweatpants()) {
    if (getSweat() < 90) {
      addBonusToMaximize($item`designer sweatpants`, 200);
    }
  }
  if ((0, import_kolmafia114.myLocation)() === (0, import_kolmafia114.toLocation)((0, import_kolmafia114.getProperty)("_seadentWaveZone"))) {
    addToMaximize(`+equip ${$item`Monodent of the Sea`}`);
  }
  if (!in_plumber() && (0, import_kolmafia114.getProperty)(getMaximizeSlotPref($slot`weapon`)) === "" && !maximizeContains("-weapon") && (0, import_kolmafia114.myPrimestat)() !== $stat`Mysticality`) {
    if ((0, import_kolmafia114.myClass)() === $class`Seal Clubber` && in_glover()) {
      addToMaximize("club");
    } else if (in_zootomist() && getZooBestPunch() !== import_kolmafia114.Skill.none) {
    } else {
      addToMaximize("effective");
    }
  }
  if (auto_haveCupidBow() && !maximizeContains(`bonus ${$item`toy Cupid bow`}`)) {
    addBonusToMaximize($item`toy Cupid bow`, 100);
  }
  if (auto_haveBurningLeaves() && (0, import_kolmafia114.itemAmount)($item`inflammable leaf`) < 111) {
    var bonus = 20;
    if (in_zootomist() && (0, import_kolmafia114.myLevel)() < 13) {
      bonus = 100;
    }
    var _iterator19 = _createForOfIteratorHelper(
      $items`rake, tiny rake`
    ), _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
        var it = _step19.value;
        if (!maximizeContains(`bonus ${it}`)) {
          addBonusToMaximize(it, bonus);
        }
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
  }
  if ((0, import_kolmafia114.myFamiliar)() !== $familiar`Jill-of-All-Trades`) {
    var candle_force = `+equip ${$item`LED candle`}`;
    if (maximizeContains(candle_force)) {
      removeFromMaximize(candle_force);
    }
  }
}
function finalizeMaximize$1() {
  finalizeMaximize(false);
}
function addToMaximize(add_1) {
  if (maximizeContains(add_1)) {
    auto_log_debug(
      `Tried to add a duplicate of "${add_1}" to current maximizer statement... skipping`,
      "gold"
    );
    return;
  }
  auto_log_debug(`Adding "${add_1}" to current maximizer statement`, "gold");
  var res = (0, import_kolmafia114.getProperty)("auto_maximize_current");
  var addHasComma = (0, import_kolmafia114.startsWith)(add_1, ",");
  if (res !== "" && !addHasComma) {
    res += ",";
  } else if (res === "" && addHasComma) {
    add_1 = (0, import_kolmafia114.substring)(add_1, 1);
  }
  res += add_1;
  (0, import_kolmafia114.setProperty)("auto_maximize_current", res);
}
function removeFromMaximize(rem) {
  auto_log_debug(`Removing "${rem}" from current maximizer statement`, "gold");
  var res = (0, import_kolmafia114.getProperty)("auto_maximize_current");
  res = (0, import_kolmafia114.replaceString)(res, rem, "");
  res = (0, import_kolmafia114.replaceString)(res, " ,", ",");
  res = (0, import_kolmafia114.replaceString)(res, ", ", ",");
  res = (0, import_kolmafia114.replaceString)(res, ",,", ",");
  if ((0, import_kolmafia114.endsWith)(res, ",")) {
    res = (0, import_kolmafia114.substring)(res, 0, (0, import_kolmafia114.length)(res) - 1);
  }
  if ((0, import_kolmafia114.startsWith)(res, ",")) {
    res = (0, import_kolmafia114.substring)(res, 1);
  }
  (0, import_kolmafia114.setProperty)("auto_maximize_current", res);
}
function maximizeContains(check_1) {
  return (0, import_kolmafia114.containsText)((0, import_kolmafia114.getProperty)("auto_maximize_current"), check_1);
}
function simValue(mod) {
  return (0, import_kolmafia114.numericModifier)("Generated:_spec", mod);
}
function equipMaximizedGear() {
  finalizeMaximize$1();
  (0, import_kolmafia114.maximize)((0, import_kolmafia114.getProperty)("auto_maximize_current"), 2500, 0, false);
  if ((0, import_kolmafia114.equippedItem)($slot`weapon`) === import_kolmafia114.Item.none && (0, import_kolmafia114.myPath)() !== $path`Way of the Surprising Fist`) {
    var equippableWeapon = import_kolmafia114.Item.none;
    var _iterator20 = _createForOfIteratorHelper(
      import_kolmafia114.Item.get(Object.keys((0, import_kolmafia114.getInventory)()))
    ), _step20;
    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
        var it = _step20.value;
        if ((0, import_kolmafia114.toSlot)(it) === $slot`weapon` && (0, import_kolmafia114.canEquip)(it)) {
          equippableWeapon = it;
          break;
        }
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
    if (equippableWeapon !== import_kolmafia114.Item.none) {
      auto_log_error(
        "It looks like the maximizer didn't equip any weapons for you. Lets dump some debugging info to help the KolMafia devs look into this."
      );
      addToMaximize("2 dump");
      (0, import_kolmafia114.maximize)((0, import_kolmafia114.getProperty)("auto_maximize_current"), 2500, 0, false);
      removeFromMaximize("2 dump");
      if ((0, import_kolmafia114.toBoolean)((0, import_kolmafia114.getProperty)("auto_debug_maximizer"))) {
        (0, import_kolmafia114.abort)(
          "NO WEAPON WAS EQUIPPED BY THE MAXIMIZER. REPORT THIS IN DISCORD AND INCLUDE YOUR SESSION LOG! YOU CAN RE-RUN AUTOSCEND AND IT SHOULD RUN OK (possibly)."
        );
      }
      if ((0, import_kolmafia114.equippedItem)($slot`weapon`) === import_kolmafia114.Item.none) {
        (0, import_kolmafia114.equip)(equippableWeapon);
        (0, import_kolmafia114.maximize)((0, import_kolmafia114.getProperty)("auto_maximize_current"), 2500, 0, false);
        auto_log_error(
          "No weapon was equipped by the maximizer. If you want to report this to the mafia devs at kolmafia.us include your session log. We have attempted a work around."
        );
      }
    }
  }
}
function equipmentAmount(equipment) {
  if (equipment === import_kolmafia114.Item.none) {
    return 0;
  }
  var amount = (0, import_kolmafia114.itemAmount)(equipment) + (0, import_kolmafia114.equippedAmount)(equipment, true);
  if (equipment.toString() in (0, import_kolmafia114.getRelated)($item`broken champagne bottle`, "fold")) {
    amount = (0, import_kolmafia114.itemAmount)(wrap_item($item`January's Garbage Tote`));
  }
  return amount;
}
function possessEquipment(equipment) {
  return equipmentAmount(equipment) > 0;
}
function possessOutfit(outfitToCheck, checkCanEquip) {
  if ((0, import_kolmafia114.outfitPieces)(outfitToCheck).length === 0) {
    auto_log_warning$1(`${outfitToCheck} is not a valid outfit!`);
    return false;
  }
  var _iterator22 = _createForOfIteratorHelper(
    (0, import_kolmafia114.outfitPieces)(outfitToCheck).entries()
  ), _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
      var _step22$value = _slicedToArray(_step22.value, 2), key = _step22$value[0], piece = _step22$value[1];
      if (!possessEquipment(piece)) {
        return false;
      }
      if (checkCanEquip && !(0, import_kolmafia114.canEquip)(piece)) {
        return false;
      }
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
  return true;
}
function possessOutfit$1(outfitToCheck) {
  return possessOutfit(outfitToCheck, false);
}
function auto_forceEquipSword(speculative) {
  var swordToEquip = import_kolmafia114.Item.none;
  if (possessEquipment($item`ebony epee`)) {
    swordToEquip = $item`ebony epee`;
  }
  if (swordToEquip === import_kolmafia114.Item.none) {
    var _iterator24 = _createForOfIteratorHelper($items`antique machete, black sword, broken sword, cardboard katana, cardboard wakizashi, Knob Goblin deluxe scimitar, Knob Goblin scimitar, lupine sword, muculent machete, serpentine sword, vorpal blade, white sword, sweet ninja sword, Drowsy Sword, ridiculously huge sword`), _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
        var it = _step24.value;
        if (possessEquipment(it) && auto_can_equip(it)) {
          swordToEquip = it;
          break;
        }
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  }
  if (swordToEquip === import_kolmafia114.Item.none && isArmoryAndLeggeryStoreAvailable() && (0, import_kolmafia114.myMeat)() > 49) {
    if ((0, import_kolmafia114.retrieveItem)(1, $item`sweet ninja sword`)) {
      swordToEquip = $item`sweet ninja sword`;
    }
  }
  if (swordToEquip === import_kolmafia114.Item.none) {
    return false;
  }
  if ((0, import_kolmafia114.toItem)((0, import_kolmafia114.getProperty)("auto_equipment_override_weapon")) !== import_kolmafia114.Item.none && auto_can_equip$1(
    (0, import_kolmafia114.toItem)((0, import_kolmafia114.getProperty)("auto_equipment_override_weapon")),
    $slot`weapon`
  )) {
    if ((0, import_kolmafia114.itemType)((0, import_kolmafia114.toItem)((0, import_kolmafia114.getProperty)("auto_equipment_override_weapon"))) === "sword") {
      return true;
    } else {
      auto_log_debug(
        "Can not successfully force equip a sword because user defined override weapon will replace it before combat",
        "gold"
      );
      return false;
    }
  }
  if (speculative) {
    return auto_can_equip$1(swordToEquip, $slot`weapon`);
  }
  return autoForceEquip$1($slot`weapon`, swordToEquip);
}
function auto_saveEquipped() {
  var my_slots = /* @__PURE__ */ new Map();
  if (in_hattrick()) {
    my_slots = /* @__PURE__ */ new Map(
      [
        [$slot`off-hand`, true],
        [$slot`weapon`, true],
        [$slot`back`, true],
        [$slot`shirt`, true],
        [$slot`pants`, true],
        [$slot`acc1`, true],
        [$slot`acc2`, true],
        [$slot`acc3`, true],
        [$slot`familiar`, true]
      ]
    );
  } else {
    my_slots = /* @__PURE__ */ new Map(
      [
        [$slot`hat`, true],
        [$slot`off-hand`, true],
        [$slot`weapon`, true],
        [$slot`back`, true],
        [$slot`shirt`, true],
        [$slot`pants`, true],
        [$slot`acc1`, true],
        [$slot`acc2`, true],
        [$slot`acc3`, true],
        [$slot`familiar`, true]
      ]
    );
  }
  var i = 0;
  var equipped = /* @__PURE__ */ new Map();
  var _iterator27 = _createForOfIteratorHelper(
    my_slots.keys()
  ), _step27;
  try {
    for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
      var sl = _step27.value;
      equipped.set(equipped.size, (0, import_kolmafia114.equippedItem)(sl));
    }
  } catch (err) {
    _iterator27.e(err);
  } finally {
    _iterator27.f();
  }
  return equipped;
}
function auto_loadEquipped(loadEquip) {
  var loadAccCount = 0;
  var accCount = 0;
  var _iterator28 = _createForOfIteratorHelper(
    loadEquip
  ), _step28;
  try {
    for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
      var _step28$value = _slicedToArray(_step28.value, 2), i = _step28$value[0], it = _step28$value[1];
      if ((0, import_kolmafia114.toSlot)(it) === $slot`acc1`) {
        loadAccCount += 1;
      }
    }
  } catch (err) {
    _iterator28.e(err);
  } finally {
    _iterator28.f();
  }
  var _iterator29 = _createForOfIteratorHelper(
    loadEquip
  ), _step29;
  try {
    for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
      var _step29$value = _slicedToArray(_step29.value, 2), _i3 = _step29$value[0], _it5 = _step29$value[1];
      if (_it5 === import_kolmafia114.Item.none) {
        continue;
      }
      if (loadAccCount > 0 && (0, import_kolmafia114.toSlot)(_it5) === $slot`acc1` && (_it5 !== (0, import_kolmafia114.equippedItem)($slot`acc1`) || _it5 !== (0, import_kolmafia114.equippedItem)($slot`acc2`) || _it5 !== (0, import_kolmafia114.equippedItem)($slot`acc3`))) {
        accCount += 1;
        switch (accCount) {
          case 1:
            autoForceEquip($slot`acc1`, _it5, true);
            break;
          case 2:
            autoForceEquip($slot`acc2`, _it5, true);
            break;
          default:
            autoForceEquip($slot`acc3`, _it5, true);
            break;
        }
      } else {
        autoForceEquip$2(_it5, true);
      }
    }
  } catch (err) {
    _iterator29.e(err);
  } finally {
    _iterator29.f();
  }
  return true;
}

// src/autoscend/auto_buff.ts
function buffMaintain(source, buff, mustEquip, mp_min, casts, turns, speculative) {
  if (!glover_usable$1(buff)) {
    return false;
  }
  if (!auto_have_skill(source) || (0, import_kolmafia115.haveEffect)(buff) >= turns) {
    return false;
  }
  if ((0, import_kolmafia115.myMp)() < mp_min || (0, import_kolmafia115.myMp)() < casts * (0, import_kolmafia115.mpCost)(source)) {
    return false;
  }
  if ((0, import_kolmafia115.myHp)() <= casts * (0, import_kolmafia115.hpCost)(source)) {
    return false;
  }
  if ((0, import_kolmafia115.myAdventures)() < casts * (0, import_kolmafia115.advCost)(source)) {
    return false;
  }
  if ((0, import_kolmafia115.myLightning)() < casts * (0, import_kolmafia115.lightningCost)(source)) {
    return false;
  }
  if ((0, import_kolmafia115.myRain)() < casts * (0, import_kolmafia115.rainCost)(source)) {
    return false;
  }
  if ((0, import_kolmafia115.mySoulsauce)() < casts * (0, import_kolmafia115.soulsauceCost)(source)) {
    return false;
  }
  if ((0, import_kolmafia115.myThunder)() < casts * (0, import_kolmafia115.thunderCost)(source)) {
    return false;
  }
  if ((0, import_kolmafia115.myMeat)() < casts * (0, import_kolmafia115.meatCost)(source)) {
    return false;
  }
  var equip_changed = false;
  var equipped = auto_saveEquipped();
  var equip_slot = (0, import_kolmafia115.toSlot)(mustEquip);
  if (mustEquip !== import_kolmafia115.Item.none) {
    if (!possessEquipment(mustEquip) || !auto_is_valid(
      //we can not wear what we do not have. this checks both inventory and already worn
      mustEquip
    ) || !(0, import_kolmafia115.canEquip)(
      //checks path limitations
      mustEquip
    )) {
      return false;
    }
    if (!speculative) {
      autoForceEquip(equip_slot, mustEquip, true);
      if ((0, import_kolmafia115.equippedAmount)(mustEquip) === 0) {
        auto_log_warning$1(
          `buffMaintain failed to equip [${mustEquip}] for some reason. which is necessary in order to apply [${buff}] using the skill [${source}].`
        );
        return false;
      }
      equip_changed = true;
    }
  }
  if (!speculative) {
    (0, import_kolmafia115.useSkill)(casts, source);
  }
  if (equip_changed) {
    auto_loadEquipped(equipped);
  }
  return true;
}
function buffMaintain$1(source, buff, uses, turns, speculative) {
  if (in_tcrs()) {
    auto_log_debug(`We want to use ${source} but are in 2CRS.`, "blue");
    return false;
  }
  if (!glover_usable$1(buff)) {
    return false;
  }
  if (!auto_is_valid(source)) {
    return false;
  }
  if ((0, import_kolmafia115.haveEffect)(buff) >= turns) {
    return false;
  }
  if ((0, import_kolmafia115.itemAmount)(source) < uses && !in_wotsf()) {
    var numToBuy = uses - (0, import_kolmafia115.itemAmount)(source);
    var meatAvailableToBuy = (0, import_kolmafia115.myMeat)() - meatReserve();
    if ((0, import_kolmafia115.npcPrice)(source) !== 0 && meatAvailableToBuy > (0, import_kolmafia115.npcPrice)(source)) {
      if (!speculative) {
        auto_buyUpTo(numToBuy, source);
      } else {
        return true;
      }
    } else if ((0, import_kolmafia115.canInteract)() && (0, import_kolmafia115.historicalPrice)(
      // attempt to buy in mall
      source
    ) !== 0 && meatAvailableToBuy > (0, import_kolmafia115.historicalPrice)(source)) {
      if (!speculative) {
        auto_buyUpTo(numToBuy, source);
      } else {
        return true;
      }
    }
  }
  if ((0, import_kolmafia115.itemAmount)(source) < uses) {
    var needed = uses - (0, import_kolmafia115.itemAmount)(source);
    var n_can_craft = (0, import_kolmafia115.creatableAmount)(source);
    var turns_to_craft = (0, import_kolmafia115.creatableTurns)(source, needed, true);
    if (turns_to_craft === 0 && n_can_craft >= needed) {
      handleTracker$1(
        "buffMaintain",
        `${speculative ? "Speculatively c" : "C"}rafting ${needed.toString()} ${source.toString()}`,
        "auto_otherstuff"
      );
      if (!speculative) {
        (0, import_kolmafia115.create)(source, needed);
      } else {
        return true;
      }
    }
  }
  if ((0, import_kolmafia115.itemAmount)(source) < uses) {
    return false;
  }
  if (!speculative) {
    if (isSpleenConsumable(source)) {
      (0, import_kolmafia115.chew)(uses, source);
      handleTracker$1(
        source.toString(),
        (0, import_kolmafia115.myLocation)().toString(),
        "auto_chewed"
      );
    } else {
      (0, import_kolmafia115.use)(uses, source);
    }
  }
  return true;
}
function buffMaintain$2(buff, mp_min, casts, turns, speculative) {
  var useSkill_1 = import_kolmafia115.Skill.none;
  var useItem_1 = import_kolmafia115.Item.none;
  var mustEquip = import_kolmafia115.Item.none;
  if (buff === import_kolmafia115.Effect.none) {
    return false;
  }
  if ((0, import_kolmafia115.haveEffect)(buff) >= turns) {
    return false;
  }
  var ret = false;
  switch (buff) {
    case $effect`A Few Extra Pounds`:
      useSkill_1 = $skill`Holiday Weight Gain`;
      break;
    case $effect`A Little Bit Poisoned`:
      useSkill_1 = $skill`Disco Nap`;
      break;
    case $effect`Acting Jerky`:
      useSkill_1 = $skill`Act Jerky`;
      break;
    case $effect`Adorable Lookout`:
      useItem_1 = $item`giraffe-necked turtle`;
      break;
    case $effect`Alacri Tea`:
      useItem_1 = $item`cuppa Alacri tea`;
      break;
    case $effect`All Fired Up`:
      useItem_1 = $item`ant agonist`;
      break;
    case $effect`All Glory To the Toad`:
      useItem_1 = $item`colorful toad`;
      break;
    case $effect`All Revved Up`:
      useSkill_1 = $skill`Rev Engine`;
      break;
    case $effect`Almost Cool`:
      useItem_1 = $item`mostly-broken sunglasses`;
      break;
    case $effect`Aloysius' Antiphon of Aptitude`:
      useSkill_1 = $skill`Aloysius' Antiphon of Aptitude`;
      break;
    case $effect`Amazing`:
      useItem_1 = $item`pocket maze`;
      break;
    case $effect`Angry`:
      useSkill_1 = $skill`Anger Glands`;
      break;
    case $effect`Angry like the Wolf`:
      if (auto_have_familiar($familiar`Grim Brother`) && !(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_grimBuff"))) {
        if (speculative) {
          return true;
        }
        (0, import_kolmafia115.visitUrl)("choice.php?pwd&whichchoice=835&option=2", true);
        ret = true;
      }
      break;
    case $effect`Antibiotic Saucesphere`:
      useSkill_1 = $skill`Antibiotic Saucesphere`;
      break;
    case $effect`Arched Eyebrow of the Archmage`:
      useSkill_1 = $skill`Arched Eyebrow of the Archmage`;
      break;
    case $effect`Armor-Plated`:
      useItem_1 = $item`bent scrap metal`;
      break;
    case $effect`Ashen`:
      useItem_1 = $item`pile of ashes`;
      break;
    case $effect`Ashen Burps`:
      useItem_1 = $item`ash soda`;
      break;
    case $effect`Astral Shell`:
      if (auto_have_skill($skill`Astral Shell`) && acquireTotem()) {
        useSkill_1 = $skill`Astral Shell`;
      }
      break;
    case $effect`Attracting Snakes`:
      useSkill_1 = $skill`Attract Snakes`;
      break;
    case $effect`Attractive to Fire Ants`:
      useItem_1 = $item`fire ant pheromones`;
      break;
    case $effect`Aware of Bees`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug19Cast"))) {
        useSkill_1 = $skill`Aug. 19th: Honey Bee Awareness Day!`;
      }
      break;
    case $effect`Baconstoned`:
      if ((0, import_kolmafia115.itemAmount)($item`vial of baconstone juice`) > 0) {
        useItem_1 = $item`vial of baconstone juice`;
      } else if ((0, import_kolmafia115.itemAmount)($item`flask of baconstone juice`) > 0) {
        useItem_1 = $item`flask of baconstone juice`;
      } else {
        useItem_1 = $item`jug of baconstone juice`;
      }
      break;
    case $effect`Baited Hook`:
      useItem_1 = $item`wriggling worm`;
      break;
    case $effect`Balls of Ectoplasm`:
      useItem_1 = $item`ectoplasmic orbs`;
      break;
    case $effect`Bandersnatched`:
      useItem_1 = $item`tonic o' Banderas`;
      break;
    case $effect`Barbecue Saucy`:
      useItem_1 = $item`dollop of barbecue sauce`;
      break;
    case $effect`Be a Mind Master`:
      useItem_1 = $item`Daily Affirmation: Be a Mind Master`;
      break;
    case $effect`A Beastly Odor`:
      useItem_1 = $item`The Beast Within™ candle`;
      break;
    case $effect`Become Superficially interested`:
      useItem_1 = $item`Daily Affirmation: Be Superficially interested`;
      break;
    case $effect`Beef Goggles`:
      useSkill_1 = $skill`Beef Goggles`;
      break;
    case $effect`Bendin' Hell`:
      useSkill_1 = $skill`Bend Hell`;
      break;
    case $effect`Bent Knees`:
      useSkill_1 = $skill`Bendable Knees`;
      break;
    case $effect`Benetton's Medley of Diversity`:
      useSkill_1 = $skill`Benetton's Medley of Diversity`;
      break;
    case $effect`Berry Elemental`:
      useItem_1 = $item`Tapioc berry`;
      break;
    case $effect`Berry Statistical`:
      useItem_1 = $item`Snarf berry`;
      break;
    case $effect`Best Pals`:
      useSkill_1 = $skill`Heartstone: %pals`;
      break;
    case $effect`Bet Your Autumn Dollar`:
      useItem_1 = $item`autumn dollar`;
      break;
    case $effect`Big`:
      useSkill_1 = $skill`Get Big`;
      break;
    case $effect`Big Meat Big Prizes`:
      useItem_1 = $item`Meat-inflating powder`;
      break;
    case $effect`Biologically Shocked`:
      useItem_1 = $item`glowing syringe`;
      break;
    case $effect`Bitterskin`:
      useItem_1 = $item`bitter pill`;
      break;
    case $effect`Black Eyes`:
      useItem_1 = $item`black eye shadow`;
      break;
    case $effect`Black Tongue`:
      useItem_1 = $item`black snowcone`;
      break;
    case $effect`Blackberry Politeness`:
      useItem_1 = $item`blackberry polite`;
      break;
    case $effect`Blessing of Serqet`:
      useSkill_1 = $skill`Blessing of Serqet`;
      break;
    case $effect`Blessing of the Bird`:
      if (auto_birdCanSeek()) {
        useSkill_1 = $skill`Seek out a Bird`;
      }
      break;
    case $effect`Blessing of your favorite Bird`:
      if (auto_favoriteBirdCanSeek()) {
        useSkill_1 = $skill`Visit your Favorite Bird`;
      }
      break;
    case $effect`Blinking Belly`:
      useSkill_1 = $skill`Firefly Abdomen`;
      break;
    case $effect`Blood-Gorged`:
      useItem_1 = $item`vial of blood simple syrup`;
      break;
    case $effect`Blood Bond`:
      useSkill_1 = $skill`Blood Bond`;
      break;
    case $effect`Blood Bubble`:
      useSkill_1 = $skill`Blood Bubble`;
      break;
    case $effect`Bloodbathed`:
      if (auto_haveBCZ()) {
        mustEquip = auto_getItemToEquipBCZ();
        useSkill_1 = $skill`BCZ: Blood Bath`;
      }
      break;
    case $effect`Bloody Potato Bits`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Bloodstain-Resistant`:
      useItem_1 = $item`bloodstain stick`;
      break;
    case $effect`Blooper Inked`:
      useItem_1 = $item`blooper ink`;
      break;
    case $effect`Blubbered Up`:
      useSkill_1 = $skill`Blubber Up`;
      break;
    case $effect`Blue Swayed`:
      useItem_1 = $item`pulled blue taffy`;
      break;
    case $effect`Blue Tongue`:
      useItem_1 = $item`blue snowcone`;
      break;
    case $effect`Bone Springs`:
      useSkill_1 = $skill`Bone Springs`;
      break;
    case $effect`Boner Battalion`:
      useSkill_1 = $skill`Summon "Boner Battalion"`;
      break;
    case $effect`Boon of She-Who-Was`:
      useSkill_1 = $skill`Spirit Boon`;
      break;
    case $effect`Boon of the Storm Tortoise`:
      useSkill_1 = $skill`Spirit Boon`;
      break;
    case $effect`Boon of the War Snapper`:
      useSkill_1 = $skill`Spirit Boon`;
      break;
    case $effect`Bounty of Renenutet`:
      useSkill_1 = $skill`Bounty of Renenutet`;
      break;
    case $effect`Bow-Legged Swagger`:
      useSkill_1 = $skill`Bow-Legged Swagger`;
      break;
    case $effect`Bram's Bloody Bagatelle`:
      useSkill_1 = $skill`Bram's Bloody Bagatelle`;
      break;
    case $effect`Brawnee's Anthem of Absorption`:
      useSkill_1 = $skill`Brawnee's Anthem of Absorption`;
      break;
    case $effect`Brilliant Resolve`:
      useItem_1 = $item`resolution: be smarter`;
      break;
    case $effect`Brittled`:
      useItem_1 = $item`pea brittle`;
      break;
    case $effect`Brooding`:
      useSkill_1 = $skill`Brood`;
      break;
    case $effect`Browbeaten`:
      useItem_1 = $item`old eyebrow pencil`;
      break;
    case $effect`Burning Hands`:
      useItem_1 = $item`sticky lava globs`;
      break;
    case $effect`Busy Bein' Delicious`:
      useItem_1 = $item`Crimbo fudge`;
      break;
    case $effect`Butt-Rock Hair`:
      useItem_1 = $item`hair spray`;
      break;
    case $effect`Can't Smell Nothin'`:
      useItem_1 = $item`Dogsgotnonoz pills`;
      break;
    case $effect`Candied Devil`:
      useItem_1 = $item`deviled candy egg`;
      break;
    case $effect`Car-Charged`:
      useItem_1 = $item`battery (car)`;
      break;
    case $effect`Carlweather's Cantata of Confrontation`:
      useSkill_1 = $skill`Carlweather's Cantata of Confrontation`;
      break;
    case $effect`Carol of the Bulls`:
      useSkill_1 = $skill`Carol of the Bulls`;
      break;
    case $effect`Carol of the Hells`:
      useSkill_1 = $skill`Carol of the Hells`;
      break;
    case $effect`Carol of the Thrills`:
      useSkill_1 = $skill`Carol of the Thrills`;
      break;
    case $effect`Cautious Prowl`:
      useSkill_1 = $skill`Walk: Cautious Prowl`;
      break;
    case $effect`Ceaseless Snarling`:
      useSkill_1 = $skill`Ceaseless Snarl`;
      break;
    case $effect`Celestial Camouflage`:
      useItem_1 = $item`celestial squid ink`;
      break;
    case $effect`Celestial Saltiness`:
      useItem_1 = $item`celestial au jus`;
      break;
    case $effect`Celestial Sheen`:
      useItem_1 = $item`celestial olive oil`;
      break;
    case $effect`Celestial Vision`:
      useItem_1 = $item`celestial carrot juice`;
      break;
    case $effect`Cheddarmored`:
      useSkill_1 = $skill`Cheddarmor`;
      break;
    case $effect`Cheerled`:
      useSkill_1 = $skill`Cheerlead`;
      break;
    case $effect`Cinnamon Challenger`:
      useItem_1 = $item`pulled red taffy`;
      break;
    case $effect`Clear Ears\, Can't Lose`:
      useItem_1 = $item`ear candle`;
      break;
    case $effect`Cletus's Canticle of Celerity`:
      useSkill_1 = $skill`Cletus's Canticle of Celerity`;
      break;
    case $effect`Cloak of Shadows`:
      useSkill_1 = $skill`Blood Cloak`;
      break;
    case $effect`Cloud of Mosquitos`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug20Cast"))) {
        useSkill_1 = $skill`Aug. 20th: Mosquito Day!`;
      }
      break;
    case $effect`Clyde's Blessing`:
      useItem_1 = $item`The Legendary Beat`;
      break;
    case $effect`Chalky Hand`:
      useItem_1 = $item`handful of hand chalk`;
      break;
    case $effect`Chocolatesphere`:
      useSkill_1 = $skill`Chocolatesphere`;
      break;
    case $effect`Chow Downed`:
      useSkill_1 = $skill`Zombie Chow`;
      break;
    case $effect`Cranberry Cordiality`:
      useItem_1 = $item`cranberry cordial`;
      break;
    case $effect`Coffeesphere`:
      useSkill_1 = $skill`Coffeesphere`;
      break;
    case $effect`Cold Hard Skin`:
      useItem_1 = $item`frost-rimed seal hide`;
      break;
    case $effect`Confidence of the Votive`:
      useItem_1 = $item`votive of confidence`;
      break;
    case $effect`Contemptible Emanations`:
      useItem_1 = $item`cologne of contempt`;
      break;
    case $effect`Covered in the Rainbow`:
      useItem_1 = $item`rainbow glitter candle`;
      break;
    case $effect`The Cupcake of Wrath`:
      useItem_1 = $item`green-frosted astral cupcake`;
      break;
    case $effect`Curiosity of Br'er Tarrypin`:
      if (pathHasFamiliar() && auto_have_skill($skill`Curiosity of Br'er Tarrypin`) && acquireTotem()) {
        useSkill_1 = $skill`Curiosity of Br'er Tarrypin`;
      }
      break;
    case $effect`Crunching Leaves`:
      useItem_1 = $item`autumn leaf`;
      break;
    case $effect`Crunchy Steps`:
      useItem_1 = $item`crunchy brush`;
      break;
    case $effect`Cyber Resist x2000`:
      useItem_1 = $item`Synapse Blaster`;
      break;
    case $effect`Dance of the Sugar Fairy`:
      useItem_1 = $item`sugar fairy`;
      break;
    case $effect`Darkened Meat`:
      useSkill_1 = $skill`Dark Meat`;
      break;
    case $effect`Destructive Resolve`:
      useItem_1 = $item`resolution: be feistier`;
      break;
    case $effect`Dexteri Tea`:
      useItem_1 = $item`cuppa Dexteri tea`;
      break;
    case $effect`Digitally Converted`:
      useItem_1 = $item`digital underground potion`;
      break;
    case $effect`The Dinsey Look`:
      useItem_1 = $item`Dinsey face paint`;
      break;
    case $effect`Dirge of Dreadfulness`:
      useSkill_1 = $skill`Dirge of Dreadfulness`;
      break;
    case $effect`Dirge of Dreadfulness (Remastered)`:
      mustEquip = $item`velour vaqueros`;
      useSkill_1 = $skill`Dirge of Dreadfulness`;
      break;
    case $effect`Disco Fever`:
      useSkill_1 = $skill`Disco Fever`;
      break;
    case $effect`Disco Leer`:
      useSkill_1 = $skill`Disco Leer`;
      break;
    case $effect`Disco over Matter`:
      if (auto_have_skill($skill`Disco Aerobics`)) {
        mustEquip = $item`April Shower Thoughts shield`;
        useSkill_1 = $skill`Disco Aerobics`;
      }
      break;
    case $effect`Disco Smirk`:
      useSkill_1 = $skill`Disco Smirk`;
      break;
    case $effect`Disco State of Mind`:
      useSkill_1 = $skill`Disco Aerobics`;
      break;
    case $effect`Disdain of She-Who-Was`:
      useSkill_1 = $skill`Blessing of She-Who-Was`;
      break;
    case $effect`Disdain of the Storm Tortoise`:
      useSkill_1 = $skill`Blessing of the Storm Tortoise`;
      break;
    case $effect`Disdain of the War Snapper`:
      useSkill_1 = $skill`Blessing of the War Snapper`;
      break;
    case $effect`Disquiet Riot`:
      useSkill_1 = $skill`Disquiet Riot`;
      break;
    case $effect`Drenched With Filth`:
      useItem_1 = $item`concentrated garbage juice`;
      break;
    case $effect`Drescher's Annoying Noise`:
      useSkill_1 = $skill`Drescher's Annoying Noise`;
      break;
    case $effect`Drunk and Avuncular`:
      useItem_1 = $item`Drunk Uncles holo-record`;
      break;
    case $effect`Eagle Eyes`:
      useItem_1 = $item`eagle feather`;
      break;
    case $effect`Ear Winds`:
      useSkill_1 = $skill`Flappy Ears`;
      break;
    case $effect`Earning Interest`:
      useItem_1 = $item`savings bond`;
      break;
    case $effect`Eau D'enmity`:
      useItem_1 = $item`perfume of prejudice`;
      break;
    case $effect`Eau de Tortue`:
      useItem_1 = $item`turtle pheromones`;
      break;
    case $effect`Egged On`:
      useItem_1 = $item`robin's egg`;
      break;
    case $effect`El Aroma de Salsa`:
      useItem_1 = $item`Salsa Caliente™ candle`;
      break;
    case $effect`Eldritch Alignment`:
      useItem_1 = $item`eldritch alignment spray`;
      break;
    case $effect`Elemental Saucesphere`:
      useSkill_1 = $skill`Elemental Saucesphere`;
      break;
    case $effect`Ellipsoidtined`:
      if (auto_canARBSupplyDrop()) {
        if (speculative) {
          return true;
        }
        ARBSupplyDrop("ellipsoidtine");
        ret = true;
      }
      break;
    case $effect`Empathy`:
      if (pathHasFamiliar() && auto_have_skill($skill`Empathy of the Newt`) && acquireTotem() && auto_unequipAprilShieldBuff()) {
        useSkill_1 = $skill`Empathy of the Newt`;
      }
      break;
    case $effect`Erudite`:
      useItem_1 = $item`black sheepskin diploma`;
      break;
    case $effect`Ew\, The Humanity`:
      useItem_1 = $item`Scent of a Human™ candle`;
      break;
    case $effect`Expert Oiliness`:
      useItem_1 = $item`oil of expertise`;
      break;
    case $effect`Experimental Effect G-9`:
      useItem_1 = $item`experimental serum G-9`;
      break;
    case $effect`Extended Toes`:
      useSkill_1 = $skill`Retractable Toes`;
      break;
    case $effect`Extra Backbone`:
      useItem_1 = $item`really thick spine`;
      break;
    case $effect`Extra-Green`:
      useItem_1 = $item`glob of extra-green chlorophyll`;
      break;
    case $effect`Extreme Muscle Relaxation`:
      useItem_1 = $item`Mick's IcyVapoHotness Rub`;
      break;
    case $effect`Everything Is Bananas`:
      useItem_1 = $item`banana candle`;
      break;
    case $effect`Everything Must Go!`:
      useItem_1 = $item`violent pastilles`;
      break;
    case $effect`Eyes All Black`:
      useItem_1 = $item`delicious candy`;
      break;
    case $effect`Faboooo`:
      useItem_1 = $item`Fabiotion`;
      break;
    case $effect`Far Out`:
      useItem_1 = $item`patchouli incense stick`;
      break;
    case $effect`Fat Leon's Phat Loot Lyric`:
      useSkill_1 = $skill`Fat Leon's Phat Loot Lyric`;
      break;
    case $effect`Feeling Fancy`:
      useItem_1 = $item`roasted vegetable focaccia`;
      break;
    case $effect`Feeling Lonely`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Feeling Excited`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Feeling Nervous`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Feeling Peaceful`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Feeling Punchy`:
      useItem_1 = $item`Punching Potion`;
      break;
    case $effect`Feeling Sneaky`:
      useItem_1 = $item`trampled ticket stub`;
      break;
    case $effect`Feroci Tea`:
      useItem_1 = $item`cuppa Feroci tea`;
      break;
    case $effect`Fever From the Flavor`:
      useItem_1 = $item`bottle of antifreeze`;
      break;
    case $effect`Fireproof Lips`:
      useItem_1 = $item`SPF 451 lip balm`;
      break;
    case $effect`Fire Inside`:
      useItem_1 = $item`hot coal`;
      break;
    case $effect`Fishy\, Oily`:
      if (in_heavyrains()) {
        useItem_1 = $item`gourmet gourami oil`;
      }
      break;
    case $effect`Fishy Fortification`:
      useItem_1 = $item`fish-liver oil`;
      break;
    case $effect`Fishy Whiskers`:
      if (in_heavyrains()) {
        useItem_1 = $item`catfish whiskers`;
      }
      break;
    case $effect`Five Sticky Fingers`:
      useItem_1 = $item`five-fingered fern resin`;
      break;
    case $effect`Flame-Retardant Trousers`:
      useItem_1 = $item`hot powder`;
      break;
    case $effect`Flaming Weapon`:
      useItem_1 = $item`hot nuggets`;
      break;
    case $effect`Flamibili Tea`:
      useItem_1 = $item`cuppa Flamibili tea`;
      break;
    case $effect`Flapper Dancin'`:
      useItem_1 = $item`flapper fly`;
      break;
    case $effect`Flexibili Tea`:
      useItem_1 = $item`cuppa Flexibili tea`;
      break;
    case $effect`Flimsy Shield of the Pastalord`:
      useSkill_1 = $skill`Shield of the Pastalord`;
      if ((0, import_kolmafia115.myClass)() === $class`Pastamancer`) {
        buff = $effect`Shield of the Pastalord`;
      }
      break;
    case $effect`Float Like a Butterfly\, Smell Like a Bee`:
      if (in_bhy()) {
        useItem_1 = $item`honeypot`;
      }
      break;
    case $effect`Florid Cheeks`:
      useItem_1 = $item`henna face paint`;
      break;
    case $effect`Football Eyes`:
      useItem_1 = $item`black facepaint`;
      break;
    case $effect`Fortunate Resolve`:
      useItem_1 = $item`resolution: be luckier`;
      break;
    case $effect`Frenzied\, Bloody`:
      useSkill_1 = $skill`Blood Frenzy`;
      break;
    case $effect`Fresh Breath`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug6Cast"))) {
        useSkill_1 = $skill`Aug. 6th: Fresh Breath Day!`;
      }
      break;
    case $effect`Fresh Scent`:
      useItem_1 = $item`deodorant`;
      break;
    case $effect`Frigidalmatian`:
      useSkill_1 = $skill`Frigidalmatian`;
      break;
    case $effect`Frog In Your Throat`:
      useItem_1 = $item`Frogade`;
      break;
    case $effect`From Nantucket`:
      useItem_1 = $item`Ye Olde Bawdy Limerick`;
      break;
    case $effect`Frost Tea`:
      useItem_1 = $item`cuppa Frost tea`;
      break;
    case $effect`Frostbeard`:
      useSkill_1 = $skill`Beardfreeze`;
      break;
    case $effect`Frosty`:
      useItem_1 = $item`frost flower`;
      break;
    case $effect`Frown`:
      useSkill_1 = $skill`Frown Muscles`;
      break;
    case $effect`Funky Coal Patina`:
      useItem_1 = $item`coal dust`;
      break;
    case $effect`Gaffe Free`:
      useItem_1 = $item`gaffer's tape`;
      break;
    case $effect`Gelded`:
      useItem_1 = $item`chocolate filthy lucre`;
      break;
    case $effect`Ghostly Shell`:
      if (auto_have_skill($skill`Ghostly Shell`) && acquireTotem()) {
        useSkill_1 = $skill`Ghostly Shell`;
      }
      break;
    case $effect`The Glistening`:
      useItem_1 = $item`vial of The Glistening`;
      break;
    case $effect`Glittering Eyelashes`:
      useItem_1 = $item`glittery mascara`;
      break;
    case $effect`Glowing Hands`:
      useItem_1 = $item`emergency glowstick`;
      break;
    case $effect`Go Get 'Em\, Tiger!`:
      useItem_1 = $item`Ben-Gal™ Balm`;
      break;
    case $effect`Good Things Are Coming\, You Can Smell It`:
      useItem_1 = $item`Smoldering Clover™ candle`;
      break;
    case $effect`Got Milk`:
      useItem_1 = $item`milk of magnesium`;
      break;
    case $effect`Gothy`:
      useItem_1 = $item`spooky eyeliner`;
      break;
    case $effect`Gr8ness`:
      useItem_1 = $item`potion of temporary gr8ness`;
      break;
    case $effect`Graham Crackling`:
      useItem_1 = $item`heather graham cracker`;
      break;
    case $effect`Greasy Peasy`:
      useItem_1 = $item`robot grease`;
      break;
    case $effect`Greedy Resolve`:
      useItem_1 = $item`resolution: be wealthier`;
      break;
    case $effect`Green Tongue`:
      useItem_1 = $item`green snowcone`;
      break;
    case $effect`Gristlesphere`:
      useSkill_1 = $skill`Gristlesphere`;
      break;
    case $effect`Gritty`:
      useItem_1 = $item`pile of gritty sand`;
      break;
    case $effect`Grumpy and Ornery`:
      if (auto_have_familiar($familiar`Grim Brother`) && !(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_grimBuff"))) {
        if (speculative) {
          return true;
        }
        (0, import_kolmafia115.visitUrl)("choice.php?pwd&whichchoice=835&option=3", true);
        ret = true;
      }
      break;
    case $effect`Gummed Shoes`:
      useItem_1 = $item`shoe gum`;
      break;
    case $effect`Gummi-Grin`:
      useItem_1 = $item`gummi turtle`;
      break;
    case $effect`Hairy Palms`:
      useItem_1 = $item`orcish hand lotion`;
      break;
    case $effect`Ham-Fisted`:
      useItem_1 = $item`vial of hamethyst juice`;
      break;
    case $effect`Hamming It Up`:
      useSkill_1 = $skill`Ham It Up`;
      break;
    case $effect`Hardened Fabric`:
      useItem_1 = $item`fabric hardener`;
      break;
    case $effect`Hardened Sweatshirt`:
      useSkill_1 = $skill`Magic Sweat`;
      break;
    case $effect`Hardly Poisoned at All`:
      useSkill_1 = $skill`Disco Nap`;
      break;
    case $effect`Healthy Blue Glow`:
      useItem_1 = $item`gold star`;
      break;
    case $effect`Hear Me Roar`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug10Cast"))) {
        useSkill_1 = $skill`Aug. 10th: World Lion Day!`;
      }
      break;
    case $effect`Heightened Senses`:
      useItem_1 = $item`airborne mutagen`;
      break;
    case $effect`Heart of Green`:
      useItem_1 = $item`green candy heart`;
      break;
    case $effect`Heart of Lavender`:
      useItem_1 = $item`lavender candy heart`;
      break;
    case $effect`Heart of Orange`:
      useItem_1 = $item`orange candy heart`;
      break;
    case $effect`Heart of Pink`:
      useItem_1 = $item`pink candy heart`;
      break;
    case $effect`Heart of White`:
      useItem_1 = $item`white candy heart`;
      break;
    case $effect`Heart of Yellow`:
      useItem_1 = $item`yellow candy heart`;
      break;
    case $effect`Hide of Sobek`:
      useSkill_1 = $skill`Hide of Sobek`;
      break;
    case $effect`Hiding From Seekers`:
      useSkill_1 = $skill`Hide From Seekers`;
      break;
    case $effect`High Colognic`:
      useItem_1 = $item`musk turtle`;
      break;
    case $effect`Hippy Antimilitarism`:
      useItem_1 = $item`mini kiwi antimilitaristic hippy petition`;
      break;
    case $effect`Hippy Stench`:
      useItem_1 = $item`reodorant`;
      break;
    case $effect`Hot Hands`:
      useItem_1 = $item`lotion of hotness`;
      break;
    case $effect`How to Scam Tourists`:
      useItem_1 = $item`How to Avoid Scams`;
      break;
    case $effect`Human-Beast Hybrid`:
      useItem_1 = $item`Gene Tonic: Beast`;
      break;
    case $effect`Human-Constellation Hybrid`:
      useItem_1 = $item`Gene Tonic: Constellation`;
      break;
    case $effect`Human-Demon Hybrid`:
      useItem_1 = $item`Gene Tonic: Demon`;
      break;
    case $effect`Human-Elemental Hybrid`:
      useItem_1 = $item`Gene Tonic: Elemental`;
      break;
    case $effect`Human-Fish Hybrid`:
      useItem_1 = $item`Gene Tonic: Fish`;
      break;
    case $effect`Human-Human Hybrid`:
      useItem_1 = $item`Gene Tonic: Dude`;
      break;
    case $effect`Human-Humanoid Hybrid`:
      useItem_1 = $item`Gene Tonic: Humanoid`;
      break;
    case $effect`Human-Insect Hybrid`:
      useItem_1 = $item`Gene Tonic: Insect`;
      break;
    case $effect`Human-Machine Hybrid`:
      useItem_1 = $item`Gene Tonic: Construct`;
      break;
    case $effect`Human-Mer-kin Hybrid`:
      useItem_1 = $item`Gene Tonic: Mer-kin`;
      break;
    case $effect`Human-Pirate Hybrid`:
      useItem_1 = $item`Gene Tonic: Pirate`;
      break;
    case $effect`Hyperoffended`:
      useItem_1 = $item`donkey flipbook`;
      break;
    case $effect`Hyphemariffic`:
      useItem_1 = $item`black eyedrops`;
      break;
    case $effect`Icy Glare`:
      useSkill_1 = $skill`Icy Glare`;
      break;
    case $effect`Impeccable Coiffure`:
      useSkill_1 = $skill`Self-Combing Hair`;
      break;
    case $effect`Imported Strength`:
      useItem_1 = $item`imported taffy`;
      break;
    case $effect`Inigo's Incantation of Inspiration`:
      useSkill_1 = $skill`Inigo's Incantation of Inspiration`;
      break;
    case $effect`Incredibly Healthy`:
      useItem_1 = $item`mini kiwi illicit antibiotic`;
      break;
    case $effect`Incredibly Hulking`:
      useItem_1 = $item`Ferrigno's Elixir of Power`;
      break;
    case $effect`Incredibly Well Lit`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug7Cast"))) {
        useSkill_1 = $skill`Aug. 7th: Lighthouse Day!`;
      }
      break;
    case $effect`Industrial Strength Starch`:
      useItem_1 = $item`industrial strength starch`;
      break;
    case $effect`Ink Cloud`:
      useSkill_1 = $skill`Ink Gland`;
      break;
    case $effect`Inked Well`:
      useSkill_1 = $skill`Squid Glands`;
      break;
    case $effect`Inky Camouflage`:
      useItem_1 = $item`vial of squid ink`;
      break;
    case $effect`Inscrutable Gaze`:
      useSkill_1 = $skill`Inscrutable Gaze`;
      break;
    case $effect`Insulated Trousers`:
      useItem_1 = $item`cold powder`;
      break;
    case $effect`Intimidating Mien`:
      useSkill_1 = $skill`Intimidating Mien`;
      break;
    case $effect`Invisible Avatar`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Irresistible Resolve`:
      useItem_1 = $item`resolution: be sexier`;
      break;
    case $effect`Jackasses' Symphony of Destruction`:
      useSkill_1 = $skill`Jackasses' Symphony of Destruction`;
      break;
    case $effect`Jalapeño Saucesphere`:
      useSkill_1 = $skill`Jalapeño Saucesphere`;
      break;
    case $effect`Jingle Jangle Jingle`:
      if (auto_have_skill($skill`Jingle Bells`) && acquireTotem()) {
        useSkill_1 = $skill`Jingle Bells`;
      }
      break;
    case $effect`Joyful Resolve`:
      useItem_1 = $item`resolution: be happier`;
      break;
    case $effect`Juiced and Jacked`:
      useItem_1 = $item`pumpkin juice`;
      break;
    case $effect`Juiced and Loose`:
      useSkill_1 = $skill`Steroid Bladder`;
      break;
    case $effect`Leash of Linguini`:
      if (pathHasFamiliar()) {
        auto_equipAprilShieldBuff();
        useSkill_1 = $skill`Leash of Linguini`;
      }
      break;
    case $effect`Leisurely Amblin'`:
      useSkill_1 = $skill`Walk: Leisurely Amble`;
      break;
    case $effect`Lion in Ambush`:
      useItem_1 = $item`lion musk`;
      break;
    case $effect`Liquidy Smoky`:
      useItem_1 = $item`liquid smoke`;
      break;
    case $effect`Lit Up`:
      useItem_1 = $item`bottle of lighter fluid`;
      break;
    case $effect`Litterbug`:
      useItem_1 = $item`old candy wrapper`;
      break;
    case $effect`Living Fast`:
      useSkill_1 = $skill`Live Fast`;
      break;
    case $effect`Locks Like the Raven`:
      useItem_1 = $item`Black No. 2`;
      break;
    case $effect`Loded`:
      useItem_1 = $item`lodestone`;
      break;
    case $effect`Lost Stomach`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug16Cast"))) {
        useSkill_1 = $skill`Aug. 16th: Roller Coaster Day!`;
      }
      break;
    case $effect`Loyal as a Rock`:
      useItem_1 = $item`lump of loyal latite`;
      break;
    case $effect`Loyal Tea`:
      useItem_1 = $item`cuppa Loyal tea`;
      break;
    case $effect`Lubricating Sauce`:
      if (auto_have_skill($skill`Sauce Contemplation`)) {
        mustEquip = $item`April Shower Thoughts shield`;
        useSkill_1 = $skill`Sauce Contemplation`;
      }
      break;
    case $effect`Lucky Struck`:
      useItem_1 = $item`Lucky Strikes holo-record`;
      break;
    case $effect`Lycanthropy\, Eh?`:
      useItem_1 = $item`weremoose spit`;
      break;
    case $effect`Keep Free Hate in your Heart`:
      useItem_1 = $item`Daily Affirmation: Keep Free Hate in your Heart`;
      break;
    case $effect`Kindly Resolve`:
      useItem_1 = $item`resolution: be kinder`;
      break;
    case $effect`Knob Goblin Perfume`:
      useItem_1 = $item`Knob Goblin perfume`;
      break;
    case $effect`Knowing Smile`:
      useSkill_1 = $skill`Knowing Smile`;
      break;
    case $effect`Macaroni Coating`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`The Magic of LOV`:
      useItem_1 = $item`LOV Elixir #6`;
      break;
    case $effect`The Magical Mojomuscular Melody`:
      useSkill_1 = $skill`The Magical Mojomuscular Melody`;
      break;
    case $effect`Magnetized Ears`:
      useSkill_1 = $skill`Magnetic Ears`;
      break;
    case $effect`Majorly Poisoned`:
      useSkill_1 = $skill`Disco Nap`;
      break;
    case $effect`Manbait`:
      useItem_1 = $item`the most dangerous bait`;
      break;
    case $effect`Mariachi Moisture`:
      if (auto_have_skill($skill`Moxie of the Mariachi`)) {
        mustEquip = $item`April Shower Thoughts shield`;
        useSkill_1 = $skill`Moxie of the Mariachi`;
      }
      break;
    case $effect`Mariachi Mood`:
      useSkill_1 = $skill`Moxie of the Mariachi`;
      break;
    case $effect`Marinated`:
      useItem_1 = $item`bowl of marinade`;
      break;
    case $effect`Materiel Intel`:
      if (auto_canARBSupplyDrop()) {
        if (speculative) {
          return true;
        }
        ARBSupplyDrop("materiel intel");
        ret = true;
      }
      break;
    case $effect`Mathematically Precise`:
      if ((0, import_kolmafia115.isUnrestricted)($item`Crimbot ROM: Mathematical Precision`)) {
        useSkill_1 = $skill`Mathematical Precision`;
      }
      break;
    case $effect`Mayeaugh`:
      useItem_1 = $item`glob of spoiled mayo`;
      break;
    case $effect`Meat Puppet`:
      useSkill_1 = $skill`Meat Puppet`;
      break;
    case $effect`Memories of Puppy Love`:
      useItem_1 = $item`old love note`;
      break;
    case $effect`Merry Smithsness`:
      useItem_1 = $item`Flaskfull of Hollow`;
      break;
    case $effect`Milk of Familiar Cruelty`:
      useSkill_1 = $skill`Drink The Milk of %n Cruelty`;
      break;
    case $effect`Milk of Familiar Kindness`:
      useSkill_1 = $skill`Drink The Milk of %n Kindness`;
      break;
    case $effect`Mind Vision`:
      useSkill_1 = $skill`Intracranial Eye`;
      break;
    case $effect`Ministrations in the Dark`:
      useItem_1 = $item`EMD holo-record`;
      break;
    case $effect`Minor Invulnerability`:
      useItem_1 = $item`scroll of minor invulnerability`;
      break;
    case $effect`Misplaced Rage`:
      useItem_1 = $item`angry agate`;
      break;
    case $effect`The Moxie of LOV`:
      useItem_1 = $item`LOV Elixir #9`;
      break;
    case $effect`The Moxious Madrigal`:
      useSkill_1 = $skill`The Moxious Madrigal`;
      break;
    case $effect`Muffled`:
      if ((0, import_kolmafia115.getProperty)("peteMotorbikeMuffler") === "Extra-Quiet Muffler") {
        useSkill_1 = $skill`Rev Engine`;
      }
      break;
    case $effect`Musk of the Moose`:
      useSkill_1 = $skill`Musk of the Moose`;
      break;
    case $effect`Musky`:
      useItem_1 = $item`lynyrd musk`;
      break;
    case $effect`Mutated`:
      useItem_1 = $item`gremlin mutagen`;
      break;
    case $effect`Mysteriously Handsome`:
      useItem_1 = $item`handsomeness potion`;
      break;
    case $effect`Mystically Oiled`:
      useItem_1 = $item`ointment of the occult`;
      break;
    case $effect`Nearly All-Natural`:
      useItem_1 = $item`bag of grain`;
      break;
    case $effect`Nearly Silent Hunting`:
      useSkill_1 = $skill`Silent Hunter`;
      break;
    case $effect`Neuroplastici Tea`:
      useItem_1 = $item`cuppa Neuroplastici tea`;
      break;
    case $effect`Neutered Nostrils`:
      useItem_1 = $item`Polysniff Perfume`;
      break;
    case $effect`Newt Gets In Your Eyes`:
      useItem_1 = $item`eyedrops of newt`;
      break;
    case $effect`Nigh-Invincible`:
      useItem_1 = $item`pixel star`;
      break;
    case $effect`Notably Lovely`:
      useItem_1 = $item`confiscated love note`;
      break;
    case $effect`Obscuri Tea`:
      useItem_1 = $item`cuppa Obscuri tea`;
      break;
    case $effect`Ode to Booze`:
      shrugAT$1($effect`Ode to Booze`);
      useSkill_1 = $skill`The Ode to Booze`;
      break;
    case $effect`The Odour of Magick`:
      useItem_1 = $item`natural magick candle`;
      break;
    case $effect`Of Course It Looks Great`:
      useSkill_1 = $skill`Check Hair`;
      break;
    case $effect`Oiled Skin`:
      useItem_1 = $item`skin oil`;
      break;
    case $effect`Oiled-Up`:
      useItem_1 = $item`pec oil`;
      break;
    case $effect`Oilsphere`:
      useSkill_1 = $skill`Oilsphere`;
      break;
    case $effect`Offhand Remarkable`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug13Cast"))) {
        useSkill_1 = import_kolmafia115.Skill.get("Aug. 13th: Left/Off Hander's Day!");
      }
      break;
    case $effect`OMG WTF`:
      useItem_1 = $item`confiscated cell phone`;
      break;
    case $effect`One Very Clear Eye`:
      useItem_1 = $item`cyclops eyedrops`;
      break;
    case $effect`Only Dogs Love a Drunken Sailor`:
      useSkill_1 = $skill`Only Dogs Love a Drunken Sailor`;
      break;
    case $effect`Orange Crusher`:
      useItem_1 = $item`pulled orange taffy`;
      break;
    case $effect`Orange Tongue`:
      useItem_1 = $item`orange snowcone`;
      break;
    case $effect`Paging Betty`:
      useItem_1 = $item`Bettie page`;
      break;
    case $effect`Pasta Eyeball`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Pasta Oneness`:
      useSkill_1 = $skill`Manicotti Meditation`;
      break;
    case $effect`Patent Aggression`:
      useItem_1 = $item`patent aggression tonic`;
      break;
    case $effect`Patent Alacrity`:
      useItem_1 = $item`patent alacrity tonic`;
      break;
    case $effect`Patent Avarice`:
      useItem_1 = $item`patent avarice tonic`;
      break;
    case $effect`Patent Invisibility`:
      useItem_1 = $item`patent invisibility tonic`;
      break;
    case $effect`Patent Prevention`:
      useItem_1 = $item`patent preventative tonic`;
      break;
    case $effect`Patent Sallowness`:
      useItem_1 = $item`patent sallowness tonic`;
      break;
    case $effect`Patience of the Tortoise`:
      useSkill_1 = $skill`Patience of the Tortoise`;
      break;
    case $effect`Patient Smile`:
      useSkill_1 = $skill`Patient Smile`;
      break;
    case $effect`Paul's Passionate Pop Song`:
      useSkill_1 = $skill`Paul's Passionate Pop Song`;
      break;
    case $effect`Penne Fedora`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Peppermint Bite`:
      useItem_1 = $item`Crimbo peppermint bark`;
      break;
    case $effect`Peppermint Twisted`:
      useItem_1 = $item`peppermint twist`;
      break;
    case $effect`Perceptive Pressure`:
      useItem_1 = $item`pressurized potion of perception`;
      break;
    case $effect`Perspicacious Pressure`:
      useItem_1 = $item`pressurized potion of perspicacity`;
      break;
    case $effect`Phorcefullness`:
      useItem_1 = $item`philter of phorce`;
      break;
    case $effect`Physicali Tea`:
      useItem_1 = $item`cuppa Physicali tea`;
      break;
    case $effect`Pill Power`:
      if ((0, import_kolmafia115.itemAmount)($item`miniature power pill`) > 0) {
        useItem_1 = $item`miniature power pill`;
      } else {
        useItem_1 = $item`power pill`;
      }
      break;
    case $effect`Pill Party!`:
      useItem_1 = $item`pill cup`;
      break;
    case $effect`Pisces in the Skyces`:
      useItem_1 = $item`tobiko marble soda`;
      break;
    case $effect`Psalm of Pointiness`:
      shrugAT$1($effect`Psalm of Pointiness`);
      useSkill_1 = $skill`The Psalm of Pointiness`;
      break;
    case $effect`Prayer of Seshat`:
      useSkill_1 = $skill`Prayer of Seshat`;
      break;
    case $effect`Pride of the Puffin`:
      useSkill_1 = $skill`Pride of the Puffin`;
      break;
    case $effect`Polar Express`:
      useItem_1 = $item`Cloaca Cola Polar`;
      break;
    case $effect`Polka of Plenty`:
      useSkill_1 = $skill`The Polka of Plenty`;
      break;
    case $effect`Polonoia`:
      useItem_1 = $item`polo trophy`;
      break;
    case $effect`Poppy Performance`:
      if (auto_haveIdolMicrophone()) {
        if (speculative) {
          return true;
        }
        (0, import_kolmafia115.cliExecute)("loathingidol pop");
        ret = true;
      }
      break;
    case $effect`Power\, Man`:
      useItem_1 = $item`Power-Guy 2000 holo-record`;
      break;
    case $effect`Power Ballad of the Arrowsmith`:
      useSkill_1 = $skill`The Power Ballad of the Arrowsmith`;
      break;
    case $effect`Power of Heka`:
      useSkill_1 = $skill`Power of Heka`;
      break;
    case $effect`The Power of LOV`:
      useItem_1 = $item`LOV Elixir #3`;
      break;
    case $effect`Prideful Strut`:
      useSkill_1 = $skill`Walk: Prideful Strut`;
      break;
    case $effect`Predjudicetidigitation`:
      useItem_1 = $item`worst candy`;
      break;
    case $effect`Protection from Bad Stuff`:
      useItem_1 = $item`scroll of Protection from Bad Stuff`;
      break;
    case $effect`Provocative Perkiness`:
      useItem_1 = $item`libation of liveliness`;
      break;
    case $effect`Puddingskin`:
      useItem_1 = $item`scroll of Puddingskin`;
      break;
    case $effect`Pulchritudinous Pressure`:
      useItem_1 = $item`pressurized potion of pulchritude`;
      break;
    case $effect`Punchable Face`:
      useSkill_1 = $skill`Extremely Punchable Face`;
      break;
    case $effect`Purity of Spirit`:
      useItem_1 = $item`cold-filtered water`;
      break;
    case $effect`Purr of the Feline`:
      useSkill_1 = $skill`Purr of the Feline`;
      break;
    case $effect`Purple Reign`:
      useItem_1 = $item`pulled violet taffy`;
      break;
    case $effect`Purple Tongue`:
      useItem_1 = $item`purple snowcone`;
      break;
    case $effect`Puzzle Fury`:
      useItem_1 = $item`37x37x37 puzzle cube`;
      break;
    case $effect`Pyrite Pride`:
      useItem_1 = $item`pebble of proud pyrite`;
      break;
    case $effect`Pyromania`:
      useSkill_1 = $skill`Pyromania`;
      break;
    case $effect`Queso Fustulento`:
      useSkill_1 = $skill`Queso Fustulento`;
      break;
    case $effect`Quiet Desperation`:
      useSkill_1 = $skill`Quiet Desperation`;
      break;
    case $effect`Quiet Determination`:
      useSkill_1 = $skill`Quiet Determination`;
      break;
    case $effect`Quiet Judgement`:
      useSkill_1 = $skill`Quiet Judgement`;
      break;
    case $effect`'Roids of the Rhinoceros`:
      useItem_1 = $item`bottle of rhinoceros hormones`;
      break;
    case $effect`Rad-Pro Tected`:
      useItem_1 = $item`Rad-Pro (1 oz.)`;
      break;
    case $effect`Radiating Black Body™`:
      useItem_1 = $item`Black Body™ spray`;
      break;
    case $effect`Rage of the Reindeer`:
      useSkill_1 = $skill`Rage of the Reindeer`;
      break;
    case $effect`Rainy Soul Miasma`:
      if ((0, import_kolmafia115.itemAmount)($item`thin black candle`) > 0) {
        useItem_1 = $item`thin black candle`;
      } else if ((0, import_kolmafia115.itemAmount)($item`Drizzlers™ Black Licorice`) > 0) {
        useItem_1 = $item`Drizzlers™ Black Licorice`;
      }
      break;
    case $effect`Ready to Snap`:
      useItem_1 = $item`ginger snaps`;
      break;
    case $effect`Really Quite Poisoned`:
      useSkill_1 = $skill`Disco Nap`;
      break;
    case $effect`Record Hunger`:
      useItem_1 = $item`The Pigs holo-record`;
      break;
    case $effect`Red Lettered`:
      useItem_1 = $item`red letter`;
      break;
    case $effect`Red Door Syndrome`:
      useItem_1 = $item`can of black paint`;
      break;
    case $effect`Red Tongue`:
      useItem_1 = $item`red snowcone`;
      break;
    case $effect`Reliable Backup`:
      useSkill_1 = $skill`Call For Backup`;
      break;
    case $effect`Reptilian Fortitude`:
      if (auto_have_skill($skill`Reptilian Fortitude`) && acquireTotem()) {
        useSkill_1 = $skill`Reptilian Fortitude`;
      }
      break;
    case $effect`Romantically Roused`:
      if (auto_haveIdolMicrophone()) {
        if (speculative) {
          return true;
        }
        (0, import_kolmafia115.cliExecute)("loathingidol ballad");
        ret = true;
      }
      break;
    case $effect`A Rose by Any Other Material`:
      useItem_1 = $item`squeaky toy rose`;
      break;
    case $effect`Rosewater Mark`:
      useItem_1 = $item`old rosewater cream`;
      break;
    case $effect`Rotten Memories`:
      useSkill_1 = $skill`Rotten Memories`;
      break;
    case $effect`Ruthlessly Efficient`:
      if ((0, import_kolmafia115.isUnrestricted)($item`Crimbot ROM: Ruthless Efficiency`)) {
        useSkill_1 = $skill`Ruthless Efficiency`;
      }
      break;
    case $effect`Salamander In Your Stomach`:
      useItem_1 = $item`salamander slurry`;
      break;
    case $effect`Saucemastery`:
      useSkill_1 = $skill`Sauce Contemplation`;
      break;
    case $effect`Sauce Monocle`:
      useSkill_1 = $skill`Sauce Monocle`;
      break;
    case $effect`Savage Beast Inside`:
      useItem_1 = $item`jar of "Creole Lady" marrrmalade`;
      break;
    case $effect`Scariersauce`:
      mustEquip = $item`velour viscometer`;
      useSkill_1 = $skill`Scarysauce`;
      break;
    case $effect`Scarysauce`:
      useSkill_1 = $skill`Scarysauce`;
      break;
    case $effect`Scavengers Scavenging`:
      useSkill_1 = $skill`Scavenge`;
      break;
    case $effect`Scowl of the Auk`:
      useSkill_1 = $skill`Scowl of the Auk`;
      break;
    case $effect`Scorched Earth`:
      useItem_1 = $item`Napalm In The Morning™ candle`;
      break;
    case $effect`Screaming!  SCREAMING!  AAAAAAAH!`:
      useSkill_1 = $skill`Powerful Vocal Chords`;
      break;
    case $effect`Seal Clubbing Frenzy`:
      useSkill_1 = $skill`Seal Clubbing Frenzy`;
      break;
    case $effect`Sealed Brain`:
      useItem_1 = $item`seal-brain elixir`;
      break;
    case $effect`Seeing Colors`:
      useItem_1 = $item`funky dried mushroom`;
      break;
    case $effect`Sepia Tan`:
      useItem_1 = $item`old bronzer`;
      break;
    case $effect`Serendipi Tea`:
      useItem_1 = $item`cuppa Serendipi tea`;
      break;
    case $effect`Serendipity`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug18Cast"))) {
        useSkill_1 = $skill`Aug. 18th: Serendipity Day!`;
      }
      break;
    case $effect`Seriously Mutated`:
      useItem_1 = $item`extra-potent gremlin mutagen`;
      break;
    case $effect`Shadow Waters`:
      if ((0, import_kolmafia115.itemAmount)($item`Rufus's shadow lodestone`) > 0) {
        if (speculative) {
          return true;
        }
        var savedLoc = (0, import_kolmafia115.myLocation)();
        (0, import_kolmafia115.setProperty)("auto_disableAdventureHandling", true.toString());
        autoAdv$2(auto_availableBrickRift());
        (0, import_kolmafia115.setProperty)("auto_disableAdventureHandling", false.toString());
        (0, import_kolmafia115.setLocation)(savedLoc);
        ret = true;
      }
      break;
    case $effect`Shells of the Damned`:
      useItem_1 = $item`cyan seashell`;
      break;
    case $effect`Shield of the Pastalord`:
      useSkill_1 = $skill`Shield of the Pastalord`;
      if ((0, import_kolmafia115.myClass)() !== $class`Pastamancer`) {
        buff = $effect`Flimsy Shield of the Pastalord`;
      }
      break;
    case $effect`Shelter of Shed`:
      useSkill_1 = $skill`Shelter of Shed`;
      break;
    case $effect`Shifted Reality`:
      useSkill_1 = $skill`Reality Shift`;
      break;
    case $effect`Shortly Hydrated`:
      useItem_1 = $item`short glass of water`;
      break;
    case $effect`Shrieking Weasel`:
      useItem_1 = $item`Shrieking Weasel holo-record`;
      break;
    case $effect`Simmering`:
      useSkill_1 = $skill`Simmer`;
      break;
    case $effect`Simply Invisible`:
      useItem_1 = $item`invisibility potion`;
      break;
    case $effect`Simply Irresistible`:
      useItem_1 = $item`irresistibility potion`;
      break;
    case $effect`Simply Irritable`:
      useItem_1 = $item`irritability potion`;
      break;
    case $effect`Singer's Faithful Ocelot`:
      useSkill_1 = $skill`Singer's Faithful Ocelot`;
      break;
    case $effect`Sinuses For Miles`:
      useItem_1 = $item`Mick's IcyVapoHotness Inhaler`;
      break;
    case $effect`Sleaze-Resistant Trousers`:
      useItem_1 = $item`sleaze powder`;
      break;
    case $effect`Sleazy Hands`:
      useItem_1 = $item`lotion of sleaziness`;
      break;
    case $effect`Slightly Larger Than Usual`:
      useItem_1 = $item`giant giant moth dust`;
      break;
    case $effect`Slinking Noodle Glob`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Slippery as a Seal`:
      if (auto_have_skill($skill`Seal Clubbing Frenzy`)) {
        mustEquip = $item`April Shower Thoughts shield`;
        useSkill_1 = $skill`Seal Clubbing Frenzy`;
      }
      break;
    case $effect`Slippery Oiliness`:
      useItem_1 = $item`oil of slipperiness`;
      break;
    case $effect`Smelly Pants`:
      useItem_1 = $item`stench powder`;
      break;
    case $effect`Smooth Movements`:
      useSkill_1 = $skill`Smooth Movement`;
      break;
    case $effect`Snarl of the Timberwolf`:
      useSkill_1 = $skill`Snarl of the Timberwolf`;
      break;
    case $effect`Snarl of Three Timberwolves`:
      mustEquip = $item`velour voulge`;
      useSkill_1 = $skill`Snarl of the Timberwolf`;
      break;
    case $effect`Snow Shoes`:
      useItem_1 = $item`snow cleats`;
      break;
    case $effect`So You Can Work More...`:
      useItem_1 = $item`baggie of powdered sugar`;
      break;
    case $effect`Soles of Glass`:
      if (auto_have_familiar($familiar`Grim Brother`) && !(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_grimBuff"))) {
        if (speculative) {
          return true;
        }
        (0, import_kolmafia115.visitUrl)("choice.php?pwd&whichchoice=835&option=1", true);
        ret = true;
      }
      break;
    case $effect`Somewhat Poisoned`:
      useSkill_1 = $skill`Disco Nap`;
      break;
    case $effect`Song of Accompaniment`:
      useSkill_1 = $skill`Song of Accompaniment`;
      break;
    case $effect`Song of Battle`:
      useSkill_1 = $skill`Song of Battle`;
      break;
    case $effect`Song of Bravado`:
      useSkill_1 = $skill`Song of Bravado`;
      break;
    case $effect`Song of Cockiness`:
      useSkill_1 = $skill`Song of Cockiness`;
      break;
    case $effect`Song of Fortune`:
      useSkill_1 = $skill`Song of Fortune`;
      break;
    case $effect`Song of the Glorious Lunch`:
      useSkill_1 = $skill`Song of the Glorious Lunch`;
      break;
    case $effect`Song of the North`:
      useSkill_1 = $skill`Song of the North`;
      break;
    case $effect`Song of Sauce`:
      useSkill_1 = $skill`Song of Sauce`;
      break;
    case $effect`Song of Slowness`:
      useSkill_1 = $skill`Song of Slowness`;
      break;
    case $effect`Song of Solitude`:
      useSkill_1 = $skill`Song of Solitude`;
      break;
    case $effect`Song of Starch`:
      useSkill_1 = $skill`Song of Starch`;
      break;
    case $effect`The Sonata of Sneakiness`:
      useSkill_1 = $skill`The Sonata of Sneakiness`;
      break;
    case $effect`Soothing Flute`:
      useSkill_1 = $skill`Soothing Flute`;
      break;
    case $effect`Soulerskates`:
      useSkill_1 = $skill`Soul Rotation`;
      break;
    case $effect`Sour Softshoe`:
      useItem_1 = $item`pulled yellow taffy`;
      break;
    case $effect`Spectral Awareness`:
      useSkill_1 = $skill`Spectral Awareness`;
      break;
    case $effect`Spice Haze`:
      useSkill_1 = $skill`Bind Spice Ghost`;
      break;
    case $effect`Spiky Hair`:
      useItem_1 = $item`super-spiky hair gel`;
      break;
    case $effect`Spiky Shell`:
      if (auto_have_skill($skill`Spiky Shell`) && acquireTotem()) {
        useSkill_1 = $skill`Spiky Shell`;
      }
      break;
    case $effect`Spirit of the Mountains`:
      if (!(0, import_kolmafia115.toBoolean)((0, import_kolmafia115.getProperty)("_aug1Cast"))) {
        useSkill_1 = $skill`Aug. 1st: Mountain Climbing Day!`;
      }
      break;
    case $effect`Spiritually Awake`:
      useItem_1 = $item`holy spring water`;
      break;
    case $effect`Spiritually Aware`:
      useItem_1 = $item`spirit beer`;
      break;
    case $effect`Spiritually Awash`:
      useItem_1 = $item`sacramental wine`;
      break;
    case $effect`Spiro Gyro`:
      useItem_1 = $item`programmable turtle`;
      break;
    case $effect`Spitting Rhymes`:
      if (auto_haveIdolMicrophone()) {
        if (speculative) {
          return true;
        }
        (0, import_kolmafia115.cliExecute)("loathingidol rhyme");
        ret = true;
      }
      break;
    case $effect`Spooky Hands`:
      useItem_1 = $item`lotion of spookiness`;
      break;
    case $effect`Spooky Weapon`:
      useItem_1 = $item`spooky nuggets`;
      break;
    case $effect`Spookypants`:
      useItem_1 = $item`spooky powder`;
      break;
    case $effect`Springy Fusilli`:
      useSkill_1 = $skill`Springy Fusilli`;
      break;
    case $effect`Squatting and Thrusting`:
      useItem_1 = $item`Squat-Thrust Magazine`;
      break;
    case $effect`Stabilizing Oiliness`:
      useItem_1 = $item`oil of stability`;
      break;
    case $effect`Standard Issue Bravery`:
      useItem_1 = $item`CSA bravery badge`;
      break;
    case $effect`Steak Skirt`:
      useSkill_1 = $skill`Steak Skirt`;
      break;
    case $effect`Steely-Eyed Squint`:
      useSkill_1 = $skill`Steely-Eyed Squint`;
      break;
    case $effect`Steroid Boost`:
      useItem_1 = $item`Knob Goblin steroids`;
      break;
    case $effect`Stewing`:
      useSkill_1 = $skill`Stew`;
      break;
    case $effect`Stevedave's Shanty of Superiority`:
      useSkill_1 = $skill`Stevedave's Shanty of Superiority`;
      break;
    case $effect`Stickler for Promptness`:
      useItem_1 = $item`potion of punctual companionship`;
      break;
    case $effect`Stinky Hands`:
      useItem_1 = $item`lotion of stench`;
      break;
    case $effect`Stinky Weapon`:
      useItem_1 = $item`stench nuggets`;
      break;
    case $effect`Stone-Faced`:
      useItem_1 = $item`stone wool`;
      break;
    case $effect`Strength of the Tortoise`:
      if (auto_have_skill($skill`Patience of the Tortoise`)) {
        mustEquip = $item`April Shower Thoughts shield`;
        useSkill_1 = $skill`Patience of the Tortoise`;
      }
      break;
    case $effect`Stretched`:
      useSkill_1 = $skill`Stretch`;
      break;
    case $effect`Strong Grip`:
      useItem_1 = $item`finger exerciser`;
      break;
    case $effect`Strong Resolve`:
      useItem_1 = $item`resolution: be stronger`;
      break;
    case $effect`Sugar Rush`:
      var _iterator = _createForOfIteratorHelper(
        $items`Crimbo fudge, Crimbo peppermint bark, Crimbo candied pecan, breath mint, Tasty Fun Good rice candy, that gum you like, Angry Farmer candy`
      ), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var it = _step.value;
          if ((0, import_kolmafia115.itemAmount)(it) > 0) {
            useItem_1 = it;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      break;
    case $effect`Superdrifting`:
      useItem_1 = $item`Superdrifter holo-record`;
      break;
    case $effect`Superheroic`:
      useItem_1 = $item`confiscated comic book`;
      break;
    case $effect`Superhuman Sarcasm`:
      useItem_1 = $item`serum of sarcasm`;
      break;
    case $effect`Suspicious Gaze`:
      useSkill_1 = $skill`Suspicious Gaze`;
      break;
    case $effect`Sweat Equity`:
      if (auto_haveBCZ()) {
        mustEquip = auto_getItemToEquipBCZ();
        useSkill_1 = $skill`BCZ: Sweat Equity`;
      }
      break;
    case $effect`Sweet Heart`:
      useItem_1 = $item`love song of sugary cuteness`;
      break;
    case $effect`Sweet\, Nuts`:
      useItem_1 = $item`Crimbo candied pecan`;
      break;
    case $effect`Sweetbreads Flambé`:
      useItem_1 = $item`Greek fire`;
      break;
    case $effect`Takin' It Greasy`:
      useSkill_1 = $skill`Grease Up`;
      break;
    case $effect`Tapased Out`:
      useItem_1 = $item`spinal tapas`;
      break;
    case $effect`Taped Up`:
      useSkill_1 = $skill`Tape Up`;
      break;
    case $effect`Taunt of Horus`:
      useItem_1 = $item`talisman of Horus`;
      break;
    case $effect`Temporarily Filtered`:
      useItem_1 = $item`single-use dust mask`;
      break;
    case $effect`Temporary Lycanthropy`:
      useItem_1 = $item`blood of the Wereseal`;
      break;
    case $effect`Tenacity of the Snapper`:
      if (auto_have_skill($skill`Tenacity of the Snapper`) && acquireTotem()) {
        useSkill_1 = $skill`Tenacity of the Snapper`;
      }
      break;
    case $effect`Tenderized`:
      useSkill_1 = $skill`Self-Tenderize`;
      break;
    case $effect`The Grass...  Is Blue...`:
      useItem_1 = $item`blue grass`;
      break;
    case $effect`There Is A Spoon`:
      useItem_1 = $item`dented spoon`;
      break;
    case $effect`They've Got Fleas`:
      useItem_1 = $item`out-of-work circus flea`;
      break;
    case $effect`This Is Where You're a Viking`:
      useItem_1 = $item`VYKEA woadpaint`;
      break;
    case $effect`Thoughtful Empathy`:
      if (auto_have_skill($skill`Empathy of the Newt`)) {
        mustEquip = $item`April Shower Thoughts shield`;
        useSkill_1 = $skill`Empathy of the Newt`;
      }
      break;
    case $effect`Throwing Some Shade`:
      useItem_1 = $item`shady shades`;
      break;
    case $effect`Ticking Clock`:
      useItem_1 = $item`cheap wind-up clock`;
      break;
    case $effect`Tingling Insides`:
      useItem_1 = $item`electric mushroom`;
      break;
    case $effect`Tingly Tongue`:
      useItem_1 = $item`spare battery`;
      break;
    case $effect`Toad In The Hole`:
      useItem_1 = $item`anti-anti-antidote`;
      break;
    case $effect`Tomato Power`:
      useItem_1 = $item`tomato juice of powerful power`;
      break;
    case $effect`Too Shamed`:
      useItem_1 = $item`shim of shame shale`;
      break;
    case $effect`Tortious`:
      useItem_1 = $item`mocking turtle`;
      break;
    case $effect`Tricky Timpani`:
      useSkill_1 = $skill`Tricky Timpani`;
      break;
    case $effect`Triple-Sized`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Truly Gritty`:
      useItem_1 = $item`true grit`;
      break;
    case $effect`Tubes of Universal Meat`:
      if (auto_have_skill($skill`Manicotti Meditation`)) {
        mustEquip = $item`April Shower Thoughts shield`;
        useSkill_1 = $skill`Manicotti Meditation`;
      }
      break;
    case $effect`Twangy`:
      if (auto_haveIdolMicrophone()) {
        if (speculative) {
          return true;
        }
        (0, import_kolmafia115.cliExecute)("loathingidol country");
        ret = true;
      }
      break;
    case $effect`Twen Tea`:
      useItem_1 = $item`cuppa Twen tea`;
      break;
    case $effect`Twinkly Weapon`:
      useItem_1 = $item`twinkly nuggets`;
      break;
    case $effect`Ultra-Soft Steps`:
      useItem_1 = $item`ultra-soft ferns`;
      break;
    case $effect`Ultraheart`:
      useSkill_1 = $skill`Heartstone: %buff`;
      break;
    case $effect`Unmuffled`:
      if ((0, import_kolmafia115.getProperty)("peteMotorbikeMuffler") === "Extra-Loud Muffler") {
        useSkill_1 = $skill`Rev Engine`;
      }
      break;
    case $effect`Unrunnable Face`:
      useItem_1 = $item`runproof mascara`;
      break;
    case $effect`Unusual Perspective`:
      useItem_1 = $item`unusual oil`;
      break;
    case $effect`Up To 11`:
      if (auto_haveBCZ()) {
        mustEquip = auto_getItemToEquipBCZ();
        useSkill_1 = $skill`BCZ: Dial it up to 11`;
      }
      break;
    case $effect`Ur-Kel's Aria of Annoyance`:
      useSkill_1 = $skill`Ur-Kel's Aria of Annoyance`;
      break;
    case $effect`Using Protection`:
      useItem_1 = $item`orcish rubber`;
      break;
    case $effect`Visions of the Deep Dark Deeps`:
      useSkill_1 = $skill`Deep Dark Visions`;
      break;
    case $effect`Vital`:
      useItem_1 = $item`Doc Galaktik's Vitality Serum`;
      break;
    case $effect`Vitali Tea`:
      useItem_1 = $item`cuppa Vitali tea`;
      break;
    case $effect`Walberg's Dim Bulb`:
      useSkill_1 = $skill`Walberg's Dim Bulb`;
      break;
    case $effect`Waking the Dead`:
      if (auto_have_skill($skill`Summon Horde`)) {
        useSkill_1 = $skill`Summon Minion`;
      }
      break;
    case $effect`WAKKA WAKKA WAKKA`:
      useItem_1 = $item`yellow pixel potion`;
      break;
    case $effect`Warm Shoulders`:
      useItem_1 = $item`shoulder-warming lotion`;
      break;
    case $effect`Wasabi With You`:
      useItem_1 = $item`wasabi marble soda`;
      break;
    case $effect`Well-Oiled`:
      useItem_1 = $item`Oil of Parrrlay`;
      break;
    case $effect`Well-Swabbed Ear`:
      useItem_1 = $item`Swabbie™ swab`;
      break;
    case $effect`Wet and Greedy`:
      useItem_1 = $item`goblin water`;
      break;
    case $effect`Whispering Strands`:
      useSkill_1 = import_kolmafia115.Skill.none;
      break;
    case $effect`Who's Going to Pay This Drunken Sailor?`:
      useSkill_1 = $skill`Who's Going to Pay This Drunken Sailor?`;
      break;
    case $effect`Wildsun Boon`:
      if (auto_canARBSupplyDrop()) {
        if (speculative) {
          return true;
        }
        ARBSupplyDrop("wsb");
        ret = true;
      }
      break;
    case $effect`Wisdom of Others`:
      useItem_1 = $item`filled mosquito`;
      break;
    case $effect`Wisdom of the Autumn Years`:
      useItem_1 = $item`autumn years wisdom`;
      break;
    case $effect`Wisdom of Thoth`:
      useSkill_1 = $skill`Wisdom of Thoth`;
      break;
    case $effect`Wit Tea`:
      useItem_1 = $item`cuppa Wit tea`;
      break;
    case $effect`Wizard Squint`:
      useSkill_1 = $skill`Wizard Squint`;
      break;
    case $effect`Woad Warrior`:
      useItem_1 = $item`pygmy pygment`;
      break;
    case $effect`Worth Your Salt`:
      useItem_1 = $item`salt wages`;
      break;
    case $effect`Wry Smile`:
      useSkill_1 = $skill`Wry Smile`;
      break;
    case $effect`Yoloswagyoloswag`:
      useItem_1 = $item`Yolo™ chocolates`;
      break;
    case $effect`You Read The Manual`:
      useItem_1 = $item`O'RLY manual`;
      break;
    case $effect`Your Fifteen Minutes`:
      useSkill_1 = $skill`Fifteen Minutes of Flame`;
      break;
    case $effect`Zomg WTF`:
      useSkill_1 = $skill`Ag-grave-ation`;
      break;
    default:
      (0, import_kolmafia115.abort)(`Effect (${buff}) is not known to us. Beep.`);
      break;
  }
  if ((0, import_kolmafia115.myClass)() !== $class`Pastamancer`) {
    switch (buff) {
      case $effect`Bloody Potato Bits`:
        useSkill_1 = $skill`Bind Vampieroghi`;
        break;
      case $effect`Macaroni Coating`:
        useSkill_1 = $skill`Bind Undead Elbow Macaroni`;
        break;
      case $effect`Pasta Eyeball`:
        useSkill_1 = $skill`Bind Lasagmbie`;
        break;
      case $effect`Penne Fedora`:
        useSkill_1 = $skill`Bind Penne Dreadful`;
        break;
      case $effect`Slinking Noodle Glob`:
        useSkill_1 = $skill`Bind Vermincelli`;
        break;
      case $effect`Spice Haze`:
        useSkill_1 = $skill`Bind Spice Ghost`;
        break;
      case $effect`Whispering Strands`:
        useSkill_1 = $skill`Bind Angel Hair Wisp`;
        break;
    }
  }
  if ((0, import_kolmafia115.myClass)() === $class`Turtle Tamer`) {
    switch (buff) {
      case $effect`Boon of the War Snapper`:
        useSkill_1 = $skill`Spirit Boon`;
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of the War Snapper`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of the War Snapper`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Blessing of the War Snapper`) === 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        break;
      case $effect`Boon of She-Who-Was`:
        useSkill_1 = $skill`Spirit Boon`;
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of She-Who-Was`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of She-Who-Was`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Blessing of She-Who-Was`) === 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        break;
      case $effect`Boon of the Storm Tortoise`:
        useSkill_1 = $skill`Spirit Boon`;
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of the Storm Tortoise`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of the Storm Tortoise`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Blessing of the Storm Tortoise`) === 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        break;
      case $effect`Disdain of the War Snapper`:
        useSkill_1 = import_kolmafia115.Skill.none;
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of the War Snapper`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of the War Snapper`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Blessing of the War Snapper`) === 0) {
          useSkill_1 = $skill`Blessing of the War Snapper`;
        }
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of the Storm Tortoise`) !== 0 || (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of the Storm Tortoise`) !== 0 || (0, import_kolmafia115.haveEffect)($effect`Blessing of the Storm Tortoise`) !== 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of She-Who-Was`) !== 0 || (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of She-Who-Was`) !== 0 || (0, import_kolmafia115.haveEffect)($effect`Blessing of She-Who-Was`) !== 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        break;
      case $effect`Disdain of She-Who-Was`:
        useSkill_1 = import_kolmafia115.Skill.none;
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of She-Who-Was`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of She-Who-Was`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Blessing of She-Who-Was`) === 0) {
          useSkill_1 = $skill`Blessing of She-Who-Was`;
        }
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of the Storm Tortoise`) !== 0 || (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of the Storm Tortoise`) !== 0 || (0, import_kolmafia115.haveEffect)($effect`Blessing of the Storm Tortoise`) !== 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        break;
      case $effect`Disdain of the Storm Tortoise`:
        useSkill_1 = import_kolmafia115.Skill.none;
        if ((0, import_kolmafia115.haveEffect)($effect`Glorious Blessing of the Storm Tortoise`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Grand Blessing of the Storm Tortoise`) === 0 && (0, import_kolmafia115.haveEffect)($effect`Blessing of the Storm Tortoise`) === 0) {
          useSkill_1 = $skill`Blessing of the Storm Tortoise`;
        }
        break;
    }
  } else {
    switch (buff) {
      case $effect`Disdain of She-Who-Was`:
        useSkill_1 = $skill`Blessing of She-Who-Was`;
        if ((0, import_kolmafia115.haveEffect)($effect`Disdain of the War Snapper`) > 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        break;
      case $effect`Disdain of the Storm Tortoise`:
        useSkill_1 = $skill`Blessing of the Storm Tortoise`;
        if ((0, import_kolmafia115.haveEffect)($effect`Disdain of She-Who-Was`) > 0 || (0, import_kolmafia115.haveEffect)($effect`Disdain of the War Snapper`) > 0) {
          useSkill_1 = import_kolmafia115.Skill.none;
        }
        break;
      case $effect`Disdain of the War Snapper`:
        useSkill_1 = $skill`Blessing of the War Snapper`;
        break;
    }
  }
  if (buff === $effect`Triple-Sized`) {
    if (speculative) {
      return auto_powerfulGloveCharges() >= 5;
    } else {
      return auto_powerfulGloveStats();
    }
  }
  if (buff === $effect`Invisible Avatar`) {
    if (speculative) {
      return auto_powerfulGloveCharges() >= 5;
    } else {
      return auto_powerfulGloveNoncombat();
    }
  }
  if ($effects`Feeling Lonely, Feeling Excited, Feeling Nervous, Feeling Peaceful`.includes(
    buff
  ) && auto_haveEmotionChipSkills()) {
    var feeling = (0, import_kolmafia115.toSkill)(buff);
    if (buffMaintain(feeling, buff, mustEquip, mp_min, casts, turns, true)) {
      if (speculative) {
        return feeling.timescast < feeling.dailylimit;
      } else if (feeling.timescast < feeling.dailylimit) {
        useSkill_1 = (0, import_kolmafia115.toSkill)(buff);
        handleTracker(useSkill_1.toString(), "auto_otherstuff");
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  var falloutEffects = $effects`Drunk and Avuncular, Lucky Struck, Ministrations in the Dark, Power\, Man, Record Hunger, Shrieking Weasel, Superdrifting`;
  if (falloutEffects.includes(buff)) {
    if (!possessEquipment($item`Wrist-Boy`)) {
      return false;
    }
    if ($effects`Drunk and Avuncular, Record Hunger`.includes(buff)) {
      if (inAftercore()) {
        return false;
      }
      if ((0, import_kolmafia115.haveEffect)(buff) >= 3) {
        return false;
      }
    }
    var _iterator2 = _createForOfIteratorHelper(
      falloutEffects
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var ef = _step2.value;
        if ((0, import_kolmafia115.haveEffect)(ef) > 0 && ef !== buff) {
          uneffect(ef);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (useItem_1 !== import_kolmafia115.Item.none) {
    return buffMaintain$1(useItem_1, buff, casts, turns, speculative);
  }
  if (useSkill_1 !== import_kolmafia115.Skill.none) {
    return buffMaintain(
      useSkill_1,
      buff,
      mustEquip,
      mp_min,
      casts,
      turns,
      speculative
    );
  }
  return ret;
}
function buffMaintain$3(buff, mp_min, casts, turns) {
  return buffMaintain$2(buff, mp_min, casts, turns, false);
}
function buffMaintain$4(buff) {
  return buffMaintain$3(buff, 0, 1, 1);
}
function auto_faceCheck(face) {
  var FacialExpressions = $effects`Snarl of the Timberwolf, Scowl of the Auk, Stiff Upper Lip, Patient Smile, Quiet Determination, Arched Eyebrow of the Archmage, Wizard Squint, Quiet Judgement, Icy Glare, Wry Smile, Disco Leer, Disco Smirk, Suspicious Gaze, Knowing Smile, Quiet Desperation, Inscrutable Gaze`;
  var CanEmote = true;
  var _iterator3 = _createForOfIteratorHelper(
    FacialExpressions
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var FExp = _step3.value;
      if ((0, import_kolmafia115.haveEffect)(FExp) > 0) {
        CanEmote = false;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if (CanEmote) {
    buffMaintain$4(face);
  } else {
    auto_log_debug$1(
      `Can not get ${face} expression as we are already emoting.`
    );
    return false;
  }
  return true;
}

// src/autoscend/iotms/mr2007.ts
var import_kolmafia116 = require("kolmafia");
var $_auto_hasNavelRing_navelRing;
var $_auto_hasNavelRing_replicaNavelRing;
function auto_hasNavelRing() {
  $_auto_hasNavelRing_navelRing ?? ($_auto_hasNavelRing_navelRing = $item`navel ring of navel gazing`);
  if (auto_is_valid($_auto_hasNavelRing_navelRing) && ((0, import_kolmafia116.itemAmount)($_auto_hasNavelRing_navelRing) > 0 || (0, import_kolmafia116.haveEquipped)($_auto_hasNavelRing_navelRing))) {
    return true;
  }
  $_auto_hasNavelRing_replicaNavelRing ?? ($_auto_hasNavelRing_replicaNavelRing = import_kolmafia116.Item.get(
    "replica navel ring of navel gazing"
  ));
  return auto_is_valid($_auto_hasNavelRing_replicaNavelRing) && ((0, import_kolmafia116.itemAmount)($_auto_hasNavelRing_replicaNavelRing) > 0 || (0, import_kolmafia116.haveEquipped)($_auto_hasNavelRing_replicaNavelRing));
}
function auto_navelFreeRunChance() {
  if (!auto_hasNavelRing()) {
    return 0;
  }
  var navelRunAways = (0, import_kolmafia116.toInt)((0, import_kolmafia116.getProperty)("_navelRunaways"));
  if (navelRunAways < 3) {
    return 100;
  }
  if (navelRunAways < 6) {
    return 80;
  }
  if (navelRunAways < 9) {
    return 50;
  }
  return 20;
}

// src/autoscend/paths/class_act.ts
var import_kolmafia117 = require("kolmafia");

// src/autoscend/paths/class_act_two.ts
var import_kolmafia118 = require("kolmafia");

// src/autoscend/paths/journeyman.ts
var import_kolmafia119 = require("kolmafia");

// src/autoscend/auto_util.ts
function trim(input) {
  return input.trim();
}
function safeString(input) {
  return input.replaceAll(/[,:]/g, ".");
}
function handleTracker(used, tracker) {
  var cur = (0, import_kolmafia120.getProperty)(tracker);
  if (cur !== "") {
    cur = `${cur}, `;
  }
  cur = `${cur}(${(0, import_kolmafia120.myDaycount)()}:${safeString(used)}:${(0, import_kolmafia120.myTurncount)()})`;
  (0, import_kolmafia120.setProperty)(tracker, cur);
}
function handleTracker$1(used, detail, tracker) {
  var cur = (0, import_kolmafia120.getProperty)(tracker);
  if (cur !== "") {
    cur = `${cur}, `;
  }
  cur = `${cur}(${(0, import_kolmafia120.myDaycount)()}:${safeString(used)}:${safeString(detail)}:${(0, import_kolmafia120.myTurncount)()})`;
  (0, import_kolmafia120.setProperty)(tracker, cur);
}
function handleTracker$2(used, loc, detail, tracker) {
  var cur = (0, import_kolmafia120.getProperty)(tracker);
  if (cur !== "") {
    cur = `${cur}, `;
  }
  if (loc === "none") {
    handleTracker$1(used, detail, tracker);
    return;
  }
  cur = `${cur}(${(0, import_kolmafia120.myDaycount)()}:${safeString(used)}:${safeString(loc)}:${safeString(detail)}:${(0, import_kolmafia120.myTurncount)()})`;
  (0, import_kolmafia120.setProperty)(tracker, cur);
}
function loopHandlerDelay(counterSetting) {
  return loopHandlerDelay$1(counterSetting, 3);
}
function loopHandlerDelay$1(counterSetting, threshold) {
  if ((0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)(counterSetting)) >= threshold) {
    (0, import_kolmafia120.setProperty)(
      counterSetting,
      ((0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)(counterSetting)) - 1).toString()
    );
    return true;
  }
  return false;
}
function loopHandlerDelayAll() {
  var boo = loopHandlerDelay("_auto_lastABooCycleFix");
  var digitize = loopHandlerDelay("_auto_digitizeAssassinCounter");
  return boo || digitize;
}
function internalQuestStatus(prop) {
  var status = (0, import_kolmafia120.getProperty)(prop);
  if (status === "unstarted") {
    return -1;
  }
  if (status === "started") {
    return 0;
  }
  if (status === "finished") {
    return 9999;
  }
  var my_element = new AshMatcher("step(\\d+)", status);
  if (my_element.find()) {
    return (0, import_kolmafia120.toInt)(my_element.group(1));
  }
  return -1;
}
function canYellowRay(target) {
  if (in_pokefam()) {
    return false;
  }
  if ((0, import_kolmafia120.haveEffect)($effect`Everything Looks Yellow`) <= 0) {
    if (auto_hasParka() && auto_is_valid$2($skill`Spit jurassic acid`) && hasTorso$1()) {
      return yellowRayCombatString(
        target,
        false,
        $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
          target
        )
      ) !== "";
    }
    if ((0, import_kolmafia120.itemAmount)($item`Clan VIP Lounge key`) > 0 && (0, import_kolmafia120.toBoolean)(
      // Need VIP access
      (0, import_kolmafia120.getProperty)("_fireworksShop")
    ) && (0, import_kolmafia120.itemAmount)(
      // in a clan that has the Underground Fireworks Shop
      $item`yellow rocket`
    ) === 0 && auto_is_valid(
      // Don't buy if we already have one
      $item`yellow rocket`
    ) && (0, import_kolmafia120.myMeat)() > (0, import_kolmafia120.npcPrice)(
      // or if it's not valid
      $item`yellow rocket`
    ) + meatReserve()) {
      (0, import_kolmafia120.cliExecute)(`acquire ${$item`yellow rocket`}`);
    }
    if ((0, import_kolmafia120.itemAmount)($item`yellow rocket`) > 0 && auto_is_valid($item`yellow rocket`) && yellowRayCombatString(
      target,
      false,
      $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
        target
      )
    ) !== "") {
      return true;
    }
    if (auto_haveAprilShowerShield() && (0, import_kolmafia120.itemAmount)(
      //need April Shower Thoughts Shield
      $item`spitball`
    ) === 0 && auto_is_valid(
      //don't buy if we already have one
      $item`spitball`
    ) && (0, import_kolmafia120.itemAmount)(
      //or if it's not valid
      $item`glob of wet paper`
    ) > 0) {
      if ((0, import_kolmafia120.buy)($coinmaster`Using your Shower Thoughts`, 1, $item`spitball`)) {
        handleTracker$1(
          $item`April Shower Thoughts shield`.toString(),
          $item`spitball`.toString(),
          "auto_iotm_claim"
        );
      }
    }
    if (auto_is_valid($item`spitball`) && (0, import_kolmafia120.itemAmount)($item`spitball`) > 0) {
      return yellowRayCombatString(
        target,
        false,
        $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
          target
        )
      ) !== "";
    }
    if (auto_haveRoman() && auto_can_equip($item`Roman Candelabra`) && auto_is_valid$2($skill`Blow the Yellow Candle!`)) {
      return yellowRayCombatString(
        target,
        false,
        $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
          target
        )
      ) !== "";
    }
    if (auto_hasRetrocape()) {
      return yellowRayCombatString(
        target,
        false,
        $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
          target
        )
      ) !== "";
    }
    if (canChangeToFamiliar($familiar`Crimbo Shrub`)) {
      if ((0, import_kolmafia120.itemAmount)($item`box of old Crimbo decorations`) === 0) {
        var curr = (0, import_kolmafia120.myFamiliar)();
        (0, import_kolmafia120.useFamiliar)($familiar`Crimbo Shrub`);
        (0, import_kolmafia120.useFamiliar)(curr);
      }
      if ((0, import_kolmafia120.getProperty)("shrubGifts") !== "yellow" && !(0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("_shrubDecorated"))) {
        var temp = (0, import_kolmafia120.visitUrl)("inv_use.php?pwd=&which=3&whichitem=7958");
        temp = (0, import_kolmafia120.visitUrl)(
          "choice.php?pwd=&whichchoice=999&option=1&topper=1&lights=1&garland=1&gift=1"
        );
      }
    }
    if (!(0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("_internetViralVideoBought")) && (0, import_kolmafia120.itemAmount)(
      //can only buy 1 per day
      $item`BACON`
    ) >= 20 && auto_is_valid(
      //it costs 20 bacon
      $item`viral video`
    ) && !in_koe()) {
      (0, import_kolmafia120.create)(1, $item`viral video`);
    }
  }
  return yellowRayCombatString(
    target,
    false,
    $monsters`bearpig topiary animal, elephant (meatcar?) topiary animal, spider (duck?) topiary animal, knight (Snake)`.includes(
      target
    )
  ) !== "";
}
function canYellowRay$1() {
  return canYellowRay(import_kolmafia120.Monster.none);
}
function auto_combat_appearance_rates(place, queue) {
  var res_including_noncombat = new Map(
    Object.entries((0, import_kolmafia120.appearanceRates)(place, queue)).map(
      (_ref) => {
        var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
        return [
          import_kolmafia120.Monster.get(_k),
          _v
        ];
      }
    )
  );
  var res_excluding_noncombat = /* @__PURE__ */ new Map();
  var noncombat_frequency = res_including_noncombat.get(import_kolmafia120.Monster.none) ?? res_including_noncombat.set(import_kolmafia120.Monster.none, 0).get(import_kolmafia120.Monster.none);
  if (noncombat_frequency === 0 || noncombat_frequency >= 100) {
    return res_including_noncombat;
  }
  var _iterator8 = _createForOfIteratorHelper(
    res_including_noncombat
  ), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var _step8$value = _slicedToArray(_step8.value, 2), mob = _step8$value[0], freq = _step8$value[1];
      if (mob !== import_kolmafia120.Monster.none) {
        res_excluding_noncombat.set(
          mob,
          freq / (100 - noncombat_frequency) * 100
        );
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return res_excluding_noncombat;
}
function auto_combat_appearance_rates$1(place) {
  return auto_combat_appearance_rates(place, false);
}
function auto_banishesUsedAt(loc) {
  function auto_reallyBanishesUsedAt(loc2) {
    var banished = (0, import_kolmafia120.getProperty)("banishedMonsters");
    var banishList = new Map(
      (0, import_kolmafia120.splitString)(banished, ":").map((_v, _i) => [_i, _v])
    );
    var atLoc = new Map(
      (0, import_kolmafia120.getMonsters)(loc2).map((_v, _i) => [_i, _v])
    );
    var used2 = /* @__PURE__ */ new Map();
    for (var i = 0; i + 1 < banishList.size; i = i + 3) {
      var curMon = (0, import_kolmafia120.toMonster)(
        banishList.get(i) ?? banishList.set(i, "").get(i)
      );
      var curUsed = banishList.get(i + 1) ?? banishList.set(i + 1, "").get(i + 1);
      for (var j = 0; j < atLoc.size; j++) {
        if ((atLoc.get(j) ?? atLoc.set(j, import_kolmafia120.Monster.none).get(j)) === curMon) {
          used2.set(curUsed, true);
        }
      }
    }
    return used2;
  }
  if ($locations`Next to that Barrel with Something Burning in it, Out by that Rusted-Out Car, Over Where the Old Tires Are, Near an Abandoned Refrigerator`.includes(
    loc
  )) {
    var gremlinBanishes = /* @__PURE__ */ new Map();
    var _iterator0 = _createForOfIteratorHelper(
      $locations`Next to that Barrel with Something Burning in it, Out by that Rusted-Out Car, Over Where the Old Tires Are, Near an Abandoned Refrigerator`
    ), _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
        var l = _step0.value;
        var used = auto_reallyBanishesUsedAt(l);
        var _iterator1 = _createForOfIteratorHelper(
          used.keys()
        ), _step1;
        try {
          for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
            var s = _step1.value;
            gremlinBanishes.set(s, true);
          }
        } catch (err) {
          _iterator1.e(err);
        } finally {
          _iterator1.f();
        }
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    return gremlinBanishes;
  }
  return auto_reallyBanishesUsedAt(loc);
}
function auto_wantToBanish(enemy, loc) {
  var _appearanceRates, _enemy$toString;
  if (((_appearanceRates = (0, import_kolmafia120.appearanceRates)(loc))[_enemy$toString = enemy.toString()] ?? (_appearanceRates[_enemy$toString] = 0)) <= 0) {
    return false;
  }
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var monstersToBanish = auto_getMonsters("banish");
  (0, import_kolmafia120.setLocation)(locCache);
  return monstersToBanish.get(enemy) ?? monstersToBanish.set(enemy, false).get(enemy);
}
function auto_wantToBanish$1(enemyphylum, loc) {
  if ((0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_dontPhylumBanish"))) {
    return false;
  }
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var phylumToBanish = auto_getPhylum("banish");
  (0, import_kolmafia120.setLocation)(locCache);
  return phylumToBanish.get(enemyphylum) ?? phylumToBanish.set(enemyphylum, false).get(enemyphylum);
}
function auto_forceFreeRun(combat) {
  if ((0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_forceFreeRun")) && combat) {
    (0, import_kolmafia120.setProperty)("auto_forceFreeRun", false.toString());
    return true;
  }
  if ((0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_forceFreeRun"))) {
    return true;
  }
  return false;
}
function auto_wantToFreeRun(enemy, loc) {
  var _appearanceRates2, _enemy$toString2;
  if (((_appearanceRates2 = (0, import_kolmafia120.appearanceRates)(loc))[_enemy$toString2 = enemy.toString()] ?? (_appearanceRates2[_enemy$toString2] = 0)) <= 0) {
    return false;
  }
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var monstersToFreeRun = auto_getMonsters("freerun");
  (0, import_kolmafia120.setLocation)(locCache);
  return monstersToFreeRun.get(enemy) ?? monstersToFreeRun.set(enemy, false).get(enemy);
}
function freeRunCombatStringPreBanish(enemy, loc, inCombat) {
  if (isFreeMonster$1(enemy, loc)) {
    return "";
  }
  if (is_werewolf()) {
    return "";
  }
  if (!inAftercore() && (0, import_kolmafia120.haveEffect)($effect`Everything Looks Green`) === 0) {
    if (isGhost(enemy) && canUse$4($item`T.U.R.D.S. Key`) && (0, import_kolmafia120.itemAmount)($item`T.U.R.D.S. Key`) > 0) {
      return useItem$1($item`T.U.R.D.S. Key`);
    }
    if (canUse$4($item`short writ of habeas corpus`) && (0, import_kolmafia120.itemAmount)($item`short writ of habeas corpus`) > 0 && $monsters`pygmy orderlies, pygmy witch lawyer, pygmy witch nurse`.includes(
      enemy
    )) {
      return useItem$1($item`short writ of habeas corpus`);
    }
  }
  return "";
}
function freeRunCombatString(enemy, loc, inCombat) {
  if (isFreeMonster$1(enemy, (0, import_kolmafia120.myLocation)())) {
    return "";
  }
  if (is_werewolf()) {
    return "";
  }
  var pre_banish = freeRunCombatStringPreBanish(enemy, loc, inCombat);
  if (pre_banish !== "") {
    return pre_banish;
  }
  if (!inAftercore() && (0, import_kolmafia120.haveEffect)($effect`Everything Looks Green`) === 0) {
    if (auto_haveSpringShoes() && auto_is_valid$2($skill`Spring Away`)) {
      if (!inCombat) {
        autoEquip$1($item`spring shoes`);
        return `skill ${$skill`Spring Away`}`;
      } else {
        if (canUse$2($skill`Spring Away`)) {
          return `skill ${$skill`Spring Away`}`;
        }
      }
    }
    if (auto_haveRoman() && auto_is_valid$2($skill`Blow the Green Candle!`)) {
      if (!inCombat) {
        autoEquip$1($item`Roman Candelabra`);
        return `skill ${$skill`Blow the Green Candle!`}`;
      } else {
        if (canUse$2($skill`Blow the Green Candle!`)) {
          return `skill ${$skill`Blow the Green Candle!`}`;
        }
      }
    }
    var _iterator11 = _createForOfIteratorHelper(
      $items`green smoke bomb, tattered scrap of paper, GOTO`
    ), _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
        var it = _step11.value;
        if (canUse$4(it) && (0, import_kolmafia120.itemAmount)(it) > 0) {
          return useItem$1(it);
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }
  if (canChangeToFamiliar($familiar`Frumious Bandersnatch`)) {
    var banderRunsLeft = (0, import_kolmafia120.floor)(auto_famWeight$1($familiar`Frumious Bandersnatch`) / 5) - (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_banderRunaways"));
    if (is_professor()) {
      return "";
    }
    if (!inCombat) {
      if (auto_have_skill($skill`The Ode to Booze`) && banderRunsLeft > 0 && ((0, import_kolmafia120.haveEffect)($effect`Ode to Booze`) > 0 || buffMaintain$4($effect`Ode to Booze`)) && handleFamiliar$1($familiar`Frumious Bandersnatch`)) {
        (0, import_kolmafia120.useFamiliar)($familiar`Frumious Bandersnatch`);
        return `runaway familiar ${$familiar`Frumious Bandersnatch`}`;
      }
    } else {
      if ((0, import_kolmafia120.myFamiliar)() === $familiar`Frumious Bandersnatch` && (0, import_kolmafia120.haveEffect)($effect`Ode to Booze`) > 0 && banderRunsLeft > 0) {
        return `runaway familiar ${$familiar`Frumious Bandersnatch`}`;
      }
    }
  }
  if (canChangeToFamiliar($familiar`Pair of Stomping Boots`)) {
    var _banderRunsLeft = (0, import_kolmafia120.floor)(auto_famWeight$1($familiar`Pair of Stomping Boots`) / 5) - (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_banderRunaways"));
    if (is_professor()) {
      return "";
    }
    if (!inCombat) {
      if (_banderRunsLeft > 0 && handleFamiliar$1($familiar`Pair of Stomping Boots`)) {
        (0, import_kolmafia120.useFamiliar)($familiar`Pair of Stomping Boots`);
        return `runaway familiar ${$familiar`Pair of Stomping Boots`}`;
      }
    } else {
      if ((0, import_kolmafia120.myFamiliar)() === $familiar`Pair of Stomping Boots` && _banderRunsLeft > 0) {
        return `runaway familiar ${$familiar`Pair of Stomping Boots`}`;
      }
    }
  }
  if (auto_hasNavelRing()) {
    if (!inCombat && auto_navelFreeRunChance() >= 80) {
      if (in_lol()) {
        autoEquip$1($item`replica navel ring of navel gazing`);
      } else {
        autoEquip$1($item`navel ring of navel gazing`);
      }
      return `runaway item ${$item`navel ring of navel gazing`}`;
    } else {
      if ((0, import_kolmafia120.haveEquipped)($item`navel ring of navel gazing`) || (0, import_kolmafia120.haveEquipped)($item`replica navel ring of navel gazing`) && (auto_navelFreeRunChance() >= 80 || (0, import_kolmafia120.myLevel)() >= 13)) {
        return `runaway item ${$item`navel ring of navel gazing`}`;
      }
    }
  }
  if (canUse$2($skill`Peel Out`) && pete_peelOutRemaining() > 0) {
    return `skill ${$skill`Peel Out`}`;
  }
  if ((inCombat ? auto_have_skill($skill`Bowl a Curveball`) : (0, import_kolmafia120.itemAmount)($item`cosmic bowling ball`) > 0) && auto_is_valid$2($skill`Bowl a Curveball`)) {
    return `skill ${$skill`Bowl a Curveball`}`;
  }
  var potential_split_pea_soup = (0, import_kolmafia120.availableAmount)($item`whirled peas`) / 2 + (0, import_kolmafia120.availableAmount)($item`handful of split pea soup`);
  if (potential_split_pea_soup > 1 && auto_is_valid($item`handful of split pea soup`)) {
    return `item ${$item`handful of split pea soup`}`;
  }
  if (!inAftercore()) {
    var _iterator12 = _createForOfIteratorHelper(
      $items`giant eraser`
    ), _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
        var _it = _step12.value;
        if (canUse$4(_it) && (0, import_kolmafia120.itemAmount)(_it) > 0) {
          return useItem$1(_it);
        }
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }
  return "";
}
function hasTorso$1() {
  return (0, import_kolmafia120.haveSkill)($skill`Torso Awareness`) || (0, import_kolmafia120.haveSkill)($skill`Best Dressed`) || robot_cpu(9, false);
}
function isGuildClass() {
  return $classes`Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief`.includes(
    (0, import_kolmafia120.myClass)()
  );
}
function elemental_resist(goal) {
  return (0, import_kolmafia120.toInt)((0, import_kolmafia120.numericModifier)(`${goal} resistance`));
}
function preferredLibram() {
  if (auto_have_skill($skill`Summon BRICKOs`) && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_brickoEyeSummons")) < 3) {
    return $skill`Summon BRICKOs`;
  }
  if (auto_have_skill($skill`Summon Party Favor`) && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_favorRareSummons")) < 3) {
    return $skill`Summon Party Favor`;
  }
  if (auto_have_skill($skill`Summon Resolutions`)) {
    return $skill`Summon Resolutions`;
  }
  if (auto_have_skill($skill`Summon Taffy`)) {
    return $skill`Summon Taffy`;
  }
  return import_kolmafia120.Skill.none;
}
function whatStatSmile() {
  switch ((0, import_kolmafia120.myClass)()) {
    case $class`Seal Clubber`:
    case $class`Turtle Tamer`:
      return $effect`Patient Smile`;
    case $class`Sauceror`:
    case $class`Pastamancer`:
      if ((0, import_kolmafia120.haveSkill)($skill`Inscrutable Gaze`)) {
        return $effect`Inscrutable Gaze`;
      }
      return $effect`Wry Smile`;
    case $class`Disco Bandit`:
    case $class`Accordion Thief`:
      return $effect`Knowing Smile`;
  }
  return import_kolmafia120.Effect.none;
}
function isGhost(mon) {
  var ghosts = $monsters`ancient ghost, angry ghost, banshee librarian, Battlie Knight Ghost, Bettie Barulio, chalkdust wraith, Claybender Sorcerer Ghost, coaltergeist, cold ghost, contemplative ghost, Dusken Raider Ghost, ghost, ghost actor, ghost miner, ghost of Elizabeth Spookyraven, hot ghost, hustled spectre, lovesick ghost, Marcus Macurgeon, Marvin J. Sunny, Mayor Ghost, Mer-kin specter, model skeleton, Mortimer Strauss, plaid ghost, Protector Spectre, restless ghost, sexy sorority ghost, sheet ghost, sleaze ghost, Space Tourist Explorer Ghost, spooky ghost, stench ghost, the ghost of Phil Bunion, The Unknown Accordion Thief, The Unknown Disco Bandit, The Unknown Pastamancer, The Unknown Sauceror, The Unknown Seal Clubber, The Unknown Turtle Tamer, Whatsian Commando Ghost, Wonderful Winifred Wongle`;
  if (ghosts.includes(mon) && !mon.boss) {
    return true;
  }
  return isProtonGhost(mon);
}
function isProtonGhost(mon) {
  var ghosts = $monsters`boneless blobghost, Emily Koops\, a spooky lime, The ghost of Ebenoozer Screege, The ghost of Jim Unfortunato, The ghost of Lord Montague Spookyraven, the ghost of Monsieur Baguelle, the ghost of Oily McBindle, The ghost of Richard Cockingham, The ghost of Sam McGee, The ghost of Vanillica "Trashblossom" Gorton, The ghost of Waldo the Carpathian, The Headless Horseman, The Icewoman`;
  if (ghosts.includes(mon)) {
    return true;
  }
  return false;
}
function cloversAvailable(override) {
  var numClovers = 0;
  if (!in_glover()) {
    numClovers += (0, import_kolmafia120.availableAmount)($item`11-leaf clover`);
    if (numClovers === 0) {
      acquireHermitItem($item`11-leaf clover`);
      numClovers += (0, import_kolmafia120.itemAmount)($item`11-leaf clover`);
    }
    if (numClovers === 0) {
      pullXWhenHaveY(
        $item`11-leaf clover`,
        1,
        (0, import_kolmafia120.itemAmount)($item`11-leaf clover`)
      );
      numClovers += (0, import_kolmafia120.itemAmount)($item`11-leaf clover`);
    }
    if (auto_haveAugustScepter() && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_augSkillsCast")) < 5 && !(0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("_aug2Cast"))) {
      numClovers += 1;
    }
    numClovers += auto_AprilSaxLuckyLeft();
    numClovers += auto_heartstoneLuckRemaining();
  }
  numClovers += (0, import_kolmafia120.min)(
    (0, import_kolmafia120.availableAmount)($item`[10883]astral energy drink`),
    (0, import_kolmafia120.floor)(spleen_left() / 5)
  );
  if ((0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_wandOfNagamar")) && !override && (0, import_kolmafia120.myDaycount)() > 1 && (0, import_kolmafia120.inHardcore)()) {
    numClovers--;
  }
  return numClovers;
}
function cloversAvailable$1() {
  return cloversAvailable(false);
}
function isHermitAvailable() {
  if (in_nuclear()) {
    return false;
  }
  if (in_zombieSlayer()) {
    return false;
  }
  if (in_koe()) {
    return false;
  }
  return true;
}
function isGalaktikAvailable() {
  if (in_nuclear()) {
    return false;
  }
  if (in_zombieSlayer()) {
    return false;
  }
  if (in_koe()) {
    return false;
  }
  return true;
}
function isGeneralStoreAvailable() {
  if (in_nuclear()) {
    return false;
  }
  if (is_werewolf()) {
    return false;
  }
  return true;
}
function isArmoryAndLeggeryStoreAvailable() {
  if (in_nuclear()) {
    return false;
  }
  if (in_zombieSlayer()) {
    return false;
  }
  if (in_koe()) {
    return false;
  }
  return true;
}
function isMusGuildStoreAvailable() {
  if ($classes`Seal Clubber, Turtle Tamer`.includes((0, import_kolmafia120.myClass)()) && (0, import_kolmafia120.guildStoreAvailable)()) {
    return true;
  }
  if ((0, import_kolmafia120.myClass)() === $class`Accordion Thief` && (0, import_kolmafia120.myLevel)() >= 9 && (0, import_kolmafia120.guildStoreAvailable)()) {
    return true;
  }
  return false;
}
function isMystGuildStoreAvailable() {
  if ($classes`Pastamancer, Sauceror`.includes((0, import_kolmafia120.myClass)()) && (0, import_kolmafia120.guildStoreAvailable)()) {
    return true;
  }
  if ((0, import_kolmafia120.myClass)() === $class`Accordion Thief` && (0, import_kolmafia120.myLevel)() >= 9 && (0, import_kolmafia120.guildStoreAvailable)()) {
    return true;
  }
  return false;
}
function isDesertAvailable() {
  if (in_koe()) {
    auto_log_info$1("The desert exploded so no need to build a meatcar...");
    (0, import_kolmafia120.setProperty)("lastDesertUnlock", (0, import_kolmafia120.myAscensions)().toString());
  }
  return (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("lastDesertUnlock")) === (0, import_kolmafia120.myAscensions)();
}
function inKnollSign() {
  return ["Mongoose", "Vole", "Wallaby"].includes((0, import_kolmafia120.mySign)());
}
function inGnomeSign() {
  return ["Blender", "Packrat", "Wombat"].includes((0, import_kolmafia120.mySign)());
}
var $_instakillable_not_instakillable;
function instakillable(mon) {
  if (mon.boss) {
    return false;
  }
  $_instakillable_not_instakillable ?? ($_instakillable_not_instakillable = import_kolmafia120.Monster.get(
    [
      // Cyrpt bosses
      "conjoined zmombie",
      "gargantulihc",
      "giant skeelton",
      "huge ghuol",
      // crowd of adventurers bosses at the tower tests
      "Tasmanian Dervish",
      "Mr. Loathing",
      "The Mastermind",
      "Seannery the Conman",
      "The Lavalier",
      "Leonard",
      "Arthur Frankenstein",
      "Mrs. Freeze",
      "Odorous Humongous",
      // time-spinner
      "Ancient Skeleton with Skin still on it",
      "Apathetic Tyrannosaurus",
      "Assembly Elemental",
      "Cro-Magnon Gnoll",
      "Krakrox the Barbarian",
      "Wooly Duck",
      // Love Tunnel
      "LOV Enforcer",
      "LOV Engineer",
      "LOV Equivocator",
      // ancient protector spirits
      "Protector Spectre",
      "ancient protector spirit",
      "ancient protector spirit (The Hidden Apartment Building)",
      "ancient protector spirit (The Hidden Hospital)",
      "ancient protector spirit (The Hidden Office Building)",
      "ancient protector spirit (The Hidden Bowling Alley)",
      // Macguffin snakes
      "Batsnake",
      "Frozen Solid Snake",
      "Burning Snake of Fire",
      "The Snake With Like Ten Heads",
      "The Frattlesnake",
      "Snakeleton",
      // Voting monsters
      "slime blob",
      "terrible mutant",
      "government bureaucrat",
      "angry ghost",
      "annoyed snake",
      // Tentacles
      "Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl",
      "Eldritch Tentacle",
      // Other Monsters that Mafia returns as instakillable (or not a boss), that really aren't
      "cosmetics wraith",
      "drunken rat king",
      "booty crab"
    ]
  ));
  if ($_instakillable_not_instakillable.includes(mon)) {
    return false;
  }
  return true;
}
function stunnable(mon) {
  if (mon.randomModifiers.includes("unstoppable")) {
    return false;
  }
  if (mon.randomModifiers.includes("rabbit mask")) {
    return false;
  }
  var unstunnable_monsters = import_kolmafia120.Monster.get(
    [
      // Standard
      "wall of skin",
      "wall of bones",
      "Eldritch Tentacle",
      // Cargo Cultist Shorts
      "Astrologer of Shub-Jigguwatt",
      "Burning Daughter",
      "Chosen of Yog-Urt",
      "Herald of Fridgr",
      "Tentacle of Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl",
      // Vampyre
      "Your Lack of Reflection",
      "%alucard%",
      // Heavy Rains
      "storm cow",
      // Witchess Monsters
      "Witchess Witch",
      "Witchess Queen",
      "Witchess King",
      // Other
      "Cyrus the Virus",
      "broctopus",
      "cocktail shrimp"
    ]
  );
  if ($monsters`Naughty Sorceress, Naughty Sorceress (2)`.includes(mon) && !(0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_confidence"))) {
    return false;
  }
  return !unstunnable_monsters.includes(mon);
}
function combatItemDamageMultiplier() {
  var retval = 1;
  if (auto_have_skill($skill`Deft Hands`)) {
    retval += 0.25;
  }
  if ((0, import_kolmafia120.haveEffect)($effect`Mathematically Precise`) > 0) {
    retval += 0.5;
  }
  if ((0, import_kolmafia120.haveEquipped)($item`V for Vivala mask`)) {
    retval += 0.5;
  }
  return retval;
}
function MLDamageToMonsterMultiplier() {
  var retval = 1 - 4e-3 * (0, import_kolmafia120.monsterLevelAdjustment)();
  if (retval < 0.5) {
    retval = 0.5;
  }
  return retval;
}
function freeCrafts$1() {
  var retval = 0;
  if ((0, import_kolmafia120.haveSkill)($skill`Rapid Prototyping`) && (0, import_kolmafia120.isUnrestricted)($item`Crimbot ROM: Rapid Prototyping`)) {
    retval += 5 - (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_rapidPrototypingUsed"));
  }
  if ((0, import_kolmafia120.haveSkill)($skill`Expert Corner-Cutter`) && (0, import_kolmafia120.isUnrestricted)($item`LyleCo Contractor's Manual`)) {
    retval += 5 - (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_expertCornerCutterUsed"));
  }
  retval += (0, import_kolmafia120.haveEffect)($effect`Inigo's Incantation of Inspiration`) / 5;
  retval += (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("homebodylCharges"));
  return retval;
}
function isFreeMonster(mon) {
  return isFreeMonster$1(mon, import_kolmafia120.Location.none);
}
function isFreeMonster$1(mon, loc) {
  if (in_avantGuard()) {
    return false;
  }
  if ($monsters`angry ghost, annoyed snake, government bureaucrat, slime blob, terrible mutant`.includes(
    mon
  ) && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_voteFreeFights")) < 3) {
    return true;
  }
  if ($monsters`biker, burnout, jock, party girl, "plain" girl`.includes(mon) && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_neverendingPartyFreeTurns")) < 10) {
    return true;
  }
  if ($monsters`Perceiver of Sensations, Performer of Actions, Thinker of Thoughts`.includes(
    mon
  )) {
    if ((0, import_kolmafia120.myFamiliar)() === $familiar`Machine Elf` && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_machineTunnelsAdv")) < 5 && (0, import_kolmafia120.myLocation)() === $location`The Deep Machine Tunnels`) {
      return true;
    }
  }
  if ($monster`X-32-F Combat Training Snowman` === mon && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_snojoFreeFights")) < 10) {
    return true;
  }
  if ($monsters`void guy, void slab, void spider`.includes(mon) && (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("_voidFreeFights")) < 5) {
    return true;
  }
  if ($monster`drunk pygmy` === mon && (0, import_kolmafia120.itemAmount)($item`Bowl of Scorpions`) > 0) {
    return true;
  }
  if ((0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("breathitinCharges")) > 0 && loc.environment === "outdoor") {
    return true;
  }
  if ($locations`Shadow Rift (The Ancient Buried Pyramid), Shadow Rift (The Hidden City), Shadow Rift (The Misspelled Cemetary)`.includes(
    loc
  ) && (0, import_kolmafia120.haveEffect)($effect`Shadow Affinity`) > 0 && !in_avantGuard()) {
    return true;
  }
  if (mon.randomModifiers.includes("optimal")) {
    return true;
  }
  if ((0, import_kolmafia120.containsText)((0, import_kolmafia120.toLowerCase)(mon.attributes), "free")) {
    return true;
  }
  return false;
}
function auto_burningDelay() {
  if ((auto_voteMonster$1(true) || isOverdueDigitize() || auto_sausageGoblin() || auto_backupTarget() || auto_voidMonster()) && (0, import_kolmafia120.myLocation)() === solveDelayZone$1()) {
    return true;
  }
  return false;
}
function auto_gettingLucky() {
  if ((0, import_kolmafia120.haveEffect)($effect`Lucky!`) > 0 && zone_hasLuckyAdventure((0, import_kolmafia120.myLocation)())) {
    return true;
  }
  return false;
}
function auto_queueIgnore() {
  if (auto_burningDelay() || auto_gettingLucky() || auto_haveQueuedForcedNonCombat()) {
    return true;
  }
  return false;
}
function auto_have_skill(sk) {
  return auto_is_valid$2(sk) && (0, import_kolmafia120.haveSkill)(sk);
}
function hasShieldEquipped() {
  return (0, import_kolmafia120.itemType)((0, import_kolmafia120.equippedItem)($slot`off-hand`)) === "shield";
}
function careAboutDrops(mon) {
  if ($monsters`Astronomer, Axe Wound, Beaver, Box, Burrowing Bishop, Bush, Camel's Toe, Family Jewels, Flange, Honey Pot, Hooded Warrior, Junk, Little Man in the Canoe, Muff, One-Eyed Willie, Pork Sword, Skinflute, Trouser Snake, Twig and Berries`.includes(
    mon
  )) {
    if (!needStarKey()) {
      return false;
    }
    if ($monster`Astronomer` === mon && (0, import_kolmafia120.itemAmount)($item`star chart`) > 0) {
      return false;
    }
    if ($monster`Astronomer` !== mon && ((0, import_kolmafia120.itemAmount)($item`star`) < 8 || (0, import_kolmafia120.itemAmount)($item`line`) < 7)) {
      return true;
    }
    return false;
  }
  return false;
}
function effectiveDropChance(it, baseDropRate) {
  var retval = 0;
  var item_modifier = (0, import_kolmafia120.itemDropModifier)();
  if (baseDropRate > 0) {
    if ((0, import_kolmafia120.itemType)(it) === "food") {
      item_modifier += (0, import_kolmafia120.numericModifier)("Food Drop");
    }
    if ((0, import_kolmafia120.itemType)(it) === "booze") {
      item_modifier += (0, import_kolmafia120.numericModifier)("Booze Drop");
    }
    if (it.candy) {
      item_modifier += (0, import_kolmafia120.numericModifier)("Candy Drop");
    }
    if ((0, import_kolmafia120.toSlot)(it) !== import_kolmafia120.Slot.none && $slots`hat, shirt, weapon, off-hand, pants, acc1, acc2, acc3, back`.includes(
      (0, import_kolmafia120.toSlot)(it)
    )) {
      item_modifier += (0, import_kolmafia120.numericModifier)("Gear Drop");
      if ((0, import_kolmafia120.toSlot)(it) === $slot`hat`) {
        item_modifier += (0, import_kolmafia120.numericModifier)("Hat Drop");
      }
      if ((0, import_kolmafia120.toSlot)(it) === $slot`shirt`) {
        item_modifier += (0, import_kolmafia120.numericModifier)("Shirt Drop");
      }
      if ((0, import_kolmafia120.toSlot)(it) === $slot`weapon`) {
        item_modifier += (0, import_kolmafia120.numericModifier)("Weapon Drop");
      }
      if ((0, import_kolmafia120.toSlot)(it) === $slot`off-hand`) {
        item_modifier += (0, import_kolmafia120.numericModifier)("Offhand Drop");
      }
      if ((0, import_kolmafia120.toSlot)(it) === $slot`pants`) {
        item_modifier += (0, import_kolmafia120.numericModifier)("Pants Drop");
      }
      if ($slots`acc1, acc2, acc3`.includes((0, import_kolmafia120.toSlot)(it))) {
        item_modifier += (0, import_kolmafia120.numericModifier)("Accessory Drop");
      }
    }
  }
  retval = baseDropRate * (100 + item_modifier) / 100;
  retval = (0, import_kolmafia120.min)(100, retval);
  if (retval > 0) {
    if (in_lar()) {
      if (retval * 2 >= 100) {
        retval = 100;
      } else {
        retval = 0;
      }
    }
    if (in_heavyrains()) {
      var depth = (0, import_kolmafia120.toInt)(
        (0, import_kolmafia120.myLocation)().waterLevel + (0, import_kolmafia120.numericModifier)("Water Level")
      );
      depth = (0, import_kolmafia120.max)(1, depth);
      depth = (0, import_kolmafia120.min)(6, depth);
      var heavyrainsWashChance = 5 * depth / 100;
      if ((0, import_kolmafia120.haveEffect)($effect`Fishy Whiskers`) > 0) {
        heavyrainsWashChance -= 0.1;
      }
      if ((0, import_kolmafia120.equippedAmount)($item`fishbone catcher's mitt`) > 0) {
        heavyrainsWashChance -= 0.1;
      }
      retval = retval * (1 - (0, import_kolmafia120.max)(0, heavyrainsWashChance));
    }
    if (in_wildfire()) {
      var wildfireBurnChance = 0;
      switch ((0, import_kolmafia120.myLocation)().fireLevel) {
        case 5:
          wildfireBurnChance = 1;
        case 4:
          wildfireBurnChance = 0.768;
        case 3:
          wildfireBurnChance = 0.361;
        case 2:
          wildfireBurnChance = 0.109;
        default:
          wildfireBurnChance = 0;
      }
      retval = retval * (1 - wildfireBurnChance);
    }
    if ((0, import_kolmafia120.myFamiliar)() === $familiar`Black Cat`) {
      retval = retval * 0.75;
    } else if ((0, import_kolmafia120.myFamiliar)() === $familiar`O.A.F.`) {
      retval = retval * 0.75;
    }
  }
  return (0, import_kolmafia120.max)(0, retval);
}
function ATSongList() {
  var songs = /* @__PURE__ */ new Map(
    [
      [$effect`Inigo's Incantation of Inspiration`, true],
      [$effect`The Ballad of Richie Thingfinder`, true],
      [$effect`Chorale of Companionship`, true],
      // under normal circumstances we should never get this, but if we do we want to keep it
      [$effect`Dirge of Dreadfulness (Remastered)`, true],
      [$effect`Ode to Booze`, true],
      [$effect`Ur-Kel's Aria of Annoyance`, true],
      [$effect`Carlweather's Cantata of Confrontation`, true],
      [$effect`The Sonata of Sneakiness`, true],
      [$effect`Fat Leon's Phat Loot Lyric`, true],
      [$effect`Polka of Plenty`, true],
      [$effect`Psalm of Pointiness`, true],
      [$effect`Aloysius' Antiphon of Aptitude`, true],
      [$effect`Paul's Passionate Pop Song`, true],
      [$effect`Donho's Bubbly Ballad`, true],
      [$effect`Prelude of Precision`, true],
      [$effect`Elron's Explosive Etude`, true],
      [$effect`Benetton's Medley of Diversity`, true],
      [$effect`Dirge of Dreadfulness`, true],
      [$effect`Stevedave's Shanty of Superiority`, true],
      [$effect`Brawnee's Anthem of Absorption`, true],
      [$effect`Jackasses' Symphony of Destruction`, true],
      [$effect`Power Ballad of the Arrowsmith`, true],
      [$effect`Cletus's Canticle of Celerity`, true],
      [$effect`Cringle's Curative Carol`, true],
      [$effect`The Magical Mojomuscular Melody`, true],
      [$effect`The Moxious Madrigal`, true]
    ]
  );
  return songs;
}
function shrugAT$1(anticipated) {
  if (is_boris() || is_jarlsberg() || is_pete() || isActuallyEd() || in_darkGyffte() || in_plumber()) {
    return;
  }
  if ((0, import_kolmafia120.haveEffect)(anticipated) > 0) {
    return;
  }
  if (!auto_have_skill((0, import_kolmafia120.toSkill)(anticipated))) {
    return;
  }
  var maxSongs = 3;
  if ((0, import_kolmafia120.haveEquipped)($item`Brimstone Beret`) || (0, import_kolmafia120.haveEquipped)(wrap_item($item`Operation Patriot Shield`)) || (0, import_kolmafia120.haveEquipped)($item`plexiglass pendant`) || (0, import_kolmafia120.haveEquipped)($item`Scandalously Skimpy Bikini`) || (0, import_kolmafia120.haveEquipped)($item`Sombrero De Vida`) || (0, import_kolmafia120.haveEquipped)($item`super-sweet boom box`)) {
    maxSongs = 4;
  }
  if ((0, import_kolmafia120.haveEquipped)($item`La Hebilla del Cinturón de Lopez`)) {
    maxSongs += 1;
  }
  if ((0, import_kolmafia120.haveEquipped)($item`zombie accordion`)) {
    maxSongs += 1;
  }
  if (auto_have_skill($skill`Mariachi Memory`)) {
    maxSongs += 1;
  }
  var count_1 = 1;
  var last = import_kolmafia120.Effect.none;
  var _iterator50 = _createForOfIteratorHelper(
    ATSongList().keys()
  ), _step50;
  try {
    for (_iterator50.s(); !(_step50 = _iterator50.n()).done; ) {
      var ATsong = _step50.value;
      if ((0, import_kolmafia120.haveEffect)(ATsong) > 0) {
        count_1 += 1;
        if (count_1 > maxSongs) {
          auto_log_info(`Shrugging song: ${ATsong}`, "blue");
          uneffect(ATsong);
        }
      }
    }
  } catch (err) {
    _iterator50.e(err);
  } finally {
    _iterator50.f();
  }
  auto_log_info(`I think we're good to go to apply ${anticipated}`, "blue");
}
var $_auto_get_campground_didCheck;
function auto_get_campground() {
  if (isActuallyEd()) {
    var empty = /* @__PURE__ */ new Map();
    return empty;
  }
  var campItems = new Map(
    Object.entries((0, import_kolmafia120.getCampground)()).map((_ref9) => {
      var _ref0 = _slicedToArray(_ref9, 2), _k = _ref0[0], _v = _ref0[1];
      return [import_kolmafia120.Item.get(_k), _v];
    })
  );
  if (campItems.has($item`ice harvest`)) {
    campItems.set($item`packet of winter seeds`, 1);
  }
  if (campItems.has($item`frost flower`)) {
    campItems.set($item`packet of winter seeds`, 1);
  }
  if (campItems.has($item`handful of barley`)) {
    campItems.set($item`packet of beer seeds`, 1);
  }
  if (campItems.has($item`fancy beer label`)) {
    campItems.set($item`packet of beer seeds`, 1);
  }
  if (campItems.has($item`skeleton`)) {
    campItems.set($item`packet of dragon's teeth`, 1);
  }
  if (campItems.has($item`giant candy cane`)) {
    campItems.set($item`Peppermint Pip Packet`, 1);
  }
  if (campItems.has($item`peppermint sprout`)) {
    campItems.set($item`Peppermint Pip Packet`, 1);
  }
  if (campItems.has($item`ginormous pumpkin`)) {
    campItems.set($item`packet of pumpkin seeds`, 1);
  }
  if (campItems.has($item`huge pumpkin`)) {
    campItems.set($item`packet of pumpkin seeds`, 1);
  }
  if (campItems.has($item`pumpkin`)) {
    campItems.set($item`packet of pumpkin seeds`, 1);
  }
  if (campItems.has($item`cornucopia`)) {
    campItems.set($item`packet of thanksgarden seeds`, 1);
  }
  if (campItems.has($item`megacopia`)) {
    campItems.set($item`packet of thanksgarden seeds`, 1);
  }
  if (campItems.has($item`Poké-Gro fertilizer`)) {
    campItems.set($item`packet of tall grass seeds`, 1);
  }
  if (campItems.has($item`Source terminal`) && !(0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_haveSourceTerminal"))) {
    (0, import_kolmafia120.setProperty)("auto_haveSourceTerminal", true.toString());
  }
  $_auto_get_campground_didCheck ?? ($_auto_get_campground_didCheck = false);
  if (in_nuclear() && !$_auto_get_campground_didCheck) {
    $_auto_get_campground_didCheck = true;
    var temp = (0, import_kolmafia120.visitUrl)(
      "place.php?whichplace=falloutshelter&action=vault_term"
    );
    if ((0, import_kolmafia120.containsText)(temp, "Source Terminal")) {
      (0, import_kolmafia120.setProperty)("auto_haveSourceTerminal", true.toString());
    }
  }
  if (!campItems.has($item`Dramatic™ range`) && (0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_haveoven"))) {
    campItems.set($item`Dramatic™ range`, 1);
  }
  if (!campItems.has($item`Source terminal`) && (0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_haveSourceTerminal"))) {
    campItems.set($item`Source terminal`, 1);
  }
  return campItems;
}
function auto_is_valid(it) {
  if (!glover_usable(it.toString())) {
    if (it !== $item`protonic accelerator pack`) {
      return false;
    } else if (!expectGhostReport() && !haveGhostReport()) {
      return false;
    }
  }
  if (it === $item`grimstone mask`) {
    if (!isGuildClass()) {
      return false;
    }
  }
  if (in_bhy()) {
    return bhy_is_item_valid(it);
  }
  if (in_iluh() && it.fullness > 0) {
    return iluh_foodConsumable(it.toString());
  }
  if ((0, import_kolmafia120.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia120.isTrendy)(it);
  }
  return (0, import_kolmafia120.isUnrestricted)(it);
}
function auto_is_valid$1(fam) {
  if (is100FamRun()) {
    return (0, import_kolmafia120.toFamiliar)((0, import_kolmafia120.getProperty)("auto_100familiar")) === fam;
  }
  if ((0, import_kolmafia120.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia120.isTrendy)(fam);
  }
  return bhy_usable(fam.toString()) && glover_usable(fam.toString()) && zombieSlayer_usable(fam) && wereprof_usable(fam.toString()) && iluh_famAllowed(fam.toString()) && (0, import_kolmafia120.isUnrestricted)(fam);
}
function auto_is_valid$2(sk) {
  if ((0, import_kolmafia120.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia120.isTrendy)(sk);
  }
  if (in_lol() && $skills`Extract, Turbo, Digitize, Duplicate, Portscan, Compress`.includes(
    sk
  )) {
    return true;
  }
  if (is_professor() && sk !== (0, import_kolmafia120.toSkill)(7512)) {
    return false;
  }
  return (glover_usable(sk.toString()) || sk.passive && sk !== $skill`Disco Nap`) && bat_skillValid(sk) && plumber_skillValid(sk) && (0, import_kolmafia120.isUnrestricted)(sk);
}
function auto_is_valid$4(str) {
  if ((0, import_kolmafia120.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia120.isTrendy)(str);
  }
  return (0, import_kolmafia120.isUnrestricted)(str);
}
function auto_log(s, color, log_level) {
  if (log_level > (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("auto_log_level"))) {
    return;
  }
  switch (log_level) {
    case 1:
      (0, import_kolmafia120.print)(`[WARNING] ${s}`, color);
      break;
    case 2:
      (0, import_kolmafia120.print)(`[INFO] ${s}`, color);
      break;
    case 3:
      (0, import_kolmafia120.print)(`[DEBUG] ${s}`, color);
      break;
  }
}
function auto_log_error(s) {
  (0, import_kolmafia120.print)(`[ERROR] ${s}`, "red");
}
function auto_log_warning(s, color) {
  auto_log(s, color, 1);
}
function auto_log_warning$1(s) {
  auto_log(s, "orange", 1);
}
function auto_log_info(s, color) {
  auto_log(s, color, 2);
}
function auto_log_info$1(s) {
  auto_log(s, "blue", 2);
}
function auto_log_debug(s, color) {
  auto_log(s, color, 3);
}
function auto_log_debug$1(s) {
  auto_log(s, "black", 3);
}
function auto_turbo() {
  return (0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_turbo"));
}
function auto_can_equip(it) {
  return auto_can_equip$1(it, (0, import_kolmafia120.toSlot)(it));
}
function auto_can_equip$1(it, s) {
  if (s === $slot`shirt` && !hasTorso$1()) {
    return false;
  }
  if (s === $slot`off-hand` && (0, import_kolmafia120.toSlot)(it) === $slot`weapon` && !auto_have_skill($skill`Double-Fisted Skull Smashing`)) {
    return false;
  }
  if ((s === $slot`weapon` || s === $slot`off-hand`) && (in_wotsf() || is_boris() && it !== $item`Trusty`)) {
    return false;
  }
  if ((0, import_kolmafia120.itemType)(it) === "chefstaff" && (!(auto_have_skill($skill`Spirit of Rigatoni`) || (0, import_kolmafia120.myClass)() === $class`Sauceror` && (0, import_kolmafia120.equippedAmount)($item`special sauce glove`) > 0 || (0, import_kolmafia120.myClass)() === $class`Avatar of Jarlsberg`) || s !== $slot`weapon`)) {
    return false;
  }
  return auto_is_valid(it) && (0, import_kolmafia120.canEquip)(it);
}
function auto_check_conditions(conds) {
  if (conds === "") {
    return true;
  }
  var conditions = new Map(
    (0, import_kolmafia120.splitString)(conds, ";").map((_v, _i) => [_i, _v])
  );
  var failure = false;
  function compare_numbers(num1, num2, comparison) {
    switch (comparison) {
      case "=":
      case "==":
        return num1 === num2;
      case ">":
        return num1 > num2;
      case "<":
        return num1 < num2;
      case ">=":
        return num1 >= num2;
      case "<=":
        return num1 <= num2;
      default:
        (0, import_kolmafia120.abort)(`"${comparison}" is not a valid comparison operator!`);
    }
    return false;
  }
  function check_condition(cond2) {
    var m2 = new AshMatcher("^(\\w+):(.+)$", cond2);
    if (!m2.find()) {
      (0, import_kolmafia120.abort)(`"${cond2}" is not proper condition formatting!`);
    }
    var condition_type = m2.group(1);
    var condition_data = m2.group(2);
    {
      var req_class = import_kolmafia120.Class.none;
      var req_mainstat = import_kolmafia120.Stat.none;
      var req_pathid = 0;
      var req_skill = import_kolmafia120.Skill.none;
      var req_effect = import_kolmafia120.Effect.none;
      var m5 = void 0;
      var req_item = import_kolmafia120.Item.none;
      var m7 = void 0;
      var todrop_item = import_kolmafia120.Item.none;
      var base_drop_chance = 0;
      var req_familiar = import_kolmafia120.Familiar.none;
      var havefamiliar = import_kolmafia120.Familiar.none;
      var req_loc = import_kolmafia120.Location.none;
      var m6 = void 0;
      var loc = import_kolmafia120.Location.none;
      var m22 = void 0;
      var prop = "";
      var m3 = void 0;
      var quest_state = 0;
      var compare_to = 0;
      var check_sniffed = import_kolmafia120.Monster.none;
      var sgeeas = 0;
      var day = 0;
      var m4 = void 0;
      switch (condition_type) {
        case "class":
          req_class = (0, import_kolmafia120.toClass)(condition_data);
          if (req_class === import_kolmafia120.Class.none) {
            (0, import_kolmafia120.abort)(`"${condition_data}" does not properly convert to a class!`);
          }
          return req_class === (0, import_kolmafia120.myClass)();
        case "mainstat":
          req_mainstat = (0, import_kolmafia120.toStat)(condition_data);
          if (req_mainstat === import_kolmafia120.Stat.none) {
            (0, import_kolmafia120.abort)(`"${condition_data}" does not properly convert to a stat!`);
          }
          return req_mainstat === (0, import_kolmafia120.myPrimestat)();
        case "path":
          return condition_data === (0, import_kolmafia120.myPath)().name;
        case "pathid":
          req_pathid = (0, import_kolmafia120.toInt)(condition_data);
          if (req_pathid === 0) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a path id!`
            );
          }
          return req_pathid === (0, import_kolmafia120.myPath)().id;
        case "skill":
          req_skill = (0, import_kolmafia120.toSkill)(condition_data);
          if (req_skill === import_kolmafia120.Skill.none) {
            (0, import_kolmafia120.abort)(`"${condition_data}" does not properly convert to a skill!`);
          }
          return auto_have_skill(req_skill);
        case "effect":
          req_effect = (0, import_kolmafia120.toEffect)(condition_data);
          if (req_effect === import_kolmafia120.Effect.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to an effect!`
            );
          }
          return (0, import_kolmafia120.haveEffect)(req_effect) > 0;
        case "item":
          m5 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m5.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          req_item = (0, import_kolmafia120.toItem)(m5.group(1));
          if (req_item === import_kolmafia120.Item.none) {
            (0, import_kolmafia120.abort)(`"${m5.group(1)}" does not properly convert to an item!`);
          }
          return compare_numbers(
            (0, import_kolmafia120.itemAmount)(req_item) + (0, import_kolmafia120.equippedAmount)(req_item),
            (0, import_kolmafia120.toInt)(m5.group(3)),
            m5.group(2)
          );
        case "itemdropcapped":
          m7 = new AshMatcher("([^=<>]+)=(.+)", condition_data);
          if (!m7.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          todrop_item = (0, import_kolmafia120.toItem)(m7.group(2));
          base_drop_chance = (0, import_kolmafia120.toFloat)(m7.group(1));
          if (todrop_item === import_kolmafia120.Item.none) {
            (0, import_kolmafia120.abort)(`"${m7.group(1)}" does not properly convert to an item!`);
          }
          return effectiveDropChance(todrop_item, base_drop_chance) >= 100;
        case "outfit":
          return (0, import_kolmafia120.haveOutfit)(condition_data);
        case "familiar":
          req_familiar = (0, import_kolmafia120.toFamiliar)(condition_data);
          if (req_familiar === import_kolmafia120.Familiar.none && condition_data !== "none") {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return (0, import_kolmafia120.myFamiliar)() === req_familiar;
        case "havefamiliar":
          havefamiliar = (0, import_kolmafia120.toFamiliar)(condition_data);
          if (havefamiliar === import_kolmafia120.Familiar.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return auto_have_familiar(havefamiliar);
        case "loc":
          req_loc = (0, import_kolmafia120.toLocation)(condition_data);
          if (req_loc === import_kolmafia120.Location.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a location!`
            );
          }
          return (0, import_kolmafia120.myLocation)() === req_loc;
        case "turnsspent":
          m6 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m6.find()) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" is not a proper turnsspent condition format!`
            );
          }
          loc = (0, import_kolmafia120.toLocation)(m6.group(1));
          if (loc === import_kolmafia120.Location.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a location!`
            );
          }
          if (!["=", "=="].includes(m6.group(2))) {
            return compare_numbers(
              loc.turnsSpent,
              (0, import_kolmafia120.toInt)(m6.group(3)),
              m6.group(2)
            );
          }
          return loc.turnsSpent === (0, import_kolmafia120.toInt)(m6.group(3));
        case "prop":
          m22 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m22.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper prop condition format!`);
          }
          prop = (0, import_kolmafia120.getProperty)(m22.group(1));
          if (!["=", "=="].includes(m22.group(2))) {
            return compare_numbers(
              (0, import_kolmafia120.toInt)(prop),
              (0, import_kolmafia120.toInt)(m22.group(3)),
              m22.group(2)
            );
          }
          return prop === m22.group(3);
        case "prop_boolean":
          return (0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)(condition_data));
        case "quest":
          m3 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m3.find()) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" is not a proper quest condition format!`
            );
          }
          quest_state = internalQuestStatus(m3.group(1));
          compare_to = (0, import_kolmafia120.toInt)(m3.group(3));
          return compare_numbers(quest_state, compare_to, m3.group(2));
        case "sniffed":
          check_sniffed = (0, import_kolmafia120.toMonster)(condition_data);
          if (check_sniffed === import_kolmafia120.Monster.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a monster!`
            );
          }
          if ((0, import_kolmafia120.haveEffect)($effect`On the Trail`) > 0 && (0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("olfactedMonster")) === check_sniffed) {
            return true;
          }
          if (isActuallyEd() && (0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("stenchCursedMonster")) === check_sniffed) {
            return true;
          }
          if (is_pete() && (0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("makeFriendsMonster")) === check_sniffed) {
            return true;
          }
          if ($classes`Cow Puncher, Beanslinger, Snake Oiler`.includes(
            (0, import_kolmafia120.myClass)()
          ) && (0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("longConMonster")) === check_sniffed) {
            return true;
          }
          if (in_darkGyffte() && (0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("auto_bat_soulmonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("_gallapagosMonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("monkeyPointMonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("_latteMonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("motifMonster")) === check_sniffed) {
            return true;
          }
          return false;
        case "expectghostreport":
          return expectGhostReport();
        case "latte":
          return auto_latteDropAvailable((0, import_kolmafia120.myLocation)());
        case "tavern":
          return (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("hiddenTavernUnlock")) >= (0, import_kolmafia120.myAscensions)();
        case "sgeea":
          sgeeas = (0, import_kolmafia120.toInt)(condition_data);
          return (0, import_kolmafia120.itemAmount)($item`soft green echo eyedrop antidote`) >= sgeeas;
        case "day":
          day = (0, import_kolmafia120.toInt)(condition_data);
          return (0, import_kolmafia120.myDaycount)() === day;
        case "ML":
          m4 = new AshMatcher("([=<>]+)(.+)", condition_data);
          if (!m4.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper ML condition format!`);
          }
          return compare_numbers(
            (0, import_kolmafia120.monsterLevelAdjustment)(),
            (0, import_kolmafia120.toInt)(m4.group(2)),
            m4.group(1)
          );
        case "consume":
          switch (condition_data) {
            case "eat":
              return fullness_left() > 0;
            case "drink":
              return inebriety_left() > 0;
            case "chew":
              return spleen_left() > 0;
            default:
              (0, import_kolmafia120.abort)(`Invalid consume type "${condition_type}" found!`);
          }
        default:
          (0, import_kolmafia120.abort)(`Invalid condition type "${condition_type}" found!`);
      }
    }
    return false;
  }
  var _iterator51 = _createForOfIteratorHelper(
    conditions
  ), _step51;
  try {
    for (_iterator51.s(); !(_step51 = _iterator51.n()).done; ) {
      var _step51$value = _slicedToArray(_step51.value, 2), i = _step51$value[0], cond = _step51$value[1];
      var m = new AshMatcher("^(!?)(.+)$", cond);
      if (!m.find()) {
        (0, import_kolmafia120.abort)(`"${cond}" is not a proper condition!`);
      }
      var invert = m.group(1) === "!";
      var success = check_condition(m.group(2));
      if (success === invert) {
        return false;
      }
    }
  } catch (err) {
    _iterator51.e(err);
  } finally {
    _iterator51.f();
  }
  return true;
}
function auto_getMonsters(category) {
  var res = /* @__PURE__ */ new Map();
  var monsters_text = fileAsMap("autoscend_monsters.txt", [String, Number, String, String]);
  if (!monsters_text.size) {
    auto_log_error("Could not load autoscend_monsters.txt. This is bad!");
  }
  var _iterator52 = _createForOfIteratorHelper(
    monsters_text.get(category) ?? monsters_text.set(category, /* @__PURE__ */ new Map()).get(category)
  ), _step52;
  try {
    for (_iterator52.s(); !(_step52 = _iterator52.n()).done; ) {
      var _step52$value = _slicedToArray(_step52.value, 2), i = _step52$value[0], _v0 = _step52$value[1];
      var _iterator53 = _createForOfIteratorHelper(
        _v0
      ), _step53;
      try {
        for (_iterator53.s(); !(_step53 = _iterator53.n()).done; ) {
          var _step53$value = _slicedToArray(_step53.value, 2), name = _step53$value[0], _v1 = _step53$value[1];
          var conds = _v1;
          var thisMonster = (0, import_kolmafia120.toMonster)(name);
          if (thisMonster === import_kolmafia120.Monster.none) {
            auto_log_warning(
              `"${name}" does not convert to a monster properly!`,
              "red"
            );
            continue;
          }
          if (!auto_check_conditions(conds)) {
            continue;
          }
          res.set(thisMonster, true);
        }
      } catch (err) {
        _iterator53.e(err);
      } finally {
        _iterator53.f();
      }
    }
  } catch (err) {
    _iterator52.e(err);
  } finally {
    _iterator52.f();
  }
  return res;
}
function auto_getPhylum(category) {
  var res = /* @__PURE__ */ new Map();
  var phylum_text = fileAsMap(
    "autoscend_phylums.txt",
    [String, Number, String, String]
  );
  if (!phylum_text.size) {
    auto_log_error("Could not load autoscend_phylums.txt. This is bad!");
  }
  var _iterator54 = _createForOfIteratorHelper(
    phylum_text.get(category) ?? phylum_text.set(category, /* @__PURE__ */ new Map()).get(category)
  ), _step54;
  try {
    for (_iterator54.s(); !(_step54 = _iterator54.n()).done; ) {
      var _step54$value = _slicedToArray(_step54.value, 2), i = _step54$value[0], _v0 = _step54$value[1];
      var _iterator55 = _createForOfIteratorHelper(
        _v0
      ), _step55;
      try {
        for (_iterator55.s(); !(_step55 = _iterator55.n()).done; ) {
          var _step55$value = _slicedToArray(_step55.value, 2), name = _step55$value[0], _v1 = _step55$value[1];
          var conds = _v1;
          var thisPhylum = (0, import_kolmafia120.toPhylum)(name);
          if (thisPhylum === import_kolmafia120.Phylum.none) {
            auto_log_warning(
              `"${name}" does not convert to a phylum properly!`,
              "red"
            );
            continue;
          }
          if (!auto_check_conditions(conds)) {
            continue;
          }
          res.set(thisPhylum, true);
        }
      } catch (err) {
        _iterator55.e(err);
      } finally {
        _iterator55.f();
      }
    }
  } catch (err) {
    _iterator54.e(err);
  } finally {
    _iterator54.f();
  }
  return res;
}
function auto_wantToSniff(enemy, loc) {
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var toSniff = auto_getMonsters("sniff");
  if ((toSniff.get(enemy) ?? toSniff.set(enemy, false).get(enemy)) && (auto_combat_appearance_rates$1(loc).get(enemy) ?? auto_combat_appearance_rates$1(loc).set(enemy, 0).get(enemy)) < 100) {
    (0, import_kolmafia120.setLocation)(locCache);
    return true;
  }
  (0, import_kolmafia120.setLocation)(locCache);
  return false;
}
function auto_wantToYellowRay(enemy, loc) {
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var toSniff = auto_getMonsters("yellowray");
  (0, import_kolmafia120.setLocation)(locCache);
  return toSniff.get(enemy) ?? toSniff.set(enemy, false).get(enemy);
}
function auto_wantToReplace(enemy, loc) {
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var toReplace = auto_getMonsters("replace");
  (0, import_kolmafia120.setLocation)(locCache);
  return toReplace.get(enemy) ?? toReplace.set(enemy, false).get(enemy);
}
function auto_wantToCopy(enemy, loc) {
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var toCopy = auto_getMonsters("copy");
  (0, import_kolmafia120.setLocation)(locCache);
  return toCopy.get(enemy) ?? toCopy.set(enemy, false).get(enemy);
}
function currentFlavour() {
  if ((0, import_kolmafia120.haveEffect)($effect`Spirit of Peppermint`) !== 0) {
    return $element`cold`;
  }
  if ((0, import_kolmafia120.haveEffect)($effect`Spirit of Bacon Grease`) !== 0) {
    return $element`sleaze`;
  }
  if ((0, import_kolmafia120.haveEffect)($effect`Spirit of Garlic`) !== 0) {
    return $element`stench`;
  }
  if ((0, import_kolmafia120.haveEffect)($effect`Spirit of Cayenne`) !== 0) {
    return $element`hot`;
  }
  if ((0, import_kolmafia120.haveEffect)($effect`Spirit of Wormwood`) !== 0) {
    return $element`spooky`;
  }
  return import_kolmafia120.Element.none;
}
function auto_haveQueuedForcedNonCombat() {
  return (0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("noncombatForcerActive"));
}
function hasUsefulShirt() {
  var amtUsefulShirts = 0;
  var _iterator71 = _createForOfIteratorHelper(
    $items`January's Garbage Tote, astral shirt, shoe ad T-shirt, fresh coat of paint, tunac, Jurassic Parka, hairshirt, futuristic shirt`
  ), _step71;
  try {
    for (_iterator71.s(); !(_step71 = _iterator71.n()).done; ) {
      var it = _step71.value;
      var w_it = wrap_item(it);
      if ((0, import_kolmafia120.itemAmount)(w_it) !== 0 && (0, import_kolmafia120.isUnrestricted)(w_it)) {
        amtUsefulShirts += 1;
      }
    }
  } catch (err) {
    _iterator71.e(err);
  } finally {
    _iterator71.f();
  }
  if (amtUsefulShirts > 0) {
    return true;
  } else {
    return false;
  }
}
function meatReserve() {
  var reserve_extra = 0;
  if (in_kolhs()) {
    reserve_extra += 100;
  }
  if (in_wildfire() && !(0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("wildfirePumpGreased")) && (0, import_kolmafia120.itemAmount)($item`pump grease`) === 0) {
    reserve_extra += (0, import_kolmafia120.npcPrice)($item`pump grease`);
  }
  if (!hasTorso$1() && hasUsefulShirt() && !(0, import_kolmafia120.gnomadsAvailable)() && inGnomeSign()) {
    reserve_extra += (0, import_kolmafia120.toInt)(5e3 * npcStoreDiscountMulti());
  }
  if (!hasTorso$1() && (0, import_kolmafia120.gnomadsAvailable)() && hasUsefulShirt()) {
    reserve_extra += 5e3;
  }
  if ((0, import_kolmafia120.myLevel)() < 10) {
    if (!isDesertAvailable() && inKnollSign() && (0, import_kolmafia120.myLevel)() > 5 && (0, import_kolmafia120.myTurncount)() > 50) {
      return 500 + reserve_extra;
    }
    return reserve_extra;
  }
  var reserve_gnasir = 0;
  var reserve_diary = 0;
  var reserve_zeppelin = 0;
  var reserve_palindome = 0;
  var reserve_island = 0;
  if (internalQuestStatus("questL11Desert") < 1 && ((0, import_kolmafia120.toInt)(
    //bitwise. desert exploration not yet finished
    (0, import_kolmafia120.getProperty)("gnasirProgress")
  ) & 2) !== 2) {
    reserve_gnasir += 1e3;
  }
  if ((0, import_kolmafia120.itemAmount)($item`your father's MacGuffin diary`) === 0 && !in_koe() && !in_wotsf()) {
    reserve_diary += 500;
    if ((0, import_kolmafia120.itemAmount)($item`forged identification documents`) === 0) {
      reserve_diary += (0, import_kolmafia120.toInt)(5e3 * npcStoreDiscountMulti());
    }
  }
  if ((0, import_kolmafia120.myLevel)() >= 11 && internalQuestStatus("questL11Ron") < 5 && (0, import_kolmafia120.itemAmount)($item`Red Zeppelin ticket`) < 1) {
    if (((0, import_kolmafia120.getProperty)("questL11Shen") === "finished" || $location`The Copperhead Club`.turnsSpent >= 15) && (0, import_kolmafia120.itemAmount)($item`priceless diamond`) < 1) {
      reserve_zeppelin += (0, import_kolmafia120.toInt)(5e3 * npcStoreDiscountMulti());
    }
  }
  if ((0, import_kolmafia120.myLevel)() >= 11 && internalQuestStatus("questL11Palindome") < 1) {
    if ((0, import_kolmafia120.itemAmount)($item`photograph of a red nugget`) < 1) {
      reserve_palindome += 500;
    }
    if ((0, import_kolmafia120.itemAmount)($item`photograph of God`) < 1) {
      reserve_palindome += 500;
    }
  }
  if ((0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("lastIslandUnlock")) < (0, import_kolmafia120.myAscensions)()) {
    var price_vacation = 500;
    if (in_wotsf()) {
      price_vacation = 5;
    }
    reserve_island += price_vacation * 3;
    if ((0, import_kolmafia120.itemAmount)($item`dingy planks`) === 0) {
      reserve_island += (0, import_kolmafia120.toInt)(400 * npcStoreDiscountMulti());
    }
  }
  return reserve_gnasir + reserve_diary + reserve_zeppelin + reserve_palindome + reserve_island + reserve_extra;
}
function wrap_item(it) {
  if (in_lol()) {
    return auto_ItemToReplica(it);
  }
  return it;
}
function auto_burnMP(mpToBurn) {
  var defaultSkill = import_kolmafia120.Skill.none;
  var _iterator72 = _createForOfIteratorHelper(
    $skills`Sauce Contemplation, Seal Clubbing Frenzy, Patience of the Tortoise, Manicotti Meditation, Disco Aerobics, Moxie of the Mariachi`
  ), _step72;
  try {
    for (_iterator72.s(); !(_step72 = _iterator72.n()).done; ) {
      var sk = _step72.value;
      if ((0, import_kolmafia120.haveSkill)(sk)) {
        defaultSkill = sk;
        break;
      }
    }
  } catch (err) {
    _iterator72.e(err);
  } finally {
    _iterator72.f();
  }
  if (defaultSkill !== import_kolmafia120.Skill.none) {
    (0, import_kolmafia120.setProperty)("lastChanceBurn", `cast # ${defaultSkill}`);
  }
  var equipped = auto_saveEquipped();
  addToMaximize("-1000mana cost, -tie");
  equipMaximizedGear();
  auto_equipAprilShieldBuff();
  var startingMP = (0, import_kolmafia120.myMp)();
  (0, import_kolmafia120.cliExecute)(`burn ${mpToBurn}`);
  auto_loadEquipped(equipped);
  removeFromMaximize("-1000mana cost");
  return startingMP !== (0, import_kolmafia120.myMp)();
}
function substat_to_level$1(n) {
  if (n <= 16) {
    return 1;
  }
  return (0, import_kolmafia120.squareRoot)((0, import_kolmafia120.squareRoot)(n) - 4) + 1;
}
function level_to_min_substat(n) {
  return ((n - 1) ** 2 + 4) ** 2;
}
function stat_to_substat(s) {
  switch (s) {
    case $stat`Muscle`:
      return $stat`SubMuscle`;
    case $stat`Mysticality`:
      return $stat`SubMysticality`;
    case $stat`Moxie`:
      return $stat`SubMoxie`;
  }
  return s;
}
function stat_exp_percent(s) {
  switch (s) {
    case $stat`Muscle`:
    case $stat`SubMuscle`:
      return (0, import_kolmafia120.numericModifier)(import_kolmafia120.Modifier.get("Muscle Experience Percent"));
    case $stat`Mysticality`:
    case $stat`SubMysticality`:
      return (0, import_kolmafia120.numericModifier)(import_kolmafia120.Modifier.get("Mysticality Experience Percent"));
    case $stat`Moxie`:
    case $stat`SubMoxie`:
      return (0, import_kolmafia120.numericModifier)(import_kolmafia120.Modifier.get("Moxie Experience Percent"));
  }
  return 0;
}
var $_auto_wantToFreeKillWithNoDrops_targets;
function auto_wantToFreeKillWithNoDrops(loc, enemy) {
  if (in_avantGuard()) {
    if (enemy.physicalResistance >= 100 && enemy.elementalResistance >= 100) {
      return true;
    }
    if ((0, import_kolmafia120.toMonster)((0, import_kolmafia120.getProperty)("auto_purple_candled")) === enemy) {
      return true;
    }
    return false;
  }
  if (loc === $location`The Battlefield (Frat Uniform)` && (0, import_kolmafia120.containsText)(enemy.toString(), "War Hippy") || ["Bailey's Beetle", "Mobile Armored Sweat Lodge"].includes(enemy.toString())) {
    return true;
  }
  if (loc === $location`The Battlefield (Hippy Uniform)` && (0, import_kolmafia120.containsText)(enemy.toString(), "War Frat")) {
    return true;
  }
  if (enemy.physicalResistance >= 100 && enemy.elementalResistance >= 100) {
    return true;
  }
  $_auto_wantToFreeKillWithNoDrops_targets ?? ($_auto_wantToFreeKillWithNoDrops_targets = import_kolmafia120.Monster.get(
    [
      // The Haunted Bathroom
      "claw-foot bathtub",
      "malevolent hair clog",
      "toilet papergeist",
      // The Haunted Gallery
      "cubist bull",
      "empty suit of armor",
      "guy with a pitchfork, and his wife",
      // The Haunted Bedroom
      "animated mahogany nightstand",
      "animated ornate nightstand",
      "animated rustic nightstand",
      "elegant animated nightstand",
      "Wardr&ouml;b nightstand",
      // The Haunted Wine Cellar
      "skeletal sommelier",
      // The Haunted Laundry Room
      "plaid ghost",
      "possessed laundry press",
      // The Haunted Boiler Room
      "coaltergeist",
      "steam elemental",
      // The 8-bit realm
      "Octorok",
      "Keese",
      "Tektite",
      "Zol",
      "Blader",
      "Met",
      "Tackle Fire",
      "Blooper",
      "Bullet Bill",
      "Buzzy Beetle",
      "Goomba",
      "Koopa Troopa",
      "fleaman",
      "ghost",
      "medusa"
    ]
  ));
  return $_auto_wantToFreeKillWithNoDrops_targets.includes(enemy);
}
function auto_ignoreExperience() {
  return in_zootomist();
}
function auto_remainingShantyTurns() {
  var turns = 0;
  var _iterator75 = _createForOfIteratorHelper(
    $effects`Who's Going to Pay This Drunken Sailor?, Only Dogs Love a Drunken Sailor, I'm Smarter Than a Drunken Sailor, Look At That Drunken Sailor Dance, Let's Beat Up This Drunken Sailor`
  ), _step75;
  try {
    for (_iterator75.s(); !(_step75 = _iterator75.n()).done; ) {
      var ef = _step75.value;
      turns = (0, import_kolmafia120.max)(turns, (0, import_kolmafia120.haveEffect)(ef));
    }
  } catch (err) {
    _iterator75.e(err);
  } finally {
    _iterator75.f();
  }
  return turns;
}

// src/autoscend/auto_adventure.ts
function autoAdv(num, loc, option) {
  if (!zone_isAvailable(loc, true)) {
    auto_log_warning(`Can't get to ${loc} right now.`, "red");
    return false;
  }
  (0, import_kolmafia121.removeProperty)("_auto_combatState");
  (0, import_kolmafia121.setProperty)("auto_diag_round", 0 .toString());
  (0, import_kolmafia121.setProperty)("nextAdventure", loc.toString());
  if (!option) {
    if (isActuallyEd()) {
      option = auto_edCombatHandler;
    } else {
      option = auto_combatHandler;
    }
  }
  var previousEncounter = (0, import_kolmafia121.getProperty)("lastEncounter");
  var turncount = (0, import_kolmafia121.myTurncount)();
  (0, import_kolmafia121.print)(`Doing option ${option}`);
  var advReturn = (0, import_kolmafia121.adv1)(loc, -1, option);
  if (!advReturn) {
    throw "aborts";
    auto_log_debug(
      "adv1 returned false for some reason. Did we actually adventure though?",
      "blue"
    );
    if ((0, import_kolmafia121.getProperty)("lastEncounter") !== previousEncounter) {
      auto_log_debug(
        `Looks like we may have adventured, lastEncounter was ${previousEncounter}, now ${(0, import_kolmafia121.getProperty)("lastEncounter")}`,
        "blue"
      );
      advReturn = true;
    }
    if ((0, import_kolmafia121.myTurncount)() > turncount) {
      auto_log_debug(
        `Looks like we may have adventured, turncount was ${turncount}, now ${(0, import_kolmafia121.myTurncount)()}`,
        "blue"
      );
      advReturn = true;
    }
  }
  return advReturn;
}
function autoAdv$2(loc) {
  return autoAdv(1, loc, null);
}

// src/autoscend/auto_bedtime.ts
var import_kolmafia123 = require("kolmafia");

// src/autoscend/auto_zlib.ts
var import_kolmafia122 = require("kolmafia");

// src/autoscend/auto_settings.ts
var import_kolmafia124 = require("kolmafia");

// src/autoscend/auto_sim.ts
var import_kolmafia125 = require("kolmafia");

// src/autoscend/autoscend_migration.ts
var import_kolmafia126 = require("kolmafia");
var $_f___autoscend_version;
$_f___autoscend_version ?? ($_f___autoscend_version = "1.8.0");
var $_f___autoscend_confirm_timeoutMS;
$_f___autoscend_confirm_timeoutMS ?? ($_f___autoscend_confirm_timeoutMS = 1e4);
var $_f___remove_sl_ascend_confirmation;
$_f___remove_sl_ascend_confirmation ?? ($_f___remove_sl_ascend_confirmation = "Looks like you have the old sl_ascend project installed as well. Would you like to remove it? (it is no longer maintained). Will default to false in 10 seconds.");
var $_f___migrate_sl_ascend_properties_confirmation;
$_f___migrate_sl_ascend_properties_confirmation ?? ($_f___migrate_sl_ascend_properties_confirmation = "Looks like you may be migrating from sl_ascend. Starting with a fresh run using autoscend is adviable but we can try to migrate all the sl_ascend properties (results may vary). Will default to true in 10 seconds.");
var $_f___migrate_sl_ascend_properties_remove_confirmation;
$_f___migrate_sl_ascend_properties_remove_confirmation ?? ($_f___migrate_sl_ascend_properties_remove_confirmation = "Would you like to clean up old sl_ascend properties after migrating them? Will default to false in 10 seconds.");

// src/autoscend/iotms/eudora.ts
var import_kolmafia127 = require("kolmafia");

// src/autoscend/iotms/mr2013.ts
var import_kolmafia128 = require("kolmafia");

// src/autoscend/paths/auto_path_util.ts
var import_kolmafia129 = require("kolmafia");

// src/autoscend/paths/community_service.ts
var import_kolmafia130 = require("kolmafia");

// src/autoscend/task_registry.ts
var import_kolmafia132 = require("kolmafia");

// src/autoscend/iotms/mr2012.ts
var import_kolmafia131 = require("kolmafia");

// src/autoscend.ts
function auto_advToReserve() {
  if ((0, import_kolmafia133.toInt)((0, import_kolmafia133.getProperty)("auto_save_adv_override")) > -1) {
    return (0, import_kolmafia133.toInt)((0, import_kolmafia133.getProperty)("auto_save_adv_override"));
  }
  var reserveadv = 1;
  if (auto_freeCombatsRemaining() > 0) {
    reserveadv = (0, import_kolmafia133.max)(2, reserveadv);
  }
  if (freeCrafts$1() < 2) {
    if ((0, import_kolmafia133.canEat)() && (0, import_kolmafia133.myFullness)() + 3 <= (0, import_kolmafia133.fullnessLimit)() && auto_have_skill($skill`Pastamastery`)) {
      reserveadv = (0, import_kolmafia133.max)(2, reserveadv);
    }
    if ((0, import_kolmafia133.canDrink)() && auto_have_skill($skill`Advanced Cocktailcrafting`)) {
      reserveadv = (0, import_kolmafia133.max)(2, reserveadv);
    }
    if (auto_have_skill($skill`Mixologist`) && !auto_have_skill($skill`Cocktail Magic`)) {
      reserveadv = (0, import_kolmafia133.max)(2, reserveadv);
    }
  }
  return reserveadv;
}

// src/autoscend/auto_consume.ts
function spleen_left() {
  return (0, import_kolmafia134.spleenLimit)() - (0, import_kolmafia134.mySpleenUse)();
}
function stomach_left() {
  return (0, import_kolmafia134.fullnessLimit)() - (0, import_kolmafia134.myFullness)();
}
function fullness_left() {
  return stomach_left();
}
function inebriety_left() {
  return (0, import_kolmafia134.inebrietyLimit)() - (0, import_kolmafia134.myInebriety)();
}
function canDrink$2(toDrink, checkValidity) {
  if (!(0, import_kolmafia134.canDrink)()) {
    return false;
  }
  if (!auto_is_valid(toDrink) && checkValidity) {
    return false;
  }
  if (is_jarlsberg() && toDrink !== $item`steel margarita`) {
    return (0, import_kolmafia134.sellCost)($coinmaster`Jarlsberg's Cosmic Kitchen`, toDrink).size > 0;
  }
  if (in_nuclear() && toDrink.inebriety > 1) {
    return false;
  }
  if (in_darkGyffte() !== $items`vampagne, dusty bottle of blood, Red Russian, mulled blood, bottle of Sanguiovese`.includes(
    toDrink
  )) {
    return false;
  }
  if (in_kolhs()) {
    if (!$items`can of the cheapest beer, bottle of fruity "wine", single swig of vodka, fountain 'soda', stepmom's booze, steel margarita`.includes(
      toDrink
    )) {
      return false;
    }
  }
  if (in_lta()) {
    var martinis = bondDrinks();
    var found = false;
    var _iterator = _createForOfIteratorHelper(
      martinis
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _step$value = _slicedToArray(_step.value, 2), idx = _step$value[0], it = _step$value[1];
        if (it === toDrink) {
          found = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!found) {
      return false;
    }
  }
  if (in_small() && toDrink.inebriety > 1) {
    return false;
  }
  if (is_werewolf()) {
    if ($items`Champagne Shimmy, Charleston Choo-Choo, Marltini, Mysterious Stranger, Strong\, Silent Type, Velvet Veil`.includes(
      toDrink
    )) {
      return false;
    }
  }
  if ((0, import_kolmafia134.myLevel)() < toDrink.levelreq && !in_small()) {
    return false;
  }
  if (toDrink.levelreq >= 13 && !(0, import_kolmafia134.canInteract)()) {
    return false;
  }
  return true;
}
function canDrink$1(toDrink) {
  return canDrink$2(toDrink, true);
}
function canEat$2(toEat, checkValidity) {
  if (!(0, import_kolmafia134.canEat)()) {
    return false;
  }
  if (!auto_is_valid(toEat) && checkValidity) {
    return false;
  }
  if (is_jarlsberg()) {
    return (0, import_kolmafia134.sellCost)($coinmaster`Jarlsberg's Cosmic Kitchen`, toEat).size > 0;
  }
  if (in_nuclear() && toEat.fullness > 1) {
    return false;
  }
  if (in_darkGyffte() && toEat === $item`magical sausage`) {
    return true;
  }
  if (in_darkGyffte() !== $items`blood-soaked sponge cake, blood roll-up, blood snowcone, actual blood sausage, bloodstick`.includes(
    toEat
  )) {
    return false;
  }
  if (in_zombieSlayer()) {
    return $items`crappy brain, decent brain, good brain, boss brain, hunter brain, brains casserole, fricasseed brains, steel lasagna`.includes(
      toEat
    );
  }
  if (in_small() && toEat.fullness > 2) {
    return false;
  }
  if ((0, import_kolmafia134.myLevel)() < toEat.levelreq && !in_small()) {
    return false;
  }
  if (toEat.levelreq >= 13 && !(0, import_kolmafia134.canInteract)()) {
    return false;
  }
  return true;
}
function canEat$1(toEat) {
  return canEat$2(toEat, true);
}
function canChew(toChew) {
  if (!auto_is_valid(toChew)) {
    return false;
  }
  if (in_nuclear() && toChew.spleen > 1) {
    return false;
  }
  if ((0, import_kolmafia134.myLevel)() < toChew.levelreq && !in_small()) {
    return false;
  }
  return true;
}
function consumptionProgress() {
  if ((0, import_kolmafia134.toBoolean)((0, import_kolmafia134.getProperty)("auto_limitConsume"))) {
    return 1;
  }
  var organs_used = 0;
  var organs_max = 0;
  if ((0, import_kolmafia134.canEat)()) {
    organs_used += (0, import_kolmafia134.myFullness)();
    organs_max += (0, import_kolmafia134.fullnessLimit)();
  }
  if ((0, import_kolmafia134.canDrink)()) {
    organs_used += (0, import_kolmafia134.myInebriety)();
    organs_max += (0, import_kolmafia134.inebrietyLimit)();
  }
  if (isActuallyEd() || (0, import_kolmafia134.myPath)() === $path`Oxygenarian`) {
    organs_used += (0, import_kolmafia134.mySpleenUse)();
    organs_max += (0, import_kolmafia134.spleenLimit)();
  }
  if (organs_max === 0) {
    return 1;
  } else {
    var used_organ_ratio = (0, import_kolmafia134.min)(
      (0, import_kolmafia134.toFloat)(organs_used) / (0, import_kolmafia134.toFloat)(organs_max),
      1
    );
    return used_organ_ratio;
  }
}
function isSpleenConsumable(it) {
  return it.spleen !== 0;
}

// src/autoscend/auto_acquire.ts
function canPull(it, historical) {
  if ((0, import_kolmafia135.inHardcore)()) {
    return false;
  }
  if (in_lol()) {
    if (it.fullness === 0 && it.inebriety === 0 && !it.potion && !it.combat && !it.usable) {
      return false;
    }
  }
  if (it === import_kolmafia135.Item.none) {
    return false;
  }
  if (!(0, import_kolmafia135.isUnrestricted)(it)) {
    return false;
  }
  if ((0, import_kolmafia135.pullsRemaining)() === 0) {
    return false;
  }
  if (pulledToday(it)) {
    return false;
  }
  if ((0, import_kolmafia135.storageAmount)(it) > 0) {
    return true;
  } else if (!(0, import_kolmafia135.isTradeable)(it)) {
    return false;
  }
  if (!auto_is_valid(it)) {
    return false;
  }
  var meat = (0, import_kolmafia135.myStorageMeat)();
  if ((0, import_kolmafia135.canInteract)()) {
    meat = (0, import_kolmafia135.max)(meat, (0, import_kolmafia135.myMeat)() - 5e3);
  }
  var curPrice = (0, import_kolmafia135.historicalPrice)(it);
  if (!historical) {
    curPrice = auto_mall_price(it);
  }
  if (curPrice < 1) {
    return false;
  }
  if (curPrice > (0, import_kolmafia135.toInt)((0, import_kolmafia135.getProperty)("autoBuyPriceLimit"))) {
    return false;
  } else if (curPrice < meat) {
    return true;
  }
  return false;
}
function canPull$1(it) {
  return canPull(it, false);
}
function pulledToday(it) {
  var allPulls = new Map(
    (0, import_kolmafia135.splitString)((0, import_kolmafia135.getProperty)("_roninStoragePulls"), ",").map(
      (_v, _i) => [
        _i,
        _v
      ]
    )
  );
  var _iterator2 = _createForOfIteratorHelper(
    allPulls.keys()
  ), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var i = _step2.value;
      if ((0, import_kolmafia135.toInt)(allPulls.get(i) ?? allPulls.set(i, "").get(i)) === (0, import_kolmafia135.toInt)(it)) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return false;
}
function auto_mall_price(it) {
  if (isSpeakeasyDrink(it)) {
    return -1;
  }
  if (0 in (0, import_kolmafia135.availableChoiceOptions)() || 1 in (0, import_kolmafia135.availableChoiceOptions)()) {
    return (0, import_kolmafia135.historicalPrice)(it);
  }
  if ((0, import_kolmafia135.isTradeable)(it)) {
    var retval = 0;
    var it_type = (0, import_kolmafia135.itemType)(it);
    if (it_type === "food" || it_type === "booze") {
      retval = (0, import_kolmafia135.historicalPrice)(it);
      if (retval === 0) {
        retval = (0, import_kolmafia135.mallPrice)(it);
      }
    } else {
      retval = (0, import_kolmafia135.mallPrice)(it);
    }
    if (retval === -1) {
      return (0, import_kolmafia135.historicalPrice)(it);
    }
    return retval;
  }
  return -1;
}
function pullXWhenHaveYCasual(it, howMany, whenHave) {
  if (!(0, import_kolmafia135.canInteract)()) {
    return false;
  }
  if (it === import_kolmafia135.Item.none) {
    return false;
  }
  if (!auto_is_valid(it)) {
    return false;
  }
  if ((0, import_kolmafia135.itemAmount)(it) + (0, import_kolmafia135.equippedAmount)(it) !== whenHave) {
    return false;
  }
  if (inAftercore()) {
    (0, import_kolmafia135.takeStorage)((0, import_kolmafia135.storageAmount)(it), it);
  }
  var maxprice = (0, import_kolmafia135.toInt)((0, import_kolmafia135.getProperty)("autoBuyPriceLimit"));
  while ((0, import_kolmafia135.itemAmount)(it) < howMany && auto_mall_price(it) < maxprice) {
    if (auto_mall_price(it) > (0, import_kolmafia135.myMeat)()) {
      (0, import_kolmafia135.abort)("Don't have enough meat to restock, big sad");
    }
    if ((0, import_kolmafia135.buy)(1, it, maxprice) === 0) {
      auto_log_info(
        `Price of ${it} exceeded expected mall price of ${maxprice}.`,
        "blue"
      );
      return false;
    }
  }
  if ((0, import_kolmafia135.itemAmount)(it) < howMany) {
    if (auto_mall_price(it) >= maxprice) {
      auto_log_info(
        `Price of ${it} exceeded expected mall price of ${maxprice}.`,
        "blue"
      );
    }
    return false;
  }
  return true;
}
function pullXWhenHaveY(it, howMany, whenHave) {
  if ((0, import_kolmafia135.canInteract)()) {
    return pullXWhenHaveYCasual(it, howMany, whenHave);
  }
  if (!canPull$1(it)) {
    return false;
  }
  if ((0, import_kolmafia135.itemAmount)(it) + (0, import_kolmafia135.equippedAmount)(it) === whenHave) {
    var lastStorage = (0, import_kolmafia135.storageAmount)(it);
    while ((0, import_kolmafia135.storageAmount)(it) < howMany) {
      var oldPrice = (0, import_kolmafia135.toInt)((0, import_kolmafia135.historicalPrice)(it) * 1.2);
      var curPrice = auto_mall_price(it);
      var meat = (0, import_kolmafia135.myStorageMeat)();
      var priceLimit = (0, import_kolmafia135.toInt)((0, import_kolmafia135.getProperty)("autoBuyPriceLimit"));
      var getFromStorage = true;
      if ((0, import_kolmafia135.canInteract)() && meat < curPrice) {
        meat = (0, import_kolmafia135.myMeat)() - 5e3;
        getFromStorage = false;
      }
      if (curPrice >= priceLimit) {
        auto_log_warning(
          `${it} is too expensive at ${curPrice} meat, we're gonna skip buying one in the mall.`,
          "red"
        );
        break;
      }
      if (curPrice <= oldPrice && curPrice < priceLimit && meat >= curPrice) {
        if (getFromStorage) {
          (0, import_kolmafia135.buyUsingStorage)(howMany - (0, import_kolmafia135.storageAmount)(it), it, curPrice);
        } else {
          howMany -= (0, import_kolmafia135.buy)(howMany - (0, import_kolmafia135.storageAmount)(it), it, curPrice);
        }
      } else {
        if (curPrice > oldPrice) {
          auto_log_warning(
            `Price of ${it} may have been mall manipulated. Expected to pay at most: ${oldPrice}`,
            "red"
          );
        }
        if ((0, import_kolmafia135.myStorageMeat)() < curPrice) {
          auto_log_warning(
            `Do not have enough meat in Hagnk's to buy ${it}. Need ${curPrice} have ${(0, import_kolmafia135.myStorageMeat)()}.`,
            "blue"
          );
        }
      }
      if (lastStorage === (0, import_kolmafia135.storageAmount)(it)) {
        break;
      }
      lastStorage = (0, import_kolmafia135.storageAmount)(it);
    }
    if ((0, import_kolmafia135.storageAmount)(it) < howMany) {
      auto_log_warning$1("Can not pull what we don't have. Sorry");
      return false;
    }
    auto_log_info(`Trying to pull ${howMany} of ${it}`, "blue");
    var retval = (0, import_kolmafia135.takeStorage)(howMany, it);
    if ((0, import_kolmafia135.itemAmount)(it) !== howMany + whenHave) {
      auto_log_warning(`Failed pulling ${howMany} of ${it}`, "red");
    } else {
      for (var i = 0; i < howMany; ++i) {
        handleTracker(it.toString(), "auto_pulls");
      }
    }
    return retval;
  }
  return false;
}
function buyableMaintain$1(toMaintain, howMany, meatMin) {
  return buyableMaintain$2(toMaintain, howMany, meatMin, true);
}
function buyableMaintain$2(toMaintain, howMany, meatMin, condition) {
  if (!condition || (0, import_kolmafia135.myMeat)() < meatMin || in_wotsf()) {
    return false;
  }
  return auto_buyUpTo(howMany, toMaintain);
}
function auto_buyUpTo(num, it) {
  if (is_werewolf()) {
    return false;
  }
  if ((0, import_kolmafia135.itemAmount)(it) >= num) {
    return true;
  }
  if ($items`Ben-Gal™ Balm, hair spray`.includes(it) && !isGeneralStoreAvailable()) {
    return false;
  }
  if ($items`blood of the Wereseal, cheap wind-up clock, turtle pheromones`.includes(
    it
  ) && !isMusGuildStoreAvailable()) {
    return false;
  }
  var missing = num - (0, import_kolmafia135.itemAmount)(it);
  var maxprice = (0, import_kolmafia135.toInt)((0, import_kolmafia135.getProperty)("autoBuyPriceLimit"));
  if ((0, import_kolmafia135.canInteract)() && (0, import_kolmafia135.shopAmount)(it) > 0 && (0, import_kolmafia135.mallPrice)(it) < maxprice) {
    (0, import_kolmafia135.takeShop)((0, import_kolmafia135.min)(missing, (0, import_kolmafia135.shopAmount)(it)), it);
    missing = num - (0, import_kolmafia135.itemAmount)(it);
  }
  if (missing > 0) {
    (0, import_kolmafia135.buy)(missing, it, maxprice);
    if ((0, import_kolmafia135.itemAmount)(it) < num) {
      auto_log_warning(
        `Could not auto_buyUpTo(${num}) of ${it}. Maxprice: ${maxprice}`,
        "red"
      );
    }
  }
  return (0, import_kolmafia135.itemAmount)(it) >= num;
}
function npcStoreDiscountMulti() {
  var retval = 1;
  if (auto_have_skill($skill`Five Finger Discount`)) {
    retval -= 0.05;
  }
  if (possessEquipment($item`Travoltan trousers`) && auto_is_valid($item`Travoltan trousers`)) {
    retval -= 0.05;
  }
  return retval;
}
function acquireGumItem(it) {
  if (!isGeneralStoreAvailable()) {
    return false;
  }
  if (!$items`disco ball, disco mask, helmet turtle, Hollandaise helmet, mariachi hat, old sweatpants, pasta spoon, ravioli hat, saucepan, seal-clubbing club, seal-skull helmet, stolen accordion, turtle totem, worthless gewgaw, worthless knick-knack, worthless trinket`.includes(
    it
  )) {
    return false;
  }
  var have = (0, import_kolmafia135.itemAmount)(it);
  auto_log_info(`Gum acquisition of: ${it}`, "green");
  while (have === (0, import_kolmafia135.itemAmount)(it) && (0, import_kolmafia135.myMeat)() >= (0, import_kolmafia135.npcPrice)($item`chewing gum on a string`)) {
    auto_buyUpTo(1, $item`chewing gum on a string`);
    (0, import_kolmafia135.use)(1, $item`chewing gum on a string`);
  }
  return have + 1 === (0, import_kolmafia135.itemAmount)(it);
}
function acquireTotem() {
  var _iterator3 = _createForOfIteratorHelper(
    $items`primitive alien totem, Flail of the Seven Aspects, Chelonian Morningstar, Mace of the Tortoise, Ouija Board\, Ouija Board, turtle totem`
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var totem = _step3.value;
      if (possessEquipment(totem)) {
        return true;
      }
      if (0 < (0, import_kolmafia135.closetAmount)(totem)) {
        (0, import_kolmafia135.takeCloset)(1, totem);
        return true;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var want_totem = false;
  var _iterator4 = _createForOfIteratorHelper(
    $skills`Empathy of the Newt, Astral Shell, Ghostly Shell, Tenacity of the Snapper, Spiky Shell, Reptilian Fortitude, Jingle Bells, Curiosity of Br'er Tarrypin`
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var sk = _step4.value;
      if (auto_have_skill(sk)) {
        want_totem = true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if (want_totem) {
    if (acquireGumItem($item`turtle totem`)) {
      return true;
    }
  }
  return false;
}
function auto_hermit(amt, it) {
  if (it !== $item`11-leaf clover`) {
    return (0, import_kolmafia135.hermit)(amt, it);
  }
  var initial = (0, import_kolmafia135.itemAmount)(it);
  try {
    (0, import_kolmafia135.hermit)(amt, it);
  } catch (e) {
  }
  return (0, import_kolmafia135.itemAmount)(it) === initial + amt;
}
function acquireHermitItem(it) {
  if (!isHermitAvailable()) {
    return false;
  }
  if ((0, import_kolmafia135.itemAmount)($item`hermit permit`) === 0 && (0, import_kolmafia135.myMeat)() >= (0, import_kolmafia135.npcPrice)($item`hermit permit`)) {
    auto_buyUpTo(1, $item`hermit permit`);
  }
  if ((0, import_kolmafia135.itemAmount)($item`hermit permit`) === 0) {
    return false;
  }
  if (!$items`banjo strings, catsup, chisel, figurine of an ancient seal, hot buttered roll, jabañero pepper, ketchup, petrified noodles, seal tooth, 11-leaf clover, volleyball, wooden figurine`.includes(
    it
  )) {
    return false;
  }
  if (it === $item`figurine of an ancient seal` && (0, import_kolmafia135.myClass)() !== $class`Seal Clubber`) {
    return false;
  }
  if (it === $item`11-leaf clover` && (0, import_kolmafia135.toInt)((0, import_kolmafia135.getProperty)("_cloversPurchased")) >= 3) {
    return false;
  }
  if (!isGeneralStoreAvailable()) {
    return false;
  }
  var have = (0, import_kolmafia135.itemAmount)(it);
  auto_log_info(`Hermit acquisition of: ${it}`, "green");
  while (have === (0, import_kolmafia135.itemAmount)(it) && ((0, import_kolmafia135.myMeat)() >= (0, import_kolmafia135.npcPrice)($item`chewing gum on a string`) || (0, import_kolmafia135.itemAmount)($item`worthless trinket`) + (0, import_kolmafia135.itemAmount)($item`worthless gewgaw`) + (0, import_kolmafia135.itemAmount)($item`worthless knick-knack`) > 0)) {
    if ((0, import_kolmafia135.itemAmount)($item`worthless trinket`) + (0, import_kolmafia135.itemAmount)($item`worthless gewgaw`) + (0, import_kolmafia135.itemAmount)($item`worthless knick-knack`) > 0) {
      if (!auto_hermit(1, it)) {
        return false;
      }
    } else {
      if (is_werewolf()) {
        return false;
      }
      auto_buyUpTo(1, $item`chewing gum on a string`);
      (0, import_kolmafia135.use)(1, $item`chewing gum on a string`);
    }
  }
  return have + 1 === (0, import_kolmafia135.itemAmount)(it);
}

// src/autoscend/auto_post_adv.ts
function auto_beaten_handler() {
  if ((0, import_kolmafia136.haveEffect)($effect`Beaten Up`) === 0) {
    (0, import_kolmafia136.setProperty)("auto_beatenUpLastAdv", false.toString());
    return;
  }
  if ((0, import_kolmafia136.lastChoice)() === 1467) {
    auto_log_info$1(
      "Getting beaten up here gave us 5 adventures, that's a win."
    );
    return;
  }
  (0, import_kolmafia136.setProperty)(
    "auto_beatenUpCount",
    ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("auto_beatenUpCount")) + 1).toString()
  );
  var loc = (0, import_kolmafia136.getProperty)("auto_beatenUpLocations");
  if (loc !== "") {
    loc += ",";
  }
  loc += `day:${(0, import_kolmafia136.myDaycount)()}:level:${(0, import_kolmafia136.myLevel)()}:place:${(0, import_kolmafia136.myLocation)()}`;
  (0, import_kolmafia136.setProperty)("auto_beatenUpLocations", loc);
  (0, import_kolmafia136.setProperty)("auto_beatenUpLastAdv", true.toString());
  buffMaintain$4($effect`They've Got Fleas`);
  if ((0, import_kolmafia136.myLevel)() < 11 || (0, import_kolmafia136.getProperty)("sidequestJunkyardCompleted") !== "none") {
    buffMaintain$4($effect`Everything Is Bananas`);
  }
  if ((0, import_kolmafia136.myLocation)() === $location`The X-32-F Combat Training Snowman`) {
    auto_log_info(
      "I got beaten up at the snojo, let's not keep going there and dying....",
      "red"
    );
    (0, import_kolmafia136.setProperty)("_snojoFreeFights", 10 .toString());
  } else if ((0, import_kolmafia136.lastMonster)() === $monster`ninja snowman assassin`) {
    auto_log_info(
      "I got beaten up by a [ninja snowman assassin]. disabling ninja route",
      "red"
    );
    (0, import_kolmafia136.setProperty)("auto_L8_ninjaAssassinFail", true.toString());
  } else {
    auto_log_warning("I got beaten up", "red");
  }
  if ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("auto_beatenUpCount")) <= 10 && (0, import_kolmafia136.myMp)() >= (0, import_kolmafia136.mpCost)($skill`Tongue of the Walrus`) && auto_have_skill($skill`Tongue of the Walrus`)) {
    auto_log_info("trying to recover with [Tongue of the Walrus]", "red");
    (0, import_kolmafia136.useSkill)(1, $skill`Tongue of the Walrus`);
    if ((0, import_kolmafia136.haveEffect)($effect`Beaten Up`) === 0) {
      return;
    } else {
      auto_log_warning$1(
        "Mysteriously failed to recover beaten up with [Tongue of the Walrus]"
      );
    }
  }
}
function auto_post_adventure() {
  auto_log_debug$1("Running auto_post_adv.js");
  if ((0, import_kolmafia136.limitMode)() === "spelunky") {
    return true;
  }
  if ([
    "Coyote Ugly",
    "Gutterbound",
    "The Too-Much Booze Blues",
    "What's that smell?",
    "Hey, baby.  Wanna wrestle?"
  ].includes((0, import_kolmafia136.getProperty)("lastEncounter"))) {
    (0, import_kolmafia136.abort)(
      `Adventured while drunk and got drunken stupor NC: ${(0, import_kolmafia136.getProperty)("lastEncounter")}`
    );
  }
  (0, import_kolmafia136.setProperty)("auto_nextEncounter", "");
  if ((0, import_kolmafia136.getProperty)("auto_forceNonCombatSource") !== "" && !auto_haveQueuedForcedNonCombat()) {
    if (((0, import_kolmafia136.getProperty)("auto_forceNonCombatSource") !== "jurassic parka" || (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("auto_parkaSpikesDeployed"))) && (0, import_kolmafia136.getProperty)("auto_forceNonCombatSource") !== "McHugeLarge left ski" || (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("auto_avalancheDeployed"))) {
      auto_log_info(
        `Encountered forced noncombat: ${(0, import_kolmafia136.getProperty)("lastEncounter")}`,
        "blue"
      );
      handleTracker$2(
        (0, import_kolmafia136.getProperty)("auto_forceNonCombatSource"),
        (0, import_kolmafia136.myLocation)().toString(),
        (0, import_kolmafia136.getProperty)("lastEncounter"),
        "auto_forcedNC"
      );
    }
    (0, import_kolmafia136.setProperty)("auto_forceNonCombatSource", "");
    (0, import_kolmafia136.setProperty)("auto_forceNonCombatLocation", "");
    (0, import_kolmafia136.setProperty)("auto_parkaSpikesDeployed", false.toString());
    (0, import_kolmafia136.setProperty)("auto_avalancheDeployed", false.toString());
  }
  if ((0, import_kolmafia136.getProperty)("auto_instakillSource") !== "" && (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("auto_instakillSuccess"))) {
    auto_log_info(
      `Successful instakill with: ${(0, import_kolmafia136.getProperty)("auto_instakillSource")}`,
      "blue"
    );
    if ((0, import_kolmafia136.toMonster)((0, import_kolmafia136.getProperty)("lastEncounter")) === (0, import_kolmafia136.lastMonster)()) {
      handleTracker$1(
        (0, import_kolmafia136.getProperty)("lastEncounter"),
        (0, import_kolmafia136.getProperty)("auto_instakillSource"),
        "auto_instakill"
      );
    }
    (0, import_kolmafia136.setProperty)("auto_instakillSource", "");
    (0, import_kolmafia136.setProperty)("auto_instakillSuccess", false.toString());
  }
  if ((0, import_kolmafia136.haveEffect)($effect`Eldritch Attunement`) > 0) {
    if ((0, import_kolmafia136.lastMonster)() !== $monster`Eldritch Tentacle`) {
      auto_log_warning("Expected Tentacle, uh oh!", "red");
      return false;
    }
    auto_log_info("No Tentacle expected this time!", "green");
  }
  if (in_theSource()) {
    if ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("auto_diag_round")) === 0) {
      var last = (0, import_kolmafia136.lastMonster)();
      var temp = (0, import_kolmafia136.visitUrl)("main.php");
      if (last !== (0, import_kolmafia136.lastMonster)()) {
        auto_log_warning(
          "Interrupted battle detected at post combat time",
          "red"
        );
        if ((0, import_kolmafia136.haveEffect)($effect`Beaten Up`) > 0) {
          auto_log_warning(
            "Post combat time caused up to be Beaten Up!",
            "red"
          );
          return false;
        }
        autoAdv$2((0, import_kolmafia136.myLocation)());
        return true;
      }
    }
  }
  if ((0, import_kolmafia136.getProperty)("lastEncounter") === "Daily Briefing" && in_lta()) {
    (0, import_kolmafia136.setProperty)("_auto_bondBriefing", "started");
  }
  if ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_villainLairProgress")) < 999 && ((0, import_kolmafia136.getProperty)("_villainLairColor") !== "" || (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_villainLairColorChoiceUsed"))) && in_lta() && (0, import_kolmafia136.myLocation)() === $location`Super Villain's Lair`) {
    if ((0, import_kolmafia136.itemAmount)($item`can of Minions-Be-Gone`) > 0) {
      (0, import_kolmafia136.use)(1, $item`can of Minions-Be-Gone`);
    }
  }
  if (auto_haveArchaeologistSpade() && auto_spadeDigsRemaining() > 0) {
    if ((0, import_kolmafia136.myLocation)() === $location`The Hatching Chamber` && (0, import_kolmafia136.itemAmount)($item`filthworm hatchling scent gland`) === 0) {
      auto_spadeDigItem();
    } else if ((0, import_kolmafia136.myLocation)() === $location`The Feeding Chamber` && (0, import_kolmafia136.itemAmount)($item`filthworm drone scent gland`) === 0) {
      auto_spadeDigItem();
    } else if ((0, import_kolmafia136.myLocation)() === $location`The Royal Guard Chamber` && (0, import_kolmafia136.itemAmount)($item`filthworm royal guard scent gland`) === 0) {
      auto_spadeDigItem();
    } else if ((0, import_kolmafia136.myLocation)() === $location`Sonofa Beach` && (0, import_kolmafia136.itemAmount)($item`barrel of gunpowder`) < 5) {
      var barrelCount = (0, import_kolmafia136.itemAmount)($item`barrel of gunpowder`);
      var digsRemaining = auto_spadeDigsRemaining();
      for (var x = barrelCount + 1, _last_6 = (0, import_kolmafia136.min)(5, digsRemaining), _step_6 = 1, _up_6 = x <= _last_6, _inc_6 = _up_6 ? Math.abs(_step_6) : -Math.abs(_step_6); _up_6 ? x <= _last_6 : x >= _last_6; x += _inc_6) {
        auto_spadeDigItem();
      }
    }
  }
  if ((0, import_kolmafia136.myLocation)() === $location`The Old Landfill` && (0, import_kolmafia136.itemAmount)($item`funky junk key`) > 0) {
    (0, import_kolmafia136.setProperty)("auto_junkspritesencountered", 0 .toString());
  }
  if ((0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("auto_disableAdventureHandling"))) {
    auto_log_info(
      "Postadventure skipped by standard adventure handler.",
      "green"
    );
    return true;
  }
  if (!(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_ballInACupUsed")) && (0, import_kolmafia136.itemAmount)($item`ball-in-a-cup`) > 0) {
    (0, import_kolmafia136.use)(1, $item`ball-in-a-cup`);
  }
  if (!(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_setOfJacksUsed")) && (0, import_kolmafia136.itemAmount)($item`set of jacks`) > 0) {
    (0, import_kolmafia136.use)(1, $item`set of jacks`);
  }
  if (!(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_hobbyHorseUsed")) && (0, import_kolmafia136.itemAmount)($item`handmade hobby horse`) > 0) {
    (0, import_kolmafia136.use)(1, $item`handmade hobby horse`);
  }
  if (!(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_creepyVoodooDollUsed")) && (0, import_kolmafia136.itemAmount)($item`creepy voodoo doll`) > 0) {
    (0, import_kolmafia136.use)(1, $item`creepy voodoo doll`);
  }
  if ((0, import_kolmafia136.itemAmount)($item`MayDay™ supply package`) > 0 && auto_is_valid($item`MayDay™ supply package`)) {
    (0, import_kolmafia136.use)(1, $item`MayDay™ supply package`);
  }
  if ((0, import_kolmafia136.myLocation)() === $location`The Lower Chambers` && (0, import_kolmafia136.itemAmount)($item`[2334]Holy MacGuffin`) === 0) {
    auto_log_info("Postadventure skipped by Ed the Undying!", "green");
    return true;
  }
  if ((0, import_kolmafia136.myLocation)() === $location`The Invader`) {
    auto_log_info("Postadventure skipped for The Invader!", "green");
    return true;
  }
  ocrs_postHelper();
  if ((0, import_kolmafia136.lastMonster)().randomModifiers.includes("clingy")) {
    auto_log_info("Postadventure skipped by clingy modifier.", "green");
    return true;
  }
  var beforeBuffs = auto_saveEquipped();
  addToMaximize("-1000mana cost, -tie");
  equipMaximizedGear();
  if ((0, import_kolmafia136.haveEffect)($effect`Cunctatitis`) > 0) {
    if ((0, import_kolmafia136.myMp)() >= 12 && auto_have_skill($skill`Disco Nap`)) {
      (0, import_kolmafia136.useSkill)(1, $skill`Disco Nap`);
    } else {
      uneffect($effect`Cunctatitis`);
    }
  }
  if ((0, import_kolmafia136.myClass)() === $class`Avatar of Jarlsberg` && auto_have_skill($skill`Early Riser`)) {
    var _iterator = _createForOfIteratorHelper(
      $skills`Conjure Cream, Conjure Dough, Conjure Cheese, Conjure Eggs, Conjure Meat Product, Conjure Vegetables, Conjure Potato, Conjure Fruit`
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var sk = _step.value;
        if (auto_have_skill(sk) && sk.timescast < sk.dailylimit && (0, import_kolmafia136.myMp)() - 40 >= (0, import_kolmafia136.mpCost)(sk)) {
          (0, import_kolmafia136.useSkill)(1, sk);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if ((0, import_kolmafia136.myClass)() === $class`Avatar of Sneaky Pete`) {
    buffMaintain$3($effect`All Revved Up`, 25, 1, 10);
    buffMaintain$3($effect`Of Course It Looks Great`, 55, 1, 10);
    if (auto_have_skill($skill`Throw Party`) && !(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_petePartyThrown"))) {
      var threshold = 50;
      if (!possessEquipment($item`Sneaky Pete's leather jacket`) && !possessEquipment($item`Sneaky Pete's leather jacket (collar popped)`)) {
        threshold = 30;
      }
      if ((0, import_kolmafia136.myAudience)() >= threshold) {
        (0, import_kolmafia136.useSkill)(1, $skill`Throw Party`);
      }
    }
    if (auto_have_skill($skill`Incite Riot`) && !(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_peteRiotIncited"))) {
      var _threshold = -50;
      if (!possessEquipment($item`Sneaky Pete's leather jacket`) && !possessEquipment($item`Sneaky Pete's leather jacket (collar popped)`)) {
        _threshold = -30;
      }
      if ((0, import_kolmafia136.myAudience)() <= _threshold) {
        (0, import_kolmafia136.useSkill)(1, $skill`Incite Riot`);
      }
    }
  }
  if (in_nuclear()) {
    buffMaintain$3($effect`Juiced and Loose`, 35, 1, 1);
    buffMaintain$3($effect`Hardened Sweatshirt`, 35, 1, 1);
    buffMaintain$3($effect`Ear Winds`, 35, 1, 1);
    buffMaintain$3($effect`Magnetized Ears`, 40, 1, 1);
    buffMaintain$3($effect`Impeccable Coiffure`, 75, 1, 1);
    buffMaintain$3($effect`Mind Vision`, 200, 1, 1);
    buffMaintain$3($effect`Juiced and Loose`, 75, 1, 50);
    buffMaintain$3($effect`Hardened Sweatshirt`, 75, 1, 50);
    buffMaintain$3($effect`Bone Springs`, 75, 1, 1);
    if ((0, import_kolmafia136.myMeat)() > 5e3 && ((0, import_kolmafia136.myTurncount)() >= 50 || (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("falloutShelterChronoUsed")))) {
      buffMaintain$4($effect`Rad-Pro Tected`);
    }
  }
  if (in_zombieSlayer()) {
    buffMaintain$3($effect`Chow Downed`, 15, 1, 1);
    buffMaintain$3($effect`Scavengers Scavenging`, 20, 1, 1);
  }
  if (isActuallyEd()) {
    if ($location`The Shore\, Inc. Travel Agency` !== (0, import_kolmafia136.myLocation)()) {
      if ((0, import_kolmafia136.myServant)() !== import_kolmafia136.Servant.none) {
        buffMaintain$3($effect`Purr of the Feline`, 10, 1, 10);
      }
      buffMaintain$3($effect`Wisdom of Thoth`, 10, 1, 10);
      if ((0, import_kolmafia136.myLevel)() < 13) {
        buffMaintain$3($effect`Prayer of Seshat`, 10, 1, 10);
      }
      buffMaintain$3($effect`Power of Heka`, 10, 1, 10);
      buffMaintain$3($effect`Hide of Sobek`, 10, 1, 10);
      if (!$locations`The Hippy Camp, The Outskirts of Cobb's Knob, Pirates of the Garbage Barges, The Secret Government Laboratory`.includes(
        (0, import_kolmafia136.myLocation)()
      )) {
        buffMaintain$3($effect`Bounty of Renenutet`, 10, 1, 10);
      }
      var _iterator2 = _createForOfIteratorHelper(
        $effects`Prayer of Seshat, Wisdom of Thoth, Power of Heka, Hide of Sobek, Bounty of Renenutet`
      ), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var ef = _step2.value;
          if ((0, import_kolmafia136.myMp)() > 100) {
            buffMaintain$3(ef, 20, 1, 20);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else {
      buffMaintain$3($effect`Wisdom of Thoth`, 10, 1, 10);
    }
    if ((0, import_kolmafia136.myMp)() + 100 < (0, import_kolmafia136.myMaxmp)()) {
      acquireMP$2(100, (0, import_kolmafia136.myMeat)());
    }
    return true;
  }
  if (in_aosol()) {
    if ((0, import_kolmafia136.myClass)() === $class`Pig Skinner`) {
      buffMaintain$3($effect`Cheerled`, 30, 1, 10);
      buffMaintain$3($effect`Taped Up`, 20, 1, 10);
    }
    if ((0, import_kolmafia136.myClass)() === $class`Cheese Wizard`) {
      buffMaintain$3($effect`Cheddarmored`, 5, 1, 10);
    }
    if ((0, import_kolmafia136.myClass)() === $class`Jazz Agent`) {
      buffMaintain$3($effect`Reliable Backup`, 10, 1, 10);
      buffMaintain$3($effect`Soothing Flute`, 15, 1, 10);
    }
  }
  if (in_amw()) {
    if ((0, import_kolmafia136.itemAmount)($item`briefcase`) > 0) {
      (0, import_kolmafia136.use)(1, $item`briefcase`);
    }
    if (amw_canAfford($skill`Self-Tenderize`)) {
      buffMaintain$3($effect`Tenderized`, 0, 1, 5);
    }
    if (amw_canAfford($skill`Meat Puppet`)) {
      buffMaintain$3($effect`Meat Puppet`, 0, 1, 5);
    }
    if (amw_canAfford($skill`Steak Skirt`)) {
      buffMaintain$3($effect`Steak Skirt`, 0, 1, 5);
    }
  }
  var libram = preferredLibram();
  if ((0, import_kolmafia136.myAdventures)() > 20) {
    buffMaintain$3($effect`Merry Smithsness`, 0, 1, 10);
  }
  var poisoned = false;
  var _iterator3 = _createForOfIteratorHelper(
    $effects`A Little Bit Poisoned, Hardly Poisoned at All, Majorly Poisoned, Really Quite Poisoned, Somewhat Poisoned`
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var poison = _step3.value;
      if ((0, import_kolmafia136.haveEffect)(poison) > 0) {
        poisoned = true;
        break;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if (poisoned) {
    if ((0, import_kolmafia136.myMp)() > 12 && auto_have_skill($skill`Disco Nap`) && auto_have_skill($skill`Adventurer of Leisure`)) {
      (0, import_kolmafia136.useSkill)(1, $skill`Disco Nap`);
    } else if (isGalaktikAvailable() && auto_is_valid($item`anti-anti-antidote`)) {
      auto_buyUpTo(1, $item`anti-anti-antidote`);
      (0, import_kolmafia136.use)(1, $item`anti-anti-antidote`);
    }
  }
  if ((0, import_kolmafia136.haveEffect)($effect`Temporary Amnesia`) > 0) {
    if (!uneffect($effect`Temporary Amnesia`)) {
      (0, import_kolmafia136.abort)("Could not remove temporary amnesia and now I suckzor.");
    }
  }
  if ((0, import_kolmafia136.myClass)() === $class`Turtle Tamer` && (0, import_kolmafia136.guildStoreAvailable)()) {
    buffMaintain$4($effect`Eau de Tortue`);
  }
  if ((0, import_kolmafia136.monsterLevelAdjustment)() > 140 && !inAftercore()) {
    buffMaintain$4($effect`Butt-Rock Hair`);
    buffMaintain$4($effect`Go Get 'Em\, Tiger!`);
  }
  if (in_theSource()) {
    if ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("sourceInterval")) > 0 && (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("sourceInterval")) <= 600 && (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("sourceAgentsDefeated")) >= 9) {
      if ((0, import_kolmafia136.haveEffect)($effect`Song of Bravado`) === 0 && (0, import_kolmafia136.haveEffect)($effect`Song of Sauce`) === 0 && (0, import_kolmafia136.haveEffect)($effect`Song of Slowness`) === 0 && (0, import_kolmafia136.haveEffect)($effect`Song of the North`) === 0) {
        buffMaintain$3($effect`Song of Starch`, 250, 1, 1);
      }
    }
  }
  if ((0, import_kolmafia136.myClass)() === $class`Sauceror`) {
    if ((0, import_kolmafia136.myLevel)() >= 6 && (0, import_kolmafia136.haveEffect)($effect`[1458]Blood Sugar Sauce Magic`) === 0 && auto_have_skill($skill`Blood Sugar Sauce Magic`) && !(0, import_kolmafia136.inHardcore)()) {
      (0, import_kolmafia136.useSkill)(1, $skill`Blood Sugar Sauce Magic`);
    }
    if ((0, import_kolmafia136.myLevel)() <= 8 && (0, import_kolmafia136.mySoulsauce)() >= 92 || (0, import_kolmafia136.mySoulsauce)() >= 100) {
      (0, import_kolmafia136.useSkill)(1, $skill`Soul Rotation`);
    }
    var missing = ((0, import_kolmafia136.myMaxmp)() - (0, import_kolmafia136.myMp)()) / 15;
    var availableSauce = (0, import_kolmafia136.mySoulsauce)();
    var minMPexpected = (0, import_kolmafia136.myMp)() + (availableSauce - 5) * 15;
    if (availableSauce >= 5 && minMPexpected > 100 && minMPexpected > 0.8 * (0, import_kolmafia136.myMaxmp)()) {
      availableSauce -= 5;
    }
    var casts = (0, import_kolmafia136.min)(missing, availableSauce / 5);
    if (casts > 0) {
      (0, import_kolmafia136.useSkill)(casts, $skill`Soul Food`);
    }
  }
  if ((0, import_kolmafia136.monsterLevelAdjustment)() > 120 && (0, import_kolmafia136.myHp)() * 10 < (0, import_kolmafia136.myMaxhp)() * 8 && (0, import_kolmafia136.myMp)() >= 20) {
    acquireHP();
  }
  if ((0, import_kolmafia136.myMaxhp)() > 200 && (0, import_kolmafia136.myHp)() < 80 && (0, import_kolmafia136.myMp)() > 25) {
    acquireHP();
  }
  if ((0, import_kolmafia136.myMaxhp)() > 200 && (0, import_kolmafia136.myHp)() < 140 && (0, import_kolmafia136.myMp)() > 100) {
    acquireHP();
  }
  if (auto_have_skill($skill`Thunderheart`) && (0, import_kolmafia136.myThunder)() >= 90 && (0, import_kolmafia136.myTurncount)() - (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("auto_lastthunderturn")) >= 9) {
    (0, import_kolmafia136.useSkill)(1, $skill`Thunderheart`);
  }
  if (in_awol()) {
    var awolDesired = awol_walkBuff();
    if (awolDesired !== import_kolmafia136.Effect.none) {
      if (!inAftercore()) {
        var awolMP = 85;
        if ((0, import_kolmafia136.myClass)() === $class`Beanslinger`) {
          awolMP = 95;
        }
        buffMaintain$3(awolDesired, awolMP, 1, 20);
      } else {
        buffMaintain$3(awolDesired, 120, 1, 1);
      }
    }
  }
  if (auto_have_skill($skill`Demand Sandwich`) && (0, import_kolmafia136.myMp)() > 85 && (0, import_kolmafia136.myLevel)() >= 9 && (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_demandSandwich")) < 3) {
    (0, import_kolmafia136.useSkill)(1, $skill`Demand Sandwich`);
  }
  if (auto_have_skill($skill`Summon Smithsness`) && (0, import_kolmafia136.myMp)() > 20) {
    (0, import_kolmafia136.useSkill)(1, $skill`Summon Smithsness`);
  }
  buffMaintain$3($effect`Springy Fusilli`, 30, 1, 5);
  buffMaintain$3($effect`Walberg's Dim Bulb`, 30, 1, 5);
  if ((0, import_kolmafia136.myMaxhp)() < 100 || !auto_have_skill(
    //get some durability to avoid dying
    $skill`Cannelloni Cocoon`
  )) {
    buffMaintain$3($effect`Ghostly Shell`, 30, 1, 5);
    buffMaintain$3($effect`Astral Shell`, 30, 1, 5);
    buffMaintain$3($effect`Reptilian Fortitude`, 30, 1, 5);
  }
  var toCast = $skills`Prevent Scurvy and Sobriety, Acquire Rhinestones, Advanced Cocktailcrafting, Advanced Saucecrafting, Communism!, Grab a Cold One, Lunch Break, Pastamastery, Perfect Freeze, Request Sandwich, Spaghetti Breakfast, Summon Alice's Army Cards, Summon Carrot, Summon Confiscated Things, Summon Crimbo Candy, Summon Geeky Gifts, Summon Hilarious Objects, Summon Holiday Fun!, Summon Kokomo Resort Pass, Summon Tasteful Items`;
  var buff_familiar = pathHasFamiliar() && !(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_auto_bad100Familiar"));
  var regen = ((0, import_kolmafia136.toFloat)((0, import_kolmafia136.numericModifier)("MP Regen Min")) + (0, import_kolmafia136.toFloat)((0, import_kolmafia136.numericModifier)("MP Regen Max"))) / 2;
  if ((0, import_kolmafia136.myMaxmp)() < 50) {
    buffMaintain$3($effect`The Magical Mojomuscular Melody`, 3, 1, 5);
    buffMaintain$3($effect`Power Ballad of the Arrowsmith`, 7, 1, 5);
    buffMaintain$3(whatStatSmile(), 15, 1, 10);
    if (buff_familiar) {
      buffMaintain$3($effect`Leash of Linguini`, 20, 1, 10);
      if (regen > 10) {
        buffMaintain$3($effect`Thoughtful Empathy`, 25, 1, 10);
        buffMaintain$3($effect`Empathy`, 25, 1, 10);
      }
    }
    if (libram !== import_kolmafia136.Skill.none && (0, import_kolmafia136.myMp)() - (0, import_kolmafia136.mpCost)(libram) > 25) {
      (0, import_kolmafia136.useSkill)(1, libram);
    }
    var _iterator4 = _createForOfIteratorHelper(
      toCast
    ), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        var _sk = _step4.value;
        if ((0, import_kolmafia136.isUnrestricted)(_sk) && auto_have_skill(_sk) && (0, import_kolmafia136.myMp)() - 40 >= (0, import_kolmafia136.mpCost)(_sk)) {
          (0, import_kolmafia136.useSkill)(1, _sk);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (regen > 10) {
      buffMaintain$3($effect`Rage of the Reindeer`, 30, 1, 10);
    }
    buffMaintain$3($effect`Astral Shell`, 35, 1, 10);
    buffMaintain$3($effect`Elemental Saucesphere`, 30, 1, 10);
    if ((0, import_kolmafia136.myLocation)() !== $location`The Broodling Grounds`) {
      buffMaintain$3($effect`Spiky Shell`, 20, 1, 10);
      buffMaintain$3($effect`Scarysauce`, 25, 1, 10);
    }
    buffMaintain$3($effect`Ghostly Shell`, 25, 1, 10);
    buffMaintain$3($effect`Walberg's Dim Bulb`, 35, 1, 10);
    buffMaintain$3($effect`Blubbered Up`, 30, 1, 10);
    buffMaintain$3($effect`Reptilian Fortitude`, 30, 1, 10);
    if (regen > 10) {
      buffMaintain$3($effect`Disco Fever`, 40, 1, 10);
    }
    var preShield = auto_saveEquipped();
    auto_equipAprilShieldBuff();
    buffMaintain$3($effect`Saucemastery`, 25, 1, 4);
    buffMaintain$3($effect`Pasta Oneness`, 25, 1, 4);
    if (regen > 7.5) {
      buffMaintain$3($effect`Seal Clubbing Frenzy`, 10, 3, 4);
      buffMaintain$3($effect`Patience of the Tortoise`, 10, 3, 4);
      buffMaintain$3($effect`Mariachi Mood`, 25, 1, 4);
      buffMaintain$3($effect`Disco State of Mind`, 25, 1, 4);
    }
    auto_loadEquipped(preShield);
  } else if ((0, import_kolmafia136.myMaxmp)() < 80) {
    buffMaintain$3($effect`The Magical Mojomuscular Melody`, 3, 1, 5);
    buffMaintain$3($effect`Power Ballad of the Arrowsmith`, 7, 1, 5);
    buffMaintain$3(whatStatSmile(), 20, 1, 10);
    if (buff_familiar) {
      buffMaintain$3($effect`Leash of Linguini`, 30, 1, 10);
      if (regen > 10) {
        buffMaintain$3($effect`Thoughtful Empathy`, 35, 1, 10);
        buffMaintain$3($effect`Empathy`, 35, 1, 10);
      }
    }
    if (libram !== import_kolmafia136.Skill.none && (0, import_kolmafia136.myMp)() - (0, import_kolmafia136.mpCost)(libram) > 32) {
      (0, import_kolmafia136.useSkill)(1, libram);
    }
    var _iterator5 = _createForOfIteratorHelper(
      toCast
    ), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        var _sk2 = _step5.value;
        if ((0, import_kolmafia136.isUnrestricted)(_sk2) && auto_have_skill(_sk2) && (0, import_kolmafia136.myMp)() - 50 >= (0, import_kolmafia136.mpCost)(_sk2)) {
          (0, import_kolmafia136.useSkill)(1, _sk2);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (regen > 10) {
      buffMaintain$3($effect`Rage of the Reindeer`, 40, 1, 10);
    }
    buffMaintain$3($effect`Astral Shell`, 50, 1, 10);
    buffMaintain$3($effect`Elemental Saucesphere`, 40, 1, 10);
    if ((0, import_kolmafia136.myLocation)() !== $location`The Broodling Grounds`) {
      buffMaintain$3($effect`Spiky Shell`, 40, 1, 10);
      buffMaintain$3($effect`Scarysauce`, 40, 1, 10);
    }
    buffMaintain$3($effect`Ghostly Shell`, 45, 1, 10);
    if ((0, import_kolmafia136.myClass)() === $class`Turtle Tamer`) {
      buffMaintain$3($effect`Disdain of the Storm Tortoise`, 60, 1, 10);
    }
    buffMaintain$3($effect`Walberg's Dim Bulb`, 50, 1, 10);
    buffMaintain$3($effect`Blubbered Up`, 60, 1, 10);
    buffMaintain$3($effect`Reptilian Fortitude`, 50, 1, 10);
    if (regen > 10) {
      buffMaintain$3($effect`Disco Fever`, 60, 1, 10);
    }
    var _preShield = auto_saveEquipped();
    auto_equipAprilShieldBuff();
    buffMaintain$3($effect`Saucemastery`, 50, 3, 4);
    buffMaintain$3($effect`Pasta Oneness`, 50, 3, 4);
    if (regen > 8.2) {
      buffMaintain$3($effect`Seal Clubbing Frenzy`, 25, 3, 4);
      buffMaintain$3($effect`Patience of the Tortoise`, 25, 3, 4);
      buffMaintain$3($effect`Mariachi Mood`, 50, 3, 4);
      buffMaintain$3($effect`Disco State of Mind`, 50, 3, 4);
    }
    auto_loadEquipped(_preShield);
  } else if ((0, import_kolmafia136.myMaxmp)() < 170) {
    if ((0, import_kolmafia136.myLevel)() < 13) {
      buffMaintain$3(whatStatSmile(), 40, 1, 10);
    }
    if (buff_familiar) {
      buffMaintain$3($effect`Leash of Linguini`, 35, 1, 10);
      if (regen > 4) {
        buffMaintain$3($effect`Thoughtful Empathy`, 50, 1, 10);
        buffMaintain$3($effect`Empathy`, 50, 1, 10);
      }
    }
    var _iterator6 = _createForOfIteratorHelper(
      toCast
    ), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var _sk3 = _step6.value;
        if ((0, import_kolmafia136.isUnrestricted)(_sk3) && auto_have_skill(_sk3) && (0, import_kolmafia136.myMp)() - 90 >= (0, import_kolmafia136.mpCost)(_sk3)) {
          (0, import_kolmafia136.useSkill)(1, _sk3);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (libram !== import_kolmafia136.Skill.none && (0, import_kolmafia136.myMp)() - (0, import_kolmafia136.mpCost)(libram) > 40) {
      (0, import_kolmafia136.useSkill)(1, libram);
    }
    buffMaintain$3($effect`Big`, 100, 1, 10);
    buffMaintain$3($effect`Rage of the Reindeer`, 80, 1, 10);
    buffMaintain$3($effect`Astral Shell`, 80, 1, 10);
    buffMaintain$3($effect`Elemental Saucesphere`, 120, 1, 10);
    if ((0, import_kolmafia136.myLocation)() !== $location`The Broodling Grounds`) {
      buffMaintain$3($effect`Spiky Shell`, 80, 1, 10);
      buffMaintain$3($effect`Scarysauce`, 120, 1, 10);
    }
    buffMaintain$3($effect`Ghostly Shell`, 80, 1, 10);
    if ((0, import_kolmafia136.myClass)() === $class`Turtle Tamer`) {
      buffMaintain$3($effect`Disdain of the Storm Tortoise`, 80, 1, 10);
    }
    buffMaintain$3($effect`Walberg's Dim Bulb`, 80, 1, 10);
    buffMaintain$3($effect`Springy Fusilli`, 80, 1, 10);
    buffMaintain$3($effect`Blubbered Up`, 120, 1, 10);
    if (regen > 10) {
      buffMaintain$3($effect`Reptilian Fortitude`, 150, 1, 10);
      buffMaintain$3($effect`Disco Fever`, 80, 1, 10);
      buffMaintain$3($effect`Seal Clubbing Frenzy`, 50, 5, 4);
      buffMaintain$3($effect`Patience of the Tortoise`, 50, 5, 4);
    }
    if (libram !== import_kolmafia136.Skill.none && (0, import_kolmafia136.myMp)() - (0, import_kolmafia136.mpCost)(libram) > 80) {
      (0, import_kolmafia136.useSkill)(1, libram);
    }
    if ((0, import_kolmafia136.myMp)() > 80) {
      buffMaintain$3($effect`Takin' It Greasy`, 50, 1, 5);
      buffMaintain$3($effect`Intimidating Mien`, 50, 1, 5);
    }
    buffMaintain$3($effect`Polka of Plenty`, 110, 1, 5);
  } else {
    var didOutfit = false;
    if ((0, import_kolmafia136.myBasestat)($stat`Mysticality`) >= 200 && (0, import_kolmafia136.myBuffedstat)($stat`Mysticality`) >= 200 && inAftercore() && (0, import_kolmafia136.itemAmount)($item`Wand of Oscus`) > 0 && (0, import_kolmafia136.itemAmount)($item`Oscus's dumpster waders`) > 0 && (0, import_kolmafia136.itemAmount)($item`Oscus's pelt`) > 0) {
      (0, import_kolmafia136.cliExecute)("outfit save Backup");
      if (!autoOutfit("Vile Vagrant Vestments")) {
        auto_log_warning(
          "Could not wear Vile Vagrant Outfit for some raisin",
          "red"
        );
      }
      didOutfit = true;
    }
    if ((0, import_kolmafia136.myMp)() > 150 && (0, import_kolmafia136.myMaxhp)() > 300 && (0, import_kolmafia136.myHp)() < 140) {
      acquireHP();
    }
    if ((0, import_kolmafia136.myMp)() > 100 && (0, import_kolmafia136.myMaxhp)() > 500 && (0, import_kolmafia136.myHp)() < 250) {
      acquireHP();
    }
    if ((0, import_kolmafia136.myMp)() > 75 && (0, import_kolmafia136.myMaxhp)() > 500 && (0, import_kolmafia136.myHp)() < 200) {
      acquireHP();
    }
    if ((0, import_kolmafia136.myMp)() > 75 && (0, import_kolmafia136.myMaxhp)() > 700 && (0, import_kolmafia136.myHp)() < 300) {
      acquireHP();
    }
    if ((0, import_kolmafia136.myMp)() > 75 && ((0, import_kolmafia136.myHp)() === 0 || (0, import_kolmafia136.myMaxhp)() / (0, import_kolmafia136.myHp)() > 3)) {
      acquireHP();
    }
    buffMaintain$3($effect`Fat Leon's Phat Loot Lyric`, 250, 1, 10);
    buffMaintain$3($effect`Polka of Plenty`, 150, 1, 5);
    if ((0, import_kolmafia136.myLevel)() < 13) {
      buffMaintain$3(whatStatSmile(), 40, 1, 10);
    }
    if (buff_familiar) {
      buffMaintain$3($effect`Empathy`, 50, 1, 10);
      buffMaintain$3($effect`Thoughtful Empathy`, 50, 1, 10);
      buffMaintain$3($effect`Leash of Linguini`, 35, 1, 10);
      if (auto_remainingShantyTurns() < 1) {
        buffMaintain$3($effect`Only Dogs Love a Drunken Sailor`, 50, 1, 1);
      }
    }
    var _iterator7 = _createForOfIteratorHelper(
      toCast
    ), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _sk4 = _step7.value;
        if ((0, import_kolmafia136.isUnrestricted)(_sk4) && auto_have_skill(_sk4) && (0, import_kolmafia136.myMp)() - 85 >= (0, import_kolmafia136.mpCost)(_sk4)) {
          (0, import_kolmafia136.useSkill)(1, _sk4);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (libram !== import_kolmafia136.Skill.none && (0, import_kolmafia136.myMp)() - (0, import_kolmafia136.mpCost)(libram) > 32) {
      auto_log_info(
        `Mymp: ${(0, import_kolmafia136.myMp)()} of ${(0, import_kolmafia136.myMaxmp)()} and cost: ${(0, import_kolmafia136.mpCost)(libram)}`,
        "blue"
      );
      var _temp = false;
      try {
        _temp = (0, import_kolmafia136.useSkill)(1, libram);
      } finally {
        if (!_temp) {
          auto_log_warning("No longer have enough MP and failed.", "red");
          auto_log_info(
            `Mymp: ${(0, import_kolmafia136.myMp)()} of ${(0, import_kolmafia136.myMaxmp)()} and cost: ${(0, import_kolmafia136.mpCost)(libram)}`,
            "blue"
          );
        }
      }
    }
    buffMaintain$3($effect`Singer's Faithful Ocelot`, 280, 1, 10);
    buffMaintain$3($effect`Big`, 100, 1, 10);
    buffMaintain$3($effect`Rage of the Reindeer`, 80, 1, 10);
    buffMaintain$3($effect`Astral Shell`, 80, 1, 10);
    buffMaintain$3($effect`Elemental Saucesphere`, 120, 1, 10);
    if ((0, import_kolmafia136.myLocation)() !== $location`The Broodling Grounds`) {
      buffMaintain$3($effect`Spiky Shell`, 120, 1, 10);
      buffMaintain$3($effect`Scarysauce`, 160, 1, 10);
      buffMaintain$3($effect`Jalapeño Saucesphere`, 225, 1, 10);
    }
    buffMaintain$3($effect`Ghostly Shell`, 80, 1, 10);
    if (regen > 15) {
      buffMaintain$3($effect`Disdain of the War Snapper`, 200, 1, 10);
    }
    buffMaintain$3($effect`Walberg's Dim Bulb`, 80, 1, 10);
    buffMaintain$3($effect`Springy Fusilli`, 80, 1, 10);
    if (regen > 15) {
      buffMaintain$3($effect`Flimsy Shield of the Pastalord`, 180, 1, 10);
    }
    buffMaintain$3($effect`Blubbered Up`, 200, 1, 10);
    buffMaintain$3($effect`Tenacity of the Snapper`, 200, 1, 10);
    buffMaintain$3($effect`Reptilian Fortitude`, 200, 1, 10);
    if (regen > 20) {
      buffMaintain$3($effect`Antibiotic Saucesphere`, 350, 1, 10);
    }
    if (regen > 5) {
      buffMaintain$3($effect`Disco Fever`, 120, 1, 10);
    }
    var _preShield2 = auto_saveEquipped();
    auto_equipAprilShieldBuff();
    if ((0, import_kolmafia136.myPrimestat)() === $stat`Muscle`) {
      buffMaintain$3($effect`Seal Clubbing Frenzy`, 200, 5, 4);
      buffMaintain$3($effect`Patience of the Tortoise`, 200, 5, 4);
    }
    if ((0, import_kolmafia136.myPrimestat)() === $stat`Moxie`) {
      buffMaintain$3($effect`Mariachi Mood`, 200, 5, 4);
      buffMaintain$3($effect`Disco State of Mind`, 200, 5, 4);
    }
    if ((0, import_kolmafia136.myPrimestat)() === $stat`Mysticality`) {
      buffMaintain$3($effect`Saucemastery`, 200, 5, 4);
      buffMaintain$3($effect`Pasta Oneness`, 200, 5, 4);
    }
    auto_loadEquipped(_preShield2);
    if ((0, import_kolmafia136.familiarWeight)((0, import_kolmafia136.myFamiliar)()) < 20) {
      buffMaintain$3($effect`Curiosity of Br'er Tarrypin`, 50, 1, 2);
    }
    if (pathHasFamiliar() && !(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_auto_bad100Familiar"))) {
      buffMaintain$3($effect`Jingle Jangle Jingle`, 120, 1, 2);
    }
    buffMaintain$3($effect`A Few Extra Pounds`, 200, 1, 2);
    if ((0, import_kolmafia136.myClass)() === $class`Turtle Tamer`) {
      buffMaintain$3($effect`Boon of the War Snapper`, 200, 1, 5);
      buffMaintain$3($effect`Boon of She-Who-Was`, 200, 1, 5);
      buffMaintain$3($effect`Boon of the Storm Tortoise`, 200, 1, 5);
    }
    buffMaintain$3($effect`Ruthlessly Efficient`, 50, 1, 5);
    buffMaintain$3($effect`Mathematically Precise`, 150, 1, 5);
    if (inAftercore()) {
      if (auto_have_skill($skill`Summon Rad Libs`) && (0, import_kolmafia136.myMp)() > 6) {
        (0, import_kolmafia136.useSkill)(3, $skill`Summon Rad Libs`);
      }
      if (auto_have_skill($skill`Summon Geeky Gifts`) && (0, import_kolmafia136.myMp)() > 5) {
        (0, import_kolmafia136.useSkill)(1, $skill`Summon Geeky Gifts`);
      }
      if (auto_have_skill($skill`Summon Stickers`) && (0, import_kolmafia136.myMp)() > 6) {
        (0, import_kolmafia136.useSkill)(3, $skill`Summon Stickers`);
      }
      if (auto_have_skill($skill`Summon Sugar Sheets`) && (0, import_kolmafia136.myMp)() > 6) {
        (0, import_kolmafia136.useSkill)(3, $skill`Summon Sugar Sheets`);
      }
      if (auto_have_skill($skill`Rainbow Gravitation`)) {
        (0, import_kolmafia136.useSkill)(3, $skill`Rainbow Gravitation`);
      }
    }
    if (libram !== import_kolmafia136.Skill.none && (0, import_kolmafia136.myMp)() - (0, import_kolmafia136.mpCost)(libram) > 80) {
      (0, import_kolmafia136.useSkill)(1, libram);
    }
    if ((0, import_kolmafia136.myMp)() > 80) {
      buffMaintain$3($effect`Takin' It Greasy`, 50, 1, 5);
      buffMaintain$3($effect`Intimidating Mien`, 50, 1, 5);
    }
    if (didOutfit) {
      (0, import_kolmafia136.cliExecute)("outfit Backup");
    }
  }
  if ((0, import_kolmafia136.myLevel)() < 13 || (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("auto_disregardInstantKarma"))) {
    if ((0, import_kolmafia136.myPrimestat)() === $stat`Muscle`) {
      auto_faceCheck($effect`Patient Smile`);
    }
    if ((0, import_kolmafia136.myPrimestat)() === $stat`Moxie`) {
      auto_faceCheck($effect`Knowing Smile`);
    }
    if ((0, import_kolmafia136.myPrimestat)() === $stat`Mysticality`) {
      auto_faceCheck($effect`Inscrutable Gaze`);
      auto_faceCheck($effect`Wry Smile`);
    }
    auto_faceCheck($effect`Inscrutable Gaze`);
    auto_faceCheck($effect`Wry Smile`);
    auto_faceCheck($effect`Patient Smile`);
    auto_faceCheck($effect`Knowing Smile`);
    if ((0, import_kolmafia136.myMeat)() > meatReserve() + 5e3) {
      buffMaintain$3($effect`Carol of the Thrills`, 30, 1, 1);
      buffMaintain$3($effect`Aloysius' Antiphon of Aptitude`, 40, 1, 1);
    }
    buffMaintain$4($effect`Scorched Earth`);
    buffMaintain$4($effect`Wisdom of Others`);
    if (!auto_ignoreExperience() && (0, import_kolmafia136.myLevel)() < 13) {
      var _iterator8 = _createForOfIteratorHelper(
        $items`Azurite, Eye Agate, Lapis Lazuli`
      ), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var it = _step8.value;
          if ((0, import_kolmafia136.itemAmount)(it) > 0 && auto_is_valid(it)) {
            (0, import_kolmafia136.use)(it, (0, import_kolmafia136.itemAmount)(it));
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }
  if ((0, import_kolmafia136.myClass)() === $class`Pastamancer`) {
    var cur = (0, import_kolmafia136.myThrall)();
    var consider = import_kolmafia136.Thrall.none;
    if ((0, import_kolmafia136.myMp)() >= 1.2 * (0, import_kolmafia136.mpCost)($skill`Bind Vermincelli`) && cur === import_kolmafia136.Thrall.none && auto_have_skill($skill`Bind Vermincelli`)) {
      consider = $thrall`Vermincelli`;
    }
    if ((0, import_kolmafia136.myMp)() >= 1.2 * (0, import_kolmafia136.mpCost)($skill`Bind Spice Ghost`) && auto_have_skill($skill`Bind Spice Ghost`) && (0, import_kolmafia136.myDaycount)() > 1 && (0, import_kolmafia136.toInt)((0, import_kolmafia136.numericModifier)("MP Regen Min")) > 9) {
      consider = $thrall`Spice Ghost`;
    }
    if (consider !== cur && consider !== import_kolmafia136.Thrall.none) {
      var toEquip = (0, import_kolmafia136.toSkill)(`Bind ${consider}`);
      if (toEquip !== import_kolmafia136.Skill.none) {
        if ((0, import_kolmafia136.myMp)() >= (0, import_kolmafia136.mpCost)(toEquip)) {
          (0, import_kolmafia136.useSkill)(1, toEquip);
        }
      } else {
        auto_log_warning(
          "Thrall handler error. Could not generate appropriate skill.",
          "red"
        );
      }
    }
  }
  if (!inAftercore()) {
    if ((0, import_kolmafia136.myDaycount)() === 1 && (0, import_kolmafia136.myBjornedFamiliar)() !== $familiar`Grim Brother` && (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_grimFairyTaleDropsCrown")) === 0 && (0, import_kolmafia136.haveFamiliar)($familiar`Grim Brother`) && (0, import_kolmafia136.equippedItem)($slot`back`) === $item`Buddy Bjorn` && (0, import_kolmafia136.myFamiliar)() !== $familiar`Grim Brother`) {
      (0, import_kolmafia136.bjornifyFamiliar)($familiar`Grim Brother`);
    }
    if ((0, import_kolmafia136.myBjornedFamiliar)() === $familiar`Grimstone Golem` && (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_grimstoneMaskDropsCrown")) === 1 && (0, import_kolmafia136.haveFamiliar)($familiar`El Vibrato Megadrone`)) {
      (0, import_kolmafia136.bjornifyFamiliar)($familiar`El Vibrato Megadrone`);
    }
    if ((0, import_kolmafia136.myBjornedFamiliar)() === $familiar`Grim Brother` && (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_grimFairyTaleDropsCrown")) >= 1 && (0, import_kolmafia136.haveFamiliar)($familiar`El Vibrato Megadrone`)) {
      (0, import_kolmafia136.bjornifyFamiliar)($familiar`El Vibrato Megadrone`);
    }
  }
  if (in_bugbear() && (0, import_kolmafia136.itemAmount)($item`key-o-tron`) > 0 && (0, import_kolmafia136.myLocation)().zone !== "Mothership") {
    if ($monsters`scavenger bugbear, hypodermic bugbear, batbugbear, bugbear scientist, bugaboo, Black Ops Bugbear, Battlesuit Bugbear Type, ancient unspeakable bugbear, trendy bugbear chef`.includes(
      (0, import_kolmafia136.lastMonster)()
    )) {
      (0, import_kolmafia136.use)(1, $item`key-o-tron`);
    }
  }
  if (in_heavyrains()) {
    auto_log_info(
      `Post adventure done: Thunder: ${(0, import_kolmafia136.myThunder)()} Rain: ${(0, import_kolmafia136.myRain)()} Lightning: ${(0, import_kolmafia136.myLightning)()}`,
      "green"
    );
  }
  if ((0, import_kolmafia136.itemAmount)($item`The Big Book of Pirate Insults`) > 0 && ((0, import_kolmafia136.myLocation)() === $location`Barrrney's Barrr` || (0, import_kolmafia136.myLocation)() === $location`The Obligatory Pirate's Cove`)) {
    auto_log_info(`Have ${numPirateInsults()} insults.`, "green");
  }
  if ((0, import_kolmafia136.myLocation)() === $location`The Broodling Grounds`) {
    auto_log_info(
      `Have ${(0, import_kolmafia136.itemAmount)($item`hellseal brain`)} brain(s).`,
      "green"
    );
    auto_log_info(`Have ${(0, import_kolmafia136.itemAmount)($item`hellseal hide`)} hide(s).`, "green");
    auto_log_info(
      `Have ${(0, import_kolmafia136.itemAmount)($item`hellseal sinew`)} sinew(s).`,
      "green"
    );
  }
  if ((0, import_kolmafia136.myLocation)() === $location`The Hidden Bowling Alley` && inAftercore()) {
    if ((0, import_kolmafia136.itemAmount)($item`bowling ball`) > 0) {
      (0, import_kolmafia136.putCloset)((0, import_kolmafia136.itemAmount)($item`bowling ball`), $item`bowling ball`);
    }
  }
  if ((0, import_kolmafia136.myLevel)() < 13 && !inAftercore() && (0, import_kolmafia136.myMeat)() > 7500) {
    if ((0, import_kolmafia136.itemAmount)($item`pulled red taffy`) >= 6) {
      buffMaintain$3($effect`Cinnamon Challenger`, 0, 6, 10);
    }
    if ((0, import_kolmafia136.itemAmount)($item`pulled orange taffy`) >= 6) {
      buffMaintain$3($effect`Orange Crusher`, 0, 6, 10);
    }
    if ((0, import_kolmafia136.itemAmount)($item`pulled violet taffy`) >= 6) {
      buffMaintain$3($effect`Purple Reign`, 0, 6, 10);
    }
    buffMaintain$4($effect`Gummi-Grin`);
    buffMaintain$4($effect`Strong Resolve`);
    buffMaintain$4($effect`Irresistible Resolve`);
    buffMaintain$4($effect`Brilliant Resolve`);
    buffMaintain$4($effect`From Nantucket`);
    buffMaintain$4($effect`Squatting and Thrusting`);
    buffMaintain$4($effect`You Read The Manual`);
    buyableMaintain$2(
      $item`hair spray`,
      1,
      200,
      (0, import_kolmafia136.myClass)() !== $class`Turtle Tamer`
    );
    buyableMaintain$2(
      $item`blood of the Wereseal`,
      1,
      3500,
      (0, import_kolmafia136.monsterLevelAdjustment)() > 135
    );
    buyableMaintain$1($item`Ben-Gal™ Balm`, 1, 200);
  }
  buyableMaintain$2(
    $item`turtle pheromones`,
    1,
    800,
    (0, import_kolmafia136.myClass)() === $class`Turtle Tamer`
  );
  if ((0, import_kolmafia136.lastMonster)() === $monster`writing desk` && (0, import_kolmafia136.getProperty)("lastEncounter") === $monster`writing desk`.toString() && (0, import_kolmafia136.haveEffect)($effect`Beaten Up`) === 0) {
    auto_log_info(
      `Fought ${(0, import_kolmafia136.getProperty)("writingDesksDefeated")} writing desks.`,
      "blue"
    );
  }
  if ((0, import_kolmafia136.lastMonster)() === $monster`modern zmobie` && (0, import_kolmafia136.getProperty)("lastEncounter") === $monster`modern zmobie`.toString() && (0, import_kolmafia136.haveEffect)($effect`Beaten Up`) === 0) {
    (0, import_kolmafia136.setProperty)(
      "auto_modernzmobiecount",
      `${(0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("auto_modernzmobiecount")) + 1}`
    );
    auto_log_info(
      `Fought ${(0, import_kolmafia136.getProperty)("auto_modernzmobiecount")} modern zmobies.`,
      "blue"
    );
  }
  auto_beaten_handler();
  if ((0, import_kolmafia136.getProperty)("lastEncounter") === "Welcome to the Great Overlook Lodge") {
    (0, import_kolmafia136.setProperty)("auto_shinningStarted", true.toString());
  }
  if ((0, import_kolmafia136.haveEffect)($effect`Disavowed`) > 0) {
    if ((0, import_kolmafia136.getProperty)("_auto_bondBriefing") !== "finished") {
      (0, import_kolmafia136.setProperty)("_auto_bondBriefing", "started");
    }
    if (auto_have_skill($skill`Disco Nap`) && (0, import_kolmafia136.myMp)() > (0, import_kolmafia136.mpCost)($skill`Disco Nap`)) {
      auto_log_warning("We have been disavowed...", "red");
      (0, import_kolmafia136.useSkill)(1, $skill`Disco Nap`);
    } else {
      (0, import_kolmafia136.abort)("We have been disavowed...");
    }
  }
  removeFromMaximize("-1000mana cost");
  (0, import_kolmafia136.removeProperty)("auto_combatDirective");
  (0, import_kolmafia136.removeProperty)("auto_digitizeDirective");
  if ((0, import_kolmafia136.mySessionAdv)() === (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_auto_inf_session_adv"))) {
    auto_log_debug$1(
      "auto_post_adv.js detected that no adventure was spent since last auto_pre_adv.js"
    );
    (0, import_kolmafia136.setProperty)(
      "_auto_inf_counter",
      ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_auto_inf_counter")) + 1).toString()
    );
    if ((0, import_kolmafia136.toMonster)((0, import_kolmafia136.getProperty)("_auto_inf_last_monster")) !== (0, import_kolmafia136.lastMonster)()) {
      (0, import_kolmafia136.removeProperty)("_auto_inf_counter");
    }
    (0, import_kolmafia136.setProperty)("_auto_inf_last_monster", (0, import_kolmafia136.lastMonster)().toString());
    if ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_auto_inf_counter")) >= 30) {
      auto_log_error(
        `no adventure was spent ${(0, import_kolmafia136.getProperty)("_auto_inf_counter")} times in a row which suggests we are stuck in an infinite loop. Stopping autoscend`
      );
      (0, import_kolmafia136.removeProperty)("_auto_inf_counter");
      (0, import_kolmafia136.setProperty)("auto_interrupt", true.toString());
    } else if ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_auto_inf_counter")) > 10) {
      auto_log_warning$1(
        `no adventure was spent ${(0, import_kolmafia136.getProperty)("_auto_inf_counter")} times in a row`
      );
    }
  } else {
    (0, import_kolmafia136.removeProperty)("_auto_inf_counter");
  }
  auto_log_info("Post Adventure done, beep.", "purple");
  return true;
}
function main() {
  var ret = false;
  try {
    ret = auto_post_adventure();
  } finally {
    if (!ret) {
      auto_log_error(
        "Error running auto_post_adv.js, setting auto_interrupt=true"
      );
      (0, import_kolmafia136.setProperty)("auto_interrupt", true.toString());
    }
  }
}
//!cocoon == expensive heal. +durability to save meat even when maxhp > 100
