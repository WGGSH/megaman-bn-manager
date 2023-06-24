import { StatusBase } from '@/classes/status/base';

export class StatusAirShoes extends StatusBase {
  protected _value: boolean;

  constructor(value: boolean) {
    super('air-shoes', value);
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
    return `エアシューズ: ${this._value}`;
  }
}
