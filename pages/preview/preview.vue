<template>
	<view class="preview">
		<swiper circular=""> 
			<swiper-item v-for="item in 4">
				<image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view v-show="maskState" class="mask">
			<view class="goBack" :style="{top:getStstusBarHeight() + 'px'}"
			@click="goBack"> 
				<uni-icons type="back" size="20" color="#eee"></uni-icons>
			</view>
			<view class="count">3 / 9</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm" />
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日" />
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="23"></uni-icons>
					<view class="text">信息</view>
				</view>
				
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="23"></uni-icons>
					<view class="text">5分</view>
				</view>
				
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view ></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				
				<scroll-view scroll-y="true" >
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text class="value" selectable="true" user-select="true">1231321</text>
						</view>
						
						<view class="row">
							<view class="label">分类：</view>
							<text class="value theme" selectable="true" user-select="true">明星</text>
						</view>
						
						<view class="row">
							<view class="label">发布者：</view>
							<text class="value" selectable="true" user-select="true">浩阳</text>
						</view>
						
						<view class="row">
							<view class="label">评分：</view>
							<view class="value roteBox">
								<uni-rate readonly touchable  value="3" size="16" />
								<text class="score" >3分</text>
							</view>
							
						</view>
						
						<view class="row">
							<view class="label">摘要：</view>
							<text class="value" selectable="true" user-select="true">摘要文字填充部分  摘要文字填充部分  摘要文字填充部分  摘要文字填充部分</text>
						</view>
						
						<view class="row">
							<view class="label">标签：</view>
							<view class="value tabs">
								<view class="tab" v-for="item in 3">标签名</view>
							</view>
						</view>
						
						<view class="copyright">
							声明：本图片来源于用户投稿，非商业使用，用于免费学习交流，如果侵犯了您的权益，您可以拷贝壁纸ID，并举报至邮箱：354369716@qq.com ，管理将删除对应壁纸，维护您的权益。
						</view>
						
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<view ></view>
					<view class="title">壁纸评分</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				
				<view class="content">
					<uni-rate v-model="userScore" allow-half></uni-rate>
					<text class="text">{{userScore}}分</text>
				</view>
				
				<view class="footer">
					<button 
					:disabled="!userScore" type="default" size="mini" plain @click="submitScore">
					确认评分</button>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import { ref } from "vue";
	import {getStstusBarHeight} from '@/utils/system.js'
	console.log('getStstusBarHeight',getStstusBarHeight());	
	
	const userScore = ref(0)
	
	const goBack=()=>{
		uni.navigateBack()
	}

	// 遮罩
	const maskState = ref(true)
	const maskChange = () => {
		maskState.value = !maskState.value
	}
	
	// 评分弹窗
	const scorePopup= ref(null)
	const	clickScore = ()=>{
		scorePopup.value.open()
	}
	const clickScoreClose=()=>{
		scorePopup.value.close()
	}
	const submitScore=()=>{
		console.log(1231);
	}
	
	// 操作infoPopup
	const infoPopup = ref(null);
	const clickInfo =()=>{
		infoPopup.value.open()
	}
	const clickInfoClose=() => {
		infoPopup.value.close()
	}
</script>

<style lang="scss" scoped>
.preview{
	position: relative;
	height: 100vh;
	width: 100%;
	swiper{
		height: 100%;
		width: 100%;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.mask{
		&>view{
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			width: fit-content;
			color: #FFF;
		}
		.goBack{
			width: 38px;
			height: 38px;
			background: rgba(0, 0, 0, 0.5);
			left: 30rpx;
			margin-left: 0;
			border-radius: 100px;
			top: 0;
			backdrop-filter: blur(10rpx);
			border: 1rpx solid rgba(255, 255, 255, 0.3);
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.count{
			top: 10vh;
			background: rgba(0,0,0,0.3);
			backdrop-filter: blur(10rpx);
			// background: red;
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx ;
		}
		.time{
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0,0,0,0.3);
			
		}
		.date{
			font-size: 34rpx;
			top: calc(10vh + 240rpx);
			text-shadow: 0 2rpx rgba(0,0,0,0.3);
		}
		.footer{
			bottom: 10vh;
			width: 66vw;
			height: 120rpx;
			
			color: #000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			
			.box{
				background: rgba(255, 255, 255, 0.5);
				box-shadow: 0 2rpx 0 rgba(0,0,0,0.1);
				backdrop-filter: blur(20rpx);
				border-radius: 150rpx;
				
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 15rpx 30rpx;
				.text{
					padding-top: 5rpx;
					font-size: 26rpx;
					color: #333;
				}
			}
		}
	}

	.popHeader{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title{
			color: #555;
			font-size: 32rpx;
		}
		.close{
			padding: 6rpx;
		}
	}
	
	.infoPopup{
		
		background: rgba(255, 255, 255, 0.8);
		// box-shadow: 0 2rpx 0 rgba(0,0,0,0.1);
		backdrop-filter: blur(20rpx);
		// background: #eee;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		
		scroll-view{
			max-height: 60vh;
			.content{
				.row{
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7em;
					.label{
						color: #666;
						width: 140rpx;
						text-align: left;
						font-size: 30rpx;
					}
					.value{
						flex: 1;
						width: 0;
					}
					.theme{
						color: $brand-theme-color;
					}
					.roteBox{
						display: flex;
						align-items: center;
						.score{
							font-size: 26rpx;
							padding-left: 10rpx;
							color: #666;
						}
					}
					.tabs{
						display: flex;
						flex-wrap: wrap;
						.tab{
							border: 1px solid $brand-theme-color;
							font-size: 22rpx;
							padding: 10rpx 30rpx;
							border-radius: 40rpx;
							line-height: 1em;
							margin: 0 10rpx 10rpx 0;
						}
					}
				}
				.copyright{
					font-size: 26rpx;
					padding: 20rpx;
					background: #ddd;
					color: #666;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.5em;
				}
			}
		}
	}

	.scorePopup{
		// background: #ddd;
		// background: rgba(222, 222, 222, 0.95);
		background: rgb(222, 222, 222);
		box-shadow: 0 2rpx 0 rgba(0,0,0,0.1);
		// backdrop-filter: blur(20rpx);
		
		padding: 30rpx;
		width: 70vw;
		border-radius: 30rpx;
		.content{
			padding: 30rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.text{
				color: #ffca3e;
				padding-left: 10rpx;
				width: 80rpx;
				line-height: 1em;
				text-align: right;
			}
		}
		.footer{
			padding: 10rpx 0;
			display: flex;
			align-items: center;
		}
	}
}
</style>
