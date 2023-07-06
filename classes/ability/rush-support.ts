import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityRushSupport extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('rush-support', value);
  }

  toString(): string {
    return `ラッシュサポート: ${this.valueToString()}`;
  }
}
