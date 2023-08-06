<template>
  <v-card>
    <v-card-title>
      更新履歴
    </v-card-title>

    <v-list-item
      v-for="updateInfo in updateLogs"
      :key="updateInfo.version"
      :title="updateTitle(updateInfo)"
    >
      <v-card-text class="pa-0 ml-2">
        {{ updateInfo['change-message'] }}
      </v-card-text>
    </v-list-item>
  </v-card>
</template>

<script setup lang="ts">
import UpdateData from '@/assets/master-data/update.json';
import { UpdateLog } from '@/types/update-log';

const updateLogs = ref<UpdateLog[]>(UpdateData['update-logs'].reverse());

const updateTitle = (updateLog: UpdateLog) => `v${updateLog.version} ${updateLog.date}`;
</script>
