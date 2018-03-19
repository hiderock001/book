import Vue from 'vue'
import Router from 'vue-router'
import Romance from '../components/Romance.vue'
import View from '../components/View.vue'

Vue.use(Router)

export default new Router({ 
    mode : "history",
    routes: [
        {
            path: '/',
            name : 'Romance',
            component: Romance
        },
        {
            path: '/contact/:no',
            name : 'View',
            component : View
        }
     ]
})
