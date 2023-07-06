import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusTangoSupport extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('tango-support', value);
  }

  public toString(): string {
    return `タンゴサポート: ${this.valueToString()}`;
  }
}
