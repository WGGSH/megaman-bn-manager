import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusStatusGuard extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('status-guard', value);
  }

  public toString(): string {
    return `ステータスガード: ${this.valueToString()}`;
  }
}
