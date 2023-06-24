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

  public toString(): string {
    return `HP: ${this._value}`;
  }
}
