import { StatusBaseString } from '@/classes/status/base/string';

export class StatusCollectorChange extends StatusBaseString {
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

  public isPositive(): boolean {
    return this.value === 'collector-eye';
  }

  public toString(): string {
    return this.valueToString();
  }
}
