import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilitySearchShuffle extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('search-shuffle', value);
  }

  toString(): string {
    return `サーチシャッフル: ${this.valueToString()}`;
  }
}
