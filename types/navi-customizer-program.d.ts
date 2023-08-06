import { AbilityBase } from '@/classes/ability/base';
import { NaviCustomizerProgramColor } from '@/types/navi-customizer-program-color';

export interface NaviCustomizerProgram {
  cells: boolean[][];
  compressedCells: boolean[][];
  id: number;
  name: string;
  color: NaviCustomizerProgramColor;
  x: number;
  y: number;
  isProgram: boolean;
  addAbilities: AbilityBase[];
  bugAbilities: AbilityBase[];
}
