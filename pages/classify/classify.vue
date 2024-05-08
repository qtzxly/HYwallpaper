<template>
  <view class="classLayout pageBg">
    <custom-nav-bar title="分类"></custom-nav-bar>

    <view class="classify">
      <theme-item
        v-for="item in classifyList"
        :key="item._id"
        :item="item"
      ></theme-item>
    </view>
  </view>
</template>

<script setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
// 分享
onShareAppMessage((e) => {
  return {
    title: '浩阳壁纸,精选分类',
    path: '/pages/classify/classify'
  }
})
onShareTimeline((e) => {
  return {
    title: '浩阳壁纸,精选分类'
    // imageUrl:bannerList.value[0].picurl
  }
})
import { ref } from 'vue'
import { apiGetClassify } from '@/api/apis.js'

const classifyList = ref([])
const getClassify = async () => {
  let res = await apiGetClassify({
    pageSize: 20
  })
  console.log(res)
  classifyList.value = res.data
}
getClassify()
</script>

<style lang="scss" scoped>
.classify {
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rpx;
}
</style>
