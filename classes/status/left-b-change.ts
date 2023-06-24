import { StatusBase } from '@/classes/status/base';

export class StatusLeftBChange extends StatusBase {
  protected _value: string | null;

  constructor(value: string | null) {
    super('left-b-change', value);
    this._value = value;
  }

  get value(): string | null {
    return this._value;
  }

  set value(value: string | null) {
    this._value = value;
  }

  public toString(): string {
    return `B+左: ${this._value}`;
  }
}
