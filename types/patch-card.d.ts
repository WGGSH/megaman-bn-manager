// import { Ability } from '@/types/ability';
import { AbilityBase } from '@/classes/ability/base';

export interface PatchCard {
  id: number;
  number: string,
  name: string,
  capacity: number,
  abilities: AbilityBase[],
  isActive: boolean,
}
