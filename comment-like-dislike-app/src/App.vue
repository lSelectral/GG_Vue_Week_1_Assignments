<template>
  <div class="container">
    <div class="comment--like--dislike--app">
      <div v-for="(text,ind) in commentList" :key="ind">
        <app-comment :title="text"/>
      </div>
    </div>
  </div>
</template>

<script>
import appComment from "@/components/appComment";
  export default {
    components: {appComment},
    data() {
      return {
        commentList : [
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`,
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`,
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`,          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`,
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`,
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`,
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`,
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur enim nulla sunt unde! Eos
            nulla tempore tenetur. Autem deleniti fugiat necessitatibus, nulla perferendis quam! Fugit officiis
            repudiandae saepe tempore!`
        ]
      }
    }
  }
</script>