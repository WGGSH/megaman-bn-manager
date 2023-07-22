import { StatusBaseBoolean } from '@/classes/status/base/boolean';

export class StatusSlipRunner extends StatusBaseBoolean {
  constructor(value: boolean) {
    super('slip-runner', value);
  }

  public toString(): string {
    return `スリップランナー: ${this.valueToString()}`;
  }
}
