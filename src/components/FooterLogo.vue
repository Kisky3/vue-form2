<template>
  <footer class="footer">
    <div class="footer_logo">
      <div class="logo_container">
        <a target="_blank" rel="noopener" href="#">
          <img
            class="me_logo"
            height="50"
            alt="logo"
            title="logo"
            src="../common/img/logo.png"
          />
        </a>
      </div>
      <p>COPYRIGHT(C) Kou Co., Ltd. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
</template>
<script lang="ts">
import { url } from '../common/utils'
export default {
  data() {
    return {
      url: url
    }
  }
}
</script>
<style lang="scss" scoped>
.footer_logo {
  margin-top: 65px;
  padding-top: 30px;
  border-top: 1px solid lightgray;
  word-break: break-word;
  .logo_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  .me_logo {
    margin-right: 20px;
  }
  p {
    padding: 10px 0 50px 0;
    font-size: 11px;
    text-align: center;
  }
  @media screen and (min-width: 0) and (max-width: 768px) {
    margin-top: 0;
    p {
      padding-bottom: 30px;
    }
  }
}
</style>
