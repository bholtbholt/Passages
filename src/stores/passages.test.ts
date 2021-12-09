import type { Passage } from '../types';
import { chapters, latestChapter, passages } from './passages';
import { get } from 'svelte/store';

afterEach(() => {
  passages.reset();
  return;
});

describe('$passages', () => {
  test('should init with no passages', () => {
    expect(get(passages)).toEqual([]);
  });

  test('should add a passage', () => {
    const passage: Passage = { html: 'A new passage', chapter: 1 };
    passages.addPassage(passage);

    expect(get(passages)).toEqual([passage]);
  });
});

describe('$chapters', () => {
  test('should transform passages into chapters', () => {
    const passage1 = { html: 'First passage', chapter: 1 };
    const passage2 = { html: 'First passage', chapter: 2 };
    const passage3 = { html: 'First passage', chapter: 3 };
    passages.addPassage(passage1);
    passages.addPassage(passage2);
    passages.addPassage(passage3);

    const expected = new Map();
    expected.set(1, [passage1]);
    expected.set(2, [passage2]);
    expected.set(3, [passage3]);

    expect(get(chapters)).toEqual(expected);
  });
});

describe('$latestChapter', () => {
  test('should init with 1', () => {
    expect(get(latestChapter)).toEqual(1);
  });

  test('should track the latest chapter through passages', () => {
    passages.addPassage({ html: 'First passage', chapter: 1 });
    expect(get(latestChapter)).toEqual(1);
    passages.addPassage({ html: 'Second passage', chapter: 2 });
    expect(get(latestChapter)).toEqual(2);
    passages.addPassage({ html: 'Third passage', chapter: 3 });
    expect(get(latestChapter)).toEqual(3);
  });
});
