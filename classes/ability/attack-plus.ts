import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityAttackPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('attack-plus', value);
  }

  toString(): string {
    return `アタック${this.valueWithSign()}`;
  }
}
