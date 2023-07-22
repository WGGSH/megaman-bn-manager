import { AbilityBaseString } from '@/classes/ability/base/string';

export class AbilityCollectorChange extends AbilityBaseString {
  constructor(value: string) {
    super('collector-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'collector-eye':
        return 'コレクターズアイ';

      case 'collector-bug':
        return 'コレクターバグ';

      default:
        return '不明';
    }
  }

  toString(): string {
    return this.valueToString();
  }
}
