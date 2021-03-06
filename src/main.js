// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'// 主要是基于video.js开发
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
import 'videojs-flash'
Vue.use(VideoPlayer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
