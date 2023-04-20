<template>
  <header-navigation></header-navigation>

  <router-view />
</template>

<script lang="ts">
import HeaderNavigation from "./components/header navigation/HeaderNavigation.vue";

export default {
  components: {
    HeaderNavigation,
  },
};
</script>

<style>
body {
  background-color: #ffffff;
  padding: 0px;
  margin: 0px;
}
</style>
