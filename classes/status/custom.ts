import { StatusBase } from '@/classes/status/base';

export class StatusCustom extends StatusBase {
  protected _value: number;

  constructor(value: number) {
    super('custom', value);
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
    return `カスタム: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value >= 5;
  }
}
