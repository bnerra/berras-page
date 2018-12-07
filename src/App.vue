<template>
  <v-app>
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
  props: {}
}
</script>
