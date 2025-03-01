<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("article").all(),
);

useSeoMeta({
  title: "Alexander Maxwell's dummy blog",
  description: "Alexander Maxwell's dummy blog",
  ogTitle: "Alexander Maxwell's dummy blog",
  ogDescription: "This is my amazing blog, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>
