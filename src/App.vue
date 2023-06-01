<template>
    <div class="h-screen p-5">
        <GameScore :current="current_score" :best="best_score" />
        <div class="my-10 h-[70vh] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div :key="index" v-for="(char, index) in chars">
            <GameCard @play-round="playRound" :char="char" />
          </div>
        </div>
        <span>{{ storeGame.name }}</span>
    </div>
</template>

<script>
import GameCard from './components/GameCard.vue'
import GameScore from './components/GameScore.vue'
import { useGameStore } from './store/game'
import { computed } from 'vue'


export default {
  name: 'App',
  components: {
    GameCard,
    GameScore
  },
  setup() {
    const storeGame = useGameStore()
    const chars = computed(() => storeGame.chars)
    const best_score = computed(() => storeGame.best_score)
    const current_score = computed(() => storeGame.current_score)

    return {
      storeGame,
      chars,
      best_score,
      current_score,
    }
  },
  mounted() {
    this.shuffle()
  },
  methods: {
    shuffle(){
      this.chars = this.chars.sort(() => Math.random() - 0.5);
    },
    playRound(char){
      this.shuffle()
      if(this.storeGame.memory.includes(char)){
        this.storeGame.memory = []
        this.storeGame.current_score = 0
      } else {
        this.storeGame.memory = [...this.storeGame.memory, char]
        this.storeGame.current_score = this.storeGame.current_score + 1
        if(this.storeGame.current_score >  this.storeGame.best_score) this.storeGame.best_score = this.storeGame.current_score
      }
    }
  }
}
</script>

<style>
</style>
