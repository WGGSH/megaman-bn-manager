import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusBattleHpBug extends StatusBaseNumber {
  constructor(value: number) {
    super('battle-hp-bug', value);
  }

  public applyPlus(value: number): void {
    this._value += value;
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `バトル中HPバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
