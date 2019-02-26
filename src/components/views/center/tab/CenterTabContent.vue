<template>
  <keep-alive>
    <component :is="selectedTabComponent"></component>
  </keep-alive>
</template>

<script>
import CenterTabContentFirst from './CenterTabContentFirst';
import CenterTabContentSecond from './CenterTabContentSecond';

export default {
    props: {
        tabIndex: {
            type: Number,
        },
    },
    components: {
        CenterTabContentFirst,
        CenterTabContentSecond,
    },
    data() {
        return {
            activeTab: 0,
        };
    },
    watch: {
        tabIndex(tabIndex) {
            this.activeTab = tabIndex;
        },
    },
    computed: {
        selectedTabComponent() {
            switch (this.activeTab) {
                case 0:
                    return CenterTabContentFirst;
                case 1:
                    return CenterTabContentSecond;
                default:
                    return CenterTabContentFirst;
            }
        },
    },
};
</script>

<style scoped>
.content {
    height: calc(100% - 42px);
    background-color: white;
    overflow-y: scroll;
    padding: 5px;
    box-sizing: border-box;

    color: black;
    font-size: 13px;
    font-weight: normal;
    font-family: helvetica, arial, verdana, sans-serif;
}

.content p:not(:first-child) {
    margin-top: 5px;
}
</style>
