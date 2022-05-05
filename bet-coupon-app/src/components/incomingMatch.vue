<template>
  <div class="competition-item">
    <div class="info--container">
      <span class="font-weight-bold">{{match.title}}</span>
      <small class="text-muted mt-5"><i>{{match.time}}</i></small>
    </div>

    <div v-for="(rate, ind) in rateList" :key="ind" class="rates">
        <rate-button @click="providedAddCouponItem(match,rate,ind)" @rate-selected="selectedRate = $event" :rate="rate"/>
    </div>

  </div>
</template>
<script>
import RateButton from "@/components/rateButton";
export default {
  components: {RateButton},
  inject: ["providedAddCouponItem"],
  props: {
    match: Object
  },
  data() {
    return {
      selectedRate: 0,
      rateList: [1.5, 1.75, 2.25]
    }
  },
  methods: {

  }
}
</script>