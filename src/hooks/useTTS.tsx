import { useCallback, useEffect, useState } from 'react';

const useTTS = () => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const speak = useCallback(
    (message: string) => {
      if (!voice) return;
      const { speechSynthesis, SpeechSynthesisUtterance } = window;

      const utterance = new SpeechSynthesisUtterance(message);
      utterance.voice = voice;

      speechSynthesis.speak(utterance);
    },
    [voice]
  );

  useEffect(() => {
    const { speechSynthesis } = window;
    if (!speechSynthesis) return;

    const initializer = () => {
      const germanVoices = speechSynthesis
        .getVoices()
        .filter((v) => v.lang.includes('de'));
      const randomGermanVoice =
        germanVoices[Math.floor(Math.random() * germanVoices.length)];
      setVoice(randomGermanVoice);

      speechSynthesis.removeEventListener('voiceschanged', initializer);
    };

    speechSynthesis.addEventListener('voiceschanged', initializer);
    // let germanVoice = undefined ;
  }, []);

  return {
    speak,
  };
};

export default useTTS;
