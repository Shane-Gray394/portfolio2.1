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
        Created by{' '}
        <a
          href="https://www.linkedin.com/in/shanegray394/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Shane Gray © 2022{' '}
        </a>
        ❙ Logo Created by{' '}
        <a
          href="https://www.linkedin.com/in/william-paris-jr-692415154/"
          target="_blank"
          rel="noreferrer"
        >
          William Paris © 2021
        </a>
      </Text>
    </Flex>
  );
};
