import { StatusBase } from '@/classes/status/base';

export abstract class StatusBaseBoolean extends StatusBase {
  protected _key: string;

  protected _value: boolean;

  constructor(key: string, value: boolean) {
    super();
    this._key = key;
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

  protected valueToString(): string {
    return this._value ? 'ON' : 'OFF';
  }

  public isPositive(): boolean {
    return this._value;
  }
}
