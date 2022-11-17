import create from 'zustand'
import { persist } from 'zustand/middleware'

export interface CounterState {
    count: number
    increase: (by: number) => void
}

export const useCounterStore = create<CounterState>()(
    persist((set) => ({
        count: 0,
        increase: (by) => set((state) => ({ count: state.count + by })),
    }), { name: 'counter' })
)