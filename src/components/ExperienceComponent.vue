<template>
  <div id="experience">
    <v-layout row wrap>
      <v-flex md12 class="text-xs-center"><h2 center>Experience</h2></v-flex>
    </v-layout>
    <div id="experience-timeline">
      <div data-date="March 2018 - November 2018">
        <h3>Bayer</h3>
        <h4>Consultant, Developer</h4>
        <p>
          Collaborated with a team of developers to provide enhancements and bug fixes for Regional Brand sites. Implemented enhancements and bug fixes to site components using VueJs, Java and AEM. Optimized NodeJS Elasticsearch Query Builder to refine and improve site search results. Utilize Puppeteer PDF Generator to generate PDF files from site pages to be viewed, printed or emailed. Configure Narconex HTTP Collector to crawl websites and index data with Elasticsearch.
        </p>
      </div>
      <div data-date="November 2017 - March 2018">
        <h3>Daugherty Business Solutions</h3>
        <h4>Developer</h4>
        <p>
          Assisted with the development of an internal project application, Enterprise Application Framework, that provides Daugherty employees quick access to frequently used links and documents. Contributed to the front-end design using VueJS and Vuetify as well as the back end Express server using NodeJS.
        </p>
      </div>
      <div data-date="August 2017 - May 2015">
        <h3>Aleutians East Borough School District</h3>
        <h4>Mathematics Teacher</h4>
        <p>
          Planned and instructed mathematics curriculum for grades 7 – 12. Implemented age-appropriate mathematics curriculum to develop student critical thinking and problem solving skills. Assessed student progress daily. Utilized instructional methods and materials most suitable for meeting defined objectives and standards.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExperienceComponent',
    data: () => ({
    })
  }
</script>