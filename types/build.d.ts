import { Version } from './version';
import { FolderChip } from './folder-chip';
import { RegisteredNaviCustomizerProgram } from './registered-navi-customizer-program';

export interface Build {
  id: number;
  name: string;
  versions: Array<Version>;
  hpMemoryNum: number;
  patchCardIds: Array<number>;
  folderChips: Array<FolderChip>;
  regularChipId: number;
  tagChipIds: Array<number>;
  naviCustomizerPrograms: Array<RegisteredNaviCustomizerProgram>;
}
