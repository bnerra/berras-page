<template>
  <div id="skills">
    <v-flex>
        <v-layout row wrap>
          <v-flex md12 class="text-xs-center"><h2 class="subheading">Skills</h2></v-flex>
        </v-layout>
        <v-layout row wrap>
          <!-- TODO: Good for mobile, when large, spread chips out -->
          <v-flex md6 class="text-xs-center" v-for="(skill, index) in skills" :key="index">
            <v-chip>{{ skill }}</v-chip>
          </v-flex>
        </v-layout>
      </v-flex>
  </div>
</template>

<script>
  export default {
    name: 'SkillsComponent',
    data: () => ({
      skills: ['Javascript/jQuery', 'HTML5/CSS', 'Sass/LESS', 'Java', 'VueJS', 'NodeJS', 'ReactJS', 'React/Redux', 'MongoDB', 'Amazon Web Services']
    })
  }
</script>

<style >
  #skills {
    font-family: 'Lato', sans-serif!important;
    padding-top: 1%;
    padding-bottom: 3%;
  }
  #skills h2 {
    font-size: 2em!important;
  }
</style>