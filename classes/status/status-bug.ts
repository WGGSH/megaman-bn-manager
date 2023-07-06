import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusStatusBug extends StatusBaseNumber {
  constructor(value: number) {
    super('chip-recovery', value);
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `ステータスバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
