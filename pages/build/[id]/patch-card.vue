<template>
  <h2>改造カード</h2>

  <h3>装備済み</h3>

  <v-container>
    <v-card class="pa-4">
      <draggable
        :list="items"
        :group="{ name: 'card' }"
        @change="log"
      >
        <template #item="{ element }">
          <v-card class="ma-4">
            <ui-card-patch-card :patch-card="element" @click="element.toggleActive()" />
          </v-card>
        </template>
      </draggable>
    </v-card>
  </v-container>

  <h3>一覧</h3>

  <v-container>
    <v-card class="pa-4">
      <draggable
        v-model="masterPatchCards"
        :group="{ name: 'card', pull: 'clone', put: false }"
        :clone="clonePatchCard"
        @change="log"
      >
        <template #item="{ element }">
          <ui-card-patch-card :patch-card="element" class="ma-4" />
        </template>
      </draggable>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import lodash from 'lodash';
import { PatchCard } from '@/classes/patch-card';

import { useMasterPatchCardStore } from '@/store/master-patch-card';

const masterPatchCardStore = useMasterPatchCardStore();

const masterPatchCards = computed(() => masterPatchCardStore.cards);

const items = ref([
]);

const log = () => {
  items.value = lodash.uniqBy(items.value, (value: PatchCard) => value.id);
};

onMounted(() => {
  masterPatchCardStore.fetchCards();
});

const clonePatchCard = (patchCard: PatchCard) => patchCard.clone();

</script>
