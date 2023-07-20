import { AbilityBase } from '@/classes/ability/base';
import { StatusHp } from '@/classes/status/hp';
import { StatusAttack } from '@/classes/status/attack';
import { StatusRapid } from '@/classes/status/rapid';
import { StatusCharge } from '@/classes/status/charge';
import { StatusCustom } from '@/classes/status/custom';
import { StatusMega } from '@/classes/status/mega';
import { StatusGiga } from '@/classes/status/giga';
import { StatusChipRecovery } from '@/classes/status/chip-recovery';
import { StatusCustomDamageBug } from '@/classes/status/custom-damage-bug';
import { StatusPanelBug } from '@/classes/status/panel-bug';
import { StatusCustomOpenBug } from '@/classes/status/custom-open-bug';
import { StatusBattleHpBug } from '@/classes/status/battle-hp-bug';
import { StatusStatusBug } from '@/classes/status/status-bug';
import { StatusBusterBug } from '@/classes/status/buster-bug';
import { StatusEncountBug } from '@/classes/status/encount-bug';

import { StatusAirShoes } from '@/classes/status/air-shoes';
import { StatusFloatShoes } from '@/classes/status/float-shoes';
import { StatusSuperArmor } from '@/classes/status/super-armor';
import { StatusUnderShirt } from '@/classes/status/under-shirt';
import { StatusStatusGuard } from '@/classes/status/status-guard';
import { StatusRushSupport } from '@/classes/status/rush-support';
import { StatusBeatSupport } from '@/classes/status/beat-support';
import { StatusTangoSupport } from '@/classes/status/tango-support';
import { StatusMoveBug } from '@/classes/status/move-bug';
import { StatusEmotionWindowBug } from '@/classes/status/emotion-window-bug';
import { StatusCustomHpBug } from '@/classes/status/custom-hp-bug';
import { StatusDamageHpBug } from '@/classes/status/damage-hp-bug';
import { StatusDamagePanicBug } from '@/classes/status/damage-panic-bug';
import { StatusResultBug } from '@/classes/status/result-bug';

import { StatusFirstBarrierChange } from '@/classes/status/first-barrier-change';
import { StatusBusterChange } from '@/classes/status/buster-change';
import { StatusBusterAdditionChange } from '@/classes/status/buster-addition-change';
import { StatusCsChange } from '@/classes/status/cs-change';
import { StatusCsAdditionChange } from '@/classes/status/cs-addition-change';
import { StatusLeftBChange } from '@/classes/status/left-b-change';
import { StatusGaugeChange } from '@/classes/status/gauge-change';
import { StatusMoveChange } from '@/classes/status/move-change';
import { StatusBodyChange } from '@/classes/status/body-change';

import { StatusBaseNumber } from '@/classes/status/base/number';
import { Statuses } from '@/types/statuses';

export class MegamanStatus {
  private _hpMemoryNum: number;

  private _statuses: Statuses;

  private _abilities: Array<AbilityBase>;

  static abilityKeyToStatusKey = {
    'hp-plus': 'hp',
    'attack-plus': 'attack',
    'rapid-plus': 'rapid',
    'charge-plus': 'charge',
    'custom-plus': 'custom',
    'mega-plus': 'mega',
    'giga-plus': 'giga',
    'chip-recovery': 'chipRecovery',
    'custom-damage-bug': 'customDamageBug',
    'panel-bug': 'panelBug',
    'custom-open-bug': 'customOpenBug',
    'custom-open-bug-plus': 'customOpenBug',
    'battle-hp-bug': 'battleHpBug',
    'status-bug': 'statusBug',
    'status-bug-plus': 'statusBug',
    'buster-bug': 'busterBug',
    'encount-bug': 'encountBug',

    'air-shoes': 'airShoes',
    'float-shoes': 'floatShoes',
    'super-armor': 'superArmor',
    'under-shirt': 'underShirt',
    'status-guard': 'statusGuard',
    'rush-support': 'rushSupport',
    'beat-support': 'beatSupport',
    'tango-support': 'tangoSupport',
    'move-bug': 'moveBug',
    'emotion-window-bug': 'emotionWindowBug',
    'custom-hp-bug': 'customHpBug',
    'damage-hp-bug': 'damageHpBug',
    'damage-panic-bug': 'damagePanicBug',
    'result-bug': 'resultBug',

    'first-barrier': 'firstBarrierChange',
    'first-barrier-change': 'firstBarrierChange',
    'buster-change': 'busterChange',
    'buster-addition-change': 'busterAdditionChange',
    'cs-change': 'csChange',
    'cs-addition-change': 'csAdditionChange',
    'left-b-change': 'leftBChange',
    'gauge-change': 'gaugeChange',
    'move-change': 'moveChange',
    'body-change': 'bodyChange',
  };

