<script setup lang="ts">
import { container } from "styled-system/patterns";

const route = useRoute();

const { data: page } = await useAsyncData(
  `post@${route.params.slug}`,
  () => {
    return queryCollection("article").path(route.path).first();
  },
);
</script>

<template>
  <template v-if="page">
    <ContentRenderer
      :value="page"
      :class="
        container({
          pt: 5,
          pb: 20,
          px: 6,
          md: { py: 16 },
          lg: { maxW: '2xl' },
          xl: { maxW: '3xl' },
        })
      "
    />
  </template>
  <template v-else>
    <div>
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </template>
</template>
