import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityGigaPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('giga-plus', value);
  }

  toString(): string {
    return `ギガフォルダ${this.valueWithSign()}`;
  }
}
