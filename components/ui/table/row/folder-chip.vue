<template>
  <tr>
    <ui-table-data-folder-chip :color="backgroundIdColor">
      {{ folderChipWithBattleChipData.id }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ folderChipWithBattleChipData.number }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ ChipText.chipClassToTextMap[folderChipWithBattleChipData.class] }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor">
      {{ folderChipWithBattleChipData.name }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ folderChipWithBattleChipData.damage }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ ChipText.chipTypeToTextMap[folderChipWithBattleChipData.type] }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-right">
      {{ folderChipWithBattleChipData.capacity }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip :color="backgroundColor" align="text-center">
      {{ folderChipWithBattleChipData.code }}
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip
      v-if="!readOnly"
      :color="backgroundColor"
      align="text-center"
    >
      <v-btn
        color="pink"
        height="100%"
        :disabled="disabledRegularChip"
        @click="onClickRegisterRegular"
      >
        REG
      </v-btn>
      <v-btn
        color="green"
        height="100%"
        :disabled="disabledTagChip"
        @click="onClickRegisterTag"
      >
        TAG
      </v-btn>
    </ui-table-data-folder-chip>
    <ui-table-data-folder-chip
      v-if="!readOnly"
      :color="backgroundColor"
      align="text-center"
    >
      <v-btn
        color="error"
        height="100%"
        @click="onClickRemove"
      >
        削除
      </v-btn>
    </ui-table-data-folder-chip>
  </tr>
</template>

<script setup lang="ts">
import { FolderChipWithBattleChipData } from '@/types/folder-chip-with-battle-chip-data';
import { ChipColor } from '@/value/chip-color';
import { ChipText } from '@/value/chip-text';

const props = defineProps({
  folderChipWithBattleChipData: {
    type: Object as PropType<FolderChipWithBattleChipData>,
    required: true,
  },
  regularChipId: {
    type: Number,
    required: true,
  },
  tagChipsWithBattleChipData: {
    type: Array as PropType<FolderChipWithBattleChipData[]>,
    required: true,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click-remove', 'click-register-regular', 'click-register-tag']);

const getChipColor = (folderChipWithBattleChipData: FolderChipWithBattleChipData) => ChipColor.chipClassToTextMap[folderChipWithBattleChipData.class];

const backgroundColor = computed(() => getChipColor(props.folderChipWithBattleChipData));

const tagChipIds = computed(() => props.tagChipsWithBattleChipData.map((tagChip) => tagChip.id));

const backgroundIdColor = computed(() => {
  if (props.folderChipWithBattleChipData.id === props.regularChipId) {
    return 'pink';
  }
  if (tagChipIds.value.includes(props.folderChipWithBattleChipData.id)) {
    return 'green';
  }
  return backgroundColor.value;
});

const disabledRegularChip = computed(() => {
  // すでにタッグチップに指定されている場合は選択不可能
  if (tagChipIds.value.includes(props.folderChipWithBattleChipData.id)) {
    return true;
  }
  return props.folderChipWithBattleChipData.capacity > 50;
});

const disabledTagChip = computed(() => {
  // すでにレギュラーチップ指定されている場合は選択不可能
  if (props.folderChipWithBattleChipData.id === props.regularChipId) {
    return true;
  }
  // すでにタッグチップ指定されている場合は選択可能
  if (tagChipIds.value.includes(props.folderChipWithBattleChipData.id)) {
    return false;
  }

  // タッグチップが2つ登録されている場合は選択不可能
  if (tagChipIds.value.length >= 2) {
    return true;
  }

  // タッグチップが1つ以下の場合は，合計容量が60を超えている場合は選択不可能
  return Number(props.folderChipWithBattleChipData.capacity) + Number(props.tagChipsWithBattleChipData.reduce((a, b) => Number(a) + Number(b.capacity), 0)) > 60;
});

const onClickRemove = () => {
  emit('click-remove');
};

const onClickRegisterRegular = () => {
  emit('click-register-regular');
};

const onClickRegisterTag = () => {
  emit('click-register-tag');
};
</script>
