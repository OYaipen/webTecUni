import Vue from 'vue'
import Child from './Child'
import Slider from './Slider'
// Components that are registered globaly.
[
  Child,
  Slider
].forEach(Component => {
  Vue.component(Component.name, Component)
})
