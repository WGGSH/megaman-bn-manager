import { StatusBase } from '@/classes/status/base';

export class StatusAttack extends StatusBase {
  protected _value: number;

  constructor(value: number) {
    super('attack', value);
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  public applyPlus(value: number): void {
    this._value += value;
  }

  public applyMagnify(value: number): void {
    this._value *= value;
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `アタック: ${this._value}`;
  }
}
