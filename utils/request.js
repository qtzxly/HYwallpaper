let BASE_URL = 'https://tea.qingnian8.com/api/bizhi'

export function request(config = {}) {
  let { url, data={}, method = 'GET', header = {} } = config

  url = BASE_URL + url
  // header['access-key'] = 'haoyangbizhi'
  // header['token'] = "xxx"

  return new Promise((resolve, reject) => {
    uni.request({
      url,
			data,
      method,
      header,
      success: res => {
      	if (res.data.errCode === 0) {
      		resolve(res.data)
      	} else if (res.data.errCode === 400) {
					uni.showModal({
						title: 'ERROR',
						content: res.data.errMsg,
						showCancel:false
					})
      		
      		reject(res.data)
      	} else {
      		uni.showToast({
      			title: res.data.errMsg,
      			icon: "error"
      		})
      		reject(res.data)
      	}
      },
      fail: err => {
      	reject(err)
      }
    })
  })
}
