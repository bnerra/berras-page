<template>
  <div id="lead">
    <div id="lead-content">
      <h1>Nickolas Berra</h1>
      <h2>Software Engineer</h2>
      <v-btn round flat v-on:click="downloadResume">Download Resume</v-btn>
    </div>

    <div id="lead-overlay"></div>

    <div id="lead-down">
      <span id="down-icon">
        <v-icon href="#" v-scroll-to="'#about'">keyboard_arrow_down</v-icon>
      </span>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'LeadComponent',
    data: () => ({
    }),
    methods: {
    downloadResume: function () {
      //TODO: Set env var for prod and dev api calls
      axios({
        // url: 'http://localhost:8081/api/s3',
        url: 'https://i2wd7xn5sc.execute-api.us-east-1.amazonaws.com/dev/api/s3',
        method: 'GET'
      }).then((response) => {
        console.log(response);
        const pdfData = "data:application/pdf;base64," + response.data;
        const link = document.createElement('a');
        link.href=pdfData;
        link.setAttribute('download', 'NBerraResume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      }).catch((error) => {
        //TODO: Error Handling
        console.log(error);
      })
    }
  }
  }
</script>

<style>
#down-icon {
  cursor: pointer;
}
</style>