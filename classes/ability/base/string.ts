import { AbilityBase } from '@/classes/ability/base';

export abstract class AbilityBaseString extends AbilityBase {
  protected _key: string;

  protected _value: string;

  constructor(key: string, value: string) {
    super();
    this._key = key;
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }

  protected get isPositive(): boolean {
    return this._value !== 'none';
  }

  abstract valueToString(): string;
}
