import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusBeatSupport extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('beat-support', value);
  }

  public toString(): string {
    return `ビートサポート: ${this.valueToString()}`;
  }
}
