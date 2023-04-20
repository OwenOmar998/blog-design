<template>
  <div class="navigation">
    <div class="btn-nav">
      <router-link to="/">Home</router-link>
    </div>

    <div id="btn">
      <div class="btn-nav">
        <span @click="toggleDropdownMenu_1">
          Products
          <i
            :class="showDropdownMenu_1 ? 'fa fa-angle-up' : 'fa fa-angle-down'"
          ></i>
        </span>
      </div>
      <transition name="dropdown">
        <div v-if="showDropdownMenu_1" class="navigation-list">
          <div class="btn-nav" id="sub-btn">
            <li><router-link to="/">Product 1</router-link></li>
          </div>
          <div class="btn-nav" id="sub-btn">
            <li><router-link to="/">Product 2</router-link></li>
          </div>
          <div class="btn-nav" id="sub-btn">
            <li><router-link to="/">Product 3</router-link></li>
          </div>
        </div>
      </transition>
    </div>
    <div id="btn">
      <div class="btn-nav">
        <span @click="toggleDropdownMenu_2">
          Resources
          <i
            :class="showDropdownMenu_2 ? 'fa fa-angle-up' : 'fa fa-angle-down'"
          ></i>
        </span>
      </div>
      <transition name="dropdown">
        <div v-if="showDropdownMenu_2" class="navigation-list">
          <div class="btn-nav" id="sub-btn">
            <li><router-link to="/">Resource 1</router-link></li>
          </div>

          <div class="btn-nav" id="sub-btn">
            <li><router-link to="/">Resource 2</router-link></li>
          </div>
          <div class="btn-nav" id="sub-btn">
            <li><router-link to="/">Resource 3</router-link></li>
          </div>
        </div>
      </transition>
    </div>

    <div class="btn-nav">
      <router-link to="/">Pricing</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const showDropdownMenu_1 = ref(false);
    const showDropdownMenu_2 = ref(false);
    function toggleDropdownMenu(id: number) {
      switch (id) {
        case 1:
          showDropdownMenu_1.value = !showDropdownMenu_1.value;
          break;
        case 2:
          showDropdownMenu_2.value = !showDropdownMenu_2.value;
          break;
      }
    }
    function toggleDropdownMenu_1() {
      toggleDropdownMenu(1);
    }
    function toggleDropdownMenu_2() {
      toggleDropdownMenu(2);
    }

    return {
      showDropdownMenu_1,
      showDropdownMenu_2,
      toggleDropdownMenu_1,
      toggleDropdownMenu_2,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  background-color: #ffffff;
  padding: 0px;
  margin: 0px;
}
.navigation {
  background-color: #344054;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  gap: 20px;
  width: 100%;
}
.navigation button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 46px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
li {
  list-style: none;
}
.navigation-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
}
.dropdown-arrow-up {
  margin-left: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0px 5px;
  border-color: #333 transparent transparent transparent;
}
.dropdown-arrow-down {
  margin-left: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 5px 5px 5px;
  border-color: transparent transparent#333 transparent;
}
#btn span {
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
}
.btn span {
  width: 70px;
  height: 24px;
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
a {
  padding: 5px 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
  text-decoration: none;
}
a:hover {
  cursor: pointer;
  filter: brightness(50%);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.dropdown-enter-active {
  transition: all 0.3s ease-out;
}

.dropdown-leave-active {
  transition: all 0.3s ease-in;
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.btn-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  background: #f4f5f7;
}
#sub-btn {
  width: 120px;
}
</style>
