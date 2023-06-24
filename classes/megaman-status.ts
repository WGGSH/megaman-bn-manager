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
import { StatusStatusGuard } from '@/classes/status/status-guard';
import { StatusFirstBarrier } from '@/classes/status/first-barrier';
import { StatusBusterChange } from '@/classes/status/buster-change';
import { StatusCsChange } from '@/classes/status/cs-change';
import { StatusLeftBChange } from '@/classes/status/left-b-change';
import { StatusMoveChange } from '@/classes/status/move-change';
import { Statuses } from '@/types/statuses';

export class MegamanStatus {
  private _hpMemoryNum: number;

  private statuses: Statuses;

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
    'status-guard': 'statusGuard',
    'first-barrier': 'firstBarrier',
    'buster-change': 'busterChange',
    'cs-change': 'csChange',
    'left-b-change': 'leftBChange',
    'move-change': 'moveChange',
  };

  constructor() {
    this._hpMemoryNum = 0;
    this.statuses = {
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
    this.statuses.hp.applyPlus(this._hpMemoryNum * 20);
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
        this.statuses.hp.applyPlus(ability.value as number);
        break;

      case 'hp-magnify':
        this.statuses.hp.applyMagnify(ability.value as number);
        break;

        // case 'hp-magnify':
        //   this.applyhpmagnify(ability.value as number);
        //   break;
        //
      case 'attack-plus':
        this.statuses.attack.applyPlus(ability.value as number);
        break;

        // case 'rapid-plus':
        //   this.applyrapidplus(ability.value as number);
        //   break;
        //
        // case 'charge-plus':
        //   this.applychargeplus(ability.value as number);
        //   break;
        //
        // case 'custom-plus':
        //   this.applycustomplus(ability.value as number);
        //   break;
        //
        // case 'mega-plus':
        //   this.applymegaplus(ability.value as number);
        //   break;
        //
        // case 'giga-plus':
        //   this.applygigaplus(ability.value as number);
        //   break;
        //
        // case 'body':
        //   this.applybody(ability.value as string);
        //   break;
        //
        // case 'air-shoes':
        //   this.applyairshoes(ability.value as boolean);
        //   break;
        //
        // case 'float-shoes':
        //   this.applyfloatshoes(ability.value as boolean);
        //   break;
        //
        // case 'super-armor':
        //   this.applysuperarmor(ability.value as boolean);
        //   break;
        //
        // case 'status-guard':
        //   this.applystatusguard(ability.value as boolean);
        //   break;
        //
        // case 'first-barrier':
        //   this.applyfirstbarrier(ability.value as string);
        //   break;
        //
        // case 'buster':
        //   this.applyBuster(ability.value as string);
        //   break;
        //
        // case 'cs':
        //   this.applyCs(ability.value as string);
        //   break;
        //
        // case 'left-b':
        //   this.applyLeftB(ability.value as string);
        //   break;
        //
        // case 'move':
        //   this.applyMove(ability.value as string);
        //   break;

      default:
        console.log(ability.key);
        console.log(MegamanStatus.abilityKeyToStatusKey[ability.key]);
        this.statuses[MegamanStatus.abilityKeyToStatusKey[ability.key]].apply(ability.value);
        break;
    }
  }

  private initialize() {
    this._hpMemoryNum = 45;
    this.statuses = {
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
      statusGuard: new StatusStatusGuard(false),

      firstBarrier: new StatusFirstBarrier(null),
      busterChange: new StatusBusterChange(null),
      csChange: new StatusCsChange(null),
      leftBChange: new StatusLeftBChange(null),
      moveChange: new StatusMoveChange(null),
    };

    // this.statuses = [
    //   new StatusHp(100),
    //   new StatusAttack(1),
    // ];
    // this._hp = 100;
    // this._hp = new StatusHp(100);
    // this._attack = 1;
    // this._rapid = 1;
    // this._charge = 1;
    // this._custom = 5;
    // this._mega = 5;
    // this._giga = 1;
    // this._body = 'normal';
    // this._airShoes = false;
    // this._floatShoes = false;
    // this._superArmor = false;
    // this._statusGuard = false;
    // this._firstBarrier = null;
    // this._buster = null;
    // this._cs = null;
    // this._leftB = null;
    // this._move = null;
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
    Object.keys(this.statuses).forEach((key) => {
      console.log(this.statuses[key].toString());
    });
    // this.statuses.forEach((status) => {
    //   console.log(status.toString());
    // });
  }
}
