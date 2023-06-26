export abstract class AbilityBase {
  protected abstract _key: string;

  protected abstract _value: number | string | boolean | null;

  get key(): string {
    return this._key;
  }

  abstract get value(): number | string | boolean | null;

  abstract get isPositive(): boolean;

  abstract toString(): string;
}