import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusNumberOpen extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('number-open', value);
  }

  public toString(): string {
    return `ナンバーオープン: ${this.valueToString()}`;
  }
}
