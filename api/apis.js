import { request } from "@/utils/request.js"

export function apiGetBanner() {
	return request({
		url:"/homeBanner",
		// method:"POST",
	})
}

export function apiGetDayRandom() {
	return request({
		url:"/randomWall",
	})
}

// 公告
export function apiNoticeList(data={}) {
	return request({
		url:"/wallNewsList",
		data
	})
}
// data:{
// 	select:true, // 重要公告
// 	pageSize:3  // 多少条
// }

export function apiGetClassify(data={}) {
	return request({
		url:"/classify",
		data
	})
}

export function apiGetClassList(data={}) {
	return request({
		url:"/wallList",
		data
	})
}

export function apiGetSetupScore(data={}) {
	return request({
		url:"/setupScore",
		data
	})
}

export function apiWriteDownload(data={}) {
	return request({
		url:"/downloadWall",
		data
	})
}

export function apiDetailWall(data={}) {
	return request({
		url:"/detailWall",
		data
	})
}

export function apiUserInfo(data={}) {
	return request({
		url:"/userInfo",
		data
	})
}



export function apiGetHistoryList(data={}) {
	return request({
		url:"/userWallList",
		data
	})
}


export function apiSearchData(data={}) {
	return request({
		url:"/searchWall",
		data
	})
}
