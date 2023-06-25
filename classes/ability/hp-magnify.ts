import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityHpMagnify extends AbilityBaseNumber {
  constructor(value: number) {
    super('hp-magnify', value);
  }

  toString(): string {
    return `HP${this.valueWithSign()}%`;
  }
}
