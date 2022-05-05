<template>
    <div class="layout16">
        <div class="title">文件夹</div>
        <div class="main">
            <div
                class="item"
                :class="{'shake': isEdit}"
                v-for="(item, index) in layout"
                :key="index"
                >
                <!-- 编辑 -->
                <div v-if="isEdit" class="edit-main">
                    <img @click="reviseFolderData(item, index)" class="edit-img" src="../../img/edit.png" alt="">
                    <img @click="folderEvent(item)" class="edit-img" src="../../img/open.png" alt="">
                </div>
                <img @click="deleteFolderData(item, index)" v-if="isEdit" class="sign-icon" src="../../img/sign.png" alt="">

                <img @click="folderEvent(item)" class="item-img" src="../../img/folder.png" alt="">
                <div @click="folderEvent(item)" class="item-url-name">{{ item.url_name }}</div>
            </div>
            <div v-if="isEdit" @click="addFolder" class="item">
                <img class="item-img" src="../../img/add.png" alt="">
                <div class="item-url-name">添加文件夹</div>
            </div>
        </div>

        <div v-if="dialogVisible" @click="dialogVisible = false" class="dialog" :class="{'test': dialogVisible}">
            <!-- 最多28个 -->
            <div class="dialog-title">{{ diaData.url_name }}</div>
            <div class="dialog-list">
                <div
                    v-for="(item, index) in diaData.list"
                    :key="index"
                    @click.stop
                    :class="{'shake': isEdit}"
                    class="dialog-item">
                    <!-- 编辑 -->
                    <div @click="reviseWebsiteData(item, index)" v-if="isEdit" class="edit-main">
                        <img class="edit-img" src="../../img/edit.png" alt="">
                    </div>
                    <img @click="deleteWebsiteData(item, index)" v-if="isEdit" class="sign-icon" src="../../img/sign.png" alt="">
                    
                    <div v-if="!item.url_img" @click="urlEvent(item.url)" class="item-no-img">{{ item.url_name }}</div>
                    <img v-else @click="urlEvent(item.url)" class="dialog-item-img" :src="item.url_img" alt="">
                    <div @click="urlEvent(item.url)" class="dialog-item-text">{{ item.url_name }}</div>
                    <div @click="urlEvent(item.url)" class="dialog-item-tip">{{ item.tip }}</div>
                </div>
                <div @click.stop v-if="isEdit" @click="addWebsite" class="dialog-item">
                    <img class="dialog-item-img" src="../../img/add.png" alt="">
                    <div class="dialog-item-text">添加网站</div>
                </div>
            </div>
        </div>

        <!-- 添加弹窗：文件夹 -->
        <el-dialog
            title=""
            :visible.sync="folderDia"
            width="40%">
            <el-form ref="form" :model="folderForm" label-width="80px">
                <el-form-item label-width="120px" label="文件夹名称">
                    <el-input v-model="folderForm.url_name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="saveFolderData" type="primary">确定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 添加弹窗：网址 -->
        <el-dialog
            title=""
            :visible.sync="websiteDia"
            width="40%">
            <el-form ref="form" :model="websiteForm" label-width="80px">
                <el-form-item label-width="180px" label="网站名称">
                    <el-input v-model="websiteForm.url_name"></el-input>
                </el-form-item>
                <el-form-item label-width="180px" label="网站地址">
                    <el-input v-model="websiteForm.url"></el-input>
                </el-form-item>
                <!-- <el-form-item label-width="180px" label="网站图片（选填）">
                    <el-input v-model="websiteForm.url_img"></el-input>
                </el-form-item> -->
                <el-form-item label-width="180px" label="网站说明（选填）">
                    <el-input v-model="websiteForm.tip"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="saveWebsiteData" type="primary">确定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import layout16 from '../../data/layout16'

