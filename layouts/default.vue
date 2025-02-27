<script setup lang="ts">
import { flex } from "styled-system/patterns";
</script>

<template>
  <div :class="flex()">
    LeftSidebar
    <slot />
<!--    <RightSidebar />-->
  </div>
</template>
