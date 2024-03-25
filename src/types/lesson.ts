export interface Section {
  sectionName: string;
  lessons: Lesson[];
}

export interface Lesson {
  lessonTitle: string;
  lessonDesc: string;
  words: Word[];
}

export interface Word {
  word: string;
  desc: string;
  examples: Example[];
}

export interface Example {
  sentence: string;
  translation: string;
}
