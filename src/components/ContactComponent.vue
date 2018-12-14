<template>
  <div id="contact">
    <v-layout row wrap>
      <v-flex md12 class="text-xs-center"><h2 center>Contact Me</h2></v-flex>
    </v-layout>
    <div id="contact-form">
        <form method="POST" action="https://formspree.io/email@email.com">
            <input type="hidden" name="_subject" value="Contact request from personal website" />
            <input type="email" name="_replyto" placeholder="Your email" required>
            <textarea name="message" placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactComponent',
    data: () => ({
    })
  }
</script>