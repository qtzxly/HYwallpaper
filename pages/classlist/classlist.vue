<template>
	<view class="classlist">
		<view class="loadingLayout" v-if="!classList.length && !noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		
		<view class="content">
			<navigator :url="'/pages/preview/preview?id='+item._id" class="item" v-for="item in classList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<view class="loadingLayout" v-if="classList.length || noData">
			<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
		</view>
		
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
	import { ref } from "vue";
	import { onLoad, onReachBottom } from "@dcloudio/uni-app"
	import {apiGetClassList} from "@/api/apis.js"
	
	const queryParams = {
		pageNum:1,
		pageSize:12
	}
	const classList = ref([])
	const noData = ref(false)
	
	onLoad((e)=> {
		console.log(e);	
		let {id=null,name=null} = e
		queryParams.classid = id
		uni.setNavigationBarTitle({
			title:name
		})
		// 拿到id之后,才能请求列表数据
		getClassList()
	})
	
	onReachBottom(()=>{
		if(noData.value) return
		queryParams.pageNum++
		console.log(123123);
		getClassList()
	})
	
	const getClassList = async()=> {
		let res = await apiGetClassList(queryParams)
		classList.value = [...classList.value, ...res.data]
		if(queryParams.pageSize> res.data.length) {
			noData.value = true
		}
		uni.setStorageSync('storgClassList',classList.value)
	}
	
</script>

<style lang="scss" scoped>
.classlist{
	.content{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rpx;
		padding: 10rpx;
		.item{
			height: 440rpx;
			image{
				height: 100%;
				width: 100%;
				display: block;
			}
		}
	}
}
</style>
