
// 手机状态栏
const SYSTEM_INFO = uni.getSystemInfoSync()
export const getStstusBarHeight = ()=> SYSTEM_INFO.statusBarHeight || 15

// 小程序右侧胶囊按钮
export const getTitleBarHeight= () => {
	if(uni.getMenuButtonBoundingClientRect){
		// top:按钮到屏幕顶部,height:按钮高度
		let {top, height} = uni.getMenuButtonBoundingClientRect()
		// div的高 = 按钮高 + 按钮上下两个边距
		return height + (top - getStstusBarHeight()) * 2
	} else {
		return 40 
	}
}

// 抖音左侧图标
export const getLeftIconLeft =() => {
	// if (tt.getCustomButtonBoundingClientRect){
	// 	let {leftIcon:{left,width}} = tt.getCustomButtonBoundingClientRect()
	// 	return left + parseInt(width) 
	// }else{
	// 	return 0
	// }
	
	// #ifdef MP-TOUTIAO
			let {leftIcon:{left,width}} = tt.getCustomButtonBoundingClientRect()
			return left + parseInt(width) 
	// #endif
	
	// #ifndef MP-TOUTIAO
			return 0
	// #endif
}
