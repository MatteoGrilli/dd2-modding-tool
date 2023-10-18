import { BuffId, ConditionId, EffectId, TokenId } from "./alias.model";
import { DurationType } from "./enums/duration-type.enum";
import { Rank } from "./enums/rank.enum";

// TODO: Might move these around. For now I'm putting everything in the folder of the file I find them in.
// As soon as I find duplicates, I'm moving these to their separate files.

export interface Token {
	consume_buffs?: BuffId[],
	id: string,
	m_AlwaysRemove?: boolean,
	m_Chance?: number,
	m_ConditionId?: ConditionId,
	m_ConsumeLimit?: number,
	m_ConsumePriority?: number,
	m_ConsumeTypes?: string, // Looks like a bunch of ids
	m_DurationAmount?: number,
	m_DurationIsSingleRemove?: boolean,
	m_DurationType?: DurationType,
	m_HighlightTypes?: string[], // Only value in token_data: on_killed
	m_InvertTokenId?: TokenId,
	m_IsExclusiveSource?: boolean,
	m_IsHidden?: boolean,
	m_IsPerformer?: boolean,
	m_IsRemovedOnSourceCapture?: boolean,
	m_IsRemovedOnSourceDeath?: boolean,
	m_IsTarget?: boolean,
	m_Limit: number,
	m_NegateIds?: TokenId[],
	m_RemoveTypes?: string[], // Some kind of code. on_killed is part of this!
	m_ShowDescription?: boolean,
	m_ShowName?: boolean,
	m_Tags: string[],
	m_TeamLimit?: number,
	remove_any_conditions?: ConditionId[],
	replace?: string[] // Weird format. Example: "daze,WITH,stun"
}

export interface Buff {
	id: string,
	m_DurationAmount: number,
	m_DurationType: DurationType
}

// add_stats and key_map are synchronized arrays
export interface ActorDataStats {
	add_stats: number[],
	id: string,
	key_map: string[] // some kind of "stat id". E.g. health_damage_dealt_percent', 'health_damage_received_percent', 'speed', 'health_damage', 'health_damage_range', 'crit_chance
}

export interface ActorDataSkill {
	id: string,
	launch_ranks: Rank[],
	m_ActorDataEffectsId: EffectId, // Only ever found single ones
	m_AllConditionIds?: ConditionId[],
	m_CanBeRiposted: boolean,
	m_IgnoreDamageMultipliers?: boolean,
	m_IsBlockPass: boolean,
	m_IsForced: boolean,
	m_IsFriendly: boolean,
	m_IsFriendlySelfTargetValid?: boolean,
	m_IsMultiHit: boolean,
	m_Tags?: string[],
	performer_buffs?: BuffId[],
	target_ranks?: Rank[],
	token_ignores?: TokenId[]
}

export interface ActorDataEffects {
	id: string,
	performer_after_target_effects?: EffectId[],
	performer_effects?: EffectId[],
	performer_team_effects?: EffectId[],
	target_effects?: EffectId[],
	target_team_others_effects?: EffectId[],
	turn_start_effects?: EffectId[],
	turn_start_friendly_team_effects?: EffectId[]
}

export interface DataExternalBuffs {
	buffs: BuffId[],
	id: string
}

// It's gonna be fun to try and understand the default for each value :D
export const DEFAULT_CHANCE = 1;
