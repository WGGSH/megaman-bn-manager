<template>
  <v-card>
    <v-card-title>
      更新履歴
    </v-card-title>

    <v-list-item
      v-for="updateInfo in updateLogs"
      :key="updateInfo.id"
      :title="updateInfo.date"
      :subtitle="updateInfo['change-message']"
    />
  </v-card>
</template>

<script setup lang="ts">
import UpdateData from '@/assets/master-data/update.json';

const updateLogs = ref(UpdateData['update-logs']);
</script>
