<template>
  <v-card
    :color="patchCard.isActive ? '' : 'disabled'"
    @click="onClick"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="1"
          class="d-none d-sm-block"
        >
          <slot name="action-area" />
        </v-col>
        <v-col class="mt-n2 ml-2">
          <v-row class="mb-n8">
            <v-card-title>
              {{ patchCard.name }}
            </v-card-title>
            <v-card-title class="ml-auto">
              {{ patchCard.capacity }} MB
            </v-card-title>
          </v-row>

          <v-row class="mb-n2">
            <v-col
              v-for="(ability, index) in patchCard.abilities"
              :key="index"
              cols="6"
              xs="6"
              sm="4"
              md="4"
              lg="3"
              xl="2"
              xxl="2"
              class="mb-n2"
            >
              <v-card
                :color="abilityColor(ability)"
                class="pa-1"
              >
                {{ ability.toString() }}
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { AbilityInterface } from '@/classes/ability/base';
import { PatchCardInterface } from '@/classes/patch-card';

const props = defineProps({
  patchCard: {
    type: Object as PropType<PatchCardInterface>,
    required: true,
  },
});

const emit = defineEmits(['click']);

const abilityColor = (ability: AbilityInterface) => {
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
