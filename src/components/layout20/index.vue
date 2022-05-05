<template>
    <div class="main">
      <!-- 功能一：实时GAS费用 -->
      <gas class="gas"></gas>
      <div class="expect">功能二：敬请期待</div>
      <div class="expect">功能三：敬请期待</div>
    </div>
</template>

<script>
import Gas from '../gas'

export default {
  data() {
    return {

    };
  },
  components: {
    Gas
  },
  created() {},
  mounted() {},
  methods: {

  },
};
</script>

<style lang="less" scoped>
/*
---
rootSize: 163.2,
noTransformFlag:-no-,
toFixed:6
---
*/
.main {
    width: 470px;
    min-height: 528px;
    background: rgba(255, 255, 255, .85);
    overflow: hidden;
    border-radius: 20px;
    padding: 40px 25px 25px 25px;

    &::before {
        content: '';
        filter: blur(20px);
    }

    .expect {
      width: 470px;
      height: 150px;
      background-color: rgba(85, 76, 76, .1);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      margin-top: 40px;
      border-radius: 20px;
    }
}
</style>