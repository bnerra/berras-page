<template>
  <div id="experience">
    <div class="section-content">
      <v-layout row wrap>
        <v-flex md12 class="text-xs-center"><h2 class="subheading" center>Experience</h2></v-flex>
      </v-layout>
      <v-container>
        <v-timeline>
          <v-timeline-item v-for="job in jobs" :key="job" color="grey darken-1" icon="star">
            <span class="title job-date" slot="opposite">{{ job.date }}</span>
            <v-card class="elevation-2">
              <v-card-title class="job-titles">
                <h3 class="headline font-weight-bold">{{ job.role }}</h3>
                <div class="job-employer"><div class="underline font-weight-medium">{{ job.employer }}</div><span class="job-location">, {{ job.location }}</span></div>
                <v-card-text>{{ job.description }}</v-card-text>
              </v-card-title>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExperienceComponent',
    data: () => ({
      jobs: [
        {employer: 'Bayer', location: 'St.Louis, MO', role: 'Consultant, Developer', date: 'March 2018 - November 2018', description: 'Collaborated with a team of developers to provide enhancements and bug fixes for Regional Brand sites. Implemented enhancements and bug fixes to site components using VueJs, Java and AEM. Optimized NodeJS Elasticsearch Query Builder to refine and improve site search results. Utilize Puppeteer PDF Generator to generate PDF files from site pages to be viewed, printed or emailed. Configure Narconex HTTP Collector to crawl websites and index data with Elasticsearch.'},
        {employer: 'Daugherty Business Solutions', location: 'St.Louis, MO', role: 'Developer', date: 'November 2017 - March 2018', description: 'Assisted with the development of an internal project application, Enterprise Application Framework, that provides Daugherty employees quick access to frequently used links and documents. Contributed to the front-end design using VueJS and Vuetify as well as the back end Express server using NodeJS.'},
        {employer: 'Aleutians East Borough School District', location: 'King Cove, AK', role: 'Mathematics Teacher', date: 'August 2014 - May 2105', description: 'Planned and instructed mathematics curriculum for grades 7 – 12. Implemented age-appropriate mathematics curriculum to develop student critical thinking and problem solving skills. Assessed student progress daily. Utilized instructional methods and materials most suitable for meeting defined objectives and standards.'}
      ]
    })
  }
</script>

<style>
#experience{
  background-color:#F2F2F5;
  font-family: 'Lato', sans-serif!important;
  padding-top: 1%;
  padding-bottom: 2%;
}
#experience h2 {
  font-size: 2em!important;
}
  .headline{
    font-size: 22px !important;
  }
  .job-employer{
    display: inline-flex;
  }
  .job-location{
    /* margin-left: 10px; */
    margin-top: 3px;
  }
  .job-titles {
    display:block;
  }
  .underline {
    text-decoration: underline;
    /* margin-top: 4px; */
    font-size: 15px;
  }
  .v-subheader{
    padding: 0;
    font-size: 16px;
  }
  .v-card__text{
    padding-left: 0;
  }
  
</style>