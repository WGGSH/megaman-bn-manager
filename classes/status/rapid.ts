import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusRapid extends StatusBaseNumber {
  constructor(value: number) {
    super('rapid', value, 5, 1);
  }

  public toString(): string {
    return `ラピッド: ${this._value}`;
  }
}
