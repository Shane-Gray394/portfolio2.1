import { Flex, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex
      justify="center"
      backgroundColor="#003049"
      borderWidth="full"
      borderTopRadius={3}
      boxShadow="lg"
      w="100%"
      pt="25"
      pb="25"
      height="15vh"
      textAlign="center"
    >
      <Text color="#f7f5fb" maxWidth="80%">
        <a
          href="https://www.linkedin.com/in/shanegray394/"
          target="_blank"
          rel="noreferrer"
        >
          Created by Shane Gray © 2022
        </a>{' '}
        ❙{' '}
        <a
          href="https://www.linkedin.com/in/william-paris-jr-692415154/"
          target="_blank"
          rel="noreferrer"
        >
          Logo Created by William Paris © 2021
        </a>
      </Text>
    </Flex>
  );
};
