<template>
  <footer>
    <div class="first">
      <the-content
        v-if="width"
        :all-links="allLinks"
        :show="true"
      ></the-content>

      <the-content
        v-if="!width"
        :all-links="allLinks.slice(0, 2)"
        :show="true"
      ></the-content>
      <the-content
        v-if="!width"
        :all-links="allLinks.slice(2, 4)"
        :show="false"
      ></the-content>
      <the-content
        v-if="!width"
        :all-links="allLinks.slice(4)"
        :show="false"
      ></the-content>
    </div>
    <div class="second">
      <div class="content">
        <the-logo></the-logo>
        <h3>&copy; 2077 Untitled UI. All rights reserved.</h3>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { ref } from "vue";
import TheLogo from "../header navigation/TheLogo.vue";
import TheContent from "./TheContent.vue";
export default {
  components: { TheLogo, TheContent },
  setup() {
    const allLinks: string[][] = [
      [
        "product",
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
      [
        "company",
        "About us",
        "Careers",
        "Press",
        "News",
        "Media kit",
        "Contact",
      ],
      [
        "resources",
        "Blog",
        "NewSletter",
        "Events",
        "Help centre",
        "Tutoriala",
        "Support",
      ],
      [
        "use cases",
        "Startups",
        "Enterprise",
        "Government",
        "Saas centre",
        "Marketplaces",
        "Ecommerce",
      ],
      [
        "social",
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dibbble",
      ],
      [
        "legal",
        "Terms",
        "Privacy",
        "Cookies",
        "Licenses",
        "Settings",
        "Contact",
      ],
    ];

    const width = ref(window.innerWidth > 767 ? true : false);

    window.addEventListener("resize", () => {
      width.value = window.innerWidth > 767 ? true : false;
    });
    return { allLinks, width };
  },
};
</script>
<script lang="ts"></script>

<style scoped>
* {
  box-sizing: border-box;
}
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 80px 48px;
  gap: 64px;
  width: 100%;
  background: #f9fafb;
  flex: none;
  order: 6;
  align-self: stretch;
  flex-grow: 0;
}
.first {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 48px;
  width: 100%;
  height: 240px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.second {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 32px;
  width: 100%;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.content {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #eaecf0;
  padding: 32px 0px 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.second h3 {
  margin: 0px 0px 4px 0px;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  flex: none;
  order: 1;
  flex-grow: 0;
}
#screen {
  display: block;
  width: 100%;
}
#mobile {
  display: none;
  width: 100%;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  footer {
    padding: 64px 0px 48px;
  }
}

@media screen and (max-width: 767px) {
  footer {
    padding: 48px 0px;
    gap: 48px;
  }
  .first {
    padding: 0px 16px;
    gap: 32px;
    height: 784px;
    align-self: stretch;
  }
  .second {
    padding: 0px 16px;
    align-self: stretch;
  }
  .content {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 0px 0px;
    gap: 24px;
    width: 100%;
  }
  #screen {
    display: none;
    width: 100%;
  }
  #mobile {
    display: block;
    width: 100%;
  }
}
</style>
