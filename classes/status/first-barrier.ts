import { StatusBase } from '@/classes/status/base';

export class StatusFirstBarrier extends StatusBase {
  protected _value: string | null;

  constructor(value: string | null) {
    super('first-barrier', value);
    this._value = value;
  }

  get value(): string | null {
    return this._value;
  }

  set value(value: string | null) {
    this._value = value;
  }

  public toString(): string {
    return `ファーストバリア: ${this._value}`;
  }
}
