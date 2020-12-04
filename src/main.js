


import Vue from 'vue'
import App from './App.vue'
import Eyes from './components/Eyes.vue'
import Nose from './components/Nose.vue'
import Mouth from './components/Mouth.vue'
import Hair from './components/Hair.vue'
import Blush from './components/Blush.vue'
import Sweat from './components/Sweat.vue'


Vue.component('eyes', Eyes);
Vue.component('nose', Nose);
Vue.component('mouth', Mouth);
Vue.component('hair', Hair);
Vue.component('blush', Blush);
Vue.component('sweat', Sweat);

// gsap.registerPlugin(MotionPathPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
