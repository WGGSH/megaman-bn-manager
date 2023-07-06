import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusResultBug extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('result-bug', value);
  }

  public toString(): string {
    return `リザルトバグ: ${this.valueToString()}`;
  }

  public isPositive(): boolean {
    return !this._value;
  }
}
