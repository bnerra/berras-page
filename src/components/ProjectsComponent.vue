<template>
  <div id="projects">
    <div class="section-content">
      <h2 class="subheading text-xs-center">Projects</h2>
      <v-container>
        <v-flex xs12 offset-md2>
          <v-card>
            <!-- TODO: for screen size <640? vertical cards -->
            <v-layout row>
              <v-flex xs6>
                <v-img class="project-image" :src="require('@/static/images/b-logo.svg')"></v-img>
              </v-flex>
              <v-flex xs6>
                <v-card-title primary-title>
                  <h3>bnerra.com</h3>
                  <p>This was a startup site I created in my free time. Particularly, the primary intention was to showcase a dynamic resume. Additionally, this is a catalyst to further build my web development skills.</p>
                  <a target="_blank" href="http://bnerra.com">View Project</a>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsComponent",
  data: () => ({})
};
</script>

<style>
#projects {
  background-color: #f2f2f5;
  font-family: 'Lato', sans-serif!important;
  padding-top: 1%;
  padding-bottom: 3%;
}
#projects h2 {
  font-size: 2em!important;
}
</style>