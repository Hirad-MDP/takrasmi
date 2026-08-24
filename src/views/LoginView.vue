<template>
  <div class="min-h-screen flex flex-col bg-[#F8F9FB]">

    <header class="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar />
    </header>

    <main
      dir="rtl"
      class="flex-1 flex items-center justify-center px-5 pt-36 pb-16"
    >

      <!-- ================= LOGIN CARD ================= -->

      <div class="relative w-full max-w-[420px]">

        <!-- Gradient top border -->
        <div
          class="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl"
          style="background: linear-gradient(90deg, #0B1B3A 0%, #C8A44D 50%, #0B1B3A 100%);"
        ></div>

        <div
          class="
            bg-white
            rounded-2xl
            shadow-sm
            border
            border-gray-100
            px-9
            pt-8
            pb-8
            text-center
          "
        >

          <!-- ================= LOGO ================= -->

          <div class="flex justify-center mb-5">

            <div class="w-20 h-20 flex items-center justify-center">
              <img
                :src="logo"
                alt="لوگو"
                class="w-full h-full object-contain"
              />
            </div>

          </div>


          <!-- ================= TITLE ================= -->

          <h1 class="text-[#13224A] text-xl font-black mb-2">
            ورود / ثبت‌نام
          </h1>


          <!-- ================= DESCRIPTION ================= -->

          <p class="text-gray-500 text-sm leading-7 mb-6">
            سلام! لطفاً شماره موبایل خود را وارد کنید
          </p>


          <!-- ================= PHONE INPUT ================= -->

          <div class="text-right">

            <input
              id="phone"
              v-model="phone"
              type="tel"
              inputmode="numeric"
              maxlength="11"
              placeholder="09xxxxxxxxx"
              class="
                w-full
                h-12
                px-4
                rounded-xl
                text-center
                text-[#13224A]
                text-sm
                outline-none
                border
                transition-all
                duration-200
              "
              :class="
                showError
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-[#C8A44D] focus:ring-4 focus:ring-[#C8A44D]/10'
              "
            />

            <!-- ================= ERROR ================= -->

            <p
              v-if="showError"
              class="text-red-500 text-xs mt-2 text-center"
            >
              فرمت شماره موبایل نادرست است
            </p>

          </div>


          <!-- ================= TERMS ================= -->

          <div class="mt-4 mb-5 text-center">

            <a   href="#"
              @click.prevent="showTerms = true"
              class="
                text-[#13224A]
                text-xs
                underline
                underline-offset-4
                hover:text-[#C8A44D]
                transition-colors
                duration-200
              ">
              قوانین و مقررات را مطالعه کنید
            </a>

          </div>


          <!-- ================= CONTINUE BUTTON ================= -->

          <button
            type="button"
            @click="continueLogin"
            class="
              w-full
              h-12
              rounded-xl
              bg-[#13224A]
              text-white
              font-bold
              text-sm
              transition-all
              duration-200
              hover:bg-[#C8A44D]
              hover:text-[#111827]
              active:scale-[0.98]
            "
          >
            ادامه
          </button>


          <!-- ================= PRIVACY ================= -->

          <p class="text-gray-400 text-[11px] leading-6 mt-4">
            ورود شما به معنای پذیرش قوانین حریم خصوصی است
          </p>

        </div>

      </div>


      <!-- ================= TERMS MODAL ================= -->

      <transition
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-150"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showTerms"
          class="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-5"
          @click.self="showTerms = false"
        >

          <div
            class="
              w-full
              max-w-[420px]
              bg-white
              rounded-2xl
              shadow-lg
              p-6
              text-right
              max-h-[80vh]
              overflow-y-auto
            "
          >

        

            <button
              type="button"
              @click="showTerms = false"
              class="
                w-full
                h-11
                rounded-xl
                border
                border-[#C8A44D]
                text-[#13224A]
                text-sm
                font-medium
                hover:bg-[#FBF3DF]
                transition-colors
                duration-200
              "
            >
              بستن
            </button>

          </div>

        </div>
      </transition>

    </main>

    <Footer />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import logo from '@/assets/logo.webp'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { login } = useAuth()

// ================= PHONE =================

const phone = ref('')
const showError = ref(false)
const showTerms = ref(false)

// ================= CONTINUE =================

const continueLogin = () => {
  const mobileRegex = /^09\d{9}$/

  if (!mobileRegex.test(phone.value)) {
    showError.value = true
    return
  }

  showError.value = false
  login()
  router.push('/panel')
}
</script>