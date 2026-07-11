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

// src/relay_autoscend.ts
var relay_autoscend_exports = {};
__export(relay_autoscend_exports, {
  main: () => main
});
module.exports = __toCommonJS(relay_autoscend_exports);

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
    s: function s2() {
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

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// src/relay_autoscend.ts
var import_kolmafia137 = require("kolmafia");

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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

// node_modules/libram/dist/property.js
var import_kolmafia = require("kolmafia");

// node_modules/libram/dist/propertyTypes.js
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "retryFailedNetworkRequests", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasShrunkenHead", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "heartstoneBanishUnlocked", "heartstoneBuffUnlocked", "heartstoneKillUnlocked", "heartstoneLuckUnlocked", "heartstonePalsUnlocked", "heartstoneStunUnlocked", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_clanRumpusSpot1Visited", "_clanRumpusSpot2Visited", "_clanRumpusSpot3Visited", "_clanRumpusSpot4Visited", "_clanRumpusSpot5Visited", "_clanRumpusSpot7Visited", "_clanRumpusSpot9Visited", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboPastDailySpecial", "_crimboPastMedicalGruel", "_crimboPastPrizeTurkey", "_crimboPastSmokingPope", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_eleventRestEffectGained", "_elfGuardHangoverCureUsed", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_faradayCageRestEffectGained", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_flagellateFlagonUsed", "_fleekMascaraUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_giantGnawingBoneUsed", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadHouseRestEffectGained", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_heartstoneLuckUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_legendaryNoodlesSpleen", "_legendaryPastaWaveCast", "_legendarySpiceGhostFood", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_miniKiwiTipiDrop", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_mobiusRingPrimed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_mushroomHouseRestEffectGained", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_porkElfMedicineCabinetUsed", "_porkElfNetiPotUsed", "_porkElfSinkUsed", "_porkElfToiletriesKitUsed", "_porkElfToiletUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_pumpkinRestEffectGained", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_residenceCubeRestEffectGained", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_snowFortRestEffectGained", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "adventurerMeatsWorldPoints", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "clubEmNextWeekMonsterTurn", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "handfulOfTipsMeat", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastKOLHSArtClassUnlockAdventure", "lastKOLHSChemClassUnlockAdventure", "lastKOLHSShopClassUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "legendaryNoodlesAmygdala", "legendaryNoodlesSkin", "legendaryNoodlesStomach", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "mechanicalSongbirdProgress", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "tryToRememberCharges", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_archSpadeDigs", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_baseballInnings", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_clubEmBattlefieldUsed", "_clubEmNextWeekUsed", "_clubEmTimeUsed", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_crimboPastDailySpecialPrice", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fitnessTrackingSteps", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_heartstoneBanishUsed", "_heartstoneBuffUsed", "_heartstoneKillUsed", "_heartstonePalsUsed", "_heartstoneStunUsed", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hoboFortRestEffectsGained", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_knuckleboneDrops", "_knuckleboneRests", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legendaryLasagmbieMana", "_legendaryVermincelliFreeRats", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_meatCuteUsed", "_meatLoafUsed", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusRingPrimedTurn", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_pyramidRestEffectsGained", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smolderingSkeletonsDefeated", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_swordOfSWordsKills", "_swordOfSWordsMonsterChanged", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_wandOfPigificationUsed", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"];
var monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clubEmNextWeekMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "swordOfSWordsMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_beanballMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_curveballMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_screwballMonster", "_skullballMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var monsterNumericProperties = ["swordOfSWordsMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "baseballTeam", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "flagellateFlagonsActive", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "heartstoneAttunementMods", "heartstoneAttunementWord", "heartstoneLetters", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "stockCertificateTurns", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_curveballFightsLeft", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_seadentWaveZone", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550", "choiceAdventure1591"];
var familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
var itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "eweItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "walfordBucketItem", "_cookbookbatQuestIngredient", "_crimboPastDailySpecialItem", "_dailySpecial", "_pirateRealmCurio"];
var itemNumericProperties = ["daycareInstructorItem", "_crimboPastDailySpecialItem"];

// node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
var itemPropertiesSet = new Set(itemProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
var createPropertyGetter = (transform) => (property, default_) => {
  var value = (0, import_kolmafia.getProperty)(property);
  if (default_ !== void 0 && value === "") {
    return default_;
  }
  return transform(value, property);
};
function createMafiaClassPropertyGetter(Type, toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  return createPropertyGetter((value, property) => {
    if (value === "")
      return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter((value) => value);
var getCommaSeparated = createPropertyGetter((value) => value.split(/, ?/));
var getBoolean = createPropertyGetter((value) => value === "true");
var getNumber = createPropertyGetter((value) => Number(value));
var getBounty = createMafiaClassPropertyGetter(import_kolmafia.Bounty, import_kolmafia.toBounty);
var getClass = createMafiaClassPropertyGetter(import_kolmafia.Class, import_kolmafia.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(import_kolmafia.Effect, import_kolmafia.toEffect);
var getElement = createMafiaClassPropertyGetter(import_kolmafia.Element, import_kolmafia.toElement);
var getFamiliar = createMafiaClassPropertyGetter(import_kolmafia.Familiar, import_kolmafia.toFamiliar, familiarNumericProperties);
var getItem = createMafiaClassPropertyGetter(import_kolmafia.Item, import_kolmafia.toItem, itemNumericProperties);
var getLocation = createMafiaClassPropertyGetter(import_kolmafia.Location, import_kolmafia.toLocation);
var getMonster = createMafiaClassPropertyGetter(import_kolmafia.Monster, import_kolmafia.toMonster, monsterNumericProperties);
var getPhylum = createMafiaClassPropertyGetter(import_kolmafia.Phylum, import_kolmafia.toPhylum);
var getServant = createMafiaClassPropertyGetter(import_kolmafia.Servant, import_kolmafia.toServant);
var getSkill = createMafiaClassPropertyGetter(import_kolmafia.Skill, import_kolmafia.toSkill);
var getSlot = createMafiaClassPropertyGetter(import_kolmafia.Slot, import_kolmafia.toSlot);
var getStat = createMafiaClassPropertyGetter(import_kolmafia.Stat, import_kolmafia.toStat);
var getThrall = createMafiaClassPropertyGetter(import_kolmafia.Thrall, import_kolmafia.toThrall);
function get(property, _default) {
  var value = getString(property);
  if (isBooleanProperty(property)) {
    return getBoolean(property, _default) ?? false;
  } else if (isNumericProperty(property)) {
    return getNumber(property, _default) ?? 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isItemProperty(property)) {
    return getItem(property, _default);
  } else if (isStringProperty(property)) {
    return value === "" && _default !== void 0 ? _default : value;
  }
  if (_default instanceof import_kolmafia.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof import_kolmafia.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof import_kolmafia.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof import_kolmafia.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof import_kolmafia.Phylum) {
    return getPhylum(property, _default);
  } else if (_default instanceof import_kolmafia.Item) {
    return getItem(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === void 0 ? "" : _default;
  } else {
    return value;
  }
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, import_kolmafia.setProperty)(property, stringValue);
  return value;
}
var PropertiesManager = /* @__PURE__ */ (function() {
  function PropertiesManager2() {
    _classCallCheck(this, PropertiesManager2);
    _defineProperty(
      this,
      "properties",
      {}
    );
  }
  return _createClass(PropertiesManager2, [{
    key: "storedValues",
    get: function get2() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = (0, import_kolmafia.propertyExists)(propertyName) ? get(propertyName) : PropertiesManager2.EMPTY_PREFERENCE;
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(
        (_ref5) => {
          var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
          return [
            `choiceAdventure${choiceNumber}`,
            choiceValue
          ];
        }
      )));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices({ [choiceToSet]: value });
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties))
          continue;
        var value = this.properties[property];
        if (value === PropertiesManager2.EMPTY_PREFERENCE) {
          (0, import_kolmafia.removeProperty)(property);
        } else {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      this.reset.apply(this, _toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property, 0) < value) {
        this.set({ [property]: value });
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property, 0) > value) {
        this.set({ [property]: value });
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager2();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min36, max25) {
      if (max25 < min36)
        return false;
      var start = get(property);
      this.setMinimumValue(property, min36);
      this.setMaximumValue(property, max25);
      return start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size)
        return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager2();
      newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{ key: "merge", value: function merge() {
    for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      mergees[_key3] = arguments[_key3];
    }
    if (mergees.length === 0)
      return new PropertiesManager2();
    return mergees.reduce((a, b) => a.merge(b));
  } }]);
})();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", /* @__PURE__ */ Symbol("empty preference"));

// node_modules/libram/dist/template-string.js
var import_kolmafia2 = require("kolmafia");

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
    (0, import_kolmafia2.print)(`${match[0]}; if you're certain that this ${Type.name} exists and is spelled correctly, please update KoLMafia`, "red");
  } else {
    (0, import_kolmafia2.print)(message);
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
    (0, import_kolmafia2.abort)();
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
    (0, import_kolmafia2.abort)();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
var $bounty = createSingleConstant(import_kolmafia2.Bounty, import_kolmafia2.toBounty);
var $bounties = createPluralConstant(import_kolmafia2.Bounty);
var $class = createSingleConstant(import_kolmafia2.Class, import_kolmafia2.toClass);
var $classes = createPluralConstant(import_kolmafia2.Class);
var $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster, import_kolmafia2.toCoinmaster);
var $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster);
var $effect = createSingleConstant(import_kolmafia2.Effect, import_kolmafia2.toEffect);
var $effects = createPluralConstant(import_kolmafia2.Effect);
var $element = createSingleConstant(import_kolmafia2.Element, import_kolmafia2.toElement);
var $elements = createPluralConstant(import_kolmafia2.Element);
var $familiar = createSingleConstant(import_kolmafia2.Familiar, import_kolmafia2.toFamiliar);
var $familiars = createPluralConstant(import_kolmafia2.Familiar);
var $item = createSingleConstant(import_kolmafia2.Item, import_kolmafia2.toItem);
var $items = createPluralConstant(import_kolmafia2.Item);
var $location = createSingleConstant(import_kolmafia2.Location, import_kolmafia2.toLocation);
var $locations = createPluralConstant(import_kolmafia2.Location);
var $modifier = createSingleConstant(import_kolmafia2.Modifier, import_kolmafia2.toModifier);
var $modifiers = createPluralConstant(import_kolmafia2.Modifier);
var $monster = createSingleConstant(import_kolmafia2.Monster, import_kolmafia2.toMonster);
var $monsters = createPluralConstant(import_kolmafia2.Monster);
var $path = createSingleConstant(import_kolmafia2.Path, import_kolmafia2.toPath);
var $paths = createPluralConstant(import_kolmafia2.Path);
var $phylum = createSingleConstant(import_kolmafia2.Phylum, import_kolmafia2.toPhylum);
var $phyla = createPluralConstant(import_kolmafia2.Phylum);
var $servant = createSingleConstant(import_kolmafia2.Servant, import_kolmafia2.toServant);
var $servants = createPluralConstant(import_kolmafia2.Servant);
var $skill = createSingleConstant(import_kolmafia2.Skill, import_kolmafia2.toSkill);
var $skills = createPluralConstant(import_kolmafia2.Skill);
var $slot = createSingleConstant(import_kolmafia2.Slot, import_kolmafia2.toSlot);
var $slots = createPluralConstant(import_kolmafia2.Slot);
var $stat = createSingleConstant(import_kolmafia2.Stat, import_kolmafia2.toStat);
var $stats = createPluralConstant(import_kolmafia2.Stat);
var $thrall = createSingleConstant(import_kolmafia2.Thrall, import_kolmafia2.toThrall);
var $thralls = createPluralConstant(import_kolmafia2.Thrall);

// src/autoscend.ts
var import_kolmafia136 = require("kolmafia");

// src/autoscend/auto_acquire.ts
var import_kolmafia124 = require("kolmafia");

// src/autoscend/auto_consume.ts
var import_kolmafia123 = require("kolmafia");

// src/autoscend/auto_buff.ts
var import_kolmafia122 = require("kolmafia");

// src/autoscend/auto_adventure.ts
var import_kolmafia121 = require("kolmafia");

// src/autoscend/auto_util.ts
var import_kolmafia120 = require("kolmafia");

// src/autoscend/auto_equipment.ts
var import_kolmafia115 = require("kolmafia");

// src/autoscend/auto_familiar.ts
var import_kolmafia114 = require("kolmafia");

// src/autoscend/iotms/mr2014.ts
var import_kolmafia113 = require("kolmafia");

// src/autoscend/auto_powerlevel.ts
var import_kolmafia112 = require("kolmafia");

// src/autoscend/auto_providers.ts
var import_kolmafia111 = require("kolmafia");

// src/autoscend/auto_restore.ts
var import_kolmafia109 = require("kolmafia");

// src/autoscend/iotms/clan.ts
var import_kolmafia108 = require("kolmafia");

// src/autoscend/paths/avatar_of_boris.ts
var import_kolmafia4 = require("kolmafia");

