<template>
  <div class="card competition-list mr-10">
    <div class="card--header">
      <h4>Yakın Zamanda Başlayacak Müsabakalar</h4>
    </div>
    <div v-for="(match, ind) in teamList" :key="ind" class="card--body">
      <incoming-match :match="match"/>
    </div>
  </div>
</template>


<script>
import IncomingMatch from "@/components/incomingMatch";
export default {
  components: {IncomingMatch},
  data() {
    return {
      teamList: [
        {
          id: 1,
          title: "Fenarbahçe x Galatasary",
          time: "Saat: 19:00"
        },
        {
          id: 2,
          title: "Fenarbahçe x Beşiktaş",
          time: "Saat: 21:00"
        },
        {
          id: 3,
          title: "Beşiktaş x Galatasary",
          time: "Saat: 23:00"
        },
      ]
    }
  }
}
</script>