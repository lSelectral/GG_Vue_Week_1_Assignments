<template>
  <div class="card my-coupon">

    <div class="card--header">
      <h4>Kuponum</h4>
    </div>

    <div v-for="(data, ind) in providedCouponList" :key="ind" class="card--body">
      <coupon-match :coupon-data="data"/>
    </div>

  </div>
</template>

<script>
import CouponMatch from "@/components/couponMatch";
export default {
  components: {CouponMatch},
  inject: ["providedCouponList"],
  data() {
    return {
      coupons: [
        {
          id: 1,
          title: "Beşiktaş x Başakşehir FK",
          rate: 1.2,
          rateIndex: 1,
          time: "Saat : 19:00"
        }
      ]
    }
  },
  methods: {
    createCoupon(data){
      this.coupons.push(data);
    }
  }
}
</script>