export default {
  data() {
    return {
        isEdit: false, // 是否是编辑状态

        folderDia: false, // 添加文件夹
        folderForm: {},
        reviseFolderIndex: 0,
        diaFolderType: 'create',

        websiteDia: false, // 添加网址
        websiteForm: {},
        reviseWebsiteIndex: 0,
        diaWebsiteType: 'create',

        dialogVisible: false,
        layout: layout16,

        diaData: [] // 
    };
  },
  components: {},
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
          const layout16Str = localStorage.getItem("web3_layout16");
          if (!layout16Str) {
              this.layout = layout16;
              localStorage.setItem("web3_layout16", JSON.stringify(layout16));
          } else {
              this.layout = JSON.parse(layout16Str)
          }
      },
      
      //   ================= 文件夹操作 ================
      // 添加文件夹
      addFolder() {
          this.folderForm = {}
          this.folderDia = true;
      },
      // 保存文件夹内容
      saveFolderData() {
        if (this.diaFolderType == 'create') {
            this.layout.push({
                type: 'folder',
                url_name: this.folderForm.url_name,
                list: []
            })
            localStorage.setItem("web3_layout16", JSON.stringify(this.layout));
            this.folderDia = false;
        }
        if (this.diaFolderType == 'revise') {
            this.layout[this.reviseFolderIndex]['url_name'] = this.folderForm.url_name
            localStorage.setItem("web3_layout16", JSON.stringify(this.layout));
            this.folderDia = false;
        }
      },
      // 修改文件夹
      reviseFolderData(item, index) {
        this.folderForm = item;
        this.folderDia = true;
        this.reviseFolderIndex = index;
        this.diaFolderType = 'revise';
      },
      // 删除数据
      deleteFolderData(item, index) {
          this.$confirm('此操作将会删除文件夹, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              this.layout.splice(index, 1)
              localStorage.setItem("web3_layout16", JSON.stringify(this.layout));
          })
      },

      // ================= 文件夹内网站操作 ================
      // 添加文件夹
      addWebsite() {
          this.websiteForm = {}
          this.websiteDia = true;
      },
      // 保存网站内容
      saveWebsiteData() {
        if (this.diaWebsiteType == 'create') {
            this.diaData.list.push({
                url_img: this.websiteForm.url_img,
                url: this.websiteForm.url,
                url_name: this.websiteForm.url_name,
                tip: this.websiteForm.tip
            })
            localStorage.setItem("web3_layout16", JSON.stringify(this.layout));
            this.websiteDia = false;
        }
        if (this.diaWebsiteType == 'revise') {
            this.diaData.list[this.reviseIndex] = {
                url_img: this.websiteForm.url_img,
                url: this.websiteForm.url,
                url_name: this.websiteForm.url_name,
                tip: this.websiteForm.tip
            }            
            localStorage.setItem("web3_layout16", JSON.stringify(this.layout));
            this.websiteDia = false;
        }
      },
      // 修改网站
      reviseWebsiteData(item, index) {
        this.websiteForm = item;
        this.websiteDia = true;
        this.reviseWebsiteIndex = index;
        this.diaWebsiteType = 'revise';
      },
      // 删除网站
      deleteWebsiteData(item, index) {
          this.$confirm('此操作将会删除网站, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              this.diaData.list.splice(index, 1)
              localStorage.setItem("web3_layout16", JSON.stringify(this.layout));
          })
      },

      // ================= 其他 ================
      folderEvent(item) {
          this.dialogVisible = true;
          this.diaData = item;
      },
      urlEvent(url) {
          window.open(url)
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

.layout16 {
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
    min-height: 195px;
    background: rgba(255, 255, 255, .85);
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 25px;

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

// 弹窗
.dialog {
    width: auto;
    height: 100vh;
    background: rgba(255, 255, 255, 0.35);
    -webkit-backdrop-filter: blur(5px);    
    backdrop-filter: blur(40px);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    padding: 0px 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: appear .5s;

    .dialog-title {
        position: absolute;
        font-size: 24px;
        top: 30px;
        left: 30px;
        color: rgba(0, 0, 0, .45);
    }

    .dialog-list {
        min-width: 1620px;
        display: flex;
        flex-wrap: wrap;

        .dialog-item {
            width: 170px;
            height: 180px;
            font-size: 14px;
            cursor: pointer;
            margin-right: 60px;
            margin-bottom: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .item-no-img {
                width: 100px;
                min-height: 100px;
                padding: 0px 5px;
                border-radius: 10px;
                -webkit-user-drag: none;
                font-size: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f14e37;
                color: #fff;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }

            .edit-main {
                width: 170px;
                height: 180px;
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

            .dialog-item-img {
                width: 100px;
                height: 100px;
                border-radius: 15px;
                box-shadow: 2px 3px 25px -3px;
                -webkit-user-drag: none;
            }
            .dialog-item-text {
                width: 170px;
                text-align: center;
                margin-top: 15px;
                font-size: 16px;
            }
            .dialog-item-tip {
                width: 170px;
                text-align: center;
                margin-top: 10px;
                font-size: 12px;
                line-height: 24px;
                color: rgba(0, 0, 0, .6);
            }
        }
    }
}
@keyframes appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
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