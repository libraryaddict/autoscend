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
var import_kolmafia137 = require("kolmafia");

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

// src/autoscend/auto_equipment.ts
var import_kolmafia136 = require("kolmafia");

// src/autoscend/auto_consume.ts
var import_kolmafia135 = require("kolmafia");

// src/autoscend.ts
var import_kolmafia134 = require("kolmafia");

// src/autoscend/auto_acquire.ts
var import_kolmafia122 = require("kolmafia");

// src/autoscend/auto_craft.ts
var import_kolmafia121 = require("kolmafia");

// src/autoscend/auto_util.ts
var import_kolmafia120 = require("kolmafia");

// src/autoscend/auto_adventure.ts
var import_kolmafia115 = require("kolmafia");

// src/autoscend/auto_zone.ts
var import_kolmafia114 = require("kolmafia");

// src/autoscend/autoscend_record.ts
var import_kolmafia3 = require("kolmafia");

// src/autoscend/iotms/mr2016.ts
var import_kolmafia113 = require("kolmafia");

// src/autoscend/auto_list.ts
var import_kolmafia4 = require("kolmafia");
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
var import_kolmafia112 = require("kolmafia");

// src/autoscend/auto_buff.ts
var import_kolmafia111 = require("kolmafia");

// src/autoscend/auto_familiar.ts
var import_kolmafia110 = require("kolmafia");

// src/autoscend/iotms/mr2014.ts
var import_kolmafia109 = require("kolmafia");

// src/autoscend/auto_powerlevel.ts
var import_kolmafia108 = require("kolmafia");

// src/autoscend/auto_providers.ts
var import_kolmafia107 = require("kolmafia");

// src/autoscend/iotms/clan.ts
var import_kolmafia105 = require("kolmafia");

// src/autoscend/paths/avatar_of_boris.ts
var import_kolmafia6 = require("kolmafia");

// src/autoscend/utils/kolmafiaUtils.ts
var import_kolmafia5 = require("kolmafia");
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
    (0, import_kolmafia5.fileToBuffer)(filename).split(/\r?\n/)
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
  return (0, import_kolmafia6.myPath)() === $path`Avatar of Boris`;
}

// src/autoscend/paths/avatar_of_jarlsberg.ts
var import_kolmafia7 = require("kolmafia");
function is_jarlsberg() {
  return (0, import_kolmafia7.myPath)() === $path`Avatar of Jarlsberg`;
}

// src/autoscend/paths/avatar_of_sneaky_pete.ts
var import_kolmafia8 = require("kolmafia");
function is_pete() {
  return (0, import_kolmafia8.myPath)() === $path`Avatar of Sneaky Pete`;
}

// src/autoscend/paths/casual.ts
var import_kolmafia104 = require("kolmafia");

// src/autoscend/quests/level_08.ts
var import_kolmafia103 = require("kolmafia");

// src/autoscend/auto_routing.ts
var import_kolmafia102 = require("kolmafia");

// src/autoscend/iotms/mr2018.ts
var import_kolmafia101 = require("kolmafia");

// src/autoscend/paths/actually_ed_the_undying.ts
var import_kolmafia100 = require("kolmafia");

// src/autoscend/iotms/elementalPlanes.ts
var import_kolmafia9 = require("kolmafia");

// src/autoscend/iotms/mr2015.ts
var import_kolmafia98 = require("kolmafia");

// src/autoscend/paths/avatar_of_west_of_loathing.ts
var import_kolmafia10 = require("kolmafia");

// src/autoscend/paths/gelatinous_noob.ts
var import_kolmafia12 = require("kolmafia");

// src/autoscend/iotms/mr2011.ts
var import_kolmafia11 = require("kolmafia");

// src/autoscend/paths/heavy_rains.ts
var import_kolmafia13 = require("kolmafia");
function in_heavyrains() {
  return (0, import_kolmafia13.myPath)() === $path`Heavy Rains`;
}

// src/autoscend/paths/kingdom_of_exploathing.ts
var import_kolmafia97 = require("kolmafia");

// src/autoscend/iotms/mr2019.ts
var import_kolmafia96 = require("kolmafia");

// src/autoscend/paths/dark_gyffte.ts
var import_kolmafia95 = require("kolmafia");

// src/autoscend/quests/level_12.ts
var import_kolmafia94 = require("kolmafia");

// src/autoscend/combat/auto_combat_quest.ts
var import_kolmafia92 = require("kolmafia");

// src/autoscend/paths/fall_of_the_dinosaurs.ts
var import_kolmafia14 = require("kolmafia");

