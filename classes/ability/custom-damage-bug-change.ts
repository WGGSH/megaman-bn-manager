import { AbilityBaseNumber } from '@/classes/ability/base/number';

export class AbilityCustomDamageBugChange extends AbilityBaseNumber {
  constructor(value: number) {
    super('custom-damage-bug-change', value);
  }

  protected get isPositive(): boolean {
    return this.value === 0;
  }

  toString(): string {
    return `カスタム時ダメージ${this.valueWithSign()}`;
  }
}
