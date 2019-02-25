<template>
  <div class="south">
    <div class="panel">
      <div class="header">
        <div class="split-slider" @click="closeSlide"></div>
        <span class="title">South</span>
        <img class="slide-btn" @click="closeSlide">
      </div>
      <div class="content">
        <p>south - generally for informational stuff, also could be for status bar</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        closeSlide() {
            this.$emit('close-slide');
        },
    },
};
</script>

<style scoped>
.south {
    width: 100%;
    height: 45px;

    position: fixed;
    bottom: 0;
    left: 0;

    transition: transform 0.5s ease;
}

.south.open {
    transform: translate(0, -130%);
}

.panel {
    background-color: #157fcc;
    height: 100%;
}

.header {
    height: 100%;
}

.title {
    position: relative;
    top: 9px;
    left: 10px;
    color: white;
}

.slide-btn {
    /* background-image: url(images/tool-sprites.png); */
    opacity: 0.5;
    background-color: #157fcc;
    background-position: 0 -224px;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 10px;

    background-color: red;
}

.slide-btn:hover {
    opacity: 0.6;
}

.south.open .slide-btn {
    background-position: 0 -208px;
}

.content {
    background-color: white;
    height: 300px;
}

.split-slider {
    cursor: pointer;
    position: relative;
    width: 50px;
    height: 7px;
    /* background-image: url(./images/mini-top.png); */
    margin: auto;
    top: -5px;

    background-color: red;
}
</style>
