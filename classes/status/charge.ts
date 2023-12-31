import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusCharge extends StatusBaseNumber {
  constructor(value: number) {
    super('charge', value, 5, 1);
  }

  public toString(): string {
    return `チャージ: ${this._value}`;
  }
}
