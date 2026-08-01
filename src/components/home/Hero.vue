<template>

  <section
    dir="rtl"
    class="relative overflow-hidden bg-[#07132F] text-white"
  >

    <!-- Grid Background -->
    <div
      class="absolute inset-0 opacity-[0.08]"
      style="
        background-image:
        linear-gradient(#ffffff 1px, transparent 1px),
        linear-gradient(90deg, #ffffff 1px, transparent 1px);
        background-size: 42px 42px;
      "
    ></div>


    <!-- Green Glow -->
    <div
      class="absolute -top-40 -right-40 w-[500px] h-[500px]
      rounded-full bg-[#0F5132] opacity-20 blur-[120px]"
    ></div>


    <div
      class="relative max-w-7xl mx-auto px-6
      pt-28 pb-24 text-center"
    >

      <!-- Badge -->

      <div
        class="inline-flex items-center
        border border-[#C8A44D]
        text-[#E0B95A]
        rounded-full
        px-5 py-2
        text-sm
        mb-7"
      >

        نمایه رسمی کارشناسان — تأسیس ۱۴۰۲

      </div>


      <!-- Title -->

      <h1
        class="text-4xl md:text-5xl lg:text-6xl
        font-black leading-[1.5]
        max-w-5xl mx-auto"
      >

        دسترسی مطمئن به
        <span class="text-[#D8B45A]">
          کارشناسان رسمی
        </span>

        <br />

        دادگستری استان گلستان

      </h1>


      <!-- Description -->

      <p
        class="mt-7
        text-gray-300
        text-base md:text-lg
        leading-9
        max-w-3xl
        mx-auto"
      >

        سامانه رسمی معرفی، جستجو و ارتباط با کارشناسان دارای صلاحیت
        — همراه با خدمات رفاهی و اعتباری تعاونی برای اعضا.

      </p>


      <!-- Search Box -->

      <div
        class="mt-12
        max-w-4xl
        mx-auto
        bg-white
        rounded-2xl
        p-3
        text-[#13224A]
        shadow-2xl"
      >

        <div
          class="grid
          grid-cols-1
          md:grid-cols-[1fr_1fr_1fr_auto]
          items-center
          gap-3"
        >

          <!-- Name -->

          <div class="text-right px-5 py-3">

            <span
              class="block text-xs text-gray-400 mb-1"
            >
              نام کارشناس
            </span>

            <span class="text-sm font-medium">
              مثلاً محمدی
            </span>

          </div>


          <!-- Field -->

          <div
            class="text-right
            px-5 py-3
            border-t md:border-t-0
            md:border-r
            border-gray-200"
          >

            <span
              class="block text-xs text-gray-400 mb-1"
            >
              رشته کارشناسی
            </span>

            <span class="text-sm font-medium">
              همه رشته‌ها
            </span>

          </div>


          <!-- License -->

          <div
            class="text-right
            px-5 py-3
            border-t md:border-t-0
            md:border-r
            border-gray-200"
          >

            <span
              class="block text-xs text-gray-400 mb-1"
            >
              شماره پروانه
            </span>

            <span class="text-sm text-gray-400">
              ۱۴۰۲...
            </span>

          </div>


          <!-- Button -->

          <button
            class="bg-[#C8A44D]
            hover:bg-[#DAB965]
            active:scale-95
            transition
            duration-200
            rounded-xl
            px-8
            py-4
            font-bold
            text-[#111827]"
          >

            جستجو کارشناس

          </button>

        </div>

      </div>


      <!-- Quick Search -->

      <div
        class="mt-5
        text-sm
        text-gray-400"
      >

        جستجوی سریع:

        <span class="text-[#D8B45A]">
          امور ثبتی
        </span>

        ·

        <span class="text-[#D8B45A]">
          امور فنی
        </span>

        ·

        <span class="text-[#D8B45A]">
          حسابداری و حسابرسی
        </span>

        ·

        <span class="text-[#D8B45A]">
          کشاورزی
        </span>

      </div>

    </div>

  </section>

</template>
