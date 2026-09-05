// سرویس اتصال به API «سؤالات پرتکرار» گارنت (Garnet)

const API_BASE_URL = 'https://takrasmi.com/GarnetAPI'

export interface FaqItem {
  question: string
  answer: string
}

export async function getFaqs(category = 1): Promise<FaqItem[]> {
  const response = await fetch(`${API_BASE_URL}/faqs/index`, {
    method: 'POST',
    headers: {
      'g-platform': 'Garnet-Build-v4',
            'g-api-key': 'AEbk35zB9YfSqw8u9mjH7ykNK4xq2Yq5',
            // "Authorization": "Bearer " + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category }),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const message = data?.Message || data?.message
    throw new Error(message || `خطای سرور (کد ${response.status})`)
  }

  const list = Array.isArray(data)
    ? data
    : data?.data || data?.Data || data?.result || data?.Result || data?.items || data?.Items || []

  return list
    .map((item: Record<string, unknown>) => ({
      question: String(item?.question ?? item?.Question ?? item?.title ?? item?.Title ?? ''),
      answer: String(item?.answer ?? item?.Answer ?? item?.description ?? item?.Description ?? ''),
    }))
    .filter((item: FaqItem) => item.question && item.answer)
}