  constructor() {
    this._hpMemoryNum = 0;
    this._statuses = {
      hp: new StatusHp(100),
      attack: new StatusAttack(1),
      rapid: new StatusRapid(1),
      charge: new StatusCharge(1),
      custom: new StatusCustom(5),
      mega: new StatusMega(5),
      giga: new StatusGiga(1),
      chipRecovery: new StatusChipRecovery(0),
      customDamageBug: new StatusCustomDamageBug(0),
      panelBug: new StatusPanelBug(0),
      customOpenBug: new StatusCustomOpenBug(0),
      battleHpBug: new StatusBattleHpBug(0),
      statusBug: new StatusStatusBug(0),
      busterBug: new StatusBusterBug(0),
      encountBug: new StatusEncountBug(0),

      airShoes: new StatusAirShoes(false),
      floatShoes: new StatusFloatShoes(false),
      superArmor: new StatusSuperArmor(false),
      underShirt: new StatusUnderShirt(false),
      statusGuard: new StatusStatusGuard(false),
      rushSupport: new StatusRushSupport(false),
      beatSupport: new StatusBeatSupport(false),
      tangoSupport: new StatusTangoSupport(false),
      moveBug: new StatusMoveBug(false),
      emotionWindowBug: new StatusEmotionWindowBug(false),
      customHpBug: new StatusCustomHpBug(false),
      damageHpBug: new StatusDamageHpBug(false),
      damagePanicBug: new StatusDamagePanicBug(false),
      resultBug: new StatusResultBug(false),

      firstBarrierChange: new StatusFirstBarrierChange('none'),
      busterChange: new StatusBusterChange('none'),
      busterAdditionChange: new StatusBusterAdditionChange('none'),
      csChange: new StatusCsChange('none'),
      csAdditionChange: new StatusCsAdditionChange('none'),
      leftBChange: new StatusLeftBChange('none'),
      gaugeChange: new StatusGaugeChange('none'),
      moveChange: new StatusMoveChange('none'),
      bodyChange: new StatusBodyChange('none'),
    };
    this._abilities = [];
    this.initialize();
    this.resetAbilities();
  }

  private applyHpMemory() {
    this._statuses.hp.applyPlus(this._hpMemoryNum * 20);
  }

  public get hpMemoryNum() {
    return this._hpMemoryNum;
  }

  public set hpMemoryNum(hpMemoryNum: number) {
    this._hpMemoryNum = hpMemoryNum;
  }

  public get statuses() {
    return this._statuses;
  }

  public get abilities() {
    return this._abilities;
  }

  public set abilities(abilities: Array<AbilityBase>) {
    this._abilities = abilities;
  }

  private applyAbility(ability: AbilityBase) {
    switch (ability.key) {
      case 'hp-magnify':
        this._statuses.hp.applyMagnify(ability.value as number);
        break;

      case 'attack-magnify':
        this._statuses.attack.applyMagnify(ability.value as number);
        break;

      default:
        if (this._statuses[MegamanStatus.abilityKeyToStatusKey[ability.key]] instanceof StatusBaseNumber) {
          this._statuses[MegamanStatus.abilityKeyToStatusKey[ability.key]].applyPlus(ability.value);
          break;
        }
        console.log(ability);
        this._statuses[MegamanStatus.abilityKeyToStatusKey[ability.key]].apply(ability.value);
        break;
    }
  }

  private initialize() {
    this._statuses = {
      hp: new StatusHp(100),
      attack: new StatusAttack(1),
      rapid: new StatusRapid(1),
      charge: new StatusCharge(1),
      custom: new StatusCustom(5),
      mega: new StatusMega(5),
      giga: new StatusGiga(1),
      chipRecovery: new StatusChipRecovery(0),
      customDamageBug: new StatusCustomDamageBug(0),
      panelBug: new StatusPanelBug(0),
      customOpenBug: new StatusCustomOpenBug(0),
      battleHpBug: new StatusBattleHpBug(0),
      statusBug: new StatusStatusBug(0),
      busterBug: new StatusBusterBug(0),
      encountBug: new StatusEncountBug(0),

      airShoes: new StatusAirShoes(false),
      floatShoes: new StatusFloatShoes(false),
      superArmor: new StatusSuperArmor(false),
      underShirt: new StatusUnderShirt(false),
      statusGuard: new StatusStatusGuard(false),
      rushSupport: new StatusRushSupport(false),
      beatSupport: new StatusBeatSupport(false),
      tangoSupport: new StatusTangoSupport(false),
      moveBug: new StatusMoveBug(false),
      emotionWindowBug: new StatusEmotionWindowBug(false),
      customHpBug: new StatusCustomHpBug(false),
      damageHpBug: new StatusDamageHpBug(false),
      damagePanicBug: new StatusDamagePanicBug(false),
      resultBug: new StatusResultBug(false),

      firstBarrierChange: new StatusFirstBarrierChange('none'),
      busterChange: new StatusBusterChange('none'),
      busterAdditionChange: new StatusBusterAdditionChange('none'),
      csChange: new StatusCsChange('none'),
      csAdditionChange: new StatusCsAdditionChange('none'),
      leftBChange: new StatusLeftBChange('none'),
      gaugeChange: new StatusGaugeChange('none'),
      moveChange: new StatusMoveChange('none'),
      bodyChange: new StatusBodyChange('none'),
    };
  }

  private applyAbilities() {
    this._abilities.forEach((ability) => {
      this.applyAbility(ability);
    });
  }

  public apply() {
    this.initialize();
    this.applyHpMemory();
    this.applyAbilities();
  }

  private resetAbilities() {
    this._abilities = [];
  }

  public pushAbility(ability: AbilityBase) {
    this._abilities.push(ability);
  }

  public toString() {
    Object.keys(this._statuses).forEach((key) => {
      console.log(this._statuses[key].toString());
    });
  }
}
