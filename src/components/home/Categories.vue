<template>

  <section
    dir="rtl"
    class="bg-[#F7F6F3] py-20"
  >

    <div class="max-w-6xl mx-auto px-6">

      <!-- ================= TITLE ================= -->

      <div class="text-center mb-12">

        <span
          class="
            text-[#C8A44D]
            text-sm
            font-bold
          "
        >
          رشته‌های کارشناسی
        </span>

        <h2
          class="
            mt-3
            text-3xl
            md:text-4xl
            font-black
            text-[#071A42]
          "
        >
          صلاحیت‌های تخصصی کانون
        </h2>

      </div>


      <!-- ================= CARDS ================= -->

      <div
        class="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >

        <RouterLink
          v-for="item in categories"
          :key="item.title"
          :to="{
            path: '/experts',
            query: {
              field: item.field
            }
          }"
          class="
            bg-white
            rounded-xl
            border-t-4
            p-6
            shadow-sm
            hover:-translate-y-1
            hover:shadow-lg
            transition-all
            duration-300
            cursor-pointer
            block
            no-underline
          "
          :class="item.color"
        >

          <h3
            class="
              font-bold
              text-lg
              text-[#071A42]
            "
          >
            {{ item.title }}
          </h3>

          <p
            class="
              mt-2
              text-sm
              text-gray-500
            "
          >
            {{ item.count }} کارشناس
          </p>

        </RouterLink>

      </div>

    </div>

  </section>

</template>


<script setup lang="ts">

const categories = [

  {
    title: 'راه و ساختمان',
    field: 'راه و ساختمان',
    count: '۴۶',
    color: 'border-[#13224A]'
  },

  {
    title: 'حسابداری و حسابرسی',
    field: 'حسابداری و حسابرسی',
    count: '۲۸',
    color: 'border-[#2D4FE8]'
  },

  {
    title: 'وسایط نقلیه موتوری',
    field: 'وسایط نقلیه موتوری',
    count: '۲۲',
    color: 'border-[#2D4FE8]'
  },

  {
    title: 'امور ثبتی و نقشه‌برداری',
    field: 'امور ثبتی و نقشه‌برداری',
    count: '۴۱',
    color: 'border-[#2D4FE8]'
  },

  {
    title: 'کشاورزی و منابع طبیعی',
    field: 'کشاورزی و منابع طبیعی',
    count: '۳۷',
    color: 'border-[#C8A44D]'
  },

  {
    title: 'برق، الکترونیک و مخابرات',
    field: 'برق، الکترونیک و مخابرات',
    count: '۱۹',
    color: 'border-[#C8A44D]'
  },

  {
    title: 'امور بازرگانی و اموال منقول',
    field: 'امور بازرگانی و اموال منقول',
    count: '۱۵',
    color: 'border-[#22834A]'
  },

  {
    title: 'تصادفات و راهنمایی',
    field: 'تصادفات و راهنمایی و رانندگی',
    count: '۲۳',
    color: 'border-[#22834A]'
  }

]

</script>
