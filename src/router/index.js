import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/',
      		redirect: '/login'
    	},
    	{
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
        	path: '/table',
        	component: resolve => require(['../components/common/Main.vue'], resolve),
        	children: [
        		{
        			path: '/',
        			component: resolve => require(['../components/page/Table.vue'], resolve),
        		},
        		{
        			path: '/form',
        			component: resolve => require(['../components/page/Form.vue'], resolve),
        		},
        		{
        			path: '/transfer',
        			component: resolve => require(['../components/page/Transfer.vue'], resolve),
        		},
        		{
        			path: '/charts',
        			component: resolve => require(['../components/page/Charts.vue'], resolve),
        		}
        	]
        }
  	]
})
