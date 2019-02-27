<template>
  <div class="content">
    <div class="top">
      <button title="Test Button">test</button>
    </div>

    <keep-alive>
      <component v-bind:is="selectedTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import EastTabContentLetter from './EastTabContentLetter';
import EastTabContentGrid from './EastTabContentGrid';

export default {
    props: {
        tabIndex: {
            type: Number,
        },
    },
    components: {
        EastTabContentLetter,
        EastTabContentGrid,
    },
    computed: {
        selectedTabComponent() {
            switch (this.tabIndex) {
                case 0:
                    return EastTabContentLetter;
                case 1:
                    return EastTabContentGrid;
                default:
                    return EastTabContentLetter;
            }
        },
    },
    created() {
        console.log('create');
    },
};
</script>

<style scoped>
.content {
    height: calc(100% - 42px);
    background-color: white;
}

.top {
    padding: 6px 0 6px 188px;
}

.top button {
    width: 39.344px;
    height: 24px;
    cursor: pointer;
    color: #736c6c;
    font-family: helvetica, arial, verdana, sans-serif;
    background-color: #ececec;
    font-weight: bold;
    font-size: 12px;
    border-radius: 3px;
}


</style>
