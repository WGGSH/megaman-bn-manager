<template>
  <v-card>
    <v-container fluid>
      <v-row class="ma-n6">
        <v-card-title>
          ステータス
        </v-card-title>
      </v-row>

      <v-row>
        <v-col>
          {{ megamanStatus.toString() }}
        </v-col>
        <!-- <v-col -->
        <!--   v-for="ability in patchCard.abilities" -->
        <!--   :key="ability.key" -->
        <!--   cols="6" -->
        <!--   xs="6" -->
        <!--   sm="6" -->
        <!--   md="4" -->
        <!--   lg="3" -->
        <!--   xl="2" -->
        <!--   xxl="2" -->
        <!--   class="mb-n2" -->
        <!-- > -->
        <!--   <v-card :color="abilityColor(ability)"> -->
        <!--     {{ ability.toString() }} -->
        <!--   </v-card> -->
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { MegamanStatus } from '@/classes/megaman-status';

defineProps({
  megamanStatus: {
    type: MegamanStatus,
    required: true,
  },
});
</script>
