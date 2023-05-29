<template>
    <div class="h-screen p-5 text-[#303030] bg-[#f0f4f5]">
        <GameScore />
        <div class="my-10 h-[70vh] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div :key="index" v-for="(char, index) in chars">
            <GameCard @play-round="playRound" :char="char" />
          </div>
        </div>
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
  },
  data(){
    return {
      chars: ['火', '水', '木', '風','日','月',
              '火', '水', '木', '風','日','月']
    }
  },
  mounted() {
    this.shuffle()
  },
  methods: {
    shuffle(){
      this.chars.sort(() => Math.random() - 0.5);
    },
    playRound(char){
      this.shuffle()
      console.log(char)
    }
  }
}
</script>

<style>
</style>
