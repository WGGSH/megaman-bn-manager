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

  public toString(): string {
    return `フロートシューズ: ${this._value}`;
  }
}
