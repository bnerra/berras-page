<template>
  <!-- <progressive-background src="https://unsplash.it/1920/1080?image=10"> -->
  <!-- <div class="wrapper">
    <h2>As a background</h2>
    <progressive-background src="../assets/forest_in_the_fog.jpg" placeholder="../assets/forest_in_the_fog.jpg"/>> -->
  <div class="background">
    <div id="message">
      <h1>Coming Soon</h1>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>

export default {
  name: 'background',
  components: {
    //
  },
  data: () => ({
  }),
  props: {},
  mounted() {
    // this.loadImage()
  },
  methods: {
    loadImage: () => {
      // alert('Hello World');
      const objects = document.getElementsByClassName('background');
      Array.from(objects).map((item) => {
        const img = new Image();
        img.src = item.dataset.src;
        img.onload = () => {
          item.classList.remove('background');
          return item.nodeName === 'IMG' ?
          item.src = item.dataset.src :
          item.style.backgroundImage = `url(${item.dataset.src})`;
        }
      })
    }
  }
}
</script>


<style scoped>
/* body, html {
  height: 100%;
} */
.background {
  background-image: url("../assets/forest_in_the_fog.jpg");
  height:100%;
  width: 100%;
  position: relative;

  background-size: cover;
}

#message {
  margin: auto;
  width: 100%;
  max-height: 20%;
  background: #1E292F;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  overflow: hidden;

  text-align: center;
  vertical-align: middle;
}

h1 {
  color: white;
  font-size: 8vh;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  vertical-align: middle;
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 6vh;
  }
}
</style>
