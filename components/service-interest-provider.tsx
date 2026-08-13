"use client"

import * as React from "react"

import type { ServiceInterestId } from "@/lib/site-content"

type ServiceInterestContextValue = {
  selected: ServiceInterestId
  setSelected: (value: ServiceInterestId) => void
}

const ServiceInterestContext = React.createContext<
  ServiceInterestContextValue | undefined
>(undefined)

export function ServiceInterestProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [selected, setSelected] = React.useState<ServiceInterestId>("unsure")

  const value = React.useMemo(() => ({ selected, setSelected }), [selected])

  return (
    <ServiceInterestContext.Provider value={value}>
      {children}
    </ServiceInterestContext.Provider>
  )
}

export function useServiceInterest() {
  const context = React.useContext(ServiceInterestContext)

  if (!context) {
    throw new Error(
      "useServiceInterest must be used within ServiceInterestProvider"
    )
  }

  return context
}
