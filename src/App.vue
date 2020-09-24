<template>
  <div id="app">
     <div class="wrapper">
      <div class="face" @mousemove="eyeMove">
        <!-- <img class="ground-layer" :src="images.face" alt="">      -->
        <div class="eyes">
          <!-- <img  :src="images.eyes" alt=""> -->
          <div class="left-eye">
            <img class="left-eye" :src="images.eyeLeft" alt="">
            <img class="left-lid" :src="images.eyelidLeft" alt="">
            <img class="left-pupil" :src="images.pupilLeft" alt="">
          </div>
          <div class="right-eye">
            <img class="right-eye" :src="images.eyeRight" alt="">
            <img class="right-lid" :src="images.eyelidRight" alt="">
            <img class="right-pupil"  :src="images.pupilRight" alt="">
          </div>
          
        </div>
        <div class="nose">
          <img  :src="images.nose" alt="">
        </div>
        <div class="mouth" @click="koeka">
          <img :src="images.mouth" alt="">
        </div>
        <div class="blush">
          <img :src="images.blush" alt="">
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
        hair: require('./assets/hair.svg'),
        eyeLeft: require('./assets/eyeLeft.svg'),
        eyeRight: require('./assets/eyeRight.svg'),
        pupilLeft: require('./assets/pupilLeft2.svg'),
        pupilRight: require('./assets/pupilRight2.svg'),
        eyelidLeft: require('./assets/eyelidLeft.svg'),
        eyelidRight: require('./assets/eyelidRight.svg'),
        nose: require('./assets/nose.svg'),
        snot: require('./assets/snot.svg'),
        mouth: require('./assets/mouthNew.svg'),
        blush: require('./assets/blush.svg')
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
    blink: function(){

       const eyeLids = document.querySelectorAll('.left-lid, .right-lid');

      for(let lid of eyeLids ){
        setInterval(()=>{
          if(lid.style.display === 'none'){
            lid.style.display =  'block';
          }else if(lid.style.display !== 'none'){
            lid.style.display =  'none';
          }
          },3000);
      }
   
    },
    blush: function(){
      const cheeks = document.querySelector('.blush');
      const tl = gsap.timeline({repeat: -1, repeatDelay: 5, delay: 10});
      //cheeks.style.display = 'none';

      cheeks.style.opacity = 0;

      // 

      //setInterval(()=>{
        tl.to(cheeks, {duration: 3, opacity: 1, delay: 10});
        tl.to(cheeks, {duration: 3, opacity: 0, delay: 5});
        

        // gsap.to(cheeks, {duration: 3, opacity: 1});
        // gsap.from(cheeks, {duration: 3, opacity: 0});

        // if(cheeks.style.opacity = 0){
        //   gsap.from(cheeks, {duration: 3, opacity: 1});
        // }else if(cheeks.style.opacity = 1){
        //   gsap.from(cheeks, {duration: 3, opacity: 0});
        // }

      //},3000)
    },
    koeka: function(){    
      console.log('satan');
    }
  },
  mounted(){
    this.blink();
    this.blush();
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
  grid-template-rows:  repeat(5, 1fr);
  //height: 100vh;
  // max-width: 720px;
  // height: 40%;
  //position: relative;
  // .ground-layer{
  //   grid-column: 1/5;
  //   grid-row: 1/5;
  //   width: 100%;
  // }

  .eyes{
     display: flex;
    /* width: 50%; */
    /* justify-content: flex-end; */
    grid-column: 2/4;
    grid-row: 2/3;
    justify-self: center;
    align-self: center;
    //border: 2px solid pink;
  }

  .left-eye{
    position: relative;
    width: 100%;
    /* display: flex; */
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;

      img{
      width: 30%;
    }
  }

  .right-eye,
  .left-eye{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    img{
      width: 45%;
    }
     .right-pupil{
      position: absolute;
      width: 15%;
      // top: 33%;
      // left: 65%;
    }
     .left-pupil{
      position: absolute;
      width: 15%;
      // top: 35%;
      // left: 35%;
    }
  }



   
    .left-lid,
    .right-lid{
      position: absolute;
      // top: -3%;
      // left: 0;
      z-index: 9999;
    }
  
  .nose{
    grid-column: 2/4;
    grid-row: 2/4;
    justify-self: center;
    align-self: center;
    width: 25%;
    margin-top: 40px;
    img{
      width: 100%;
    }
  }
  .mouth{
    top: 60%;
    grid-column: 2 /4;
    grid-row: 4/5;
    justify-self: center;
    align-self: center;
    width: 40%;
    img{
      width: 100%;
    }
  }
  .blush{
    grid-column: 2/4;
    grid-row: 3/4;
    align-self: end;
    img{
      width: 80%;
    }
  }
  }


</style>
