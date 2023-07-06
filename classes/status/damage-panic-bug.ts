import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusDamagePanicBug extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('damage-panic-bug', value);
  }

  public toString(): string {
    return `ダメージ時混乱バグ: ${this.valueToString()}`;
  }

  public isPositive(): boolean {
    return !this._value;
  }
}
