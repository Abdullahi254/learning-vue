import CreatePage from "@/components/CreatePage.vue"
import PageViewer from "@/components/PageViewer.vue"
import {createRouter, createWebHashHistory} from "vue-router" 

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/:index?', component:PageViewer, props:true},
        {path: '/create', component:CreatePage}
    ]
})

export default router