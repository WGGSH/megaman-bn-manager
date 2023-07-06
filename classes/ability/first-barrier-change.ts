import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityFirstBarrierChange extends AbilityBaseString {
  constructor(value: string) {
    super('first-barrier-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'バリア: なし';

      case 'bubble-wrap':
        return 'バブルラップ';

      default:
        return 'バリア: 不明';
    }
  }

  toString(): string {
    return `ファースト${this.valueToString()}`;
  }
}
