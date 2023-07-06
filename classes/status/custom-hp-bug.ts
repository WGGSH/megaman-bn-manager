import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusCustomHpBug extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('custom-hp-bug', value);
  }

  public toString(): string {
    return `カスタム中HPバグ: ${this.valueToString()}`;
  }

  public isPositive(): boolean {
    return !this._value;
  }
}
