import { StatusBaseString } from '@/classes/status/base/string';

export class StatusCsAdditionChange extends StatusBaseString {
  constructor(value: string) {
    super('cs-addition-change', value);
  }

  public valueToString(): string {
    switch (this.value) {
      case 'none':
        return 'OFF';

      case 'pull':
        return '左すいよせ';

      case 'bubble':
        return 'バブル';

      case 'break':
        return 'ブレイク';

      case 'elec':
        return 'マヒ';

      case 'panel-left-arrow':
        return 'パネル左矢印';

      case 'chip-destroy':
        return 'チップ破壊';

      case 'instant-kill':
        return '即死';

      case 'panel-right-arrow':
        return 'パネル右矢印';

      case 'panic':
        return '混乱';

      case 'panel-grass':
        return 'パネルくさむら';

      case 'frozen':
        return '凍結';

      case 'panel-ice':
        return 'パネルこおり';

      case 'hp-bug':
        return 'HPバグ';

      default:
        return '不明';
    }
  }

  public toString(): string {
    return `CS追加効果: ${this.valueToString()}`;
  }
}
