<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-8 lg:px-10">

      <div class="flex flex-row-reverse items-center justify-between h-24">

    <div class="flex flex-row-reverse items-center gap-4">

  <!-- لوگو -->
  <div class="bg-[#F5F6FA] rounded-2xl p-2 shadow-sm">
    <img
      :src="logo"
      alt="logo"
      class="w-16 h-16 object-contain"
    />
  </div>

  <!-- متن -->
  <div class="text-right">
    <h1 class="text-[17px] font-bold text-[#13224A]">
      تعاونی کارکنان کانون کارشناسان رسمی
    </h1>

    <p class="text-[12px] text-gray-500">
      دادگستری استان گلستان — تأمین آتیه کارشناسان
    </p>
  </div>

</div>

      
    <ul class="flex items-center gap-8 text-[15px] font-medium mr-20">

  <li
    class="text-black cursor-pointer hover:text-[#1D4ED8] transition-colors duration-300"
  >
    صفحه اصلی
  </li>

  <li
    class="text-black cursor-pointer hover:text-[#1D4ED8] transition-colors duration-300"
  >
    درباره ما
  </li>

  <li
    class="text-black cursor-pointer hover:text-[#1D4ED8] transition-colors duration-300"
  >
    تماس با ما
  </li>

  <li
    class="text-black cursor-pointer hover:text-[#1D4ED8] transition-colors duration-300"
  >
    نمایش اعضا
  </li>

</ul>

      
        <button
          class="bg-[#13224A] text-white rounded-2xl px-8 py-3
          hover:bg-[#1C2F63]
          transition-all
          duration-300"
        >
          ← ورود اعضا
        </button>

      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.webp";
</script>
