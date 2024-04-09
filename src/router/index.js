import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/home',
            component:()=> import('../view/home/HomeVue.vue')
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/design',
            component:()=>import('../view/design/designVue.vue'),
            name:'design'
            
        },
        {
            path:'/designA',
            component:()=>import('../view/design/designItemA.vue'),
            name:'designA'

        },
        {
            path:'/designB',
            component:()=>import('../view/design/designItemB.vue'),
            name:'designB'

        },
        {
            path:'/designC',
            component:()=>import('../view/design/designItemC.vue'),
            name:'designC'

        },
        {
            path:'/designD',
            component:()=>import('../view/design/designItemD.vue'),
            name:'designD'

        }
        ,
        {
            path:'/research',
            component:()=>import('../view/research/research.vue'),
            name:'research'
        }
        ,
        {
            path:'/researchA',
            component:()=>import('../view/research/researchA.vue'),
            name:'researchA'
        },
        {
            path:'/researchB',
            component:()=>import('../view/research/researchB.vue'),
            name:'researchB'

        },
        {
            path:'/researchC',
            component:()=>import('../view/research/researchC.vue'),
            name:'researchC'

        },
        {
            path:'/creative',
            component:()=>import('../view/creative/creative.vue'),
            name:'creative'

        },
        {
            path:'/creativeA',
            component:()=>import('../view/creative/creativeA.vue'),
            name:'creativeA'

        },
        {
            path:'/creativeB',
            component:()=>import('../view/creative/creativeB.vue'),
            name:'creativeB'

        },
        {
            path:'/creativeC',
            component:()=>import('../view/creative/creativeC.vue'),
            name:'creativeC'

        }
        ,
        {
            path:'/dynamic',
            component:()=>import('../view/dynamic/dynamic.vue'),
            name:'dynamic'

        },
        {

            path:'/dynamicA',
            component:()=>import('../view/dynamic/dynamicA.vue'),
            name:'dynamicA'

        },
        {
            path:'/dynamicB',
            component:()=>import('../view/dynamic/dynamicB.vue'),
            name:'dynamicB'

        },
        {
            path:'/dynamicC',
            component:()=>import('../view/dynamic/dynamicC.vue'),
            name:'dynamicC'

        },
        {
            path:'/about',
            component:()=>import('../view/about.vue'),
            name:'about'

        }
    
    ]
})


export default router;