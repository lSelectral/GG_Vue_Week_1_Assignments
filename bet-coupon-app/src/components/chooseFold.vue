<template>
  <div class="card card-light multiply--container mt-20">
    <h4 class="text-center mb-10">Mislini Seç</h4>

    <div  class="multiply--buttons mb-10 d-flex justify-content-center align-items-center">
      <button v-for="(fold,ind) in foldList" :key="ind" class="btn-sm" @click="selectFold(fold)">{{fold}}</button>
    </div>

    <div class="coupon--total--container mt-20">
      <div class="d-flex justify-content-between align-items-center font-weight-bold">
        <span>Toplam Oran</span>
        <span class="text-info">{{rate}}</span>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-5">
        <span>Kupon Tutarı</span>
        <span class="font-weight-bold">{{money}} TL</span>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-5">
        <span>Tahmini Kazanç</span>
        <span class="font-weight-bold text-info">{{rate * money * currentFold}} TL</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      rate: Number
    },
    data() {
      return {
        money: 450,
        currentFold : 1,
        foldList: [5,10,20,30,50,100,200,500,1000,1500,2500]
      }
    },
    methods: {
      selectFold(fold){
        this.currentFold = fold;
      }
    }
  }
</script>