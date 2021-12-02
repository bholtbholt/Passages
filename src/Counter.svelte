<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="bg-orange-400 hover:bg-orange-500 focus:bg-orange-500
    focus:ring-orange-400 border-orange-700
    w-full rounded-full px-6 py-2
    text-xl text-center whitespace-nowrap
    ease-out duration-200 transition-colors"
  on:click={increment}>
  Clicks: {count}
</button>
