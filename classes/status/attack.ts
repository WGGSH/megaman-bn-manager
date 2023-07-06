import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusAttack extends StatusBaseNumber {
  constructor(value: number) {
    super('attack', value, 10, 1);
  }

  public applyMagnify(value: number): void {
    this._value *= value;
    this.fixValue();
  }

  public toString(): string {
    return `アタック: ${this._value}`;
  }
}
