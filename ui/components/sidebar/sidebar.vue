<script setup lang="ts">
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import SocialNetworks from "~/ui/components/social-networks/social-networks.vue";
</script>

<template>
  <aside
    :class="
      flex({
        px: 6,
        py: 3,
        width: '100%',
        height: 'auto',
        position: 'fixed',
        textAlign: 'center',
        borderRight: 'none',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: 'medium_background',
        md: {
          width: 80,
          padding: 8,
          height: '100dvh',
          alignItems: 'center',
          borderRight: '1px solid',
          borderRightColor: 'borders',
        },
      })
    "
  >
    <NuxtLink
      to="/"
      :class="
        flex({
          gap: 2,
          alignItems: 'center',
          md: { gap: 3, flexDirection: 'column' },
        })
      "
    >
      <div :class="css({ w: 9, h: 9, md: { mx: 'auto', w: 24, h: 24 } })">
        <NuxtImg
          src="/images/notion-avatar.png"
          alt="Paulo Henrique's profile picture"
          :class="
            css({
              borderRadius: 'full',
              outline: '1px solid rgba(0, 0, 0, 0.08)',
            })
          "
        />
      </div>
      <div :class="flex({ flexDirection: 'column' })">
        <h1
          :class="
            css({
              mt: 0.5,
              lineHeight: 1,
              color: 'text_main',
              fontWeight: 'semibold',
              md: {
                mt: 0,
                fontSize: '2xl',
                lineHeight: 'normal',
              },
            })
          "
        >
          Paulo Henrique
        </h1>
        <small
          :class="
            css({
              mt: 0.5,
              ml: -2.5,
              fontSize: 'xs',
              color: 'text_muted',
              fontWeight: 'medium',
              md: { mt: 0, fontSize: 'md' },
            })
          "
        >
          Software Engineer
        </small>
      </div>
    </NuxtLink>
    <p
      :class="
        css({
          mt: 6,
          fontSize: 'sm',
          hideBelow: 'md',
          lineHeight: '1.3',
          color: 'text_muted',
        })
      "
    >
      A blog about software engineering and other cool stuff.
    </p>
    <SocialNetworks />
  </aside>
</template>
