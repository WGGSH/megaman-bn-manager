import { StatusBase } from '@/classes/status/base';

export class StatusGiga extends StatusBase {
  protected _value: number;

  constructor(value: number) {
    super('giga', value);
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

  public toString(): string {
    return `ギガフォルダ: ${this._value}`;
  }
}
