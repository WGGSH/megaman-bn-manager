import { StatusInterface } from '@/classes/status/base';
// import { StatusHp } from '@/classes/status/hp';
// import { StatusAttack } from '@/classes/status/attack';
// import { StatusRapid } from '@/classes/status/rapid';
// import { StatusCharge } from '@/classes/status/charge';
// import { StatusCustom } from '@/classes/status/custom';
// import { StatusMega } from '@/classes/status/mega';
// import { StatusGiga } from '@/classes/status/giga';
// import { StatusChipRecovery } from '@/classes/status/chip-recovery';
// import { StatusCustomDamageBug } from '@/classes/status/custom-damage-bug';
// import { StatusPanelBug } from '@/classes/status/panel-bug';
// import { StatusCustomOpenBug } from '@/classes/status/custom-open-bug';
// import { StatusBattleHpBug } from '@/classes/status/battle-hp-bug';
// import { StatusStatusBug } from '@/classes/status/status-bug';
// import { StatusBusterBug } from '@/classes/status/buster-bug';
// import { StatusEncountBug } from '@/classes/status/encount-bug';
//
// import { StatusAirShoes } from '@/classes/status/air-shoes';
// import { StatusFloatShoes } from '@/classes/status/float-shoes';
// import { StatusSuperArmor } from '@/classes/status/super-armor';
// import { StatusUnderShirt } from '@/classes/status/under-shirt';
// import { StatusStatusGuard } from '@/classes/status/status-guard';
// import { StatusRushSupport } from '@/classes/status/rush-support';
// import { StatusBeatSupport } from '@/classes/status/beat-support';
// import { StatusTangoSupport } from '@/classes/status/tango-support';
// import { StatusSearchShuffle } from '@/classes/status/search-shuffle';
// import { StatusNumberOpen } from '@/classes/status/number-open';
// import { StatusSneakRun } from '@/classes/status/sneak-run';
// import { StatusMillionaire } from '@/classes/status/millionaire';
// import { StatusSlipRunner } from '@/classes/status/slip-runner';
// import { StatusSelfRecovery } from '@/classes/status/self-recovery';
// import { StatusMoveBug } from '@/classes/status/move-bug';
// import { StatusEmotionWindowBug } from '@/classes/status/emotion-window-bug';
// import { StatusCustomHpBug } from '@/classes/status/custom-hp-bug';
// import { StatusDamageHpBug } from '@/classes/status/damage-hp-bug';
// import { StatusDamagePanicBug } from '@/classes/status/damage-panic-bug';
// import { StatusSupportBug } from '@/classes/status/support-bug';
//
// import { StatusFirstBarrierChange } from '@/classes/status/first-barrier-change';
// import { StatusBusterChange } from '@/classes/status/buster-change';
// import { StatusBusterAdditionChange } from '@/classes/status/buster-addition-change';
// import { StatusCsChange } from '@/classes/status/cs-change';
// import { StatusCsAdditionChange } from '@/classes/status/cs-addition-change';
// import { StatusLeftBChange } from '@/classes/status/left-b-change';
// import { StatusGaugeChange } from '@/classes/status/gauge-change';
// import { StatusMoveChange } from '@/classes/status/move-change';
// import { StatusBodyChange } from '@/classes/status/body-change';
// import { StatusEncountChange } from '@/classes/status/encount-change';
// import { StatusHumorChange } from '@/classes/status/humor-change';
// import { StatusCollectorChange } from '@/classes/status/collector-change';
//
// import { StatusBugStopper } from '@/classes/status/bug-stopper';

export interface Statuses {
  hp: StatusInterface
  attack: StatusInterface
  rapid: StatusInterface
  charge: StatusInterface
  custom: StatusInterface
  mega: StatusInterface
  giga: StatusInterface
  chipRecovery: StatusInterface
  customDamageBug: StatusInterface
  panelBug: StatusInterface
  customOpenBug: StatusInterface
  battleHpBug: StatusInterface
  statusBug: StatusInterface
  busterBug: StatusInterface
  encountBug: StatusInterface

  airShoes: StatusInterface
  floatShoes: StatusInterface
  superArmor: StatusInterface
  underShirt: StatusInterface
  statusGuard: StatusInterface
  rushSupport: StatusInterface
  beatSupport: StatusInterface
  tangoSupport: StatusInterface
  searchShuffle: StatusInterface
  numberOpen: StatusInterface
  sneakRun: StatusInterface
  millionaire: StatusInterface
  slipRunner: StatusInterface
  selfRecovery: StatusInterface
  moveBug: StatusInterface
  emotionWindowBug: StatusInterface
  customHpBug: StatusInterface
  damageHpBug: StatusInterface
  damagePanicBug: StatusInterface
  supportBug: StatusInterface

  firstBarrierChange: StatusInterface
  busterChange: StatusInterface
  busterAdditionChange: StatusInterface
  csChange: StatusInterface
  csAdditionChange: StatusInterface
  leftBChange: StatusInterface
  gaugeChange: StatusInterface
  moveChange: StatusInterface
  bodyChange: StatusInterface
  encountChange: StatusInterface
  humorChange: StatusInterface
  collectorChange: StatusInterface

  bugStopper: StatusInterface
  // hp: StatusHp,
  // attack: StatusAttack,
  // rapid: StatusRapid,
  // charge: StatusCharge,
  // custom: StatusCustom,
  // mega: StatusMega,
  // giga: StatusGiga,
  // chipRecovery: StatusChipRecovery,
  // customDamageBug: StatusCustomDamageBug,
  // panelBug: StatusPanelBug,
  // customOpenBug: StatusCustomOpenBug,
  // battleHpBug: StatusBattleHpBug,
  // statusBug: StatusStatusBug,
  // busterBug: StatusBusterBug,
  // encountBug: StatusEncountBug,
  //
  // airShoes: StatusAirShoes,
  // floatShoes: StatusFloatShoes,
  // superArmor: StatusSuperArmor,
  // underShirt: StatusUnderShirt,
  // statusGuard: StatusStatusGuard,
  // rushSupport: StatusRushSupport,
  // beatSupport: StatusBeatSupport,
  // tangoSupport: StatusTangoSupport,
  // searchShuffle: StatusSearchShuffle,
  // numberOpen: StatusNumberOpen,
  // sneakRun: StatusSneakRun,
  // millionaire: StatusMillionaire,
  // slipRunner: StatusSlipRunner,
  // selfRecovery: StatusSelfRecovery,
  // moveBug: StatusMoveBug,
  // emotionWindowBug: StatusEmotionWindowBug,
  // customHpBug: StatusCustomHpBug,
  // damageHpBug: StatusDamageHpBug,
  // damagePanicBug: StatusDamagePanicBug,
  // supportBug: StatusSupportBug,
  //
  // firstBarrierChange: StatusFirstBarrierChange,
  // busterChange: StatusBusterChange,
  // busterAdditionChange: StatusBusterAdditionChange,
  // csChange: StatusCsChange,
  // csAdditionChange: StatusCsAdditionChange,
  // leftBChange: StatusLeftBChange,
  // gaugeChange: StatusGaugeChange,
  // moveChange: StatusMoveChange,
  // bodyChange: StatusBodyChange,
  // encountChange: StatusEncountChange,
  // humorChange: StatusHumorChange,
  // collectorChange: StatusCollectorChange,
  //
  // bugStopper: StatusBugStopper,
}
