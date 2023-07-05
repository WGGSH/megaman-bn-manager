import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityEmotionWindowBug extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('emotion-window-bug', value);
  }

  protected get isPositive(): boolean {
    return !this._value;
  }

  toString(): string {
    return `ココロウィンドウバグ: ${this.valueToString()}`;
  }
}
