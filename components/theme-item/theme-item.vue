<template>
	<view class="themeItem">
		<navigator v-if="!isMore" url="/pages/classlist/classlist" class="box">
			<image class="pic" src="../../common/images/classify1.jpg" mode="aspectFill"></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>
		
		<!-- 跳转tabBar需要设置open-type -->
		<navigator v-if="isMore" url="/pages/classify/classify" open-type="reLaunch" class="box more">
			<image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
		
	</view>
</template>

<script setup>
   	defineProps({
			isMore:{
				type:Boolean,
				default:false
			}
		})
</script>

<style lang="scss">
	.themeItem{
		:deep(){
			.uni-icons{
				color: $brand-theme-color !important;
			}
		}
		.box{
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			.pic{
				width: 100%;
				height: 100%;
			}
			.mask{
				width: 100%;
				height: 70rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				background: rgba(0, 0,0, 0.2);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(20rpx);
				font-weight: 600;
			}
			.tab{
				position: absolute;
				left: 0;
				top: 0;
				background: rgba(250, 129, 90, 0.6);
				backdrop-filter: blur(15rpx);
				color: #fff;
				font-size: 22rpx;
				padding: 6rpx 14rpx;
				border-radius: 0 0 20rpx 0;
				transform: scale(0.8);
				transform-origin: left top;
			}
		}
		
		.box.more{
			.mask{
				height: 100%;
				width: 100%;
				flex-direction: column;
			}
			.text{
				font-size: 28rpx;
			}
		}
	}
</style>