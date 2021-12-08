import type { Chapter, Passage } from '../src/types';

const chapter1: Passage[] = [
  'Call me Jonah. My parents did, or nearly did. They called me John.',
  'Jonah–John–if I had been a Sam, I would have been a Jonah still–not because I have been unlucky for others, but because somebody or something has compelled me to be certain places at certain times, without fail. Conveyances and motives, both conventional and bizarre, have been provided. And, according to plan, at each appointed second, at each appointed place this Jonah was there.',
  'Listen:',
  'When I was a younger man–two wives ago, 250,000 cigarettes ago, 3000 quarts of beer ago…',
  'When I was a much younger man, I began to collect material for a book to be called <em>The Day the World Ended</em>.',
  'The book was to be factual.',
  'The book was to be an account of what important Americans had done on the day when the first atomic bomb was dropped on Hiroshima, Japan.',
  'It was to be a Christian book. I was a Christian then.',
  'I am a Bokononist now.',
  'I would have been a Bokononist then, if there had been anyone to teach me the bittersweet lies of Bokonon. But Bokononism was unknown beyond the gravel beaches and coral knives that ring this little island in the Caribbean Sea, the Republic of San Lorenzo.',
  "We Bokononists believe that humanity is organized into teams, teams that do God's Will without ever discovering what they are doing. Such a team is called a <em>karass</em> by Bokonon, and the instrument, the <em>kan-kan</em>, that brought me into my own particular <em>karass</em> was the book I never finished, the book to be called <em>The Day the World Ended</em>.",
].map((passage) => {
  return { html: passage, chapter: 1 };
});

const chapter2: Passage[] = [
  `"If you find your life tangled up with somebody else's life for no very logical reasons," writes Bokonon, "that person may be a member of your <em>karass</em>."`,
  'At another point in <em>The Books of Bokonon</em> he tells us, "Man created the checkerboard; God created the <em>karass</em>." By that he means that a <em>karass</em> ignores national, institutional, occupational, familial, and class boundaries.',
  'It is as free-form as an amoeba.',
  'In his "Fifty-third Calypso," Bokonon invites us to sing along with him:',
  'Oh, a sleeping drunkard',
  'Up in Central Park,',
  'And a lion-hunter',
  'In the jungle dark,',
  'And a Chinese dentist,',
  'And a British queen–',
  'All fit together',
  'In the same machine.',
  'Nice, nice, very nice;',
  'Nice, nice, very nice;',
  'Nice, nice, very nice–',
  'So many different people',
  'In the same device',
].map((passage) => {
  return { html: passage, chapter: 2 };
});

const chapter3: Passage[] = [
  "Nowhere does Bokonon warn against a person's trying to discover the limits of his <em>karass</em> and the nature of the work God Almighty has had it do. Bokonon simply observes that such investigations are bound to be incomplete.",
].map((passage) => {
  return { html: passage, chapter: 3 };
});

export const catsCradle: Chapter[] = [
  { chapter: 1, passages: chapter1 },
  { chapter: 2, passages: chapter2 },
  { chapter: 3, passages: chapter3 },
];
