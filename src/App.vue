<template>
  <div id="app">
     <div class="wrapper">
      <div class="face" @mousemove="eyeMove">
        <div class="hair">
          <img :src="images.hair" alt="">
        </div>
        <sweat></sweat>
        <eyes></eyes>
        <nose></nose>
        <mouth></mouth>
        <blush></blush>
      </div> <!--end of face div -->
    </div><!--end of wrapper div --> 
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      msg: 'satan satan satan',
      images: {
        hair: require('./assets/hairNew.svg'),
      },
    }
  },
  methods: {
    eyeMove: function(e){

      const eyes = document.querySelectorAll('.left-pupil, .right-pupil');  

      for(let i=0;i<eyes.length;i++){
        const x = eyes[i].getBoundingClientRect().left + (eyes[i].clientWidth / 2);
        const y = eyes[i].getBoundingClientRect().top + (eyes[i].clientHeight / 2);
        const radian = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = (radian * (180 / Math.PI) * -1) + 0; //was +90 
        eyes[i].style.transform = `rotate(${rot}deg)`;
      }
    }
  }
}
</script>




<style lang="scss" scoped>

*{
  box-sizing: border-boxs;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper{
  width: 100%;
  height: 100vh;
  //background-image: linear-gradient(to bottom, deeppink, yellow); 
}

.face{
  background-image: url('./assets/groundLayer.png');
  background-position: center; 
  background-repeat: no-repeat;
  background-size: contain; 
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
  grid-template-rows:  repeat(5, 1fr);
}

  .hair{
    grid-column: 1/4 ;
    grid-row: 1;
    justify-self: center;
    align-self: center;
    position: absolute;
    top: 80px;
    img{
      width: 84%;
    }
  }

</style>