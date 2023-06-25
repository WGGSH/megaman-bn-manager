import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusAttack extends StatusBaseNumber {
  constructor(value: number) {
    super('attack', value);
  }

  public applyPlus(value: number): void {
    this._value += value;
  }

  public applyMagnify(value: number): void {
    this._value *= value;
  }

  public apply(value: number): void {
    this._value = value;
  }

  public toString(): string {
    return `アタック: ${this._value}`;
  }
}
