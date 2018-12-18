<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid ma-0 pa-0 fill-height>
          <v-layout row wrap>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
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
  .container{
    padding: 0;
    margin: none;
  }
  .v-toolbar{
    width: fit-content;
  }
  @media only screen and (max-width: 960px){
    .layout{
      align-self: flex-end;
    }
  }
  @media only screen and (min-width: 1264px) {
    .container {
      max-width: fit-content;
    }
  }
  @media only screen and (min-width: 960px) {
    .container {
      max-width: fit-content;
    }
  }
</style>
