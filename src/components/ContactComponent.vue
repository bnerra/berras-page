<template>
  <div id="contact">
    <v-layout row wrap>
      <v-flex md12 class="text-xs-center"><h2 class="subheading">Contact Me</h2></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 md8 offset-md2 class="text-xs-center">
        <v-form ref="emailForm" v-model="valid">
          <v-text-field
            v-model="senderName"
            :rules="senderNameRules"
            label="Your name"
            dark
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="email"
            dark
            class="email-field"
          ></v-text-field>
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
          >Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'ContactComponent',
    data: () => ({
      valid: true,
      email: '',
      emailAddress: '',
      emailRules: [
        v => !!v || 'Please provide a valid email address'
      ],
      emailMessage: '',
      messageRules: [
        v => !!v || 'Email message is required'
      ],
      senderName: '',
      senderNameRules: [
        v => !!v || 'Please enter your name'
      ]
    }),
    methods: {
      clearForm() {
        this.$refs.emailForm.reset();
      },
      submitEmail() {
        const formData = new FormData();
        formData.append("email", this.email);
        formData.append("senderName", this.senderName);
        formData.append("emailAddress", this.emailAddress);
        formData.append("emailMessage", this.emailMessage);
        axios.post("https://i2wd7xn5sc.execute-api.us-east-1.amazonaws.com/dev/api/email", formData)
          .then((response) => {
            console.log(response.data)
            this.clearForm();
          }).catch((error) => {
            console.log(error);
          })
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
    padding: 15px;
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
    background: #fff;
    margin-left: 0;
    border-radius: 4px;
    padding: 5px 10px;
    border: none;
    color: #3498db;
    font-weight: 700;
    transition: .5s ease all;
  }

  .v-text-field > .v-input__control > .v-input__slot:before {
    width: 0;
  }
  .v-text-field > .v-input__control > .v-input__slot:after{
    width: 0;
  }
  .v-messages {
    font-size: 0px;
  }
  .email-field{
    display: none;
  }
</style>