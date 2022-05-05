<template>
  <div class="card my-coupon">

    <div class="card--header">
      <h4>Kuponum</h4>
    </div>

    <div v-for="(data, ind) in couponList" :key="ind" class="card--body">
      <coupon-match :coupon-data="data"/>
    </div>

  </div>
</template>

<script>
import CouponMatch from "@/components/couponMatch";
import {mapGetters} from "vuex";
export default {
  components: {CouponMatch},
  computed: {
    ...mapGetters({
      couponList: "_couponList"
    }),
  }
}
</script>