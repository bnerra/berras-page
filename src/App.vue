<template>
  <v-app>
    <v-layout align-center justify-center>
    <v-toolbar floating>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-scroll-to="'#about'">About</v-btn>
        <v-btn flat v-scroll-to="'#experience'">Experience</v-btn>
        <v-btn flat v-scroll-to="'#education'">Education</v-btn>
        <v-btn flat v-scroll-to="'#projects'">Projects</v-btn>
        <v-btn flat v-scroll-to="'#skills'">Skills</v-btn>
        <v-btn flat v-scroll-to="'#contact'">Contact</v-btn>
      </v-toolbar-items>
      <v-menu class="mobile-menu hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon" @click="$vuetify.goTo(item.link)">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    </v-layout>

    <v-content>
      <router-view></router-view> 
    </v-content>

    <v-footer color="indigo">
      <span class="white--text">&copy; {{copyRightDate}}</span>
      <div center>
          <v-icon dark @click="$vuetify.goTo(0,0)">keyboard_arrow_up</v-icon>
        <!-- </v-btn> -->

      </div>
      <!-- TODO: Add social media icons -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    //
  },
  data: () => ({
    copyRightDate: new Date().getFullYear(),
    drawer: null,
    menu: [
      { icon: 'info', title: 'About', link: '#about' },
      { icon: 'ballot', title: 'Experience', link: '#experience' },
      { icon: 'home', title: 'Education', link: '#education' },
      { icon: 'chat', title: 'Projects', link: '#projects' },
      { icon: 'create', title: 'Skills', link: '#skills'},
      { icon: 'phone', title: 'Contact', link: '#contact' }
    ]
  }),
  props: {},
  methods: {
    scrollToTop: function () {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style >
  .v-toolbar{
    width: fit-content;
  }

  @media only screen and (max-width: 960px){
    .layout{
      align-self: flex-end;
    }
  }
</style>
