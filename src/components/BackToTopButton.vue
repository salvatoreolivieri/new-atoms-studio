<template>
  <div @click="backToTop" class="arrow-container">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
    </svg>
  </div>
</template>

<script setup>

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

</script>

<style lang="scss" scoped>

@import '../assets/style/var';

.arrow-container{
  width: 35px;
  height: 35px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;

  background-color: $button-color;

  color: white;


}

</style>