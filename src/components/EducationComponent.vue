<template>
  <div id="education">
    <v-layout row wrap>
      <v-flex md12 class="text-xs-center"><h2 center>Education</h2></v-flex>
    </v-layout>
    <v-container>
      <v-card class="education-card">
        <v-card-title primary-title>
          <v-layout row wrap>
            <v-flex xs12 class="headline">University of Missouri - Columbia</v-flex>
            <v-flex xs12 id="education-date">August 2009 - May 2014</v-flex>
            <v-flex xs12 class="grey--text">B.S. Secondary Mathematics Education</v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'EducationComponent',
    data: () => ({
    })
  }
</script>

<style>
  .education-card{
    border-color: black;
    border-style: dotted;
  }
  @media only screen and (min-width: 575px){
    #education-date{
      position: absolute;
      right:0;
      padding-right: 15px;
    }
  }
</style>