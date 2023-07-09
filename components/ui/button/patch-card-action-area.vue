<template>
  <v-btn
    :disabled="disabled"
    height="100%"
    @click="onClick"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};
</script>
