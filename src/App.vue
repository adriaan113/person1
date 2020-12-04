<template>
  <div id="app">
     <div class="wrapper">
      <div class="face" @mousemove="eyeMove" @mouseover="workForSweat">
        <img :src="images.face" alt="">
        <div class="hair">
          <img :src="images.hair" alt="">
        </div>
        <sweat ref="sweat"></sweat>
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
      mouseMoves: 0,
      images: {
        hair: require('./assets/hairNew.svg'),
        face: require('./assets/groundLayer.png'),
        // rub: require('./assets/soundRubbing.mp3')
      },
      sound:{
        rubbing: 'http://soundbible.com/mp3/Blood Squirt-SoundBible.com-1808242738.mp3',
        exhale: 'http://soundbible.com/mp3/Exhale-SoundBible.com-1772711989.mp3'
      }
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
    },
    workForSweat: function(){
      this.mouseMoves+= 1;
      // var workAudio = new Audio(this.sound.rubbing);
      // workAudio.play(); 
      if(this.mouseMoves > 100){
        this.$refs.sweat.dripping();
        var exhaleAudio = new Audio(this.sound.exhale);
        exhaleAudio.play(); 
        this.mouseMoves = 0;
      }
    },
    animateBackground: function(){
      const background = document.querySelector('.wrapper');
      const tl2 = gsap.timeline({repeat:-1});
      tl2.to(background,20,{
     backgroundPosition: "-2000px 0px",
      ease: Linear.easeNone,
      }) 
    },
  }
}
</script>




<style lang="scss" scoped>

//********VARIABLES********//

//MEDIA-QUERIES//
$break-small: 600px;
// $break-medium:
 $break-large: 550px;
// $break-xlarge:


*{
  box-sizing: border-boxs;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}

.wrapper{
  width: 100%;
  // height: -webkit-fill-available;
  height: 100vh;
  background-image: linear-gradient(to bottom, deeppink 50%, yellow 50%); 
  background: linear-gradient(45deg, rgba(252,70,107,0.4) 50%, rgba(63,94,251,0.5) 50%);
              // linear-gradient(-45deg, rgba(165,252,70,0.8) 50%, rgba(251,170,63,0.5) 50%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  }


  .face{
    position: relative;
    max-width: $break-large;
    @media(min-width: $break-small) {
      width: 60%;
    }
    img{
      width: 100%;
      height: auto;  
    }
  }

  .hair{
    position: absolute;
    top: 0%;
    left: 8%;
    width: 84%;
  }

</style>