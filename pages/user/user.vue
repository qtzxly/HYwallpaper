<template>
  <view class="userLayout pageBg" v-if="userInfo">
  <!-- <view class="userLayout pageBg" v-if="true"> -->
		<view :style="{height:getStatusBarHeight()+ 'px'}"></view>
    <view class="userInfo" >
      <view class="avatar">
        <image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
      </view>
      <view class="ip">{{userInfo.IP}}</view>
      <view class="address">来自：{{userInfo.address.city||userInfo.address.province||userInfo.address.country}}</view>
    </view>

    <view class="section">
      <view class="list">
        <navigator class="row" url="/pages/classlist/classlist?name=我的下载&type=download">
          <view class="left">
            <uni-icons type="download-filled" size="20"></uni-icons>
            <view class="text">我的下载</view>
          </view>
          <view class="right">
            <view class="text">{{userInfo.downloadSize}}</view>
            <uni-icons type="right" size="20" color="#aaa"></uni-icons>
          </view>
        </navigator>

        <navigator class="row" url="/pages/classlist/classlist?name=我的评分&type=score">
          <view class="left">
            <uni-icons type="star-filled" size="20"></uni-icons>
            <view class="text">我的评分</view>
          </view>
          <view class="right">
            <view class="text">{{userInfo.scoreSize}}</view>
            <uni-icons type="right" size="20" color="#aaa"></uni-icons>
          </view>
        </navigator>
      </view>
    </view>

    <view class="section">
      <view class="list">
        <navigator class="row" url="/pages/notice/detail">
          <view  class="left">
            <uni-icons type="notification-filled" size="20"></uni-icons>
            <view class="text">订阅更新</view>
          </view>
          <view class="right">
            <view class="text"></view>
            <uni-icons type="right" size="20" color="#aaa"></uni-icons>
          </view>
        </navigator>

        <!-- <view class="row">
          <view class="left">
            <uni-icons type="download-filled" size="20"></uni-icons>
            <view class="text">常见问题</view>
          </view>
          <view class="right">
            <view class="text"></view>
            <uni-icons type="right" size="20" color="#aaa"></uni-icons>
          </view>
        </view> -->

        <view class="row">
          <view class="left">
            <uni-icons type="phone-filled" size="20"></uni-icons>
            <view class="text">联系客服</view>
            <!-- #ifdef MP -->
            <button open-type="contact">小程序：联系客服</button>
            <!-- #endif -->
            <!-- #ifndef MP -->
            <button @click="clickContact">h5 APP：拨打电话</button>
            <!-- #endif -->
          </view>
          <view class="right">
            <view class="text"></view>
            <uni-icons type="right" size="20" color="#aaa"></uni-icons>
          </view>
        </view>
      </view>
    </view>
  </view>

	<view v-else  class="loadingLayout">
		<view style="height: 45vh"></view>
		<uni-load-more status="loading"></uni-load-more>
	</view>
</template>

<script setup>
import { ref } from "vue";
import {getStatusBarHeight,getTitleBarHeight,getLeftIconLeft} from "@/utils/system.js"
import {apiUserInfo} from '@/api/apis.js'

const userInfo = ref(null)

const getUserInfo = () =>{
	apiUserInfo().then(res=>{
		console.log(3333333,res);
		userInfo.value = res.data
	})
}
getUserInfo()

const clickContact = () => {
  uni.makePhoneCall({
    phoneNumber: '114'
  })
}
</script>

<style lang="scss" scoped>
.userLayout {
  :deep() {
    .uni-icons {
      color: $brand-theme-color !important;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50rpx 0;

    .avatar {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      overflow: hidden;

      image {
        height: 100%;
        width: 100%;
      }
    }

    .ip {
      font-size: 44rpx;
      color: #333;
      padding: 20rpx 0 5rpx;
    }

    .address {
      font-size: 28rpx;
      color: #aaa;
    }
  }

  .section {
    width: 690rpx;
    margin: 50rpx auto;
    border: 1px solid #eee;
    border-radius: 10rpx;
    box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

    .list {
      .row {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30rpx;
        height: 100rpx;
        border-bottom: 1px solid #eee;
        background: #fff;

        &:last-child {
          border-bottom: 0;
        }

        button {
          position: absolute;
          top: 0;
          left: 0;
          height: 100rpx;
          width: 100%;
          opacity: 0;
        }

        .left {
          display: flex;
          align-items: center;

          .text {
            padding-left: 20rpx;
            color: #666;
          }
        }

        .right {
          display: flex;
          align-items: center;

          .text {
            font-size: 28rpx;
            color: #aaa;
          }
        }
      }
    }
  }
}
</style>
