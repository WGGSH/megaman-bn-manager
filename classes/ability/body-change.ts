import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityBodyChange extends AbilityBaseString {
  constructor(value: string) {
    super('body-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'ノーマルボディ';

      case 'fire':
        return 'ファイアボディ';

      case 'aqua':
        return 'アクアボディ';

      case 'elec':
        return 'エレキボディ';

      case 'wood':
        return 'ウッドボディ';

      default:
        return '不明';
    }
  }

  protected get isPositive(): boolean {
    return this.value !== '';
  }

  toString(): string {
    return this.valueToString();
  }
}
