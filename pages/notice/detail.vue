<template>
	<view class="noticeLayout">
		<view class="title">
			<view class="tag">
				<uni-tag text="置顶" inverted type="error"></uni-tag>
			</view>
			<view class="font">欢迎关注浩阳说</view>
		</view>
		
		<view class="info">
			<view class="item">浩阳说</view>
			<view class="item">
				<uni-dateformat :date="Date.now()" format="yyyy-MM-dd hh:mm:ss" />
			</view>
		</view>
		
		<view class="content">
			<text class="text">扫码关注“浩阳说”公众号</text>
			<text class="text">分享最新动态</text>
			<image class="pic" src="/common/images/weixin.jpg" mode="aspectFill"></image>
			
			<text class="text">欢迎投稿到邮箱：</text>
			<text class="text">354369716@qq.com</text>
		</view>
		
		<view class="count">
			阅读 3896
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.noticeLayout{
	padding: 30rpx;
	.title{
		font-size: 30rpx;
		color: #111;
		line-height: 1.6em;
		padding-bottom: 30rpx;
		display: flex;
		.tag{
			transform: scale(0.8);
			transform-origin: left center;
			flex-shrink: 0;
		}
		.font{
			padding-left: 6rpx;
		}
	}
	.info{
		display: flex;
		align-items: center;
		color: #999;
		font-size:  28rpx;
		.item{
			padding-right: 20rpx;
		}
	}
	.content{
		padding: 50rpx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		.pic{
			height:320px;
			width: 320px;
		}
		.text{
			display: block;
			font-size: 38rpx;
			line-height: 1.8em;
		}
	}
	.count{
		color: #999;
		font-size: 28rpx;
	}
}
</style>
