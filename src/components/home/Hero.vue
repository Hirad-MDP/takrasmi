<template>

  <section
    dir="rtl"
    class="relative
    z-0
    overflow-visible
    bg-gradient-to-b
    from-[#1B2740]
    to-[#07132F]
    text-white
    pt-36"
  >

    <!-- Grid -->

    <div
      class="absolute
      inset-0
      opacity-[0.04]
      pointer-events-none"
      style="
        background-image:
        linear-gradient(#ffffff 1px, transparent 1px),
        linear-gradient(90deg, #ffffff 1px, transparent 1px);
        background-size: 42px 42px;
      "
    ></div>


    <!-- Green Glow -->

    <div
      class="absolute
      -top-24
      -left-24
      w-[500px]
      h-[500px]
      rounded-full
      bg-[#0F5132]
      opacity-25
      blur-[120px]
      pointer-events-none"
    ></div>


    <div
      class="relative
      max-w-7xl
      mx-auto
      px-6
      pb-16
      text-center"
    >

      <!-- Badge -->

      <div
        class="inline-flex
        items-center
        border
        border-[#C8A44D]
        text-[#E0B95A]
        rounded-full
        px-5
        py-2
        text-sm
        mb-5"
      >
        نمایه رسمی کارشناسان — تأسیس ۱۴۰۲
      </div>


      <!-- Title -->

      <h1
        class="text-4xl
        md:text-5xl
        lg:text-6xl
        font-black
        leading-tight
        max-w-5xl
        mx-auto"
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
        class="mt-5
        text-gray-300
        text-base
        md:text-lg
        leading-8
        max-w-3xl
        mx-auto"
      >
        سامانه رسمی معرفی، جستجو و ارتباط با کارشناسان دارای صلاحیت
        — همراه با خدمات رفاهی و اعتباری تعاونی برای اعضا.
      </p>


      <!-- Search -->

      <div
        class="relative
        z-10
        mt-8
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

          <!-- ================= NAME ================= -->

          <div
            class="text-right
            px-5
            py-3
            transition-all
            duration-150"
          >

            <span
              class="block
              text-xs
              text-gray-400
              mb-1"
            >
              نام کارشناس
            </span>

            <input
              v-model="name"
              type="text"
              placeholder="مثلاً محمدی"
              class="border-3
              border-transparent
              focus:border-gray-300
              px-1
              py-0.5
              w-full
              font-medium
              text-[15px]
              text-[#13224A]
              placeholder:text-gray-400
              bg-transparent
              outline-none
              transition-colors
              duration-150"
            />

          </div>


          <!-- ================= FIELD ================= -->

          <div
            ref="fieldRef"
            class="relative
            z-20
            text-right
            px-5
            py-3
            rounded-xl"
          >

            <span
              class="block
              text-xs
              text-gray-400
              mb-1"
            >
              رشته کارشناسی
            </span>


            <!-- Selected Field -->

            <button
              type="button"
              @click="toggleField"
              class="w-full
              flex
              items-center
              justify-between
              gap-2
              text-sm
              font-medium
              border-3
              border-gray-300
              px-2
              py-1
              transition-colors
              duration-150
              outline-none"
              :class="
                isFieldOpen
                  ? 'border-gray-300'
                  : 'border-transparent'
              "
            >

              <span>
                {{ selectedField }}
              </span>


              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4
                h-4
                text-gray-400
                transition-transform
                duration-200"
                :class="
                  isFieldOpen
                    ? 'rotate-180'
                    : ''
                "
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


            <!-- Dropdown -->

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
                class="absolute
                left-0
                w-[190px]
                bg-white
                border
                border-gray-200
                rounded-lg
                shadow-xl
                z-[999]
                py-0.5
                overflow-hidden"
                :class="
                  dropdownDirection === 'up'
                    ? 'bottom-full mb-1'
                    : 'top-full mt-1'
                "
              >

                <li
                  v-for="option in fieldOptions"
                  :key="option"
                  @click="selectField(option)"
                  class="px-2.5
                  py-1.5
                  text-xs
                  text-right
                  cursor-pointer
                  transition-colors
                  whitespace-nowrap"
                  :class="
                    selectedField === option
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
            class="text-right
            px-5
            py-3
            border-t
            md:border-t-0
            md:border-r
            border-transparent
            transition-all
            duration-150"
          >

            <span
              class="block
              text-xs
              text-gray-400
              mb-1"
            >
              شماره پروانه
            </span>

            <input
              v-model="license"
              type="text"
              placeholder="۱۴۰۲..."
              class="border-3
              border-transparent
              focus:border-gray-300
              px-1
              py-0.5
              w-full
              font-medium
              text-[15px]
              text-[#13224A]
              placeholder:text-gray-400
              bg-transparent
              outline-none
              transition-colors
              duration-150"
            />

          </div>


          <!-- ================= BUTTON ================= -->

          <button
            type="button"
            @click="searchExperts"
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


<script setup lang="ts">

import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'

import { onClickOutside } from '@vueuse/core'

import { useRouter } from 'vue-router'


// ================= ROUTER =================

const router = useRouter()


// ================= INPUTS =================

const name = ref('')

const license = ref('')


// ================= FIELD OPTIONS =================

const fieldOptions = [
  'همهٔ رشته‌ها',
  'راه و ساختمان',
  'امور ثبتی و نقشه‌برداری',
  'کشاورزی و منابع طبیعی',
  'تصادفات و راهنمایی',
  'حسابداری و حسابرسی',
  'وسایط نقلیه موتوری',
  'برق، الکترونیک و مخابرات',
  'امور بازرگانی و اموال منقول',
]


const selectedField = ref(
  fieldOptions[0]
)


// ================= DROPDOWN =================

const isFieldOpen = ref(false)

const fieldRef =
  ref<HTMLElement | null>(null)

const dropdownDirection =
  ref<'up' | 'down'>('down')


// ================= SEARCH =================

const searchExperts = () => {

  router.push({
    path: '/experts',
    query: {
      name: name.value || undefined,
      field:
        selectedField.value !== 'همهٔ رشته‌ها'
          ? selectedField.value
          : undefined,
      license: license.value || undefined
    }
  })

}


// ================= CALCULATE DIRECTION =================

const calculateDropdownDirection = () => {

  if (!fieldRef.value) return

  const rect =
    fieldRef.value.getBoundingClientRect()

  const isMobile =
    window.innerWidth < 768

  const dropdownHeight = 220


  // MOBILE

  if (isMobile) {

    const navbarHeight = 64

    const spaceAbove =
      rect.top - navbarHeight

    const spaceBelow =
      window.innerHeight - rect.bottom


    if (spaceBelow >= dropdownHeight) {

      dropdownDirection.value = 'down'

    }

    else if (spaceAbove >= dropdownHeight) {

      dropdownDirection.value = 'up'

    }

    else {

      dropdownDirection.value =
        spaceBelow >= spaceAbove
          ? 'down'
          : 'up'

    }

    return
  }


  // DESKTOP

  const spaceAbove =
    rect.top

  const spaceBelow =
    window.innerHeight - rect.bottom


  if (spaceBelow >= dropdownHeight) {

    dropdownDirection.value = 'down'

  }

  else if (spaceAbove >= dropdownHeight) {

    dropdownDirection.value = 'up'

  }

  else {

    dropdownDirection.value =
      spaceBelow >= spaceAbove
        ? 'down'
        : 'up'

  }

}


// ================= TOGGLE =================

const toggleField = () => {

  if (!isFieldOpen.value) {

    calculateDropdownDirection()

  }

  isFieldOpen.value =
    !isFieldOpen.value

}


// ================= SELECT =================

const selectField = (
  option: string
) => {

  selectedField.value =
    option

  isFieldOpen.value =
    false

}


// ================= CLICK OUTSIDE =================

onClickOutside(
  fieldRef,
  () => {

    isFieldOpen.value =
      false

  }
)


// ================= SCROLL =================

const handleScroll = () => {

  if (isFieldOpen.value) {

    calculateDropdownDirection()

  }

}


// ================= RESIZE =================

const handleResize = () => {

  if (isFieldOpen.value) {

    calculateDropdownDirection()

  }

}


// ================= MOUNT =================

onMounted(() => {

  window.addEventListener(
    'scroll',
    handleScroll,
    { passive: true }
  )

  window.addEventListener(
    'resize',
    handleResize
  )

})


// ================= UNMOUNT =================

onBeforeUnmount(() => {

  window.removeEventListener(
    'scroll',
    handleScroll
  )

  window.removeEventListener(
    'resize',
    handleResize
  )

})

</script>