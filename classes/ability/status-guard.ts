import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityStatusGuard extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('status-guard', value);
  }

  toString(): string {
    return `ステータスガード: ${this.valueToString()}`;
  }
}
