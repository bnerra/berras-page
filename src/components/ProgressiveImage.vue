<template>
  <div class="blurcontain" >
    <img class="blurred"
     :src="lqimage" v-if='!hdloaded'
    />
     <img class="hd" v-if='hdloaded' :src="hdimage"
     />
  </div>
</template>

<script>
export default {
  name: 'progressive-image',
  data:() => ({
    hdloaded: false
  }),
  props: {
    hdimage: String,
    lqimage: String
  },
  mounted: function(){
    var img = new Image();
    img.width = 500;
    img.height = 360;
    img.style.transition = " all 4s ease-out";
    img.onload = function () {
      this.hdloaded = true;
    }.bind(this);

    img.src = this.hdimage;
  },
}
</script>

<style>
.blurcontain{
  overflow: hidden;
  width: 560px;
  height: 300px;
  transition: all 4s ease-out;
}
.blurred {
  filter: blur(12px);
  transition: all 4s ease-out;
  transition: opacity linear .4s 0s;
  opacity: 1;
}
.hd {
  object-fit: scale-down;
  transition: all 4s ease-out;
  transition: opacity linear .4s 0s;
  opacity: 1;
}
</style>