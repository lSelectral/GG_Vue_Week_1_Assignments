<template>
  <li class="course-item list-item" :class="{'bg-success' : isWatched, 'bg-danger': !isWatched}" >
    <span>{{ courseName }}</span>
    <input type="checkbox" value=true v-model="isWatched"/>
  </li>
</template>

<script>
  export default {
    props: {
      courseName : String,
      increaseFunc: Function,
      decreaseFunc: Function
    },
    data() {
      return{
        isWatched : false
      }
    },
    watch: {
      isWatched(){
        return this.isWatched ? this.increaseFunc() : this.decreaseFunc();
      }
    }
  }
</script>