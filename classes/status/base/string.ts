import { StatusBase } from '@/classes/status/base';

export abstract class StatusBaseString extends StatusBase {
  protected _key: string;

  protected _value: string;

  constructor(key: string, value: string) {
    super();
    this._key = key;
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  public apply(value: string): void {
    this._value = value;
  }

  abstract valueToString(): string;

  public isPositive(): boolean {
    return this._value !== 'none';
  }
}
