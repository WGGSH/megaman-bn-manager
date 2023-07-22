<template>
  <v-container>
    <v-dialog
      v-model="dialog"
    >
      <v-card>
        <v-card-title>
          本当に削除しますか？
        </v-card-title>

        <v-card-actions>
          <ui-button-accept
            @click="dialog = false"
          >
            キャンセル
          </ui-button-accept>

          <ui-button-danger
            color="red"
            @click="deleteBuild"
          >
            削除する
          </ui-button-danger>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ui-text-title>
      ビルド概要
    </ui-text-title>
    <v-row class="ma-0">
      <ui-button-accept
        class="mr-auto"
        @click="onClickSave"
      >
        保存する
      </ui-button-accept>

      <ui-button-danger
        @click="onClickDelete"
      >
        削除する
      </ui-button-danger>
    </v-row>
  </v-container>

  <v-container class="pa-8">
    <v-row>
      <ui-text-subtitle>
        ビルド名
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-text-field v-model="name" />
    </v-row>

    <v-row class="mt-8">
      <ui-text-subtitle>
        対応バージョン
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-col v-for="version in versionList" :key="version.key">
        <v-checkbox v-model="versions" :label="version.name" :value="version.key" />
      </v-col>
    </v-row>

    <v-row>
      <ui-text-subtitle>
        HPメモリ
      </ui-text-subtitle>
    </v-row>

    <v-row>
      <v-text-field v-model="hpMemoryNum" type="number" max="45" min="0" />
    </v-row>

    <v-row class="mt-8">
      <v-divider />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useBuildManagerStore } from '@/store/build-manager';
import { Version } from '@/types/version';

const buildManagerStore = useBuildManagerStore();

const router = useRouter();
const route = useRoute();
const selectedBuild = computed(() => buildManagerStore.selectedBuild);

const name = ref<string>();
const versions = ref<Array<Version>>([]);
const hpMemoryNum = ref<number>();

const dialog = ref<boolean>(false);

const versionList = [
  {
    key: 'G',
    name: 'グレイガ',
  },
  {
    key: 'F',
    name: 'ファルザー',
  },
];

const setValues = () => {
  if (!selectedBuild.value || !selectedBuild.value.id) {
    return;
  }
  name.value = selectedBuild.value.name;
  versions.value = selectedBuild.value.versions;
  hpMemoryNum.value = selectedBuild.value.hpMemoryNum;
};

watch(
  () => selectedBuild.value,
  (newVal) => {
    if (newVal) {
      setValues();
    }
  },
);

onMounted(() => {
  buildManagerStore.setSelectedBuildById(route.params.id);
  if (!selectedBuild) {
    router.push({ path: '/' });
  } else {
    setValues();
  }
});

const onClickSave = () => {
  buildManagerStore.updateBuildById({
    id: selectedBuild.value.id,
    name: name.value,
    versions: versions.value,
    hpMemoryNum: hpMemoryNum.value,
  });
};

const onClickDelete = () => {
  dialog.value = true;
};

const deleteBuild = () => {
  buildManagerStore.deleteBuildById(selectedBuild.value.id);
  router.push({ path: '/' });
};
</script>
