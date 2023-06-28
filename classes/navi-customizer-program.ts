import { AbilityBase } from '@/classes/ability/base';
// import { AbilityBaseNumber } from '@/classes/ability/base/number';
import { AbilityAttackPlus } from '@/classes/ability/attack-plus';

export class NaviCustomizerProgram {
  private _cells: boolean[][];

  private _x: number;

  private _y: number;

  private _addAbility: AbilityBase;

  private _bugAbility: AbilityBase;

  public get cells(): boolean[][] {
    return this._cells;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  constructor(x: number, y: number) {
    const T = true;
    const F = false;

    this._cells = [
      [T, F, F],
      [T, T, T],
      [F, T, F],
    ];

    this._x = x;
    this._y = y;

    this._addAbility = new AbilityAttackPlus(1);
    this._bugAbility = new AbilityAttackPlus(-1);
  }
}
