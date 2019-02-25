<template>
  <div class="east">
    <div class="panel">
      <div class="header">
        <span class="title">East Side</span>
        <img class="slide-btn" @click="closeSlide">
      </div>

      <EastTabContent :tabIndex="selectedTabIndex"/>

      <div class="bottom">
        <div
          class="tab"
          v-for="(item, index) in tabs"
          :key="index"
          @click="onClickTab(index)"
          :class="{ 'active' : selectedTabIndex === index}"
        >
          <div class="title">{{item.title}}</div>
          <div v-if="index" class="close"></div>
        </div>
      </div>
    </div>
    <div class="split-slider" @click="closeSlide"></div>
  </div>
</template>

<script>
import EastTabContent from './tab/EastTabContent';

export default {
    data() {
        return {
            selectedTabIndex: 0,
            tabs: [
                {
                    title: 'A Tab',
                },
                {
                    title: 'Property Grid',
                },
            ],
        };
    },
    components: {
        EastTabContent,
    },
    methods: {
        onClickTab(index) {
            this.selectedTabIndex = index;
        },
         closeSlide() {
            this.$emit('close-slide');
        },
    },
};
</script>

<style scoped>
.east {
    width: 233px;
    height: 100%;
    position: absolute;
    right: 0;
}

.panel {
    height: calc(100% - 42px);
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

img.slide-btn {
    /* background-image: url(images/tool-sprites.png); */
    opacity: 0.5;
    background-color: #157fcc;
    background-position: 0 -176px;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    position: relative;
    top: 10px;
    left: 136px;

    background-color: red;
}

img.slide-btn:hover {
    opacity: 0.6;
}

.bottom {
    height: 31px;
    border-top: 5px solid #add2ed;
    background-color: #157fcc;
}

.tab {
    cursor: pointer;
    background-color: #4b9cd7;
    color: white;
    margin-right: 3px;
    border-radius: 0px 0px 3px 3px;

    float: left;
    height: 100%;

    box-sizing: border-box;
    padding: 10px;
}

.tab .title {
    float: left;
}

.tab:hover {
    background-color: #5fa7db;
}

.tab.active {
    background-color: #add2ed;
    color: #157fcc;
}

.close {
    float: left;
    background-color: red;
    width: 12px;
    height: 12px;
    /* background-image: url(images/tab-default-close.png); */
    margin: -5px -5px 0 20px;
}

.split-slider {
    cursor: pointer;
    width: 50px;
    height: 7px;
    /* background-image: url(./images/mini-top.png); */
    left: -29px;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(90deg);

    background-color: red;
}
</style>
