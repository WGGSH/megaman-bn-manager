import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusSneakRun extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('sneak-run', value);
  }

  public toString(): string {
    return `シノビダッシュ: ${this.valueToString()}`;
  }
}
