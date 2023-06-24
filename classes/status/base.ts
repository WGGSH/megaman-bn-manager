export abstract class StatusBase {
  protected _key: string;

  protected _value: number | string | boolean | null;

  constructor(key: string, value: number | string | boolean | null) {
    this._key = key;
    this._value = value;
  }

  get key(): string {
    return this._key;
  }

  get value(): number | string | boolean | null {
    return this._value;
  }

  set value(value: number | string | boolean | null) {
    this._value = value;
  }

  abstract toString(): string;
}
