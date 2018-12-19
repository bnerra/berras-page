<template>
  <div id="education">
    <div class="section-content">
      <v-layout row wrap>
        <v-flex md12 class="text-xs-center"><h2 class="subheading" center>Education</h2></v-flex>
      </v-layout>
      <v-container>
        <v-card flat class="education-card">
          <v-card-title primary-title class="education-text">
            <v-layout row wrap>
              <v-flex xs12 class="headline">University of Missouri - Columbia</v-flex>
              <v-flex xs12 id="education-date">August 2009 - May 2014</v-flex>
              <v-flex xs12 class="grey--text">B.S. Secondary Mathematics Education</v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-container>
    </div>
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
#education {
  padding-top: 1%;
  padding-bottom: 2%;
}
#education h2 {
  font-size: 2em!important;
  font-family: 'Lato', sans-serif!important;
}
  .education-card{
    border: 1px solid #dcd9d9!important;
  }
  .v-card__title--primary{
    padding-top: 15px;
  }
  @media only screen and (min-width: 575px){
    #education-date{
      position: absolute;
      right:0;
      padding-right: 15px;
    }
  }
</style>