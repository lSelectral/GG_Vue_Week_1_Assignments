<template>
  <div class="bookmark-item">
    <div class="header">
      <h3>{{ data.title }}</h3>
      <button @click="$emit('delete-item', data.id)" class="btn-sm btn-danger">Kaydı Sil</button>
    </div>
    <p class="mt-20 mb-20">{{ data.description }}</p>
    <button @click="openUrl(data.link)" class="btn-primary btn-sm">Göster</button>
  </div>
</template>

<script>
export default {
  name: "bookMarkComp",
  props:{
    data : Object
  },
  methods: {
    openUrl(url){
      window.open(url)
    }
  }
}
</script>