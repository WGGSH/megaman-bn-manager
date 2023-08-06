interface AbilityInterface {
  key: string;
  value: number | string | boolean | null;

  isPositive: boolean;

  toString(): string;
}

abstract class AbilityBase implements AbilityInterface {
  protected abstract _key: string;

  protected abstract _value: number | string | boolean | null;

  get key(): string {
    return this._key;
  }

  public abstract get value(): number | string | boolean | null;

  public abstract get isPositive(): boolean;

  public abstract toString(): string;
}

export { AbilityBase, AbilityInterface };
