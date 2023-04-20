<template>
  <div class="column" :style="{ width: `${width}` }">
    <h1>{{ links[0] }}</h1>
    <div class="links">
      <div class="link">
        <button>
          <h4>{{ links[1] }}</h4>
        </button>
      </div>
      <div class="link">
        <button>
          <h4>{{ links[2] }}</h4>
        </button>
      </div>
      <div class="link">
        <button>
          <h4>{{ links[3] }}</h4>
        </button>
        <div v-if="showBadge" class="badge">
          <h4>New</h4>
        </div>
      </div>
      <div class="link">
        <button>
          <h4>{{ links[4] }}</h4>
        </button>
      </div>
      <div class="link">
        <button>
          <h4>{{ links[5] }}</h4>
        </button>
      </div>
      <div class="link">
        <button>
          <h4>{{ links[6] }}</h4>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";

export default {
  props: ["showBadge", "links"],
  setup() {
    const width = ref(window.innerWidth > 767 ? "16.667%" : "50%");

    window.addEventListener("resize", () => {
      width.value = window.innerWidth > 767 ? "16.667%" : "50%";
    });

    return { width };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.column h1 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #667085;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: 24px;
}
.link button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0;
  border: none;
  background: none;
  background-color: none;
  gap: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.link h4 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.badge {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 8px;
  border: 1.5px solid #475467;
  border-radius: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.badge h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #344054;
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
