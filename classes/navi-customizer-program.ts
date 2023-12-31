import { AbilityBase, AbilityInterface } from '@/classes/ability/base';

import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';

interface NaviCustomizerProgramInterface {
  cells: boolean[][];
  compressedCells: boolean[][];
  id: number;
  name: string;
  color: NaviCustomizerProgramColor;
  x: number;
  y: number;
  isProgram: boolean;
  addAbilities: AbilityInterface[];
  bugAbilities: AbilityInterface[];
}

class NaviCustomizerProgram implements NaviCustomizerProgramInterface {
  private _cells: boolean[][];

  private _compressedCells: boolean[][];

  private _id: number;

  private _name: string;

  private _color: NaviCustomizerProgramColor;

  private _x: number;

  private _y: number;

  private _isProgram: boolean;

  private _addAbilities: AbilityBase[];

  private _bugAbilities: AbilityBase[];

  public get cells(): boolean[][] {
    return this._cells;
  }

  public get compressedCells(): boolean[][] {
    return this._compressedCells;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get color(): NaviCustomizerProgramColor {
    return this._color;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get isProgram(): boolean {
    return this._isProgram;
  }

  public get addAbilities(): AbilityBase[] {
    return this._addAbilities;
  }

  public get bugAbilities(): AbilityBase[] {
    return this._bugAbilities;
  }

  constructor(
    id: number,
    name: string,
    color: NaviCustomizerProgramColor,
    x: number,
    y: number,
    isProgram: boolean,
    addAbilities: AbilityBase[],
    bugAbilities: AbilityBase[],
    cells: boolean[][],
    compressedCells: boolean[][],
  ) {
    this._cells = cells;
    this._compressedCells = compressedCells;

    this._id = id;
    this._name = name;
    this._color = color;

    this._x = x;
    this._y = y;

    this._isProgram = isProgram;

    this._addAbilities = addAbilities;
    this._bugAbilities = bugAbilities;
  }
}

export { NaviCustomizerProgram, NaviCustomizerProgramInterface };
