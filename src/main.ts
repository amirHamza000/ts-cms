import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faTrash, faPenToSquare, faRectangleXmark, faArrowUpFromBracket, faMoneyBill, faStore, faTruck } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser, faTrash, faPenToSquare, faRectangleXmark, faArrowUpFromBracket, faMoneyBill, faStore, faTruck);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