// src/autoscend/paths/g_lover.ts
var import_kolmafia15 = require("kolmafia");
function in_glover() {
  return (0, import_kolmafia15.myPath)() === $path`G-Lover`;
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
var import_kolmafia90 = require("kolmafia");

// src/autoscend/paths/avant_guard.ts
var import_kolmafia66 = require("kolmafia");

// src/autoscend/iotms/mr2023.ts
var import_kolmafia65 = require("kolmafia");

// src/autoscend/combat/auto_combat_util.ts
var import_kolmafia64 = require("kolmafia");

// src/autoscend/iotms/mr2017.ts
var import_kolmafia17 = require("kolmafia");

// src/autoscend/paths/wereprofessor.ts
var import_kolmafia16 = require("kolmafia");
function in_wereprof() {
  return (0, import_kolmafia16.myPath)() === $path`WereProfessor`;
}
function is_werewolf() {
  if (!in_wereprof()) {
    return false;
  }
  if ((0, import_kolmafia16.haveEffect)($effect`Savage Beast`) > 0) {
    return true;
  }
  return false;
}
function is_professor() {
  if (!in_wereprof()) {
    return false;
  }
  if ((0, import_kolmafia16.haveEffect)($effect`Mild-Mannered Professor`) > 0) {
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
var import_kolmafia19 = require("kolmafia");

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

// src/autoscend/iotms/mr2020.ts
function mushroomGardenChoiceHandler(choice) {
  if (choice === 1410) {
    var growth = (0, import_kolmafia19.getProperty)("auto_mushroomGardenGrowth");
    var pick = 1;
    if (growth !== "") {
      pick = (0, import_kolmafia19.min)((0, import_kolmafia19.toInt)(growth), 11);
    }
    if ((0, import_kolmafia19.toInt)((0, import_kolmafia19.getProperty)("mushroomGardenCropLevel")) >= pick) {
      (0, import_kolmafia19.runChoice)(2);
    } else {
      (0, import_kolmafia19.runChoice)(1);
    }
  } else {
    (0, import_kolmafia19.abort)("unhandled choice in mushroomGardenChoiceHandler");
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
    monOpts.set(i, (0, import_kolmafia19.toMonster)((0, import_kolmafia19.toInt)(mons.group(1))));
    if (zoneRank(monOpts.get(i) ?? monOpts.set(i, import_kolmafia19.Monster.none).get(i), loc) <= zoneRank(
      monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia19.Monster.none).get(bestmon),
      loc
    )) {
      bestmon = i;
    }
    i += 1;
  }
  return monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia19.Monster.none).get(bestmon);
}
function cartographyChoiceHandler(choice, page) {
  auto_log_info(`cartographyChoiceHandler Running choice ${choice}`, "blue");
  if (choice === 1425) {
    if ((0, import_kolmafia19.itemAmount)($item`Orcish frat-paddle`) > 0) {
      (0, import_kolmafia19.runChoice)(1);
    } else if ((0, import_kolmafia19.itemAmount)($item`Orcish baseball cap`) > 0) {
      (0, import_kolmafia19.runChoice)(2);
    } else if ((0, import_kolmafia19.itemAmount)($item`Orcish cargo shorts`) > 0) {
      (0, import_kolmafia19.runChoice)(3);
    } else {
      (0, import_kolmafia19.runChoice)(4);
    }
  } else if (choice === 1427) {
    (0, import_kolmafia19.runChoice)(1);
  } else if (choice === 1428) {
    (0, import_kolmafia19.runChoice)(2);
  } else if (choice === 1429) {
    (0, import_kolmafia19.runChoice)(1);
  } else if (choice === 1430) {
    (0, import_kolmafia19.runChoice)(1);
  } else if (choice === 1431) {
    if (internalQuestStatus("questL10Garbage") === 9) {
      if ((0, import_kolmafia19.itemAmount)($item`model airship`) > 0) {
        (0, import_kolmafia19.runChoice)(1);
      } else if ((0, import_kolmafia19.haveEquipped)($item`Mohawk wig`)) {
        (0, import_kolmafia19.runChoice)(4);
      } else {
        (0, import_kolmafia19.runChoice)(3);
      }
    } else {
      (0, import_kolmafia19.runChoice)(1);
    }
  } else if (choice === 1432) {
    var fire_protestors = (0, import_kolmafia19.itemAmount)($item`Flamin' Whatshisname`) > 0 ? 10 : 3;
    var sleaze_amount = (0, import_kolmafia19.numericModifier)("sleaze damage") + (0, import_kolmafia19.numericModifier)("sleaze spell damage");
    var sleaze_protestors = (0, import_kolmafia19.squareRoot)(sleaze_amount);
    var lynyrd_protestors = (0, import_kolmafia19.haveEffect)($effect`Musky`) > 0 ? 6 : 3;
    var _iterator2 = _createForOfIteratorHelper(
      $items`lynyrdskin cap, lynyrdskin tunic, lynyrdskin breeches`
    ), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var it = _step2.value;
        if ((0, import_kolmafia19.equippedAmount)(it) > 0) {
          lynyrd_protestors += 5;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var best_protestors = (0, import_kolmafia19.max)(
      fire_protestors,
      (0, import_kolmafia19.max)(sleaze_protestors, lynyrd_protestors)
    );
    if (best_protestors === lynyrd_protestors) {
      (0, import_kolmafia19.runChoice)(2);
    } else if (best_protestors === sleaze_protestors) {
      (0, import_kolmafia19.runChoice)(1);
    } else if (best_protestors === fire_protestors) {
      (0, import_kolmafia19.runChoice)(3);
    }
  } else if (choice === 1433) {
    (0, import_kolmafia19.runChoice)(3);
  } else if (choice === 1434) {
    (0, import_kolmafia19.runChoice)(2);
  } else if (choice === 1435) {
    var enemy = auto_monsterToMap((0, import_kolmafia19.myLocation)(), page);
    if (enemy !== import_kolmafia19.Monster.none) {
      handleTracker$1(
        $skill`Map the Monsters`.toString(),
        enemy.toString(),
        "auto_mapperidot"
      );
      (0, import_kolmafia19.runChoice)(1, `heyscriptswhatsupwinkwink=${(0, import_kolmafia19.toInt)(enemy)}`);
    } else {
      (0, import_kolmafia19.abort)("trying to map a monster but don't know which monster to map!");
    }
  } else if (choice === 1436) {
    if (poolSkillPracticeGains() === 1 || currentPoolSkill() > 15) {
      (0, import_kolmafia19.runChoice)(2);
    } else {
      (0, import_kolmafia19.runChoice)(1);
    }
  } else {
    (0, import_kolmafia19.abort)("unhandled choice in cartographyChoiceHandler");
  }
}

// src/autoscend/iotms/mr2021.ts
var import_kolmafia63 = require("kolmafia");

// src/autoscend/paths/hattrick.ts
var import_kolmafia20 = require("kolmafia");

// src/autoscend/paths/kolhs.ts
var import_kolmafia21 = require("kolmafia");
function in_kolhs() {
  return (0, import_kolmafia21.myPath)() === $path`KOLHS`;
}
function kolhsChoiceHandler(choice) {
  auto_log_debug$1("Running kolhsChoiceHandler");
  {
    switch (choice) {
      case 700:
        if ((0, import_kolmafia21.haveEffect)($effect`Jamming with the Jocks`) > 0) {
          (0, import_kolmafia21.runChoice)(1);
        } else if ((0, import_kolmafia21.haveEffect)($effect`Nerd is the Word`) > 0) {
          (0, import_kolmafia21.runChoice)(2);
        } else if ((0, import_kolmafia21.haveEffect)($effect`Greaser Lightnin'`) > 0) {
          (0, import_kolmafia21.runChoice)(3);
        } else {
          auto_log_warning(
            "I do not have the necessary intrinsic to gain xp in [Delirium in the Cafeterium]",
            "red"
          );
          (0, import_kolmafia21.runChoice)(3);
        }
        break;
      case 772: {
        var target = (0, import_kolmafia21.toInt)((0, import_kolmafia21.getProperty)("_NC772_directive"));
        (0, import_kolmafia21.removeProperty)("_NC772_directive");
        if (target === 0) {
          (0, import_kolmafia21.abort)(
            "We are in [saved by the bell] and do not know what to do because _NC772_directive is not valid or set. Leaving will waste this NC so do something manually"
          );
        }
        if (target in (0, import_kolmafia21.availableChoiceOptions)()) {
          if (target === 3) {
            (0, import_kolmafia21.setProperty)("_yearbookClubVisitedToday", true.toString());
          }
          (0, import_kolmafia21.runChoice)(target);
        } else {
          (0, import_kolmafia21.abort)(
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
var import_kolmafia22 = require("kolmafia");
function in_lar() {
  return (0, import_kolmafia22.myPath)() === $path`Live. Ascend. Repeat.`;
}

// src/autoscend/paths/small.ts
var import_kolmafia23 = require("kolmafia");
function in_small() {
  return (0, import_kolmafia23.myPath)() === $path`A Shrunken Adventurer am I`;
}

// src/autoscend/paths/two_crazy_random_summer.ts
var import_kolmafia24 = require("kolmafia");
function in_tcrs() {
  return (0, import_kolmafia24.myPath)() === $path`Two Crazy Random Summer`;
}

// src/autoscend/paths/wildfire.ts
var import_kolmafia62 = require("kolmafia");

// src/autoscend/quests/level_11.ts
var import_kolmafia61 = require("kolmafia");

// src/autoscend/iotms/mr2022.ts
var import_kolmafia58 = require("kolmafia");

// src/autoscend/paths/pocket_familiars.ts
var import_kolmafia25 = require("kolmafia");
function in_pokefam() {
  return (0, import_kolmafia25.myPath)() === $path`Pocket Familiars`;
}

// src/autoscend/quests/level_09.ts
var import_kolmafia57 = require("kolmafia");

// src/autoscend/iotms/mr2024.ts
var import_kolmafia56 = require("kolmafia");

// src/c2t_apron.ts
var import_kolmafia26 = require("kolmafia");

// src/c2t_megg.ts
var import_kolmafia27 = require("kolmafia");
var c2t_megg_oldFam = import_kolmafia27.Familiar.none;
var c2t_megg_oldEq = import_kolmafia27.Item.none;

// src/autoscend/paths/adventurer_meats_world.ts
var import_kolmafia55 = require("kolmafia");

// src/autoscend/iotms/mr2025.ts
var import_kolmafia54 = require("kolmafia");

// src/autoscend/paths/zootomist.ts
var import_kolmafia52 = require("kolmafia");

// src/autoscend/quests/level_05.ts
var import_kolmafia51 = require("kolmafia");

// src/autoscend/paths/avatar_of_shadows_over_loathing.ts
var import_kolmafia28 = require("kolmafia");

// src/autoscend/paths/legacy_of_loathing.ts
var import_kolmafia29 = require("kolmafia");
function in_lol() {
  return (0, import_kolmafia29.myPath)() === $path`Legacy of Loathing`;
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
var import_kolmafia50 = require("kolmafia");

// src/autoscend/quests/level_02.ts
var import_kolmafia30 = require("kolmafia");
function spookyForestChoiceHandler(choice) {
  if (choice === 502) {
    if (internalQuestStatus("questL02Larva") === 0 && (0, import_kolmafia30.itemAmount)($item`mosquito larva`) === 0) {
      (0, import_kolmafia30.runChoice)(2);
    } else if (!(0, import_kolmafia30.hiddenTempleUnlocked)()) {
      if ((0, import_kolmafia30.itemAmount)($item`tree-holed coin`) === 0 && (0, import_kolmafia30.itemAmount)($item`Spooky Temple map`) === 0) {
        (0, import_kolmafia30.runChoice)(2);
      } else if ((0, import_kolmafia30.itemAmount)($item`Spooky Temple map`) === 0 || (0, import_kolmafia30.itemAmount)($item`Spooky-Gro fertilizer`) === 0) {
        (0, import_kolmafia30.runChoice)(3);
      } else {
        (0, import_kolmafia30.runChoice)(1);
      }
    } else {
      auto_log_warning$1(
        "In Arboreal Respite for some reason but we don't need a mosquito larva or to unlock the hidden temple!"
      );
      (0, import_kolmafia30.runChoice)(2);
    }
  } else if (choice === 503) {
    (0, import_kolmafia30.runChoice)(3);
  } else if (choice === 504) {
    if ((0, import_kolmafia30.itemAmount)($item`bar skin`) > 1) {
      (0, import_kolmafia30.runChoice)(2);
    } else if ((0, import_kolmafia30.itemAmount)($item`bar skin`) === 1) {
      (0, import_kolmafia30.runChoice)(1);
    }
    if (!(0, import_kolmafia30.hiddenTempleUnlocked)() && (0, import_kolmafia30.itemAmount)($item`spooky sapling`) === 0 && (0, import_kolmafia30.myMeat)() > 100) {
      (0, import_kolmafia30.runChoice)(3);
    }
    (0, import_kolmafia30.runChoice)(4);
  } else if (choice === 505) {
    if (internalQuestStatus("questL02Larva") === 0 && (0, import_kolmafia30.itemAmount)($item`mosquito larva`) === 0) {
      (0, import_kolmafia30.runChoice)(1);
    } else {
      (0, import_kolmafia30.runChoice)(2);
    }
  } else if (choice === 506) {
    if (!(0, import_kolmafia30.hiddenTempleUnlocked)() && (0, import_kolmafia30.itemAmount)($item`Spooky-Gro fertilizer`) === 0) {
      (0, import_kolmafia30.runChoice)(2);
    } else {
      (0, import_kolmafia30.runChoice)(3);
    }
  } else if (choice === 507) {
    if (!(0, import_kolmafia30.hiddenTempleUnlocked)() && (0, import_kolmafia30.itemAmount)($item`tree-holed coin`) > 0 && (0, import_kolmafia30.itemAmount)($item`Spooky Temple map`) === 0) {
      (0, import_kolmafia30.runChoice)(1);
    } else {
      (0, import_kolmafia30.runChoice)(3);
    }
  } else {
    (0, import_kolmafia30.abort)("unhandled choice in spookyForestChoiceHandler");
  }
}

// src/autoscend/quests/level_03.ts
var import_kolmafia31 = require("kolmafia");

// src/autoscend/quests/level_04.ts
var import_kolmafia32 = require("kolmafia");

// src/autoscend/quests/level_06.ts
var import_kolmafia33 = require("kolmafia");

// src/autoscend/quests/level_07.ts
var import_kolmafia35 = require("kolmafia");

// src/autoscend/paths/zombie_slayer.ts
var import_kolmafia34 = require("kolmafia");
function in_zombieSlayer() {
  return (0, import_kolmafia34.myPath)() === $path`Zombie Slayer`;
}
function zombieSlayer_usable(fam) {
  if (!in_zombieSlayer()) {
    return true;
  }
  return (0, import_kolmafia34.containsText)(fam.attributes, "undead");
}

// src/autoscend/quests/level_07.ts
function cyrptChoiceHandler(choice) {
  if (choice === 153) {
    (0, import_kolmafia35.runChoice)(4);
  } else if (choice === 155) {
    if (in_zombieSlayer() && ((0, import_kolmafia35.itemAmount)($item`talkative skull`) === 0 || !(0, import_kolmafia35.haveFamiliar)($familiar`Hovering Skull`))) {
      (0, import_kolmafia35.runChoice)(1);
    } else {
      (0, import_kolmafia35.runChoice)(5);
    }
  } else if (choice === 157) {
    (0, import_kolmafia35.runChoice)(4);
  } else if (choice === 523) {
    if (in_darkGyffte() && (0, import_kolmafia35.haveSkill)($skill`Flock of Bats Form`) && (0, import_kolmafia35.haveSkill)($skill`Sharp Eyes`) || auto_turbo()) {
      var desiredPills = (0, import_kolmafia35.inHardcore)() ? 6 : auto_turbo() ? 3 : 4;
      var dietingPillsUsed = 0;
      if ((0, import_kolmafia35.getProperty)("auto_chewed") === "") {
        dietingPillsUsed = 0;
      } else {
        var _iterator = _createForOfIteratorHelper(
          (0, import_kolmafia35.splitString)((0, import_kolmafia35.getProperty)("auto_chewed"), ",")
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var str = _step.value;
            if ((0, import_kolmafia35.containsText)((0, import_kolmafia35.toLowerCase)(str), "dieting pill")) {
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
        desiredPills -= (0, import_kolmafia35.myFullness)() / 2;
      } else {
        desiredPills -= dietingPillsUsed;
      }
      auto_log_info(
        `We want ${desiredPills} dieting pills and have ${(0, import_kolmafia35.itemAmount)($item`dieting pill`)}`,
        "blue"
      );
      if ((0, import_kolmafia35.itemAmount)($item`dieting pill`) < desiredPills) {
        (0, import_kolmafia35.runChoice)(6);
      } else if (5 in (0, import_kolmafia35.availableChoiceOptions)()) {
        (0, import_kolmafia35.runChoice)(5);
      } else {
        (0, import_kolmafia35.runChoice)(4);
      }
    } else if (5 in (0, import_kolmafia35.availableChoiceOptions)()) {
      (0, import_kolmafia35.runChoice)(5);
    } else {
      (0, import_kolmafia35.runChoice)(4);
    }
  } else if (choice === 527) {
    (0, import_kolmafia35.runChoice)(1);
  } else {
    (0, import_kolmafia35.abort)("unhandled choice in cyrptChoiceHandler");
  }
}

// src/autoscend/quests/level_10.ts
var import_kolmafia49 = require("kolmafia");

// src/autoscend/paths/way_of_the_surprising_fist.ts
var import_kolmafia36 = require("kolmafia");
function in_wotsf() {
  return (0, import_kolmafia36.myPath)() === $path`Way of the Surprising Fist`;
}

// src/autoscend/quests/level_13.ts
var import_kolmafia48 = require("kolmafia");

// src/autoscend/paths/bees_hate_you.ts
var import_kolmafia37 = require("kolmafia");
function in_bhy() {
  return (0, import_kolmafia37.myPath)() === $path`Bees Hate You`;
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
  if ((0, import_kolmafia37.containsText)(str, "b")) {
    return false;
  }
  if ((0, import_kolmafia37.containsText)(str, "B")) {
    return false;
  }
  return true;
}
function bhy_is_item_valid(it) {
  if (!in_bhy()) {
    (0, import_kolmafia37.abort)(
      "bhy_is_item_valid(item it) should never be called outside of bees hate you path."
    );
  }
  if ((0, import_kolmafia37.toSlot)(it) !== import_kolmafia37.Slot.none) {
    return (0, import_kolmafia37.isUnrestricted)(it);
  }
  if ($items`Cobb's Knob map, enchanted bean, ball polish, black market map, boring binder clip, beehive, electric boning knife`.includes(
    it
  )) {
    return true;
  }
  return bhy_usable(it.toString()) && (0, import_kolmafia37.isUnrestricted)(it);
}

// src/autoscend/paths/bugbear_invasion.ts
var import_kolmafia38 = require("kolmafia");
function in_bugbear() {
  return (0, import_kolmafia38.myPath)() === $path`Bugbear Invasion`;
}

// src/autoscend/paths/disguises_delimit.ts
var import_kolmafia39 = require("kolmafia");

// src/autoscend/paths/the_source.ts
var import_kolmafia47 = require("kolmafia");

// src/autoscend/quests/optional.ts
var import_kolmafia46 = require("kolmafia");

// src/autoscend/paths/grey_goo.ts
var import_kolmafia40 = require("kolmafia");

// src/autoscend/paths/license_to_adventure.ts
var import_kolmafia41 = require("kolmafia");
function in_lta() {
  return (0, import_kolmafia41.myPath)() === $path`License to Adventure`;
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
        if (it.inebriety > 0 && it.smallimage === "martini.gif" && (0, import_kolmafia41.isUnrestricted)(it)) {
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
var import_kolmafia42 = require("kolmafia");
function in_nuclear() {
  return (0, import_kolmafia42.myPath)() === $path`Nuclear Autumn`;
}

// src/autoscend/paths/picky.ts
var import_kolmafia43 = require("kolmafia");

// src/autoscend/paths/you_robot.ts
var import_kolmafia45 = require("kolmafia");

// src/autoscend/quests/level_any.ts
var import_kolmafia44 = require("kolmafia");
function oldLandfillChoiceHandler(choice) {
  if (choice === 794) {
    if ((0, import_kolmafia44.itemAmount)($item`junk junk`) === 0) {
      if ((0, import_kolmafia44.itemAmount)($item`old claw-foot bathtub`) === 0) {
        (0, import_kolmafia44.runChoice)(1);
      } else if ((0, import_kolmafia44.itemAmount)($item`old clothesline pole`) === 0) {
        (0, import_kolmafia44.runChoice)(2);
      } else if ((0, import_kolmafia44.itemAmount)($item`antique cigar sign`) === 0) {
        (0, import_kolmafia44.runChoice)(3);
      } else {
        (0, import_kolmafia44.runChoice)(1);
      }
    } else {
      if ((0, import_kolmafia44.itemAmount)($item`tangle of copper wire`) === 0) {
        (0, import_kolmafia44.runChoice)(2);
      } else if ((0, import_kolmafia44.itemAmount)($item`Junk-Bond`) === 0) {
        (0, import_kolmafia44.runChoice)(3);
      } else {
        (0, import_kolmafia44.runChoice)(1);
      }
    }
  } else if (choice === 795) {
    if ((0, import_kolmafia44.itemAmount)($item`old claw-foot bathtub`) === 0) {
      (0, import_kolmafia44.runChoice)(1);
    } else {
      (0, import_kolmafia44.runChoice)(2);
    }
  } else if (choice === 796) {
    if ((0, import_kolmafia44.itemAmount)($item`old clothesline pole`) === 0) {
      (0, import_kolmafia44.runChoice)(2);
    } else {
      (0, import_kolmafia44.runChoice)(3);
    }
  } else if (choice === 797) {
    if ((0, import_kolmafia44.itemAmount)($item`antique cigar sign`) === 0) {
      (0, import_kolmafia44.runChoice)(3);
    } else {
      (0, import_kolmafia44.runChoice)(1);
    }
  } else {
    (0, import_kolmafia44.abort)("unhandled choice in oldLandfillChoiceHandler");
  }
}
function dailyDungeonChoiceHandler(choice, options) {
  switch (choice) {
    case 689:
      (0, import_kolmafia44.runChoice)(1);
      break;
    case 690:
    // The First Chest Isn't the Deepest. (Daily Dungeon 5th room)
    case 691:
      if (options.has(4)) {
        (0, import_kolmafia44.runChoice)(4);
        if (options.has(2)) {
          (0, import_kolmafia44.runChoice)(2);
        } else {
          (0, import_kolmafia44.runChoice)(3);
        }
      } else if (options.has(2)) {
        (0, import_kolmafia44.runChoice)(2);
      } else {
        (0, import_kolmafia44.runChoice)(3);
      }
      break;
    case 692:
      if (options.has(3)) {
        (0, import_kolmafia44.runChoice)(3);
      } else if (options.has(7)) {
        (0, import_kolmafia44.runChoice)(7);
      } else if ((0, import_kolmafia44.itemAmount)($item`skeleton key`) > 1 || (0, import_kolmafia44.itemAmount)($item`skeleton key`) > 0 && (0, import_kolmafia44.containsText)(
        (0, import_kolmafia44.getProperty)("nsTowerDoorKeysUsed"),
        $item`skeleton key`.toString()
      )) {
        (0, import_kolmafia44.runChoice)(2);
      } else if ((0, import_kolmafia44.myPrimestat)() === $stat`Muscle` && (0, import_kolmafia44.myBuffedstat)($stat`Muscle`) >= 30) {
        (0, import_kolmafia44.runChoice)(4);
      } else if ((0, import_kolmafia44.myPrimestat)() === $stat`Mysticality` && (0, import_kolmafia44.myBuffedstat)($stat`Mysticality`) >= 30) {
        (0, import_kolmafia44.runChoice)(5);
      } else if ((0, import_kolmafia44.myPrimestat)() === $stat`Moxie` && (0, import_kolmafia44.myBuffedstat)($stat`Moxie`) >= 30) {
        (0, import_kolmafia44.runChoice)(6);
      } else {
        (0, import_kolmafia44.abort)(
          "I made an error and tried to adventure in the daily dungeon when I have no means of handling [I Wanna Be a Door]"
        );
      }
      break;
    case 693:
      if (options.has(4)) {
        (0, import_kolmafia44.runChoice)(4);
      } else if (options.has(2)) {
        (0, import_kolmafia44.runChoice)(2);
      } else {
        (0, import_kolmafia44.runChoice)(1);
      }
      break;
    default:
      (0, import_kolmafia44.abort)("unhandled choice in dailyDungeonChoiceHandler");
      break;
  }
}

// src/autoscend/paths/you_robot.ts
function in_robot() {
  return (0, import_kolmafia45.myPath)() === $path`You, Robot`;
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
      (0, import_kolmafia45.abort)(
        `boolean robot_cpu(int choice) does not recognize the choice: ${choice}`
      );
  }
  if ((0, import_kolmafia45.containsText)((0, import_kolmafia45.getProperty)("youRobotCPUUpgrades"), upgrade)) {
    return true;
  } else if (!want_buy) {
    return false;
  }
  if ((0, import_kolmafia45.myRobotEnergy)() < energy_cost) {
    return false;
  }
  var starting_energy = (0, import_kolmafia45.myRobotEnergy)();
  auto_log_info$1(`Upgrading CPU with ${name}`);
  (0, import_kolmafia45.visitUrl)("place.php?whichplace=scrapheap&action=sh_configure");
  (0, import_kolmafia45.visitUrl)("choice.php?whichchoice=1445&show=cpus");
  (0, import_kolmafia45.visitUrl)(
    `choice.php?pwd&whichchoice=1445&part=cpus&show=cpus&option=2&p=${upgrade}`
  );
  if ((0, import_kolmafia45.myRobotEnergy)() !== starting_energy - energy_cost) {
    (0, import_kolmafia45.abort)(`Mysteriously failed to upgrade the CPU with ${choice}. Beep Boop.`);
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
        var robot_need_mus = (0, import_kolmafia45.myPrimestat)() === $stat`Muscle` || (0, import_kolmafia45.myBasestat)($stat`Muscle`) < 62;
        if ((0, import_kolmafia45.myMeat)() < 1e3 + meatReserve() && auto_is_valid($item`old leather wallet`) && !robot_need_mus) {
          (0, import_kolmafia45.runChoice)(1);
        } else if ((0, import_kolmafia45.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia45.myPrimestat)() === $stat`Muscle`) {
          (0, import_kolmafia45.runChoice)(3);
        } else {
          (0, import_kolmafia45.runChoice)(2);
        }
        break;
      }
      case 878: {
        var robot_need_mys = (0, import_kolmafia45.myPrimestat)() === $stat`Mysticality` || (0, import_kolmafia45.myBasestat)($stat`Mysticality`) < 70;
        var needSpectacles = (0, import_kolmafia45.itemAmount)($item`Lord Spookyraven's spectacles`) === 0 && internalQuestStatus("questL11Manor") < 2;
        if (needSpectacles) {
          (0, import_kolmafia45.runChoice)(3);
        } else if ((0, import_kolmafia45.itemAmount)($item`disposable instant camera`) === 0 && internalQuestStatus("questL11Palindome") < 1) {
          (0, import_kolmafia45.runChoice)(4);
        } else if (!robot_need_mys || (0, import_kolmafia45.myMeat)() < 1e3 + meatReserve()) {
          (0, import_kolmafia45.runChoice)(1);
        } else if ((0, import_kolmafia45.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia45.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia45.runChoice)(5);
        } else {
          (0, import_kolmafia45.runChoice)(2);
        }
        break;
      }
      case 879: {
        var options = new Map(
          Object.entries((0, import_kolmafia45.availableChoiceOptions)()).map(
            (_ref) => {
              var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
              return [
                (0, import_kolmafia45.toInt)(_k),
                _v
              ];
            }
          )
        );
        if (options.has(4)) {
          (0, import_kolmafia45.runChoice)(4);
        } else if ((0, import_kolmafia45.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia45.myPrimestat)() === $stat`Moxie`) {
          (0, import_kolmafia45.runChoice)(5);
        } else {
          (0, import_kolmafia45.runChoice)(1);
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
        (0, import_kolmafia46.runChoice)(3);
      } else {
        (0, import_kolmafia46.runChoice)(2);
      }
    } else {
      (0, import_kolmafia46.runChoice)(1);
    }
  } else if (choice === 23) {
    if (possessEquipment($item`stuffed shoulder parrot`)) {
      if (possessEquipment($item`swashbuckling pants`)) {
        (0, import_kolmafia46.runChoice)(3);
      } else {
        (0, import_kolmafia46.runChoice)(2);
      }
    } else {
      (0, import_kolmafia46.runChoice)(1);
    }
  } else if (choice === 24) {
    if (possessEquipment($item`stuffed shoulder parrot`)) {
      if (possessEquipment($item`eyepatch`)) {
        (0, import_kolmafia46.runChoice)(2);
      } else {
        (0, import_kolmafia46.runChoice)(3);
      }
    } else {
      (0, import_kolmafia46.runChoice)(1);
    }
  } else {
    (0, import_kolmafia46.abort)("unhandled choice in piratesCoveChoiceHandler");
  }
}
function barrrneysBarrrChoiceHandler(choice) {
  auto_log_info(`barrrneysBarrrChoiceHandler Running choice ${choice}`, "blue");
  if (choice === 184) {
    if ((0, import_kolmafia46.myPrimestat)() === $stat`Mysticality`) {
      (0, import_kolmafia46.runChoice)(3);
    } else {
      (0, import_kolmafia46.runChoice)(1);
    }
  } else if (choice === 185) {
    (0, import_kolmafia46.runChoice)(3);
  } else if (choice === 186) {
    if ((0, import_kolmafia46.myPrimestat)() === $stat`Moxie`) {
      (0, import_kolmafia46.runChoice)(3);
    } else {
      (0, import_kolmafia46.runChoice)(1);
    }
  } else {
    (0, import_kolmafia46.abort)("unhandled choice in barrrneysBarrrChoiceHandler");
  }
}
function fcleChoiceHandler(choice) {
  if (choice === 191) {
    if ((0, import_kolmafia46.itemAmount)($item`valuable trinket`) > 0) {
      (0, import_kolmafia46.runChoice)(2);
    } else {
      switch ((0, import_kolmafia46.myPrimestat)()) {
        case $stat`Muscle`:
          (0, import_kolmafia46.runChoice)(3);
          break;
        case $stat`Mysticality`:
          (0, import_kolmafia46.runChoice)(4);
          break;
        case $stat`Moxie`:
          (0, import_kolmafia46.runChoice)(1);
          break;
      }
    }
  } else {
    (0, import_kolmafia46.abort)("unhandled choice in fcleChoiceHandler");
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
    (0, import_kolmafia49.runChoice)(1);
  } else if (choice === 670) {
    if (internalQuestStatus("questL10Garbage") < 8 && (0, import_kolmafia49.equippedAmount)($item`amulet of extreme plot significance`) > 0) {
      (0, import_kolmafia49.runChoice)(4);
    } else {
      (0, import_kolmafia49.runChoice)(1);
    }
  } else if (choice === 671) {
    if ((0, import_kolmafia49.itemAmount)($item`massive dumbbell`) > 0) {
      (0, import_kolmafia49.runChoice)(1);
    } else {
      (0, import_kolmafia49.runChoice)(4);
    }
  } else {
    (0, import_kolmafia49.abort)("unhandled choice in castleBasementChoiceHandler");
  }
}
function castleTopFloorChoiceHandler(choice) {
  if (choice === 675) {
    if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia49.itemAmount)($item`drum 'n' bass 'n' drum 'n' bass record`) > 0) {
      (0, import_kolmafia49.runChoice)(2);
    } else if (in_koe() && (0, import_kolmafia49.itemAmount)($item`model airship`) === 0) {
      (0, import_kolmafia49.runChoice)(1);
    } else {
      (0, import_kolmafia49.runChoice)(4);
    }
  } else if (choice === 676) {
    if ((0, import_kolmafia49.equippedAmount)($item`Mohawk wig`) > 0 || internalQuestStatus("questL10Garbage") >= 10) {
      (0, import_kolmafia49.runChoice)(4);
    } else {
      (0, import_kolmafia49.runChoice)(3);
    }
  } else if (choice === 677) {
    if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia49.itemAmount)($item`model airship`) > 0) {
      (0, import_kolmafia49.runChoice)(1);
    } else if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia49.itemAmount)($item`drum 'n' bass 'n' drum 'n' bass record`) > 0 || in_koe()) {
      (0, import_kolmafia49.runChoice)(4);
    } else {
      (0, import_kolmafia49.runChoice)(2);
    }
  } else if (choice === 678) {
    if (internalQuestStatus("questL10Garbage") < 10 && (0, import_kolmafia49.equippedAmount)($item`Mohawk wig`) > 0) {
      (0, import_kolmafia49.runChoice)(1);
    } else if (internalQuestStatus("questL10Garbage") < 10) {
      (0, import_kolmafia49.runChoice)(4);
    } else {
      (0, import_kolmafia49.runChoice)(3);
    }
  } else if (choice === 679) {
    if (isActuallyEd()) {
      (0, import_kolmafia49.runChoice)(2);
    } else {
      (0, import_kolmafia49.runChoice)(1);
    }
  } else if (choice === 680) {
    (0, import_kolmafia49.runChoice)(1);
  } else {
    (0, import_kolmafia49.abort)("unhandled choice in castleTopFloorChoiceHandler");
  }
}
function L10_needUmbrella() {
  var _iterator = _createForOfIteratorHelper(
    $items`titanium assault umbrella, unbreakable umbrella`
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var it = _step.value;
      if (auto_is_valid(it) && (0, import_kolmafia49.availableAmount)(it) > 0) {
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
var import_kolmafia53 = require("kolmafia");
function auto_haveArchaeologistSpade() {
  if (auto_is_valid($item`Archaeologist's Spade`) && (0, import_kolmafia53.availableAmount)($item`Archaeologist's Spade`) > 0) {
    return true;
  }
  return false;
}
function auto_spadeDigsRemaining() {
  if (!auto_haveArchaeologistSpade()) {
    return 0;
  }
  return 11 - (0, import_kolmafia53.toInt)((0, import_kolmafia53.getProperty)("_archSpadeDigs"));
}
function legendaryNoodlesChoiceHandler() {
  var target_choice;
  if ((0, import_kolmafia53.toBoolean)((0, import_kolmafia53.getProperty)("auto_forceCombatWithLegendaryNoodles"))) {
    target_choice = 2;
    (0, import_kolmafia53.setProperty)("auto_forceCombatWithLegendaryNoodles", false.toString());
  } else if (!(0, import_kolmafia53.toBoolean)(
    // or use a spleen instead of a stomach
    (0, import_kolmafia53.getProperty)("_legendaryNoodlesSpleen")
  ) && spleen_left() > 0 && !isActuallyEd()) {
    target_choice = 1;
  } else {
    target_choice = 4;
  }
  if (target_choice in (0, import_kolmafia53.availableChoiceOptions)()) {
    (0, import_kolmafia53.runChoice)(target_choice);
  } else {
    (0, import_kolmafia53.runChoice)(5);
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
  if ((0, import_kolmafia54.itemAmount)($item`star chart`) === 0) {
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
    (0, import_kolmafia54.runChoice)(2);
  }
  var loc = (0, import_kolmafia54.myLocation)();
  var mons = new AshMatcher('bandersnatch" value="(\\d+)', page);
  var monOpts = /* @__PURE__ */ new Map();
  var i = 0;
  var bestmon = 0;
  while (mons.find()) {
    monOpts.set(i, (0, import_kolmafia54.toMonster)((0, import_kolmafia54.toInt)(mons.group(1))));
    if (peridotManuallyDesiredMonsters().has(
      monOpts.get(i) ?? monOpts.set(i, import_kolmafia54.Monster.none).get(i)
    )) {
      bestmon = i;
      break;
    }
    if (zoneRank(monOpts.get(i) ?? monOpts.set(i, import_kolmafia54.Monster.none).get(i), loc) <= zoneRank(
      monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia54.Monster.none).get(bestmon),
      loc
    )) {
      bestmon = i;
    }
    i += 1;
  }
  var popChoice = monOpts.get(bestmon) ?? monOpts.set(bestmon, import_kolmafia54.Monster.none).get(bestmon);
  if ((0, import_kolmafia54.toInt)(popChoice) === 0 || auto_peridotSetZone(loc)) {
    handleTracker$2(
      $item`Peridot of Peril`.toString(),
      loc.toString(),
      "Peace out",
      "auto_mapperidot"
    );
    (0, import_kolmafia54.runChoice)(2);
    return;
  }
  handleTracker$2(
    $item`Peridot of Peril`.toString(),
    loc.toString(),
    popChoice.toString(),
    "auto_mapperidot"
  );
  (0, import_kolmafia54.runChoice)(1, `bandersnatch=${(0, import_kolmafia54.toInt)(popChoice)}`);
  return;
}
function auto_haveMobiusRing() {
  var ring = $item`Möbius ring`;
  return auto_is_valid(ring) && possessEquipment(ring);
}
function auto_paradoxicity() {
  (0, import_kolmafia54.visitUrl)("charpane.php", false);
  return (0, import_kolmafia54.myParadoxicity)();
}
function mobiusChoiceHandler(choice, page) {
  if (!auto_haveMobiusRing()) {
    (0, import_kolmafia54.runChoice)(1);
  }
  var choices = new Map(
    Object.entries((0, import_kolmafia54.availableChoiceOptions)()).map((_ref3) => {
      var _ref4 = _slicedToArray(_ref3, 2), _k = _ref4[0], _v = _ref4[1];
      return [(0, import_kolmafia54.toInt)(_k), _v];
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
    (0, import_kolmafia54.runChoice)(num);
  }
  var pos;
  if (in_amw()) {
    pos = "Give your past self investment tips";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
    if ((0, import_kolmafia54.myDaycount)() > 1) {
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
    switch ((0, import_kolmafia54.myPrimestat)()) {
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
  if ((0, import_kolmafia54.toInt)((0, import_kolmafia54.getProperty)("_clocksUsed")) < 2) {
    pos = "Go back and set an alarm";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      if ((0, import_kolmafia54.itemAmount)($item`clock`) > 0) {
        (0, import_kolmafia54.use)(1, $item`clock`);
      }
      return;
    }
    pos = "Go back and take a 20-year-long nap";
    if (choiceMap.has(pos)) {
      mobiusChoice(pos);
      return;
    }
  }
  if ((0, import_kolmafia54.haveEffect)($effect`Lifted by your Bootstraps`) === 0) {
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
  (0, import_kolmafia54.runChoice)(1);
  return;
}

// src/autoscend/paths/adventurer_meats_world.ts
function in_amw() {
  return (0, import_kolmafia55.myPath)() === $path`Adventurer Meats World`;
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
        if ((0, import_kolmafia56.containsText)((0, import_kolmafia56.toLowerCase)(str), perk)) {
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
  (0, import_kolmafia56.runChoice)(dcchoice);
}

// src/autoscend/iotms/mr2022.ts
function juneCleaverChoiceHandler(choice) {
  switch (choice) {
    case 1467:
      if ((0, import_kolmafia58.haveSkill)($skill`Tongue of the Walrus`) || (0, import_kolmafia58.itemAmount)($item`personal massager`) > 0) {
        (0, import_kolmafia58.runChoice)(3);
      } else if ((0, import_kolmafia58.myPrimestat)() === $stat`Mysticality` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma()) || (0, import_kolmafia58.myPrimestat)() === $stat`Moxie` && (0, import_kolmafia58.myLevel)() > 12 && disregardInstantKarma() === false) {
        (0, import_kolmafia58.runChoice)(2);
      } else {
        (0, import_kolmafia58.runChoice)(1);
      }
      break;
    case 1468:
      if ((0, import_kolmafia58.myPrimestat)() === $stat`Moxie` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma()) || (0, import_kolmafia58.myPrimestat)() === $stat`Muscle` && (0, import_kolmafia58.myLevel)() > 12 && disregardInstantKarma() === false) {
        (0, import_kolmafia58.runChoice)(1);
      } else if ((0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("_juneCleaverSkips")) < 5) {
        (0, import_kolmafia58.runChoice)(4);
      } else {
        (0, import_kolmafia58.runChoice)(2);
      }
      break;
    case 1469:
      if ((0, import_kolmafia58.myMeat)() < meatReserve()) {
        (0, import_kolmafia58.runChoice)(3);
      } else if (auto_canDrink($item`Dad's brandy`) && (0, import_kolmafia58.myInebriety)() < (0, import_kolmafia58.inebrietyLimit)()) {
        (0, import_kolmafia58.runChoice)(2);
      } else {
        (0, import_kolmafia58.runChoice)(3);
      }
      break;
    case 1470:
      if ((0, import_kolmafia58.canEquip)($item`teacher's pen`) && (0, import_kolmafia58.availableAmount)($item`teacher's pen`) < 1) {
        (0, import_kolmafia58.runChoice)(2);
      } else if ((0, import_kolmafia58.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia58.runChoice)(3);
      } else if ((0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("_juneCleaverSkips")) < 5) {
        (0, import_kolmafia58.runChoice)(4);
      } else {
        (0, import_kolmafia58.runChoice)(2);
      }
      break;
    case 1471:
      if ((0, import_kolmafia58.getProperty)("sidequestNunsCompleted") === "none" && (0, import_kolmafia58.getProperty)("auto_skipNuns") === "false" && (0, import_kolmafia58.itemAmount)($item`savings bond`) === 0) {
        (0, import_kolmafia58.runChoice)(1);
      } else if ((0, import_kolmafia58.myPrimestat)() === $stat`Mysticality` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia58.runChoice)(3);
      } else {
        (0, import_kolmafia58.runChoice)(1);
      }
      break;
    case 1472:
      (0, import_kolmafia58.runChoice)(1);
      break;
    case 1473:
      if ((0, import_kolmafia58.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia58.runChoice)(1);
      } else if ((0, import_kolmafia58.toInt)((0, import_kolmafia58.getProperty)("_juneCleaverSkips")) < 5) {
        (0, import_kolmafia58.runChoice)(4);
      } else {
        (0, import_kolmafia58.runChoice)(3);
      }
      break;
    case 1474:
      if ((0, import_kolmafia58.canEat)() && (0, import_kolmafia58.myLevel)() < 13 && have_fireworks_shop() && auto_is_valid($item`red rocket`) && !in_darkGyffte() && !is_jarlsberg() && !in_tcrs() && auto_is_valid(
        //paths that can eat but can't eat guilty sprouts/won't get the stats from it anyway
        $item`guilty sprout`
      ) && (0, import_kolmafia58.itemAmount)($item`guilty sprout`) === 0) {
        (0, import_kolmafia58.runChoice)(2);
      }
      if ((0, import_kolmafia58.myPrimestat)() === $stat`Mysticality` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia58.runChoice)(1);
      } else if ((0, import_kolmafia58.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia58.runChoice)(3);
      } else {
        (0, import_kolmafia58.runChoice)(2);
      }
      break;
    case 1475:
      if ((0, import_kolmafia58.availableAmount)($item`mother's necklace`) < 1) {
        (0, import_kolmafia58.runChoice)(1);
      } else if ((0, import_kolmafia58.myPrimestat)() === $stat`Muscle` && ((0, import_kolmafia58.myLevel)() < 13 || disregardInstantKarma())) {
        (0, import_kolmafia58.runChoice)(2);
      } else {
        (0, import_kolmafia58.runChoice)(1);
      }
      break;
    default:
      (0, import_kolmafia58.abort)("unhandled choice in juneCleaverChoiceHandler");
  }
}

// src/autoscend/paths/one_crazy_random_summer.ts
var import_kolmafia59 = require("kolmafia");

// src/autoscend/paths/quantum_terrarium.ts
var import_kolmafia60 = require("kolmafia");
function in_quantumTerrarium() {
  return (0, import_kolmafia60.myPath)() === $path`Quantum Terrarium`;
}

// src/autoscend/quests/level_11.ts
function hauntedBedroomChoiceHandler(choice, options) {
  if (choice === 876) {
    if ((0, import_kolmafia61.myMeat)() < 1e3 + meatReserve() && auto_is_valid($item`old leather wallet`) && !in_wotsf() || in_amw()) {
      (0, import_kolmafia61.runChoice)(1);
    } else if ((0, import_kolmafia61.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia61.myPrimestat)() === $stat`Muscle` && (0, import_kolmafia61.myBuffedstat)($stat`Muscle`) < 150) {
      (0, import_kolmafia61.runChoice)(3);
    } else {
      (0, import_kolmafia61.runChoice)(2);
    }
  } else if (choice === 877) {
    (0, import_kolmafia61.runChoice)(1);
  } else if (choice === 878) {
    var needSpectacles = !possessEquipment($item`Lord Spookyraven's spectacles`) && internalQuestStatus("questL11Manor") < 2;
    if (is_boris() || in_wotsf() || in_nuclear() && (0, import_kolmafia61.inHardcore)()) {
      needSpectacles = false;
    }
    if (needSpectacles) {
      (0, import_kolmafia61.runChoice)(3);
    } else if ((0, import_kolmafia61.itemAmount)($item`disposable instant camera`) === 0 && internalQuestStatus("questL11Palindome") < 1) {
      (0, import_kolmafia61.runChoice)(4);
    } else if ((0, import_kolmafia61.myPrimestat)() !== $stat`Mysticality` || (0, import_kolmafia61.myMeat)() < 1e3 + meatReserve() || in_amw()) {
      (0, import_kolmafia61.runChoice)(1);
    } else if ((0, import_kolmafia61.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia61.myPrimestat)() === $stat`Mysticality` && (0, import_kolmafia61.myBuffedstat)($stat`Mysticality`) < 150) {
      (0, import_kolmafia61.runChoice)(5);
    } else {
      (0, import_kolmafia61.runChoice)(2);
    }
  } else if (choice === 879) {
    if (options.has(4)) {
      (0, import_kolmafia61.runChoice)(4);
    }
    if (in_bhy() && (0, import_kolmafia61.itemAmount)($item`antique hand mirror`) < 1) {
      (0, import_kolmafia61.runChoice)(3);
    } else if ((0, import_kolmafia61.itemAmount)($item`ghost key`) > 0 && (0, import_kolmafia61.myPrimestat)() === $stat`Moxie` && (0, import_kolmafia61.myBuffedstat)($stat`Moxie`) < 150) {
      (0, import_kolmafia61.runChoice)(5);
    } else {
      (0, import_kolmafia61.runChoice)(1);
    }
  } else if (choice === 880) {
    if (internalQuestStatus("questM21Dance") < 2 && (0, import_kolmafia61.itemAmount)($item`Lady Spookyraven's finest gown`) === 0) {
      (0, import_kolmafia61.runChoice)(1);
    } else {
      (0, import_kolmafia61.runChoice)(2);
    }
  } else {
    (0, import_kolmafia61.abort)("unhandled choice in hauntedBedroomChoiceHandler");
  }
}
function blackForestChoiceHandler(choice) {
  if (choice === 923) {
    if (5 in (0, import_kolmafia61.availableChoiceOptions)()) {
      (0, import_kolmafia61.runChoice)(5);
      (0, import_kolmafia61.runChoice)(1);
    } else {
      (0, import_kolmafia61.runChoice)(1);
    }
  } else if (choice === 924) {
    if ((0, import_kolmafia61.toBoolean)((0, import_kolmafia61.getProperty)("auto_getBeehive")) && (0, import_kolmafia61.myAdventures)() > 3) {
      (0, import_kolmafia61.runChoice)(3);
    } else if (!possessEquipment($item`blackberry galoshes`) && (0, import_kolmafia61.itemAmount)($item`blackberry`) >= 3 && !in_darkGyffte()) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(1);
    }
  } else if (choice === 925) {
    (0, import_kolmafia61.runChoice)(5);
  } else if (choice === 926) {
    (0, import_kolmafia61.runChoice)(4);
  } else if (choice === 927) {
    (0, import_kolmafia61.runChoice)(3);
  } else if (choice === 928) {
    if (!possessEquipment($item`blackberry galoshes`) && (0, import_kolmafia61.itemAmount)($item`blackberry`) >= 3 && !in_darkGyffte()) {
      (0, import_kolmafia61.runChoice)(4);
    } else {
      (0, import_kolmafia61.runChoice)(5);
    }
  } else if (choice === 1018) {
    if ((0, import_kolmafia61.toBoolean)((0, import_kolmafia61.getProperty)("auto_getBeehive")) && (0, import_kolmafia61.myAdventures)() > 2) {
      (0, import_kolmafia61.runChoice)(1);
    } else {
      (0, import_kolmafia61.runChoice)(2);
    }
  } else if (choice === 1019) {
    if ((0, import_kolmafia61.toBoolean)((0, import_kolmafia61.getProperty)("auto_getBeehive"))) {
      (0, import_kolmafia61.runChoice)(1);
    } else {
      (0, import_kolmafia61.runChoice)(2);
    }
  } else {
    (0, import_kolmafia61.abort)("unhandled choice in blackForestChoiceHandler");
  }
}
function hiddenTempleChoiceHandler(choice, page) {
  if (choice === 123) {
    (0, import_kolmafia61.runChoice)(2);
    (0, import_kolmafia61.visitUrl)("choice.php");
    (0, import_kolmafia61.cliExecute)("dvorak");
  } else if (choice === 125) {
    (0, import_kolmafia61.runChoice)(3);
  } else if (choice === 579) {
    if ((0, import_kolmafia61.itemAmount)($item`stone wool`) >= 2 && (0, import_kolmafia61.toInt)((0, import_kolmafia61.getProperty)("lastTempleAdventures")) < (0, import_kolmafia61.myAscensions)()) {
      (0, import_kolmafia61.runChoice)(3);
    } else if ((0, import_kolmafia61.itemAmount)($item`the Nostril of the Serpent`) === 0 && internalQuestStatus("questL11Worship") < 3) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(3);
    }
  } else if (choice === 580) {
    if (!(0, import_kolmafia61.containsText)(
      page,
      "The door is decorated with that little lightning-tailed guy from your father's diary."
    )) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(1);
    }
  } else if (choice === 581) {
    (0, import_kolmafia61.runChoice)(3);
  } else if (choice === 582) {
    if ((0, import_kolmafia61.itemAmount)($item`the Nostril of the Serpent`) > 0 && internalQuestStatus("questL11Worship") < 3) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(1);
    }
  } else if (choice === 583) {
    (0, import_kolmafia61.runChoice)(1);
  } else if (choice === 584) {
    (0, import_kolmafia61.runChoice)(4);
  } else {
    (0, import_kolmafia61.abort)("unhandled choice in hiddenTempleChoiceHandler");
  }
}
function hiddenCityChoiceHandler(choice) {
  if (choice === 780) {
    if ((0, import_kolmafia61.haveEffect)($effect`Thrice-Cursed`) > 0) {
      (0, import_kolmafia61.runChoice)(1);
    } else if (4 in (0, import_kolmafia61.availableChoiceOptions)() && (0, import_kolmafia61.haveEffect)($effect`Thrice-Cursed`) === 0) {
      (0, import_kolmafia61.runChoice)(4);
      if ((0, import_kolmafia61.haveEffect)($effect`Thrice-Cursed`) > 0) {
        (0, import_kolmafia61.runChoice)(1);
      } else {
        (0, import_kolmafia61.runChoice)(2);
      }
    } else {
      (0, import_kolmafia61.runChoice)(2);
    }
  } else if (choice === 781) {
    if ((0, import_kolmafia61.toInt)((0, import_kolmafia61.getProperty)("hiddenApartmentProgress")) === 0) {
      (0, import_kolmafia61.runChoice)(1);
    } else if ((0, import_kolmafia61.itemAmount)($item`moss-covered stone sphere`) > 0) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(6);
    }
  } else if (choice === 783) {
    if ((0, import_kolmafia61.toInt)((0, import_kolmafia61.getProperty)("hiddenHospitalProgress")) === 0) {
      (0, import_kolmafia61.runChoice)(1);
    } else if ((0, import_kolmafia61.itemAmount)($item`dripping stone sphere`) > 0) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(6);
    }
  } else if (choice === 784) {
    (0, import_kolmafia61.runChoice)(1);
  } else if (choice === 785) {
    if ((0, import_kolmafia61.toInt)((0, import_kolmafia61.getProperty)("hiddenOfficeProgress")) === 0) {
      (0, import_kolmafia61.runChoice)(1);
    } else if ((0, import_kolmafia61.itemAmount)(
      // either use CCSC + unlock or just unlock based on user sphere presence
      $item`crackling stone sphere`
    ) > 0) {
      if (4 in (0, import_kolmafia61.availableChoiceOptions)()) {
        (0, import_kolmafia61.runChoice)(4);
      }
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(6);
    }
  } else if (choice === 786) {
    if ((0, import_kolmafia61.itemAmount)($item`McClusky file (complete)`) > 0) {
      (0, import_kolmafia61.runChoice)(1);
    } else if ((0, import_kolmafia61.itemAmount)($item`boring binder clip`) === 0) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(3);
    }
  } else if (choice === 787) {
    if ((0, import_kolmafia61.toInt)((0, import_kolmafia61.getProperty)("hiddenBowlingAlleyProgress")) === 0) {
      (0, import_kolmafia61.runChoice)(1);
    } else if ((0, import_kolmafia61.itemAmount)($item`scorched stone sphere`) > 0) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(6);
    }
  } else if (choice === 788) {
    if (2 in (0, import_kolmafia61.availableChoiceOptions)()) {
      (0, import_kolmafia61.runChoice)(2);
      (0, import_kolmafia61.runChoice)(1);
    } else {
      (0, import_kolmafia61.runChoice)(1);
    }
  } else if (choice === 789) {
    if ((0, import_kolmafia61.toInt)((0, import_kolmafia61.getProperty)("relocatePygmyJanitor")) !== (0, import_kolmafia61.myAscensions)()) {
      (0, import_kolmafia61.runChoice)(2);
    } else {
      (0, import_kolmafia61.runChoice)(1);
    }
  } else if (choice === 791) {
    if ((0, import_kolmafia61.itemAmount)($item`stone triangle`) === 4) {
      (0, import_kolmafia61.runChoice)(1);
    } else {
      (0, import_kolmafia61.runChoice)(6);
    }
  } else if (choice === 1002) {
    if ((0, import_kolmafia61.itemAmount)($item`stone triangle`) === 4) {
      (0, import_kolmafia61.runChoice)(1);
    } else {
      (0, import_kolmafia61.runChoice)(6);
    }
  } else {
    (0, import_kolmafia61.abort)("unhandled choice in hiddenCityChoiceHandler");
  }
}

// src/autoscend/paths/wildfire.ts
function in_wildfire() {
  return (0, import_kolmafia62.myPath)() === $path`Wildfire`;
}

// src/autoscend/iotms/mr2021.ts
function have_fireworks_shop() {
  if (is_werewolf()) {
    return false;
  }
  if ((0, import_kolmafia63.itemAmount)($item`Clan VIP Lounge key`) === 0) {
    return false;
  }
  if (!auto_is_valid($item`clan underground fireworks shop`)) {
    return false;
  }
  return (0, import_kolmafia63.toBoolean)((0, import_kolmafia63.getProperty)("_fireworksShop"));
}

// src/autoscend/combat/auto_combat_awol.ts
var import_kolmafia67 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage1.ts
var import_kolmafia79 = require("kolmafia");

// src/autoscend/combat/auto_combat_adventurer_meats_world.ts
var import_kolmafia68 = require("kolmafia");

// src/autoscend/combat/auto_combat_bees_hate_you.ts
var import_kolmafia69 = require("kolmafia");

// src/autoscend/combat/auto_combat_disguises_delimit.ts
var import_kolmafia70 = require("kolmafia");

// src/autoscend/combat/auto_combat_fall_of_the_dinosaurs.ts
var import_kolmafia71 = require("kolmafia");

// src/autoscend/combat/auto_combat_heavy_rains.ts
var import_kolmafia72 = require("kolmafia");

// src/autoscend/combat/auto_combat_kingdom_of_exploathing.ts
var import_kolmafia73 = require("kolmafia");

// src/autoscend/combat/auto_combat_mr2012.ts
var import_kolmafia74 = require("kolmafia");

// src/autoscend/combat/auto_combat_pete.ts
var import_kolmafia75 = require("kolmafia");

// src/autoscend/combat/auto_combat_the_source.ts
var import_kolmafia76 = require("kolmafia");

// src/autoscend/combat/auto_combat_wereprofessor.ts
var import_kolmafia77 = require("kolmafia");

// src/autoscend/combat/auto_combat_wildfire.ts
var import_kolmafia78 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage2.ts
var import_kolmafia81 = require("kolmafia");

// src/autoscend/combat/auto_combat_dark_gyffte.ts
var import_kolmafia80 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage3.ts
var import_kolmafia83 = require("kolmafia");

// src/autoscend/combat/auto_combat_zombie_slayer.ts
var import_kolmafia82 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage4.ts
var import_kolmafia85 = require("kolmafia");

// src/autoscend/combat/auto_combat_license_to_adventure.ts
var import_kolmafia84 = require("kolmafia");

// src/autoscend/combat/auto_combat_default_stage5.ts
var import_kolmafia88 = require("kolmafia");

// src/autoscend/combat/auto_combat_plumber.ts
var import_kolmafia86 = require("kolmafia");

// src/autoscend/combat/auto_combat_you_robot.ts
var import_kolmafia87 = require("kolmafia");

// src/autoscend/combat/auto_combat_ocrs.ts
var import_kolmafia89 = require("kolmafia");

// src/autoscend/combat/auto_combat_ed.ts
var import_kolmafia91 = require("kolmafia");

// src/autoscend/paths/i_love_u_hate.ts
var import_kolmafia93 = require("kolmafia");
function in_iluh() {
  return (0, import_kolmafia93.myPath)() === $path`11 Things I Hate About U`;
}
function iluh_foodConsumable(str) {
  if (!in_iluh()) {
    return true;
  }
  var foodConsume = (0, import_kolmafia93.toLowerCase)(str);
  if ((0, import_kolmafia93.containsText)(foodConsume, "stunt nut") || (0, import_kolmafia93.containsText)(foodConsume, "wet stew") || (0, import_kolmafia93.containsText)(foodConsume, "wet stunt nut stew")) {
    return true;
  }
  if ((0, import_kolmafia93.containsText)(foodConsume, "u")) {
    return false;
  }
  if ((0, import_kolmafia93.containsText)(foodConsume, "i")) {
    return true;
  }
  return false;
}
function iluh_famAllowed(fam) {
  if (!in_iluh()) {
    return true;
  }
  if ((0, import_kolmafia93.containsText)((0, import_kolmafia93.toLowerCase)(fam), "u")) {
    return false;
  }
  return true;
}

// src/autoscend/quests/level_12.ts
function haveWarOutfit(canWear) {
  if (!(0, import_kolmafia94.toBoolean)((0, import_kolmafia94.getProperty)("auto_hippyInstead"))) {
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
  return (0, import_kolmafia95.myPath)() === $path`Dark Gyffte`;
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
  return 20 * (0, import_kolmafia95.min)(23, (0, import_kolmafia95.toInt)((0, import_kolmafia95.getProperty)("darkGyfftePoints"))) + (0, import_kolmafia95.myBasestat)($stat`Muscle`) + 20;
}
function bat_desiredSkills$1(hpLeft, forcedPicks) {
  var costSoFar = 0;
  var baseHP = bat_baseHP();
  var picks = /* @__PURE__ */ new Map();
  if ((0, import_kolmafia95.getProperty)("_auto_bat_bloodBank") !== "2") {
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
    import_kolmafia95.Skill.get(
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
  if (!in_darkGyffte() && (0, import_kolmafia95.myClass)().toString() !== "Astral Spirit") {
    return;
  }
  (0, import_kolmafia95.visitUrl)("campground.php?action=coffin");
  var picks = bat_desiredSkills$1(
    hpLeft,
    requiredSkills
  );
  var url = `choice.php?whichchoice=1342&option=2&pwd=${(0, import_kolmafia95.myHash)()}`;
  var _iterator6 = _createForOfIteratorHelper(
    picks
  ), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var _step6$value = _slicedToArray(_step6.value, 1), sk = _step6$value[0];
      url += "&sk[]=";
      url += ((0, import_kolmafia95.toInt)(sk) - 24e3).toString();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  (0, import_kolmafia95.visitUrl)(url);
  (0, import_kolmafia95.visitUrl)(`choice.php?whichchoice=1342&option=1&pwd=${(0, import_kolmafia95.myHash)()}`);
}
function bat_skillValid(sk) {
  if ($skills`Savage Bite, Crush, Baleful Howl, Ceaseless Snarl`.includes(sk) && (0, import_kolmafia95.haveEffect)($effect`Bats Form`) + (0, import_kolmafia95.haveEffect)($effect`Mist Form`) > 0) {
    return false;
  }
  if ($skills`Blood Spike, Blood Chains, Chill of the Tomb, Blood Cloak`.includes(
    sk
  ) && (0, import_kolmafia95.haveEffect)($effect`Wolf Form`) + (0, import_kolmafia95.haveEffect)($effect`Bats Form`) > 0) {
    return false;
  }
  if ($skills`Piercing Gaze, Perceive Soul, Ensorcel, Spectral Awareness`.includes(
    sk
  ) && (0, import_kolmafia95.haveEffect)($effect`Wolf Form`) + (0, import_kolmafia95.haveEffect)($effect`Mist Form`) > 0) {
    return false;
  }
  if ((0, import_kolmafia95.mpCost)(sk) > 0 && in_darkGyffte()) {
    return false;
  }
  return true;
}

// src/autoscend/paths/kingdom_of_exploathing.ts
function in_koe() {
  return (0, import_kolmafia97.myPath)() === $path`Kingdom of Exploathing`;
}
function koe_L12FoodSelect() {
  var food_item = import_kolmafia97.Item.none;
  var _iterator4 = _createForOfIteratorHelper(
    $items`pie man was not meant to eat, spaghetti with Skullheads, gnocchetti di Nietzsche, spaghetti con calaveras, space chowder, spaghetti with ghost balls, crudles, agnolotti arboli, shells a la shellfish, linguini immondizia bianco, fettucini Inconnu, ghuol guolash, suggestive strozzapreti, fusilli marrownarrow`
  ), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var it = _step4.value;
      if ((0, import_kolmafia97.itemAmount)(it) > 0) {
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
  if (food_item === import_kolmafia97.Item.none) {
    (0, import_kolmafia97.abort)(
      "I am at the choice adventure and do not know what food I should kill my enemies with during L12 war quest"
    );
  }
  (0, import_kolmafia97.runChoice)(1, `tossid=${(0, import_kolmafia97.toInt)(food_item)}`);
}

// src/autoscend/iotms/mr2015.ts
function doghouseChoiceHandler(choice) {
  if (choice === 1106) {
    if ((0, import_kolmafia98.inHardcore)() && (0, import_kolmafia98.haveEffect)($effect`Adventurer's Best Friendship`) > 120 || (0, import_kolmafia98.haveEffect)($effect`Adventurer's Best Friendship`) > 30 && pathHasFamiliar()) {
      (0, import_kolmafia98.runChoice)(3);
    } else {
      (0, import_kolmafia98.runChoice)(2);
    }
  } else if (choice === 1107) {
    (0, import_kolmafia98.runChoice)(1);
  } else if (choice === 1108) {
    (0, import_kolmafia98.runChoice)(3);
  } else {
    (0, import_kolmafia98.abort)("unhandled choice in doghouseChoiceHandler");
  }
}

// src/autoscend/quests/level_01.ts
var import_kolmafia99 = require("kolmafia");

// src/autoscend/paths/actually_ed_the_undying.ts
function isActuallyEd() {
  return (0, import_kolmafia100.myPath)() === $path`Actually Ed the Undying`;
}
function ed_spleen_limit() {
  var limit = 5;
  var _iterator = _createForOfIteratorHelper(
    $skills`Extra Spleen, Another Extra Spleen, Yet Another Extra Spleen, Still Another Extra Spleen, Just One More Extra Spleen, Okay Seriously\, This is the Last Spleen`
  ), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var sk = _step.value;
      if ((0, import_kolmafia100.haveSkill)(sk)) {
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
  var coins = (0, import_kolmafia100.itemAmount)($item`Ka coin`);
  var canEat_1 = ((0, import_kolmafia100.spleenLimit)() - (0, import_kolmafia100.mySpleenUse)()) / 5;
  if (!(0, import_kolmafia100.haveSkill)($skill`Upgraded Legs`) && (0, import_kolmafia100.toBoolean)((0, import_kolmafia100.getProperty)("auto_needLegs"))) {
    return $skill`Upgraded Legs`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Extra Spleen`) && canEat_1 < 1) {
    return $skill`Extra Spleen`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Another Extra Spleen`) && canEat_1 < 1) {
    return $skill`Another Extra Spleen`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Replacement Liver`)) {
    return $skill`Replacement Liver`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Upgraded Legs`)) {
    return $skill`Upgraded Legs`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`More Legs`)) {
    return $skill`More Legs`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Yet Another Extra Spleen`) && (0, import_kolmafia100.haveSkill)($skill`Another Extra Spleen`)) {
    return $skill`Yet Another Extra Spleen`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Still Another Extra Spleen`)) {
    return $skill`Still Another Extra Spleen`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Just One More Extra Spleen`)) {
    return $skill`Just One More Extra Spleen`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Replacement Stomach`)) {
    return $skill`Replacement Stomach`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Elemental Wards`)) {
    return $skill`Elemental Wards`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Okay Seriously, This is the Last Spleen`)) {
    return $skill`Okay Seriously, This is the Last Spleen`;
  } else if (!possessEquipment($item`The Crown of Ed the Undying`) && !(0, import_kolmafia100.haveSkill)($skill`Tougher Skin`)) {
    return $skill`Tougher Skin`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`More Elemental Wards`)) {
    return $skill`More Elemental Wards`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Even More Elemental Wards`)) {
    return $skill`Even More Elemental Wards`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Healing Scarabs`) && (0, import_kolmafia100.myDaycount)() >= 2) {
    return $skill`Healing Scarabs`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Tougher Skin`) && (0, import_kolmafia100.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Tougher Skin`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Armor Plating`) && (0, import_kolmafia100.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Armor Plating`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Upgraded Spine`) && (0, import_kolmafia100.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Upgraded Spine`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Upgraded Arms`) && (0, import_kolmafia100.myDaycount)() >= 2 && coins >= 50) {
    return $skill`Upgraded Arms`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Arm Blade`) && (0, import_kolmafia100.myDaycount)() >= 4 && coins >= 100) {
    return $skill`Arm Blade`;
  } else if (!(0, import_kolmafia100.haveSkill)($skill`Bone Spikes`) && (0, import_kolmafia100.myDaycount)() >= 4 && coins >= 100) {
    return $skill`Bone Spikes`;
  }
  return import_kolmafia100.Skill.none;
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
  if ((0, import_kolmafia100.toBoolean)((0, import_kolmafia100.getProperty)("auto_pvpEnable")) && !(0, import_kolmafia100.hippyStoneBroken)()) {
    (0, import_kolmafia100.visitUrl)("peevpee.php?action=smashstone&pwd&confirm=on", true);
    (0, import_kolmafia100.visitUrl)("place.php?whichplace=edunder&action=edunder_hippy");
    (0, import_kolmafia100.visitUrl)("choice.php?pwd&whichchoice=1057&option=1", true);
  }
  var coins = (0, import_kolmafia100.itemAmount)($item`Ka coin`);
  if (!(0, import_kolmafia100.haveSkill)($skill`Upgraded Legs`) && (0, import_kolmafia100.toBoolean)((0, import_kolmafia100.getProperty)("auto_needLegs"))) {
    if (coins >= 10) {
      auto_log_info("Buying Upgraded Legs", "green");
      (0, import_kolmafia100.setProperty)("auto_needLegs", false.toString());
      (0, import_kolmafia100.visitUrl)("place.php?whichplace=edunder&action=edunder_bodyshop");
      (0, import_kolmafia100.visitUrl)("choice.php?pwd&skillid=36&option=1&whichchoice=1052", true);
      (0, import_kolmafia100.visitUrl)("choice.php?pwd&option=2&whichchoice=1052", true);
      coins -= 10;
    } else {
      coins = 0;
    }
  }
  var canEat_1 = (ed_spleen_limit() - (0, import_kolmafia100.mySpleenUse)()) / 5;
  canEat_1 -= (0, import_kolmafia100.itemAmount)($item`mummified beef haunch`);
  while (coins >= 15 && canEat_1 > 0) {
    (0, import_kolmafia100.visitUrl)(
      "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=428",
      true
    );
    auto_log_info("Buying a mummified beef haunch!", "green");
    coins -= 15;
    canEat_1--;
  }
  if (!(0, import_kolmafia100.toBoolean)((0, import_kolmafia100.getProperty)("lovebugsUnlocked")) && coins >= 1 && (0, import_kolmafia100.itemAmount)($item`holy spring water`) === 0 && (0, import_kolmafia100.myMp)() < (0, import_kolmafia100.mpCost)($skill`Storm of the Scarab`)) {
    auto_log_info("Buying Holy Spring Water", "green");
    (0, import_kolmafia100.visitUrl)(
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
        (0, import_kolmafia100.visitUrl)("place.php?whichplace=edunder&action=edunder_bodyshop");
        (0, import_kolmafia100.visitUrl)(
          `choice.php?pwd&skillid=${skillBuy}&option=1&whichchoice=1052`,
          true
        );
        (0, import_kolmafia100.visitUrl)("choice.php?pwd&option=2&whichchoice=1052", true);
      }
    } else if ((0, import_kolmafia100.haveSkill)($skill`Okay Seriously, This is the Last Spleen`) && canEat_1 < 1) {
      while ((0, import_kolmafia100.itemAmount)($item`talisman of Renenutet`) < 7 && (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("auto_renenutetBought")) < 7 && coins >= 1) {
        auto_log_info("Buying Talisman of Renenutet", "green");
        (0, import_kolmafia100.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=439",
          true
        );
        (0, import_kolmafia100.setProperty)(
          "auto_renenutetBought",
          (1 + (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("auto_renenutetBought"))).toString()
        );
        coins -= 1;
      }
      while ((0, import_kolmafia100.itemAmount)($item`linen bandages`) < 8 && coins >= 1) {
        auto_log_info("Buying Linen Bandages", "green");
        (0, import_kolmafia100.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=429",
          true
        );
        coins -= 1;
      }
      if ((0, import_kolmafia100.itemAmount)($item`holy spring water`) === 0 && coins >= 1) {
        auto_log_info("Buying Holy Spring Water", "green");
        (0, import_kolmafia100.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=436",
          true
        );
        coins -= 1;
      }
      while ((0, import_kolmafia100.itemAmount)($item`talisman of Horus`) < 2 && coins >= 5) {
        auto_log_info("Buying Talisman of Horus", "green");
        (0, import_kolmafia100.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=693",
          true
        );
        coins -= 5;
      }
      if ((0, import_kolmafia100.itemAmount)($item`spirit beer`) === 0 && coins >= 30) {
        auto_log_info("Buying Spirit Beer", "green");
        (0, import_kolmafia100.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=432",
          true
        );
        coins -= 2;
      }
      if ((0, import_kolmafia100.itemAmount)($item`soft green echo eyedrop antidote`) + (0, import_kolmafia100.itemAmount)($item`ancient cure-all`) < 2 && coins >= 30) {
        auto_log_info("Buying Ancient Cure-all", "green");
        (0, import_kolmafia100.visitUrl)(
          "shop.php?pwd=&whichshop=edunder_shopshop&action=buyitem&quantity=1&whichrow=435",
          true
        );
        coins -= 3;
      }
      if ((0, import_kolmafia100.itemAmount)($item`sacramental wine`) === 0 && coins >= 30) {
        auto_log_info("Buying Sacramental Wine", "green");
        (0, import_kolmafia100.visitUrl)(
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
    (0, import_kolmafia100.runChoice)(1);
    auto_log_info(
      `Ed died in combat ${(0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_edDefeats"))} time(s)`,
      "blue"
    );
    ed_shopping();
    (0, import_kolmafia100.visitUrl)("place.php?whichplace=edunder&action=edunder_leave");
  } else if (choice === 1024) {
    if ((0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("_edDefeats")) < (0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("edDefeatAbort"))) {
      (0, import_kolmafia100.runChoice)(1, false);
    } else {
      (0, import_kolmafia100.runChoice)(2);
      auto_log_info$1("Ed died in combat for reals!");
      (0, import_kolmafia100.setProperty)(
        "auto_beatenUpCount",
        ((0, import_kolmafia100.toInt)((0, import_kolmafia100.getProperty)("auto_beatenUpCount")) + 1).toString()
      );
    }
  } else {
    (0, import_kolmafia100.abort)("unhandled choice in edUnderworldChoiceHandler");
  }
}

// src/autoscend/iotms/mr2018.ts
function neverendingPartyChoiceHandler(choice) {
  if (choice === 1322) {
    (0, import_kolmafia101.runChoice)(2);
  } else if (choice === 1323) {
    (0, import_kolmafia101.runChoice)(1);
  } else if (choice === 1324) {
    var buff = import_kolmafia101.Effect.none;
    switch ((0, import_kolmafia101.myPrimestat)()) {
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
      (0, import_kolmafia101.runChoice)(5);
    } else if (buff !== import_kolmafia101.Effect.none && (0, import_kolmafia101.haveEffect)(buff) < 9) {
      switch ((0, import_kolmafia101.myPrimestat)()) {
        case $stat`Muscle`:
          (0, import_kolmafia101.runChoice)(2);
          break;
        case $stat`Mysticality`:
          (0, import_kolmafia101.runChoice)(1);
          break;
        case $stat`Moxie`:
          (0, import_kolmafia101.runChoice)(4);
          break;
        default:
          (0, import_kolmafia101.runChoice)(5);
          break;
      }
    } else if (isAboutToPowerlevel() || isActuallyEd()) {
      if ((0, import_kolmafia101.haveEffect)($effect`Citronella Armpits`) < 9) {
        (0, import_kolmafia101.runChoice)(3);
      } else {
        (0, import_kolmafia101.runChoice)(5);
      }
    } else {
      (0, import_kolmafia101.runChoice)(5);
    }
  } else if (choice === 1325) {
    if ((0, import_kolmafia101.myPrimestat)() === $stat`Mysticality`) {
      (0, import_kolmafia101.runChoice)(2);
    } else {
      (0, import_kolmafia101.runChoice)(1);
    }
  } else if (choice === 1326) {
    if ((0, import_kolmafia101.myPrimestat)() === $stat`Muscle`) {
      (0, import_kolmafia101.runChoice)(2);
    } else {
      (0, import_kolmafia101.runChoice)(1);
    }
  } else if (choice === 1327) {
    (0, import_kolmafia101.runChoice)(2);
  } else if (choice === 1328) {
    if ((0, import_kolmafia101.myPrimestat)() === $stat`Moxie`) {
      (0, import_kolmafia101.runChoice)(2);
    } else {
      (0, import_kolmafia101.runChoice)(1);
    }
  } else {
    (0, import_kolmafia101.abort)("unhandled choice in neverendingPartyChoiceHandler");
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
  if ((0, import_kolmafia101.availableAmount)($item`latte lovers member's mug`) === 0) {
    return false;
  }
  var latteDrop = auto_latteDropName(l);
  if (latteDrop === "") {
    return false;
  }
  return !(0, import_kolmafia101.containsText)((0, import_kolmafia101.getProperty)("latteUnlocks"), latteDrop);
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
        (0, import_kolmafia103.runChoice)(3);
      } else {
        (0, import_kolmafia103.runChoice)(2);
      }
    } else {
      (0, import_kolmafia103.runChoice)(1);
    }
  } else if (choice === 19) {
    if (possessEquipment($item`miner's helmet`)) {
      if (possessEquipment($item`miner's pants`)) {
        (0, import_kolmafia103.runChoice)(3);
      } else {
        (0, import_kolmafia103.runChoice)(2);
      }
    } else {
      (0, import_kolmafia103.runChoice)(1);
    }
  } else if (choice === 20) {
    if (possessEquipment($item`miner's helmet`)) {
      if (possessEquipment($item`7-Foot Dwarven mattock`)) {
        (0, import_kolmafia103.runChoice)(3);
      } else {
        (0, import_kolmafia103.runChoice)(2);
      }
    } else {
      (0, import_kolmafia103.runChoice)(1);
    }
  } else if (choice === 556) {
    if (!possessOutfit$1("Mining Gear")) {
      (0, import_kolmafia103.runChoice)(1);
    } else {
      (0, import_kolmafia103.runChoice)(2);
    }
  } else {
    (0, import_kolmafia103.abort)("unhandled choice in itznotyerzitzMineChoiceHandler");
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
        (0, import_kolmafia103.runChoice)(3);
      } else {
        (0, import_kolmafia103.runChoice)(2);
      }
    } else {
      (0, import_kolmafia103.runChoice)(1);
    }
  } else if (choice === 16) {
    if (possessEquipment($item`snowboarder pants`)) {
      if (possessEquipment($item`eXtreme scarf`)) {
        (0, import_kolmafia103.runChoice)(3);
      } else {
        (0, import_kolmafia103.runChoice)(2);
      }
    } else {
      (0, import_kolmafia103.runChoice)(1);
    }
  } else if (choice === 17) {
    if (possessEquipment($item`eXtreme mittens`)) {
      if (possessEquipment($item`snowboarder pants`)) {
        (0, import_kolmafia103.runChoice)(3);
      } else {
        (0, import_kolmafia103.runChoice)(2);
      }
    } else {
      (0, import_kolmafia103.runChoice)(1);
    }
  } else if (choice === 575) {
    if ((0, import_kolmafia103.haveEquipped)($item`candy cane sword cane`)) {
      (0, import_kolmafia103.runChoice)(5);
    } else if (!possessOutfit$1("eXtreme Cold-Weather Gear")) {
      (0, import_kolmafia103.runChoice)(1);
    } else {
      if (isActuallyEd()) {
        (0, import_kolmafia103.runChoice)(3);
      } else {
        (0, import_kolmafia103.runChoice)(4);
      }
    }
  } else {
    (0, import_kolmafia103.abort)("unhandled choice in theeXtremeSlopeChoiceHandler");
  }
}

