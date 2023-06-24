import { StatusBase } from '@/classes/status/base';

export class StatusStatusGuard extends StatusBase {
  protected _value: boolean;

  constructor(value: boolean) {
    super('status-guard', value);
    this._value = value;
  }

  get value(): boolean {
    return this._value;
  }

  set value(value: boolean) {
    this._value = value;
  }

  public apply(value: boolean): void {
    this._value = value;
  }

  public toString(): string {
    return `ステータスガード: ${this._value}`;
  }
}
