<script setup lang="ts">
const props = defineProps<{ color?: string }>();
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    :fill="props.color ?? 'currentColor'"
  >
    <path
      d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"
    ></path>
  </svg>
</template>
