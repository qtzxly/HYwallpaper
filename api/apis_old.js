export function apiGetBanner() {
	return uni.request({
		url:"https://tea.qingnian8.com/api/bizhi/homeBanner",
		header:{
			// "access-key":""
		}
	})
}

export function apiGetDayRandom() {
	return uni.request({
		url:"https://tea.qingnian8.com/api/bizhi/randomWall",
		header:{
			// "access-key":""
		}
	})
}

export function apiNoticeList() {
	return uni.request({
		url:"https://tea.qingnian8.com/api/bizhi/wallNewsList",
		header:{
			// "access-key":""
		},
		// data:{
		// 	select:true, // 公告
		// 	pageSize:3  // 多少条
		// }
	})
}