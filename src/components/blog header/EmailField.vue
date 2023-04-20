<template>
  <div>
    <div class="email">
      <div class="input-field">
        <div>
          <input type="text" placeholder="Enter your email" />
          <span v-if="!color"
            >We care about your data in our privacy policy.</span
          >
          <span v-else :id="color ? 'new-color' : ''"
            >We care about your data in our privacy policy.</span
          >
        </div>
        <button><span>Get started</span></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["color"],
};
</script>

<style scoped>
#new-color {
  color: #eaecf0;
}
* {
  box-sizing: border-box;
}
body {
  background-color: #ffffff;
  padding: 0px;
  margin: 0px;
}
.email {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.input-field {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 505px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.input-field button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 129px;
  height: 48px;
  background: #7f56d9;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  cursor: pointer;
  transition: 0.3s;
}
.input-field button:hover {
  filter: brightness(90%);
}
.input-field button span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
.input-field input {
  padding: 12px 14px;
  margin-bottom: 6px;
  width: 360px;
  height: 48px;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}

.input-field input:focus {
  outline: none;
  border: 1px solid #d0d5dd;
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.3);
}
.input-field input:focus::-webkit-input-placeholder {
  color: #101828;
}
.input-field span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .input-field {
    width: 450px;
  }
  .input-field input {
    width: 305px;
  }
}
@media screen and (max-width: 767px) {
  .email {
    flex-direction: column;
    align-self: stretch;
  }
  .input-field {
    width: 100%;
    flex-direction: column;
    gap: 6px;
    align-self: stretch;
  }
  .input-field div {
    width: 100%;
  }
  .input-field input {
    width: 100%;
    height: 48px;
  }
  .input-field button {
    margin-top: 16px;
    width: 100%;
    align-self: stretch;
  }
}
</style>
