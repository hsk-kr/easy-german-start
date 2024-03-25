import { describe, it, expect } from 'vitest';
import { mostCommon1000Words } from './index';

describe('Validate mostCommon1000Words', () => {
  it('should has two sections.', () => {
    expect(mostCommon1000Words).length(2);
  });

  const getSections = function* () {
    const sections = Object.values(mostCommon1000Words);
    for (const section of sections) {
      yield section;
    }
  };

  const getLessons = function* () {
    for (const section of getSections()) {
      for (const lesson of section.lessons) {
        yield lesson;
      }
    }
  };

  const getWords = function* () {
    for (const lesson of getLessons()) {
      for (const word of lesson.words) {
        yield word;
      }
    }
  };

  const getExamples = function* () {
    for (const word of getWords()) {
      for (const example of word.examples) {
        yield example;
      }
    }
  };

  // Section
  describe('Each section', () => {
    it('have sectionName and lessons properties.', () => {
      for (const section of getSections()) {
        expect(section).toHaveProperty('sectionName');
        expect(section).toHaveProperty('lessons');
      }
    });

    it('should have 10 lessons.', () => {
      for (const section of getSections()) {
        expect(section.lessons).length(10);
      }
    });
  });

  // Lesson
  describe('Each lesson', () => {
    it('should have priperties: lessonTitle, lessonDesc, words.', () => {
      for (const lesson of getLessons()) {
        expect(lesson).toHaveProperty('lessonTitle');
        expect(lesson).toHaveProperty('lessonDesc');
        expect(lesson).toHaveProperty('words');
      }
    });

    it('should have 10 words.', () => {
      for (const lesson of getLessons()) {
        expect(lesson.words).length(10);
      }
    });
  });

  // Word
  describe('Each word', () => {
    it('should have properties: word, desc, examples.', () => {
      for (const word of getWords()) {
        expect(word).toHaveProperty('word');
        expect(word).toHaveProperty('desc');
        expect(word).toHaveProperty('examples');
      }
    });

    it('should have 5 examples.', () => {
      for (const word of getWords()) {
        console.log(word);
        expect(word.examples).length(5);
      }
    });
  });

  // Example
  describe('Each Section', () => {
    it('should have properties: sentence, translation.', () => {
      for (const example of getExamples()) {
        expect(example).toHaveProperty('sentence');
        expect(example).toHaveProperty('translation');
      }
    });
  });
});
