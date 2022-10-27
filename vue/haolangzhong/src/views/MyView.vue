<template>
  <div>
    myview
    <lazy-component>
      <img v-for="(img, index) in imageList" :key="index" v-lazy="img" />
    </lazy-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
        "http://cdnimg101.mlychee.com/audio_cover/2018/01/25/2649229533943848967.jpg",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>