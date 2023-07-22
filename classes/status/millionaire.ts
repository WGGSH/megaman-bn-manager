import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusMillionaire extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('millionaire', value);
  }

  public toString(): string {
    return `ミリオネア: ${this.valueToString()}`;
  }
}
