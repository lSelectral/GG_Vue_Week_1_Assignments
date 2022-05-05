<template>
  <div class="card card-light multiply--container mt-20">
    <h4 class="text-center mb-10">Mislini Seç</h4>

    <div  class="multiply--buttons mb-10 d-flex justify-content-center align-items-center">
      <button v-for="(fold,ind) in foldList" :key="ind" class="btn-sm" @click="selectFold(fold)">{{fold}}</button>
    </div>

    <div class="coupon--total--container mt-20">
      <div class="d-flex justify-content-between align-items-center font-weight-bold">
        <span>Toplam Oran</span>
        <span class="text-info">{{totalRate}}</span>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-5">
        <span>Kupon Tutarı</span>
        <span class="font-weight-bold">{{money}} TL</span>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-5">
        <span>Tahmini Kazanç</span>
        <span class="font-weight-bold text-info">{{totalRate * money * currentFold}} TL</span>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    props: {
      rate: Number
    },
    data() {
      return {
        currentFold : 1,
      }
    },
    methods: {
      selectFold(fold){
        this.currentFold = fold;
      }
    },
    computed: {
      ...mapGetters({
        foldList: "_foldList",
        totalRate: "_totalRate",
        money: "_money"
      }),
    }
  }
</script>