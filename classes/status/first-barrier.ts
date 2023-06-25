import { StatusBaseString } from '@/classes/status/base/string';

export class StatusFirstBarrier extends StatusBaseString {
  constructor(value: string) {
    super('first-barrier', value);
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

  public toString(): string {
    return `ファースト${this.valueToString()}`;
  }
}
