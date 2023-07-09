import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusCustom extends StatusBaseNumber {
  constructor(value: number) {
    super('custom', value, 8, 1);
  }

  public toString(): string {
    return `カスタム: ${this._value}`;
  }
}
