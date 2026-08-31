// سرویس اتصال به API های احراز هویت گارنت (Garnet) برای ورود/ثبت‌نام اعضا با شماره موبایل

const API_BASE_URL = 'https://takrasmi.com/GarnetAPI'

async function postJson(path: string, body: Record<string, unknown>) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'g-platform': 'Garnet-Build-v4',
            'g-api-key': 'AEbk35zB9YfSqw8u9mjH7ykNK4xq2Yq5',
            // "Authorization": "Bearer " + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.Message || data?.message || `خطای سرور (کد ${response.status})`)
  }

  return data
}

// ================= isUserByMobile =================

export function isUserByMobile(mobile: string) {
  return postJson('/users/isUserByMobile', {
    mobile,
  })
}

// ================= sendVerificationCodeByMobile =================

export function sendVerificationCodeByMobile(mobile: string) {
  return postJson('/users/sendVerificationCodeByMobile', {
    CodeCount: 5,
    mobile,
    language: 1,
    signature: false,
    withAutoGenerationCode: true,
  })
}

// ================= checkVerificationCode =================

export function checkVerificationCode(code: string, mobile: string) {
  return postJson('/users/checkVerificationCode', {
    Code: code,
    Target: mobile,
    prefixMobile: '',
    withUsername: false,
    withEmail: false,
    callBackInfo: false,
    callBackToken: true,
    verifyAccount: true,
  })
}
