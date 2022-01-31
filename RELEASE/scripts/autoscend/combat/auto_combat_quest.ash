// This file is for quest specific combat handling.

// the junkyard gremlin quest
string auto_JunkyardCombatHandler(int round, monster enemy, string text)
{
	if(!($monsters[A.M.C. gremlin, batwinged gremlin, batwinged gremlin (tool), erudite gremlin, erudite gremlin (tool),
	spider gremlin, spider gremlin (tool), vegetable gremlin, vegetable gremlin (tool)] contains enemy))
	{
		if (isActuallyEd())
		{
			return auto_edCombatHandler(round, enemy, text);
		}
		return auto_combatHandler(round, enemy, text);
	}

	auto_log_info("auto_JunkyardCombatHandler: " + round, "brown");
	if(round == 0)
	{
		set_property("auto_gremlinMoly", false);
		remove_property("_auto_combatState");
	}

	if ($monsters[batwinged gremlin (tool), erudite gremlin (tool), spider gremlin (tool), vegetable gremlin (tool)] contains enemy) {
		set_property("auto_gremlinMoly", true);
	}

	if (!combat_status_check("gremlinNeedBanish") && !get_property("auto_gremlinMoly").to_boolean() && isActuallyEd())
	{
		combat_status_add("gremlinNeedBanish");
	}

	if(round >= 28)
	{
		if (canUse($skill[Storm of the Scarab], false))
		{
			return useSkill($skill[Storm of the Scarab], false);
		}
		else if (canUse($skill[Lunging Thrust-Smack], false))
		{
			return useSkill($skill[Lunging Thrust-Smack], false);
		}
		return "attack with weapon";
	}

	if(contains_text(text, "It whips out a hammer") || contains_text(text, "He whips out a crescent") || contains_text(text, "It whips out a pair") || contains_text(text, "It whips out a screwdriver"))
	{
		return useItem($item[Molybdenum Magnet]);
	}

	if (canUse($skill[Curse Of Weaksauce]))
	{
		return useSkill($skill[Curse Of Weaksauce]);
	}

	if (canUse($skill[Curse Of The Marshmallow]))
	{
		return useSkill($skill[Curse Of The Marshmallow]);
	}

	if (canUse($skill[Summon Love Scarabs]))
	{
		return useSkill($skill[Summon Love Scarabs]);
	}

	if (canUse($skill[Summon Love Gnats]))
	{
		return useSkill($skill[Summon Love Gnats]);
	}
	
	if(canUse($skill[Beanscreen]))
	{
		return useSkill($skill[Beanscreen]);
	}

	if(canUse($skill[Bad Medicine]))
	{
		return useSkill($skill[Bad Medicine]);
	}

	if(canUse($skill[Good Medicine]) && canSurvive(2.1))
	{
		return useSkill($skill[Good Medicine]);
	}

	item flyer = $item[Rock Band Flyers];
	if(auto_warSide() == "hippy")
	{
		flyer = $item[Jam Band Flyers];
	}
	skill stunner = getStunner(enemy);
	boolean stunned = combat_status_check("stunned");
	
	if (get_property("auto_gremlinMoly").to_boolean() && !canSurvive(20) && !stunned)		//don't flyer tool gremlins if it's dangerous to survive them for long
	{
		if(monster_attack() > ( my_buffedstat($stat[moxie]) + 10) && !canSurvive(10) && haveUsed($skill[Curse Of Weaksauce]))
		{
			//if after all deleveling it's still too strong to safely stasis let weaksauce delevel it more in exchange for a few turns
			//except if stuck with an attack familiar or unforeseen passive damage effects that can kill the gremlin
			boolean gremlinTakesDamage = (isAttackFamiliar(my_familiar()) || (monster_hp() < (0.8*monster_hp(enemy))));
			if(!gremlinTakesDamage && round < 10 && stunner != $skill[none])
			{
				combat_status_add("stunned");
				return useSkill(stunner);
			}
		}
	}
	else if (canUse(flyer) && get_property("flyeredML").to_int() < 10000 && my_location() != $location[The Battlefield (Frat Uniform)] && my_location() != $location[The Battlefield (Hippy Uniform)] && !get_property("auto_ignoreFlyer").to_boolean())
	{
		if(stunner != $skill[none] && !stunned)
		{
			combat_status_add("stunned");
			return useSkill(stunner);
		}
		if (isActuallyEd())
		{
			set_property("auto_edStatus", "UNDYING!");
		}
		if(canUse($item[Time-Spinner]) && auto_have_skill($skill[Ambidextrous Funkslinging]))
		{
			return useItems(flyer, $item[Time-Spinner]);
		}
		if(canSurvive(3.0) || stunned)
		{
			return useItem(flyer);
		}
	}

	if(!get_property("auto_gremlinMoly").to_boolean())
	{
		if (isActuallyEd())
		{
			if (get_property("_edDefeats").to_int() >= 2)
			{
				return findBanisher(round, enemy, text);
			}
			else if (canUse($item[Seal Tooth], false) && get_property("auto_edStatus") == "UNDYING!")
			{
				return useItem($item[Seal Tooth], false);
			}
		}
		else
		{
			return findBanisher(round, enemy, text);
		}
	}
	
	if(!canSurvive(1.5))
	{
		if(!isActuallyEd() || get_property("_edDefeats").to_int() >= 2)
		{
			abort("I am too weak to safely stasis this gremlin");
		}
	}

	foreach it in $items[Seal Tooth, Spectre Scepter, Doc Galaktik\'s Pungent Unguent]
	{
		if(canUse(it, false) && glover_usable(it))
		{
			return useItem(it, false);
		}
	}

	if (canUse($skill[Toss], false))
	{
		return useSkill($skill[Toss], false);
	}
	return "attack with weapon";
}
