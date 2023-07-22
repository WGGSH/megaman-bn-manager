import { StatusBaseString } from '@/classes/status/base/string';

export class StatusFirstBarrierChange extends StatusBaseString {
  constructor(value: string) {
    super('first-barrier-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'バリア: OFF';

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

  public toString(): string {
    return `ファースト${this.valueToString()}`;
  }
}
