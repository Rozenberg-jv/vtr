<template>
  <div class="day-card-handler">
    <DayCard
      v-for="cardData in cardsData"
      :key="cardData.id"
      :cardData="cardData"
    />
  </div>
</template>

<script>
import DayCard from "@/components/DayCard.vue";

export default {
  name: "DayCardHandler",
  components: {
    DayCard,
  },
  props: ["cardsData"],
};
</script>

<style>
.day-card-handler {
  width: 600px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  background-color: rgba(75, 75, 200, 0.9);
  color: white;
  border-radius: 4px;
}
</style>