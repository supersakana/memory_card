<template>
    <div @click="this.storeGame.playRound(char)"  class="h-full w-full flex items-center justify-center bg-white rounded-2xl shadow-md text-4xl md:text-6xl cursor-pointer hover:scale-105 hover:shadow:xl duration-500">
        {{ char }}
    </div>
</template>
  
<script>
 import { useGameStore } from '@/store/game'

export default {
name: 'GameCard',
props: {
  char: {
    default: '水',
    type: String
  }
},
setup() {
    const storeGame = useGameStore()

    return {
      storeGame,
    }
  },
}
</script>