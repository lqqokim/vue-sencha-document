<template>
  <div class="west">
    <div class="panel">
      <div class="header">
        <div class="title">West</div>
        <div class="slide-btn" @click="closeSlide"></div>
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
    destroyed() {
        console.log('destroy');
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
    padding: 10px;
    box-sizing: border-box;
}

.header .title {
    float: left;
    color: white;
}

.slide-btn {
    background-image: url(./../../../assets/icons/tool-sprites.png);
    float: right;
    opacity: 0.5;
    background-color: #157fcc;
    background-position: 0 -192px;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.slide-btn:hover {
    opacity: 0.6;
}

.split-slider {
    cursor: pointer;
    width: 50px;
    height: 7px;
    background-image: url(./../../../assets/icons/mini-top.png);
    left: 179px;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(270deg);
}
</style>
