import { Ability } from '@/classes/ability';
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
import { StatusUnderShirt } from '@/classes/status/under-shirt';
import { StatusStatusGuard } from '@/classes/status/status-guard';
import { StatusFirstBarrier } from '@/classes/status/first-barrier';
import { StatusBusterChange } from '@/classes/status/buster-change';
import { StatusCsChange } from '@/classes/status/cs-change';
import { StatusLeftBChange } from '@/classes/status/left-b-change';
import { StatusMoveChange } from '@/classes/status/move-change';
import { Statuses } from '@/types/statuses';

export class MegamanStatus {
  private _hpMemoryNum: number;

  private _statuses: Statuses;

  private _abilities: Array<Ability>;

  static abilityKeyToStatusKey = {
    'attack-plus': 'attack',
    'rapid-plus': 'rapid',
    'charge-plus': 'charge',
    'custom-plus': 'custom',
    'mega-plus': 'mega',
    'giga-plus': 'giga',
    'body-change': 'body',
    'air-shoes': 'airShoes',
    'float-shoes': 'floatShoes',
    'super-armor': 'superArmor',
    'under-shirt': 'underShirt',
    'status-guard': 'statusGuard',
    'first-barrier': 'firstBarrier',
    'buster-change': 'busterChange',
    'cs-change': 'csChange',
    'left-b-change': 'leftBChange',
    'move-change': 'moveChange',
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
      body: new StatusBody('normal'),
      airShoes: new StatusAirShoes(false),
      floatShoes: new StatusFloatShoes(false),
      superArmor: new StatusSuperArmor(false),
      underShirt: new StatusUnderShirt(false),
      statusGuard: new StatusStatusGuard(false),
      firstBarrier: new StatusFirstBarrier('normal'),
      busterChange: new StatusBusterChange('normal'),
      csChange: new StatusCsChange('normal'),
      leftBChange: new StatusLeftBChange('normal'),
      moveChange: new StatusMoveChange('normal'),
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

  public get statuses() {
    return this._statuses;
  }

  public get abilities() {
    return this._abilities;
  }

  public set abilities(abilities: Array<Ability>) {
    this._abilities = abilities;
  }

  private applyAbility(ability: Ability) {
    switch (ability.key) {
      case 'hp-plus':
        this._statuses.hp.applyPlus(ability.value as number);
        break;

      case 'hp-magnify':
        this._statuses.hp.applyMagnify(ability.value as number);
        break;

      case 'attack-plus':
        this._statuses.attack.applyPlus(ability.value as number);
        break;

      case 'attack-magnify':
        this._statuses.attack.applyMagnify(ability.value as number);
        break;

      default:
        this._statuses[MegamanStatus.abilityKeyToStatusKey[ability.key]].apply(ability.value);
        break;
    }
  }

  private initialize() {
    this._hpMemoryNum = 45;
    this._statuses = {
      hp: new StatusHp(100),
      attack: new StatusAttack(1),
      rapid: new StatusRapid(1),
      charge: new StatusCharge(1),
      custom: new StatusCustom(5),
      mega: new StatusMega(5),
      giga: new StatusGiga(1),

      body: new StatusBody('normal'),
      airShoes: new StatusAirShoes(false),
      floatShoes: new StatusFloatShoes(false),
      superArmor: new StatusSuperArmor(false),
      underShirt: new StatusUnderShirt(false),
      statusGuard: new StatusStatusGuard(false),

      firstBarrier: new StatusFirstBarrier(null),
      busterChange: new StatusBusterChange(null),
      csChange: new StatusCsChange(null),
      leftBChange: new StatusLeftBChange(null),
      moveChange: new StatusMoveChange(null),
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

  public pushAbility(ability: Ability) {
    this._abilities.push(ability);
  }

  public toString() {
    Object.keys(this._statuses).forEach((key) => {
      console.log(this._statuses[key].toString());
    });
  }
}
