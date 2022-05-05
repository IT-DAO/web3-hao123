<template>
  <div v-show="isPage" class="app" :style="{background: `url('${backgroundImg}')`}">

    <!-- 为了解决搜索高度塌陷 -->
    <div class="line"></div>

    <!-- 编辑按钮 and 连接钱包 -->
    <!-- <div class="edit-and-wallet">
      <div class="edit"></div>
      <div class="no-wallet">连接钱包</div>
    </div> -->

    <!-- 搜索 -->
    <search></search>
    
    <!-- 主要内容 -->
    <div class="layout-main">
      <div class="layout-left">
        <layout-24 class="layout-24"></layout-24>
        <layout-16></layout-16>
      </div>
      <div>
        <layout-20></layout-20>
        <!-- 实时Gas -->
        <div class="layout-time">
          <div @click="randomBgEvent" class="btn-item">
            <i class="btn-item-icon el-icon-magic-stick"></i>
            <div class="btn-item-text">更换背景</div>
          </div>
          <div class="btn-item">
            <!-- <i class="btn-item-icon el-icon-setting"></i> -->
            <el-switch
              v-model="value"
              @change="switchChange"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            <div class="btn-item-text btn-item-text-switch">编辑</div>
          </div>
          <div @click="openUrl('https://twitter.com/itdaoog')" class="btn-item">
            <i class="btn-item-icon el-icon-chat-line-round"></i>
            <div class="btn-item-text">推特</div>
          </div>
          <div @click="openUrl('https://github.com/IT-DAO/web3-tab')" class="btn-item">
            <i class="btn-item-icon el-icon-link"></i>
            <div class="btn-item-text">GitHub</div>
          </div>
          <!-- <div class="btn-item">
            <i class="btn-item-icon el-icon-thumb"></i>
            <div class="btn-item-text">赞助</div>
          </div> -->
          <div @click="versionDia = true" class="btn-item">
            <i class="btn-item-icon el-icon-sunny"></i>
            <div class="btn-item-text">项目说明</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 版本说明 -->
    <el-dialog
      title=""
      :visible.sync="versionDia"
      width="30%">
      <div>Version: v1.0.0 | 最后更新时间：2022.5.4</div>
      <hr />
      <div>本项目暂时没有UI，功能也不是最终的，还不完善，属于bete版本，欢迎大家在GitHub提issues，我会抽空及时更改的</div>
      <hr />
      <div>本项目属于IT-DAO（web3技术第一DAO，目前在筹备中）技术转化组织项目，如果想了解更多IT-DAO的进度，可以关注IT-DAO的推特</div>
    </el-dialog>

  </div>
</template>

<script>
import Search from './components/search'
import Layout24 from './components/layout24'
import Layout16 from './components/layout16'
import Layout20 from './components/layout20'
import backgroundList from './data/background'
import oneBg from './img/one-bg.jpeg'

export default {
  data() {
    return {
      value: false,
      isPage: false,
      versionDia: false,
      backgroundImg: oneBg,
      backgroundList
    };
  },
  components: {
    Search,
    Layout24,
    Layout16,
    Layout20
  },
  created() {

  },
  mounted() {
    setTimeout(() => {
            this.isPage = true;
    }, 300);
  },
  methods: {
    // 
    switchChange(isEdit) {
      this.$bus.$emit('isEditBus', isEdit);
    },
    // 随机变换背景
    randomBgEvent() {
      let random = this.randomNum(0, this.backgroundList.length - 1)
      this.backgroundImg = this.backgroundList[random]
    },
    // 生成随机整数
    randomNum(min, max) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * min + 1, 10)
        case 2:
          return parseInt(Math.random() * (max - min + 1) + min, 10)
        default:
          return 0
      }
    },
    // 跳转
    openUrl(url) {
      window.open(url)
    }
  },
};
</script>

<style lang="less">
@import url("./css/app.less");
</style>