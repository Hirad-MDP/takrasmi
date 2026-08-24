import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ExpertsView from '@/views/ExpertsView.vue'
import ExpertDetailView from '@/views/ExpertDetailView.vue'
import LoginView from '@/views/LoginView.vue'
import PanelView from '@/views/PanelView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutView,
    },
    {
      path: '/experts',
      component: ExpertsView,
    },
    {
      path: '/experts/:license',
      component: ExpertDetailView,
    },
    {
      path: '/contact',
      component: ContactView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/panel',
      component: PanelView,
    },
{
  path: '/experts/:id',
  name: 'expert-public',
  component: () => import('@/views/ExpertPublicView.vue'),
  props: true,
}
  ],
})

export default router