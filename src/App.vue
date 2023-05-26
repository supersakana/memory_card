<template>
    <div class="w-full md:w-screen p-5">
        <GameScore />
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
