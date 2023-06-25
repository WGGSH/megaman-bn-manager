export abstract class StatusBase {
  protected abstract _key: string;

  protected abstract _value: number | string | boolean | null;

  get key(): string {
    return this._key;
  }

  abstract get value(): number | string | boolean | null;

  abstract set value(value: number | string | boolean | null);

  abstract apply(value: number | string | boolean | null): void;

  abstract toString(): string;

  abstract isPositive(): boolean;
}
