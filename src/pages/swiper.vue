<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("Slide Change");
};
</script>

<template>
  <Swiper
    :slidesPerView="1"
    :loop="true"
    :autoplay="{ delay: 1000 }"
    :modules="[Autoplay]"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide class="page1">Slide 1</SwiperSlide>
    <SwiperSlide class="page2">Slide 2</SwiperSlide>
    <SwiperSlide class="page3">Slide 3</SwiperSlide>
    <SwiperSlide class="page4">Slide 4</SwiperSlide>
    <SwiperSlide class="page5">Slide 5</SwiperSlide>
    <SwiperSlide class="page6">Slide 6</SwiperSlide>
    <SwiperSlide class="page7">Slide 7</SwiperSlide>
    <SwiperSlide class="page8">Slide 8</SwiperSlide>
  </Swiper>
</template>




<style lang="scss" scoped>
.swiper {
  border: 1px solid #ffffff;
  width: 600px;
  height: 300px;
}
.swiper-slide {
  color: rgb(0, 0, 0);
  font-size: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &.page1 {
    background-color: #f0d1d1;
  }
  &.page2 {
    background-color: #f0ebd1;
  }
  &.page3 {
    background-color: #d1f0da;
  }
  &.page4 {
    background-color: #d1d8f0;
  }
  &.page5 {
    background-color: #f0d1ec;
  }
  &.page6 {
    background-color: #f0d1d1;
  }
  &.page7 {
    background-color: #eff0d1;
  }
  &.page8 {
    background-color: #d9d1f0;
  }
}
</style>