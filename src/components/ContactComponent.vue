<template>
  <div id="contact">
    <v-layout row wrap>
      <v-flex md12 class="text-xs-center"><h2 center>Contact Me</h2></v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs10 lg6 offset-md3 offset-sm1>
        <v-form ref="emailForm" v-model="valid" lazy-validation>
          <v-text-field
            v-model="emailAddress"
            :rules="emailRules"
            label="Your email"
            required
          ></v-text-field>
          <v-textarea
            v-model="emailMessage"
            :rules="messageRules"
            label="Your message"
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