<script lang="ts">
  import { onMount } from 'svelte';

  import Chapter from './Chapter.svelte';
  import Passage from './Passage.svelte';

  let chapters = [];

  onMount(async () => {
    const response = await fetch('catscradle.json');
    chapters = await response.json();
  });
</script>

<main class="max-w-prose mx-auto">
  {#each chapters as { chapter, passages }}
    <section class="text-xl leading-relaxed">
      <Chapter>{chapter}</Chapter>
      {#each passages as passage}
        <Passage {...passage} />
      {/each}
    </section>
  {/each}
</main>
