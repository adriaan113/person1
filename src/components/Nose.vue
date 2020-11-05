<template>
    <div class="nose" @click="peekABoo">
            <img  :src="images.nose" alt="">
            
            <svg viewBox="0 0 46 320" v-show="showSnot">
              <g fill="none" fill-rule="evenodd">
                <path d="M23 0c8.5 89.2 13.6 148.8 15.5 178.8 1.7 26.4 5.3 47.8 6.5 64.6C49.8 309.3 8.2 354 1 284c-2.5-24.4 5.7-60.6 9.8-111.4C13.3 142 17.4 84.3 23 0z" fill="#78BF27"/>
                <g transform="translate(15 117)" fill="#CCD621">
                  <ellipse cx="4" cy="121.5" rx="4" ry="2.5"/>
                  <ellipse cx="10" cy="141.5" rx="2" ry="2.5"/>
                  <ellipse cx="2" cy="90.5" rx="2" ry="2.5"/>
                  <ellipse cx="11" cy="64.5" rx="3" ry="2.5"/>
                  <ellipse cx="3" cy="173.5" rx="3" ry="2.5"/>
                  <ellipse cx="7" cy="33.5" rx="3" ry="2.5"/>
                  <ellipse cx="10" cy="2.5" rx="2" ry="2.5"/>
                </g>
              </g>
            </svg>
            
    </div>
</template>

<script>
export default {
    data (){
        return {
            images: {
                nose: require('../assets/noseNew.svg'),
                // snot: require('../assets/snot.svg')
            },
            showSnot: false
        }
    },
    methods:{
      peekABoo: function(){
        const snot = document.querySelector('.nose svg');
       // snot.style.scaleY = 0;
        snot.style.transformOrigin = '10% 0%';
        snot.style.height = 0;
        this.showSnot = true;

        const tl = gsap.timeline();
              tl.to(snot, {height: 50, duration: 3, ease: "elastic"});
              tl.to(snot, {scaleY: 0.9, duration: 0.4});
              tl.to(snot, {scaleY: 1.1, duration: 0.4}).reverse(0);
              // tl.to(snot, {scaleY: 1, duration: 1});
      }
    }
}
</script>

<style lang="scss" scoped>
  .nose{
    grid-column: 2/4;
    grid-row: 2/4;
    justify-self: center;
    align-self: center;
    width: 25%;
    margin-top: 40px;
    position: relative;
    cursor: pointer;
    img{
      width: 100%;
    }
    svg{
      position: absolute;
      width: 14%;
      top: 60%;
      left: 65%;
    }
  }
</style>