<template>
  <v-container>
    <ui-text-title>
      設定
    </ui-text-title>

    <ui-text-subtitle>
      テーマ
    </ui-text-subtitle>
    <v-switch
      v-model="isDark"
      label="ダークモード"
      @change="onChangeTheme"
    />

    <ui-text-subtitle>
      テーマバージョン
    </ui-text-subtitle>
    <v-radio-group
      v-model="localVersion"
    >
      <v-radio
        v-for="targetVersion in versions"
        :key="targetVersion.value"
        :label="targetVersion.label"
        :value="targetVersion.value"
      />
    </v-radio-group>
  </v-container>
</template>

<script setup lang="ts">
import { ThemeBright } from '@/types/theme/bright';
import { ThemeVersion } from '@/types/theme/version';

import { useThemeStore } from '@/store/theme';

const themeStore = useThemeStore();

const bright = computed<ThemeBright>(() => themeStore.bright);
const version = computed<ThemeVersion>(() => themeStore.version);

const isDark = ref<boolean>(false);

const localVersion = ref<ThemeVersion>('gregar');

watch(bright, () => {
  isDark.value = bright.value === 'dark';
});

watch(version, () => {
  localVersion.value = version.value;
});

watch(localVersion, () => {
  themeStore.setVersion(localVersion.value);
});

onMounted(() => {
  isDark.value = bright.value === 'dark';
  localVersion.value = version.value;
});

const versions = [
  { label: 'グレイガ', value: 'gregar' },
  { label: 'ファルザー', value: 'falzar' },
];

const onChangeTheme = () => {
  themeStore.setBright(isDark.value ? 'dark' : 'light');
};

</script>
