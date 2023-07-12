<template>
  <tr>
    <ui-table-data-navi-customizer-program>
      {{ naviCustomizerProgram.name }}
    </ui-table-data-navi-customizer-program>
    <ui-table-data-navi-customizer-program>
      {{ ColorText.colorToTextMap[naviCustomizerProgram.color] }}
    </ui-table-data-navi-customizer-program>
  </tr>
</template>

<script setup lang="ts">

import { ColorText } from '@/value/color-text';

defineProps({
  naviCustomizerProgram: {
    type: Object,
    required: true,
  },
});

</script>
