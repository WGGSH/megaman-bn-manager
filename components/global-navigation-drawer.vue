<template>
  <v-navigation-drawer v-model="localDrawer" location="left" temporary />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const localDrawer = ref<Boolean>(false);

const props = defineProps({
  drawer: Boolean,
});

const emit = defineEmits(["drawer-update"]);

watch(
  () => props.drawer,
  (newVal) => {
    localDrawer.value = newVal;
  },
  () => localDrawer.value,
  (newVal) => {
    emit("drawer-update", newVal);
  }
);
</script>
