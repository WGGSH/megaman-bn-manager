import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusChipRecovery extends StatusBaseNumber {
  constructor(value: number) {
    super('chip-recovery', value, 100, 0);
  }

  public apply(value: number): void {
    this._value = value;
    this.fixValue();
  }

  public toString(): string {
    return `チップ使用時にリカバリー: ${this._value}`;
  }
}
