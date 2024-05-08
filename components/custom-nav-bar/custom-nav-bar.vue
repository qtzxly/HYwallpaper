<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight() + 'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight() + 'px', marginLeft:getLeftIconLeft()+'px'}">
				<view class="title">{{title}}</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		
		<view class="fill" :style="{height:getStatusBarHeight()+getTitleBarHeight() + 'px'}"></view>
	</view>
</template>

<script setup>
	import {getStatusBarHeight,getTitleBarHeight,getLeftIconLeft} from "@/utils/system.js"
	
	defineProps({
		title:{
			type:String,
			default:'壁纸'
		}
	})
	
	
</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		
		// 此处要和整体背景保持一致
		background:
		linear-gradient(to bottom, rgba(0,0,0,0), #fff 500rpx),
		linear-gradient(to right, #f4e2d8 20%, #beecb8);
		.statusBar{
			// border: 1px solid red;
		}
		.titleBar{
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			// border: 1px solid green;
			.title{
				font-size: 22px;
				font-weight: 700;
				color: #000;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					margin-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
					
				}
			}
		}
	}
	.fill{}
}
</style>