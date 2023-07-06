import { StatusBase } from '@/classes/status/base';

export abstract class StatusBaseNumber extends StatusBase {
  protected _key: string;

  protected _value: number;

  protected _maxValue: number;

  protected _minValue: number;

  constructor(key: string, value: number, maxValue: number, minValue: number) {
    super();
    this._key = key;
    this._value = value;
    this._maxValue = maxValue;
    this._minValue = minValue;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  public apply(value: number): void {
    this._value = value;
    this.fixValue();
  }

  public applyPlus(value: number): void {
    this._value += value;
    this.fixValue();
  }

  protected fixValue(): void {
    if (this._value > this._maxValue) {
      this._value = this._maxValue;
    }
    if (this._value < this._minValue) {
      this._value = this._minValue;
    }
  }

  public isPositive(): boolean {
    return this._value > 0;
  }
}
