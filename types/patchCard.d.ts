import { Ability } from '@/types/ability';

export interface PatchCard {
  id: number;
  number: string,
  name: string,
  capacity: number,
  abilities: Array<Ability>,
}
