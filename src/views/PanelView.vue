<template>
  <div class="min-h-screen bg-[#F7F6F2] text-[#0B1B3A]">
    <!-- هدر: Topbar + Navbar با هم به بالای صفحه می‌چسبند (sticky) -->
    <!-- چون sticky است، در جریان عادی صفحه باقی می‌ماند و هیچ محتوایی هرگز زیرش گم نمی‌شود -->
    <div class="sticky top-0 z-40 shadow-[0_2px_10px_rgba(11,27,58,0.08)]">
      <Topbar />
      <Navbar />
    </div>

    <!--
      Desktop: the form area occupies the left side and the 250px panel is
      attached to the right edge. The aside stretches with the whole page.
    -->
    <div class="lg:grid lg:grid-cols-[minmax(0,1fr)_250px] lg:items-stretch">
            <main dir="rtl" class="min-w-0 px-4 pt-36 pb-10 sm:px-6 lg:px-0 lg:pt-36 lg:pb-10">
        <div class="mx-auto w-full max-w-[724px] lg:ml-auto lg:mr-12">
          <!-- Page title -->
          <div class="mb-8">
            <h1 class="mb-2 text-2xl font-black leading-9 text-[#071A41] md:text-[28px]">
              ویرایش اطلاعات کارشناسی
            </h1>
            <p class="text-sm leading-5 text-[#75809A]">
              این اطلاعات در صفحهٔ عمومی شما به مراجعان نمایش داده می‌شود.
            </p>
          </div>

          <form class="space-y-[22px]" @submit.prevent="submitForm">
            <!-- Identity -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-5 text-[17px] font-extrabold leading-6 text-[#071A41]">
                اطلاعات هویتی
              </h2>

              <div class="grid grid-cols-1 gap-x-[18px] gap-y-[17px] md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">نام</label>
                  <input v-model="form.firstName" type="text" class="form-control" />
                </div>

                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">نام خانوادگی</label>
                  <input v-model="form.lastName" type="text" class="form-control" />
                </div>

                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">کد ملی</label>
                  <input v-model="form.nationalId" type="text" inputmode="numeric" class="form-control" />
                </div>

                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">جنسیت</label>
                  <select v-model="form.gender" class="form-control bg-white">
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">تاریخ تولد</label>
                  <input
                    v-model="form.birthDate"
                    type="text"
                    inputmode="numeric"
                    placeholder="1370/01/01"
                    class="form-control text-center placeholder:text-[#9AA3B5]"
                  />
                </div>
              </div>
            </section>

            <!-- Contact -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-5 text-[17px] font-extrabold leading-6 text-[#071A41]">
                اطلاعات تماس
              </h2>

              <div class="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                <div>
                  <div class="mb-2 flex min-h-5 items-center justify-between gap-2">
                    <label class="text-sm leading-5 text-[#687590]">تلفن همراه</label>
                    <span class="text-[11px] leading-5 text-[#9DA6B8]">
                      برای تغییر نیاز به احراز هویت دارد
                    </span>
                  </div>
                  <input
                    :value="form.phone"
                    type="text"
                    disabled
                    dir="ltr"
                    class="form-control form-control--disabled cursor-not-allowed text-center font-semibold text-[#071A41] disabled:opacity-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">پست الکترونیک</label>
                  <input v-model="form.email" type="email" dir="ltr" class="form-control text-right" />
                </div>
              </div>
            </section>

            <!-- Province -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-5 text-[17px] font-extrabold leading-6 text-[#071A41]">
                استان محل فعالیت
              </h2>
              <select v-model="form.province" class="form-control bg-white font-medium text-[#071A41]">
                <option value="" disabled>انتخاب کنید</option>
                <option v-for="province in provinces" :key="province" :value="province">
                  {{ province }}
                </option>
              </select>
            </section>

            <!-- License -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-5 text-[17px] font-extrabold leading-6 text-[#071A41]">
                اطلاعات تخصصی و پروانه
              </h2>

              <div class="grid grid-cols-1 gap-[18px] md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">رشته کارشناسی</label>
                  <input
                    v-model="form.field"
                    type="text"
                    placeholder="مثلاً: ثبت اسناد و املاک"
                    class="form-control placeholder:text-[#9AA3B5]"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm leading-5 text-[#687590]">شماره پروانه کارشناسی</label>
                  <input
                    v-model="form.license"
                    type="text"
                    inputmode="numeric"
                    placeholder="##########"
                    class="form-control text-center placeholder:text-[#9AA3B5]"
                  />
                </div>
              </div>
            </section>

            <!-- Bio -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <div class="mb-2 flex items-center justify-between gap-4">
                <h2 class="text-[17px] font-extrabold leading-6 text-[#071A41]">
                  معرفی و توضیحات
                </h2>
                <span class="text-xs text-[#9AA3B5]">{{ form.bio.length }} کاراکتر</span>
              </div>

              <p class="mb-4 text-xs leading-5 text-[#8A94A9]">
                این متن در صفحهٔ عمومی شما در بخش «معرفی و سوابق» نمایش داده می‌شود.
              </p>

              <textarea
                v-model="form.bio"
                placeholder="مثلاً: اینجانب با بیش از ۱۰ سال سابقه در حوزه کارشناسی رسمی دادگستری..."
                class="form-control form-control--textarea resize-none py-3 placeholder:text-[#9AA3B5]"
              />
            </section>

            <!-- Specialties -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-2 text-[17px] font-extrabold leading-6 text-[#071A41]">تخصص‌ها</h2>
              <p class="mb-4 text-xs leading-5 text-[#8A94A9]">
                مثل: ارزش‌گذاری ملک، مشاوره حقوقی، اموال غیرمنقول...
              </p>

              <div dir="ltr" class="mb-3 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="افزودن تخصص"
                  class="add-button"
                  @click="addItem(specialties, newSpecialty)"
                >
                  +
                </button>
                <input
                  v-model="newSpecialty.value"
                  dir="rtl"
                  type="text"
                  placeholder="نام تخصص..."
                  class="form-control form-control--compact flex-1 placeholder:text-[#9AA3B5]"
                  @keyup.enter="addItem(specialties, newSpecialty)"
                />
              </div>

              <p v-if="specialties.length === 0" class="text-xs leading-5 text-[#A0A9BA]">
                هنوز تخصصی ثبت نشده.
              </p>
              <div v-else class="flex flex-wrap gap-2">
                <span
                  v-for="(item, i) in specialties"
                  :key="`${item}-${i}`"
                  class="inline-flex items-center gap-2 rounded-full bg-[#F1F3F7] px-3 py-1.5 text-xs text-[#13224A]"
                >
                  {{ item }}
                  <button type="button" class="text-[#9AA3B5] transition hover:text-red-500" @click="specialties.splice(i, 1)">
                    ×
                  </button>
                </span>
              </div>
            </section>

            <!-- Education -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-4 text-[17px] font-extrabold leading-6 text-[#071A41]">
                سوابق تحصیلی / حرفه‌ای
              </h2>

              <div dir="ltr" class="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-[40px_minmax(0,1fr)_120px] sm:items-center">
                <button type="button" aria-label="افزودن سابقه" class="add-button" @click="addEducation">
                  +
                </button>
                <input
                  v-model="newEducation.title"
                  dir="rtl"
                  type="text"
                  placeholder="شرح دوره یا مدرک..."
                  class="form-control form-control--compact min-w-0 flex-1 placeholder:text-[#9AA3B5]"
                  @keyup.enter="addEducation"
                />
                <input
                  v-model="newEducation.year"
                  dir="rtl"
                  type="text"
                  inputmode="numeric"
                  placeholder="سال (مثلاً 1395)"
                  class="form-control form-control--compact placeholder:text-[#9AA3B5]"
                  @keyup.enter="addEducation"
                />
              </div>

              <p v-if="education.length === 0" class="text-xs leading-5 text-[#A0A9BA]">
                هنوز سوابقی ثبت نشده.
              </p>
              <div v-else class="divide-y divide-[#EEF0F3]">
                <div v-for="(item, i) in education" :key="`${item.title}-${i}`" class="flex items-center justify-between gap-4 py-3 text-sm">
                  <span class="text-[#13224A]">{{ item.title }}</span>
                  <div class="flex shrink-0 items-center gap-3">
                    <span class="text-[#B7943E]">{{ item.year }}</span>
                    <button type="button" class="text-[#9AA3B5] transition hover:text-red-500" @click="education.splice(i, 1)">
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <!-- Qualifications -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-4 text-[17px] font-extrabold leading-6 text-[#071A41]">
                صلاحیت‌ها و مجوزها
              </h2>

              <div dir="ltr" class="mb-3 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="افزودن صلاحیت"
                  class="add-button"
                  @click="addItem(qualifications, newQualification)"
                >
                  +
                </button>
                <input
                  v-model="newQualification.value"
                  dir="rtl"
                  type="text"
                  placeholder="نام صلاحیت یا مجوز..."
                  class="form-control form-control--compact flex-1 placeholder:text-[#9AA3B5]"
                  @keyup.enter="addItem(qualifications, newQualification)"
                />
              </div>

              <p v-if="qualifications.length === 0" class="text-xs leading-5 text-[#A0A9BA]">
                هنوز صلاحیتی ثبت نشده.
              </p>
              <ul v-else class="space-y-2">
                <li v-for="(item, i) in qualifications" :key="`${item}-${i}`" class="flex items-center justify-between gap-4 text-sm text-[#13224A]">
                  <span class="flex items-center gap-2"><span class="text-green-600">✓</span>{{ item }}</span>
                  <button type="button" class="text-[#9AA3B5] transition hover:text-red-500" @click="qualifications.splice(i, 1)">
                    ×
                  </button>
                </li>
              </ul>
            </section>

            <!-- Certificates -->
            <section class="rounded-[17px] border border-[#E2E6EC] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
              <h2 class="mb-4 text-[17px] font-extrabold leading-6 text-[#071A41]">
                مدارک و گواهینامه‌ها
              </h2>

              <div dir="ltr" class="mb-3 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="افزودن مدرک"
                  class="add-button"
                  @click="addItem(certificates, newCertificate)"
                >
                  +
                </button>
                <input
                  v-model="newCertificate.value"
                  dir="rtl"
                  type="text"
                  placeholder="نام مدرک یا گواهینامه..."
                  class="form-control form-control--compact flex-1 placeholder:text-[#9AA3B5]"
                  @keyup.enter="addItem(certificates, newCertificate)"
                />
              </div>

              <p v-if="certificates.length === 0" class="text-xs leading-5 text-[#A0A9BA]">
                هنوز مدرکی ثبت نشده.
              </p>
              <ul v-else class="space-y-2">
                <li v-for="(item, i) in certificates" :key="`${item}-${i}`" class="flex items-center justify-between gap-4 text-sm text-[#13224A]">
                  <span>{{ item }}</span>
                  <button type="button" class="text-[#9AA3B5] transition hover:text-red-500" @click="certificates.splice(i, 1)">
                    ×
                  </button>
                </li>
              </ul>
            </section>

            <!-- Actions -->
            <div class="flex flex-col gap-3 border-t border-[#DFE3E8] pt-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                :disabled="savingIdentity"
                class="h-[53px] rounded-xl bg-[#0B1B3A] px-7 text-sm font-extrabold text-white transition hover:bg-[#142B58] disabled:opacity-60"
              >
                {{ savingIdentity ? 'در حال ذخیره...' : 'ذخیرهٔ همهٔ تغییرات' }}
              </button>
              <button type="button" class="secondary-button" @click="openPasswordModal">
                تغییر رمز عبور
              </button>
              <button type="button" class="secondary-button" @click="openPublicPreview">
                پیش‌نمای صفحهٔ عمومی
              </button>
            </div>
          </form>
        </div>
      </main>

      <!-- Right sidebar: intentionally not sticky; its background stretches with the form. -->
      <aside dir="rtl" class="hidden bg-[#0A1938] lg:block">
                <div class="px-[21px] pt-[100px]">
          <div class="flex items-center gap-4 border-b border-white/10 pb-[21px]">
            <div
              class="h-12 w-12 shrink-0 rounded-[13px]  "
              style="background-image: repeating-linear-gradient(135deg, #e3e1db 0, #e3e1db 7px, #f7f5ef 7px, #f7f5ef 14px)"
              aria-hidden="true"
            />
            <span class="text-sm text-[#A8B8DB] whitespace-nowrap">کد ملی</span>
          </div>

          <nav class="mt-[22px] space-y-2">
            <RouterLink
              to="/panel"
              class="flex h-[43px] items-center justify-between rounded-[11px] bg-[#142B66] px-4 text-sm font-extrabold text-white transition hover:bg-[#1A3578]"
            >
              <span>ویرایش اطلاعات</span>
              <span aria-hidden="true">✎</span>
            </RouterLink>

            <button
              type="button"
              class="flex h-[43px] w-full items-center justify-between rounded-[11px] px-4 text-sm font-bold text-[#C3D1F0] transition hover:bg-white/5 hover:text-white"
              @click="openPublicPreview"
            >
              <span>نمای عمومی من</span>
              <span aria-hidden="true">◉</span>
            </button>

            <button
              type="button"
              class="flex h-[43px] w-full items-center justify-between rounded-[11px] px-4 text-sm font-bold text-[#FF949A] transition hover:bg-red-500/10"
              @click="handleLogout"
            >
              <span>خروج از حساب</span>
              <span aria-hidden="true">←</span>
            </button>
          </nav>
        </div>
      </aside>
    </div>

    <!-- ============ مودال تغییر رمز عبور ============ -->
    <Teleport to="body">
      <Transition name="modal" appear>
        <div
          v-if="passwordOpen"
          class="fixed inset-0 z-[90] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="تغییر رمز عبور"
        >
          <!-- پس‌زمینهٔ تیره -->
          <div class="absolute inset-0 bg-[#0B1B3A]/50" @click="closePasswordModal" />

          <!-- کارت -->
          <div
            dir="rtl"
            class="modal-card relative w-full max-w-[448px] rounded-[20px] bg-white p-7 shadow-[0_16px_48px_rgba(8,17,40,0.4)]"
          >
            <!-- هدر: آیکون قفل + عنوان (محتوا از سمت راست شروع می‌شود) -->
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

            <form class="space-y-[16px]" dir="rtl" @submit.prevent="submitPassword">
              <!-- رمز عبور فعلی -->
              <div>
                <label for="current-pw" class="mb-2 block text-sm leading-5 text-[#687590]">رمز عبور فعلی</label>
                <input
                  id="current-pw"
                  v-model="passwordForm.current"
                  type="password"
                  dir="rtl"
                  autocomplete="current-password"
                  :class="['password-input', pwError === 'invalid' || pwError === 'required' ? 'password-input--error' : '']"
                />
                <p v-if="pwError === 'invalid'" class="mt-2 flex items-center gap-1.5 text-xs font-semibold leading-5 text-[#E03131]">
                  <svg viewBox="0 0 16 16" class="h-3.5 w-3.5 shrink-0" fill="currentColor" aria-hidden="true">
                    <path d="M8 1.2a1 1 0 0 1 .88.51l6.1 10.68A1 1 0 0 1 14.1 14H1.9a1 1 0 0 1-.88-1.61L7.12 1.71A1 1 0 0 1 8 1.2Z" />
                  </svg>
                  رمز نامعتبر
                </p>
                <p v-else-if="pwError === 'required'" class="mt-2 text-xs font-semibold leading-5 text-[#E03131]">
                  لطفاً همهٔ فیلدها را تکمیل کنید.
                </p>
              </div>

              <!-- رمز عبور جدید -->
              <div>
                <label for="new-pw" class="mb-2 block text-sm leading-5 text-[#687590]">رمز عبور جدید</label>
                <input
                  id="new-pw"
                  v-model="passwordForm.next"
                  type="password"
                  dir="rtl"
                  autocomplete="new-password"
                  :class="['password-input', pwError === 'short' ? 'password-input--error' : '']"
                />
                <p v-if="pwError === 'short'" class="mt-2 text-xs font-semibold leading-5 text-[#E03131]">
                  رمز عبور جدید باید حداقل ۸ کاراکتر باشد.
                </p>
              </div>

              <!-- تکرار رمز عبور جدید -->
              <div>
                <label for="confirm-pw" class="mb-2 block text-sm leading-5 text-[#687590]">تکرار رمز عبور جدید</label>
                <input
                  id="confirm-pw"
                  v-model="passwordForm.confirm"
                  type="password"
                  dir="rtl"
                  autocomplete="new-password"
                  :class="['password-input', pwError === 'mismatch' ? 'password-input--error' : '']"
                />
                <p v-if="pwError === 'mismatch'" class="mt-2 text-xs font-semibold leading-5 text-[#E03131]">
                  تکرار رمز عبور با «رمز عبور جدید» مطابقت ندارد.
                </p>
              </div>

              <!-- خط جداکننده + دکمهٔ تمام‌عرض -->
              <div class="mt-[18px] border-t border-[#E2E6EC] pt-4">
                <button
                  type="submit"
                  :disabled="pwLoading"
                  class="flex h-[53px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#0B1B3A] text-sm font-extrabold text-white transition hover:bg-[#142B58] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span
                    v-if="pwLoading"
                    class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    aria-hidden="true"
                  />
                  {{ pwLoading ? 'در حال بررسی...' : 'تغییر رمز عبور' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ============ اعلان‌ها (پایین-راست) ============ -->
    <div class="pointer-events-none fixed bottom-6 right-6 z-[100] flex w-[min(380px,calc(100vw-3rem))] flex-col items-end gap-3" dir="rtl">
      <div class="flex w-full flex-col items-end gap-3">
        <TransitionGroup name="toast">
          <div
            v-for="item in toasts"
            :key="item.id"
            class="pointer-events-auto flex w-full items-start gap-3 rounded-[14px] border border-[#E2E6EC] bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.18)]"
          >
            <!-- آیکون وضعیت -->
            <svg v-if="item.type === 'success'" viewBox="0 0 36 36" class="h-9 w-9 shrink-0" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="18" fill="#16A34A" />
              <path d="M11.5 18.5l4.2 4.2 8.8-9.4" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else viewBox="0 0 36 36" class="h-9 w-9 shrink-0" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="18" fill="#E03131" />
              <path d="M12.8 12.8l10.4 10.4M23.2 12.8l-10.4 10.4" stroke="#fff" stroke-width="2.6" stroke-linecap="round" />
            </svg>

            <!-- متن -->
            <div class="min-w-0 flex-1">
              <p class="text-sm font-extrabold leading-5 text-[#071A41]">{{ item.title }}</p>
              <p v-if="item.message" class="mt-0.5 text-xs leading-5 text-[#75809A]">{{ item.message }}</p>
            </div>

            <!-- بستن -->
            <button
              type="button"
              aria-label="بستن اعلان"
              class="grid h-6 w-6 shrink-0 place-items-center rounded-md text-[#9AA3B5] transition hover:bg-[#F1F3F7] hover:text-[#071A41]"
              @click="dismissToast(item.id)"
            >
              <svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Topbar from '@/components/layout/Topbar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import { useAuth } from '@/composables/useAuth'
import { updateImportant } from '@/services/profileApi'

const router = useRouter()
const { logout } = useAuth()

/* ============================================================
   اعلان‌ها (toast) — پایین-راست صفحه
   ============================================================ */
type ToastType = 'success' | 'error'
interface ToastItem {
  id: number
  type: ToastType
  title: string
  message?: string
}

const toasts = ref<ToastItem[]>([])
let toastId = 0

const dismissToast = (id: number) => {
  toasts.value = toasts.value.filter((t) => t.id !== id)
}

const toast = (type: ToastType, title: string, message?: string, duration = 3800) => {
  const id = ++toastId
  toasts.value.push({ id, type, title, message })
  window.setTimeout(() => dismissToast(id), duration)
}

/* ============================================================
   مودال «تغییر رمز عبور»
   ============================================================ */
const passwordOpen = ref(false)
const passwordForm = reactive({ current: '', next: '', confirm: '' })

type PwError = '' | 'required' | 'short' | 'mismatch' | 'invalid'
const pwError = ref<PwError>('')
const pwLoading = ref(false)

const openPasswordModal = () => {
  passwordForm.current = ''
  passwordForm.next = ''
  passwordForm.confirm = ''
  pwError.value = ''
  passwordOpen.value = true
}

const closePasswordModal = () => {
  if (!pwLoading.value) passwordOpen.value = false
}

// قفل اسکرول صفحه هنگام باز بودن مودال
watch(passwordOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const submitPassword = async () => {
  pwError.value = ''

  if (!passwordForm.current.trim() || !passwordForm.next || !passwordForm.confirm) {
    pwError.value = 'required'
    return
  }
  if (passwordForm.next.length < 8) {
    pwError.value = 'short'
    return
  }
  if (passwordForm.next !== passwordForm.confirm) {
    pwError.value = 'mismatch'
    return
  }

  pwLoading.value = true
  try {
    /* ==========================================================
       ⚠️ TODO: این بلوک را با درخواست API واقعی جایگزین کنید، مثلاً:
       await api.post('/expert/change-password', {
         currentPassword: passwordForm.current,
         newPassword: passwordForm.next,
       })
       و در صورت پاسخ خطا: throw new Error('رمز نامعتبر')
       ==========================================================
       نسخهٔ تست: رمز فعلی پیش‌فرض «123456» است (در localStorage نگه داشته می‌شود)
       تا بتوانید بدون سرور سناریوی موفقیت و خطا را امتحان کنید. */
    const currentPassword = localStorage.getItem('expert:current-password') ?? '123456'

    if (passwordForm.current !== currentPassword) {
      pwError.value = 'invalid'
      toast('error', 'رمز نامعتبر', 'رمز عبور فعلی را اشتباه وارد کردید.')
      return
    }

    localStorage.setItem('expert:current-password', passwordForm.next)

    // ✅ موفقیت: بستن مودال + اعلان سبز پایین-راست
    passwordOpen.value = false
    toast('success', 'رمز عبور با موفقیت تغییر کرد', 'از این پس با رمز عبور جدید وارد شوید.')
  } finally {
    pwLoading.value = false
  }
}

/* ============================================================
   بقیهٔ منطق صفحه (بدون تغییر)
   ============================================================ */
const form = reactive({
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
})

/* ============================================================
   ذخیرهٔ اطلاعات هویتی (بخش «اطلاعات هویتی» بالای فرم)
   متصل به API: POST /users/updateImportant
   ============================================================ */
const savingIdentity = ref(false)

const submitForm = async () => {
  savingIdentity.value = true

  try {
    await updateImportant({
      first_name: form.firstName,
      last_name: form.lastName,
      national_code: form.nationalId,
      gender: form.gender === 'female' ? 2 : 1,
      birth_date: form.birthDate,
      status: 1,
    })

    toast('success', 'اطلاعات هویتی ذخیره شد', 'تغییرات شما با موفقیت ثبت شد.')
  } catch (err) {
    toast('error', 'ذخیره‌سازی ناموفق بود', err instanceof Error ? err.message : 'خطایی رخ داد.')
  } finally {
    savingIdentity.value = false
  }
}

const provinces = [
  'تهران',
  'گیلان',
  'مازندران',
  'خراسان رضوی',
  'آذربایجان شرقی',
  'آذربایجان غربی',
  'اردبیل',
  'اصفهان',
  'سمنان',
  'سیستان و بلوچستان',
  'گلستان',
  'البرز',
  'قم',
  'مرکزی',
  'زنجان',
  'همدان',
  'قزوین',
  'کهگیلویه و بویراحمد',
  'کرمانشاه',
  'کردستان',
  'فارس',
  'لرستان',
  'کرمان',
  'خراسان جنوبی',
  'بوشهر',
  'هرمزگان',
  'خوزستان',
  'چهارمحال و بختیاری',
  'خراسان شمالی',
  'یزد',
  'ایلام',
] as const

const specialties = reactive<string[]>([])
const qualifications = reactive<string[]>([])
const certificates = reactive<string[]>([])
const education = reactive<{ title: string; year: string }[]>([])

const newSpecialty = reactive({ value: '' })
const newQualification = reactive({ value: '' })
const newCertificate = reactive({ value: '' })
const newEducation = reactive({ title: '', year: '' })

const addItem = (list: string[], holder: { value: string }) => {
  const value = holder.value.trim()
  if (!value) return

  list.push(value)
  holder.value = ''
}

const addEducation = () => {
  const title = newEducation.title.trim()
  if (!title) return

  education.push({
    title,
    year: newEducation.year.trim(),
  })

  newEducation.title = ''
  newEducation.year = ''
}

const openPublicPreview = () => {
  const expertId = form.license.trim() || '3871'

  // Makes the preview reflect the current form, even before it is saved to the API.
  localStorage.setItem(
    'expert-public-preview',
    JSON.stringify({
      ...form,
      specialties: [...specialties],
      qualifications: [...qualifications],
      certificates: [...certificates],
      education: education.map((item) => ({ ...item })),
    }),
  )

  router.push({
    name: 'expert-public',
    params: { id: expertId },
    query: { preview: '1' },
  })
}

const handleLogout = () => {
  logout()
  router.push('/')
}
</script>

<style scoped>
.form-control {
  width: 100%;
  height: 50px;
  border: 1px solid #d9dee7;
  border-radius: 11px;
  padding-inline: 1rem;
  background-color: #fff;
  color: #13224a;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease;
}

.form-control:focus {
  border-color: #315fba;
  box-shadow: 0 0 0 4px rgba(49, 95, 186, 0.1);
}

.form-control--compact {
  height: 44px;
}

.form-control--textarea {
  height: 166px;
}

.form-control--disabled {
  background-color: #f7f6f2;
}

.add-button {
  display: inline-flex;
  width: 40px;
  height: 44px;
  flex: 0 0 40px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #0b1b3a;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  transition: background-color 150ms ease, transform 150ms ease;
}

.add-button:hover {
  background: #142b58;
}

.add-button:active {
  transform: scale(0.97);
}

.secondary-button {
  height: 53px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding-inline: 1.75rem;
  background: #f1f2f6;
  color: #263755;
  font-size: 0.875rem;
  font-weight: 700;
  transition: border-color 150ms ease, background-color 150ms ease;
}

.secondary-button:hover {
  border-color: #dfe3e8;
  background: #fff;
}

/* ---------- فیلدهای مودال تغییر رمز عبور ---------- */
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
  transition: border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease;
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

/* ---------- انیمیشن مودال ---------- */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 180ms ease;
}

.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition: transform 180ms ease, opacity 180ms ease;
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

/* ---------- انیمیشن اعلان‌ها ---------- */
.toast-enter-active,
.toast-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(24px);
}

@media (max-width: 639px) {
  .secondary-button {
    width: 100%;
  }
}
</style>