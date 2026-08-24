<template>
  <div class="min-h-screen flex flex-col bg-[#F8F9FB]">

    <header class="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar />
    </header>

    <main class="flex-1">

      <!-- ================= Breadcrumb ================= -->
      <div
        dir="rtl"
        class="pt-36 pb-4 px-6"
      >
        <div class="max-w-6xl mx-auto">

          <h2
            class="
              text-[#13224A]
              font-bold
              text-sm
            "
          >
            درباره ما
          </h2>

        </div>
      </div>


      <!-- ================= About Content ================= -->
      <section dir="rtl" class="pb-16 px-6">

        <div class="max-w-6xl mx-auto">

          <div
            class="
              bg-white
              rounded-2xl
              shadow-sm
              p-10
              md:p-14
              text-center
            "
          >

            <h1
              class="
                text-2xl
                md:text-3xl
                font-black
                text-[#13224A]
                mb-8
              "
            >
              درباره کانون وکلای دادگستری استان گلستان
            </h1>

            <p class="leading-9">
              کانون وکلای دادگستری استان گلستان با هدف حفظ استقلال نهاد
              وکالت، ارتقای اخلاق حرفه‌ای و ارائه خدمات حقوقی تخصصی فعالیت
              <br>
              می‌کند.
            </p>

            <p class="leading-9">
              این کانون با بهره‌گیری از وکلای مجرب و تعامل مؤثر با مراجع
              قضایی، نقش مهمی در تحقق عدالت و صیانت از حقوق شهروندان ایفا
              <br>
              می‌نماید.
            </p>

          </div>

        </div>

      </section>


      <!-- ================= Board Members ================= -->
      <section
        dir="rtl"
        class="bg-[#F4F2EC] py-20 px-6"
      >

        <div class="max-w-5xl mx-auto text-center">

          <h2
            class="
              text-2xl
              md:text-3xl
              font-black
              text-[#13224A]
              mb-3
            "
          >
            هیئت مدیره کانون وکلای دادگستری استان گلستان
          </h2>

          <p
            class="
              text-gray-400
              max-w-2xl
              mx-auto
              mb-12
              leading-7
            "
          >
            معرفی اعضای هیئت مدیره کانون وکلای استان گلستان؛
            نهادی مستقل در راستای صیانت از حقوق شهروندان و ارتقای عدالت قضایی.
          </p>


          <div
            dir="ltr"
            class="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-6
            "
          >

            <div
              v-for="member in boardMembers"
              :key="member.name"
              class="
                flex
                flex-col
                items-center
                rounded-xl
                p-8
              "
            >

              <div
                class="
                  w-44
                  h-44
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                "
              >

                <img
                  v-if="member.image"
                  :src="member.image"
                  :alt="member.name"
                  class="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div
                  v-else
                  class="
                    w-full
                    h-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-xs
                    text-gray-400
                  "
                >
                  عکس پرسنلی
                </div>

              </div>


              <h3
                class="
                  font-bold
                  text-[#13224A]
                  mt-4
                "
              >
                {{ member.name }}
              </h3>


              <p
                class="
                  text-[#C8A44D]
                  text-sm
                  mt-1
                "
              >
                {{ member.role }}
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>


    <Footer />

  </div>
</template>


<script setup lang="ts">

import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'


import hosseinImg from '@/assets/image/حسین محمدی.jpg'
import armanImg from '@/assets/image/ارمان عظیمی.jpg'
import AskariImg from '@/assets/image/گل اقلان عسگری.jpg'
import tazriImg from '@/assets/image/عبدالرحمن تزری.jpg'
import bstamiImg from '@/assets/image/مهران بسطامی.jpg'
import aghiliImg from '@/assets/image/سید داریوش بنی عقیلی.jpg'


const boardMembers = [

  {
    name: 'حسین محمدی',
    role: 'مدیرعامل',
    image: hosseinImg
  },

  {
    name: 'آرمان عظیمی',
    role: 'نایب رئیس هیئت مدیره',
    image: armanImg
  },

  {
    name: 'گل افلاک عسگری',
    role: 'رئیس هیئت مدیره',
    image: AskariImg
  },

  {
    name: 'عبدالرحمن تزری',
    role: 'بازرس',
    image: tazriImg
  },

  {
    name: 'مهران بسطامی',
    role: 'عضو هیئت مدیره',
    image: bstamiImg
  },

  {
    name: 'سید داریوش بنی عقیلی',
    role: 'عضو هیئت مدیره',
    image: aghiliImg
  }

]

</script>