<template>
  <div id="app">
    <Header />
    <DayCardHandler :cardsData="mockCardsData" />
  </div>
</template>

<script>
import DayCardHandler from "./components/DayCardHandler.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    DayCardHandler,
    Header,
  },
  data() {
    return {
      mockCardsData: [
        {
          id: 1,
          title: "title1",
          text: "text1",
          imageUrl: "logo.png",
        },
        {
          id: 2,
          title: "title2",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
          imageUrl: "logo.png",
        },
        {
          id: 3,
          title: "title3",
          text:
            "1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        },
        {
          id: 4,
          title: "title4",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

/* .content {
  display: flex;
  min-width: 500px;
  min-height: 200px;
  vertical-align: center;
  justify-content: center;
  align-items: center;
  background-color: seagreen;
  margin-top: 50px;
} */
</style>
