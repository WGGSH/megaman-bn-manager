import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusPanelBug extends StatusBaseNumber {
  constructor(value: number) {
    super('panel-bug', value, 3, 1);
  }

  public applyPlus(value: number): void {
    this._value += value;
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `移動バグ Lv:${this._value}`;
  }

  public isPositive(): boolean {
    return this._value === 0;
  }
}
