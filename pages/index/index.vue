<template>
  <view class="homeLayout pageBg">
    <custom-nav-bar title="推荐"></custom-nav-bar>

    <view class="banner">
      <swiper
        indicator-dots
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#FFF"
        autoplay
        circular
      >
        <swiper-item v-for="item in bannerList" :key="item._id">
					<navigator v-if="item.target=='miniProgram'" 
					:app-id='item.appid'
					:url="item.url" class="like" target="miniProgram">
						<image :src="item.picurl" mode="aspectFill"></image>
					</navigator>
					
					<navigator v-else  :url="`/pages/classlist/classlist?${item.url}`" class="like">
						<image :src="item.picurl" mode="aspectFill"></image>
					</navigator>
        </swiper-item>
      </swiper>
    </view>

    <view class="notice">
      <view class="left">
        <uni-icons type="sound-filled" size="20"></uni-icons>
        <text class="text">公告</text>
      </view>
      <view class="center">
        <swiper vertical autoplay interval="3000" duration="600" circular>
          <swiper-item>
            <navigator url="/pages/notice/detail"
              >欢迎关注“浩阳说”公众号</navigator
            >
          </swiper-item>
          <swiper-item>
            <navigator url="/pages/notice/detail"
              >欢迎投稿至:354369716@qq.com</navigator
            >
          </swiper-item>
        </swiper>
      </view>
      <view class="right">
        <uni-icons type="right" size="16"></uni-icons>
      </view>
    </view>

    <view class="select">
      <common-title>
        <template #name>每日推荐</template>
        <template #custom>
          <view class="date">
            <uni-icons type="calendar" size="18"></uni-icons>
            <view class="text">
              <uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
            </view>
          </view>
        </template>
      </common-title>

      <view class="content">
        <scroll-view scroll-x="">
          <view
            class="box"
            v-for="item in randomList"
            :key="item._id"
            @click="goPreview(item._id)"
          >
            <image :src="item.smallPicurl" mode="aspectFill"> </image>
          </view>
        </scroll-view>
      </view>
    </view>

    <view class="theme">
      <common-title>
        <template #name>专题精选</template>
        <template #custom>
          <navigator url="/pages/classify/classify" open-type="reLaunch" class="more">More+</navigator>
        </template>
      </common-title>

      <view class="content">
        <theme-item
          v-for="item in classifyList"
          :key="item._id"
          :item="item"
        ></theme-item>
        <theme-item :isMore="true"></theme-item>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
// 分享
onShareAppMessage((e) => {
  return {
    title: '浩阳壁纸,好看的壁纸',
    path: '/pages/index/index'
  }
})
onShareTimeline((e) => {
  return {
    title: '浩阳壁纸,好看的壁纸'
    // imageUrl:bannerList.value[0].picurl
  }
})

import {
  apiGetBanner,
  apiGetDayRandom,
  apiNoticeList,
  apiGetClassify
} from '@/api/apis.js'

const goPreview = (id) => {
	uni.setStorageSync('storgClassList', randomList.value)
  uni.navigateTo({
    url: '/pages/preview/preview?id='+id
  })
}

const bannerList = ref([])
const randomList = ref([])
const classifyList = ref([])

const getBanner = async () => {
  let res = await apiGetBanner()
  // console.log(res);
  bannerList.value = res.data
}
getBanner()

const getDayRandom = async () => {
  let res = await apiGetDayRandom()
  // console.log(res);
  randomList.value = res.data
}
getDayRandom()

const getClassify = async () => {
  let res = await apiGetClassify({ select: true })
  // console.log(res);
  classifyList.value = res.data
}
getClassify()

// 获取通知栏
const noticeList = ref([])
const getNotice = async () => {
  let res = await apiNoticeList({
    pageSize: 5
  })
  // console.log(res);
  noticeList.value = res.data
}
getNotice()
</script>

<style lang="scss">
.homeLayout {
  :deep() {
    .uni-icons {
      color: $brand-theme-color !important;
    }
  }

  .banner {
    width: 750rpx;
    padding: 30rpx 0;

    swiper {
      width: 750rpx;
      height: 340rpx;

      &-item {
        width: 100%;
        height: 100%;
        padding: 0 30rpx;
				.like{
					height: 100%;
					width: 100%;
					image {
					  width: 100%;
					  height: 100%;
					  border-radius: 20rpx;
					}
				}

        
      }
    }
  }

  .notice {
    display: flex;
    width: 700rpx;
    height: 80rpx;
    background: #f9f9f9;
    margin: 0 auto;
    border-radius: 20rpx;
    line-height: 80rpx;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140rpx;

      .text {
        color: $brand-theme-color;
        font-weight: 600;
        font-size: 28rpx;
      }
    }

    .center {
      flex: 1;

      swiper {
        height: 100%;

        &-item {
          height: 100%;
          font-size: 30rpx;
          color: #666;

          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }

    .right {
      width: 50rpx;
    }
  }

  .select {
    padding-top: 50rpx;

    .date {
      color: $brand-theme-color;
      display: flex;
      align-items: center;

      .text {
        margin-left: 5rpx;
      }
    }

    .content {
      width: 720rpx;
      margin-left: 30rpx;
      margin-top: 30rpx;

      scroll-view {
        white-space: nowrap;

        .box {
          width: 200rpx;
          height: 430rpx;
          display: inline-block;
          margin-right: 15rpx;

          image {
            width: 100%;
            height: 100%;
            border-radius: 10rpx;
          }
        }

        .box:last-child {
          margin-right: 30rpx;
        }
      }
    }
  }

  .theme {
    padding: 50rpx 0;

    .more {
      font-size: 32rpx;
      color: #888;
    }

    .content {
      margin-top: 30rpx;
      padding: 0 30rpx;
      display: grid;
      gap: 15rpx;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
