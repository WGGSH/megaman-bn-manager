import { StatusBase } from '@/classes/status/base';

export class StatusCsChange extends StatusBase {
  protected _value: string | null;

  constructor(value: string | null) {
    super('cs-change', value);
    this._value = value;
  }

  get value(): string | null {
    return this._value;
  }

  set value(value: string | null) {
    this._value = value;
  }

  public toString(): string {
    return `CS変更: ${this._value}`;
  }
}
