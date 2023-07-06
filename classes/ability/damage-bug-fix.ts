import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityDamageBugFix extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('damage-bug-fix', value);
  }

  toString(): string {
    if (this._value) {
      return 'ダメージ時異常発生を修正';
    }
    return '';
  }
}
