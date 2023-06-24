import { StatusBase } from '@/classes/status/base';

export class StatusSuperArmor extends StatusBase {
  protected _value: boolean;

  constructor(value: boolean) {
    super('super-armor', value);
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
    return `スーパーアーマー: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value;
  }
}