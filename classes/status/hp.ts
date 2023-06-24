import { StatusBase } from '@/classes/status/base';

export class StatusHp extends StatusBase {
  protected _value: number;

  constructor(value: number) {
    super('hp', value);
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
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
