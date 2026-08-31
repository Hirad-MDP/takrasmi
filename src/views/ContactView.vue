<template>
  <div class="min-h-screen flex flex-col bg-[#F8F9FB]">

    <header class="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar />
    </header>

    <main class="flex-1">

      <!-- ================= Hero Banner ================= -->
      <section dir="rtl" class="bg-[#0B1B3A] pt-36 pb-14 px-6">
        <div class="max-w-6xl mx-auto">

          <p class="text-[#C8A44D] text-sm font-medium mb-3">
            ارتباط با ما
          </p>

          <h1 class="text-3xl md:text-4xl font-black text-white">
            با تعاونی در تماس باشید
          </h1>

        </div>
      </section>


      <!-- ================= Contact Content ================= -->
      <section dir="rtl" class="py-14 px-6">

        <div
          dir="ltr"
          class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
        >

          <!-- ================= Form ================= -->
          <div
            dir="rtl"
            class="bg-white rounded-2xl shadow-sm p-8"
          >

            <h2 class="text-xl font-bold text-[#13224A] mb-2">
              ارسال پیام
            </h2>

            <p class="text-gray-500 text-sm mb-6">
              پرسش یا درخواست خود را برای ما ارسال کنید.
            </p>


            <form
              class="space-y-5"
              @submit.prevent="submitForm"
            >

              <!-- ================= Success Message ================= -->
              <div
                v-if="showSuccess"
                class="
                  bg-[#E7F4EC]
                  text-[#15803D]
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                "
              >
                ✓ پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم.
              </div>


              <!-- ================= Error Message ================= -->
              <div
                v-if="errorMessage"
                class="
                  bg-red-50
                  text-red-600
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                "
              >
                {{ errorMessage }}
              </div>


              <!-- ================= Name + Phone ================= -->
              <div
                class="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                "
              >

                <!-- Full Name -->
                <div>

                  <label
                    for="fullName"
                    class="
                      block
                      text-sm
                      text-gray-500
                      mb-2
                    "
                  >
                    نام و نام خانوادگی
                  </label>

                  <input
                    id="fullName"
                    v-model="form.fullName"
                    type="text"
                    class="
                      w-full
                      border
                      border-gray-200
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      outline-none
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                      transition-all
                      duration-150
                    "
                  />

                </div>


                <!-- Phone -->
                <div>

                  <label
                    for="phone"
                    class="
                      block
                      text-sm
                      text-gray-500
                      mb-2
                    "
                  >
                    شمارهٔ تماس
                  </label>

                  <input
                    id="phone"
                    v-model="form.phone"
                    type="text"
                    class="
                      w-full
                      border
                      border-gray-200
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      outline-none
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                      transition-all
                      duration-150
                    "
                  />

                </div>

              </div>


              <!-- ================= Subject ================= -->
              <div>

                <label
                  for="subject"
                  class="
                    block
                    text-sm
                    text-gray-500
                    mb-2
                  "
                >
                  موضوع
                </label>

                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="
                    w-full
                    border
                    border-gray-200
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                    transition-all
                    duration-150
                  "
                />

              </div>


              <!-- ================= Message ================= -->
              <div>

                <label
                  for="message"
                  class="
                    block
                    text-sm
                    text-gray-500
                    mb-2
                  "
                >
                  متن پیام
                </label>

                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  class="
                    w-full
                    border
                    border-gray-200
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                    transition-all
                    duration-150
                    resize-none
                  "
                ></textarea>

              </div>


              <!-- ================= Submit ================= -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="
                  w-full
                  bg-[#13224A]
                  hover:bg-[#1a2f61]
                  active:scale-[0.99]
                  transition-all
                  duration-150
                  text-white
                  rounded-lg
                  py-3.5
                  font-bold
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {{ isSubmitting ? 'در حال ارسال...' : 'ارسال پیام' }}
              </button>

            </form>

          </div>


          <!-- ================= Info + Map ================= -->
          <div
            dir="rtl"
            class="flex flex-col gap-6"
          >

            <!-- Phone -->
            <div
              dir="rtl"
              class="
                bg-white
                rounded-2xl
                shadow-sm
                p-6
                flex
                items-center
                justify-start
                gap-4
              "
            >

              <div
                class="
                  w-[46px]
                  h-[46px]
                  rounded-[11px]
                  text-blue-600
                  bg-[#e7f4ec]
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-[19px]
                "
              >
                ☏
              </div>

              <div dir="rtl" class="text-right">

                <h3 class="font-bold text-[#13224A]">
                  تلفن دفتر
                </h3>

                <p
                  dir="ltr"
                  class="
                    text-gray-500
                    text-sm
                    mt-1
                    text-right
                  "
                >
                  ۰۱۷-۳۲۲۲۰۰۰۰
                </p>

              </div>

            </div>


            <!-- Email -->
            <div
              dir="rtl"
              class="
                bg-white
                rounded-2xl
                shadow-sm
                p-6
                flex
                items-center
                justify-start
                gap-4
              "
            >

              <div
                class="
                  w-[46px]
                  h-[46px]
                  rounded-[11px]
                  bg-[#e7f4ec]
                  text-green-700
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-[19px]
                "
              >
                ✉
              </div>

              <div dir="rtl" class="text-right">

                <h3 class="font-bold text-[#13224A]">
                  پست الکترونیک
                </h3>

                <p class="text-gray-500 text-sm mt-1">
                  info@takrasmi.com
                </p>

              </div>

            </div>


            <!-- Address -->
            <div
              dir="rtl"
              class="
                bg-white
                rounded-2xl
                shadow-sm
                p-6
                flex
                items-center
                justify-start
                gap-4
              "
            >

              <div
                class="
                  w-[46px]
                  h-[46px]
                  rounded-[11px]
                  bg-[#e7f4ec]
                  text-yellow-500
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-[19px]
                "
              >
                ⚲
              </div>

              <div dir="rtl" class="text-right">

                <h3 class="font-bold text-[#13224A]">
                  نشانی دفتر
                </h3>

                <p
                  class="
                    text-gray-500
                    text-sm
                    mt-1
                    leading-6
                  "
                >
                  گرگان، خیابان ولیعصر، ساختمان کانون کارشناسان
                </p>

              </div>

            </div>


         <!-- Map -->
<div
  class="
    bg-[#EFEBE3]
    rounded-2xl
    h-56
    border
    border-dashed
    border-gray-400
    flex
    items-center
    justify-center
    text-gray-400
    text-sm
  "
>
  نقشهٔ محل دفتر
</div>

          </div>

        </div>

      </section>

    </main>


    <Footer />

  </div>
</template>


<script setup lang="ts">

import { reactive, ref } from 'vue'

import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import { submitContactForm } from '@/services/contactApi'


const form = reactive({
  fullName: '',
  phone: '',
  subject: '',
  message: '',
})


const showSuccess = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')


const submitForm = async () => {

  errorMessage.value = ''
  isSubmitting.value = true

  try {
    await submitContactForm(form)

    showSuccess.value = true
    form.fullName = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'خطایی رخ داد.'
  } finally {
    isSubmitting.value = false
  }

}

</script>