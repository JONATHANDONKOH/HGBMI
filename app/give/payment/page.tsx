"use client"
import { default as nextDynamic } from 'next/dynamic'

export const dynamic = 'force-dynamic'

const PaymentPage = nextDynamic(() => import('./PaymentComponent'), { ssr: false }) as any

export default function Page() {
  return <PaymentPage />
}
