import { useEffect, useState } from 'react';
import DefaultTemplate from '../../components/DefaultTemplate';
import { Box, Container, Flex, Text as ChakraText } from '@chakra-ui/react';
import useScreen from '../../hooks/useScreen';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useHistory from '../../hooks/useHistory';
import { History } from '../../types/history';
import FullscreenLoading from '../../components/FullscreenLoading';
import { fullHeightInsideTemplate } from '../../libs/const';
import Certificate from '../../components/Certificate';

function CompletionPage() {
  const [searchParams] = useSearchParams();
  const { isDesktop } = useScreen();
  const navigate = useNavigate();
  const { histories } = useHistory();
  const [history, setHistory] = useState<History | null>(null);

  const getSearchParamAsNumber = (pName: string): number | null => {
    const param = searchParams.get(pName);
    if (param === null) return param;

    const nParam = Number(param);
    return Number.isNaN(nParam) ? null : nParam;
  };

  const navigateToLearnPage = () => {
    navigate('/learn');
  };

  useEffect(() => {
    if (!histories?.length) return;
    const idx = getSearchParamAsNumber('id');

    const history =
      idx === null ? histories[histories.length - 1] : histories[idx];
    if (!history) return;

    setHistory(history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [histories]);

  const loading = history === null;

  return (
    <DefaultTemplate disablePadding bgGreen>
      <FullscreenLoading useRandomInitialLoadingTime visible={loading} />
      <Box bgColor="green.500" minH={fullHeightInsideTemplate}>
        {!loading && (
          <Container maxW="container.md" p={4} pt={[4, 12]}>
            <Flex flexDir="column" gap={8}>
              <Flex flexDir="column" gap={1} color="white" alignItems="center">
                <ChakraText
                  fontSize={['2xl', '3xl']}
                  textTransform="uppercase"
                  textDecoration="underline"
                  onClick={navigateToLearnPage}
                  cursor="pointer"
                >
                  LEARN MORE
                </ChakraText>
                <ChakraText
                  fontSize={['3xl', '4xl']}
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Congratulations!
                </ChakraText>
              </Flex>
              {history && (
                <>
                  <Certificate
                    lessonTitle={history.lessonTitle}
                    completedDate={history.completedDate}
                  />
                  {isDesktop && (
                    <ChakraText
                      fontSize="lg"
                      color="white"
                      textAlign="right"
                      fontWeight="bold"
                    >
                      Hover your mouse on the certificate to download it.
                    </ChakraText>
                  )}
                </>
              )}
            </Flex>
          </Container>
        )}
      </Box>
    </DefaultTemplate>
  );
}

export default CompletionPage;
