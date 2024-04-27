import CreatePage from "@/views/CreatePage.vue"
import PageViewer from "@/views/PageViewer.vue"
import PageList from "@/views/PageList.vue"
import Pages from "@/views/Pages.vue"
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
        {
            path: "/pages",
            children: [
                {path: '', component: PageList},
                { path: 'create', component: CreatePage }
            ],
            component: Pages
        },

    ]
})

export default router