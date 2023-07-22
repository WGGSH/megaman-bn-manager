import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusSupportBug extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('support-bug', value);
  }

  public toString(): string {
    return `サポートバグ: ${this.valueToString()}`;
  }

  public isPositive(): boolean {
    return !this._value;
  }
}
