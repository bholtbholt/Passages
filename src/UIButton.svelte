<script>
  let className = '';
  export { className as class };
  export let disabled = false;
  export let theme = 'primary';
  const colors = {
    primary: 'text-white bg-gray-900 border-transparent',
    secondary: 'text-indigo-800 bg-white border-indigo-800 hover:text-white focus:text-white',
  };

  import UISpinner from './UISpinner.svelte';
</script>

<button
  on:click
  {disabled}
  class:opacity-75={disabled}
  class:cursor-not-allowed={disabled}
  class="{colors[theme] || colors.primary} {className}
    border
    hover:bg-indigo-800 focus:bg-indigo-800
    dark:text-indigo-50 dark:bg-indigo-700
    focus:outline-none focus:ring focus:ring-offset-2
    ring-indigo-400 dark:ring-offset-gray-700
    rounded-full px-6 py-2
    text-center whitespace-nowrap
    ease-out duration-200 transition-colors"
>
  <slot />
  {#if disabled}
    <UISpinner class="ml-1 mb-0.5 text-inherit inline-block" size="1em" />
  {/if}
</button>
