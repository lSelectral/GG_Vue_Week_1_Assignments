<template>
  <div class="container css--class--app">
    <div class="card text-center">
      <ul  class="css--palette text-center">
        <div v-for=" (color, index) in colorList" :key="index">
          <ColorBox :colorProp="color" :changeColorFunc="changeColor"/>
        </div>
      </ul>
      <div class="result-box" :style="{ backgroundColor : boxColor }"></div>
    </div>
  </div>
</template>

<script>


import ColorBox from '@/components/ColorBox.vue'

export default {
  name: 'App',
  components: {
    ColorBox
  },
  data(){
    return {
      colorList: [
          "red",
          "green",
          "blue"
      ],
      boxColor : "yellow"
    }
  },
  methods: {
    changeColor(color) {
      this.boxColor = color;
    }
  }
}
</script>

<style>

.red{
  background: red;
}
.blue{
  background: blue;
}
.green{
  background: green;
}
#red{
  background: red;
}
</style>