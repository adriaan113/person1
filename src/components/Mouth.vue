<template>
    <div class="mouth" @click="smile">
        <img v-show="laugh && open" :src="images.mouth" alt="">
        <img v-show="!laugh && open" :src="images.smile" alt="">
        <img v-show="shut" :src="images.shut" alt="">
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
            laugh: true,
            shut: false,
            open: true
        }
    },
    methods:{
        smile: function(){    
            this.laugh= !this.laugh;
         },
        shutMouth: function(){
            setInterval(()=>{
            
            this.open = !this.open;
            this.shut = !this.shut;

          },4000);
        }
    },
    mounted(){
        this.shutMouth();
    }
}
</script>

<style lang="scss" scoped>
  .mouth{
    z-index: 9999;
    top: 60%;
    grid-column: 2 /4;
    grid-row: 3/5;
    justify-self: center;
    align-self: center;
    width: 35%;
    cursor: pointer;
    position: absolute;
    top: 66%;
    left: 30%;
    img{
      width: 100%;
    }
  }
</style>