<template>
  <v-card color="">
    <v-container fluid>
      <v-row class="ma-n6">
        <v-card-title>
          ステータス
        </v-card-title>
      </v-row>

      <v-row>
        <v-col
          v-for="status in megamanStatus.statuses"
          :key="status.key"
          cols="6"
          xs="6"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          xxl="2"
          class="mb-n2"
        >
          <v-card
            :color="status.isPositive() ? 'blue' : 'red'"
          >
            {{ status.toString() }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { MegamanStatus } from '@/classes/megaman-status';

defineProps({
  megamanStatus: {
    type: Object as PropType<MegamanStatus>,
    required: true,
  },
});
</script>
