<template>
  <v-navigation-drawer
    v-model="localDrawer"
    location="left"
    width="300"
    temporary
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          デッキ一覧
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />
    <v-list-item
      v-for="deck in decks"
      :key="deck.id"
      link
    >
      <NuxtLink to="/deck/abstract" class="link" @click="onClickDeck">
        {{ deck.name }}
      </NuxtLink>
    </v-list-item>

    <v-divider />

    <v-list dense nav>
      <v-list-item link @click="newDeck">
        <v-list-item-content>
          <v-list-item-title>
            <v-icon>mdi-plus</v-icon>
            新規作成
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const localDrawer = ref<Boolean>(false);

const props = defineProps({
  drawer: Boolean,
  decks: {
    type: Array as PropType<Object>,
    default: () => [],
  },
});

const emit = defineEmits(['drawer-update', 'add-deck']);

watch(
  () => ([props.drawer, localDrawer.value]),
  (newVal, oldVal) => {
    if (newVal[0] !== oldVal[1]) {
      [localDrawer.value] = newVal;
    }
    if (newVal[1] !== oldVal[1]) {
      // local
      emit('drawer-update', newVal[1]);
    }
  },
);

const newDeck = () => {
  localDrawer.value = false;
  emit('add-deck');
};

const onClickDeck = () => {
  localDrawer.value = false;
};
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
  color: inherit;
}
</style>
