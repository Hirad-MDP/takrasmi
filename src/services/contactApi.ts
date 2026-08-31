// سرویس اتصال فرم «تماس با ما» به Formspree
// آدرس فرم رو از فایل .env می‌خونه (متغیر VITE_FORMSPREE_ENDPOINT)

export interface ContactFormData {
  fullName: string
  phone: string
  subject: string
  message: string
}

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string

export async function submitContactForm(data: ContactFormData): Promise<void> {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error(
      'آدرس API تنظیم نشده. مقدار VITE_FORMSPREE_ENDPOINT رو در فایل .env قرار بده.',
    )
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.fullName,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    }),
  })

  if (!response.ok) {
    throw new Error('ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.')
  }
}
