import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusCustomOpenBug extends StatusBaseNumber {
  constructor(value: number) {
    super('custom-open-bug', value, 3, 0);
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `カスタムオープンバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
