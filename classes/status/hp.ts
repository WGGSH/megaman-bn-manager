import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusHp extends StatusBaseNumber {
  constructor(value: number) {
    super('hp', value);
  }

  public applyPlus(value: number): void {
    this._value += value;
  }

  public applyMagnify(value: number): void {
    this._value *= 1 + value / 100;
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `HP: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value >= 1000;
  }
}
