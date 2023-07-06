import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusChipRecovery extends StatusBaseNumber {
  constructor(value: number) {
    super('chip-recovery', value);
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `チップ使用時にリカバリー: ${this._value}`;
  }

  public isPositive(): boolean {
    return this._value > 0;
  }
}
