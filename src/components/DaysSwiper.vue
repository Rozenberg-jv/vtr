<template>
  <swiper ref="mySwiper" :options="swiperOptions">
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import DayCardHandler from "@/components/DayCardHandler.vue";
// import "swiper/swiper.css";

export default {
  name: "DaysSwiper",
  components: {
    DayCardHandler,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  props: ["daysData"],
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log(this.swiper);
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>

<style scoped>
</style>