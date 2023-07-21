import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusBusterBug extends StatusBaseNumber {
  constructor(value: number) {
    super('buster-bug', value, 3, 0);
  }

  public applyPlus(value: number): void {
    this._value += value;
    this.fixValue();
  }

  public apply(value: number): void {
    this._value = value;
    this.fixValue();
  }

  public toString(): string {
    return `バスター空撃ちバグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
