export interface Passage {
  chapter: number;
  html: string;
}

export interface Chapter {
  chapter: number;
  passages: Passage[];
}
