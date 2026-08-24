<template>
  <nav
    :class="[
      'fixed left-0 z-50 w-full bg-white p-1 shadow-md transition-all duration-300',
      isScrolled ? 'top-0' : 'top-[30px]',
    ]"
  >
    <div class="mx-auto max-w-7xl px-6">
      <!-- Desktop -->
      <div class="hidden h-[72px] flex-row-reverse items-center md:flex">
        <RouterLink to="/" class="flex cursor-pointer flex-row-reverse items-center gap-3">
          <div class="rounded-lg bg-[#0F5132] p-1.5 shadow-sm">
            <img :src="logo" alt="logo" class="h-12 w-12 object-contain" />
          </div>

          <div class="text-right">
            <h1 class="whitespace-nowrap text-[18px] font-bold text-[#13224A]">
              تعاونی تامین آتیه کارشناسان
            </h1>
            <p class="whitespace-nowrap text-[11px] text-gray-500">
              دادگستری استان گلستان — تأمین آتیه کارشناسان
            </p>
          </div>
        </RouterLink>

        <!--
          Active styling is applied only to these regular navigation links.
          The login/panel button intentionally does not use this logic.
        -->
        <ul class="mr-auto ml-4 flex items-center gap-6 text-[14px] font-medium">
          <li v-for="item in desktopNavItems" :key="item.to">
            <RouterLink :to="item.to" :class="desktopLinkClass(item.to)">
              {{ item.label }}
              <span
                :class="[
                  'absolute -bottom-2 right-0 h-0.5 rounded-full bg-[#1D4ED8] transition-all duration-200',
                  isNavActive(item.to) ? 'w-full' : 'w-0',
                ]"
                aria-hidden="true"
              />
            </RouterLink>
          </li>
        </ul>

        <!-- No persistent active color on this button, as requested. -->
        <RouterLink
          :to="isLoggedIn ? '/panel' : '/login'"
          class="rounded-lg bg-[#13224A] px-6 py-3 text-[13px] font-medium text-white transition-all duration-150 hover:bg-[#1A2F61] hover:font-bold active:scale-95 active:shadow-inner"
        >
          {{ isLoggedIn ? '← پنل من' : '← ورود اعضا' }}
        </RouterLink>
      </div>

      <!-- Mobile -->
      <div class="md:hidden">
        <div class="flex h-[68px] items-center justify-between border-b border-gray-200 px-1">
          <button
            type="button"
            :aria-expanded="isOpen"
            aria-label="نمایش منو"
            class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#13224A] transition-all duration-200 hover:font-bold active:scale-90"
            @click="toggleMenu"
          >
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <RouterLink to="/" class="flex cursor-pointer flex-row-reverse items-center gap-2" @click="isOpen = false">
            <div class="rounded-lg bg-[#0F5132] p-1">
              <img :src="logo" class="h-10 w-10 object-contain" alt="logo" />
            </div>
            <div class="text-right">
              <h2 class="whitespace-nowrap text-[13px] font-bold text-[#13224A]">
                تعاونی تأمین آتیه کارشناسان
              </h2>
              <p class="whitespace-nowrap text-[9px] text-gray-500">
                کانون کارشناسان رسمی دادگستری استان گلستان
              </p>
            </div>
          </RouterLink>
        </div>

        <transition
          enter-active-class="transition-all duration-300"
          leave-active-class="transition-all duration-300"
          enter-from-class="-translate-y-3 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="-translate-y-3 opacity-0"
        >
          <div v-if="isOpen" class="bg-white shadow-sm">
            <ul>
              <li v-for="item in mobileNavItems" :key="item.to" class="border-b border-gray-200">
                <RouterLink
                  :to="item.to"
                  :class="mobileLinkClass(item.to)"
                  @click="isOpen = false"
                >
                  <span>{{ item.label }}</span>
                  <span v-if="isNavActive(item.to)" class="h-2 w-2 rounded-full bg-[#1D4ED8]" />
                </RouterLink>
              </li>
            </ul>

            <div class="p-4">
              <RouterLink
                :to="isLoggedIn ? '/panel' : '/login'"
                class="flex w-full items-center justify-center rounded-lg bg-[#13224A] py-2.5 text-[14px] font-semibold text-white transition-all duration-150 hover:bg-[#1A2F61] hover:font-bold active:scale-95 active:shadow-inner"
                @click="isOpen = false"
              >
                {{ isLoggedIn ? 'پنل من ←' : 'ورود اعضا ←' }}
              </RouterLink>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/logo.webp'
import { useAuth } from '@/composables/useAuth'

interface NavItem {
  label: string
  to: string
}

const { isLoggedIn } = useAuth()
const route = useRoute()

const desktopNavItems: NavItem[] = [
  { label: 'نمایش اعضا', to: '/experts' },
  { label: 'تماس با ما', to: '/contact' },
  { label: 'درباره ما', to: '/about' },
  { label: 'صفحه اصلی', to: '/' },
]

const mobileNavItems: NavItem[] = [...desktopNavItems].reverse()

const isOpen = ref(false)
const isScrolled = ref(false)

/**
 * Home is exact-only. Other items also remain active on their child routes;
 * for example /experts/3871 keeps «نمایش اعضا» active.
 */
const isNavActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(`${path}/`)
}

const desktopLinkClass = (path: string) => [
  'relative block whitespace-nowrap py-1 font-medium transition-colors duration-200',
  isNavActive(path)
    ? 'font-extrabold text-[#1D4ED8]'
    : 'text-[#13224A] hover:text-[#1D4ED8]',
]

const mobileLinkClass = (path: string) => [
  'flex items-center justify-between px-6 py-3 text-right text-[15px] transition-colors duration-200',
  isNavActive(path)
    ? 'bg-blue-50 font-extrabold text-[#1D4ED8]'
    : 'font-medium text-[#13224A] hover:bg-gray-50 hover:text-[#1D4ED8]',
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>