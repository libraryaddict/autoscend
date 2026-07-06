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

// src/autoscend/auto_choice_adv.ts
var auto_choice_adv_exports = {};
__export(auto_choice_adv_exports, {
  main: () => main
});
module.exports = __toCommonJS(auto_choice_adv_exports);

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

// src/autoscend/auto_choice_adv.ts
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

// src/autoscend/auto_equipment.ts
var import_kolmafia135 = require("kolmafia");

// src/autoscend/auto_consume.ts
var import_kolmafia134 = require("kolmafia");

// src/autoscend.ts
var import_kolmafia133 = require("kolmafia");

// src/autoscend/auto_acquire.ts
var import_kolmafia121 = require("kolmafia");

// src/autoscend/auto_craft.ts
var import_kolmafia120 = require("kolmafia");

// src/autoscend/auto_util.ts
var import_kolmafia119 = require("kolmafia");

// src/autoscend/auto_adventure.ts
var import_kolmafia114 = require("kolmafia");

// src/autoscend/auto_zone.ts
var import_kolmafia113 = require("kolmafia");

// src/autoscend/autoscend_record.ts
var import_kolmafia2 = require("kolmafia");

// src/autoscend/iotms/mr2016.ts
var import_kolmafia112 = require("kolmafia");

// src/autoscend/auto_list.ts
var import_kolmafia3 = require("kolmafia");
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

// src/autoscend/auto_restore.ts
var import_kolmafia111 = require("kolmafia");

// src/autoscend/auto_buff.ts
var import_kolmafia110 = require("kolmafia");

// src/autoscend/auto_familiar.ts
var import_kolmafia109 = require("kolmafia");

// src/autoscend/iotms/mr2014.ts
var import_kolmafia108 = require("kolmafia");

// src/autoscend/auto_powerlevel.ts
var import_kolmafia107 = require("kolmafia");

// src/autoscend/auto_providers.ts
var import_kolmafia106 = require("kolmafia");

// src/autoscend/iotms/clan.ts
var import_kolmafia104 = require("kolmafia");

// src/autoscend/paths/avatar_of_boris.ts
var import_kolmafia5 = require("kolmafia");

// src/autoscend/utils/kolmafiaUtils.ts
var import_kolmafia4 = require("kolmafia");
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
    (0, import_kolmafia4.fileToBuffer)(filename).split(/\r?\n/)
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
  return (0, import_kolmafia5.myPath)() === $path`Avatar of Boris`;
}

// src/autoscend/paths/avatar_of_jarlsberg.ts
var import_kolmafia6 = require("kolmafia");
function is_jarlsberg() {
  return (0, import_kolmafia6.myPath)() === $path`Avatar of Jarlsberg`;
}

// src/autoscend/paths/avatar_of_sneaky_pete.ts
var import_kolmafia7 = require("kolmafia");
function is_pete() {
  return (0, import_kolmafia7.myPath)() === $path`Avatar of Sneaky Pete`;
}

// src/autoscend/paths/casual.ts
var import_kolmafia103 = require("kolmafia");

// src/autoscend/quests/level_08.ts
var import_kolmafia102 = require("kolmafia");

// src/autoscend/auto_routing.ts
var import_kolmafia101 = require("kolmafia");

// src/autoscend/iotms/mr2018.ts
var import_kolmafia100 = require("kolmafia");

// src/autoscend/paths/actually_ed_the_undying.ts
var import_kolmafia99 = require("kolmafia");

// src/autoscend/iotms/elementalPlanes.ts
var import_kolmafia8 = require("kolmafia");

// src/autoscend/iotms/mr2015.ts
var import_kolmafia97 = require("kolmafia");

// src/autoscend/paths/avatar_of_west_of_loathing.ts
var import_kolmafia9 = require("kolmafia");

// src/autoscend/paths/gelatinous_noob.ts
var import_kolmafia11 = require("kolmafia");

// src/autoscend/iotms/mr2011.ts
var import_kolmafia10 = require("kolmafia");

// src/autoscend/paths/heavy_rains.ts
var import_kolmafia12 = require("kolmafia");
function in_heavyrains() {
  return (0, import_kolmafia12.myPath)() === $path`Heavy Rains`;
}

// src/autoscend/paths/kingdom_of_exploathing.ts
var import_kolmafia96 = require("kolmafia");

// src/autoscend/iotms/mr2019.ts
var import_kolmafia95 = require("kolmafia");

// src/autoscend/paths/dark_gyffte.ts
var import_kolmafia94 = require("kolmafia");

// src/autoscend/quests/level_12.ts
var import_kolmafia93 = require("kolmafia");

// src/autoscend/combat/auto_combat_quest.ts
var import_kolmafia91 = require("kolmafia");

// src/autoscend/paths/fall_of_the_dinosaurs.ts
var import_kolmafia13 = require("kolmafia");

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

// src/autoscend/combat/auto_combat.ts
var import_kolmafia89 = require("kolmafia");

// src/autoscend/paths/avant_guard.ts
var import_kolmafia65 = require("kolmafia");

// src/autoscend/iotms/mr2023.ts
var import_kolmafia64 = require("kolmafia");

// src/autoscend/combat/auto_combat_util.ts
var import_kolmafia63 = require("kolmafia");

// src/autoscend/iotms/mr2017.ts
var import_kolmafia16 = require("kolmafia");

// src/autoscend/paths/wereprofessor.ts
var import_kolmafia15 = require("kolmafia");
function in_wereprof() {
  return (0, import_kolmafia15.myPath)() === $path`WereProfessor`;
}
function is_werewolf() {
  if (!in_wereprof()) {
    return false;
  }
  if ((0, import_kolmafia15.haveEffect)($effect`Savage Beast`) > 0) {
    return true;
  }
  return false;
}
function is_professor() {
  if (!in_wereprof()) {
    return false;
  }
  if ((0, import_kolmafia15.haveEffect)($effect`Mild-Mannered Professor`) > 0) {
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

// src/autoscend/iotms/mr2020.ts
var import_kolmafia18 = require("kolmafia");

// src/autoscend/paths/path_of_the_plumber.ts
var import_kolmafia17 = require("kolmafia");
function in_plumber() {
  return (0, import_kolmafia17.myPath)() === $path`Path of the Plumber`;
}
function plumber_equippedHammer() {
  return (0, import_kolmafia17.equippedItem)($slot`weapon`) === $item`hammer` || (0, import_kolmafia17.equippedItem)($slot`weapon`) === $item`heavy hammer`;
}
function plumber_equippedFlower() {
  return (0, import_kolmafia17.equippedItem)($slot`weapon`) === $item`[10462]fire flower` || (0, import_kolmafia17.equippedItem)($slot`weapon`) === $item`bonfire flower`;
}
function plumber_equippedBoots() {
  return (0, import_kolmafia17.haveEquipped)($item`work boots`) || (0, import_kolmafia17.haveEquipped)($item`fancy boots`);
}
function plumber_skillValid(sk) {
  if (!in_plumber()) {
    return true;
  }
  if (import_kolmafia17.Skill.get(
    [
      "Jump Attack",
      "[25005]Spin Jump",
      "[25006]Multi-Bounce"
    ]
  ).includes(sk)) {
    return plumber_equippedBoots();
  } else if (import_kolmafia17.Skill.get(
    [
      "Fireball Toss",
      "[25003]Juggle Fireballs",
      "[25004]Fireball Barrage"
    ]
  ).includes(sk)) {
    return plumber_equippedFlower();
  } else if (import_kolmafia17.Skill.get(
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

// src/autoscend/iotms/mr2020.ts
function mushroomGardenChoiceHandler(choice) {
  if (choice === 1410) {
    var growth = (0, import_kolmafia18.getProperty)("auto_mushroomGardenGrowth");
    var pick = 1;
    if (growth !== "") {
      pick = (0, import_kolmafia18.min)((0, import_kolmafia18.toInt)(growth), 11);
    }
    if ((0, import_kolmafia18.toInt)((0, import_kolmafia18.getProperty)("mushroomGardenCropLevel")) >= pick) {
      (0, import_kolmafia18.runChoice)(2);
    } else {
      (0, import_kolmafia18.runChoice)(1);
    }
  } else {
    (0, import_kolmafia18.abort)("unhandled choice in mushroomGardenChoiceHandler");
  }
}
function auto_monsterToMap(loc, page) {
  var mons = new AshMatcher(
    'heyscriptswhatsupwinkwink" value="(\\d+)',
    page
  );
  var monOpts = /* @__PURE__ */ new Map();
  var i = 0;
  var bestmon = 0;
  while (mons.find()) {
    monOpts.set(i, (0, import_kolmafia18.toMonster)((0, import_kolmafia18.toInt)(mons.group(1))));
    if (zoneRank$1(monOpts.get(i) ?? monOpts.set(i, import_kolmafia18.Monster.none).get(i), loc) <= zoneRank$1(
      monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia18.Monster.none).get(bestmon),
      loc
    )) {
      bestmon = i;
    }
    i += 1;
  }
  return monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia18.Monster.none).get(bestmon);
}
function cartographyChoiceHandler(choice, page) {
  auto_log_info(`cartographyChoiceHandler Running choice ${choice}`, "blue");
  if (choice === 1425) {
    if ((0, import_kolmafia18.itemAmount)($item`Orcish frat-paddle`) > 0) {
      (0, import_kolmafia18.runChoice)(1);
    } else if ((0, import_kolmafia18.itemAmount)($item`Orcish baseball cap`) > 0) {
      (0, import_kolmafia18.runChoice)(2);
    } else if ((0, import_kolmafia18.itemAmount)($item`Orcish cargo shorts`) > 0) {
      (0, import_kolmafia18.runChoice)(3);
    } else if ((0, import_kolmafia18.itemAmount)($item`Orcish frat-paddle`) > 0 && (0, import_kolmafia18.itemAmount)($item`Orcish baseball cap`) > 0 && (0, import_kolmafia18.itemAmount)($item`Orcish cargo shorts`) > 0) {
      (0, import_kolmafia18.runChoice)(4);
    } else {
      (0, import_kolmafia18.runChoice)(1);
    }
  } else if (choice === 1427) {
    (0, import_kolmafia18.runChoice)(1);
  } else if (choice === 1428) {
    (0, import_kolmafia18.runChoice)(2);
  } else if (choice === 1429) {
    (0, import_kolmafia18.runChoice)(1);
  } else if (choice === 1430) {
    (0, import_kolmafia18.runChoice)(1);
  } else if (choice === 1431) {
    if (internalQuestStatus("questL10Garbage") === 9) {
      if ((0, import_kolmafia18.itemAmount)($item`model airship`) > 0) {
        (0, import_kolmafia18.runChoice)(1);
      } else if ((0, import_kolmafia18.haveEquipped)($item`Mohawk wig`)) {
        (0, import_kolmafia18.runChoice)(4);
      } else {
        (0, import_kolmafia18.runChoice)(3);
      }
    } else {
      (0, import_kolmafia18.runChoice)(1);
    }
  } else if (choice === 1432) {
    var fire_protestors = (0, import_kolmafia18.itemAmount)($item`Flamin' Whatshisname`) > 0 ? 10 : 3;
    var sleaze_amount = (0, import_kolmafia18.numericModifier)("sleaze damage") + (0, import_kolmafia18.numericModifier)("sleaze spell damage");
    var sleaze_protestors = (0, import_kolmafia18.squareRoot)(sleaze_amount);
    var lynyrd_protestors = (0, import_kolmafia18.haveEffect)($effect`Musky`) > 0 ? 6 : 3;
    var _iterator2 = _createForOfIteratorHelper(
      $items`lynyrdskin cap, lynyrdskin tunic, lynyrdskin breeches`
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var it = _step2.value;
        if ((0, import_kolmafia18.equippedAmount)(it) > 0) {
          lynyrd_protestors += 5;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var best_protestors = (0, import_kolmafia18.max)(
      fire_protestors,
      (0, import_kolmafia18.max)(sleaze_protestors, lynyrd_protestors)
    );
    if (best_protestors === lynyrd_protestors) {
      (0, import_kolmafia18.runChoice)(2);
    } else if (best_protestors === sleaze_protestors) {
      (0, import_kolmafia18.runChoice)(1);
    } else if (best_protestors === fire_protestors) {
      (0, import_kolmafia18.runChoice)(3);
    }
  } else if (choice === 1433) {
    (0, import_kolmafia18.runChoice)(3);
  } else if (choice === 1434) {
    (0, import_kolmafia18.runChoice)(2);
  } else if (choice === 1435) {
    var enemy = auto_monsterToMap((0, import_kolmafia18.myLocation)(), page);
    if (enemy !== import_kolmafia18.Monster.none) {
      handleTracker$1(
        $skill`Map the Monsters`.toString(),
        enemy.toString(),
        "auto_mapperidot"
      );
      (0, import_kolmafia18.runChoice)(1, `heyscriptswhatsupwinkwink=${(0, import_kolmafia18.toInt)(enemy)}`);
    } else {
      (0, import_kolmafia18.abort)("trying to map a monster but don't know which monster to map!");
    }
  } else if (choice === 1436) {
    if (poolSkillPracticeGains() === 1 || currentPoolSkill() > 15) {
      (0, import_kolmafia18.runChoice)(2);
    } else {
      (0, import_kolmafia18.runChoice)(1);
    }
  } else {
    (0, import_kolmafia18.abort)("unhandled choice in cartographyChoiceHandler");
  }
}

// src/autoscend/iotms/mr2021.ts
var import_kolmafia62 = require("kolmafia");

// src/autoscend/paths/hattrick.ts
var import_kolmafia19 = require("kolmafia");

// src/autoscend/paths/kolhs.ts
var import_kolmafia20 = require("kolmafia");
function in_kolhs() {
  return (0, import_kolmafia20.myPath)() === $path`KOLHS`;
}
function kolhsChoiceHandler(choice) {
  auto_log_debug$1("Running kolhsChoiceHandler");
  {
    var target = 0;
    switch (choice) {
      case 700:
        if ((0, import_kolmafia20.haveEffect)($effect`Jamming with the Jocks`) > 0) {
          (0, import_kolmafia20.runChoice)(1);
        } else if ((0, import_kolmafia20.haveEffect)($effect`Nerd is the Word`) > 0) {
          (0, import_kolmafia20.runChoice)(2);
        } else if ((0, import_kolmafia20.haveEffect)($effect`Greaser Lightnin'`) > 0) {
          (0, import_kolmafia20.runChoice)(3);
        } else {
          auto_log_warning(
            "I do not have the necessary intrinsic to gain xp in [Delirium in the Cafeterium]",
            "red"
          );
          (0, import_kolmafia20.runChoice)(3);
        }
        break;
      case 772:
        target = (0, import_kolmafia20.toInt)((0, import_kolmafia20.getProperty)("_NC772_directive"));
        (0, import_kolmafia20.removeProperty)("_NC772_directive");
        if (target === 0) {
          (0, import_kolmafia20.abort)(
            "We are in [saved by the bell] and do not know what to do because _NC772_directive is not valid or set. Leaving will waste this NC so do something manually"
          );
        }
        if (target in (0, import_kolmafia20.availableChoiceOptions)()) {
          if (target === 3) {
            (0, import_kolmafia20.setProperty)("_yearbookClubVisitedToday", true.toString());
          }
          (0, import_kolmafia20.runChoice)(target);
        } else {
          (0, import_kolmafia20.abort)(
            `We are in [saved by the bell] and do not know what to do. Wanted to press button number ${target} but it mysteriously does not exist. Leaving will waste this NC so do something manually`
          );
        }
        break;
      default:
        break;
    }
  }
}

// src/autoscend/paths/live_ascend_repeat.ts
var import_kolmafia21 = require("kolmafia");
function in_lar() {
  return (0, import_kolmafia21.myPath)() === $path`Live. Ascend. Repeat.`;
}

// src/autoscend/paths/small.ts
var import_kolmafia22 = require("kolmafia");
function in_small() {
  return (0, import_kolmafia22.myPath)() === $path`A Shrunken Adventurer am I`;
}

// src/autoscend/paths/two_crazy_random_summer.ts
var import_kolmafia23 = require("kolmafia");
function in_tcrs() {
  return (0, import_kolmafia23.myPath)() === $path`Two Crazy Random Summer`;
}

// src/autoscend/paths/wildfire.ts
var import_kolmafia61 = require("kolmafia");

// src/autoscend/quests/level_11.ts
var import_kolmafia60 = require("kolmafia");

// src/autoscend/iotms/mr2022.ts
var import_kolmafia57 = require("kolmafia");

// src/autoscend/paths/pocket_familiars.ts
var import_kolmafia24 = require("kolmafia");
function in_pokefam() {
  return (0, import_kolmafia24.myPath)() === $path`Pocket Familiars`;
}

// src/autoscend/quests/level_09.ts
var import_kolmafia56 = require("kolmafia");

// src/autoscend/iotms/mr2024.ts
var import_kolmafia55 = require("kolmafia");

// src/c2t_apron.ts
var import_kolmafia25 = require("kolmafia");

// src/c2t_megg.ts
var import_kolmafia26 = require("kolmafia");
var c2t_megg_oldFam = import_kolmafia26.Familiar.none;
var c2t_megg_oldEq = import_kolmafia26.Item.none;

// src/autoscend/paths/adventurer_meats_world.ts
var import_kolmafia54 = require("kolmafia");

// src/autoscend/iotms/mr2025.ts
var import_kolmafia53 = require("kolmafia");

// src/autoscend/paths/zootomist.ts
var import_kolmafia51 = require("kolmafia");

// src/autoscend/quests/level_05.ts
var import_kolmafia50 = require("kolmafia");

// src/autoscend/paths/avatar_of_shadows_over_loathing.ts
var import_kolmafia27 = require("kolmafia");

// src/autoscend/paths/legacy_of_loathing.ts
var import_kolmafia28 = require("kolmafia");
function in_lol() {
  return (0, import_kolmafia28.myPath)() === $path`Legacy of Loathing`;
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

// src/autoscend/paths/low_key_summer.ts
var import_kolmafia49 = require("kolmafia");

// src/autoscend/quests/level_02.ts
var import_kolmafia29 = require("kolmafia");
function spookyForestChoiceHandler(choice) {
  if (choice === 502) {
    if (internalQuestStatus("questL02Larva") === 0 && (0, import_kolmafia29.itemAmount)($item`mosquito larva`) === 0) {
      (0, import_kolmafia29.runChoice)(2);
    } else if (!(0, import_kolmafia29.hiddenTempleUnlocked)()) {
      if ((0, import_kolmafia29.itemAmount)($item`tree-holed coin`) === 0 && (0, import_kolmafia29.itemAmount)($item`Spooky Temple map`) === 0) {
        (0, import_kolmafia29.runChoice)(2);
      } else if ((0, import_kolmafia29.itemAmount)($item`Spooky Temple map`) === 0 || (0, import_kolmafia29.itemAmount)($item`Spooky-Gro fertilizer`) === 0) {
        (0, import_kolmafia29.runChoice)(3);
      } else {
        (0, import_kolmafia29.runChoice)(1);
      }
    } else {
      auto_log_warning$1(
        "In Arboreal Respite for some reason but we don't need a mosquito larva or to unlock the hidden temple!"
      );
      (0, import_kolmafia29.runChoice)(2);
    }
  } else if (choice === 503) {
    (0, import_kolmafia29.runChoice)(3);
  } else if (choice === 504) {
    if ((0, import_kolmafia29.itemAmount)($item`bar skin`) > 1) {
      (0, import_kolmafia29.runChoice)(2);
    } else if ((0, import_kolmafia29.itemAmount)($item`bar skin`) === 1) {
      (0, import_kolmafia29.runChoice)(1);
    }
    if (!(0, import_kolmafia29.hiddenTempleUnlocked)() && (0, import_kolmafia29.itemAmount)($item`spooky sapling`) === 0 && (0, import_kolmafia29.myMeat)() > 100) {
      (0, import_kolmafia29.runChoice)(3);
    }
    (0, import_kolmafia29.runChoice)(4);
  } else if (choice === 505) {
    if (internalQuestStatus("questL02Larva") === 0 && (0, import_kolmafia29.itemAmount)($item`mosquito larva`) === 0) {
      (0, import_kolmafia29.runChoice)(1);
    } else {
      (0, import_kolmafia29.runChoice)(2);
    }
  } else if (choice === 506) {
    if (!(0, import_kolmafia29.hiddenTempleUnlocked)() && (0, import_kolmafia29.itemAmount)($item`Spooky-Gro fertilizer`) === 0) {
      (0, import_kolmafia29.runChoice)(2);
    } else {
      (0, import_kolmafia29.runChoice)(3);
    }
  } else if (choice === 507) {
    if (!(0, import_kolmafia29.hiddenTempleUnlocked)() && (0, import_kolmafia29.itemAmount)($item`tree-holed coin`) > 0 && (0, import_kolmafia29.itemAmount)($item`Spooky Temple map`) === 0) {
      (0, import_kolmafia29.runChoice)(1);
    } else {
      (0, import_kolmafia29.runChoice)(3);
    }
  } else {
    (0, import_kolmafia29.abort)("unhandled choice in spookyForestChoiceHandler");
  }
}

// src/autoscend/quests/level_03.ts
var import_kolmafia30 = require("kolmafia");

// src/autoscend/quests/level_04.ts
var import_kolmafia31 = require("kolmafia");

// src/autoscend/quests/level_06.ts
var import_kolmafia32 = require("kolmafia");

// src/autoscend/quests/level_07.ts
var import_kolmafia34 = require("kolmafia");

// src/autoscend/paths/zombie_slayer.ts
var import_kolmafia33 = require("kolmafia");
function in_zombieSlayer() {
  return (0, import_kolmafia33.myPath)() === $path`Zombie Slayer`;
}
function zombieSlayer_usable(fam) {
  if (!in_zombieSlayer()) {
    return true;
  }
  return (0, import_kolmafia33.containsText)(fam.attributes, "undead");
}

// src/autoscend/quests/level_07.ts
function cyrptChoiceHandler(choice) {
  if (choice === 153) {
    (0, import_kolmafia34.runChoice)(4);
  } else if (choice === 155) {
    if (in_zombieSlayer() && ((0, import_kolmafia34.itemAmount)($item`talkative skull`) === 0 || !(0, import_kolmafia34.haveFamiliar)($familiar`Hovering Skull`))) {
      (0, import_kolmafia34.runChoice)(1);
    } else {
      (0, import_kolmafia34.runChoice)(5);
    }
  } else if (choice === 157) {
    (0, import_kolmafia34.runChoice)(4);
  } else if (choice === 523) {
    if (in_darkGyffte() && (0, import_kolmafia34.haveSkill)($skill`Flock of Bats Form`) && (0, import_kolmafia34.haveSkill)($skill`Sharp Eyes`) || auto_turbo()) {
      var desiredPills = (0, import_kolmafia34.inHardcore)() ? 6 : auto_turbo() ? 3 : 4;
      var dietingPillsUsed = 0;
      if ((0, import_kolmafia34.getProperty)("auto_chewed") === "") {
        dietingPillsUsed = 0;
      } else {
        var _iterator = _createForOfIteratorHelper(
          (0, import_kolmafia34.splitString)((0, import_kolmafia34.getProperty)("auto_chewed"), ",")
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var str = _step.value;
            if ((0, import_kolmafia34.containsText)((0, import_kolmafia34.toLowerCase)(str), "dieting pill")) {
              dietingPillsUsed += 1;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (!auto_turbo()) {
        desiredPills -= (0, import_kolmafia34.myFullness)() / 2;
      } else {
        desiredPills -= dietingPillsUsed;
      }
      auto_log_info(
        `We want ${desiredPills} dieting pills and have ${(0, import_kolmafia34.itemAmount)($item`dieting pill`)}`,
        "blue"
      );
      if ((0, import_kolmafia34.itemAmount)($item`dieting pill`) < desiredPills) {
        (0, import_kolmafia34.runChoice)(6);
      } else if (5 in (0, import_kolmafia34.availableChoiceOptions)()) {
        (0, import_kolmafia34.runChoice)(5);
      } else {
        (0, import_kolmafia34.runChoice)(4);
      }
    } else if (5 in (0, import_kolmafia34.availableChoiceOptions)()) {
      (0, import_kolmafia34.runChoice)(5);
    } else {
      (0, import_kolmafia34.runChoice)(4);
    }
  } else if (choice === 527) {
    (0, import_kolmafia34.runChoice)(1);
  } else {
    (0, import_kolmafia34.abort)("unhandled choice in cyrptChoiceHandler");
  }
}

// src/autoscend/quests/level_10.ts
var import_kolmafia48 = require("kolmafia");

// src/autoscend/paths/way_of_the_surprising_fist.ts
var import_kolmafia35 = require("kolmafia");
function in_wotsf() {
  return (0, import_kolmafia35.myPath)() === $path`Way of the Surprising Fist`;
}

// src/autoscend/quests/level_13.ts
var import_kolmafia47 = require("kolmafia");

// src/autoscend/paths/bees_hate_you.ts
var import_kolmafia36 = require("kolmafia");
function in_bhy() {
  return (0, import_kolmafia36.myPath)() === $path`Bees Hate You`;
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
  if ((0, import_kolmafia36.containsText)(str, "b")) {
    return false;
  }
  if ((0, import_kolmafia36.containsText)(str, "B")) {
    return false;
  }
  return true;
}
function bhy_is_item_valid(it) {
  if (!in_bhy()) {
    (0, import_kolmafia36.abort)(
      "bhy_is_item_valid(item it) should never be called outside of bees hate you path."
    );
  }
  if ((0, import_kolmafia36.toSlot)(it) !== import_kolmafia36.Slot.none) {
    return (0, import_kolmafia36.isUnrestricted)(it);
  }
  if ($items`Cobb's Knob map, enchanted bean, ball polish, black market map, boring binder clip, beehive, electric boning knife`.includes(
    it
  )) {
    return true;
  }
  return bhy_usable(it.toString()) && (0, import_kolmafia36.isUnrestricted)(it);
}

// src/autoscend/paths/bugbear_invasion.ts
var import_kolmafia37 = require("kolmafia");
function in_bugbear() {
  return (0, import_kolmafia37.myPath)() === $path`Bugbear Invasion`;
}

// src/autoscend/paths/disguises_delimit.ts
var import_kolmafia38 = require("kolmafia");

// src/autoscend/paths/the_source.ts
var import_kolmafia46 = require("kolmafia");

// src/autoscend/quests/optional.ts
var import_kolmafia45 = require("kolmafia");

// src/autoscend/paths/grey_goo.ts
var import_kolmafia39 = require("kolmafia");

// src/autoscend/paths/license_to_adventure.ts
var import_kolmafia40 = require("kolmafia");
function in_lta() {
  return (0, import_kolmafia40.myPath)() === $path`License to Adventure`;
}
var bondDrinksCached = /* @__PURE__ */ new Map();
function bondDrinks() {
  if (bondDrinksCached.size === 0) {
    bondDrinksCached = itemList();
    var _iterator = _createForOfIteratorHelper(
      import_kolmafia40.Item.get(
        [
          "seal-clubbing club",
          "seal tooth",
          "helmet turtle",
          "turtle totem",
          "pasta spoon",
          "ravioli hat",
          "saucepan",
          "spices",
          "disco mask",
          "disco ball",
          "stolen accordion",
          "mariachi pants",
          "moxie weed",
          "strongness elixir",
          "magicalness-in-a-can",
          "spicy noodles",
          "tortoise's blessing",
          "asparagus knife",
          "Kentucky-style derby",
          "sweet ninja sword",
          "studded leather boxer shorts",
          "chewing gum on a string",
          "ten-leaf clover",
          "meat paste",
          "Dolphin King's map",
          "spider web",
          "really sticky spider web",
          "really really sticky spider web",
          "big rock",
          "seal-toothed rock",
          "Bjorn's Hammer",
          "snorkel",
          "Dolphin King's crown",
          "Knob Goblin scimitar",
          "Knob Goblin tongs",
          "viking helmet",
          "Knob Goblin pants",
          "pretty flower",
          "casino pass",
          "ice-cold Sir Schlitz",
          "hermit permit",
          "worthless trinket",
          "worthless gewgaw",
          "worthless knick-knack",
          "wooden figurine",
          "hot buttered roll",
          "heart of rock and roll",
          "bowl of cottage cheese",
          "Rock and Roll Legend",
          "Knob Goblin Uberpants",
          "banjo strings",
          "stone banjo",
          "Disco Banjo",
          "jaba&ntilde;ero pepper",
          "heavy hot sauce",
          "5-Alarm Saucepan",
          "stone turtle",
          "slingshot",
          "Mace of the Tortoise",
          "fortune cookie",
          "oriole-feather headdress",
          "action figure body",
          "action figure head",
          "Mighty Bjorn action figure",
          "golden twig",
          "spaghetti with rock-balls",
          "Pasta Spoon of Peril",
          "Newbiesport&trade; tent",
          "bar skin",
          "wooden stakes",
          "barskin hat",
          "barskin tent",
          "Spooky Temple map",
          "spooky sapling",
          "Spooky-Gro fertilizer",
          "spooky stick",
          "pretty bouquet",
          "bugbear bungguard",
          "fairy gravy boat",
          "ice-cold Willer",
          "rusty metal ring",
          "rusty metal shaft",
          "Orcish meat locker",
          "unlocked meat locker",
          "rusty metal key",
          "meat from yesterday",
          "meat stack",
          "sword hilt",
          "helmet recipe",
          "pants kit",
          "meatsmithing guide",
          "basic meat sword",
          "basic meat pants",
          "basic meat helmet",
          "dope gangsta bling-bling",
          "pimpin' meat hat",
          "dried face",
          "meat face",
          "lifeless meat doll",
          "meat golem",
          "spooky shrunken head",
          "spooky staff",
          "spooky scarecrow",
          "bowl of lucky charms",
          "ketchup",
          "catsup",
          "big stick",
          "crossbow string",
          "basic meat staff",
          "basic meat crossbow",
          "meatloaf helmet",
          "dripping meat sword",
          "dripping meat staff",
          "dripping meat crossbow",
          "Bugfinder Blade",
          "Gnollish plunger",
          "spring",
          "sprocket",
          "cog",
          "sprocket assembly",
          "cog and sprocket assembly",
          "Gnollish flyswatter",
          "empty meat tank",
          "full meat tank",
          "meat engine",
          "Gnollish autoplunger",
          "sticky meat pants",
          "third-hand nunchaku",
          "enchanted eyepatch",
          "frilly skirt",
          "Meat maid body",
          "Certificate of Participation",
          "bitchin' meatcar",
          "sweet rims",
          "tires",
          "dope wheels",
          "ice-cold six-pack",
          "valuable trinket",
          "dingy planks",
          "dingy dinghy",
          "anticheese",
          "cottage",
          "stone of eXtreme power",
          "barbed-wire fence",
          "dinghy plans",
          "eXtreme meat sword",
          "eXtreme meat staff",
          "eXtreme meat crossbow",
          "Scalp of Gorgolok",
          "Elder Turtle Shell",
          "Colander of Em-er'il",
          "Ancient Saucehelm",
          "Disco 'Fro Pick",
          "El Sombrero De Lopez",
          "guild application",
          "Dramatic&trade; range",
          "Gnollish pie tin",
          "wad of dough",
          "pie crust",
          "ghuol egg",
          "ghuol egg quiche",
          "skeleton bone",
          "smart skull",
          "skewer",
          "ghuol ears",
          "ghuol-ear kabob",
          "bone rattle",
          "bugbear beanie",
          "lihc eye",
          "lihc eye pie",
          "gnoll lips",
          "taco shell",
          "Gnollish casserole dish",
          "uncooked chorizo",
          "disembodied brain",
          "brainy skull",
          "detective skull",
          "chorizo taco",
          "ice-cold fotie",
          "baseball",
          "batgut",
          "bat wing",
          "briefcase",
          "fat stacks of cash",
          "enchanted bean",
          "loose teeth",
          "bat guano",
          "guano coffee cup",
          "batskin belt",
          "old batskin belt",
          "birthday candle",
          "Mr. Accessory",
          "eXtreme nose ring",
          "disassembled clover",
          "rat whisker",
          "rat appendix",
          "shiny ring",
          "rat appendix kabob",
          "bat wing kabob",
          "carob chunks",
          "herbs",
          "carob chunk cookies",
          "secret blend of herbs and spices",
          "piercing post",
          "hippy herbal tea",
          "patchouli incense stick",
          "wad of tofu",
          "Feng Shui for Big Dumb Idiots",
          "decorative fountain",
          "windchimes",
          "filthy corduroys",
          "filthy knitted dread sack",
          "Uncle Jick's Brownie Mix",
          "carob brownies",
          "herb brownies",
          "hemp string",
          "necklace chain",
          "gnoll teeth",
          "gnoll-tooth necklace",
          "phat turquoise bead",
          "phat turquoise bracelet",
          "eyepatch",
          "tofu casserole",
          "can of Red Minotaur",
          "Kentucky-fried meat sword",
          "Kentucky-fried meat staff",
          "Kentucky-fried meat crossbow",
          "dead guy's watch",
          "Doc Galaktik's Pungent Unguent",
          "Doc Galaktik's Ailment Ointment",
          "Doc Galaktik's Restorative Balm",
          "Doc Galaktik's Homeopathic Elixir",
          "Bigger Bugfinder Blade",
          "Queue Du Coq cocktailcrafting kit",
          "bottle of gin",
          "bottle of vodka",
          "Orcish baseball cap",
          "Orcish cargo shorts",
          "Orcish frat-paddle",
          "orange",
          "grapefruit",
          "grapes",
          "olive",
          "tomato",
          "fermenting powder",
          "salty dog",
          "bloody mary",
          "screwdriver",
          "martini",
          "bloody beer",
          "shot of orange schnapps",
          "shot of grapefruit schnapps",
          "fine wine",
          "shot of tomato schnapps",
          "extra-spicy bloody mary",
          "dense meat stack",
          "white snake skin",
          "White Citadel fries",
          "White Citadel burger",
          "piece of wedding cake",
          "white chocolate chips",
          "white chocolate chip cookies",
          "white satin pants",
          "white lightning",
          "mullet wig",
          "meat cowboy hat",
          "white sword",
          "white picket fence",
          "enchanted barbell",
          "concentrated magicalness pill",
          "giant moxie weed",
          "Familiar-Gro&trade; Terrarium",
          "mosquito larva",
          "leprechaun hatchling",
          "extra-strength strongness elixir",
          "jug-o-magicalness",
          "suntan lotion of moxiousness",
          "Pick-O-Matic lockpicks",
          "gasmask",
          "Boris's key",
          "Jarlsberg's key",
          "Sneaky Pete's key",
          "walrus-tusk earring",
          "ring of half-assed regeneration",
          "Boris's ring",
          "potato sprout",
          "Jarlsberg's earring",
          "Sneaky Pete's breath spray",
          "can of maces",
          "rubber axe",
          "chef's hat",
          "pail",
          "demonskin trousers",
          "dungeoneer's dungarees",
          "tamarind-flavored chewing gum",
          "lime-and-chile-flavored chewing gum",
          "pickle-flavored chewing gum",
          "jaba&ntilde;ero-flavored chewing gum",
          "flat dough",
          "Knob sausage",
          "Knob mushroom",
          "dry noodles",
          "Knob Goblin harem pants",
          "Knob Goblin harem veil",
          "Knob Goblin perfume",
          "Knob Goblin elite helm",
          "Knob Goblin elite pants",
          "Knob Goblin elite polearm",
          "hill of beans",
          "Knob Goblin visor",
          "Crown of the Goblin King",
          "bean burrito",
          "spicy bean burrito",
          "insanely spicy bean burrito",
          "enchanted bean burrito",
          "spicy enchanted bean burrito",
          "insanely spicy enchanted bean burrito",
          "bat haggis",
          "menudo",
          "goat cheese",
          "plain pizza",
          "sausage pizza",
          "goat cheese pizza",
          "mushroom pizza",
          "goat",
          "bottle of whiskey",
          "goat beard",
          "glass of goat's milk",
          "white Canadian",
          "lemon",
          "lime",
          "sabre teeth",
          "sabre-toothed lime cub",
          "consolation ribbon",
          "big ol' trophy",
          "tenderizing hammer",
          "Cobb's Knob lab key",
          "Knob Goblin steroids",
          "Knob Goblin love potion",
          "Knob Goblin stink bomb",
          "Knob Goblin sharpening spray",
          "Knob Goblin seltzer",
          "Knob Goblin superseltzer",
          "scrumptious reagent",
          "Dyspepsi-Cola",
          "cold ninja mask",
          "icy katana hilt",
          "hot katana blade",
          "icy-hot katana",
          "ninja hot pants",
          "frigid ninja stars",
          "frozen nunchaku",
          "eXtreme scarf",
          "snowboarder pants",
          "Mountain Stream soda",
          "gr8ps",
          "t8r tots",
          "miner's helmet",
          "miner's pants",
          "7-Foot Dwarven mattock",
          "linoleum ore",
          "asbestos ore",
          "chrome ore",
          "linoleum sword hilt",
          "linoleum stick",
          "linoleum crossbow string",
          "asbestos sword hilt",
          "asbestos stick",
          "asbestos crossbow string",
          "chrome sword hilt",
          "chrome stick",
          "chrome crossbow string",
          "linoleum meat stack",
          "asbestos meat stack",
          "chrome meat stack",
          "linoleum sword",
          "linoleum staff",
          "linoleum crossbow",
          "asbestos sword",
          "asbestos staff",
          "asbestos crossbow",
          "chrome sword",
          "chrome staff",
          "chrome crossbow",
          "fuzzy dice",
          "yeti fur",
          "meaty helmet turtle",
          "asbestos helmet turtle",
          "linoleum helmet turtle",
          "chrome helmet turtle",
          "penguin skin",
          "yak skin",
          "hippopotamus skin",
          "penguin shorts",
          "yakskin pants",
          "hippopotamus pants",
          "eXtreme mittens",
          "handful of drink tickets",
          "Knob Kitchen grab-bag",
          "swashbuckling pants",
          "stuffed shoulder parrot",
          "acoustic guitarrr",
          "sunken chest",
          "pirate pelvis",
          "pirate skull",
          "spooky pirate skeleton",
          "vial of patchouli oil",
          "sk8board",
          "Jolly Roger charrrm",
          "barrrnacle",
          "Jolly Roger charrrm bracelet",
          "crowbarrr",
          "leotarrrd",
          "safarrri hat",
          "henna tattoo",
          "Ferrigno's Elixir of Power",
          "serum of sarcasm",
          "tomato juice of powerful power",
          "philter of phorce",
          "potion of potency",
          "cordial of concentration",
          "ointment of the occult",
          "oil of expertise",
          "potion of temporary gr8ness",
          "box",
          "nothing-in-the-box",
          "beanbag chair",
          "acid-squirting flower",
          "clown shoes",
          "bloody clown pants",
          "long skinny balloon",
          "balloon helmet",
          "balloon sword",
          "balloon monkey",
          "chef skull",
          "chef-in-the-box",
          "bartender skull",
          "bartender-in-the-box",
          "chef-skull-in-the-box",
          "bartender-skull-in-the-box",
          "beer lens",
          "beer goggles",
          "box-in-the-box",
          "nothing-in-the-box-in-the-box",
          "box-in-the-box-in-the-box",
          "foolscap fool's cap",
          "big red clown nose",
          "pretentious paintbrush",
          "pretentious palette",
          "disease",
          "sober pill",
          "rusty screwdriver",
          "jumbo olive",
          "dry martini",
          "ye olde golde frontes",
          "continuum transfunctioner",
          "white pixel",
          "black pixel",
          "red pixel",
          "green pixel",
          "blue pixel",
          "red pixel potion",
          "blue pixel potion",
          "green pixel potion",
          "purple pixel pie",
          "ruby W",
          "wussiness potion",
          "Imp Ale",
          "hot wing",
          "diamond-studded cane",
          "flaming crutch",
          "cast",
          "leather mask",
          "hellion cube",
          "infernal insoles",
          "evil golden arch",
          "dodecagram",
          "box of birthday candles",
          "eldritch butterknife",
          "Mr. Container",
          "Newbiesport&trade; backpack",
          "hemp backpack",
          "snakehead charrrm",
          "Talisman o' Namsilat",
          "arrrgyle socks",
          "guitar pick",
          "drab sonata",
          "mesh cap",
          "enormous belt buckle",
          "leather chaps",
          "ketchup hound",
          "batblade",
          "catgut",
          "cat appendix",
          "gnatwing",
          "papaya",
          "denim axe",
          "Elf Farm Raffle ticket",
          "Elfin shortbread",
          "pagoda plans",
          "skewered cat appendix",
          "evil golden arches",
          "gnatwing earring",
          "Hell broth",
          "heavy metal thunderrr guitarrr",
          "heavy metal sonata",
          "Hey Deze nuts",
          "Boris's key lime",
          "Jarlsberg's key lime",
          "Sneaky Pete's key lime",
          "Boris's key lime pie",
          "Jarlsberg's key lime pie",
          "Sneaky Pete's key lime pie",
          "Hey Deze map",
          "bejeweled accordion strap",
          "magical mystery juice",
          "moxie magnet",
          "strange leaflet",
          "kickback cookbook",
          "one-winged stab bat",
          "rewinged stab bat",
          "papaya sling",
          "grue egg",
          "Frobozz Real-Estate Company Instant House (TM)",
          "volleyball",
          "blood-faced volleyball",
          "fertilized ghuol egg",
          "spray paint",
          "special sauce glove",
          "ladle of mystery",
          "Gnollish toolbox",
          "abridged dictionary",
          "bridge",
          "dictionary",
          "pr0n legs",
          "f3d0r4",
          "lowercase N",
          "Tasty Fun Good rice candy",
          "draggin' ball hat",
          "1337 7r0uZ0RZ",
          "Trollhouse cookies",
          "flaming talons",
          "Spam Witch sammich",
          "meat vortex",
          "334 scroll",
          "668 scroll",
          "30669 scroll",
          "33398 scroll",
          "64067 scroll",
          "64735 scroll",
          "31337 scroll",
          "pr0n cocktail",
          "drywall axe",
          "Pine-Fresh air freshener",
          "whiskey and cola",
          "papaya taco",
          "razor-sharp can lid",
          "stalk of asparagus",
          "pregnant mushroom",
          "ratgut",
          "sonar-in-a-biscuit",
          "Mad Train wine",
          "dirty hobo gloves",
          "bum cheek",
          "hermit script",
          "Double Bacon Beelzeburger",
          "Lord of the Flies-sized fries",
          "Brimstone Chicken Sandwich",
          "Jumbo Dr. Lucifer",
          "Children's Meal of the Damned",
          "delicious noodles",
          "delicious spicy noodles",
          "painful penne pasta",
          "ravioli della hippy",
          "pr0n m4nic0tti",
          "Hell ramen",
          "boring spaghetti",
          "sauce of the ages",
          "fancy schmancy cheese sauce",
          "Himalayan Hidalgo sauce",
          "fettucini Inconnu",
          "spaghetti with Skullheads",
          "gnocchetti di Nietzsche",
          "ridiculously huge sword",
          "super-spiky hair gel",
          "soft green echo eyedrop antidote",
          "cocoa eggshell fragment",
          "large cocoa eggshell fragment",
          "cocoa egg",
          "tiny house",
          "phonics down",
          "amulet of extreme plot significance",
          "scroll of drastic healing",
          "titanium assault umbrella",
          "Mohawk wig",
          "the Slug Lord's map",
          "pants of the Slug Lord",
          "Dr. Hobo's scalpel",
          "Dr. Hobo's map",
          "Degrassi Knoll shopping list",
          "Item #13",
          "Penultimate Fantasy chest",
          "Tissue Paper Immateria",
          "Tin Foil Immateria",
          "Gauze Immateria",
          "Plastic Wrap Immateria",
          "S.O.C.K.",
          "procrastination potion",
          "heavy D",
          "original G",
          "plot hole",
          "probability potion",
          "chaos butterfly",
          "furry fur",
          "Angry Farmer candy",
          "Mick's IcyVapoHotness Rub",
          "giant needle",
          "thin black candle",
          "Warm Subject gift certificate",
          "awful poetry journal",
          "WA",
          "NG",
          "wang",
          "Wand of Nagamar",
          "ND",
          "metallic A",
          "glowing red eye",
          "photoprotoneutron torpedo",
          "furry pants",
          "disturbing fanfic",
          "wolf mask",
          "cool whip",
          "little paper umbrella",
          "meat globe",
          "cheap toaster",
          "asshat",
          "abominable snowcone",
          "Ent cider",
          "toast",
          "skeleton key",
          "skeleton key ring",
          "Crimbo pressie",
          "wrapping paper",
          "fruitcake",
          "present",
          "Crimbo sword",
          "Crimbo hat",
          "Crimbo pants",
          "exclusive ultra-rare item",
          "quantum egg",
          "intragalactic rowboat",
          "star",
          "line",
          "star chart",
          "star sword",
          "star crossbow",
          "star staff",
          "star pants",
          "star hat",
          "star buckler",
          "star throwing star",
          "star starfish",
          "Richard's star key",
          "steaming evil",
          "giant castle map",
          "spiked femur",
          "ghuol guolash",
          "lihc face",
          "rusty grave robbing shovel",
          "cranberries",
          "vodka and cranberry",
          "whiskey sour",
          "skull of the Bonerdagon",
          "dragonbone belt buckle",
          "badass belt",
          "chest of the Bonerdagon",
          "roll in the hay",
          "slap and tickle",
          "slip 'n' slide",
          "a little sump'm sump'm",
          "horizontal tango",
          "pink pony",
          "Mr. Shirt",
          "enchanted brass knuckles",
          "blood of the Wereseal",
          "pixel hat",
          "pixel pants",
          "pixel sword",
          "digital key",
          "Ascension Souvenir T-Shirt",
          "harem girl t-shirt",
          "Knob Goblin elite shirt",
          "frilly shirt",
          "soggy wofl t-shirt",
          "loathing eagle baby-doll shirt",
          "pirate shirt",
          "filthy hippy poncho",
          "floral print shirt",
          "coconut bikini top",
          "goth kid t-shirt",
          "hamethyst",
          "baconstone",
          "porquoise",
          "pork elf goodies sack",
          "ring setting",
          "jewelry-making pliers",
          "hamethyst earring",
          "hamethyst necklace",
          "hamethyst bracelet",
          "hamethyst ring",
          "baconstone earring",
          "baconstone pendant",
          "baconstone bracelet",
          "baconstone ring",
          "porquoise eyebrow ring",
          "porquoise necklace",
          "porquoise bracelet",
          "porquoise ring",
          "Knoll mushroom",
          "spooky mushroom",
          "one million meat pancakes",
          "huge mirror shard",
          "hedge maze puzzle",
          "hedge maze key",
          "fishbowl",
          "fishtank",
          "fish hose",
          "hosed tank",
          "hosed fishbowl",
          "makeshift SCUBA gear",
          "easter egg balloon",
          "stone tablet (Sinister Strumming)",
          "stone tablet (Squeezings of Woe)",
          "stone tablet (Really Evil Rhythm)",
          "tambourine bells",
          "tambourine",
          "broken skull",
          "Knoll shroomkabob",
          "stuffed spooky mushroom",
          "hair spray",
          "serrated proboscis extension",
          "stat script",
          "Knob Goblin firecracker",
          "gourd potion",
          "warm mushroom",
          "spicy mushroom quesadilla",
          "cool mushroom",
          "cool mushroom casserole",
          "pointy mushroom",
          "cream of pointy mushroom soup",
          "flaming mushroom",
          "frozen mushroom",
          "stinky mushroom",
          "ghost cucumber",
          "dill",
          "vinegar",
          "brine",
          "especially salty dog",
          "ghostly pickling solution",
          "spectral pickle",
          "briny vinegar",
          "ghost pickle on a stick",
          "cologne of contempt",
          "spork",
          "voodoo doll",
          "basic meat fez",
          "tassel",
          "foon",
          "basic meat spork",
          "basic meat foon",
          "Yeti Protest Sign",
          "kneecapping stick",
          "iron pasta spoon",
          "support cummerbund",
          "Mob Penguin cellular phone",
          "scroll of pasta summoning",
          "mafia aria",
          "Mr. Exploiter",
          "'Villa' document",
          "Acqua Del Piatto Merlot",
          "raffle ticket",
          "strawberry",
          "bottle of rum",
          "strawberry daiquiri",
          "rum and cola",
          "grog",
          "Mafia bow tie",
          "Golden Mr. Accessory",
          "oil of stability",
          "oil of slipperiness",
          "Acque Luride Grezze Cabernet",
          "cement shoes",
          "rockin' wagon",
          "ocean motion",
          "fuzzbump",
          "poutine",
          "Knob stir-fry",
          "Knoll stir-fry",
          "spooky stir-fry",
          "asparagus stir-fry",
          "olive stir-fry",
          "Knob sausage stir-fry",
          "bat wing stir-fry",
          "rat appendix stir-fry",
          "tofu stir-fry",
          "pr0n stir-fry",
          "Knob stuffed shells",
          "b&auml;tzle",
          "ratini",
          "Knob stroganoff",
          "menudo ravioli",
          "plus sign",
          "milky potion",
          "swirly potion",
          "bubbly potion",
          "smoky potion",
          "cloudy potion",
          "effervescent potion",
          "fizzy potion",
          "dark potion",
          "murky potion",
          "baby killer bee",
          "anti-anti-antidote",
          "royal jelly",
          "small box",
          "large box",
          "vorpal blade",
          "cornuthaum",
          "ring of aggravate monster",
          "mind flayer corpse",
          "Uovo Marcio Shiraz",
          "Mafia stogie",
          "Maiali Sifilitici Pinot Noir",
          "Mafia violin case",
          "tomato daiquiri",
          "beertini",
          "salty slug",
          "papaya slung",
          "MAHI fez",
          "heteroerotic frat-paddle",
          "hypodermic needle",
          "Meat detector",
          "many-eyed glasses",
          "prosthetic forehead",
          "tiny shaker of salt",
          "blundarrrbus",
          "sucky decal",
          "tiny balloon knife",
          "shock collar",
          "moonglasses",
          "palm-frond toupee",
          "tiny knife and fork",
          "eye-pod",
          "chocolate spurs",
          "magnifying glass",
          "skewer-mounted razor blade",
          "brass stinger",
          "lead necklace",
          "shaving cream",
          "pine tar",
          "forest tears",
          "fetus-smashing club",
          "meatcar model",
          "Time Juice",
          "rolling pin",
          "unrolling pin",
          "crazy bastard sword",
          "incredibly dense meat gem",
          "Talisman of Baio",
          "hypnodisk",
          "bottle of goofballs",
          "disbelief suspenders",
          "supportive bra",
          "Blatantly Canadian",
          "maple syrup",
          "los chinos",
          "wooden axe",
          "leaflet",
          "leaf",
          "maple leaf",
          "balaclava",
          "balaclava baklava",
          "Warehouse 23 bling",
          "bugbear-smiting sword",
          "lumbering jack",
          "Dark Jill-O-Lantern",
          "Ms. Accessory",
          "Mr. Accessory Jr.",
          "coffee sprite",
          "Cheshire Bitten",
          "custom avatar form",
          "smile-sharpening stone",
          "miniature espresso maker",
          "100-Watt bulb",
          "Spasmi Dolorosi Del Rene Champagne",
          "old school Mafia knickerbockers",
          "Yummy Tummy bean",
          "Rock Pops",
          "Mr. Mediocrebar",
          "Cold Hots candy",
          "Wint-O-Fresh mint",
          "dwarf bread",
          "Senior Mints",
          "pixellated candy heart",
          "candied kobold",
          "hand turkey outline",
          "candied yam pinky ring",
          "intergalactic pom poms",
          "Mob Penguin protection contract",
          "Radio Free Baseball Cap",
          "Radio Free Pants",
          "Radio Free Foil",
          "radio button candy",
          "severed rocking horse head",
          "broken cellular phone",
          "crimbo elfling",
          "dental pliers",
          "Hawking's Elixir of Brilliance",
          "Ferita Del Petto Zinfandel",
          "fuzzy bracelets",
          "arse-shooting crossbow",
          "spiced rum",
          "eggnog",
          "candy cane",
          "gingerbread bugbear",
          "imitation nice watch",
          "Hanukkimbo dreidl",
          "menorette",
          "tiny plastic sword",
          "small Crimbo Pressie",
          "bow",
          "Crimbo stocking",
          "bowler",
          "bow staff",
          "bowlegged pants",
          "skewered jumbo olive",
          "skewered lime",
          "skewered cherry",
          "dirty martini",
          "grogtini",
          "cherry bomb",
          "extra special Crimbo stocking",
          "spooky hockey mask",
          "penguin-smacking club",
          "orphan baby yeti",
          "fez of etymology",
          "carob chunk noodles",
          "chorizo brownies",
          "white chocolate and tomato pizza",
          "flange",
          "clockwork key",
          "silk garter snake",
          "velvet choker",
          "tiny plastic seal clubber",
          "tiny plastic turtle tamer",
          "tiny plastic pastamancer",
          "tiny plastic sauceror",
          "tiny plastic disco bandit",
          "tiny plastic accordion thief",
          "tiny plastic mosquito",
          "tiny plastic leprechaun",
          "tiny plastic levitating potato",
          "tiny plastic angry goat",
          "tiny plastic sabre-toothed lime",
          "tiny plastic fuzzy dice",
          "tiny plastic spooky pirate skeleton",
          "tiny plastic barrrnacle",
          "tiny plastic howling balloon monkey",
          "tiny plastic stab bat",
          "tiny plastic grue",
          "tiny plastic blood-faced volleyball",
          "tiny plastic ghuol whelp",
          "tiny plastic baby gravy fairy",
          "tiny plastic cocoabo",
          "tiny plastic star starfish",
          "tiny plastic ghost pickle on a stick",
          "tiny plastic killer bee",
          "tiny plastic Cheshire bat",
          "tiny plastic coffee pixie",
          "tiny plastic bitchin' meatcar",
          "tiny plastic hermit",
          "tiny plastic Boris",
          "tiny plastic Jarlsberg",
          "tiny plastic Sneaky Pete",
          "tiny plastic Susie",
          "Lucky Surprise Egg",
          "maiden wig",
          "maid head",
          "Meat maid",
          "Xlyinia's notebook",
          "soda water",
          "bottle of tequila",
          "boxed wine",
          "cherry",
          "coconut shell",
          "magical ice cubes",
          "vodka martini",
          "whiskey and soda",
          "monkey wrench",
          "tequila sunrise",
          "margarita",
          "strawberry wine",
          "wine spritzer",
          "perpendicular hula",
          "ducha de oro",
          "calle de miel",
          "dry vodka martini",
          "old-fashioned",
          "tequila with training wheels",
          "sangria",
          "vesper",
          "bodyslam",
          "sangria del diablo",
          "Valentine",
          "whip kit",
          "buckler buckle",
          "hippo whip",
          "penguin whip",
          "yak whip",
          "gnauga hide whip",
          "gnauga hide",
          "hippo skin buckler",
          "penguin skin buckler",
          "yakskin buckler",
          "gnauga hide buckler",
          "Connery's Elixir of Audacity",
          "lucky Tam O'Shanter",
          "green beer",
          "string of red beads",
          "string of blue beads",
          "string of green beads",
          "cheap plastic bottle opener",
          "orange traffic cone",
          "N. O. Beer",
          "red striped oyster egg",
          "red polka-dot oyster egg",
          "red paisley oyster egg",
          "red plastic oyster egg",
          "blue striped oyster egg",
          "blue polka-dot oyster egg",
          "blue paisley oyster egg",
          "blue plastic oyster egg",
          "puce striped oyster egg",
          "puce polka-dot oyster egg",
          "puce paisley oyster egg",
          "puce plastic oyster egg",
          "mauve striped oyster egg",
          "mauve polka-dot oyster egg",
          "mauve paisley oyster egg",
          "mauve plastic oyster egg",
          "lavender striped oyster egg",
          "lavender polka-dot oyster egg",
          "lavender paisley oyster egg",
          "lavender plastic oyster egg",
          "black striped oyster egg",
          "black polka-dot oyster egg",
          "black paisley oyster egg",
          "black plastic oyster egg",
          "off-white striped oyster egg",
          "off-white polka-dot oyster egg",
          "off-white paisley oyster egg",
          "off-white plastic oyster egg",
          "yellow striped oyster egg",
          "yellow polka-dot oyster egg",
          "yellow paisley oyster egg",
          "yellow plastic oyster egg",
          "oyster basket",
          "emo roe",
          "gazing shoes",
          "personal raindrop",
          "rainbow tie",
          "clockwork widget",
          "clockwork thingamajig",
          "clockwork doohickey",
          "clockwork clockwise dome",
          "clockwork spine",
          "clockwork rings",
          "clockwork claws",
          "clockwork sheet",
          "clockwork counterclockwise dome",
          "clockwork sphere",
          "deactivated MicroMechaMech",
          "clockwork endoskeleton",
          "clockwork hat",
          "clockwork trench coat",
          "clockwork pants",
          "gnauga hide chaps",
          "false eyelashes",
          "targeting chip",
          "unwound clockwork grapefruit",
          "tiny Mountie hat",
          "clockwork bartender head",
          "clockwork chef head",
          "clockwork maid head",
          "clockwork detective skull",
          "clockwork bartender-head-in-the-box",
          "clockwork chef-head-in-the-box",
          "clockwork bartender-in-the-box",
          "clockwork chef-in-the-box",
          "clockwork maid",
          "tisket",
          "tasket",
          "annoying pitchfork",
          "Stupid University Diploma",
          "pregnant flaming mushroom",
          "pregnant frozen mushroom",
          "pregnant stinky mushroom",
          "inexplicably glowing rock",
          "spooky fairy gravy",
          "halfberd",
          "small leather glove",
          "spooky glove",
          "enchanted toothpick",
          "tiny ninja sword",
          "teeny-tiny ninja stars",
          "sequined fez",
          "blank white card",
          "beet",
          "Totally Gay Claymore",
          "star shirt",
          "spooky cosmetics bag",
          "spooky eyeliner",
          "spooky lipstick",
          "spooky bicycle chain",
          "mushroom fermenting solution",
          "flaming mushroom wine",
          "icy mushroom wine",
          "stinky mushroom wine",
          "pointy mushroom wine",
          "flat mushroom wine",
          "cool mushroom wine",
          "knob mushroom wine",
          "knoll mushroom wine",
          "spooky mushroom wine",
          "shot of flower schnapps",
          "flower petal pie",
          "bottle of single-barrel whiskey",
          "giant discarded plastic fork",
          "miniature gravy-covered maypole",
          "Retenez L'Herbe Pat&eacute;",
          "Breathetastic&trade; Premium Canned Air",
          "letter from King Ralph XI",
          "wholeberd",
          "Meleegra&trade; pills",
          "mariachi G-string",
          "irate sombrero",
          "pile of candy",
          "handsomeness potion",
          "marzipan skull",
          "poultrygeist",
          "hovering sombrero",
          "tiny maracas",
          "plain brown wrapper",
          "less-than-three-shaped box",
          "exactly-three-shaped box",
          "chocolate box",
          "miniature coffin",
          "solid asbestos box",
          "solid linoleum box",
          "solid chrome box",
          "cryptic puzzle box",
          "refrigerated biohazard container",
          "magnetic field",
          "potted cactus",
          "daisy",
          "potted fern",
          "tulip",
          "Venus flytrap",
          "all-purpose flower",
          "exotic orchid",
          "long-stemmed rose",
          "gilded lily",
          "deadly nightshade",
          "black lotus",
          "stuffed can of asparagus",
          "stuffed dodecapede",
          "stuffed ghuol whelp",
          "stuffed zmobie",
          "Raggedy Hippy doll",
          "stuffed stab bat",
          "apathetic lizardman doll",
          "stuffed yeti",
          "stuffed Mob Penguin",
          "stuffed sabre-toothed lime",
          "giant stuffed bugbear",
          "mugcake",
          "urinal cake",
          "Happy Birthday, Claude! cake",
          "personalized birthday cake",
          "three-tiered wedding cake",
          "babycakes",
          "blue velvet cake",
          "congratulatory cake",
          "angel-food cake",
          "devil's-food cake",
          "birthday party jellybean cheesecake",
          "white balloon",
          "green balloon",
          "heart-shaped balloon",
          "anniversary balloon",
          "Mylar balloon",
          "Kevlar balloon",
          "thought balloon",
          "rat head balloon",
          "mini-zeppelin",
          "Mr. Balloon",
          "red balloon",
          "Mr. Eh?",
          "pimonkey item",
          "stainless steel shillelagh",
          "stainless steel skullcap",
          "stainless steel solitaire",
          "stainless steel scarf",
          "stainless steel slacks",
          "stainless steel suspenders",
          "plexiglass pikestaff",
          "plexiglass pith helmet",
          "plexiglass pocketwatch",
          "plexiglass pinky ring",
          "plexiglass pants",
          "plexiglass pendant",
          "hockey stick of furious angry rage",
          "tapped black lotus",
          "flaming glowsticks",
          "iced-out bling",
          "limburger biker boots",
          "miniature carton of clove cigarettes",
          "deflated inflatable dodecapede",
          "toy six-seater hovercraft",
          "Glass Balls of the Goblin King",
          "Codpiece of the Goblin King",
          "rib of the Bonerdagon",
          "vertebra of the Bonerdagon",
          "Bonerdagon necklace",
          "Boss Bat britches",
          "Boss Bat bling",
          "Knob shroomkabob",
          "spooky shroomkabob",
          "pile of jumping beans",
          "jumping bean burrito",
          "spicy jumping bean burrito",
          "insanely spicy jumping bean burrito",
          "rat scrapple",
          "pail of pretentious paint",
          "yellow traffic cone",
          "wax lips",
          "Hatorade",
          "off-hand balloon",
          "pygmy bugbear shaman",
          "tiny nose-bone fetish",
          "box of sunshine",
          "gloomy black mushroom",
          "dead mimic",
          "pine wand",
          "ebony wand",
          "hexagonal wand",
          "aluminum wand",
          "marble wand",
          "magic lamp",
          "Medicinal Herb's medicinal herbs",
          "basic meat skirt",
          "Otorian Battle Scar",
          "basic meat kilt",
          "sticky meat skirt",
          "sticky meat kilt",
          "penguinskin mini-skirt",
          "penguinskin mini-kilt",
          "yakskin skirt",
          "yakskin kilt",
          "hippopotamus skirt",
          "hippopotamus kilt",
          "furry skirt",
          "furry kilt",
          "gnauga hide skirt",
          "gnauga hide kilt",
          "cheap wind-up clock",
          "Jekyllin hide belt",
          "skirt / kilt kit",
          "ring of adornment",
          "ring of increase damage",
          "ring of gain strength",
          "ring of cold resistance",
          "ring of fire resistance",
          "ring of conflict",
          "pirate hook",
          "monster bait",
          "deodorant",
          "reodorant",
          "Mjolnir Jr.",
          "doppelshifter egg",
          "tiny makeup kit",
          "red traffic cone",
          "calm attention-deficit demon",
          "unwound cymbal-playing monkey",
          "attention spanner",
          "funky brass fez",
          "comfy blanket",
          "Baron von Ratsworth's monocle",
          "Baron von Ratsworth's money clip",
          "Baron von Ratsworth's tophat",
          "rose-colored glasses",
          "facsimile dictionary",
          "blood flower",
          "lovecat tail",
          "plastic passion fruit",
          "questionable taco",
          "Doc's Miracle Cure",
          "petrified time",
          "time helmet",
          "time trousers",
          "time sword",
          "Dyspepsi-Cola helmet",
          "Cloaca-Cola shield",
          "Cloaca-Cola fatigues",
          "Dyspepsi-Cola shield",
          "Dyspepsi-Cola fatigues",
          "Cloaca-Cola helmet",
          "Cloaca-Cola knapsack",
          "Dyspepsi-Cola knapsack",
          "Cloaca-Cola",
          "Dyspepsi grenade",
          "Cloaca grenade",
          "Dyspepsi-Cola d-rations",
          "Cloaca-Cola c-rations",
          "Cloaca-Cola-issue combat knife",
          "Dyspepsi-Cola-issue canteen",
          "picture of a dead guy's girlfriend",
          "zombie pineal gland",
          "Gummi-Gnauga",
          "Now and Earlier",
          "Sugar Cog",
          "loaded serum blowgun",
          "empty blowgun",
          "miniscule temporal rip",
          "1.21 jigawatts",
          "giant pinky ring",
          "redrum",
          "ninja pirate zombie robot",
          "pile of shiny pebbles",
          "bowl of oriole's nest soup",
          "bunny liver",
          "Mt. Noob Pale Ale",
          "pirate zombie head",
          "ninja pirate zombie robot head",
          "pirate zombie robot head",
          "disembodied smile",
          "golden sausage",
          "clockwork pirate skull",
          "rhesus monkey",
          "tofurkey leg",
          "tofurkey gravy",
          "herbal stuffing",
          "can-shaped gelatinous cranberry sauce",
          "candied yams",
          "rhinestone cowboy shirt",
          "gingham blouse",
          "souvenir ski t-shirt",
          "sweet nutcracker",
          "metal mandible",
          "tiny plastic Crimbo wreath",
          "tiny plastic Uncle Crimbo",
          "tiny plastic Crimbo elf",
          "tiny plastic sweet nutcracker",
          "tiny plastic Crimbo reindeer",
          "aspirin",
          "fancy chocolate",
          "length of string",
          "googly eye",
          "stuffing",
          "felt",
          "wooden block",
          "toy wheel",
          "yo-yo",
          "top",
          "ball",
          "kite",
          "pet rock",
          "stuffed doppelshifter",
          "teddy bear",
          "duck-on-a-string",
          "toy soldier",
          "doll house",
          "toy train",
          "marionette",
          "sock monkey",
          "rag doll",
          "can of fake snow",
          "colored-light &quot;necklace&quot;",
          "tree skirt",
          "wreath-shaped Crimbo cookie",
          "bell-shaped Crimbo cookie",
          "tree-shaped Crimbo cookie",
          "Unionize The Elves sign",
          "sleeping snowy owl",
          "Tome of Snowcone Summoning",
          "purple snowcone",
          "green snowcone",
          "orange snowcone",
          "red snowcone",
          "blue snowcone",
          "black snowcone",
          "Pretty Predator Clawicure Kit",
          "teddy bear sewing kit",
          "green traffic cone",
          "Scandalously Skimpy Bikini",
          "Sombrero De Vida",
          "iceberglet",
          "ice sickle",
          "ice baby",
          "ice pick",
          "ice skates",
          "grue egg omelette",
          "roll of drink tickets",
          "pregnant gloomy black mushroom",
          "pregnant oily golden mushroom",
          "oily golden mushroom",
          "fruit bowl",
          "fruit basket",
          "hot pink lipstick",
          "hot stuffing",
          "useless powder",
          "twinkly powder",
          "hot powder",
          "cold powder",
          "spooky powder",
          "stench powder",
          "sleaze powder",
          "twinkly nuggets",
          "hot nuggets",
          "cold nuggets",
          "spooky nuggets",
          "stench nuggets",
          "sleaze nuggets",
          "twinkly wad",
          "hot wad",
          "cold wad",
          "spooky wad",
          "stench wad",
          "sleaze wad",
          "double daisy",
          "miniature stuffed Goth Giant",
          "Valentine's Day cake",
          "arrow'd heart balloon",
          "black velvet box",
          "squashed frog",
          "eye of newt",
          "salamander spleen",
          "sleazy fairy gravy",
          "suede shortsword",
          "bamboo bokuto",
          "25-meat staff",
          "two-handed depthsword",
          "bill bec-de-bardiche glaive-guisarme",
          "lead yo-yo",
          "slightly peevedbow",
          "sack of doorknobs",
          "lucky ball-and-chain",
          "automatic catapult",
          "pentacorn hat",
          "goofily-plumed helmet",
          "yellow plastic hard hat",
          "wooden salad bowl",
          "football helmet",
          "chain-mail monokini",
          "union scalemail pants",
          "paper-plate-mail pants",
          "troutpiece",
          "alpha-mail pants",
          "lucky rabbit's foot",
          "massive bag of catnip",
          "hang glider",
          "March hat",
          "miniature dormouse",
          "chopsticks",
          "rice bowl",
          "ninja mop",
          "ridiculously overelaborate ninja weapon",
          "sugar-coated pine cone",
          "blue traffic cone",
          "gloomy mushroom wine",
          "oily mushroom wine",
          "McPhee's Grimoire of Hilarious Object Summoning",
          "whoopie cushion",
          "fake fake vomit",
          "explosion-flavored chewing gum",
          "clown hammer",
          "rubber emo roe",
          "yellow snowcone",
          "magical ice cube with a fly in it",
          "calle de miel with a fly in it",
          "rockin' wagon with a fly in it",
          "perpendicular hula with a fly in it",
          "slap and tickle with a fly in it",
          "bag of airline peanuts",
          "fake hand",
          "Knob Goblin pet-buffing spray",
          "Knob Goblin learning pill",
          "Knob Goblin eyedrops",
          "Knob Goblin nasal spray",
          "KWE-brand transistor radio",
          "vampire heart",
          "Talisman of Bakula",
          "Radio KoL Coffee Mug",
          "Frank Gorshin trophy",
          "Radio Free Jersey",
          "bottle of used blood",
          "wind-up chattering teeth",
          "joybuzzer",
          "pet rock &quot;Snooty&quot; disguise",
          "diamond-studded fronts",
          "portable corkscrew",
          "St. Sneaky Pete's Day goodies basket",
          "fake plastic grass",
          "grass skirt",
          "grass hat",
          "grass blade",
          "raffle prize box",
          "homeless hobo spirit",
          "weegee sqouija",
          "sparkly engagement ring",
          "lucky Tam O'Shatner",
          "Grimacite goggles",
          "Grimacite glaive",
          "Grimacite greaves",
          "Grimacite garter",
          "Grimacite galoshes",
          "Grimacite gorget",
          "Grimacite guayabera",
          "Codex of Capsaicin Conjuration",
          "Gazpacho's Glacial Grimoire",
          "MSG",
          "second-hand knockoff engagement ring",
          "bottle of Domesticated Turkey",
          "bottle of Definit",
          "bottle of Calcutta Emerald",
          "bottle of Lieutenant Freeman",
          "bottle of Jorge Sinsonte",
          "boxed champagne",
          "kumquat",
          "tangerine",
          "tonic water",
          "cocktail onion",
          "raspberry",
          "kiwi",
          "whiskey bittersweet",
          "mimosette",
          "tequila sunset",
          "zmobie",
          "gin and tonic",
          "vodka and tonic",
          "vodka gibson",
          "gibson",
          "parisian cathouse",
          "rabbit punch",
          "caipifruta",
          "teqiwila",
          "Divine",
          "Gordon Bennett",
          "tangarita",
          "mandarina colada",
          "gimlet",
          "yellow brick road",
          "vodka stratocaster",
          "Neuromancer",
          "prussian cathouse",
          "Mae West",
          "Mon Tiki",
          "teqiwila slammer",
          "Knob lo mein",
          "asparagus lo mein",
          "Knoll lo mein",
          "spooky lo mein",
          "olive lo mein",
          "hot hi mein",
          "cold hi mein",
          "spooky hi mein",
          "stinky hi mein",
          "sleazy hi mein",
          "Junior LAAAAME merit badge",
          "Senior LAAAAME merit badge",
          "jazz soap",
          "tangarita with a fly in it",
          "mandarina colada with a fly in it",
          "prussian cathouse with a fly in it",
          "Mae West with a fly in it",
          "astronaut ice-cream",
          "delectable catalyst",
          "ultimate wad",
          "libation of liveliness",
          "eyedrops of the ermine",
          "perfume of prejudice",
          "eyedrops of the ocelot",
          "potent potion of potency",
          "concentrated cordial of concentration",
          "coffin lid",
          "white satin shield",
          "Cerebral Cloche",
          "Cerebral Culottes",
          "Cerebral Crossbow",
          "ice stein",
          "munchies pill",
          "homeopathic healing powder",
          "astral badger",
          "astral mushroom",
          "badger badge",
          "blue-frosted astral cupcake",
          "green-frosted astral cupcake",
          "orange-frosted astral cupcake",
          "purple-frosted astral cupcake",
          "pink-frosted astral cupcake",
          "raspberry beret",
          "pixel shield",
          "beer cartilage",
          "Spanish fly trap",
          "Spanish fly",
          "around the world",
          "scrumdiddlyumptious solution",
          "Toddler-sized Dragon Costume",
          "lotion of hotness",
          "lotion of coldness",
          "lotion of spookiness",
          "lotion of stench",
          "lotion of sleaziness",
          "Grimacite Bock",
          "wedge of gray cheese",
          "hot and sour sauce",
          "cold and sour sauce",
          "spooky and sour sauce",
          "stench and sour sauce",
          "sleazy and sour sauce",
          "brick",
          "milk of magnesium",
          "foie gras",
          "candy brain",
          "jewel-eyed wizard hat",
          "wad of Crovacite",
          "white collar",
          "White Citadel Satisfaction Satchel",
          "onion shurikens",
          "Cherry Cloaca Cola",
          "Diet Cloaca Cola",
          "Regular Cloaca Cola",
          "Radio KoL Keychain",
          "Radio KoL Antenna Ball",
          "Radio KoL Flashlight",
          "Radio KoL Maracas",
          "Radio KoL Bottle Opener",
          "Radio KoL Patch",
          "Cat-Herding Prod",
          "star boomerang",
          "star stiletto",
          "fraudwort",
          "shysterweed",
          "swindleblossom",
          "grave robbing shovel",
          "superhero mask",
          "cardboard ore",
          "styrofoam ore",
          "bubblewrap ore",
          "pet rock &quot;Groucho&quot; disguise",
          "cardboard sword",
          "cardboard staff",
          "bubblewrap sword",
          "bubblewrap staff",
          "bubblewrap crossbow",
          "styrofoam sword",
          "styrofoam staff",
          "styrofoam crossbow",
          "Platinum Yendorian Express Card",
          "cardboard crossbow",
          "blue ribbon",
          "giant discarded bottlecap",
          "giant discarded torn-up glove",
          "salamander slurry",
          "eyedrops of newt",
          "Frogade",
          "papotion of papower",
          "royal jelly taco",
          "tofu taco",
          "jumping bean taco",
          "catgut taco",
          "goat cheese taco",
          "pr0n taco",
          "alphabet gum",
          "Comma Chameleon egg",
          "shingle",
          "flaregun",
          "flaming cardboard sword",
          "flypaper staff",
          "grease gun",
          "sword of static",
          "wiffle-flail",
          "bubble bauble bow",
          "Frost&trade; brand sword",
          "squeaky staff",
          "can cannon",
          "starchy sword",
          "starchy staff",
          "starchy crossbow",
          "pestoblade",
          "poutine pole",
          "curdflinger",
          "muculent machete",
          "glistening staff",
          "repeating crossbow",
          "bigger stick",
          "sinewy crossbow string",
          "sturdy sword hilt",
          "dense meat sword",
          "dense meat staff",
          "dense meat crossbow",
          "Spirit Precipice",
          "smoldering staff",
          "hot cross bow",
          "sword behind inappropriate prepositions",
          "meatspout staff",
          "carob cannon",
          "shuddersword",
          "hairy staff",
          "projectile icemaker",
          "buffalo blade",
          "giant cheesestick",
          "potato pistol",
          "savory sword",
          "savory staff",
          "savory crossbow",
          "Super Magic Power Sword X",
          "soylent staff",
          "goulauncher",
          "defective skull",
          "Gnollish pie server",
          "Gnollish slotted spoon",
          "Knob Goblin spatula",
          "jack flapper",
          "filthy pestle",
          "Knob Goblin melon baller",
          "huge spoon",
          "oversized pizza cutter",
          "star spatula",
          "foon of fulmination",
          "foon of frigidity",
          "foon of foulness",
          "foon of fearfulness",
          "foon of fleshiness",
          "[1764]Spookyraven library key",
          "Spookyraven gallery key",
          "Spookyraven ballroom key",
          "pack of chewing gum",
          "Gnomish toolbox",
          "fricasseed brains",
          "brains casserole",
          "shiny butcherknife",
          "corn holder",
          "eggbeater",
          "bottle of popskull",
          "dishrag",
          "stale baguette",
          "leftovers of indeterminate origin",
          "ancient frozen dinner",
          "cardboard katana",
          "ram stick",
          "enchantlers",
          "ram-battering staff",
          "crazy little Turkish delight",
          "Snow Queen Crown",
          "ga-ga radio",
          "six pack of Mountain Stream",
          "bag of Cheat-Os",
          "unrefined Mountain Stream syrup",
          "frozen Mob Penguin",
          "Ram's Face Lager",
          "ram horns",
          "Travoltan trousers",
          "pool cue",
          "handful of hand chalk",
          "Counterclockwise Watch",
          "bone collar",
          "misshapen animal skeleton",
          "pile of dusty animal bones",
          "dusty animal skull",
          "dusty animal cranium",
          "dusty animal jawbone",
          "dusty first cervical vertebra",
          "dusty second cervical vertebra",
          "dusty third cervical vertebra",
          "dusty fourth cervical vertebra",
          "dusty fifth cervical vertebra",
          "dusty sixth cervical vertebra",
          "dusty seventh cervical vertebra",
          "dusty first thoracic vertebra",
          "dusty second thoracic vertebra",
          "dusty third thoracic vertebra",
          "dusty fourth thoracic vertebra",
          "dusty fifth thoracic vertebra",
          "dusty sixth thoracic vertebra",
          "dusty seventh thoracic vertebra",
          "dusty eighth thoracic vertebra",
          "dusty ninth thoracic vertebra",
          "dusty tenth thoracic vertebra",
          "dusty eleventh thoracic vertebra",
          "dusty twelfth thoracic vertebra",
          "dusty first lumbar vertebra",
          "dusty second lumbar vertebra",
          "dusty third lumbar vertebra",
          "dusty fourth lumbar vertebra",
          "dusty fifth lumbar vertebra",
          "dusty sixth lumbar vertebra",
          "dusty seventh lumbar vertebra",
          "dusty sacral vertebrae",
          "dusty first caudal vertebra",
          "dusty second caudal vertebra",
          "dusty third caudal vertebra",
          "dusty fourth caudal vertebra",
          "dusty fifth caudal vertebra",
          "dusty sixth caudal vertebra",
          "dusty seventh caudal vertebra",
          "dusty eighth caudal vertebra",
          "dusty ninth caudal vertebra",
          "dusty tenth caudal vertebra",
          "dusty left first rib",
          "dusty left second rib",
          "dusty left third rib",
          "dusty left fourth rib",
          "dusty left fifth rib",
          "dusty left sixth rib",
          "dusty left seventh rib",
          "dusty left eighth rib",
          "dusty left ninth rib",
          "dusty left tenth rib",
          "dusty left eleventh rib",
          "dusty left twelfth rib",
          "dusty right first rib",
          "dusty right second rib",
          "dusty right third rib",
          "dusty right fourth rib",
          "dusty right fifth rib",
          "dusty right sixth rib",
          "dusty right seventh rib",
          "dusty right eighth rib",
          "dusty right ninth rib",
          "dusty right tenth rib",
          "dusty right eleventh rib",
          "dusty right twelfth rib",
          "dusty animal pelvis",
          "dusty left scapula",
          "dusty right scapula",
          "dusty left clavicle",
          "dusty right clavicle",
          "dusty left humerus",
          "dusty right humerus",
          "dusty left radius",
          "dusty right radius",
          "dusty left ulna",
          "dusty right ulna",
          "dusty left femur",
          "dusty right femur",
          "dusty left tibia",
          "dusty right tibia",
          "dusty left fibula",
          "dusty right fibula",
          "dusty left kneecap",
          "dusty right kneecap",
          "dusty left first front claw",
          "dusty left second front claw",
          "dusty left third front claw",
          "dusty left fourth front claw",
          "dusty right first front claw",
          "dusty right second front claw",
          "dusty right third front claw",
          "dusty right fourth front claw",
          "dusty left thumb",
          "dusty right thumb",
          "dusty left first rear claw",
          "dusty left second rear claw",
          "dusty left third rear claw",
          "dusty left fourth rear claw",
          "dusty right first rear claw",
          "dusty right second rear claw",
          "dusty right third rear claw",
          "dusty right fourth rear claw",
          "1-ball",
          "2-ball",
          "3-ball",
          "4-ball",
          "5-ball",
          "6-ball",
          "7-ball",
          "8-ball",
          "clockwork sword",
          "clockwork staff",
          "clockwork crossbow",
          "clockwork handle",
          "clockwork rod",
          "clockwork shank",
          "Lord Spookyraven's spectacles",
          "old leather wallet",
          "old coin purse",
          "English to A. F. U. E. Dictionary",
          "bizarre illegible sheet music",
          "cardboard wakizashi",
          "gob of wet hair",
          "roll of toilet paper",
          "tattered wolf standard",
          "tattered snake standard",
          "KoL Con 3-D Glasses",
          "scary death orb",
          "tuning fork",
          "antique greaves",
          "antique helmet",
          "antique spear",
          "antique shield",
          "pitchfork",
          "broken sword",
          "snarling wolf shield",
          "lupine sword",
          "snake shield",
          "serpentine sword",
          "grouchy restless spirit",
          "9-ball",
          "chintzy seal pendant",
          "chintzy turtle brooch",
          "chintzy noodle ring",
          "chintzy saucepan earring",
          "chintzy disco ball pendant",
          "chintzy accordion pin",
          "worn tophat",
          "tap shoes",
          "Manetwich",
          "bottle of Vangoghbitussin",
          "bottle of Pinot Renoir",
          "desiccated apricot",
          "flute of flat champagne",
          "dehydrated caviar",
          "styrofoam peanuts",
          "snifter of thoroughly aged brandy",
          "disintegrating quill pen",
          "inkwell",
          "tattered scrap of paper",
          "scroll of ancient forbidden unspeakable evil",
          "can of Binarrrca",
          "Bit O' Ectoplasm",
          "dance card",
          "opera mask",
          "bottle of Monsieur Bubble",
          "Amulet of Yendor",
          "jitterbug larva",
          "bottle of perfume",
          "spoon!",
          "nervous tick egg",
          "plastic pumpkin bucket",
          "silver shrimp fork",
          "half of a memo",
          "stuffed cocoabo",
          "stuffed baby gravy fairy",
          "stuffed flaming gravy fairy",
          "stuffed frozen gravy fairy",
          "stuffed stinky gravy fairy",
          "stuffed spooky gravy fairy",
          "stuffed sleazy gravy fairy",
          "stuffed astral badger",
          "stuffed MagiMechTech MicroMechaMech",
          "stuffed hand turkey",
          "stuffed snowy owl",
          "stuffed scary death orb",
          "stuffed mind flayer",
          "stuffed undead elbow macaroni",
          "stuffed angry cow",
          "stuffed Cheshire bitten",
          "stuffed yo-yo",
          "rubber WWJD? bracelet",
          "rubber WWBD? bracelet",
          "rubber WWSPD? bracelet",
          "rubber WWtNSD? bracelet",
          "heart necklace",
          "right half of a heart necklace",
          "left half of a heart necklace",
          "pack of KWE trading card",
          "stick of &quot;gum&quot;",
          "Das &Uuml;berk&uuml;hlraum trading card",
          "Vaso De Agua trading card",
          "The Grand Poo-Bah trading card",
          "Thorny Toad trading card",
          "Chori Zo trading card",
          "Morbidda trading card",
          "Poison Oak trading card",
          "Princess Rutabaga trading card",
          "Roo trading card",
          "Woldo trading card",
          "The Snake trading card",
          "Nayztameetjoo trading card",
          "Arrrmetia trading card",
          "Serenity trading card",
          "Inndya trading card",
          "Kitty the Zmobie Basher trading card",
          "diamond necklace",
          "spade necklace",
          "club necklace",
          "cream pie",
          "cherry pie",
          "strawberry pie",
          "lemon meringue pie",
          "Genalen&trade; Bottle",
          "mixed wildflower greens",
          "handful of walnuts",
          "nutty organic salad",
          "super salad",
          "tofu wonton",
          "hippy protest button",
          "Lockenstock&trade; sandals",
          "didgeridooka",
          "bullet-proof corduroys",
          "round purple sunglasses",
          "wicker shield",
          "Marquis de Poivre soda",
          "radium-flavored potato chips",
          "wintergreen-flavored potato chips",
          "ennui-flavored potato chips",
          "x-ray specs",
          "patchouli oil bomb",
          "ferret bait",
          "exploding hacky-sack",
          "hemp net",
          "your father's MacGuffin diary",
          "brain-meltingly-hot chicken wings",
          "frat brats",
          "knob ka-bobs",
          "can of Swiller",
          "broken wings",
          "sunken eyes",
          "reassembled blackbird",
          "tiny bust of Pallas",
          "black market map",
          "black snake skin",
          "adder bladder",
          "black pension check",
          "black picnic basket",
          "Black No. 2",
          "black sword",
          "black helmet",
          "black shield",
          "blackberry",
          "forged identification documents",
          "PADL Phone",
          "kick-ass kicks",
          "sake bomb",
          "tequila grenade",
          "beer helmet",
          "distressed denim pants",
          "perforated battle paddle",
          "flashing novelty button",
          "orange glowstick",
          "anniversary chutney sculpture",
          "spandex anniversary shorts",
          "jar of anniversary jam",
          "bucket of anniversary lard",
          "anniversary concrete fedora",
          "makeshift turban",
          "makeshift cape",
          "makeshift skirt",
          "toothbrush",
          "makeshift crane",
          "can of starch",
          "bottle of ultravitamins",
          "antique bottle of cough syrup",
          "tube of hair oil",
          "Daffy Taffy",
          "Crimboween memo",
          "pilgrim shield",
          "fancy bath salts",
          "antique hand mirror",
          "hors d'oeuvre tray",
          "ballroom blintz",
          "towel",
          "guy made of bee pollen",
          "17-ball",
          "filthy lucre",
          "hobo gristle",
          "shredded can label",
          "bloodstained briquette",
          "greasy dreadlock",
          "vial of pirate sweat",
          "empty aftershave bottle",
          "coal button",
          "burned-out arcanodiode",
          "non-Euclidean hoof",
          "[2108]rock",
          "stringy sinew",
          "stick",
          "tooth",
          "big leaf",
          "wheel",
          "yo",
          "prehistoric spear",
          "stick-on-a-string",
          "fire",
          "leaf tube",
          "lit cigar",
          "Grateful Undead T-shirt",
          "ASCII shirt",
          "safety vest",
          "eXtreme Bi-Polar Fleece Vest",
          "Ye Olde Navy Fleece",
          "bronze breastplate",
          "white hat hacker T-shirt",
          "vampire collar",
          "possessed top",
          "killer rag doll",
          "tree-eating kite",
          "incredibly creepy marionette",
          "fancy dress ball",
          "mad scientist's sock monkey",
          "stuffed alien blob",
          "vampire duck-on-a-string",
          "toy crazy train",
          "razor-tipped yo-yo",
          "toy mercenary",
          "spooky length of string",
          "spooky toy wheel",
          "spooky wooden block",
          "spooky felt",
          "evil googly eye",
          "spooky stuffing",
          "evil teddy bear",
          "evil teddy bear sewing kit",
          "toothsome rock",
          "spooky frank",
          "plate of franks and beans",
          "shot of blackberry schnapps",
          "capacitor relay",
          "carbon nanotube frame",
          "ion grid",
          "Feynman gate",
          "logic synthesizer",
          "high-resistance ultrapolymer plating",
          "servomechanical torsion facilitator",
          "quantum polarity inducer",
          "bi-lateral logic compressor",
          "computronic processing unit",
          "reverse-oscillating klystron",
          "sub-molecular interocitor",
          "recursive spline reticulator",
          "atomic vector plotter",
          "ion-pulse modulation stabilizer",
          "hyperbolic plasma focuser",
          "toy ray gun",
          "toy space helmet",
          "MagiMechTech NanoMechaMech",
          "astronaut pants",
          "toy jet pack",
          "triangular stone",
          "mossy stone sphere",
          "smooth stone sphere",
          "cracked stone sphere",
          "rough stone sphere",
          "obsidian dagger",
          "archaeologist's notebook",
          "[2180]ancient amulet",
          "chocolate lump",
          "Harold's hammer head",
          "Harold's hammer handle",
          "Harold's hammer",
          "Kiss the Knob apron",
          "unlit birthday cake",
          "lit birthday cake",
          "flask of peppermint oil",
          "flask of peppermint schnapps",
          "yuletide troll chrysalis",
          "giant book of ancient carols",
          "disintegrating sheet music",
          "candy stake",
          "spooky eggnog",
          "ancient unspeakable fruitcake",
          "gingerbread horror",
          "fancy but probably evil chocolate",
          "bat-shaped Crimboween cookie",
          "skull-shaped Crimboween cookie",
          "tombstone-shaped Crimboween cookie",
          "tiny plastic gift-wrapping vampire",
          "tiny plastic ancient yuletide troll",
          "tiny plastic skeletal reindeer",
          "tiny plastic Crimboween pentagram",
          "tiny plastic Scream Queen",
          "time sleigh",
          "lucky Crimbo tiki necklace",
          "bobble-hip hula elf doll",
          "Crimbo ukulele",
          "Tiki lighter",
          "deck of tropical cards",
          "tropical paperweight",
          "tropical Crimbo pressie",
          "tropical wrapping paper",
          "Tropical Crimbo Hat",
          "Tropical Crimbo Shorts",
          "super ka-bob",
          "beer basted brat",
          "Tropical Crimbo Sword",
          "orange and black Crimboween candy",
          "Great Ball of Frozen Fire",
          "liar's pants",
          "flaming juggler's balls",
          "flaming pink shirt",
          "flaming familiar doppelg&auml;nger",
          "evil flaming eyeball pendant",
          "arse-a'fire elixir",
          "cosmic lemonade",
          "powdered toad horn",
          "icicle katana",
          "frigid mote",
          "smudged alchemical recipe",
          "polka-dot bow tie",
          "calavera concertina",
          "ratarang",
          "turtle pheromones",
          "pygmy blowgun",
          "pygmy nose-bone",
          "big bad voodoo mask",
          "bottle of alcohol",
          "pygmy spear",
          "pygmy pygment",
          "headhunter necktie",
          "pointed stick",
          "knobby helmet turtle",
          "knobby kneepads",
          "sewer turtle",
          "sebaceous shield",
          "skeletortoise",
          "box turtle",
          "cardboard box turtle",
          "bottlecap turtle",
          "bubblewrap bottlecap turtleban",
          "furry green turtle",
          "furry green earmuffs",
          "reinforced furry underpants",
          "[2258]&quot;I Love Me, Vol. I&quot;",
          "photograph of God",
          "hard rock candy",
          "hard-boiled ostrich egg",
          "bird rib",
          "lion oil",
          "stunt nuts",
          "wet stew",
          "wet stunt nut stew",
          "Mega Gem",
          "[2268]Staff of Fats",
          "sausage wonton",
          "black belt",
          "dusty bottle of Merlot",
          "dusty bottle of Port",
          "dusty bottle of Pinot Noir",
          "dusty bottle of Zinfandel",
          "dusty bottle of Marsala",
          "dusty bottle of Muscat",
          "Fernswarthy's key",
          "Fernswarthy's letter",
          "dusty old book",
          "Manual of Labor",
          "Manual of Transmission",
          "Manual of Dexterity",
          "seal-skull helmet",
          "petrified noodles",
          "chisel",
          "[2286]Eye of Ed",
          "green glowstick",
          "encoder ring",
          "red paperclip",
          "really big tiny house",
          "Non-Essential Amulet",
          "white wine vinaigrette",
          "cup of strong herbal tea",
          "Curiously Shiny Ancient Evil-Bashing Axe",
          "marinated stakes",
          "knob butter",
          "vial of ectoplasm",
          "boock of darck magicks",
          "EZ-Play Harmonica Book",
          "fingerless hobo gloves",
          "Chomsky's comic books",
          "worm-riding hooks",
          "Libram of Candy Heart Summoning",
          "white candy heart",
          "pink candy heart",
          "orange candy heart",
          "lavender candy heart",
          "yellow candy heart",
          "green candy heart",
          "white candygram",
          "pink candygram",
          "orange candygram",
          "lavender candygram",
          "yellow candygram",
          "green candygram",
          "broken carburetor",
          "ancient bronze token",
          "ancient bomb",
          "carved wooden wheel",
          "worm-riding manual page",
          "worm-riding manual page 2",
          "worm-riding manual pages 3-15",
          "headpiece of the Staff of Ed",
          "Staff of Ed, almost",
          "[2325]Staff of Ed",
          "stone rose",
          "can of black paint",
          "drum machine",
          "handful of confetti",
          "chocolate-covered diamond-studded roses",
          "bouquet of circular saw blades",
          "Better Than Cuddling Cake",
          "stuffed ninja snowman",
          "[2334]Holy MacGuffin",
          "rubber WWBBDD? bracelet",
          "oversized pipe",
          "reinforced beaded headband",
          "black pudding",
          "Blackfly Chardonnay",
          "black & tan",
          "black pepper",
          "black forest cake",
          "black forest ham",
          "filthworm hatchling scent gland",
          "filthworm drone scent gland",
          "filthworm royal guard scent gland",
          "heart of the filthworm queen",
          "water pipe bomb",
          "gas balloon",
          "beer bomb",
          "superamplified boom box",
          "fire poi",
          "bejeweled pledge pin",
          "communications windchimes",
          "henna face paint",
          "tube of dread wax",
          "Gaia beads",
          "pink clay bead",
          "purple clay bead",
          "green clay bead",
          "hippy medical kit",
          "Slow Talkin' Elliot's dogtags",
          "longhaired hippy wig",
          "Zim Merman's guitar",
          "C.A.R.N.I.V.O.R.E. button",
          "orange peel hat",
          "carbonated soy milk",
          "flowing hippy skirt",
          "filthy poultice",
          "natural fennel soda",
          "green smoke bomb",
          "bunch of bananas",
          "banana",
          "banana peel",
          "banana cream pie",
          "banana daiquiri",
          "bungle in the jungle",
          "banana spritzer",
          "banana smoothie",
          "dandy lion cub",
          "woolen cravat",
          "red class ring",
          "blue class ring",
          "white class ring",
          "bottle opener belt buckle",
          "keg shield",
          "giant foam finger",
          "war tongs",
          "Monstar energy beverage",
          "asbestos apron",
          "beaten-up Chucks",
          "natty blue ascot",
          "wreath of laurels",
          "Danglin' Chad's loincloth",
          "tube sock",
          "chloroform rag",
          "depantsing bomb",
          "energy drink IV",
          "Elmley shades",
          "molotov cocktail cocktail",
          "beer bong",
          "gauze garter",
          "barrel of gunpowder",
          "jam band flyers",
          "rock band flyers",
          "Panda outfit",
          "pink bat eye",
          "worthless piece of yellow glass",
          "billy idol",
          "oily rag",
          "broken petri dish",
          "sammich crust",
          "triffid bark",
          "white lint",
          "discarded pacifier",
          "bounty-hunting helmet",
          "bounty-hunting rifle",
          "bounty-hunting pants",
          "bottle of rhinoceros hormones",
          "teeny-tiny magic scroll",
          "bottle of pirate juice",
          "irradiated pet snacks",
          "Mick's IcyVapoHotness Inhaler",
          "cyclops eyedrops",
          "can of spinach",
          "[2426]fire flower",
          "freezerburned ice cube",
          "fake blood",
          "Eau de Guaneau",
          "bag of lard",
          "bottle of Mystic Shell",
          "SPF 451 lip balm",
          "bottle of antifreeze",
          "black eyedrops",
          "Dogsgotnonoz pills",
          "donkey flipbook",
          "New Cloaca-Cola",
          "scented massage oil",
          "poltergeist-in-the-jar-o",
          "unnatural gas",
          "Knob Goblin Encryption Key",
          "Cobb's Knob map",
          "pink glowstick",
          "Supernova Champagne",
          "Deactivated O. A. F.",
          "hardware upgrade",
          "bad penguin egg",
          "tasteful black bow tie",
          "six-pack of New Cloaca-Cola",
          "empty Cloaca-Cola bottle",
          "goatskin umbrella",
          "wool hat",
          "Goodfella contract",
          "white belt",
          "bar whip",
          "barskin buckler",
          "white whip",
          "barskin loincloth",
          "tighty whiteys",
          "yak toupee",
          "odor extractor",
          "Manual of Transcendent Olfaction",
          "bowl of Bounty-Os",
          "Oreille Divis&eacute;e brandy",
          "pompadour'd puppy",
          "blue suede shoes",
          "callused fingerbone",
          "bundle of receipts",
          "disintegrating cork",
          "sticky stardust",
          "wilted lettuce",
          "empty greasepaint tube",
          "clown skin",
          "clown wig",
          "clownskin belt",
          "clownskin buckler",
          "clown whip",
          "demon skin",
          "demon-horned hat",
          "demon buckler",
          "demon whip",
          "barskin cloak",
          "white snakeskin duster",
          "clownskin harness",
          "demonskin jacket",
          "hipposkin poncho",
          "yak anorak",
          "tuxedo shirt",
          "gnauga hide vest",
          "shirt kit",
          "tropical orchid",
          "stick of dynamite",
          "Necrotelicomnicon",
          "Cookbook of the Damned",
          "Sinful Desires",
          "molybdenum magnet",
          "molybdenum hammer",
          "molybdenum screwdriver",
          "molybdenum pliers",
          "molybdenum crescent wrench",
          "Really Expensive Jewelry and You",
          "extra-fancy ring setting",
          "precious piercing post",
          "heavy necklace chain",
          "beach glass bead",
          "clay peace-sign bead",
          "beach glass necklace",
          "peace-sign necklace",
          "round green sunglasses",
          "Frat Army FGF",
          "Hippy Army MPE",
          "spark plug earring",
          "woven baling wire bracelets",
          "gearbox necklace",
          "wrench bracelet",
          "rusty chain necklace",
          "sawblade shield",
          "McMillicancuddy's Special Lager",
          "melted Jell-o shot",
          "cruelty-free wine",
          "thistle wine",
          "megatofu",
          "displaced fish",
          "fishy fish",
          "fishy fish casserole",
          "fishy fish lasagna",
          "filet of tangy gnat (&quot;fotelif&quot;)",
          "gnatloaf",
          "gnatloaf casserole",
          "gnat lasagna",
          "long pork",
          "long pork chop sandwiches",
          "long pork casserole",
          "long pork lasagna",
          "canopic jar",
          "ancient spice",
          "powdered organs",
          "Ankh of Badahnkadh",
          "tomb ratchet",
          "Mayflower bouquet",
          "lesser grodulated violet",
          "tin magnolia",
          "begpwnia",
          "upsy daisy",
          "half-orchid",
          "tin star",
          "outrageous sombrero",
          "&quot;Humorous&quot; T-shirt",
          "Peppercorns of Power",
          "vial of mojo",
          "golden reeds",
          "turtle chain",
          "distilled seal blood",
          "high-octane olive oil",
          "Shagadelic Disco Banjo",
          "Squeezebox of the Ages",
          "Chelonian Morningstar",
          "Hammer of Smiting",
          "17-alarm Saucepan",
          "Greek Pasta Spoon of Peril",
          "half-rotten brain",
          "rusty bonesaw",
          "plus-sized phylactery",
          "can of Ghuol-B-Gone&trade;",
          "Azazel's unicorn",
          "Azazel's lollipop",
          "Azazel's tutu",
          "ant agonist",
          "ant hoe",
          "ant rake",
          "ant pitchfork",
          "ant sickle",
          "ant pick",
          "bronzed locust",
          "honey-dipped locust",
          "giant cactus quill",
          "Staff of the Short Order Cook",
          "cactus fruit",
          "scorpion whip",
          "handful of sand",
          "brick of sand",
          "centipede eggs",
          "wonderwall shield",
          "Colonel Mustard's Lonely Spades Club Jacket",
          "General Sage's Lonely Diamonds Club Jacket",
          "Corporal Fennel's Lonely Clubs Club Jacket",
          "Private Pepper's Lonely Hearts Club Jacket",
          "hot date",
          "distilled fortified wine",
          "tasty tart",
          "Knob Goblin lunchbox",
          "Knob pasty",
          "thermos full of Knob coffee",
          "Ben-Gal&trade; Balm",
          "leathery cat skin",
          "leathery bat skin",
          "leathery rat skin",
          "Discount Telescope Warehouse gift certificate",
          "carbonated water lily",
          "Staff of the Midnight Snack",
          "Staff of Blood and Pudding",
          "smoldering box",
          "Tuesday's ruby",
          "palm frond",
          "palm-frond fan",
          "palm-frond whip",
          "palm-frond net",
          "palm-frond capris",
          "extra-large palm-frond toupee",
          "palm-frond cloak",
          "ancient vinyl coin purse",
          "rocky raccoon",
          "mojo filter",
          "savoy truffle",
          "ancient Magi-Wipes",
          "big boom",
          "Iiti Kitty phone charm",
          "jar of swamp gas",
          "unidentified jerky",
          "nasty rat mask",
          "ratskin belt",
          "rattail whip",
          "bat hat",
          "bat whip",
          "bat-ass leather jacket",
          "catskin cap",
          "catskin buckler",
          "tail o' nine cats",
          "Hugo's Weaving Manual",
          "gremlin juice",
          "mother's little helper",
          "pat-a-cake pendant",
          "mummy wrapping",
          "really thick bandage",
          "mummy mask",
          "gauze shorts",
          "gauze hammock",
          "black cherry soda",
          "black greaves",
          "black cowboy hat",
          "Maxwell's Silver Hammer",
          "happiness",
          "flaming feather",
          "frozen feather",
          "frightful feather",
          "fetid feather",
          "flirtatious feather",
          "Lord Spookyraven's ear trumpet",
          "bottled green pixie",
          "green pixie spog",
          "S.T.L.T.",
          "honey-dew",
          "white Xanadian",
          "tiny bottle of absinthe",
          "Drowsy Sword",
          "escargotsicle",
          "bottle of realpagne",
          "albatross necklace",
          "not-a-pipe",
          "flask of Amontillado",
          "fancy ball mask",
          "Can-Can skirt",
          "sensitive poetry journal",
          "bottled inspiration",
          "bellhop bell",
          "disintegrating spiky collar",
          "can-can-in-a-can",
          "patent antipsychotics",
          "Mariner's Friend cough drops",
          "shot of nepenthe schnapps",
          "library card",
          "Bohemian rhapsody",
          "bottle of black cat tonic",
          "handful of moss",
          "bit-o-cactus",
          "ancient protein powder",
          "spectre scepter",
          "sparkler",
          "snake",
          "M-242",
          "detuned radio",
          "Warehouse 23 crate",
          "armgun",
          "fancy seashell necklace",
          "commemorative war stein",
          "stone frisbee",
          "dreadlock whip",
          "beer-a-pult",
          "cast-iron legacy paddle",
          "handful of nuts and berries",
          "giant driftwood sculpture",
          "massive sitar",
          "stone baseball cap",
          "cup of primitive beer",
          "ovoid leather thing",
          "duct tape",
          "duct tape wallet",
          "duct tape shirt",
          "duct tape fedora",
          "duct tape sword",
          "duct tape dockers",
          "duct tape buckler",
          "shrinking powder",
          "blackberry slippers",
          "blackberry moccasins",
          "blackberry combat boots",
          "funky dried mushroom",
          "exotic parrot egg",
          "cracker",
          "black facepaint",
          "black sheepskin diploma",
          "Black Body&trade; spray",
          "floorboard cruft",
          "sausage bomb",
          "battered hubcap",
          "shiny hood ornament",
          "spare kidney",
          "hand-carved bokken",
          "hand-carved bow",
          "hand-carved staff",
          "Staff of the Greasefire",
          "Staff of the Grand Flamb&eacute;",
          "bowl of rye sprouts",
          "cob of corn",
          "juniper berries",
          "plum",
          "pear",
          "peach",
          "plum wine",
          "shot of pear schnapps",
          "shot of peach schnapps",
          "bunch of square grapes",
          "brown sugar cane",
          "sandwich of the gods",
          "Pan-Dimensional Gargle Blaster",
          "enchanted leopard-print barbell",
          "pile of smoking rags",
          "panty raider camouflage",
          "Staff of the Walk-In Freezer",
          "boilermaker",
          "steel lasagna",
          "steel margarita",
          "steel-scented air freshener",
          "gremlin mutagen",
          "extra-potent gremlin mutagen",
          "chunk of depleted Grimacite",
          "furniture dolly",
          "Staff of the Grease Trap",
          "Uranium Omega of Temperance",
          "Lead Zeta of Chastity",
          "Aluminum Epsilon of Humility",
          "Zinc Delta of Tranquility",
          "Nickel Gamma of Frugality",
          "Iron Beta of Industry",
          "Copper Alpha of Sincerity",
          "Red Balloon of Valor",
          "Purple Horseshoe of Honor",
          "Blue Diamond of Honesty",
          "Green Clover of Justice",
          "Yellow Moon of Compassion",
          "Orange Star of Sacrifice",
          "Pink Heart of Spirit",
          "Order of the Silver Wossname",
          "Harold's bell",
          "solid gold bowling ball",
          "Crimbo pie",
          "pear tart",
          "peach pie",
          "chunk of rock salt",
          "handful of pine needles",
          "steamy ruby",
          "glacial sapphire",
          "unearthly onyx",
          "effluvious emerald",
          "tawdry amethyst",
          "filigreed hamethyst earring",
          "filigreed hamethyst necklace",
          "filigreed hamethyst ring",
          "solid baconstone earring",
          "solid baconstone necklace",
          "solid baconstone ring",
          "pulled porquoise earring",
          "pulled porquoise pendant",
          "pulled porquoise ring",
          "Earring of Fire",
          "Pendant of Fire",
          "Ring of Fire",
          "Ice-Cold Beerring",
          "Ice-Cold Aluminum Necklace",
          "Ice-Cold Beer Ring",
          "Unspeakable Earring",
          "Choker of the Ultragoth",
          "The Ring",
          "Nose Ring of Putrescence",
          "Putrid Pendant",
          "Ring of the Sewer Snake",
          "Mudflap-Girl Earring",
          "Mudflap-Girl Necklace",
          "Mudflap-Girl Ring",
          "vial of Gnomochloric acid",
          "flask of Gnomochloric acid",
          "jug of Gnomochloric acid",
          "vial of hamethyst juice",
          "vial of baconstone juice",
          "vial of porquoise juice",
          "flask of hamethyst juice",
          "flask of baconstone juice",
          "flask of porquoise juice",
          "jug of hamethyst juice",
          "jug of baconstone juice",
          "jug of porquoise juice",
          "Brimstone Beret",
          "Brimstone Bludgeon",
          "Brimstone Bunker",
          "Brimstone Boxers",
          "Brimstone Brooch",
          "Brimstone Bracelet",
          "Grimacite gasmask",
          "Grimacite gat",
          "Grimacite gaiters",
          "Grimacite gauntlets",
          "Grimacite go-go boots",
          "Grimacite girdle",
          "Grimacite gown",
          "Staff of the Kitchen Floor",
          "anniversary gift box",
          "loaded dice",
          "really dense meat stack",
          "digital key lime",
          "star key lime",
          "digital key lime pie",
          "star key lime pie",
          "bottle-rocket crossbow",
          "indie comic hipster glasses",
          "wizard action figure",
          "mint-condition magic wand",
          "yellow glowstick",
          "Periodical Paintbrush",
          "bottle of cooking sherry",
          "antique packet of ketchup",
          "accidental cider",
          "dire fudgesicle",
          "navel ring of navel gazing",
          "class five ecto-larva",
          "plastic bib",
          "Dallas Dynasty Falcon Crest shield",
          "Gnomitronic Hyperspatial Demodulizer",
          "shrunken navigator head",
          "moonberry wine cooler",
          "fine aged cheddarwurst",
          "branch from the Great Tree",
          "Phil Bunion's axe",
          "bouquet of swamp roses",
          "huge mosquito proboscis",
          "swamp lolly",
          "seegar butt",
          "bottled swamp gas",
          "witch wart",
          "delicious swamp muck",
          "leechknife",
          "decomposed boot",
          "big dribbly candle",
          "stolen meatpouch",
          "beaver spear",
          "shamanic beads",
          "dilapidated wizard hat",
          "pirate pamphlet",
          "pirate brochure",
          "pirate tract",
          "burnt flower",
          "tiny plastic Naughty Sorceress",
          "tiny plastic Ed the Undying",
          "tiny plastic Lord Spookyraven",
          "tiny plastic Dr. Awkward",
          "tiny plastic protector spectre",
          "tiny plastic Baron von Ratsworth",
          "tiny plastic Boss Bat",
          "tiny plastic Knob Goblin King",
          "tiny plastic Bonerdagon",
          "tiny plastic The Man",
          "tiny plastic The Big Wisniewski",
          "tiny plastic Felonia",
          "tiny plastic Beelzebozo",
          "tiny plastic conservationist hippy",
          "tiny plastic 7-foot dwarf",
          "tiny plastic angry bugbear",
          "tiny plastic anime smiley",
          "tiny plastic apathetic lizardman",
          "tiny plastic astronomer",
          "tiny plastic beanbat",
          "tiny plastic blooper",
          "tiny plastic brainsweeper",
          "tiny plastic briefcase bat",
          "tiny plastic demoninja",
          "tiny plastic filthy hippy jewelry maker",
          "tiny plastic drunk goat",
          "tiny plastic fiendish can of asparagus",
          "tiny plastic Gnollish crossdresser",
          "tiny plastic handsome mariachi",
          "tiny plastic Knob Goblin bean counter",
          "tiny plastic Knob Goblin harem girl",
          "tiny plastic Knob Goblin mad scientist",
          "tiny plastic Knott Yeti",
          "tiny plastic lemon-in-the-box",
          "tiny plastic lobsterfrogman",
          "tiny plastic ninja snowman",
          "tiny plastic Orcish Frat Boy",
          "tiny plastic G Imp",
          "tiny plastic goth giant",
          "tiny plastic cubist bull",
          "tiny plastic scary clown",
          "tiny plastic smarmy pirate",
          "tiny plastic spiny skelelton",
          "tiny plastic Spam Witch",
          "tiny plastic spooky vampire",
          "tiny plastic taco cat",
          "tiny plastic undead elbow macaroni",
          "tiny plastic warwelf",
          "tiny plastic whitesnake",
          "tiny plastic XXX pr0n",
          "tiny plastic zmobie",
          "tiny plastic Protagonist",
          "tiny plastic Spunky Princess",
          "tiny plastic topiary golem",
          "tiny plastic senile lihc",
          "tiny plastic Iiti Kitty",
          "tiny plastic Gnomester Blomester",
          "tiny plastic Trouser Snake",
          "tiny plastic Axe Wound",
          "tiny plastic Hellion",
          "tiny plastic Black Knight",
          "tiny plastic giant pair of tweezers",
          "tiny plastic fruit golem",
          "tiny plastic fluffy bunny",
          "miniature castagnets",
          "siesta-ing Casagnova gnome",
          "miniature Jacob's ladder",
          "unemployed hunchbacked minion",
          "Spooky Surprise Egg",
          "Steal This Candy",
          "chocolate filthy lucre",
          "Angry Farmer's Wife Candy",
          "the Jickinator",
          "party hat",
          "V for Vivala mask",
          "The Big Book of Pirate Insults",
          "shot of rotgut",
          "jar of &quot;Creole Lady&quot; marrrmalade",
          "Cap'm Caronch's Map",
          "Orcish Frat House blueprints",
          "blue glowstick",
          "charrrm bracelet",
          "tip jar",
          "yam candy",
          "cocktail napkin",
          "rum barrel charrrm",
          "tube of cranberry Go-Goo",
          "rum barrel charrrm bracelet",
          "single-serving herbal stuffing",
          "packet of tofurkey gravy",
          "tofurkey nugget",
          "rigging shampoo",
          "ball polish",
          "mizzenmast mop",
          "Tom's of the Spanish Main Toothpaste",
          "Swabbie&trade; swab",
          "Oil of Parrrlay",
          "creamsicle",
          "cream stout",
          "curmudgel",
          "grumpy old man charrrm",
          "grumpy old man charrrm bracelet",
          "tarrrnish charrrm",
          "tarrrnished charrrm bracelet",
          "bilge wine",
          "witty rapier",
          "yohohoyo",
          "fish-liver oil",
          "booty chest charrrm",
          "booty chest charrrm bracelet",
          "cannonball charrrm",
          "cannonball charrrm bracelet",
          "copper ha'penny charrrm",
          "copper ha'penny charrrm bracelet",
          "silver tongue charrrm",
          "silver tongue charrrm bracelet",
          "bit of clingfilm",
          "clingfilm trousers",
          "clingfilm cap",
          "clingfilm slippers",
          "clingfilm tangle",
          "vinegar-soaked lemon slice",
          "true grit",
          "buoybottoms",
          "grungy flannel shirt",
          "grungy bandana",
          "grassy cutlass",
          "Cap'm Caronch's nasty booty",
          "Cap'm Caronch's dentures",
          "solid gold pegleg",
          "gold lam&eacute; pants",
          "enormous hoop earring",
          "costume sword",
          "rainbow pearl",
          "rainbow pearl earring",
          "rainbow pearl necklace",
          "rainbow pearl ring",
          "Idol of Ak'gyxoth",
          "Emblem of Ak'gyxoth",
          "sinister altar fragment",
          "shimmering rainbow sand",
          "simple ancient cursed key",
          "ornate ancient cursed key",
          "gilded ancient cursed key",
          "ancient cursed foot locker",
          "ornate ancient cursed chest",
          "gilded ancient cursed chest",
          "all-purpose cleaner",
          "handful of sawdust",
          "large stone triangle",
          "medium stone triangle",
          "small stone triangle",
          "strange stone pyramid",
          "corpse on the beach",
          "corpsetini",
          "corpsedriver",
          "Corpse Island iced tea",
          "red-headed corpse",
          "kamicorpse-ee",
          "purple corpsel",
          "corpsebite",
          "pirate fledges",
          "cursed piece of thirteen",
          "cursed black pearl onion",
          "cursed sea biscuit",
          "cursed bottle of rum",
          "cursed bottle of black-label rum",
          "cursed cannonball",
          "cursed voodoo skull",
          "cursed dirty joke scroll",
          "Crimbo P. R. E. S. S. I. E.",
          "metallic foil bow",
          "metallic foil radar dish",
          "nanite-infested gingerbread bugbear",
          "nanite-infested candy cane",
          "nanite-infested fruitcake",
          "nanite-infested eggnog",
          "El Vibrato power sphere",
          "cursed eyepatch",
          "cursed cutlass",
          "cursed breeches",
          "mood ring",
          "black candy heart",
          "cymbal syrup",
          "metallic foil cat ears",
          "nanofiber cloth",
          "iGoogly",
          "theoretical string",
          "synthetic stuffing",
          "toy hoverpad",
          "LED block",
          "gyroscope",
          "cyborg doll",
          "buckyball",
          "toy maglev monorail",
          "dollhive",
          "toy deathbot",
          "laser cannon",
          "plexifoam chin strap",
          "silicon-infused gluteal shield",
          "carbonite visor",
          "set of Unobtainium straps",
          "polymorphic fastening apparatus",
          "General Assembly Module",
          "laser targeting chip",
          "hi-density nylocite leg armor",
          "kevlateflocite helmet",
          "Bulky Buddy Box",
          "teddy borg",
          "marionette collective",
          "monomolecular yo-yo",
          "stuffed gray blob",
          "borg sock monkey",
          "roboduck-on-a-string",
          "mylar scout drone",
          "teddy borg sewing kit",
          "biomechanical crimborg helmet",
          "C.B.F.G.",
          "biomechanical crimborg leg armor",
          "vitachoconutriment capsule",
          "handmade hobby horse",
          "ball-in-a-cup",
          "set of jacks",
          "laser-broiled pear",
          "polyalloy shield",
          "oversized fish scaler",
          "killing feather",
          "golden ring",
          "robotronic egg",
          "rogue swarmer",
          "sawblade fragment",
          "unstable laser battery",
          "vibrating cyborg knife",
          "immense cyborg hand",
          "cyborg stompin' boot",
          "deactivated RoboGoose",
          "overclocked avian microprocessor",
          "Miniborg stomper",
          "Miniborg strangler",
          "Miniborg laser",
          "Miniborg beeper",
          "Miniborg hiveminder",
          "Miniborg Destroy-O-Bot",
          "old-fashioned Crimbo Pressie",
          "stuffed Hodgman",
          "Libram of Divine Favors",
          "divine noisemaker",
          "divine can of silly string",
          "divine blowout",
          "divine champagne popper",
          "divine cracker",
          "divine champagne flute",
          "fruitfilm",
          "piece of after eight",
          "hobo nickel",
          "sandcastle",
          "marshmallow",
          "roasted marshmallow",
          "strange shiny disc",
          "tin cup of mulligan stew",
          "flamin' bindle",
          "freezin' bindle",
          "stinkin' bindle",
          "spooky bindle",
          "sleazy bindle",
          "'WILL WORK FOR BOOZE' sign",
          "Hodgman's whackin' stick",
          "Hodgman's imaginary hamster",
          "old soft shoes",
          "panhandle panhandling hat",
          "cup of infinite pencils",
          "Hodgman's disgusting technicolor overcoat",
          "a torn paper strip",
          "El Vibrato translator",
          "El Vibrato punchcard (115 holes)",
          "El Vibrato punchcard (97 holes)",
          "El Vibrato punchcard (129 holes)",
          "El Vibrato punchcard (213 holes)",
          "El Vibrato punchcard (165 holes)",
          "El Vibrato punchcard (142 holes)",
          "El Vibrato punchcard (216 holes)",
          "El Vibrato punchcard (88 holes)",
          "El Vibrato punchcard (182 holes)",
          "El Vibrato punchcard (176 holes)",
          "El Vibrato punchcard (104 holes)",
          "El Vibrato drone",
          "sparking El Vibrato drone",
          "warm El Vibrato drone",
          "humming El Vibrato drone",
          "glowing El Vibrato drone",
          "El Vibrato helmet",
          "El Vibrato energy spear",
          "El Vibrato leg guards",
          "broken El Vibrato drone",
          "repaired El Vibrato drone",
          "augmented El Vibrato drone",
          "seal eyeball",
          "turtle soup",
          "evil noodles",
          "nauseating reagent",
          "evil paper umbrella",
          "evil vihuela",
          "evil boring spaghetti",
          "evil delicious noodles",
          "evil delicious spicy noodles",
          "evil painful penne pasta",
          "3vi1 pr0n m4nic0tti",
          "evil ravioli della hippy",
          "evil spicy noodles",
          "evil potion of potency",
          "evil libation of liveliness",
          "evil tomato juice of powerful power",
          "evil eyedrops of the ermine",
          "evil ointment of the occult",
          "evil serum of sarcasm",
          "evil philter of phorce",
          "an evil little sump'm sump'm",
          "evil ducha de oro",
          "evil horizontal tango",
          "evil roll in the hay",
          "naughty origami kit",
          "naughty fortune teller",
          "origami &quot;gentlemen's&quot; magazine",
          "naughty paper shuriken",
          "origami pasties",
          "origami riding crop",
          "El Vibrato trapezoid",
          "lump of coal",
          "lump of diamond",
          "thick padded envelope",
          "KoL Con IV Pole",
          "dwarvish magazine",
          "dwarvish war helmet",
          "dwarvish war mattock",
          "dwarvish war kilt",
          "dwarvish punchcard",
          "small laminated card",
          "little laminated card",
          "notbig laminated card",
          "unlarge laminated card",
          "dwarvish document",
          "dwarvish paper",
          "dwarvish parchment",
          "overcharged El Vibrato power sphere",
          "Fly-By-Knight Heraldry form",
          "El Vibrato Megadrone",
          "purple glowstick",
          "sane hatrack",
          "hobo code binder",
          "gator skin",
          "gatorskin umbrella",
          "sewer nuggets",
          "sewer wad",
          "bottle of sewage schnapps",
          "bottle of Ooze-O",
          "C.H.U.M. chum",
          "unfortunate dumplings",
          "decaying goldfish liver",
          "oil of oiliness",
          "tattered paper crown",
          "vanilla-frosted king cake",
          "inflatable duck",
          "water wings",
          "foam noodle",
          "Kissin' Cousins",
          "Tales from the Fireside",
          "Blizzards I Have Died In",
          "Maxing, Relaxing",
          "Biddy Cracker's Old-Fashioned Cookbook",
          "Travels with Jerry",
          "Let Me Be!",
          "Asleep in the Cemetery",
          "Summer Nights",
          "Sensual Massage for Creeps",
          "Ol' Scratch's ol' britches",
          "Ol' Scratch's stovepipe hat",
          "Ol' Scratch's ash can",
          "pink plastic baby",
          "silver sausage",
          "Frosty's old silk hat",
          "Frosty's carrot",
          "Frosty's nailbat",
          "Oscus's pelt",
          "Wand of Oscus",
          "Oscus's dumpster waders",
          "Zombo's skullcap",
          "Zombo's shield",
          "Zombo's grievous greaves",
          "Chester's moustache",
          "Chester's bag of candy",
          "Chester's cutoffs",
          "Sp'n-Zor's Grimoire of &quot;Tasteful&quot; Gifts",
          "black candygram",
          "bag of Crotchety Pine saplings",
          "bag of Saccharine Maple saplings",
          "bag of Laughing Willow saplings",
          "handful of Crotchety Pine needles",
          "lump of Saccharine Maple sap",
          "handful of Laughing Willow bark",
          "crotchety pants",
          "Saccharine Maple pendant",
          "willowy bonnet",
          "flavored foot massage oil",
          "foam dart",
          "black-and-blue light",
          "Loudmouth Larry Lamprey",
          "cheap studded belt",
          "personal massager",
          "personalized coffee mug",
          "blue plasma ball",
          "stick-on eyebrow piercing",
          "delicious salad",
          "C.H.U.M. lantern",
          "C.H.U.M. knife",
          "Frosty's snowball sack",
          "quasi-ethereal macaroni fragments",
          "shimmering tendrils",
          "scintillating powder",
          "abandoned candy",
          "secret tropical island volcano lair map",
          "adorable seal larva",
          "untamable turtle",
          "macaroni duck",
          "friendly cheez blob",
          "unusual disco ball",
          "stray chihuahua",
          "pretty pink bow",
          "smiley-face sticker",
          "farfalle bow tie",
          "jalape&ntilde;o slices",
          "stick-on mini solar panels",
          "tiny sombrero",
          "Argarggagarg's fang",
          "Safari Jack's moustache",
          "Yakisoba's hat",
          "Heimandatz's heart",
          "Jocko Homo's head",
          "The Mariachi's guitar case",
          "sealskin drum",
          "washboard shield",
          "spaghetti-box banjo",
          "marinara jug",
          "makeshift castanets",
          "left-handed melodica",
          "epic wad",
          "lucky bottlecap",
          "corncob pipe",
          "Mr. Joe's bangles",
          "frayed rope belt",
          "packet of mayfly bait",
          "mayfly bait necklace",
          "Ol' Scratch's salad fork",
          "Frosty's frosty mug",
          "jar of fermented pickle juice",
          "voodoo snuff",
          "extra-greasy slider",
          "crumpled felt fedora",
          "battered old top-hat",
          "shapeless wide-brimmed hat",
          "mostly rat-hide leggings",
          "hobo dungarees",
          "old patched suit-pants",
          "hobo stogie",
          "rope with some soap on it",
          "dead guy's piece of double-sided tape",
          "dead guy's memento",
          "frozen banquet",
          "sharpened hubcap",
          "very large caltrop",
          "The Six-Pack of Pain",
          "hobo monkey",
          "tiny bindle",
          "bed of coals",
          "frigid air mattress",
          "filth-encrusted futon",
          "comfy coffin",
          "stained mattress",
          "dinged-up triangle",
          "Ralph IX cognac",
          "llama lama cria",
          "zen motorcycle",
          "llama lama gong",
          "banana-frosted king cake",
          "brown plastic baby",
          "plump juicy grub",
          "delicious shimmering moth",
          "delectable fire ant",
          "scrumptious ice ant",
          "delicious stinkbug",
          "yummy death watch beetle",
          "tasty louse",
          "mole mol&eacute;",
          "Morlock's Mark Bourbon",
          "Climate Colada",
          "digital underground potion",
          "interesting-looking twig",
          "glimmering roc feather",
          "glimmering phoenix feather",
          "glimmering penguin feather",
          "glimmering buzzard feather",
          "glimmering raven feather",
          "glimmering great tit feather",
          "house of twigs and spit",
          "The Ballad of Richie Thingfinder",
          "Benetton's Medley of Diversity",
          "Elron's Explosive Etude",
          "Chorale of Companionship",
          "Prelude of Precision",
          "Ol' Scratch's infernal pitchfork",
          "Ol' Scratch's stove door",
          "Ol' Scratch's manacles",
          "Chester's sunglasses",
          "Chester's muscle shirt",
          "Chester's Aquarius medallion",
          "Zombo's shoulder blade",
          "Zombo's skull ring",
          "Zombo's empty eye",
          "Frosty's arm",
          "Staff of the Deepest Freeze",
          "Frosty's iceball",
          "Oscus's garbage can lid",
          "Oscus's neverending soda",
          "Oscus's flypaper pants",
          "Hodgman's porkpie hat",
          "Hodgman's lobsterskin pants",
          "Hodgman's bow tie",
          "Hodgman's blanket",
          "jar of squeeze",
          "bowl of fishysoisse",
          "deadly lampshade",
          "concentrated garbage juice",
          "lewd playing card",
          "deck of lewd playing cards",
          "Hodgman's lucky sock",
          "Hodgman's varcolac paw",
          "Hodgman's almanac",
          "Hodgman's harmonica",
          "Hodgman's garbage sticker",
          "Hodgman's metal detector",
          "Hodgman's cane",
          "Hodgman's journal #1: The Lean Times",
          "Hodgman's journal #2: Entrepreneurythmics",
          "Hodgman's journal #3: Pumping Tin",
          "Hodgman's journal #4: View From The Big Top",
          "hobo fortress blueprints",
          "little box of fireworks",
          "sterno-flavored Hob-O",
          "frostbite-flavored Hob-O",
          "fry-oil-flavored Hob-O",
          "garbage-juice-flavored Hob-O",
          "strawberry-flavored Hob-O",
          "roll of Hob-Os",
          "Everlasting Deckswabber",
          "bindle of joy",
          "cotton candy cocoon",
          "cotton candy cordial",
          "spice melange",
          "spooky rattling cigar box",
          "big stirring stick",
          "Staff of the Teapot Tempest",
          "Staff of the Black Kettle",
          "Staff of the Well-Tempered Cauldron",
          "Rainbow's Gravity",
          "prismatic wad",
          "club of the five seasons",
          "rainbow crossbow",
          "black kitten",
          "webbed comic mask",
          "Junior Adventurer's kit",
          "groovy prism necklace",
          "six-rainbow shield",
          "rainbow bomb",
          "cotton candy cone",
          "cotton candy pinch",
          "cotton candy smidgen",
          "cotton candy skoshe",
          "cotton candy plug",
          "cotton candy pillow",
          "cotton candy bale",
          "trusty torch",
          "Junior Adventurer's merit badge",
          "STYX deodorant body spray",
          "white-label gin",
          "tin rations",
          "haiku challenge map",
          "terrible poem",
          "bottle of sake",
          "little round pebble",
          "Bash-&#332;s cereal",
          "haiku katana",
          "bargain flash powder",
          "blue plastic baby",
          "blueberry-frosted king cake",
          "little bitty bathysphere",
          "damp old boot",
          "Seasonal Beret",
          "Bash-&#332;s boxtop",
          "cranberry cordial",
          "blackberry polite",
          "plum lozenge",
          "pear lozenge",
          "peach lozenge",
          "balloon shield",
          "black spot",
          "uniclops egg",
          "passed-out psychedelic bear",
          "psychedelic bubble wand",
          "eye 'n' horn shampoo",
          "glittery mascara",
          "dull fish scale",
          "rough fish scale",
          "pristine fish scale",
          "beefy fish meat",
          "glistening fish meat",
          "slick fish meat",
          "fish scimitar",
          "fish stick",
          "fish bazooka",
          "sea salt crystal",
          "bazookafish bubble gum",
          "bottle of Pete's Sake",
          "invisible bag",
          "witch hat",
          "beholed bedsheet",
          "fancy canap&eacute;s",
          "thermos of brew",
          "giant glass of brandy",
          "French slippers",
          "LWA ring",
          "LARP membership card",
          "Scratch 'n' Sniff Sticker Tome",
          "scratch 'n' sniff sword",
          "scratch 'n' sniff unicorn sticker",
          "scratch 'n' sniff apple sticker",
          "scratch 'n' sniff UPC sticker",
          "scratch 'n' sniff wrestler sticker",
          "scratch 'n' sniff dragon sticker",
          "scratch 'n' sniff rock band sticker",
          "ganger bandana",
          "eel skin",
          "eelskin hat",
          "eelskin pants",
          "eelskin shield",
          "shark tooth",
          "shark tooth necklace",
          "shark jumper",
          "shark cartilage",
          "eel battery",
          "temporary teardrop tattoo",
          "scratch 'n' sniff crossbow",
          "mutant rattlesnake egg",
          "mutant fire ant egg",
          "mutant cactus bud",
          "mutant gila monster egg",
          "rattlesnake enrager",
          "ant antidepressant",
          "cactus monocle",
          "Jawmaster 2000&trade;",
          "plans for depleted Grimacite hammer",
          "plans for depleted Grimacite gravy boat",
          "plans for depleted Grimacite weightlifting belt",
          "plans for depleted Grimacite grappling hook",
          "plans for depleted Grimacite ninja mask",
          "plans for depleted Grimacite shinguards",
          "plans for depleted Grimacite astrolabe",
          "depleted Grimacite hammer",
          "depleted Grimacite gravy boat",
          "depleted Grimacite weightlifting belt",
          "depleted Grimacite grappling hook",
          "depleted Grimacite ninja mask",
          "depleted Grimacite shinguards",
          "depleted Grimacite astrolabe",
          "KoL Con Cinco Pi&ntilde;ata Bat",
          "propeller beanie",
          "straw hat",
          "octopus's spade",
          "soggy seed packet",
          "glob of green slime",
          "sea carrot",
          "sea cucumber",
          "sea avocado",
          "sea lychee",
          "sea tangelo",
          "sea honeydew",
          "pressurized potion of puissance",
          "pressurized potion of perspicacity",
          "pressurized potion of pulchritude",
          "berry-infused sake",
          "citrus-infused sake",
          "melon-infused sake",
          "slab of sponge",
          "sponge helmet",
          "spongy shield",
          "square sponge pants",
          "flytrap pellet",
          "baby cuddlefish",
          "six-armed sweater",
          "slimy chest",
          "sand dollar",
          "flytrap bezoar",
          "bezoar ring",
          "candy cornucopia",
          "tiny ballet slippers",
          "wriggling flytrap pellet",
          "sushi-rolling mat",
          "white rice",
          "irradiated candy cane",
          "gingerbread mutant bugbear",
          "oozenog",
          "sugar plum",
          "sugar banana",
          "sugar lime",
          "sugar cherry",
          "Mer-kin hookspear",
          "Mer-kin takebag",
          "Mer-kin thingpouch",
          "Mer-kin killscroll",
          "Mer-kin fastjuice",
          "imitation crab crate",
          "imitation crab meat",
          "imitation crab zoea",
          "moist sailor's cap",
          "rusty speargun",
          "rusty compass",
          "rusty broken diving helmet",
          "rusty porthole",
          "rusty rivet",
          "bubblin' stone",
          "rusty diving helmet",
          "aerated diving helmet",
          "live nautical mine",
          "das boot",
          "imitation whetstone",
          "sea grease",
          "sturdy Crimbo crate",
          "battered Crimbo Crate",
          "twitching claw",
          "rigid carapace",
          "pulsing flesh",
          "unstable DNA",
          "The Spirit of Crimbo",
          "wriggling tentacle",
          "mass of wriggling tentacles",
          "pair of twitching claws",
          "gnashing teeth",
          "chitinous pod",
          "parasitic claw",
          "parasitic tentacles",
          "parasitic headgnawer",
          "parasitic strangleworm",
          "pair of ragged claws",
          "burrowgrub hive",
          "dusty Crimbo crate",
          "Gummi-DNA",
          "radioactive chew toy",
          "elven socks",
          "cheap elven gloves",
          "festive holiday hat",
          "patent leather shoes",
          "gray bow tie",
          "penguin thesaurus",
          "blob-shaped Crimbo cookie",
          "seaweed",
          "jamfish jam",
          "dragonfish caviar",
          "pufferfish spine",
          "depleted Grimacite kneecapping stick",
          "canteen of wine",
          "elven <i>limbos</i> gingerbread",
          "elven whittling knife",
          "magic dragonfish fry",
          "map to Madness Reef",
          "toast with jam",
          "miniature antlers",
          "elven moonshine",
          "knuckle sandwich",
          "psycho sweater",
          "fin-bit wax",
          "tiny plastic Mob Penguin",
          "tiny plastic mutant elf",
          "tiny plastic fat stack of cash",
          "tiny plastic strand of DNA",
          "tiny plastic chunk of depleted Grimacite",
          "container of Spooky Putty",
          "Spooky Putty mitre",
          "Spooky Putty leotard",
          "Spooky Putty ball",
          "Spooky Putty sheet",
          "Spooky Putty snake",
          "Spooky Putty monster",
          "glow-in-the-dark wristwatch",
          "glow-in-the-dark dart gun",
          "glow-in-the-dark stuffed burrowgrub",
          "Uncle Crimbo's Rations",
          "can of franks 'n' beans",
          "bottle of peppermint schnapps",
          "throbbing rage gland",
          "Mer-kin pressureglobe",
          "Mer-kin foodbucket",
          "diving muff",
          "salinated mint julep",
          "ink bladder",
          "glowing esca",
          "bubbling tempura batter",
          "globe of Deep Sauce",
          "map to the Marinara Trench",
          "tempura carrot",
          "tempura cucumber",
          "tempura avocado",
          "sea broccoli",
          "sea cauliflower",
          "tempura broccoli",
          "tempura cauliflower",
          "sea blueberry",
          "sea persimmon",
          "pressurized potion of perception",
          "pressurized potion of proficiency",
          "Mer-kin digpick",
          "anemone nematocyst",
          "high-pressure seltzer bottle",
          "velcro ore",
          "teflon ore",
          "vinyl ore",
          "map to Anemone Mine",
          "marine aquamarine",
          "rusty valve wheel",
          "waterlogged bootstraps",
          "velcro broadsword",
          "velcro paddle ball",
          "velcro shield",
          "velcro boots",
          "non-stick pugil stick",
          "teflon spatula",
          "teflon shield",
          "teflon swim fins",
          "7-inch discus",
          "PVC staff",
          "vinyl shield",
          "vinyl boots",
          "decaying wooden oar",
          "giant fishhook",
          "rusty old lantern",
          "decaying wooden pole",
          "decaying wooden paddle",
          "tarnished metal ring",
          "tarnished metal rod",
          "brittle plastic handle",
          "foggy glass globe",
          "possessed tomato",
          "Nardz energy beverage",
          "pile of gold coins",
          "hand grenegg",
          "caret",
          "glass gnoll eye",
          "cheap cigar butt",
          "manly bloomers",
          "Colon Annihilation Hot Sauce",
          "fat wallet",
          "enchanted handwarmer",
          "lucky lighter",
          "packet of beer nuts",
          "Boozehounds Anonymous token",
          "handful of bees",
          "spectral jelly",
          "jellyfish gel",
          "unstable quark",
          "software glitch",
          "fumble formula",
          "vampire pearl",
          "mother's secret recipe",
          "concoction of clumsiness",
          "vampire pearl earring",
          "white chocolate chip brownies",
          "Libram of Love Songs",
          "love song of vague ambiguity",
          "love song of smoldering passion",
          "love song of icy revenge",
          "love song of sugary cuteness",
          "love song of disturbing obsession",
          "love song of naughty innuendo",
          "breath mint",
          "vampire pearl ring",
          "vampire pearl necklace",
          "slug of vodka",
          "slug of rum",
          "slug of shochu",
          "screwdiver",
          "dew yoana lei",
          "lychee chuhai",
          "salacious screwdiver",
          "dew yoana salacious lei",
          "salacious lychee chuhai",
          "Alewife&trade; Ale",
          "seaode",
          "map to the Dive Bar",
          "Mer-kin pinkslip",
          "pink pinkslip slip",
          "sea salt scrubs",
          "amber aviator shades",
          "hair of the fish",
          "nurse's hat",
          "blank prescription sheet",
          "bottle of melodramamine",
          "bottle of extra-strength melodramamine",
          "paranormal ricotta",
          "smoking talon",
          "vampire glitter",
          "wine-soaked bone chips",
          "crumbling rat skull",
          "twitching trigger finger",
          "Apathargic Bandersnatch",
          "aquaviolet jub-jub bird",
          "crimsilion jub-jub bird",
          "charpuce jub-jub bird",
          "Mer-kin roundshield",
          "Mer-kin breastplate",
          "Mer-kin sneakmask",
          "Mer-kin prayerbeads",
          "Mer-kin hidepaint",
          "Mer-kin trailmap",
          "Mer-kin healscroll",
          "Mer-kin lockkey",
          "Mer-kin stashbox",
          "chocolate-frosted king cake",
          "red plastic baby",
          "midget clownfish",
          "half-height unicycle",
          "sea radish",
          "halibut",
          "eel sauce",
          "water-polo mitt",
          "glowing syringe",
          "fishy wand",
          "wad of cotton",
          "Grandma's Note",
          "Grandma's Fuchsia Yarn",
          "Grandma's Chartreuse Yarn",
          "golden plastic oyster egg",
          "Grandma's Map",
          "tempura radish",
          "water-polo cap",
          "Typical Tavern swill",
          "tropical swill",
          "fruity girl swill",
          "blended frozen swill",
          "tiny costume wardrobe",
          "Elvish sunglasses",
          "anniversary safety glass vest",
          "anniversary burlap belt",
          "anniversary balsa wood socks",
          "anniversary tiny latex mask",
          "anniversary pewter cape",
          "out-of-tune biwa",
          "dented harmonica",
          "magic whistle",
          "cheap plastic blowgun",
          "jungle drum",
          "hippy bongo",
          "knob bugle",
          "4-dimensional guitar",
          "boxing glove",
          "boxing glove on a spring",
          "half-sized guitar",
          "big bass drum",
          "pixel boomerang",
          "world's smallest violin",
          "ocarina of space",
          "a butt tuba",
          "bone flute",
          "infernal fife",
          "charming flute",
          "leaf of grass",
          "grass whistle",
          "plastic guitar",
          "finger cymbals",
          "black kettle drum",
          "double-barreled sling",
          "magilaser blastercannon",
          "frigid hanky&#363;",
          "ultimate ultimate frisbee",
          "stolen office supplies",
          "office-supply crossbow",
          "pocket theremin",
          "rave whistle",
          "hellseal hide",
          "shredded hellseal hide",
          "hellseal brain",
          "burst hellseal brain",
          "hellseal sinew",
          "torn hellseal sinew",
          "hellseal disguise",
          "fouet de tortue-dressage",
          "encoded cult documents",
          "cult memo",
          "decoded cult documents",
          "vial of red slime",
          "vial of yellow slime",
          "vial of blue slime",
          "vial of orange slime",
          "vial of green slime",
          "vial of violet slime",
          "vial of vermilion slime",
          "vial of amber slime",
          "vial of chartreuse slime",
          "vial of teal slime",
          "vial of indigo slime",
          "vial of purple slime",
          "vial of brown slime",
          "bottle of G&uuml;-Gone",
          "seal-blubber candle",
          "figurine of a wretched-looking seal",
          "figurine of a cute baby seal",
          "figurine of an armored seal",
          "figurine of an ancient seal",
          "figurine of a sleek seal",
          "figurine of a shadowy seal",
          "figurine of a stinking seal",
          "figurine of a charred seal",
          "figurine of a cold seal",
          "figurine of a slippery seal",
          "imbued seal-blubber candle",
          "blended frozen swill with a fly in it",
          "turtle wax",
          "turtle wax shield",
          "turtle wax helmet",
          "turtle wax greaves",
          "meat shield",
          "turtlemail bits",
          "turtlemail coif",
          "turtlemail breeches",
          "turtlemail hauberk",
          "hedgeturtle",
          "spiky turtle helmet",
          "spiky turtle shoulderpads",
          "spiky turtle shield",
          "turtling rod",
          "syncopated turtle",
          "grinning turtle",
          "tainted seal's blood",
          "severed flipper",
          "ingot of seal-iron",
          "bad-ass club",
          "powdered sealbone",
          "hyperinflated seal lung",
          "scrap of shadow",
          "fustulent seal grulch",
          "club of corruption",
          "corrupt club of corruption",
          "corrupt club of corrupt corruption",
          "evil-ass club",
          "nasty-ass club",
          "infernal toilet brush",
          "shadowy seal eye",
          "oyster egg balloon",
          "Clan VIP Lounge invitation",
          "Clan VIP Lounge key",
          "stuffed Meat",
          "stuffed treasure chest",
          "stuffed key",
          "stuffed Baron von Ratsworth",
          "stuffed monocle",
          "stuffed mink",
          "stuffed teddy butler",
          "stuffed martini",
          "stuffed crazy bastard sword",
          "stuffed tin of caviar",
          "bejeweled cufflinks",
          "garish pinky ring",
          "giant designer sunglasses",
          "fancy opera glasses",
          "designer handbag",
          "Clan pool table",
          "tiny cell phone",
          "cube of billiard chalk",
          "hot-ass club",
          "frigid-ass club",
          "creepy-ass club",
          "sizzling seal fat",
          "Abyssal ember",
          "frost-rimed seal hide",
          "frozen seal spine",
          "seal lube",
          "mannequin leg",
          "padded tortoise",
          "tortoboggan",
          "painted turtle",
          "painted shield",
          "sleeping wereturtle",
          "blue shell",
          "torquoise",
          "torquoise ring",
          "dueling turtle",
          "dueling banjo",
          "soup turtle",
          "samurai turtle",
          "samurai turtle helmet",
          "ancient turtle shell",
          "ancient turtle shell powder",
          "ancient turtle shell helmet",
          "slime-soaked hypophysis",
          "slime-soaked brain",
          "slime-soaked sweat gland",
          "security blankie",
          "big bundle of chamoix",
          "boxcar turtle",
          "dolphin whistle",
          "metrognome",
          "infant sandworm",
          "string of dingle balls",
          "agua de vida",
          "tortoboggan shield",
          "bottle of moontan lotion",
          "soup-chucks",
          "ballast turtle",
          "memory of some delicious amino acids",
          "memory of a C",
          "memory of an A",
          "memory of a G",
          "memory of a T",
          "memory of a CA base pair",
          "memory of a CG base pair",
          "memory of a CT base pair",
          "memory of an AG base pair",
          "memory of an AT base pair",
          "memory of a GT base pair",
          "squirming Slime larva",
          "rusty metal greaves",
          "undissolvable contact lenses",
          "rusty piece of rebar",
          "slime-covered shovel",
          "slime-covered necklace",
          "slime-covered speargun",
          "slime-covered compass",
          "slime-covered helmet",
          "slime-covered lantern",
          "slime-covered greaves",
          "slime-covered club",
          "memory of a grappling hook",
          "memory of a small stone block",
          "memory of a little stone block",
          "memory of half a stone circle",
          "memory of a stone half-circle",
          "memory of an iron key",
          "memory of a glowing crystal",
          "caustic slime nodule",
          "slimy sweetbreads",
          "slimy fermented bile bladder",
          "slimy alveolus",
          "memory of a cultist's robe",
          "pig-iron helm",
          "pig-iron shinguards",
          "pig-iron bracers",
          "wumpus hair",
          "wumpus-hair bolo",
          "wumpus-hair net",
          "wumpus-hair whip",
          "wumpus-hair wig",
          "wumpus-hair loincloth",
          "wumpus-hair sweater",
          "ring of teleportation",
          "glass of baboon milk",
          "banana milkshake",
          "White Hyborian",
          "goblin hunting spear",
          "goblin autoblowgun",
          "shiny tribal beads",
          "ancient stone fist",
          "ancient stone head",
          "Indigo Party Invitation",
          "Violet Hunt Invitation",
          "Blue Milk Club Card",
          "Mecha Mayhem Club Card",
          "'Smuggler Shot First' Button",
          "Spacefleet Communicator Badge",
          "Ruby Rod",
          "essence of heat",
          "essence of kink",
          "essence of cold",
          "essence of stench",
          "essence of fright",
          "essence of cute",
          "Supreme Being Glossary",
          "multi-pass",
          "villainous scythe",
          "baneful bandolier",
          "diabolical crossbow",
          "malevolent medallion",
          "corrosive cowl",
          "grisly shield",
          "corroded breeches",
          "pernicious cudgel",
          "cupcake-in-a-cup",
          "pool of liquid metal",
          "protein paste",
          "cyber-mattock",
          "facehugging alien",
          "X-37 gun",
          "neurostim pill",
          "physiostim pill",
          "tiny slimy cyst",
          "small slimy cyst",
          "medium slimy cyst",
          "big slimy cyst",
          "green peawee marble",
          "brown crock marble",
          "red China marble",
          "lemonade marble",
          "bumblebee marble",
          "jet bennie marble",
          "beige clambroth marble",
          "steely marble",
          "beach ball marble",
          "black catseye marble",
          "big bumboozer marble",
          "chamoisole",
          "bitter pill",
          "monstrous monocle",
          "musty moccasins",
          "molten medallion",
          "brazen bracelet",
          "bitter bowtie",
          "bewitching boots",
          "secret from the future",
          "moist sack",
          "rickety old unicycle",
          "crusty hula hoop",
          "Coily&trade;",
          "old school flying disc",
          "lawn dart",
          "red wagon",
          "wad of slimy rags",
          "crown-shaped beanie",
          "hopping socks",
          "poodle skirt",
          "letterman's jacket",
          "hardened slime hat",
          "hardened slime pants",
          "hardened slime belt",
          "empty agua de vida bottle",
          "boot plant",
          "sham champagne",
          "tempura air",
          "pressurized potion of pneumaticity",
          "moveable feast",
          "Bag o' Tricks",
          "slime stack",
          "a rumpled paper strip",
          "a creased paper strip",
          "a folded paper strip",
          "a crinkled paper strip",
          "a crumpled paper strip",
          "a ragged paper strip",
          "a ripped paper strip",
          "funny paper hat",
          "floaty sand",
          "charged magnet",
          "floaty stone sphere",
          "quadroculars",
          "lint",
          "dubious peppermint",
          "Elvish delight",
          "rockfish stomach",
          "live lobster",
          "wok lobster",
          "floaty pebbles",
          "floaty gravel",
          "floaty rock",
          "rock lobster",
          "pebblebr&auml;u",
          "rocky road ice cream",
          "extra-strength rubber bands",
          "children of the candy corn",
          "Good 'n' Slimy",
          "Staff of the Soupbone",
          "Voluminous Radio Pants",
          "Voluminous Radio Hat",
          "Voluminous Radio Sneakers",
          "4-d camera",
          "shaking 4-d camera",
          "crystallized memory",
          "floaty rock helmet",
          "floaty rock pants",
          "floaty rock necklace",
          "spaghetti cult robe",
          "sugar sheet",
          "Tome of Sugar Shummoning",
          "sugar shotgun",
          "sugar shillelagh",
          "sugar shank",
          "sugar chapeau",
          "sugar shorts",
          "sugar shield",
          "slime convention swag bag",
          "slime convention flyers",
          "slime convention coupons",
          "slime convention pin",
          "slime convention t-shirt",
          "floaty inverse geode",
          "control crystal",
          "sugar shirt",
          "sugar shard",
          "rave visor",
          "baggy rave pants",
          "pacifier necklace",
          "sea cowbell",
          "sea leather",
          "sea lasso",
          "sea cowboy hat",
          "grouper fangirl",
          "gill rings",
          "urchin roe",
          "pet anemone",
          "Mer-kin cheatsheet",
          "Mer-kin wordquiz",
          "brand new key",
          "brass dorsal fin",
          "skate skates",
          "skate skin",
          "roller skate decoy",
          "mermaid's purse",
          "underwater slingshot",
          "skate blade",
          "spangly unitard",
          "collapsible baton",
          "groupie lipstick",
          "groupie bra",
          "groupie spangles",
          "skate board",
          "S.A.V.E. flyer",
          "yield shield",
          "map to the Skate Park",
          "squamous polyp",
          "unspeakable lozenges",
          "roller skate doll",
          "Star of Bravery",
          "hungover chauvinist pig",
          "perfectly ordinary frog",
          "amphibious tophat",
          "bottle of Cochon Noir",
          "ice skate decoy",
          "ice skate doll",
          "hacienda key",
          "silver pat&eacute; knife",
          "silver salt-shaker",
          "can of sterno",
          "silver cheese-slicer",
          "fancy beef jerky",
          "pipe wrench",
          "gun cleaning kit",
          "sleep mask",
          "sock garters",
          "mariachi toothpaste",
          "heavy leather-bound tome",
          "leather bookmark",
          "ivory cue ball",
          "decanter of fine Scotch",
          "expensive cigar",
          "miniature tophat",
          "fisherman's sack",
          "fish-oil smoke bomb",
          "vial of squid ink",
          "potion of fishy speed",
          "spooky bark",
          "Wolfman Nardz",
          "spooky sap",
          "petrified wood",
          "chocolate-covered scarab beetle",
          "mulled cider",
          "wolfman mask",
          "pumpkinhead mask",
          "mummy costume",
          "Ax of L'rose",
          "bark boxers",
          "bark beret",
          "bark bracelet",
          "Krakrox's Loincloth",
          "Galapagosian Cuisses",
          "Angelhair Culottes",
          "Newman's Own Trousers",
          "Volartta's bellbottoms",
          "Lederhosen of the Night",
          "ribbon candy",
          "Underworld acorn",
          "Underworld trunk",
          "Underworld truncheon",
          "Staff of the Woodfire",
          "Underworld flail",
          "Mer-kin cancerstick",
          "Mer-kin sawdust",
          "Mer-kin bunwig",
          "crappy Mer-kin mask",
          "crappy Mer-kin tailpiece",
          "Mer-kin gladiator mask",
          "Mer-kin scholar mask",
          "Mer-kin gladiator tailpiece",
          "Mer-kin scholar tailpiece",
          "Mer-kin headguard",
          "Mer-kin waistrope",
          "Mer-kin facecowl",
          "Mer-kin thighguard",
          "Mer-kin dodgeball",
          "Mer-kin dragnet",
          "Mer-kin switchblade",
          "crystal orb of spirit wrangling",
          "depleted uranium seal figurine",
          "Ass-Stompers of Violence",
          "Brand of Violence",
          "Novelty Belt Buckle of Violence",
          "Lens of Violence",
          "Pigsticker of Violence",
          "Jodhpurs of Violence",
          "Cold Stone of Hatred",
          "Girdle of Hatred",
          "Staff of Simmering Hatred",
          "Pantaloons of Hatred",
          "Fuzzy Slippers of Hatred",
          "Lens of Hatred",
          "Treads of Loathing",
          "Scepter of Loathing",
          "Belt of Loathing",
          "Goggles of Loathing",
          "Stick-Knife of Loathing",
          "Jeans of Loathing",
          "Annual Ascot",
          "Sledgehammer of the V&aelig;lkyr",
          "Flail of the Seven Aspects",
          "Wrath of the Capsaician Pastalords",
          "Windsor Pan of the Source",
          "Seeger's Unstoppable Banjo",
          "The Trickster's Trikitixa",
          "Claw of the Infernal Seal",
          "Garter of the Turtle Poacher",
          "Bandolier of the Spaghetti Elemental",
          "Gravyskin Belt of the Sauceblob",
          "Bling of the New Wave",
          "La Hebilla del Cintur&oacute;n de Lopez",
          "suspicious stocking",
          "bag of many confections",
          "candy kneecapping stick",
          "licorice garrote",
          "candy knuckles",
          "jawbruiser",
          "fancy chocolate car",
          "tiny plastic 11 Dealer",
          "tiny plastic Crimbo Casino",
          "tiny plastic stocking mimic",
          "tiny plastic Don Crimbo",
          "tiny plastic Crimbomination",
          "Piddles",
          "BitterSweetTarts",
          "Polka Pop",
          "Crimbuck",
          "Crimbo wreath",
          "string of Crimbo lights",
          "plastic Crimbo reindeer",
          "gingerbread house",
          "leftover Crimbo rations",
          "snow hat",
          "snow pants",
          "snow belly",
          "pile of loose snow",
          "Crimbough",
          "A Crimbo Carol, Ch. 1",
          "A Crimbo Carol, Ch. 2",
          "A Crimbo Carol, Ch. 3",
          "A Crimbo Carol, Ch. 4",
          "A Crimbo Carol, Ch. 5",
          "A Crimbo Carol, Ch. 6",
          "expired can of franks 'n' beans",
          "expired bottle of peppermint schnapps",
          "snow halo",
          "elf resistance button",
          "elven suicide capsule",
          "penguin focaccia bread",
          "herringcello",
          "elven cellocello",
          "wrench handle",
          "handful of headless bolts",
          "bottle of agitprop ink",
          "handful of wires",
          "chunk of cement",
          "grappling hook",
          "cardboard elf ear",
          "spiraling shape",
          "Crimbomination Contraption",
          "throwing wrench",
          "pair of bolt cutters",
          "poison pen",
          "speed limit shield",
          "live wire",
          "misfit dolly",
          "misfit hobby horse",
          "misfit teddy bear",
          "pocketwatch on a chain",
          "cement sandals",
          "night-vision goggles",
          "passable elf mask",
          "peanut brittle shield",
          "Red Rover BB gun",
          "red-and-green sweater",
          "Crimbo Candy Cookbook",
          "Crimbo peppermint bark",
          "Crimbo fudge",
          "Crimbo candied pecan",
          "Jack-in-the-box",
          "brass crank handle",
          "stinky cheese ball",
          "stinky cheese sword",
          "stinky cheese diaper",
          "stinky cheese wheel",
          "stinky cheese eye",
          "Staff of Queso Escusado",
          "foreign box",
          "The Art of Slapfighting",
          "Uncle Romulus",
          "A Beginner's Guide to Charming Snakes",
          "Zu Mannk&auml;se Dienen",
          "The Autobiography Of Dynamite Superman Jones",
          "Inigo's Incantation of Inspiration",
          "quantum taco",
          "Schr&ouml;dinger's thermos",
          "colorful plastic ball",
          "sealhide hood",
          "sealhide leggings",
          "sealhide cloak",
          "sealhide buckler",
          "sealhide whip",
          "sealhide moccasins",
          "sealhide gloves",
          "sealhide belt",
          "sealhide snare",
          "puzzling trophy",
          "sealhide seal doll",
          "black hymnal",
          "glowstick on a string",
          "candy necklace",
          "teddybear backpack",
          "NPZR chemistry set",
          "invisibility potion",
          "irresistibility potion",
          "irritability potion",
          "strange cube",
          "hellseal whisker",
          "hellseal claw",
          "guard turtle shell",
          "crowbar",
          "spaghetti cult rosary",
          "spaghetti cult mask",
          "guard turtle collar",
          "spangly mariachi pants",
          "spangly mariachi vest",
          "spangly sombrero",
          "Instant Karma",
          "antique painting of a landscape",
          "map to The Landscaper's Lair",
          "pointy red hat",
          "machetito",
          "lawnmower blade",
          "grass clippings",
          "The Landscaper's leafblower",
          "snowball",
          "snailmail bits",
          "snailmail coif",
          "snailmail breeches",
          "snailmail hauberk",
          "seal-brain elixir",
          "chocolate seal-clubbing club",
          "chocolate turtle totem",
          "chocolate pasta spoon",
          "chocolate saucepan",
          "chocolate disco ball",
          "chocolate stolen accordion",
          "Libram of BRICKOs",
          "BRICKO brick",
          "BRICKO eye brick",
          "BRICKO hat",
          "BRICKO pants",
          "BRICKO sword",
          "BRICKO ooze",
          "BRICKO bat",
          "BRICKO oyster",
          "BRICKO turtle",
          "BRICKO elephant",
          "BRICKO octopus",
          "BRICKO python",
          "BRICKO vacuum cleaner",
          "BRICKO airship",
          "BRICKO cathedral",
          "BRICKO gargantuchicken",
          "BRICKO pyramid",
          "BRICKO pearl",
          "BRICKO bulwark",
          "BRICKO trunk",
          "gilded BRICKO brick",
          "gilded BRICKO chalice",
          "black BRICKO brick",
          "green BRICKO brick",
          "broken BRICKO brick",
          "BRICKO reactor",
          "BRICKO egg",
          "extra-heavy BRICKO brick",
          "recording of The Ballad of Richie Thingfinder",
          "recording of Benetton's Medley of Diversity",
          "recording of Elron's Explosive Etude",
          "recording of Chorale of Companionship",
          "recording of Prelude of Precision",
          "recording of Donho's Bubbly Ballad",
          "recording of Inigo's Incantation of Inspiration",
          "heart of the volcano",
          "Northern pemmican",
          "puzzling ribbon",
          "Clan looking glass",
          "&quot;DRINK ME&quot; potion",
          "reflection of a map",
          "walrus ice cream",
          "beautiful soup",
          "eggman noodles",
          "Vial of <i>jus de larmes</i>",
          "Humpty Dumplings",
          "Lobster <i>qua</i> Grill",
          "missing wine",
          "yellow matter custard",
          "delicious comfit?",
          "ittah bittah hookah",
          "flamingo mallet",
          "croquet hedgehog",
          "Tiger-lily's milk",
          "eye of the Tiger-lily",
          "powdered wig",
          "powdered donut",
          "bucket of honey",
          "elephant stinger",
          "dragon snaps",
          "snapdragon pistil",
          "puff of smoke",
          "rook cookie",
          "bishop cookie",
          "knight cookie",
          "king cookie",
          "queen cookie",
          "fairy-worn boots",
          "insane tophat",
          "helm of the white knight",
          "wristwatch of the white knight",
          "trousers of the white knight",
          "fancy tophat",
          "fancy black tie",
          "fancy tuxedo pants",
          "stuffed porpoise",
          "stuffed pocketwatch",
          "stuffed bandersnatch",
          "stuffed caterpillar",
          "stuffed walrus",
          "stuffed carpenter",
          "stuffed dodo",
          "detour shield",
          "left parenthesis",
          "lowercase a",
          "percent sign",
          "left bracket",
          "right parenthesis",
          "dollar sign",
          "equal sign",
          "antique record album",
          "map to Professor Jacking's laboratory",
          "can of depilatory cream",
          "hair of the calf",
          "world's most unappetizing beverage",
          "slippery when wet shield",
          "raisin",
          "tiny fly glasses",
          "flyest of shirts",
          "a dance upon the palate",
          "tiny frozen prehistoric meteorite jawbreaker",
          "Crazyleg's razor",
          "squirmy violent party snack",
          "can-you-dig-it?",
          "The Legendary Beat",
          "panicked kernel",
          "bugged beanie",
          "bugged balaclava",
          "bugged b&Atilde;&para;n&plusmn;&Atilde;&copy;t",
          "meat st&permil;&iquest;bing club",
          "Knob G&Atilde;&para;blin l&Atilde;&sup2;ve potion",
          "old school Mafi<i>a kni</i>cke&frac12;&aelig;",
          "T&Icirc;&curren;&loz;lisman of Bai&oslash;&Dagger;",
          "fat bottom quark",
          "big glob of skin",
          "six tiny wedges of goat cheese",
          "collection of tiny spooky objects",
          "boulder",
          "tiny goth giant",
          "brown pixel",
          "pixel whip",
          "pixel chain whip",
          "pixel morning star",
          "pixel orb",
          "pixellated moneybag",
          "pixel cross",
          "pixel holy water",
          "map to Vanya's Castle",
          "antique 8-Bit Power magazine",
          "pixel stopwatch",
          "antique bottle opener",
          "map to the Kegger in the Woods",
          "plastic cup of beer",
          "orquette's phone number",
          "bronze handcuffs",
          "silver keg",
          "bottle of Goldschn&ouml;ckered",
          "sun-dried tofu",
          "soyburger juice",
          "respected companion biscuit",
          "essential tofu",
          "essential soy",
          "essential cameraderie",
          "antique souvenir drawing",
          "map to the Magic Commune",
          "Crown of Thrones",
          "Cinco Mayo Lager",
          "Underworld sapling",
          "miniature pruning shears",
          "plastic cup of flat beer",
          "glowing frisbee",
          "portable motorcycle",
          "Game Grid token",
          "Game Grid ticket",
          "chocolate-covered caviar",
          "pawn cookie",
          "coffee pixie stick",
          "superduperball",
          "finger cuffs",
          "little parachute guy",
          "plastic spider ring",
          "cheap plastic kazoo",
          "inflatable baseball bat",
          "googly-star hat",
          "googly-ball hat",
          "googly-heart hat",
          "super-sweet boom box",
          "Game Grid valued membership card",
          "sinister demon mask",
          "streetfighting champion's belt",
          "Space Trip safety headphones",
          "LARP carp",
          "KoL Con Six Pack",
          "Gregarious Gregorian Smock",
          "rxr shield",
          "Juju Mojo Mask",
          "space trooper helmet",
          "Meteoid ice beam",
          "Dungeon Fist gauntlet",
          "Schmalz's First Prize Beer",
          "chiptune guitar",
          "fixed-gear bicycle",
          "ironic moustache",
          "ironic knit cap",
          "ironic oversized sunglasses",
          "ironic battle spoon",
          "ironic jogging shorts",
          "mole skin notebook",
          "antique pair of blue jeans",
          "map to Ellsbury's Claim",
          "blackberry galoshes",
          "trout fang",
          "poisonous caviar",
          "wet venom duct",
          "Ellsbury's journal",
          "Ellsbury's skull",
          "hot plate",
          "imp unity ring",
          "Victor, the Insult Comic Hellhound Puppet",
          "observational glasses",
          "hilarious comedy prop",
          "beer-scented teddy bear",
          "booze-soaked cherry",
          "comfy pillow",
          "giant marshmallow",
          "sponge cake",
          "gin-soaked blotter paper",
          "tree-holed coin",
          "unearthed volcanic meteoroid",
          "unearthed potsherd",
          "volcanic ash",
          "smoked potsherd",
          "pottery shield",
          "pottery hat",
          "pottery training pants",
          "pottery club",
          "pottery yo-yo",
          "pottery barn owl figurine",
          "fossilized bat skull",
          "fossilized serpent skull",
          "fossilized baboon skull",
          "fossilized wyrm skull",
          "fossilized wing",
          "fossilized limb",
          "fossilized torso",
          "fossilized spine",
          "affordable teak perch",
          "Greatest American Pants",
          "fossilized necklace",
          "imp air",
          "bus pass",
          "fossilized spike",
          "waterlogged crate",
          "archaeologing shovel",
          "red-hot medallion",
          "fossilized demon skull",
          "fossilized spider skull",
          "sinister ancient tablet",
          "E-Z Cook&trade; oven",
          "My First Shaker&trade;",
          "hippo tutu",
          "immense ballet shoes",
          "old sweatpants",
          "GameInformPowerDailyPro subscription card",
          "popsicle stick",
          "lemon popsicle",
          "orange popsicle",
          "strawberry popsicle",
          "liver popsicle",
          "mariachi hat",
          "Hollandaise helmet",
          "organ grinder",
          "microwave stogie",
          "liver and let pie",
          "badass pie",
          "shoo-fish pie",
          "piping organ pie",
          "igloo pie",
          "stomach turnover",
          "dead lights pie",
          "throbbing organ pie",
          "stop shield",
          "nest egg",
          "sleeping piano cat",
          "kitty sheet music",
          "rehearsing dramatic hedgehog",
          "tiny prop sword",
          "tangle of rat tails",
          "beer-soaked mop",
          "day-old beer",
          "plain old beer",
          "overpriced &quot;imported&quot; beer",
          "smiling rat",
          "rat tooth polish",
          "bone chips",
          "PlexiPips",
          "Wax Flask",
          "Pain Dip",
          "bone meal",
          "bone aperitif",
          "bonerang",
          "bone and arrows",
          "boning knife",
          "bone crusher",
          "bone spurs",
          "bonedanna",
          "boneana hammock",
          "bag of bones",
          "Stabonic scroll",
          "candy skeleton",
          "Grumpy Bumpkin's Pumpkin Seed Catalog",
          "packet of pumpkin seeds",
          "pumpkin",
          "huge pumpkin",
          "pumpkin pie",
          "pumpkin beer",
          "pumpkin juice",
          "pumpkin bomb",
          "shin gourds",
          "Staff of the November Jack-O-Lantern",
          "pumpkin carriage",
          "Desert Bus pass",
          "ginormous pumpkin",
          "Essence of Annoyance",
          "Unmotivator: Crashed Orca",
          "Unmotivator: Success Warrior",
          "Unmotivator: Crashed Meat Car",
          "Holiday Hal's Happy-Time Fun Book!",
          "Holiday Fun!",
          "Antagonistic Snowman Kit",
          "CRIMBCOIDS mints",
          "can of CRIMBCOLA",
          "CRIMBCOLOAF",
          "circular CRIMBCOOKIE",
          "tiny plastic CRIMBCO HQ",
          "tiny plastic fax machine",
          "tiny plastic hobo elf",
          "tiny plastic Mr. Mination",
          "tiny plastic Best Game Ever",
          "hibernating robot reindeer",
          "S.L.E.I.G.H.B.E.L.L.S.",
          "robot reindeer protocol P.R.A.N.C.E.R.",
          "robot reindeer protocol D.A.S.H.E.R.",
          "robot reindeer protocol D.O.N.N.E.R.",
          "robot reindeer protocol V.I.X.E.N.",
          "robot reindeer protocol C.U.P.I.D.",
          "robot reindeer protocol D.A.N.C.E.R.",
          "robot reindeer protocol C.O.M.E.T.",
          "robot reindeer protocol B.L.I.T.Z.E.N.",
          "robot reindeer protocol R.U.D.O.L.P.H.",
          "robot reindeer protocol O.L.I.V.E.",
          "triangular CRIMBCOOKIE",
          "square CRIMBCOOKIE",
          "bindlestocking",
          "sleeping stocking",
          "Tales of a Kansas Toymaker",
          "The Joy of Wassailing",
          "Uncle Hobo's stocking cap",
          "Uncle Hobo's epic beard",
          "Uncle Hobo's gift baggy pants",
          "Uncle Hobo's fingerless tinsel gloves",
          "Uncle Hobo's highest bough",
          "Uncle Hobo's belt",
          "chocolate cigar",
          "gift-a-pult",
          "holly-flavored Hob-O",
          "CRIMBCO scrip",
          "Toot Oriole care package",
          "paperclip",
          "bottle of Blank-Out",
          "CRIMBCO lanyard",
          "CRIMBCO Employee Handbook (chapter 1)",
          "CRIMBCO Employee Handbook (chapter 2)",
          "CRIMBCO Employee Handbook (chapter 3)",
          "CRIMBCO Employee Handbook (chapter 4)",
          "CRIMBCO Employee Handbook (chapter 5)",
          "portable photocopier",
          "deluxe fax machine",
          "Workytime Tea",
          "paperclip sproinger",
          "paperclip-on tie",
          "paperclip pants",
          "paperclip turban",
          "paperclip cape",
          "glob of Blank-Out",
          "photocopied monster",
          "gaudy key",
          "BGE merchandise order form",
          "chocolate bath ball",
          "bacon bath ball",
          "incense bath ball",
          "myrrh-soaked, chocolate-covered bacon bath ball",
          "CRIMBCO mug",
          "CRIMBCO wine",
          "Dickory Farms Gift Basket",
          "toe jam",
          "toe jam toast",
          "traffic jam",
          "traffic jam toast",
          "space jam",
          "space jam toast",
          "motivational poster",
          "sack lunch",
          "bath ball gift set",
          "slow jam collection",
          "BGE shotglass",
          "festive sausage",
          "holiday cheese log",
          "holiday log",
          "BGE 'ferocious fruit' shirt",
          "BGE 'cuddly critter' shirt",
          "BGE pocket calendar",
          "BGE temporary tattoo",
          "BGE tiny plastic toy",
          "stapler bear",
          "adhesive tape dolly",
          "scissor duck",
          "coal paperweight",
          "jingle bell",
          "Seven Loco",
          "Loathing Legion knife",
          "Loathing Legion many-purpose hook",
          "Loathing Legion moondial",
          "Loathing Legion necktie",
          "Loathing Legion electric knife",
          "Loathing Legion corkscrew",
          "Loathing Legion can opener",
          "Loathing Legion chainsaw",
          "Loathing Legion rollerblades",
          "Loathing Legion flamethrower",
          "Loathing Legion tattoo needle",
          "Loathing Legion defibrillator",
          "Loathing Legion double prism",
          "Loathing Legion tape measure",
          "Loathing Legion kitchen sink",
          "Loathing Legion abacus",
          "Loathing Legion helicopter",
          "Loathing Legion pizza stone",
          "Loathing Legion universal screwdriver",
          "Loathing Legion jackhammer",
          "Loathing Legion hammer",
          "Uncle Crimbo's Sack",
          "Folder Holder",
          "a cute angel",
          "quake of arrows",
          "time's arrow",
          "arrowgram",
          "Knob jelly donut",
          "Knob cake",
          "Knob cake pan",
          "Knob batter",
          "Knob frosting",
          "unfrosted Knob cake",
          "Cobb's Knob Menagerie key",
          "GOTO",
          "weremoose spit",
          "abominable blubber",
          "flimsy clipboard",
          "baggie of powdered sugar",
          "whalebone corset",
          "oven mitts",
          "overcookie",
          "philosopher's scone",
          "half-baked potion",
          "Knob Goblin deluxe scimitar",
          "Knob nuts",
          "Cobb's Knob Wurstbrau",
          "Subject 37 file",
          "mysterious silver lapel pin",
          "solid state loom",
          "Evilometer",
          "Sorcerers of the Shore Grimoire",
          "Pack of Alice's Army Cards",
          "Alice's Army Swordsman",
          "Alice's Army Spearsman",
          "Alice's Army Halberder",
          "Alice's Army Guard",
          "Alice's Army Wallman",
          "Alice's Army Ninja",
          "Alice's Army Alchemist",
          "Alice's Army Page",
          "Alice's Army Shieldmaiden",
          "Alice's Army Mad Bomber",
          "Alice's Army Nurse",
          "Alice's Army Hammerman",
          "Alice's Army Bowman",
          "Alice's Army Lanceman",
          "Alice's Army Horseman",
          "Alice's Army Coward",
          "Alice's Army Cleric",
          "Alice's Army Sniper",
          "Alice's Army Dervish",
          "Alice's Army Martyr",
          "Pack of Alice's Army Foil Cards",
          "Alice's Army Foil Swordsman",
          "Alice's Army Foil Spearsman",
          "Alice's Army Foil Halberder",
          "Alice's Army Foil Guard",
          "Alice's Army Foil Wallman",
          "Alice's Army Foil Ninja",
          "Alice's Army Foil Alchemist",
          "Alice's Army Foil Page",
          "Alice's Army Foil Shieldmaiden",
          "Alice's Army Foil Mad Bomber",
          "Alice's Army Foil Nurse",
          "Alice's Army Foil Hammerman",
          "Alice's Army Foil Bowman",
          "Alice's Army Foil Lanceman",
          "Alice's Army Foil Horseman",
          "Alice's Army Foil Coward",
          "Alice's Army Foil Cleric",
          "Alice's Army Foil Sniper",
          "Alice's Army Foil Dervish",
          "Alice's Army Foil Martyr",
          "Single Alice's Army Foil",
          "card sleeve",
          "evil eye",
          "Alice's Army Foil tattoo",
          "Ye Wizard's Shack snack voucher",
          "wasabi pocky",
          "tobiko pocky",
          "natto pocky",
          "wasabi-infused sake",
          "tobiko-infused sake",
          "natto-infused sake",
          "wasabi marble soda",
          "tobiko marble soda",
          "natto marble soda",
          "Alice's Army booster box",
          "elderly jawbreaker",
          "marshmallow flamb&eacute;",
          "cranberry schnapps",
          "breaded beer",
          "soy cordial",
          "astral bludgeon",
          "astral shield",
          "astral chapeau",
          "astral bracer",
          "astral longbow",
          "astral shorts",
          "astral mace",
          "astral trousers",
          "astral ring",
          "astral statuette",
          "astral pistol",
          "astral mask",
          "astral pet sweater",
          "astral shirt",
          "astral belt",
          "astral hot dog",
          "astral pilsner",
          "astral hot dog dinner",
          "astral six-pack",
          "Clan shower",
          "shard of double-ice",
          "double-ice cap",
          "double-ice box",
          "double-ice britches",
          "handful of numbers",
          "Lars the Cyberian",
          "intriguing puzzle box",
          "obnoxious riddle",
          "best joke ever",
          "Atomic Comic",
          "Red Pill",
          "Skullhead's Screw",
          "mysterious present",
          "boxing-glove-in-a-box",
          "creepy voodoo doll",
          "the finger",
          "Salsa de las Epocas",
          "spaghetti con calaveras",
          "s'more gun",
          "popcorn",
          "chaos popcorn",
          "tiny black hole",
          "innuendo",
          "s'more",
          "giant diamond ring",
          "Russian Ice",
          "giant clay ashtray",
          "orange leather lanyard",
          "monster pants",
          "box of Pok&euml;mann band-aids",
          "Pok&euml;mann band-aid",
          "Van der Graaf helmet",
          "electric crutch",
          "shock belt",
          "Okee-Dokee soda",
          "rubber band gun",
          "pin-stripe slacks",
          "sticky gloves",
          "correction fluid",
          "Pok&euml;mann figurine: Porkachu",
          "Pok&euml;mann figurine: Magikrap",
          "Pok&euml;mann figurine: Vegemite",
          "Pok&euml;mann figurine: Vermouth",
          "Pok&euml;mann figurine: Smugleaf",
          "Pok&euml;mann figurine: Twitter",
          "Pok&euml;mann figurine: Bloodkip",
          "Pok&euml;mann figurine: Hoboking",
          "Pok&euml;mann figurine: Duck",
          "Pok&euml;mann figurine: Nothing",
          "Pok&euml;mann figurine: Kagosan",
          "Pok&euml;mann figurine: Galumpagump",
          "Pok&euml;mann figurine: Shoggoth",
          "Pok&euml;mann figurine: Frank",
          "Pok&euml;mann figurine: Moog",
          "willyweed",
          "Nuclear Blastball",
          "fish juice box",
          "paint bomb",
          "hideous egg",
          "Jeppson's Malort",
          "fistful of ashes",
          "stress ball",
          "Li'l Businessman Kit",
          "Ultracolor&trade; shirt",
          "My Own Pen Pal kit",
          "packet of orchid seeds",
          "stomp box",
          "rusty hedge trimmers",
          "A. W. O. L. commendation",
          "reconstituted crow",
          "bird brain",
          "busted wings",
          "Massive Manual of Marauder Mockery",
          "Admiral's hat",
          "leather aviator's cap",
          "mirrored aviator shades",
          "Field Guide to Skeletal Anatomy",
          "Notes from the Elfpocalypse, Chapter I",
          "Notes from the Elfpocalypse, Chapter II",
          "Notes from the Elfpocalypse, Chapter III",
          "Notes from the Elfpocalypse, Chapter IV",
          "Notes from the Elfpocalypse, Chapter V",
          "Notes from the Elfpocalypse, Chapter VI",
          "Ultrasoldier Serum",
          "elven hardtack",
          "elven squeeze",
          "lunar isotope",
          "E.M.U. joystick",
          "E.M.U. rocket thrusters",
          "E.M.U. helmet",
          "E.M.U. harness",
          "[5139]carton of astral energy drinks",
          "[5140]astral energy drink",
          "Thwaitgold bee statuette",
          "moon unit",
          "E.M.U. Unit",
          "handful of honey",
          "honeypot",
          "wild honey pie",
          "honey mead",
          "honey dipper",
          "honeybritches",
          "honeycap",
          "Moonthril Circlet",
          "Moonthril Greaves",
          "Moonthril Flamberge",
          "Moonthril Longbow",
          "Moonthril Cuirass",
          "plush alielf",
          "Comet Drop",
          "plush dogcat",
          "plush hamsterpus",
          "plush ferrelf",
          "plush alien hamsterpus",
          "plush mutated alielf",
          "plush mutated alielephant",
          "mysterious chest",
          "spooky little girl",
          "tiny top hat and cane",
          "synthetic dog hair pill",
          "distention pill",
          "elven medi-pack",
          "transporter transponder",
          "Map to Safety Shelter Ronald Prime",
          "Map to Safety Shelter Grimace Prime",
          "elven magi-pack",
          "Saison du Lune",
          "Moonthril Schnapps",
          "Wrecked Generator",
          "Spaghetti with Moonballs",
          "Crepes a la Lune",
          "Moon Pie",
          "Comet Pop",
          "Flan in the Moon",
          "1/6th Pound Cake",
          "Mint-in-box Moonthril Circlet",
          "Mint-in-box Moonthril Greaves",
          "Mint-in-box Moonthril Cuirass",
          "Mint-in-box Moonthril Flamberge",
          "Mint-in-box Moonthril Longbow",
          "honey stick",
          "double-ice gum",
          "Operation Patriot Shield",
          "squirming egg sac",
          "corrupted data",
          "11-inch knob sausage",
          "exorcised sandwich",
          "Banfoy's Boutique Order Form",
          "Great S-Cape",
          "Marvelous Unitard",
          "gooey paste",
          "beastly paste",
          "oily paste",
          "ectoplasmic paste",
          "greasy paste",
          "bug paste",
          "hippy paste",
          "orc paste",
          "demonic paste",
          "indescribably horrible paste",
          "fishy paste",
          "goblin paste",
          "pirate paste",
          "chlorophyll paste",
          "strange paste",
          "Mer-kin paste",
          "slimy paste",
          "penguin paste",
          "elemental paste",
          "cosmic paste",
          "hobo paste",
          "Crimbo paste",
          "Teachings of the Fist",
          "fat loot token",
          "Thwaitgold grasshopper statuette",
          "Tome of Clip Art",
          "Ur-Donut",
          "The Bomb",
          "box of Familiar Jacks",
          "bucket of wine",
          "ultrafondue",
          "unbearable light",
          "oversized snowflake",
          "crystal skull",
          "borrowed time",
          "box of hammers",
          "shining halo",
          "furry halo",
          "frosty halo",
          "time halo",
          "Lumineux Limnio",
          "Morto Moreto",
          "Temps Tempranillo",
          "Bordeaux Marteaux",
          "Fromage Pinotage",
          "Beignet Milgranet",
          "Muschat",
          "cool jelly donut",
          "shrapnel jelly donut",
          "occult jelly donut",
          "thyme jelly donut",
          "frozen danish",
          "smashed danish",
          "forbidden danish",
          "cool cat claw",
          "blunt cat claw",
          "shadowy cat claw",
          "cheezburger",
          "toasted brie",
          "potion of the field gar",
          "too legit potion",
          "Bright Water",
          "cold-filtered water",
          "graveyard snowglobe",
          "cool cat elixir",
          "potion of the captain's hammer",
          "potion of X-ray vision",
          "potion of the litterbox",
          "potion of animal rage",
          "potion of punctual companionship",
          "holy bomb, batman",
          "bobcat grenade",
          "chocolate frosted sugar bomb",
          "broken glass grenade",
          "noxious gas grenade",
          "skull with a fuse in it",
          "boozebomb",
          "hammerus",
          "blunt icepick",
          "fluorescent lightbulb",
          "blammer",
          "clock-cleaning hammer",
          "4:20 bomb",
          "broken clock",
          "dethklok",
          "glacial clock",
          "Gygaxian Libram",
          "d4",
          "d6",
          "d8",
          "d10",
          "d12",
          "d20",
          "generic healing potion",
          "generic mana potion",
          "generic restorative potion",
          "kobold treasure hoard",
          "newborn kobold",
          "slightly thicker filthy rags",
          "dungeon dragon chest",
          "phish stick",
          "plastic vampire fangs",
          "Interview With You (a Vampire)",
          "Make-Your-Own-Vampire-Fangs kit",
          "your own black heart",
          "Sword of the Brouhaha Prince",
          "Chalice of the Malkovich Prince",
          "Sceptre of the Torremolinos Prince",
          "Medallion of the Ventrilo Prince",
          "Haunted Sorority House staff guide",
          "ghost trap",
          "chainsaw chain",
          "silver shotgun shell",
          "funhouse mirror",
          "ghostly body paint",
          "necrotizing body spray",
          "bite-me-red lipstick",
          "whisker pencil",
          "press-on ribs",
          "Rattlin' Chains",
          "Gummy Brains",
          "Blood 'n' Plenty",
          "Lobos Mints",
          "Sweet Sword",
          "Ecto-Cooler",
          "Bartles and BRAAAINS wine cooler",
          "Blood Light",
          "Silver Bullet beer",
          "Bone's Farm &quot;wine&quot;",
          "ghost protocol",
          "sorority brain",
          "Nightstalker perfume",
          "drum of pomade",
          "throwing bone",
          "extra-see-thru nightie",
          "BRAINS shorts",
          "Mesmereyes&trade; contact lenses",
          "cursed scrunchie",
          "extremely skinny jeans",
          "The Necbromancer's Hat",
          "The Necbromancer's Stein",
          "The Necbromancer's Shorts",
          "The Necbromancer's Wizard Staff",
          "The Necbronomicon",
          "The Cooler Out of Space",
          "The Necbronomicon (used)",
          "sorority girl's box",
          "Necbro wafers",
          "death blossom",
          "A Crimbo Carol, Ch. 1 (used)",
          "A Crimbo Carol, Ch. 2 (used)",
          "A Crimbo Carol, Ch. 3 (used)",
          "A Crimbo Carol, Ch. 4 (used)",
          "A Crimbo Carol, Ch. 5 (used)",
          "A Crimbo Carol, Ch. 6 (used)",
          "jar of oil",
          "The Art of Slapfighting (used)",
          "Uncle Romulus (used)",
          "A Beginner's Guide to Charming Snakes (used)",
          "Zu Mannk&auml;se Dienen (used)",
          "Autobiography Of Dynamite Superman Jones (used)",
          "Inigo's Incantation of Inspiration (crumpled)",
          "Tales of a Kansas Toymaker (used)",
          "The Joy of Wassailing (used)",
          "CRIMBCO Employee Handbook (chapter 1) (used)",
          "CRIMBCO Employee Handbook (chapter 2) (used)",
          "CRIMBCO Employee Handbook (chapter 3) (used)",
          "CRIMBCO Employee Handbook (chapter 4) (used)",
          "CRIMBCO Employee Handbook (chapter 5) (used)",
          "Field Guide to Skeletal Anatomy (shredded)",
          "Ellsbury's journal (used)",
          "KoL Con 8-Bit power bracelet",
          "miniature boiler",
          "stuffed-shirt scarecrow",
          "tiny plastic trollipop",
          "tiny plastic Fudge Wizard",
          "tiny plastic abominable fudgeman",
          "tiny plastic colollilossus",
          "tiny plastic Big Candy",
          "The Groose in the Hoose",
          "spruce juice",
          "groose grease",
          "lollipop stick",
          "bananagate",
          "pearidot",
          "tourmalime",
          "kumquartz",
          "strawberyl",
          "ridiculous belt",
          "ridiculous earring",
          "ridiculous sunglasses",
          "ridiculous sandwich",
          "ridiculous cocktail",
          "zombie monkey necklace",
          "Thwaitgold butterfly statuette",
          "scrap of sticky paper",
          "sandpaper",
          "peppermint sprout",
          "peppermint twist",
          "peppermint patty",
          "peppermint crook",
          "peppermint rhino baby",
          "candy cane candygram",
          "peppermint parasol",
          "giant candy cane",
          "Mint Salton Pepper's Peppermint Seed Catalog",
          "Peppermint Pip Packet",
          "cane-mail shirt",
          "cane-mail pants",
          "Vodka Matryoshka",
          "Gin Mint",
          "Tequiz Navidad",
          "Mint Yulep",
          "Crimbojito",
          "Sangria de Menthe",
          "candycaine powder",
          "licorice boa",
          "licorice root",
          "banana supersucker",
          "pear supersucker",
          "lime supersucker",
          "kumquat supersucker",
          "strawberry supersucker",
          "bananarama bangle",
          "pair of pearidot earrings",
          "tourmalime tourniquet",
          "kumquartz ring",
          "strawberyl necklace",
          "sucker bucket",
          "sucker hakama",
          "sucker kabuto",
          "sucker tachi",
          "sucker scaffold",
          "cinnamon troll doll",
          "grape troll doll",
          "blue raspberry troll doll",
          "DNOTC Box",
          "fudgecule",
          "fudge lily",
          "superheated fudge",
          "fluid of fudge-finding",
          "frigid fudgepuck",
          "fudgesicle",
          "wand of fudge control",
          "The Kloop in the Coop",
          "miniscule beatbox",
          "devilish folio",
          "clumsiness bark",
          "jar full of wind",
          "dangerous jerkcicle",
          "furious stone",
          "vanity stone",
          "lecherous stone",
          "jealousy stone",
          "avarice stone",
          "gluttonous stone",
          "red gummi ingot",
          "green gummi ingot",
          "yellow gummi ingot",
          "Fudgie Roll",
          "fudge bunny",
          "fudge spork",
          "fudgecycle",
          "fudge cube",
          "blank fudge mold",
          "Libram of Resolutions",
          "resolution: be wealthier",
          "resolution: be happier",
          "resolution: be stronger",
          "resolution: be smarter",
          "resolution: be sexier",
          "resolution: be feistier",
          "resolution: be kinder",
          "resolution: be more adventurous",
          "resolution: be luckier",
          "giant red gummi ingot",
          "giant green gummi ingot",
          "giant yellow gummi ingot",
          "gummi salamander",
          "gummi snake",
          "gummi canary",
          "giant red gummi bear",
          "giant green gummi bear",
          "giant yellow gummi bear",
          "red drunki-bear",
          "green drunki-bear",
          "yellow drunki-bear",
          "gummi bowtie",
          "fudge pocket square",
          "lollipop cufflinks",
          "trilobite fossil",
          "ammonite fossil",
          "belemnite fossil",
          "trilobite candy mold",
          "ammonite candy mold",
          "belemnite candy mold",
          "gummi trilobite",
          "gummi ammonite",
          "gummi belemnite",
          "all-year sucker",
          "heart of dark chocolate",
          "Big Candy's tophat",
          "Fuzzby",
          "Jackass Plumber home game",
          "Trivial Avocations board game",
          "Tickle-Me Emilio",
          "blessed large box",
          "pack of pogs",
          "jerky coins",
          "Go-Wassail",
          "Uncle Greenspan's Bathroom Finance Guide",
          "bottle of bubbles",
          "wind-up meatcar",
          "Trivial Avocations Card: What?",
          "Trivial Avocations Card: When?",
          "Trivial Avocations Card: Who?",
          "Trivial Avocations Card: Where?",
          "pog #01 (spider)",
          "pog #02 (Knob goblin)",
          "pog #03 (warwelf)",
          "pog #04 (skleleton)",
          "pog #05 (ninja snowman)",
          "pog #06 (filthy hippy)",
          "pog #07 (orcish frat boy)",
          "pog #08 (hellion)",
          "pog #09 (pirate)",
          "pog #10 (hobo)",
          "pog #11 (Naughty Sorceress)",
          "Atomic Pop",
          "tiny do-rag",
          "whimpering willow bark",
          "berries of suffering",
          "baobab sap",
          "cup of hickory chicory",
          "magnolia blossom",
          "Mortimer's nostrum",
          "Barulio's bottle",
          "Marvin's marvelous pill",
          "Winifred's whistle",
          "purple prose pen",
          "half-empty carton of milk",
          "glass of warm water",
          "desktop zen garden",
          "Vivian's Vitamin",
          "pink-belly slapper",
          "Leapin' Trousers",
          "green eggnog",
          "green hamhock",
          "The Thorax's Codex of Tormenting Plants",
          "Clancy's sackbut",
          "Ghost Pinching Quarterly",
          "Clancy's crumhorn",
          "The Snitch's Manifesto",
          "Clancy's lute",
          "Trusty",
          "can of Rain-Doh",
          "empty Rain-Doh can",
          "fireclutch",
          "Rain-Doh red wings",
          "Rain-Doh orange agent",
          "Rain-Doh yellow laser gun",
          "Rain-Doh green lantern",
          "Rain-Doh blue balls",
          "Rain-Doh indigo cup",
          "Rain-Doh violet bo",
          "Rain-Doh black box",
          "Rain-Doh box full of monster",
          "PB&BP",
          "club sandwich",
          "corned-beef Reuben",
          "frayed ninja rope",
          "dull ninja crampons",
          "loose ninja carabiner",
          "Groar's fur",
          "Thwaitgold stag beetle statuette",
          "Drac & Tan",
          "Transylvania Sling",
          "Shot of the Living Dead",
          "Buttery Knob",
          "Slippery Knob",
          "Flaming Knob",
          "Grasshopper",
          "Locust",
          "Plague of Locusts",
          "Red Dwarf",
          "Golden Mean",
          "Green Giant",
          "Aye Aye",
          "Aye Aye, Captain",
          "Aye Aye, Tooth Tooth",
          "Humanitini",
          "More Humanitini than Humanitini",
          "Oh, the Humanitini",
          "Great Older Fashioned",
          "Fuzzy Tentacle",
          "Crazymaker",
          "Zoodriver",
          "Sloe Comfortable Zoo",
          "Sloe Comfortable Zoo on Fire",
          "Suffering Sinner",
          "Suppurating Sinner",
          "Sizzling Sinner",
          "Firewater",
          "Earth and Firewater",
          "Earth, Wind and Firewater",
          "Slimosa",
          "Extra-slimy Slimosa",
          "Slimebite",
          "Cement Mixer",
          "Jackhammer",
          "Dump Truck",
          "Fauna Libre",
          "Chakra Libre",
          "Aura Libre",
          "Sazerorc",
          "Sazuruk-hai",
          "Flaming Sazerorc",
          "Green Velvet",
          "Green Muslin",
          "Green Burlap",
          "Mohobo",
          "Moonshine Mohobo",
          "Flaming Mohobo",
          "Drunken Philosopher",
          "Drunken Neurologist",
          "Drunken Astrophysicist",
          "Dark & Starry",
          "Black Hole",
          "Event Horizon",
          "Herring Daiquiri",
          "Herring Wallbanger",
          "Herringtini",
          "Lollipop Drop",
          "Candy Alexander",
          "Candicaine",
          "Caipiranha",
          "Flying Caipiranha",
          "Flaming Caipiranha",
          "Punchplanter",
          "Doublepunchplanter",
          "Haymaker",
          "Small Medium",
          "crystal decanter",
          "glowing fungus",
          "ancient poisoned dart",
          "stone wool",
          "shiny stones",
          "the Nostril of the Serpent",
          "ancient calendar fragment",
          "ancient calendar",
          "Boris's Helm",
          "staph of homophones",
          "Boris's Helm (askew)",
          "mime soul fragment",
          "Monster Manuel",
          "key-o-tron",
          "nailswurst",
          "used beer",
          "Huggler Radio",
          "fettucini &eacute;pines Inconnu recipe",
          "slap and slap again recipe",
          "insulting hat",
          "offensive moustache",
          "hairshirt",
          "Olympic-sized Clan crate",
          "cursed microwave",
          "cursed pony keg",
          "How to Tolerate Jerks",
          "How to Hold a Grudge",
          "puppet strings",
          "bagged stuffed &quot;L&quot;",
          "stuffed club",
          "fettucini &eacute;pines Inconnu",
          "slap and slap again",
          "gunpowder burrito",
          "beery blood",
          "stuffed &quot;L&quot;",
          "watered-down Red Minotaur",
          "pool torpedo",
          "Ze&trade; goggles",
          "soggy used band-aid",
          "stylish swimsuit",
          "lost key",
          "P.B.L.T.",
          "note from Clancy",
          "BURT",
          "handful of juicy garbage",
          "bugbear communicator badge",
          "quantum nanopolymer spider web",
          "bugbear autopsy tweezers",
          "UV monocular",
          "drone self-destruct chip",
          "Jeff Goldblum larva",
          "pacification grenade",
          "quantum disintegrator pistol",
          "phase-tuned shield generator belt",
          "Thwaitgold woollybear statuette",
          "bugbear detector",
          "bugbear purification pill",
          "1 Meat",
          "The Lost Glasses",
          "The Lost Pill Bottle",
          "The Lost Comb",
          "Moping Artistic Goth Kid",
          "little wooden mannequin",
          "crayon shavings",
          "wax bugbear",
          "wax hat",
          "wax pants",
          "FDKOL commendation",
          "drop of water-37",
          "fireman's helmet",
          "fire axe",
          "enchanted fire extinguisher",
          "FDKOL tattoo",
          "Hjodor's Guide to Arctic Dalmatians",
          "Hjodor's Guide to Arctic Dalmatians (used)",
          "FDKOL hotcakes",
          "hot egg",
          "smoking grass",
          "fiery wing",
          "wings of fire",
          "FDKOL fire hose",
          "bottle of fire",
          "molten brick",
          "hot daub",
          "hot daub bun",
          "hot daub stand",
          "foot-long hot daub",
          "ballpark hot daub",
          "angst burger",
          "5-hour acrimony",
          "blank note",
          "eerily silent box",
          "forbidden sausage",
          "Lord Flameface's cloak",
          "Drizzlers&trade; Black Licorice",
          "daub-breaker",
          "Camp Scout backpack",
          "CSA fire-starting kit",
          "bag of GORP",
          "water purification pills",
          "Camp Scout pup tent",
          "CSA scoutmaster's &quot;water&quot;",
          "bag of GORF",
          "CSA discount card",
          "bag of QWOP",
          "CSA bravery badge",
          "CSA all-purpose soap",
          "CSA cheerfulness ration",
          "CSA obedience grenade",
          "Tales of the Word Realms",
          "crappy brain",
          "decent brain",
          "good brain",
          "boss brain",
          "hunter brain",
          "Staff of Holiday Sensations",
          "rusty staff",
          "slime-covered staff",
          "Staff of the Scummy Sink",
          "flaming nose",
          "Superhero Reboots",
          "fuzzy busby",
          "fuzzy earmuffs",
          "fuzzy montera",
          "Unagnimated Gnome",
          "gnomish swimmer's ears",
          "gnomish coal miner's lung",
          "gnomish tennis elbow",
          "gnomish housemaid's kgnee",
          "gnomish athlete's foot",
          "Thwaitgold maggot statuette",
          "talkative skull",
          "shiny gold fronts",
          "Barney's rake",
          "idiot brain",
          "keel-haulin' knife",
          "ancient ice cream scoop",
          "soft green echo eyedrop antidote martini",
          "morningwood plank",
          "raging hardwood plank",
          "weirdwood plank",
          "thick caulk",
          "long hard screw",
          "messy butt joint",
          "smut orc keepsake box",
          "bubblin' crude",
          "box of bear arms",
          "right bear arm",
          "left bear arm",
          "Hat O' Nine Tails",
          "Enchanted Plunger",
          "Enchanted Flyswatter",
          "Gearhead Goo",
          "Missing Eye Simulation Device",
          "Gnollish Crossdress",
          "eldritch dough",
          "Charity's choker",
          "Smart Bone Dust",
          "perpendicular guano",
          "White Chocolate Golem Seeds",
          "Shivering Ch&egrave;vre",
          "giant breath mint",
          "enchanted muesli",
          "glass of warm milk",
          "glass of gnat milk",
          "Knob Goblin Mutagen",
          "Tears of the Quiet Healer",
          "giant tube of black lipstick",
          "skelelton spine",
          "smut orc sunglasses",
          "blob of acid",
          "flayed mind",
          "kobold kibble",
          "forest spirit rattle",
          "Stone Golem pebbles",
          "spooky gravy fairy warlock hat",
          "bull blubber",
          "frog lip-print",
          "gazely stare",
          "tiny canopic jar",
          "clove-flavored lip balm",
          "Skullery Maid's Knee",
          "zombie hollandaise",
          "skeletal banana",
          "gilt perfume bottle",
          "janglin' bones",
          "pygmy papers",
          "pygmy dart",
          "secret mummy herbs and spices",
          "brigand brittle",
          "holistic headache remedy",
          "scrunchie tourniquet",
          "embezzler's oil",
          "Fu Manchu Wax",
          "Iiti Kitty Gumdrop",
          "ravenous eye",
          "Rogue Windmill Rouge",
          "A muse-bouche",
          "gold toothbrush",
          "pirate cream pie",
          "una poca de gracia",
          "compressed air canister",
          "salt water taffy",
          "unholy water",
          "Bangyomaman battle juice",
          "handyman &quot;hand soap&quot;",
          "space marine flash grenade",
          "temporary tribal tattoo",
          "oil-filled donut",
          "stick-on gnome beard",
          "BRICKO stud",
          "Osk'r Chow",
          "Scuba Snack",
          "grey cube",
          "votive candle",
          "booby trap",
          "Agent Corrigan's cigarette",
          "good ash",
          "Tome of Rad Libs",
          "Rad Lib",
          "papier-m&acirc;ch&eacute; glob",
          "papier-mochi",
          "papier-m&acirc;chaeranthera",
          "papier-m&acirc;ch&eacute; toothpicks",
          "papier-m&acirc;ch&eacute;te",
          "papier-m&acirc;chine gun",
          "papier-masque",
          "papier-mitre",
          "papier-m&acirc;churidars",
          "papier-m&acirc;ch&eacute; plaque",
          "papier-m&acirc;ch&eacute; handle",
          "papier-m&acirc;ch&eacute; base",
          "papier-m&acirc;ch&eacute; bowl",
          "papier-m&acirc;ch&eacute; trophy pi&ntilde;ata",
          "Rainbow Jello Mould",
          "Pete & Jackie's Dragon Tooth Emporium Catalog",
          "packet of dragon's teeth",
          "skeleton",
          "skeleton skis",
          "skeleton quiche",
          "skeletal scabbard",
          "skeletal skiff",
          "Bonestabber",
          "crystal skeleton vodka",
          "Lazybones&trade; recliner",
          "auxiliary backbone",
          "skulldozer egg",
          "ribcage rollcage",
          "that gum you like",
          "dreaming Jung man",
          "Little Crimson Book",
          "avatar of the Unconscious Collective",
          "blue canary nightlight",
          "Unconscious Collective Dream Jar",
          "jar of psychoses (The Suspicious-Looking Guy)",
          "jar of psychoses (The Captain of the Gourd)",
          "jar of psychoses (The Crackpot Mystic)",
          "jar of psychoses (The Old Man)",
          "jar of psychoses (The Pretentious Artist)",
          "jar of psychoses (The Meatsmith)",
          "[Jar of psychoses (Trader)]",
          "jar of psychoses (Jick)",
          "pixel pill",
          "pixel energy tank",
          "ChibiBuddy&trade; (on)",
          "gold wedding ring",
          "deactivated nanobots",
          "nanorhino credit card",
          "Solstice Shield",
          "powdered candy sushi set",
          "sweet mochi ball",
          "beet-flavored Mr. Mediocrebar",
          "sweet-corn-flavored Mr. Mediocrebar",
          "cabbage-flavored Mr. Mediocrebar",
          "tiny plastic animelf",
          "tiny plastic ChibiBuddy&trade;",
          "tiny plastic taco-clad Crimbo elf",
          "tiny plastic Uncle Crimboku",
          "tiny plastic MechaElf",
          "plastic ingot",
          "electrical thingamabob",
          "ChibiBuddy&trade; (off)",
          "BittyCar MeatCar",
          "BittyCar HotCar",
          "brainwave-controlled unicorn horn",
          "bubble-wrap simulator",
          "blind-packed capsule toy",
          "tiny plastic four-shadowed mime",
          "tiny plastic Bugbear Captain",
          "tiny plastic Rene C. Corman",
          "tiny plastic Lord Flameface",
          "tiny plastic Beebee King",
          "tiny plastic Queen Bee",
          "tiny plastic Wu Tang the Betrayer",
          "tiny plastic Clancy the Minstrel",
          "tiny plastic Battlesuit Bugbear Type",
          "tiny plastic spiderbugbear",
          "tiny plastic peacannon",
          "tiny plastic the Free Man",
          "tiny plastic fire servant",
          "tiny plastic mumblebee",
          "tiny plastic moneybee",
          "tiny plastic beebee gunners",
          "tiny plastic beebee queue",
          "tiny plastic buzzerker",
          "tiny plastic bee swarm",
          "tiny plastic batbugbear",
          "tiny plastic bugaboo",
          "tiny plastic Ancient Unspeakable Bugbear",
          "tiny plastic black ops bugbear",
          "tiny plastic hypodermic bugbear",
          "tiny plastic cavebugbear",
          "tiny plastic Norville Rogers",
          "tiny plastic Scott the Miner",
          "tiny plastic angry space marine",
          "tiny plastic Charity the Zombie Hunter",
          "tiny plastic Father McGruber",
          "tiny plastic Hank North, Photojournalist",
          "tiny plastic blazing bat",
          "electronic dulcimer pants",
          "A-Boo clue",
          "Frown Exerciser",
          "soul monocle",
          "soul doorbell",
          "soul coin",
          "soul knife",
          "soul mask",
          "record of infuriating silence",
          "record of infuriating silence (used)",
          "record of tranquil silence",
          "record of tranquil silence (used)",
          "record of menacing silence",
          "record of menacing silence (used)",
          "silent beret",
          "slice of pizza",
          "huge gold coin",
          "cartoon heart",
          "gold star",
          "tankard of ale",
          "vial of holy water",
          "green cloth cap",
          "iron dagger",
          "hamburger",
          "dollar-sign bag",
          "red potion",
          "blue potion",
          "bottle of wine",
          "round blue bomb",
          "iron helmet",
          "steel sword",
          "whole roasted chicken",
          "massive gemstone",
          "extra-strength red potion",
          "fancy blue potion",
          "shining goblet",
          "fireball",
          "gold crown",
          "flaming sword",
          "Helm of the Scream Emperor",
          "Cloak of Dire Shadows",
          "Sword of Dark Omens",
          "Shield of Icy Fate",
          "Greaves of the Murk Lord",
          "Gauntlets of the Blood Moon",
          "Boots of Twilight Whispers",
          "Belt of Howling Anger",
          "logging hatchet",
          "orc wrist",
          "freshwater pearl necklace",
          "orcish stud-finder",
          "screwing pooch",
          "orcish hand lotion",
          "orcish rubber",
          "orcish nailing lube",
          "backwoods screwdriver",
          "loadstone",
          "Claybender glasses",
          "Duskwalker fangs",
          "Space Tourist Phaser",
          "Whoompa Fur Pants",
          "Whatsian Ionic Pliers",
          "Polysniff Perfume",
          "Duskwalker syringe",
          "Space Tours Tripple",
          "Battlie Light Saver",
          "T.U.R.D.S. Key",
          "dress pants",
          "badge of authority",
          "giant motorcycle boots",
          "stolen necklace",
          "troll britches",
          "vial of The Glistening",
          "artisanal limoncello",
          "creepy ginger ale",
          "incredible pizza",
          "oil cap",
          "oil lamp",
          "oil slacks",
          "oil pan",
          "oily boid",
          "woim",
          "Thwaitgold praying mantis statuette",
          "BittyCar SoulCar",
          "Misty Cloak",
          "Misty Robe",
          "Misty Cape",
          "woimbook",
          "Taco Dan's Taco Stand Flier",
          "Taco Dan's Taco Stand Taco",
          "Taco Dan's Taco Stand Chimichangarita",
          "Taco Dan's Taco Stand Chillacious Churro",
          "psychoanalytic jar",
          "The Sword in the Steak",
          "Meatcleaver",
          "Crimbo Elf creepy bobble-head",
          "Crimbo stogie-scented room odorizer",
          "Crimbo bottomless hot cocoa mug",
          "Crimbo tree flocker",
          "Crimbo light-up Rudolph doll",
          "Super Crimboman Ultra Mega Hypersword",
          "sharp tin strip",
          "wad of spider silk",
          "goblin collarbone",
          "Truthsayer",
          "loose blade",
          "goblin bone hilt",
          "sticky sword blade",
          "Thinknerd's Grimoire of Geeky Gifts",
          "confusing LED clock",
          "haggis-infused soap",
          "magicberry tablets",
          "37x37x37 puzzle cube",
          "McLeod's Hard Haggis-Ade",
          "haggis-wrapped haggis-stuffed haggis",
          "home robotics kit",
          "old school calculator watch",
          "haggis socks",
          "airblaster gun",
          "Thinknerd T-shirt grab bag",
          "actual reality goggles",
          "Mr. Haggis",
          "magnetic sculpture kit",
          "Microplushie: Otakulone",
          "Microplushie: Hippylase",
          "Microplushie: Bropane",
          "Microplushie: Sororitrate",
          "Microplushie: Gothochondria",
          "Microplushie: Raverdrine",
          "Microplushie: Hobomosome",
          "Microplushie: Ermahgerdic Acid",
          "Microplushie: Dorkonide",
          "Microplushie: Fauxnerditide",
          "Microplushie: Hipsterine",
          "classy monkey",
          "fancy gourd potion",
          "Thinknerd T-Shirt",
          "pile of useless robot parts",
          "homemade robot",
          "homemade robot gear",
          "Artist's Whisk of Misery",
          "Artist's Butterknife of Regret",
          "Artist's Spatula of Despair",
          "Artist's Cookie Cutter of Loneliness",
          "Artist's Cr&egrave;me Brul&eacute;e Torch of Fury",
          "Ginsu&trade;",
          "bubble-wrap simulator (one broken button)",
          "bubble-wrap simulator (half broken)",
          "bubble-wrap simulator (one button left)",
          "zaibatsu lobby card",
          "zaibatsu level 1 card",
          "zaibatsu level 2 card",
          "zaibatsu level 3 card",
          "CEO office card",
          "test site key",
          "strange goggles",
          "brass abacus",
          "bonsai tree",
          "cheap Chinese beer",
          "lucky cat statue",
          "rhinoceros horn",
          "furry pink pillow",
          "bottle of limeade",
          "novelty tattoo sleeves",
          "pair of rhinoceros horns",
          "furry brown pillow",
          "makeshift yakuza mask",
          "gold piece",
          "toy taijijian",
          "magical battery",
          "White Dragon Fang",
          "butterfly knife",
          "tube of herbal ointment",
          "pencil kunai",
          "weighted paperclip chain",
          "great big capacitor",
          "rubber gloves",
          "Chinese curse words",
          "triad summoning scroll",
          "roasted duck",
          "dead meat bun",
          "lucky cat collar",
          "suspicious-looking fedora",
          "Sword of Procedural Generation",
          "Bodacious MechaElf Hunter Saga:Relay Wolf",
          "Deactivated MiniMechaElf",
          "MiniMechaElf Laser Punch Missile Launcher",
          "Snow Suit",
          "carrot nose",
          "carrot cake",
          "carrot claret",
          "carrot juice",
          "pixel power cell",
          "flickering pixel",
          "Byte",
          "anger blaster",
          "doubt cannon",
          "fear condenser",
          "regret hose",
          "Young Man's Crew Sequester",
          "Young Man's Cargo Load",
          "foam commodore's hat",
          "foam naval trousers",
          "miniature deck cannon",
          "ornamental sextant",
          "Bloodbath",
          "Hundred Headed IPA",
          "old chum",
          "crude crudit&eacute;s",
          "candy crayons",
          "pixel grappling hook",
          "GameInformPowerDailyPro magazine",
          "GameInformPowerDailyPro walkthru",
          "cosmic egg",
          "cosmic dough",
          "cosmic vegetable",
          "cosmic cheese",
          "cosmic potted meat product",
          "cosmic potato",
          "cosmic cream",
          "cosmic fruit",
          "Jarlsberg's hat",
          "consummate hard-boiled egg",
          "consummate fried egg",
          "consummate egg salad",
          "consummate bagel",
          "consummate sliced bread",
          "consummate hot dog bun",
          "consummate brownie",
          "consummate toast",
          "passable stout",
          "consummate soup",
          "consummate corn chips",
          "consummate salad",
          "consummate salsa",
          "consummate sauerkraut",
          "consummate cheese slice",
          "consummate melted cheese",
          "consummate bacon",
          "consummate meatloaf",
          "consummate steak",
          "consummate cold cuts",
          "consummate frankfurter",
          "consummate french fries",
          "consummate baked potato",
          "acceptable vodka",
          "consummate ice cream",
          "consummate whipped cream",
          "consummate sour cream",
          "consummate strawberries",
          "consummate sorbet",
          "adequate rum",
          "mediocre lager",
          "immaculate grilled cheese",
          "immaculate ice cream sandwich",
          "immaculate hot dog",
          "immaculate egg salad sandwich",
          "perfect sandwich",
          "perfect chef salad",
          "perfect breakfast",
          "sublime deluxe hot dog",
          "sublime stew",
          "sublime nachos",
          "Ultimate Breakfast Sandwich",
          "Loaded Baked Potato",
          "Omega Sundae",
          "Das Sauerlager",
          "Bologna Lambic",
          "Vodka Dog",
          "Disappointed Russian",
          "Chunky Mary",
          "Nachojito",
          "Le Roi",
          "Over Easy Rider",
          "cosmic six-pack",
          "the Jick-o-loser",
          "cube of ectoplasm",
          "Illuminati earpiece",
          "censored can label",
          "ectoplasm <i>au jus</i>",
          "the kindest cold cut",
          "lucky cat's paw",
          "ASCII fu manchu",
          "demonic surgical gloves",
          "cheap clip-on ninja tie",
          "gamer slurry",
          "dungeoneering kit",
          "numberwang",
          "scroll of Protection from Bad Stuff",
          "scroll of Puddingskin",
          "Spellbook: Walberg's Dim Bulb",
          "Spellbook: Singer's Faithful Ocelot",
          "Spellbook: Drescher's Annoying Noise",
          "dried gelatinous cube",
          "pile of dungeon junk",
          "Staff of the Healthy Breakfast",
          "Staff of the Staff of Life",
          "Staff of the Light Lunch",
          "Staff of the Standalone Cheese",
          "Staff of the Hearty Dinner",
          "Staff of the All-Steak",
          "Staff of Fruit Salad",
          "Staff of the Cream of the Cream",
          "giant jar of protein powder",
          "giant grain of protein powder",
          "pec oil",
          "giant gym membership card",
          "Squat-Thrust Magazine",
          "massive dumbbell",
          "giant penguin keychain",
          "O'RLY manual",
          "open sauce",
          "giant turkey leg",
          "Ye Olde Meade",
          "Ye Olde Bawdy Limerick",
          "Ye Olde Medieval Insult",
          "pewter claymore",
          "giant artisanal rice peeler",
          "giant heirloom grape tomato",
          "chipotle wasabi cilantro aioli",
          "brown felt tophat",
          "brass gear",
          "Mark I Steam-Hat",
          "Mark II Steam-Hat",
          "Mark III Steam-Hat",
          "Mark IV Steam-Hat",
          "Mark V Steam-Hat",
          "steam-powered model rocketship",
          "punk rock jacket",
          "giant safety pin",
          "stolen sushi",
          "very overdue library book",
          "drum 'n' bass 'n' drum 'n' bass record",
          "cosmic bucket",
          "fragment of Jarlsberg's soul",
          "Thwaitgold firefly statuette",
          "model airship",
          "Super Weight-Gain 9000",
          "possibility potion",
          "eleven-foot pole",
          "ring of Detect Boring Doors",
          "Jarlsberg's pan (Cosmic portal mode)",
          "Jarlsberg's pan",
          "Cosmic Calorie",
          "celestial olive oil",
          "celestial carrot juice",
          "celestial au jus",
          "celestial squid ink",
          "Uncle Buck",
          "crate of fish meat",
          "damp old wallet",
          "fishy pipe",
          "old SCUBA tank",
          "deep six-shooter",
          "sea chaps",
          "sea holster",
          "shavin' razor",
          "long-forgotten necklace",
          "giant pearl",
          "sea lace",
          "jam band",
          "aquamariner's ring",
          "aquamariner's necklace",
          "pearl diver's ring",
          "pearl diver's necklace",
          "sushi doily",
          "scimitar cozy",
          "fish stick cozy",
          "bazooka cozy",
          "cozy scimitar",
          "Staff of the Cozy Fish",
          "cozy bazooka",
          "sea mantle",
          "sea shawl",
          "sea cape",
          "saltwaterbed",
          "muddy pirate hat",
          "floral-print skirt",
          "spectral axe",
          "super-strong air freshener",
          "Mer-kin lipstick",
          "Mer-kin mouthsoap",
          "Mer-kin strongjuice",
          "Mer-kin fitbrine",
          "Mer-kin ragejuice",
          "Mer-kin dragbelt",
          "Mer-kin eyeglasses",
          "Mer-kin gutgirdle",
          "Mer-kin finpaddle",
          "Mer-kin stopwatch",
          "Mer-kin dreadscroll",
          "Mer-kin smartjuice",
          "Mer-kin cooljuice",
          "Mer-kin worktea",
          "Mer-kin knucklebone",
          "Mer-kin darkbook",
          "Mer-kin begsign",
          "Libram of Pulled Taffy",
          "pulled yellow taffy",
          "pulled indigo taffy",
          "pulled green taffy",
          "pulled blue taffy",
          "pulled orange taffy",
          "pulled violet taffy",
          "pulled red taffy",
          "Mer-kin hallpass",
          "lump of clay",
          "twisted piece of wire",
          "can of the cheapest beer",
          "bottle of fruity &quot;wine&quot;",
          "single swig of vodka",
          "angry inch",
          "testy toolbox",
          "Jick-o-User",
          "eraser nubbin",
          "chlorine crystal",
          "ph balancer",
          "mysterious chemical residue",
          "nugget of sodium",
          "root beer",
          "jigsaw blade",
          "wood screw",
          "balsa plank",
          "blob of wood glue",
          "envyfish egg",
          "Mer-kin rocksalt",
          "Mer-kin saltmint",
          "Mer-kin saltsquid",
          "scale-mail underwear",
          "comb jelly",
          "anemone sauce",
          "inky squid sauce",
          "Mer-kin weaksauce",
          "peanut sauce",
          "black glass",
          "Boss Drops",
          "Mer-kin lunchbox",
          "black tear",
          "jagged tooth",
          "grisly shell fragment",
          "violent pastilles",
          "worst candy",
          "fudge-shaped hole in space-time",
          "Pocket Square of Loathing",
          "corrupted stardust",
          "Star Spawn",
          "cute bow from beyond the stars",
          "KoLHS Pep Squad Box",
          "shaking skull",
          "Order of the Green Thumb Order Form",
          "clutch of dodecapede eggs",
          "flavorless gruel",
          "mana curds",
          "twist of lime",
          "pencil stub",
          "giant giant moth dust",
          "glob of spoiled mayo",
          "tonic djinn",
          "vampire chowder",
          "Tales of Dread",
          "Dreadsylvanian skeleton key",
          "Official Seal of Dreadsylvania",
          "Dreadsylvanian stew",
          "white Dreadsylvanian",
          "brass Dreadsylvanian flask",
          "silver Dreadsylvanian flask",
          "dreadful fedora",
          "dreadful sweater",
          "dreadful glove",
          "Freddy Kruegerand",
          "Mark of the Bugbear",
          "Mark of the Werewolf",
          "Mark of the Zombie",
          "Mark of the Ghost",
          "Mark of the Vampire",
          "Mark of the Skeleton",
          "Covers-Your-Head",
          "Drapes-You-Regally",
          "Warms-Your-Tush",
          "Helps-You-Sleep",
          "Quiets-Your-Steps",
          "Protects-Your-Junk",
          "Gets-You-Drunk",
          "Great Wolf's headband",
          "Great Wolf's left paw",
          "Great Wolf's right paw",
          "Great Wolf's rocket launcher",
          "Great Wolf's beastly trousers",
          "Great Wolf's lice",
          "Hunger&trade; Sauce",
          "zombie mariachi hat",
          "zombie accordion",
          "zombie mariachi pants",
          "HOA regulation book",
          "HOA zombie eyes",
          "HOA citation pad",
          "wriggling severed nose",
          "nosy nose ringy ring",
          "Mayor Ghost's toupee",
          "Mayor Ghost's cloak",
          "Mayor Ghost's khakis",
          "Mayor Ghost's gavel",
          "Mayor Ghost's sash",
          "Mayor Ghost's scissors",
          "ghost pepper",
          "Thunkula's drinking cap",
          "Drunkula's cape",
          "Drunkula's silky pants",
          "Drunkula's bell",
          "Drunkula's ring of haze",
          "Drunkula's wineglass",
          "bottle of Bloodweiser",
          "Unkillable Skeleton's skullcap",
          "Unkillable Skeleton's breastplate",
          "Unkillable Skeleton's shinguards",
          "Unkillable Skeleton's sawsword",
          "Unkillable Skeleton's shield",
          "Unkillable Skeleton's restless leg",
          "Staff of the Roaring Hearth",
          "electric Kool-Aid",
          "dread tarragon",
          "bone flour",
          "dreadful roast",
          "stinking agaricus",
          "Dreadsylvanian shepherd's pie",
          "intricate music box parts",
          "unwound mechanical songbird",
          "shiny brass tailfeathers",
          "wax banana",
          "complicated lock impression",
          "replica key",
          "Dreadsylvania Auditor's badge",
          "blood kiwi",
          "eau de mort",
          "bloody kiwitini",
          "moon-amber",
          "polished moon-amber",
          "moon-amber necklace",
          "Dreadsylvanian seed pod",
          "ghost pencil",
          "hangman's hood",
          "cursed ring finger ring",
          "Dreadsylvanian clockwork key",
          "cool iron ingot",
          "cool iron helmet",
          "cool iron breastplate",
          "cool iron greaves",
          "ghost shawl",
          "skull capacitor",
          "warm fur",
          "snowstick",
          "eerie fetish",
          "stinkwater",
          "dubious loincloth",
          "accidental mutton",
          "drafty drawers",
          "wolfskull mask",
          "guts necklace",
          "groping claw",
          "vengeful spirit",
          "BOOtonniere",
          "ghost thread",
          "bag of unfinished business",
          "transparent pants",
          "hothammer",
          "Thriller Ice",
          "grandfather watch",
          "muddy skirt",
          "antique spyglass",
          "vial of hot blood",
          "remorseless knife",
          "intimidating coiffure",
          "cod cape",
          "blood sausage",
          "frying brainpan",
          "old ball and chain",
          "old dry bone",
          "tailbone shield",
          "tonguebone",
          "pogo stick",
          "weedy skirt",
          "big pants",
          "Thwaitgold Goliath beetle statuette",
          "cooling iron helmet",
          "cooling iron breastplate",
          "cooling iron greaves",
          "hot cluster",
          "cold cluster",
          "spooky cluster",
          "stench cluster",
          "sleaze cluster",
          "phial of hotness",
          "phial of coldness",
          "phial of spookiness",
          "phial of stench",
          "phial of sleaziness",
          "adventurer clone egg",
          "mini-Mr. Accessory",
          "hand of Mr. Cards",
          "Dreadsylvanian hot pocket",
          "Dreadsylvanian cold pocket",
          "Dreadsylvanian spooky pocket",
          "Dreadsylvanian stink pocket",
          "Dreadsylvanian sleaze pocket",
          "Dreadsylvanian hot toddy",
          "Dreadsylvanian cold-fashioned",
          "Dreadsylvanian grimlet",
          "Dreadsylvanian dank and stormy",
          "Dreadsylvanian slithery nipple",
          "hot clusterbomb",
          "cold clusterbomb",
          "spooky clusterbomb",
          "stench clusterbomb",
          "sleaze clusterbomb",
          "Dreadsylvanian Almanac page",
          "length of old fuse",
          "dreadful box",
          "Clan hot dog stand",
          "vicious spiked collar",
          "ancient hot dog wrapper",
          "debonair deboner",
          "chicle de salchicha",
          "jar of frostigkraut",
          "gnawed-up dog bone",
          "Grey Guanon",
          "Engorged Sausages and You",
          "dream of a dog",
          "optimal spreadsheet",
          "defective Game Grid token",
          "hot Dreadsylvanian cocoa",
          "epic cluster",
          "intricate clockwork egg",
          "intricate clockwork birdhouse",
          "intricate clockwork disc",
          "intricate clockwork big hand",
          "intricate clockwork little hand",
          "intricate clockwork numeral I",
          "intricate clockwork numeral II",
          "intricate clockwork numeral III",
          "intricate clockwork numeral IV",
          "intricate clockwork numeral V",
          "intricate clockwork numeral VI",
          "intricate clockwork numeral VII",
          "intricate clockwork numeral VIII",
          "intricate clockwork numeral IX",
          "intricate clockwork numeral X",
          "intricate clockwork numeral XI",
          "intricate clockwork numeral XII",
          "intricate clockwork cuckoo",
          "cuckoo clock",
          "Cold One",
          "spaghetti breakfast",
          "over-the-shoulder Folder Holder",
          "folder (red)",
          "folder (blue)",
          "folder (green)",
          "folder (magenta)",
          "folder (cyan)",
          "folder (yellow)",
          "folder (smiley face)",
          "folder (wizard)",
          "folder (space skeleton)",
          "folder (D-Team)",
          "folder (Ex-Files)",
          "folder (skull and crossbones)",
          "folder (Knight Writer)",
          "folder (Jackass Plumber)",
          "folder (holographic fractal)",
          "folder (barbarian)",
          "folder (rainbow unicorn)",
          "folder (Seawolf)",
          "folder (dancing dolphins)",
          "folder (catfish)",
          "folder (tranquil landscape)",
          "folder (owl)",
          "folder (Stinky Trash Kid)",
          "folder (sports car)",
          "folder (sportsballs)",
          "folder (heavy metal)",
          "folder (Yedi)",
          "folder (KOLHS)",
          "slide rule",
          "Ogres and Oubliettes&trade; module",
          "Mountain Stream Code Black Alert",
          "twisted-up wet towel",
          "stepmom's booze",
          "surgical tape",
          "metal band T-shirt",
          "fountain 'soda'",
          "illegal firecracker",
          "pickelhaube",
          "hair oil",
          "scrap metal",
          "school spirit socket set",
          "miniature suspension bridge",
          "Staff of the Lunch Lady",
          "universal key",
          "world's most dangerous birdhouse",
          "deathchucks",
          "giant eraser",
          "quasireligious sculpture",
          "giant Faraday cage",
          "modeling claymore",
          "sticky clay homunculus",
          "sodium pentasomething",
          "grains of salt",
          "yellowcake bomb",
          "dirty stinkbomb",
          "superwater",
          "Thwaitgold bookworm statuette",
          "crude monster sculpture",
          "Yearbook Club Camera",
          "antique machete",
          "Cursed Punch",
          "Bowl of Scorpions",
          "Fog Murderer",
          "book of matches",
          "surgical mask",
          "head mirror",
          "half-size scalpel",
          "surgical apron",
          "bloodied surgical dungarees",
          "McClusky file (page 1)",
          "McClusky file (page 2)",
          "McClusky file (page 3)",
          "McClusky file (page 4)",
          "McClusky file (page 5)",
          "boring binder clip",
          "McClusky file (complete)",
          "bowling ball",
          "moss-covered stone sphere",
          "dripping stone sphere",
          "crackling stone sphere",
          "scorched stone sphere",
          "stone triangle",
          "tiny bowler",
          "imitation White Russian",
          "short-handled mop",
          "jungle floor wax",
          "smirking shrunken head",
          "colorful toad",
          "crude voodoo doll",
          "attorney's badge",
          "pygmy briefs",
          "short writ of habeas corpus",
          "bone abacus",
          "adder",
          "short calculator",
          "sphygmomanometer",
          "bag of pygmy blood",
          "tongue depressor",
          "compression stocking",
          "midriff scrubs",
          "pill cup",
          "cold water bottle",
          "pygmy phone number",
          "gold Boozehounds Anonymous token",
          "exotic jungle fruit",
          "Shore Inc. Ship Trip Scrip",
          "dude ranch souvenir crate",
          "tropical island souvenir crate",
          "ski resort souvenir crate",
          "UV-resistant compass",
          "funky junk key",
          "Worse Homes and Gardens",
          "old claw-foot bathtub",
          "old clothesline pole",
          "antique cigar sign",
          "junk junk",
          "Junk-Bond",
          "tangle of copper wire",
          "jagged scrap metal",
          "bent scrap metal",
          "molten scrap metal",
          "eternal car battery",
          "junk band",
          "junk trunks",
          "junk-mail shirt",
          "junk food",
          "junk yard",
          "swordzall",
          "arm buzzer",
          "boilgun",
          "Gordon Beer's Beer Garden Catalog",
          "packet of beer seeds",
          "handful of barley",
          "cluster of hops",
          "fancy beer bottle",
          "fancy beer label",
          "artisanal homebrew sampler",
          "can of Br&uuml;talbr&auml;u",
          "can of Drooling Monk",
          "can of Impetuous Scofflaw",
          "bottle of Old Pugilist",
          "bottle of Professor Beer",
          "bottle of Rapier Witbier",
          "bottle of Race Car Red",
          "bottle of Greedy Dog",
          "bottle of Lambada Lambic",
          "fancy tin beer can",
          "artisanal homebrew gift package",
          "liquid bread",
          "tin tam",
          "tin cup",
          "tin foil",
          "tin drum",
          "tin roof (rusted)",
          "tin snips",
          "tin lizzie",
          "foetid seal tear",
          "cold seal sweat",
          "boiling seal blood",
          "crystalline seal eye",
          "studded sealhide shield",
          "scabrous seal epaulets",
          "abyssal battle plans",
          "seal medal",
          "deanimated reanimator's coffin",
          "flask of embalming fluid",
          "blank diary",
          "boot knife",
          "broken beer bottle",
          "sharpened spoon",
          "candy knife",
          "soap knife",
          "disco horoscope (Aquarius)",
          "disco horoscope (Pisces)",
          "disco horoscope (Aries)",
          "disco horoscope (Taurus)",
          "disco horoscope (Gemini)",
          "disco horoscope (Cancer)",
          "disco horoscope (Leo)",
          "disco horoscope (Virgo)",
          "disco horoscope (Libra)",
          "disco horoscope (Scorpio)",
          "disco horoscope (Sagittarius)",
          "disco horoscope (Capricorn)",
          "The Sagittarian's leisure pants",
          "toy accordion",
          "antique accordion",
          "beer-battered accordion",
          "baritone accordion",
          "mama's squeezebox",
          "guancertina",
          "accordion file",
          "accord ion",
          "bone bandoneon",
          "pentatonic accordion",
          "non-Euclidean non-accordion",
          "Accordion of Jordion",
          "autocalliope",
          "accordionoid rocca",
          "pygmy concertinette",
          "ghost accordion",
          "peace accordion",
          "alarm accordion",
          "All-Hallow's Steve's fright wig",
          "KoL Con X Treasure Map",
          "discocktail",
          "KoL Con X Bingo Card",
          "Temporal Tempera Tube",
          "Tallowcreme Halloween Pumpkin",
          "Way More Tears&trade; pepper spray",
          "Milk Studs",
          "box of Dweebs",
          "bag of W&Ws",
          "PEEZ dispenser",
          "Swizzler",
          "Bugbearclaw Donut",
          "little red jam",
          "Whenchamacallit bar",
          "8-bit banana",
          "vial of blood simple syrup",
          "bone bons",
          "ironic mint",
          "unused walkie-talkie",
          "walkie-talkie",
          "killing jar",
          "security flashlight",
          "Effermint&trade; tablets",
          "sturdy cane",
          "huge bowl of candy",
          "Ultra Mega Sour Ball",
          "carton of rotten eggs",
          "desert sightseeing pamphlet",
          "a suspicious address",
          "Bal-musette accordion",
          "Cajun accordion",
          "quirky accordion",
          "Skipper's accordion",
          "Pantsgiving",
          "can of sardines",
          "high-calorie sugar substitute",
          "pat of butter",
          "dinner roll",
          "cold mashed potatoes",
          "whole turkey leg",
          "deviled egg",
          "finger exerciser",
          "dented spoon",
          "old love note",
          "old school beer pull tab",
          "nail file",
          "old candy wrapper",
          "gym membership card",
          "post-holiday sale coupon",
          "dry cleaning receipt",
          "pocket lint (blue)",
          "pocket lint (green)",
          "pocket lint (white)",
          "pocket lint (orange)",
          "bowl of petunias",
          "power sock",
          "wool sock",
          "moustache sock",
          "spirit gum",
          "spirit pillow",
          "spirit sheet",
          "spirit mattress",
          "spirit blanket",
          "spirit bed",
          "spirit bell",
          "spoonful of Linguine-Os",
          "freezer-burned frost-bitten tortellini",
          "blob of Alphredo&trade;",
          "handful of crafty noodles",
          "tangled mass of creepy pasta",
          "Can of Spaghetto",
          "Chef Boy, R&D's business card",
          "Thwaitgold ant statuette",
          "experimental carbon fiber pasta additive",
          "hazardous sauce dosimeter",
          "flask flops",
          "candied nuts",
          "candied bolts",
          "gingerbread robot",
          "petit 4.1",
          "nut-shaped Crimbo cookie",
          "tiny plastic GORM-8",
          "tiny plastic warbear",
          "tiny plastic Toybot",
          "tiny plastic warbear fortress",
          "tiny plastic K.R.A.M.P.U.S.",
          "warbear whosit",
          "warbear hoverbelt piecepart",
          "warbear hoverbelt",
          "warbear battery",
          "warbear badge",
          "warbear wardance potion",
          "warbear bearserker potion",
          "warbear liquid overcoat",
          "warbear feasting bread",
          "warbear warrior bread",
          "warbear thermoregulator bread",
          "warbear feasting mead",
          "warbear bearserker mead",
          "warbear blizzard mead",
          "warbear helm fragment",
          "warbear plain fedora",
          "warbear feathered fedora",
          "warbear fancy fedora",
          "warbear plain helm",
          "warbear spiked helm",
          "warbear electro-spiked helm",
          "warbear plain ushanka",
          "warbear lined ushanka",
          "warbear heated ushanka",
          "warbear trouser fragment",
          "warbear party pants",
          "warbear ceremonial party pants",
          "warbear high festival pants",
          "warbear battle greaves",
          "warbear officer greaves",
          "warbear bearserker greaves",
          "warbear long johns",
          "warbear fleece-lined long johns",
          "warbear electric long johns",
          "warbear accoutrements chunk",
          "warbear goggles",
          "warbear snowblindness goggles",
          "warbear polarized goggles",
          "warbear laser bowtie",
          "warbear plasma bowtie",
          "warbear nuclear bowtie",
          "warbear warscarf",
          "warbear fleece-lined warscarf",
          "warbear electric warscarf",
          "warbear requisition box",
          "warbear exo-arm",
          "warbear foil hat",
          "warbear energy bracers",
          "warbear oil pan",
          "warbear laser beacon",
          "warbear exhaust manifold",
          "warbear jackhammer drill press",
          "warbear auto-anvil",
          "warbear induction oven",
          "warbear chemistry lab",
          "warbear officer requisition box",
          "warbear empathy chip",
          "warbear drone assembler",
          "warbear breakfast machine assembler",
          "blind-packed die-cast metal toy",
          "tiny die-cast Bashful the Reindeer",
          "tiny die-cast Doc the Reindeer",
          "tiny die-cast Dopey the Reindeer",
          "tiny die-cast Grumpy the Reindeer",
          "tiny die-cast Happy the Reindeer",
          "tiny die-cast Sleepy the Reindeer",
          "tiny die-cast Sneezy the Reindeer",
          "tiny die-cast Zeppo the Reindeer",
          "tiny die-cast factory worker elf",
          "tiny die-cast gift-wrapping elf",
          "tiny die-cast middle-management elf",
          "tiny die-cast pencil-pusher elf",
          "tiny die-cast stocking-stuffer elf",
          "tiny die-cast Unionize the Elves Sign",
          "tiny die-cast CrimboTown Toy Factory",
          "tiny die-cast death ray in a pear tree",
          "tiny die-cast turtle mech",
          "tiny die-cast Swiss hen",
          "tiny die-cast killing bird",
          "tiny die-cast golden ring",
          "tiny die-cast goose a-laying",
          "tiny die-cast swarm a-swarming",
          "tiny die-cast blade a-spinning",
          "tiny die-cast arc-welding Elfborg",
          "tiny die-cast ribbon-cutting Elfborg",
          "tiny die-cast Rudolphus of Crimborg",
          "tiny die-cast Father Crimborg",
          "tiny die-cast Don Crimbo",
          "tiny die-cast Uncle Hobo",
          "tiny die-cast Father Crimbo",
          "The Smith's Tome",
          "Flaskfull of Hollow",
          "lump of Brituminous coal",
          "handful of Smithereens",
          "Every Day is Like This Sundae",
          "Miserable Pie",
          "This Charming Flan",
          "Irish Coffee, English Heart",
          "Strikes Again Bigmouth",
          "Paint A Vulgar Pitcher",
          "Golden Light",
          "Louder Than Bomb",
          "Handsome Devil",
          "Work is a Four Letter Sword",
          "Staff of the Headmaster's Victuals",
          "Sheila Take a Crossbow",
          "A Light that Never Goes Out",
          "Half a Purse",
          "Hairpiece On Fire",
          "Vicar's Tutu",
          "Hand in Glove",
          "Meat Tenderizer is Murder",
          "Ouija Board, Ouija Board",
          "Hand that Rocks the Ladle",
          "Saucepanic",
          "Frankly Mr. Shank",
          "Shakespeare's Sister's Accordion",
          "third-hand lantern",
          "loose purse strings",
          "pickled egg",
          "cup of lukewarm tea",
          "warbear soda machine assembler",
          "warbear black box",
          "warbear high-efficiency still",
          "warbear LP-ROM burner",
          "warbear gyrocopter",
          "warbear robo-camouflage unit",
          "warbear beeping telegram",
          "warbear procedural hilarity drone",
          "warbear metalworking primer",
          "warbear sequential gaiety distribution system",
          "glass slipper",
          "antimatter wad",
          "warbear superpotion",
          "warbear liquid lasers",
          "warbear rejuvenation potion",
          "broken warbear gyrocopter",
          "warbear gyro",
          "recording of Rolando's Rondo of Resisto",
          "warbear metalworking primer (used)",
          "warbear empathy chip (used)",
          "warbear drone codes",
          "breakfast mess",
          "warbear breakfast machine",
          "breakfast miracle",
          "Cloaca Cola Polar",
          "warbear soda machine",
          "festive warbear bank",
          "grimstone mask",
          "praying Grim Brother",
          "Grim Brothers' story book",
          "hibernating Grimstone Golem",
          "grim fairy tale",
          "grimstone galoshes",
          "single of Inigo's Incantation of Inspiration",
          "single of Donho's Bubbly Ballad",
          "Discontent&trade; Winter Garden Catalog",
          "packet of winter seeds",
          "snow berries",
          "ice harvest",
          "frost flower",
          "snow cleats",
          "liquid ice pack",
          "snow boards",
          "snow crab",
          "Ice Island Long Tea",
          "unfinished ice sculpture",
          "ice sculpture",
          "ice house",
          "snow machine",
          "snow mobile",
          "ice bucket",
          "snow shovel",
          "bod-ice",
          "snow belt",
          "ice nine",
          "snow fort",
          "En Una Fila Tequila",
          "Skully's hot chocolate",
          "warbear dress helmet",
          "warbear dress bracers",
          "warbear dress greaves",
          "sweatband",
          "gym shorts",
          "ankleweights",
          "sweat socks",
          "pint of sweat",
          "Jerks' Health&trade; Magazine",
          "Five Second Energy&trade;",
          "pixie axie",
          "sour powder",
          "licorice whip",
          "anise-flavored venom",
          "snakebite",
          "candy stick",
          "candied pecan",
          "pecan pie",
          "chocolate-stained collar",
          "candy mountain oyster",
          "chocotini",
          "chocolate rabbit's foot",
          "candy carrot",
          "candy carrot cake",
          "carrot-on-a-stick",
          "weasel stomping pants",
          "mulberry",
          "mulled berry wine",
          "lemony scales",
          "lemon party hat",
          "lemon shirt",
          "lemon drop trousers",
          "lemonhead caviar",
          "gummi sword",
          "small gummi fin",
          "chocolate cow bone",
          "gummi fang",
          "leftover canap&eacute;s",
          "magnum of fancy champagne",
          "silver cow creamer",
          "Outer Wolf&trade; cologne",
          "lupine appetite hormones",
          "wolf whistle",
          "witch's bread",
          "witch's brew",
          "witch's bra",
          "mid-level medieval mead",
          "R&uuml;mpelstiltz",
          "spinning wheel",
          "hi-octane carrot juice",
          "hare brush",
          "hare pin",
          "odd silver coin",
          "cinnamon cannoli",
          "expensive champagne",
          "polo trophy",
          "fancy oil painting",
          "solid gold rosary",
          "ornate dowsing rod",
          "straw",
          "leather",
          "clay",
          "filling",
          "parchment",
          "glass",
          "fire hose",
          "fireman's lunch",
          "plain paper hat",
          "ice cream sandwich",
          "&quot;honey&quot; dipper",
          "plumber's lunch",
          "skull gearshift knob",
          "nachos of the night",
          "Sketcherz&trade;",
          "can of Adultwitch&trade;",
          "smudge stick",
          "portable wall",
          "large tankard of ale",
          "scroll case",
          "jug of &quot;wine&quot;",
          "juggling ball",
          "crappy camera",
          "humble pie",
          "small golem",
          "shaking crappy camera",
          "crappy waiter disguise",
          "Copperhead Charm",
          "The First Pizza",
          "The Lacrosse Stick of Lacoronado",
          "The Eye of the Stars",
          "The Stankara Stone",
          "Murphy's Rancid Black Flag",
          "The Shield of Brook",
          "Red Zeppelin ticket",
          "Copperhead Charm (rampant)",
          "unnamed cocktail",
          "handful of tips",
          "unrequired jacket",
          "tommy gun",
          "drum of tommy ammo",
          "throwing knife",
          "throwing spoon",
          "throwing fork",
          "breadchucks",
          "shuriken salad",
          "combat fan",
          "red silk skirt",
          "blowdart",
          "Buddy Bjorn",
          "The Nuge's favorite crossbow",
          "sweet roll Alabama",
          "Saturday Night Special",
          "lynyrd snare",
          "fleetwood chain",
          "Green Manalishi",
          "black blade",
          "fire of unknown origin",
          "eagle's milk",
          "eagle feather",
          "one pill",
          "Jefferson wings",
          "fleetwood macaroni",
          "cheesy eagle sauce",
          "fleetwood mac 'n' cheese",
          "lynyrd skin",
          "lynyrdskin cap",
          "lynyrdskin tunic",
          "lynyrdskin breeches",
          "cigarette lighter",
          "priceless diamond",
          "Flamin' Whatshisname",
          "lynyrd musk",
          "Kashmir sweater",
          "custard pie",
          "tea for one",
          "bottle of Evermore",
          "red box",
          "red red wine",
          "red rum",
          "Murderer's Punch",
          "red velvet cake",
          "red letter",
          "red book",
          "red masque",
          "red-hot poker",
          "Red X Shield",
          "red badge",
          "red shirt",
          "red coat",
          "red shoe",
          "big red button",
          "red button",
          "red blood cells",
          "red eye",
          "glark cable",
          "Red Fox glove",
          "red foxglove",
          "Thwaitgold dragonfly statuette",
          "Sneaky Pete's leather jacket",
          "jug of Sneaky Pete's Mojo",
          "shot of Sneaky Pete's Mojo",
          "Anniversary Miniature Sword & Martini Guy",
          "really tiny cocktail shaker",
          "mini-martini",
          "smoke grenade",
          "molotov soda",
          "pile of ashes",
          "crate of firebombs",
          "firebomb",
          "Sneaky Pete's basket",
          "[7262]&quot;I Love Me, Vol. I&quot;",
          "photograph of a dog",
          "photograph of a red nugget",
          "photograph of an ostrich egg",
          "disposable instant camera",
          "Sneaky Pete's leather jacket (collar popped)",
          "Letter for Melvign the Gnome",
          "Professor What garment",
          "&quot;2 Love Me, Vol. 2&quot;",
          "Thinknerd Blind-Packed Toy",
          "tiny plastic Professor What",
          "tiny plastic Jared the Duskwalker",
          "tiny plastic Duke Starkiller",
          "tiny plastic Gary Claybender",
          "tiny plastic Captain Kerkard",
          "robot grease",
          "returned Thinknerd package",
          "wind-up Whatsian robot",
          "wind-up vampire teeth",
          "wind-up navigation droid",
          "wind-up owl",
          "wind-up ensign",
          "crying statue earrings",
          "plastic Duskwalker necklace",
          "plastic replica blaster pistol",
          "Gary Claybender's Time Screwer",
          "Space Tourist palmdoctor",
          "amok putter",
          "amok pudding",
          "deactivated putty buddy",
          "putty coat",
          "can of V-11",
          "elevennis shoes",
          "elevent",
          "elevenderizing hammer",
          "Professor What T-Shirt",
          "heavy-duty bendy straw",
          "pellet of plant food",
          "sewing kit",
          "Spookyraven billiards room key",
          "[7302]Spookyraven library key",
          "Lady Spookyraven's necklace",
          "telegram from Lady Spookyraven",
          "Lady Spookyraven's powder puff",
          "Lady Spookyraven's finest gown",
          "Lady Spookyraven's dancing shoes",
          "old eyebrow pencil",
          "old rosewater cream",
          "old bronzer",
          "elegant nightstick",
          "still grill",
          "box of hickory chips",
          "dusty poppet",
          "rickety rocking horse",
          "antique jack-in-the-box",
          "jar of baby ghosts",
          "ghost of a necklace",
          "Elizabeth's Dollie",
          "Elizabeth's paintbrush",
          "Stephen's lab coat",
          "Stephen's secret formula",
          "Jacob's rung",
          "haunted battery",
          "electric snakebite",
          "rubber ribcage",
          "synthetic marrow",
          "funny bone",
          "half-melted spoon",
          "the funk",
          "gunky chicken",
          "creepy doll head",
          "droopy doll eye",
          "creepy voice box",
          "haunted paddle-ball",
          "spooky sound effects record",
          "spooky alphabet block",
          "tiny dancer",
          "spooky music box mechanism",
          "moose antlers",
          "moose thought",
          "moose chocolate",
          "painting of a glass of wine",
          "ancient oil painting of yourself",
          "ornate picture frame",
          "doll-eye amulet",
          "ghost toga",
          "sheet cake",
          "ghost key",
          "picture of you",
          "Staff of the Electric Range",
          "deluxe layer cake",
          "chunk of hot iron",
          "red-hot boilermaker",
          "coal shovel",
          "hot coal",
          "coal dust",
          "Bram's choker",
          "plaid swatch",
          "plaid bandage",
          "plaid pocket square",
          "plaid skirt",
          "bloodstain stick",
          "fabric softener",
          "fabric hardener",
          "bottle of laundry sherry",
          "industrial strength starch",
          "extra-flat panini",
          "mangled finger",
          "Psychotic Train wine",
          "crazy hobo notebook",
          "pie man was not meant to eat",
          "sommelier's towel",
          "tarnished tastevin",
          "actual tapas",
          "ghast iron ingot",
          "ghast iron cleaver",
          "ghast iron Garibaldi",
          "ghast iron heater shield",
          "ghast iron codpiece",
          "Pendant of Gargalesis",
          "Little Geneticist DNA-Splicing Lab",
          "DNA extraction syringe",
          "Gene Tonic: Dude",
          "Gene Tonic: Beast",
          "Gene Tonic: Construct",
          "Gene Tonic: Undead",
          "Gene Tonic: Humanoid",
          "Gene Tonic: Insect",
          "Gene Tonic: Hippy",
          "Gene Tonic: Orc",
          "Gene Tonic: Demon",
          "Gene Tonic: Horror",
          "Gene Tonic: Fish",
          "Gene Tonic: Goblin",
          "Gene Tonic: Pirate",
          "Gene Tonic: Plant",
          "Gene Tonic: Weird",
          "Gene Tonic: Elf",
          "Gene Tonic: Mer-kin",
          "Gene Tonic: Slime",
          "Gene Tonic: Penguin",
          "Gene Tonic: Elemental",
          "Gene Tonic: Constellation",
          "Gene Tonic: Hobo",
          "Steam Card: Dungeon Fist (#1)",
          "Steam Card: Dungeon Fist (#2)",
          "Steam Card: Dungeon Fist (#3)",
          "Steam Card: Space Trip (#1)",
          "Steam Card: Space Trip (#2)",
          "Steam Card: Space Trip (#3)",
          "Steam Card: Meteoid (#1)",
          "Steam Card: Meteoid (#2)",
          "Steam Card: Meteoid (#3)",
          "Steam Card: DemonStar (#1)",
          "Steam Card: DemonStar (#2)",
          "Steam Card: DemonStar (#3)",
          "Steam Card: Jackass Plumber (#1)",
          "Steam Card: Jackass Plumber (#2)",
          "Steam Card: Jackass Plumber (#3)",
          "pencil thin mushroom",
          "Paradaisical Cheeseburger recipe",
          "salty sailor salt",
          "bike rental broupon",
          "Taco Dan's Taco Stand Cocktail Sauce Bottle",
          "sprinkle shaker",
          "sleight-of-hand mushroom",
          "Taco Dan's Taco Stand's Taco Receipt",
          "Beach Buck",
          "Fun-Guy spore",
          "Boletus Broletus mushroom",
          "Omphalotus Omphaloskepsis mushroom",
          "Gyromitra Dynomita mushroom",
          "Helvella Haemophilia mushroom",
          "Stemonitis Staticus mushroom",
          "Tremella Tarantella mushroom",
          "Pastaco shell",
          "Beefy Crunch Pastaco",
          "Brain Food Pastaco",
          "Cool Brunch Pastaco",
          "Medical Pastaco",
          "Energy Buzz Pastaco",
          "Ludovico Pastaco",
          "overpowering mushroom wine",
          "complex mushroom wine",
          "smooth mushroom wine",
          "blood-red mushroom wine",
          "buzzing mushroom wine",
          "swirling mushroom wine",
          "Taco Dan's Basic Taco Dan Taco",
          "Taco Dan's Taco Fish Fish Taco",
          "Taco Dan's Super Taco-Riffic Taco Sauce!",
          "regular-size brogurt",
          "super-size brogurt",
          "broberry brogurt",
          "brocolate brogurt",
          "French bronilla brogurt",
          "History's Most Offensive Jokes, Vol. IX",
          "Now You're Cooking With Grease",
          "Sloppy Seconds Diner Employee Handbook",
          "industrial strength anti-fungal spray",
          "Brogre brorts",
          "Brogre brolo shirt",
          "Brogre bucket hat",
          "Spring Break Beach tattoo coupon",
          "airplane charter: Spring Break Beach",
          "one-day ticket to Spring Break Beach",
          "8-billed baseball cap",
          "extremely wet T-shirt",
          "giant shrimp fork",
          "BROS Energy Drink",
          "go-go potion",
          "shrimp cocktail",
          "Yolo&trade; chocolates",
          "string of moist beads",
          "Ultimate Mind Destroyer",
          "Meat-inflating powder",
          "possessed sugar cube",
          "sugar fairy",
          "sugar bunny",
          "sweet tooth",
          "Rompedores de Fantasmas",
          "La Fantasma y La Oscuridad",
          "Fantasma en la M&aacute;quina",
          "loosening powder",
          "powdered castoreum",
          "drain dissolver",
          "triple-distilled turpentine",
          "detartrated anhydrous sublicalc",
          "triatomaceous dust",
          "bottle of Chateau de Vinegar",
          "blasting soda",
          "unstable fulminate",
          "wine bomb",
          "recipe: mortar-dissolving solution",
          "bottled day",
          "ghost formula",
          "Thwaitgold wheel bug statuette",
          "Hot 'n' Scarys",
          "black map",
          "black gold",
          "Texas tea",
          "dark hamethyst ring",
          "dark baconstone ring",
          "dark porquoise ring",
          "little black book",
          "black cloak",
          "black label",
          "Mornington crescent roll",
          "black eye shadow",
          "crumbling wooden wheel",
          "poppy",
          "opium grenade",
          "duonoculars",
          "plastic rock",
          "witch's spare house key",
          "giant spider leg",
          "wand of pigification",
          "glass of bourbon",
          "burned government manual fragment",
          "government cheese",
          "pair of government shades",
          "space junk",
          "government",
          "alien drugs",
          "weird space book",
          "alien force field disruptor bean",
          "government-issued night-vision goggles",
          "loaf of alien bread",
          "grilled cheese sandwich",
          "alien protein powder",
          "rocket fuel",
          "alien source code printout",
          "alien source code printout (used)",
          "stealth bomber",
          "space beast fur",
          "twitching space egg",
          "ramekin of space nuts",
          "space beast fur hat",
          "space beast fur pants",
          "space beast fur whip",
          "space invader",
          "space heater",
          "space bar",
          "space port",
          "space needle",
          "buffed alien drugs",
          "hot ashes",
          "ash soda",
          "liquid smoke",
          "dollop of barbecue sauce",
          "bowl of marinade",
          "shaker of dry rub",
          "bottle of lighter fluid",
          "white page",
          "white elephant gift",
          "white blood cells",
          "white wine",
          "gummi turtle",
          "turtle-shaped rock",
          "giraffe-necked turtle",
          "musk turtle",
          "programmable turtle",
          "mocking turtle",
          "ham steak",
          "time-twitching toolbelt",
          "Chroner",
          "Time Lord Badge of Honor",
          "Time Bandit Badge of Courage",
          "Friendliness Beverage",
          "silent pea shooter",
          "D roll",
          "kiwi beak",
          "New Zealand iced tea",
          "droll monocle",
          "future drug: Muscularactum",
          "future drug: Smartinex",
          "future drug: Coolscaline",
          "twitching time capsule",
          "liquid shifting time weirdness",
          "solid shifting time weirdness",
          "rack of dinosaur ribs",
          "scotch on the rocks",
          "yabba dabba doo rag",
          "wooly loincloth",
          "strange helix fossil",
          "S.S. Ticket",
          "Clan speakeasy",
          "glass of &quot;milk&quot;",
          "cup of &quot;tea&quot;",
          "thermos of &quot;whiskey&quot;",
          "Lucky Lindy",
          "Bee's Knees",
          "Sockdollager",
          "Ish Kabibble",
          "Hot Socks",
          "Phonus Balonus",
          "Flivver",
          "Sloppy Jalopy",
          "haunted flame",
          "temporary yak tattoo",
          "Fitspiration&trade; poster",
          "giant neckbeard",
          "artisanal hand-squeezed wheatgrass juice",
          "punk patch",
          "steampunk potion",
          "vial of swamp vapors",
          "turtle mud",
          "Redeye&trade; Eyedrops",
          "Dweebisol&trade; inhaler",
          "Lewd Lemmy Hair Oil",
          "tomato soup poster",
          "bubblin' chemistry solution",
          "voodoo glowskull",
          "pygmy adder oil",
          "pygmy witchhazel",
          "short deposition",
          "straw pole",
          "electric copperhead potion",
          "ninja fear powder",
          "ninja eyeblack",
          "button rouge",
          "Red Army camouflage kit",
          "lynyrd skinner toothblack",
          "flask of rainwater",
          "blue oyster badge",
          "plastic Jefferson wings",
          "dancing fan",
          "page of the Necrohobocon",
          "black magic powder",
          "black friar's tonsure",
          "government-issue identification badge",
          "alien hologram projector",
          "irradiated turtle",
          "cigar box turtle",
          "shellacked shell",
          "pillow shell",
          "whatsit-covered turtle shell",
          "oil shell",
          "frozen turtle shell",
          "shocked shell",
          "ingot turtle",
          "heavy duty umbrella",
          "pool skimmer",
          "miniature life preserver",
          "lightning milk",
          "aquaconda brain",
          "thunder thigh",
          "gourmet gourami oil",
          "catfish whiskers",
          "freshwater fishbone",
          "fishbone catcher's mitt",
          "fishbone kneepads",
          "fishbone corset",
          "fishbone fins",
          "fishbone facemask",
          "fishbone belt",
          "fishbone bracers",
          "neoprene skullcap",
          "goblin water",
          "dumb mud",
          "Sogg-Os",
          "Lord Soggyraven's Slippers",
          "Ancient Protector Soda",
          "liquid ice",
          "Wet Russian",
          "filet of The Fish",
          "Thwaitgold spider statuette",
          "thunder down underwear",
          "famous blue raincoat",
          "lightning rod",
          "law-abiding citizen cane",
          "legitimate business on the beach",
          "hep waders",
          "jive turkey leg",
          "birdbone corset",
          "candy cigarette",
          "4-dimensional fez",
          "throwing candy",
          "super-absorbent tarp",
          "unquiet spirits",
          "banjo kazoo mount",
          "blue grass",
          "Time Lord Participation Mug",
          "Time Bandit Time Towel",
          "Caveman Dan's favorite rock",
          "dog ointment",
          "gumshoes",
          "flapper floppers",
          "sneakeasies",
          "plastic nunchaku",
          "sticky hand whip",
          "glow-in-the-dark necklace",
          "Groll doll",
          "cap gun",
          "portable cassette player",
          "chewable paper",
          "rubber spider",
          "&quot;KICK ME&quot; sign",
          "confiscated comic book",
          "confiscated cell phone",
          "confiscated love note",
          "LCD game: Food Eater",
          "LCD game: Garbage River",
          "LCD game: Burger Belt",
          "The Confiscator's Grimoire",
          "rubber nubbin",
          "rubber cape",
          "Thor's Pliers",
          "candy UFOs",
          "water wings for babies",
          "beautiful rainbow",
          "Strix stix",
          "vampire pellet",
          "non-aged vinegar",
          "unsanitized scalpel",
          "gladiator tunica",
          "Roman sadnals",
          "madius",
          "radiator heater shield",
          "salt wages",
          "centurion helmet",
          "Chroner cross",
          "pteruges",
          "Bruno's blessing of Mars",
          "Dennis's blessing of Minerva",
          "Burt's blessing of Bacchus",
          "Freddie's blessing of Mercury",
          "Chroner trigger",
          "Xi Receiver Unit",
          "transmission from planet Xi",
          "Black Bart's Booty",
          "Xiblaxian circuitry",
          "Xiblaxian polymer",
          "Xiblaxian alloy",
          "Xiblaxian crystal",
          "Xiblaxian holo-wrist-puter simcode",
          "Xiblaxian cache locator simcode",
          "Xiblaxian holo-training simcode",
          "Xiblaxian direct marketing simcode",
          "Xiblaxian holo-buddy simcode",
          "Xiblaxian encrypted political prisoner",
          "Xiblaxian holo-schematic: stealth cowl",
          "Xiblaxian holo-schematic: stealth trousers",
          "Xiblaxian holo-schematic: stealth vest",
          "Xiblaxian holo-schematic: ultraburrito",
          "Xiblaxian holo-schematic: space whiskey",
          "Xiblaxian holo-schematic: residence cube",
          "Xiblaxian holo-schematic: xeno-goggles",
          "Xiblaxian 5D printer",
          "Xiblaxian holo-bowtie",
          "Xiblaxian xeno-detection goggles",
          "Xiblaxian stealth cowl",
          "Xiblaxian stealth trousers",
          "Xiblaxian stealth vest",
          "Xiblaxian ultraburrito",
          "Xiblaxian space-whiskey",
          "Xiblaxian residence-cube",
          "They liver",
          "They liver popsicle",
          "holo-tank",
          "holo-bomber",
          "holo-platoon",
          "residual zeal",
          "Xiblaxian holo-wrist-puter",
          "defective Golden Mr. Accessory",
          "airplane charter: Conspiracy Island",
          "one-day ticket to Conspiracy Island",
          "Coinspiracy",
          "Personal Ventilation Unit",
          "the most dangerous bait",
          "&quot;meat&quot; stick",
          "transdermal smoke patch",
          "specialty ammo bandolier",
          "pair of plants",
          "Sasq&trade; watch",
          "smoker's cloak",
          "camouflage T-shirt",
          "experimental serum G-9",
          "heavy-duty clipboard",
          "battery-powered drill",
          "limp broccoli",
          "giant yellow hat",
          "monkey barf",
          "delicious candy",
          "jangly bracelet",
          "cuddly teddy bear",
          "ice-cold Cloaca Zero",
          "first-aid pouch",
          "khaki duffel bag",
          "airborne mutagen",
          "SHAWARMA Initiative Keycard",
          "bottle-opener keycard",
          "Armory keycard",
          "initiative shawarma",
          "warm war shawarma",
          "karma shawarma",
          "Jungle Juice",
          "Amnesiac Ale",
          "Highest Bitter",
          "mercenary pistol",
          "mercenary rifle",
          "Merc Core Field Manual: Sanity Maintenance",
          "Merc Core Field Manual: Intimidation Techniques",
          "Merc Core challenge coin",
          "Merc Core deployment orders",
          "TI-9000 calculator",
          "unused soap",
          "impure gasoline",
          "Z-Bone steak",
          "viral DNA",
          "tarnished bottlecap",
          "seared dino steak",
          "bottle of drinkin' gas",
          "handful of napalm",
          "dove DNA",
          "gelatinous meat mass",
          "99.44% pure math",
          "simple AI",
          "corrupted bird DNA",
          "sentient meat mass",
          "zombie dinosaur egg",
          "french-fry grabber",
          "iShield",
          "white earbuds",
          "iFlail",
          "unidentifiable dried fruit",
          "flat cider",
          "trench lighter",
          "experimental serum P-00",
          "military-grade fingernail clippers",
          "encrypted micro-cassette recorder",
          "gore bucket",
          "pack of smokes",
          "ESP suppression collar",
          "GPS-tracking wristwatch",
          "Project T. L. B.",
          "Agent Mauve",
          "special clip: tracers",
          "special clip: wailers",
          "special clip: squelchers",
          "special clip: splatterers",
          "special clip: boneburners",
          "special clip: graveburpers",
          "perl necklace",
          "Fudge Fiber Armor Plating",
          "ruby on canes",
          "petit fortran",
          "java cookie",
          "cookie cookie",
          "tiny plastic exo-suited miner",
          "tiny plastic semi-autonomous drill unit",
          "tiny plastic ambulatory robo-minecart",
          "tiny plastic Crimbot",
          "tiny plastic Crimbomega",
          "flask of mining oil",
          "radiation-resistant helmet",
          "servo-assisted exo-pants",
          "high-energy mining laser",
          "peppermint tailings",
          "nugget of Crimbonium",
          "cylindrical mold",
          "Crimbonium fuel rod",
          "Petite Paintbrush",
          "Crimbot schematic: Gun Face",
          "Crimbot schematic: Big Head",
          "Crimbot schematic: Security Chassis",
          "Crimbot schematic: Military Chassis",
          "Crimbot schematic: Crab Core",
          "Crimbot schematic: Dynamo Head",
          "Crimbot schematic: Cyclopean Torso",
          "Crimbot schematic: Really Big Head",
          "Crimbot schematic: Nerding Module",
          "Crimbot schematic: Refrigerator Chassis",
          "Crimbot schematic: Bug Zapper",
          "Crimbot schematic: Rodent Gun",
          "Crimbot schematic: Rivet Shocker",
          "Crimbot schematic: Mega Vise",
          "Crimbot schematic: Mobile Girder",
          "Crimbot schematic: Swiss Arm",
          "Crimbot schematic: Data Analyzer",
          "Crimbot schematic: Maxi-Mag Lite",
          "Crimbot schematic: Bit Masher",
          "Crimbot schematic: Camera Claw",
          "Crimbot schematic: Power Arm",
          "Crimbot schematic: Wrecking Ball",
          "Crimbot schematic: Ribbon Manipulator",
          "Crimbot schematic: Power Stapler",
          "Crimbot schematic: Grease Gun",
          "Crimbot schematic: Grease / Regular Gun",
          "Crimbot schematic: Snow Blower",
          "Crimbot schematic: Cold Shoulder",
          "Crimbot schematic: Candle Lighter",
          "Crimbot schematic: Lamp Filler",
          "Crimbot schematic: Heavy-Duty Legs",
          "Crimbot schematic: Tripod Legs",
          "Crimbot schematic: Rollerfeet",
          "Crimbot schematic: Sim-Simian Feet",
          "Crimbot schematic: High-Speed Fan",
          "Crimbot schematic: Big Wheel",
          "Crimbot schematic: Hoverjack",
          "Crimbot schematic: Gun Legs",
          "Crimbot schematic: Heavy Treads",
          "Crimbot schematic: Rocket Skirt",
          "recovered elf magazine",
          "recovered elf toothbrush",
          "recovered elf sleeping pills",
          "recovered elf underpants",
          "recovered elf wallet",
          "recovered elf pocketwatch",
          "recovered elf photo album",
          "recovered elf smartphone",
          "Size XI Wizard's Robe",
          "Bit O' Quail Spleen",
          "Take Eleven Bar",
          "mimeplasm",
          "BOOterfinger",
          "Moonds",
          "Big Punk",
          "fist turkey outline",
          "brass turkey knuckles",
          "Friendly Turkey",
          "Agitated Turkey",
          "Ambitious Turkey",
          "neutron lollipop",
          "gamma nog",
          "sneaky wrapping paper",
          "Thwaitgold nit statuette",
          "picky tweezers",
          "Crimbo Credit",
          "single atom",
          "Time Cape",
          "Time Cloak",
          "sleeve deuce",
          "pocket ace",
          "nastygeist",
          "gold tooth",
          "portable table",
          "outlaw bandana",
          "whiskey in a broken glass",
          "shot of mescal",
          "glass of herbal tequila",
          "minin' dynamite",
          "plaid cowboy hat",
          "spooky lasso",
          "rusted-out shootin' iron",
          "rattler rattle",
          "big bag of money",
          "Crimbo sapling",
          "even more tinsel",
          "box of old Crimbo decorations",
          "letter to Ed the Undying",
          "copy of a jerk adventurer's father's diary",
          "[7961]Staff of Ed",
          "[7962]Eye of Ed",
          "[7963]ancient amulet",
          "[7964]Staff of Fats",
          "[7965]Holy MacGuffin",
          "Ka coin",
          "World's Best Adventurer sash",
          "topiary nugglet",
          "beehive",
          "electric boning knife",
          "Aggressive Carrot",
          "mummified fig",
          "mummified loaf of bread",
          "mummified beef haunch",
          "linen bandages",
          "cotton bandages",
          "silk bandages",
          "holy spring water",
          "spirit beer",
          "sacramental wine",
          "talisman of Thoth",
          "ancient cure-all",
          "Sister Accessory",
          "Boosty Juice",
          "polyester parachute",
          "polyester pad",
          "polyester peeler",
          "polyester pettipants",
          "polyester panama hat",
          "polyester pulsera",
          "porcelain police baton",
          "porcelain plus-fours",
          "porcelain porkpie",
          "porcelain pepper mill",
          "porcelain pelerine",
          "porcelain phantom mask",
          "polyesterene powder",
          "porcelain powder",
          "choco-Crimbot",
          "smart watch",
          "augmented-reality shades",
          "toy Crimbot mega face",
          "toy Crimbot power glove",
          "toy Crimbot super fist",
          "toy Crimbot rocket legs",
          "Crimbot battery",
          "Crimbot ROM: Rapid Prototyping",
          "Crimbot ROM: Mathematical Precision",
          "Crimbot ROM: Ruthless Efficiency",
          "Mini-Crimbot crate",
          "heavy-duty Crimbot aerial",
          "Crimbomega drive chain",
          "Crimbot ROM: Rapid Prototyping (dirty)",
          "Crimbot ROM: Mathematical Precision (dirty)",
          "Crimbot ROM: Ruthless Efficiency (dirty)",
          "fitness wristband",
          "flask of tainted mining oil",
          "red and green rain stick",
          "Chateau Mantegna room key",
          "Choco-Mint patty",
          "hot mint schnocolate",
          "homeopathic mint tea",
          "electric muscle stimulator",
          "foreign language tapes",
          "bowl of potpourri",
          "ceiling fan",
          "antler chandelier",
          "artificial skylight",
          "Swiss piggy bank",
          "continental juice bar",
          "fancy stationery set",
          "fancy calligraphy pen",
          "alpine watercolor set",
          "tope&eacute;",
          "topiary tights",
          "topiary necktie",
          "bowl of topioca",
          "topiary skunk",
          "topiary noseplugs",
          "trusty whip",
          "crumbling skull",
          "[8042]rock",
          "pot",
          "spelunking fedora",
          "sturdy machete",
          "shotgun",
          "boomerang",
          "mining helmet",
          "X-ray goggles",
          "yellow cape",
          "jetpack",
          "spring boots",
          "spiked boots",
          "heavy pickaxe",
          "torch",
          "[spelunking test kit]",
          "plasma rifle",
          "Bananubis's Staff",
          "The Joke Book of the Dead",
          "The Clown Crown",
          "cursed coffee cup",
          "Tales of Spelunking",
          "golden monkey statuette",
          "golden banana",
          "powdered gold",
          "gold nuggets",
          "Professor of Spelunkology",
          "Stembridge sidearm",
          "warehouse map page",
          "warehouse inventory page",
          "janitor sponge",
          "Spelunker of Fortune",
          "Spelunker's fedora",
          "Spelunker's whip",
          "Spelunker's khakis",
          "Spelunker's Guild prize sack",
          "LOLmec statuette",
          "Spelunker of Fortune (used)",
          "still-beating spleen",
          "Thwaitgold scarab beetle statuette",
          "solid gold jewel",
          "headless sparrow",
          "mangled squirrel",
          "rat carcass",
          "wicker kickers",
          "wicker slicker",
          "wicker knickers",
          "wicker ticker",
          "wicker sticker",
          "wicker clicker",
          "wickerbits",
          "bakelite belt",
          "bakelite badge",
          "bakelite bowl",
          "bakelite brooch",
          "bakelite breeches",
          "bakelite backpack",
          "bakelite bits",
          "aerogel anvil",
          "aerogel akubra",
          "aerogel apron",
          "aerogel ascot",
          "aerogel attache case",
          "aerogel accordion",
          "aerosolized aerogel",
          "wrought-iron wig",
          "wrought-iron winch crank",
          "wrought-iron widget",
          "wrought-iron whisk",
          "wrought-iron walker",
          "wrought-iron waders",
          "wrought-iron flakes",
          "gabardine gaiters",
          "gabardine garland",
          "gabardine gunnysack",
          "gabardine garibaldi",
          "gabardine girdle",
          "gabardine gloves",
          "gabardine smithereens",
          "fiberglass fetish",
          "fiberglass foil",
          "fiberglass fannypack",
          "fiberglass frock",
          "fiberglass fingerguard",
          "fiberglass fedora",
          "fiberglass fibers",
          "bottle of lovebug pheromones",
          "winged yeti fur",
          "talisman of Renenutet",
          "rubber spatula",
          "wooden spoon",
          "crystalline reamer",
          "macroplane grater",
          "bastard baster",
          "obsidian nutcracker",
          "talisman of Seshat",
          "glass eye",
          "invisible potion",
          "time shuriken",
          "ninjammies",
          "Glo-Pop",
          "sugar sphere",
          "Shrubble Bubble",
          "polyeaster egg",
          "porcelain candy dish",
          "Spechunky bar",
          "talisman of Horus",
          "check to the Meatsmith",
          "Skeleton Store office key",
          "bone with a price tag on it",
          "half of a gold tooth",
          "mouse skull",
          "really thick spine",
          "oversized skullcap",
          "three-legged pants",
          "remaindered axe",
          "low-budget shield",
          "cr&ecirc;epy mask",
          "magical baguette",
          "glob of enchanted icing",
          "ginger snaps",
          "mostly-broken sunglasses",
          "unflavored wine cooler",
          "carton of snake milk",
          "sewer snake",
          "pigeon egg",
          "jaunty feather",
          "premium malt liquor",
          "brown paper pants",
          "brown paper bag mask",
          "ring of telling skeletons what to do",
          "breadwand",
          "loafers",
          "Map to Kokomo",
          "bread basket",
          "Ed the Undying exhibit crate",
          "The Crown of Ed the Undying",
          "Doc Galaktik's Invigorating Tonic",
          "map to a hidden booze cache",
          "Cherrytastrophe wine cooler",
          "Radberry Rip wine cooler",
          "Orangemageddon wine cooler",
          "Breakfast Blast wine cooler",
          "Citrus Crush wine cooler",
          "plain bagel",
          "glob of cream cheese",
          "loaf of soda bread",
          "acceptable bagel",
          "standard-issue cupcake",
          "ultra-deluxe cupcake",
          "hypnotic breadcrumbs",
          "popular tart",
          "no-handed pie",
          "Doc Galaktik's Vitality Serum",
          "airplane charter: Dinseylandfill",
          "one-day ticket to Dinseylandfill",
          "FunFunds&trade;",
          "expensive camera",
          "cheap sunglasses",
          "How to Avoid Scams",
          "filthy child leash",
          "bag of gross foreign snacks",
          "bag of park garbage",
          "grogpagne",
          "dirty rigging rope",
          "nasty snuff",
          "sewage-clogged pistol",
          "beard incense",
          "perfume-soaked bandana",
          "toxic globule",
          "toxo",
          "Lemonade-235",
          "isotophat",
          "Three Mile Island shorts",
          "toxic mop",
          "inert sludgepuppy",
          "lead collar",
          "jar of swamp honey",
          "backwoods banjo",
          "grody jug",
          "ratskin pajama pants",
          "turtle voicebox",
          "fake washboard",
          "Dinsey's oculus",
          "Dinsey's radar dish",
          "Dinsey's pizza cutter",
          "Dinsey's brain",
          "Dinsey's glove",
          "Dinsey's pants",
          "brain preservation fluid",
          "keycard &alpha;",
          "keycard &beta;",
          "keycard &gamma;",
          "keycard &delta;",
          "complimentary Dinsey refreshments",
          "lube-shoes",
          "trash net",
          "Dinsey mascot mask",
          "Dinsey food-cone",
          "Dinsey Whinskey",
          "Dinsey face paint",
          "stinky fannypack",
          "garbage sticker",
          "hazmat helmet",
          "Scratch-and-Sniff Guide to Dinseylandfill",
          "Trash, a Memoir",
          "Dinsey Maintenance Manual",
          "Dinsey tattoo kit",
          "nasty gum",
          "Wart Dinsey: An Afterlife",
          "The Lot's engagement ring",
          "portable Mayo Clinic",
          "Mayonex",
          "Mayodiol",
          "Mayostat",
          "Mayozapine",
          "Mayoflex",
          "miracle whip",
          "sphygmayomanometer",
          "tomayohawk-style reflex hammer",
          "mayo lance",
          "unappetizing mayolus",
          "uninteresting mayolus",
          "acceptable mayolus",
          "enticing mayolus",
          "mouth-watering mayolus",
          "newly-hatched mayonnaise wasp",
          "mayo pump",
          "Essence of Bear",
          "Afternoon Delight",
          "Kokomo Resort Chip",
          "Golden Kokomo Resort Chip",
          "Kokomo Resort Brand Suntan Oil",
          "Kokomo Resort Order Pad",
          "The Cocktail Shaker",
          "Kokomo Resort Pass",
          "Mayo Minder&trade;",
          "Mayo de Mayo&trade; mayo",
          "yellow puck",
          "kill screen",
          "orange boxing gloves",
          "dice ring",
          "dice belt buckle",
          "dice-print pajama pants",
          "dice-shaped backpack",
          "dice-print do-rag",
          "dice sunglasses",
          "Thwaitgold caterpillar statuette",
          "powdered dice",
          "yellow pixel",
          "pixel coin",
          "power pill",
          "pixel star",
          "pixel banana",
          "pixel beer",
          "yellow puck with a bow on it",
          "blue pumps",
          "sludgesicle",
          "&Uuml;berraschthexengebr&auml;u",
          "piggy tattoo",
          "baggie of regular-sized tardigrades",
          "little red .epub file",
          "BUBBLE GUM",
          "hustler shades",
          "spicy jerky stick",
          "costume rental shop",
          "muscle oil",
          "bottle of Red-Out",
          "pickpocket protector",
          "sinister-looking cat",
          "jazzy cigarette holder",
          "one glove",
          "leather glove",
          "handful of fire",
          "Cracklin' Oat Bran",
          "disposable lighter",
          "coal contact lenses",
          "conjured ice cream",
          "Iceberglar scarf",
          "icy hairspray",
          "smellbook",
          "assassin's cheese knife",
          "filthy armor",
          "plague pie",
          "batarang",
          "spare neck bolts",
          "grease trap",
          "shamanic ham",
          "porkpocket",
          "Leonard's glasses",
          "warehouse walkie-talkie",
          "janitor's mop",
          "warehouse clerk's glasses",
          "baloney rotgut",
          "carton of gaspers",
          "bronze polish",
          "crident",
          "totally sweet mohawk helmet",
          "spray chrome",
          "filthy monkey head",
          "hand of cards",
          "damp bar rag",
          "lump of goofball ore",
          "skeleton beans",
          "grimy lab coat",
          "creepy nursery rhyme",
          "iron torso box",
          "mercenary headband",
          "radioactive spider venom",
          "x-ray mirror",
          "wrestling mask",
          "hawkface potion",
          "child-sized dracula cloak",
          "devil-summoning hat",
          "shopkeeper beard",
          "alien autoautopsy kit",
          "novelty fruit hat",
          "invisibility cream",
          "handful of stubble",
          "garbage juice slurpee",
          "plunge-leg",
          "funky eyepatch",
          "bucket of fish juice",
          "flashy pirate dreadlocks",
          "captured boozles",
          "drinks tray",
          "eyebrow lifter",
          "yellow submarine",
          "pixel lemon",
          "pixel daiquiri",
          "miniature power pill",
          "yellow pixel potion",
          "Pack of Every Card",
          "Deck of Every Card",
          "popular part",
          "bubblegum heart",
          "cubic zirconia",
          "valuable coin",
          "white mana",
          "black mana",
          "red mana",
          "green mana",
          "blue mana",
          "gift card",
          "hermit factoid",
          "The Emperor's dry cleaning",
          "The Emperor's new hat",
          "The Emperor's new shirt",
          "The Emperor's new pants",
          "lead pipe",
          "rope",
          "wrench",
          "candlestick",
          "knife",
          "revolver",
          "1952 Mickey Mantle card",
          "talking spade",
          "savory dry noodles",
          "pestopiary",
          "ectoplasmic orbs",
          "crudles",
          "agnolotti arboli",
          "spaghetti with ghost balls",
          "succulent marrow",
          "salacious crumbs",
          "fusilli marrownarrow",
          "suggestive strozzapreti",
          "Mountain Stream gastrique",
          "Mt. McLargeHuge oyster",
          "oyster sauce",
          "linguini immondizia bianco",
          "shells a la shellfish",
          "Jick's autograph",
          "high-temperature mining drill",
          "unsmoothed velvet",
          "1,970 carat gold",
          "New Age healing crystal",
          "Volcoino",
          "fizzing spore pod",
          "paisley spore pod",
          "veiny spore pod",
          "hard spore pod",
          "glowing spore pod",
          "hot spore pod",
          "cool spore pod",
          "jingling spore pod",
          "red LavaCo Lamp&trade;",
          "blue LavaCo Lamp&trade;",
          "green LavaCo Lamp&trade;",
          "thin gold wire",
          "insulated gold wire",
          "empty lava bottle",
          "full lava bottle",
          "viscous lava globs",
          "red lava globs",
          "blue lava globs",
          "green lava globs",
          "SMOOCH bottlecap",
          "uncapped red lava bottle",
          "uncapped blue lava bottle",
          "uncapped green lava bottle",
          "capped red lava bottle",
          "capped blue lava bottle",
          "capped green lava bottle",
          "heat-resistant sheet metal",
          "LavaCo&trade; Lamp housing",
          "glowing New Age crystal",
          "crystalline light bulb",
          "broken high-temperature mining drill",
          "high-temperature mining mask",
          "fireproof megaphone",
          "mineapple",
          "Gold Velvet&trade; whiskey",
          "SMOOCH soda",
          "smelted roe",
          "lavawater",
          "basaltamander tongue",
          "lavalarva",
          "lava balaclava",
          "basaltamander buckler",
          "sticky lava globs",
          "gooey lava globs",
          "lava-proof pants",
          "heat-resistant necktie",
          "heat-resistant gloves",
          "very hot lunch",
          "asbestos thermos",
          "liquid rhinestones",
          "disco biscuit",
          "Quaatorade&trade;",
          "biker's hat",
          "feathered headdress",
          "electrician's hardhat",
          "Lava Miner's Daughter",
          "Psycho From The Heat",
          "The Firegate Tapes",
          "&quot;DEBBIE&quot; tattoo kit",
          "one-day ticket to That 70s Volcano",
          "airplane charter: That 70s Volcano",
          "Manual of Numberology",
          "New Age hurting crystal",
          "smooth velvet pants",
          "smooth velvet shirt",
          "smooth velvet hat",
          "smooth velvet pocket square",
          "smooth velvet socks",
          "smooth velvet hanky",
          "The One Mood Ring",
          "Mr. Choch's bone",
          "Mr. Cheeng's 'stache",
          "Saturday Night thermometer",
          "the tongue of Smimmons",
          "Raul's guitar pick",
          "Pener's crisps",
          "signed deuce",
          "Lavalos core",
          "half-melted hula girl",
          "glass ceiling fragments",
          "SMOOCH coffee cup",
          "labrador cookie",
          "Mr. Cheeng's spectacles",
          "grease cannon",
          "demon makeup kit",
          "love",
          "Pener's drumstick",
          "little deuce cape",
          "Lavalos's shell",
          "smooth velvet bra",
          "SMOOCH bracers",
          "SMOOCH kneepads",
          "SMOOCH spaulders",
          "SMOOCH codpiece",
          "SMOOCH breastplate",
          "superduperheated metal",
          "fused fuse",
          "superheated metal",
          "lava cake",
          "pink slime",
          "Devil's Elbow Hot Sauce",
          "Special&trade; Sauce",
          "devil hair pasta",
          "spagecialetti",
          "Salsa Libre",
          "good gravy",
          "illicit fish sauce",
          "libertagliatelle",
          "turkish mostaccioli",
          "linguini of the sea",
          "Hersey&trade; SMOOCH",
          "Alexy sauce",
          "rainbow sauce",
          "drug cocktail sauce",
          "Fettris",
          "fusillocybin",
          "prescription noodles",
          "blood-drive sticker",
          "bag of grain",
          "pocket maze",
          "shady shades",
          "squeaky toy rose",
          "weird gazelle steak",
          "sausage without a cause",
          "silver face paint",
          "emergency margarita",
          "vintage smart drink",
          "a ten-percent bonus",
          "Thwaitgold termite statuette",
          "The Emperor's new cookie",
          "Wickers bar",
          "bakelite-covered bacon",
          "Aerheads",
          "Wrotz",
          "Gabarbar",
          "fiberglass insulation",
          "shrine to the Barrel god",
          "barrel lid",
          "barrel hoop earring",
          "bankruptcy barrel",
          "little firkin",
          "normal barrel",
          "big tun",
          "weathered barrel",
          "dusty barrel",
          "disintegrating barrel",
          "moist barrel",
          "rotting barrel",
          "mouldering barrel",
          "barnacled barrel",
          "bottle of Amontillado",
          "barrel-aged martini",
          "barrel pickle",
          "barrel cracker",
          "vibrating mushroom",
          "cute mushroom",
          "KoL Con 12-gauge",
          "Golden Mr. Eh?",
          "barrel gun",
          "tiny barrel",
          "barrel beryl",
          "water log",
          "barrelhead",
          "bottoms of the barrel",
          "chest barrel",
          "brass bung spigot",
          "double barreled barrel gun",
          "triple barreled barrel gun",
          "barrel beryl choker",
          "barrel beryl nose ring",
          "barrel beryl ring",
          "map to the Biggest Barrel",
          "potted tea tree",
          "cuppa Flamibili tea",
          "cuppa Yet tea",
          "cuppa Boo tea",
          "cuppa Nas tea",
          "cuppa Improprie tea",
          "cuppa Frost tea",
          "cuppa Toast tea",
          "cuppa Net tea",
          "cuppa Proprie tea",
          "cuppa Morbidi tea",
          "cuppa Chari tea",
          "cuppa Serendipi tea",
          "cuppa Feroci tea",
          "cuppa Physicali tea",
          "cuppa Wit tea",
          "cuppa Neuroplastici tea",
          "cuppa Dexteri tea",
          "cuppa Flexibili tea",
          "cuppa Impregnabili tea",
          "cuppa Obscuri tea",
          "cuppa Irritabili tea",
          "cuppa Mediocri tea",
          "cuppa Loyal tea",
          "cuppa Activi tea",
          "cuppa Cruel tea",
          "cuppa Alacri tea",
          "cuppa Vitali tea",
          "cuppa Mana tea",
          "cuppa Monstrosi tea",
          "cuppa Twen tea",
          "cuppa Gill tea",
          "cuppa Uncertain tea",
          "cuppa Voraci tea",
          "cuppa Sobrie tea",
          "cuppa Royal tea",
          "cuppa Craft tea",
          "cuppa Insani tea",
          "Royal scepter",
          "haunted doghouse",
          "Ghost Dog Chow",
          "bowl of eyeballs",
          "bowl of mummy guts",
          "bowl of maggots",
          "blood and blood",
          "Jack-O-Lantern beer",
          "zombie",
          "Telltale&trade; rubber heart",
          "wind-up spider",
          "plastic nightmare troll",
          "tennis ball",
          "heavy crown",
          "ear poison",
          "stink-penny",
          "hawk",
          "hamlet sandwich",
          "Othello's military jacket",
          "Othello's dagger",
          "Othello's handkerchief",
          "bowl of Jeal-O",
          "grip key",
          "How to Play Othello",
          "ghostly dagger",
          "ghost beer",
          "portable Othello set",
          "rotten tomato",
          "Twelve Night Energy",
          "Yorick",
          "rose",
          "white tulip",
          "red tulip",
          "blue tulip",
          "Walford's bucket",
          "Wal-Mart gift certificate",
          "airplane charter: The Glaciest",
          "one-day ticket to The Glaciest",
          "shoulder-warming lotion",
          "iceberg lettuce",
          "ice wine",
          "Wal-Mart snowglobe",
          "Wal-Mart nametag",
          "Wal-Mart overalls",
          "To Build an Igloo",
          "The Chill of the Wild",
          "Cold Fang",
          "Wal-Mart tattoo kit",
          "perfect ice cube",
          "The Fun-Guy Cold Weather Bartender's Guide",
          "bellhop's hat",
          "ice porter",
          "exotic travel brochure",
          "bag of foreign bribes",
          "frozen shampoo-conditioner",
          "hotel minibar key",
          "ice hotel bell",
          "Martialest Arts trophy",
          "ancient medicinal herbs",
          "ice rice",
          "iced plum wine",
          "training belt",
          "training legwarmers",
          "training helmet",
          "training scroll:  Shattering Punch",
          "training scroll:  Snokebomb",
          "training scroll:  Shivering Monkey Technique",
          "X-32-F snowman crate",
          "machine elf capsule",
          "self-dribbling basketball",
          "abstraction: action",
          "abstraction: thought",
          "abstraction: sensation",
          "abstraction: purpose",
          "abstraction: category",
          "abstraction: perception",
          "abstraction: motion",
          "abstraction: joy",
          "abstraction: certainty",
          "abstraction: comprehension",
          "modern picture frame",
          "VYKEA meatballs",
          "VYKEA mead",
          "VYKEA woadpaint",
          "VYKEA frenzy rune",
          "VYKEA blood rune",
          "VYKEA lightning rune",
          "VYKEA plank",
          "VYKEA rail",
          "VYKEA bracket",
          "VYKEA dowel",
          "VYKEA hex key",
          "VYKEA instructions",
          "tin of submardines",
          "bottle of norwhiskey",
          "octolus oculus",
          "sardine can key",
          "norwhal helmet",
          "octolus-skin cloak",
          "perfect cosmopolitan",
          "perfect negroni",
          "perfect dark and stormy",
          "perfect mimosa",
          "perfect old-fashioned",
          "perfect paloma",
          "That 70s Cologne",
          "Wal-Mart &quot;diamond&quot; ring",
          "Puffstone cigar",
          "Conspiracy&trade; mascara",
          "Spring Break Beach &quot;swimsuit&quot;",
          "airplane tattoo",
          "Deep Machine Tunnels snowglobe",
          "hemp candy necklace",
          "communal gobstopper",
          "Crimbo salad",
          "bread line",
          "bark rootbeer",
          "red ale",
          "tiny plastic Tammy the Tambourine Elf",
          "tiny plastic Rudolph the Red",
          "tiny plastic Gaia'ajh-dsli Ak'lwej",
          "tiny plastic Crimborgatron",
          "tiny plastic Crimbodhisattva",
          "bouquet of all-natural free-range flowers",
          "stack of communist leaflets",
          "BACON",
          "box of Gratitude chocolates",
          "Gratitude chocolate (thyme-filled)",
          "Gratitude chocolate (bourbon-filled)",
          "Gratitude chocolate (Meat-filled)",
          "Gratitude chocolate (octopus-filled)",
          "chocolate bowtie",
          "pitted sheet metal",
          "sparking robo-battery",
          "overloaded micro-reactor",
          "reusable shopping bag",
          "coarse hemp socks",
          "red armband",
          "bundle of &quot;fragrant&quot; herbs",
          "nuclear stockpile",
          "pine cone",
          "iron chain",
          "pine cone necklace",
          "reindeer hammer",
          "elf ploughshare",
          "circle drum",
          "The Big Book of Communism",
          "faded green protest sign",
          "faded red protest sign",
          "nasty-smelling moss",
          "little red book",
          "elven tambourine",
          "reindeer sickle",
          "green face paint",
          "red face paint",
          "The Big Book of Communism (used)",
          "Batfellow comic",
          "tiny plastic spoiler",
          "bat-oomerang",
          "bat-jute",
          "bat-o-mite",
          "ROM of Optimality",
          "incriminating evidence",
          "dangerous chemicals",
          "kidnapped orphan",
          "high-grade metal",
          "high-tensile-strength fibers",
          "high-grade explosives",
          "experimental gene therapy",
          "ultracoagulator",
          "self-defense training",
          "fingerprint dusting kit",
          "confidence-building hug",
          "exploding kickball",
          "glob of Bat-Glue",
          "Bat-Aid&trade; bandage",
          "bat-bearing",
          "Kudzu salad",
          "Mansquito Serum",
          "Miss Graves' vermouth",
          "The Plumber's mushroom stew",
          "The Author's ink",
          "The Mad Liquor",
          "Doc Clock's thyme cocktail",
          "Mr. Burnsger",
          "The Inquisitor's unidentifiable object",
          "The Jokester's gun",
          "The Jokester's wig",
          "The Jokester's pants",
          "Jokester makeup",
          "replica bat-oomerang",
          "battoo kit",
          "basking robin",
          "tiny domino mask",
          "robin's egg",
          "robin flan",
          "robin nog",
          "LT&T telegraph office deed",
          "plaintive telegram",
          "exploding gum",
          "root beer barrel",
          "Kudzu slaw",
          "Mansquito's blood",
          "infrablack lipstick",
          "can of drain cleaner",
          "The Author's inkwell",
          "bag of random words",
          "tube of pendulum lube",
          "red-hot jawbreaker",
          "question juice",
          "tube of villain white",
          "your cowboy boots",
          "inflatable LT&T telegraph office",
          "nugget of quicksilver",
          "nugget of thicksilver",
          "nugget of wicksilver",
          "nugget of slicksilver",
          "nugget of sicksilver",
          "nugget of nicksilver",
          "nugget of ticksilver",
          "quicksilver ring",
          "thicksilver ring",
          "wicksilver ring",
          "slicksilver ring",
          "sicksilver ring",
          "nicksilver ring",
          "ticksilver ring",
          "Heimz Fortified Kidney Beans",
          "Tesla's Electroplated Beans",
          "Mixed Garbanzos and Chickpeas",
          "Hellfire Spicy Beans",
          "Frigid Northern Beans",
          "World's Blackest-Eyed Peas",
          "Trader Olaf's Exotic Stinkbeans",
          "Pork 'n' Pork 'n' Pork 'n' Beans",
          "Val-U Brand Every Bean Salad",
          "Shrub's Premium Baked Beans",
          "plate of Heimz Fortified Kidney Beans",
          "plate of Tesla's Electroplated Beans",
          "plate of Mixed Garbanzos and Chickpeas",
          "plate of Hellfire Spicy Beans",
          "plate of Frigid Northern Beans",
          "plate of World's Blackest-Eyed Peas",
          "plate of Trader Olaf's Exotic Stinkbeans",
          "plate of Pork 'n' Pork 'n' Pork 'n' Beans",
          "plate of Val-U Brand Every Bean Salad",
          "plate of Shrub's Premium Baked Beans",
          "Fancy Jeff's fancy pocket square",
          "Daisy's unclean bloomers",
          "Pecos Dave's sixgun",
          "Amoon-Ra Cowtep's nemes",
          "Glenn's golden dice",
          "Former Sheriff Dan's tin star",
          "El Vibrato restraints",
          "Clara's bell",
          "Granny Hackleton's Gatling gun",
          "buffalo dime",
          "cow poker",
          "poker face paint",
          "realistic cap gun",
          "tainted milk",
          "gun parts",
          "triggerfingerbone",
          "ghost bit",
          "buzzard feather",
          "lion musk",
          "bear claw",
          "rattler gland",
          "half-digested coal",
          "tightly-wound spine",
          "rotting beefsteak",
          "firemilk",
          "spidercow eye-cluster",
          "moomy dust",
          "western-style skinning knife",
          "reliable sixgun",
          "steel knuckles",
          "Tales of Western Braggadoccio",
          "Hell and How I Bent It",
          "The Western Look",
          "LT&T tattoo kit",
          "Western Slang Vol. 1: Violence",
          "Western Slang Vol. 2: Cooking",
          "Western Slang Vol. 3: Fraud",
          "strange disc (white)",
          "strange disc (black)",
          "strange disc (red)",
          "strange disc (green)",
          "strange disc (blue)",
          "strange disc (yellow)",
          "red-hot knucklebone",
          "demonic cow's blood",
          "rinky-dink sixgun",
          "makeshift sixgun",
          "custom sixgun",
          "baconstone-handled sixgun",
          "porquoise-handled sixgun",
          "hamethyst-handled sixgun",
          "mountain lion skin",
          "grizzled bearskin",
          "diamondback skin",
          "coal snakeskin",
          "frontwinder skin",
          "rotting cowskin",
          "shuddering cow skull",
          "rhinestone cowhorn",
          "silver cow skull",
          "jangly spurs",
          "quicksilver spurs",
          "thicksilver spurs",
          "wicksilver spurs",
          "slicksilver spurs",
          "sicksilver spurs",
          "nicksilver spurs",
          "ticksilver spurs",
          "special edition Batfellow comic",
          "Tales of the West: Cow Punching",
          "Tales of the West: Beanslinging",
          "Tales of the West: Snake Oiling",
          "briefcase full of snakes",
          "one-gallon hat",
          "two-gallon hat",
          "three-gallon hat",
          "four-gallon hat",
          "five-gallon hat",
          "six-gallon hat",
          "seven-gallon hat",
          "eight-gallon hat",
          "nine-gallon hat",
          "ten-gallon hat",
          "eleven-gallon hat",
          "toy sixgun",
          "snake oil",
          "skin oil",
          "unusual oil",
          "eldritch oil",
          "exclusive club",
          "patent preventative tonic",
          "patent invisibility tonic",
          "patent aggression tonic",
          "patent sallowness tonic",
          "patent avarice tonic",
          "patent alacrity tonic",
          "corrupted marrow",
          "rodeo whiskey",
          "Thwaitgold scorpion statuette",
          "real cowboy hat",
          "Memories of Cow Punching",
          "Memories of Beanslinging",
          "Memories of Snake Oiling",
          "Witchess Set",
          "electronic Brain Trainer game",
          "do-it-yourself laser eye surgery kit",
          "armored prawn",
          "jumping horseradish",
          "Sacramento wine",
          "Greek fire",
          "ox-head shield",
          "dented scepter",
          "very pointy crown",
          "battle broom",
          "Clan Floundry",
          "carpe",
          "codpiece",
          "troutsers",
          "bass clarinet",
          "fish hatchet",
          "tunac",
          "fishin' pole",
          "wriggling worm",
          "bottle of Fishhead 900-Day IPA",
          "high-test fishing line",
          "fishin' hat",
          "Trout Fishing in Loathing",
          "sonar fishfinder",
          "luxury fly-tying workbench",
          "antique tacklebox",
          "disconnected intergnat",
          "viral video",
          "internet point",
          "meme generator",
          "plus one",
          "gallon of milk",
          "print screen button",
          "screencapped monster",
          "daily dungeon malware",
          "infinite BACON machine",
          "First Post shirt package",
          "First Post shirt - Cir Senam",
          "high-speed upgrade",
          "no spoon",
          "delicious star salad",
          "Thwaitgold moth statuette",
          "bowl of Tastee-Wheet&trade;",
          "Source terminal",
          "Source essence",
          "browser cookie",
          "hacked gibson",
          "Source shades",
          "software bug",
          "missing semicolon",
          "Source terminal PRAM chip",
          "Source terminal GRAM chip",
          "Source terminal SPAM chip",
          "Source terminal CRAM chip",
          "Source terminal DRAM chip",
          "Source terminal TRAM chip",
          "Source terminal INGRAM chip",
          "Source terminal DIAGRAM chip",
          "Source terminal ASHRAM chip",
          "Source terminal SCRAM chip",
          "Source terminal TRIGRAM chip",
          "Source terminal file: substats.enh",
          "Source terminal file: damage.enh",
          "Source terminal file: critical.enh",
          "Source terminal file: protect.enq",
          "Source terminal file: stats.enq",
          "Source terminal file: compress.edu",
          "Source terminal file: duplicate.edu",
          "Source terminal file: portscan.edu",
          "Source terminal file: turbo.edu",
          "Source terminal file: familiar.ext",
          "Source terminal file: pram.ext",
          "Source terminal file: gram.ext",
          "Source terminal file: spam.ext",
          "Source terminal file: cram.ext",
          "Source terminal file: dram.ext",
          "Source terminal file: tram.ext",
          "green pill",
          "plastic detective badge",
          "bronze detective badge",
          "silver detective badge",
          "gold detective badge",
          "cop dollar",
          "detective school application",
          "detective roscoe",
          "shoe gum",
          "noir fedora",
          "trench coat",
          "Falcon&trade; Maltese Liquor",
          "hardboiled egg",
          "detective tattoo",
          "DIY protonic accelerator kit",
          "protonic accelerator pack",
          "almost-dead walkie-talkie",
          "Adventurer bobblehead",
          "psychokinetic energy blob",
          "haunted bindle",
          "fleshy lump",
          "smoldering bagel punch",
          "ghostly reins",
          "frigid derringer",
          "Mr. Screege's spectacles",
          "Spookyraven signet",
          "tie-dyed fannypack",
          "burnt snowpants",
          "standards and practices guide",
          "Carpathian longsword",
          "Liam's mail",
          "Unfortunato's foolscap",
          "Thwaitgold cockroach statuette",
          "rad",
          "purification tablet",
          "Wrist-Boy",
          "Dear Past Self Package",
          "Time-Spinner",
          "compounded experience",
          "Rad-B-Gone (1 lb.)",
          "Rad-Pro (1 oz.)",
          "lead umbrella",
          "Shrieking Weasel holo-record",
          "Power-Guy 2000 holo-record",
          "Lucky Strikes holo-record",
          "EMD holo-record",
          "Superdrifter holo-record",
          "The Pigs holo-record",
          "Drunk Uncles holo-record",
          "time residue",
          "repaid diaper",
          "Riker's Search History",
          "Shot of Kardashian Gin",
          "Unstable Pointy Ears",
          "Memory Disk, Alpha",
          "Tea, Earl Grey, Hot",
          "School of Hard Knocks Diploma",
          "baby bark scorpion",
          "droppable microphone",
          "unidentified drink",
          "KoL Con 13 T-shirt",
          "discarded swimming trunks",
          "diluted makeup",
          "charisma potion",
          "extremely confusing manual",
          "foam pistol",
          "KoL Con 13 snowglobe",
          "leftover pasty",
          "very fancy whiskey",
          "li'l orphan tot",
          "li'l knight costume",
          "li'l unicorn costume",
          "li'l candy corn costume",
          "li'l ninja costume",
          "li'l pirate costume",
          "li'l clown costume",
          "li'l robot costume",
          "li'l eyeball costume",
          "li'l liberty costume",
          "hoarded candy wad",
          "Prunets",
          "Twitching Television Tattoo",
          "tiny baby scorpion",
          "invisible string",
          "invisible seam ripper",
          "li'l ghost costume",
          "raw sweet potato",
          "raw green beans",
          "raw stuffing",
          "raw cranberry sauce",
          "raw turkey",
          "raw mincemeat",
          "raw potato",
          "raw gravy",
          "raw bread",
          "mini-marshmallow dispenser",
          "glass casserole dish",
          "stuffing fluffer",
          "can opener",
          "turkey blaster",
          "glass pie plate",
          "potato masher",
          "gravy boat",
          "bread mold",
          "candied sweet potatoes",
          "green bean casserole",
          "baked stuffing",
          "cranberry cylinder",
          "thanksgiving turkey",
          "mince pie",
          "mashed potatoes",
          "warm gravy",
          "bread roll",
          "leftovers",
          "leftovers sandwich",
          "Eldritch Intellect: Journey into a Mind of Horror",
          "cornucopia",
          "megacopia",
          "giant pilgrim hat",
          "packet of thanksgarden seeds",
          "cashew",
          "bomb of unknown origin",
          "Granny Tood's Thanksgarden Catalog",
          "eldritch effluvium",
          "eldritch concentrate",
          "eldritch extract",
          "Official Council Aide Pin",
          "eldritch distillate",
          "eldritch essence",
          "Science Notebook",
          "eldritch hat",
          "eldritch pants",
          "eldritch elixir",
          "Quartet of Flare Masters Jacket",
          "lump of not really wriggling eldritch matter",
          "Adventurer's Kit",
          "Build-a-City Gingerbread kit",
          "counterfeit city",
          "sprinkles",
          "The Gingerbread Vigilante's Handbook",
          "sour ball and chain",
          "candy dog collar",
          "gingerbread tophat",
          "gingerbread waistcoat",
          "gingerbread trousers",
          "candy dress shoes",
          "candy necktie",
          "chocolate pocketwatch",
          "broken chocolate pocketwatch",
          "interesting clod of dirt",
          "gingerbread restraining order",
          "sprinkle-begging cup",
          "animal part cracker",
          "gingerbread wine",
          "gingerbread mug",
          "gingerbread mask",
          "gingerservo",
          "tainted icing",
          "gingerbeard",
          "gingerbread smartphone",
          "gingerbread hoodie",
          "gingerbread pistol",
          "fancy marzipan briefcase",
          "creme brulee torch",
          "candy crowbar",
          "candy screwdriver",
          "gingerbread dog treat",
          "pumpkin spice candle",
          "gingerbread spice latte",
          "gingerbread gavel",
          "gingerbread cigarette",
          "gingerbread moneybag",
          "ginger beer",
          "spare chocolate parts",
          "industrial frosting",
          "fake cocktail",
          "high-end ginger wine",
          "tiny plastic bad vibe",
          "tiny plastic angry vikings",
          "tiny plastic Knows About Chakras",
          "tiny plastic Your Brain",
          "tiny plastic Krampus",
          "Inner Wisdom",
          "Inner Strength",
          "Inner Truth",
          "spiritual candy cane",
          "spiritual eggnog",
          "spiritual fruitcake",
          "spiritual gingerbread",
          "chocolate puppy",
          "chocolate leash",
          "My Life of Crime, a Memoir",
          "Pop Art: a Guide",
          "No Hats as Art",
          "Rethinking Candy",
          "fruit-leather negatives",
          "gingerbread blackmail photos",
          "briefcase full of sprinkles",
          "teethpick",
          "green rock candy",
          "green-iced sweet roll",
          "sugar raygun",
          "fancy chocolate sculpture",
          "no hat",
          "chakra sludge",
          "negative lump",
          "Third Eye",
          "Krampus Horn",
          "hambrosier",
          "chakra-mental wine",
          "chakra malt",
          "Black Angus blackburger",
          "black brandy",
          "potion of spiritual gunkifying",
          "bad vibroknife",
          "crystal belt buckle",
          "saffron antaravasaka",
          "saffron uttarasanga",
          "Lump-Stacking for Beginners",
          "eternal knot tattoo",
          "pet bad vibe",
          "black gallstone",
          "Uncle Crimbo's hat",
          "Eldritch snap",
          "hot jelly",
          "cold jelly",
          "spooky jelly",
          "sleaze jelly",
          "stench jelly",
          "space planula",
          "toast with hot jelly",
          "toast with cold jelly",
          "toast with spooky jelly",
          "toast with sleaze jelly",
          "toast with stench jelly",
          "space jellybicycle",
          "hopeful candle",
          "pewter candlestick",
          "wax hand",
          "miniature candle",
          "wax pancake",
          "wax face",
          "wax booze",
          "glob of melted wax",
          "sea jelly",
          "sea truffle",
          "tarnished luggage key",
          "crushed steamer trunk",
          "recovered cufflinks",
          "heart-shaped crate",
          "LOV Elixir #3",
          "LOV Elixir #6",
          "LOV Elixir #9",
          "LOV Eardigan",
          "LOV Epaulettes",
          "LOV Earrings",
          "LOV Enamorang",
          "LOV Emotionizer",
          "LOV Extraterrestrial Chocolate",
          "LOV Echinacea Bouquet",
          "LOV Elephant",
          "eldritch scanner",
          "eldritch alignment spray",
          "LOV Entrance Pass",
          "eldritch hammer",
          "eldritch mushroom",
          "eldritch ichor",
          "eldritch mushroom pizza",
          "eldritch tincture",
          "eldritch tincture (depleted)",
          "eldritch rub",
          "HP-35 Calculator",
          "Silver HP-35 Calculator",
          "Golden HP-35 Calculator",
          "Platinum HP-35 Calculator",
          "Diamond HP-35 Calculator",
          "dirty bottlecap",
          "discarded button",
          "Gummi-Memory",
          "Thwaitgold amoeba statuette",
          "pickled grasshopper",
          "bottle of an&iacute;s",
          "bottle of novelty hot sauce",
          "elemental sugarcube",
          "peppermint sprig",
          "bottle of clam juice",
          "cocktail mushroom",
          "shot of granola liqueur",
          "can of cherry-flavored sterno",
          "lump of black ichor",
          "bottle of gregnadigne",
          "bottle of Cr&egrave;me de Fugu",
          "baby oil shooter",
          "fish head",
          "limepatch",
          "pile of dirt",
          "slime shooter",
          "imaginary lemon",
          "literal grasshopper",
          "double entendre",
          "Phlegethon",
          "Siberian sunrise",
          "mentholated wine",
          "low tide martini",
          "shroomtini",
          "morning dew",
          "whiskey squeeze",
          "great old fashioned",
          "Gnomish sagngria",
          "vodka stinger",
          "extremely slippery nipple",
          "piscatini",
          "Churchill",
          "soilzerac",
          "London frog",
          "nothingtini",
          "eighth plague",
          "single entendre",
          "reverse Tantalus",
          "elemental caipiroska",
          "Feliz Navidad",
          "Bloody Nora",
          "moreltini",
          "hell in a bucket",
          "Newark",
          "R'lyeh",
          "Gnollish sangria",
          "vodka barracuda",
          "Mysterious Island iced tea",
          "drive-by shooting",
          "gunner's daughter",
          "dirt julep",
          "Simepore slime",
          "Phil Collins",
          "unpowered Robortender",
          "toggle switch (Bartend)",
          "toggle switch (Bounce)",
          "Spacegate access badge",
          "filter helmet",
          "exo-servo leg braces",
          "rad cloak",
          "gate transceiver",
          "high-friction boots",
          "Spacegate Research",
          "alien rock sample",
          "alien gemstone",
          "geological sample kit",
          "botanical sample kit",
          "edible alien plant bit",
          "alien plant fibers",
          "alien plant sample",
          "complex alien plant sample",
          "fascinating alien plant sample",
          "alien plant goo",
          "alien plant pod",
          "zoological sample kit",
          "alien meat",
          "alien toenails",
          "alien zoological sample",
          "complex alien zoological sample",
          "fascinating alien zoological sample",
          "alien animal goo",
          "alien animal milk",
          "spant egg casing",
          "murderbot data core",
          "primitive alien medicine",
          "primitive alien salad",
          "primitive alien booze",
          "primitive alien mask",
          "primitive alien spear",
          "primitive alien blowgun",
          "primitive alien loincloth",
          "primitive alien totem",
          "primitive alien necklace",
          "spant chitin",
          "spant tendon",
          "spants",
          "spant shield",
          "spant shoulderpads",
          "spant backplate",
          "spant spear",
          "murderbot power cell",
          "murderbot component casing",
          "murderbot monofilament",
          "murderbot shield unit",
          "murderbot live wire",
          "murderbot mask",
          "murderbot spring injector",
          "murderbot whip",
          "murderbot plasma rifle",
          "murderbot memory chip",
          "space pirate treasure map",
          "Space Pirate Astrogation Handbook",
          "Non-Euclidean Finance",
          "Peek-a-Boo!",
          "Procrastinator locker key",
          "Space Baby children's book",
          "Space Baby bawbaw",
          "portable Spacegate",
          "Aldebaran sardines",
          "Centauri fish wine",
          "powdered oxygen",
          "Spacegate scientist's insignia",
          "Spacegate military insignia",
          "Spacegate diplomat's insignia",
          "Spacegate emergency disintegrator",
          "Spacegate Initiative tattoo unit",
          "alien sandwich",
          "glitched malware",
          "Spant eggs",
          "portable Spacegate (open)",
          "New-You Club Membership Form",
          "Daily Affirmation: Always be Collecting",
          "Daily Affirmation: Think Win-Lose",
          "Daily Affirmation: Be Superficially interested",
          "Daily Affirmation: Adapt to Change Eventually",
          "Daily Affirmation: Be a Mind Master",
          "Daily Affirmation: Work For Hours a Week",
          "Daily Affirmation: Keep Free Hate in your Heart",
          "Affirmation Cookie",
          "License To Kill",
          "Thwaitgold bug statuette",
          "Victor's Spoils",
          "Threatening Missive",
          "Targeted Plague Vector",
          "suspicious package",
          "Kremlin's Greatest Briefcase",
          "basic martini",
          "improved martini",
          "splendid martini",
          "exploding cigar",
          "can of Minions-Be-Gone",
          "golden tattoo gun",
          "golden gun",
          "golden gum",
          "tiny plastic golden gundam",
          "License to Chill",
          "Celsius 233",
          "Celsius 233 (singed)",
          "Lazenby's Life Lesson",
          "LI-11 Motor Pool voucher",
          "Asdon Martin keyfob (on ring)",
          "L.I.M.P. Stock Certificate",
          "Dust bunny",
          "Pocket Meteor Guide",
          "Pocket Meteor Guide (well-thumbed)",
          "Meteorite-Ade",
          "meteoreo",
          "meadeorite",
          "metal meteoroid",
          "meteortarboard",
          "meteorite guard",
          "meteorb",
          "asteroid belt",
          "meteorthopedic shoes",
          "shooting morning star",
          "cute meteoroid",
          "meteor shower cap",
          "Thwaitgold time fly statuette",
          "perfectly fair coin",
          "Horsery contract",
          "corked genie bottle",
          "genie bottle",
          "blessed rustproof +2 gray dragon scale mail",
          "magical pony: Dusk Shiny",
          "magical pony: Shutterfly",
          "magical pony: Pearjack",
          "magical pony: Uniquity",
          "magical pony: Rosey Cake",
          "magical pony: Spectrum Dash",
          "pocket wish",
          "dropped scrap of paper",
          "hunk of granite",
          "shovelful of dirt",
          "xo-skeleton-in-a-box",
          "exo-xo-skeleton-skeleton",
          "X",
          "O",
          "DUFRESNE Suds",
          "mafia pinky ring",
          "flask of port",
          "contract enforcement stick",
          "Hide-rox&trade; cookie",
          "jug of booze",
          "pair of candy glasses",
          "temporary X tattoos",
          "glyph of athleticism",
          "pair of scissors",
          "new habit",
          "bridge truss",
          "pearl necklace",
          "amorphous blob",
          "giant X",
          "giant O",
          "giant amorphous blob",
          "protection stick",
          "roll of meat",
          "mafia thumb ring",
          "cocoa chondrule",
          "mafia middle finger ring",
          "steel drivin' hammer",
          "little piece of steel",
          "mafia pointer finger ring",
          "worksite credentials",
          "negotiatin' hammer",
          "pantogram",
          "portable pantogram",
          "pantogram pants",
          "mafia wedding ring",
          "mafia organizer badge",
          "mafia filofax",
          "transparent nog",
          "unfinished fruitcake",
          "black and white cracker",
          "neg grog",
          "half double fruitcake",
          "hushed puppy",
          "muffled muffuletta",
          "shushed potatoes",
          "tiny plastic mime functionary",
          "tiny plastic mime scientist",
          "tiny plastic mime soldier",
          "tiny plastic mime executive",
          "tiny plastic The Silent Nightmare",
          "locked mumming trunk",
          "mumming trunk",
          "temperance whiskey",
          "cursed wishbone",
          "Racisto Ruidoso",
          "earthenware muffin tin",
          "bran muffin",
          "blueberry muffin",
          "silent A",
          "silent B",
          "silent C",
          "silent D",
          "silent E",
          "silent F",
          "silent G",
          "silent H",
          "silent I",
          "silent J",
          "silent K",
          "silent L",
          "silent M",
          "silent N",
          "silent O",
          "silent P",
          "silent Q",
          "silent R",
          "silent S",
          "silent T",
          "silent U",
          "silent V",
          "silent W",
          "silent X",
          "silent Y",
          "silent Z",
          "crystalline cheer",
          "anti-earplugs",
          "warehouse key",
          "mime pocket probe",
          "stale cheer wine",
          "stale Cheer-E-Os",
          "cheer-o-gram",
          "cheerful antler hat",
          "cheerful Crimbo sweater",
          "cheerful pajama pants",
          "The Journal of Mime Science Vol. 1",
          "The Journal of Mime Science Vol. 1 (used)",
          "The Journal of Mime Science Vol. 2",
          "The Journal of Mime Science Vol. 2 (used)",
          "The Journal of Mime Science Vol. 3",
          "The Journal of Mime Science Vol. 3 (used)",
          "The Journal of Mime Science Vol. 4",
          "The Journal of Mime Science Vol. 4 (used)",
          "The Journal of Mime Science Vol. 5",
          "The Journal of Mime Science Vol. 5 (used)",
          "The Journal of Mime Science Vol. 6",
          "The Journal of Mime Science Vol. 6 (used)",
          "mime eraser",
          "executive mime flask",
          "nega-mushroom",
          "nega-mushroom wine",
          "Cheer-Up soda",
          "mime army rations",
          "mime army wine",
          "mime army superserum",
          "mime army camouflage kit",
          "miming beret",
          "miming shirt",
          "miming corduroys",
          "miming boots",
          "miming gloves",
          "God Lobster Egg",
          "donated booze",
          "donated food",
          "donated candy",
          "digital honeypot",
          "mime-proof sunglasses",
          "mime army insignia (infantry)",
          "mime army insignia (intelligence)",
          "mime army insignia (espionage)",
          "mime army insignia (pyrotechnics)",
          "mime army insignia (cryonics)",
          "mime army insignia (psychological warfare)",
          "mime army insignia (sanitation)",
          "mime army insignia (morale)",
          "mime army infiltration glove",
          "mime army shotglass",
          "mime army challenge coin",
          "cheer extractor",
          "kerosene-soaked skip",
          "fireproof skip lid",
          "extra-toasted half sandwich",
          "mulled hobo wine",
          "burning newspaper",
          "burning paper hat",
          "burning cape",
          "burning paper slippers",
          "burning paper jorts",
          "burning paper crane",
          "January's Garbage Tote (unopened)",
          "January's Garbage Tote",
          "deceased crimbo tree",
          "broken champagne bottle",
          "tinsel tights",
          "wad of used tape",
          "silent nightlight",
          "sweetened reindeer fat",
          "Good 'n' Quiet",
          "hot button candy",
          "makeshift garbage shirt",
          "novelty monorail ticket",
          "ancient pills",
          "furry pill",
          "beefy pill",
          "excitement pill",
          "vitamin G pill",
          "lucky-ish pill",
          "dieting pill",
          "Clan Carnival Game",
          "How To Get Bigger Without Really Trying",
          "Illustrated Mating Rituals of the Gallapagos",
          "Convincing People You Can See The Future",
          "Love Potions and the Wizards who Mix Them",
          "They'll Love You In Rhinestones",
          "Silly Little Love Song",
          "genie's turbane",
          "genie's scimitar",
          "genie's pants",
          "genie's bracers",
          "psychic's circlet",
          "psychic's crystal ball",
          "psychic's pslacks",
          "psychic's amulet",
          "heart-shaped candy whetstone",
          "Swedish massage fish",
          "Third Base",
          "Bustle Hustler",
          "Fabiotion",
          "Bettie page",
          "tonic o' Banderas",
          "heather graham cracker",
          "Lolsipop",
          "heart cozy",
          "eaves droppers",
          "personal graffiti kit",
          "Mysterious Red Box",
          "Mysterious Green Box",
          "Mysterious Blue Box",
          "Mysterious Black Box",
          "rainbow jellybean",
          "mystery lollipop",
          "Love Potion #XYZ",
          "rhinestone",
          "1,960 pok&eacute;dollar bill",
          "metandienone",
          "riboflavin",
          "bronze",
          "piracetam",
          "ultracalcium",
          "ginseng",
          "Team Avarice cap",
          "Team Sloth cap",
          "Team Wrath cap",
          "Mu cap",
          "Thwaitgold metabug statuette",
          "Pok&eacute;fam Guide to Capturing All of Them",
          "packet of tall grass seeds",
          "Pok&eacute;-Gro fertilizer",
          "Globmule",
          "Bluzzard",
          "Faux",
          "Sledgehamster",
          "Pimpsqueak",
          "Pillowbug",
          "Dressage",
          "Sequestrian",
          "Carpricorn",
          "Turpin",
          "Morphan",
          "Cycloney",
          "Peaclock",
          "Turtive",
          "Lepardner",
          "Aiolion",
          "Waifuton",
          "Gorillape",
          "Wendtigo",
          "Snoutlet",
          "Ruffalo",
          "Vaporpoise",
          "Ghosprey",
          "Straypler",
          "Flan",
          "Mustardigrade",
          "Ched",
          "Gazelleton",
          "Mechamelion",
          "Bicycle",
          "Vamprey",
          "Wullabye",
          "Nursine",
          "Cantelope",
          "Ungulant",
          "Caramel",
          "Oppossum",
          "Amanitee",
          "Smashmoth",
          "Vulgure",
          "Squib",
          "Trafikoan",
          "Slotter",
          "Shudder",
          "Glamare",
          "Unspeakachu",
          "Stooper",
          "Disgeist",
          "Bowlet",
          "Cornbeefadon",
          "Mu",
          "Glum berry",
          "Egnaro berry",
          "Sitrep berry",
          "Nadsat berry",
          "Jamocha berry",
          "Tapioc berry",
          "Snarf berry",
          "Keese berry",
          "luck incense",
          "shell bell",
          "muscle band",
          "amulet coin",
          "razor fang",
          "smoke ball",
          "green rocket",
          "magnificent oyster egg",
          "brilliant oyster egg",
          "glistening oyster egg",
          "scintillating oyster egg",
          "pearlescent oyster egg",
          "lustrous oyster egg",
          "gleaming oyster egg",
          "FantasyRealm membership packet",
          "FantasyRealm guest pass",
          "FantasyRealm G. E. M.",
          "Rubee&trade;",
          "FantasyRealm Warrior's Helm",
          "FantasyRealm Mage's Hat",
          "FantasyRealm Rogue's Mask",
          "lump of bauxite",
          "&quot;Remember the Trees&quot; Shirt",
          "FantasyRealm key",
          "plump purple mushroom",
          "tainted marshmallow",
          "Chewsick Copperbottom's notes",
          "LyleCo premium pickaxe",
          "LyleCo premium rope",
          "My First Art of War",
          "dragon aluminum ore",
          "faerie dust",
          "poisoned druidic s'more",
          "druidic orb",
          "to-go brew",
          "flask of holy water",
          "universal antivenin",
          "LyleCo premium monocle",
          "LyleCo premium magnifying glass",
          "FantasyRealm tattoo kit",
          "LyleCo Contractor's Manual",
          "FantasyRealm turkey leg",
          "FantasyRealm mead",
          "nasty haunch",
          "Cheswick Copperbottom's compass",
          "arrest warrant",
          "hero's skull",
          "grolblin rum",
          "druidic s'more",
          "sachet of strange powder",
          "mourning wine",
          "sanctified cola",
          "map to the Towering Mountains",
          "map to the Mystic Wood",
          "map to the Putrid Swamp",
          "map to the Cursed Village",
          "map to the Sprawling Cemetery",
          "denastified haunch",
          "bad rum and good cola",
          "Potion of Heroism",
          "leggings of the Spider Queen",
          "Master Thief's utility belt",
          "Duke Vampire's regal cloak",
          "Dragonscale breastplate",
          "belt of Ogrekind",
          "The Ghoul King's ghoulottes",
          "nozzle of the Phoenix",
          "the Archwizard's briefs",
          "the Ley Incursion's waist",
          "shield of the Skeleton Lord",
          "ring of the Skeleton Lord",
          "scepter of the Skeleton Lord",
          "deadfall branch",
          "Staff of Kitchen Royalty",
          "charged druidic orb",
          "dragon slaying sword",
          "notarized arrest warrant",
          "two meat muck",
          "chocolate Ogre Chieftain",
          "chocolate &quot;Phoenix&quot;",
          "chocolate Spider Queen",
          "hipster cocktail",
          "God Lobster's Scepter",
          "God Lobster's Ring",
          "God Lobster's Rod",
          "God Lobster's Robe",
          "God Lobster's Crown",
          "Dish of Clarified Butter",
          "G",
          "Garland of Greatness",
          "gattoo",
          "A-Boo glue",
          "glued A-Boo clue",
          "crude oil congealer",
          "good guava",
          "gin and ginger",
          "Thwaitgold chigger statuette",
          "gaseous gravy",
          "SongBoom&trade; BoomBox",
          "SongBoom&trade; BoomBox Box",
          "A Guide to Safari",
          "Shielding Potion",
          "Punching Potion",
          "Special Seasoning",
          "Nightmare Fuel",
          "Gathered Meat-Clip",
          "Bastille Battalion control rig crate",
          "Bastille Battalion control rig",
          "Brutal brogues",
          "Draftsman's driving gloves",
          "Nouveau nosering",
          "sharkfin gumbo",
          "boiling broth",
          "interrogative elixir",
          "Bastille Battalion Fondue Trophy",
          "Bastille Battalion tattoo kit",
          "Bastille Battalion cheese wheel",
          "Bastille Battalion control rig loaner voucher",
          "kitten burglar",
          "burglar/sleep mask",
          "Thwaitgold masked hunter statuette",
          "Neverending Party invitation envelope",
          "Neverending Party guest pass",
          "PARTY HARD T-shirt",
          "Neverending Party favor",
          "deluxe Neverending Party favor",
          "gas can",
          "Middle of the Road&trade; brand whiskey",
          "neverending wallet chain",
          "pentagram bandana",
          "gold skull ring",
          "electronics kit",
          "PB&J with the crusts cut off",
          "dorky glasses",
          "ponytail clip",
          "paint palette",
          "unremarkable duffel bag",
          "Purple Beast energy drink",
          "cosmetic football",
          "shoe ad T-shirt",
          "pump-up high-tops",
          "runproof mascara",
          "very small red dress",
          "noticeable pumps",
          "surprisingly capacious handbag",
          "everfull glass",
          "van key",
          "jam band bootleg",
          "denim jacket",
          "ratty knitted cap",
          "intimidating chainsaw",
          "party beer bomb",
          "sweet party mix",
          "party balloon",
          "fancy party pants",
          "party whip",
          "Party Planning on a Budget",
          "TRIO cup of beer",
          "party platter for one",
          "Party-in-a-Can&trade;",
          "party pup",
          "party crasher",
          "Living to Drink, Drinking to Live",
          "Party Tattoo&trade; gift certificate",
          "party mouse hat",
          "latte lovers member's mug",
          "latte lovers club card",
          "voter registration form",
          "&quot;I Voted!&quot; sticker",
          "absentee voter ballot",
          "snake skin",
          "snakeskin thighboots",
          "snakeskin cowboy hat",
          "snakeskin jacket",
          "black slime glob",
          "green slime glob",
          "orange slime glob",
          "slime waders",
          "slime fedora",
          "slime knuckles",
          "government requisition form",
          "government-issued slacks",
          "government-issued eyeshade",
          "government-issued necktie",
          "mutant arm",
          "mutant legs",
          "mutant crown",
          "ghostly ectoplasm",
          "haunted orange",
          "haunted bottle of vodka",
          "haunted pizza",
          "haunted martini",
          "haunted cherry pie",
          "haunted eggnog",
          "glob of undifferentiated tissue",
          "haunted Hell ramen",
          "haunted gimlet",
          "twice-haunted screwdriver",
          "primitive candy cane",
          "runny fermented egg",
          "oldcake",
          "traditional Crimbo cookie",
          "tiny plastic wild beaver",
          "tiny plastic reindeer",
          "tiny plastic Caf&eacute; Elf",
          "tiny plastic orphan",
          "tiny plastic Abuela Crimbo",
          "yule pup",
          "Braindeer",
          "Crimbo dog sweater",
          "pristine walrus tusk",
          "thick walrus blubber",
          "Staff of Frozen Lard",
          "tiny bomb",
          "plastic bazooka",
          "mooseflank",
          "grilled mooseflank",
          "moosemeat pie",
          "balanced antler",
          "portable dam",
          "beavermouth",
          "beaver punch (papaya)",
          "beaver punch (peach)",
          "beaver punch (cherry)",
          "antique Canadian lantern",
          "muskox-skin cap",
          "Boxing Day care package",
          "glass of raw eggs",
          "punch-drunk punch",
          "body spradium",
          "bauxite beret",
          "bauxite boxers",
          "bauxite bow-tie",
          "Boxing Day Pass",
          "Kramco Industries packing carton",
          "Kramco Sausage-o-Matic&trade;",
          "magical sausage casing",
          "magical sausage",
          "red-hot sausage fork",
          "bag of sausage links",
          "sausage golem",
          "jar of magical relish",
          "Toyleporter",
          "antique beer",
          "yule gruel",
          "hot watered rum",
          "bottle of Crimbognac",
          "Crimboysters Rockefeller",
          "Crimbeau de toilette",
          "Crimbo candle",
          "Carol of the Bulls",
          "Carol of the Bulls (used)",
          "Carol of the Hells",
          "Carol of the Hells (used)",
          "Carol of the Thrills",
          "Carol of the Thrills (used)",
          "Crimbolex watch",
          "Crimbo tattoo kit",
          "hand-knitted Crimbo socks",
          "chalk chlamys",
          "chalk chain",
          "chalk chalice",
          "chalk chinos",
          "chalk chapeau",
          "chalk choker",
          "chalk chunks",
          "candy chalk",
          "marble maebari",
          "marble mantle",
          "marble magnet",
          "marble mignonette bowl",
          "marble medallion",
          "marble mariachi hat",
          "marble molecules",
          "Mallomarbles",
          "paraffin punching bag",
          "paraffin pith helmet",
          "paraffin poncho",
          "paraffin pendant",
          "paraffin palazzos",
          "paraffin pseudoaccordion",
          "paraffin pieces",
          "Para-Pop",
          "terra cotta truss",
          "terra cotta trousers",
          "terra cotta tongs",
          "terra cotta train",
          "terra cotta tie tack",
          "terra cotta tambourine",
          "terra cotta tidbits",
          "terra panna cotta",
          "velour voulge",
          "velour vambraces",
          "velour veil",
          "velour viscometer",
          "velour valise",
          "velour vaqueros",
          "velour veneer",
          "Velougats&trade;",
          "stained glass suspenders",
          "stained glass shield",
          "stained glass stetson",
          "stained glass spectacles",
          "stained glass shiv",
          "stained glass serape",
          "stained glass shards",
          "stained hard candy",
          "loofah lumberjack's hat",
          "loofah lei",
          "loofah lederhosen",
          "loofah ladle",
          "loofah legwarmers",
          "loofah lavalier",
          "loofah lumps",
          "chocolate-covered loofah",
          "flagstone flag",
          "flagstone flail",
          "flagstone flip-flops",
          "flagstone fez",
          "flagstone fleece",
          "flagstone fringe",
          "flagstone flagments",
          "Flag by the Foot&trade;",
          "elf sleeper agent",
          "red-and-green microcamera",
          "cobbled-together Meat detector",
          "tin thermos of chai",
          "prototype stimulant",
          "tailored vest",
          "sew-on bandage",
          "really nice net",
          "elf army poncho",
          "elf army field rations",
          "gingernade",
          "discarded bowtie",
          "martiny",
          "tryptophan dart",
          "licorice snake",
          "virgin jello shot",
          "mutated candy lump",
          "government-issued candy",
          "Pneumo bar",
          "mint condition Lil' Doctor&trade; bag",
          "Lil' Doctor&trade; bag",
          "blood bag",
          "bloodstick",
          "bottle of Sanguiovese",
          "actual blood sausage",
          "mulled blood",
          "blood snowcone",
          "Red Russian",
          "blood roll-up",
          "dusty bottle of blood",
          "blood-soaked sponge cake",
          "vampagne",
          "plain snowcone",
          "Booke of Vampyric Knowledge",
          "white money bag",
          "red money bag",
          "blue money bag",
          "Thwaitgold mosquito statuette",
          "bucket of ancient Vampyre blood",
          "blood knife",
          "PirateRealm membership packet",
          "PirateRealm guest pass",
          "PirateRealm eyepatch",
          "bloody harpoon",
          "cursed compass",
          "ancient skull key",
          "curious anemometer",
          "Red Roger's flag",
          "Glass Jack's spyglass",
          "recursed compass",
          "tomb-opener",
          "Red Roger's map",
          "crabsicle",
          "melty plastic grenade",
          "bottle of dark rhum",
          "bottle of extra-dark rhum",
          "bottle of super-extra-dark rhum",
          "pirate shaving cream",
          "conquistador's breastplate",
          "pirate pantaloons",
          "[glitch season reward name]",
          "signal fragment",
          "windicle",
          "pirate radio ring",
          "Island Drinkin', a Tiki Mixology Odyssey",
          "pineapple slab",
          "hibiscus petal",
          "huge mint leaf",
          "cocoa of youth",
          "oversized ice molecule",
          "Red Roger's reliquary",
          "Red Roger's red right hand",
          "Red Roger's red left hand",
          "Red Roger's red right foot",
          "Red Roger's red left foot",
          "Red Roger's skull",
          "pewter shavings",
          "Red Roger tattoo kit",
          "PirateRealm fun-a-log",
          "plush sea serpent",
          "pirate fork",
          "Scurvy and Sobriety Prevention",
          "lucky gold ring",
          "piratical blunderbuss",
          "PirateRealm party hat",
          "Island Landslide",
          "Island Thunderstorm",
          "Island Hurricane",
          "Skull Punch",
          "Electric Punch",
          "Smuggler's Punch",
          "Scorpion Bowl",
          "Turtle Bowl",
          "Cobra Bowl",
          "vampyric cloake pattern",
          "vampyric cloake",
          "plastic pirate hat",
          "one piece of bubble gum",
          "arcanoferric housing",
          "intact medium-wave antenna",
          "18-picohertz resonator crystal",
          "blown-out speaker cone",
          "overloaded short-pulse transistor",
          "Fourth of May Cosplay Saber kit",
          "Fourth of May Cosplay Saber",
          "ring",
          "Thwaitgold nymph statuette",
          "hewn moon-rune spoon",
          "cartoon harpoon",
          "rune-strewn spoon cocoon",
          "Beach Comb Box",
          "Beach Comb",
          "grain of sand",
          "small pile of sand",
          "pile of sand",
          "large pile of sand",
          "empty hourglass",
          "hourglass",
          "etched hourglass",
          "magenta seashell",
          "cyan seashell",
          "gray seashell",
          "green seashell",
          "yellow seashell",
          "bunch of sea grapes",
          "bottle of sea wine",
          "kelp",
          "driftwood hat",
          "driftwood pants",
          "driftwood bracelet",
          "waders",
          "spearfish fishing spear",
          "lucky rabbitfish fin",
          "piece of coral",
          "piece of driftwood",
          "cursed pirate cutlass",
          "cursed tricorn hat",
          "cursed swash buckle",
          "meteorite fragment",
          "meteorite earring",
          "meteorite necklace",
          "meteorite ring",
          "Finnish Fish",
          "cursed chocolate doubloon",
          "driftwood beach comb",
          "Distant Woods Getaway Brochure",
          "stick of firewood",
          "whittled tiara",
          "whittled shorts",
          "whittled flail",
          "whittled wand",
          "whittled flute",
          "whittled bear figurine",
          "whittled owl figurine",
          "whittled fox figurine",
          "whittled walking stick",
          "campfire hot dog",
          "campfire baked potato",
          "campfire s'more",
          "campfire beans",
          "campfire stew",
          "campfire coffee",
          "leftover chocolate bar",
          "rare Meat isotope",
          "burnt stick",
          "bundle of firewood",
          "campfire smoke",
          "Murgatroyd diode",
          "signal receiver",
          "space shield",
          "signal jammer",
          "low-pressure oxygen tank",
          "Thwaitgold bombardier beetle statuette",
          "space chowder",
          "space wine",
          "The Imploded World",
          "packaged Pocket Professor",
          "Pocket Professor memory chip",
          "Law of Averages",
          "Unopened Eight Days a Week Pill Keeper",
          "Eight Days a Week Pill Keeper",
          "unopened diabolic pizza cube box",
          "diabolic pizza cube",
          "diabolic pizza",
          "bu&ntilde;uelos Jaliscos",
          "flan del mar",
          "Baja sopapilla",
          "tiny plastic Mer-kin baker",
          "tiny plastic sea elf",
          "tiny plastic yuleviathan",
          "tiny plastic dolphin &quot;orphan&quot;",
          "tiny plastic Dolph Bossin",
          "red-spotted snapper roe",
          "mana-coated yams",
          "mana-basted tofurkey leg",
          "mana-fortified cranberry sauce",
          "mana-stuffed herbal stuffing",
          "human musk",
          "patch of extra-warm fur",
          "industrial lubricant",
          "unfinished pleasure",
          "vial of humanoid growth hormone",
          "a bug's lymph",
          "organic potpourri",
          "boot flask",
          "infernal snowball",
          "powdered madness",
          "fish sauce",
          "guffin",
          "Shantix&trade;",
          "goodberry",
          "non-Euclidean angle",
          "peppermint syrup",
          "Mer-kin eyedrops",
          "extra-strength goo",
          "envelope full of Meat",
          "livid energy",
          "micronova",
          "beggin' cologne",
          "oxygenated eggnog helmet",
          "hand-knitted diving booties",
          "peppermint harpoon gun",
          "concentrated fish broth",
          "liquid SONAR",
          "map to Dolph Bossin's hideout",
          "Dolph Bossin's charity note",
          "Dolph Bossin's Crimbo hat",
          "The Spirit of Giving",
          "The Spirit of Giving (used)",
          "Crimbo Factory surprise box",
          "soggy gingerbread chunk",
          "salty gumdrop",
          "ribbon candy ascot",
          "moist Crimbo spices",
          "intact anemone spike",
          "anemoney clip",
          "runny icing",
          "super-sweet fish goo (spoiled)",
          "icing poncho",
          "Mer-kin cookiestove",
          "glob of salty molasses",
          "Mer-kin rollpin",
          "personalizable gingerbread cookie",
          "tinsel fin",
          "bowl of mernudo",
          "fishelada",
          "ojo de pez burrito",
          "waterlogged wood",
          "waterlogged cloth",
          "waterlogged stuffing",
          "waterlogged leather",
          "waterlogged metal",
          "antique nutcracker hat",
          "antique nutcracker waistcoat",
          "antique nutcracker pants",
          "antique nutcracker boots",
          "antique nutcracker sword",
          "antique nutcracker drumstick",
          "antique nutcracker beard",
          "antique nutcracker cape",
          "antique nutcracker epaulets",
          "antique nutcracker figurine",
          "salt plum",
          "peppermint eel sauce",
          "green and red bean",
          "kelp-holly gun",
          "Yuleviathan necklace",
          "peppermint spine",
          "soggy elf shoes",
          "Crimbylow-rise jeans",
          "kelp-holly drape",
          "Staff of the Peppermint Twist",
          "tempura green and red bean",
          "salt plum sake",
          "pressurized potion of possessiveness",
          "candied almond",
          "tiny handful of mixed nuts",
          "nutcracking pliers",
          "Retrospecs try-at-home kit",
          "Retrospecs",
          "unopened Bird-a-Day calendar",
          "Bird-a-Day calendar",
          "mint-in-box Powerful Glove",
          "Powerful Glove",
          "enhanced signal receiver",
          "status cymbal",
          "Drip harness",
          "drippy truncheon",
          "Driplet",
          "drippy snail shell",
          "drippy nugget",
          "glass of drippy wine",
          "drippy caviar",
          "drippy plum(?)",
          "drippy stake",
          "The Eye of the Thing in the Basement",
          "drippy khakis",
          "drippy shield",
          "The Fingernail of the Thing in the Basement",
          "coin",
          "mushroom",
          "deluxe mushroom",
          "super deluxe mushroom",
          "fizzy soda",
          "healthy juice",
          "hammer",
          "heavy hammer",
          "[10462]fire flower",
          "bonfire flower",
          "work boots",
          "fancy boots",
          "cape",
          "back shell",
          "spiky back shell",
          "power pants",
          "Thwaitgold buzzy beetle statuette",
          "Plumber's Union Handbook",
          "bony back shell",
          "frosty button",
          "blooper ink",
          "red coin",
          "rubber doll head",
          "rubber doll body",
          "plastic doll arms",
          "plastic doll legs",
          "rubber baby doll",
          "Better Shrooms and Gardens catalog",
          "packet of mushroom spores",
          "free-range mushroom",
          "plump free-range mushroom",
          "bulky free-range mushroom",
          "giant free-range mushroom",
          "immense free-range mushroom",
          "colossal free-range mushroom",
          "mushroom filet",
          "mushroom slab",
          "mushroom tea",
          "mushroom whiskey",
          "mushroom cap",
          "mushroom shield",
          "mushroom pants",
          "mushroom badge",
          "house-sized mushroom",
          "pristine piranha seed",
          "plastic piranha pot",
          "piranha pollen",
          "red plumber's boots",
          "sinistral homunculus",
          "rusty kettle bell",
          "glued-together crystal ball",
          "martini dregs",
          "flickering flashlight",
          "crumbling rabbit's foot",
          "outmoded fidget toy",
          "flimsy ski pole",
          "discarded finger painting",
          "old pizza box",
          "chipped coffee mug",
          "Left-Hand Man action figure",
          "drippy seed",
          "drippy grub",
          "drippy bezoar",
          "Drip Institute petri dish",
          "drippy ichor",
          "drippy enzyme",
          "drippy salt",
          "drippy pigment",
          "drippy bromide",
          "drippy flux",
          "drippy stein",
          "drippy pilsner",
          "drippy staff",
          "drippy orb",
          "lustrous drippy orb",
          "gory drippy orb",
          "annealed drippy orb",
          "Guzzlr application",
          "Guzzlr tablet",
          "Guzzlr cocktail set",
          "Guzzlrbuck",
          "Guzzlr hat",
          "Guzzlr shoes",
          "Guzzlr pants",
          "Guzzlr souvenir stein",
          "Guzzlr tattoo kit",
          "Ghiaccio Colada",
          "Sourfinger",
          "Nog-on-the-Cob",
          "Steamboat",
          "Buttery Boy",
          "Never Don't Stop Not Striving",
          "clown car key",
          "batting cage key",
          "aqu&iacute;",
          "knob labinet key",
          "weremoose key",
          "peg key",
          "kekekey",
          "rabbit's foot key",
          "knob shaft skate key",
          "ice key",
          "anchovy can key",
          "cactus key",
          "f'c'le sh'c'le k'y",
          "treasure chest key",
          "demonic key",
          "key sausage",
          "knob treasury key",
          "scrap metal key",
          "black rose key",
          "music box key",
          "actual skeleton key",
          "deep-fried key",
          "discarded bike lock key",
          "Thwaitgold keyhole spider statuette",
          "Manual of Lock Picking",
          "marshroom",
          "bag of Iunion stones",
          "Iunion Crown",
          "drippy candy bar",
          "salty drippy candy bar",
          "writhing drippy candy bar",
          "gooey drippy candy bar",
          "baby camelCalf",
          "dromedary drinking helmet",
          "packaged SpinMaster&trade; lathe",
          "SpinMaster&trade; lathe",
          "flimsy hardwood scraps",
          "birch battery",
          "ebony epee",
          "weeping willow wand",
          "beechwood blowgun",
          "maple magnet",
          "Dreadsylvanian hemlock",
          "hemlock helm",
          "sweaty balsam",
          "balsam barrel",
          "ancient redwood",
          "redwood rain stick",
          "purpleheart logs",
          "purpleheart &quot;pants&quot;",
          "wormwood stick",
          "wormwood wedding ring",
          "Dripwood slab",
          "drippy diadem",
          "Thwaitgold slug statuette",
          "ert grey goo ring",
          "fistful of wood shavings",
          "Yeg's Motel ashtray",
          "Yeg's Motel alarm clock",
          "Yeg's Motel toothbrush",
          "Yeg's Motel hand soap",
          "Yeg's Motel sewing kit",
          "Yeg's Motel pillow mint",
          "Yeg's Motel disposable razor",
          "Yeg's Motel mouthwash",
          "Yeg's Motel shower cap",
          "Yeg's Motel bathrobe",
          "Yeg's Motel slippers",
          "Yeg's Motel stationery",
          "Yeg's Motel minibar key",
          "sizzling desk bell",
          "frost-rimed desk bell",
          "uncanny desk bell",
          "nasty desk bell",
          "greasy desk bell",
          "fancy chess set",
          "onyx king",
          "onyx queen",
          "onyx rook",
          "onyx bishop",
          "onyx knight",
          "onyx pawn",
          "alabaster king",
          "alabaster queen",
          "alabaster rook",
          "alabaster bishop",
          "alabaster knight",
          "alabaster pawn",
          "bagged Cargo Cultist Shorts",
          "Cargo Cultist Shorts",
          "complicated device",
          "flask of moonshine",
          "sea-worn candlestick",
          "Universal Seasoning",
          "null-day exploit",
          "flame orb",
          "chocolate chip muffin",
          "Comprehensive Cartographic Compendium",
          "Comprehensive Cartographic Compendium (well-read)",
          "packaged knock-off retro superhero cape",
          "unwrapped knock-off retro superhero cape",
          "box o' ghosts",
          "gregarious ghostling",
          "grinning ghostling",
          "greedy ghostling",
          "subscription cocoa dispenser",
          "fortifying hot cocoa",
          "boiling hot cocoa",
          "cool hot cocoa",
          "overly-fancy hot cocoa",
          "hot cocoa au beurre",
          "hot cocoa with rainbow marshmallows",
          "Book of Old-Timey Carols",
          "Crimbo smile",
          "SalesCo sample kit",
          "candy harmonica",
          "powdered powdered sugar",
          "multi-level marzipan",
          "tiny plastic Crimbo caroler",
          "tiny plastic multi-level marketer",
          "tiny plastic Crimbo cheer",
          "tiny plastic Mirth",
          "tiny plastic Penny",
          "overflowing gift basket",
          "personalized wassail stein",
          "tabletop candy dispenser",
          "neck wreath",
          "shining star cap",
          "nativity shorts",
          "myrrh pouch",
          "frankincenser",
          "gilded trumpet",
          "&quot;reusable&quot; grocery bag",
          "cardboard wine carrier",
          "antique candy bucket",
          "prescription teeth whitener",
          "imported lemon lozenge",
          "hermedisiac cologne",
          "government food shipment",
          "government booze shipment",
          "government candy shipment",
          "Crimbo Cheer tattoo kit",
          "Crimbo Carol tattoo kit",
          "Crimbo Commerce tattoo kit",
          "food drive button",
          "booze drive button",
          "candy drive button",
          "food mailing list",
          "booze mailing list",
          "candy mailing list",
          "fruit bat",
          "tinsel orb",
          "snowpack",
          "Satan hat",
          "Crimbo stockings",
          "poncho de azucar",
          "The Night Before Crimbo, Ch. 1",
          "The Night Before Crimbo, Ch. 1 (used)",
          "The Night Before Crimbo, Ch. 2",
          "The Night Before Crimbo, Ch. 2 (used)",
          "The Night Before Crimbo, Ch. 3",
          "The Night Before Crimbo, Ch. 3 (used)",
          "The Night Before Crimbo, Ch. 4",
          "The Night Before Crimbo, Ch. 4 (used)",
          "The Night Before Crimbo, Ch. 5",
          "The Night Before Crimbo, Ch. 5 (used)",
          "The Night Before Crimbo, Ch. 6",
          "The Night Before Crimbo, Ch. 6 (used)",
          "stuffed red and green pepper (stale)",
          "cranberry margarita (brackish)",
          "fuzzy polar bear ears",
          "tiny glowing red nose",
          "miniature goose mask",
          "barrel-aged eggnog",
          "hand-crafted candy cane",
          "drive-thru burger",
          "Boulevardier cocktail",
          "Hotwire&trade; brand candy rope",
          "bowl full of jelly",
          "Eye and a Twist",
          "Chubby and Plump bar",
          "digibritches",
          "packaged miniature crystal ball",
          "miniature crystal ball",
          "fresh can of paint",
          "fresh coat of paint",
          "emotion chip",
          "spinal-fluid-covered emotion chip",
          "robo-battery",
          "Thwaitgold listening bug statuette",
          "power seed",
          "potted power plant",
          "battery (AAA)",
          "battery (AA)",
          "battery (D)",
          "battery (9-Volt)",
          "battery (lantern)",
          "battery (car)",
          "cryptocloak",
          "green marshmallow",
          "marshmallow bomb",
          "packaged backup camera",
          "backup camera",
          "shortest-order cook",
          "blue plate",
          "short beer",
          "short stack of pancakes",
          "short stick of butter",
          "short glass of water",
          "short white",
          "Thwaitgold quantum bug statuette",
          "quantum of familiar",
          "familiar scrapbook",
          "packaged familiar scrapbook",
          "clan underground fireworks shop",
          "fedora-mounted fountain",
          "sombrero-mounted sparkler",
          "porkpie-mounted popper",
          "yellow rocket",
          "blue rocket",
          "red rocket",
          "fire crackers",
          "Arr, M80",
          "Catherine Wheel",
          "rocket boots",
          "oversized sparkler",
          "Our Daily Candles&trade; order form",
          "Scent of a Human&trade; candle",
          "The Beast Within&trade; candle",
          "Salsa Caliente&trade; candle",
          "Smoldering Clover&trade; candle",
          "Napalm In The Morning&trade; candle",
          "extra-large utility candle",
          "runed taper candle",
          "novelty sparkling candle",
          "Abracandalabra",
          "extra-wide head candle",
          "natural magick candle",
          "rainbow glitter candle",
          "banana candle",
          "ear candle",
          "votive of confidence",
          "water candle",
          "B. L. A. R. T.",
          "Thwaitgold fire beetle statuette",
          "rusty empty nacho cheese can",
          "literal bucket hat",
          "rainproof barrel caulk",
          "pump grease",
          "packaged industrial fire extinguisher",
          "industrial fire extinguisher",
          "The Nose Knows, A Guide to Smells",
          "The Nose Knows, A Guide to Smells (read)",
          "1950 Vampire Vintner wine",
          "bottled Vampire Vintner",
          "French-Transylvanian Dictionary",
          "packaged Daylight Shavings Helmet",
          "Daylight Shavings Helmet",
          "eggwater",
          "bread man",
          "plain candy cane",
          "flour cookie",
          "tiny plastic food lab",
          "tiny plastic nog lab",
          "tiny plastic chem lab",
          "tiny plastic primary lab",
          "tiny plastic Cheer Core",
          "packaged cold medicine cabinet",
          "cold medicine cabinet",
          "ice crown",
          "frozen jeans",
          "ice wrap",
          "frozen tofu pop",
          "bowl of prescription candy",
          "fishcake",
          "bone broth",
          "star pop",
          "Doc's Fortifying Wine",
          "Doc's Smartifying Wine",
          "Doc's Limbering Wine",
          "Doc's Medical-Grade Wine",
          "Homebodyl&trade;",
          "Extrovermectin&trade;",
          "Breathitin&trade;",
          "Fleshazole&trade;",
          "anti-burn cream",
          "anti-freeze cream",
          "anti-goosebump cream",
          "anti-odor cream",
          "anti-creep cream",
          "anti-pain cream",
          "Doc's Special Reserve Wine",
          "bread pie",
          "clear Russian",
          "zero-trust tanktop",
          "white Crimbo ball",
          "black Crimbo ball",
          "gooified animal matter",
          "gooified vegetable matter",
          "gooified mineral matter",
          "[experimental crimbo food]",
          "[experimental crimbo booze]",
          "[experimental crimbo spleen]",
          "goo magnet",
          "cozy scarf",
          "huge Crimbo cookie",
          "fleshy putty",
          "third ear",
          "festive egg sac",
          "poisonsettia",
          "peppermint-scented socks",
          "the Crymbich Manuscript",
          "projectile chemistry set",
          "depleted Crimbonium football helmet",
          "synthetic rock",
          "&quot;caramel&quot; orange",
          "self-repairing earmuffs",
          "carnivorous potted plant",
          "universal biscuit",
          "yule hatchet",
          "potato alarm clock",
          "lab-grown meat",
          "golden fleece",
          "boxed gumball machine",
          "cloning kit",
          "electric pants",
          "can of mixed everything",
          "Site Alpha ID badge",
          "the Crymbich Manuscript (used)",
          "meatball",
          "cloned monster",
          "meatball machine",
          "refurbished air fryer",
          "fried air",
          "11-leaf clover",
          "[10882]carton of astral energy drinks",
          "[10883]astral energy drink",
          "mint condition magnifying glass",
          "cursed magnifying glass",
          "void lager",
          "void burger",
          "void stone",
          "void shard",
          "undrilled cosmic bowling ball",
          "cosmic bowling ball",
          "combat lover's locket lockbox",
          "combat lover's locket",
          "Thwaitgold protozoa statuette",
          "grey gosling",
          "grey down vest",
          "trojan horseshoe",
          "undamaged Unbreakable Umbrella",
          "unbreakable umbrella",
          "MayDay&trade; contract",
          "MayDay&trade; supply package",
          "emergency glowstick",
          "survival knife",
          "crank-powered radio on a lanyard",
          "headlamp",
          "thermal blanket",
          "atlas of local maps",
          "spare battery",
          "space blanket",
          "single-use dust mask",
          "gaffer's tape",
          "20-lb can of rice and beans",
          "bar of freeze-dried water",
          "expired MRE",
          "cool mint precipice bar",
          "carrot cake precipice bar",
          "The Big Book of Every Skill",
          "Thwaitgold harvestman statuette",
          "packaged June cleaver",
          "June cleaver",
          "Dad's brandy",
          "teacher's pen",
          "fire-roasted lake trout",
          "guilty sprout",
          "mother's necklace",
          "trampled ticket stub",
          "savings bond",
          "designer sweatpants (new old stock)",
          "designer sweatpants",
          "sweat-ade",
          "unopened tiny stillsuit",
          "tiny stillsuit",
          "thick dinosaur leather",
          "shiny dinosaur scale",
          "pristine dinosaur feather",
          "nasty dinosaur spike",
          "pterodactyl rifle",
          "birdseed hat",
          "flatusaur gasmask",
          "dinosaur dart",
          "Dino DNAde&trade;",
          "dinosaur repellent",
          "camouflage vest",
          "Dinodollar",
          "valuable dinosaur droppings",
          "dinosaur pheromone kit",
          "awkward dinosaur research harness",
          "reflective vest",
          "stuffed dinosaur",
          "Thwaitgold mosquito-in-amber statuette",
          "packaged Jurassic Parka",
          "Jurassic Parka",
          "boxed autumn-aton",
          "autumn-aton",
          "autumn leaf",
          "AutumnFest ale",
          "autumn sweater-weather sweater",
          "autumn debris shield",
          "autumn-spice donut",
          "autumn dollar",
          "autumn leaf pendant",
          "autumn breeze",
          "autumn years wisdom",
          "familiar-in-the-middle wrapper",
          "Oopsie IPA",
          "mummified entombed cookbookbat",
          "Yeast of Boris",
          "St. Sneaky Pete's Whey",
          "Vegetable of Jarlsberg",
          "ratatouille de Jarlsberg",
          "Jarlsberg's vegetable soup",
          "roasted vegetable of Jarlsberg",
          "St. Pete's sneaky smoothie",
          "Pete's wiley whey bar",
          "Pete's rich ricotta",
          "Boris's beer",
          "honey bun of Boris",
          "Boris's bread",
          "Recipe of Before Yore: ratatouille de Jarlsberg",
          "Recipe of Before Yore: Jarlsberg's vegetable soup",
          "Recipe of Before Yore: roasted vegetable of J.",
          "Recipe of Before Yore: St. Pete's sneaky smoothie",
          "Recipe of Before Yore: Pete's wily whey bar",
          "Recipe of Before Yore: Pete's rich ricotta",
          "Recipe of Before Yore: Boris's beer",
          "Recipe of Before Yore: honey bun of Boris",
          "Recipe of Before Yore: Boris's bread",
          "baked veggie ricotta casserole",
          "plain calzone",
          "roasted vegetable focaccia",
          "Pizza of Legend",
          "Calzone of Legend",
          "Recipe of Before Yore: Calzone of Legend",
          "Recipe of Before Yore: Pizza of Legend",
          "Recipe of Before Yore: roasted vegetable focaccia",
          "Recipe of Before Yore: plain calzone",
          "Recipe of Before Yore: baked veggie ricotta",
          "cookbookbat book",
          "Recipe of Before Yore: Deep Dish of Legend",
          "Deep Dish of Legend",
          "deed to Oliver's Place",
          "drink chit",
          "government per-diem",
          "prohie's hat",
          "imported taffy",
          "Charleston shoes",
          "booze bindle",
          "rare oboe",
          "bullet necklace",
          "swamp haunch",
          "gator shades",
          "milk cap",
          "Charleston Choo-Choo",
          "Velvet Veil",
          "Marltini",
          "Strong, Silent Type",
          "Mysterious Stranger",
          "Champagne Shimmy",
          "the Sot's parcel",
          "ceramic cestus",
          "ceramic centurion shield",
          "ceramic celery grater",
          "ceramic celsiturometer",
          "ceramic cerecloth belt",
          "ceramic cenobite's robe",
          "ceramic scree",
          "extra-hard jawbreaker",
          "chiffon chevrons",
          "chiffon chapeau",
          "chiffon chamberpot",
          "chiffon chemise",
          "chiffon chakram",
          "chiffon chaps",
          "chiffon carbage",
          "chiffon lemon",
          "chocomotive",
          "freightcake",
          "cabooze",
          "tiny plastic caboose",
          "tiny plastic passenger car",
          "tiny plastic dining car",
          "tiny plastic coal car",
          "tiny plastic locomotive",
          "packaged model train set",
          "model train set",
          "Crimbo training manual",
          "Abuela Crimbo's special magnet",
          "Trainbot radar monocle",
          "pile of Trainbot parts",
          "Trainbot circuitry",
          "Trainbot tubing",
          "Trainbot plating",
          "Trainbot optics",
          "Trainbot servomotors",
          "Trainbot linkages",
          "ping-pong paddle",
          "ping-pong ball",
          "Trainbot harness",
          "portable ping-pong table",
          "Crimbo train emergency brake",
          "Trainbot autoassembly module",
          "head-mounted Trainbot",
          "leg-mounted Trainbots",
          "shoulder-mounted Trainbot",
          "cinnamon machine oil",
          "Crimbo crystal shards",
          "dregs of a Crimbo cocktail",
          "lost elf luggage",
          "Trainbot luggage hook",
          "honey-drenched ham slice",
          "mostly-empty bottle of cookie wine",
          "Crimbo food scraps",
          "white arm towel",
          "automatic wine thief",
          "silver table-scraper",
          "Trainbot slag",
          "industrially-crushed ice",
          "steamed oyster",
          "really nice lump of coal",
          "deactivated mini-Trainbot",
          "portable steam unit",
          "crystal Crimbo goblet",
          "crystal Crimbo platter",
          "Crimbosmopolitan",
          "Crimbo dinner",
          "overloaded Yule battery",
          "train whistle",
          "The Superconductor's CPU",
          "unoccupied sheep suit",
          "half-height cigar",
          "grubby wool",
          "grubby wool hat",
          "grubby wool scarf",
          "grubby wool trousers",
          "grubby wool gloves",
          "grubby wool beerwarmer",
          "nice warm beer",
          "grubby woolball",
          "Rock Garden Guide",
          "packet of rock seeds",
          "groveling gravel",
          "fruity pebble",
          "lodestone",
          "milestone",
          "bolder boulder",
          "molehill mountain",
          "whet stone",
          "hard rock",
          "strange stalagmite",
          "chocolate covered ping-pong ball",
          "pixel bread",
          "pixel whiskey",
          "pixel rock",
          "S.I.T. Course Voucher",
          "S.I.T. Course Completion Certificate",
          "glob of extra-green chlorophyll",
          "electric mushroom",
          "five-fingered fern resin",
          "super good fruit",
          "energized spores",
          "big hot pepper",
          "out-of-work circus flea",
          "extra-grubby grub",
          "fire ant pheromones",
          "flapper fly",
          "shot of wasp venom",
          "filled mosquito",
          "shim of shame shale",
          "pebble of proud pyrite",
          "pile of gritty sand",
          "hollow rock",
          "angry agate",
          "lump of loyal latite",
          "shadow sausage",
          "shadow skin",
          "shadow flame",
          "shadow bread",
          "shadow ice",
          "shadow fluid",
          "shadow glass",
          "shadow brick",
          "shadow sinew",
          "shadow venom",
          "shadow nectar",
          "shadow stick",
          "cursed bat paw",
          "uncursed bat paw",
          "cursed goblin cape",
          "uncursed goblin cape",
          "cursed dragon wishbone",
          "uncursed dragon wishbone",
          "cursed stats",
          "uncursed stats",
          "cursed arcane orb",
          "uncursed arcane orb",
          "cursed machete",
          "uncursed machete",
          "cursed blanket",
          "uncursed blanket",
          "cursed medallion",
          "uncursed medallion",
          "Advanced Pig Skinning",
          "The Cheese Wizard's Companion",
          "Jazz Agent sheet music",
          "Thwaitgold anti-moth statuette",
          "shadowy cheat sheet",
          "closed-circuit phone system",
          "closed-circuit pay phone",
          "shadow lighter",
          "shadow heptahedron",
          "shadow snowflake",
          "shadow heart",
          "shadow bucket",
          "shadow wave",
          "Rufus's shadow lodestone",
          "shadow chef's hat",
          "shadow trousers",
          "shadow hammer",
          "shadow monocle",
          "shadow candle",
          "shadow hot dog",
          "shadow martini",
          "shadow pill",
          "shadow needle",
          "cursed monkey's paw",
          "cursed monkey glove",
          "shadow candy",
          "replica Mr. Accessory",
          "replica Dark Jill-O-Lantern",
          "replica hand turkey outline",
          "replica crimbo elfling",
          "replica pygmy bugbear shaman",
          "dedigitizer schematic: cyburger",
          "replica miniature gravy-covered maypole",
          "replica wax lips",
          "replica Tome of Snowcone Summoning",
          "dedigitizer schematic: cybeer",
          "replica jewel-eyed wizard hat",
          "replica bottle-rocket crossbow",
          "replica navel ring of navel gazing",
          "replica V for Vivala mask",
          "replica haiku katana",
          "replica little box of fireworks",
          "replica cotton candy cocoon",
          "replica Elvish sunglasses",
          "replica squamous polyp",
          "replica floaty stone sphere",
          "replica Greatest American Pants",
          "replica organ grinder",
          "replica Juju Mojo Mask",
          "replica Operation Patriot Shield",
          "replica Libram of Resolutions",
          "replica plastic vampire fangs",
          "replica cute angel",
          "replica Camp Scout backpack",
          "replica deactivated nanobots",
          "replica Apathargic Bandersnatch",
          "replica Smith's Tome",
          "replica over-the-shoulder Folder Holder",
          "replica Order of the Green Thumb Order Form",
          "shrink-wrapped Cincho de Mayo",
          "Cincho de Mayo",
          "dedigitizer schematic: psilocyber mushroom",
          "replica Little Geneticist DNA-Splicing Lab",
          "replica still grill",
          "replica Crimbo sapling",
          "replica yellow puck",
          "replica Chateau Mantegna room key",
          "replica Deck of Every Card",
          "replica Source terminal",
          "replica disconnected intergnat",
          "replica Witchess Set",
          "replica genie bottle",
          "replica space planula",
          "replica unpowered Robortender",
          "replica Neverending Party invitation envelope",
          "replica January's Garbage Tote",
          "replica God Lobster Egg",
          "replica Fourth of May Cosplay Saber",
          "replica Kramco Sausage-o-Matic&trade;",
          "replica hewn moon-rune spoon",
          "replica baby camelCalf",
          "replica Powerful Glove",
          "replica Cargo Cultist Shorts",
          "replica industrial fire extinguisher",
          "replica miniature crystal ball",
          "replica emotion chip",
          "replica Jurassic Parka",
          "replica grey gosling",
          "replica designer sweatpants",
          "replica plastic pumpkin bucket",
          "replica Ten Dollars",
          "replica Cincho de Mayo",
          "Thwaitgold splendor beetle statuette",
          "shrink-wrapped 2002 Mr. Store Catalog",
          "2002 Mr. Store Catalog",
          "&quot;I survived Y2K&quot; T-Shirt",
          "Letter from Carrie Bradshaw",
          "pro skateboard",
          "Mr. Accessaturday",
          "Meat Butler",
          "Loathing Idol Microphone",
          "Charter: Nellyville",
          "Manual of Secret Door Detection",
          "Flash Liquidizer Ultra Dousing Accessory",
          "Amulet of Perpetual Darkness",
          "Giant black monolith",
          "Crimbo cookie sheet",
          "Spooky VHS Tape",
          "scroll of minor invulnerability",
          "Lapis Lazuli",
          "Eye Agate",
          "Azurite",
          "Arrow (+1)",
          "scroll of protection from lycanthropes",
          "Loathing Idol Microphone (75% charged)",
          "Loathing Idol Microphone (50% charged)",
          "Loathing Idol Microphone (25% charged)",
          "Replica 2002 Mr. Store Catalog",
          "Mr. Big's Wallet",
          "Sexy Cosmo",
          "Souvenir Chopsticks",
          "red-soled high heels",
          "cyburger",
          "ncle leg",
          "rutabuga bag",
          "mesquito proboscis",
          "senate fly thorax",
          "bug juice",
          "spider leg",
          "beetle antenna",
          "mantis skull",
          "chitin powder",
          "daddy shortlegs leg",
          "birdybug antenna",
          "kilopede skull",
          "haemolymphnode",
          "chitin powder paste",
          "sleeping patriotic eagle",
          "claw-held flag",
          "souvenir flag",
          "name change form",
          "replica sleeping patriotic eagle",
          "boxed august scepter",
          "august scepter",
          "watermelon",
          "watermelon seed",
          "water balloon",
          "thriftshop coupon",
          "waffle",
          "fixodent",
          "cat o' nine teeth",
          "tooth cap",
          "toothy trousers",
          "banana split",
          "handful of toilet paper",
          "Mrs. Rush",
          "tiny gold medal",
          "bottle of Cabernet Sauvignon",
          "baywatch",
          "Pocket Guide to Mild Evil",
          "Pocket Guide to Mild Evil (used)",
          "tiny consolation ribbon",
          "replica august scepter",
          "Thwaitgold fairyfly statue",
          "residual chitin paste",
          "concentrated cooking",
          "ancient meat",
          "sparkling orb",
          "hardening cream",
          "pool shark hair oil",
          "book of facts",
          "book of facts (dog-eared)",
          "Dark Jill-of-All-Trades",
          "LED candle",
          "map to a candy-rich block",
          "sampler size toothpaste",
          "Franken Stein",
          "A Guide to Burning Leaves",
          "inflammable leaf",
          "tiny rake",
          "rake",
          "autumnic bomb",
          "forest canopy bed",
          "day shortener",
          "extra time",
          "autumnal aegis",
          "distilled resin",
          "super-heated leaf",
          "lit leaf lasso",
          "tied-up flaming leaflet",
          "tied-up flaming monstera",
          "tied-up leaviathan",
          "impromptu torch",
          "flaming fig leaf",
          "smoldering drape",
          "smoldering leafcutter ant egg",
          "flaming leaf crown",
          "leafy browns",
          "autumnic balm",
          "coping juice",
          "candy cane sword cane",
          "wrapped candy cane sword cane",
          "Elf Guard patrol cap",
          "Elf Guard hotpants",
          "Crimbuccaneer tricorn",
          "Crimbuccaneer breeches",
          "automa-bot parts",
          "security automa-core",
          "clerical automa-core",
          "handful of Boltsmann bearings",
          "Spring Bros. solenoid",
          "Spring Bros. ID badge",
          "Boltsmann ID badge",
          "housekeeping automa-core",
          "portable housekeeping robot",
          "pickled bread",
          "salted mutton",
          "corned beet",
          "tiny plastic Armory",
          "tiny plastic Bar",
          "tiny plastic Cafe",
          "tiny plastic Factory",
          "tiny plastic Abuela's cottage",
          "pirate encryption key alpha",
          "pirate encryption key bravo",
          "pirate encryption key charlie",
          "pirate encryption key delta",
          "wardrobe-o-matic",
          "futuristic shirt",
          "futuristic hat",
          "futuristic collar",
          "crated wardrobe-o-matic",
          "peppermint donut",
          "Elf Guard insignia (private)",
          "Crimbuccaneer fledges (mint)",
          "military-grade peppermint oil",
          "Crimbuccaneer whale oil",
          "Elf Guard tinsel grenade",
          "Crimbuccaneer mologrog cocktail",
          "Elf Army machine parts",
          "Crimbuccaneer rigging lasso",
          "Crimbuccaneer lantern",
          "Crimbuccaneer flotsam",
          "Crimbuccaneer invasion map",
          "Crimbuccaneer shirt",
          "Elf Guard MPC",
          "Crimbuccaneer piece of 12",
          "Elf Guard commandeering gloves",
          "Elf Guard eyedrops",
          "Crimbuccaneer premium booty sack",
          "Elf Guard honor present",
          "Elf Guard officer's sidearm",
          "Elf Guard insignia (general)",
          "Crimbow Rainbo",
          "Elf Guard strategic map",
          "Crimbuccaneer captain's purse",
          "Elf Guard broom",
          "Crimbuccaneer tavern swab",
          "Elf Guard hangover cure",
          "old-school pirate grog",
          "grog nuts",
          "sawed-off blunderbuss",
          "officer's nog",
          "peppermint bomb",
          "sundae ration",
          "peppermint tack",
          "Elf Guard Field Manual: Culinary Arts",
          "whalesteak",
          "whalegun",
          "Cocktails of the Age of Sail",
          "Elf Guard payroll bag",
          "Elf Guard clipboard",
          "pegfinger",
          "red and white claret",
          "Elf Guard red and white beret",
          "shipwright's hammer",
          "gunwale",
          "Kelflar vest",
          "whale cerebrospinal fluid",
          "Crimbuccaneer runebone",
          "cannonbomb",
          "Elf Guard mouthknife",
          "Crimbuccaneer fledges (disintegrating)",
          "Elf Guard fuel tank",
          "massive wrench",
          "brown pirate pants",
          "Elf Guard Field Manual: Extortion",
          "The Encyclopedia of Fruit",
          "punching mirror",
          "ancient Elf dessert spoon",
          "Elf Guard SCUBA tank",
          "Elf Guard Field Manual: Wilderness Sleeping",
          "free boots",
          "baby rigging snake",
          "Elvish underarmor",
          "Crimbuccaneer bombjacket",
          "sugarplum ration",
          "gingerbread nylons",
          "rum-soaked fruitcake",
          "candied lime",
          "gingerbread pirate",
          "fruit-stuffed rumcake",
          "mulled wine",
          "Swedish coffee",
          "canteen of eggnog",
          "hot wine",
          "Jamaican coffee",
          "flask of egggrog",
          "Black and White Apron Enrollment Form",
          "Black and White Apron Meal Kit",
          "pirate encryption key (complete)",
          "yule grog",
          "wet tack",
          "whalecake",
          "gunwale whalegun",
          "red white and blue claret",
          "rigging knot",
          "trick coin",
          "Elf Guard squirtgun",
          "chest of &quot;pirate gold&quot;",
          "sequin-encrusted sweater",
          "replica Elf Guard medal",
          "Lil' Snowball Factory",
          "Elf Guard temporary (permanent) tattoo",
          "prank Crimbo card",
          "Crimbuccaneer squirtblunderbuss",
          "My First Paycheck envelope",
          "barnacle-encrusted sweater",
          "Crimbuccaneer nose ring",
          "pet anchor",
          "Crimbuccaneer tattoo gift certificate",
          "Elf Guard safety bear",
          "stuffed kraken",
          "precision snowball",
          "Elf Guard Field Manual: Culinary Arts (used)",
          "Cocktails of the Age of Sail (used)",
          "Elf Guard Field Manual: Extortion (used)",
          "The Encyclopedia of Fruit (used)",
          "Elf Guard Field Manual: Wilderness Sleeping (used)",
          "military candy cane",
          "groggipop",
          "moss mace",
          "moss megaphone",
          "moss medal",
          "moss mitre",
          "moss mantle",
          "moss marlinspike",
          "moss mulch",
          "moss floss",
          "adobe arsecover",
          "adobe adze",
          "adobe abacus",
          "adobe ayam",
          "adobe ascot",
          "adobe abaya",
          "adobe assortment",
          "adobe brittle",
          "crepe paper phrygian cap",
          "crepe paper parachute cape",
          "crepe paper pie clip",
          "crepe paper puzzle cube",
          "crepe paper plunge camisole",
          "crepe paper polka charm",
          "crepe paper pared cuttings",
          "crepe paper peanut candy",
          "petrified wood war pike",
          "petrified wood waist protector",
          "petrified wood wizard's pouch",
          "petrified wood water purifier",
          "petrified wood whoopie panama",
          "petrified wood walking pants",
          "petrified wood waste parts",
          "petrified wood wafer praline",
          "cybeer",
          "ICEbox",
          "wired underwear",
          "encrypted shuriken",
          "baby chest mimic",
          "googly chest eyes",
          "mimic egg",
          "Crimbuccaneer war standard",
          "Elf Guard war standard",
          "in-the-box spring shoes",
          "spring shoes",
          "ultra-soft ferns",
          "crunchy brush",
          "smashed scientific equipment",
          "biphasic molecular oculus",
          "triphasic molecular oculus",
          "high-tension exoskeleton",
          "ultra-high-tension exoskeleton",
          "irresponsible-tension exoskeleton",
          "quick-release belt pouch",
          "quick-release fannypack",
          "quick-release utility belt",
          "motion sensor",
          "focused magnetron pistol",
          "packaged Everfull Dart Holster",
          "Everfull Dart Holster",
          "research fragment",
          "Thwaitgold wolf spider statuette",
          "boxed Apriling band helmet",
          "Apriling band helmet",
          "Apriling band saxophone",
          "Apriling band quad tom",
          "Apriling band tuba",
          "Apriling band staff",
          "Apriling band piccolo",
          "boxed Mayam Calendar",
          "Mayam Calendar",
          "yam",
          "yam martini",
          "sweet potato o' mine",
          "Southern yam",
          "sweet potato punch",
          "Mayam spinach",
          "yam and swiss",
          "yam cannon",
          "tiny yam cannon",
          "yam battery",
          "stuffed yam stinkbomb",
          "furry yam buckler",
          "thanksgiving bomb",
          "yamtility belt",
          "yam slider",
          "yam mayo",
          "yam burrito",
          "visual packet sniffer",
          "mini kiwi egg",
          "aviator goggles",
          "Thwaitgold Illinigina illinoiensis model",
          "mini kiwi",
          "mini kiwi bikini",
          "mini kiwitini",
          "mini kiwi invisible dirigible",
          "mini kiwi aioli",
          "mini kiwi silicon tiepin",
          "mini kiwi tipi",
          "mini kiwi digitized cookies",
          "mini kiwi intoxicating spirits",
          "mini kiwi antimilitaristic hippy petition",
          "mini kiwi illicit antibiotic",
          "mini kiwi whipping stick",
          "mini kiwi icepick",
          "mini kiwi-flavored aspirin-injecting lipstick",
          "packaged Roman Candelabra",
          "Roman Candelabra",
          "protogenetic chunklet (synapse)",
          "protogenetic chunklet (muscle)",
          "protogenetic chunklet (flagellum)",
          "protogenetic chunklet (elbow)",
          "protogenetic chunklet (lips)",
          "messenger bag RNA",
          "flagellate flagon",
          "proto-proto-protozoa",
          "bacteria bisque",
          "ciliophora chowder",
          "cream of chloroplasts",
          "synaptic soup",
          "muscular soup",
          "flagellate soup",
          "elbow soup",
          "lip soup",
          "unevolved organism",
          "extra ooze",
          "extra DNA",
          "untorn tearaway pants package",
          "tearaway pants",
          "baby bodyguard",
          "Doll Moll violin case",
          "tiny Tina gun",
          "tattoo gun",
          "Colera Peste Nebbiolo",
          "longbox of Batfellow comics",
          "Thwaitgold shield bug statuette",
          "bodyguard badge",
          "Too Cold to Hold: How to Be Cool - A Memoir",
          "Too Cold to Hold: How to Be Cool - A Memoir (read)",
          "boxed Sept-Ember Censer",
          "Sept-Ember Censer",
          "blade of dismemberment",
          "miniature Embering Hulk",
          "Mmm-brr! brand mouthwash",
          "Septapus summoning charm",
          "structural ember",
          "embers-only jacket",
          "bembershoot",
          "wheel of camembert",
          "hat of remembering",
          "throwin' ember",
          "head of emberg lettuce",
          "embering hunk",
          "soft cap of diminishing returns",
          "photo booth sized crate",
          "boxed bat wings",
          "bat wings",
          "ember egg",
          "tiny ember",
          "oversized monocle on a stick",
          "cheap plastic pipe",
          "fake arrow-through-the-head",
          "giant bow tie",
          "fake huge beard",
          "astronaut helmet",
          "feather boa",
          "Sheriff badge",
          "Sheriff pistol",
          "Sheriff moustache",
          "photo booth supply list",
          "peace turkey outline",
          "tie-dye headband",
          "whirled peas",
          "peaza",
          "peace shooter",
          "drenchrome 2.0",
          "Synapse Blaster",
          "quantized familiar",
          "quantum watch",
          "quantized familiar experience",
          "pea brittle",
          "peasco sour",
          "piece of cake",
          "handful of split pea soup",
          "Sealed TakerSpace letter of Marque",
          "TakerSpace letter of Marque",
          "deft pirate hook",
          "iron tricorn hat",
          "jolly roger flag",
          "sleeping profane parrot",
          "pirrrate's currrse",
          "tankard of spiced rum",
          "tankard of spiced Goldschlepper",
          "packaged luxury garment",
          "governor's daughter's lace collar",
          "governor's daughter's petticoats",
          "governor's daughter's pearl hairpin",
          "harpoon",
          "chili powder cutlass",
          "cursed Aztec tamale",
          "jolly roger tattoo kit",
          "golden pet rock",
          "groggles",
          "pirate dinghy",
          "anchor bomb",
          "silky pirate drawers",
          "profane eye patch",
          "peppermint pegleg",
          "hard cocoa",
          "salmagumdi",
          "tiny plastic Easter Island Bunny",
          "tiny plastic St. Patrick",
          "tiny plastic Colonel Brando",
          "tiny plastic Jedediah and Boiling Cloud",
          "tiny plastic &quot;Santa Claus&quot;",
          "Spirit of Easter",
          "Spirit of St. Patrick's Day",
          "Spirit of Veteran's Day",
          "Spirit of Thanksgiving",
          "Spirit of Christmas",
          "coney haunch",
          "dark chocolate egg",
          "moai toai",
          "moaiball",
          "half-digested rat",
          "four-leaf potato sprout",
          "potato jacket",
          "traumatic holiday memory",
          "Brandonian footlocker key",
          "military orb",
          "rum ball",
          "gravy skin",
          "gravyskin hat",
          "gravyskin buckler",
          "gravyskin skirt",
          "gravyskin pants",
          "crystallized pumpkin spice",
          "room scale green bean casserole",
          "fragile Christmas ornament",
          "ragged wool yarn",
          "perfect Christmas scarf",
          "snowman-enchanting tophat",
          "LIDAR candle",
          "Congressional Medal of Insanity",
          "pumpkin spice whorl",
          "Easter grasshopper",
          "Irish eggnog",
          "canteen of jungle juice",
          "turchucken",
          "mechanically-mulled cider",
          "holiday trip around the world",
          "chocolate ostrich egg",
          "candied beef and cabbage",
          "candy rations",
          "double-candied yams",
          "Christmas ham",
          "holiday smorgasbord",
          "Bowl of Infinite Jelly",
          "bejazzled eyepatch",
          "Secrets of the Master Egg Hunters",
          "Secrets of the Master Egg Hunters (used)",
          "How to Lose Friends and Attract Snakes",
          "How to Lose Friends and Attract Snakes (used)",
          "Covert Ops for Kids",
          "Covert Ops for Kids (used)",
          "Holiday Multitasking",
          "Holiday Multitasking (used)",
          "Hoyle's Guide to Reindeer Games",
          "Hoyle's Guide to Reindeer Games (used)",
          "lucky moai statuette",
          "egg gun",
          "lucky army helmet",
          "candy egg deviler",
          "lucky napkin",
          "Thanksgiving ration",
          "Easter eggnog",
          "clovermint",
          "nylon Christmas stockings",
          "tattoo of two turkeys",
          "deviled candy egg",
          "McHugeLarge deluxe ski set",
          "McHugeLarge duffel bag",
          "McHugeLarge left pole",
          "McHugeLarge right pole",
          "McHugeLarge left ski",
          "McHugeLarge right ski",
          "1",
          "0",
          "eXpand",
          "brute force hammer",
          "datastick",
          "dedigitizer schematic: brute force hammer",
          "dedigitizer schematic: malware injector",
          "dedigitizer schematic: cybervisor",
          "dedigitizer schematic: digibritches",
          "dedigitizer schematic: cryptocloak",
          "dedigitizer schematic: zero-trust tanktop",
          "dedigitizer schematic: retro floppy disk",
          "dedigitizer schematic: pocket GPU",
          "dedigitizer schematic: trojan horseshoe",
          "dedigitizer schematic: familiar-in-the-middle",
          "cybervisor",
          "retro floppy disk",
          "pocket GPU",
          "malware injector",
          "CyberRealm keycode",
          "server room key",
          "3d printed server room key",
          "dedigitizer schematic: 3d printed server room key",
          "logic grenade",
          "psilocyber mushroom",
          "dedigitizer schematic: SLEEP(5) rom chip",
          "dedigitizer schematic: OVERCLOCK(10) rom chip",
          "dedigitizer schematic: STATS+++ rom chip",
          "dedigitizer schematic: insignificant bit",
          "dedigitizer schematic: hashing vise",
          "dedigitizer schematic: geofencing rapier",
          "dedigitizer schematic: geofencing shield",
          "dedigitizer schematic: virtual cybertattoo",
          "SLEEP(5) rom chip",
          "OVERCLOCK(10) rom chip",
          "STATS+++ rom chip",
          "insignificant bit",
          "parity bit",
          "hashing vise",
          "geofencing rapier",
          "geofencing shield",
          "virtual cybertattoo",
          "ninja rope",
          "ninja crampons",
          "ninja carabiner",
          "synthetic coffee",
          "iDrops",
          "shame coil",
          "new-in-box toy Cupid bow",
          "toy Cupid bow",
          "heat arc",
          "cold scrape",
          "phantom digit",
          "foul line",
          "dark manioc",
          "Observer source code",
          "chill gherkin",
          "childrens' stapler",
          "plover's egg",
          "electric flyswatter",
          "Thwaitgold cordyceps ant statuette",
          "heat particle",
          "cold sore",
          "stomach churner",
          "phantom brace",
          "foul cozy",
          "grim cellophane",
          "rift oculus",
          "sweaty egg",
          "carton of extra-sharp, rusty staples",
          "glover liners",
          "mosquito speakers",
          "assemble-it-yourself Leprecondo",
          "Leprecondo",
          "scoop of pre-workout powder",
          "table tennis ball",
          "pint of Leprechaun Stout",
          "phosphor traces",
          "crafting plans",
          "Book of Irony",
          "spoon",
          "unironic knife",
          "bar dart",
          "leprechaun antidepressant pill",
          "Heck ramen",
          "tiny burrito",
          "small beer brat",
          "tiny peach pie",
          "incredible mini-pizza",
          "Divine sidecar",
          "tangarita sidecar",
          "gimlet sidecar",
          "vodka stratocaster sidecar",
          "prussian cathouse sidecar",
          "Mon Tiki sidecar",
          "Packaged April Shower Thoughts Calendar",
          "April Shower Thoughts shield",
          "glob of wet paper",
          "spitball",
          "wet paper weights",
          "Three Sheets to the Wind",
          "pile of wet dates",
          "papier Mach 1 airplane",
          "wet blanket",
          "wet shower cap",
          "wet shower shoes",
          "wet shower shorts",
          "wet paper tiger",
          "wet paper eye",
          "wet shower curtain",
          "wet paper cup",
          "wet paperback",
          "wet shower radio",
          "wet shower stamp",
          "big birthday bloon",
          "jawwetter",
          "Unpeeled Peridot of Peril",
          "Peridot of Peril",
          "terrycloth turban",
          "jockey's hat",
          "sharpshooter's hat",
          "extra-tight skullcap",
          "sturdy pith helmet",
          "bishop's mitre",
          "tin foil hat",
          "construction hardhat",
          "imposing pilgrim's hat",
          "crown of thorns",
          "stylish bycocket",
          "Thwaitgold mad hatterpillar statuette",
          "packaged prismatic beret",
          "prismatic beret",
          "flak shield",
          "Axis HQ Code",
          "yeti in a travel cooler",
          "cold exchanger",
          "Axis helmet",
          "Axis fatigues",
          "Axis suspenders",
          "stolen artifact",
          "really expensive stolen artifact",
          "priceless stolen artifact",
          "chocolate rations",
          "nice nylon stockings",
          "Allied Radio Backpack Pack",
          "Allied Radio Backpack",
          "orphaned baby skeleton",
          "ordnance magnet",
          "confetti grenade",
          "Skeleton Wars rations",
          "skeleton war fuel can",
          "skeleton war grenade",
          "chocolate and nylons detector",
          "M&ouml;bius ring box",
          "M&ouml;bius ring",
          "bone pacifier",
          "Allied Forces insignia",
          "Allied Tattoo Kit",
          "handheld Allied radio",
          "Axis codebook",
          "Life Goals Pamphlet",
          "bully badge",
          "time cop top hat",
          "Stock Certificate",
          "mixed berry jelly",
          "toast with mixed berry jelly",
          "cup of sugar",
          "Susie's cupcake",
          "clock",
          "the gun",
          "fancy old wine",
          "really, really nice swimming trunks",
          "sand penny",
          "undersea surveying goggles",
          "Ocean-Touched Rum",
          "water-logged pill",
          "kelp puck",
          "scroll of sea strength",
          "scroll of sea smarts",
          "scroll of sea smarm",
          "waterlogged scroll of healing",
          "sea gel",
          "octopus ink bladder",
          "durable dolphin whistle",
          "Thwaitgold lobster statuette",
          "packaged Monodent of the Sea",
          "Monodent of the Sea",
          "unblemished pearl",
          "dentadent",
          "lab-grown blood cubic zirconia",
          "blood cubic zirconia",
          "blood thinner",
          "pheromone cocktail",
          "spinal tapas",
          "shrunken head in a duffel bag",
          "shrunken head",
          "stocking full of bones",
          "small peppermint-flavored sugar walking crook",
          "knucklebone",
          "Smoking Pope",
          "prize turkey",
          "medicinal gruel",
          "full-sized pumpkin pie",
          "vodka cranberry sauce",
          "yammed candy",
          "treasure chestnut",
          "mulled butter rum",
          "cinnamon doubloon",
          "tiny plastic left skeleton arm",
          "tiny plastic left skeleton leg",
          "tiny plastic right skeleton arm",
          "tiny plastic right skeleton leg",
          "tiny plastic skeleton pelvis",
          "discreetly-wrapped Eternity Codpiece",
          "The Eternity Codpiece",
          "angelbone kilt",
          "angelbone totem",
          "angelbone chopsticks",
          "angelbone mantle",
          "angelbone dice",
          "angelbone halo",
          "angelbone fragments",
          "biblically accurate gumdrops",
          "devilbone helmet",
          "devilbone greaves",
          "devilbone shinguards",
          "devilbone corset",
          "devilbone flute",
          "devilbone rosary",
          "devilbone chunks",
          "Gehenna tattoo",
          "burnt incisor",
          "burnt phalange",
          "burnt radius",
          "burnt rib",
          "burnt skull",
          "Crymbocurrency",
          "extra-thick Crimbo sweater",
          "The Encyclopedia of Holiday Funerary Rites",
          "Steve Abrams' Holiday Sampler Beer",
          "crate of prize-winning rum",
          "bottle of prize-winning rum",
          "Santa-Slayer medal",
          "Skull of Claus",
          "boiling bone marrow",
          "boiling cerebrospinal fluid",
          "boiling synovial fluid",
          "smoldering vertebra",
          "seal-clubbing club loot box",
          "legendary seal-clubbing club",
          "smoldering bone dust",
          "volatile bone bomb",
          "hot boning knife",
          "flaming fistbone",
          "burnt bone belt",
          "scorched skull trophy",
          "wing bone",
          "weak skeleton venom",
          "baked bone meal",
          "tiny plastic skeleton rib cage",
          "tiny plastic skeleton skull",
          "tiny plastic skeleton Crimbo hat",
          "assembled tiny plastic Santa skeleton",
          "miniature sleigh",
          "undertakers' forceps",
          "bone-polishing rag",
          "scorched skeleton mask",
          "scorched skeleton shirt",
          "scorched skeleton pants",
          "messenger parrot egg",
          "buryable chest",
          "Shanty: Let's Beat Up This Drunken Sailor",
          "Shanty: Let's Beat Up This Drunken Sailor (used)",
          "Shanty: I'm Smarter Than a Drunken Sailor",
          "Shanty: I'm Smarter Than a Drunken Sailor (used)",
          "Shanty: Look At That Drunken Sailor Dance",
          "Shanty: Look At That Drunken Sailor Dance (used)",
          "Shanty: Who's Going to Pay This Drunken Sailor?",
          "Shanty: Who's Going to Pay This Drunken Sailor? (used)",
          "Shanty: Only Dogs Love a Drunken Sailor",
          "Shanty: Only Dogs Love a Drunken Sailor (used)",
          "Crymbocurrency tattoo",
          "fireproof bonesaw",
          "vermiculite shield",
          "cursed ship's lantern",
          "heat-resistant harpoon pistol",
          "traditional gingerloaf",
          "Scotch and eggnog",
          "counterskeleton elixir",
          "&quot;salvaged&quot; wine",
          "The Encyclopedia of Holiday Funerary Rites (used)",
          "crate of prize-winning cheese",
          "wedge of prize-winning cheese",
          "gummi fingerbone",
          "glimmering golden crystal",
          "boxed Heartstone",
          "Heartstone",
          "Thwaitgold meat bee statuette",
          "loose Meats",
          "Archaeologist's Spade",
          "boxed Archaeologist's Spade",
          "dinosaur bone fragment",
          "ancient Pork Elf pottery shard",
          "2015 landfill detritus",
          "intact dinosaur egg",
          "fossilized cow femur",
          "unopened Pork Elf toiletries kit",
          "Pork Elf toiletries kit",
          "Pork Elf mouthwash",
          "Pork Elf deodorant",
          "Pork Elf toothpaste",
          "bolt of striped fabric",
          "white and gold dress",
          "blue and black dress",
          "dinosaur bone broth",
          "giant gnawing bone",
          "dinosaur bone club",
          "dinosaur skull helmet",
          "dinosaur bone corset",
          "Pork Elf cough syrup",
          "Pork Elf neti pot",
          "Pork Elf medicine cabinet",
          "Pork Elf sink",
          "Pork Elf toilet",
          "rat pizza",
          "Fleek&trade; mascara",
          "hoverboard",
          "left shark fin",
          "fitness tracking bracelet",
          "candy bone",
          "wrapped Baseball Diamond",
          "Baseball Diamond",
          "discarded hot dog",
          "most of a beer",
          "pasta wand loot box",
          "legendary pasta wand",
          "legendary noodles",
          "can of tuna",
          "alien salad",
          "ratbatatouille",
          "spicy onigiri",
          "haunted crudit&eacute;s",
          "sauced mutton",
          "hot honey ant",
          "tomb aspic",
          "later tots",
          "Frutti di Scatoletta",
          "Pesto alla Marziano",
          "Arrattabbattabiata",
          "Orzo di Riso",
          "Pasta Grimavera",
          "Linguini Ubriacapa",
          "Formica e Pepe",
          "Tubetto Gelatto",
          "Gnocci Domani",
          "Thwaitgold wallet moth statuette",
          "scabbarded Sword of S Words",
          "second-hand synthetic sloth skin scabbard",
          "mega helmet",
          "shrink-wrapped Cup of 13s",
          "Cup of 13s"
        ]
      )
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var it = _step.value;
        if (it.inebriety > 0 && it.smallimage === "martini.gif" && (0, import_kolmafia40.isUnrestricted)(it)) {
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
var import_kolmafia41 = require("kolmafia");
function in_nuclear() {
  return (0, import_kolmafia41.myPath)() === $path`Nuclear Autumn`;
}

// src/autoscend/paths/picky.ts
var import_kolmafia42 = require("kolmafia");

// src/autoscend/paths/you_robot.ts
var import_kolmafia44 = require("kolmafia");

// src/autoscend/quests/level_any.ts
var import_kolmafia43 = require("kolmafia");
function oldLandfillChoiceHandler(choice) {
  if (choice === 794) {
    if ((0, import_kolmafia43.itemAmount)($item`junk junk`) === 0) {
      if ((0, import_kolmafia43.itemAmount)($item`old claw-foot bathtub`) === 0) {
        (0, import_kolmafia43.runChoice)(1);
      } else if ((0, import_kolmafia43.itemAmount)($item`old clothesline pole`) === 0) {
        (0, import_kolmafia43.runChoice)(2);
      } else if ((0, import_kolmafia43.itemAmount)($item`antique cigar sign`) === 0) {
        (0, import_kolmafia43.runChoice)(3);
      } else {
        (0, import_kolmafia43.runChoice)(1);
      }
    } else {
      if ((0, import_kolmafia43.itemAmount)($item`tangle of copper wire`) === 0) {
        (0, import_kolmafia43.runChoice)(2);
      } else if ((0, import_kolmafia43.itemAmount)($item`Junk-Bond`) === 0) {
        (0, import_kolmafia43.runChoice)(3);
      } else {
        (0, import_kolmafia43.runChoice)(1);
      }
    }
  } else if (choice === 795) {
    if ((0, import_kolmafia43.itemAmount)($item`old claw-foot bathtub`) === 0) {
      (0, import_kolmafia43.runChoice)(1);
    } else {
      (0, import_kolmafia43.runChoice)(2);
    }
  } else if (choice === 796) {
    if ((0, import_kolmafia43.itemAmount)($item`old clothesline pole`) === 0) {
      (0, import_kolmafia43.runChoice)(2);
    } else {
      (0, import_kolmafia43.runChoice)(3);
    }
  } else if (choice === 797) {
    if ((0, import_kolmafia43.itemAmount)($item`antique cigar sign`) === 0) {
      (0, import_kolmafia43.runChoice)(3);
    } else {
      (0, import_kolmafia43.runChoice)(1);
    }
  } else {
    (0, import_kolmafia43.abort)("unhandled choice in oldLandfillChoiceHandler");
  }
}
function dailyDungeonChoiceHandler(choice, options) {
  switch (choice) {
    case 689:
      (0, import_kolmafia43.runChoice)(1);
      break;
    case 690:
    // The First Chest Isn't the Deepest. (Daily Dungeon 5th room)
    case 691:
      if (options.has(4)) {
        (0, import_kolmafia43.runChoice)(4);
        if (options.has(2)) {
          (0, import_kolmafia43.runChoice)(2);
        } else {
          (0, import_kolmafia43.runChoice)(3);
        }
      } else if (options.has(2)) {
        (0, import_kolmafia43.runChoice)(2);
      } else {
        (0, import_kolmafia43.runChoice)(3);
      }
      break;
    case 692:
      if (options.has(3)) {
        (0, import_kolmafia43.runChoice)(3);
      } else if (options.has(7)) {
        (0, import_kolmafia43.runChoice)(7);
      } else if ((0, import_kolmafia43.itemAmount)($item`skeleton key`) > 1 || (0, import_kolmafia43.itemAmount)($item`skeleton key`) > 0 && (0, import_kolmafia43.containsText)(
        (0, import_kolmafia43.getProperty)("nsTowerDoorKeysUsed"),
        $item`skeleton key`.toString()
      )) {
        (0, import_kolmafia43.runChoice)(2);
      } else if ((0, import_kolmafia43.myPrimestat)() === $stat`Muscle` && (0, import_kolmafia43.myBuffedstat)($stat`Muscle`) >= 30) {
        (0, import_kolmafia43.runChoice)(4);
      } else if ((0, import_kolmafia43.myPrimestat)() === $stat`Mysticality` && (0, import_kolmafia43.myBuffedstat)($stat`Mysticality`) >= 30) {
        (0, import_kolmafia43.runChoice)(5);
      } else if ((0, import_kolmafia43.myPrimestat)() === $stat`Moxie` && (0, import_kolmafia43.myBuffedstat)($stat`Moxie`) >= 30) {
        (0, import_kolmafia43.runChoice)(6);
      } else {
        (0, import_kolmafia43.abort)(
          "I made an error and tried to adventure in the daily dungeon when I have no means of handling [I Wanna Be a Door]"
        );
      }
      break;
    case 693:
      if (options.has(4)) {
        (0, import_kolmafia43.runChoice)(4);
      } else if (options.has(2)) {
        (0, import_kolmafia43.runChoice)(2);
      } else {
        (0, import_kolmafia43.runChoice)(1);
      }
      break;
    default:
      (0, import_kolmafia43.abort)("unhandled choice in dailyDungeonChoiceHandler");
      break;
  }
}

// src/autoscend/paths/you_robot.ts
function in_robot() {
  return (0, import_kolmafia44.myPath)() === $path`You\, Robot`;
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
      (0, import_kolmafia44.abort)(
        `boolean robot_cpu(int choice) does not recognize the choice: ${choice}`
      );
  }
  if ((0, import_kolmafia44.containsText)((0, import_kolmafia44.getProperty)("youRobotCPUUpgrades"), upgrade)) {
    return true;
  } else if (!want_buy) {
    return false;
  }
  if ((0, import_kolmafia44.myRobotEnergy)() < energy_cost) {
    return false;
  }
  var starting_energy = (0, import_kolmafia44.myRobotEnergy)();
  auto_log_info$1(`Upgrading CPU with ${name}`);
  (0, import_kolmafia44.visitUrl)("place.php?whichplace=scrapheap&action=sh_configure");
  (0, import_kolmafia44.visitUrl)("choice.php?whichchoice=1445&show=cpus");
  (0, import_kolmafia44.visitUrl)(
    `choice.php?pwd&whichchoice=1445&part=cpus&show=cpus&option=2&p=${upgrade}`
  );
  if ((0, import_kolmafia44.myRobotEnergy)() !== starting_energy - energy_cost) {
    (0, import_kolmafia44.abort)(`Mysteriously failed to upgrade the CPU with ${choice}. Beep Boop.`);
  }
  return true;
}
function robot_choice_adv(choice, page) {
  if (!in_robot()) {
    return false;
  }
  auto_log_debug$1("Running robot_choice_adv");
  {
    var robot_need_mus = false;
    var robot_need_mys = false;
    var needSpectacles = false;
    var options = /* @__PURE__ */ new Map();
    switch (choice) {
      case 876:
        robot_need_mus = (0, import_kolmafia44.myPrimestat)() === $stat`Muscle` || (0, import_kolmafia44.myBasestat)($stat`Muscle`) < 62;
        if ((0, import_kolmafia44.myMeat)() < 1e3 + meatReserve() && auto_is_valid($item`old leather wallet`) && !robot_need_mus) {
          (0, import_kolmafia44.runChoice)(1);
        } else if ((0, import_kolmafia44.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia44.myPrimestat)() === $stat`Muscle`) {
          (0, import_kolmafia44.runChoice)(3);
        } else {
          (0, import_kolmafia44.runChoice)(2);
        }
        break;
      case 878:
        robot_need_mys = (0, import_kolmafia44.myPrimestat)() === $stat`Mysticality` || (0, import_kolmafia44.myBasestat)($stat`Mysticality`) < 70;
        needSpectacles = (0, import_kolmafia44.itemAmount)($item`Lord Spookyraven's spectacles`) === 0 && internalQuestStatus("questL11Manor") < 2;
        if (needSpectacles) {
          (0, import_kolmafia44.runChoice)(3);
        } else if ((0, import_kolmafia44.itemAmount)($item`disposable instant camera`) === 0 && internalQuestStatus("questL11Palindome") < 1) {
          (0, import_kolmafia44.runChoice)(4);
        } else if (!robot_need_mys || (0, import_kolmafia44.myMeat)() < 1e3 + meatReserve()) {
          (0, import_kolmafia44.runChoice)(1);
        } else if ((0, import_kolmafia44.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia44.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia44.runChoice)(5);
        } else {
          (0, import_kolmafia44.runChoice)(2);
        }
        break;
      case 879:
        options = new Map(
          Object.entries((0, import_kolmafia44.availableChoiceOptions)()).map(
            (_ref) => {
              var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
              return [
                (0, import_kolmafia44.toInt)(_k),
                _v
              ];
            }
          )
        );
        if (options.has(4)) {
          (0, import_kolmafia44.runChoice)(4);
        } else if ((0, import_kolmafia44.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia44.myPrimestat)() === $stat`Moxie`) {
          (0, import_kolmafia44.runChoice)(5);
        } else {
          (0, import_kolmafia44.runChoice)(1);
        }
        break;
      default:
        return false;
    }
  }
  return true;
}

// src/autoscend/quests/optional.ts
function piratesCoveChoiceHandler(choice) {
  if (choice === 22) {
    if (possessEquipment($item`eyepatch`)) {
      if (possessEquipment($item`swashbuckling pants`)) {
        (0, import_kolmafia45.runChoice)(3);
      } else {
        (0, import_kolmafia45.runChoice)(2);
      }
    } else {
      (0, import_kolmafia45.runChoice)(1);
    }
  } else if (choice === 23) {
    if (possessEquipment($item`stuffed shoulder parrot`)) {
      if (possessEquipment($item`swashbuckling pants`)) {
        (0, import_kolmafia45.runChoice)(3);
      } else {
        (0, import_kolmafia45.runChoice)(2);
      }
    } else {
      (0, import_kolmafia45.runChoice)(1);
    }
  } else if (choice === 24) {
    if (possessEquipment($item`stuffed shoulder parrot`)) {
      if (possessEquipment($item`eyepatch`)) {
        (0, import_kolmafia45.runChoice)(2);
      } else {
        (0, import_kolmafia45.runChoice)(3);
      }
    } else {
      (0, import_kolmafia45.runChoice)(1);
    }
  } else {
    (0, import_kolmafia45.abort)("unhandled choice in piratesCoveChoiceHandler");
  }
}
function barrrneysBarrrChoiceHandler(choice) {
  auto_log_info(`barrrneysBarrrChoiceHandler Running choice ${choice}`, "blue");
  if (choice === 184) {
    if ((0, import_kolmafia45.myPrimestat)() === $stat`Mysticality`) {
      (0, import_kolmafia45.runChoice)(3);
    } else {
      (0, import_kolmafia45.runChoice)(1);
    }
  } else if (choice === 185) {
    (0, import_kolmafia45.runChoice)(3);
  } else if (choice === 186) {
    if ((0, import_kolmafia45.myPrimestat)() === $stat`Moxie`) {
      (0, import_kolmafia45.runChoice)(3);
    } else {
      (0, import_kolmafia45.runChoice)(1);
    }
  } else {
    (0, import_kolmafia45.abort)("unhandled choice in barrrneysBarrrChoiceHandler");
  }
}
function fcleChoiceHandler(choice) {
  if (choice === 191) {
    if ((0, import_kolmafia45.itemAmount)($item`valuable trinket`) > 0) {
      (0, import_kolmafia45.runChoice)(2);
    } else {
      switch ((0, import_kolmafia45.myPrimestat)()) {
        case $stat`Muscle`:
          (0, import_kolmafia45.runChoice)(3);
          break;
        case $stat`Mysticality`:
          (0, import_kolmafia45.runChoice)(4);
          break;
        case $stat`Moxie`:
          (0, import_kolmafia45.runChoice)(1);
          break;
      }
    }
  } else {
    (0, import_kolmafia45.abort)("unhandled choice in fcleChoiceHandler");
  }
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

// src/autoscend/quests/level_10.ts
function castleBasementChoiceHandler(choice) {
  if (choice === 669) {
    (0, import_kolmafia48.runChoice)(1);
  } else if (choice === 670) {
    if (internalQuestStatus("questL10Garbage") < 8 && (0, import_kolmafia48.equippedAmount)($item`amulet of extreme plot significance`) > 0) {
      (0, import_kolmafia48.runChoice)(4);
    } else {
      (0, import_kolmafia48.runChoice)(1);
    }
  } else if (choice === 671) {
    if ((0, import_kolmafia48.itemAmount)($item`massive dumbbell`) > 0) {
      (0, import_kolmafia48.runChoice)(1);
    } else {
      (0, import_kolmafia48.runChoice)(4);
    }
  } else {
    (0, import_kolmafia48.abort)("unhandled choice in castleBasementChoiceHandler");
  }
}
function castleTopFloorChoiceHandler(choice) {
  if (choice === 675) {
    if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia48.itemAmount)($item`drum 'n' bass 'n' drum 'n' bass record`) > 0) {
      (0, import_kolmafia48.runChoice)(2);
    } else if (in_koe() && (0, import_kolmafia48.itemAmount)($item`model airship`) === 0) {
      (0, import_kolmafia48.runChoice)(1);
    } else {
      (0, import_kolmafia48.runChoice)(4);
    }
  } else if (choice === 676) {
    if ((0, import_kolmafia48.equippedAmount)($item`Mohawk wig`) > 0 || internalQuestStatus("questL10Garbage") >= 10) {
      (0, import_kolmafia48.runChoice)(4);
    } else {
      (0, import_kolmafia48.runChoice)(3);
    }
  } else if (choice === 677) {
    if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia48.itemAmount)($item`model airship`) > 0) {
      (0, import_kolmafia48.runChoice)(1);
    } else if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia48.itemAmount)($item`drum 'n' bass 'n' drum 'n' bass record`) > 0 || in_koe()) {
      (0, import_kolmafia48.runChoice)(4);
    } else {
      (0, import_kolmafia48.runChoice)(2);
    }
  } else if (choice === 678) {
    if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia48.equippedAmount)($item`Mohawk wig`) > 0) {
      (0, import_kolmafia48.runChoice)(1);
    } else if (internalQuestStatus("questL10Garbage") < 10) {
      (0, import_kolmafia48.runChoice)(4);
    } else {
      (0, import_kolmafia48.runChoice)(3);
    }
  } else if (choice === 679) {
    if (isActuallyEd()) {
      (0, import_kolmafia48.runChoice)(2);
    } else {
      (0, import_kolmafia48.runChoice)(1);
    }
  } else if (choice === 680) {
    (0, import_kolmafia48.runChoice)(1);
  } else {
    (0, import_kolmafia48.abort)("unhandled choice in castleTopFloorChoiceHandler");
  }
}
function L10_needUmbrella() {
  var _iterator = _createForOfIteratorHelper(
    $items`titanium assault umbrella, unbreakable umbrella`
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var it = _step.value;
      if (auto_is_valid(it) && (0, import_kolmafia48.availableAmount)(it) > 0) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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

// src/autoscend/iotms/mr2026.ts
var import_kolmafia52 = require("kolmafia");
function auto_haveArchaeologistSpade() {
  if (auto_is_valid($item`Archaeologist's Spade`) && (0, import_kolmafia52.availableAmount)($item`Archaeologist's Spade`) > 0) {
    return true;
  }
  return false;
}
function auto_spadeDigsRemaining() {
  if (!auto_haveArchaeologistSpade()) {
    return 0;
  }
  return 11 - (0, import_kolmafia52.toInt)((0, import_kolmafia52.getProperty)("_archSpadeDigs"));
}
function legendaryNoodlesChoiceHandler() {
  var target_choice = 0;
  if ((0, import_kolmafia52.toBoolean)((0, import_kolmafia52.getProperty)("auto_forceCombatWithLegendaryNoodles"))) {
    target_choice = 2;
    (0, import_kolmafia52.setProperty)("auto_forceCombatWithLegendaryNoodles", false.toString());
  } else if (!(0, import_kolmafia52.toBoolean)(
    // or use a spleen instead of a stomach
    (0, import_kolmafia52.getProperty)("_legendaryNoodlesSpleen")
  ) && spleen_left() > 0) {
    target_choice = 1;
  } else {
    target_choice = 4;
  }
  if (target_choice in (0, import_kolmafia52.availableChoiceOptions)()) {
    (0, import_kolmafia52.runChoice)(target_choice);
  } else {
    (0, import_kolmafia52.runChoice)(5);
  }
}

// src/autoscend/iotms/mr2025.ts
function auto_havePeridot() {
  var pop = $item`Peridot of Peril`;
  return auto_is_valid(pop) && possessEquipment(pop);
}
function peridotManuallyDesiredMonsters() {
  var desired_monsters = /* @__PURE__ */ new Map();
  desired_monsters.set($monster`lobsterfrogman`, true);
  desired_monsters.set($monster`black panther`, true);
  desired_monsters.set($monster`white lion`, true);
  desired_monsters.set($monster`monstrous boiler`, true);
  desired_monsters.set($monster`modern zmobie`, true);
  desired_monsters.set($monster`dairy goat`, true);
  desired_monsters.set($monster`writing desk`, true);
  if ((0, import_kolmafia53.itemAmount)($item`star chart`) === 0) {
    desired_monsters.set($monster`Astronomer`, true);
  }
  desired_monsters.set($monster`erudite gremlin (tool)`, true);
  desired_monsters.set($monster`batwinged gremlin (tool)`, true);
  desired_monsters.set($monster`vegetable gremlin (tool)`, true);
  desired_monsters.set($monster`spider gremlin (tool)`, true);
  return desired_monsters;
}
function auto_peridotSetZone(loc) {
  if (!(auto_spadeDigsRemaining() > 0)) {
    return false;
  }
  if (loc === $location`Sonofa Beach` && auto_spadeDigsRemaining() < 5) {
    return false;
  }
  var desired_locations = /* @__PURE__ */ new Map();
  desired_locations.set($location`Sonofa Beach`, true);
  desired_locations.set($location`The Hatching Chamber`, true);
  desired_locations.set($location`The Feeding Chamber`, true);
  desired_locations.set($location`The Royal Guard Chamber`, true);
  desired_locations.set($location`The Haunted Kitchen`, true);
  desired_locations.set($location`The Unquiet Garves`, true);
  desired_locations.set($location`The Haunted Ballroom`, true);
  if (desired_locations.has(loc)) {
    return true;
  }
  return false;
}
function peridotChoiceHandler(choice, page) {
  if (!auto_havePeridot()) {
    (0, import_kolmafia53.runChoice)(2);
  }
  var popChoice = import_kolmafia53.Monster.none;
  var loc = (0, import_kolmafia53.myLocation)();
  var mons = new AshMatcher('bandersnatch" value="(\\d+)', page);
  var monOpts = /* @__PURE__ */ new Map();
  var i = 0;
  var bestmon = 0;
  while (mons.find()) {
    monOpts.set(i, (0, import_kolmafia53.toMonster)((0, import_kolmafia53.toInt)(mons.group(1))));
    if (peridotManuallyDesiredMonsters().has(
      monOpts.get(i) ?? monOpts.set(i, import_kolmafia53.Monster.none).get(i)
    )) {
      bestmon = i;
      break;
    }
    if (zoneRank$1(monOpts.get(i) ?? monOpts.set(i, import_kolmafia53.Monster.none).get(i), loc) <= zoneRank$1(
      monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia53.Monster.none).get(bestmon),
      loc
    )) {
      bestmon = i;
    }
    i += 1;
  }
  popChoice = monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia53.Monster.none).get(bestmon);
  if ((0, import_kolmafia53.toInt)(popChoice) === 0 || auto_peridotSetZone(loc)) {
    handleTracker$2(
      $item`Peridot of Peril`.toString(),
      loc.toString(),
      "Peace out",
      "auto_mapperidot"
    );
    (0, import_kolmafia53.runChoice)(2);
    return;
  }
  handleTracker$2(
    $item`Peridot of Peril`.toString(),
    loc.toString(),
    popChoice.toString(),
    "auto_mapperidot"
  );
  (0, import_kolmafia53.runChoice)(1, `bandersnatch=${(0, import_kolmafia53.toInt)(popChoice)}`);
  return;
}
function auto_haveMobiusRing() {
  var ring = $item`Möbius ring`;
  return auto_is_valid(ring) && possessEquipment(ring);
}
function auto_paradoxicity() {
  (0, import_kolmafia53.visitUrl)("charpane.php", false);
  return (0, import_kolmafia53.myParadoxicity)();
}
function mobiusChoiceHandler(choice, page) {
  if (!auto_haveMobiusRing()) {
    (0, import_kolmafia53.runChoice)(1);
  }
  var choices = new Map(
    Object.entries((0, import_kolmafia53.availableChoiceOptions)()).map((_ref3) => {
      var _ref4 = _slicedToArray(_ref3, 2), _k = _ref4[0], _v = _ref4[1];
      return [(0, import_kolmafia53.toInt)(_k), _v];
    })
  );
  var choiceMap = /* @__PURE__ */ new Map();
  var _iterator19 = _createForOfIteratorHelper(
    choices
  ), _step19;
  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
      var _step19$value = _slicedToArray(_step19.value, 2), idx = _step19$value[0], text = _step19$value[1];
      choiceMap.set(text, idx);
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
  function mobiusChoice(opt) {
    var num = choiceMap.get(opt) ?? choiceMap.set(opt, 0).get(opt);
    handleTracker$1($item`Möbius ring`.toString(), opt, "auto_otherstuff");
    (0, import_kolmafia53.runChoice)(num);
  }
  var pos = "";
  if (in_amw()) {
    pos = "Give your past self investment tips";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
    if ((0, import_kolmafia53.myDaycount)() > 1) {
      pos = "Hey, free gun!";
      if (choiceMap.has(pos)) {
        mobiusChoice(pos);
        return;
      }
    }
    pos = "Take the long odds on the trifecta";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    } else {
      pos = "Fix the race and also fix the race";
      mobiusChoice(pos);
      return;
    }
  }
  if (isAboutToPowerlevel()) {
    pos = "Bake Susie a cupcake";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
    pos = "Draw a goatee on yourself";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
    switch ((0, import_kolmafia53.myPrimestat)()) {
      case $stat`Muscle`:
        pos = "Lift yourself up by your bootstraps";
        if (choiceMap.has(pos)) {
          mobiusChoice(pos);
          return;
        }
        break;
      case $stat`Mysticality`:
        pos = "Mind your own business";
        if (choiceMap.has(pos)) {
          mobiusChoice(pos);
          return;
        }
        break;
      case $stat`Moxie`:
        pos = "Shoot yourself in the foot";
        if (choiceMap.has(pos)) {
          mobiusChoice(pos);
          return;
        }
        break;
    }
  }
  if (canEat$1($item`Susie's cupcake`)) {
    pos = "Steal a cupcake from young Susie";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
  }
  if ((0, import_kolmafia53.toInt)((0, import_kolmafia53.getProperty)("_clocksUsed")) < 2) {
    pos = "Go back and set an alarm";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      if ((0, import_kolmafia53.itemAmount)($item`clock`) > 0) {
        (0, import_kolmafia53.use)(1, $item`clock`);
      }
      return;
    }
    pos = "Go back and take a 20-year-long nap";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
  }
  if ((0, import_kolmafia53.haveEffect)($effect`Lifted by your Bootstraps`) === 0) {
    pos = "Let yourself get lifted up by your bootstraps";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
  }
  if (auto_paradoxicity() < 15) {
    for (var _i0 = 0, _arr = [
      "Stop your arch-nemesis as a baby",
      "Borrow meat from your future",
      "Hey, free gun!",
      "Shoot yourself in the foot",
      "Mind your own business",
      "Lift yourself up by your bootstraps",
      "Draw a goatee on yourself",
      "Go for a nature walk",
      "Steal a cupcake from young Susie",
      "Plant some trees and harvest them in the future",
      "Borrow a cup of sugar from yourself",
      "Steal a club from the past",
      "Go back and take a 20-year-long nap",
      "Plant some seeds in the distant past",
      "Go back and write a best-seller.",
      "Defend yourself",
      "Play Schroedinger's Prank on yourself",
      "Peek in on your future",
      "Give your past self investment tips"
    ]; _i0 < _arr.length; _i0++) {
      var str = _arr[_i0];
      if (choiceMap.has(str)) {
        mobiusChoice(str);
        return;
      }
    }
  }
  if (canEat$1($item`Susie's cupcake`)) {
    pos = "Steal a cupcake from young Susie";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
    pos = "Bake Susie a cupcake";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
  }
  pos = "Borrow meat from your future";
  if (choiceMap.has(pos)) {
    mobiusChoice(pos);
    return;
  }
  pos = "Repay yourself in the past";
  if (choiceMap.has(pos)) {
    mobiusChoice(pos);
    return;
  }
  (0, import_kolmafia53.runChoice)(1);
  return;
}

// src/autoscend/paths/adventurer_meats_world.ts
function in_amw() {
  return (0, import_kolmafia54.myPath)() === $path`Adventurer Meats World`;
}

// src/autoscend/iotms/mr2024.ts
function dartChoiceHandler(choice, options) {
  auto_log_info(`dartChoiceHandler Running choice ${choice}`, "blue");
  var dcchoice = 0;
  var _iterator = _createForOfIteratorHelper(
    options
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray(_step.value, 2), _idx = _step$value[0], _str = _step$value[1];
      auto_log_info(`choice ${_idx} is ${_str}`, "blue");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var _i2 = 0, _arr = ["impress", "better", "targeting", "butt"]; _i2 < _arr.length; _i2++) {
    var perk = _arr[_i2];
    var _iterator2 = _createForOfIteratorHelper(options), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2), idx = _step2$value[0], str = _step2$value[1];
        if ((0, import_kolmafia55.containsText)((0, import_kolmafia55.toLowerCase)(str), perk)) {
          dcchoice = idx;
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (dcchoice !== 0) {
      break;
    }
  }
  if (dcchoice === 0) {
    dcchoice = 1;
  }
  (0, import_kolmafia55.runChoice)(dcchoice);
}

// src/autoscend/iotms/mr2022.ts
function juneCleaverChoiceHandler(choice) {
  switch (choice) {
    case 1467:
      if ((0, import_kolmafia57.haveSkill)($skill`Tongue of the Walrus`) || (0, import_kolmafia57.itemAmount)($item`personal massager`) > 0) {
        (0, import_kolmafia57.runChoice)(3);
      } else if ((0, import_kolmafia57.myPrimestat)() === $stat`Mysticality` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma()) || (0, import_kolmafia57.myPrimestat)() === $stat`Moxie` && (0, import_kolmafia57.myLevel)() > 12 && disregardInstantKarma() === false) {
        (0, import_kolmafia57.runChoice)(2);
      } else {
        (0, import_kolmafia57.runChoice)(1);
      }
      break;
    case 1468:
      if ((0, import_kolmafia57.myPrimestat)() === $stat`Moxie` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma()) || (0, import_kolmafia57.myPrimestat)() === $stat`Muscle` && (0, import_kolmafia57.myLevel)() > 12 && disregardInstantKarma() === false) {
        (0, import_kolmafia57.runChoice)(1);
      } else if ((0, import_kolmafia57.toInt)((0, import_kolmafia57.getProperty)("_juneCleaverSkips")) < 5) {
        (0, import_kolmafia57.runChoice)(4);
      } else {
        (0, import_kolmafia57.runChoice)(2);
      }
      break;
    case 1469:
      if ((0, import_kolmafia57.myMeat)() < meatReserve()) {
        (0, import_kolmafia57.runChoice)(3);
      } else if (canDrink$1($item`Dad's brandy`) && (0, import_kolmafia57.myInebriety)() < (0, import_kolmafia57.inebrietyLimit)()) {
        (0, import_kolmafia57.runChoice)(2);
      } else {
        (0, import_kolmafia57.runChoice)(3);
      }
      break;
    case 1470:
      if ((0, import_kolmafia57.canEquip)($item`teacher's pen`) && (0, import_kolmafia57.availableAmount)($item`teacher's pen`) < 1) {
        (0, import_kolmafia57.runChoice)(2);
      } else if ((0, import_kolmafia57.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia57.runChoice)(3);
      } else if ((0, import_kolmafia57.toInt)((0, import_kolmafia57.getProperty)("_juneCleaverSkips")) < 5) {
        (0, import_kolmafia57.runChoice)(4);
      } else {
        (0, import_kolmafia57.runChoice)(2);
      }
      break;
    case 1471:
      if ((0, import_kolmafia57.getProperty)("sidequestNunsCompleted") === "none" && (0, import_kolmafia57.getProperty)("auto_skipNuns") === "false" && (0, import_kolmafia57.itemAmount)($item`savings bond`) === 0) {
        (0, import_kolmafia57.runChoice)(1);
      } else if ((0, import_kolmafia57.myPrimestat)() === $stat`Mysticality` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia57.runChoice)(3);
      } else {
        (0, import_kolmafia57.runChoice)(1);
      }
      break;
    case 1472:
      (0, import_kolmafia57.runChoice)(1);
      break;
    case 1473:
      if ((0, import_kolmafia57.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia57.runChoice)(1);
      } else if ((0, import_kolmafia57.toInt)((0, import_kolmafia57.getProperty)("_juneCleaverSkips")) < 5) {
        (0, import_kolmafia57.runChoice)(4);
      } else {
        (0, import_kolmafia57.runChoice)(3);
      }
      break;
    case 1474:
      if ((0, import_kolmafia57.canEat)() && (0, import_kolmafia57.myLevel)() < 13 && have_fireworks_shop() && auto_is_valid($item`red rocket`) && !in_darkGyffte() && !is_jarlsberg() && !in_tcrs() && auto_is_valid(
        //paths that can eat but can't eat guilty sprouts/won't get the stats from it anyway
        $item`guilty sprout`
      ) && (0, import_kolmafia57.itemAmount)($item`guilty sprout`) === 0) {
        (0, import_kolmafia57.runChoice)(2);
      }
      if ((0, import_kolmafia57.myPrimestat)() === $stat`Mysticality` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia57.runChoice)(1);
      } else if ((0, import_kolmafia57.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia57.runChoice)(3);
      } else {
        (0, import_kolmafia57.runChoice)(2);
      }
      break;
    case 1475:
      if ((0, import_kolmafia57.availableAmount)($item`mother's necklace`) < 1) {
        (0, import_kolmafia57.runChoice)(1);
      } else if ((0, import_kolmafia57.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia57.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia57.runChoice)(2);
      } else {
        (0, import_kolmafia57.runChoice)(1);
      }
      break;
    default:
      (0, import_kolmafia57.abort)("unhandled choice in juneCleaverChoiceHandler");
  }
}

// src/autoscend/paths/one_crazy_random_summer.ts
var import_kolmafia58 = require("kolmafia");

// src/autoscend/paths/quantum_terrarium.ts
var import_kolmafia59 = require("kolmafia");
function in_quantumTerrarium() {
  return (0, import_kolmafia59.myPath)() === $path`Quantum Terrarium`;
}

// src/autoscend/quests/level_11.ts
function hauntedBedroomChoiceHandler(choice, options) {
  if (choice === 876) {
    if ((0, import_kolmafia60.myMeat)() < 1e3 + meatReserve() && auto_is_valid($item`old leather wallet`) && !in_wotsf() || in_amw()) {
      (0, import_kolmafia60.runChoice)(1);
    } else if ((0, import_kolmafia60.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia60.myPrimestat)() === $stat`Muscle` && (0, import_kolmafia60.myBuffedstat)($stat`Muscle`) < 150) {
      (0, import_kolmafia60.runChoice)(3);
    } else {
      (0, import_kolmafia60.runChoice)(2);
    }
  } else if (choice === 877) {
    (0, import_kolmafia60.runChoice)(1);
  } else if (choice === 878) {
    var needSpectacles = !possessEquipment($item`Lord Spookyraven's spectacles`) && internalQuestStatus("questL11Manor") < 2;
    if (is_boris() || in_wotsf() || in_nuclear() && (0, import_kolmafia60.inHardcore)()) {
      needSpectacles = false;
    }
    if (needSpectacles) {
      (0, import_kolmafia60.runChoice)(3);
    } else if ((0, import_kolmafia60.itemAmount)($item`disposable instant camera`) === 0 && internalQuestStatus("questL11Palindome") < 1) {
      (0, import_kolmafia60.runChoice)(4);
    } else if ((0, import_kolmafia60.myPrimestat)() !== $stat`Mysticality` || (0, import_kolmafia60.myMeat)() < 1e3 + meatReserve() || in_amw()) {
      (0, import_kolmafia60.runChoice)(1);
    } else if ((0, import_kolmafia60.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia60.myPrimestat)() === $stat`Mysticality` && (0, import_kolmafia60.myBuffedstat)($stat`Mysticality`) < 150) {
      (0, import_kolmafia60.runChoice)(5);
    } else {
      (0, import_kolmafia60.runChoice)(2);
    }
  } else if (choice === 879) {
    if (options.has(4)) {
      (0, import_kolmafia60.runChoice)(4);
    }
    if (in_bhy() && (0, import_kolmafia60.itemAmount)($item`antique hand mirror`) < 1) {
      (0, import_kolmafia60.runChoice)(3);
    } else if ((0, import_kolmafia60.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia60.myPrimestat)() === $stat`Moxie` && (0, import_kolmafia60.myBuffedstat)($stat`Moxie`) < 150) {
      (0, import_kolmafia60.runChoice)(5);
    } else {
      (0, import_kolmafia60.runChoice)(1);
    }
  } else if (choice === 880) {
    if (internalQuestStatus("questM21Dance") < 2 && (0, import_kolmafia60.itemAmount)($item`Lady Spookyraven's finest gown`) === 0) {
      (0, import_kolmafia60.runChoice)(1);
    } else {
      (0, import_kolmafia60.runChoice)(2);
    }
  } else {
    (0, import_kolmafia60.abort)("unhandled choice in hauntedBedroomChoiceHandler");
  }
}
function blackForestChoiceHandler(choice) {
  if (choice === 923) {
    if (5 in (0, import_kolmafia60.availableChoiceOptions)()) {
      (0, import_kolmafia60.runChoice)(5);
      (0, import_kolmafia60.runChoice)(1);
    } else {
      (0, import_kolmafia60.runChoice)(1);
    }
  } else if (choice === 924) {
    if ((0, import_kolmafia60.toBoolean)((0, import_kolmafia60.getProperty)("auto_getBeehive")) && (0, import_kolmafia60.myAdventures)() > 3) {
      (0, import_kolmafia60.runChoice)(3);
    } else if (!possessEquipment($item`blackberry galoshes`) && (0, import_kolmafia60.itemAmount)($item`blackberry`) >= 3 && !in_darkGyffte()) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(1);
    }
  } else if (choice === 925) {
    (0, import_kolmafia60.runChoice)(5);
  } else if (choice === 926) {
    (0, import_kolmafia60.runChoice)(4);
  } else if (choice === 927) {
    (0, import_kolmafia60.runChoice)(3);
  } else if (choice === 928) {
    if (!possessEquipment($item`blackberry galoshes`) && (0, import_kolmafia60.itemAmount)($item`blackberry`) >= 3 && !in_darkGyffte()) {
      (0, import_kolmafia60.runChoice)(4);
    } else {
      (0, import_kolmafia60.runChoice)(5);
    }
  } else if (choice === 1018) {
    if ((0, import_kolmafia60.toBoolean)((0, import_kolmafia60.getProperty)("auto_getBeehive")) && (0, import_kolmafia60.myAdventures)() > 2) {
      (0, import_kolmafia60.runChoice)(1);
    } else {
      (0, import_kolmafia60.runChoice)(2);
    }
  } else if (choice === 1019) {
    if ((0, import_kolmafia60.toBoolean)((0, import_kolmafia60.getProperty)("auto_getBeehive"))) {
      (0, import_kolmafia60.runChoice)(1);
    } else {
      (0, import_kolmafia60.runChoice)(2);
    }
  } else {
    (0, import_kolmafia60.abort)("unhandled choice in blackForestChoiceHandler");
  }
}
function hiddenTempleChoiceHandler(choice, page) {
  if (choice === 123) {
    (0, import_kolmafia60.runChoice)(2);
    (0, import_kolmafia60.visitUrl)("choice.php");
    (0, import_kolmafia60.cliExecute)("dvorak");
  } else if (choice === 125) {
    (0, import_kolmafia60.runChoice)(3);
  } else if (choice === 579) {
    if ((0, import_kolmafia60.itemAmount)($item`stone wool`) >= 2 && (0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("lastTempleAdventures")) < (0, import_kolmafia60.myAscensions)()) {
      (0, import_kolmafia60.runChoice)(3);
    } else if ((0, import_kolmafia60.itemAmount)($item`the Nostril of the Serpent`) === 0 && internalQuestStatus("questL11Worship") < 3) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(3);
    }
  } else if (choice === 580) {
    if (!(0, import_kolmafia60.containsText)(
      page,
      "The door is decorated with that little lightning-tailed guy from your father's diary."
    )) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(1);
    }
  } else if (choice === 581) {
    (0, import_kolmafia60.runChoice)(3);
  } else if (choice === 582) {
    if ((0, import_kolmafia60.itemAmount)($item`the Nostril of the Serpent`) > 0 && internalQuestStatus("questL11Worship") < 3) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(1);
    }
  } else if (choice === 583) {
    (0, import_kolmafia60.runChoice)(1);
  } else if (choice === 584) {
    (0, import_kolmafia60.runChoice)(4);
  } else {
    (0, import_kolmafia60.abort)("unhandled choice in hiddenTempleChoiceHandler");
  }
}
function hiddenCityChoiceHandler(choice) {
  if (choice === 780) {
    if ((0, import_kolmafia60.haveEffect)($effect`Thrice-Cursed`) > 0) {
      (0, import_kolmafia60.runChoice)(1);
    } else if (4 in (0, import_kolmafia60.availableChoiceOptions)() && (0, import_kolmafia60.haveEffect)($effect`Thrice-Cursed`) === 0) {
      (0, import_kolmafia60.runChoice)(4);
      if ((0, import_kolmafia60.haveEffect)($effect`Thrice-Cursed`) > 0) {
        (0, import_kolmafia60.runChoice)(1);
      } else {
        (0, import_kolmafia60.runChoice)(2);
      }
    } else {
      (0, import_kolmafia60.runChoice)(2);
    }
  } else if (choice === 781) {
    if ((0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("hiddenApartmentProgress")) === 0) {
      (0, import_kolmafia60.runChoice)(1);
    } else if ((0, import_kolmafia60.itemAmount)($item`moss-covered stone sphere`) > 0) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(6);
    }
  } else if (choice === 783) {
    if ((0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("hiddenHospitalProgress")) === 0) {
      (0, import_kolmafia60.runChoice)(1);
    } else if ((0, import_kolmafia60.itemAmount)($item`dripping stone sphere`) > 0) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(6);
    }
  } else if (choice === 784) {
    (0, import_kolmafia60.runChoice)(1);
  } else if (choice === 785) {
    if ((0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("hiddenOfficeProgress")) === 0) {
      (0, import_kolmafia60.runChoice)(1);
    } else if ((0, import_kolmafia60.itemAmount)(
      // either use CCSC + unlock or just unlock based on user sphere presence
      $item`crackling stone sphere`
    ) > 0) {
      if (4 in (0, import_kolmafia60.availableChoiceOptions)()) {
        (0, import_kolmafia60.runChoice)(4);
      }
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(6);
    }
  } else if (choice === 786) {
    if ((0, import_kolmafia60.itemAmount)($item`McClusky file (complete)`) > 0) {
      (0, import_kolmafia60.runChoice)(1);
    } else if ((0, import_kolmafia60.itemAmount)($item`boring binder clip`) === 0) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(3);
    }
  } else if (choice === 787) {
    if ((0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("hiddenBowlingAlleyProgress")) === 0) {
      (0, import_kolmafia60.runChoice)(1);
    } else if ((0, import_kolmafia60.itemAmount)($item`scorched stone sphere`) > 0) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(6);
    }
  } else if (choice === 788) {
    if (2 in (0, import_kolmafia60.availableChoiceOptions)()) {
      (0, import_kolmafia60.runChoice)(2);
      (0, import_kolmafia60.runChoice)(1);
    } else {
      (0, import_kolmafia60.runChoice)(1);
    }
  } else if (choice === 789) {
    if ((0, import_kolmafia60.toInt)((0, import_kolmafia60.getProperty)("relocatePygmyJanitor")) !== (0, import_kolmafia60.myAscensions)()) {
      (0, import_kolmafia60.runChoice)(2);
    } else {
      (0, import_kolmafia60.runChoice)(1);
    }
  } else if (choice === 791) {
    if ((0, import_kolmafia60.itemAmount)($item`stone triangle`) === 4) {
      (0, import_kolmafia60.runChoice)(1);
    } else {
      (0, import_kolmafia60.runChoice)(6);
    }
  } else if (choice === 1002) {
    if ((0, import_kolmafia60.itemAmount)($item`stone triangle`) === 4) {
      (0, import_kolmafia60.runChoice)(1);
    } else {
      (0, import_kolmafia60.runChoice)(6);
    }
  } else {
    (0, import_kolmafia60.abort)("unhandled choice in hiddenCityChoiceHandler");
  }
}

// src/autoscend/paths/wildfire.ts
function in_wildfire() {
  return (0, import_kolmafia61.myPath)() === $path`Wildfire`;
}

// src/autoscend/iotms/mr2021.ts
function have_fireworks_shop() {
  if (is_werewolf()) {
    return false;
  }
  if ((0, import_kolmafia62.itemAmount)($item`Clan VIP Lounge key`) === 0) {
    return false;
  }
  if (!auto_is_valid($item`clan underground fireworks shop`)) {
    return false;
  }
  return (0, import_kolmafia62.toBoolean)((0, import_kolmafia62.getProperty)("_fireworksShop"));
}

// src/autoscend/combat/auto_combat_awol.ts
var import_kolmafia66 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage1.ts
var import_kolmafia78 = require("kolmafia");

// src/autoscend/combat/auto_combat_adventurer_meats_world.ts
var import_kolmafia67 = require("kolmafia");

// src/autoscend/combat/auto_combat_bees_hate_you.ts
var import_kolmafia68 = require("kolmafia");

// src/autoscend/combat/auto_combat_disguises_delimit.ts
var import_kolmafia69 = require("kolmafia");

// src/autoscend/combat/auto_combat_fall_of_the_dinosaurs.ts
var import_kolmafia70 = require("kolmafia");

// src/autoscend/combat/auto_combat_heavy_rains.ts
var import_kolmafia71 = require("kolmafia");

// src/autoscend/combat/auto_combat_kingdom_of_exploathing.ts
var import_kolmafia72 = require("kolmafia");

// src/autoscend/combat/auto_combat_mr2012.ts
var import_kolmafia73 = require("kolmafia");

// src/autoscend/combat/auto_combat_pete.ts
var import_kolmafia74 = require("kolmafia");

// src/autoscend/combat/auto_combat_the_source.ts
var import_kolmafia75 = require("kolmafia");

// src/autoscend/combat/auto_combat_wereprofessor.ts
var import_kolmafia76 = require("kolmafia");

// src/autoscend/combat/auto_combat_wildfire.ts
var import_kolmafia77 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage2.ts
var import_kolmafia80 = require("kolmafia");

// src/autoscend/combat/auto_combat_dark_gyffte.ts
var import_kolmafia79 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage3.ts
var import_kolmafia82 = require("kolmafia");

// src/autoscend/combat/auto_combat_zombie_slayer.ts
var import_kolmafia81 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage4.ts
var import_kolmafia84 = require("kolmafia");

// src/autoscend/combat/auto_combat_license_to_adventure.ts
var import_kolmafia83 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage5.ts
var import_kolmafia87 = require("kolmafia");

// src/autoscend/combat/auto_combat_plumber.ts
var import_kolmafia85 = require("kolmafia");

// src/autoscend/combat/auto_combat_you_robot.ts
var import_kolmafia86 = require("kolmafia");

// src/autoscend/combat/auto_combat_ocrs.ts
var import_kolmafia88 = require("kolmafia");

// src/autoscend/combat/auto_combat_ed.ts
var import_kolmafia90 = require("kolmafia");

// src/autoscend/paths/i_love_u_hate.ts
var import_kolmafia92 = require("kolmafia");
function in_iluh() {
  return (0, import_kolmafia92.myPath)() === $path`11 Things I Hate About U`;
}
function iluh_foodConsumable(str) {
  if (!in_iluh()) {
    return true;
  }
  var foodConsume = (0, import_kolmafia92.toLowerCase)(str);
  if ((0, import_kolmafia92.containsText)(foodConsume, "stunt nut") || (0, import_kolmafia92.containsText)(foodConsume, "wet stew") || (0, import_kolmafia92.containsText)(foodConsume, "wet stunt nut stew")) {
    return true;
  }
  if ((0, import_kolmafia92.containsText)(foodConsume, "u")) {
    return false;
  }
  if ((0, import_kolmafia92.containsText)(foodConsume, "i")) {
    return true;
  }
  return false;
}
function iluh_famAllowed(fam) {
  if (!in_iluh()) {
    return true;
  }
  if ((0, import_kolmafia92.containsText)((0, import_kolmafia92.toLowerCase)(fam), "u")) {
    return false;
  }
  return true;
}

// src/autoscend/quests/level_12.ts
function haveWarOutfit(canWear) {
  if (!(0, import_kolmafia93.toBoolean)((0, import_kolmafia93.getProperty)("auto_hippyInstead"))) {
    return possessOutfit("Frat Warrior Fatigues", canWear);
  } else {
    return possessOutfit("War Hippy Fatigues", canWear);
  }
  return true;
}
function haveWarOutfit$1() {
  return haveWarOutfit(false);
}

// src/autoscend/paths/dark_gyffte.ts
function in_darkGyffte() {
  return (0, import_kolmafia94.myPath)() === $path`Dark Gyffte`;
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
  return 20 * (0, import_kolmafia94.min)(23, (0, import_kolmafia94.toInt)((0, import_kolmafia94.getProperty)("darkGyfftePoints"))) + (0, import_kolmafia94.myBasestat)($stat`Muscle`) + 20;
}
function bat_desiredSkills$1(hpLeft, forcedPicks) {
  var costSoFar = 0;
  var baseHP = bat_baseHP();
  var picks = /* @__PURE__ */ new Map();
  if ((0, import_kolmafia94.getProperty)("_auto_bat_bloodBank") !== "2") {
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
    import_kolmafia94.Skill.get(
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
  if (!in_darkGyffte() && (0, import_kolmafia94.myClass)().toString() !== "Astral Spirit") {
    return;
  }
  (0, import_kolmafia94.visitUrl)("campground.php?action=coffin");
  var picks = bat_desiredSkills$1(
    hpLeft,
    requiredSkills
  );
  var url = `choice.php?whichchoice=1342&option=2&pwd=${(0, import_kolmafia94.myHash)()}`;
  var _iterator6 = _createForOfIteratorHelper(
    picks
  ), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var _step6$value = _slicedToArray(_step6.value, 2), sk = _step6$value[0], _ = _step6$value[1];
      url += "&sk[]=";
      url += ((0, import_kolmafia94.toInt)(sk) - 24e3).toString();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  (0, import_kolmafia94.visitUrl)(url);
  (0, import_kolmafia94.visitUrl)(`choice.php?whichchoice=1342&option=1&pwd=${(0, import_kolmafia94.myHash)()}`);
}
function bat_skillValid(sk) {
  if ($skills`Savage Bite, Crush, Baleful Howl, Ceaseless Snarl`.includes(sk) && (0, import_kolmafia94.haveEffect)($effect`Bats Form`) + (0, import_kolmafia94.haveEffect)($effect`Mist Form`) > 0) {
    return false;
  }
  if ($skills`Blood Spike, Blood Chains, Chill of the Tomb, Blood Cloak`.includes(
    sk
  ) && (0, import_kolmafia94.haveEffect)($effect`Wolf Form`) + (0, import_kolmafia94.haveEffect)($effect`Bats Form`) > 0) {
    return false;
  }
  if ($skills`Piercing Gaze, Perceive Soul, Ensorcel, Spectral Awareness`.includes(
    sk
  ) && (0, import_kolmafia94.haveEffect)($effect`Wolf Form`) + (0, import_kolmafia94.haveEffect)($effect`Mist Form`) > 0) {
    return false;
  }
  if ((0, import_kolmafia94.mpCost)(sk) > 0 && in_darkGyffte()) {
    return false;
  }
  return true;
}

// src/autoscend/paths/kingdom_of_exploathing.ts
function in_koe() {
  return (0, import_kolmafia96.myPath)() === $path`Kingdom of Exploathing`;
}
function koe_L12FoodSelect() {
  var food_item = import_kolmafia96.Item.none;
  var _iterator4 = _createForOfIteratorHelper(
    $items`pie man was not meant to eat, spaghetti with Skullheads, gnocchetti di Nietzsche, spaghetti con calaveras, space chowder, spaghetti with ghost balls, crudles, agnolotti arboli, shells a la shellfish, linguini immondizia bianco, fettucini Inconnu, ghuol guolash, suggestive strozzapreti, fusilli marrownarrow`
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var it = _step4.value;
      if ((0, import_kolmafia96.itemAmount)(it) > 0) {
        food_item = it;
        break;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return food_item;
}
function koe_RationingOutDestruction() {
  var food_item = koe_L12FoodSelect();
  if (food_item === import_kolmafia96.Item.none) {
    (0, import_kolmafia96.abort)(
      "I am at the choice adventure and do not know what food I should kill my enemies with during L12 war quest"
    );
  }
  (0, import_kolmafia96.runChoice)(1, `tossid=${(0, import_kolmafia96.toInt)(food_item)}`);
}

// src/autoscend/iotms/mr2015.ts
function doghouseChoiceHandler(choice) {
  if (choice === 1106) {
    if ((0, import_kolmafia97.inHardcore)() && (0, import_kolmafia97.haveEffect)($effect`Adventurer's Best Friendship`) > 120 || (0, import_kolmafia97.haveEffect)($effect`Adventurer's Best Friendship`) > 30 && pathHasFamiliar()) {
      (0, import_kolmafia97.runChoice)(3);
    } else {
      (0, import_kolmafia97.runChoice)(2);
    }
  } else if (choice === 1107) {
    (0, import_kolmafia97.runChoice)(1);
  } else if (choice === 1108) {
    (0, import_kolmafia97.runChoice)(3);
  } else {
    (0, import_kolmafia97.abort)("unhandled choice in doghouseChoiceHandler");
  }
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
function edUnderworldChoiceHandler(choice) {
  auto_log_debug(`edUnderworldChoiceHandler Running choice ${choice}`, "blue");
  if (choice === 1023) {
    (0, import_kolmafia99.runChoice)(1);
    auto_log_info(
      `Ed died in combat ${(0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("_edDefeats"))} time(s)`,
      "blue"
    );
    ed_shopping();
    (0, import_kolmafia99.visitUrl)("place.php?whichplace=edunder&action=edunder_leave");
  } else if (choice === 1024) {
    if ((0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("_edDefeats")) < (0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("edDefeatAbort"))) {
      (0, import_kolmafia99.runChoice)(1, false);
    } else {
      (0, import_kolmafia99.runChoice)(2);
      auto_log_info$1("Ed died in combat for reals!");
      (0, import_kolmafia99.setProperty)(
        "auto_beatenUpCount",
        ((0, import_kolmafia99.toInt)((0, import_kolmafia99.getProperty)("auto_beatenUpCount")) + 1).toString()
      );
    }
  } else {
    (0, import_kolmafia99.abort)("unhandled choice in edUnderworldChoiceHandler");
  }
}

// src/autoscend/iotms/mr2018.ts
function neverendingPartyChoiceHandler(choice) {
  if (choice === 1322) {
    (0, import_kolmafia100.runChoice)(2);
  } else if (choice === 1323) {
    (0, import_kolmafia100.runChoice)(1);
  } else if (choice === 1324) {
    var buff = import_kolmafia100.Effect.none;
    switch ((0, import_kolmafia100.myPrimestat)()) {
      case $stat`Muscle`:
        buff = $effect`Spiced Up`;
        break;
      case $stat`Mysticality`:
        buff = $effect`Tomes of Opportunity`;
        break;
      case $stat`Moxie`:
        buff = $effect`The Best Hair You've Ever Had`;
        break;
    }
    if (in_glover()) {
      (0, import_kolmafia100.runChoice)(5);
    } else if (buff !== import_kolmafia100.Effect.none && (0, import_kolmafia100.haveEffect)(buff) < 9) {
      switch ((0, import_kolmafia100.myPrimestat)()) {
        case $stat`Muscle`:
          (0, import_kolmafia100.runChoice)(2);
          break;
        case $stat`Mysticality`:
          (0, import_kolmafia100.runChoice)(1);
          break;
        case $stat`Moxie`:
          (0, import_kolmafia100.runChoice)(4);
          break;
        default:
          (0, import_kolmafia100.runChoice)(5);
          break;
      }
    } else if (isAboutToPowerlevel() || isActuallyEd()) {
      if ((0, import_kolmafia100.haveEffect)($effect`Citronella Armpits`) < 9) {
        (0, import_kolmafia100.runChoice)(3);
      } else {
        (0, import_kolmafia100.runChoice)(5);
      }
    } else {
      (0, import_kolmafia100.runChoice)(5);
    }
  } else if (choice === 1325) {
    if ((0, import_kolmafia100.myPrimestat)() === $stat`Mysticality`) {
      (0, import_kolmafia100.runChoice)(2);
    } else {
      (0, import_kolmafia100.runChoice)(1);
    }
  } else if (choice === 1326) {
    if ((0, import_kolmafia100.myPrimestat)() === $stat`Muscle`) {
      (0, import_kolmafia100.runChoice)(2);
    } else {
      (0, import_kolmafia100.runChoice)(1);
    }
  } else if (choice === 1327) {
    (0, import_kolmafia100.runChoice)(2);
  } else if (choice === 1328) {
    if ((0, import_kolmafia100.myPrimestat)() === $stat`Moxie`) {
      (0, import_kolmafia100.runChoice)(2);
    } else {
      (0, import_kolmafia100.runChoice)(1);
    }
  } else {
    (0, import_kolmafia100.abort)("unhandled choice in neverendingPartyChoiceHandler");
  }
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
  if ((0, import_kolmafia100.availableAmount)($item`latte lovers member's mug`) === 0) {
    return false;
  }
  var latteDrop = auto_latteDropName(l);
  if (latteDrop === "") {
    return false;
  }
  return !(0, import_kolmafia100.containsText)((0, import_kolmafia100.getProperty)("latteUnlocks"), latteDrop);
}

// src/autoscend/quests/level_08.ts
function itznotyerzitzMineChoiceHandler(choice) {
  auto_log_info(
    `itznotyerzitzMineChoiceHandler Running choice ${choice}`,
    "blue"
  );
  if (choice === 18) {
    if (possessEquipment($item`miner's pants`)) {
      if (possessEquipment($item`7-Foot Dwarven mattock`)) {
        (0, import_kolmafia102.runChoice)(3);
      } else {
        (0, import_kolmafia102.runChoice)(2);
      }
    } else {
      (0, import_kolmafia102.runChoice)(1);
    }
  } else if (choice === 19) {
    if (possessEquipment($item`miner's helmet`)) {
      if (possessEquipment($item`miner's pants`)) {
        (0, import_kolmafia102.runChoice)(3);
      } else {
        (0, import_kolmafia102.runChoice)(2);
      }
    } else {
      (0, import_kolmafia102.runChoice)(1);
    }
  } else if (choice === 20) {
    if (possessEquipment($item`miner's helmet`)) {
      if (possessEquipment($item`7-Foot Dwarven mattock`)) {
        (0, import_kolmafia102.runChoice)(3);
      } else {
        (0, import_kolmafia102.runChoice)(2);
      }
    } else {
      (0, import_kolmafia102.runChoice)(1);
    }
  } else if (choice === 556) {
    if (!possessOutfit$1("Mining Gear")) {
      (0, import_kolmafia102.runChoice)(1);
    } else {
      (0, import_kolmafia102.runChoice)(2);
    }
  } else {
    (0, import_kolmafia102.abort)("unhandled choice in itznotyerzitzMineChoiceHandler");
  }
}
function theeXtremeSlopeChoiceHandler(choice) {
  auto_log_info(
    `theeXtremeSlopeChoiceHandler Running choice ${choice}`,
    "blue"
  );
  if (choice === 15) {
    if (possessEquipment($item`eXtreme mittens`)) {
      if (possessEquipment($item`eXtreme scarf`)) {
        (0, import_kolmafia102.runChoice)(3);
      } else {
        (0, import_kolmafia102.runChoice)(2);
      }
    } else {
      (0, import_kolmafia102.runChoice)(1);
    }
  } else if (choice === 16) {
    if (possessEquipment($item`snowboarder pants`)) {
      if (possessEquipment($item`eXtreme scarf`)) {
        (0, import_kolmafia102.runChoice)(3);
      } else {
        (0, import_kolmafia102.runChoice)(2);
      }
    } else {
      (0, import_kolmafia102.runChoice)(1);
    }
  } else if (choice === 17) {
    if (possessEquipment($item`eXtreme mittens`)) {
      if (possessEquipment($item`snowboarder pants`)) {
        (0, import_kolmafia102.runChoice)(3);
      } else {
        (0, import_kolmafia102.runChoice)(2);
      }
    } else {
      (0, import_kolmafia102.runChoice)(1);
    }
  } else if (choice === 575) {
    if ((0, import_kolmafia102.haveEquipped)($item`candy cane sword cane`)) {
      (0, import_kolmafia102.runChoice)(5);
    } else if (!possessOutfit$1("eXtreme Cold-Weather Gear")) {
      (0, import_kolmafia102.runChoice)(1);
    } else {
      if (isActuallyEd()) {
        (0, import_kolmafia102.runChoice)(3);
      } else {
        (0, import_kolmafia102.runChoice)(4);
      }
    }
  } else {
    (0, import_kolmafia102.abort)("unhandled choice in theeXtremeSlopeChoiceHandler");
  }
}

// src/autoscend/paths/casual.ts
function inAftercore() {
  return (0, import_kolmafia103.toBoolean)((0, import_kolmafia103.getProperty)("kingLiberated"));
}

// src/autoscend/iotms/ttt.ts
var import_kolmafia105 = require("kolmafia");

// src/autoscend/auto_powerlevel.ts
function isAboutToPowerlevel() {
  return (0, import_kolmafia107.toInt)((0, import_kolmafia107.getProperty)("auto_powerLevelLastLevel")) === (0, import_kolmafia107.myLevel)();
}
function disregardInstantKarma() {
  if (inAftercore()) {
    return true;
  }
  if ((0, import_kolmafia107.myLevel)() !== 13) {
    return true;
  }
  return (0, import_kolmafia107.toBoolean)((0, import_kolmafia107.getProperty)("auto_disregardInstantKarma"));
}

// src/autoscend/iotms/mr2014.ts
var $_f_importantMonsters;
$_f_importantMonsters ?? ($_f_importantMonsters = import_kolmafia108.Monster.get(
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
  if ((0, import_kolmafia109.toFamiliar)((0, import_kolmafia109.getProperty)("auto_100familiar")) === import_kolmafia109.Familiar.none) {
    return false;
  }
  return true;
}
function pathHasFamiliar() {
  if (is_boris() || is_jarlsberg() || is_pete() || isActuallyEd() || in_darkGyffte() || in_lta() || in_pokefam()) {
    return false;
  }
  if (in_robot() && (0, import_kolmafia109.toInt)((0, import_kolmafia109.getProperty)("youRobotTop")) !== 2) {
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
  if ((0, import_kolmafia109.getProperty)("auto_blacklistFamiliar") !== "") {
    var noFams = new Map(
      (0, import_kolmafia109.splitString)((0, import_kolmafia109.getProperty)("auto_blacklistFamiliar"), ";").map(
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
        blacklist.set((0, import_kolmafia109.toFamiliar)(trim(fam_1)), 1);
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
  return (0, import_kolmafia109.haveFamiliar)(fam);
}

// src/autoscend/auto_restore.ts
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

// src/autoscend/iotms/mr2016.ts
function expectGhostReport() {
  if ((0, import_kolmafia112.totalTurnsPlayed)() >= (0, import_kolmafia112.toInt)((0, import_kolmafia112.getProperty)("nextParanormalActivity"))) {
    if ((0, import_kolmafia112.totalTurnsPlayed)() > (0, import_kolmafia112.toInt)((0, import_kolmafia112.getProperty)("nextParanormalActivity"))) {
      var page = (0, import_kolmafia112.visitUrl)("charpane.php");
      var myGhost = new AshMatcher(
        '<tr rel="protonquest">(?:.*?)<b>(.*?)</b>',
        page
      );
      if (myGhost.find()) {
        var goal = (0, import_kolmafia112.toLocation)(myGhost.group(1));
        (0, import_kolmafia112.setProperty)("ghostLocation", goal.toString());
        (0, import_kolmafia112.setProperty)("questPAGhost", "started");
      }
    }
    if ((0, import_kolmafia112.getProperty)("questPAGhost") === "unstarted") {
      return true;
    }
  }
  return false;
}
function haveGhostReport() {
  if ((0, import_kolmafia112.getProperty)("questPAGhost") === "unstarted") {
    return false;
  }
  if ((0, import_kolmafia112.getProperty)("questPAGhost") === "started" && (0, import_kolmafia112.getProperty)("ghostLocation") !== "") {
    return true;
  }
  return false;
}

// src/autoscend/iotms/mr2007.ts
var import_kolmafia115 = require("kolmafia");

// src/autoscend/paths/class_act.ts
var import_kolmafia116 = require("kolmafia");

// src/autoscend/paths/class_act_two.ts
var import_kolmafia117 = require("kolmafia");

// src/autoscend/paths/journeyman.ts
var import_kolmafia118 = require("kolmafia");

// src/autoscend/auto_util.ts
function trim(input) {
  return input.trim();
}
function safeString(input) {
  return input.replaceAll(/[,:]/g, ".");
}
function handleTracker$1(used, detail, tracker) {
  var cur = (0, import_kolmafia119.getProperty)(tracker);
  if (cur !== "") {
    cur = `${cur}, `;
  }
  cur = `${cur}(${(0, import_kolmafia119.myDaycount)()}:${safeString(used)}:${safeString(detail)}:${(0, import_kolmafia119.myTurncount)()})`;
  (0, import_kolmafia119.setProperty)(tracker, cur);
}
function handleTracker$2(used, loc, detail, tracker) {
  var cur = (0, import_kolmafia119.getProperty)(tracker);
  if (cur !== "") {
    cur = `${cur}, `;
  }
  if (loc === "none") {
    handleTracker$1(used, detail, tracker);
    return;
  }
  cur = `${cur}(${(0, import_kolmafia119.myDaycount)()}:${safeString(used)}:${safeString(loc)}:${safeString(detail)}:${(0, import_kolmafia119.myTurncount)()})`;
  (0, import_kolmafia119.setProperty)(tracker, cur);
}
function internalQuestStatus(prop) {
  var status = (0, import_kolmafia119.getProperty)(prop);
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
    return (0, import_kolmafia119.toInt)(my_element.group(1));
  }
  return -1;
}
function auto_combat_appearance_rates(place, queue) {
  var res_including_noncombat = new Map(
    Object.entries((0, import_kolmafia119.appearanceRates)(place, queue)).map(
      (_ref) => {
        var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
        return [
          import_kolmafia119.Monster.get(_k),
          _v
        ];
      }
    )
  );
  var res_excluding_noncombat = /* @__PURE__ */ new Map();
  var noncombat_frequency = res_including_noncombat.get(import_kolmafia119.Monster.none) ?? res_including_noncombat.set(import_kolmafia119.Monster.none, 0).get(import_kolmafia119.Monster.none);
  if (noncombat_frequency === 0 || noncombat_frequency >= 100) {
    return res_including_noncombat;
  }
  var _iterator8 = _createForOfIteratorHelper(
    res_including_noncombat
  ), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var _step8$value = _slicedToArray(_step8.value, 2), mob = _step8$value[0], freq = _step8$value[1];
      if (mob !== import_kolmafia119.Monster.none) {
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
function auto_wantToBanish(enemy, loc) {
  var _appearanceRates, _enemy$toString;
  if (((_appearanceRates = (0, import_kolmafia119.appearanceRates)(loc))[_enemy$toString = enemy.toString()] ?? (_appearanceRates[_enemy$toString] = 0)) <= 0) {
    return false;
  }
  var locCache = (0, import_kolmafia119.myLocation)();
  (0, import_kolmafia119.setLocation)(loc);
  var monstersToBanish = auto_getMonsters("banish");
  (0, import_kolmafia119.setLocation)(locCache);
  return monstersToBanish.get(enemy) ?? monstersToBanish.set(enemy, false).get(enemy);
}
function auto_wantToFreeRun(enemy, loc) {
  var _appearanceRates2, _enemy$toString2;
  if (((_appearanceRates2 = (0, import_kolmafia119.appearanceRates)(loc))[_enemy$toString2 = enemy.toString()] ?? (_appearanceRates2[_enemy$toString2] = 0)) <= 0) {
    return false;
  }
  var locCache = (0, import_kolmafia119.myLocation)();
  (0, import_kolmafia119.setLocation)(loc);
  var monstersToFreeRun = auto_getMonsters("freerun");
  (0, import_kolmafia119.setLocation)(locCache);
  return monstersToFreeRun.get(enemy) ?? monstersToFreeRun.set(enemy, false).get(enemy);
}
function hasTorso$1() {
  return (0, import_kolmafia119.haveSkill)($skill`Torso Awareness`) || (0, import_kolmafia119.haveSkill)($skill`Best Dressed`) || robot_cpu(9, false);
}
function isGuildClass() {
  return $classes`Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief`.includes(
    (0, import_kolmafia119.myClass)()
  );
}
function isDesertAvailable() {
  if (in_koe()) {
    auto_log_info$1("The desert exploded so no need to build a meatcar...");
    (0, import_kolmafia119.setProperty)("lastDesertUnlock", (0, import_kolmafia119.myAscensions)().toString());
  }
  return (0, import_kolmafia119.toInt)((0, import_kolmafia119.getProperty)("lastDesertUnlock")) === (0, import_kolmafia119.myAscensions)();
}
function inKnollSign() {
  return ["Mongoose", "Vole", "Wallaby"].includes((0, import_kolmafia119.mySign)());
}
function inGnomeSign() {
  return ["Blender", "Packrat", "Wombat"].includes((0, import_kolmafia119.mySign)());
}
function auto_have_skill(sk) {
  return auto_is_valid$2(sk) && (0, import_kolmafia119.haveSkill)(sk);
}
function effectiveDropChance(it, baseDropRate) {
  var retval = 0;
  var item_modifier = (0, import_kolmafia119.itemDropModifier)();
  if (baseDropRate > 0) {
    if ((0, import_kolmafia119.itemType)(it) === "food") {
      item_modifier += (0, import_kolmafia119.numericModifier)("Food Drop");
    }
    if ((0, import_kolmafia119.itemType)(it) === "booze") {
      item_modifier += (0, import_kolmafia119.numericModifier)("Booze Drop");
    }
    if (it.candy) {
      item_modifier += (0, import_kolmafia119.numericModifier)("Candy Drop");
    }
    if ((0, import_kolmafia119.toSlot)(it) !== import_kolmafia119.Slot.none && $slots`hat, shirt, weapon, off-hand, pants, acc1, acc2, acc3, back`.includes(
      (0, import_kolmafia119.toSlot)(it)
    )) {
      item_modifier += (0, import_kolmafia119.numericModifier)("Gear Drop");
      if ((0, import_kolmafia119.toSlot)(it) === $slot`hat`) {
        item_modifier += (0, import_kolmafia119.numericModifier)("Hat Drop");
      }
      if ((0, import_kolmafia119.toSlot)(it) === $slot`shirt`) {
        item_modifier += (0, import_kolmafia119.numericModifier)("Shirt Drop");
      }
      if ((0, import_kolmafia119.toSlot)(it) === $slot`weapon`) {
        item_modifier += (0, import_kolmafia119.numericModifier)("Weapon Drop");
      }
      if ((0, import_kolmafia119.toSlot)(it) === $slot`off-hand`) {
        item_modifier += (0, import_kolmafia119.numericModifier)("Offhand Drop");
      }
      if ((0, import_kolmafia119.toSlot)(it) === $slot`pants`) {
        item_modifier += (0, import_kolmafia119.numericModifier)("Pants Drop");
      }
      if ($slots`acc1, acc2, acc3`.includes((0, import_kolmafia119.toSlot)(it))) {
        item_modifier += (0, import_kolmafia119.numericModifier)("Accessory Drop");
      }
    }
  }
  retval = baseDropRate * (100 + item_modifier) / 100;
  retval = (0, import_kolmafia119.min)(100, retval);
  if (retval > 0) {
    if (in_lar()) {
      if (retval * 2 >= 100) {
        retval = 100;
      } else {
        retval = 0;
      }
    }
    if (in_heavyrains()) {
      var depth = (0, import_kolmafia119.toInt)(
        (0, import_kolmafia119.myLocation)().waterLevel + (0, import_kolmafia119.numericModifier)("Water Level")
      );
      depth = (0, import_kolmafia119.max)(1, depth);
      depth = (0, import_kolmafia119.min)(6, depth);
      var heavyrainsWashChance = 5 * depth / 100;
      if ((0, import_kolmafia119.haveEffect)($effect`Fishy Whiskers`) > 0) {
        heavyrainsWashChance -= 0.1;
      }
      if ((0, import_kolmafia119.equippedAmount)($item`fishbone catcher's mitt`) > 0) {
        heavyrainsWashChance -= 0.1;
      }
      retval = retval * (1 - (0, import_kolmafia119.max)(0, heavyrainsWashChance));
    }
    if (in_wildfire()) {
      var wildfireBurnChance = 0;
      switch ((0, import_kolmafia119.myLocation)().fireLevel) {
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
    if ((0, import_kolmafia119.myFamiliar)() === $familiar`Black Cat`) {
      retval = retval * 0.75;
    } else if ((0, import_kolmafia119.myFamiliar)() === $familiar`O.A.F.`) {
      retval = retval * 0.75;
    }
  }
  return (0, import_kolmafia119.max)(0, retval);
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
  if ((0, import_kolmafia119.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia119.isTrendy)(it);
  }
  return (0, import_kolmafia119.isUnrestricted)(it);
}
function auto_is_valid$1(fam) {
  if (is100FamRun()) {
    return (0, import_kolmafia119.toFamiliar)((0, import_kolmafia119.getProperty)("auto_100familiar")) === fam;
  }
  if ((0, import_kolmafia119.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia119.isTrendy)(fam);
  }
  return bhy_usable(fam.toString()) && glover_usable(fam.toString()) && zombieSlayer_usable(fam) && wereprof_usable(fam.toString()) && iluh_famAllowed(fam.toString()) && (0, import_kolmafia119.isUnrestricted)(fam);
}
function auto_is_valid$2(sk) {
  if ((0, import_kolmafia119.myPath)() === $path`Trendy`) {
    return (0, import_kolmafia119.isTrendy)(sk);
  }
  if (in_lol() && $skills`Extract, Turbo, Digitize, Duplicate, Portscan, Compress`.includes(
    sk
  )) {
    return true;
  }
  if (is_professor() && sk !== (0, import_kolmafia119.toSkill)(7512)) {
    return false;
  }
  return (glover_usable(sk.toString()) || sk.passive && sk !== $skill`Disco Nap`) && bat_skillValid(sk) && plumber_skillValid(sk) && (0, import_kolmafia119.isUnrestricted)(sk);
}
function auto_log(s, color, log_level) {
  if (log_level > (0, import_kolmafia119.toInt)((0, import_kolmafia119.getProperty)("auto_log_level"))) {
    return;
  }
  switch (log_level) {
    case 1:
      (0, import_kolmafia119.print)(`[WARNING] ${s}`, color);
      break;
    case 2:
      (0, import_kolmafia119.print)(`[INFO] ${s}`, color);
      break;
    case 3:
      (0, import_kolmafia119.print)(`[DEBUG] ${s}`, color);
      break;
  }
}
function auto_log_error(s) {
  (0, import_kolmafia119.print)(`[ERROR] ${s}`, "red");
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
  return (0, import_kolmafia119.toBoolean)((0, import_kolmafia119.getProperty)("auto_turbo"));
}
function auto_check_conditions(conds) {
  if (conds === "") {
    return true;
  }
  var conditions = new Map(
    (0, import_kolmafia119.splitString)(conds, ";").map((_v, _i) => [_i, _v])
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
        (0, import_kolmafia119.abort)(`"${comparison}" is not a valid comparison operator!`);
    }
    return false;
  }
  function check_condition(cond2) {
    var m2 = new AshMatcher("^(\\w+):(.+)$", cond2);
    if (!m2.find()) {
      (0, import_kolmafia119.abort)(`"${cond2}" is not proper condition formatting!`);
    }
    var condition_type = m2.group(1);
    var condition_data = m2.group(2);
    {
      var req_class = import_kolmafia119.Class.none;
      var req_mainstat = import_kolmafia119.Stat.none;
      var req_pathid = 0;
      var req_skill = import_kolmafia119.Skill.none;
      var req_effect = import_kolmafia119.Effect.none;
      var m5 = void 0;
      var req_item = import_kolmafia119.Item.none;
      var m7 = void 0;
      var todrop_item = import_kolmafia119.Item.none;
      var base_drop_chance = 0;
      var req_familiar = import_kolmafia119.Familiar.none;
      var havefamiliar = import_kolmafia119.Familiar.none;
      var req_loc = import_kolmafia119.Location.none;
      var m6 = void 0;
      var loc = import_kolmafia119.Location.none;
      var m22 = void 0;
      var prop = "";
      var m3 = void 0;
      var quest_state = 0;
      var compare_to = 0;
      var check_sniffed = import_kolmafia119.Monster.none;
      var sgeeas = 0;
      var day = 0;
      var m4 = void 0;
      switch (condition_type) {
        case "class":
          req_class = (0, import_kolmafia119.toClass)(condition_data);
          if (req_class === import_kolmafia119.Class.none) {
            (0, import_kolmafia119.abort)(`"${condition_data}" does not properly convert to a class!`);
          }
          return req_class === (0, import_kolmafia119.myClass)();
        case "mainstat":
          req_mainstat = (0, import_kolmafia119.toStat)(condition_data);
          if (req_mainstat === import_kolmafia119.Stat.none) {
            (0, import_kolmafia119.abort)(`"${condition_data}" does not properly convert to a stat!`);
          }
          return req_mainstat === (0, import_kolmafia119.myPrimestat)();
        case "path":
          return condition_data === (0, import_kolmafia119.myPath)().name;
        case "pathid":
          req_pathid = (0, import_kolmafia119.toInt)(condition_data);
          if (req_pathid === 0) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a path id!`
            );
          }
          return req_pathid === (0, import_kolmafia119.myPath)().id;
        case "skill":
          req_skill = (0, import_kolmafia119.toSkill)(condition_data);
          if (req_skill === import_kolmafia119.Skill.none) {
            (0, import_kolmafia119.abort)(`"${condition_data}" does not properly convert to a skill!`);
          }
          return auto_have_skill(req_skill);
        case "effect":
          req_effect = (0, import_kolmafia119.toEffect)(condition_data);
          if (req_effect === import_kolmafia119.Effect.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to an effect!`
            );
          }
          return (0, import_kolmafia119.haveEffect)(req_effect) > 0;
        case "item":
          m5 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m5.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          req_item = (0, import_kolmafia119.toItem)(m5.group(1));
          if (req_item === import_kolmafia119.Item.none) {
            (0, import_kolmafia119.abort)(`"${m5.group(1)}" does not properly convert to an item!`);
          }
          return compare_numbers(
            (0, import_kolmafia119.itemAmount)(req_item) + (0, import_kolmafia119.equippedAmount)(req_item),
            (0, import_kolmafia119.toInt)(m5.group(3)),
            m5.group(2)
          );
        case "itemdropcapped":
          m7 = new AshMatcher("([^=<>]+)=(.+)", condition_data);
          if (!m7.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          todrop_item = (0, import_kolmafia119.toItem)(m7.group(2));
          base_drop_chance = (0, import_kolmafia119.toFloat)(m7.group(1));
          if (todrop_item === import_kolmafia119.Item.none) {
            (0, import_kolmafia119.abort)(`"${m7.group(1)}" does not properly convert to an item!`);
          }
          return effectiveDropChance(todrop_item, base_drop_chance) >= 100;
        case "outfit":
          return (0, import_kolmafia119.haveOutfit)(condition_data);
        case "familiar":
          req_familiar = (0, import_kolmafia119.toFamiliar)(condition_data);
          if (req_familiar === import_kolmafia119.Familiar.none && condition_data !== "none") {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return (0, import_kolmafia119.myFamiliar)() === req_familiar;
        case "havefamiliar":
          havefamiliar = (0, import_kolmafia119.toFamiliar)(condition_data);
          if (havefamiliar === import_kolmafia119.Familiar.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return auto_have_familiar(havefamiliar);
        case "loc":
          req_loc = (0, import_kolmafia119.toLocation)(condition_data);
          if (req_loc === import_kolmafia119.Location.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a location!`
            );
          }
          return (0, import_kolmafia119.myLocation)() === req_loc;
        case "turnsspent":
          m6 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m6.find()) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" is not a proper turnsspent condition format!`
            );
          }
          loc = (0, import_kolmafia119.toLocation)(m6.group(1));
          if (loc === import_kolmafia119.Location.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a location!`
            );
          }
          if (!["=", "=="].includes(m6.group(2))) {
            return compare_numbers(
              loc.turnsSpent,
              (0, import_kolmafia119.toInt)(m6.group(3)),
              m6.group(2)
            );
          }
          return loc.turnsSpent === (0, import_kolmafia119.toInt)(m6.group(3));
        case "prop":
          m22 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m22.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper prop condition format!`);
          }
          prop = (0, import_kolmafia119.getProperty)(m22.group(1));
          if (!["=", "=="].includes(m22.group(2))) {
            return compare_numbers(
              (0, import_kolmafia119.toInt)(prop),
              (0, import_kolmafia119.toInt)(m22.group(3)),
              m22.group(2)
            );
          }
          return prop === m22.group(3);
        case "prop_boolean":
          return (0, import_kolmafia119.toBoolean)((0, import_kolmafia119.getProperty)(condition_data));
        case "quest":
          m3 = new AshMatcher("([^=<>]+)([=<>]+)(.+)", condition_data);
          if (!m3.find()) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" is not a proper quest condition format!`
            );
          }
          quest_state = internalQuestStatus(m3.group(1));
          compare_to = (0, import_kolmafia119.toInt)(m3.group(3));
          return compare_numbers(quest_state, compare_to, m3.group(2));
        case "sniffed":
          check_sniffed = (0, import_kolmafia119.toMonster)(condition_data);
          if (check_sniffed === import_kolmafia119.Monster.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a monster!`
            );
          }
          if ((0, import_kolmafia119.haveEffect)($effect`On the Trail`) > 0 && (0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("olfactedMonster")) === check_sniffed) {
            return true;
          }
          if (isActuallyEd() && (0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("stenchCursedMonster")) === check_sniffed) {
            return true;
          }
          if (is_pete() && (0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("makeFriendsMonster")) === check_sniffed) {
            return true;
          }
          if ($classes`Cow Puncher, Beanslinger, Snake Oiler`.includes(
            (0, import_kolmafia119.myClass)()
          ) && (0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("longConMonster")) === check_sniffed) {
            return true;
          }
          if (in_darkGyffte() && (0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("auto_bat_soulmonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("_gallapagosMonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("monkeyPointMonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("_latteMonster")) === check_sniffed) {
            return true;
          }
          if ((0, import_kolmafia119.toMonster)((0, import_kolmafia119.getProperty)("motifMonster")) === check_sniffed) {
            return true;
          }
          return false;
        case "expectghostreport":
          return expectGhostReport();
        case "latte":
          return auto_latteDropAvailable((0, import_kolmafia119.myLocation)());
        case "tavern":
          return (0, import_kolmafia119.toInt)((0, import_kolmafia119.getProperty)("hiddenTavernUnlock")) >= (0, import_kolmafia119.myAscensions)();
        case "sgeea":
          sgeeas = (0, import_kolmafia119.toInt)(condition_data);
          return (0, import_kolmafia119.itemAmount)($item`soft green echo eyedrop antidote`) >= sgeeas;
        case "day":
          day = (0, import_kolmafia119.toInt)(condition_data);
          return (0, import_kolmafia119.myDaycount)() === day;
        case "ML":
          m4 = new AshMatcher("([=<>]+)(.+)", condition_data);
          if (!m4.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper ML condition format!`);
          }
          return compare_numbers(
            (0, import_kolmafia119.monsterLevelAdjustment)(),
            (0, import_kolmafia119.toInt)(m4.group(2)),
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
              (0, import_kolmafia119.abort)(`Invalid consume type "${condition_type}" found!`);
          }
        default:
          (0, import_kolmafia119.abort)(`Invalid condition type "${condition_type}" found!`);
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
        (0, import_kolmafia119.abort)(`"${cond}" is not a proper condition!`);
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
          var thisMonster = (0, import_kolmafia119.toMonster)(name);
          if (thisMonster === import_kolmafia119.Monster.none) {
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
function auto_wantToSniff(enemy, loc) {
  var locCache = (0, import_kolmafia119.myLocation)();
  (0, import_kolmafia119.setLocation)(loc);
  var toSniff = auto_getMonsters("sniff");
  if ((toSniff.get(enemy) ?? toSniff.set(enemy, false).get(enemy)) && (auto_combat_appearance_rates$1(loc).get(enemy) ?? auto_combat_appearance_rates$1(loc).set(enemy, 0).get(enemy)) < 100) {
    (0, import_kolmafia119.setLocation)(locCache);
    return true;
  }
  (0, import_kolmafia119.setLocation)(locCache);
  return false;
}
function auto_wantToYellowRay(enemy, loc) {
  var locCache = (0, import_kolmafia119.myLocation)();
  (0, import_kolmafia119.setLocation)(loc);
  var toSniff = auto_getMonsters("yellowray");
  (0, import_kolmafia119.setLocation)(locCache);
  return toSniff.get(enemy) ?? toSniff.set(enemy, false).get(enemy);
}
function auto_wantToReplace(enemy, loc) {
  var locCache = (0, import_kolmafia119.myLocation)();
  (0, import_kolmafia119.setLocation)(loc);
  var toReplace = auto_getMonsters("replace");
  (0, import_kolmafia119.setLocation)(locCache);
  return toReplace.get(enemy) ?? toReplace.set(enemy, false).get(enemy);
}
function auto_wantToCopy$1(enemy) {
  var toCopy = auto_getMonsters("copy");
  return toCopy.get(enemy) ?? toCopy.set(enemy, false).get(enemy);
}
function zoneRank$1(mon, loc) {
  if (auto_wantToYellowRay(mon, loc)) {
    return 1;
  }
  if (auto_wantToCopy$1(mon)) {
    return 2;
  }
  if (auto_wantToSniff(mon, loc)) {
    return 3;
  }
  if (auto_wantToBanish(mon, loc) || auto_wantToFreeRun(mon, loc) || auto_wantToReplace(mon, loc)) {
    return 999;
  }
  return 4;
}
function currentPoolSkill() {
  var poolskill_command = new Map(
    (0, import_kolmafia119.splitString)((0, import_kolmafia119.cliExecuteOutput)("poolskill")).map((_v, _i) => [_i, _v])
  );
  return (0, import_kolmafia119.toInt)(
    (0, import_kolmafia119.substring)(
      poolskill_command.get(0) ?? poolskill_command.set(0, "").get(0),
      (0, import_kolmafia119.lastIndexOf)(
        poolskill_command.get(0) ?? poolskill_command.set(0, "").get(0),
        ":"
      ) + 2,
      (0, import_kolmafia119.length)(poolskill_command.get(0) ?? poolskill_command.set(0, "").get(0)) - 1
    )
  );
}
function poolSkillPracticeGains() {
  var count_1 = 1;
  if ((0, import_kolmafia119.haveEffect)($effect`Chalky Hand`) > 0) {
    count_1 += 1;
  }
  if ((0, import_kolmafia119.equippedAmount)($item`[2268]Staff of Fats`) > 0) {
    count_1 += 2;
  }
  return count_1;
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
      if ((0, import_kolmafia119.itemAmount)(w_it) !== 0 && (0, import_kolmafia119.isUnrestricted)(w_it)) {
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
  if (in_wildfire() && !(0, import_kolmafia119.toBoolean)((0, import_kolmafia119.getProperty)("wildfirePumpGreased")) && (0, import_kolmafia119.itemAmount)($item`pump grease`) === 0) {
    reserve_extra += (0, import_kolmafia119.npcPrice)($item`pump grease`);
  }
  if (!hasTorso$1() && hasUsefulShirt() && !(0, import_kolmafia119.gnomadsAvailable)() && inGnomeSign()) {
    reserve_extra += (0, import_kolmafia119.toInt)(5e3 * npcStoreDiscountMulti());
  }
  if (!hasTorso$1() && (0, import_kolmafia119.gnomadsAvailable)() && hasUsefulShirt()) {
    reserve_extra += 5e3;
  }
  if ((0, import_kolmafia119.myLevel)() < 10) {
    if (!isDesertAvailable() && inKnollSign() && (0, import_kolmafia119.myLevel)() > 5 && (0, import_kolmafia119.myTurncount)() > 50) {
      return 500 + reserve_extra;
    }
    return reserve_extra;
  }
  var reserve_gnasir = 0;
  var reserve_diary = 0;
  var reserve_zeppelin = 0;
  var reserve_palindome = 0;
  var reserve_island = 0;
  if (internalQuestStatus("questL11Desert") < 1 && ((0, import_kolmafia119.toInt)(
    //bitwise. desert exploration not yet finished
    (0, import_kolmafia119.getProperty)("gnasirProgress")
  ) & 2) !== 2) {
    reserve_gnasir += 1e3;
  }
  if ((0, import_kolmafia119.itemAmount)($item`your father's MacGuffin diary`) === 0 && !in_koe() && !in_wotsf()) {
    reserve_diary += 500;
    if ((0, import_kolmafia119.itemAmount)($item`forged identification documents`) === 0) {
      reserve_diary += (0, import_kolmafia119.toInt)(5e3 * npcStoreDiscountMulti());
    }
  }
  if ((0, import_kolmafia119.myLevel)() >= 11 && internalQuestStatus("questL11Ron") < 5 && (0, import_kolmafia119.itemAmount)($item`Red Zeppelin ticket`) < 1) {
    if (((0, import_kolmafia119.getProperty)("questL11Shen") === "finished" || $location`The Copperhead Club`.turnsSpent >= 15) && (0, import_kolmafia119.itemAmount)($item`priceless diamond`) < 1) {
      reserve_zeppelin += (0, import_kolmafia119.toInt)(5e3 * npcStoreDiscountMulti());
    }
  }
  if ((0, import_kolmafia119.myLevel)() >= 11 && internalQuestStatus("questL11Palindome") < 1) {
    if ((0, import_kolmafia119.itemAmount)($item`photograph of a red nugget`) < 1) {
      reserve_palindome += 500;
    }
    if ((0, import_kolmafia119.itemAmount)($item`photograph of God`) < 1) {
      reserve_palindome += 500;
    }
  }
  if ((0, import_kolmafia119.toInt)((0, import_kolmafia119.getProperty)("lastIslandUnlock")) < (0, import_kolmafia119.myAscensions)()) {
    var price_vacation = 500;
    if (in_wotsf()) {
      price_vacation = 5;
    }
    reserve_island += price_vacation * 3;
    if ((0, import_kolmafia119.itemAmount)($item`dingy planks`) === 0) {
      reserve_island += (0, import_kolmafia119.toInt)(400 * npcStoreDiscountMulti());
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

// src/autoscend/auto_acquire.ts
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
function auto_reagnimatedGetPart(choice) {
  if ((0, import_kolmafia131.availableAmount)($item`gnomish housemaid's kgnee`) === 0) {
    (0, import_kolmafia131.runChoice)(4);
  } else if ((0, import_kolmafia131.availableAmount)($item`gnomish coal miner's lung`) === 0) {
    (0, import_kolmafia131.runChoice)(2);
  } else if ((0, import_kolmafia131.availableAmount)($item`gnomish athlete's foot`) === 0) {
    (0, import_kolmafia131.runChoice)(5);
  } else if ((0, import_kolmafia131.availableAmount)($item`gnomish tennis elbow`) === 0) {
    (0, import_kolmafia131.runChoice)(3);
  } else if ((0, import_kolmafia131.availableAmount)($item`gnomish swimmer's ears`) === 0) {
    (0, import_kolmafia131.runChoice)(1);
  } else {
    (0, import_kolmafia131.abort)("unhandled choice in auto_reagnimatedGetPart");
  }
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

// src/autoscend/auto_equipment.ts
function equipmentAmount(equipment) {
  if (equipment === import_kolmafia135.Item.none) {
    return 0;
  }
  var amount = (0, import_kolmafia135.itemAmount)(equipment) + (0, import_kolmafia135.equippedAmount)(equipment, true);
  if (equipment.toString() in (0, import_kolmafia135.getRelated)($item`broken champagne bottle`, "fold")) {
    amount = (0, import_kolmafia135.itemAmount)(wrap_item($item`January's Garbage Tote`));
  }
  return amount;
}
function possessEquipment(equipment) {
  return equipmentAmount(equipment) > 0;
}
function possessOutfit(outfitToCheck, checkCanEquip) {
  if ((0, import_kolmafia135.outfitPieces)(outfitToCheck).length === 0) {
    auto_log_warning$1(`${outfitToCheck} is not a valid outfit!`);
    return false;
  }
  var _iterator22 = _createForOfIteratorHelper(
    (0, import_kolmafia135.outfitPieces)(outfitToCheck).entries()
  ), _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
      var _step22$value = _slicedToArray(_step22.value, 2), key = _step22$value[0], piece = _step22$value[1];
      if (!possessEquipment(piece)) {
        return false;
      }
      if (checkCanEquip && !(0, import_kolmafia135.canEquip)(piece)) {
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

// src/autoscend/auto_choice_adv.ts
function auto_run_choice(choice, page) {
  if (robot_choice_adv(choice, page)) {
    return true;
  }
  auto_log_debug$1("Running auto_choice_adv.js");
  var options = new Map(
    Object.entries((0, import_kolmafia136.availableChoiceOptions)()).map((_ref) => {
      var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
      return [(0, import_kolmafia136.toInt)(_k), _v];
    })
  );
  {
    var goal = 0;
    var search = "";
    var glchoice = 0;
    switch (choice) {
      case 15:
      case 16:
      case 17:
        theeXtremeSlopeChoiceHandler(choice);
        break;
      case 18:
      case 19:
      case 20:
        itznotyerzitzMineChoiceHandler(choice);
        break;
      case 21:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 22:
      case 23:
      case 24:
        piratesCoveChoiceHandler(choice);
        break;
      case 89:
        if (isActuallyEd() && (!possessEquipment($item`serpentine sword`) || !possessEquipment($item`snake shield`))) {
          (0, import_kolmafia136.runChoice)(2);
        } else {
          (0, import_kolmafia136.runChoice)(4);
        }
        break;
      case 90:
        (0, import_kolmafia136.runChoice)(3);
        break;
      case 105:
        if ((0, import_kolmafia136.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia136.runChoice)(1);
        } else {
          (0, import_kolmafia136.runChoice)(2);
        }
        break;
      case 106:
        (0, import_kolmafia136.runChoice)(3);
        break;
      case 107:
        (0, import_kolmafia136.runChoice)(4);
        break;
      case 108:
        (0, import_kolmafia136.runChoice)(4);
        break;
      case 109:
        if (options.has(4)) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(1);
        }
        break;
      case 110:
        (0, import_kolmafia136.runChoice)(4);
        break;
      case 111:
        (0, import_kolmafia136.runChoice)(3);
        break;
      case 112:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 113:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 114:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 115:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 116:
        (0, import_kolmafia136.runChoice)(4);
        break;
      case 117:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 118:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 120:
        (0, import_kolmafia136.runChoice)(4);
        break;
      case 123:
      case 125:
        hiddenTempleChoiceHandler(choice, page);
        break;
      case 139:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(3);
        }
        break;
      case 140:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(3);
        }
        break;
      case 141:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 142:
        (0, import_kolmafia136.runChoice)(3);
        break;
      case 143:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(3);
        }
        break;
      case 144:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(3);
        }
        break;
      case 145:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 146:
        (0, import_kolmafia136.runChoice)(3);
        break;
      case 147:
        (0, import_kolmafia136.runChoice)(3);
        break;
      case 148:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 149:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 153:
      case 155:
      case 157:
        cyrptChoiceHandler(choice);
        break;
      case 163:
        if (in_lar()) {
          (0, import_kolmafia136.setProperty)("_LAR_skipNC163", (0, import_kolmafia136.myTurncount)().toString());
        }
        (0, import_kolmafia136.runChoice)(4);
        break;
      case 178:
        if (in_lar()) {
          (0, import_kolmafia136.setProperty)("_LAR_skipNC178", (0, import_kolmafia136.myTurncount)().toString());
        }
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 182:
        if ((0, import_kolmafia136.itemAmount)($item`model airship`) === 0) {
          (0, import_kolmafia136.runChoice)(4);
        } else if (options.has(6)) {
          (0, import_kolmafia136.runChoice)(6);
        } else if (options.has(5) && L10_needUmbrella()) {
          (0, import_kolmafia136.runChoice)(5);
        } else {
          (0, import_kolmafia136.runChoice)(1);
        }
        break;
      case 184:
      case 185:
      case 186:
        barrrneysBarrrChoiceHandler(choice);
        break;
      case 188:
        if ((0, import_kolmafia136.isWearingOutfit)("Frat Boy Ensemble")) {
          (0, import_kolmafia136.runChoice)(1);
        } else if ((0, import_kolmafia136.equippedAmount)($item`mullet wig`) === 1 && (0, import_kolmafia136.itemAmount)($item`briefcase`) > 0) {
          (0, import_kolmafia136.runChoice)(2);
        } else if ((0, import_kolmafia136.equippedAmount)($item`frilly skirt`) === 1 && (0, import_kolmafia136.itemAmount)($item`hot wing`) > 2) {
          (0, import_kolmafia136.runChoice)(3);
        } else {
          (0, import_kolmafia136.abort)(
            "I tried to infiltrate the orcish frat house without being equipped for the job"
          );
        }
        break;
      case 189:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 191:
        fcleChoiceHandler(choice);
        break;
      case 330:
        if ((0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("poolSharkCount")) < 25) {
          (0, import_kolmafia136.runChoice)(1);
        } else {
          (0, import_kolmafia136.runChoice)(2);
        }
        break;
      case 502:
      case 503:
      case 504:
      case 505:
      case 506:
      case 507:
        spookyForestChoiceHandler(choice);
        break;
      case 523:
      case 527:
        cyrptChoiceHandler(choice);
        break;
      case 542:
      case 543:
      case 544:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 556:
        itznotyerzitzMineChoiceHandler(choice);
        break;
      case 575:
        theeXtremeSlopeChoiceHandler(choice);
        break;
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
        hiddenTempleChoiceHandler(choice, page);
        break;
      case 588:
        if (!(0, import_kolmafia136.containsText)(page, "name=pingvalue size=5 value=2")) {
          (0, import_kolmafia136.runChoice)(1, "pingvalue=2");
        } else if (!(0, import_kolmafia136.containsText)(page, "name=whurmvalue size=5 value=4")) {
          (0, import_kolmafia136.runChoice)(2, "whurmvalue=4");
        } else if (!(0, import_kolmafia136.containsText)(page, "name=boomchuckvalue size=5 value=8")) {
          (0, import_kolmafia136.runChoice)(3, "boomchuckvalue=8");
        }
        break;
      case 589:
        if ((0, import_kolmafia136.itemAmount)($item`bugbear autopsy tweezers`) > 0) {
          for (var i = 1; i <= 5; i++) {
            if (options.has(i)) {
              (0, import_kolmafia136.runChoice)(i);
              break;
            }
          }
        } else {
          (0, import_kolmafia136.runChoice)(6);
        }
        break;
      case 590:
        if (options.has(2)) {
          (0, import_kolmafia136.runChoice)(2);
        } else {
          (0, import_kolmafia136.runChoice)(1);
        }
        break;
      case 591:
      case 592:
      case 593:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 597:
        auto_reagnimatedGetPart(choice);
        break;
      case 604:
      case 605:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 606:
        if (in_bhy() || in_glover() && options.has(3) && (0, import_kolmafia136.itemAmount)($item`jar of oil`) === 0) {
          (0, import_kolmafia136.runChoice)(6);
          break;
        }
        if (options.has(4)) {
          (0, import_kolmafia136.runChoice)(4);
          break;
        }
        if (options.has(3) && (0, import_kolmafia136.itemAmount)($item`jar of oil`) > 0) {
          (0, import_kolmafia136.runChoice)(3);
          break;
        }
        if (options.has(2)) {
          (0, import_kolmafia136.runChoice)(2);
          break;
        }
        if (options.has(1)) {
          (0, import_kolmafia136.runChoice)(1);
          break;
        }
        auto_log_warning$1(
          "Got the Twin Peak NC (Lost in the Great Overlook) without able to complete any of the tasks :("
        );
        break;
      case 607:
      case 608:
      case 609:
      case 610:
      case 616:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 618:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 669:
      case 670:
      case 671:
        castleBasementChoiceHandler(choice);
        break;
      case 672:
      case 673:
      case 674:
        (0, import_kolmafia136.runChoice)(3);
        break;
      case 675:
      case 676:
      case 677:
      case 678:
      case 679:
      case 680:
        castleTopFloorChoiceHandler(choice);
        break;
      case 689:
      case 690:
      case 691:
      case 692:
      case 693:
        dailyDungeonChoiceHandler(choice, options);
        break;
      case 700:
        kolhsChoiceHandler(choice);
        break;
      case 763:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 768:
        if (in_quantumTerrarium()) {
          if ((0, import_kolmafia136.myLocation)() === $location`The Themthar Hills`) {
            (0, import_kolmafia136.runChoice)(4);
          } else if ((0, import_kolmafia136.myLevel)() < 13) {
            (0, import_kolmafia136.runChoice)(2);
          } else {
            (0, import_kolmafia136.runChoice)(6);
          }
        } else {
          (0, import_kolmafia136.runChoice)(2);
        }
        break;
      case 772:
        kolhsChoiceHandler(choice);
        break;
      case 780:
      case 781:
      case 783:
      case 784:
      case 785:
      case 786:
      case 787:
      case 788:
      case 789:
      case 791:
        hiddenCityChoiceHandler(choice);
        break;
      case 793:
        if (options.has(5) && (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("auto_considerCCSCShore"))) {
          (0, import_kolmafia136.runChoice)(5);
        } else if ((0, import_kolmafia136.myPrimestat)() === $stat`Muscle`) {
          (0, import_kolmafia136.runChoice)(1);
        } else if ((0, import_kolmafia136.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia136.runChoice)(2);
        } else {
          (0, import_kolmafia136.runChoice)(3);
        }
        break;
      case 794:
      case 795:
      case 796:
      case 797:
        oldLandfillChoiceHandler(choice);
        break;
      case 804:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 806:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 822:
      case 823:
      case 824:
      case 825:
      case 826:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 829:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 875:
        if (poolSkillPracticeGains() === 1 || currentPoolSkill() > 15) {
          (0, import_kolmafia136.runChoice)(1);
        } else {
          (0, import_kolmafia136.runChoice)(2);
        }
        break;
      case 876:
      case 877:
      case 878:
      case 879:
      case 880:
        hauntedBedroomChoiceHandler(choice, options);
        break;
      case 881:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 882:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 884:
      case 885:
      case 886:
        (0, import_kolmafia136.runChoice)(6);
        break;
      case 888:
        (0, import_kolmafia136.runChoice)(5);
        break;
      case 889:
        if ((0, import_kolmafia136.itemAmount)($item`dictionary`) === 0 && (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("auto_getDictionary"))) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(5);
        }
        break;
      case 921:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 923:
      case 924:
      case 925:
      case 926:
      case 927:
      case 928:
        blackForestChoiceHandler(choice);
        break;
      case 970:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 976:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1e3:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1001:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 1002:
        hiddenCityChoiceHandler(choice);
        break;
      case 1018:
      case 1019:
        blackForestChoiceHandler(choice);
        break;
      case 1023:
      case 1024:
        edUnderworldChoiceHandler(choice);
        break;
      case 1026:
        if ((0, import_kolmafia136.itemAmount)($item`electric boning knife`) > 0 || isActuallyEd() || in_bugbear() || in_pokefam()) {
          (0, import_kolmafia136.runChoice)(3);
        } else {
          (0, import_kolmafia136.runChoice)(2);
        }
        break;
      case 1056:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1060:
        if ((0, import_kolmafia136.itemAmount)($item`Skeleton Store office key`) === 0) {
          (0, import_kolmafia136.runChoice)(1);
        } else if (internalQuestStatus("questM23Meatsmith") < 1) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(2);
        }
        break;
      case 1061:
        if (internalQuestStatus("questM25Armorer") <= 2) {
          (0, import_kolmafia136.runChoice)(1);
        } else {
          (0, import_kolmafia136.runChoice)(5);
        }
        break;
      case 1062:
        if (options.has(6)) {
          (0, import_kolmafia136.runChoice)(6);
          if (options.has(1)) {
            (0, import_kolmafia136.runChoice)(1);
          } else {
            (0, import_kolmafia136.runChoice)(4);
          }
        }
        if (options.has(1)) {
          (0, import_kolmafia136.runChoice)(1);
        } else if ((0, import_kolmafia136.canDrink)() && options.has(5)) {
          (0, import_kolmafia136.runChoice)(5);
        } else if ((0, import_kolmafia136.canDrink)() && !is_boris()) {
          (0, import_kolmafia136.runChoice)(3);
        } else if ((0, import_kolmafia136.canEat)()) {
          (0, import_kolmafia136.runChoice)(2);
        } else {
          (0, import_kolmafia136.runChoice)(4);
        }
        break;
      case 1074:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1082:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1083:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1106:
      case 1107:
      case 1108:
        doghouseChoiceHandler(choice);
        break;
      case 1115:
        if (!(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_VYKEACafeteriaRaided"))) {
          (0, import_kolmafia136.runChoice)(1);
        } else if (!(0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_VYKEALoungeRaided"))) {
          (0, import_kolmafia136.runChoice)(4);
        } else {
          (0, import_kolmafia136.runChoice)(6);
        }
        break;
      case 1119:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1258:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 1261:
        if ((0, import_kolmafia136.myMeat)() > 1e3) {
          (0, import_kolmafia136.runChoice)(1);
        } else {
          (0, import_kolmafia136.runChoice)(4);
        }
        break;
      case 1310:
        goal = (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_auto_lobsterChoice"));
        search = "I'd like part of your regalia.";
        if (goal === 2) {
          search = "I'd like a blessing.";
        } else if (goal === 3) {
          search = "I'd like some experience.";
        }
        glchoice = 0;
        var _iterator = _createForOfIteratorHelper(
          options
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray(_step.value, 2), idx = _step$value[0], str = _step$value[1];
            if ((0, import_kolmafia136.containsText)(str, search)) {
              glchoice = idx;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia136.runChoice)(glchoice);
        break;
      case 1322:
      // The Beginning of the Neverend (The Neverending Party)
      case 1323:
      // All Done! (The Neverending Party)
      case 1324:
      // It Hasn't Ended, It's Just Paused (The Neverending Party)
      case 1325:
      // A Room With a View... Of a Bed (The Neverending Party)
      case 1326:
      // Gone Kitchin' (The Neverending Party)
      case 1327:
      // Forward to the Back (The Neverending Party)
      case 1328:
        neverendingPartyChoiceHandler(choice);
        break;
      case 1340:
        auto_log_info$1("Accepting doctor quest, it's our job!");
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1342:
        bat_reallyPickSkills(20);
        break;
      case 1391:
        koe_RationingOutDestruction();
        break;
      case 1393:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1410:
        mushroomGardenChoiceHandler(choice);
        break;
      case 1425:
      // Oh Yeah! (Cartography)
      case 1427:
      // The Hidden Junction (Cartography)
      case 1428:
      // Your Neck of the Woods (Cartography)
      case 1429:
      // No Nook Unknown (Cartography)
      case 1430:
      // Ghostly Memories (Cartography)
      case 1431:
      // Here There Be Giants (Cartography)
      case 1432:
      // Mob Maptality (Cartography)
      case 1433:
      // Sneaky, Sneaky (The Hippy Camp (Verge of War)) (Cartography)
      case 1434:
      // Sneaky, Sneaky (Orcish Frat House (Verge of War)) (Cartography)
      case 1435:
      // Leading Yourself Right to Them (Map the Monsters)
      case 1436:
        cartographyChoiceHandler(choice, page);
        break;
      case 1467:
      // Poetic Justice (Cleaver)
      case 1468:
      // Aunts not Ants (Cleaver)
      case 1469:
      // Beware of Aligator (Cleaver)
      case 1470:
      // Teacher's Pet (Cleaver)
      case 1471:
      // Lost and Found (Cleaver)
      case 1472:
      // Summer Days (Cleaver)
      case 1473:
      // Bath Time (Cleaver)
      case 1474:
      // Delicious Sprouts (Cleaver)
      case 1475:
        juneCleaverChoiceHandler(choice);
        break;
      case 1491:
        if ((0, import_kolmafia136.myPrimestat)() === $stat`Muscle`) {
          (0, import_kolmafia136.runChoice)(1);
        } else if ((0, import_kolmafia136.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia136.runChoice)(2);
        } else {
          (0, import_kolmafia136.runChoice)(3);
        }
        break;
      case 1494:
        if ((0, import_kolmafia136.myLevel)() < 8) {
          (0, import_kolmafia136.runChoice)(3);
        } else {
          (0, import_kolmafia136.runChoice)(2);
        }
        break;
      case 1497:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 1500:
        (0, import_kolmafia136.runChoice)(2);
        break;
      case 1519:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1520:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1521:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1522:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1525:
        dartChoiceHandler(choice, options);
        break;
      case 1557:
        peridotChoiceHandler(choice, page);
        break;
      case 1562:
        mobiusChoiceHandler(choice, page);
        break;
      case 1566:
        (0, import_kolmafia136.runChoice)(1);
        break;
      case 1599:
        legendaryNoodlesChoiceHandler();
        break;
      default:
        break;
    }
  }
  return true;
}
function main(choice, page) {
  var ret = false;
  try {
    ret = auto_run_choice(choice, page);
  } finally {
    if (!ret) {
      auto_log_error(
        "Error running auto_choice_adv.js, setting auto_interrupt=true"
      );
      (0, import_kolmafia136.setProperty)("auto_interrupt", true.toString());
    }
  }
}
