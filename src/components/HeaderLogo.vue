<template>
  <header id="header" role="banner">
    <div class="header-content" style="text-align: center">
      <div class="header-main">
        <p class="logo">
          <a href="url"
            >
        </a>
        <img
          height="60"
          title="logo"
          alt="logo"
          src="../common/img/logo2.png"
        />
        </p>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
}
</script>
<style lang="scss" scoped>
#header {
  border-bottom: 1px solid #d2d2d2 !important;
  height: fit-content !important;
  .header-main {
    justify-content: center;
    padding: 15px 0;
    p.logo {
      width: auto;
      height: auto;
    }
  }
  @media screen and (min-width: 0) and (max-width: 768px) {
    border-bottom: 1px solid #d2d2d2;
    .header-main {
      padding: 10px 0;
    }
  }
}
</style>
