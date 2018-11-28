<template>
  <div id="background">
    <div id="message">
      <h1>Coming Soon</h1>
    </div>
  </div>
</template>

<style scoped>
body, html {
  height: 100%;
}
#background {
  background: url("../assets/forest_in_the_fog.jpg");
  height:100%;
  width: 100%;
  position: relative;

  background-position: center;
  background-repeat: no-repeat;
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
</style>
