<template>
  <v-footer id="footer">
    <v-layout row wrap>
      <v-flex xs4 class="text-xs-center"><span id="copyright-text">Copyright &copy; {{copyRightDate}} Nick Berra</span></v-flex>
      <v-flex xs4 class="text-xs-center">
        <div center>
          <span id="to-top">
            <v-icon href="#" @click="$vuetify.goTo(0,0)">keyboard_arrow_up</v-icon>
          </span>
          <!-- <v-icon @click="$vuetify.goTo(0,0)">keyboard_arrow_up</v-icon> -->
        </div>
      </v-flex>
      <v-flex xs4 class="text-xs-center social">
        <a href="https://github.com/bnerra" target="_blank"><github-box></github-box></a>
        <a href="https://www.linkedin.com/in/nick-berra-84893760/" target="_blank"><linkedin-box></linkedin-box></a>
      </v-flex>
    </v-layout>
      
      
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
  }
}
</script>

<style>
#footer{
  padding: 60px 0;
  font-family: 'Lato', sans-serif;
  color: #74808a;
}
#to-top {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid #b9bfc4;
  text-align: center;

  font-size: 3em;
  text-rendering: auto;
  text-align: center;
  font: normal normal normal 14px/1 FontAwesome;
}
#to-top i {
  padding-top: 3px;
  color: #74808a;
}
.social a {
  padding: 10px;
  color: #74808a;
}

@media only screen and (max-width: 768px){
  #footer {
    padding-bottom: 10px;
  }
}
</style>