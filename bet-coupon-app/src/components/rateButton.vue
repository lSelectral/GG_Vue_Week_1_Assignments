<template>
  <div class="rate-item">
    <button @click="$emit('rate-selected', rate)" class="btn-sm">{{rate}}</button>
  </div>
</template>

<script>
  export default{
    props: {
      rate: Number
    },
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>