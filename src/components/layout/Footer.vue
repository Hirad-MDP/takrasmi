<template>
  <footer class="bg-[#0D1430] text-white">
    <div class="max-w-7xl mx-auto px-8 lg:px-10">

      <div class="h-24 flex flex-row-reverse items-center justify-between">

        <!-- سمت راست -->
        <div class="flex flex-row-reverse items-center gap-4">

          <img
            :src="logo"
            alt="logo"
            class="w-12 h-12 rounded-xl"
          >
<p  class="text-xs text-gray-400 font-normal">
© 2026 — تعاونی تأمین آتیه کارشناسان دادگستری استان گلستان
</p>

        </div>

        <!-- سمت چپ -->
        <ul class="flex items-center gap-10 text-[12px] font-medium">

     <li class="cursor-pointer text-gray-400 hover:text-[#1D4ED8] transition-colors duration-300">
          ثبت شکایت
          </li>

     <li class="cursor-pointer text-gray-400 hover:text-[#1D4ED8] transition-colors duration-300">
            قوانین و مقررارت
          </li>
<li class="cursor-pointer text-gray-400 hover:text-[#1D4ED8] transition-colors duration-300">
           معاونت ها
          </li>

     <li class="cursor-pointer text-gray-400 hover:text-[#1D4ED8] transition-colors duration-300">
            درباره ی مرکز
          </li>

        </ul>

      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.webp";
</script>
