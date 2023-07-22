import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusCollectorEye extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('collector-eye', value);
  }

  public toString(): string {
    return `コレクターズアイ: ${this.valueToString()}`;
  }
}
