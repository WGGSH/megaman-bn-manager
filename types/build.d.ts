import { Version } from './version';
import { FolderChip } from './folder-chip';

export interface Build {
  id: number;
  name: string;
  versions: Array<Version>;
  hpMemoryNum: number;
  patchCardIds: Array<number>;
  folderChips: Array<FolderChip>;
}
