import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityHpPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('hp-plus', value);
  }

  toString(): string {
    return `HP${this.valueWithSign()}`;
  }
}
