// سرویس اتصال فرم «تماس با ما» به API گارنت (Garnet)
// فیلدهای فرم بر اساس formId=1 با این شماره‌ها ثبت می‌شن:
// 1 = نام و نام خانوادگی، 2 = شمارهٔ تماس، 3 = موضوع، 4 = متن پیام

const API_BASE_URL = 'https://takrasmi.com/GarnetAPI'

export interface ContactFormData {
  fullName: string
  phone: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/forms/createResults`, {
    method: 'POST',
    headers: {'g-platform': 'Garnet-Build-v4',
            'g-api-key': 'AEbk35zB9YfSqw8u9mjH7ykNK4xq2Yq5',
            // "Authorization": "Bearer " + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      duration: 0,
      formId: 1,
      formResults: {
        '1': data.fullName,
        '2': data.phone,
        '3': data.subject,
        '4': data.message,
      },
      status: 1,
      uniqueForm: true,
    }),
  })

  const responseData = await response.json().catch(() => null)

  if (!response.ok) {
    const message = responseData?.Message || responseData?.message
    throw new Error(message || `خطای سرور (کد ${response.status})`)
  }
}
