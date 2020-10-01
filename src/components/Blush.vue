<template>
    <div class="blush">
        <img :src="images.blush" alt="">
    </div> 
</template>

<script>
export default {
    data(){
        return{
            images:{
                blush: require('../assets/blush.svg')
            }
        }
    },
    methods:{
      blush: function(){
        const cheeks = document.querySelector('.blush');
        const tl = gsap.timeline({repeat: -1, repeatDelay: 5, delay: 10});

        cheeks.style.opacity = 0;

        tl.to(cheeks, {duration: 3, opacity: 1, delay: 10});
        tl.to(cheeks, {duration: 3, opacity: 0, delay: 5});
    },
    },
    mounted(){
        this.blush();
    }
}
</script>

<style lang="scss" scoped>

  .blush{
    grid-column: 2/4;
    grid-row: 3/4;
    align-self: end;
    img{
      width: 80%;
    }
  }
</style>