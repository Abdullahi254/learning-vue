import {createApp} from "vue"
import App from "./App.vue"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import $bus from "@/utils/Event"
import $pages from "@/utils/data"
import router from "@/utils/routes"

const app = createApp(App)
app.use(router)
app.config.globalProperties.$bus = $bus
app.config.globalProperties.$pages = $pages

app.mount("#app")