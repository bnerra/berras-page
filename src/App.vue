<template>
  <v-app>
    <v-toolbar app color="indigo">
      <v-toolbar-title class="headline text-uppercase">
        <span>Berra's</span>
        <span class="font-weight-light">PAGE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-divider vertical></v-divider>
        <v-btn :to="{name: 'home'}"
          flat exact
        >
          <span>Home</span>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn :to="{name: 'about'}"
          flat exact
        >
          <span>About</span>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn :to="{name: 'resume'}"
          flat exact
        >
          <span>Resume</span>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn :to="{name: 'blog'}"
          flat exact
        >
          <span>Blog</span>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn :to="{name: 'contact'}"
          flat exact
        >
          <span>Contact</span>
        </v-btn>
        <v-divider vertical></v-divider>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
      <!-- <router-view></router-view> -->
    </v-content>
    <v-footer color="indigo">
      <span class="white--text">&copy; It's my page</span>
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
    drawer: null
  }),
  props: {}
}
</script>
