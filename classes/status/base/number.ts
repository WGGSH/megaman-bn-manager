import { StatusBase } from '@/classes/status/base';

export abstract class StatusBaseNumber extends StatusBase {
  protected _key: string;

  protected _value: number;

  constructor(key: string, value: number) {
    super();
    this._key = key;
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  public apply(value: number): void {
    this._value += value;
  }

  public isPositive(): boolean {
    return this._value > 0;
  }
}
