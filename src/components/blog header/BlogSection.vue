<template>
  <section>
    <div class="first">
      <div class="content">
        <div class="supporting-text">
          <h1>Featured posts</h1>
          <h3>
            The latest industry news, interviews, technology, and resources
          </h3>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="blogs">
        <div class="screen" v-if="blogPerRow === 2">
          <div class="row" v-for="i in 2" :key="i">
            <div
              class="blog-card"
              v-for="blog in blogs.slice((i - 1) * 2, 2 * i)"
              :key="blog.id"
            >
              <blog-card :blog="blog"></blog-card>
            </div>
          </div>
        </div>
        <div v-else class="main-card">
          <div class="blog-card" v-for="blog in blogs" :key="blog.id">
            <blog-card :blog="blog"></blog-card>
          </div>
        </div>
      </div>
      <div class="actions">
        <button><h4>View all posts</h4></button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import BlogCard from "./BlogCard.vue";
import { useBlogsData } from "../../stores/BlogsData";
import { ref } from "vue";
interface blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imgUrl: string;
}
export default {
  components: { BlogCard },
  setup() {
    const blogPerRow = ref(window.innerWidth >= 768 ? 2 : 1);
    const blogsData = useBlogsData();
    const blogs: blog[] = blogsData.blogs.slice(0, 4);
    window.addEventListener(
      "resize",
      () => (blogPerRow.value = window.innerWidth >= 768 ? 2 : 1)
    );
    return { blogs, blogPerRow };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 80px;
  gap: 64px;
  width: 100%;
  background: #ffffff;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
}
.first {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  width: 100%;
  flex: none;
  flex-grow: 0;
  gap: 32px;
  order: 0;
}
.second {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  width: 100%;
  flex: none;
  flex-grow: 0;
  gap: 64px;
  order: 1;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.supporting-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.supporting-text h1 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.supporting-text h3 {
  padding: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #475467;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.blogs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.blog-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 50%;
  flex: 1;
  order: 0;
  flex-grow: 1;
}
.main-card {
  width: 100%;
}
.actions {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px 0px 0px;
  gap: 12px;
  width: 100%;
  height: 64px;
  border-top: 1px solid #eaecf0;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.actions button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 148px;
  height: 48px;
  background: #7f56d9;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.actions button h4 {
  width: 108px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  section {
    padding: 64px 0px;
  }
}

@media screen and (max-width: 767px) {
  section {
    padding: 64px 0px;
    gap: 48px;
  }
  .first {
    padding: 0px 16px;
    align-self: stretch;
  }
  .second {
    align-items: center;
    padding: 0px 16px;
    gap: 48px;
    align-self: stretch;
  }
  .supporting-text {
    gap: 16px;
    align-self: stretch;
  }
  .supporting-text h1 {
    font-size: 30px;
    line-height: 38px;
  }
  .supporting-text h3 {
    font-size: 18px;
    line-height: 28px;
  }
  .blog-card {
    gap: 24px;
    width: 100%;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .screen {
    display: none;
  }
  .actions {
    align-items: flex-start;
    padding: 0px;
    height: 48px;
  }
  .actions button {
    width: 100%;
    flex-grow: 1;
  }
}
</style>
