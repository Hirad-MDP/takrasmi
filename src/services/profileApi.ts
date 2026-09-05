// سرویس اتصال به API «به‌روزرسانی اطلاعات هویتی» گارنت (Garnet)
// استفاده‌شده در پنل اعضا، بخش «اطلاعات هویتی»

const API_BASE_URL = 'https://takrasmi.com/GarnetAPI'

export interface UpdateImportantPayload {
  first_name: string
  last_name: string
  national_code: string
  // ۱ = مرد، ۲ = زن (بر اساس نمونهٔ داده‌شده حدس زده شده؛ در صورت متفاوت بودن مقادیر واقعی، این نگاشت باید اصلاح شود)
  gender: number
  birth_date: string
  status: number
}

export async function updateImportant(payload: UpdateImportantPayload) {
  let token =localStorage.getItem("takrasmi_token")
  const response = await fetch(`${API_BASE_URL}/users/updateImportant`, {
    method: 'POST',
    headers: {
      'g-platform': 'Garnet-Build-v4',
            'g-api-key': 'AEbk35zB9YfSqw8u9mjH7ykNK4xq2Yq5',
            "Authorization": "Bearer " + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const message = data?.Message || data?.message
    throw new Error(message || `خطای سرور (کد ${response.status})`)
  }

  return data
}
