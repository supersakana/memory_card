import { defineStore } from 'pinia'

export const useGameStore = defineStore("id", {
    state: () => ({
        memory: [],
        current_score: 0,
        best_score: 0,
        chars: ['火', '水', '木', '風','日','月',
                '火', '水', '木', '風','日','月'],
    }),
    getters: {
    },
    actions: {
    }
})