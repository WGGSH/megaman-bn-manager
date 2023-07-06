import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityChipRecoveryChange extends AbilityBaseNumber {
  constructor(value: number) {
    super('chip-recovery', value);
  }

  toString(): string {
    return `チップリカバリー${this.valueWithSign()}`;
  }
}
