import {
  Flex,
  Box,
  SimpleGrid,
  Container,
  Image,
  Text,
  Heading,
  Spacer,
} from '@chakra-ui/react';

export const About = () => {
  return (
    <Flex justify="space-evenly" pt={[30, 100]}>
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="#81b29a"
        height={['70vh', '50vh']}
        overflow="scroll"
        className="scroll"
        width={['80%', '60%']}
      >
        <SimpleGrid columns={{ lg: 2, sm: 1 }} spacing={10}>
          <Box align={['center', 'left']}>
            <Image
              borderRadius={['115px', '200px']}
              boxSize={['230px', '400px']}
              objectFit="cover"
              src="me6.png"
              alt="pic of me"
              boxShadow="dark-lg"
              align="top"
            />
          </Box>
          <Box
            width="100%"
            background="#f4f1de"
            p="5% 2%"
            borderRadius={8}
            boxShadow="dark-lg"
            textAlign="center"
            mr={['0%', '15%']}
          >
            <Heading pb="10%">About Me</Heading>
            <Text>
              My name is Shane Gray, and I&apos;m a web developer from La
              Grange, Kentucky. I&apos;m currently attending Bloom Institute of
              Technology (formerly Lambda School) for Full Stack Web
              Development.
            </Text>
            <Text>
              This site as you see it is made from a bit of what I&apos;ve
              learned thus far. It will be updated throughout my time here, as I
              learn more.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
