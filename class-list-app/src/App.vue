<template>
  <div class="container">
    <div class="class--list--app">
      <div class="card">
        <ul class="class-list">
          <li>
            <label>
              <input class="mr-5" type="checkbox" value="backgroundColor" v-model="checkedStyles"/>
              <span>Background Color</span>
            </label>
          </li>
          <li>
            <label>
              <input class="mr-5" type="checkbox" value="border" v-model="checkedStyles"/>
              <span>Border</span>
            </label>
          </li>
          <li>
            <label>
              <input class="mr-5" type="checkbox" value="borderRadius" v-model="checkedStyles"/>
              <span>Border Radius</span>
            </label>
          </li>
          <li>
            <label>
              <input class="mr-5" type="checkbox" value="color" v-model="checkedStyles"/>
              <span>Color</span>
            </label>
          </li>
          <li>
            <label>
              <input class="mr-5" type="checkbox" value="bold" v-model="checkedStyles"/>
              <span>Font Bold</span>
            </label>
          </li>
          <li>
            <label>
              <input class="mr-5" type="checkbox" value="italic" v-model="checkedStyles"/>
              <span>Font Italic</span>
            </label>
          </li>
        </ul>

        <textarea :class="{
                            red : checkedStyles.includes('backgroundColor'),
                            border2 : checkedStyles.includes('border'),
                            borderRadius10 : checkedStyles.includes('borderRadius'),
                            whiteFont : checkedStyles.includes('color'),
                            boldFont : checkedStyles.includes('bold'),
                            italicFont : checkedStyles.includes('italic'),
        }"
                  rows="5"></textarea>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
      return {
      checkedStyles : []
    }
  }
}
</script>

<style>
.border2{
  border: 2px solid black;
}

.borderRadius10{
  border-radius: 10px;
}

.whiteFont{
  color: white;
}
.boldFont{
  font-weight: bold;
}
.italicFont{
  font-style: italic;
}
</style>
