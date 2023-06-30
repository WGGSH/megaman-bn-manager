import { Version } from './version';

export interface Build {
  id: number;
  name: string;
  versions: Array<Version>;
  hpMemoryNum: number;
  patchCardIds: Array<number>;
}
