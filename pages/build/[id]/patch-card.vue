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
    <v-card class="px-0" color="primary" :class="{ 'py-8': patchCards.length === 0 }">
      <draggable
        :list="patchCards"
        :group="{ name: 'card' }"
        item-key="id"
        @change="uniqPatchCards"
      >
        <template #item="{ element }">
          <v-card class="ma-4">
            <ui-card-patch-card
              :patch-card="element"
              @click="toggleActivePatchCard(element)"
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
        @change="uniqPatchCards"
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
import { UtilPatchCard } from '@/utils/patch-card';
import { UtilMegamanStatus } from '@/utils/megaman-status';
import { PatchCard } from '@/types/patch-card';
import { MegamanStatus } from '@/types/megaman-status';
import { NaviCustomizer } from '@/classes/navi-customizer';
import { useMegamanStatusStore } from '@/store/megaman-status';
import { useBuildManagerStore } from '@/store/build-manager';

import { useMasterPatchCardStore } from '@/store/master-patch-card';

const router = useRouter();
const route = useRoute();

const masterPatchCardStore = useMasterPatchCardStore();

const masterPatchCards = computed(() => masterPatchCardStore.cards);

const megamanStatus = ref<MegamanStatus>(UtilMegamanStatus.create());

const buildManagerStore = useBuildManagerStore();

const selectedBuild = computed(() => buildManagerStore.selectedBuild);

const patchCards = ref<PatchCard[]>([]);

const megamanStatusStore = useMegamanStatusStore();

const maxCapacity = 80;
const currentCapacity = computed(() : number => {
  let capacity = 0;
  patchCards.value.forEach((patchCard) => {
    if (!patchCard.isActive) {
      return;
    }
    capacity += Number(patchCard.capacity);
  });
  return capacity;
});

const loadStatus = () : void => {
  if (!selectedBuild.value) {
    return;
  }
  patchCards.value = selectedBuild.value.patchCards.map((patchCard) => {
    const masterPatchCard = masterPatchCardStore.getCardById(patchCard.id);
    if (!masterPatchCard) {
      return null;
    }
    let clone = { ...masterPatchCard };
    if (!patchCard.isActive) {
      clone = UtilPatchCard.toggleActive(clone);
    }
    return clone;
  }).filter((patchCard) => patchCard !== null);
};

const navi = ref(new NaviCustomizer());

const loadNaviCustomizerPrograms = () : void => {
  if (!selectedBuild.value) {
    return;
  }

  navi.value = new NaviCustomizer();
  selectedBuild.value.registeredNaviCustomizerPrograms.forEach((program) => {
    navi.value.addProgram(program);
  });
};

watch(patchCards, (value) => {
  megamanStatus.value = UtilMegamanStatus.create();
  if (!selectedBuild.value) {
    return;
  }
  megamanStatus.value.hpMemoryNum = selectedBuild.value.hpMemoryNum;

  loadNaviCustomizerPrograms();
  megamanStatusStore.update(selectedBuild.value.hpMemoryNum, navi.value.registeredNaviCustomizerPrograms, navi.value.cells);

  megamanStatusStore.naviCustomizerStatus.megamanStatus.abilities.forEach((ability) => {
    megamanStatus.value.abilities.push(ability);
  });

  value.forEach((patchCard) => {
    if (!patchCard.isActive) {
      return;
    }
    patchCard.abilities.forEach((ability) => {
      megamanStatus.value.abilities.push(ability);
    });
  });

  megamanStatus.value = UtilMegamanStatus.apply(megamanStatus.value);
}, { deep: true });

watch(selectedBuild, (value) => {
  if (!value) {
    return;
  }
  loadStatus();
}, { deep: true });

const uniqPatchCards = () : void => {
  patchCards.value = lodash.uniqBy(patchCards.value, (value: PatchCard) => value.id);
};

onMounted(() : void => {
  masterPatchCardStore.fetchCards();
  buildManagerStore.setSelectedBuildById(route.params.id);
  if (!selectedBuild) {
    router.push({ path: '/' });
  }
  loadStatus();
});

const toggleActivePatchCard = (patchCard: PatchCard) : void => {
  const index = patchCards.value.findIndex((item) => item.id === patchCard.id);
  if (index === -1) {
    return;
  }
  patchCards.value[index] = UtilPatchCard.toggleActive(patchCard);
};

const clonePatchCard = (patchCard: PatchCard) : PatchCard => ({ ...patchCard });

const onClickSave = () : void => {
  if (!selectedBuild.value) {
    return;
  }
  buildManagerStore.updateBuildById({
    id: selectedBuild.value.id,
    patchCards: patchCards.value.map((patchCard) => (
      {
        id: patchCard.id,
        isActive: patchCard.isActive,
      }
    )),
  });
};

const onClickRemove = (patchCard: PatchCard) : void => {
  patchCards.value = patchCards.value.filter((item) => item.id !== patchCard.id);
  uniqPatchCards();
};

const onClickAdd = (patchCard: PatchCard) : void => {
  const clone = { ...patchCard };
  patchCards.value.push(clone);
  uniqPatchCards();
};

const isAlreadyAdded = (patchCard: PatchCard) : boolean => {
  const found = patchCards.value.find((item) => item.id === patchCard.id);
  return !!found;
};
</script>