// src/autoscend/paths/casual.ts
function inAftercore() {
  return (0, import_kolmafia104.toBoolean)((0, import_kolmafia104.getProperty)("kingLiberated"));
}

// src/autoscend/iotms/ttt.ts
var import_kolmafia106 = require("kolmafia");

// src/autoscend/auto_powerlevel.ts
function isAboutToPowerlevel() {
  return (0, import_kolmafia108.toInt)((0, import_kolmafia108.getProperty)("auto_powerLevelLastLevel")) === (0, import_kolmafia108.myLevel)();
}
function disregardInstantKarma() {
  if (inAftercore()) {
    return true;
  }
  if ((0, import_kolmafia108.myLevel)() !== 13) {
    return true;
  }
  return (0, import_kolmafia108.toBoolean)((0, import_kolmafia108.getProperty)("auto_disregardInstantKarma"));
}

// src/autoscend/iotms/mr2014.ts
var $_f_importantMonsters = import_kolmafia109.Monster.get(
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
  if ((0, import_kolmafia110.toFamiliar)((0, import_kolmafia110.getProperty)("auto_100familiar")) === import_kolmafia110.Familiar.none) {
    return false;
  }
  return true;
}
function pathHasFamiliar() {
  if (is_boris() || is_jarlsberg() || is_pete() || isActuallyEd() || in_darkGyffte() || in_lta() || in_pokefam()) {
    return false;
  }
  if (in_robot() && (0, import_kolmafia110.toInt)((0, import_kolmafia110.getProperty)("youRobotTop")) !== 2) {
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
  if ((0, import_kolmafia110.getProperty)("auto_blacklistFamiliar") !== "") {
    var noFams = new Map(
      (0, import_kolmafia110.splitString)((0, import_kolmafia110.getProperty)("auto_blacklistFamiliar"), ";").map(
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
        blacklist.set((0, import_kolmafia110.toFamiliar)(trim(fam_1)), 1);
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
  return (0, import_kolmafia110.haveFamiliar)(fam);
}

// src/autoscend/iotms/mr2016.ts
function expectGhostReport() {
  if ((0, import_kolmafia113.totalTurnsPlayed)() >= (0, import_kolmafia113.toInt)((0, import_kolmafia113.getProperty)("nextParanormalActivity"))) {
    if ((0, import_kolmafia113.totalTurnsPlayed)() > (0, import_kolmafia113.toInt)((0, import_kolmafia113.getProperty)("nextParanormalActivity"))) {
      var page = (0, import_kolmafia113.visitUrl)("charpane.php");
      var myGhost = new AshMatcher(
        '<tr rel="protonquest">(?:.*?)<b>(.*?)</b>',
        page
      );
      if (myGhost.find()) {
        var goal = (0, import_kolmafia113.toLocation)(myGhost.group(1));
        (0, import_kolmafia113.setProperty)("ghostLocation", goal.toString());
        (0, import_kolmafia113.setProperty)("questPAGhost", "started");
      }
    }
    if ((0, import_kolmafia113.getProperty)("questPAGhost") === "unstarted") {
      return true;
    }
  }
  return false;
}
function haveGhostReport() {
  if ((0, import_kolmafia113.getProperty)("questPAGhost") === "unstarted") {
    return false;
  }
  if ((0, import_kolmafia113.getProperty)("questPAGhost") === "started" && (0, import_kolmafia113.getProperty)("ghostLocation") !== "") {
    return true;
  }
  return false;
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
function safeString(input) {
  return input.replaceAll(/[,:]/g, ".");
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
  var _iterator7 = _createForOfIteratorHelper(
    res_including_noncombat
  ), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var _step7$value = _slicedToArray(_step7.value, 2), mob = _step7$value[0], freq = _step7$value[1];
      if (mob !== import_kolmafia120.Monster.none) {
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
  if (((_appearanceRates = (0, import_kolmafia120.appearanceRates)(loc))[_enemy$toString = enemy.toString()] ?? (_appearanceRates[_enemy$toString] = 0)) <= 0) {
    return false;
  }
  var locCache = (0, import_kolmafia120.myLocation)();
  (0, import_kolmafia120.setLocation)(loc);
  var monstersToBanish = auto_getMonsters("banish");
  (0, import_kolmafia120.setLocation)(locCache);
  return monstersToBanish.get(enemy) ?? monstersToBanish.set(enemy, false).get(enemy);
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
function hasTorso() {
  return (0, import_kolmafia120.haveSkill)($skill`Torso Awareness`) || (0, import_kolmafia120.haveSkill)($skill`Best Dressed`) || robot_cpu(9, false);
}
function isGuildClass() {
  return $classes`Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief`.includes(
    (0, import_kolmafia120.myClass)()
  );
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
function auto_have_skill(sk) {
  return auto_is_valid$2(sk) && (0, import_kolmafia120.haveSkill)(sk);
}
function effectiveDropChance(it, baseDropRate) {
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
  var retval = baseDropRate * (100 + item_modifier) / 100;
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
      var wildfireBurnChance;
      switch ((0, import_kolmafia120.myLocation)().fireLevel) {
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
    if ((0, import_kolmafia120.myFamiliar)() === $familiar`Black Cat`) {
      retval = retval * 0.75;
    } else if ((0, import_kolmafia120.myFamiliar)() === $familiar`O.A.F.`) {
      retval = retval * 0.75;
    }
  }
  return (0, import_kolmafia120.max)(0, retval);
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
function auto_check_conditions(conds) {
  if (conds === "") {
    return true;
  }
  var conditions = new Map(
    (0, import_kolmafia120.splitString)(conds, ";").map((_v, _i) => [_i, _v])
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
      switch (condition_type) {
        case "class": {
          var req_class = (0, import_kolmafia120.toClass)(condition_data);
          if (req_class === import_kolmafia120.Class.none) {
            (0, import_kolmafia120.abort)(`"${condition_data}" does not properly convert to a class!`);
          }
          return req_class === (0, import_kolmafia120.myClass)();
        }
        case "mainstat": {
          var req_mainstat = (0, import_kolmafia120.toStat)(condition_data);
          if (req_mainstat === import_kolmafia120.Stat.none) {
            (0, import_kolmafia120.abort)(`"${condition_data}" does not properly convert to a stat!`);
          }
          return req_mainstat === (0, import_kolmafia120.myPrimestat)();
        }
        case "path": {
          return condition_data === (0, import_kolmafia120.myPath)().name;
        }
        case "pathid": {
          var req_pathid = (0, import_kolmafia120.toInt)(condition_data);
          if (req_pathid === 0) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a path id!`
            );
          }
          return req_pathid === (0, import_kolmafia120.myPath)().id;
        }
        case "skill": {
          var req_skill = (0, import_kolmafia120.toSkill)(condition_data);
          if (req_skill === import_kolmafia120.Skill.none) {
            (0, import_kolmafia120.abort)(`"${condition_data}" does not properly convert to a skill!`);
          }
          return auto_have_skill(req_skill);
        }
        case "effect": {
          var req_effect = (0, import_kolmafia120.toEffect)(condition_data);
          if (req_effect === import_kolmafia120.Effect.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to an effect!`
            );
          }
          return (0, import_kolmafia120.haveEffect)(req_effect) > 0;
        }
        case "item": {
          var m5 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m5.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          var req_item = (0, import_kolmafia120.toItem)(m5.group(1));
          if (req_item === import_kolmafia120.Item.none) {
            (0, import_kolmafia120.abort)(`"${m5.group(1)}" does not properly convert to an item!`);
          }
          return compare_numbers(
            (0, import_kolmafia120.itemAmount)(req_item) + (0, import_kolmafia120.equippedAmount)(req_item),
            (0, import_kolmafia120.toInt)(m5.group(3)),
            m5.group(2)
          );
        }
        case "itemdropcapped": {
          var m7 = new AshMatcher(
            "([^=<>]+)=(.+)",
            condition_data
          );
          if (!m7.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper item condition format!`);
          }
          var todrop_item = (0, import_kolmafia120.toItem)(m7.group(2));
          var base_drop_chance = (0, import_kolmafia120.toFloat)(m7.group(1));
          if (todrop_item === import_kolmafia120.Item.none) {
            (0, import_kolmafia120.abort)(`"${m7.group(1)}" does not properly convert to an item!`);
          }
          return effectiveDropChance(todrop_item, base_drop_chance) >= 100;
        }
        case "outfit":
          return (0, import_kolmafia120.haveOutfit)(condition_data);
        case "familiar": {
          var req_familiar = (0, import_kolmafia120.toFamiliar)(condition_data);
          if (req_familiar === import_kolmafia120.Familiar.none && condition_data !== "none") {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return (0, import_kolmafia120.myFamiliar)() === req_familiar;
        }
        case "havefamiliar": {
          var havefamiliar = (0, import_kolmafia120.toFamiliar)(condition_data);
          if (havefamiliar === import_kolmafia120.Familiar.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a familiar!`
            );
          }
          return auto_have_familiar(havefamiliar);
        }
        case "loc": {
          var req_loc = (0, import_kolmafia120.toLocation)(condition_data);
          if (req_loc === import_kolmafia120.Location.none) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" does not properly convert to a location!`
            );
          }
          return (0, import_kolmafia120.myLocation)() === req_loc;
        }
        case "turnsspent": {
          var m6 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m6.find()) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" is not a proper turnsspent condition format!`
            );
          }
          var loc = (0, import_kolmafia120.toLocation)(m6.group(1));
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
        }
        case "prop": {
          var m22 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m22.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper prop condition format!`);
          }
          var prop = (0, import_kolmafia120.getProperty)(m22.group(1));
          if (!["=", "=="].includes(m22.group(2))) {
            return compare_numbers(
              (0, import_kolmafia120.toInt)(prop),
              (0, import_kolmafia120.toInt)(m22.group(3)),
              m22.group(2)
            );
          }
          return prop === m22.group(3);
        }
        case "prop_boolean":
          return (0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)(condition_data));
        case "quest": {
          var m3 = new AshMatcher(
            "([^=<>]+)([=<>]+)(.+)",
            condition_data
          );
          if (!m3.find()) {
            (0, import_kolmafia120.abort)(
              `"${condition_data}" is not a proper quest condition format!`
            );
          }
          var quest_state = internalQuestStatus(m3.group(1));
          var compare_to = (0, import_kolmafia120.toInt)(m3.group(3));
          return compare_numbers(quest_state, compare_to, m3.group(2));
        }
        case "sniffed": {
          var check_sniffed = (0, import_kolmafia120.toMonster)(condition_data);
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
        }
        case "expectghostreport":
          return expectGhostReport();
        case "latte":
          return auto_latteDropAvailable((0, import_kolmafia120.myLocation)());
        case "tavern":
          return (0, import_kolmafia120.toInt)((0, import_kolmafia120.getProperty)("hiddenTavernUnlock")) >= (0, import_kolmafia120.myAscensions)();
        case "sgeea": {
          var sgeeas = (0, import_kolmafia120.toInt)(condition_data);
          return (0, import_kolmafia120.itemAmount)($item`soft green echo eyedrop antidote`) >= sgeeas;
        }
        case "day": {
          var day = (0, import_kolmafia120.toInt)(condition_data);
          return (0, import_kolmafia120.myDaycount)() === day;
        }
        case "ML": {
          var m4 = new AshMatcher("([=<>]+)(.+)", condition_data);
          if (!m4.find()) {
            (0, import_kolmafia120.abort)(`"${condition_data}" is not a proper ML condition format!`);
          }
          return compare_numbers(
            (0, import_kolmafia120.monsterLevelAdjustment)(),
            (0, import_kolmafia120.toInt)(m4.group(2)),
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
              (0, import_kolmafia120.abort)(`Invalid consume type "${condition_type}" found!`);
            }
          }
          break;
        }
        default:
          (0, import_kolmafia120.abort)(`Invalid condition type "${condition_type}" found!`);
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
        (0, import_kolmafia120.abort)(`"${cond}" is not a proper condition!`);
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
    (0, import_kolmafia120.splitString)((0, import_kolmafia120.cliExecuteOutput)("poolskill")).map((_v, _i) => [_i, _v])
  );
  return (0, import_kolmafia120.toInt)(
    (0, import_kolmafia120.substring)(
      poolskill_command.get(0) ?? poolskill_command.set(0, "").get(0),
      (0, import_kolmafia120.lastIndexOf)(
        poolskill_command.get(0) ?? poolskill_command.set(0, "").get(0),
        ":"
      ) + 2,
      (0, import_kolmafia120.length)(poolskill_command.get(0) ?? poolskill_command.set(0, "").get(0)) - 1
    )
  );
}
function poolSkillPracticeGains() {
  var count_1 = 1;
  if ((0, import_kolmafia120.haveEffect)($effect`Chalky Hand`) > 0) {
    count_1 += 1;
  }
  if ((0, import_kolmafia120.equippedAmount)($item`[2268]Staff of Fats`) > 0) {
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
      if ((0, import_kolmafia120.itemAmount)(w_it) !== 0 && (0, import_kolmafia120.isUnrestricted)(w_it)) {
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
  if (in_wildfire() && !(0, import_kolmafia120.toBoolean)((0, import_kolmafia120.getProperty)("wildfirePumpGreased")) && (0, import_kolmafia120.itemAmount)($item`pump grease`) === 0) {
    reserve_extra += (0, import_kolmafia120.npcPrice)($item`pump grease`);
  }
  if (!hasTorso() && hasUsefulShirt() && !(0, import_kolmafia120.gnomadsAvailable)() && inGnomeSign()) {
    reserve_extra += (0, import_kolmafia120.toInt)(5e3 * npcStoreDiscountMulti());
  }
  if (!hasTorso() && (0, import_kolmafia120.gnomadsAvailable)() && hasUsefulShirt()) {
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
var import_kolmafia124 = require("kolmafia");

// src/autoscend/auto_zlib.ts
var import_kolmafia123 = require("kolmafia");

// src/autoscend/auto_settings.ts
var import_kolmafia125 = require("kolmafia");

// src/autoscend/auto_sim.ts
var import_kolmafia126 = require("kolmafia");

// src/autoscend/autoscend_migration.ts
var import_kolmafia127 = require("kolmafia");

// src/autoscend/iotms/eudora.ts
var import_kolmafia128 = require("kolmafia");

// src/autoscend/iotms/mr2013.ts
var import_kolmafia129 = require("kolmafia");

// src/autoscend/paths/auto_path_util.ts
var import_kolmafia130 = require("kolmafia");

// src/autoscend/paths/community_service.ts
var import_kolmafia131 = require("kolmafia");

// src/autoscend/task_registry.ts
var import_kolmafia133 = require("kolmafia");

// src/autoscend/iotms/mr2012.ts
var import_kolmafia132 = require("kolmafia");
function auto_reagnimatedGetPart() {
  if ((0, import_kolmafia132.availableAmount)($item`gnomish housemaid's kgnee`) === 0) {
    (0, import_kolmafia132.runChoice)(4);
  } else if ((0, import_kolmafia132.availableAmount)($item`gnomish coal miner's lung`) === 0) {
    (0, import_kolmafia132.runChoice)(2);
  } else if ((0, import_kolmafia132.availableAmount)($item`gnomish athlete's foot`) === 0) {
    (0, import_kolmafia132.runChoice)(5);
  } else if ((0, import_kolmafia132.availableAmount)($item`gnomish tennis elbow`) === 0) {
    (0, import_kolmafia132.runChoice)(3);
  } else if ((0, import_kolmafia132.availableAmount)($item`gnomish swimmer's ears`) === 0) {
    (0, import_kolmafia132.runChoice)(1);
  } else {
    (0, import_kolmafia132.abort)("unhandled choice in auto_reagnimatedGetPart");
  }
}

// src/autoscend/auto_consume.ts
function spleen_left() {
  return (0, import_kolmafia135.spleenLimit)() - (0, import_kolmafia135.mySpleenUse)();
}
function stomach_left() {
  return (0, import_kolmafia135.fullnessLimit)() - (0, import_kolmafia135.myFullness)();
}
function fullness_left() {
  return stomach_left();
}
function inebriety_left() {
  return (0, import_kolmafia135.inebrietyLimit)() - (0, import_kolmafia135.myInebriety)();
}
var $_saucemavenApplies_saucy_foods;
function saucemavenApplies(it) {
  $_saucemavenApplies_saucy_foods ?? ($_saucemavenApplies_saucy_foods = $items`cold hi mein, devil hair pasta, Fettris, fettucini Inconnu, fleetwood mac 'n' cheese, fusillocybin, gnocchetti di Nietzsche, haunted Hell ramen, Hell ramen, hot hi mein, libertagliatelle, linguini immondizia bianco, linguini of the sea, prescription noodles, shells a la shellfish, sleazy hi mein, spagecialetti, spaghetti con calaveras, spaghetti with Skullheads, spooky hi mein, stinky hi mein, turkish mostaccioli`);
  return $_saucemavenApplies_saucy_foods.includes(it);
}
function expectedAdventuresFrom(it) {
  function parse() {
    if (!(0, import_kolmafia135.containsText)(it.adventures, "-")) {
      return (0, import_kolmafia135.toInt)(it.adventures);
    }
    var s = new Map(
      (0, import_kolmafia135.splitString)(it.adventures, "-").map((_v, _i) => [_i, _v])
    );
    return ((0, import_kolmafia135.toInt)(s.get(1) ?? s.set(1, "").get(1)) + (0, import_kolmafia135.toInt)(s.get(0) ?? s.set(0, "").get(0))) / 2;
  }
  var expected = parse();
  if (auto_have_skill($skill`Saucemaven`) && saucemavenApplies(it)) {
    if ($classes`Sauceror, Pastamancer`.includes((0, import_kolmafia135.myClass)())) {
      expected += 5;
    } else {
      expected += 3;
    }
  }
  return expected;
}
function auto_canDrink(toDrink) {
  var checkValidity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (!(0, import_kolmafia135.canDrink)()) {
    return false;
  }
  if (!auto_is_valid(toDrink) && checkValidity) {
    return false;
  }
  if (is_jarlsberg() && toDrink !== $item`steel margarita`) {
    return (0, import_kolmafia135.sellCost)($coinmaster`Jarlsberg's Cosmic Kitchen`, toDrink).size > 0;
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
  if ((0, import_kolmafia135.myLevel)() < toDrink.levelreq && !in_small()) {
    return false;
  }
  if (toDrink.levelreq >= 13 && !(0, import_kolmafia135.canInteract)()) {
    return false;
  }
  return true;
}
function meetsMinAdvPerFillReq(it) {
  if (it.fullness + it.inebriety <= 0) return true;
  return expectedAdventuresFrom(it) / (it.fullness + it.inebriety) >= get("auto_consumeMinAdvPerFill", 0);
}
function auto_canEat(toEat) {
  var checkValidity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (!(0, import_kolmafia135.canEat)() || !meetsMinAdvPerFillReq(toEat)) {
    return false;
  }
  if (!auto_is_valid(toEat) && checkValidity) {
    return false;
  }
  if (is_jarlsberg()) {
    return (0, import_kolmafia135.sellCost)($coinmaster`Jarlsberg's Cosmic Kitchen`, toEat).size > 0;
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
  if ((0, import_kolmafia135.myLevel)() < toEat.levelreq && !in_small()) {
    return false;
  }
  if (toEat.levelreq >= 13 && !(0, import_kolmafia135.canInteract)()) {
    return false;
  }
  return true;
}

// src/autoscend/auto_equipment.ts
function equipmentAmount(equipment) {
  if (equipment === import_kolmafia136.Item.none) {
    return 0;
  }
  var amount = (0, import_kolmafia136.itemAmount)(equipment) + (0, import_kolmafia136.equippedAmount)(equipment, true);
  if (equipment.toString() in (0, import_kolmafia136.getRelated)($item`broken champagne bottle`, "fold")) {
    amount = (0, import_kolmafia136.itemAmount)(wrap_item($item`January's Garbage Tote`));
  }
  return amount;
}
function possessEquipment(equipment) {
  return equipmentAmount(equipment) > 0;
}
function possessOutfit(outfitToCheck, checkCanEquip) {
  if ((0, import_kolmafia136.outfitPieces)(outfitToCheck).length === 0) {
    auto_log_warning$1(`${outfitToCheck} is not a valid outfit!`);
    return false;
  }
  var _iterator22 = _createForOfIteratorHelper(
    (0, import_kolmafia136.outfitPieces)(outfitToCheck).entries()
  ), _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
      var _step22$value = _slicedToArray(_step22.value, 2), piece = _step22$value[1];
      if (!possessEquipment(piece)) {
        return false;
      }
      if (checkCanEquip && !(0, import_kolmafia136.canEquip)(piece)) {
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
    Object.entries((0, import_kolmafia137.availableChoiceOptions)()).map((_ref) => {
      var _ref2 = _slicedToArray(_ref, 2), _k = _ref2[0], _v = _ref2[1];
      return [(0, import_kolmafia137.toInt)(_k), _v];
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
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 22:
      case 23:
      case 24:
        piratesCoveChoiceHandler(choice);
        break;
      case 89:
        if (isActuallyEd() && (!possessEquipment($item`serpentine sword`) || !possessEquipment($item`snake shield`))) {
          (0, import_kolmafia137.runChoice)(2);
        } else {
          (0, import_kolmafia137.runChoice)(4);
        }
        break;
      case 90:
        (0, import_kolmafia137.runChoice)(3);
        break;
      case 105:
        if ((0, import_kolmafia137.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia137.runChoice)(1);
        } else {
          (0, import_kolmafia137.runChoice)(2);
        }
        break;
      case 106:
        (0, import_kolmafia137.runChoice)(3);
        break;
      case 107:
        (0, import_kolmafia137.runChoice)(4);
        break;
      case 108:
        (0, import_kolmafia137.runChoice)(4);
        break;
      case 109:
        if (options.has(4)) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(1);
        }
        break;
      case 110:
        (0, import_kolmafia137.runChoice)(4);
        break;
      case 111:
        (0, import_kolmafia137.runChoice)(3);
        break;
      case 112:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 113:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 114:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 115:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 116:
        (0, import_kolmafia137.runChoice)(4);
        break;
      case 117:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 118:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 120:
        (0, import_kolmafia137.runChoice)(4);
        break;
      case 123:
      case 125:
        hiddenTempleChoiceHandler(choice, page);
        break;
      case 139:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(3);
        }
        break;
      case 140:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(3);
        }
        break;
      case 141:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 142:
        (0, import_kolmafia137.runChoice)(3);
        break;
      case 143:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(3);
        }
        break;
      case 144:
        if (options.has(4) && haveWarOutfit$1()) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(3);
        }
        break;
      case 145:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 146:
        (0, import_kolmafia137.runChoice)(3);
        break;
      case 147:
        (0, import_kolmafia137.runChoice)(3);
        break;
      case 148:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 149:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 153:
      case 155:
      case 157:
        cyrptChoiceHandler(choice);
        break;
      case 163:
        if (in_lar()) {
          (0, import_kolmafia137.setProperty)("_LAR_skipNC163", (0, import_kolmafia137.myTurncount)().toString());
        }
        (0, import_kolmafia137.runChoice)(4);
        break;
      case 178:
        if (in_lar()) {
          (0, import_kolmafia137.setProperty)("_LAR_skipNC178", (0, import_kolmafia137.myTurncount)().toString());
        }
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 182:
        if ((0, import_kolmafia137.itemAmount)($item`model airship`) === 0) {
          (0, import_kolmafia137.runChoice)(4);
        } else if (options.has(6)) {
          (0, import_kolmafia137.runChoice)(6);
        } else if (options.has(5) && L10_needUmbrella()) {
          (0, import_kolmafia137.runChoice)(5);
        } else {
          (0, import_kolmafia137.runChoice)(1);
        }
        break;
      case 184:
      case 185:
      case 186:
        barrrneysBarrrChoiceHandler(choice);
        break;
      case 188:
        if ((0, import_kolmafia137.isWearingOutfit)("Frat Boy Ensemble")) {
          (0, import_kolmafia137.runChoice)(1);
        } else if ((0, import_kolmafia137.equippedAmount)($item`mullet wig`) === 1 && (0, import_kolmafia137.itemAmount)($item`briefcase`) > 0) {
          (0, import_kolmafia137.runChoice)(2);
        } else if ((0, import_kolmafia137.equippedAmount)($item`frilly skirt`) === 1 && (0, import_kolmafia137.itemAmount)($item`hot wing`) > 2) {
          (0, import_kolmafia137.runChoice)(3);
        } else {
          (0, import_kolmafia137.abort)(
            "I tried to infiltrate the orcish frat house without being equipped for the job"
          );
        }
        break;
      case 189:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 191:
        fcleChoiceHandler(choice);
        break;
      case 330:
        if ((0, import_kolmafia137.toInt)((0, import_kolmafia137.getProperty)("poolSharkCount")) < 25) {
          (0, import_kolmafia137.runChoice)(1);
        } else {
          (0, import_kolmafia137.runChoice)(2);
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
        (0, import_kolmafia137.runChoice)(1);
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
        if (!(0, import_kolmafia137.containsText)(page, "name=pingvalue size=5 value=2")) {
          (0, import_kolmafia137.runChoice)(1, "pingvalue=2");
        } else if (!(0, import_kolmafia137.containsText)(page, "name=whurmvalue size=5 value=4")) {
          (0, import_kolmafia137.runChoice)(2, "whurmvalue=4");
        } else if (!(0, import_kolmafia137.containsText)(page, "name=boomchuckvalue size=5 value=8")) {
          (0, import_kolmafia137.runChoice)(3, "boomchuckvalue=8");
        }
        break;
      case 589:
        if ((0, import_kolmafia137.itemAmount)($item`bugbear autopsy tweezers`) > 0) {
          for (var i = 1; i <= 5; i++) {
            if (options.has(i)) {
              (0, import_kolmafia137.runChoice)(i);
              break;
            }
          }
        } else {
          (0, import_kolmafia137.runChoice)(6);
        }
        break;
      case 590:
        if (options.has(2)) {
          (0, import_kolmafia137.runChoice)(2);
        } else {
          (0, import_kolmafia137.runChoice)(1);
        }
        break;
      case 591:
      case 592:
      case 593:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 597:
        auto_reagnimatedGetPart();
        break;
      case 604:
      case 605:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 606:
        if (in_bhy() || in_glover() && options.has(3) && (0, import_kolmafia137.itemAmount)($item`jar of oil`) === 0) {
          (0, import_kolmafia137.runChoice)(6);
          break;
        }
        if (options.has(4)) {
          (0, import_kolmafia137.runChoice)(4);
          break;
        }
        if (options.has(3) && (0, import_kolmafia137.itemAmount)($item`jar of oil`) > 0) {
          (0, import_kolmafia137.runChoice)(3);
          break;
        }
        if (options.has(2)) {
          (0, import_kolmafia137.runChoice)(2);
          break;
        }
        if (options.has(1)) {
          (0, import_kolmafia137.runChoice)(1);
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
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 618:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 669:
      case 670:
      case 671:
        castleBasementChoiceHandler(choice);
        break;
      case 672:
      case 673:
      case 674:
        (0, import_kolmafia137.runChoice)(3);
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
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 768:
        if (in_quantumTerrarium()) {
          if ((0, import_kolmafia137.myLocation)() === $location`The Themthar Hills`) {
            (0, import_kolmafia137.runChoice)(4);
          } else if ((0, import_kolmafia137.myLevel)() < 13) {
            (0, import_kolmafia137.runChoice)(2);
          } else {
            (0, import_kolmafia137.runChoice)(6);
          }
        } else {
          (0, import_kolmafia137.runChoice)(2);
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
        if (options.has(5) && (0, import_kolmafia137.toBoolean)((0, import_kolmafia137.getProperty)("auto_considerCCSCShore"))) {
          (0, import_kolmafia137.runChoice)(5);
        } else if ((0, import_kolmafia137.myPrimestat)() === $stat`Muscle`) {
          (0, import_kolmafia137.runChoice)(1);
        } else if ((0, import_kolmafia137.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia137.runChoice)(2);
        } else {
          (0, import_kolmafia137.runChoice)(3);
        }
        break;
      case 794:
      case 795:
      case 796:
      case 797:
        oldLandfillChoiceHandler(choice);
        break;
      case 804:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 806:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 822:
      case 823:
      case 824:
      case 825:
      case 826:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 829:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 875:
        if (poolSkillPracticeGains() === 1 || currentPoolSkill() > 15) {
          (0, import_kolmafia137.runChoice)(1);
        } else {
          (0, import_kolmafia137.runChoice)(2);
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
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 882:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 884:
      case 885:
      case 886:
        (0, import_kolmafia137.runChoice)(6);
        break;
      case 888:
        (0, import_kolmafia137.runChoice)(5);
        break;
      case 889:
        if ((0, import_kolmafia137.itemAmount)($item`dictionary`) === 0 && (0, import_kolmafia137.toBoolean)((0, import_kolmafia137.getProperty)("auto_getDictionary"))) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(5);
        }
        break;
      case 921:
        (0, import_kolmafia137.runChoice)(1);
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
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 976:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1e3:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1001:
        (0, import_kolmafia137.runChoice)(2);
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
        if ((0, import_kolmafia137.itemAmount)($item`electric boning knife`) > 0 || isActuallyEd() || in_bugbear() || in_pokefam()) {
          (0, import_kolmafia137.runChoice)(3);
        } else {
          (0, import_kolmafia137.runChoice)(2);
        }
        break;
      case 1056:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1060:
        if ((0, import_kolmafia137.itemAmount)($item`Skeleton Store office key`) === 0) {
          (0, import_kolmafia137.runChoice)(1);
        } else if (internalQuestStatus("questM23Meatsmith") < 1) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(2);
        }
        break;
      case 1061:
        if (internalQuestStatus("questM25Armorer") <= 2) {
          (0, import_kolmafia137.runChoice)(1);
        } else {
          (0, import_kolmafia137.runChoice)(5);
        }
        break;
      case 1062:
        if (options.has(6)) {
          (0, import_kolmafia137.runChoice)(6);
          if (options.has(1)) {
            (0, import_kolmafia137.runChoice)(1);
          } else {
            (0, import_kolmafia137.runChoice)(4);
          }
        }
        if (options.has(1)) {
          (0, import_kolmafia137.runChoice)(1);
        } else if ((0, import_kolmafia137.canDrink)() && options.has(5)) {
          (0, import_kolmafia137.runChoice)(5);
        } else if ((0, import_kolmafia137.canDrink)() && !is_boris()) {
          (0, import_kolmafia137.runChoice)(3);
        } else if ((0, import_kolmafia137.canEat)()) {
          (0, import_kolmafia137.runChoice)(2);
        } else {
          (0, import_kolmafia137.runChoice)(4);
        }
        break;
      case 1074:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1082:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1083:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1106:
      case 1107:
      case 1108:
        doghouseChoiceHandler(choice);
        break;
      case 1115:
        if (!(0, import_kolmafia137.toBoolean)((0, import_kolmafia137.getProperty)("_VYKEACafeteriaRaided"))) {
          (0, import_kolmafia137.runChoice)(1);
        } else if (!(0, import_kolmafia137.toBoolean)((0, import_kolmafia137.getProperty)("_VYKEALoungeRaided"))) {
          (0, import_kolmafia137.runChoice)(4);
        } else {
          (0, import_kolmafia137.runChoice)(6);
        }
        break;
      case 1119:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1258:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 1261:
        if ((0, import_kolmafia137.myMeat)() > 1e3) {
          (0, import_kolmafia137.runChoice)(1);
        } else {
          (0, import_kolmafia137.runChoice)(4);
        }
        break;
      case 1310: {
        var goal = (0, import_kolmafia137.toInt)((0, import_kolmafia137.getProperty)("_auto_lobsterChoice"));
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
            if ((0, import_kolmafia137.containsText)(str, search)) {
              glchoice = idx;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia137.runChoice)(glchoice);
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
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1342:
        bat_reallyPickSkills(20);
        break;
      case 1391:
        koe_RationingOutDestruction();
        break;
      case 1393:
        (0, import_kolmafia137.runChoice)(1);
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
        if ((0, import_kolmafia137.myPrimestat)() === $stat`Muscle`) {
          (0, import_kolmafia137.runChoice)(1);
        } else if ((0, import_kolmafia137.myPrimestat)() === $stat`Mysticality`) {
          (0, import_kolmafia137.runChoice)(2);
        } else {
          (0, import_kolmafia137.runChoice)(3);
        }
        break;
      case 1494:
        if ((0, import_kolmafia137.myLevel)() < 8) {
          (0, import_kolmafia137.runChoice)(3);
        } else {
          (0, import_kolmafia137.runChoice)(2);
        }
        break;
      case 1497:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 1500:
        (0, import_kolmafia137.runChoice)(2);
        break;
      case 1519:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1520:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1521:
        (0, import_kolmafia137.runChoice)(1);
        break;
      case 1522:
        (0, import_kolmafia137.runChoice)(1);
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
        (0, import_kolmafia137.runChoice)(1);
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
      (0, import_kolmafia137.setProperty)("auto_interrupt", true.toString());
    }
  }
}
