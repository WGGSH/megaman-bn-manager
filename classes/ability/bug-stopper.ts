import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityBugStopper extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('bug-stopper', value);
  }

  toString(): string {
    return `バグストッパー: ${this.valueToString()}`;
  }
}
