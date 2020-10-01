
<template>
     <div class="eyes">
          <div class="left-eye">
            <img class="left-eyebrow" :src="images.eyebrowLeft" alt="">
            <img class="left-eye" :src="images.eyeLeft" alt="">
            <img class="left-lid" :src="images.eyelidLeft" alt="">
            <img class="left-pupil" :src="images.pupilLeft" alt="">
          </div>
          <div class="right-eye">
            <img class="right-eyebrow" :src="images.eyebrowRight" alt="">
            <img class="right-eye" :src="images.eyeRight" alt="">
            <img class="right-lid" :src="images.eyelidRight" alt="">
            <img class="right-pupil"  :src="images.pupilRight" alt="">
          </div>
          
    </div>
</template>


<script>
export default {
    data () {
    return {
      images: {
        eyeLeft: require('../assets/eyeLeftNew.svg'),
        eyeRight: require('../assets/eyeRightNew.svg'),
        pupilLeft: require('../assets/pupilLeft2.svg'),
        pupilRight: require('../assets/pupilRight2.svg'),
        eyelidLeft: require('../assets/eyelidLeft.svg'),
        eyelidRight: require('../assets/eyelidRight.svg'),
        eyebrowLeft: require('../assets/eyebrowLeftNew.svg'),
        eyebrowRight: require('../assets/eyebrowRightNew.svg')
      }
    }
  },
  methods: {

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
}
  },
    mounted(){
        this.blink();
    }
}
</script>


<style lang="scss" scoped>


  .eyes{
    display: flex;
    grid-column: 2/4;
    grid-row: 2/3;
    justify-self: center;
    align-self: center;
  }

  .left-eye{
    position: relative;
    width: 100%;
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
    .left-eyebrow,
    .right-eyebrow{
      position: absolute;
      top: -15px;
    }
  }

.left-lid,
.right-lid{
    position: absolute;
    // top: -3%;
    // left: 0;
    z-index: 9999;
}
  

</style>
