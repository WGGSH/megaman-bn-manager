<template>
  <v-navigation-drawer v-model="localDrawer" location="left" temporary />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const localDrawer = ref<Boolean>(false);

const props = defineProps({
  drawer: Boolean,
});

const emit = defineEmits(['drawer-update']);

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
</script>
