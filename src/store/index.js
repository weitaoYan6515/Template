import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
import music from "./modules/music"
import movie from "./modules/movie"
 
export default new Vuex.Store({
  modules: {
    music,
    movie
  }
})