<template>
  <h2>デッキ概要</h2>
  <v-container class="pa-8">
    <v-row>
      <h3>Title</h3>
    </v-row>
    <v-row>
      <v-text-field v-model="name" />
    </v-row>

    <v-row>
      <ui-button-accept
        @click="onClickSave"
      >
        保存する
      </ui-button-accept>
    </v-row>

    <v-row class="mt-8">
      <h3>対応バージョン</h3>
    </v-row>

    <v-row>
      <v-checkbox>
        aaa
      </v-checkbox>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDeckManagerStore } from '@/store/deckManager';

const deckManagerStore = useDeckManagerStore();

const router = useRouter();
const route = useRoute();
const selectedDeck = computed(() => deckManagerStore.selectedDeck);

const name = ref();

watch(
  () => selectedDeck.value,
  (newVal) => {
    if (newVal) {
      name.value = selectedDeck.value.name;
    }
  },
);

onMounted(() => {
  deckManagerStore.setSelectedDeckById(route.params.id);
  if (!selectedDeck) {
    router.push({ path: '/' });
  }
});

const onClickSave = () => {
  deckManagerStore.updateDeckNameById({
    id: selectedDeck.value.id,
    name: name.value,
  });
};
</script>
