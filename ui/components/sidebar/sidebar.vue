<script setup lang="ts">
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import MenuIcon from "~/ui/icons/menu-icon.vue";
import Navigation from "~/ui/components/navigation/navigation.vue";
import IconButton from "~/ui/components/icon-button/icon-button.vue";
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
    <div
      :class="
        flex({
          width: '100%',
          alignItems: 'center',
          md: { width: 'auto' },
          justify: 'space-between',
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
        <div
          :class="css({ w: 9, h: 9, md: { mx: 'auto', w: 24, h: 24 } })"
        >
          <NuxtImg
            alt="Paulo Henrique's avatar"
            src="/images/notion-avatar.png"
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
                ml: -4,
                lineHeight: 1,
                fontSize: 'sm',
                color: 'text_main',
                fontWeight: 'semibold',
                md: {
                  mt: 0,
                  ml: 0,
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
                ml: 0.5,
                fontSize: 'sm',
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
      <IconButton
        variant="ghost"
        :overrides="{ root: css.raw({ hideFrom: 'md' }) }"
      >
        <MenuIcon color="var(--colors-text_main)" />
      </IconButton>
    </div>
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
      A dummy blog about software engineering and other random stuff.
    </p>
    <SocialNetworks />
    <Navigation />
    <small :class="css({ flex: 1, alignContent: 'end' })">
      <NuxtLink
        to="https://github.com/phenrique7/gatsby-blog"
        :class="
          css({
            hideBelow: 'md',
            color: 'text_muted',
            textDecoration: 'underline',
            fontFamily: 'Liberation Mono',
            textDecorationColor: 'text_muted',
          })
        "
      >
        source
      </NuxtLink>
    </small>
  </aside>
</template>
