<template>
  <h2>改造カード</h2>

  <h3>装備済み</h3>

  <v-container>
    <v-card class="mb-4">
      <ui-card-status-card :megaman-status="megamanStatus" />
    </v-card>
    <v-card class="pa-2">
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
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import lodash from 'lodash';
import { PatchCard } from '@/classes/patch-card';
import { MegamanStatus } from '@/classes/megaman-status';

import { useMasterPatchCardStore } from '@/store/master-patch-card';

const masterPatchCardStore = useMasterPatchCardStore();

const masterPatchCards = computed(() => masterPatchCardStore.cards);

const megamanStatus = ref(new MegamanStatus());

const items = ref([
]);

watch(items, (value) => {
  megamanStatus.value = new MegamanStatus();
  value.forEach((patchCard: PatchCard) => {
    if (!patchCard.isActive) {
      return;
    }
    patchCard.abilities.forEach((ability) => {
      megamanStatus.value.pushAbility(ability);
    });
  });
  megamanStatus.value.apply();
}, { deep: true });

const log = () => {
  items.value = lodash.uniqBy(items.value, (value: PatchCard) => value.id);
};

onMounted(() => {
  masterPatchCardStore.fetchCards();
});

const clonePatchCard = (patchCard: PatchCard) => patchCard.clone();

</script>
