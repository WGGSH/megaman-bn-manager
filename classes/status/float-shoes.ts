import { StatusBase } from '@/classes/status/base';

export class StatusFloatShoes extends StatusBase {
  protected _value: boolean;

  constructor(value: boolean) {
    super('float-shoes', value);
    this._value = value;
  }

  get value(): boolean {
    return this._value;
  }

  set value(value: boolean) {
    this._value = value;
  }

  public apply(value: boolean): void {
    this._value = value;
  }

  public toString(): string {
    return `フロートシューズ: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value;
  }
}
