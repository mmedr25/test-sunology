import { useStore } from "@/store/sunny-store"

export const useRangeCalc = () => {
  const period = useStore((state) => state.period)
  const maxPeriod = useStore((state) => state.maxPeriod)
  const setPeriod = useStore((state) => state.setPeriod)
  const resetPeriod = useStore((state) => state.resetPeriod)

  const calcPeriod = (trackWidth: number, thumbWidth: number, thumbPosition: number) => {
    if (isNaN(trackWidth) || isNaN(thumbPosition) || isNaN(thumbWidth)) {
      resetPeriod()
      return
    }
    // BODMAS
    const slidableWidth = trackWidth - thumbWidth
    const calc = thumbPosition / slidableWidth * maxPeriod
    setPeriod(Math.ceil(calc))
  }

  return {period, calcPeriod}
}