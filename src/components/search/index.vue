<template>
  <div class="search">
    <!-- 选择搜索引擎 -->
    <el-dropdown class="search-engine" @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
          <img v-if="searchType == 1" class="search-icon" src="./img/google.webp" alt="">
          <img v-else class="search-icon" src="./img/baidu.webp" alt="">
          <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1" class="dropdown-item">
              <img class="search-icon" src="./img/google.webp" alt="">
          </el-dropdown-item>
          <el-dropdown-item command="2" class="dropdown-item">
              <img class="search-icon" src="./img/baidu.webp" alt="">
          </el-dropdown-item>
          <!-- <el-dropdown-item class="dropdown-item">
              <img class="search-icon" src="./img/etherscan.png" alt="">
          </el-dropdown-item>
          <el-dropdown-item class="dropdown-item">
              <img class="search-icon" src="./img/dapp.png" alt="">
          </el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>

    <!-- 输入框 -->
    <input v-model="searchText" @keyup.enter="searchEvent" class="search-input" placeholder="输入并搜索" type="text">

    <!-- 搜索按钮 -->
    <div @click="searchEvent" class="search-btn">搜索</div>

    <!-- 搜索联想词 -->
    <div v-if="searchText != ''" class="search-sug-main">
        <div
            v-for="(baiduSugItem, index) in baiduSugList"
            :key="index"
            @click="baiduSugEvent(baiduSugItem)"
            class="search-sug-item">{{ baiduSugItem }}</div>
    </div>
  </div>
</template>

<script>
// 联想词技术：https://suggestion.baidu.com/su?p=3&ie=UTF-8&cb=&wd=
// 谷歌搜索：https://www.google.com/search?q=
// import { getSearchList } from '../../api/index'

export default {
  data() {
      return {
          searchType: 1, // 1 谷歌 2 百度
          searchText: '',
          baiduSugList: []
      }
  },
  watch: {
      searchText(newStr, oldStr) {
          console.log(newStr, oldStr)
          this.baiduSug(newStr);
      }
  },
  created() {
      this.init();
      this.baiduSugInit();
  },
  methods: {
    init() {
        const searchType = localStorage.getItem("web3_search_type");
        console.log(searchType);
        if (!searchType) {
            localStorage.setItem("web3_search_type", 1);
        } else {
            this.searchType = searchType;
        }
    },
    searchEvent() {
        console.log(this.searchText)
        if (this.searchText == '') {
            this.searchType == 1
                ? window.open(`https://www.google.com`)
                : window.open(`https://www.baidu.com`)
        } else {
            this.searchType == 1
                ? window.open(`https://www.google.com/search?q=${ this.searchText}`)
                : window.open(`https://www.baidu.com/s?wd=${ this.searchText}`)
        }
    },
    handleCommand(command) {
        this.searchType = command;
        localStorage.setItem("web3_search_type", command);
    },
    baiduSugEvent(str) {
        this.searchText = str;
        this.searchEvent();
    },
    // 百度联想词回调
    baiduSugInit() {
        window.baidu = {
            sug: (json) => {
                console.log('百度联想词回调', json)
                this.baiduSugList = json.s
            }
        }
    },
    // 搜索联想词
    baiduSug(str){
        if(str){
            let sug=document.createElement('script')
            sug.src=`https://suggestion.baidu.com/su?wd=${str}&cb=window.baidu.sug`
            document.getElementsByTagName('body')[0].appendChild(sug)
        }
        // else vm.sugArray=[]
    }
  }
};
</script>

<style lang="less" scoped>
// 搜索
.search {
    width: 700px;
    height: 48px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 30px;
    display: flex;
    align-items: center;
    position: relative;
}

.search-sug-main {
    position: absolute;
    width: 700px;
    height: auto;
    background-color: #fff;
    top: 60px;
    z-index: 10;
    border-radius: 10px;
    // border: 1px solid #000;

    .search-sug-item {
        width: 630px;
        height: 50px;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding-left: 70px;
        cursor:pointer;

        &:hover {
            border-radius: 10px;
            background-color: rgb(224, 224, 224);
        }
    }
}

.search-icon {
    width: 20px;
    height: 20px;
}
.dropdown-item {
    height: 40px;
    display: flex;
    align-items: center;
}

// 搜索引擎
.search-engine {
    cursor: pointer;

    .el-dropdown-link {
        display: flex;
        align-items: center;
        margin-left: 15px;
    }
}

// 搜索输入框
.search-input {
    background: none;
    border: none;
    outline: none;
    margin-left: 15px;
    width: 540px;
    margin-right: 40px;
    font-size: 18px;
}

// 搜索按钮
.search-btn {
    font-size: 16px;
    cursor: pointer;
}
</style>