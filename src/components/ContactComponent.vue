<template>
  <div id="contact">
    <v-layout row wrap>
      <v-flex md12 class="text-xs-center"><h2 class="subheading">Contact Me</h2></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 md8 offset-md2 class="text-xs-center">
        <v-form ref="emailForm" v-model="valid" lazy-validation>
          <v-text-field
            v-model="emailAddress"
            :rules="emailRules"
            label="Your email"
            dark
            required
          ></v-text-field>
          <v-textarea
            v-model="emailMessage"
            :rules="messageRules"
            label="Your message"
            dark
            required
          ></v-textarea>
          <v-btn
          width="100%"
            :disabled="!valid"
            @click="submitEmail"
            required
          >submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'ContactComponent',
    data: () => ({
      valid: true,
      emailAddress: '',
      emailRules: [
        v => !!v || 'Email address is required'
      ],
      emailMessage: '',
      messageRules: [
        v => !!v || 'Email message is required'
      ]
    }),
    methods: {
      submitEmail() {
        if (this.$refs.emailForm.validate()) {
          alert(this.emailMessage);
        }
      }
    }
  }
</script>

<style>
  #contact{
    background-color: #3498DB;
    font-family: 'Lato', sans-serif!important;
    padding-top: 1%;
    padding-bottom: 2%;
  }
  #contact h2 {
    font-size: 2em!important;
  }
  .v-form input{
    background: #1d6fa5;
    padding: 10px;
    border-radius: 4px;
    border: none;
    /* margin-bottom: 10px; */
    color: white!important;
    transition: .5s ease all;
    
  }
  .v-form textarea{
    background: #1d6fa5;
    padding: 10px;
    border-radius: 4px;
    border: none;
    margin-bottom: 10px;
    color: white!important;
    transition: .5s ease all;
  }
  .v-form button {
    display: block;
    width: 100%;
    top: 0px;
    /* left: 0px; */
    background: #fff;
    margin-left: 0;
    border-radius: 4px;
    padding: 5px 10px;
    border: none;
    color: #3498db;
    font-weight: 700;
    /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
    transition: .5s ease all;
  }

  .v-text-field > .v-input__control > .v-input__slot:before {
    width: 0;
  }
  .v-text-field > .v-input__control > .v-input__slot:after{
    width: 0;
  }
</style>