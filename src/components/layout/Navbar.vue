<template>
  <nav
  :class="[
    'fixed left-0 w-full bg-white shadow-md z-50 transition-all duration-300',
    isScrolled ? 'top-0' : 'top-12'
  ]"
>
    <div class="max-w-7xl mx-auto px-4">

      <div
        class="
          hidden
          md:flex
          flex-row-reverse
          items-center
          h-[72px]
        "
      >

        <!-- ================= LOGO + TEXT ================= -->

        <div
          class="
            flex
            flex-row-reverse
            items-center
            gap-3
          "
        >

          <!-- Logo -->

          <div
            class="
              bg-[#0F5132]
              rounded-lg
              p-1.5
              shadow-sm
            "
          >

            <img
              :src="logo"
              alt="logo"
              class="w-12 h-12 object-contain"
            />

          </div>


          <!-- Text -->

          <div class="text-right">

            <h1
              class="
                text-[18px]
                font-bold
                text-[#13224A]
                whitespace-nowrap
              "
            >
            تعاونی تامین آتیه کارشناسان
            </h1>

            <p
              class="
                text-[11px]
                text-gray-500
                whitespace-nowrap
              "
            >
              دادگستری استان گلستان — تأمین آتیه کارشناسان
            </p>

          </div>

        </div>


        <!-- ================= MENU ================= -->

        <ul
          class="
            flex
            items-center
            gap-6
            text-[14px]
            font-medium
            mr-auto
            ml-4
          "
        >

          <!-- صفحه اصلی -->

          <li
            class="
              cursor-pointer
              text-[#13224A]
              font-medium
              hover:text-[#1D4ED8]
              transition-all
              duration-200
            "
          >
           نمایش اعضا
          </li>


          <!-- درباره ما -->

          <li
            class="
              cursor-pointer
              text-[#13224A]
              font-medium
              hover:text-[#1D4ED8]
              transition-all
              duration-200
            "
          >
           تماس با ما
          </li>


          <!-- تماس با ما -->

          <li
            class="
              cursor-pointer
              text-[#13224A]
              font-medium
              hover:text-[#1D4ED8]
              transition-all
              duration-200
            "
          >
           درباره ما
          </li>


          <!-- نمایش اعضا -->

          <li
            class="
              cursor-pointer
              text-[#13224A]
              font-medium
              hover:text-[#1D4ED8]
              transition-all
              duration-200
            "
          >
            صفحه اصلی
          </li>

        </ul>


        <!-- ================= LOGIN BUTTON ================= -->

        <button
          class="
            bg-[#13224A]
            text-white
            rounded-lg
            px-6
            py-2.5
            text-[13px]
            font-medium

            hover:font-bold

            active:scale-95
            active:shadow-inner

            transition-all
            duration-150
          "
        >
          ← ورود اعضا
        </button>

      </div>


      <!-- ================================================= -->
      <!-- MOBILE -->
      <!-- ================================================= -->

      <div class="md:hidden">

        <!-- ================= MOBILE HEADER ================= -->

        <div
          class="
            flex
            items-center
            justify-between
            h-[68px]
            px-1
            border-b
            border-gray-200
          "
        >

          <!-- ================= HAMBURGER ================= -->

          <button
            @click="toggleMenu"
            class="
              w-10
              h-10
              rounded-lg
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-[#13224A]

              hover:font-bold  

              active:scale-90

              transition-all
              duration-200
            "
          >

            <!-- Hamburger -->

            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />

            </svg>


            <!-- Close -->

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />

            </svg>

          </button>


          <!-- ================= MOBILE LOGO + TEXT ================= -->

          <div
            class="
              flex
              flex-row-reverse
              items-center
              gap-2
            "
          >

            <!-- Logo -->

            <div
              class="
                bg-[#0F5132]
                rounded-lg
                p-1
              "
            >

              <img
                :src="logo"
                class="w-10 h-10 object-contain"
                alt="logo"
              />

            </div>


            <!-- Text -->

            <div class="text-right">

              <h2
                class="
                  text-[13px]
                  font-bold
                  text-[#13224A]
                  whitespace-nowrap
                "
              >
                تعاونی تأمین آتیه کارشناسان
              </h2>

              <p
                class="
                  text-[9px]
                  text-gray-500
                  whitespace-nowrap
                "
              >
                کانون کارشناسان رسمی دادگستری استان گلستان
              </p>

            </div>

          </div>

        </div>


        <!-- ================================================= -->
        <!-- MOBILE DROPDOWN -->
        <!-- ================================================= -->

        <transition
          enter-active-class="transition-all duration-300"
          leave-active-class="transition-all duration-300"

          enter-from-class="opacity-0 -translate-y-3"
          enter-to-class="opacity-100 translate-y-0"

          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-3"
        >

          <div
            v-if="isOpen"
            class="bg-white shadow-sm"
          >

            <ul>

              <!-- ================= HOME ================= -->

              <li
                class="
                  border-b
                  border-gray-200
                  py-3
                  px-6

                  text-right
                  text-[15px]
                  font-medium
                  text-[#13224A]

                  cursor-pointer

                  hover:text-[#1D4ED8]

                  transition-all
                  duration-200
                "
              >
                صفحه اصلی
              </li>


              <!-- ================= ABOUT ================= -->

              <li
                class="
                  border-b
                  border-gray-200
                  py-3
                  px-6

                  text-right
                  text-[15px]
                  font-medium
                  text-[#13224A]

                  cursor-pointer

                  hover:text-[#1D4ED8]

                  transition-all
                  duration-200
                "
              >
                درباره ما
              </li>


              <!-- ================= CONTACT ================= -->

              <li
                class="
                  border-b
                  border-gray-200
                  py-3
                  px-6

                  text-right
                  text-[15px]
                  font-medium
                  text-[#13224A]

                  cursor-pointer

                  hover:text-[#1D4ED8]

                  transition-all
                  duration-200
                "
              >
                تماس با ما
              </li>


              <!-- ================= MEMBERS ================= -->

              <li
                class="
                  border-b
                  border-gray-200
                  py-3
                  px-6

                  text-right
                  text-[15px]
                  font-medium
                  text-[#13224A]

                  cursor-pointer

                  hover:text-[#1D4ED8]

                  transition-all
                  duration-200
                "
              >
                نمایش اعضا
              </li>

            </ul>


            <!-- ================= MOBILE LOGIN ================= -->

            <div class="p-4">

              <button
                class="
                  w-full
                  bg-[#13224A]
                  text-white

                  rounded-lg

                  py-2.5

                  text-[14px]
                  font-semibold

                  hover:font-bold

                  active:scale-95
                  active:shadow-inner

                  transition-all
                  duration-150
                "
              >
                ورود اعضا ←
              </button>

            </div>

          </div>

        </transition>

      </div>

    </div>

  </nav>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import logo from "@/assets/logo.webp"

const isOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

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