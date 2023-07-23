import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusBugStopper extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('bug-stopper', value);
  }

  public toString(): string {
    return `バグストッパー: ${this.valueToString()}`;
  }
}
