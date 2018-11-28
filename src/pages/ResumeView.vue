<template>
  <v-container grid-list-xl fluid>
    <v-layout column fill-height>
      <v-flex text-xs-center>
        <v-layout column fill-height align-center>
          <v-flex>
            <div>
              <p class="font-italic">My accomplishments over the years</p>
            </div>
            <div>
              <v-btn
                outline
                v-on:click="downloadResume"
                >Download Resume
              </v-btn>
            </div>
          </v-flex>
          <v-flex>
              <p>
                Result-oriented consultant focused on designing appropriate software solutions to business needs and managing business application development and rollout. Strong collaborative ability coupled with “hands-on” IT experience, and the ability to communicate to both technical and business stakeholders.
              </p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs4><h2>Technologies</h2></v-flex>
          <v-flex xs4>
            <h4>DAY-TO-DAY COMFORT</h4>
            <ul>
              <li>JavaScript/jQuery</li>
              <li>HTML5/CSS3</li>
              <li>Sass/LESS</li>
              <li>Java</li>
              <li>VueJS</li>
            </ul>
          </v-flex>
          <v-flex xs4>
            <h4>EXPERIENCE WITH</h4>
            <ul>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>React/Redux</li>
              <li>MongoDB</li>
              <li>Amazon Web Services</li>
            </ul>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs4><h2>Work Experience</h2></v-flex>
          <v-flex xs8>
            <v-card-title primary-title>
              <div>
                <div class="subheading font-weight-bold">OWNER, DEVELOPER</div>
                <div><span class="font-weight-bold underline">Bnerra.com</span>, St.Louis, MO, November 2018 - Present</div>
                <p>This was a startup site I created in my free time. Particularly, the primary intention was to showcase a dynamic resume. Additionally, this is a catalyst to further build my web development skills.</p>
              </div>
            </v-card-title>
            <v-card-title primary-title>
              <div>
                <div class="subheading font-weight-bold">CONSULTANT, DEVELOPER</div>
                <div><span class="font-weight-bold underline">Bayer</span>, St.Louis, MO, March 2018 - November 2018</div>
                <p>Collaborated with a team of developers to provide enhancements and bug fixes for Regional Brand sites. Implemented enhancements and bug fixes to site components using VueJs, Java and AEM. Optimized NodeJS Elasticsearch Query Builder to refine and improve site search results. Utilize Puppeteer PDF Generator to generate PDF files from site pages to be viewed, printed or emailed. Configure Narconex HTTP Collector to crawl websites and index data with Elasticsearch.</p>
              </div>
            </v-card-title>
            <v-card-title primary-title>
              <div>
                <div class="subheading font-weight-bold">DEVELOPER</div>
                <div><span class="font-weight-bold underline">Daugherty Business Solutions</span>, St.Louis, MO, November 2017 - March 2018</div>
                <p>Assisted with the development of an internal project application, Enterprise Application Framework, that provides Daugherty employees quick access to frequently used links and documents. Contributed to the front-end design using VueJS and Vuetify as well as the back end Express server using NodeJS.</p>
              </div>
            </v-card-title>
            <v-card-title primary-title>
              <div>
                <div class="subheading font-weight-bold">MATHEMATICS TEACHER</div>
                <div><span class="font-weight-bold underline">Aleutians East Borough School District</span>, King Cove, AK, August 2017 - May 2015</div>
                <p>Planned and instructed mathematics curriculum for grades 7 – 12. Implemented age-appropriate mathematics curriculum to develop student critical thinking and problem solving skills. Assessed student progress daily. Utilized instructional methods and materials most suitable for meeting defined objectives and standards.</p>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs4><h2>Education</h2></v-flex>
          <v-flex xs8>
            <div>
              <p class="font-weight-bold">B.S. SECONDARY EDUCATION, MATHEMATICS</p>
              <p>University of Missouri, Columbia, MO, August 2009 – May 2014</p>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AWS from 'aws-sdk';

  export default {
    data: () => ({
      accessKeyId: '',
      secretAccessKey: ''
    }),
    methods: {
      downloadResume: function () {
        AWS.config.update({accessKeyId: this.accessKeyId, secretAccessKey: this.secretAccessKey})
        var params = {
          Bucket: "bnerra.com",
          Key: "NBerraResume2018.docx"
        };
        var s3 = new AWS.S3();
        s3.getObject(params, function(err, data) {
          if (err) {
            alert('Error downloading file');
            console.log(err, err.stack);
          }else {
            console.log(data);
          }
        })
      }
    }
  }
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
  
</style>