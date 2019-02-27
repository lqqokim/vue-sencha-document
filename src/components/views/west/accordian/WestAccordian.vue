<template>
  <div class="accordian">
    <div
      class="item"
      :class="{ 'expand' : selectedItem === index}"
      v-for="(item, index) in items"
      :key="index"
      @click="controlAccordian(index)"
    >
      <div class="header">
        <img class="tool" :src="item.img">
        <div>
          <div class="title">{{item.title}}</div>
          <div class="expand-btn" :class="{'change' : selectedItem === index}" :src="item.button"></div>
        </div>
      </div>
      <div class="content">
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: 0,
            items: [
                {
                    img: 'static/icons/navigation.png',
                    title: 'Navigation',
                    class: 'navigation',
                    content: "Hi. I'm the west panel.",
                    button: 'static/icons/expand.png',
                },
                {
                    img: 'static/icons/settings.png',
                    title: 'Settings',
                    class: 'settings',
                    content: 'Some settings in here.',
                    button: 'static/icons/expand.png',
                },
                {
                    img: 'static/icons/information.png',
                    title: 'Information',
                    class: 'information',
                    content: 'Some info in here.',
                    button: 'static/icons/expand.png',
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
    margin: -8px 0 0 31px;
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
    cursor: default;
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

.tool {
    float: left;
    position: relative;
    top: 8px;
    left: 10px;
}

.expand-btn {
    float: right;
    cursor: pointer;
    opacity: 0.5;
    background-color: #dfeaf2;
    background-position: 16px 128px;
    width: 16px;
    height: 16px;
    background-image: url(./../../../../assets/icons/tool-sprites-dark.png);
}

.expand-btn.change {
    background-position: 0 -272px;
}

.expand-btn:hover {
    opacity: 0.6;
}
</style>
