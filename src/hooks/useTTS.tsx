import { useCallback, useEffect, useState } from 'react';

const useTTS = () => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const speak = useCallback(
    (message: string) => {
      if (!voice) return;
      const { speechSynthesis, SpeechSynthesisUtterance } = window;

      const utterance = new SpeechSynthesisUtterance(message);
      utterance.voice = voice;

      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    },
    [voice]
  );

  useEffect(() => {
    const { speechSynthesis } = window;
    if (!speechSynthesis) return;
    const retryInterval = 1000;

    const initializer = () => {
      const voices = speechSynthesis.getVoices();
      if (!voices?.length) {
        setTimeout(initializer, retryInterval);
        return;
      }

      const germanVoices = voices.filter((v) => v.lang.includes('de'));
      const randomGermanVoice =
        germanVoices[Math.floor(Math.random() * germanVoices.length)];
      setVoice(randomGermanVoice);
    };

    const retry = setTimeout(initializer, retryInterval);

    return () => {
      clearTimeout(retry);
    };
  }, []);

  return {
    speak,
  };
};

export default useTTS;
