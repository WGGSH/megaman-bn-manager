import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusSelfRecovery extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('self-recovery', value);
  }

  public toString(): string {
    return `セルフリカバリー: ${this.valueToString()}`;
  }
}
