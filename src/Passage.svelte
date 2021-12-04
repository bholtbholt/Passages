<script lang="ts">
  export let id;
  export let html;
  export let chapter;
</script>

<p {id} class="font-serif dark:text-gray-50 indent-6">
  {@html html}
</p>
