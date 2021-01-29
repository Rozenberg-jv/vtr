<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <DayCardHandler :cardsData="daysData['05.06.2021']" />
    </swiper-slide>
    <swiper-slide>
      <DayCardHandler :cardsData="daysData['05.06.2021']" />
    </swiper-slide>
    <swiper-slide>
      <DayCardHandler :cardsData="daysData['05.06.2021']" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import DayCardHandler from "@/components/DayCardHandler.vue";
// import "swiper/swiper.css";

export default {
  name: "DaysSwiper",
  components: {
    DayCardHandler,
    Swiper,
    SwiperSlide,
  },
  data() {},
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  props: ["daysData"],
  computed: {},
  mounted() {},
};
</script>

<style scoped>
</style>