import { Flex, Image } from '@chakra-ui/react';
import Icon from './icon.webp';
import { useEffect, useState } from 'react';

const FullscreenLoading = ({
  visible,
  useRandomInitialLoadingTime = false,
}: {
  visible: boolean;
  useRandomInitialLoadingTime?: boolean;
}) => {
  const [intentionalLoading, setIntentionalLoading] = useState(
    useRandomInitialLoadingTime
  );

  /**
   * When the loading is very short, the loading screen looks blinking and
   * it looks not natural. With an extra loading time, it can look much natural
   * even though there is an unncessary time users can't interact with UI
   **/
  useEffect(() => {
    const delay = 1000 + Math.random() * 1000;
    const tmDelay = setTimeout(() => {
      setIntentionalLoading(false);
    }, delay);

    return () => clearTimeout(tmDelay);
  }, []);

  if (!visible && !intentionalLoading) return null;

  return (
    <Flex
      position="fixed"
      zIndex={10}
      top={0}
      height="100svh"
      left={0}
      right={0}
      justifyContent="center"
      alignItems="center"
      backgroundColor="blackAlpha.700"
    >
      <Image
        src={Icon}
        alt="icon"
        className="anim-fullscreen-loading"
        width={32}
        height={32}
        borderRadius="full"
      />
    </Flex>
  );
};

export default FullscreenLoading;
