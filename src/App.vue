<template>
  <div class="containter">
    <NorthView/>

    <div
      class="main"
      :class="{'slide-left': isWestClose, 'slide-right': isEastClose, 'slide-up': isSouthClose}"
    >
      <WestView @close-slide="controlWest"/>

      <div class="west-collapse" :class="{'open': isWestClose}">
        <div class="split-slider" @click="controlWest"></div>
        <img class="slide-btn" @click="controlWest">
        <div class="title">West</div>
      </div>

      <CenterView/>
      <EastView @close-slide="controlEast"/>

      <div class="east-collapse" :class="{'open': isEastClose}">
        <div class="split-slider" @click="controlEast"></div>
        <img class="slide-btn" @click="controlEast">
        <div class="title">East Side</div>
      </div>
    </div>

    <SouthView :class="{ 'open': isSouthClose }" @close-slide="controlSouth"/>
  </div>
</template>

<script>
// common
import EventBus from './components/common/event-bus.js';

// components
import WestView from './components/views/west/WestView';
import NorthView from './components/views/north/NorthView';
import CenterView from './components/views/center/CenterView';
import EastView from './components/views/east/EastView';
import SouthView from './components/views/south/SouthView';

export default {
    data() {
        return {
            isWestClose: false,
            isEastClose: false,
            isSouthClose: false,
        };
    },
    components: {
        WestView,
        NorthView,
        CenterView,
        EastView,
        SouthView,
    },
    methods: {
        controlWest() {
            this.isWestClose = !this.isWestClose;
        },
        controlEast() {
            this.isEastClose = !this.isEastClose;
        },
        controlSouth() {
            this.isSouthClose = !this.isSouthClose;
        },
    },
    created() {
        EventBus.$on('toggle-west', () => {
            // scope가 Vue Component
            this.controlWest();
        });
    },
    destroyed() {
        EventBus.$off('toggle-west');
    },
};
</script>

<style>
html {
    height: 100%;
}

body {
    height: 100%;
    margin: 0;
    overflow: hidden;
    word-wrap: break-word;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.containter {
    background-color: #3892d3;
    height: 100%;
}

ul {
    list-style: none;
}

p {
    margin: 0;
    color: black;
    font-size: 13px;
    font-weight: normal;
    font-family: helvetica, arial, verdana, sans-serif;
}

/* table span {
    color: #666666;
    font: bold 13px/15px helvetica, arial, verdana, sans-serif;
}

th span {
    padding: 7px 0 7px 10px;
    text-overflow: ellipsis;
}

td {
    text-overflow: ellipsis;
    padding: 2px 5px 3px 10px;
    font: normal 13px/15px helvetica, arial, verdana, sans-serif;
} */

.title {
    font-size: 13px;
    font-weight: bold;
    font-family: helvetica, arial, verdana, sans-serif;
    /* line-height: 16px;
            text-transform: none; */
}

.main {
    height: calc(100% - 76px);
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
}

.west,
.east,
.south {
    z-index: 100;
    transition: all 0.1s;
}

/* west-collapse */
.west-collapse {
    width: 45px;
    height: 99%;
    background-color: #157fcc;
    position: absolute;
    left: -100px;
    transition: all 0.1s;
}

.west-collapse.open {
    transform: translate(0, 0);
    left: 0;
}

.west-collapse .title {
    transform: rotate(90deg);
    color: white;
    margin-top: 50px;
}

.west-collapse .slide-btn {
    /* background-image: url(images/tool-sprites.png); */
    opacity: 0.5;
    background-color: #157fcc;
    background-position: 0 -176px;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 14px;

    background-color: red;
}

.west-collapse .slide-btn:hover {
    opacity: 0.6;
}

.west-collapse .split-slider {
    cursor: pointer;
    width: 50px;
    height: 7px;
    /* background-image: url(./images/mini-top.png); */
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(90deg);
    left: 22px;

    background-color: red;
}

/* east-collapse */
.east-collapse {
    width: 45px;
    height: 99%;
    background-color: #157fcc;
    position: absolute;
    right: -100px;
    transition: all 0.1s;
}

.east-collapse.open {
    transform: translate(0, 0);
    right: 0;
}

.east-collapse .title {
    transform: rotate(90deg);
    color: white;
    margin-top: 50px;

    width: 100px;
    position: relative;
    top: 25px;
    right: 28px;
}

.east-collapse .slide-btn {
    /* background-image: url(images/tool-sprites.png); */
    opacity: 0.5;
    background-color: #157fcc;
    background-position: 0 -192px;
    overflow: hidden;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 14px;

    background-color: red;
}

.east-collapse .slide-btn:hover {
    opacity: 0.6;
}

.east-collapse .split-slider {
    cursor: pointer;
    width: 50px;
    height: 7px;
    /* background-image: url(./images/mini-top.png); */
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform: rotate(270deg);
    left: -28px;

    background-color: red;
}

/* west slide */
.main.slide-left .west {
    transform: translate(-120%, 0);
}

.main.slide-left .center {
    transition: all 0.3s;
    left: 50px;
}

/* east slide */
.main.slide-right .east {
    transform: translate(110%, 0);
}

.main.slide-right .center {
    transition: all 0.1s;
    right: 50px;
}

/* south slide */
.main.slide-up {
    transition: all 0.5s;
    height: calc(100% - 135px);
}
</style>