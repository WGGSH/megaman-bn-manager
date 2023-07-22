<template>
  <v-container>
    <ui-text-title>
      改造カード
    </ui-text-title>
    <ui-button-accept @click="onClickSave">
      保存する
    </ui-button-accept>
  </v-container>

  <v-container>
    <ui-card-status-card
      :megaman-status="megamanStatus"
      :max-capacity="maxCapacity"
      :current-capacity="currentCapacity"
    />
    <ui-text-subtitle>
      装備中のカード
    </ui-text-subtitle>
    <v-card class="px-0" color="primary" :class="{ 'py-8': items.length === 0 }">
      <draggable
        :list="items"
        :group="{ name: 'card' }"
        item-key="id"
        @change="uniqItems"
      >
        <template #item="{ element }">
          <v-card class="ma-4">
            <ui-card-patch-card
              :patch-card="element"
              @click="element.toggleActive()"
            >
              <template #action-area>
                <ui-button-patch-card-action-area @click="onClickRemove(element)">
                  <v-icon>mdi-minus-thick</v-icon>
                </ui-button-patch-card-action-area>
              </template>
            </ui-card-patch-card>
          </v-card>
        </template>
      </draggable>
    </v-card>
  </v-container>

  <v-container>
    <h3>一覧</h3>
    <v-col class="pa-0">
      <draggable
        v-model="masterPatchCards"
        :group="{ name: 'card', pull: 'clone', put: false }"
        :clone="clonePatchCard"
        item-key="id"
        @change="uniqItems"
      >
        <template #item="{ element }">
          <ui-card-patch-card
            :patch-card="element"
            class="ma-4"
          >
            <template #action-area>
              <ui-button-patch-card-action-area
                :disabled="isAlreadyAdded(element)"
                @click="onClickAdd(element)"
              >
                <v-icon>mdi-plus-thick</v-icon>
              </ui-button-patch-card-action-area>
            </template>
          </ui-card-patch-card>
        </template>
      </draggable>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import lodash from 'lodash';
import { PatchCard } from '@/classes/patch-card';
import { MegamanStatus } from '@/classes/megaman-status';
import { NaviCustomizer } from '@/classes/navi-customizer';
import { useMegamanStatusStore } from '@/store/megaman-status';
import { useBuildManagerStore } from '@/store/build-manager';

import { useMasterPatchCardStore } from '@/store/master-patch-card';

const router = useRouter();
const route = useRoute();

const masterPatchCardStore = useMasterPatchCardStore();

const masterPatchCards = computed(() => masterPatchCardStore.cards);

const megamanStatus = ref<MegamanStatus>(new MegamanStatus());

const buildManagerStore = useBuildManagerStore();

const selectedBuild = computed(() => buildManagerStore.selectedBuild);

const items = ref([]);

const megamanStatusStore = useMegamanStatusStore();

const maxCapacity = 80;
const currentCapacity = computed(() => {
  let capacity = 0;
  items.value.forEach((patchCard: PatchCard) => {
    if (!patchCard.isActive) {
      return;
    }
    capacity += Number(patchCard.capacity);
  });
  return capacity;
});

const loadStatus = () => {
  if (!selectedBuild.value) {
    return;
  }
  items.value = selectedBuild.value.patchCards.map((patchCard) => {
    const masterPatchCard = masterPatchCardStore.getCardById(patchCard.id);
    if (!masterPatchCard) {
      return null;
    }
    const clone = masterPatchCard.clone();
    if (!patchCard.isActive) {
      clone.toggleActive();
    }
    return clone;
  }).filter((patchCard) => patchCard !== null);
};

const navi = ref(new NaviCustomizer());

const loadNaviCustomizerPrograms = () => {
  if (!selectedBuild.value) {
    return;
  }

  navi.value = new NaviCustomizer();
  selectedBuild.value.registeredNaviCustomizerPrograms.forEach((program) => {
    navi.value.addProgram(program);
  });
};

watch(items, (value) => {
  megamanStatus.value = new MegamanStatus();
  if (!selectedBuild.value) {
    return;
  }
  megamanStatus.value.hpMemoryNum = selectedBuild.value.hpMemoryNum;

  loadNaviCustomizerPrograms();
  megamanStatusStore.update(selectedBuild.value.hpMemoryNum, navi.value.registeredNaviCustomizerPrograms, navi.value.cells);

  megamanStatusStore.naviCustomizerStatus.megamanStatus.abilities.forEach((ability) => {
    megamanStatus.value.pushAbility(ability);
  });

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

watch(selectedBuild, (value) => {
  if (!value) {
    return;
  }
  loadStatus();
}, { deep: true });

const uniqItems = () => {
  items.value = lodash.uniqBy(items.value, (value: PatchCard) => value.id);
};

onMounted(() => {
  masterPatchCardStore.fetchCards();
  buildManagerStore.setSelectedBuildById(route.params.id);
  if (!selectedBuild) {
    router.push({ path: '/' });
  }
  loadStatus();
});

const clonePatchCard = (patchCard: PatchCard) => patchCard.clone();

const onClickSave = () => {
  if (!selectedBuild.value) {
    return;
  }
  buildManagerStore.updateBuildById({
    id: selectedBuild.value.id,
    patchCards: items.value.map((patchCard: PatchCard) => (
      {
        id: patchCard.id,
        isActive: patchCard.isActive,
      }
    )),
  });
};

const onClickRemove = (patchCard: PatchCard) => {
  items.value = items.value.filter((item: PatchCard) => item.id !== patchCard.id);
  uniqItems();
};

const onClickAdd = (patchCard: PatchCard) => {
  const clone = patchCard.clone();
  items.value.push(clone);
  uniqItems();
};

const isAlreadyAdded = (patchCard: PatchCard) => {
  const found = items.value.find((item: PatchCard) => item.id === patchCard.id);
  return !!found;
};
</script>
