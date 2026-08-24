<template>

  <!-- ================= HEADER ================= -->

  <header class="fixed top-0 left-0 w-full z-50">
    <Topbar />
    <Navbar />
  </header>


  <!-- ================= MAIN ================= -->

  <main
    dir="rtl"
    class="flex-1 pt-[145px] pb-16 px-4 sm:px-6"
  >

    <div class="max-w-6xl mx-auto">


      <!-- ================= TITLE ================= -->

      <div class="mb-8">

        <p
          class="
            text-[#C8A44D]
            text-sm
            font-medium
            mb-3
          "
        >
          دایرکتوری کارشناسان
        </p>

        <h1
          class="
            text-3xl
            md:text-4xl
            font-black
            text-[#13224A]
          "
        >
          جستجوی کارشناسان رسمی
        </h1>

      </div>


      <!-- ================= FILTER BOX ================= -->

      <div
        class="
          bg-white
          rounded-2xl
          border
          border-gray-200
          shadow-sm
          p-3
          mb-7
        "
      >

        <div
          dir="rtl"
          class="
            grid
            grid-cols-1
            md:grid-cols-[1fr_1fr_1fr_auto]
            items-center
          "
        >


          <!-- ================= NAME ================= -->

          <div
            class="
              px-5
              py-3
            "
          >

            <span
              class="
                block
                text-xs
                text-gray-400
                mb-1
              "
            >
              نام و نام خانوادگی
            </span>

            <input
              v-model="filters.name"
              type="text"
              placeholder="جستجوی نام..."
              class="
                w-full
               border-3
                border-gray-300
                border-transparent
                focus:border-gray-300
                hover:border-transparent
                focus:outline-none
                px-2
                py-1
                font-medium
                text-[15px]
                text-[#13224A]
                placeholder:text-gray-400
                placeholder:font-normal
                bg-transparent
                transition-all
                duration-200
              "
            />

          </div>


          <!-- ================= FIELD ================= -->

          <div
            ref="fieldRef"
            class="
              relative
              px-5
              py-3
            "
          >

            <span
              class="
                block
                text-xs
                text-gray-400
                mb-1
              "
            >
              رشته تخصصی
            </span>


            <button
              type="button"
              @click="toggleField"
              class="
                w-full
               border-3
                border-gray-300
                border-transparent
                focus:border-gray-300
                hover:border-transparent
                font-medium
                text-[15px]
                text-[#13224A]
                bg-transparent
                outline-none
                flex
                items-center
                justify-between
                gap-2
                cursor-pointer
                px-2
                py-1
                transition-all
                duration-200
              "
            >

              <span>
                {{ filters.field }}
              </span>


              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  w-4
                  h-4
                  text-gray-400
                  shrink-0
                  transition-transform
                  duration-200
                "
                :class="isFieldOpen ? 'rotate-180' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />

              </svg>

            </button>


            <!-- ================= DROPDOWN ================= -->

            <transition
              enter-active-class="transition-all duration-150"
              leave-active-class="transition-all duration-100"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >

              <ul
                v-if="isFieldOpen"
                class="
                  absolute
                  left-0
                  top-full
                  mt-1
                  w-[190px]
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  shadow-xl
                  z-[999]
                  py-1
                  overflow-hidden
                "
              >

                <li
                  v-for="option in fieldOptions"
                  :key="option"
                  @click="selectField(option)"
                  class="
                    px-3
                    py-2
                    text-xs
                    text-right
                    cursor-pointer
                    transition-all
                    duration-150
                    whitespace-nowrap
                  "
                  :class="
                    filters.field === option
                      ? 'bg-[#1D4ED8] text-white font-medium'
                      : 'text-[#13224A] hover:bg-gray-50'
                  "
                >
                  {{ option }}
                </li>

              </ul>

            </transition>

          </div>


          <!-- ================= LICENSE ================= -->

          <div
            class="
              px-5
              py-3
            "
          >

            <span
              class="
                block
                text-xs
                text-gray-400
                mb-1
              "
            >
              شماره پروانه
            </span>

            <input
              v-model="filters.license"
              type="text"
              placeholder="۱۴۰۲..."
              class="
                w-full
                border-3
                border-gray-300
                border-transparent
                focus:border-gray-300
                hover:border-transparent
                focus:outline-none
                px-2
                py-1
                font-medium
                text-[15px]
                text-[#13224A]
                placeholder:text-gray-400
                bg-transparent
                transition-all
                duration-200
              "
            />

          </div>


          <!-- ================= CLEAR BUTTON ================= -->

          <button
            type="button"
            @click="resetFilters"
            class="
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-600
              bg-[#F1F2F6]
              border-0
              hover:bg-white
              transition-all
              duration-300
              ease-out
              px-7
              py-4
              rounded-xl
              mt-3
              md:mt-0
            "
          >
            پاک‌کردن فیلتر
          </button>

        </div>

      </div>


      <!-- ================= RESULT COUNT ================= -->

      <p
        class="
          text-sm
          text-gray-500
          mb-5
        "
      >
        {{ filteredExperts.length }} کارشناس یافت شد
      </p>


      <!-- ================= EXPERTS ================= -->

      <div
        class="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        "
      >

        <div
          v-for="expert in filteredExperts"
          :key="expert.license"
          class="
            group
            bg-white
            rounded-2xl
            border
            border-gray-200
            p-5
            shadow-sm
            hover:-translate-y-1
            hover:shadow-xl
            hover:border-gray-300
            transition-all
            duration-300
            ease-out
          "
        >

          <!-- ================= TOP ================= -->

          <div
            class="
              flex
              items-start
              gap-4
              mb-4
            "
          >

            <!-- ================= IMAGE ================= -->

            <div
              class="
                w-16
                h-16
                rounded-xl
                flex-shrink-0
                overflow-hidden
                order-first
              "
              style="
                background-image:
                repeating-linear-gradient(
                  45deg,
                  #E5E2D9,
                  #E5E2D9 6px,
                  #F3F1EB 6px,
                  #F3F1EB 12px
                );
              "
            ></div>


            <!-- ================= TEXT ================= -->

            <div
              class="
                flex-1
                min-w-0
              "
            >

              <div
                class="
                  flex
                  items-center
                  gap-2
                  flex-wrap
                  mb-2
                "
              >

                <h3
                  class="
                    text-[17px]
                    font-bold
                    text-[#13224A]
                  "
                >
                  {{ expert.name }}
                </h3>


                <span
                  class="
                    inline-flex
                    items-center
                    text-[11px]
                    font-medium
                    px-2.5
                    py-1
                    rounded-full
                  "
                  :class="
                    expert.status === 'معتبر'
                      ? 'bg-[#E7F4EC] text-green-700'
                      : 'bg-[#F8F0DE] text-[#A56A00]'
                  "
                >
                  {{
                    expert.status === 'معتبر'
                      ? 'صلاحیت معتبر'
                      : 'در حال تمدید'
                  }}
                </span>

              </div>


              <p
                class="
                  text-gray-500
                  text-sm
                "
              >
                {{ expert.field }}
              </p>

            </div>

          </div>


          <!-- ================= TAGS ================= -->

          <div
            class="
              flex
              flex-wrap
              gap-2
              mb-4
            "
          >

            <span
              v-for="tag in expert.tags"
              :key="tag"
              class="
                text-xs
                text-[#13224A]
                bg-[#F2F3F7]
                rounded-full
                px-3
                py-1.5
                transition-colors
                duration-200
                group-hover:bg-[#F0F1F5]
              "
            >
              {{ tag }}
            </span>

          </div>


        <!-- ================= BOTTOM ================= -->

<div
  class="
    flex
    items-center
    justify-between
    gap-3
    pt-3
    border-t
    border-gray-100
  "
>

  <!-- شهر و پروانه سمت راست -->
  <span
    dir="rtl"
    class="
      text-xs
      text-gray-400
    "
  >
    {{ expert.city }}
    ·
    پروانه {{ expert.license }}
  </span>


  <!-- نمای عمومی سمت چپ -->
  <!-- نمای عمومی سمت چپ -->
  <RouterLink
    :to="'/experts/' + expert.license"
    class="
      text-[#1D4ED8]
      text-sm
      font-medium
      transition-colors
      duration-200
    "
  >
    نمای عمومی ←
  </RouterLink>

</div>

        </div>

      </div>


      <!-- ================= EMPTY ================= -->

      <div
        v-if="filteredExperts.length === 0"
        class="
          bg-white
          rounded-2xl
          border
          border-gray-200
          p-10
          text-center
          mt-5
        "
      >

        <p class="text-gray-500">
          کارشناسی با این مشخصات پیدا نشد.
        </p>

      </div>

    </div>

  </main>


  <!-- ================= FOOTER ================= -->

  <Footer />

</template>


<script setup lang="ts">

import {
  ref,
  computed,
  onMounted
} from 'vue'

import { useRoute } from 'vue-router'

import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'


// ================= ROUTE =================

const route = useRoute()


// ================= EXPERTS =================

const experts = [

  {
    name: 'مهندس رضا محمدی',
    field: 'راه و ساختمان',
    status: 'معتبر',
    tags: [
      'ارزیابی املاک و مستغلات',
      'نظارت بر اجرای پروژه',
      'تعیین خسارت ساختمان'
    ],
    city: 'گرگان',
    license: '۴۱۰۲'
  },

  {
    name: 'مهندس زهرا کریمی',
    field: 'امور ثبتی و نقشه‌برداری',
    status: 'معتبر',
    tags: [
      'پیاده‌سازی نقشه ثبتی',
      'تعیین حدود اربعه',
      'تفکیک و افراز اراضی'
    ],
    city: 'گنبد کاووس',
    license: '۳۸۷۱'
  },
  {
    name: 'دکتر علی حسینی',
    field: 'حسابداری و حسابرسی',
    status: 'معتبر',
    tags: [
      'حسابرسی مالی',
      'بررسی دفاتر قانونی',
      'تعیین مطالبات'
    ],
    city: 'علی‌آباد کتول',
    license: '۴۲۹۰'
  },

  {
    name: 'مهندس فاطمه رستگار',
    field: 'کشاورزی و منابع طبیعی',
    status: 'معتبر',
    tags: [
      'کارشناسی باغات',
      'برآورد خسارت محصول',
      'ارزیابی اراضی کشاورزی'
    ],
    city: 'گرگان',
    license: '۳۹۵۵'
  },


  {
    name: 'مهندس حسین قربانی',
    field: 'تصادفات و راهنمایی و رانندگی',
    status: 'معتبر',
    tags: [
      'بازسازی صحنه تصادف',
      'تحلیل فنی خودرو',
      'تعیین مقصر'
    ],
    city: 'گرگان',
    license: '۴۰۱۸'
  },

  {
    name: 'مهندس مریم نادری',
    field: 'برق، الکترونیک و مخابرات',
    status: 'معتبر',
    tags: [
      'تأسیسات برقی ساختمان',
      'سیستم‌های مخابراتی',
      'برآورد خسارت تجهیزات'
    ],
    city: 'بندر گز',
    license: '۴۱۸۷'
  },

  {
    name: 'مهندس سعید اکبری',
    field: 'وسایط نقلیه موتوری',
    status: 'تمدید',
    tags: [
      'ارزیابی خودرو',
      'تشخیص اصالت',
      'برآورد افت قیمت'
    ],
    city: 'کردکوی',
    license: '۳۹۰۲'
  },


  {
    name: 'مهندس نرگس عابدی',
    field: 'امور بازرگانی و اموال منقول',
    status: 'معتبر',
    tags: [
      'ارزیابی کالا و اموال منقول',
      'کارشناسی قراردادها',
      'برآورد خسارت بازرگانی'
    ],
    city: 'آق‌قلا',
    license: '۴۲۳۳'
  },


]


// ================= FIELD OPTIONS =================

const fieldOptions = computed(() => {

  const fields = experts.map(
    expert => expert.field
  )

  return [
    'همهٔ رشته‌ها',
    ...Array.from(new Set(fields))
  ]

})


// ================= FILTERS =================

const filters = ref({

  name:
    typeof route.query.name === 'string'
      ? route.query.name
      : '',

  field:
    typeof route.query.field === 'string'
      ? route.query.field
      : 'همهٔ رشته‌ها',

  license:
    typeof route.query.license === 'string'
      ? route.query.license
      : ''

})


// ================= DROPDOWN =================

const isFieldOpen = ref(false)

const fieldRef =
  ref<HTMLElement | null>(null)


const toggleField = () => {

  isFieldOpen.value =
    !isFieldOpen.value

}


const selectField = (
  option: string
) => {

  filters.value.field =
    option

  isFieldOpen.value =
    false

}


// ================= RESET =================

const resetFilters = () => {

  filters.value = {

    name: '',

    field:
      'همهٔ رشته‌ها',

    license: ''

  }

}


// ================= FILTER =================

const filteredExperts =
  computed(() => {

    return experts.filter(
      expert => {

        const matchName =
          filters.value.name
            ? expert.name
                .toLowerCase()
                .includes(
                  filters.value.name.toLowerCase()
                )
            : true


        const matchField =
          filters.value.field ===
          'همهٔ رشته‌ها'
            ? true
            : expert.field ===
              filters.value.field


        const matchLicense =
          filters.value.license
            ? expert.license.includes(
                filters.value.license
              )
            : true


        return (
          matchName &&
          matchField &&
          matchLicense
        )

      }
    )

  })


// ================= CLICK OUTSIDE =================

const handleClickOutside = (
  event: MouseEvent
) => {

  if (
    fieldRef.value &&
    !fieldRef.value.contains(
      event.target as Node
    )
  ) {

    isFieldOpen.value =
      false

  }

}


onMounted(() => {

  document.addEventListener(
    'click',
    handleClickOutside
  )

})

</script>