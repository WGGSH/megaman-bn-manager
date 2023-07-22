import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityFirstBarrierChange extends AbilityBaseString {
  constructor(value: string) {
    super('first-barrier-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'バリア: なし';

      case 'barrier-10':
        return 'バリア';

      case 'bubble-wrap':
        return 'バブルラップ';

      case 'barrier-100':
        return 'バリア100';

      case 'barrier-200':
        return 'バリア200';

      case 'dream-aura':
        return 'ドリームオーラ';

      default:
        return 'バリア: 不明';
    }
  }

  toString(): string {
    return `ファースト${this.valueToString()}`;
  }
}
