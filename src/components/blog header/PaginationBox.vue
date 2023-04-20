<template>
  <div class="pagination" id="screen">
    <button @click="changePage(page - 1)">
      <span class="material-symbols-outlined"> arrow_back </span>
      Previous
    </button>
    <div class="pagination-number">
      <div
        @click="changePage(i)"
        :id="i === page ? 'active' : ''"
        class="number"
        v-for="i in paginationNumbers.slice(0, 3)"
        :key="i"
      >
        <div class="content">
          <h5>
            {{ i }}
          </h5>
        </div>
      </div>

      <div v-if="showDots" class="number">
        <div class="content">
          <h5>...</h5>
        </div>
      </div>

      <div
        @click="changePage(i)"
        :id="i === page ? 'active' : ''"
        class="number"
        v-for="i in paginationNumbers.slice(3)"
        :key="i"
      >
        <div class="content">
          <h5>
            {{ i }}
          </h5>
        </div>
      </div>
    </div>
    <button @click="changePage(page + 1)">
      <span class="material-symbols-outlined"> arrow_forward </span>
      Next
    </button>
  </div>
  <div class="pagination" id="mobile">
    <button @click="changePage(page - 1)">
      <span class="material-symbols-outlined"> arrow_back </span>
    </button>

    <div class="pagination-number">Page {{ page }} of {{ n }}</div>

    <button @click="changePage(page + 1)">
      <span class="material-symbols-outlined"> arrow_forward </span>
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useBlogsData } from "../../stores/BlogsData";
import { computed } from "@vue/reactivity";
export default {
  setup() {
    const blogsData = useBlogsData();
    const n = blogsData.getPageNumbers;
    const paginationNumbers = computed(() => blogsData.getPaginationNumbers);
    const page = ref(blogsData.page);
    const showDots = computed(() => {
      if (paginationNumbers.value[3] === paginationNumbers.value[2] + 1)
        return false;
      else return true;
    });

    function changePage(p: number) {
      page.value = Math.min(Math.max(1, p), n);

      blogsData.changePage(page.value);
      blogsData.getPaginationNumbers;
    }

    return { paginationNumbers, page, changePage, showDots, n };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
#mobile {
  display: none;
}
#screen {
  display: flex;
}
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 0px;
  gap: 20px;
  width: 100%;
  height: 60px;
  border-top: 1px solid #eaecf0;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}
.pagination button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.pagination button:last-child {
  order: 2;
}
.pagination-number {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 2px;
  height: 40px;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: auto;
  cursor: default;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.content h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #1d2939;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.number:hover {
  background: #f9fafb;
}
#active {
  background: #f9fafb;
}
@media screen and (max-width: 767px) {
  #mobile {
    display: flex;
  }
  #screen {
    display: none;
  }
  .pagination {
    padding: 16px 0px 0px;
    gap: 12px;
    height: 52px;
  }
  .pagination button {
    padding: 8px;
    width: 36px;
    height: 36px;
  }
}
</style>
