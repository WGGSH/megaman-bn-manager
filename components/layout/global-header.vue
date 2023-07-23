<template>
  <v-app-bar dense elevation="1">
    <v-app-bar-nav-icon @click="onClickNavIcon" />
    <v-btn>
      <v-toolbar-title @click="onClickTitle">
        エグゼ6管理ツール
      </v-toolbar-title>
    </v-btn>
    <v-btn class="ml-auto ma-4 mr-0">
      <v-icon size="xx-large" @click="onClickSettingIcon">
        mdi-cog
      </v-icon>
    </v-btn>
    <v-btn class="ma-4 ml-0">
      <v-icon size="xx-large" @click="onClickInformationIcon">
        mdi-information
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-click-nav-icon', 'on-click-title', 'on-click-setting-icon', 'on-click-information-icon']);

const onClickNavIcon = () => {
  emit('on-click-nav-icon', true);
};

const onClickTitle = () => {
  emit('on-click-title', true);
};

const onClickSettingIcon = () => {
  emit('on-click-setting-icon', true);
};

const onClickInformationIcon = () => {
  emit('on-click-information-icon', true);
};

</script>
