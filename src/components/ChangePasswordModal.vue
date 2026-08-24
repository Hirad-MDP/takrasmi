<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { changePassword } from '@/composables/usePassword'
import { useToast } from '@/composables/useToast'

/**
 * مودال «تغییر رمز عبور»
 * استایل مطابق اسکرین‌شات: کارت سفید وسط صفحه، عنوان سرمه‌ای،
 * سه فیلد رمز، و دکمهٔ تمام‌عرض سرمه‌ای در پایین کارت.
 */
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const toast = useToast()

const form = reactive({
  current: '',
  next: '',
  confirm: '',
})

type FieldError = '' | 'required' | 'invalid' | 'short' | 'mismatch'
const error = ref<FieldError>('')
const loading = ref(false)

watch(
  () => props.open,
  (open) => {
    if (open) {
      form.current = ''
      form.next = ''
      form.confirm = ''
      error.value = ''
    }
    document.body.style.overflow = open ? 'hidden' : ''
  },
)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

function currentFieldHasError() {
  return error.value === 'invalid' || error.value === 'required'
}

async function submit() {
  error.value = ''

  if (!form.current.trim() || !form.next || !form.confirm) {
    error.value = 'required'
    return
  }
  if (form.next.length < 8) {
    error.value = 'short'
    return
  }
  if (form.next !== form.confirm) {
    error.value = 'mismatch'
    return
  }

  loading.value = true
  try {
    await changePassword(form.current, form.next)
    emit('close')
    // ✅ موفقیت: اعلان پایین-راست
    toast.show('success', 'رمز عبور با موفقیت تغییر کرد', 'از این پس با رمز عبور جدید وارد شوید.')
  } catch {
    error.value = 'invalid'
    // ❌ رمز فعلی اشتباه است: خطای «رمز نامعتبر»
    toast.show('error', 'رمز نامعتبر', 'رمز عبور فعلی را اشتباه وارد کردید.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div
        v-if="open"
        class="fixed inset-0 z-[90] flex items-center justify-center px-4"
        role="dialog"
        aria-modal="true"
        aria-label="تغییر رمز عبور"
      >
        <!-- پس‌زمینهٔ تیره (نیمه‌شفاف سرمه‌ای) -->
        <div class="absolute inset-0 bg-[#0B1B3A]/50" @click="emit('close')" />

        <!-- کارت مودال -->
        <div
          dir="rtl"
          class="modal-card relative w-full max-w-[448px] rounded-[20px] bg-white p-7 shadow-[0_16px_48px_rgba(8,17,40,0.4)]"
        >
          <!-- هدر: آیکون قفل + عنوان (محتوا از سمت راست) -->
          <div class="mb-6 flex items-center gap-3">
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#0B1B3A]" aria-hidden="true">
              <svg
                viewBox="0 0 20 20"
                class="h-[18px] w-[18px] text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3.5" y="8.5" width="13" height="9" rx="2.6" />
                <path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5" />
                <circle cx="10" cy="13" r="1.3" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <h3 class="text-[17px] font-extrabold leading-6 text-[#071A41]">تغییر رمز عبور</h3>
          </div>

          <form class="space-y-[16px]" dir="rtl" @submit.prevent="submit">
            <!-- رمز عبور فعلی -->
            <div>
              <label for="current-pw" class="mb-2 block text-sm leading-5 text-[#687590]">
                رمز عبور فعلی
              </label>
              <input
                id="current-pw"
                v-model="form.current"
                type="password"
                dir="rtl"
                autocomplete="current-password"
                :class="['password-input', currentFieldHasError() ? 'password-input--error' : '']"
              />
              <p
                v-if="error === 'invalid'"
                class="mt-2 flex items-center gap-1.5 text-xs font-semibold leading-5 text-[#E03131]"
              >
                <svg viewBox="0 0 16 16" class="h-3.5 w-3.5 shrink-0" fill="currentColor" aria-hidden="true">
                  <path
                    d="M8 1.2a1 1 0 0 1 .88.51l6.1 10.68A1 1 0 0 1 14.1 14H1.9a1 1 0 0 1-.88-1.61L7.12 1.71A1 1 0 0 1 8 1.2Z"
                  />
                </svg>
                رمز نامعتبر
              </p>
              <p
                v-else-if="error === 'required'"
                class="mt-2 text-xs font-semibold leading-5 text-[#E03131]"
              >
                لطفاً همهٔ فیلدها را تکمیل کنید.
              </p>
            </div>

            <!-- رمز عبور جدید -->
            <div>
              <label for="new-pw" class="mb-2 block text-sm leading-5 text-[#687590]">
                رمز عبور جدید
              </label>
              <input
                id="new-pw"
                v-model="form.next"
                type="password"
                dir="rtl"
                autocomplete="new-password"
                :class="['password-input', error === 'short' ? 'password-input--error' : '']"
              />
              <p
                v-if="error === 'short'"
                class="mt-2 text-xs font-semibold leading-5 text-[#E03131]"
              >
                رمز عبور جدید باید حداقل ۸ کاراکتر باشد.
              </p>
            </div>

            <!-- تکرار رمز عبور جدید -->
            <div>
              <label for="confirm-pw" class="mb-2 block text-sm leading-5 text-[#687590]">
                تکرار رمز عبور جدید
              </label>
              <input
                id="confirm-pw"
                v-model="form.confirm"
                type="password"
                dir="rtl"
                autocomplete="new-password"
                :class="['password-input', error === 'mismatch' ? 'password-input--error' : '']"
              />
              <p
                v-if="error === 'mismatch'"
                class="mt-2 text-xs font-semibold leading-5 text-[#E03131]"
              >
                تکرار رمز عبور با «رمز عبور جدید» مطابقت ندارد.
              </p>
            </div>

            <!-- خط جداکننده + دکمهٔ تمام‌عرض -->
            <div class="mt-[18px] border-t border-[#E2E6EC] pt-4">
              <button
                type="submit"
                :disabled="loading"
                class="flex h-[53px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#0B1B3A] text-sm font-extrabold text-white transition hover:bg-[#142B58] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span
                  v-if="loading"
                  class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  aria-hidden="true"
                />
                {{ loading ? 'در حال بررسی...' : 'تغییر رمز عبور' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.password-input {
  width: 100%;
  height: 50px;
  border: 1px solid #d9dee7;
  border-radius: 11px;
  padding-inline: 1rem;
  background-color: #fff;
  color: #13224a;
  font-size: 0.875rem;
  text-align: right;
  outline: none;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    background-color 150ms ease;
}

.password-input::placeholder {
  color: #9aa3b5;
}

.password-input:focus {
  border-color: #315fba;
  box-shadow: 0 0 0 4px rgba(49, 95, 186, 0.1);
}

.password-input--error,
.password-input--error:focus {
  border-color: #e03131;
}

.password-input--error:focus {
  box-shadow: 0 0 0 4px rgba(224, 49, 49, 0.12);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 180ms ease;
}

.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition:
    transform 180ms ease,
    opacity 180ms ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  transform: translateY(10px) scale(0.98);
  opacity: 0;
}
</style>