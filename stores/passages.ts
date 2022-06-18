import type { Passage } from '../types';
import { writable, derived } from 'svelte/store';

export const passages = (() => {
  const init: Passage[] = [];
  const { subscribe, set, update } = writable(init);

  return {
    subscribe,
    set,
    reset: () => set(init),
    addPassage: (passage: Passage) => {
      update((passages) => (passages = [...passages, passage]));
    },
  };
})();

export const chapters = derived(passages, ($passages) => {
  return $passages.reduce((chapter, passage) => {
    return chapter.set(passage.chapter, [...(chapter.get(passage.chapter) || []), passage]);
  }, new Map());
});

export const latestChapter = derived(passages, ($passages): number => {
  return $passages[$passages.length - 1]?.chapter || 1;
});
