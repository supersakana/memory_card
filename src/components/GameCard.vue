<template>
    <div class="w-[150px] h-[175px] flex items-center justify-center bg-white rounded-2xl border-2 border-[#e7e7e7] shadow-sm text-6xl">
        {{ char }}
    </div>
</template>
  
<script>

export default {
name: 'GameCard',
props: {
  char: {
    default: '水',
    type: String
  }
}
}
</script>

<style>
</style>