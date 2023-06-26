<template>
  <v-card
    :color="patchCard.isActive ? 'secondary' : 'disabled'"
    @click="onClick"
  >
    <v-container fluid>
      <v-row class="ma-n6">
        <v-card-title>
          {{ patchCard.name }}
        </v-card-title>
        <v-card-title class="ml-auto">
          {{ patchCard.capacity }} MB
        </v-card-title>
      </v-row>

      <v-row>
        <v-col
          v-for="ability in patchCard.abilities"
          :key="ability.key"
          cols="6"
          xs="6"
          sm="4"
          md="4"
          lg="3"
          xl="2"
          xxl="2"
          class="mb-n2"
        >
          <v-card :color="abilityColor(ability)" class="pa-1">
            {{ ability.toString() }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { PatchCard } from '@/classes/patch-card';

const props = defineProps({
  patchCard: {
    type: Object as PropType<PatchCard>,
    required: true,
  },
});

const emit = defineEmits(['click']);

const abilityColor = (ability) => {
  if (!props.patchCard.isActive) {
    return 'disabled';
  }

  if (ability.isPositive) {
    return 'positive';
  }
  return 'negative';
};

const onClick = () => {
  emit('click');
};
</script>
