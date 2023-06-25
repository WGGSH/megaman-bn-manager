import { AbilityBase } from '@/classes/ability/base';

export class PatchCard {
  private _id: number;

  private _number: string;

  private _name: string;

  private _capacity: number;

  private _abilities: Array<AbilityBase>;

  private _isActive: boolean;

  constructor(
    id: number,
    number: string,
    name: string,
    capacity: number,
    abilities: Array<AbilityBase>,
  ) {
    this._id = id;
    this._number = number;
    this._name = name;
    this._capacity = capacity;
    this._abilities = abilities;
    this._isActive = true;
  }

  get id(): number {
    return this._id;
  }

  get number(): string {
    return this._number;
  }

  get name(): string {
    return this._name;
  }

  get capacity(): number {
    return this._capacity;
  }

  get abilities(): Array<AbilityBase> {
    return this._abilities;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  public toggleActive(): void {
    this._isActive = !this._isActive;
  }

  public setActive(isActive: boolean): void {
    this._isActive = isActive;
  }

  public clone(): PatchCard {
    return new PatchCard(
      this.id,
      this.number,
      this.name,
      this.capacity,
      this.abilities,
    );
  }

  func() {
    console.log(this.id, this.number, this.name, this.capacity, this.abilities);
  }
}
