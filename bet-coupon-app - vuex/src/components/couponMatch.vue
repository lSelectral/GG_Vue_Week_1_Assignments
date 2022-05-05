<template>
  <div class="coupon-item">
    <div class="w-100 mb-5 d-flex justify-content-between align-items-center">
      <span class="font-weight-bold">{{ couponData.title }}</span>
      <span class="font-weight-bold text-info">{{ couponData.rate }}</span>
    </div>
    <div class="w-100 d-flex justify-content-between align-items-center">
      <small class="mt-5">Maç Sonucu : <span class="font-weight-bold">{{couponData.rateIndex}}</span></small>
      <small class="text-muted">{{ couponData.time }}</small>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      couponData : Object
    },
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>