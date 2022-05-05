// NFT工具（20x）
const nft = [
    { x: 0, y: 0, w: 1, h: 2, i: "200", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220205/1644037318474094.png',
        url: 'https://icy.tools/',
        url_name: 'NFT趋势'
    },
    { x: 1, y: 0, w: 1, h: 2, i: "201", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643896674769039.png',
        url: 'https://nftgo.io/',
        url_name: 'NFTGO数据聚合平台'
    },
    { x: 2, y: 0, w: 1, h: 2, i: "202", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220205/1644038835852384.png',
        url: 'https://nftgo.io/whale-tracking/trade',
        url_name: '巨鲸跟踪'
    },
    { x: 3, y: 0, w: 1, h: 2, i: "203", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220208/1644328397847935.png',
        url: 'https://dappradar.com/nft',
        url_name: 'Dappradar'
    },
    { x: 4, y: 0, w: 1, h: 2, i: "204", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220401/1648801789803764.png',
        url: 'https://context.app/feed/collectors',
        url_name: 'NFT数据追踪'
    },
    { x: 5, y: 0, w: 1, h: 2, i: "205", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220208/1644332944319795.png',
        url: 'https://opensea.io/',
        url_name: 'Opensea'
    },
    { x: 6, y: 0, w: 1, h: 2, i: "206", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220208/1644327009822167.png',
        url: 'https://shucang.cn/#/home',
        url_name: '数藏中国'
    },
    { x: 7, y: 0, w: 1, h: 2, i: "207", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220208/1644305936782416.png',
        url: 'https://double.one/',
        url_name: 'NFT租赁'
    },
    { x: 8, y: 0, w: 1, h: 2, i: "208", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220208/1644305789669677.png',
        url: 'https://pine.loans/',
        url_name: 'NFT抵押借贷'
    },
    { x: 9, y: 0, w: 1, h: 2, i: "209", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220205/1644039006687941.png',
        url: 'https://icodrops.com/',
        url_name: 'ICO预告'
    },
    { x: 10, y: 0, w: 1, h: 2, i: "210", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220205/1644037261702357.png',
        url: 'https://context.app/lists/collectors',
        url_name: 'NFT追踪'
    },
    { x: 11, y: 0, w: 1, h: 2, i: "211", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643899830614075.png',
        url: 'https://mintyscore.com/rankings/projects?sort=minty_score&type=upcoming&order=desc&chain=all&name=',
        url_name: '新项目热度排名'
    },
    { x: 12, y: 0, w: 1, h: 2, i: "212", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643897555791203.jpg',
        url: 'https://www.nftscan.com/',
        url_name: 'NFTSCAN'
    },
    { x: 13, y: 0, w: 1, h: 2, i: "213", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643897469961433.png',
        url: 'https://whatsminting.live/',
        url_name: 'NFT实时mint的情况'
    },
    { x: 14, y: 0, w: 1, h: 2, i: "214", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643897276889793.png',
        url: 'https://nftnerds.ai/trending',
        url_name: 'NFT物品罕见度查询'
    }
]

// 科学家工具（10x）
const scientistTools = [
    // DEX筛选器
    { x: 0, y: 1, w: 1, h: 2, i: "100", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220205/1644039189570555.png',
        url: 'https://dexscreener.com/bsc/pancakeswap',
        url_name: 'DEX筛选器'
    },
    // 钱包监控
    { x: 1, y: 1, w: 1, h: 2, i: "101", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220208/1644289410267198.png',
        url: 'https://debank.com/',
        url_name: '钱包监控'
    },
    // 
    { x: 2, y: 1, w: 1, h: 2, i: "102", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220204/1643957815250843.png',
        url: 'https://avedex.cc/check',
        url_name: '貔貅筛查'
    },
    // 
    { x: 3, y: 1, w: 1, h: 2, i: "103", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220127/1643287796813079.png',
        url: 'https://mycointool.com/GasNow',
        url_name: '实时GAS费'
    },
    // 
    { x: 4, y: 1, w: 1, h: 2, i: "104", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643893958983769.png',
        url: 'https://tokentool.app/robotTrade/grabPreSale',
        url_name: '抢币神器'
    },
    // 
    { x: 5, y: 1, w: 1, h: 2, i: "105", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220205/1644037556666611.png',
        url: 'https://tokentool.app/oneToMore/eth',
        url_name: '批量转账'
    },
    // 
    { x: 6, y: 1, w: 1, h: 2, i: "106", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220315/1647336190192346.png',
        url: 'https://disperse.app/?continueFlag=84553ec2525040264a3b212e746e2692',
        url_name: 'Disperse'
    },
    // 
    { x: 7, y: 1, w: 1, h: 2, i: "107", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220315/1647336112832273.png',
        url: 'https://bip39.onekey.so/',
        url_name: '助记词转换器'
    },
    // 
    { x: 8, y: 1, w: 1, h: 2, i: "108", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220210/1644424764138586.png',
        url: 'https://apesafe.io/',
        url_name: 'ApeSafe'
    },
    // 
    { x: 9, y: 1, w: 1, h: 2, i: "109", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220209/1644389934771626.png',
        url: 'https://github.com/MycoinTool/revinest',
        url_name: '自动复投脚本'
    },
    // 
    { x: 10, y: 1, w: 1, h: 2, i: "110", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220205/1644038180992613.png',
        url: 'http://139.129.119.86:8080/',
        url_name: '币种持仓分析'
    },
    // 
    { x: 11, y: 1, w: 1, h: 2, i: "111", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643894498292170.png',
        url: 'https://tokentool.app/game/armzlegends',
        url_name: '链游助手'
    },
    // 
    { x: 12, y: 1, w: 1, h: 2, i: "112", 
        url_img: 'https://tool.imtoken.xyz/static/upload/image/20220203/1643898400351436.png',
        url: 'https://tornado.cash/',
        url_name: '混币工具'
    }
]



export default [
    
    ...scientistTools, // 科学家工具
    ...nft, // NFT工具

    // 推特
    { x: 0, y: 1, w: 1, h: 2, i: "2", 
        url_img: 'https://itdao.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd4b32951-17f4-4a32-9dc3-c1df2d13f339%2Funnamed.png?table=block&id=126c968e-dc2d-4625-900d-c66a4574fe76&spaceId=82c5fe96-fe54-4aca-9435-50ba864b1423&width=480&userId=&cache=v2',
        url: 'https://twitter.com/home',
        url_name: '推特'
    },
]