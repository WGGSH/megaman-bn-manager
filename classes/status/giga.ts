import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusGiga extends StatusBaseNumber {
  constructor(value: number) {
    super('giga', value, 5, 1);
  }

  public toString(): string {
    return `ギガフォルダ: ${this._value}`;
  }
}
