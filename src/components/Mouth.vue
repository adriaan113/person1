<template>
    <div class="mouth" @click="smile">
        <img v-show="laugh" :src="images.mouth" alt="">
        <img v-show="!laugh" :src="images.smile" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return {
            images:{
                mouth: require('../assets/mouthNew.svg'),
                smile: require('../assets/smile.svg'),
                shut: require('../assets/mouthshut.svg')
            },
            laugh: true 
        }
    },
    methods:{
        smile: function(){    
            this.laugh= !this.laugh;
         },
        shut: function(){
            setInterval(()=>{
         //hier moet iets komen!
          },3000);
        }
    }
}
</script>

<style lang="scss" scoped>
  .mouth{
    top: 60%;
    grid-column: 2 /4;
    grid-row: 4/5;
    justify-self: center;
    align-self: center;
    width: 40%;
    cursor: pointer;
    img{
      width: 100%;
    }
  }
</style>