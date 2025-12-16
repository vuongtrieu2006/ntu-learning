"use server"

import { stripe } from "@/lib/stripe"
import { COURSES } from "@/lib/products"

export async function startCheckoutSession(courseId: string) {
  const course = COURSES.find((c) => c.id === courseId)
  if (!course) {
    throw new Error(`Course with id "${courseId}" not found`)
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: course.name,
            description: course.description,
          },
          unit_amount: course.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  })

  return session.client_secret
}
