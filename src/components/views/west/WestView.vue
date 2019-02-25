<template>
  <div class="west">
    <div class="panel">
      <div class="header">
        <span class="title">West</span>
        <img class="slide-btn" @click="closeSlide">
      </div>
      <WestAccordian/>
    </div>
    <div class="split-slider" @click="closeSlide"></div>
  </div>
</template>

<script>

import WestAccordian from './accordian/WestAccordian';

export default {
    components: {
        WestAccordian: WestAccordian,
    },
    methods: {
        closeSlide() {
            this.$emit('close-slide');
        },
    },
};

</script>

<style scoped>
.west {
    left: 0;
    bottom: 0;
    width: 208px;
    height: 100%;
    position: absolute;
}

.panel {
    float: left;
    height: 100%;
    width: 200px;
}

.header {
    height: 36px;
    background-color: #157fcc;
}

.header .title {
    position: relative;
    top: 7px;
    left: 10px;
    height: 16px;
    color: white;
    line-height: 15px;
    text-transform: none;
}

.slide-btn {
    /* background-image: url(images/tool-sprites.png); */
    opacity: 0.5;
    background-color: #157fcc;
    background-position: 0 -192px;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    position: relative;
    top: 10px;
    left: 139px;

    background-color: red;
}

.slide-btn:hover {
    opacity: 0.6;
}

.split-slider {
    cursor: pointer;
    width: 50px;
    height: 7px;
    /* background-image: url(src/assets/icons/mini-top.png); */
    left: 179px;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(270deg);

    background-color: red;
}
</style>
