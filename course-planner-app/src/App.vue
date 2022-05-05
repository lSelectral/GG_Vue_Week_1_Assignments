<template>
  <div class="container">
    <div class="course--planner-app--container">

      <div class="card">
        <div class="user--action--container">
          <div class="form-group">
            <label>Kursun Adı</label>
            <input type="text" v-model="newCourseName" />
          </div>
          <button class="btn-primary" @click="addNewCourse(newCourseName)">Kurs Ekle</button>
        </div>
      </div>


      <AppCourseList :courses="courses" :changeText="changeStatusText"/>


      <div class="mt-10">
        <small>{{statusText}}</small>
      </div>

    </div>
  </div>
</template>

<script>
import AppCourseList from "@/components/appCourseList";

  export default {
    components: {
      AppCourseList

    },
    data() {
      return {
        courses : [],
        newCourseName : "",
        statusText: "Şu anda kurs bulunmamaktadır."
      }
    },
    methods: {
      addNewCourse(courseName){
        this.courses.push({name: courseName, isWatched: false});
      },
      changeStatusText(text){
        this.statusText = text;
      }
    },
    watch: {

    }
  }
</script>