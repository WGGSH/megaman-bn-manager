import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusHp extends StatusBaseNumber {
  constructor(value: number) {
    super('hp', value, 100000, 1);
  }

  public applyMagnify(value: number): void {
    this._value = Math.floor(this._value * (1 + value / 10));
    this.fixValue();
  }

  public toString(): string {
    return `HP: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value >= 1000;
  }
}
