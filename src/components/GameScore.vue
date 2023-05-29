<template>
    <div class="flex flex-col items-end text-2xl">
      <span>Current Score {{ current }}</span>
      <span>Best Score {{ best }}</span>
    </div>
</template>
  
  <script>

  export default {
    name: 'GameScore',
    props: {
      current: {
        default: 0,
        type: Number
      },
      best: {
        default: 0,
        type: Number
      },
    }
  }
  </script>
  
  <style>
  </style>