<script lang="ts">
  import { catsCradle } from './catsCradle';

  import Chapter from './Chapter.svelte';
  import Passage from './Passage.svelte';
</script>

<main class="max-w-prose mx-auto">
  {#each catsCradle as { chapter, passages }}
    <section class="text-xl leading-relaxed">
      <Chapter>{chapter}</Chapter>
      {#each passages as passage}
        <Passage {...passage} />
      {/each}
    </section>
  {/each}
</main>
