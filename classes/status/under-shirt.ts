import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusUnderShirt extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('under-shirt', value);
  }

  public toString(): string {
    return `アンダーシャツ: ${this.valueToString()}`;
  }
}
