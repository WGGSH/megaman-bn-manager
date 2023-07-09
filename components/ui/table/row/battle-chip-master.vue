<template>
  <tr>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ folderChip.number }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ ChipText.chipClassToTextMap[folderChip.class] }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ folderChip.name }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ folderChip.damage }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ ChipText.chipTypeToTextMap[folderChip.type] }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ folderChip.capacity }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-center">
      <span
        v-for="(code, index) in folderChip.codes"
        :key="index"
      >
        <v-btn
          text
          small
          height="100%"
          :disabled="code === ''"
          @click="onClickChipCode(folderChip, index)"
        >
          <span v-if="code === ''">-</span>
          <span v-else>{{ code }}</span>
        </v-btn>
      </span>
    </ui-table-data-folder-chip>
  </tr>
</template>

<script setup lang="ts">
import { BattleChip } from '@/classes/battle-chip';
import { ChipColor } from '@/value/chip-color';
import { ChipText } from '@/value/chip-text';

const props = defineProps({
  folderChip: {
    type: Object,
    required: true,
  },
});

const getChipColor = (battleChip: BattleChip) => ChipColor.chipClassToTextMap[battleChip.class];

const backgroundColor = computed(() => getChipColor(props.folderChip));

const emit = defineEmits(['on-click-chip-code']);

const onClickChipCode = (battleChip: BattleChip, index: number) => {
  emit('on-click-chip-code', battleChip, index);
};
</script>
