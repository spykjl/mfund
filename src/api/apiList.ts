import { get, post } from './http'

/**
 * 关键字查找基金
 * @param fundCode 基金关键词
 */
export function searchFund(fundCode: string) {
    return get(`/FundSearch/api/FundSearchAPI.ashx?&m=1&key=${fundCode}&_=${new Date().getTime()}`)
}

/**
 * 获取基金列表
 * @param fundCode 基金关键词
 */
export function getFunds() {
    return get(`/js/fundcode_search.js`)
}

/**
 * 查询基金数据
 * @param fundCode 基金编码
 */
export function getFundData(fundCode: string) {
    return get(`/js/${fundCode}.js?rt=1463558676006`)
}

/**
 * 查询基金数据
 * @param fundCode 基金编码
 */
export function getFundDatas(fundlist: [], deviceid: string) {
    return get(`https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=200&plat=Android&appType=ttjj&product=EFund&Version=1&&Fcodes=${fundlist}&deviceid=${deviceid}`)
}

/**
 * 基金版本资金情况柱状图数据
 */
export function getMarketBar() {
    return get(`http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=500&po=1&np=1&fields=f12,f13,f14,f62&fid=f62&fs=m:90+t:2&_=${new Date().getTime()}`)
}

/**
 * 沪申资金流向柱状图数据
 */
export function getMarketLine() {
    return get(`http://push2.eastmoney.com/api/qt/stock/fflow/kline/get?lmt=0&klt=1&secid=1.000001&secid2=0.399001&fields1=f1,f2,f3,f7&fields2=f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63&_=${new Date().getTime()}`)
}

/**
 * 获取指数图表数据
 * @param code 指数编码
 */
export function getIndexChart(code: string) {
    return get(`https://push2.eastmoney.com/api/qt/stock/trends2/get?secid=${code}&fields1=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13&fields2=f51,f53,f56,f58&iscr=0&iscca=0&ndays=1&forcect=1`)
}

/**
 * 获取基金净值图表
 * @param fundcode 基金代码
 * @param sltTimeRange 图标取值区间
 */
export function getFundDetailChart(fundcode: string, sltTimeRange: string) {
    return get(`/FundMApi/FundYieldDiagramNew.ashx?FCODE=${fundcode
        }&RANGE=${sltTimeRange
        }&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&_=${new Date().getTime()}`)
}

/**
 * 获取累计收益图表数据
 * @param fundcode 基金代码
 * @param sltTimeRange 数据时间段
 */
export function getFundProfit(fundcode: string, sltTimeRange: string) {
    return get(`/FundMApi/FundNetDiagram.ashx?FCODE=${fundcode
        }&RANGE=${sltTimeRange
        }&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&_=${new Date().getTime()}`)
}

/**
 * 获取基金估值图数据
 * @param fundcode 基金代码
 */
export function getFundReckonChart(fundcode: string) {
    return get(`/FundMApi/FundVarietieValuationDetail.ashx?FCODE=${fundcode
        }&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&_=${new Date().getTime()}`)
}

/**
 * 获取基金持仓明细
 * @param fundcode 基金代码
 */
export function getPositionDetail(fundcode: string) {
    return get(`https://fundmobapi.eastmoney.com/FundMNewApi/FundMNInverstPosition?FCODE=${fundcode
        }&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&Uid=&_=${new Date().getTime()}`)
}


/**
 * 获取股票详情
 * @param gpList 股票代码字符串
 */
export function getStockData(gpList: string) {
    return get(`https://push2.eastmoney.com/api/qt/ulist.np/get?fields=f1,f2,f3,f4,f12,f13,f14,f292&fltt=2&secids=${gpList}&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&Uid=`)
}

/**
 * 获取基金信息
 * @param fundcode 基金代码
 */
export function getFundInfo(fundcode: string) {
    return get(`/FundMApi/FundBaseTypeInformation.ashx?FCODE=${fundcode
        }&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&Uid=&_=${new Date().getTime()}`)
}

// /**
//  * 获取云图数据
//  */
// export function getCloudData() {
//     return get(`https://sslapi.jrj.com.cn/zxhq/sapi/plat/query_simple_info`)
// }

//板块数据
export function getCloudClass() {
    return get(`http://www.z3quant.com/openapi/openjson/tx/.json?${new Date().getTime()}`)
}

//板块行情
//http://www.z3quant.com/openapi/timedQueryMap.shtml?isContinue=1&condition=mkt_idx.cur_chng_pct&&${new Date().getTime()} 实时
//http://www.z3quant.com/openapi/timedQueryMap.shtml?isContinue=1&condition=mkt_idx.chng_pct_week&1610526156402 周
//http://www.z3quant.com/openapi/timedQueryMap.shtml?isContinue=1&condition=perf_idx.chng_pct_month&1610526210436 月
//http://www.z3quant.com/openapi/timedQueryMap.shtml?isContinue=1&condition=perf_idx.chng_pct_year&1610526255052 年
//http://www.z3quant.com/openapi/timedQueryMap.shtml?isContinue=1&condition=mkt_idx.pe_ttm&1610526272463 pe
export function getCloudData(tapMode: string) {
    let condition = 'mkt_idx.cur_chng_pct';
    switch (tapMode) {
        case 'week':
            condition = 'mkt_idx.chng_pct_week'
            break;
        case 'month':
            condition = 'perf_idx.chng_pct_month'
            break;
        case 'year':
            condition = 'perf_idx.chng_pct_year'
            break;
        case 'pe':
            condition = 'mkt_idx.pe_ttm'
            break;
    }
    return get(`http://www.z3quant.com/openapi/timedQueryMap.shtml?isContinue=1&condition=${condition}&${new Date().getTime()}`)
}