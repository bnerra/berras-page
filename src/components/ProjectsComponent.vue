<template>
  <div id="projects">
    <h2 class="heading">Projects</h2>
    <v-flex xs12 sm6 lg3 offset-sm3>
        <v-card>
            <v-img
                :src="require('@/static/images/b-logo.svg')"
            ></v-img>
            <v-card-title primary-title>
                <h3>bnerra.com</h3>
                <p>
                    This was a startup site I created in my free time. Particularly, the primary intention was to showcase a dynamic resume. Additionally, this is a catalyst to further build my web development skills.
                </p>
                <a target="_blank" href="http://bnerra.com">View Project</a>
            </v-card-title>
        </v-card>
    </v-flex>
  </div>
</template>

<script>
  export default {
    name: 'ProjectsComponent',
    data: () => ({
        
    })
  }
</script>