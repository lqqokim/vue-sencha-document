<template>
  <div class="accordian">
    <div class="item" v-for="(item, index) in items" :key="index">
      <div class="header">
        <img class="tool" :src="item.img">
        <div>
          <div class="title">{{item.title}}</div>
          <img class="expand-btn" :src="item.button">
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

img {
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

    background-color: red;

    width: 16px;
    height: 16px;
}
/* img.expand-btn {
  background-image: url(src\assets\icons\tool-sprites-dark.png);
} */

img.expand-btn.change-expand {
    background-position: 0 -272px;
}

img.expand-btn:hover {
    opacity: 0.6;
}
</style>
