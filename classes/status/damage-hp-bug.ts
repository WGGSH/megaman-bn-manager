import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusDamageHpBug extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('damage-hp-bug', value);
  }

  public toString(): string {
    return `ダメージ時HPバグ: ${this.valueToString()}`;
  }

  public isPositive(): boolean {
    return !this._value;
  }
}
