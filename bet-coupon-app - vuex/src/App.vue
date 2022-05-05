<template>
  <header>Bet Coupon App</header>
  <div class="container">
    <div class="bet--coupon--app d-flex 2justify-content-between align-items-start">

      <!-- Mac Listesi-->
      <incoming-matches-list/>

      <!-- Kuponum -->
      <div class="coupon--total--container">
        <coupon-list/>
        <ChooseFold :rate="rate"/>
      </div>

    </div>
  </div>
</template>

<script>
  import ChooseFold from "@/components/chooseFold";
  import IncomingMatchesList from "@/components/incomingMatchesList";
  import CouponList from "@/components/couponList";
  export default {
    components: {CouponList, IncomingMatchesList, ChooseFold},
    data() {
      return {
        rate : 0,
        couponList: []
      }
    },
    provide() {
      return{
        providedCouponList : this.couponList,
        providedAddCouponItem: this.addCouponItem,
      }
    },
    methods: {
      addCouponItem(match, rate, rateIndex){
        this.couponList.push(
          {
            id: new Date().getTime(),
            title: match.title,
            time: match.time,
            rate: rate,
            rateIndex: rateIndex
          }
        );
        this.rate += rate
        console.log(this.rate);
        console.log(this.couponList)
      }
    }
  }
</script>