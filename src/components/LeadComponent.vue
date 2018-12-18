<template>
  <div id="lead">
    <div id="lead-content" class="text-xs-center">
      <toolbar-component></toolbar-component>
      <h1 class="display-3">Nickolas Berra</h1>
      <h2 class="display-1">Software Engineer</h2>
      <div class="pa-b-5">
        <v-btn large color="white" round flat outline v-on:click="downloadResume" class="download-button">Download Resume</v-btn>
      </div>
      <div id="lead-down">
        <span id="down-icon">
          <v-icon href="#" >keyboard_arrow_down</v-icon>
          <!-- <v-btn color="white" round fab small flat outline v-scroll-to="'#about'" active-class="">
            <v-icon href="#" >keyboard_arrow_down</v-icon>
          </v-btn> -->
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
#lead-down{
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  color: #fff;
  width: 100%;
  text-align: center;

}
#lead-down span {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid #a0cfee;
  text-align: center;
}
.download-button{
  font-size: smaller;
}
#down-icon {
  display: inline-block;
  font-size: 3em;
  text-rendering: auto;
  text-align: center;
  font: normal normal normal 14px/1 FontAwesome;
}
#down-icon i {
  padding-top: 3px;
  color: white;
}
#lead{
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
#lead-content{
  z-index: 1000;
}
#lead-content h1 {
  padding-top: 5%;
  color: whitesmoke;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 84px!important;
}
#lead-content h2 {
  color: #CAE4ED;
  padding-bottom: 0.5%;
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
    z-index:-1;
}
@media only screen and (max-width: 480px){
  #lead-content h1 {
    font-size: 1.5em!important;
  }
}
@media only screen and (max-width: 768px){
  #lead-content h1 {
    font-size: 2em!important;
  }
}
@media only screen and (max-width: 992px){
  #lead-content h1 {
    font-size: 3em!important;
    padding-top: 18%;
  }
}
</style>