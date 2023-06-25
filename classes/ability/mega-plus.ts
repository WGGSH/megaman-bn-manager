import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityMegaPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('mega-plus', value);
  }

  toString(): string {
    return `メガフォルダ${this.valueWithSign()}`;
  }
}
