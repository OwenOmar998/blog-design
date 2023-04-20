<template>
  <div class="logo">
    <div class="logo-wrap">
      <div class="logo-mark">
        <div class="logo-content">
          <div class="blur"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div class="logo-type"><span>Untitled UI</span></div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 142px;
  height: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.logo-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 142px;
  height: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 0;
}
.logo-type {
  font-size: 22px;
  color: #101828;
}
.logo-mark {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  left: 0%;
  right: 77.46%;
  top: 0%;
  bottom: 0%;

  filter: drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))
    drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06));
}
.logo-content {
  box-sizing: border-box;

  width: 32px;
  height: 32px;

  background: linear-gradient(180deg, #ffffff 0%, #d0d5dd 100%), #ffffff;
  border: 0.2px solid #d0d5dd;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.blur {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 50%;
  bottom: 0%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 0px 8px 8px;
}
.dot {
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  background: linear-gradient(26.57deg, #53389e 8.33%, #6941c6 91.67%);
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 50%;
}
</style>
