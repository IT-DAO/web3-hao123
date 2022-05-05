import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注册事件总线（事件跨层级）
Vue.prototype.$bus = new Vue();

// Element.ui
import {
  Switch,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Progress,
  Dialog,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  MessageBox
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Progress);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

new Vue({
  render: h => h(App),
}).$mount('#app')

// rem.js
!function(win, doc) {
	var htmlDom = doc.getElementsByTagName("html")[0];
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalc = function() {
		var htmlWidth = doc.documentElement.clientWidth || doc.body.clientWidth;
		if (htmlWidth > 550) {
			htmlWidth = parseInt(htmlWidth * 0.85);
		}
		htmlDom.style.fontSize = htmlWidth / 10 + 'px';
	}

	if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(window, document);