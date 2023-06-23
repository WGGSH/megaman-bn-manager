<template>
  <v-card>
    <v-container fluid>
      <v-row>
        <v-card-title>
          {{ patchCard.name }}
        </v-card-title>
      </v-row>

      <v-row class="mt-0">
        <v-card-text>
          {{ patchCard.capacity }} MB
        </v-card-text>
      </v-row>

      <v-row class="mt-0">
        <v-col
          v-for="ability in patchCard.abilities"
          :key="ability.key"
          cols="6"
          xs="6"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          xxl="2"
        >
          <v-card color="blue">
            {{ ability.toString() }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { PatchCard } from '@/classes/patchCard';

defineProps({
  patchCard: {
    type: Object as PropType<PatchCard>,
    required: true,
  },
});

</script>
