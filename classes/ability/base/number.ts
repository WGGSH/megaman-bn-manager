import { AbilityBase } from '@/classes/ability/base';

export abstract class AbilityBaseNumber extends AbilityBase {
  protected _key: string;

  protected _value: number;

  constructor(key: string, value: number) {
    super();
    this._key = key;
    this._value = value;
  }

  public get value(): number {
    return this._value;
  }

  public get isPositive(): boolean {
    return this._value > 0;
  }

  protected valueWithSign(): string {
    if (this._value > 0) {
      return `+${this._value}`;
    }
    return `${this._value}`;
  }
}
