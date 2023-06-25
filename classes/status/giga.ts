import { StatusBaseNumber } from '@/classes/status/base/number';

export class StatusGiga extends StatusBaseNumber {
  constructor(value: number) {
    super('giga', value);
  }

  public toString(): string {
    return `ギガフォルダ: ${this._value}`;
  }
}
