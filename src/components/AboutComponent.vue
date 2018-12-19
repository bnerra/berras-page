<template>
  <div id="about">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md5>
          <!-- <v-card tile flat height="100%"> -->
            <h3 class="subheading text-xs-center">About Me</h3>
          <!-- </v-card> -->
        </v-flex>
        <v-flex xs12 md7>
          <!-- <v-card tile flat> -->
            <p>
              Result-oriented consultant focused on designing appropriate software solutions to business needs and managing business application development and rollout. Strong collaborative ability coupled with “hands-on” IT experience, and the ability to communicate to both technical and business stakeholders.
            </p>
          <!-- </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'AboutComponent',
    data: () => ({
    })
  }
</script>

<style>
  #about{
    padding-top: 3%;
    padding-bottom: 3%;
    font-family: 'Lato', sans-serif!important;
  }
  #about h3 {
    font-size: 2em!important;
  }
  #about p {
    color: #74808a!important;
  }
</style>