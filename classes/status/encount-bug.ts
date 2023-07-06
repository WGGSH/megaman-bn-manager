import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusEncountBug extends StatusBaseNumber {
  constructor(value: number) {
    super('encount-bug', value, 3, 0);
  }

  public toString(): string {
    return `エンカウントバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
