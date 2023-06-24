import { StatusBase } from '@/classes/status/base';

export class StatusMega extends StatusBase {
  protected _value: number;

  constructor(value: number) {
    super('mega', value);
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
    return `メガフォルダ: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value >= 5;
  }
}
