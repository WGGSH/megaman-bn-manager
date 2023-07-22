import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityHumorChange extends AbilityBaseString {
  constructor(value: string) {
    super('humor-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'humor-sense':
        return 'ユーモアセンス';

      case 'rhythmic-poem':
        return 'リズミカルポエム';

      default:
        return '不明';
    }
  }

  toString(): string {
    return `LB: ${this.valueToString()}`;
  }
}
