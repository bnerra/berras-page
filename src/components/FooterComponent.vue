<template>
  <v-footer>
      <span>&copy; {{copyRightDate}}</span>
      <div center>
          <v-icon @click="$vuetify.goTo(0,0)">keyboard_arrow_up</v-icon>
      </div>
      <!-- TODO: Add social media icons -->
    </v-footer>
</template>

<script>

export default {
  name: 'FooterComponent',
  components: {
    //
  },
  data: () => ({
    copyRightDate: new Date().getFullYear(),
  }),
  props: {},
  methods: {
    scrollToTop: function () {
      window.scrollTo(0,0);
    }
  }
}
</script>