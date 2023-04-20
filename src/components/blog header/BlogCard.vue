<template>
  <div class="image" :style="{ backgroundImage: `url(${blog.imgUrl})` }">
    <div class="quote">
      <div class="attribution-card">
        <div class="img-content">
          <div class="supporting-text">
            <h4>{{ blog.author }}</h4>
            <h5>{{ blog.date }} {{ blog.id }}</h5>
          </div>
          <span>{{ blog.category }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="heading-text">
      <h1>{{ blog.title }}</h1>
      <h3>{{ blog.content }}</h3>
    </div>
    <router-link :to="`/blog/${blog.id}`">
      <button>
        Read post<span class="material-symbols-outlined"> arrow_outward </span>
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  props: ["blog"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
.image {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 47.2%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
}
.quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 100%;
  height: 88px;
  bottom: 0px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
}
.attribution-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  width: 100%;
  height: 88px;
  background: rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.img-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
  height: 40px;
}
.img-content span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
}
.supporting-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  height: 40px;
}

.supporting-text h4 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
}
.supporting-text h5 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.content button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border: none;
  background: none;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #6941c6;
}
.heading-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.heading-text h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #101828;
  margin: 0px 0px 8px 0px;
  padding: 0;
}
.heading-text h3 {
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .attribution-card {
    height: 64px;
    padding: 12px;
  }
  .supporting-text {
    height: 64px;
  }
  .quote {
    height: 64px;
  }
}
@media screen and (max-width: 767px) {
  .image {
    padding-bottom: 70%;
  }
  .quote {
    height: 72px;
  }
  .attribution-card {
    padding: 16px;
    height: 72px;
  }
  .img-content {
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .supporting-text {
    height: 40px;
  }
  .heading-text h1 {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
