import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusBusterBug extends StatusBaseNumber {
  constructor(value: number) {
    super('buster-bug', value);
  }

  public applyPlus(value: number): void {
    this._value += value;
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `バスター空撃ちバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}