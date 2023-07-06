import { StatusBaseString } from '@/classes/status/base/string';

export class StatusFirstBarrierChange extends StatusBaseString {
  constructor(value: string) {
    super('first-barrier-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'バリア: OFF';

      case 'bubble-wrap':
        return 'バブルラップ';

      default:
        return 'バリア: 不明';
    }
  }

  public toString(): string {
    return `ファースト${this.valueToString()}`;
  }
}
