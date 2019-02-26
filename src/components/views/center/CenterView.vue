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
          :class="{ 'active' : selectedTabIndex === index, 'close': item.isClose}"
        >
          <div class="title">{{item.title}}</div>
          <div v-if="!item.tabId" class="close-btn" @click.stop.prevent="closeTab(index)"></div>
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
            isClose: false,
            tabs: [
                {
                    tabId: 0,
                    title: 'Close Me',
                    isClose: false,
                },
                {
                    tabId: 1,
                    title: 'Center Panel',
                    isClose: false,
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
        closeTab(index) {
            this.tabs[index].isClose = true;

            if (index === this.tabs.length - 1) {
                // 마지막 아이템인 경우 이전의 탭 활성화
                this.selectedTabIndex = index - 1;
            } else {
                this.selectedTabIndex = index + 1;
            }
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

.tab.close {
    display: none;
}

.title {
    float: left;
    margin: 10px 15px 0 15px;
}

.close-btn {
    float: left;
    width: 12px;
    height: 12px;
    background-color: blue;

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

