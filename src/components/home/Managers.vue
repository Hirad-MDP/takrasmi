<template>

  <section
    dir="rtl"
    class="bg-[#07132F] py-20 text-white"
  >

    <div class="max-w-6xl mx-auto px-6">

      <!-- Title -->

      <div class="text-center mb-12">

        <span
          class="text-[#D8B45A]
          text-sm
          font-bold"
        >
          هیئت مدیره
        </span>

        <h2
          class="mt-3
          text-3xl
          md:text-4xl
          font-black"
        >
          مدیران تعاونی کارکنان کانون
        </h2>

      </div>


      <!-- Managers -->

      <div
        class="grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-5"
      >

        <div
          v-for="manager in managers"
          :key="manager.name"
          class="text-center"
        >

          <!-- Image -->

          <div
            class="aspect-[4/5]
            bg-[#F4F2EC]
            rounded-2xl
            overflow-hidden"
          >

            <img
              v-if="manager.image"
              :src="manager.image"
              :alt="manager.name"
              class="w-full h-full object-cover"
            />

            <div
              v-else
              class="w-full h-full
              flex items-center justify-center
              text-xs text-gray-500"
            >
              عکس پرسنلی
            </div>

          </div>


          <!-- Name -->

          <h3
            class="mt-4
            font-bold
            text-base"
          >
            {{ manager.name }}
          </h3>

          <p
            class="mt-2
            text-[#D8B45A]
            text-sm"
          >
            {{ manager.role }}
          </p>

        </div>

      </div>

    </div>

  </section>

</template>


<script setup lang="ts">

const managers = [

  {
    name: "نام رئیس —",
    role: "رئیس هیئت مدیره",
    image: ""
  },

  {
    name: "نام نایب رئیس —",
    role: "نایب رئیس هیئت مدیره",
    image: ""
  },

  {
    name: "سروش (حسین) محمدی",
    role: "مدیرعامل",
    image: "/src/assets/image/حسین محمدی.jpg"
  },

  {
    name: "نام خزانه‌دار —",
    role: "خزانه‌دار",
    image: ""
  },

  {
    name: "نام بازرس —",
    role: "بازرس اصلی",
    image: ""
  }

]

</script>
<script setup lang="ts">

</script>
