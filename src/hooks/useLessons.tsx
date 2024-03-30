import { useState } from 'react';
import { mostCommon1000Words } from '../assets/data';

const useLessons = () => {
  const [sections] = useState(() => mostCommon1000Words);

  return {
    sections,
  };
};

export default useLessons;
