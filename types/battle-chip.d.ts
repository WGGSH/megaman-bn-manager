export interface BattleChip {
  id: number;
  number: number;
  name: string;
  class: string;
  type: string;
  damage: number | '-' | '???';
  capacity: number;
  rare: number;
  codes: Array<string>;
}
