<template>
  <h2>改造カード</h2>

  <h3>装備済み</h3>

  <v-container>
    <draggable
      :list="items"
      :group="{ name: 'card' }"
      @change="log"
    >
      <template #item="{ element }">
        <v-card class="ma-4">
          <v-card-text>
            {{ element }}
          </v-card-text>
        </v-card>
      </template>
    </draggable>
  </v-container>

  <h3>一覧</h3>

  <v-container>
    <draggable
      v-model="masterPatchCards"
      :group="{ name: 'card', pull: 'clone', put: false }"
      @change="log"
    >
      <template #item="{ element }">
        <ui-card-patch-card :patch-card="element" class="ma-4" />
      </template>
    </draggable>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import uniq from 'uniq';

import { useMasterPatchCardStore } from '@/store/masterPatchCard';

const masterPatchCardStore = useMasterPatchCardStore();

const masterPatchCards = computed(() => masterPatchCardStore.cards);

const items = ref([
]);

const log = () => {
  items.value = uniq(items.value);
};

onMounted(() => {
  masterPatchCardStore.fetchCards();
});

</script>
