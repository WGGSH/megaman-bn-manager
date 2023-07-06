export abstract class StatusBase {
  protected abstract _key: string;

  protected abstract _value: number | string | boolean | null;

  public get key(): string {
    return this._key;
  }

  public abstract get value(): number | string | boolean | null;

  public abstract set value(value: number | string | boolean | null);

  public abstract apply(value: number | string | boolean | null): void;

  public abstract toString(): string;

  public abstract isPositive(): boolean;
}
