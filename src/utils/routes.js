import CreatePage from "@/components/CreatePage.vue"
import PageViewer from "@/components/PageViewer.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?',
            component: PageViewer,
            props: true,
            beforeEnter: (to, from, next) => {
                if (!to.params.index) {
                    // If myParam is not included in the URL, set a default value
                    to.params.index = '0';
                }
                next()
            }
        },
        { path: '/create', component: CreatePage }
    ]
})

export default router