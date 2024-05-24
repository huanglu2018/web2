// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import './assets/css/global.css'
import axios from 'axios'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import * as echarts from 'echarts';
import * as XLSX from 'xlsx';
// import XLSXS from "xlsx-style";
// Vue.prototype.$XLSX = XLSX;
// import vueToPdf from 'vue-to-pdf';
import Plugin from 'v-fit-columns';


Vue.use(Plugin);


// set ElementUI lang to EN
Vue.use(ElementUI, { locale }, axios )
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(preview)
Vue.prototype.$echarts = echarts;
Vue.prototype.$XLSX = XLSX;
// Vue.use(vueToPdf);

// axios.defaults.baseURL = 'http://222.200.186.132:8988/'
axios.defaults.baseURL = 'http://peanutgdb.crigdaas.org.cn:8000/'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
