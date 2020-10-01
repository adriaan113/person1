<template>
    <div class="nose">
            <img  :src="images.nose" alt="">
    </div>
</template>

<script>
export default {
    data (){
        return {
            images: {
                nose: require('../assets/nose.svg')
            }
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
    img{
      width: 100%;
    }
  }
</style>