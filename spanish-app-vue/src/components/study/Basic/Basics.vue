<template>
    <div id="basic">
        <h2> Basics </h2>
        <div id="lessons">
            <div class="card" id="card1">
                <div class="card-body">
                    <p> Lesson 1 </p>
                    
                </div>
                <button @click="navigateToLesson1" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card2">
                <div class="card-body">
                    <p> Lesson 2 </p>
                </div>
                 <button @click="navigateToLesson2" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card3">
                <div class="card-body">
                    <p> Lesson 3 </p>
                </div>
                <button @click="navigateToLesson3" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card4">
                <div class="card-body">
                    <p> Lesson 4 </p>
                </div>
                <button @click="navigateToLesson4" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card5">
                <div class="card-body">
                    <p> Lesson 5 </p>
                </div>
                <button @click="navigateToLesson5" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card6">
                <div class="card-body">
                    <p> Lesson 6 </p>
                </div>
                 <button @click="navigateToLesson6" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card7">
                <div class="card-body">
                    <p> Lesson 7 </p>
                </div>
                <button @click="navigateToLesson7" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card8">
                <div class="card-body">
                    <p> Lesson 8 </p>
                </div>
                <button @click="navigateToLesson8" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            <div class="card" id="card9">
                <div class="card-body">
                    <p> Lesson 9 </p>
                </div>
                <button @click="navigateToLesson9" type="button" class="btn btn-warning" id="startLesson">Start Lesson</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToLesson1() {
            this.$router.push({name: 'lessonb1'});
        },
        navigateToLesson2() {
            this.$router.push({name: 'lessonb2'});
        },
        navigateToLesson3() {
            this.$router.push({name: 'lessonb3'});
        },
        navigateToLesson4() {
            this.$router.push({name: 'lessonb4'});
        },
        navigateToLesson5() {
            this.$router.push({name: 'lessonb5'});
        },
        navigateToLesson6() {
            this.$router.push({name: 'lessonb6'});
        },
        navigateToLesson7() {
            this.$router.push({name: 'lessonb7'});
        },
        navigateToLesson8() {
            this.$router.push({name: 'lessonb8'});
        },
        navigateToLesson9() {
            this.$router.push({name: 'lessonb9'});
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    margin: 0;
}

#lessons {
    display: grid;
    grid-template-columns: 33% 33% auto;
    grid-template-rows: 300px 300px 300px;
    grid-template-areas: "c1 c2 c3"
                        "c4 c5 c6"
                        "c7 c8 c9";
}
.card {
    text-align: center;
    display: grid;
    
    grid-template-rows: auto 25%;
    grid-template-areas: "top" "bottom";
}


#card1 {
    margin: 15px;
    grid-area: c1;
}
#card2 {
    margin: 15px;
    grid-area: c2;
}
#card3 {
    margin: 15px;
    grid-area: c3;
}
#card4 {
    margin: 15px;
    grid-area: c4;
}
#card5 {
    margin: 15px;
    grid-area: c5;
}
#card6 {
    margin: 15px;
    grid-area: c6;
}
#card7 {
    margin: 15px;
    grid-area: c7;
}
#card8 {
    margin: 15px;
    grid-area: c8;
}
#card9 {
    margin: 15px;
    grid-area: c9;
}
#startLesson1 #startLesson2 {
    grid-area: bottom;
}

</style>
