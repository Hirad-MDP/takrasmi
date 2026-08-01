<template>

  <section
    dir="rtl"
    class="bg-[#F7F6F3] py-20"
  >

    <div class="max-w-6xl mx-auto px-6">

      <!-- Title -->

      <div class="text-center mb-12">

        <span
          class="text-[#C8A44D]
          text-sm
          font-bold"
        >
          خدمات تعاونی
        </span>

        <h2
          class="mt-3
          text-3xl
          md:text-4xl
          font-black
          text-[#071A42]"
        >
          امکانات ویژه اعضا
        </h2>

      </div>


      <!-- Cards -->

      <div
        class="grid
        grid-cols-1
        md:grid-cols-3
        gap-6"
      >

        <div
          v-for="item in features"
          :key="item.title"
          class="bg-white
          border border-gray-200
          rounded-2xl
          p-8
          min-h-[220px]
          hover:-translate-y-1
          hover:shadow-lg
          transition"
        >

          <!-- Icon -->

          <div
            class="w-12 h-12
            rounded-xl
            flex items-center
            justify-center
            text-xl
            mb-6"
            :class="item.iconBg"
          >
            {{ item.icon }}
          </div>


          <h3
            class="text-xl
            font-bold
            text-[#071A42]"
          >
            {{ item.title }}
          </h3>


          <p
            class="mt-4
            text-gray-500
            leading-8
            text-sm"
          >
            {{ item.description }}
          </p>

        </div>

      </div>

    </div>

  </section>

</template>


<script setup lang="ts">

const features = [

  {
    title: "تسهیلات اعتباری",
    description:
      "وام و تسهیلات قرض‌الحسنه با شرایط ویژه اعضای تعاونی.",
    icon: "₪",
    iconBg: "bg-[#EEF1FF] text-[#3154DD]"
  },

  {
    title: "بیمه تکمیلی",
    description:
      "پوشش درمانی گروهی برای اعضا و خانواده ایشان.",
    icon: "+",
    iconBg: "bg-[#E7F4ED] text-[#16733E]"
  },

  {
    title: "آموزش و بازآموزی",
    description:
      "دوره‌های تخصصی و کارگاه‌های ارتقای صلاحیت کارشناسی.",
    icon: "◇",
    iconBg: "bg-[#F8F0DF] text-[#C8A44D]"
  }

]

</script>
<script setup lang="ts">

</script>
