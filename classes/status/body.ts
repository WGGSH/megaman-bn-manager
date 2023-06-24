import { StatusBase } from '@/classes/status/base';

export class StatusBody extends StatusBase {
  protected _value: string;

  constructor(value: string) {
    super('body', value);
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  public toString(): string {
    return `${this._value}ボディ`;
  }
}
