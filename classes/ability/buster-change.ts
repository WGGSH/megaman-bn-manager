import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityBusterChange extends AbilityBaseString {
  constructor(value: string) {
    super('buster-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'OFF';

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

  toString(): string {
    return `バスター変更: ${this.valueToString()}`;
  }
}
