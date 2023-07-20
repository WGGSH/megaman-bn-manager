import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusMoveBug extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('move-bug', value);
  }

  public toString(): string {
    return `端まで移動バグ: ${this.valueToString()}`;
  }

  public isPositive(): boolean {
    return !this._value;
  }
}
