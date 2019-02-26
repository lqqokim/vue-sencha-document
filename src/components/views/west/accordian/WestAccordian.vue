<template>
  <div class="accordian">
    <div
      class="item"
      :class="{ 'expand' : selectedItem === index}"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="header">
        <img class="tool" :src="item.img">
        <div>
          <div class="title">{{item.title}}</div>
          <img
            class="expand-btn"
            :class="{'change' : selectedItem === index}"
            :src="item.button"
            @click="controlAccordian(index)"
          >
        </div>
      </div>
      <div class="content">
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationImg from './../../../../assets/icons/folder_go.png';
import SettingsImg from './../../../../assets/icons/folder_wrench.png';
import InformationImg from './../../../../assets/icons/information.png';
// import ExpandImg from './../../../assets/icons/tool-sprites-dark.png';

export default {
    data() {
        return {
            selectedItem: 0,
            items: [
                {
                    img: NavigationImg,
                    title: 'Navigation',
                    class: 'navigation',
                    content: "Hi. I'm the west panel.",
                    // button: ExpandImg,
                },
                {
                    img: SettingsImg,
                    title: 'Settings',
                    class: 'settings',
                    content: 'Some settings in here.',
                    // button: ExpandImg,
                },
                {
                    img: InformationImg,
                    title: 'Information',
                    class: 'information',
                    content: 'Some info in here.',
                    // button: ExpandImg,
                },
            ],
        };
    },
    methods: {
        controlAccordian(index) {
            if (this.selectedItem !== index) {
                // 다른 item 클릭
                this.selectedItem = index;
            } else {
                // 같은 item 클릭
                if (this.selectedItem === this.items.length - 1) {
                    this.selectedItem = index - 1;
                } else {
                    this.selectedItem = index + 1;
                }
            }
        },
    },
    destroyed() {
        console.log('destroy');
    },
};
</script>

<style scoped>
.accordian {
    height: calc(100% - 47px);
    background-color: white;
    padding: 5px 5px 0px 5px;
}

.header {
    height: 32px;
    background-color: #dfeaf2;
}

.header > div {
    float: left;
    width: 150px;
    margin: -7px 9px 0px 35px;
}

.header:hover {
    background-color: #e6f1f9;
}

.header .title {
    float: left;
    position: relative;
    color: #666666;
    text-transform: none;
}

.item {
    height: 32px;
    transition: all 0.3s;
    position: relative;
}

.item.expand {
    height: calc(100% - 86px) !important;
    background-position: 0 -192px;
}

.item.expand .content {
    display: block;
}

.content {
    display: none;
}

.item:not(:first-child) {
    margin-top: 5px;
}

img.tool {
    float: left;
    position: relative;
    top: 8px;
    left: 10px;
}

.expand-btn {
    float: right;
    /* position: relative; */
    /* top: 0px; */
    cursor: pointer;
    opacity: 0.5;
    background-color: #dfeaf2;
    background-position: 16px 128px;

    background-color: blue;

    width: 16px;
    height: 16px;
}
/* img.expand-btn {
  background-image: url(src\assets\icons\tool-sprites-dark.png);
} */

img.expand-btn.change {
    background-position: 0 -272px;

    background-color: green;
}

img.expand-btn:hover {
    opacity: 0.6;
}
</style>
