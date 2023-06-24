import { StatusBase } from '@/classes/status/base';

export class StatusCharge extends StatusBase {
  protected _value: number;

  constructor(value: number) {
    super('charge', value);
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  public apply(value: number): void {
    this._value += value;
  }

  public toString(): string {
    return `チャージ: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value > 0;
  }
}
