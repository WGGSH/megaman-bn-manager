import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusEncountBug extends StatusBaseNumber {
  constructor(value: number) {
    super('encount-bug', value);
  }

  public applyPlus(value: number): void {
    this._value += value;
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `エンカウントバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
