export abstract class AbilityBase {
  protected abstract _key: string;

  protected abstract _value: number | string | boolean | null;

  get key(): string {
    return this._key;
  }

  public abstract get value(): number | string | boolean | null;

  protected abstract get isPositive(): boolean;

  protected abstract toString(): string;
}
