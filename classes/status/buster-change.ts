import { StatusBaseString } from '@/classes/status/base/string';

export class StatusBusterChange extends StatusBaseString {
  constructor(value: string) {
    super('buster-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'なし';

      case 'meteor-1':
        return 'メテオx1';

      case 'minibomb':
        return 'ミニボム';

      case 'sword':
        return 'ソード';

      case 'crack-shoot':
        return 'クラックシュート';

      case 'triple-buster':
        return 'トリプルバスター';

      case 'charge-shot':
        return 'チャージショット';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `バスター変更: ${this.valueToString()}`;
  }
}
