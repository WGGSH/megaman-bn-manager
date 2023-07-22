import { StatusBaseString } from '@/classes/status/base/string';

export class StatusHumorChange extends StatusBaseString {
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
        return 'なし';
    }
  }

  public toString(): string {
    return `LB: ${this.valueToString()}`;
  }
}
