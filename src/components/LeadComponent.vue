<template>
  <div id="lead">
    <toolbar-component></toolbar-component>
    <div id="lead-content" class="text-xs-center">
      <h1 class="display-3">Nickolas Berra</h1>
      <h2 class="headline">Software Engineer</h2>
      <v-btn round flat outline v-on:click="downloadResume" class="download-button">Download Resume</v-btn>
      <div id="lead-down">
        <span id="down-icon">
          <v-btn round fab small flat outline v-scroll-to="'#about'" active-class="">
            <v-icon href="#" >keyboard_arrow_down</v-icon>
          </v-btn>
        </span>
      </div>
    </div>
    <div id="lead-overlay"></div>
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

<style >
body{
  padding: 0!important;
}
.download-button{
  font-size: smaller;
}
#down-icon {
  cursor: pointer;
}
#lead{
    /* position: relative;
    height: 50vh;
    min-height: 500px;
    max-height: 1080px;
    background: url(http://www.tokkoro.com/picsup/3099601-background_caf_close-up_computer_keyboard_laptop_manuscript_modern_note_notebook_pen_photography_read_table_take-notes_technology_the-work_to-write_work.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden; */
    position: relative;
    width: 100%;
    height: 50vh;
    top: 0;
    left: 0;
    z-index: 0;
    min-height: 500px;
    max-height: 1080px;
    background: url(http://www.tokkoro.com/picsup/3099601-background_caf_close-up_computer_keyboard_laptop_manuscript_modern_note_notebook_pen_photography_read_table_take-notes_technology_the-work_to-write_work.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
}
#lead-overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(68, 142, 192, 0.8);
    z-index: 1;
}
</style>