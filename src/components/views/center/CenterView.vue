<template>
  <div class="center">
    <div class="left-btn" ref="leftBtn" @click="onClickLeft"></div>
    <div class="right-btn" ref="rightBtn" @click="onClickRight"></div>
    <div class="header" ref="header">
      <div class="tab-wrapper" ref="tabs">
        <div
          class="tab"
          v-for="(item, index) in tabs"
          :key="index"
          @click="onClickTab(index)"
          :class="{ 'active' : selectedTabIndex === index, 'close': item.isClose}"
        >
          <div class="title">{{item.title}}</div>
          <span v-if="!item.tabId" class="close-btn" @click.stop.prevent="closeTab(index)"></span>
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
            secondTab: null,
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
        onClickLeft() {
            let left = Number(this.$refs.tabs.style.left.split('p')[0]);
            this.$refs.tabs.style.left = left + 4 + 'px';

            console.log('left', this.$refs.tabs.style.left);
        },
        onClickRight() {
            let left = Number(this.$refs.tabs.style.left.split('p')[0]);
            this.$refs.tabs.style.left = left - 4 + 'px';
            const tabsSize = Array.from(this.$refs.tabs.children).length;
            const tabPos = this.$refs.tabs.children[tabsSize - 1].getBoundingClientRect().left;
            const rightBtnPos = this.$refs.rightBtn.getBoundingClientRect().left;

            console.log(tabPos, rightBtnPos);
            if (rightBtnPos - tabPos > 109) {
                this.$refs.rightBtn.style.pointerEvents = 'none';
                this.$refs.rightBtn.style.opacity = 0.4;
            }
        },
        handleResize() {
            let tabsWidthSize = 0;
            Array.from(this.$refs.tabs.children).map((tab, inedx) => {
                tabsWidthSize = tabsWidthSize + tab.offsetWidth + 3;
            });

            const refs = this.$refs;
            const leftBtnRef = refs.leftBtn;
            const rightBtnRef = refs.rightBtn;
            const headerRef = refs.header;

            if (tabsWidthSize > headerRef.offsetWidth) {
                leftBtnRef.classList.add('visible');
                rightBtnRef.classList.add('visible');
                this.$refs.tabs.classList.add('add-margin');
            } else {
                leftBtnRef.classList.remove('visible');
                rightBtnRef.classList.remove('visible');
                this.$refs.tabs.style.left = null;
                this.$refs.tabs.classList.remove('add-margin');
            }
        },
    },
    mounted() {
        this.$nextTick(e => {
            let timer;
            window.addEventListener('resize', () => {
                // resize 될때마다 handleResize함수 수행을 취소,등록을 반복하다가 resize가 끝나면 마지막에 등록한 이벤트 함수를 한번만 실행한다.
                timer && clearTimeout(timer);
                timer = setTimeout(this.handleResize, 100);
            });
        });
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
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

.tab-wrapper.add-margin {
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

.close {
    display: none;
}

.close:hover {
    background-color: #9fbdd6;
}

.title {
    float: left;
    margin: 10px 15px 0 15px;
}

.close-btn {
    float: left;
    width: 12px;
    height: 12px;
    margin: 2px;
    background-image: url(./../../../assets/icons/tab-default-close.png);
}

.center .tab-wrapper {
    position: absolute;
    width: 1120px;
}

.left-btn {
    background-image: url(./../../../assets/icons/default-scroll-left.png);
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
    background-image: url(./../../../assets/icons/default-scroll-right.png);
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

