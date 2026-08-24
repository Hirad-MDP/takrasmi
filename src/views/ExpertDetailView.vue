<template>
  <div class="min-h-screen flex flex-col bg-[#F7F6F2]">

    <!-- ================= Header ================= -->
    <header class="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar />
    </header>


    <main class="flex-1">

      <!-- ================================================= -->
      <!-- ===================== HERO ====================== -->
      <!-- ================================================= -->

      <section
        dir="rtl"
        class="relative overflow-hidden bg-gradient-to-b from-[#172544] to-[#09162F] text-white pt-36 pb-12 px-6"
      >

        <!-- Background Grid -->
        <div
          class="absolute inset-0 opacity-[0.035]"
          style="
            background-image:
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px);
            background-size: 42px 42px;
          "
        ></div>


        <div class="relative max-w-6xl mx-auto">

          <!-- Back -->
          <RouterLink
            to="/experts"
            class="block text-right text-sm text-blue-300 hover:text-[#C8A44D] transition-colors mb-7"
          >
            → بازگشت به فهرست کارشناسان
          </RouterLink>


          <div v-if="expert">

            <!-- Expert Header -->
            <div
              class="flex flex-row items-center justify-start gap-5"
            >

              <!-- ================= Photo ================= -->
              <div
                class="w-32 h-32 rounded-[22px] flex-shrink-0 bg-[#F4F1E9]"
                style="
                  background-image:
                    repeating-linear-gradient(
                      45deg,
                      #d9d6ce 0px,
                      #d9d6ce 6px,
                      #f4f1e9 6px,
                      #f4f1e9 12px
                    );
                "
              ></div>


              <!-- ================= Information ================= -->
              <div class="text-right">

                <!-- Name + Status -->
                <div
                  class="flex items-center justify-start gap-3 flex-wrap"
                >

                  <!-- Name -->
                  <h1
                    class="text-3xl md:text-[36px] font-black text-white leading-none whitespace-nowrap"
                  >
                    {{ expert.name }}
                  </h1>


                  <!-- Status -->
                  <span
                    class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                    :class="
                      expert.status === 'معتبر'
                        ? 'bg-[#EEF9F2] text-green-700'
                        : 'bg-[#FFF5DF] text-amber-700'
                    "
                  >
                    {{
                      expert.status === 'معتبر'
                        ? 'صلاحیت معتبر'
                        : 'در حال تمدید'
                    }}
                  </span>

                </div>


                <!-- Field -->
                <p
                  class="text-[#DCA44C] font-bold text-base md:text-[17px] mt-4"
                >
                  کارشناس رسمی رشتهٔ {{ expert.field }}
                </p>


                <!-- Meta -->
                <div
                  class="flex flex-wrap items-center justify-start gap-x-7 gap-y-2 mt-5 text-sm text-gray-300"
                >

                  <!-- City -->
                  <span
                    class="flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span class="text-gray-300">
                      ◉
                    </span>

                    {{ expert.city }}
                  </span>


                  <!-- License -->
                  <span
                    class="flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span class="text-gray-300">
                      ▤
                    </span>

                    شماره پروانه:
                    {{ expert.license }}
                  </span>


                  <!-- Member -->
                  <span
                    v-if="expert.memberSince"
                    class="flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span class="text-gray-300">
                      ◷
                    </span>

                    عضو از
                    {{ expert.memberSince }}
                  </span>

                </div>

              </div>

            </div>

          </div>


          <!-- Not Found -->
          <p
            v-else
            class="text-gray-300 text-right"
          >
            کارشناسی با این مشخصات پیدا نشد.
          </p>

        </div>

      </section>



      <!-- ================================================= -->
      <!-- ================= MAIN CONTENT ================== -->
      <!-- ================================================= -->

      <section
        v-if="expert"
        class="bg-[#F7F6F2] py-10 px-6"
      >

        <!-- LTR فقط برای اینکه Sidebar فیزیکی سمت چپ باشد -->
        <div
          dir="ltr"
          class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[385px_minmax(0,1fr)] gap-x-9 gap-y-8"
        >


          <!-- ================================================= -->
          <!-- ================= LEFT SIDEBAR ================== -->
          <!-- ================================================= -->

          <aside
            dir="rtl"
            class="lg:col-start-1 flex flex-col gap-5"
          >

            <!-- ================= Contact ================= -->
            <div
              class="bg-white border border-[#E1E3E6] rounded-2xl px-7 py-6"
            >

              <h3
                class="text-[18px] font-bold text-[#13224A] text-right mb-6"
              >
                اطلاعات تماس
              </h3>


              <div
                v-if="expert.phone || expert.email || expert.city"
                class="space-y-4"
              >

                <!-- Phone -->
                <div
                  v-if="expert.phone"
                  class="flex items-center justify-between gap-4"
                >

                  <span
                    dir="ltr"
                    class="text-[13px] font-medium text-[#13224A]"
                  >
                    {{ expert.phone }}
                  </span>

                  <span
                    class="text-[13px] text-[#64748B]"
                  >
                    تلفن
                  </span>

                </div>


                <!-- Email -->
                <div
                  v-if="expert.email"
                  class="flex items-center justify-between gap-4"
                >

                  <span
                    dir="ltr"
                    class="text-[13px] font-semibold text-[#13224A]"
                  >
                    {{ expert.email }}
                  </span>

                  <span
                    class="text-[13px] text-[#64748B]"
                  >
                    ایمیل
                  </span>

                </div>


                <!-- City -->
                <div
                  v-if="expert.city"
                  class="flex items-center justify-between gap-4"
                >

                  <span
                    class="text-[13px] font-semibold text-[#13224A]"
                  >
                    {{ expert.city }}
                  </span>

                  <span
                    class="text-[13px] text-[#64748B]"
                  >
                    شهر
                  </span>

                </div>

              </div>


              <p
                v-else
                class="text-sm text-gray-400"
              >
                اطلاعاتی ثبت نشده است.
              </p>

            </div>



            <!-- ================= Qualifications ================= -->
            <div
              class="bg-white border border-[#E1E3E6] rounded-2xl px-7 py-6"
            >

              <h3
                class="text-[18px] font-bold text-[#13224A] text-right mb-6"
              >
                صلاحیت‌ها
              </h3>


              <ul
                v-if="
                  expert.qualifications &&
                  expert.qualifications.length
                "
                class="space-y-4"
              >

                <li
                  v-for="q in expert.qualifications"
                  :key="q"
                  class="flex items-start gap-2 text-[13px] text-[#13224A] leading-6"
                >

                  <span
                    class="text-[#008B72] font-bold text-[16px] leading-6"
                  >
                    ✓
                  </span>

                  <span>
                    {{ q }}
                  </span>

                </li>

              </ul>


              <p
                v-else
                class="text-sm text-gray-400"
              >
                اطلاعاتی ثبت نشده است.
              </p>

            </div>



            <!-- ================= Certificates ================= -->
            <div
              class="bg-white border border-[#E1E3E6] rounded-2xl px-7 py-6"
            >

              <h3
                class="text-[18px] font-bold text-[#13224A] text-right mb-5"
              >
                مدارک و گواهی‌نامه‌ها
              </h3>


              <div
                v-if="
                  expert.certificates &&
                  expert.certificates.length
                "
              >

                <a
                  v-for="cert in expert.certificates"
                  :key="cert"
                  href="#"
                  class="group flex items-center justify-between gap-4 py-3 border-b border-[#ECEDEF] last:border-b-0"
                >

                  <!-- Certificate -->
                  <span
                    class="text-[13px] text-[#13224A] group-hover:text-[#C8A44D] transition-colors"
                  >
                    {{ cert }}
                  </span>


                  <!-- Icon -->
                  <span
                    class="w-9 h-9 flex-shrink-0 rounded-lg bg-[#FBF3DF] flex items-center justify-center text-[#C8A44D] text-sm"
                  >
                    ▤
                  </span>

                </a>

              </div>


              <p
                v-else
                class="text-sm text-gray-400"
              >
                اطلاعاتی ثبت نشده است.
              </p>

            </div>

          </aside>



          <!-- ================================================= -->
          <!-- ================= RIGHT CONTENT ================= -->
          <!-- ================================================= -->

          <div
            dir="rtl"
            class="lg:col-start-2 flex flex-col gap-9"
          >

            <!-- ================= Introduction ================= -->
            <section>

              <h2
                class="text-[22px] font-bold text-[#13224A] mb-4"
              >
                معرفی و سوابق
              </h2>


              <p
                v-if="expert.bio"
                class="text-[15px] text-[#475569] leading-8 text-right"
              >
                {{ expert.bio }}
              </p>


              <p
                v-else
                class="text-sm text-gray-400"
              >
                اطلاعاتی ثبت نشده است.
              </p>

            </section>



            <!-- ================= Specialties ================= -->
            <section>

              <h2
                class="text-[22px] font-bold text-[#13224A] mb-5"
              >
                تخصص‌ها
              </h2>


              <div
                v-if="expert.tags && expert.tags.length"
                class="flex flex-wrap gap-2.5"
              >

                <span
                  v-for="tag in expert.tags"
                  :key="tag"
                  class="inline-flex items-center justify-center bg-[#EEF2FF] text-[#3159C9] text-[13px] font-medium rounded-full px-4 py-2"
                >
                  {{ tag }}
                </span>

              </div>

            </section>



            <!-- ================= Education ================= -->
            <section>

              <h2
                class="text-[22px] font-bold text-[#13224A] mb-5"
              >
                سوابق تحصیلی و حرفه‌ای
              </h2>


              <div
                v-if="
                  expert.education &&
                  expert.education.length
                "
                class="w-full"
              >

                <div
                  v-for="item in expert.education"
                  :key="item.title"
                  class="flex items-center gap-8 py-4 border-b border-[#DDDFE2]"
                >

                  <!-- Period -->
                  <span
                    class="w-[105px] flex-shrink-0 text-[13px] text-[#C8A44D] text-right whitespace-nowrap"
                  >
                    {{ item.period }}
                  </span>


                  <!-- Title -->
                  <span
                    class="flex-1 text-[14px] font-medium text-[#13224A] text-right"
                  >
                    {{ item.title }}
                  </span>

                </div>

              </div>


              <p
                v-else
                class="text-sm text-gray-400"
              >
                اطلاعاتی ثبت نشده است.
              </p>

            </section>

          </div>

        </div>

      </section>

    </main>


    <!-- ================= Footer ================= -->
    <Footer />

  </div>
