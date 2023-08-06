import { PatchCardInterface } from '@/classes/patch-card';
import { Version } from './version';
import { FolderChip } from './folder-chip';
import { RegisteredNaviCustomizerProgram } from './registered-navi-customizer-program';

export interface Build {
  id?: number;
  name: string;
  versions: Array<Version>;
  hpMemoryNum: number;
  patchCards: Array<PatchCardInterface>;
  folderChips: Array<FolderChip>;
  regularChipId: number;
  tagChipIds: Array<number>;
  registeredNaviCustomizerPrograms: Array<RegisteredNaviCustomizerProgram>;
}
