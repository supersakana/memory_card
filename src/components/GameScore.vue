<template>
    <div class="flex flex-col items-end text-2xl">
      <span>Current Score {{ storeGame.current_score }}</span>
      <span>Best Score {{ storeGame.best_score }}</span>
    </div>
</template>
  
<script>
import { useGameStore } from '@/store/game'
import { computed } from 'vue'

export default {
  name: 'GameScore',
  setup() {
    const storeGame = useGameStore()
    const best_score = computed(() => storeGame.best_score)
    const current_score = computed(() => storeGame.current_score)

    return {
      storeGame,
      best_score,
      current_score,
    }
  },
}
</script>