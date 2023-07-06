import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusEmotionWindowBug extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('emotion-window-bug', value);
  }

  public toString(): string {
    return `ココロウィンドウバグ: ${this.valueToString()}`;
  }

  public isPositive(): boolean {
    return !this._value;
  }
}
