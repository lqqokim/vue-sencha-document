<template>
  <div class="east">
    <div class="panel">
      <div class="header">
        <div class="title">East Side</div>
        <div class="slide-btn" @click="closeSlide"></div>
      </div>

      <EastTabContent :tabIndex="selectedTabIndex"/>

      <div class="bottom">
        <div
          class="tab"
          v-for="(item, index) in tabs"
          :key="index"
          @click="onClickTab(index)"
          :class="{ 'active' : selectedTabIndex === index, 'close': item.isClose}"
        >
          <div class="title">{{item.title}}</div>
          <span v-if="item.tabId" class="close-btn" @click.stop.prevent="closeTab(index)"></span>
        </div>
      </div>
    </div>
    <div class="split-slider" @click="closeSlide"></div>
  </div>
</template>

<script>
import EastTabContent from './tab/EastTabContent';
import EastModel from './../../models/EastModel';

export default {
    data() {
        return {
            selectedTabIndex: 1,
            tabs: [],
        };
    },
    components: {
        EastTabContent,
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
        closeSlide() {
            this.$emit('close-slide');
        },
        errorHandler(err) {
            console.log(err);
        }
    },
    created() {
        // tab data를 가져온다.
        EastModel.getTabList()
            .then(tabs => (this.tabs = tabs))
            .catch(err => this.errorHandler(err));
    }
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
    height: calc(100% - 37px);
}

.header {
    height: 36px;
    background-color: #157fcc;
    padding: 10px;
    box-sizing: border-box;
}

.header .title {
    float: left;
    height: 16px;
    color: white;
}

.slide-btn {
    background-image: url(./../../../assets/icons/tool-sprites.png);
    float: right;
    opacity: 0.5;
    background-color: #157fcc;
    background-position: 0 -176px;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

img.slide-btn:hover {
    opacity: 0.6;
}

.bottom {
    position: relative;
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

.tab.close {
    display: none;
}

.close-btn {
    float: left;
    width: 12px;
    height: 12px;
    background-image: url(./../../../assets/icons/tab-default-close.png);
    margin: -5px -5px 0 20px;
}

.split-slider {
    cursor: pointer;
    width: 50px;
    height: 7px;
    background-image: url(./../../../assets/icons//mini-top.png);
    left: -29px;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(90deg);

    /* background-color: blue; */
}
</style>