// src/autoscend/utils/kolmafiaUtils.ts
var import_kolmafia3 = require("kolmafia");
var CtorLeaf = /* @__PURE__ */ _createClass(
  function CtorLeaf2(ctor2) {
    _classCallCheck(this, CtorLeaf2);
    this.ctor = ctor2;
  }
);
function ctor(target) {
  return new CtorLeaf(target);
}
function fileAsMap(filename, schema) {
  var depth = schema.length - 1;
  var root = /* @__PURE__ */ new Map();
  var _iterator = _createForOfIteratorHelper(
    (0, import_kolmafia3.fileToBuffer)(filename).split(/\r?\n/)
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
  return (0, import_kolmafia4.myPath)() === $path`Avatar of Boris`;
}
function boris_initializeSettings() {
  if (is_boris()) {
    auto_log_info("Initializing Avatar of Boris settings", "blue");
    (0, import_kolmafia4.setProperty)("auto_borisSkills", (-1).toString());
    (0, import_kolmafia4.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia4.visitUrl)("storage.php?action=pull&whichitem1=5648&howmany1=1&pwd");
    (0, import_kolmafia4.visitUrl)("storage.php?action=pull&whichitem1=5650&howmany1=1&pwd");
  }
}

// src/autoscend/paths/avatar_of_jarlsberg.ts
var import_kolmafia5 = require("kolmafia");
function is_jarlsberg() {
  return (0, import_kolmafia5.myPath)() === $path`Avatar of Jarlsberg`;
}
function jarlsberg_initializeSettings() {
  if (is_jarlsberg()) {
    auto_log_info("Initializing Avatar of Jarlsberg settings", "blue");
    (0, import_kolmafia5.setProperty)("auto_wandOfNagamar", false.toString());
  }
}

// src/autoscend/paths/avatar_of_sneaky_pete.ts
var import_kolmafia6 = require("kolmafia");
function is_pete() {
  return (0, import_kolmafia6.myPath)() === $path`Avatar of Sneaky Pete`;
}
function pete_initializeSettings() {
  if (is_pete()) {
    (0, import_kolmafia6.setProperty)("auto_peteSkills", (-1).toString());
    (0, import_kolmafia6.setProperty)("auto_wandOfNagamar", false.toString());
  }
}

// src/autoscend/paths/casual.ts
var import_kolmafia107 = require("kolmafia");

// src/autoscend/quests/level_08.ts
var import_kolmafia106 = require("kolmafia");

// src/autoscend/auto_routing.ts
var import_kolmafia105 = require("kolmafia");

// src/autoscend/auto_zone.ts
var import_kolmafia104 = require("kolmafia");

// src/autoscend/autoscend_record.ts
var import_kolmafia7 = require("kolmafia");

// src/autoscend/iotms/mr2016.ts
var import_kolmafia103 = require("kolmafia");

// src/autoscend/auto_list.ts
var import_kolmafia8 = require("kolmafia");

// src/autoscend/paths/gelatinous_noob.ts
var import_kolmafia10 = require("kolmafia");

// src/autoscend/iotms/mr2011.ts
var import_kolmafia9 = require("kolmafia");

// src/autoscend/paths/kingdom_of_exploathing.ts
var import_kolmafia102 = require("kolmafia");

// src/autoscend/iotms/mr2019.ts
var import_kolmafia101 = require("kolmafia");

// src/autoscend/paths/actually_ed_the_undying.ts
var import_kolmafia100 = require("kolmafia");

// src/autoscend/iotms/elementalPlanes.ts
var import_kolmafia11 = require("kolmafia");

// src/autoscend/iotms/mr2015.ts
var import_kolmafia98 = require("kolmafia");

// src/autoscend/paths/avatar_of_west_of_loathing.ts
var import_kolmafia12 = require("kolmafia");
function in_awol() {
  return (0, import_kolmafia12.myPath)() === $path`Avatar of West of Loathing`;
}
function awol_initializeSettings() {
  if (in_awol()) {
    (0, import_kolmafia12.setProperty)("auto_awolLastSkill", 0 .toString());
    (0, import_kolmafia12.setProperty)("auto_getBeehive", true.toString());
  }
  return false;
}

// src/autoscend/paths/heavy_rains.ts
var import_kolmafia13 = require("kolmafia");
function in_heavyrains() {
  return (0, import_kolmafia13.myPath)() === $path`Heavy Rains`;
}
function heavyrains_initializeSettings() {
  if (in_heavyrains()) {
    (0, import_kolmafia13.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia13.setProperty)("auto_mountainmen", "");
    (0, import_kolmafia13.setProperty)("auto_ninjasnowmanassassin", false.toString());
    (0, import_kolmafia13.setProperty)("auto_orcishfratboyspy", "");
    (0, import_kolmafia13.setProperty)("auto_warhippyspy", "");
    (0, import_kolmafia13.setProperty)("auto_lastthunder", "100");
    (0, import_kolmafia13.setProperty)("auto_lastthunderturn", "0");
    (0, import_kolmafia13.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia13.setProperty)("auto_writingDeskSummon", true.toString());
    (0, import_kolmafia13.setProperty)("auto_day1_desk", "");
    (0, import_kolmafia13.setProperty)("auto_day1_skills", "");
  }
}

// src/autoscend/paths/legacy_of_loathing.ts
var import_kolmafia97 = require("kolmafia");

// src/autoscend/iotms/mr2023.ts
var import_kolmafia96 = require("kolmafia");

// src/autoscend/combat/auto_combat_util.ts
var import_kolmafia95 = require("kolmafia");

// src/autoscend/iotms/mr2017.ts
var import_kolmafia94 = require("kolmafia");

// src/autoscend/paths/dark_gyffte.ts
var import_kolmafia93 = require("kolmafia");

// src/autoscend/quests/level_12.ts
var import_kolmafia92 = require("kolmafia");

// src/autoscend/combat/auto_combat_quest.ts
var import_kolmafia90 = require("kolmafia");

// src/autoscend/paths/fall_of_the_dinosaurs.ts
var import_kolmafia14 = require("kolmafia");
function in_fotd() {
  return (0, import_kolmafia14.myPath)() === $path`Fall of the Dinosaurs`;
}
function fotd_initializeSettings() {
  if (in_fotd()) {
    (0, import_kolmafia14.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia14.setProperty)("auto_getBoningKnife", false.toString());
    (0, import_kolmafia14.setProperty)("auto_wandOfNagamar", false.toString());
  }
}

// src/autoscend/paths/g_lover.ts
var import_kolmafia15 = require("kolmafia");
function in_glover() {
  return (0, import_kolmafia15.myPath)() === $path`G-Lover`;
}
function glover_initializeSettings() {
  if (in_glover()) {
    (0, import_kolmafia15.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia15.setProperty)("auto_getBoningKnife", true.toString());
    (0, import_kolmafia15.setProperty)("auto_dakotaFanning", true.toString());
    (0, import_kolmafia15.setProperty)("auto_ignoreFlyer", true.toString());
    (0, import_kolmafia15.setProperty)(
      "gnasirProgress",
      ((0, import_kolmafia15.toInt)((0, import_kolmafia15.getProperty)("gnasirProgress")) | 16).toString()
    );
    if ((0, import_kolmafia15.itemAmount)($item`crude oil congealer`) === 0 && (0, import_kolmafia15.itemAmount)($item`G`) > 0) {
      (0, import_kolmafia15.cliExecute)(`make ${$item`crude oil congealer`}`);
    }
    while ((0, import_kolmafia15.itemAmount)($item`A-Boo glue`) < 3 && (0, import_kolmafia15.itemAmount)($item`G`) > 0) {
      (0, import_kolmafia15.cliExecute)(`make ${$item`A-Boo glue`}`);
    }
  }
}
function glover_usable(it) {
  if (!in_glover()) {
    return true;
  }
  if ((0, import_kolmafia15.containsText)(it, "g")) {
    return true;
  }
  if ((0, import_kolmafia15.containsText)(it, "G")) {
    return true;
  }
  var checkItem = (0, import_kolmafia15.toItem)(it);
  if (checkItem !== import_kolmafia15.Item.none && import_kolmafia15.Item.get(
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
var import_kolmafia88 = require("kolmafia");

// src/autoscend/paths/avant_guard.ts
var import_kolmafia64 = require("kolmafia");

// src/autoscend/iotms/mr2024.ts
var import_kolmafia63 = require("kolmafia");

// src/c2t_apron.ts
var import_kolmafia16 = require("kolmafia");

// src/c2t_megg.ts
var import_kolmafia17 = require("kolmafia");
var c2t_megg_oldFam = import_kolmafia17.Familiar.none;
var c2t_megg_oldEq = import_kolmafia17.Item.none;

// src/autoscend/paths/adventurer_meats_world.ts
var import_kolmafia62 = require("kolmafia");

// src/autoscend/iotms/mr2025.ts
var import_kolmafia61 = require("kolmafia");

// src/autoscend/paths/hattrick.ts
var import_kolmafia18 = require("kolmafia");

// src/autoscend/paths/zootomist.ts
var import_kolmafia60 = require("kolmafia");

// src/autoscend/iotms/mr2022.ts
var import_kolmafia59 = require("kolmafia");

// src/autoscend/paths/path_of_the_plumber.ts
var import_kolmafia19 = require("kolmafia");
function in_plumber() {
  return (0, import_kolmafia19.myPath)() === $path`Path of the Plumber`;
}
function plumber_initializeSettings() {
  if (in_plumber()) {
    (0, import_kolmafia19.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia19.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia19.setProperty)("auto_paranoia", 1 .toString());
  }
  return false;
}

// src/autoscend/paths/pocket_familiars.ts
var import_kolmafia20 = require("kolmafia");
function in_pokefam() {
  return (0, import_kolmafia20.myPath)() === $path`Pocket Familiars`;
}
function pokefam_initializeSettings() {
  if (in_pokefam()) {
    (0, import_kolmafia20.setProperty)("auto_ignoreRestoreFailure", true.toString());
    (0, import_kolmafia20.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia20.setProperty)("auto_ignoreFlyer", true.toString());
    (0, import_kolmafia20.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia20.setProperty)("auto_runDayCount", 3 .toString());
  }
}

// src/autoscend/paths/small.ts
var import_kolmafia21 = require("kolmafia");
function in_small() {
  return (0, import_kolmafia21.myPath)() === $path`A Shrunken Adventurer am I`;
}
function small_initializeSettings() {
  if (!in_small()) {
    return;
  }
  (0, import_kolmafia21.setProperty)("auto_wandOfNagamar", true.toString());
  (0, import_kolmafia21.setProperty)("auto_getBeehive", true.toString());
  (0, import_kolmafia21.setProperty)("auto_getBoningKnife", true.toString());
  (0, import_kolmafia21.setProperty)("auto_getSteelOrgan", false.toString());
  if ((0, import_kolmafia21.inHardcore)()) {
    var MLCap = 50;
    var MLSafetyLimit = (0, import_kolmafia21.getProperty)("auto_MLSafetyLimit");
    if (MLSafetyLimit === "") {
      (0, import_kolmafia21.setProperty)("auto_MLSafetyLimitBackup", "empty");
      (0, import_kolmafia21.setProperty)("auto_MLSafetyLimit", MLCap.toString());
    }
    if ((0, import_kolmafia21.toInt)(MLSafetyLimit) > MLCap) {
      (0, import_kolmafia21.setProperty)("auto_MLSafetyLimitBackup", MLSafetyLimit);
      (0, import_kolmafia21.setProperty)("auto_MLSafetyLimit", MLCap.toString());
    }
    var disregardKarma = (0, import_kolmafia21.getProperty)("auto_disregardInstantKarma");
    if (disregardKarma === "true") {
      (0, import_kolmafia21.setProperty)("auto_disregardInstantKarmaBackup", "true");
      (0, import_kolmafia21.setProperty)("auto_disregardInstantKarma", "false");
    }
  } else {
    if (auto_have_familiar($familiar`Cookbookbat`) && (canPull$1($item`Calzone of Legend`) || canPull$1($item`Deep Dish of Legend`) || canPull$1($item`Pizza of Legend`))) {
      (0, import_kolmafia21.setProperty)("auto_dontUseCookBookBat", true.toString());
    }
  }
}

// src/autoscend/paths/two_crazy_random_summer.ts
var import_kolmafia22 = require("kolmafia");

// src/autoscend/paths/wereprofessor.ts
var import_kolmafia23 = require("kolmafia");
function in_wereprof() {
  return (0, import_kolmafia23.myPath)() === $path`WereProfessor`;
}
function wereprof_initializeSettings() {
  if (!in_wereprof()) {
    return;
  }
  (0, import_kolmafia23.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia23.setProperty)("auto_dontPhylumBanish", true.toString());
  (0, import_kolmafia23.cliExecute)("wereprofessor research");
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
var import_kolmafia58 = require("kolmafia");

// src/autoscend/iotms/mr2018.ts
var import_kolmafia57 = require("kolmafia");

// src/autoscend/paths/bees_hate_you.ts
var import_kolmafia24 = require("kolmafia");
function in_bhy() {
  return (0, import_kolmafia24.myPath)() === $path`Bees Hate You`;
}
function bhy_initializeSettings() {
  if (in_bhy()) {
    (0, import_kolmafia24.setProperty)("auto_abooclover", false.toString());
    (0, import_kolmafia24.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia24.setProperty)("auto_hippyInstead", true.toString());
    (0, import_kolmafia24.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia24.setProperty)("auto_getBoningKnife", true.toString());
    (0, import_kolmafia24.setProperty)("auto_ignoreFlyer", true.toString());
  }
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
  if ((0, import_kolmafia24.containsText)(str, "b")) {
    return false;
  }
  if ((0, import_kolmafia24.containsText)(str, "B")) {
    return false;
  }
  return true;
}
function bhy_is_item_valid(it) {
  if (!in_bhy()) {
    (0, import_kolmafia24.abort)(
      "bhy_is_item_valid(item it) should never be called outside of bees hate you path."
    );
  }
  if ((0, import_kolmafia24.toSlot)(it) !== import_kolmafia24.Slot.none) {
    return (0, import_kolmafia24.isUnrestricted)(it);
  }
  if ($items`Cobb's Knob map, enchanted bean, ball polish, black market map, boring binder clip, beehive, electric boning knife`.includes(
    it
  )) {
    return true;
  }
  return bhy_usable(it.toString()) && (0, import_kolmafia24.isUnrestricted)(it);
}

// src/autoscend/paths/disguises_delimit.ts
var import_kolmafia25 = require("kolmafia");
function in_disguises() {
  return (0, import_kolmafia25.myPath)() === $path`Disguises Delimit`;
}
function disguises_initializeSettings() {
  if (in_disguises()) {
    (0, import_kolmafia25.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia25.setProperty)("auto_getBoningKnife", true.toString());
  }
}

// src/autoscend/paths/one_crazy_random_summer.ts
var import_kolmafia26 = require("kolmafia");
function in_ocrs() {
  return (0, import_kolmafia26.myPath)() === $path`One Crazy Random Summer`;
}

// src/autoscend/paths/quantum_terrarium.ts
var import_kolmafia56 = require("kolmafia");

// src/autoscend/quests/level_11.ts
var import_kolmafia55 = require("kolmafia");

// src/autoscend/iotms/mr2020.ts
var import_kolmafia27 = require("kolmafia");
function auto_hasPowerfulGlove() {
  return possessEquipment($item`Powerful Glove`) && auto_is_valid($item`mint-in-box Powerful Glove`);
}

// src/autoscend/iotms/mr2026.ts
var import_kolmafia28 = require("kolmafia");

// src/autoscend/paths/avatar_of_shadows_over_loathing.ts
var import_kolmafia29 = require("kolmafia");
function in_aosol() {
  return (0, import_kolmafia29.myPath)() === $path`Avatar of Shadows Over Loathing`;
}
function aosol_initializeSettings() {
  if (in_aosol()) {
    (0, import_kolmafia29.setProperty)("auto_aosolLastSkill", 0 .toString());
    (0, import_kolmafia29.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia29.setProperty)("auto_aosol_dontUnCurse", true.toString());
  }
  return false;
}

// src/autoscend/paths/live_ascend_repeat.ts
var import_kolmafia30 = require("kolmafia");

// src/autoscend/paths/low_key_summer.ts
var import_kolmafia54 = require("kolmafia");

// src/autoscend/quests/level_02.ts
var import_kolmafia31 = require("kolmafia");

// src/autoscend/quests/level_03.ts
var import_kolmafia32 = require("kolmafia");

// src/autoscend/quests/level_04.ts
var import_kolmafia33 = require("kolmafia");

// src/autoscend/quests/level_05.ts
var import_kolmafia53 = require("kolmafia");

// src/autoscend/paths/you_robot.ts
var import_kolmafia52 = require("kolmafia");

// src/autoscend/quests/level_10.ts
var import_kolmafia51 = require("kolmafia");

// src/autoscend/paths/way_of_the_surprising_fist.ts
var import_kolmafia34 = require("kolmafia");

// src/autoscend/quests/level_13.ts
var import_kolmafia50 = require("kolmafia");

// src/autoscend/iotms/mr2021.ts
var import_kolmafia40 = require("kolmafia");

// src/autoscend/auto_craft.ts
var import_kolmafia35 = require("kolmafia");

// src/autoscend/paths/kolhs.ts
var import_kolmafia36 = require("kolmafia");
function in_kolhs() {
  return (0, import_kolmafia36.myPath)() === $path`KOLHS`;
}
function kolhs_initializeSettings() {
  if (!in_kolhs()) {
    return;
  }
  (0, import_kolmafia36.setProperty)("kolhs_closetDrink", false.toString());
}

// src/autoscend/paths/wildfire.ts
var import_kolmafia37 = require("kolmafia");
function in_wildfire() {
  return (0, import_kolmafia37.myPath)() === $path`Wildfire`;
}
function wildfire_initializeSettings() {
  if (!in_wildfire()) {
    return;
  }
  (0, import_kolmafia37.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia37.setProperty)("auto_getBeehive", true.toString());
}

// src/autoscend/quests/level_07.ts
var import_kolmafia39 = require("kolmafia");

// src/autoscend/paths/zombie_slayer.ts
var import_kolmafia38 = require("kolmafia");
function in_zombieSlayer() {
  return (0, import_kolmafia38.myPath)() === $path`Zombie Slayer`;
}
function zombieSlayer_initializeSettings() {
  if (in_zombieSlayer()) {
    (0, import_kolmafia38.setProperty)("auto_wandOfNagamar", false.toString());
  }
}
function zombieSlayer_usable(fam) {
  if (!in_zombieSlayer()) {
    return true;
  }
  return (0, import_kolmafia38.containsText)(fam.attributes, "undead");
}

// src/autoscend/paths/bugbear_invasion.ts
var import_kolmafia41 = require("kolmafia");
function in_bugbear() {
  return (0, import_kolmafia41.myPath)() === $path`Bugbear Invasion`;
}
function bugbear_initializeSettings() {
  if (in_bugbear()) {
    (0, import_kolmafia41.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia41.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia41.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia41.setProperty)("auto_getStarKey", false.toString());
    (0, import_kolmafia41.setProperty)(
      "nsTowerDoorKeysUsed",
      "Boris's key,Jarlsberg's key,Sneaky Pete's key,Richard's star key,skeleton key,digital key"
    );
    (0, import_kolmafia41.setProperty)("auto_dontPhylumBanish", true.toString());
  }
}

// src/autoscend/paths/the_source.ts
var import_kolmafia49 = require("kolmafia");

// src/autoscend/quests/optional.ts
var import_kolmafia48 = require("kolmafia");

// src/autoscend/paths/grey_goo.ts
var import_kolmafia42 = require("kolmafia");

// src/autoscend/paths/license_to_adventure.ts
var import_kolmafia43 = require("kolmafia");
function in_lta() {
  return (0, import_kolmafia43.myPath)() === $path`License to Adventure`;
}
function bond_initializeSettings() {
  if (in_lta()) {
    (0, import_kolmafia43.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia43.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia43.setProperty)("auto_familiarChoice", "");
  }
}

// src/autoscend/paths/nuclear_autumn.ts
var import_kolmafia44 = require("kolmafia");
function in_nuclear() {
  return (0, import_kolmafia44.myPath)() === $path`Nuclear Autumn`;
}
function nuclear_initializeSettings() {
  if (in_nuclear()) {
    (0, import_kolmafia44.setProperty)("auto_getBeehive", true.toString());
  }
}

// src/autoscend/paths/picky.ts
var import_kolmafia45 = require("kolmafia");

// src/autoscend/quests/level_06.ts
var import_kolmafia46 = require("kolmafia");

// src/autoscend/quests/level_any.ts
var import_kolmafia47 = require("kolmafia");

// src/autoscend/quests/optional.ts
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

// src/autoscend/paths/the_source.ts
function in_theSource() {
  return (0, import_kolmafia49.myPath)() === $path`The Source`;
}
function theSource_initializeSettings() {
  if (in_theSource()) {
    (0, import_kolmafia49.setProperty)("auto_getBeehive", true.toString());
    (0, import_kolmafia49.setProperty)("auto_wandOfNagamar", false.toString());
  }
  return false;
}

// src/autoscend/quests/level_13.ts
function beehiveConsider(at_tower) {
  var damage_sources = 1;
  if (auto_have_familiar($familiar`Glover`)) {
    damage_sources += 11;
  }
  if (auto_have_familiar($familiar`Shorter-Order Cook`)) {
    damage_sources += 6;
  } else if (auto_have_familiar($familiar`Mu`)) {
    damage_sources += 5;
  } else if (auto_have_familiar($familiar`Imitation Crab`)) {
    damage_sources += 4;
  }
  if ((0, import_kolmafia50.haveSkill)($skill`Kneebutt`) || (0, import_kolmafia50.haveSkill)($skill`Headbutt`)) {
    damage_sources += 1;
  }
  var _iterator = _createForOfIteratorHelper($skills`The Psalm of Pointiness, Spiky Shell, Scarysauce, Jalapeño Saucesphere`), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var sk = _step.value;
      if ((0, import_kolmafia50.haveSkill)(sk)) {
        damage_sources += 1;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper($skills`Dirge of Dreadfulness, Icy Glare`), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _sk = _step2.value;
      if ((0, import_kolmafia50.haveSkill)(_sk)) {
        damage_sources += 1;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  damage_sources += 2;
  if (!at_tower || (0, import_kolmafia50.availableAmount)($item`hot plate`) > 0) {
    damage_sources += 2;
  } else {
    if ((0, import_kolmafia50.numericModifier)(import_kolmafia50.Modifier.get("Hot Damage")) > 0) {
      damage_sources += 1;
    }
  }
  if ((0, import_kolmafia50.availableAmount)($item`tiny bowler`) > 0) {
    damage_sources += 1;
  }
  if ((0, import_kolmafia50.availableAmount)($item`hippy protest button`) > 0) {
    damage_sources += 1;
  }
  if (damage_sources >= 13) {
    (0, import_kolmafia50.setProperty)("auto_getBeehive", false.toString());
    return true;
  }
  (0, import_kolmafia50.setProperty)("auto_getBeehive", true.toString());
  return false;
}

// src/autoscend/paths/you_robot.ts
function in_robot() {
  return (0, import_kolmafia52.myPath)() === $path`You, Robot`;
}
function robot_initializeSettings() {
  if (!in_robot()) {
    return;
  }
  (0, import_kolmafia52.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia52.setProperty)("auto_getSteelOrgan", false.toString());
  (0, import_kolmafia52.setProperty)("auto_getBeehive", true.toString());
  (0, import_kolmafia52.setProperty)("auto_getBoningKnife", true.toString());
  (0, import_kolmafia52.setProperty)("auto_paranoia", 1 .toString());
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
function in_lowkeysummer() {
  return (0, import_kolmafia54.myPath)() === $path`Low Key Summer`;
}
function lowkey_initializeSettings() {
  if (!in_lowkeysummer()) {
    return;
  }
}

// src/autoscend/paths/quantum_terrarium.ts
function in_quantumTerrarium() {
  return (0, import_kolmafia56.myPath)() === $path`Quantum Terrarium`;
}
function qt_initializeSettings() {
  if (in_quantumTerrarium()) {
    (0, import_kolmafia56.setProperty)("auto_skipNuns", true.toString());
  }
}

// src/autoscend/paths/adventurer_meats_world.ts
function in_amw() {
  return (0, import_kolmafia62.myPath)() === $path`Adventurer Meats World`;
}
function amw_initializeSettings() {
  if (!in_amw()) {
    return;
  }
  (0, import_kolmafia62.setProperty)("auto_wandOfNagamar", false.toString());
  (0, import_kolmafia62.setProperty)("auto_shouldMeatLevel", false.toString());
}

// src/autoscend/paths/avant_guard.ts
function in_avantGuard() {
  return (0, import_kolmafia64.myPath)() === $path`Avant Guard`;
}
function ag_initializeSettings() {
  if (in_avantGuard()) {
    if (!auto_have_familiar($familiar`Burly Bodyguard`) && (0, import_kolmafia64.itemAmount)($item`baby bodyguard`) > 0) {
      (0, import_kolmafia64.visitUrl)("inv_familiar.php?pwd=&which=3&whichitem=11631");
    }
    (0, import_kolmafia64.setProperty)("auto_skipUnlockGuild", true.toString());
    (0, import_kolmafia64.setProperty)("auto_nonAdvLoc", false.toString());
    if (auto_turbo()) {
      (0, import_kolmafia64.setProperty)("auto_skipNuns", "true");
    }
  }
}

// src/autoscend/combat/auto_combat_awol.ts
var import_kolmafia65 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage1.ts
var import_kolmafia77 = require("kolmafia");

// src/autoscend/combat/auto_combat_adventurer_meats_world.ts
var import_kolmafia66 = require("kolmafia");

// src/autoscend/combat/auto_combat_bees_hate_you.ts
var import_kolmafia67 = require("kolmafia");

// src/autoscend/combat/auto_combat_disguises_delimit.ts
var import_kolmafia68 = require("kolmafia");

// src/autoscend/combat/auto_combat_fall_of_the_dinosaurs.ts
var import_kolmafia69 = require("kolmafia");

// src/autoscend/combat/auto_combat_heavy_rains.ts
var import_kolmafia70 = require("kolmafia");

// src/autoscend/combat/auto_combat_kingdom_of_exploathing.ts
var import_kolmafia71 = require("kolmafia");

// src/autoscend/combat/auto_combat_mr2012.ts
var import_kolmafia72 = require("kolmafia");

// src/autoscend/combat/auto_combat_pete.ts
var import_kolmafia73 = require("kolmafia");

// src/autoscend/combat/auto_combat_the_source.ts
var import_kolmafia74 = require("kolmafia");

// src/autoscend/combat/auto_combat_wereprofessor.ts
var import_kolmafia75 = require("kolmafia");

// src/autoscend/combat/auto_combat_wildfire.ts
var import_kolmafia76 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage2.ts
var import_kolmafia79 = require("kolmafia");

// src/autoscend/combat/auto_combat_dark_gyffte.ts
var import_kolmafia78 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage3.ts
var import_kolmafia81 = require("kolmafia");

// src/autoscend/combat/auto_combat_zombie_slayer.ts
var import_kolmafia80 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage4.ts
var import_kolmafia83 = require("kolmafia");

// src/autoscend/combat/auto_combat_license_to_adventure.ts
var import_kolmafia82 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage5.ts
var import_kolmafia86 = require("kolmafia");

// src/autoscend/combat/auto_combat_plumber.ts
var import_kolmafia84 = require("kolmafia");

// src/autoscend/combat/auto_combat_you_robot.ts
var import_kolmafia85 = require("kolmafia");

// src/autoscend/combat/auto_combat_ocrs.ts
var import_kolmafia87 = require("kolmafia");

// src/autoscend/combat/auto_combat_ed.ts
var import_kolmafia89 = require("kolmafia");

// src/autoscend/paths/i_love_u_hate.ts
var import_kolmafia91 = require("kolmafia");
function in_iluh() {
  return (0, import_kolmafia91.myPath)() === $path`11 Things I Hate About U`;
}
function iluh_foodConsumable(str) {
  if (!in_iluh()) {
    return true;
  }
  var foodConsume = (0, import_kolmafia91.toLowerCase)(str);
  if ((0, import_kolmafia91.containsText)(foodConsume, "stunt nut") || (0, import_kolmafia91.containsText)(foodConsume, "wet stew") || (0, import_kolmafia91.containsText)(foodConsume, "wet stunt nut stew")) {
    return true;
  }
  if ((0, import_kolmafia91.containsText)(foodConsume, "u")) {
    return false;
  }
  if ((0, import_kolmafia91.containsText)(foodConsume, "i")) {
    return true;
  }
  return false;
}
function iluh_famAllowed(fam) {
  if (!in_iluh()) {
    return true;
  }
  if ((0, import_kolmafia91.containsText)((0, import_kolmafia91.toLowerCase)(fam), "u")) {
    return false;
  }
  return true;
}

// src/autoscend/paths/dark_gyffte.ts
function in_darkGyffte() {
  return (0, import_kolmafia93.myPath)() === $path`Dark Gyffte`;
}
function bat_initializeSettings() {
  if (in_darkGyffte()) {
    (0, import_kolmafia93.setProperty)("auto_getSteelOrgan", false.toString());
    (0, import_kolmafia93.setProperty)("auto_grimstoneFancyOilPainting", false.toString());
    (0, import_kolmafia93.setProperty)("auto_paranoia", 10 .toString());
    (0, import_kolmafia93.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia93.setProperty)("auto_bat_desiredForm", "");
  }
}

// src/autoscend/paths/legacy_of_loathing.ts
function in_lol() {
  return (0, import_kolmafia97.myPath)() === $path`Legacy of Loathing`;
}
function lol_initializeSettings() {
  if (!in_lol()) {
    return;
  }
  (0, import_kolmafia97.setProperty)("auto_wandOfNagamar", true.toString());
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

// src/autoscend/quests/level_01.ts
var import_kolmafia99 = require("kolmafia");

// src/autoscend/paths/actually_ed_the_undying.ts
function isActuallyEd() {
  return (0, import_kolmafia100.myPath)() === $path`Actually Ed the Undying`;
}
function ed_initializeSettings() {
  if (isActuallyEd()) {
    (0, import_kolmafia100.setProperty)("auto_day1_dna", "finished");
    (0, import_kolmafia100.setProperty)("auto_getBeehive", false.toString());
    (0, import_kolmafia100.setProperty)("auto_getStarKey", false.toString());
    (0, import_kolmafia100.setProperty)("auto_grimstoneFancyOilPainting", false.toString());
    (0, import_kolmafia100.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia100.setProperty)("auto_lashes", "");
    (0, import_kolmafia100.setProperty)("auto_needLegs", false.toString());
    (0, import_kolmafia100.setProperty)("auto_renenutet", "");
    (0, import_kolmafia100.setProperty)("auto_servantChoice", "");
    (0, import_kolmafia100.setProperty)("auto_wandOfNagamar", false.toString());
    (0, import_kolmafia100.setProperty)("auto_edSkills", (-1).toString());
    (0, import_kolmafia100.setProperty)("auto_chasmBusted", false.toString());
    (0, import_kolmafia100.setProperty)("auto_renenutetBought", 0 .toString());
    (0, import_kolmafia100.setProperty)("auto_edCombatCount", 0 .toString());
    (0, import_kolmafia100.setProperty)("auto_edCombatRoundCount", 0 .toString());
    (0, import_kolmafia100.setProperty)("desertExploration", 100 .toString());
    (0, import_kolmafia100.setProperty)(
      "nsTowerDoorKeysUsed",
      "Boris's key,Jarlsberg's key,Sneaky Pete's key,Richard's star key,skeleton key,digital key"
    );
    (0, import_kolmafia100.setProperty)("auto_edServantBugCount", 0 .toString());
  }
}

// src/autoscend/iotms/mr2019.ts
function auto_spoonGetDesiredSign() {
  var spoonsign = (0, import_kolmafia101.toLowerCase)((0, import_kolmafia101.getProperty)("auto_spoonsign"));
  function statSign(musc, myst, mox) {
    switch ((0, import_kolmafia101.myPrimestat)()) {
      case $stat`Muscle`:
        return musc;
      case $stat`Mysticality`:
        return myst;
      case $stat`Moxie`:
        return mox;
      default:
        (0, import_kolmafia101.abort)("Invalid mainstat, what?");
        return "butts";
    }
  }
  switch (spoonsign) {
    case "knoll":
      return statSign("mongoose", "wallaby", "vole");
    case "canadia":
      return statSign("platypus", "opossum", "marmot");
    case "gnomad":
      return statSign("wombat", "blender", "packrat");
    case "mongoose":
    case "wallaby":
    case "vole":
    case "platypus":
    case "opossum":
    case "marmot":
    case "wombat":
    case "blender":
    case "packrat":
      return spoonsign;
    case "clover":
      return "marmot";
    case "famweight":
    case "weight":
    case "familiar weight":
    case "familiar":
    case "fam":
      return "platypus";
    case "food":
      return "opossum";
    case "booze":
      return "blender";
    default:
      return "";
  }
}
function auto_spoonTuneConfirm() {
  if (!possessEquipment($item`hewn moon-rune spoon`) || !auto_is_valid($item`hewn moon-rune spoon`)) {
    return;
  }
  if ((0, import_kolmafia101.toInt)((0, import_kolmafia101.getProperty)("auto_spoonconfirmed")) === (0, import_kolmafia101.myAscensions)()) {
    return;
  }
  var spoonsign = auto_spoonGetDesiredSign();
  if (spoonsign === "") {
    return;
  }
  if ((0, import_kolmafia101.userConfirm)(
    `You're currently set to change signs to ${spoonsign} after wrapping up your business in your current sign. Do you want to interrupt the script to go change that? Will default to 'No' in 15 seconds.`,
    15e3,
    false
  )) {
    (0, import_kolmafia101.abort)(
      "Alright, please go change auto_spoonsign via the autoscend relay script and then rerun."
    );
  } else {
    (0, import_kolmafia101.setProperty)("auto_spoonconfirmed", (0, import_kolmafia101.myAscensions)().toString());
  }
}

// src/autoscend/paths/kingdom_of_exploathing.ts
function in_koe() {
  return (0, import_kolmafia102.myPath)() === $path`Kingdom of Exploathing`;
}
function koe_initializeSettings() {
  if (in_koe()) {
    (0, import_kolmafia102.setProperty)("auto_bruteForcePalindome", (0, import_kolmafia102.inHardcore)().toString());
    (0, import_kolmafia102.setProperty)("auto_holeinthesky", false.toString());
    (0, import_kolmafia102.setProperty)("auto_paranoia", 3 .toString());
    (0, import_kolmafia102.setProperty)("auto_skipL12Farm", "true");
    (0, import_kolmafia102.setProperty)("auto_grimstoneOrnateDowsingRod", false.toString());
    (0, import_kolmafia102.setProperty)("auto_grimstoneFancyOilPainting", false.toString());
    return true;
  }
  return false;
}

// src/autoscend/iotms/mr2016.ts
function expectGhostReport() {
  if ((0, import_kolmafia103.totalTurnsPlayed)() >= (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("nextParanormalActivity"))) {
    if ((0, import_kolmafia103.totalTurnsPlayed)() > (0, import_kolmafia103.toInt)((0, import_kolmafia103.getProperty)("nextParanormalActivity"))) {
      var page = (0, import_kolmafia103.visitUrl)("charpane.php");
      var myGhost = new AshMatcher(
        '<tr rel="protonquest">(?:.*?)<b>(.*?)</b>',
        page
      );
      if (myGhost.find()) {
        var goal = (0, import_kolmafia103.toLocation)(myGhost.group(1));
        (0, import_kolmafia103.setProperty)("ghostLocation", goal.toString());
        (0, import_kolmafia103.setProperty)("questPAGhost", "started");
      }
    }
    if ((0, import_kolmafia103.getProperty)("questPAGhost") === "unstarted") {
      return true;
    }
  }
  return false;
}
function haveGhostReport() {
  if ((0, import_kolmafia103.getProperty)("questPAGhost") === "unstarted") {
    return false;
  }
  if ((0, import_kolmafia103.getProperty)("questPAGhost") === "started" && (0, import_kolmafia103.getProperty)("ghostLocation") !== "") {
    return true;
  }
  return false;
}

// src/autoscend/paths/casual.ts
function inAftercore() {
  return (0, import_kolmafia107.toBoolean)((0, import_kolmafia107.getProperty)("kingLiberated"));
}

// src/autoscend/iotms/clan.ts
function isSpeakeasyDrink(drink_1) {
  return $items`glass of "milk", cup of "tea", thermos of "whiskey", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy`.includes(
    drink_1
  );
}

// src/autoscend/auto_restore.ts
var $_f___known_restoration_sources = /* @__PURE__ */ new Map();
var $_f___restore_maximizer_cache = /* @__PURE__ */ new Map();
function invalidateRestoreOptionCache() {
  $_f___known_restoration_sources.clear();
  $_f___restore_maximizer_cache.clear();
}

// src/autoscend/iotms/ttt.ts
var import_kolmafia110 = require("kolmafia");

// src/autoscend/iotms/mr2014.ts
var $_f_importantMonsters = import_kolmafia113.Monster.get(
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
function icehouseMonster() {
  (0, import_kolmafia113.visitUrl)("museum.php?action=icehouse");
  if (!(0, import_kolmafia113.containsText)((0, import_kolmafia113.getProperty)("banishedMonsters"), "ice house")) {
    return import_kolmafia113.Monster.none;
  } else {
    var banishMap = new Map(
      (0, import_kolmafia113.splitString)((0, import_kolmafia113.getProperty)("banishedMonsters"), ":").map(
        (_v, _i) => [
          _i,
          _v
        ]
      )
    );
    for (var i = 0; i < banishMap.size; i++) {
      if ((banishMap.get(i) ?? banishMap.set(i, "").get(i)) === "ice house") {
        return (0, import_kolmafia113.toMonster)(
          banishMap.get(i - 1) ?? banishMap.set(i - 1, "").get(i - 1)
        );
      }
    }
  }
  return import_kolmafia113.Monster.none;
}
function icehouseUserErrorProtection() {
  if (icehouseMonster() === import_kolmafia113.Monster.none) {
    return true;
  } else if ($_f_importantMonsters.includes(icehouseMonster())) {
    if ((0, import_kolmafia113.userConfirm)(
      `You have a ${icehouseMonster().toString()} frozen in your icehouse. Autoscend thinks it might cause problems, do you want us to melt it? Will default to 'Yes' in 15 seconds.`,
      15e3,
      true
    )) {
      (0, import_kolmafia113.visitUrl)("museum.php?action=icehouse");
      (0, import_kolmafia113.runChoice)(1);
      return true;
    } else {
      (0, import_kolmafia113.print)("If autoscend runs into problems, it's on you!");
      return false;
    }
  } else {
    return true;
  }
}

// src/autoscend/auto_familiar.ts
function is100FamRun() {
  if ((0, import_kolmafia114.toFamiliar)((0, import_kolmafia114.getProperty)("auto_100familiar")) === import_kolmafia114.Familiar.none) {
    return false;
  }
  return true;
}
function pathHasFamiliar() {
  if (is_boris() || is_jarlsberg() || is_pete() || isActuallyEd() || in_darkGyffte() || in_lta() || in_pokefam()) {
    return false;
  }
  if (in_robot() && (0, import_kolmafia114.toInt)((0, import_kolmafia114.getProperty)("youRobotTop")) !== 2) {
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
  if ((0, import_kolmafia114.getProperty)("auto_blacklistFamiliar") !== "") {
    var noFams = new Map(
      (0, import_kolmafia114.splitString)((0, import_kolmafia114.getProperty)("auto_blacklistFamiliar"), ";").map(
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
        blacklist.set((0, import_kolmafia114.toFamiliar)(trim(fam_1)), 1);
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
  return (0, import_kolmafia114.haveFamiliar)(fam);
}

// src/autoscend/auto_equipment.ts
function equipmentAmount(equipment) {
  if (equipment === import_kolmafia115.Item.none) {
    return 0;
  }
  var amount = (0, import_kolmafia115.itemAmount)(equipment) + (0, import_kolmafia115.equippedAmount)(equipment, true);
  if (equipment.toString() in (0, import_kolmafia115.getRelated)($item`broken champagne bottle`, "fold")) {
    amount = (0, import_kolmafia115.itemAmount)(wrap_item($item`January's Garbage Tote`));
  }
  return amount;
}
function possessEquipment(equipment) {
  return equipmentAmount(equipment) > 0;
}

// src/autoscend/iotms/mr2007.ts
var import_kolmafia116 = require("kolmafia");

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
function isGuildClass() {
  return $classes`Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief`.includes(
    (0, import_kolmafia120.myClass)()
  );
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
function auto_log(s2, color, log_level) {
  if (log_level > (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("auto_log_level"))) {
    return;
  }
  switch (log_level) {
    case 1:
      (0, import_kolmafia120.print)(`[WARNING] ${s2}`, color);
      break;
    case 2:
      (0, import_kolmafia120.print)(`[INFO] ${s2}`, color);
      break;
    case 3:
      (0, import_kolmafia120.print)(`[DEBUG] ${s2}`, color);
      break;
  }
}
function auto_log_info(s2, color) {
  auto_log(s2, color, 2);
}
function auto_log_info$1(s2) {
  auto_log(s2, "blue", 2);
}
function auto_log_debug(s2, color) {
  auto_log(s2, color, 3);
}
function auto_turbo() {
  return (0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("auto_turbo"));
}
function wrap_item(it) {
  if (in_lol()) {
    return auto_ItemToReplica(it);
  }
  return it;
}

// src/autoscend/auto_consume.ts
var $_saucemavenApplies_saucy_foods = $items`cold hi mein, devil hair pasta, Fettris, fettucini Inconnu, fleetwood mac 'n' cheese, fusillocybin, gnocchetti di Nietzsche, haunted Hell ramen, Hell ramen, hot hi mein, libertagliatelle, linguini immondizia bianco, linguini of the sea, prescription noodles, shells a la shellfish, sleazy hi mein, spagecialetti, spaghetti con calaveras, spaghetti with Skullheads, spooky hi mein, stinky hi mein, turkish mostaccioli`;

// src/autoscend/auto_acquire.ts
function canPull(it, historical) {
  if ((0, import_kolmafia124.inHardcore)()) {
    return false;
  }
  if (in_lol()) {
    if (it.fullness === 0 && it.inebriety === 0 && !it.potion && !it.combat && !it.usable) {
      return false;
    }
  }
  if (it === import_kolmafia124.Item.none) {
    return false;
  }
  if (!(0, import_kolmafia124.isUnrestricted)(it)) {
    return false;
  }
  if ((0, import_kolmafia124.pullsRemaining)() === 0) {
    return false;
  }
  if (pulledToday(it)) {
    return false;
  }
  if ((0, import_kolmafia124.storageAmount)(it) > 0) {
    return true;
  } else if (!(0, import_kolmafia124.isTradeable)(it)) {
    return false;
  }
  if (!auto_is_valid(it)) {
    return false;
  }
  var meat = (0, import_kolmafia124.myStorageMeat)();
  if ((0, import_kolmafia124.canInteract)()) {
    meat = (0, import_kolmafia124.max)(meat, (0, import_kolmafia124.myMeat)() - 5e3);
  }
  var curPrice = (0, import_kolmafia124.historicalPrice)(it);
  if (!historical) {
    curPrice = auto_mall_price(it);
  }
  if (curPrice < 1) {
    return false;
  }
  if (curPrice > (0, import_kolmafia124.toInt)((0, import_kolmafia124.getProperty)("autoBuyPriceLimit"))) {
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
    (0, import_kolmafia124.splitString)((0, import_kolmafia124.getProperty)("_roninStoragePulls"), ",").map(
      (_v, _i) => [
        _i,
        _v
      ]
    )
  );
  var _iterator = _createForOfIteratorHelper(
    allPulls.keys()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var i = _step.value;
      if ((0, import_kolmafia124.toInt)(allPulls.get(i) ?? allPulls.set(i, "").get(i)) === (0, import_kolmafia124.toInt)(it)) {
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
function auto_mall_price(it) {
  if (isSpeakeasyDrink(it)) {
    return -1;
  }
  if (0 in (0, import_kolmafia124.availableChoiceOptions)() || 1 in (0, import_kolmafia124.availableChoiceOptions)()) {
    return (0, import_kolmafia124.historicalPrice)(it);
  }
  if ((0, import_kolmafia124.isTradeable)(it)) {
    var retval;
    var it_type = (0, import_kolmafia124.itemType)(it);
    if (it_type === "food" || it_type === "booze") {
      retval = (0, import_kolmafia124.historicalPrice)(it);
      if (retval === 0) {
        retval = (0, import_kolmafia124.mallPrice)(it);
      }
    } else {
      retval = (0, import_kolmafia124.mallPrice)(it);
    }
    if (retval === -1) {
      return (0, import_kolmafia124.historicalPrice)(it);
    }
    return retval;
  }
  return -1;
}

// src/autoscend/auto_bedtime.ts
var import_kolmafia126 = require("kolmafia");

// src/autoscend/auto_zlib.ts
var import_kolmafia125 = require("kolmafia");

// src/autoscend/auto_settings.ts
var import_kolmafia127 = require("kolmafia");
function trackingSplitterFixer(oldSetting, day, newSetting) {
  var setting3 = (0, import_kolmafia127.getProperty)(oldSetting);
  if (setting3 === "") {
    return false;
  }
  var cleanSpaces = new AshMatcher(", ", setting3);
  setting3 = cleanSpaces.replaceAll(",");
  var retval = new Map(
    (0, import_kolmafia127.splitString)(setting3, ",").map((_v, _i) => [_i, _v])
  );
  var _iterator = _createForOfIteratorHelper(
    retval.keys()
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var x = _step.value;
      if ((retval.get(x) ?? retval.set(x, "").get(x)) === "") {
        continue;
      }
      var dayAdder = new AshMatcher(
        "[(]",
        retval.get(x) ?? retval.set(x, "").get(x)
      );
      retval.set(x, dayAdder.replaceAll(`(${day}:`));
      if ((0, import_kolmafia127.getProperty)(newSetting) !== "") {
        (0, import_kolmafia127.setProperty)(
          newSetting,
          `${(0, import_kolmafia127.getProperty)(newSetting)},${retval.get(x) ?? retval.set(x, "").get(x)}`
        );
      } else {
        (0, import_kolmafia127.setProperty)(newSetting, retval.get(x) ?? retval.set(x, "").get(x));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  (0, import_kolmafia127.setProperty)(oldSetting, "");
  return true;
}
function cleanup_property(target) {
  if ((0, import_kolmafia127.getProperty)(target) === "" && (0, import_kolmafia127.propertyExists)(target)) {
    (0, import_kolmafia127.removeProperty)(target);
  }
}
function auto_rename_property(oldprop, newprop) {
  cleanup_property(oldprop);
  cleanup_property(newprop);
  if (!(0, import_kolmafia127.propertyExists)(oldprop) || (0, import_kolmafia127.propertyExists)(newprop)) {
    return;
  }
  (0, import_kolmafia127.renameProperty)(oldprop, newprop);
}
function boolFix(p) {
  var p_val = (0, import_kolmafia127.getProperty)(p);
  if (p_val === "need" || p_val === "yes") {
    (0, import_kolmafia127.setProperty)(p, true.toString());
  }
  if (p_val === "no") {
    (0, import_kolmafia127.setProperty)(p, false.toString());
  }
}
function auto_settingsUpgrade() {
  trackingSplitterFixer("auto_banishes_day1", 1, "auto_banishes");
  trackingSplitterFixer("auto_banishes_day2", 2, "auto_banishes");
  trackingSplitterFixer("auto_banishes_day3", 3, "auto_banishes");
  trackingSplitterFixer("auto_banishes_day4", 4, "auto_banishes");
  trackingSplitterFixer("auto_yellowRay_day1", 1, "auto_yellowRays");
  trackingSplitterFixer("auto_yellowRay_day2", 2, "auto_yellowRays");
  trackingSplitterFixer("auto_yellowRay_day3", 3, "auto_yellowRays");
  trackingSplitterFixer("auto_yellowRay_day4", 4, "auto_yellowRays");
  trackingSplitterFixer("auto_lashes_day1", 1, "auto_lashes");
  trackingSplitterFixer("auto_lashes_day2", 2, "auto_lashes");
  trackingSplitterFixer("auto_lashes_day3", 3, "auto_lashes");
  trackingSplitterFixer("auto_lashes_day4", 4, "auto_lashes");
  trackingSplitterFixer("auto_renenutet_day1", 1, "auto_renenutet");
  trackingSplitterFixer("auto_renenutet_day2", 2, "auto_renenutet");
  trackingSplitterFixer("auto_renenutet_day3", 3, "auto_renenutet");
  trackingSplitterFixer("auto_renenutet_day4", 4, "auto_renenutet");
  if ((0, import_kolmafia127.getProperty)("auto_100familiar") === "yes") {
    (0, import_kolmafia127.setProperty)("auto_100familiar", (0, import_kolmafia127.myFamiliar)().toString());
  }
  if ((0, import_kolmafia127.getProperty)("auto_100familiar") === "no") {
    (0, import_kolmafia127.setProperty)("auto_100familiar", import_kolmafia127.Familiar.none.toString());
  }
  if ((0, import_kolmafia127.getProperty)("auto_100familiar") === "false") {
    (0, import_kolmafia127.setProperty)("auto_100familiar", import_kolmafia127.Familiar.none.toString());
  }
  if ((0, import_kolmafia127.getProperty)("auto_killingjar") === "done") {
    (0, import_kolmafia127.setProperty)("auto_killingjar", "finished");
  }
  boolFix("auto_wandOfNagamar");
  boolFix("auto_chasmBusted");
  auto_rename_property("auto_edDelayTimer", "auto_delayTimer");
  boolFix("auto_grimstoneFancyOilPainting");
  boolFix("auto_grimstoneOrnateDowsingRod");
  if ((0, import_kolmafia127.getProperty)("auto_abooclover") === "used") {
    (0, import_kolmafia127.setProperty)("auto_abooclover", false.toString());
  }
  if ((0, import_kolmafia127.getProperty)("lastPlusSignUnlock") === "true") {
    auto_log_debug(
      "lastPlusSignUnlock was changed to a boolean, fixing...",
      "red"
    );
    (0, import_kolmafia127.setProperty)("lastPlusSignUnlock", (0, import_kolmafia127.myAscensions)().toString());
  }
  if ((0, import_kolmafia127.getProperty)("lastTempleUnlock") === "true") {
    auto_log_debug(
      "lastTempleUnlock was changed to a boolean, fixing...",
      "red"
    );
    (0, import_kolmafia127.setProperty)("lastTempleUnlock", (0, import_kolmafia127.myAscensions)().toString());
  }
  if ((0, import_kolmafia127.propertyExists)("auto_consumeKeyLimePies")) {
    (0, import_kolmafia127.setProperty)(
      "auto_dontConsumeKeyLimePies",
      (!(0, import_kolmafia127.toBoolean)((0, import_kolmafia127.getProperty)("auto_consumeKeyLimePies"))).toString()
    );
  }
  if ((0, import_kolmafia127.propertyExists)("auto_alwaysGetSteelOrgan")) {
    (0, import_kolmafia127.setProperty)(
      "auto_getSteelOrgan_initialize",
      (0, import_kolmafia127.getProperty)("auto_alwaysGetSteelOrgan")
    );
  }
  if ((0, import_kolmafia127.getProperty)("auto_debug") === "true") {
    (0, import_kolmafia127.setProperty)("auto_log_level", 3 .toString());
  }
  if ((0, import_kolmafia127.propertyExists)("auto_logLevel")) {
    switch ((0, import_kolmafia127.toLowerCase)((0, import_kolmafia127.getProperty)("auto_logLevel"))) {
      case "critical":
      case "crit":
      case "error":
      case "err":
        (0, import_kolmafia127.setProperty)("auto_log_level", 0 .toString());
        break;
      case "warning":
      case "warn":
        (0, import_kolmafia127.setProperty)("auto_log_level", 1 .toString());
        break;
      case "info":
        (0, import_kolmafia127.setProperty)("auto_log_level", 2 .toString());
        break;
      case "debug":
        (0, import_kolmafia127.setProperty)("auto_log_level", 3 .toString());
        break;
    }
  }
  if (!(0, import_kolmafia127.propertyExists)("logLevelDefaultChangedToDebug")) {
    (0, import_kolmafia127.setProperty)("auto_log_level", 3 .toString());
    (0, import_kolmafia127.setProperty)("logLevelDefaultChangedToDebug", true.toString());
  }
}
function auto_settingsFix() {
  if ((0, import_kolmafia127.toInt)((0, import_kolmafia127.getProperty)("auto_save_adv_override")) < -1) {
    (0, import_kolmafia127.setProperty)("auto_save_adv_override", (-1).toString());
  }
  if ((0, import_kolmafia127.toInt)((0, import_kolmafia127.getProperty)("auto_log_level")) < 0) {
    (0, import_kolmafia127.setProperty)("auto_log_level", 0 .toString());
  }
  if ((0, import_kolmafia127.toInt)((0, import_kolmafia127.getProperty)("auto_log_level")) > 3) {
    (0, import_kolmafia127.setProperty)("auto_log_level", 3 .toString());
  }
  if ((0, import_kolmafia127.toInt)((0, import_kolmafia127.getProperty)("auto_log_level_restore")) < 0) {
    (0, import_kolmafia127.setProperty)("auto_log_level_restore", 0 .toString());
  }
  if ((0, import_kolmafia127.toInt)((0, import_kolmafia127.getProperty)("auto_log_level_restore")) > 2) {
    (0, import_kolmafia127.setProperty)("auto_log_level_restore", 2 .toString());
  }
}
function auto_settingsDelete() {
  (0, import_kolmafia127.removeProperty)("auto_debug");
  (0, import_kolmafia127.removeProperty)("auto_sonata");
  (0, import_kolmafia127.removeProperty)("auto_edDelayTimer");
  (0, import_kolmafia127.removeProperty)("auto_cubeItems");
  (0, import_kolmafia127.removeProperty)("auto_useCubeling");
  (0, import_kolmafia127.removeProperty)("auto_pullPVPJunk");
  (0, import_kolmafia127.removeProperty)("auto_day1_init");
  (0, import_kolmafia127.removeProperty)("auto_day2_init");
  (0, import_kolmafia127.removeProperty)("auto_day3_init");
  (0, import_kolmafia127.removeProperty)("auto_day4_init");
  (0, import_kolmafia127.removeProperty)("auto_gaudy");
  (0, import_kolmafia127.removeProperty)("auto_beta_test");
  (0, import_kolmafia127.removeProperty)("auto_invaderKilled");
  (0, import_kolmafia127.removeProperty)("auto_airship");
  (0, import_kolmafia127.removeProperty)("auto_ballroom");
  (0, import_kolmafia127.removeProperty)("auto_ballroomflat");
  (0, import_kolmafia127.removeProperty)("auto_ballroomopen");
  (0, import_kolmafia127.removeProperty)("auto_ballroomsong");
  (0, import_kolmafia127.removeProperty)("auto_bat");
  (0, import_kolmafia127.removeProperty)("auto_bean");
  (0, import_kolmafia127.removeProperty)("auto_blackfam");
  (0, import_kolmafia127.removeProperty)("auto_blackmap");
  (0, import_kolmafia127.removeProperty)("auto_boopeak");
  (0, import_kolmafia127.removeProperty)("auto_castlebasement");
  (0, import_kolmafia127.removeProperty)("auto_castleground");
  (0, import_kolmafia127.removeProperty)("auto_castletop");
  (0, import_kolmafia127.removeProperty)("auto_consumption");
  (0, import_kolmafia127.removeProperty)("auto_crypt");
  (0, import_kolmafia127.removeProperty)("auto_day1_cobb");
  (0, import_kolmafia127.removeProperty)("auto_fcle");
  (0, import_kolmafia127.removeProperty)("auto_friars");
  (0, import_kolmafia127.removeProperty)("auto_goblinking");
  (0, import_kolmafia127.removeProperty)("auto_gremlins");
  (0, import_kolmafia127.removeProperty)("auto_gremlinBanishes");
  (0, import_kolmafia127.removeProperty)("auto_gunpowder");
  (0, import_kolmafia127.removeProperty)("auto_hiddenapartment");
  (0, import_kolmafia127.removeProperty)("auto_hiddenbowling");
  (0, import_kolmafia127.removeProperty)("auto_hiddencity");
  (0, import_kolmafia127.removeProperty)("auto_hiddenhospital");
  (0, import_kolmafia127.removeProperty)("auto_hiddenoffice");
  (0, import_kolmafia127.removeProperty)("auto_hiddenunlock");
  (0, import_kolmafia127.removeProperty)("auto_hiddenzones");
  (0, import_kolmafia127.removeProperty)("auto_highlandlord");
  (0, import_kolmafia127.removeProperty)("auto_masonryWall");
  (0, import_kolmafia127.removeProperty)("auto_mcmuffin");
  (0, import_kolmafia127.removeProperty)("auto_mistypeak");
  (0, import_kolmafia127.removeProperty)("auto_mosquito");
  (0, import_kolmafia127.removeProperty)("auto_nuns");
  (0, import_kolmafia127.removeProperty)("auto_oilpeak");
  (0, import_kolmafia127.removeProperty)("auto_orchard");
  (0, import_kolmafia127.removeProperty)("auto_palindome");
  (0, import_kolmafia127.removeProperty)("auto_phatloot");
  (0, import_kolmafia127.removeProperty)("auto_forcePhatLootToken");
  (0, import_kolmafia127.removeProperty)("auto_prewar");
  (0, import_kolmafia127.removeProperty)("auto_prehippy");
  (0, import_kolmafia127.removeProperty)("auto_pirateoutfit");
  (0, import_kolmafia127.removeProperty)("auto_trytower");
  (0, import_kolmafia127.removeProperty)("auto_shenCopperhead");
  (0, import_kolmafia127.removeProperty)("auto_spookyfertilizer");
  (0, import_kolmafia127.removeProperty)("auto_spookymap");
  (0, import_kolmafia127.removeProperty)("auto_spookyravensecond");
  (0, import_kolmafia127.removeProperty)("auto_spookysapling");
  (0, import_kolmafia127.removeProperty)("auto_sonofa");
  (0, import_kolmafia127.removeProperty)("auto_sorceress");
  (0, import_kolmafia127.removeProperty)("auto_swordfish");
  (0, import_kolmafia127.removeProperty)("auto_tavern");
  (0, import_kolmafia127.removeProperty)("auto_trapper");
  (0, import_kolmafia127.removeProperty)("auto_treecoin");
  (0, import_kolmafia127.removeProperty)("auto_twinpeak");
  (0, import_kolmafia127.removeProperty)("auto_twinpeakprogress");
  (0, import_kolmafia127.removeProperty)("auto_war");
  (0, import_kolmafia127.removeProperty)("auto_winebomb");
  (0, import_kolmafia127.removeProperty)("auto_clearCombatScripts");
  (0, import_kolmafia127.removeProperty)("auto_legacyConsumeStuff");
  (0, import_kolmafia127.removeProperty)("betweenAdventureScript");
  (0, import_kolmafia127.removeProperty)("auto_copperhead");
  (0, import_kolmafia127.removeProperty)("auto_mineForOres");
  (0, import_kolmafia127.removeProperty)("auto_hpAutoRecoveryItems");
  (0, import_kolmafia127.removeProperty)("auto_hpAutoRecovery");
  (0, import_kolmafia127.removeProperty)("auto_hpAutoRecoveryTarget");
  (0, import_kolmafia127.removeProperty)("auto_skipDesert");
  (0, import_kolmafia127.removeProperty)("auto_shenStarted");
  (0, import_kolmafia127.removeProperty)("auto_breakstone");
  (0, import_kolmafia127.removeProperty)("auto_aftercore");
  (0, import_kolmafia127.removeProperty)("auto_aboocount");
  (0, import_kolmafia127.removeProperty)("auto_dinseyGarbageMoney");
  (0, import_kolmafia127.removeProperty)("auto_lastABooConsider");
  (0, import_kolmafia127.removeProperty)("auto_lastABooCycleFix");
  (0, import_kolmafia127.removeProperty)("auto_longConMonster");
  (0, import_kolmafia127.removeProperty)("auto_voidWarranty");
  (0, import_kolmafia127.removeProperty)("auto_kingLiberation");
  (0, import_kolmafia127.removeProperty)("auto_borrowedTimeOnLiberation");
  (0, import_kolmafia127.removeProperty)("auto_xiblaxianChoice");
  (0, import_kolmafia127.removeProperty)("auto_extrudeChoice");
  (0, import_kolmafia127.removeProperty)("auto_consumeKeyLimePies");
  (0, import_kolmafia127.removeProperty)("auto_shareMaximizer");
  (0, import_kolmafia127.removeProperty)("auto_allowSharingData");
  (0, import_kolmafia127.removeProperty)("auto_mummeryChoice");
  (0, import_kolmafia127.removeProperty)("auto_choice1119");
  (0, import_kolmafia127.removeProperty)("auto_useTatter");
  (0, import_kolmafia127.removeProperty)("auto_alwaysGetSteelOrgan");
  (0, import_kolmafia127.removeProperty)("auto_logLevel");
  (0, import_kolmafia127.removeProperty)("auto_bedtime_pulls_skip_clover");
  (0, import_kolmafia127.removeProperty)("cloverProtectActive");
  (0, import_kolmafia127.removeProperty)("auto_edCombatHandler");
  (0, import_kolmafia127.removeProperty)("auto_combatHandler");
  (0, import_kolmafia127.removeProperty)("auto_skipNEPOverride");
  (0, import_kolmafia127.removeProperty)("auto_dickstab");
  (0, import_kolmafia127.removeProperty)("auto_getDinseyGarbageMoney");
  (0, import_kolmafia127.removeProperty)("auto_hatchRagamuffinImp");
  (0, import_kolmafia127.removeProperty)("auto_saveMagicalSausage");
  (0, import_kolmafia127.removeProperty)("auto_useWishes");
  (0, import_kolmafia127.removeProperty)("auto_doNotUseCMC");
  (0, import_kolmafia127.removeProperty)("auto_doArtistQuest");
  (0, import_kolmafia127.removeProperty)("auto_noSleepingDog");
  (0, import_kolmafia127.removeProperty)("auto_cookie");
  (0, import_kolmafia127.removeProperty)("auto_doArmory");
  (0, import_kolmafia127.removeProperty)("auto_doMeatsmith");
  (0, import_kolmafia127.removeProperty)("auto_waitingArrowAlcove");
  (0, import_kolmafia127.removeProperty)("auto_combatHandlerFingernailClippers");
  (0, import_kolmafia127.removeProperty)("auto_delayHauntedKitchen");
}
function defaultConfig(prop, val) {
  if (!(0, import_kolmafia127.propertyExists)(prop)) {
    auto_log_info$1(
      `${prop} has no value set. setting it to the default value of ${val}`
    );
    (0, import_kolmafia127.setProperty)(prop, val);
  }
}
function auto_settingsDefaults() {
  defaultConfig("auto_delayTimer", "1");
  defaultConfig("auto_abooclover", "true");
  defaultConfig("auto_consumablePriceLimit", "12000");
  defaultConfig("auto_paranoia", "-1");
  defaultConfig("auto_inv_paranoia", "false");
  defaultConfig("auto_save_adv_override", "-1");
  defaultConfig("auto_log_level", "3");
  defaultConfig("auto_log_level_restore", "0");
  defaultConfig("auto_bedtime_pulls_skip", "false");
  defaultConfig("auto_bedtime_pulls_pvp_multi", "0.3");
  defaultConfig("auto_bedtime_pulls_min_desirability", "1.0");
}
function auto_settings() {
  auto_settingsUpgrade();
  auto_settingsFix();
  auto_settingsDelete();
  auto_settingsDefaults();
}

// src/autoscend/auto_sim.ts
var import_kolmafia128 = require("kolmafia");

// src/autoscend/autoscend_migration.ts
var import_kolmafia129 = require("kolmafia");
var $_f___autoscend_version = "1.8.0";
function autoscend_current_version() {
  if (!(0, import_kolmafia129.propertyExists)("auto_current_version")) {
    (0, import_kolmafia129.setProperty)("auto_current_version", $_f___autoscend_version);
  }
  return (0, import_kolmafia129.getProperty)("auto_current_version");
}

// src/autoscend/iotms/eudora.ts
var import_kolmafia130 = require("kolmafia");
function eudora_available() {
  if ((0, import_kolmafia130.containsText)((0, import_kolmafia130.visitUrl)("account.php"), "tab=correspondence")) {
    return true;
  }
  return false;
}
function eudora_initializeSettings() {
  var retval = /* @__PURE__ */ new Map();
  if (eudora_available()) {
    var eudora_1 = (0, import_kolmafia130.visitUrl)("account.php?tab=correspondence");
    if ((0, import_kolmafia130.containsText)(eudora_1, "Pen Pal") && (0, import_kolmafia130.isUnrestricted)($item`My Own Pen Pal kit`)) {
      retval.set($item`My Own Pen Pal kit`, true);
    }
    if ((0, import_kolmafia130.containsText)(eudora_1, "GameInformPowerDailyPro Magazine") && (0, import_kolmafia130.isUnrestricted)($item`GameInformPowerDailyPro subscription card`)) {
      retval.set($item`GameInformPowerDailyPro subscription card`, true);
    }
    if ((0, import_kolmafia130.containsText)(eudora_1, "Xi Receiver Unit") && (0, import_kolmafia130.isUnrestricted)($item`Xi Receiver Unit`)) {
      retval.set($item`Xi Receiver Unit`, true);
    }
    if ((0, import_kolmafia130.containsText)(eudora_1, "New-You Club") && (0, import_kolmafia130.isUnrestricted)($item`New-You Club Membership Form`)) {
      retval.set($item`New-You Club Membership Form`, true);
    }
    if ((0, import_kolmafia130.containsText)(eudora_1, "Our Daily Candles") && (0, import_kolmafia130.isUnrestricted)($item`Our Daily Candles™ order form`)) {
      retval.set($item`Our Daily Candles™ order form`, true);
    }
  }
  return retval;
}

// src/autoscend/iotms/mr2013.ts
var import_kolmafia131 = require("kolmafia");

// src/autoscend/paths/auto_path_util.ts
var import_kolmafia132 = require("kolmafia");

// src/autoscend/paths/community_service.ts
var import_kolmafia133 = require("kolmafia");

// src/autoscend/task_registry.ts
var import_kolmafia135 = require("kolmafia");

// src/autoscend/iotms/mr2012.ts
var import_kolmafia134 = require("kolmafia");

// src/autoscend.ts
function initializeSettings() {
  if (inAftercore()) {
    return;
  }
  var reinitialize = (0, import_kolmafia136.toBoolean)((0, import_kolmafia136.getProperty)("_auto_reinitialize"));
  if (!reinitialize && (0, import_kolmafia136.myAscensions)() === (0, import_kolmafia136.toInt)((0, import_kolmafia136.getProperty)("auto_doneInitialize"))) {
    return;
  }
  (0, import_kolmafia136.setLocation)(import_kolmafia136.Location.none);
  invalidateRestoreOptionCache();
  if (!reinitialize) {
    (0, import_kolmafia136.setProperty)("auto_100familiar", import_kolmafia136.Familiar.none.toString());
    if ((0, import_kolmafia136.myFamiliar)() !== import_kolmafia136.Familiar.none && pathAllowsChangingFamiliar()) {
      var userAnswer = (0, import_kolmafia136.userConfirm)(
        "Familiar already set, is this a 100% familiar run? Will default to 'No' in 15 seconds.",
        15e3,
        false
      );
      if (userAnswer) {
        (0, import_kolmafia136.setProperty)("auto_100familiar", (0, import_kolmafia136.myFamiliar)().toString());
      }
    }
    if ((0, import_kolmafia136.getWorkshed)() !== import_kolmafia136.Item.none) {
      var _userAnswer = (0, import_kolmafia136.userConfirm)(
        "Workshed already set, do you want Autoscend to handle your workshed? Will default to 'Yes' in 15 seconds.",
        15e3,
        true
      );
      if (_userAnswer) {
        (0, import_kolmafia136.setProperty)("auto_workshed", "auto");
      } else {
        (0, import_kolmafia136.setProperty)("auto_workshed", (0, import_kolmafia136.getWorkshed)().toString());
      }
    }
  }
  auto_spoonTuneConfirm();
  icehouseUserErrorProtection();
  (0, import_kolmafia136.setProperty)("auto_abooclover", true.toString());
  (0, import_kolmafia136.setProperty)("auto_aboopending", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_avalancheDeployed", false.toString());
  (0, import_kolmafia136.setProperty)("auto_banishes", "");
  (0, import_kolmafia136.setProperty)("auto_batoomerangDay", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_beatenUpCount", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_beatenUpLastAdv", false.toString());
  (0, import_kolmafia136.removeProperty)("auto_beatenUpLocations");
  (0, import_kolmafia136.setProperty)("auto_getBeehive", false.toString());
  (0, import_kolmafia136.setProperty)("auto_bruteForcePalindome", false.toString());
  (0, import_kolmafia136.setProperty)("auto_doWhiteys", false.toString());
  (0, import_kolmafia136.setProperty)("auto_cabinetsencountered", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_chasmBusted", true.toString());
  (0, import_kolmafia136.setProperty)("auto_chewed", "");
  (0, import_kolmafia136.setProperty)("auto_clanstuff", "0");
  (0, import_kolmafia136.setProperty)("auto_considerCCSCShore", true.toString());
  (0, import_kolmafia136.setProperty)("auto_copies", "");
  (0, import_kolmafia136.setProperty)("auto_dakotaFanning", false.toString());
  (0, import_kolmafia136.setProperty)("auto_day_init", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_day1_dna", "");
  (0, import_kolmafia136.setProperty)("auto_day2WaitLastLevel", "0");
  (0, import_kolmafia136.setProperty)("auto_debuffAsdonDelay", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_disableAdventureHandling", false.toString());
  (0, import_kolmafia136.setProperty)("auto_doCombatCopy", "no");
  (0, import_kolmafia136.setProperty)("auto_dontPhylumBanish", false.toString());
  (0, import_kolmafia136.setProperty)("auto_runDayCount", 2 .toString());
  (0, import_kolmafia136.setProperty)("auto_drunken", "");
  (0, import_kolmafia136.setProperty)("auto_eaten", "");
  (0, import_kolmafia136.setProperty)("auto_familiarChoice", "");
  (0, import_kolmafia136.removeProperty)("auto_forcedNC");
  (0, import_kolmafia136.setProperty)("auto_forceNonCombatLocation", "");
  (0, import_kolmafia136.setProperty)("auto_forceNonCombatSource", "");
  (0, import_kolmafia136.setProperty)("auto_forceNonCombatTurn", (-1).toString());
  (0, import_kolmafia136.setProperty)("auto_forceTavern", false.toString());
  (0, import_kolmafia136.setProperty)("auto_freeruns", "");
  (0, import_kolmafia136.setProperty)("auto_funTracker", "");
  (0, import_kolmafia136.setProperty)("auto_getBoningKnife", false.toString());
  (0, import_kolmafia136.setProperty)("auto_getStarKey", true.toString());
  (0, import_kolmafia136.setProperty)(
    "auto_getSteelOrgan",
    (0, import_kolmafia136.getProperty)("auto_getSteelOrgan_initialize")
  );
  (0, import_kolmafia136.setProperty)("auto_gnasirUnlocked", false.toString());
  (0, import_kolmafia136.setProperty)("auto_grimstoneFancyOilPainting", true.toString());
  (0, import_kolmafia136.setProperty)("auto_grimstoneOrnateDowsingRod", true.toString());
  (0, import_kolmafia136.setProperty)("auto_haveoven", false.toString());
  (0, import_kolmafia136.setProperty)("auto_doGalaktik", (0, import_kolmafia136.getProperty)("auto_doGalaktik_initialize"));
  (0, import_kolmafia136.setProperty)("auto_L8_ninjaAssassinFail", false.toString());
  (0, import_kolmafia136.setProperty)("auto_L8_extremeInstead", false.toString());
  (0, import_kolmafia136.setProperty)("auto_L9_smutOrcPervert", false.toString());
  (0, import_kolmafia136.setProperty)("auto_haveSourceTerminal", false.toString());
  (0, import_kolmafia136.setProperty)("auto_hedge", "fast");
  (0, import_kolmafia136.setProperty)("auto_hippyInstead", false.toString());
  (0, import_kolmafia136.setProperty)("auto_holeinthesky", true.toString());
  (0, import_kolmafia136.setProperty)("auto_ignoreCombat", "");
  (0, import_kolmafia136.setProperty)("auto_ignoreFlyer", false.toString());
  (0, import_kolmafia136.setProperty)("auto_instakill", "");
  (0, import_kolmafia136.setProperty)("auto_instakillSource", "");
  (0, import_kolmafia136.setProperty)("auto_instakillSuccess", false.toString());
  (0, import_kolmafia136.setProperty)("auto_interruptedZones", "");
  (0, import_kolmafia136.setProperty)("auto_iotm_claim", "");
  (0, import_kolmafia136.setProperty)("auto_leaflet_done", false.toString());
  (0, import_kolmafia136.setProperty)("auto_lucky", "");
  (0, import_kolmafia136.setProperty)("auto_luckySource", "none");
  (0, import_kolmafia136.setProperty)("auto_mapperidot", "");
  (0, import_kolmafia136.setProperty)("auto_modernzmobiecount", "");
  (0, import_kolmafia136.setProperty)("auto_powerfulglove", "");
  (0, import_kolmafia136.setProperty)("auto_otherstuff", "");
  (0, import_kolmafia136.setProperty)("auto_paranoia", (-1).toString());
  (0, import_kolmafia136.setProperty)("auto_paranoia_counter", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_parkaSpikesDeployed", false.toString());
  (0, import_kolmafia136.setProperty)("auto_priorCharpaneMode", "0");
  (0, import_kolmafia136.setProperty)("auto_powerLevelAdvCount", "0");
  (0, import_kolmafia136.setProperty)("auto_powerLevelLastAttempted", "0");
  (0, import_kolmafia136.setProperty)("auto_pulls", "");
  (0, import_kolmafia136.removeProperty)("auto_shenZonesTurnsSpent");
  (0, import_kolmafia136.removeProperty)("auto_lastShenTurn");
  (0, import_kolmafia136.setProperty)("auto_sniffs", "");
  (0, import_kolmafia136.setProperty)("auto_stopMinutesToRollover", "5");
  (0, import_kolmafia136.setProperty)("auto_tracker_path", "");
  (0, import_kolmafia136.setProperty)("auto_wandOfNagamar", true.toString());
  (0, import_kolmafia136.setProperty)("auto_wineracksencountered", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_wishes", "");
  (0, import_kolmafia136.setProperty)("auto_writingDeskSummon", false.toString());
  (0, import_kolmafia136.setProperty)("auto_yellowRays", "");
  (0, import_kolmafia136.setProperty)("auto_replaces", "");
  (0, import_kolmafia136.setProperty)("auto_skipNuns", "false");
  (0, import_kolmafia136.setProperty)("auto_skipL12Farm", "false");
  (0, import_kolmafia136.setProperty)("auto_L12FarmStage", "0");
  (0, import_kolmafia136.setProperty)("choiceAdventure1003", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_junkspritesencountered", 0 .toString());
  (0, import_kolmafia136.setProperty)("auto_openedziggurat", false.toString());
  (0, import_kolmafia136.removeProperty)("auto_minedCells");
  (0, import_kolmafia136.removeProperty)("auto_shinningStarted");
  (0, import_kolmafia136.removeProperty)("auto_boughtCommerceGhostItem");
  (0, import_kolmafia136.removeProperty)("auto_saveMargarita");
  (0, import_kolmafia136.removeProperty)("auto_csDoWheel");
  (0, import_kolmafia136.removeProperty)("auto_hccsTurnSave");
  (0, import_kolmafia136.removeProperty)("auto_hccsNoConcludeDay");
  (0, import_kolmafia136.removeProperty)("auto_saveSausage");
  (0, import_kolmafia136.removeProperty)("auto_saveVintage");
  (0, import_kolmafia136.setProperty)("auto_dontUseCookBookBat", false.toString());
  (0, import_kolmafia136.setProperty)("auto_dietpills", 0 .toString());
  (0, import_kolmafia136.setProperty)("_auto_candyMapCompleted", false.toString());
  beehiveConsider(false);
  eudora_initializeSettings();
  heavyrains_initializeSettings();
  awol_initializeSettings();
  aosol_initializeSettings();
  theSource_initializeSettings();
  ed_initializeSettings();
  boris_initializeSettings();
  bond_initializeSettings();
  bugbear_initializeSettings();
  nuclear_initializeSettings();
  pete_initializeSettings();
  pokefam_initializeSettings();
  disguises_initializeSettings();
  glover_initializeSettings();
  bat_initializeSettings();
  koe_initializeSettings();
  kolhs_initializeSettings();
  plumber_initializeSettings();
  lowkey_initializeSettings();
  bhy_initializeSettings();
  qt_initializeSettings();
  jarlsberg_initializeSettings();
  robot_initializeSettings();
  wildfire_initializeSettings();
  zombieSlayer_initializeSettings();
  fotd_initializeSettings();
  lol_initializeSettings();
  small_initializeSettings();
  wereprof_initializeSettings();
  ag_initializeSettings();
  amw_initializeSettings();
  (0, import_kolmafia136.setProperty)("auto_doneInitializePath", (0, import_kolmafia136.myPath)().name);
  (0, import_kolmafia136.setProperty)("auto_doneInitialize", (0, import_kolmafia136.myAscensions)().toString());
  (0, import_kolmafia136.removeProperty)("_auto_reinitialize");
}

// src/relay_autoscend.ts
var setting = /* @__PURE__ */ _createClass(
  function setting2() {
    var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var description = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    _classCallCheck(this, setting2);
    this.name = name;
    this.type = type;
    this.description = description;
  }
);
var s;
function loadRelaySettings(file) {
  s = fileAsMap(file, [String, Number, ctor(setting)]);
}
function write_styles() {
  (0, import_kolmafia137.writeln)(
    `<style type='text/css'>body {width: 95%;margin: auto;background: #EAEAEA;text-align:center;padding:0;cursor:default;user-select: none;-webkit-user- select: none;-moz-user-select: text;}h1 {font-family:times;font-size:125%;color:#000;}table, th, td {border: 1px solid black;}</style>`
  );
}
function handleSetting(type_1, x) {
  var color;
  switch (type_1) {
    case "any":
      color = "#00ffff";
      break;
    case "pre":
      color = "#ffff00";
      break;
    case "post":
      color = "#00ff00";
      break;
    case "action":
      color = "#af6fbf";
      break;
    case "sharing":
      color = "#ff6644";
      break;
    default:
      color = "#ffffff";
      break;
  }
  var set = (s.get(type_1) ?? s.set(type_1, /* @__PURE__ */ new Map()).get(type_1)).get(x) ?? (s.get(type_1) ?? s.set(type_1, /* @__PURE__ */ new Map()).get(type_1)).set(x, new setting()).get(x);
  var name = (0, import_kolmafia137.entityEncode)(set.name);
  var encodedValue = (0, import_kolmafia137.entityEncode)((0, import_kolmafia137.getProperty)(name));
  switch (set.type) {
    case "boolean": {
      var checked = get(name, false) ? ` checked` : ``;
      (0, import_kolmafia137.write)(
        `<tr bgcolor=${color}><td align=center>${name}</td><td align=center><input type='checkbox' name='${name}' value='true'${checked}>`
      );
      (0, import_kolmafia137.writeln)(`</td><td>${(0, import_kolmafia137.entityEncode)(set.description)}</td></tr>`);
      break;
    }
    default:
      (0, import_kolmafia137.write)(`<tr bgcolor=${color}><td align=center>${name}</td>`);
      (0, import_kolmafia137.write)(
        `<td align='center'><input type='text' name='${name}' value="${encodedValue}" /></td>`
      );
      (0, import_kolmafia137.writeln)(`<td>${(0, import_kolmafia137.entityEncode)(set.description)}</td></tr>`);
      break;
  }
  (0, import_kolmafia137.writeln)(
    `<input type='hidden' name='${name}_oldvalue' value="${encodedValue}" />`
  );
}
function write_settings_key() {
  (0, import_kolmafia137.writeln)("<table><tr><th>Settings Color Codings</th></tr>");
  (0, import_kolmafia137.writeln)(
    "<tr bgcolor=#00ffff><td>Anytime: This setting can be changed at any time and takes effect immediately.</td></tr>"
  );
  (0, import_kolmafia137.writeln)(
    "<tr bgcolor=#ffff00><td>Pre: Next time we initialize settings for autoscend this will be used to determine what we should set some Post type settings to.</td></tr>"
  );
  (0, import_kolmafia137.writeln)(
    "<tr bgcolor=#00ff00><td>Post: settings for current ascension. Automatically reconfigured each ascension when we initialize setting for that ascension. After settings have been initialized you may change this. Under some circumstances they will be automatically changed mid ascension</td></tr>"
  );
  (0, import_kolmafia137.writeln)(
    "<tr bgcolor=#af6fbf><td>Action: This causes something to immediately (or when reasonable) happen.</td></tr>"
  );
  (0, import_kolmafia137.writeln)(
    "<tr bgcolor=#ff6644><td>Sharing: Allows sharing game data.</td></tr>"
  );
  (0, import_kolmafia137.writeln)("</table>");
}
function generateTrackingData(tracked, print_between, stacked) {
  var day = 0;
  var tracking = new Map(
    (0, import_kolmafia137.splitString)((0, import_kolmafia137.getProperty)(tracked), ", ").map((_v, _i) => [_i, _v])
  );
  if ((0, import_kolmafia137.getProperty)(tracked) === "") {
    return;
  }
  var tracking_stacked = /* @__PURE__ */ new Map();
  var stack_counts = /* @__PURE__ */ new Map();
  var unique_idx = -1;
  var last_event = "";
  var _iterator = _createForOfIteratorHelper(
    tracking
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray(_step.value, 2), event = _step$value[1];
      if (last_event !== event) {
        unique_idx++;
        tracking_stacked.set(unique_idx, event);
        stack_counts.set(unique_idx, 1);
        last_event = event;
      } else {
        stack_counts.set(unique_idx, (stack_counts.get(unique_idx) ?? 0) + 1);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var tracking_to_use = stacked ? tracking_stacked : tracking;
  var _iterator2 = _createForOfIteratorHelper(
    tracking_to_use
  ), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _step2$value = _slicedToArray(_step2.value, 2), idx = _step2$value[0], rawEvent = _step2$value[1];
      if (rawEvent === "") {
        continue;
      }
      var _event = rawEvent.replaceAll(/[()]/g, "");
      _event = _event.replaceAll("Asdon Marton:", "Asdon Martin -");
      _event = _event.replaceAll("CHEAT CODE:", "CHEAT CODE -");
      var current = new Map(
        (0, import_kolmafia137.splitString)(_event, ":").map((_v, _i) => [_i, _v])
      );
      var curDay = (0, import_kolmafia137.toInt)(current.get(0) ?? current.set(0, "").get(0));
      if (curDay > day) {
        day = curDay;
        if (day > 1) {
          (0, import_kolmafia137.writeln)("<br><br>");
        }
        (0, import_kolmafia137.writeln)(`<b>Day ${day}:</b>`);
      }
      var toWrite = "(";
      for (var i = 1, _last_6 = current.size - 1, _step_6 = 1, _up_6 = i <= _last_6, _inc_6 = _up_6 ? Math.abs(_step_6) : -Math.abs(_step_6); _up_6 ? i <= _last_6 : i >= _last_6; i += _inc_6) {
        toWrite = toWrite + (current.get(i) ?? current.set(i, "").get(i));
        if (i !== current.size - 1) {
          toWrite = `${toWrite}:`;
        }
      }
      if (stacked) {
        if ((stack_counts.get(idx) ?? stack_counts.set(idx, 0).get(idx)) > 1) {
          toWrite = `${toWrite} <b>x${(stack_counts.get(idx) ?? stack_counts.set(idx, 0).get(idx)).toString()}</b>`;
        }
      }
      toWrite = `${toWrite})${print_between}`;
      (0, import_kolmafia137.writeln)(toWrite);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function generateTrackingData$1(tracked) {
  var stacked = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  generateTrackingData(tracked, ",", stacked);
}
function generateTrackingDataSplitByNewLine(tracked) {
  var stacked = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  generateTrackingData(tracked, "<br>", stacked);
}
function write_familiar() {
  var hundred_fam = (0, import_kolmafia137.toFamiliar)((0, import_kolmafia137.getProperty)("auto_100familiar"));
  if (hundred_fam !== import_kolmafia137.Familiar.none) {
    if ((0, import_kolmafia137.turnsPlayed)() === 0) {
      var to_write = `100% familiar is set to = ${hundred_fam}. Turns played is at 0 so it might be possible to change this. So long as you have not done any free fights<br>`;
      (0, import_kolmafia137.writeln)(to_write);
      (0, import_kolmafia137.writeln)("<form action='' method='post'>");
      (0, import_kolmafia137.writeln)("<input type='hidden' name='auto_100familiar' value='none'/>");
      (0, import_kolmafia137.writeln)(
        "<input type='submit' name='' value='Disable 100% familiar run'/></form>"
      );
    } else {
      var _to_write = `100% familiar is set to = ${hundred_fam}<br>`;
      (0, import_kolmafia137.writeln)(_to_write);
    }
  } else {
    if ((0, import_kolmafia137.turnsPlayed)() === 0) {
      (0, import_kolmafia137.writeln)(
        "100% familiar has not been set. Turns played is at 0 so it might be possible to change this. So long as you have not done any free fights<br>"
      );
      (0, import_kolmafia137.writeln)("<form action='' method='post'>");
      (0, import_kolmafia137.writeln)(
        `<input type='hidden' name='auto_100familiar' value='${(0, import_kolmafia137.myFamiliar)()}'/>`
      );
      (0, import_kolmafia137.writeln)(
        "<input type='submit' name='' value='Set current familiar as 100% target'/></form>"
      );
    }
  }
}
function applySettingChanges() {
  var fields = (0, import_kolmafia137.formFields)();
  for (var _i2 = 0, _Object$keys = Object.keys(fields); _i2 < _Object$keys.length; _i2++) {
    var x = _Object$keys[_i2];
    if (!x.endsWith("_oldvalue")) {
      continue;
    }
    var prop = x.slice(0, -"_oldvalue".length);
    var newSetting = prop in fields ? fields[prop] : "false";
    var oldSetting = fields[x];
    if (oldSetting === newSetting) {
      if ((0, import_kolmafia137.getProperty)(prop) !== newSetting) {
        (0, import_kolmafia137.writeln)(
          `You did not change setting ${prop}. It changed since you last loaded the page, ignoring.<br>`
        );
      }
      continue;
    }
    if ((0, import_kolmafia137.getProperty)(prop) !== newSetting) {
      (0, import_kolmafia137.writeln)(`Changing setting ${prop} to ${newSetting}<br>`);
      (0, import_kolmafia137.setProperty)(prop, newSetting);
    }
  }
}
function write_locations_visited() {
  var ranked_list = /* @__PURE__ */ new Map();
  var _iterator3 = _createForOfIteratorHelper(
    $locations.all()
  ), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var loc = _step3.value;
      if (loc.turnsSpent > 0) {
        ranked_list.set(ranked_list.size, loc);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  ranked_list = new Map(
    _toConsumableArray(ranked_list.entries()).map((_ref) => {
      var _ref2 = _slicedToArray(_ref, 2), index = _ref2[0], value = _ref2[1];
      return { _k: index, _v: value, _expr: -value.turnsSpent };
    }).sort(
      (_a, _b) => _a._expr < _b._expr ? -1 : _a._expr > _b._expr ? 1 : 0
    ).map((e) => [e._k, e._v])
  );
  (0, import_kolmafia137.writeln)('<table style="margin-left:auto;margin-right:auto;">');
  (0, import_kolmafia137.writeln)("<tr><th>Location</th> <th>Turns</th></tr>");
  var _iterator4 = _createForOfIteratorHelper(
    ranked_list
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _step4$value = _slicedToArray(_step4.value, 2), _loc = _step4$value[1];
      (0, import_kolmafia137.writeln)(`<tr><td>${_loc.toString()}</td><td>${_loc.turnsSpent}</td></tr>`);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  (0, import_kolmafia137.writeln)("</table>");
}
function main() {
  if ((0, import_kolmafia137.formFields)()["extraSettings"] === void 0) {
    loadMain();
  } else {
    loadExtra();
  }
}
function loadMain() {
  auto_settings();
  initializeSettings();
  write_styles();
  (0, import_kolmafia137.writeln)("<html><head><title>autoscend manager</title>");
  (0, import_kolmafia137.writeln)("</head><body><h1>autoscend manager</h1>");
  (0, import_kolmafia137.writeln)("<form action='' method='post'>");
  (0, import_kolmafia137.writeln)("<input type='hidden' name='auto_interrupt' value='true'/>");
  (0, import_kolmafia137.writeln)(
    "<input type='hidden' name='auto_interrupt_oldvalue' value='false'/>"
  );
  (0, import_kolmafia137.writeln)(
    "<input type='submit' name='' value='Safely Stop Autoscend'/></form>"
  );
  write_familiar();
  if ((0, import_kolmafia137.myAscensions)() === (0, import_kolmafia137.toInt)((0, import_kolmafia137.getProperty)("auto_doneInitialize"))) {
    (0, import_kolmafia137.writeln)(
      "Settings have been initialized for current ascension. You may change Post type settings<br>"
    );
  } else {
    (0, import_kolmafia137.writeln)(
      "Settings have not been initialized for current ascension. Do not change Post type settings<br>"
    );
  }
  (0, import_kolmafia137.writeln)(
    `<br><a href="#" onclick="document.body.insertAdjacentHTML('beforeend','<form id=f method=post action=relay_autoscend.js?relay=true><input name=extraSettings value=1></form>');f.submit();return false;">For extra settings click here</a><br><br>`
  );
  loadRelaySettings("autoscend_settings.txt");
  applySettingChanges();
  (0, import_kolmafia137.writeln)("<form action='' method='post'>");
  (0, import_kolmafia137.writeln)(
    "<table><tr><th width=20%>Setting</th><th width=20%>Value</th><th width=60%>Description</th></tr>"
  );
  var get2 = (key) => s.has(key) ? s.get(key).keys() : [];
  var _iterator5 = _createForOfIteratorHelper(
    get2("any")
  ), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var x = _step5.value;
      handleSetting("any", x);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var _iterator6 = _createForOfIteratorHelper(
    get2("pre")
  ), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var _x = _step6.value;
      handleSetting("pre", _x);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  var _iterator7 = _createForOfIteratorHelper(
    get2("post")
  ), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var _x2 = _step7.value;
      handleSetting("post", _x2);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = _createForOfIteratorHelper(
    get2("action")
  ), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var _x3 = _step8.value;
      handleSetting("action", _x3);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var _iterator9 = _createForOfIteratorHelper(
    get2("sharing")
  ), _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
      var _x4 = _step9.value;
      handleSetting("sharing", _x4);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  (0, import_kolmafia137.writeln)(
    "<tr><td align=center colspan='3'><input type='submit' name='' value='Save Changes'/></td></tr></table></form>"
  );
  write_settings_key();
  if ((0, import_kolmafia137.getProperty)("auto_tracker_path") !== "") {
    (0, import_kolmafia137.writeln)(`<h2>${(0, import_kolmafia137.myPath)().toString()}</h2>`);
    generateTrackingData$1("auto_tracker_path");
  }
  (0, import_kolmafia137.writeln)("<h2>Banishes</h2>");
  generateTrackingData$1("auto_banishes");
  (0, import_kolmafia137.writeln)("<h2>Free Runaways</h2>");
  generateTrackingData$1("auto_freeruns");
  (0, import_kolmafia137.writeln)('<h2>Yellow Rays <img src="images/itemimages/eyes.gif"></h2>');
  generateTrackingData$1("auto_yellowRays");
  (0, import_kolmafia137.writeln)("<h2>Sniffing</h2>");
  generateTrackingData$1("auto_sniffs");
  (0, import_kolmafia137.writeln)("<h2>Copies</h2>");
  generateTrackingData$1("auto_copies");
  (0, import_kolmafia137.writeln)("<h2>Replaces</h2>");
  generateTrackingData$1("auto_replaces");
  (0, import_kolmafia137.writeln)("<h2>Instakills</h2>");
  generateTrackingData$1("auto_instakill");
  (0, import_kolmafia137.writeln)("<h2>Beaten Up</h2>");
  (0, import_kolmafia137.writeln)((0, import_kolmafia137.getProperty)("auto_beatenUpLocations"));
  (0, import_kolmafia137.writeln)("<h2>Forced Noncombats</h2>");
  generateTrackingDataSplitByNewLine("auto_forcedNC");
  (0, import_kolmafia137.writeln)("<h2>Eated</h2>");
  generateTrackingData$1("auto_eaten");
  (0, import_kolmafia137.writeln)("<h2>Drinkenated</h2>");
  generateTrackingData$1("auto_drunken");
  (0, import_kolmafia137.writeln)("<h2>Chewed</h2>");
  generateTrackingData$1("auto_chewed");
  if ((0, import_kolmafia137.getProperty)("auto_wishes") !== "" || (0, import_kolmafia137.itemAmount)(import_kolmafia137.Item.get("genie bottle")) > 0) {
    (0, import_kolmafia137.writeln)("<h2>Wishes</h2>");
    generateTrackingData$1("auto_wishes");
  }
  (0, import_kolmafia137.writeln)("<h2>Lucky Adventures</h2>");
  generateTrackingDataSplitByNewLine("auto_lucky");
  if (isActuallyEd()) {
    (0, import_kolmafia137.writeln)(
      '<h2>Lash of the Cobra <img src="images/itemimages/cobrahead.gif"></h2>'
    );
    generateTrackingData$1("auto_lashes");
    (0, import_kolmafia137.writeln)(
      '<h2>Talisman of Renenutet <img src="images/itemimages/tal_r.gif"></h2>'
    );
    generateTrackingData$1("auto_renenutet");
  }
  if (in_ocrs()) {
    (0, import_kolmafia137.writeln)("<h2>One Crazy Random Summer Fun-o-meter!</h2>");
    generateTrackingData$1("auto_funTracker");
  }
  if (!(0, import_kolmafia137.inHardcore)()) {
    (0, import_kolmafia137.writeln)("<h2>Pulls</h2>");
    generateTrackingData$1("auto_pulls");
  }
  if (auto_hasPowerfulGlove()) {
    (0, import_kolmafia137.writeln)("<h2>Powerful Glove</h2>");
    generateTrackingData$1("auto_powerfulglove");
  }
  if ((0, import_kolmafia137.getProperty)("auto_iotm_claim") !== "") {
    (0, import_kolmafia137.writeln)("<h2>IOTM Item/Effects Claimed.</h2>");
    generateTrackingData$1("auto_iotm_claim");
  }
  if ((0, import_kolmafia137.getProperty)("auto_mapperidot") !== "") {
    (0, import_kolmafia137.writeln)("<h2>Map the Monsters/Peridot of Peril</h2>");
    generateTrackingData$1("auto_mapperidot");
  }
  (0, import_kolmafia137.writeln)("<h2>Other Stuff</h2>");
  generateTrackingData$1("auto_otherstuff");
  (0, import_kolmafia137.writeln)("<h2>Info</h2>");
  (0, import_kolmafia137.writeln)(`Ascension: ${(0, import_kolmafia137.myAscensions)()}<br>`);
  (0, import_kolmafia137.writeln)(`Day: ${(0, import_kolmafia137.myDaycount)()}<br>`);
  (0, import_kolmafia137.writeln)(`Turns Played: ${(0, import_kolmafia137.myTurncount)()}<br>`);
  (0, import_kolmafia137.writeln)(`Tavern: ${(0, import_kolmafia137.getProperty)("tavernLayout")}<br>`);
  if (isActuallyEd()) {
    (0, import_kolmafia137.writeln)(`Combats: ${(0, import_kolmafia137.getProperty)("auto_edCombatCount")}<br>`);
    (0, import_kolmafia137.writeln)(`Combat Rounds: ${(0, import_kolmafia137.getProperty)("auto_edCombatRoundCount")}<br>`);
  }
  (0, import_kolmafia137.writeln)(`Autoscend Version: ${autoscend_current_version()}<br>`);
  (0, import_kolmafia137.writeln)("<h2>Locations visited</h2>");
  write_locations_visited();
  (0, import_kolmafia137.writeln)("<br>");
  (0, import_kolmafia137.writeln)("</body></html>");
}
function loadExtra() {
  write_styles();
  (0, import_kolmafia137.writeln)("<html><head><title>autoscend extra settings</title>");
  (0, import_kolmafia137.writeln)("</head><body><h1>autoscend extra settings</h1>");
  loadRelaySettings("autoscend_settings_extra.txt");
  (0, import_kolmafia137.writeln)(
    '<br><a href="relay_autoscend.js?relay=true">Return to main autoscend page</a><br><br>'
  );
  applySettingChanges();
  (0, import_kolmafia137.writeln)("<form action='' method='post'>");
  (0, import_kolmafia137.writeln)(
    "<table><tr><th width=20%>Setting</th><th width=20%>Value</th><th width=60%>Description</th></tr>"
  );
  var get2 = (key) => s.has(key) ? s.get(key).keys() : [];
  var _iterator0 = _createForOfIteratorHelper(
    get2("any")
  ), _step0;
  try {
    for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
      var x = _step0.value;
      handleSetting("any", x);
    }
  } catch (err) {
    _iterator0.e(err);
  } finally {
    _iterator0.f();
  }
  var _iterator1 = _createForOfIteratorHelper(
    get2("pre")
  ), _step1;
  try {
    for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
      var _x5 = _step1.value;
      handleSetting("pre", _x5);
    }
  } catch (err) {
    _iterator1.e(err);
  } finally {
    _iterator1.f();
  }
  var _iterator10 = _createForOfIteratorHelper(
    get2("post")
  ), _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
      var _x6 = _step10.value;
      handleSetting("post", _x6);
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  var _iterator11 = _createForOfIteratorHelper(
    get2("action")
  ), _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
      var _x7 = _step11.value;
      handleSetting("action", _x7);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  var _iterator12 = _createForOfIteratorHelper(
    get2("sharing")
  ), _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
      var _x8 = _step12.value;
      handleSetting("sharing", _x8);
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  (0, import_kolmafia137.writeln)(
    "<tr><td align=center colspan='3'><input type='submit' name='' value='Save Changes'/></td></tr></table></form>"
  );
  write_settings_key();
  (0, import_kolmafia137.writeln)("</body></html>");
}
