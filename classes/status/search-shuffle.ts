import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusSearchShuffle extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('search-shuffle', value);
  }

  public toString(): string {
    return `サーチシャッフル: ${this.valueToString()}`;
  }
}
