"use client"

import { useCallback, useState } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { startCheckoutSession } from "@/app/actions/stripe"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function CourseCheckout({ courseId }: { courseId: string }) {
  const [error, setError] = useState<string | null>(null)

  const startSession = useCallback(async () => {
    try {
      setError(null)
      return await startCheckoutSession(courseId)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Có lỗi xảy ra"
      setError(message)
      throw err
    }
  }, [courseId])

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div id="checkout" className="w-full">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret: startSession }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  )
}
