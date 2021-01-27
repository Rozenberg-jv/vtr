<template>
  <div class="card-handler">
    <!-- <MdCard @click.native="onItemClick" class="md-with-hover"> -->

    <div class="card-image" :style="imageStyle">
      <!-- <img :src="resolveImageUrl(cardData.imageUrl)" /> -->
    </div>

    <div class="card-title">
      <p>{{ cardData.title }}</p>
    </div>

    <div class="card-content" v-if="false">
      <p>{{ cardData.text }}</p>
    </div>

    <div class="card-actions">
      <button @click="onAction1Click">Action1</button>
      <button @click="onAction2Click">Action2</button>
    </div>
  </div>
</template>

<script>
// import Header from "../components/Header";

export default {
  name: "DayCard",
  components: {},
  data() {
    return {
      defaultImageName: "task01.png",
    };
  },
  methods: {
    onAction1Click() {
      console.log("click1");
    },
    onAction2Click() {
      console.log("click2");
    },
    resolveImageUrl: function (name) {
      let images = require.context("@/assets/", false, /\.png$|\.jpg$/);
      return images("./" + name);
    },
  },
  props: {
    cardData: {
      imageUrl: { type: String },
      id: { type: Number, require: true },
      title: { type: String, require: false },
      text: { type: String, require: true },
    },
  },
  computed: {
    imageStyle() {
      // console.log(this.cardData.imageUrl);
      return {
        "background-image": this.imageUrl,
      };
    },
    imageUrl() {
      let imageIs = this.cardData.imageUrl;

      let image = this.resolveImageUrl(imageIs || this.defaultImageName);

      return `url(${image})`;
    },
  },
};
</script>

<style scoped>
.card-handler {
  background-color: rgb(150, 40, 220);
  height: 50px;
  display: flex;
  flex-direction: row;
  margin: 5px 5px 0 5px;
  padding: 2px;
  border: rgb(40, 0, 130) solid 3px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
}

.card-image {
  display: flex;
  min-height: 50px;
  min-width: 50px;
  max-height: inherit;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  /* position: relative; */
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
}

.card-title {
  display: flex;
  margin: 0 5px;
}

.card-content {
  display: flex;
  height: inherit;
  margin: 0 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.card-content p {
  left: 0;
  right: 0;
  margin: auto;
}

.card-actions {
  right: 0;
  margin-right: -2px;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: stretch;

  opacity: 0;
  transition: all 0.3s 0.2s ease;
  transform: translateX(1000%);
}

.card-actions button {
  background-color: skyblue;
  border-radius: 4px;
  margin: 2px 0;
}

.card-handler:hover {
  transform: scale(1.01);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
}

.card-handler:hover .card-actions {
  color: black;
  opacity: 1;
  transform: translateX(0);
}
</style>
