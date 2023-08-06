<template>
  <tr>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ battleChip.number }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ ChipText.chipClassToTextMap[battleChip.class] }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ battleChip.name }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ battleChip.damage }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ ChipText.chipTypeToTextMap[battleChip.type] }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ battleChip.capacity }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-center">
      <span
        v-for="(code, index) in battleChip.codes"
        :key="index"
      >
        <v-btn
          small
          height="100%"
          :disabled="disabledAdd || code === ''"
          @click="onClickChipCode(battleChip, index)"
        >
          <span v-if="code === ''">-</span>
          <span v-else>{{ code }}</span>
        </v-btn>
      </span>
    </ui-table-data-folder-chip>
  </tr>
</template>

<script setup lang="ts">
import { BattleChip } from '@/types/battle-chip';
import { ChipColor } from '@/value/chip-color';
import { ChipText } from '@/value/chip-text';

const props = defineProps({
  battleChip: {
    type: Object as PropType<BattleChip>,
    required: true,
  },
  disabledAdd: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['on-click-chip-code']);

const getChipColor = (battleChip: BattleChip) => ChipColor.chipClassToTextMap[battleChip.class];

const backgroundColor = computed(() => getChipColor(props.battleChip));

const onClickChipCode = (battleChip: BattleChip, index: number) => {
  emit('on-click-chip-code', battleChip, index);
};
</script>
