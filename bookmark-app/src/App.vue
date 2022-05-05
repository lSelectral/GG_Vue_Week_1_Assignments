<template>
    <header>Bookmark App</header>
    <div class="container">
      <div class="bookmark--app--container">

        <book-mark-comp v-for="(data,ind) in bookmarkList" :key="ind" :data="data" @delete-item="deleteItem"/>

      </div>
    </div>
</template>

<script>
import BookMarkComp from "@/components/bookMarkComp";
export default {
  name: 'App',
  components: {BookMarkComp},
  data() {
    return {
      bookmarkList: [
        {
          id: 1,
          title: "Başlık 1",
          description: "Açıklama",
          link: "https://www.google.com"
        },
        {
          id: 2,
          title: "Başlık 2",
          description: "Açıklama",
          link: "https://www.google.com"
        },
        {
          id: 3,
          title: "Başlık 3",
          description: "Açıklama",
          link: "https://www.google.com"
        }
      ]
    }
  },
  methods: {
    deleteItem(id){
      this.bookmarkList = this.bookmarkList.filter(x => x.id !== id);
    }
  }
}
</script>