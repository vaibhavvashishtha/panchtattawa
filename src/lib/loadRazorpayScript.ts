let loadPromise: Promise<void> | null = null

export function loadRazorpayScript(): Promise<void> {
  if (typeof window !== 'undefined' && (window as any).Razorpay) {
    return Promise.resolve()
  }

  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      loadPromise = null
      reject(new Error('Failed to load Razorpay checkout script'))
    }
    document.body.appendChild(script)
  })

  return loadPromise
}
