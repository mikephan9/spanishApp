<template>
  <div class="home">
    
    <h2> Hi, want to learn Spanish? </h2>
    <p> Welcome to EspEng where you can learn Spanish. There are three categories to choose from: basic, intermediate, advanced.
        Choose one and enjoy. 
    </p>

    <!-- Creating a card -->
    <div class="card">
      <div class="card-body">
        <p> Basic </p>
        <button @click="navigateToBasic" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p> Intermediate </p>
        <button @click="navigateToIntermediate" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p> Advanced </p>
        <button @click="navigateToAdvanced" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
      </div>
    </div>

  </div>
    
</template>

<script>
export default {
    methods: {
        navigateToBasic() {
            this.$router.push({name: 'basics'});
        },
        navigateToIntermediate() {
            this.$router.push({name: 'intermediate'});
        },
        navigateToAdvanced() {
            this.$router.push({name: 'advanced'});
        }
    }
}

</script>

<style scoped>

.home {
  text-align: center;
  margin: auto 200px;
}

.card {
  margin: 100px auto;
}

</style>
