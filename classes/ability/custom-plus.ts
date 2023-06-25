import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityCustomPlus extends AbilityBaseNumber {
  constructor(value: number) {
    super('custom-plus', value);
  }

  toString(): string {
    return `カスタム${this.valueWithSign()}`;
  }
}
