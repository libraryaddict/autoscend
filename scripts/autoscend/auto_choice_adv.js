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
  var _iterator = _createForOfIteratorHelper(
    data
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray(_step.value, 2), idx = _step$value[0], el = _step$value[1];
      temp.set(idx, el);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  temp = new Map(_toConsumableArray(temp.entries()).sort((a, b) => a[0] - b[0]));
  var index = 0;
  var _iterator2 = _createForOfIteratorHelper(
    temp
  ), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _step2$value = _slicedToArray(_step2.value, 2), _el = _step2$value[1];
      retval.set(index, _el);
      index = index + 1;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return retval;
}
function ListInsert(list, what) {
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
    if (zoneRank(monOpts.get(i) ?? monOpts.set(i, import_kolmafia18.Monster.none).get(i), loc) <= zoneRank(
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
    } else {
      (0, import_kolmafia18.runChoice)(4);
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
      case 772: {
        var target = (0, import_kolmafia20.toInt)((0, import_kolmafia20.getProperty)("_NC772_directive"));
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
      }
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
      $items.all()
    ), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var it = _step.value;
        if (it.inebriety > 0 && it.smallimage === "martini.gif" && (0, import_kolmafia40.isUnrestricted)(it)) {
          bondDrinksCached = ListInsert(bondDrinksCached, it);
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
  return (0, import_kolmafia44.myPath)() === $path`You, Robot`;
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
    switch (choice) {
      case 876: {
        var robot_need_mus = (0, import_kolmafia44.myPrimestat)() === $stat`Muscle` || (0, import_kolmafia44.myBasestat)($stat`Muscle`) < 62;
        if ((0, import_kolmafia44.myMeat)() < 1e3 + meatReserve() && auto_is_valid($item`old leather wallet`) && !robot_need_mus) {
          (0, import_kolmafia44.runChoice)(1);
        } else if ((0, import_kolmafia44.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia44.myPrimestat)() === $stat`Muscle`) {
          (0, import_kolmafia44.runChoice)(3);
        } else {
          (0, import_kolmafia44.runChoice)(2);
        }
        break;
      }
      case 878: {
        var robot_need_mys = (0, import_kolmafia44.myPrimestat)() === $stat`Mysticality` || (0, import_kolmafia44.myBasestat)($stat`Mysticality`) < 70;
        var needSpectacles = (0, import_kolmafia44.itemAmount)($item`Lord Spookyraven's spectacles`) === 0 && internalQuestStatus("questL11Manor") < 2;
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
      }
      case 879: {
        var options = new Map(
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
      }
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
var $_f_epicWeapons = /* @__PURE__ */ new Map(
  [
    [$class`Seal Clubber`, $item`Hammer of Smiting`],
    [$class`Turtle Tamer`, $item`Chelonian Morningstar`],
    [$class`Pastamancer`, $item`Greek Pasta Spoon of Peril`],
    [$class`Sauceror`, $item`17-alarm Saucepan`],
    [$class`Disco Bandit`, $item`Shagadelic Disco Banjo`],
    [$class`Accordion Thief`, $item`Squeezebox of the Ages`]
  ]
);
var $_f_starterWeapons = /* @__PURE__ */ new Map(
  [
    [$class`Seal Clubber`, $item`seal-clubbing club`],
    [$class`Turtle Tamer`, $item`turtle totem`],
    [$class`Pastamancer`, $item`pasta spoon`],
    [$class`Sauceror`, $item`saucepan`],
    [$class`Disco Bandit`, $item`disco ball`],
    [$class`Accordion Thief`, $item`stolen accordion`]
  ]
);

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
lowKeys.set($item`weremoose key`, $location`Cobb's Knob Menagerie, Level 2`);
lowKeys.set($item`peg key`, $location`The Obligatory Pirate's Cove`);
lowKeys.set($item`kekekey`, $location`The Valley of Rof L'm Fao`);
lowKeys.set($item`rabbit's foot key`, $location`The Dire Warren`);
lowKeys.set($item`knob shaft skate key`, $location`The Knob Shaft`);
lowKeys.set($item`ice key`, $location`The Icy Peak`);
lowKeys.set($item`anchovy can key`, $location`The Haunted Pantry`);
lowKeys.set($item`cactus key`, $location`The Arid, Extra-Dry Desert`);
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
  var target_choice;
  if ((0, import_kolmafia52.toBoolean)((0, import_kolmafia52.getProperty)("auto_forceCombatWithLegendaryNoodles"))) {
    target_choice = 2;
    (0, import_kolmafia52.setProperty)("auto_forceCombatWithLegendaryNoodles", false.toString());
  } else if (!(0, import_kolmafia52.toBoolean)(
    // or use a spleen instead of a stomach
    (0, import_kolmafia52.getProperty)("_legendaryNoodlesSpleen")
  ) && spleen_left() > 0 && !isActuallyEd()) {
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
    if (zoneRank(monOpts.get(i) ?? monOpts.set(i, import_kolmafia53.Monster.none).get(i), loc) <= zoneRank(
      monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia53.Monster.none).get(bestmon),
      loc
    )) {
      bestmon = i;
    }
    i += 1;
  }
  var popChoice = monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia53.Monster.none).get(bestmon);
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
  var pos;
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
  if (auto_canEat($item`Susie's cupcake`)) {
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
    for (var _i2 = 0, _arr = [
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
    ]; _i2 < _arr.length; _i2++) {
      var str = _arr[_i2];
      if (choiceMap.has(str)) {
        mobiusChoice(str);
        return;
      }
    }
  }
  if (auto_canEat($item`Susie's cupcake`)) {
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
      } else if (auto_canDrink($item`Dad's brandy`) && (0, import_kolmafia57.myInebriety)() < (0, import_kolmafia57.inebrietyLimit)()) {
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
      var _step6$value = _slicedToArray(_step6.value, 1), sk = _step6$value[0];
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
  } else if (!(0, import_kolmafia99.haveSkill)($skill`Okay Seriously, This is the Last Spleen`)) {
    return $skill`Okay Seriously, This is the Last Spleen`;
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
      [$skill`Okay Seriously, This is the Last Spleen`, 30],
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
        [$skill`Okay Seriously, This is the Last Spleen`, 35],
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
      }
    } else if ((0, import_kolmafia99.haveSkill)($skill`Okay Seriously, This is the Last Spleen`) && canEat_1 < 1) {
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
    case $location`1st Floor, Shiawase-Mitsuhama Building`:
      return "gunpowder";
    case $location`Hobopolis Town Square`:
      return "hobo";
    case $location`The Haunted Library`:
      return "ink";
    case $location`Wartime Hippy Camp (Frat Disguise)`:
      return "kombucha";
    case $location`The Defiled Niche`:
      return "lihc";
    case $location`The Arid, Extra-Dry Desert`:
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
var $_f_importantMonsters = import_kolmafia108.Monster.get(
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
);

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
        var _step2$value = _slicedToArray(_step2.value, 2), fam_1 = _step2$value[1];
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
  var _iterator7 = _createForOfIteratorHelper(
    res_including_noncombat
  ), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var _step7$value = _slicedToArray(_step7.value, 2), mob = _step7$value[0], freq = _step7$value[1];
      if (mob !== import_kolmafia119.Monster.none) {
        res_excluding_noncombat.set(
          mob,
          freq / (100 - noncombat_frequency) * 100
        );
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
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
function hasTorso() {
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
  var retval = baseDropRate * (100 + item_modifier) / 100;
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
      var wildfireBurnChance;
      switch ((0, import_kolmafia119.myLocation)().fireLevel) {
        case 5:
          wildfireBurnChance = 1;
          break;
        case 4:
          wildfireBurnChance = 0.768;
          break;
        case 3:
          wildfireBurnChance = 0.361;
          break;
        case 2:
          wildfireBurnChance = 0.109;
          break;
        default:
          wildfireBurnChance = 0;
          break;
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
      switch (condition_type) {
        case "class": {
          var req_class = (0, import_kolmafia119.toClass)(condition_data);
          if (req_class === import_kolmafia119.Class.none) {
            (0, import_kolmafia119.abort)(`"${condition_data}" does not properly convert to a class!`);
          }
          return req_class === (0, import_kolmafia119.myClass)();
        }
        case "mainstat": {
          var req_mainstat = (0, import_kolmafia119.toStat)(condition_data);
          if (req_mainstat === import_kolmafia119.Stat.none) {
            (0, import_kolmafia119.abort)(`"${condition_data}" does not properly convert to a stat!`);
          }
          return req_mainstat === (0, import_kolmafia119.myPrimestat)();
        }
        case "path": {
          return condition_data === (0, import_kolmafia119.myPath)().name;
        }
        case "pathid": {
          var req_pathid = (0, import_kolmafia119.toInt)(condition_data);
          if (req_pathid === 0) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a path id!`
            );
          }
          return req_pathid === (0, import_kolmafia119.myPath)().id;
        }
        case "skill": {
          var req_skill = (0, import_kolmafia119.toSkill)(condition_data);
          if (req_skill === import_kolmafia119.Skill.none) {
            (0, import_kolmafia119.abort)(`"${condition_data}" does not properly convert to a skill!`);
          }
          return auto_have_skill(req_skill);
        }
        case "effect": {
          var req_effect = (0, import_kolmafia119.toEffect)(condition_data);
          if (req_effect === import_kolmafia119.Effect.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to an effect!`
            );
          }
          return (0, import_kolmafia119.haveEffect)(req_effect) > 0;
        }
        case "item": {
          var m5 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m5.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          var req_item = (0, import_kolmafia119.toItem)(m5.group(1));
          if (req_item === import_kolmafia119.Item.none) {
            (0, import_kolmafia119.abort)(`"${m5.group(1)}" does not properly convert to an item!`);
          }
          return compare_numbers(
            (0, import_kolmafia119.itemAmount)(req_item) + (0, import_kolmafia119.equippedAmount)(req_item),
            (0, import_kolmafia119.toInt)(m5.group(3)),
            m5.group(2)
          );
        }
        case "itemdropcapped": {
          var m7 = new AshMatcher(
            "([^=<>]+)=(.+)",
            condition_data
          );
          if (!m7.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          var todrop_item = (0, import_kolmafia119.toItem)(m7.group(2));
          var base_drop_chance = (0, import_kolmafia119.toFloat)(m7.group(1));
          if (todrop_item === import_kolmafia119.Item.none) {
            (0, import_kolmafia119.abort)(`"${m7.group(1)}" does not properly convert to an item!`);
          }
          return effectiveDropChance(todrop_item, base_drop_chance) >= 100;
        }
        case "outfit":
          return (0, import_kolmafia119.haveOutfit)(condition_data);
        case "familiar": {
          var req_familiar = (0, import_kolmafia119.toFamiliar)(condition_data);
          if (req_familiar === import_kolmafia119.Familiar.none && condition_data !== "none") {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return (0, import_kolmafia119.myFamiliar)() === req_familiar;
        }
        case "havefamiliar": {
          var havefamiliar = (0, import_kolmafia119.toFamiliar)(condition_data);
          if (havefamiliar === import_kolmafia119.Familiar.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return auto_have_familiar(havefamiliar);
        }
        case "loc": {
          var req_loc = (0, import_kolmafia119.toLocation)(condition_data);
          if (req_loc === import_kolmafia119.Location.none) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" does not properly convert to a location!`
            );
          }
          return (0, import_kolmafia119.myLocation)() === req_loc;
        }
        case "turnsspent": {
          var m6 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m6.find()) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" is not a proper turnsspent condition format!`
            );
          }
          var loc = (0, import_kolmafia119.toLocation)(m6.group(1));
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
        }
        case "prop": {
          var m22 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m22.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper prop condition format!`);
          }
          var prop = (0, import_kolmafia119.getProperty)(m22.group(1));
          if (!["=", "=="].includes(m22.group(2))) {
            return compare_numbers(
              (0, import_kolmafia119.toInt)(prop),
              (0, import_kolmafia119.toInt)(m22.group(3)),
              m22.group(2)
            );
          }
          return prop === m22.group(3);
        }
        case "prop_boolean":
          return (0, import_kolmafia119.toBoolean)((0, import_kolmafia119.getProperty)(condition_data));
        case "quest": {
          var m3 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m3.find()) {
            (0, import_kolmafia119.abort)(
              `"${condition_data}" is not a proper quest condition format!`
            );
          }
          var quest_state = internalQuestStatus(m3.group(1));
          var compare_to = (0, import_kolmafia119.toInt)(m3.group(3));
          return compare_numbers(quest_state, compare_to, m3.group(2));
        }
        case "sniffed": {
          var check_sniffed = (0, import_kolmafia119.toMonster)(condition_data);
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
        }
        case "expectghostreport":
          return expectGhostReport();
        case "latte":
          return auto_latteDropAvailable((0, import_kolmafia119.myLocation)());
        case "tavern":
          return (0, import_kolmafia119.toInt)((0, import_kolmafia119.getProperty)("hiddenTavernUnlock")) >= (0, import_kolmafia119.myAscensions)();
        case "sgeea": {
          var sgeeas = (0, import_kolmafia119.toInt)(condition_data);
          return (0, import_kolmafia119.itemAmount)($item`soft green echo eyedrop antidote`) >= sgeeas;
        }
        case "day": {
          var day = (0, import_kolmafia119.toInt)(condition_data);
          return (0, import_kolmafia119.myDaycount)() === day;
        }
        case "ML": {
          var m4 = new AshMatcher("([=<>]+)(.+)", condition_data);
          if (!m4.find()) {
            (0, import_kolmafia119.abort)(`"${condition_data}" is not a proper ML condition format!`);
          }
          return compare_numbers(
            (0, import_kolmafia119.monsterLevelAdjustment)(),
            (0, import_kolmafia119.toInt)(m4.group(2)),
            m4.group(1)
          );
        }
        case "consume": {
          switch (condition_data) {
            case "eat":
              return fullness_left() > 0;
            case "drink":
              return inebriety_left() > 0;
            case "chew":
              return spleen_left() > 0;
            default: {
              (0, import_kolmafia119.abort)(`Invalid consume type "${condition_type}" found!`);
            }
          }
          break;
        }
        default:
          (0, import_kolmafia119.abort)(`Invalid condition type "${condition_type}" found!`);
      }
    }
  }
  var _iterator49 = _createForOfIteratorHelper(
    conditions
  ), _step49;
  try {
    for (_iterator49.s(); !(_step49 = _iterator49.n()).done; ) {
      var _step49$value = _slicedToArray(_step49.value, 2), cond = _step49$value[1];
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
    _iterator49.e(err);
  } finally {
    _iterator49.f();
  }
  return true;
}
function auto_getMonsters(category) {
  var res = /* @__PURE__ */ new Map();
  var monsters_text = fileAsMap("autoscend_monsters.txt", [String, Number, String, String]);
  if (!monsters_text.size) {
    auto_log_error("Could not load autoscend_monsters.txt. This is bad!");
  }
  var _iterator50 = _createForOfIteratorHelper(
    monsters_text.get(category) ?? monsters_text.set(category, /* @__PURE__ */ new Map()).get(category)
  ), _step50;
  try {
    for (_iterator50.s(); !(_step50 = _iterator50.n()).done; ) {
      var _step50$value = _slicedToArray(_step50.value, 2), _v0 = _step50$value[1];
      var _iterator51 = _createForOfIteratorHelper(
        _v0
      ), _step51;
      try {
        for (_iterator51.s(); !(_step51 = _iterator51.n()).done; ) {
          var _step51$value = _slicedToArray(_step51.value, 2), name = _step51$value[0], _v1 = _step51$value[1];
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
        _iterator51.e(err);
      } finally {
        _iterator51.f();
      }
    }
  } catch (err) {
    _iterator50.e(err);
  } finally {
    _iterator50.f();
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
function zoneRank(mon, loc) {
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
  var _iterator69 = _createForOfIteratorHelper(
    $items`January's Garbage Tote, astral shirt, shoe ad T-shirt, fresh coat of paint, tunac, Jurassic Parka, hairshirt, futuristic shirt`
  ), _step69;
  try {
    for (_iterator69.s(); !(_step69 = _iterator69.n()).done; ) {
      var it = _step69.value;
      var w_it = wrap_item(it);
      if ((0, import_kolmafia119.itemAmount)(w_it) !== 0 && (0, import_kolmafia119.isUnrestricted)(w_it)) {
        amtUsefulShirts += 1;
      }
    }
  } catch (err) {
    _iterator69.e(err);
  } finally {
    _iterator69.f();
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
  if (!hasTorso() && hasUsefulShirt() && !(0, import_kolmafia119.gnomadsAvailable)() && inGnomeSign()) {
    reserve_extra += (0, import_kolmafia119.toInt)(5e3 * npcStoreDiscountMulti());
  }
  if (!hasTorso() && (0, import_kolmafia119.gnomadsAvailable)() && hasUsefulShirt()) {
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
function auto_reagnimatedGetPart() {
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
function auto_canDrink(toDrink) {
  var checkValidity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
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
        var _step$value = _slicedToArray(_step.value, 2), it = _step$value[1];
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
function auto_canEat(toEat) {
  var checkValidity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
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
      var _step22$value = _slicedToArray(_step22.value, 2), piece = _step22$value[1];
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
        auto_reagnimatedGetPart();
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
      case 1310: {
        var goal = (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("_auto_lobsterChoice"));
        var search = "I'd like part of your regalia.";
        if (goal === 2) {
          search = "I'd like a blessing.";
        } else if (goal === 3) {
          search = "I'd like some experience.";
        }
        var glchoice = 0;
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
      }
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
