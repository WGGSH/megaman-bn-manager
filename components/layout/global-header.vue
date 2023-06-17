<template>
  <v-app-bar dense elevation="1">
    <v-app-bar-nav-icon @click="onClickNavIcon" />
    <v-toolbar-title>My App</v-toolbar-title>
    <v-btn @click="onClickThemeButton">
      Theme: {{ theme }}
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { defineEmits, computed } from 'vue';
import { useThemeStore } from '@/store/theme';

const themeStore = useThemeStore();
const theme = computed(() => themeStore.value);
const emit = defineEmits(['on-click-nav-icon']);

const onClickNavIcon = () => {
  emit('on-click-nav-icon', true);
};

watch(theme, (newVal) => {
  themeStore.setTheme(newVal);
});

const onClickThemeButton = () => {
  themeStore.toggleTheme();
};

</script>
