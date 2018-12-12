<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-scroll-to="'#about'">About</v-btn>
        <v-btn flat v-scroll-to="'#experience'">Experience</v-btn>
        <v-btn flat v-scroll-to="'#education'">Education</v-btn>
        <v-btn flat v-scroll-to="'#projects'">Projects</v-btn>
        <v-btn flat v-scroll-to="'#skills'">Skills</v-btn>
        <v-btn flat v-scroll-to="'#contact'">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view> 
    </v-content>

    <v-footer color="indigo">
      <span class="white--text">&copy; {{copyRightDate}}</span>
      <div center>
        <!-- <v-btn outline fab dark extra-small color="red"> -->
          <v-icon dark @click="scrollToTop">keyboard_arrow_up</v-icon>
        <!-- </v-btn> -->

      </div>
      <!-- <div class="col-sm-5 social">
          <ul>
              <li>
                  <a href="https://github.com/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
              </li>
              <li>
                  <a href="https://stackoverflow.com/" target="_blank"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
              </li>
              <li>
                  <a href="https://linkedin.com/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              </li>
              <li>
                  <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              </li>
              <li>
                  <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                  <a href="https://plus.google.com/" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
              </li>
          </ul>
      </div> -->
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
      { icon: 'home', title: 'Home', link: '/' },
      { icon: 'info', title: 'About', link: 'about' },
      { icon: 'ballot', title: 'Resume', link: 'resume' },
      { icon: 'chat', title: 'Blog', link: 'blog' },
      { icon: 'phone', title: 'Contact', link: 'contact' }
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
  <!-- <v-app>
    <v-toolbar app color="indigo">
      <v-toolbar-title class="headline text-uppercase">
        <span>Berra's</span>
        <span class="font-weight-light">PAGE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu"
                :key="item.icon"
                :to="item.link"
                 flat
                 exact
          ><span>{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon" :to="item.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo">
      <span class="white--text">&copy; {{copyRightDate}}</span>
    </v-footer>
  </v-app> -->
