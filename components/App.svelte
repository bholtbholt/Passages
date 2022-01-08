<script lang="ts">
  import { onMount } from 'svelte';

  import { chapters, passages } from '../stores/passages';
  import Chapter from './Chapter.svelte';
  import Passage from './Passage.svelte';
  import PassageForm from './PassageForm.svelte';

  onMount(async () => {
    const response = await fetch('catscradle.json');
    const data = await response.json();
    passages.set(data);
  });
</script>

<main class="max-w-prose mx-auto">
  {#each [...$chapters] as [chapter, passages]}
    <section class="text-xl leading-relaxed">
      <Chapter>{chapter}</Chapter>
      {#each passages as passage}
        <Passage>{@html passage.html}</Passage>
      {/each}
    </section>
  {/each}

  <PassageForm />
</main>
