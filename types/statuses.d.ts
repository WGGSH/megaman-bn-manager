import { StatusHp } from '@/classes/status/hp';
import { StatusAttack } from '@/classes/status/attack';
import { StatusRapid } from '@/classes/status/rapid';
import { StatusCharge } from '@/classes/status/charge';
import { StatusCustom } from '@/classes/status/custom';
import { StatusMega } from '@/classes/status/mega';
import { StatusGiga } from '@/classes/status/giga';
import { StatusBody } from '@/classes/status/body';
import { StatusAirShoes } from '@/classes/status/air-shoes';
import { StatusFloatShoes } from '@/classes/status/float-shoes';
import { StatusSuperArmor } from '@/classes/status/super-armor';
import { StatusStatusGuard } from '@/classes/status/status-guard';
import { StatusFirstBarrier } from '@/classes/status/first-barrier';
import { StatusBusterChange } from '@/classes/status/buster-change';
import { StatusCsChange } from '@/classes/status/cs-change';
import { StatusLeftBChange } from '@/classes/status/left-b-change';
import { StatusMoveChange } from '@/classes/status/move-change';

export type Statuses = {
  hp: StatusHp;
  attack: StatusAttack;
  rapid: StatusRapid;
  charge: StatusCharge;
  custom: StatusCustom;
  mega: StatusMega;
  giga: StatusGiga;
  body: StatusBody;
  airShoes: StatusAirShoes;
  floatShoes: StatusFloatShoes;
  superArmor: StatusSuperArmor;
  statusGuard: StatusStatusGuard;
  firstBarrier: StatusFirstBarrier;
  busterChange: StatusBusterChange;
  csChange: StatusCsChange;
  leftBChange: StatusLeftBChange;
  moveChange: StatusMoveChange;
};
