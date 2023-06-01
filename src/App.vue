<template>
    <div class="h-screen p-5">
        <GameScore />
        <div class="my-10 h-[70vh] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div :key="index" v-for="(char, index) in chars">
            <GameCard :char="char" />
          </div>
        </div>
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

    return {
      storeGame,
      chars,
    }
  },
  mounted() {
    this.storeGame.shuffle()
  }
}
</script>