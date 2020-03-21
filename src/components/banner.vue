<template>
  <div class="banner">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot name="img"></slot>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner"
};
</script>

<style>
@import "swiper/css/swiper.min.css";
.swiper-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  /* font-size: 18px; */
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img{
  width: 100%;
  height: 200px;
}
</style>