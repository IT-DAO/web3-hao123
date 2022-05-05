<template>
    <div class="gas">
        <div class="gas-list">
            <!-- 高速 -->
            <div class="gas-item blue-gas">
                <div class="gas-item-title">高速</div>
                <div class="gas-item-number">{{ (gasData.data.fast.price / 1000000000) || '加载中...' }}</div>
                <div class="gas-item-time">15秒</div>
                <div v-if="!ethereum.usd" class="gas-item-money">$--</div>
                <div v-else class="gas-item-money">${{ (ethereum.usd * (gasData.data.fast.price / 1000000000) / 10000 / 4.762).toFixed(2) }}</div>
            </div>
            <div class="gas-item green-gas">
                <div class="gas-item-title">标准</div>
                <div class="gas-item-number">{{ (gasData.data.normal.price / 1000000000) || '加载中...' }}</div>
                <div class="gas-item-time">1分钟</div>
                <div v-if="!ethereum.usd" class="gas-item-money">$--</div>
                <div v-else class="gas-item-money">${{ (ethereum.usd * (gasData.data.normal.price / 1000000000) / 10000 / 4.762).toFixed(2) }}</div>
            </div>
            <div class="gas-item orange-gas">
                <div class="gas-item-title">缓慢</div>
                <div class="gas-item-number">{{ (gasData.data.slow.price / 1000000000) || '加载中...' }}</div>
                <div class="gas-item-time">3分钟</div>
                <div v-if="!ethereum.usd" class="gas-item-money">$--</div>
                <div v-else class="gas-item-money">${{ (ethereum.usd * (gasData.data.slow.price / 1000000000) / 10000 / 4.762).toFixed(2) }}</div>
            </div>
        </div>
        <!-- 选择 -->
        <div class="gas-select">
            <div class="gas-select-title">ETH Gas费</div>
            <div class="gas-select-second">{{ second }}s</div>
            <div class="price-text">🇺🇸 {{ ethereum.usd || '未翻墙' }}</div>
            <div class="price-text">🇨🇳 {{ ethereum.cny || '未翻墙' }}</div>
        </div>
    </div>
</template>

<script>
import { getGasNumber, getCurrencyPrice } from '../../api/index'

export default {
    data() {
        return {

            ethereum: {},
            gasData: {
                data: {
                    fast: {},
                    normal: {},
                    slow: {}
                }
            },

            options: [
                {
                    value: 'eth',
                    label: 'eth'
                }
            ],
            value: '',

            second: 15,
            
            percentage: 10,
            gasType: 'eth', // gas类型
            currencyType: 'ethereum' // 货币类型
        }
    },
    created() {
        this.getCurrencyPriceApi()
        this.getGasApi();
        this.init();
        setInterval(() => {
            this.second = this.second - 1;
        }, 1000);
    },
    methods: {
        init() {
            setInterval(() => {
                this.second = 15;
                this.getCurrencyPriceApi();
                this.getGasApi();
            }, 15000);
        },
        // 获取gas费用
        async getGasApi() {
            let res = await getGasNumber(this.gasType)
            this.gasData = res.data;
            console.log('获取gas费用', res.data)
        },
        // 获取具体币价格
        async getCurrencyPriceApi() {
            let res = await getCurrencyPrice(this.currencyType)
            this.ethereum = res.data.ethereum;
            console.log('获取具体币价格', res.data)
        }
    }
}
</script>

<style lang="less" scoped>
/*
---
rootSize: 163.2,
noTransformFlag:-no-,
toFixed:6
---
*/
.gas {
    display: flex;
    justify-content: space-between;

    .gas-select {
        width: 120px;
        height: 110px;
        font-size: 14px;
        
        .gas-select-title {
            width: 120px;
            text-align: center;
            margin-top: 15px;
            margin-bottom: 20px;
        }

        .gas-select-second {
            font-size: 16px;
            font-weight: 600;
            width: 120px;
            text-align: center;
            margin-bottom: 20px;
        }

        .price-text {
            width: 95px;
            font-size: 14px;
            font-weight: 600;
            // text-align: right;
            color: #42b983;
            margin-bottom: 5px;
            padding-left: 25px;
            margin-bottom: 5px;
        }
    }

    .gas-list {
        width: 340px;
        display: flex;
        justify-content: space-between;

        .gas-item {
            width: 102px;
            height: 120px;
            font-size: 14px;

            .gas-item-title {
                width: 102px;
                height: 20px;
                text-align: center;
                color: hsla(0,0%,100%,.7);
                margin-top: 10px;
                margin-left: -4px;
            }
            .gas-item-number {
                width: 60px;
                height: 30px;
                background: rgba(0,0,0, .2);
                border-radius: 8px;
                color: #fff;
                font-weight: 600;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
                margin-left: 17px;
            }
            .gas-item-time {
                width: 102px;
                text-align: center;
                color: #fff;
                font-size: 12px;
                margin-bottom: 10px;
                margin-left: -4px;
            }
            .gas-item-money {
                width: 102px;
                text-align: center;
                font-size: 12px;
                margin-left: -4px;
                color: rgba(0, 0, 0, 0.4);
            }
        }

        .blue-gas {
            background: url('./img/blue-gas.png');
            background-size: 100% 100%;
        }
        .green-gas {
            background: url('./img/green-gas.png');
            background-size: 100% 100%;
        }
        .orange-gas {
            background: url('./img/orange-gas.png');
            background-size: 100% 100%;
        }
    }
}
</style>
