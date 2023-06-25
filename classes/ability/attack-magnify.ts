import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityAttackMagnify extends AbilityBaseNumber {
  constructor(value: number) {
    super('attack-magnify', value);
  }

  toString(): string {
    return `アタック×${this.valueWithSign()}`;
  }
}
