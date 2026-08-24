<template>
  <div class="min-h-screen bg-[#F7F6F2] text-[#0B1B3A]">
    <header>
      <Topbar />
      <Navbar />
    </header>

    <!-- Space required by the fixed Topbar + Navbar. -->
    <div class="pt-[70px]">
      <!-- This bar is shown only when the owner opens the page from the panel. -->
      <section v-if="isPreview" dir="rtl" class="border-b border-[#F1D477] bg-[#FFF9E8]">
        <div class="mx-auto flex min-h-[58px] max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 top-0 sm:flex-row">
          <p class="text-center text-sm font-semibold text-[#8A3D00] sm:text-right">
            شما در حال مشاهدهٔ پیش‌نمایش پروفایل خود هستید — این دقیقاً همان چیزی است که مراجعان می‌بینند.
          </p>
          <RouterLink
            to="/panel"
            class="shrink-0 rounded-lg bg-[#0B1B3A] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#173260]"
          >
            بازگشت به ویرایش
          </RouterLink>
        </div>
      </section>

      <!-- Profile hero -->
      <section dir="rtl" class="bg-[#102654] text-white">
        <div class="mx-auto max-w-[1004px] px-5 py-10 sm:px-6 lg:min-h-[268px] lg:px-0">
          <div class="mb-7 flex justify-start">
            <RouterLink
              v-if="isPreview"
              to="/panel"
              class="inline-flex items-center gap-1 text-sm font-semibold text-[#80A5F3] transition hover:text-white"
            >
              <span aria-hidden="true">→</span>
              بازگشت به پنل
            </RouterLink>
          </div>

          <div class="flex flex-col items-center gap-7 sm:flex-row sm:items-center sm:justify-start sm:gap-9">
            <div
              class="h-[130px] w-[130px] shrink-0 rounded-[24px] border border-white/20"
              style="background-image: repeating-linear-gradient(135deg, #E8E6E0 0, #E8E6E0 8px, #F9F8F4 8px, #F9F8F4 16px)"
              role="img"
              :aria-label="`تصویر ${fullName}`"
            />

            <div class="text-center sm:text-right">
              <span class="mb-2 inline-flex rounded-full bg-[#FFF8E5] px-4 py-1.5 text-xs font-bold text-[#A56A00]">
                در حال تمدید
              </span>

              <h1 class="mb-3 text-xl font-black leading-8 text-[#F4C95D]">
                {{ fullName }} {{ fieldTitle }}
              </h1>

              <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-[#D7E1F8] sm:justify-start">
                <span>{{ genderIcon }} {{ genderTitle }}</span>
                <span>شمارهٔ پروانه: {{ profile.license || expertId || '—' }}</span>
                <span class="inline-flex items-center gap-1.5">
                  <span aria-hidden="true">◷</span>
                  عضو از {{ membershipYear }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Public information -->
      <main dir="ltr" class="bg-[#F7F6F2]">
        <div class="mx-auto grid min-h-[440px] max-w-[1004px] grid-cols-1 gap-10 px-5 py-11 sm:px-6 lg:grid-cols-[385px_minmax(0,1fr)] lg:px-0">
          <!-- Left column -->
          <aside dir="rtl" class="space-y-5">
            <section class="rounded-[17px] border border-[#DDE2E9] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-5 text-xl font-black text-[#071A41]">اطلاعات تماس</h2>

              <dl class="space-y-4 text-sm">
                <div class="flex items-center justify-between gap-5">
                  <dt class="text-[#687590]">تلفن</dt>
                  <dd dir="ltr" class="font-medium tracking-wide text-[#071A41]">
                    {{ profile.phone || '—' }}
                  </dd>
                </div>
                <div class="flex items-center justify-between gap-5">
                  <dt class="text-[#687590]">ایمیل</dt>
                  <dd dir="ltr" class="max-w-[235px] truncate text-[#071A41]">
                    {{ profile.email || '—' }}
                  </dd>
                </div>
                <div class="flex items-center justify-between gap-5">
                  <dt class="text-[#687590]">شهر</dt>
                  <dd class="text-[#071A41]">{{ provinceTitle }}</dd>
                </div>
              </dl>
            </section>

            <section
              v-if="incompleteSections.length"
              class="rounded-[17px] border border-[#F0C947] bg-[#FFF9E7] p-7 text-[#914000]"
            >
              <h2 class="mb-2 text-sm font-black">این بخش‌ها هنوز کامل نشده‌اند:</h2>
              <ul class="list-inside list-disc space-y-1 pr-1 text-sm">
                <li v-for="item in incompleteSections" :key="item">{{ item }}</li>
              </ul>
            </section>
          </aside>

          <!-- Right column -->
          <div dir="rtl" class="min-w-0">
            <section class="mb-9">
              <h2 class="mb-4 text-[22px] font-black text-[#071A41]">معرفی و سوابق</h2>
              <p class="whitespace-pre-line text-[15px] leading-8 text-[#5F6D88]">
                {{ profile.bio || 'توضیحاتی هنوز ثبت نشده است.' }}
              </p>
            </section>

            <section v-if="profile.specialties.length" class="public-section">
              <h2 class="public-heading">تخصص‌ها</h2>
              <div class="flex flex-wrap gap-2">
                <span v-for="item in profile.specialties" :key="item" class="rounded-full bg-[#E9EEF8] px-3 py-1.5 text-sm text-[#173260]">
                  {{ item }}
                </span>
              </div>
            </section>

            <section v-if="profile.education.length" class="public-section">
              <h2 class="public-heading">سوابق تحصیلی / حرفه‌ای</h2>
              <ul class="divide-y divide-[#E1E5EA]">
                <li v-for="item in profile.education" :key="`${item.title}-${item.year}`" class="flex items-center justify-between gap-5 py-3 text-sm">
                  <span>{{ item.title }}</span>
                  <span class="shrink-0 font-bold text-[#B48725]">{{ item.year }}</span>
                </li>
              </ul>
            </section>

            <section v-if="profile.qualifications.length" class="public-section">
              <h2 class="public-heading">صلاحیت‌ها و مجوزها</h2>
              <ul class="space-y-2 text-sm">
                <li v-for="item in profile.qualifications" :key="item" class="flex items-center gap-2">
                  <span class="text-green-600">✓</span>
                  {{ item }}
                </li>
              </ul>
            </section>

            <section v-if="profile.certificates.length" class="public-section">
              <h2 class="public-heading">مدارک و گواهینامه‌ها</h2>
              <ul class="list-inside list-disc space-y-2 text-sm">
                <li v-for="item in profile.certificates" :key="item">{{ item }}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

interface EducationItem {
  title: string
  year: string
}

interface PublicProfile {
  firstName: string
  lastName: string
  nationalId: string
  gender: string
  birthDate: string
  phone: string
  email: string
  province: string
  field: string
  license: string
  bio: string
  specialties: string[]
  qualifications: string[]
  certificates: string[]
  education: EducationItem[]
}

const route = useRoute()

const profile = reactive<PublicProfile>({
  firstName: '',
  lastName: '',
  nationalId: '',
  gender: '',
  birthDate: '',
  phone: '09039575269',
  email: '',
  province: '',
  field: '',
  license: '',
  bio: '',
  specialties: [],
  qualifications: [],
  certificates: [],
  education: [],
})

const expertId = computed(() => {
  const id = route.params.id
  return Array.isArray(id) ? id[0] : String(id || '')
})

const isPreview = computed(() => route.query.preview === '1')
const fullName = computed(() => [profile.firstName, profile.lastName].filter(Boolean).join(' ') || 'کارشناس رسمی')
const fieldTitle = computed(() => profile.field ? `رشته ${profile.field}` : 'رشته کارشناس رسمی')
const membershipYear = new Date().getFullYear()

const genderTitle = computed(() => {
  if (profile.gender === 'male') return 'مرد'
  if (profile.gender === 'female') return 'زن'
  return '—'
})

const genderIcon = computed(() => {
  if (profile.gender === 'male') return '♂'
  if (profile.gender === 'female') return '♀'
  return '—'
})

const provinceTitle = computed(() => {
  const provinces: Record<string, string> = {
    golestan: 'گلستان',
    mazandaran: 'مازندران',
    tehran: 'تهران',
  }
  return provinces[profile.province] || profile.province || '—'
})

const incompleteSections = computed(() => {
  const items: string[] = []
  if (!profile.specialties.length) items.push('تخصص‌ها')
  if (!profile.education.length) items.push('سوابق تحصیلی')
  if (!profile.qualifications.length) items.push('صلاحیت‌ها')
  if (!profile.certificates.length) items.push('مدارک و گواهینامه‌ها')
  return items
})

onMounted(() => {
  // Data saved immediately before navigating from the edit page.
  if (isPreview.value) {
    try {
      const cachedProfile = localStorage.getItem('expert-public-preview')
      if (cachedProfile) Object.assign(profile, JSON.parse(cachedProfile))
    } catch {
      localStorage.removeItem('expert-public-preview')
    }
  }

  /*
   * For a normal public visit, replace the fallback above with your API call:
   * const { data } = await api.get(`/experts/${expertId.value}`)
   * Object.assign(profile, data)
   */
})
</script>

<style scoped>
.public-section {
  margin-top: 1.5rem;
  border-top: 1px solid #dfe3e8;
  padding-top: 1.5rem;
  color: #263755;
}

.public-heading {
  margin-bottom: 1rem;
  color: #071a41;
  font-size: 1.125rem;
  font-weight: 900;
}
</style>