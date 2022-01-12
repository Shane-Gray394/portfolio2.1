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
        Created by Shane Gray © 2022 ❙ Logo Created by William Paris © 2021
      </Text>
    </Flex>
  );
};
