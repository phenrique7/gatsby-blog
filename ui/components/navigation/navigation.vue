<script setup lang="ts">
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

const route = useRoute();

const navLinks = [
  {
    route: "/",
    name: "Home",
    routeName: "index",
  },
  {
    route: "/about",
    name: "About",
    routeName: "about",
  },
  {
    route: "/guestbook",
    name: "Guestbook",
    routeName: "guestbook",
  },
] as const;
</script>

<template>
  <nav :class="css({ pt: 8, hideBelow: 'md' })">
    <ul :class="flex({ flexDirection: 'column', gap: 2 })">
      <li v-for="navLink in navLinks" :key="navLink.name">
        <NuxtLink
          :to="navLink.route"
          :class="
            css({
              fontWeight:
                route.name === navLink.routeName ? 'medium' : 'normal',
              color:
                route.name === navLink.routeName
                  ? 'highlight'
                  : 'text_main',
              '&:hover': {
                textDecoration: 'underline',
              },
            })
          "
        >
          {{ navLink.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
