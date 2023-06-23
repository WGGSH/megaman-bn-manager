import { Ability } from '@types/ability';

export class PatchCard {
  private _id: number;

  private _number: string;

  private _name: string;

  private _capacity: number;

  private _abilities: Array<Ability>;

  constructor(
    id: number,
    number: string,
    name: string,
    capacity: number,
    abilities: Array<Ability>,
  ) {
    this._id = id;
    this._number = number;
    this._name = name;
    this._capacity = capacity;
    this._abilities = abilities;
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

  get abilities(): Array<Ability> {
    return this._abilities;
  }

  func() {
    console.log(this.id, this.number, this.name, this.capacity, this.abilities);
  }
}
