import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusRapid extends StatusBaseNumber {
  constructor(value: number) {
    super('rapid', value);
  }

  public apply(value: number): void {
    this._value += value;
  }

  public toString(): string {
    return `ラピッド: ${this._value}`;
  }
}
