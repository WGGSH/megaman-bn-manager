// import { BattleChip } from '@/classes/battle-chip';
// import { ChipFolder } from '@/types/chip-folder';
//
// export class UtilChipFolder {
//   public static chipCapacity = 30;
//
//   public static addBattleChip(chipFolder: ChipFolder, battleChip: BattleChip, codeIndex: number): ChipFolder {
//     if (chipFolder.chips.length >= UtilChipFolder.chipCapacity) return chipFolder;
//     chipFolder.chips.push({
//       id: UtilChipFolder.getEmptyId(chipFolder),
//       chipId: battleChip.id,
//       codeIndex,
//     });
//     return chipFolder;
//   }
//
//   public static removeById(chipFolder: ChipFolder, id: number): ChipFolder {
//     const resultChips = chipFolder.chips.filter((c) => c.id !== id);
//     return {
//       chips: resultChips,
//     };
//   }
//
//   private static getEmptyId(chipFolder): number {
//     const ids = chipFolder.chips.map((chip) => chip.id);
//     for (let i = 1; i <= chipFolder.chips.length + 1; i += 1) {
//       if (!ids.includes(i)) return i;
//     }
//     return 1;
//   }
// }
