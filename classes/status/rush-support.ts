import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusRushSupport extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('rush-support', value);
  }

  public toString(): string {
    return `ラッシュサポート: ${this.valueToString()}`;
  }
}
