<template>
  <div id="content" v-if="width">
    <footer-column
      :links="allLinks[0]"
      :show-badge="show && true"
    ></footer-column>
    <footer-column
      :links="allLinks[1]"
      :show-badge="show && false"
    ></footer-column>
    <footer-column
      :links="allLinks[2]"
      :show-badge="show && false"
    ></footer-column>
    <footer-column
      :links="allLinks[3]"
      :show-badge="show && false"
    ></footer-column>
    <footer-column
      :links="allLinks[4]"
      :show-badge="show && false"
    ></footer-column>
    <footer-column
      :links="allLinks[5]"
      :show-badge="show && false"
    ></footer-column>
  </div>
  <div v-else id="content">
    <footer-column
      :links="allLinks[0]"
      :show-badge="show && true"
    ></footer-column>
    <footer-column
      :links="allLinks[1]"
      :show-badge="show && false"
    ></footer-column>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import FooterColumn from "./FooterColumn.vue";
export default {
  props: ["show", "allLinks"],
  components: { FooterColumn },
  setup() {
    const width = ref(window.innerWidth > 767 ? true : false);

    window.addEventListener("resize", () => {
      width.value = window.innerWidth > 767 ? true : false;
    });

    return { width };
  },
};
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
}
@media screen and( max-width:767px) {
}
</style>
