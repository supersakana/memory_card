<template>
    <div class="h-full w-full flex items-center justify-center bg-white rounded-2xl shadow-md text-4xl md:text-6xl cursor-pointer">
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