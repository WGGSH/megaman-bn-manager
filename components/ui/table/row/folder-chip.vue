<template>
  <tr>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ folderChip.id }}
    </ui-table-data-folder-chip>
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
      {{ folderChip.codes[folderChip.codeIndex] }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-center">
      <v-btn
        color="error"
        height="100%"
        @click="onClickRemove"
      >
        <!-- @click="chipFolder.removeById(folderChip.id)" -->
        削除
      </v-btn>
    </ui-table-data-folder-chip>
  </tr>
</template>

<script setup lang="ts">
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

const emit = defineEmits(['on-click-remove']);

const onClickRemove = () => {
  emit('on-click-remove');
};
</script>
