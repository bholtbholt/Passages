type NanoID = string;

export interface Passage {
  chapter: number;
  html: string;
  id: NanoID;
}

export interface Chapter {
  chapter: number;
  passages: Passage[];
}