</template>



<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'


const route = useRoute()



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
    license: '۴۱۰۲',
    memberSince: '۱۳۹۲',

    phone: '۰۹۱۱۲۳۴۵۶۷۸',
    email: 'r.mohammadi@takrasmi.com',

    bio: 'کارشناس رسمی رشتهٔ راه و ساختمان با تخصص در ارزیابی املاک، نظارت فنی بر پروژه‌های عمرانی و تعیین خسارات ساختمانی.',

    qualifications: [
      'ارزیابی فنی و قیمت‌گذاری املاک',
      'نظارت بر اجرای پروژه‌های عمرانی',
      'تعیین علل و میزان خسارت ساختمان'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی',
      'کارت نظام مهندسی — عمران'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — راه و ساختمان',
        period: '۱۳۹۲ – تاکنون'
      },
      {
        title: 'مهندس ناظر پروژه‌های عمرانی',
        period: '۱۳۸۷–۱۳۹۲'
      }
    ]
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
    license: '۳۸۷۱',
    memberSince: '۱۳۹۳',

    phone: '۰۹۱۱۳۴۵۶۷۸۹',
    email: 'z.karimi@takrasmi.com',

    bio: 'کارشناس رسمی در امور ثبتی و نقشه‌برداری با تمرکز بر تفکیک اراضی، تعیین حدود و رفع تداخل اسناد در سطح استان گلستان.',

    qualifications: [
      'تفکیک و افراز املاک',
      'تعیین موقعیت و مساحت',
      'کارشناسی اسناد و املاک ثبتی'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی',
      'گواهی دورهٔ کاداستر'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — امور ثبتی و نقشه‌برداری',
        period: '۱۳۹۳ – تاکنون'
      },
      {
        title: 'کارشناس نقشه‌برداری — ادارهٔ ثبت اسناد و املاک',
        period: '۱۳۸۹–۱۳۹۳'
      }
    ]
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
    license: '۴۲۹۰',
    memberSince: '۱۳۹۱',

    phone: '۰۹۱۷۳۳۴۵۵۶۶',
    email: 'a.hosseini@takrasmi.com',

    bio: 'کارشناس رسمی حسابداری و حسابرسی با تجربه در بررسی دفاتر قانونی، تعیین مطالبات و ارائهٔ گزارش‌های مالی برای مراجع قضایی.',

    qualifications: [
      'حسابرسی مالی و مالیاتی',
      'بررسی و تطبیق دفاتر قانونی',
      'تعیین و محاسبهٔ مطالبات'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی',
      'عضویت جامعهٔ حسابداران رسمی'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — حسابداری و حسابرسی',
        period: '۱۳۹۱ – تاکنون'
      },
      {
        title: 'حسابرس ارشد — مؤسسهٔ حسابرسی',
        period: '۱۳۸۵–۱۳۹۱'
      }
    ]
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
    license: '۳۹۵۵',
    memberSince: '۱۳۹۴',

    phone: '۰۹۱۱۹۸۷۶۵۴۳',
    email: 'f.rastegar@takrasmi.com',

    bio: 'کارشناس رسمی کشاورزی و منابع طبیعی با تخصص در ارزیابی اراضی کشاورزی، باغات و برآورد خسارت محصولات زراعی.',

    qualifications: [
      'کارشناسی باغات و اراضی کشاورزی',
      'برآورد خسارت محصولات زراعی',
      'ارزیابی منابع طبیعی و آب کشاورزی'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی',
      'گواهی کارشناسی کشاورزی'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — کشاورزی و منابع طبیعی',
        period: '۱۳۹۴ – تاکنون'
      },
      {
        title: 'کارشناس جهاد کشاورزی استان',
        period: '۱۳۸۸–۱۳۹۴'
      }
    ]
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
    license: '۴۰۱۸',
    memberSince: '۱۳۹۰',

    phone: '۰۹۱۲۴۵۶۷۸۹۰',
    email: 'h.ghorbani@takrasmi.com',

    bio: 'کارشناس رسمی تصادفات با تخصص در بازسازی صحنهٔ تصادف، تحلیل فنی خودرو و تعیین علت و مقصر حوادث رانندگی.',

    qualifications: [
      'بازسازی و تحلیل صحنهٔ تصادف',
      'کارشناسی فنی خودرو',
      'تعیین علت و میزان مسئولیت'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی',
      'گواهی کارشناسی تصادفات راهور'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — تصادفات و راهنمایی',
        period: '۱۳۹۰ – تاکنون'
      },
      {
        title: 'افسر کارشناس راهور',
        period: '۱۳۸۳–۱۳۹۰'
      }
    ]
  },


  {
    name: 'مهندس مریم نادری',
    field: 'برق، الکترونیک و مخابرات',
    status: 'معتبر',

    tags: [
      'تأسیسات برقی ساختمان',
      'سیستم‌های مخابراتی',
      'برآورد خسارت تجهیزات',
      'ایمنی برق'
    ],

    city: 'بندر گز',
    license: '۴۱۸۷',
    memberSince: '۱۳۹۵',

    phone: '۰۹۱۱۷۸۹۰۱۲۳',
    email: 'm.naderi@takrasmi.com',

    bio: 'کارشناس رسمی رشتهٔ برق، الکترونیک و مخابرات با تخصص در بررسی تأسیسات برقی و ارزیابی تجهیزات.',

    qualifications: [
      'کارشناسی تأسیسات برق فشار ضعیف و قوی',
      'ارزیابی تجهیزات الکترونیکی',
      'بررسی سیستم‌های مخابراتی'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی',
      'کارت نظام مهندسی — برق'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — برق و الکترونیک',
        period: '۱۳۹۵ – تاکنون'
      },
      {
        title: 'مهندس طراح تأسیسات برقی',
        period: '۱۳۹۱–۱۳۹۵'
      }
    ]
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
    license: '۳۹۰۲',
    memberSince: '۱۳۹۶',

    phone: '۰۹۱۱۵۵۶۷۷۸۸',
    email: 's.akbari@takrasmi.com',

    bio: 'کارشناس رسمی وسایط نقلیه موتوری با تخصص در ارزیابی خودرو، تشخیص اصالت قطعات و برآورد افت قیمت ناشی از تصادف.',

    qualifications: [
      'ارزیابی فنی و قیمت‌گذاری خودرو',
      'تشخیص اصالت و سلامت فنی',
      'برآورد افت قیمت ناشی از حادثه'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — وسایط نقلیه موتوری',
        period: '۱۳۹۶ – تاکنون'
      }
    ]
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
    license: '۴۲۳۳',
    memberSince: '۱۳۹۷',

    phone: '۰۹۱۷۸۹۰۱۲۳۴',
    email: 'n.abedi@takrasmi.com',

    bio: 'کارشناس رسمی امور بازرگانی و اموال منقول با تخصص در ارزیابی کالا، بررسی قراردادها و برآورد خسارات بازرگانی.',

    qualifications: [
      'ارزیابی کالا و اموال منقول',
      'بررسی و تطبیق قراردادهای بازرگانی',
      'برآورد خسارت معاملات تجاری'
    ],

    certificates: [
      'پروانهٔ کارشناسی رسمی',
      'گواهی کارشناسی بازرگانی'
    ],

    education: [
      {
        title: 'کارشناس رسمی دادگستری — امور بازرگانی',
        period: '۱۳۹۷ – تاکنون'
      },
      {
        title: 'کارشناس بازرگانی — اتاق بازرگانی استان',
        period: '۱۳۹۲–۱۳۹۷'
      }
    ]
  }

]


const expert = computed(() =>
  experts.find(
    (e) => e.license === route.params.license
  )
)

</script>