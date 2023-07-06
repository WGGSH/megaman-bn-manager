import { AbilityBaseBoolean } from '@/classes/ability/base/boolean';

export class AbilityBeatSupport extends AbilityBaseBoolean {
  constructor(value: boolean) {
    super('beat-support', value);
  }

  toString(): string {
    return `ビートサポート: ${this.valueToString()}`;
  }
}
