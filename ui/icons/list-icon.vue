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
      d="M19 17h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2z"
    ></path>
    <circle cx="5" cy="19" r="2.5"></circle>
    <circle cx="5" cy="12" r="2.5"></circle>
    <circle cx="5" cy="5" r="2.5"></circle>
  </svg>
</template>
