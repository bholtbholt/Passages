<script lang="ts">
  import type { Passage } from '../src/types';
  import { passages, latestChapter } from './stores/passages';
  import Chapter from './Chapter.svelte';

  let html;
  $: chapter = $latestChapter;
  $: showChapterButton = chapter === $latestChapter;

  let enableForm = true;
  let showChapter = false;
  let showToolbar = false;

  function submitPassage() {
    enableForm = false;

    const passage = { html, chapter };
    passages.addPassage(passage);
    this.reset();

    showToolbar = false;
    showChapter = false;
    enableForm = true;
  }

  function addChapter() {
    chapter = chapter + 1;
    showChapter = true;
  }

  import UIButton from './UIButton.svelte';
</script>

<form on:submit|preventDefault={submitPassage}>
  {#if showChapter}
    <Chapter>{chapter}</Chapter>
  {/if}
  <textarea
    class="w-full mb-16
      font-serif dark:text-gray-50 indent-6
      focus:outline-none
      text-xl leading-relaxed"
    on:click={() => (showToolbar = true)}
    bind:value={html}
    placeholder="Add your passage to the story…"
  />

  {#if showToolbar}
    <div class="flex">
      <UIButton disabled={!enableForm}>Add passage</UIButton>
      {#if showChapterButton}
        <UIButton theme="secondary" class="ml-auto" on:click={addChapter}>
          Start new chapter
        </UIButton>
      {/if}
    </div>
  {/if}
</form>
