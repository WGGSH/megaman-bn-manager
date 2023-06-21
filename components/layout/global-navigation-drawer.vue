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
          ビルド一覧
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />
    <v-list-item
      v-for="build in builds"
      :key="build.id"
      link
      @click="onClickBuild(build)"
    >
      {{ build.name }}
    </v-list-item>

    <v-divider />

    <v-list dense nav>
      <v-list-item link @click="newBuild">
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
  builds: {
    type: Array as PropType<Object>,
    default: () => [],
  },
});

const emit = defineEmits(['drawer-update', 'add-build', 'select-build']);

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

const newBuild = () => {
  localDrawer.value = false;
  emit('add-build');
};

const onClickBuild = (build) => {
  localDrawer.value = false;
  emit('select-build', build.id);
};
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
  color: inherit;
}
</style>
