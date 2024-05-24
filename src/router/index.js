import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
	{
		path: '/',
		component: () => import('@/components/Home'),
	},
	{
		path: '/Genomes',
		name:'Genomes',
		component: () => import('@/components/Genomes'),
		redirect:'/Genomes/GenomeDetail',
		children:[
			{
				path:'GenomeDetail',
				name:'GenomeDetail',
				component: () => import('@/components/GenomeDetail'),
			}
		]
	},
	{
		path: '/Browser',
		name:'Browser',
		component: () => import('@/components/Browser'),
	},
	{
		path: '/Variations',
		name:'Variations',
		component: () => import('@/components/Variations'),
	},
	{
		path: '/Contact',
		name:'Contact',
		component: () => import('@/components/Contact'),
	},
	{
		path: '/Tutorial',
		name:'Tutorial',
		component: () => import('@/components/Tutorial'),
	},
  ]
})

