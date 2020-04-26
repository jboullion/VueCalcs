import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.filter('integer', function (value) {
    return parseInt(value);
});

// Vue.filter('truncate', function (value) {
//   console.log('filter: '+value);
//   if (value.length > 10) {
//       value = value.substring(0, 10);
//   }

//   return value
// })

		// currencydecimal (value) {
		// 	return value.toFixed(2)
		// },

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
