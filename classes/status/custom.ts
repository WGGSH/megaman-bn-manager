import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusCustom extends StatusBaseNumber {
  constructor(value: number) {
    super('custom', value);
  }

  public toString(): string {
    return `カスタム: ${this._value}`;
  }
}
