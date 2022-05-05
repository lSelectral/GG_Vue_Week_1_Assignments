<template>
  <div class="card card-light mt-20">
    <h3>Aktif Kurslarım</h3>
    <ul class="list mt-20">
      <div v-for="(val, ind) in courses" :key="ind">
        <app-course-item :course-name="val.name"
                         :increase-func="increaseActiveCourseCount" :decrease-func="decreaseActiveCourseCount"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import AppCourseItem from "@/components/appCourseItem";

  export default {
    components: {AppCourseItem},
    props: {
      courses : Array,
      changeText : Function
    },
    data() {
      return {
        activeCourseCount : 0
      }
    },
    methods: {
      increaseActiveCourseCount(){
        this.activeCourseCount++;
      },
      decreaseActiveCourseCount(){
        this.activeCourseCount--;
      }
    },
    watch: {
      activeCourseCount(){
         return this.activeCourseCount > 0 ? this.changeText("İzlediğiniz kurs sayısı: " + this.activeCourseCount)
             : this.changeText("Hiç kurs izlemediniz")
      }
    }
  }
</script>