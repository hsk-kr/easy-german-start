import { useCallback, useEffect, useState } from 'react';

const useTTS = ({ useRandomVoice }: { useRandomVoice?: boolean }) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const speak = useCallback(
    (message: string) => {
      if (!voice) return;
      const { speechSynthesis, SpeechSynthesisUtterance } = window;

      const utterance = new SpeechSynthesisUtterance(message);
      if (useRandomVoice) {
        utterance.voice = voices[Math.floor(Math.random() * voices.length)];
      } else {
        utterance.voice = voice;
      }

      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    },
    [useRandomVoice, voice, voices]
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
      const names = ['Helena', 'Anna', 'Google', 'Eddy'];
      const germanVoices = voices.filter(
        (v) =>
          v.lang.includes('de-DE') &&
          names.find((name) => v.name.includes(name)) !== undefined
      );
      setVoices(germanVoices);
    };

    const retry = setTimeout(initializer, retryInterval);

    return () => {
      clearTimeout(retry);
    };
  }, []);

  useEffect(() => {
    const randomGermanVoice = voices[Math.floor(Math.random() * voices.length)];
    setVoice(randomGermanVoice);
  }, [voices]);

  return {
    speak,
  };
};

export default useTTS;
