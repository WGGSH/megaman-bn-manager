export class Ability {
  private _key: string;

  private _value: string | number | boolean;

  constructor(key: string, value: string | number | boolean) {
    this._key = key;
    this._value = value;
  }

  get key(): string {
    return this._key;
  }

  get value(): string | number | boolean {
    return this._value;
  }

  toString(): string {
    return `${this._key}=${this._value}`;
  }
}
