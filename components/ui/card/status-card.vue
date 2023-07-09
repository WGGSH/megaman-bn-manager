<template>
  <v-card color="primary" class="pa-4">
    <v-row class="ma-n6">
      <v-col cols="3">
        <v-card-title>
          ステータス
        </v-card-title>
      </v-col>

      <v-col cols="9">
        <v-card-text>
          <v-progress-linear
            :model-value="currentCapacity"
            :max="maxCapacity"
            :color="progressColor"
            height="20px"
            width="100%"
          >
            <v-card-text align="center" color="blue">
              {{ currentCapacity }} / {{ maxCapacity }}
            </v-card-text>
          </v-progress-linear>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row class="mb-6">
      <v-col
        v-for="status in megamanStatus.statuses"
        :key="status.key"
        cols="6"
        xs="6"
        sm="4"
        md="4"
        lg="3"
        xl="2"
        xxl="2"
        class="mb-n5"
      >
        <v-card
          class="pa-1"
          :color="status.isPositive() ? 'positive' : 'negative'"
        >
          {{ status.toString() }}
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { MegamanStatus } from '@/classes/megaman-status';

const props = defineProps({
  megamanStatus: {
    type: MegamanStatus,
    required: true,
  },
  maxCapacity: {
    type: Number,
    required: true,
  },
  currentCapacity: {
    type: Number,
    required: true,
  },
});

const progressColor = computed(() => {
  if (props.currentCapacity > props.maxCapacity) {
    return 'error';
  }
  return 'secondary';
});
</script>
