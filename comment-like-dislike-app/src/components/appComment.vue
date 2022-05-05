<template>
  <div class="card mb-10 comment--item">
    <p>
      {{title}}
    </p>
    <div class="action--button--container text-right mt-10">
      <button class="btn-sm btn-success" @click="likeCount++">Beğendim ({{likeCount}})</button>
      <button class="btn-sm btn-danger" @click="dislikeCount++">Beğenmedim ({{dislikeCount}})</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    data() {
      return {
        likeCount: 0,
        dislikeCount : 0
      }
    },
    methods() {

    }
  }
</script>