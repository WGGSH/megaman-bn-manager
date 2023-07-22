import { StatusBaseString } from '@/classes/status/base/string';

export class StatusLeftBChange extends StatusBaseString {
  constructor(value: string) {
    super('left-b-change', value);
  }

  public valueToString(): string {
    switch (this._value) {
      case 'none':
        return 'なし';

      case 'shield':
        return 'シールド';

      case 'reflect':
        return 'リフレクト';

      case 'anti-damage':
        return 'カワリミ';

      case 'stop':
        return '足止め';

      case 'vacuum':
        return 'スイコミ';

      case 'meteor-3':
        return 'メテオx3';

      case 'risky-hunny':
        return 'リスキーハニー';

      case 'machine-sword':
        return 'マシーンソード';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `B+左: ${this.valueToString()}`;
  }
}
