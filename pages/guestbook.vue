<script setup lang="ts">
import { css } from "styled-system/css";
import { container, hstack } from "styled-system/patterns";
import GoogleIcon from "~/ui/icons/google-icon.vue";
import GitHubIcon from "~/ui/icons/github-icon.vue";
import Button from "~/ui/components/button/button.vue";

useSeoMeta({
  title: "Guestbook − Alexander Maxwell",
  ogTitle: "Guestbook − Alexander Maxwell",
  description: "Let me know what you think about this dummy blog.",
  ogDescription: "Let me know what you think about this dummy blog.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div
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
  >
    <h1
      :class="
        css({
          fontSize: '3xl',
          color: 'text_main',
          fontWeight: 'bold',
          md: { fontSize: '4xl' },
        })
      "
    >
      Sign my guestbook
    </h1>
    <div
      :class="
        hstack({
          mt: 6,
          gap: 3,
          flexWrap: 'wrap',
          md: { mt: 8, maxW: 'xl', flexWrap: 'nowrap' },
        })
      "
    >
      <Button variant="oauth">
        <template v-slot:icon>
          <GoogleIcon />
        </template>
        Sign in with Google
      </Button>
      <Button variant="oauth">
        <template v-slot:icon>
          <GitHubIcon :class="css({ fill: 'text_main' })" />
        </template>
        Sign in with GitHub
      </Button>
    </div>
  </div>
</template>
