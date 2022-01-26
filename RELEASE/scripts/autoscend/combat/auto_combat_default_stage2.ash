string auto_combatDefaultStage2(int round, monster enemy, string text)
{
	// stage 2 = enders: escape, replace, instakill, yellowray and other actions that instantly end combat
	string retval;
	
	//if we want to olfact in stage 4 then we should delay stage 2 until we olfact.
	//we do not want to olfact now because we should do stage 3 first to stun and/or debuff the enemy first before olfacting.
	if(!combat_status_check("sniffed") && !isSniffed(enemy) && auto_wantToSniff(enemy, my_location()) && getSniffer(enemy) != $skill[none])
	{
		auto_log_debug("Skipping stage 2 of combat for now as we intend to olfact [" +enemy+ "]");
		return "";
	}
	
	// Path = dark gyffte
	retval = auto_combatDarkGyffteStage2(round, enemy, text);
	if(retval != "") return retval;

	//use industrial fire extinguisher zone specific skills
	string extinguisherSkill = auto_FireExtinguisherCombatString(my_location());
	if(extinguisherSkill != "" && have_equipped($item[industrial fire extinguisher])
	//below is temp workaround for https://github.com/Loathing-Associates-Scripting-Society/autoscend/issues/1011
	&& enemy != $monster[screambat])
	{
		handleTracker(enemy, to_skill(substring(extinguisherSkill, 6)), "auto_otherstuff");
		return extinguisherSkill;
	}
	
	//instakill enemies in [The Red Zeppelin]
	if(canUse($item[Glark Cable], true) && (my_location() == $location[The Red Zeppelin]) && (get_property("questL11Ron") == "step3") && (get_property("_glarkCableUses").to_int() < 5))
	{
		if($monsters[Man With The Red Buttons, Red Butler, Red Fox, Red Skeleton] contains enemy)
		{
			return useItem($item[Glark Cable]);
		}
	}
	
	//instakill enemies in [A Mob Of Zeppelin Protesters]
	if(canUse($item[Cigarette Lighter]) && (my_location() == $location[A Mob Of Zeppelin Protesters]) && (get_property("questL11Ron") == "step1"))
	{
		return useItems($item[Cigarette Lighter], $item[none]);
	}
	
	//instakill using [Power Pill] which is iotm familiar derivative
	if((get_property("auto_usePowerPill").to_boolean()) && (get_property("_powerPillUses").to_int() < 20) && instakillable(enemy))
	{
		if(item_amount($item[Power Pill]) > 0)
		{
			return "item " + $item[Power Pill];
		}
	}
	
	//instakill using [Pair of Stomping Boots] iotm familiar which will produce spleen consumables
	if((my_familiar() == $familiar[Pair of Stomping Boots]) && (get_property("_bootStomps").to_int()) < 7 && instakillable(enemy) && get_property("bootsCharged").to_boolean())
	{
		if(!($monsters[Dairy Goat, Lobsterfrogman, Writing Desk] contains enemy) && !($locations[The Laugh Floor, Infernal Rackets Backstage] contains my_location()) && canUse($skill[Release the boots]))
		{
			return useSkill($skill[Release the boots]);
		}
	}
	
	//yellowray instantly kills the enemy and makes them drop all items they can drop.
	if(!combat_status_check("yellowray") && auto_wantToYellowRay(enemy, my_location()))
	{
		string combatAction = yellowRayCombatString(enemy, true);
		if(combatAction != "")
		{
			combat_status_add("yellowray");
			if(index_of(combatAction, "skill") == 0)
			{
				handleTracker(enemy, to_skill(substring(combatAction, 6)), "auto_yellowRays");
			}
			else if(index_of(combatAction, "item") == 0)
			{
				handleTracker(enemy, to_item(substring(combatAction, 5)), "auto_yellowRays");
			}
			else
			{
				auto_log_warning("Unable to track yellow ray behavior: " + combatAction, "red");
			}
			if(combatAction == useSkill($skill[Asdon Martin: Missile Launcher], false))
			{
				set_property("_missileLauncherUsed", true);
			}
			return combatAction;
		}
		else
		{
			auto_log_warning("Wanted a yellow ray but we can not find one.", "red");
		}
	}

	//convert enemy into a helpless frog/newt/lizard
	if(get_property("auto_useCleesh").to_boolean())
	{
		if(canUse($skill[CLEESH]))
		{
			set_property("auto_useCleesh", false);
			return useSkill($skill[CLEESH]);
		}
	}
	
	//chance for a free runaway
	if((enemy == $monster[Plaid Ghost]) && (item_amount($item[T.U.R.D.S. Key]) > 0))
	{
		return "item " + $item[T.U.R.D.S. Key];
	}

	//free runaway against pygmies. accelerates hidden city quest
	if(item_amount($item[short writ of habeas corpus]) > 0 && canUse($item[short writ of habeas corpus]) && !inAftercore())
	{
		if($monsters[Pygmy Orderlies, Pygmy Witch Lawyer, Pygmy Witch Nurse] contains enemy)
		{
			return "item " + $item[Short Writ Of Habeas Corpus];
		}
	}

	if(!combat_status_check("banishercheck") && auto_wantToBanish(enemy, my_location()))
	{
		string banishAction = banisherCombatString(enemy, my_location(), true);
		if(banishAction != "")
		{
			auto_log_info("Looking at banishAction: " + banishAction, "green");
			combat_status_add("banisher");
			if(index_of(banishAction, "skill") == 0)
			{
				handleTracker(enemy, to_skill(substring(banishAction, 6)), "auto_banishes");
			}
			else if(index_of(banishAction, "item") == 0)
			{
				handleTracker(enemy, to_item(substring(banishAction, 5)), "auto_banishes");
			}
			else
			{
				auto_log_warning("Unable to track banisher behavior: " + banishAction, "red");
			}
			return banishAction;
		}
		//we wanted to banish an enemy and failed. set a property so we do not bother trying in subsequent rounds
		combat_status_add("banishercheck");
	}

	// Free run from monsters we want to banish but are unable to
	if(auto_wantToBanish(enemy, my_location()))
	{
		//TODO: Make freeRunCombatString() like banish
		//TODO use $item[Tattered Scrap Of Paper] as a free runaway?
		//TODO use $item[Green Smoke Bomb] as a free runaway?

		if (canUse($skill[Peel Out]) && pete_peelOutRemaining() > 0)
		{
			handleTracker(enemy, $skill[Peel Out], "auto_freeruns");
			return useSkill($skill[Peel Out]);
		}
	}

	if (!combat_status_check("replacercheck") && canReplace(enemy) && auto_wantToReplace(enemy, my_location()))
	{
		string combatAction = replaceMonsterCombatString(enemy, true);
		if(combatAction != "")
		{
			combat_status_add("replacer");
			if(index_of(combatAction, "skill") == 0)
			{
				if (to_skill(substring(combatAction, 6)) == $skill[CHEAT CODE: Replace Enemy])
				{
					handleTracker($skill[CHEAT CODE: Replace Enemy], "auto_powerfulglove");
				}
				handleTracker(enemy, to_skill(substring(combatAction, 6)), "auto_replaces");
			}
			else if(index_of(combatAction, "item") == 0)
			{
				handleTracker(enemy, to_item(substring(combatAction, 5)), "auto_replaces");
			}
			else
			{
				auto_log_warning("Unable to track replacer behavior: " + combatAction, "red");
			}
			return combatAction;
		}
		else
		{
			auto_log_warning("Wanted a replacer but we can not find one.", "red");
		}
		combat_status_add("replacercheck");
	}
	
	//convert enemy [Tomb rat] into [Tomb rat king]
	if(enemy == $monster[Tomb Rat] &&
	item_amount($item[Tangle Of Rat Tails]) > 0 &&
	(item_amount($item[Tomb Ratchet]) + item_amount($item[Crumbling Wooden Wheel])) < 10 &&		//actually need ratchets
	$location[the middle chamber].fire_level < 3		//wildfire path. ratchets do not burn. king ratchets burn. fire == 0 in other paths
	)
	{
		string res = "item " + $item[Tangle of Rat Tails];
		if(auto_have_skill($skill[Ambidextrous Funkslinging]))
		{
			res += ", none";
		}
		return res;
	}

	// Bugbear Invasion
	if (in_bugbear())
	{
		if (enemy == $monster[bugbear scientist] && item_amount($item[quantum nanopolymer spider web]) > 0)
		{
			return "item " + $item[quantum nanopolymer spider web];
		}
		if (enemy == $monster[liquid metal bugbear] && item_amount($item[drone self-destruct chip]) > 0)
		{
			return "item " + $item[drone self-destruct chip];
		}
	}
	
	# Instakill handler
	boolean doInstaKill = true;
	if($monsters[Lobsterfrogman, Ninja Snowman Assassin] contains enemy)
	{
		if(auto_have_skill($skill[Digitize]) && (get_property("_sourceTerminalDigitizeMonster") != enemy))
		{
			doInstaKill = false;
		}
	}

	if(instakillable(enemy) && !isFreeMonster(enemy) && doInstaKill)
	{
		if(canUse($skill[lightning strike]))
		{
			handleTracker(enemy, $skill[lightning strike], "auto_instakill");
			loopHandlerDelayAll();
			return useSkill($skill[lightning strike]);
		}

		if(canUse($skill[Chest X-Ray]) && equipped_amount($item[Lil\' Doctor&trade; bag]) > 0 && (get_property("_chestXRayUsed").to_int() < 3))
		{
			if((my_adventures() < 20) || inAftercore() || (my_daycount() >= 3))
			{
				handleTracker(enemy, $skill[Chest X-Ray], "auto_instakill");
				loopHandlerDelayAll();
				return useSkill($skill[Chest X-Ray]);
			}
		}
		if(canUse($skill[shattering punch]) && (get_property("_shatteringPunchUsed").to_int() < 3))
		{
			if((my_adventures() < 20) || inAftercore() || (my_daycount() >= 3))
			{
				handleTracker(enemy, $skill[shattering punch], "auto_instakill");
				loopHandlerDelayAll();
				return useSkill($skill[shattering punch]);
			}
		}
		if(canUse($skill[Gingerbread Mob Hit]) && !get_property("_gingerbreadMobHitUsed").to_boolean())
		{
			if((my_adventures() < 20) || inAftercore() || (my_daycount() >= 3))
			{
				handleTracker(enemy, $skill[Gingerbread Mob Hit], "auto_instakill");
				loopHandlerDelayAll();
				return useSkill($skill[Gingerbread Mob Hit]);
			}
		}

	//		Can not use _usedReplicaBatoomerang if we have more than 1 because of the double item use issue...
	//		Sure, we can try to use a second item (if we have it or are forced to buy it... ugh).
	//		if(!combat_status_check("batoomerang") && (item_amount($item[Replica Bat-oomerang]) > 0) && (get_property("_usedReplicaBatoomerang").to_int() < 3))
	//		THIS IS COPIED TO THE ED SECTION, IF IT IS FIXED, FIX IT THERE TOO!
		if(canUse($item[Replica Bat-oomerang]))
		{
			if(get_property("auto_batoomerangDay").to_int() != my_daycount())
			{
				set_property("auto_batoomerangDay", my_daycount());
				set_property("auto_batoomerangUse", 0);
			}
			if(get_property("auto_batoomerangUse").to_int() < 3)
			{
				set_property("auto_batoomerangUse", get_property("auto_batoomerangUse").to_int() + 1);
				handleTracker(enemy, $item[Replica Bat-oomerang], "auto_instakill");
				loopHandlerDelayAll();
				return useItem($item[Replica Bat-oomerang]);
			}
		}

		if(canUse($skill[Fire the Jokester\'s Gun]) && !get_property("_firedJokestersGun").to_boolean())
		{
			handleTracker(enemy, $skill[Fire the Jokester\'s Gun], "auto_instakill");
			loopHandlerDelayAll();
			return useSkill($skill[Fire the Jokester\'s Gun]);
		}
	}

	//wearing [retro superhero cape] iotm set to vampire slicer mode instakills Undead and reduces evilness in Cyrpt zones.
	if (canUse($skill[Slay the Dead]) && enemy.phylum == $phylum[undead])
	{
		return useSkill($skill[Slay the Dead]);
	}
	
	//autokill duplicated enemies. this still costs a turn
	if(canUse($item[Exploding Cigar]) && haveUsed($skill[Duplicate]))
	{
		return useItem($item[Exploding Cigar]);
	}
	
	return "";
}
