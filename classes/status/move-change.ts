import { StatusBase } from '@/classes/status/base';

export class StatusMoveChange extends StatusBase {
  protected _value: string | null;

  constructor(value: string | null) {
    super('move-change', value);
    this._value = value;
  }

  get value(): string | null {
    return this._value;
  }

  set value(value: string | null) {
    this._value = value;
  }

  public apply(value: string | null): void {
    this._value = value;
  }

  public toString(): string {
    return `移動: ${this._value}`;
  }
}
