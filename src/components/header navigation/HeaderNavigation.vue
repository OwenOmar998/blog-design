<template>
  <div class="header-navigation">
    <header>
      <div class="container">
        <div class="content">
          <the-logo></the-logo>
          <the-navigation></the-navigation>
        </div>
        <div class="navigation-actions">
          <router-link to="/login">Log in</router-link>
          <router-link to="/signup">Sign up</router-link>
        </div>
        <div class="sidebar-menu" ref="navBtn">
          <div v-show="!sidebarOpen" @click="toggleSidebar" class="mobile-view">
            <div class="nav-btn">
              <div></div>
            </div>
          </div>
          <div v-show="sidebarOpen" @click="toggleSidebar" class="x"></div>
        </div>
      </div>
    </header>
  </div>
  <transition name="menu">
    <div v-if="sidebarOpen" class="sidebar-list" ref="sidebarMenu">
      <mobile-navigation></mobile-navigation>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref } from "vue";
import TheLogo from "./TheLogo.vue";
import TheNavigation from "./TheNavigation.vue";
import MobileNavigation from "./MobileNavigation.vue";
export default {
  components: {
    TheLogo,
    TheNavigation,
    MobileNavigation,
  },
  setup() {
    const sidebarOpen = ref(false);
    const sidebarMenu = ref(null as any);
    const navBtn = ref(null as any);
    function toggleSidebar() {
      sidebarOpen.value = !sidebarOpen.value;

      if (sidebarOpen.value) {
        document.addEventListener("click", hideSidebarOnClickOutside);
      }
    }

    function hideSidebarOnClickOutside(event: Event) {
      if (
        !sidebarMenu?.value?.contains(event.target) &&
        !navBtn?.value?.contains(event.target)
      ) {
        sidebarOpen.value = false;
        document.removeEventListener("click", hideSidebarOnClickOutside);
      }
    }
    return { sidebarOpen, toggleSidebar, sidebarMenu, navBtn };
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
.header-navigation {
  width: 100%;
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid #f2f4f7;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 18px 80px;
  height: 80px;
  left: 0px;
  right: 0px;
  top: 0px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 32px;
  width: 100%;
  height: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 40px;
  height: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.mobile-view {
  cursor: pointer;
  display: none;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex: none;
  order: 1;
}
.sidebar-menu {
  display: none;
  justify-content: center;
  align-items: center;
}
.nav-btn {
  position: relative;
  width: 100%;
  height: 100%;
  border: 0px solid #344054;
}
.nav-btn::before,
.nav-btn::after,
.nav-btn div {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background-color: #344054;
}

.nav-btn::before {
  top: 5px;
}

.nav-btn div {
  top: 11px;
}

.nav-btn::after {
  bottom: 5px;
}

.x {
  position: relative;
  width: 100%;
  height: 100%;
}

.x::before,
.x::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -28px;
  width: 24px;
  height: 2px;
  background-color: #344054;
  transform: rotate(45deg);
}

.x::after {
  transform: rotate(-45deg);
}

.navigation-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 190px;
  height: 44px;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.navigation-actions a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  height: 44px;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: white;
  transition: filter 0.5s ease-in-out;
}
.navigation-actions a:last-child {
  background: #7f56d9;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  color: #ffffff;
  transition: 0.3s;
}
.navigation-actions a:hover {
  filter: brightness(95%);
}
.sidebar-list {
  display: none;
  width: 100%;
}

a {
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

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.menu-enter-active {
  transition: all 0.3s ease-out;
}

.menu-leave-active {
  transition: all 0.3s ease-in;
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  header {
    padding: 0px;
  }
  .container {
    padding: 80px 32px;
  }
}
@media screen and (max-width: 767px) {
  header {
    padding: 0px;
  }
  .container {
    padding: 12px 16px;
  }
  .navigation-actions {
    display: none;
  }
  .sidebar-menu {
    display: flex;
  }
  .mobile-view {
    display: flex;
  }
  .sidebar-list {
    display: block;
  }
}
</style>
