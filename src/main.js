import { createApp } from 'vue'

import { router } from './router'
import './assets/scss/main.scss'
import App from './App.vue'

// Import our custom CSS
//import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App)
.use(router)
.mount('#app');

// import { library } from "@fortawesome/fontawesome-svg-core";

// /* import font awesome icon component */
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// /* import the fontawesome icons */
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// /* add icons to the library */
// library.add(fas, far, fab);

// createApp(App)
//   .component("font-awesome-icon", FontAwesomeIcon)
//   .mount("#app");
