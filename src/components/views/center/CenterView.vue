<template>
  <div class="center">
    <div class="left-btn"></div>
    <div class="right-btn"></div>
    <div class="header">
      <div class="tab-wrapper">
        <div
          class="tab"
          v-for="(item, index) in tabs"
          :key="index"
          @click="onClickTab(index)"
          :class="{ 'active': selectedTabIndex === index }"
        >
          <div class="title">{{item.title}}</div>
          <div v-if="!index" class="close"></div>
        </div>
      </div>
    </div>

    <CenterTabContent :tabIndex="selectedTabIndex"/>
  </div>
</template>

<script>
import CenterTabContent from './tab/CenterTabContent';

export default {
    data() {
        return {
            selectedTabIndex: 0,
            tabs: [
                {
                    title: 'Close Me',
                },
                {
                    title: 'Center Panel',
                },
            ],
        };
    },
    components: {
        CenterTabContent,
    },
    methods: {
        onClickTab(index) {
            this.selectedTabIndex = index;
        },
    },
};
</script>

<style scoped>
.center {
    background-color: #3892d3;
    left: 208px;
    right: 241px;
    position: absolute;
    height: 100%;
}

.header {
    height: 31px;
    background-color: #157fcc;
    border-bottom: 5px solid #b4d1ea;

    position: relative;
    overflow: hidden;
}

.header.add-margin {
    padding: 0 25px 0;
}

.tab {
    background-color: #4b9cd7;
    color: white;
    box-sizing: border-box;
    cursor: pointer;
    float: left;
    height: 31px;
    border-radius: 3px 3px 0px 0px;
    margin-right: 3px;
}

.tab:hover {
    background-color: #5fa7db;
}

.tab.active {
    background-color: #add2ed;
    color: #157fcc;
}

.title {
    float: left;
    margin: 10px 15px 0 15px;
}

.close {
    float: left;
    width: 12px;
    height: 12px;
    background-color: red;

    margin: 2px;
    /* background-image: url(src\assets\icons\tab-default-close.png); */
}

.center .tab-wrapper {
    position: absolute;
    width: 1120px;
}

.left-btn {
    /* background-image: url(./images/default-scroll-left.png); */
    cursor: pointer;
    z-index: 1;
    position: absolute;
    height: 31px;
    width: 24px;
    background-color: #157fcc;
    visibility: hidden;
}

.left-btn.visible {
    visibility: visible;
}

.right-btn {
    /* background-image: url(./images/default-scroll-right.png); */
    cursor: pointer;
    z-index: 1;
    right: 0;
    position: absolute;
    height: 31px;
    width: 24px;
    background-color: #157fcc;
    visibility: hidden;
}

.center .right-btn.visible {
    visibility: visible;
}
</style>

