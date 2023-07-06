import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusMega extends StatusBaseNumber {
  constructor(value: number) {
    super('mega', value, 10, 1);
  }

  public toString(): string {
    return `メガフォルダ: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value >= 5;
  }
}
