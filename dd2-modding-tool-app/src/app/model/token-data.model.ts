import { DurationType } from "./enums/duration-type.enum";

export interface Token {
  chance: number;
  consumeTypes: string[];
  removeTypes: string[];
  isPerformer: boolean;
  isTarget: boolean;
  tags: string[];
  durationType: DurationType;
  durationAmount: number;
  limit: number;
  consumeLimit: number;
  invertTokenId: string;
}

export const DEFAULT_CHANCE = 1;
