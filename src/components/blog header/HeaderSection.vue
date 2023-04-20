<template>
  <div class="header-section">
    <div class="container">
      <div class="main-content">
        <div class="supporting-text">
          <h4>Our Blog</h4>
          <div class="heading">
            <div class="action">
              <h1>Stories and interviews</h1>
              <h3>
                The blog is the best source of information for interviews, tips,
                guides, industry best practices, and news. Subscribe for updates
                in your inbox every week. No spam.
              </h3>
              <div class="email-field">
                <email-field :color="false"></email-field>
              </div>
            </div>
            <div class="content">
              <span>
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </span>
            </div>
          </div>
        </div>
        <email-field :color="false" class="mobile"></email-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EmailField from "./EmailField.vue";
export default {
  components: {
    EmailField,
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
.mobile {
  display: none;
}
.main-content {
  width: 100%;
}
.supporting-text h4 {
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #7f56d9;
}

.header-section {
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 80px;
  gap: 64px;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 12px;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.heading {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 0px;
  gap: 64px;
  width: 100%;
}
.action {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 500px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.action h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  margin: 0;
  padding: 0;
  color: #101828;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 0;
  margin: 0;
}
.action h3 {
  display: none;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  float: right;
  max-width: 384px;
  padding: 12px 0px 0px;
  height: 102px;
}
.content span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #475467;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .header-section {
    padding: 96px 0px;
  }
  .action {
    width: 450px;
  }
  .action h1 {
    font-size: 40px;
  }
  .heading {
    gap: 32px;
  }
}
@media screen and (max-width: 767px) {
  .header-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0px;
    gap: 64px;
    background: #f9fafb;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 16px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
  .supporting-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0px;
    margin: 0px;
    gap: 16px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  .email-field {
    display: none;
  }
  .content {
    display: none;
  }
  .action {
    width: 100%;
    gap: 16px;
  }
  .action h3 {
    display: block;
    padding: 0;
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #475467;
  }
  .mobile {
    width: 100%;
    display: block;
  }
}
</style>
