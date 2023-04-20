<template>
  <div>
    <header-section></header-section>
    <section-body></section-body>

    <div class="section-divider">
      <div class="divider"><div></div></div>
    </div>

    <blog-section></blog-section>
    <div class="section-divider">
      <div class="divider"><div></div></div>
    </div>
    <div class="new-sletter">
      <div class="container">
        <div class="content">
          <div class="heading-text">
            <h1>Sign up for our newsletter</h1>
            <h3>
              Be the first to know about releases and industry news and
              insights.
            </h3>
          </div>
          <div id="mobile">
            <email-field :color="true"></email-field>
          </div>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script lang="ts">
import HeaderSection from "@/components/blog header/HeaderSection.vue";
import SectionBody from "@/components/blog header/SectionBody.vue";
import BlogSection from "@/components/blog header/BlogSection.vue";
import EmailField from "@/components/blog header/EmailField.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
export default {
  components: {
    HeaderSection,
    SectionBody,
    BlogSection,
    EmailField,
    TheFooter,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.section-divider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 112px;
  margin: 0px;
  width: 100%;
  height: 1px;
  background: #ffffff;
}
.divider {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0;
  gap: 32px;
  width: 100%;
  height: 1px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.divider div {
  height: 1px;
  background: #eaecf0;
  margin: 0px;
  padding: 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.new-sletter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 80px;
  gap: 64px;
  width: 100%;
  background: #1d2939;
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 32px;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 40px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.heading-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 768px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.heading-text h1 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.heading-text h3 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #eaecf0;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-divider {
    padding: 0px 32px;
  }
}

@media screen and (max-width: 767px) {
  .section-divider {
    padding: 0px 16px;
  }
  .new-sletter {
    padding: 64px 16px;
    gap: 48px;
    width: 100%;
  }
  .container {
    padding: 0px 16px;
    gap: 32px;
    align-self: stretch;
  }
  .content {
    gap: 32px;
  }
  .heading-text {
    gap: 16px;
    width: 100%;
    align-self: stretch;
  }
  .heading-text h1 {
    font-size: 30px;
    line-height: 38px;
  }
  .heading-text h3 {
    font-size: 18px;
    line-height: 28px;
  }
  #mobile {
    justify-content: center;
    width: 100%;
  }
}
</style>
