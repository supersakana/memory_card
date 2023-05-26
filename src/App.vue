<template>
    <div class="w-full md:h-screen p-5 text-[#303030] bg-[#f0f4f5]">
        <GameScore />
        <div></div>
        <GameCard />
    </div>
</template>

<script>
import GameCard from './components/GameCard.vue'
import GameScore from './components/GameScore.vue'

export default {
  name: 'App',
  components: {
    GameCard,
    GameScore
  }
}
</script>

<style>
</style>
