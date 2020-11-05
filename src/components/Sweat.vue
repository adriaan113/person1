<template>
    
    <div>
        <div>
            <div class="sweat-drop" v-for="n in 5">
                <!-- <p>{{n}}</p> -->
                <svg width="92px" height="240px" viewBox="0 0 92 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M46.5,239.285156 C67.7629629,239.285156 106.347656,202.183594 85,146.5 C63.6523438,90.8164062 46.5,28.234375 46.5,4.05078125 C46.5,-20.1328125 33.6875,90.8164062 8,146.5 C-17.6875,202.183594 25.2370371,239.285156 46.5,239.285156 Z" id="Oval" fill="#87C8FF"></path>
                </g>
                </svg>
            </div>
        </div>

        <svg id="line-test2" class="line-path-test" width="118px" height="1049px" viewBox="0 0 118 1049" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <path d="M117.5,0.5 C39.7395833,179.65625 0.859375,334.609375 0.859375,465.359375 C0.859375,596.109375 39.7395833,790.489583 117.5,1048.5" id="Line-5" stroke="#979797"></path>
            </g>
        </svg>

        <svg id="line-test3" class="line-path-test" width="205px" height="1584px" viewBox="0 0 205 1584" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <path d="M134.5,0.5 C83.3727983,32.7939419 65.2061316,141.23665 80,325.828125 C102.190803,602.715337 224.500884,548.385896 201.015625,830.453125 C177.530366,1112.52035 15.2918193,1112.20426 1.93220876,1263.45312 C-6.97419825,1364.2857 37.2150655,1470.96799 134.5,1583.5" id="Line-4" stroke="#979797"></path>
            </g>
        </svg>

        <svg id="line-test4" class="line-path-test" width="219px" height="1499px" viewBox="0 0 219 1499" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <path d="M0.5,0.5 C145.197917,288.805556 217.546875,522.368056 217.546875,701.1875 C217.546875,880.006944 145.197917,1145.77778 0.5,1498.5" id="Line-3" stroke="#979797"></path>
            </g>
        </svg>

        <svg id="line-test5" class="line-path-test"  width="131px" height="1679px" viewBox="0 0 131 1679" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <path d="M129.5,0.5 C80.9082646,66.1723565 55.5176396,186.484856 53.328125,361.4375 C50.0438531,623.866465 120.574251,643.722182 129.5,808 C138.425749,972.277818 6.19865186,1053.21146 1.390625,1252.51562 C-1.81472624,1385.38507 33.8883988,1527.37986 108.5,1678.5" id="Line-2" stroke="#979797"></path>
            </g>
        </svg>


        <svg id="line-test6" class="line-path-test"  width="97px" height="1679px" viewBox="0 0 97 1679" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <path d="M0.5,0.5 C63.9270833,232.171954 95.640625,490.020913 95.640625,774.046875 C95.640625,1058.07284 63.9270833,1359.55721 0.5,1678.5" id="Line" stroke="#979797"></path>
            </g>
        </svg>

    </div>


</template>

<script>
export default {
    data(){
        return{
            n: 5
        }
    },
    methods: {
        dripping: function(){

            gsap.registerPlugin(MotionPathPlugin);
            
            const drop2 = document.querySelector('.sweat-drop:nth-child(1)');
            const drop3 = document.querySelector('.sweat-drop:nth-child(2)');
            const drop4 = document.querySelector('.sweat-drop:nth-child(3)');
            const drop5 = document.querySelector('.sweat-drop:nth-child(4)');
            const drop6 = document.querySelector('.sweat-drop:nth-child(5)');

            drop2.style.opacity= 0;
            drop3.style.opacity= 0;
            drop4.style.opacity= 0;
            drop5.style.opacity= 0;
            drop6.style.opacity= 0;

            function clearDrops(x){
                x.style.opacity = 0;
            }


            function dripMechanic(x,y){

                const tl = gsap.timeline({onComplete: function(){clearDrops(x)}});
                tl.to(x, {
                opacity: 1,
                duration: 3, 
                ease: "sine.inOut",
                motionPath:{
                    path: `#line-test${y} g path`,
                    align: `#line-test${y} g path`,
                    autoRotate: false,
                    alignOrigin: [0.5, 0.5]
                },
            });
            }
            dripMechanic(drop2,2);
            dripMechanic(drop3,3);
            dripMechanic(drop4,4);
            dripMechanic(drop5,5);
            dripMechanic(drop6,6);
        },
    }
}
</script>

<style lang="scss" scoped>

.line-path-test{
    position: absolute;
    width: 10%;
    top: 10%;
    left: 30%;
    g{
        stroke-width: 0;
    }
}

#line-test2{
    top: 24%;
    left: 16%;
    height: 40%;            
}
#line-test3{
    top: 10%;
    left: 29%;
    height: 50%;
}
#line-test4{
    top: -10%;
    left: 56%;
    height: 90%;
}
#line-test5{
    top: 23%;
    left: 59%;
    height: 30%;
}
#line-test6{
    top: 23%;
    left: 73%;
    height: 30%;
}


.sweat-drop{
    position: absolute;
    opacity: 0;
    svg{
        width: 10%;
        opacity: .8;
    }
    &:nth-child(1){
        top: 3%;
        left: 41%;
    }
    &:nth-child(2){
        top: 0;
        left: 20%;
    }
    &:nth-child(3){
        top: 3%;
        left: 60%;
    }
    &:nth-child(4){
        top: 4%;
        left: 50%;
    }
    &:nth-child(5){
        top: 5%;
        left: 12%;
    }
}


</style>