<template>
  <div id="app">
     <div class="wrapper">
      <div class="face" @mousemove="eyeMove">
        <!-- <img class="ground-layer" :src="images.face" alt="">      -->
        <div class="eyes">
          <img  :src="images.eyes" alt="">
          <img  :src="images.pupilLeft" alt="">
          <img  :src="images.pupilRight" alt="">
        </div>
        <div class="nose">
          <img  :src="images.nose" alt="">
        </div>
        <div class="mouth">
          <img :src="images.mouth" alt="">
        </div>
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
        face: require('./assets/groundLayer.svg'),
        eyes: require('./assets/eyes.svg'),
        pupilLeft: require('./assets/pupilLeft2.svg'),
        pupilRight: require('./assets/pupilRight2.svg'),
        nose: require('./assets/nose.svg'),
        mouth: require('./assets/mouth.svg')
      }
    }
  },
  methods: {
    eyeMove: function(e){

      const eyes = document.querySelectorAll('.eyes img:nth-child(1n+2)');  

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




<style lang="scss">

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
}

.face{
  background-image: url('./assets/groundLayer.svg');
  background-position: center; 
  background-repeat: no-repeat;
  background-size: contain; 
  display: grid;
  grid-template-columns: 40px 1fr 1fr 40px;
  // grid-template-rows: 1fr 1fr 1fr 1fr;
  .eyes{
    position: relative;
    grid-column: 1 /4;
    grid-row: 2/ 4;
    display: flex;
    justify-content: center;
    align-items: center;
    img:nth-child(1){
      position: absolute;
      width: 100%;
    }
    img:nth-child(2){
      position: absolute;
      width: 2.8%;
      top: 35%;
      left: 35%;
    }
    img:nth-child(3){
      position: absolute;
      width: 2.8%;
      top: 33%;
      left: 65%;
    }
  }
  .nose{
    grid-column: 2 /4;
    grid-row: 2/ 4;
    width: 20%;
    justify-self: center;
    align-self: center;
    img{
      width: 100%;
    }
  }
  .mouth{
    grid-column: 2 /4;
    grid-row: 2/4;
    //width: 70%;
    justify-self: center;
    img{
      width: 100%;
    }
  }
  }


</style>
