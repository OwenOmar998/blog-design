<template>
  <section>
    <div class="container">
      <div class="horizontal-tabs">
        <div class="mobile" v-for="category in categories" :key="category">
          <button
            @click="changeCategory(category)"
            :id="category === selectedCategory ? 'active' : ''"
          >
            <span>
              {{ category }}
            </span>
          </button>
        </div>

        <div class="input-dropdown">
          <div class="input-label">
            <div class="select" @click="showListItems">
              <span>{{ selectedCategory }}</span>
              <i :class="!showList ? 'fa fa-angle-down' : 'fa fa-angle-up'"></i>
            </div>
          </div>
          <div class="option" :id="!showList ? 'show-list' : ''">
            <div
              v-for="category in categories"
              :key="category"
              @click="
                changeCategory(category);
                showList = false;
              "
            >
              <span>
                {{ category }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="parent">
        <div class="content" v-if="blogPerRow === 2">
          <div class="row" v-for="i in blogPerPage / 2" :key="i">
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

      <pagination-box></pagination-box>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
import { useBlogsData } from "../../stores/BlogsData";
import BlogCard from "./BlogCard.vue";
import PaginationBox from "./PaginationBox.vue";
import { computed } from "@vue/reactivity";
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
  components: {
    BlogCard,
    PaginationBox,
  },
  setup() {
    const blogPerPage = ref(window.innerWidth >= 768 ? 8 : 6);
    const blogPerRow = ref(window.innerWidth >= 768 ? 2 : 1);
    const blogsData = useBlogsData();
    const page = ref(blogsData.page);
    const categories = [
      "View all",
      "Design",
      "Product",
      "Software Development",
      "Customer Success",
    ];
    const blogs = computed(() => {
      return blogsData.getBlogs as blog[];
    });
    const selectedCategory = ref("View all");
    window.addEventListener("resize", () =>
      changeCategory(selectedCategory.value)
    );

    function changeCategory(category: string) {
      selectedCategory.value = category;
      blogsData.changeCategory(category);
      blogsData.page = page.value;
      blogPerPage.value = window.innerWidth >= 768 ? 8 : 6;
      blogPerRow.value = window.innerWidth >= 768 ? 2 : 1;
      blogsData.blogPerPage = blogPerPage.value;
      blogsData.blogPerRow = blogPerRow.value;
    }
    const showList = ref(false);
    function showListItems() {
      showList.value = !showList.value;
    }
    return {
      blogs,
      categories,
      selectedCategory,
      changeCategory,
      showList,
      showListItems,
      blogPerPage,
      blogPerRow,
      page,
    };
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
* {
  box-sizing: border-box;
}
#show-list {
  display: none;
}
.main-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;
  width: 100%;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.parent {
  width: 100%;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 80px;
  gap: 64px;
  width: 100%;
  background: #ffffff;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 32px;
  gap: 64px;
  width: 100%;
}

.horizontal-tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.horizontal-tabs button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  height: 44px;
  background: #ffffff;
  border-radius: 6px;
  border: none;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  transition: 0.3s;
}
#active {
  color: #6941c6;
  background: #f9f5ff;
}
.input-dropdown {
  display: none;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;
  width: 100%;
  flex: none;
  order: 1;
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

@media screen and (min-width: 768px) and (max-width: 1023px) {
  section {
    padding: 96px 32px;
  }
  .container {
    padding: 0;
  }
}
@media screen and (max-width: 767px) {
  section {
    padding: 64px 0;
  }

  .container {
    padding: 0px 16px;
    align-items: center;
    gap: 48px;
  }
  .horizontal-tabs {
    gap: 16px;
    width: 100%;
    align-items: self-start;
  }
  .input-dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 100%;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
  .input-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;
    width: 100%;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 8px;
    width: 100%;
    min-height: 44px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  .option {
    display: block;
    flex-direction: row;
    align-items: center;

    gap: 8px;
    width: 100%;
    min-height: 44px;
    background: #ffffff;
    border: 1px solid #d0d5dd;

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    flex: none;
    color: rgba(16, 24, 40, 0.6);
  }
  .option div {
    cursor: pointer;
  }

  .option div:hover {
    color: black;
    filter: brightness(0.8);
  }
  .option div span {
    display: block;
    margin: 10px 14px;
  }
  .select span {
    width: 100%;
  }

  .mobile {
    display: none;
  }
  .blog-card {
    gap: 24px;
    width: 100%;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .content {
    display: none;
  }
  .main-card {
    gap: 48px;
  }
}
</style>
