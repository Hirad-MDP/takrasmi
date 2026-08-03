<template>
  <section dir="rtl" class="bg-white py-20">
    <div class="max-w-4xl mx-auto px-6">

      <!-- Label -->
      <p class="text-center text-sm font-medium text-[#C8A44D] mb-2">
        پرسش‌های متداول
      </p>

      <!-- Title -->
      <h2 class="text-center text-3xl md:text-4xl font-black text-[#13224A] mb-12">
        سؤالات پرتکرار
      </h2>

      <!-- Accordion -->
      <div class="space-y-4">

        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="rounded-xl border overflow-hidden transition-all duration-200"
          :class="openIndex === index ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-200'"
        >

          <button
            type="button"
            @click="toggle(index)"
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-right cursor-pointer"
          >

            <span class="font-bold text-[#13224A] text-base md:text-lg">
              {{ item.question }}
            </span>

            <span
              class="flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg font-bold text-[#1D4ED8]"
            >
              {{ openIndex === index ? '−' : '+' }}
            </span>

          </button>

          <div
            v-show="openIndex === index"
            class="px-6 pb-5 text-gray-500 text-sm md:text-base leading-8 text-right"
          >
            {{ item.answer }}
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: 'چگونه کارشناس رسمی مناسب را پیدا کنم؟',
    answer: 'از طریق نوار جستجو می‌توانید بر اساس نام، رشتهٔ تخصصی یا شمارهٔ پروانه، کارشناس مورد نظر را بیابید و به صفحهٔ عمومی او مراجعه کنید.'
  },
  {
    question: 'آیا اعتبار پروانهٔ کارشناسان قابل استعلام است؟',
    answer: 'بله؛ در صفحهٔ عمومی هر کارشناس، وضعیت اعتبار صلاحیت و شمارهٔ پروانه نمایش داده می‌شود.'
  },
  {
    question: 'خدمات تعاونی شامل چه مواردی است؟',
    answer: 'تسهیلات اعتباری و قرض‌الحسنه، بیمهٔ تکمیلی درمان و دوره‌های آموزش و بازآموزی از جملهٔ خدمات ویژهٔ اعضاست.'
  },
  {
    question: 'چگونه اطلاعات صفحهٔ خود را ویرایش کنم؟',
    answer: 'پس از ورود به پنل اعضا، می‌توانید مشخصات، تخصص‌ها، اطلاعات تماس و رزومهٔ خود را ویرایش کنید.'
  },
]
</script>