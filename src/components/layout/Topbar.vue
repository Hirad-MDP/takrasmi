<template>
  <div
    class="grid overflow-hidden transition-all duration-300 ease-in-out"
    :class="isScrolled ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'"
  >
    <div class="min-h-0">
      <div class="bg-blue-950 flex justify-between items-center px-5 sm:px-8 lg:px-10 py-2">

        <div class="flex items-center gap-3 text-[13px]">
          <span class="text-[#C8A96A]">
            شنبه تا چهارشنبه ۸ تا ۱۵
          </span>

          <span class="text-white hidden md:inline">
            گلستان — گرگان، خیابان ولیعصر
          </span>
        </div>

        <span dir="ltr" class="text-gray-400 text-[13px]">
          info@takrasmi.com | ☏ ۰۱۷–۳۲۲۲۰۰۰۰
        </span>

      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>