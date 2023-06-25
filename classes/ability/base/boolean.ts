import { AbilityBase } from '@/classes/ability/base';

export abstract class AbilityBaseBoolean extends AbilityBase {
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

  protected get isPositive(): boolean {
    return this._value;
  }

  protected valueToString(): string {
    return this._value ? 'ON' : 'OFF';
  }
}
