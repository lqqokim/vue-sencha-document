<template>
  <div class="center">
    <div
      class="left-btn"
      ref="leftBtn"
      :class="{ 'visible': isLeftBtnVisible, 'prevent': isLeftBtnDisable}"
      @click="onClickLeft"
    ></div>
    <div
      class="right-btn"
      ref="rightBtn"
      :class="{ 'visible': isRightBtnVisible, 'prevent': isRightBtnDisable }"
      @click="onClickRight"
    ></div>
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
          <span v-if="!item.tabId" class="close-btn" @click.stop.prevent="onCloseTab(index)"></span>
        </div>
      </div>
    </div>

    <CenterTabContent :tabIndex="selectedTabIndex"/>
  </div>
</template>

<script>
import CenterTabContent from './tab/CenterTabContent';
import CenterModel from './../../models/CenterModel';

export default {
    data() {
        return {
            selectedTabIndex: 0,
            isRightBtnDisable: false,
            isRightBtnVisible: false,
            isLeftBtnDisable: false,
            isLeftBtnVisible: false,
            isClose: false,
            tabs: [],
        };
    },
    components: {
        CenterTabContent,
    },
    methods: {
        onClickTab(index) {
            this.selectedTabIndex = index;
        },
        onCloseTab(index) {
            this.tabs[index].isClose = true;
            // 마지막 아이템인 경우 이전의 탭 활성화
            this.selectedTabIndex =
                index === this.tabs.length - 1 ? index - 1 : index + 1;
            this.inactiveButtons();
        },
        onClickLeft() {
            this.isRightBtnDisable && (this.isRightBtnDisable = false);
            const refs = this.$refs;
            const tabsRef = refs.tabs;
            const firstTabRef = tabsRef.children[0]; // 첫번째 tab element
            // let right = Number(this.$refs.tabs.style.left.split('p')[0]);

            tabsRef.style.left =
                Number(this.$refs.tabs.style.left.replace('px', '')) + 4 + 'px';

            const tabClientRect = firstTabRef.getBoundingClientRect();
            const leftBtnClientRect = refs.leftBtn.getBoundingClientRect();
            tabClientRect.left >= leftBtnClientRect.right &&
                (this.isLeftBtnDisable = true); // 첫번째 탭이 left 버튼에 닿으면 right 버튼 disable
        },
        onClickRight() {
            this.isLeftBtnDisable && (this.isLeftBtnDisable = false);
            const refs = this.$refs;
            const tabsRef = refs.tabs;
            const tabsChildren = Array.from(tabsRef.children); // HTMLCollection to Array
            const lastTabRef = tabsRef.children[tabsChildren.length - 1]; // 마지막 tab element
            tabsRef.style.left =
                Number(tabsRef.style.left.replace('px', '')) - 4 + 'px';

            const tabClientRect = lastTabRef.getBoundingClientRect();
            const rightBtnClienRect = refs.rightBtn.getBoundingClientRect();
            tabClientRect.right <= rightBtnClienRect.left &&
                (this.isRightBtnDisable = true); // 마지막 탭이 right 버튼에 닿으면 right 버튼 disable
        },
        activeButtons() {
            console.log('active');
            this.isLeftBtnVisible = true;
            this.isRightBtnVisible = true;
            !this.$refs.tabs.style.left && (this.isLeftBtnDisable = true);
            this.$refs.tabs.classList.add('add-margin');
        },
        inactiveButtons() {
            const tabsRef = this.$refs.tabs;
            this.isLeftBtnVisible = false;
            this.isRightBtnVisible = false;
            tabsRef.classList.remove('add-margin');

            tabsRef.style.left && (tabsRef.style.left = null); // left 이동값이 있으면 초기화
            this.isRightBtnDisable && (this.isRightBtnDisable = false); // right 버튼 disalbe style 초기화
        },
        checkButtonStatus() {
            let tabsWidthSize = 0;

            setTimeout(() => {
                Array.from(this.$refs.tabs.children).map((tab, inedx) => {
                    tabsWidthSize = tabsWidthSize + tab.offsetWidth + 3;
                });

                tabsWidthSize >= this.$refs.header.offsetWidth &&
                    this.activeButtons();
            });
        },
        addResizeEvent() {
            let timer;
            window.addEventListener('resize', () => {
                /* resize 될때마다 handleResize함수 수행을 취소,등록을 반복하고 
                        resize가 끝나면 마지막에 등록한 이벤트 함수를 한번만 실행한다. */
                timer && clearTimeout(timer);
                timer = setTimeout(this.handleResize, 100);
            });
        },
        handleResize() {
            let tabsWidthSize = 0;
            Array.from(this.$refs.tabs.children).map((tab, inedx) => {
                tabsWidthSize = tabsWidthSize + tab.offsetWidth + 3;
            });

            tabsWidthSize >= this.$refs.header.offsetWidth
                ? this.activeButtons()
                : this.inactiveButtons();
        },
        getTabList() {
            CenterModel.getTabList().then(tabs => {
                this.tabs = tabs;
            });
        },
    },
    created() {
        // grid data를 가져온다
        this.getTabList();
    },
    mounted() {
        this.$nextTick(function() {
            this.checkButtonStatus();
            this.addResizeEvent();
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

.left-btn.visible.prevent {
    pointer-events: none;
    opacity: 0.5;
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

.right-btn.visible {
    visibility: visible;
}

.right-btn.visible.prevent {
    pointer-events: none;
    opacity: 0.5;
}
</style>

