<template>
  <v-layout align-center justify-center>
    <v-toolbar floating class="hidden-sm-and-down">
      <v-toolbar-items class="hidden-sm-and-down menu-buttons" >
        <v-btn v-for="item in menu" :key="item.icon"
          flat
          @click="$vuetify.goTo(item.link)"
          color="#3498DB"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
  </v-layout>
</template>

<script>
export default {
  name: 'Toolbar',
  components: {
    //
  },
  data: () => ({
    menu: [
      { icon: 'info', title: 'About', link: '#about' },
      { icon: 'ballot', title: 'Experience', link: '#experience' },
      { icon: 'home', title: 'Education', link: '#education' },
      { icon: 'chat', title: 'Projects', link: '#projects' },
      { icon: 'create', title: 'Skills', link: '#skills'},
      { icon: 'phone', title: 'Contact', link: '#contact' }
    ]
  })
}
</script>

<style>
.v-toolbar__content{
  padding: 10px;
}
.mobile-menu{
  cursor: pointer;
  position: fixed;
  right: 15px;
  top: 10px;
  color: #3498db;
  font-size: 1.5em;
  padding: 0 7px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 3%;
}
</style>