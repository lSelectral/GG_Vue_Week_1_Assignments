<template>
  <div class="card competition-list mr-10">
    <div class="card--header">
      <h4>Yakın Zamanda Başlayacak Müsabakalar</h4>
    </div>
    <div v-for="(match, ind) in incomingMatcList" :key="ind" class="card--body">
      <incoming-match :match="match"/>
    </div>
  </div>
</template>


<script>
import IncomingMatch from "@/components/incomingMatch";
import {mapGetters} from "vuex";

export default {
  components: {IncomingMatch},
  computed: {
    ...mapGetters({
      incomingMatcList: "_incomingMatcList"
    }),
  }
}
</script>