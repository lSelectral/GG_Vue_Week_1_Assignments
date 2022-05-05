<template>

  <li :style="{backgroundColor: colorProp}" @click="changeColorFunc(colorProp)">

  </li>

</template>

<script>
export default {
  props: {
    colorProp : String,
    changeColorFunc : Function
  },
  data(){
    return {
    }
  }
}
</script>
