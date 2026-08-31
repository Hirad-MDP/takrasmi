<template>
  <div class="min-h-screen flex flex-col bg-[#F8F9FB]">

    <header class="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar />
    </header>

    <main
      dir="rtl"
      class="flex-1 flex items-center justify-center px-5 pt-36 pb-16"
    >

      <!-- ================= LOGIN CARD ================= -->

      <div class="relative w-full max-w-[420px]">

        <!-- Gradient top border -->
        <div
          class="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl"
          style="background: linear-gradient(90deg, #0B1B3A 0%, #C8A44D 50%, #0B1B3A 100%);"
        ></div>

        <div
          class="
            bg-white
            rounded-2xl
            shadow-sm
            border
            border-gray-100
            px-9
            pt-8
            pb-8
            text-center
          "
        >

          <!-- ================= BACK BUTTON (password / otp steps) ================= -->

          <div v-if="step !== 'phone'" class="text-right mb-1">
            <button
              type="button"
              @click="goBackToPhone"
              class="inline-flex items-center gap-1 text-gray-400 text-xs hover:text-[#13224A] transition-colors duration-200"
            >
              <span>بازگشت</span>
              <span aria-hidden="true">←</span>
            </button>
          </div>

          <!-- ================= LOGO ================= -->

          <div class="flex justify-center mb-5">
            <div class="w-20 h-20 flex items-center justify-center">
              <img
                :src="logo"
                alt="لوگو"
                class="w-full h-full object-contain"
              />
            </div>
          </div>


          <!-- ============================================================ -->
          <!-- ================= STEP 1: PHONE NUMBER ====================== -->
          <!-- ============================================================ -->

          <template v-if="step === 'phone'">

            <h1 class="text-[#13224A] text-xl font-black mb-2">
              ورود / ثبت‌نام
            </h1>

            <p class="text-gray-500 text-sm leading-7 mb-6">
              سلام! لطفاً شماره موبایل خود را وارد کنید
            </p>

            <div class="text-right">
              <input
                id="phone"
                v-model="phone"
                type="tel"
                inputmode="numeric"
                maxlength="11"
                placeholder="09xxxxxxxxx"
                :disabled="phoneLoading"
                @keyup.enter="continueLogin"
                class="
                  w-full h-12 px-4 rounded-xl text-center text-[#13224A] text-sm
                  outline-none border transition-all duration-200 disabled:opacity-60
                "
                :class="
                  phoneError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:border-[#C8A44D] focus:ring-4 focus:ring-[#C8A44D]/10'
                "
              />

              <p v-if="phoneError" class="text-red-500 text-xs mt-2 text-center">
                {{ phoneError }}
              </p>
            </div>

            <div class="mt-4 mb-5 text-center">
              <a
                href="#"
                @click.prevent="showTerms = true"
                class="text-[#13224A] text-xs underline underline-offset-4 hover:text-[#C8A44D] transition-colors duration-200"
              >
                قوانین و مقررات را مطالعه کنید
              </a>
            </div>

            <button
              type="button"
              @click="continueLogin"
              :disabled="phoneLoading"
              class="
                w-full h-12 rounded-xl bg-[#13224A] text-white font-bold text-sm
                transition-all duration-200 hover:bg-[#C8A44D] hover:text-[#111827]
                active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100
                flex items-center justify-center gap-2
              "
            >
              <span
                v-if="phoneLoading"
                class="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
              ></span>
              <span>{{ phoneLoading ? 'در حال بررسی...' : 'ادامه' }}</span>
            </button>

            <p class="text-gray-400 text-[11px] leading-6 mt-4">
              ورود شما به معنای پذیرش قوانین حریم خصوصی است
            </p>

          </template>


          <!-- ============================================================ -->
          <!-- ================= STEP 2: PASSWORD =========================== -->
          <!-- ============================================================ -->

          <template v-else-if="step === 'password'">

            <h1 class="text-[#13224A] text-xl font-black mb-2">
              رمز عبور خود را وارد کنید
            </h1>

            <p class="text-gray-500 text-sm leading-7 mb-6">
              ورود با شماره
              <span class="font-bold text-[#13224A]" dir="ltr">{{ phone }}</span>
              <a
                href="#"
                @click.prevent="goBackToPhone"
                class="text-[#C8A44D] underline underline-offset-4 hover:text-[#13224A] transition-colors duration-200 mr-1"
              >
                ویرایش شماره
              </a>
            </p>

            <div class="text-right">
              <label for="password" class="block text-xs text-gray-500 mb-1.5">رمز عبور</label>
              <input
                id="password"
                v-model="password"
                type="password"
                :disabled="passwordLoading"
                @keyup.enter="submitPassword"
                class="
                  w-full h-12 px-4 rounded-xl text-center text-[#13224A] text-sm
                  outline-none border transition-all duration-200 disabled:opacity-60
                "
                :class="
                  passwordError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:border-[#C8A44D] focus:ring-4 focus:ring-[#C8A44D]/10'
                "
              />

              <p v-if="passwordError" class="text-red-500 text-xs mt-2 text-center">
                {{ passwordError }}
              </p>
            </div>

            <div class="flex justify-center my-5">
              <button
                type="button"
                @click="switchToOtp"
                :disabled="otpRequestLoading"
                class="
                  h-10 px-4 rounded-full border border-gray-200 text-[#13224A] text-xs font-medium
                  hover:border-[#C8A44D] hover:bg-[#FBF3DF] transition-colors duration-200 disabled:opacity-60
                "
              >
                {{ otpRequestLoading ? 'در حال ارسال کد...' : 'ورود با رمز یک‌بار مصرف' }}
              </button>
            </div>

            <button
              type="button"
              @click="submitPassword"
              :disabled="passwordLoading"
              class="
                w-full h-12 rounded-xl bg-[#13224A] text-white font-bold text-sm
                transition-all duration-200 hover:bg-[#C8A44D] hover:text-[#111827]
                active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100
              "
            >
              ورود
            </button>

            <p class="text-gray-400 text-[11px] leading-6 mt-4">
              ورود شما به معنای پذیرش قوانین حریم خصوصی است
            </p>

          </template>


          <!-- ============================================================ -->
          <!-- ================= STEP 3: OTP CODE =========================== -->
          <!-- ============================================================ -->

          <template v-else-if="step === 'otp'">

            <h1 class="text-[#13224A] text-xl font-black mb-2">
              کد تایید را وارد کنید
            </h1>

            <p class="text-gray-500 text-sm leading-7 mb-7">
              کد تایید برای شماره
              <span class="font-bold text-[#13224A]" dir="ltr">{{ phone }}</span>
              پیامک شد
            </p>

            <!-- ============ CODE BOXES ============ -->

            <div class="flex justify-center gap-2.5" dir="ltr">
              <input
                v-for="(digit, index) in otpDigits"
                :key="index"
                :ref="(el) => setOtpInputRef(el, index)"
                v-model="otpDigits[index]"
                type="text"
                inputmode="numeric"
                maxlength="1"
                :disabled="otpVerifying"
                @input="onOtpInput(index, $event)"
                @keydown="onOtpKeydown(index, $event)"
                @paste="onOtpPaste($event)"
                class="
                  w-12 h-14 rounded-xl text-center text-lg font-bold text-[#13224A]
                  outline-none border transition-all duration-200 disabled:opacity-60
                "
                :class="
                  otpError
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-[#C8A44D] focus:ring-4 focus:ring-[#C8A44D]/10'
                "
              />
            </div>

            <p v-if="otpError" class="text-red-500 text-xs mt-3 text-center">
              {{ otpError }}
            </p>

            <p v-if="otpVerifying" class="text-gray-400 text-xs mt-3 text-center">
              در حال بررسی کد...
            </p>

            <!-- ============ TIMER / RESEND ============ -->

            <div class="flex flex-col items-center mt-7 mb-6">

              <div v-if="countdown > 0" class="relative w-16 h-16 flex items-center justify-center">
                <svg class="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#F0EAD6" stroke-width="4" />
                  <circle
                    cx="32" cy="32" r="28" fill="none" stroke="#C8A44D" stroke-width="4"
                    stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="dashOffset"
                    style="transition: stroke-dashoffset 1s linear"
                  />
                </svg>
                <span class="absolute text-[#13224A] text-sm font-bold">{{ countdown }}</span>
              </div>

              <button
                v-else
                type="button"
                @click="resendCode"
                :disabled="otpRequestLoading"
                class="text-[#13224A] text-xs font-bold underline underline-offset-4 hover:text-[#C8A44D] transition-colors duration-200 disabled:opacity-60"
              >
                {{ otpRequestLoading ? 'در حال ارسال...' : 'ارسال مجدد کد' }}
              </button>

            </div>

            <a
              href="#"
              @click.prevent="step = 'password'"
              class="text-[#13224A] text-xs underline underline-offset-4 hover:text-[#C8A44D] transition-colors duration-200"
            >
              ورود با رمز عبور
            </a>

          </template>

        </div>

      </div>


      <!-- ================= TERMS MODAL ================= -->

      <transition
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-150"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showTerms"
          class="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-5"
          @click.self="showTerms = false"
        >
          <div
            class="
              w-full max-w-[420px] bg-white rounded-2xl shadow-lg p-6 text-right max-h-[80vh] overflow-y-auto
            "
          >
            <button
              type="button"
              @click="showTerms = false"
              class="
                w-full h-11 rounded-xl border border-[#C8A44D] text-[#13224A] text-sm font-medium
                hover:bg-[#FBF3DF] transition-colors duration-200
              "
            >
              بستن
            </button>
          </div>
        </div>
      </transition>

    </main>

    <Footer />

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import logo from '@/assets/logo.webp'
import { useAuth } from '@/composables/useAuth'
import {
  isUserByMobile,
  sendVerificationCodeByMobile,
  checkVerificationCode,
} from '@/services/authApi'

const router = useRouter()
const { login } = useAuth()

// ================= STATE =================

type Step = 'phone' | 'password' | 'otp'

const step = ref<Step>('phone')
const showTerms = ref(false)

// ================= PHONE STEP =================

const phone = ref('')
const phoneError = ref('')
const phoneLoading = ref(false)

const mobileRegex = /^09\d{9}$/

const continueLogin = async () => {
  if (phoneLoading.value) return

  if (!mobileRegex.test(phone.value)) {
    phoneError.value = 'فرمت شماره موبایل نادرست است'
    return
  }

  phoneError.value = ''
  phoneLoading.value = true

  try {
    await isUserByMobile(phone.value)
    step.value = 'password'
  } catch (err) {
    phoneError.value = err instanceof Error ? err.message : 'خطایی رخ داد. لطفاً دوباره تلاش کنید.'
  } finally {
    phoneLoading.value = false
  }
}

const goBackToPhone = () => {
  step.value = 'phone'
  password.value = ''
  passwordError.value = ''
  resetOtp()
  stopCountdown()
}

// ================= PASSWORD STEP =================

const password = ref('')
const passwordError = ref('')
const passwordLoading = ref(false)

const submitPassword = async () => {
  if (passwordLoading.value) return

  if (!password.value) {
    passwordError.value = 'رمز عبور را وارد کنید'
    return
  }

  // توجه: اندپوینتی برای بررسی رمز عبور در اختیار نبود؛ فعلاً فقط ورود با
  // «رمز یک‌بار مصرف» به API متصل است. با اضافه‌شدن API بررسی رمز عبور،
  // منطق آن باید اینجا جایگزین این پیام شود.
  passwordError.value = 'ورود با رمز عبور هنوز فعال نیست. لطفاً از «ورود با رمز یک‌بار مصرف» استفاده کنید.'
}

// ================= OTP REQUEST (shared) =================

const otpRequestLoading = ref(false)

const requestOtp = async () => {
  otpRequestLoading.value = true
  try {
    await sendVerificationCodeByMobile(phone.value)
    startCountdown()
  } finally {
    otpRequestLoading.value = false
  }
}

const switchToOtp = async () => {
  if (otpRequestLoading.value) return
  passwordError.value = ''

  try {
    await requestOtp()
    resetOtp()
    step.value = 'otp'
  } catch (err) {
    passwordError.value = err instanceof Error ? err.message : 'ارسال کد با خطا مواجه شد.'
  }
}

const resendCode = async () => {
  if (otpRequestLoading.value) return
  otpError.value = ''

  try {
    await requestOtp()
    resetOtp()
  } catch (err) {
    otpError.value = err instanceof Error ? err.message : 'ارسال مجدد کد با خطا مواجه شد.'
  }
}

// ================= OTP STEP =================

const OTP_LENGTH = 5
const otpDigits = ref<string[]>(Array(OTP_LENGTH).fill(''))
const otpInputs = ref<(HTMLInputElement | null)[]>([])
const otpError = ref('')
const otpVerifying = ref(false)

const setOtpInputRef = (el: unknown, index: number) => {
  otpInputs.value[index] = el as HTMLInputElement | null
}

const resetOtp = () => {
  otpDigits.value = Array(OTP_LENGTH).fill('')
  otpError.value = ''
  nextTick(() => otpInputs.value[0]?.focus())
}

const onOtpInput = (index: number, event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value.replace(/\D/g, '').slice(-1)
  otpDigits.value[index] = value

  if (value && index < OTP_LENGTH - 1) {
    otpInputs.value[index + 1]?.focus()
  }

  if (otpDigits.value.every((d) => d !== '')) {
    verifyOtp()
  }
}

const onOtpKeydown = (index: number, event: KeyboardEvent) => {
  if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
}

const onOtpPaste = (event: ClipboardEvent) => {
  const pasted = event.clipboardData?.getData('text').replace(/\D/g, '') || ''
  if (!pasted) return
  event.preventDefault()

  const chars = pasted.slice(0, OTP_LENGTH).split('')
  chars.forEach((char, i) => {
    otpDigits.value[i] = char
  })

  const nextIndex = Math.min(chars.length, OTP_LENGTH - 1)
  nextTick(() => otpInputs.value[nextIndex]?.focus())

  if (otpDigits.value.every((d) => d !== '')) {
    verifyOtp()
  }
}

const verifyOtp = async () => {
  if (otpVerifying.value) return

  otpVerifying.value = true
  otpError.value = ''

  try {
    const code = otpDigits.value.join('')
    const result = await checkVerificationCode(code, phone.value)

    stopCountdown()
    login(result?.Token)
    router.push('/panel')
  } catch (err) {
    otpError.value = err instanceof Error ? err.message : 'کد تایید نادرست است.'
    otpDigits.value = Array(OTP_LENGTH).fill('')
    nextTick(() => otpInputs.value[0]?.focus())
  } finally {
    otpVerifying.value = false
  }
}

// ================= COUNTDOWN =================

const COUNTDOWN_SECONDS = 120
const countdown = ref(0)
let countdownTimer: ReturnType<typeof setInterval> | undefined

const circumference = 2 * Math.PI * 28
const dashOffset = computed(() => {
  const ratio = countdown.value / COUNTDOWN_SECONDS
  return circumference * (1 - ratio)
})

const startCountdown = () => {
  stopCountdown()
  countdown.value = COUNTDOWN_SECONDS
  countdownTimer = setInterval(() => {
    if (countdown.value <= 1) {
      stopCountdown()
    } else {
      countdown.value -= 1
    }
  }, 1000)
}

const stopCountdown = () => {
  if (countdownTimer) {
    clearInterval(countdownTimer)
    countdownTimer = undefined
  }
  countdown.value = 0
}

onBeforeUnmount(() => {
  stopCountdown()
})
</script>
