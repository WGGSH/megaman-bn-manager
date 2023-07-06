import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusCustomDamageBug extends StatusBaseNumber {
  constructor(value: number) {
    super('custom-damage-bug', value, 100, 0);
  }

  public apply(value: number): void {
    this._value = value;
    this.fixValue();
  }

  public toString(): string {
    return `カスタムダメージバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
