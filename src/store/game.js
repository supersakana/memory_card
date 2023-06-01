import { defineStore } from 'pinia'

export const useGameStore = defineStore("id", {
    state: () => ({
        memory: [],
        current_score: 0,
        best_score: 0,
        chars: ['火', '水', '木', '風','日','月',
                '火', '水', '木', '風','日','月'],
    }),
    actions: {
        correctGuess(char){
            this.memory = [...this.memory, char]
            this.current_score++

            if(this.current_score > this.best_score){
                this.best_score = this.current_score
            }
        },
        wrongGuess() {
            this.memory = []
            this.current_score = 0
        },
        shuffle(){
            this.chars = this.chars.sort(() => Math.random() - 0.5)
        },
        playRound(char) {
            this.shuffle()
            if(this.memory.includes(char)){
                this.wrongGuess()
            } else {
                this.correctGuess(char)
            }
        }
    }
})