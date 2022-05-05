// 接口交互层
import instance from './instance'

/**
 * 获取gas费用
 * @returns 
 * 实时GAS费价格：https://api.debank.com/chain/gas_price_dict_v2?chain=eth
 */
export function getGasNumber(gasType) {
  return new Promise(resovle => {
    instance.get(`https://api.debank.com/chain/gas_price_dict_v2?chain=${gasType}`).then(res => {
      resovle(res)
    })
  })
}

/**
 * 获取具体的币价格（美元&人民币）
 * @returns 
 * https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=cny,usd
 */
 export function getCurrencyPrice(currencyType) {
  return new Promise(resovle => {
    instance.get(`https://api.coingecko.com/api/v3/simple/price?ids=${currencyType}&vs_currencies=cny,usd`).then(res => {
      resovle(res)
    })
  })
}

/**
 * 搜索联想词
 * @returns 
 * https://suggestion.baidu.com/su?p=3&ie=UTF-8&cb=&wd=
 */
 export function getSearchList(searchStr) {
  return new Promise(resovle => {
    instance.get(`https://suggestion.baidu.com/su?p=3&ie=UTF-8&cb=&wd=${searchStr}`).then(res => {
      resovle(res)
    })
  })
}


