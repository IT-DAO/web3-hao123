<template>
    <div class="layout24">
        <div class="title">常用</div>
        <!-- 常用（24格） -->
        <div class="main">
            <div
                class="item"
                :class="{'shake': isEdit}"
                v-for="(item, index) in layout"
                :key="index"
                >
                <!-- 编辑 -->
                <div @click="reviseData(item, index)" v-if="isEdit" class="edit-main">
                    <img class="edit-img" src="../../img/edit.png" alt="">
                </div>
                <img @click="deleteData(item, index)" v-if="isEdit" class="sign-icon" src="../../img/sign.png" alt="">

                <div v-if="!item.url_img" @click="urlEvent(item)" class="item-no-img">{{ item.url_name }}</div>
                <img v-else @click="urlEvent(item)" class="item-img" :src="item.url_img" alt="">
                <div @click="urlEvent(item)" class="item-url-name">{{ item.url_name }}</div>
            </div>
            <div v-if="isEdit" @click="addUrl" class="item">
                <img class="item-img" src="../../img/add.png" alt="">
                <div class="item-url-name">添加常用网站</div>
            </div>
        </div>
        <!-- 添加弹窗 -->
        <el-dialog
        title=""
        :visible.sync="dialogVisible"
        width="40%">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="网站名称">
                    <el-input v-model="form.url_name"></el-input>
                </el-form-item>
                <el-form-item label="网站地址">
                    <el-input v-model="form.url"></el-input>
                </el-form-item>
                <!-- <el-form-item label="网站图片（选填）">
                    <el-input v-model="form.url_img"></el-input>
                </el-form-item> -->
                <!-- <el-form-item label="网站说明（选填）">
                    <el-input v-model="form.tip"></el-input>
                </el-form-item> -->
                <el-form-item>
                    <el-button @click="saveData" type="primary">确定</el-button>
                    <!-- <el-button>取消</el-button> -->
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import layout24 from '../../data/layout24'

export default {
  data() {
    return {
        isEdit: false, // 是否是编辑状态
        dialogVisible: false,
        
        diaType: 'create',
        reviseIndex: 0,

        layout: null,
        isEditLayout: false,
        form: {}
    };
  },
  created() {
      this.init();
  },
  mounted() {
    this.$bus.$on('isEditBus',isEdit => {
         this.isEdit = isEdit;
    })
  },
  methods: {
    init() {
        const layout24Str = localStorage.getItem("web3_layout24");
        if (!layout24Str) {
            this.layout = layout24;
            localStorage.setItem("web3_layout24", JSON.stringify(layout24));
        } else {
            this.layout = JSON.parse(layout24Str)
        }
    },
    // 添加新网址
    addUrl() {
        this.form = {};
        this.dialogVisible = true;
        this.diaType = 'create'
    },
    // 保存数据
    saveData() {
        if (this.diaType == 'create') {
            this.layout.push({
                id: `layout_24_${this.layout.length + 1}`,
                url_img: this.form.url_img,
                url: this.form.url,
                url_name: this.form.url_name,
                tip: this.form.tip
            })
            localStorage.setItem("web3_layout24", JSON.stringify(this.layout));
            this.dialogVisible = false;
        }
        if (this.diaType == 'revise') {
            this.layout[this.reviseIndex] = {
                id: this.form.id,
                url_img: this.form.url_img,
                url: this.form.url,
                url_name: this.form.url_name,
                tip: this.form.tip
            }
            localStorage.setItem("web3_layout24", JSON.stringify(this.layout));
            this.dialogVisible = false;
        }
    },
    // 修改数据
    reviseData(item, index) {
        this.form = item;
        this.dialogVisible = true;
        this.reviseIndex = index;
        this.diaType = 'revise';
    },
    // 删除数据
    deleteData(item, index) {
        console.log(item)
        this.$confirm('此操作将会删除网址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.layout.splice(index, 1)
            localStorage.setItem("web3_layout24", JSON.stringify(this.layout));
        })
    },
    urlEvent(item) {
      if (this.isEditLayout) return;
      window.open(item.url)
    }
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

.layout24 {
    position: relative;

    .title {
        position: absolute;
        z-index: 2;
        left: 10px;
        top: 10px;
        font-size: 12px;
        color: rgb(64, 64, 240);
        font-weight: 600;
    }
}

.main {
    width: 990px;
    min-height: 285px;
    background: rgba(255, 255, 255, .85);
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 45px 25px 25px 25px;
    align-content: flex-start;

    &::before {
        content: '';
        filter: blur(20px);
    }

    .item {
        cursor: pointer;
        width: 102px;
        height: 85px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 0px 10px;
        position: relative;
        margin-bottom: 30px;

        .edit-main {
            width: 102px;
            height: 85px;
            position: absolute;
            top: 0px;
            left: 0px;
            background: rgba(255, 255, 255, .9);
            display: flex;
            justify-content: center;
            align-items: center;
            
            .edit-img {
                width: 30px;
                height: 30px;
            }
        }

        .sign-icon {
            width: 20px;
            height: 20px;
            position: absolute;
            top: -5px;
            right: 12px;
        }

        &:hover {
            border-radius: 6px;
            background-color: rgb(224, 224, 224);
        }

        .item-no-img {
            width: 46px;
            min-height: 56px;
            padding: 0px 5px;
            border-radius: 10px;
            -webkit-user-drag: none;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f14e37;
            color: #fff;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }

        .item-img {
            width: 56px;
            height: 56px;
            border-radius: 10px;
            -webkit-user-drag: none;
        }
        .item-url-name {
            font-size: 12px;
            width: 100%;
            text-align: center;
        }
    }
}

.shake {
    transform-origin: center center;
    animation: animashake 2s .2s ease-in-out both infinite;
}
@keyframes animashake {
    0%,
    100% {
        transform: rotate(0deg);
        transform-origin: 50% 0;
    }

    5% {
        transform: rotate(2deg);
    }

    10%,
    20%,
    30% {
        transform: rotate(-4deg);
    }

    15%,
    25%,
    35% {
        transform: rotate(4deg);
    }

    40% {
        transform: rotate(-2deg);
    }

    45% {
        transform: rotate(2deg);
    }

    50% {
        transform: rotate(0deg);
    }
}
</style>