import { create } from 'zustand'

interface StoreProps {
  period: number
  maxPeriod: number
  inflationPercentage: number
  currentPrice: number
  setPeriod: (newPeriod: StoreProps["period"]) => void
  resetPeriod: () => void
}

export const useStore = create<StoreProps>((set) => ({
  period: 0,
  maxPeriod: 25,
  inflationPercentage: 5,
  currentPrice: 22.7,
  setPeriod: (newPeriod) => set({ period: newPeriod }),
  resetPeriod: () => set({ period: 0 }),
}))
