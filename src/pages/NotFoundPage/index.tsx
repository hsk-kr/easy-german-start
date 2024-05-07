import { Flex, Heading, Image } from '@chakra-ui/react';
import DefaultTemplate from '../../components/common/DefaultTemplate';
import { getImgUrlWithBaseUrl } from '../../libs/const';

const NotFound = () => {
  return (
    <DefaultTemplate>
      <Flex flexDir="column" alignItems="center">
        <Heading mb={32}>How did you get here??</Heading>
        <Image
          alt="not found character"
          src={getImgUrlWithBaseUrl('/imgs/notfound.webp')}
          className="anim-notfound"
          width="30vw"
          height="30vw"
          maxWidth="128px"
          maxHeight="128px"
        />
      </Flex>
    </DefaultTemplate>
  );
};

export default NotFound;
