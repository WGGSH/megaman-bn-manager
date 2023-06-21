<template>
  <h2>デッキ概要</h2>
  <v-container class="pa-8">
    <v-row>
      <h3>Title</h3>
    </v-row>

    <v-row>
      <v-text-field v-model="name" />
    </v-row>

    <v-row class="mt-8">
      <h3>対応バージョン</h3>
    </v-row>

    <v-row>
      <v-col v-for="version in versionList" :key="version.key">
        <v-checkbox v-model="versions" :label="version.name" :value="version.key" />
      </v-col>
    </v-row>

    <v-row>
      <h3>HPメモリ</h3>
    </v-row>

    <v-row>
      <v-text-field v-model="hpMemoryNum" type="number" max="45" min="0" />
    </v-row>

    <v-row class="mt-8">
      <v-divider />
    </v-row>

    <v-row class="mt-8">
      <ui-button-accept
        @click="onClickSave"
      >
        保存する
      </ui-button-accept>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useBuildManagerStore } from '@/store/buildManager';

const buildManagerStore = useBuildManagerStore();

const router = useRouter();
const route = useRoute();
const selectedBuild = computed(() => buildManagerStore.selectedBuild);

const name = ref();
const versions = ref([]);
const hpMemoryNum = ref(45);

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
</script>
