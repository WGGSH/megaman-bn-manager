import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusSuperArmor extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('super-armor', value);
  }

  public toString(): string {
    return `スーパーアーマー: ${this.valueToString()}`;
  }
}
