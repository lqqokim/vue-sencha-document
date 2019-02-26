<template>
  <div class="tab-content letter">
    <p>A TabPanel component can be a region.</p>
  </div>
</template>

<script>
export default {
    destroyed() {
        console.log('destroy');
    },
};
</script>

<style scoped>
.tab-content {
    margin: 5px;
}
</style>
