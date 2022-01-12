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
        backgroundColor="gray"
        height={['70vh', '40vh']}
        overflow="scroll"
        className="scroll"
        width={['80%', '40%']}
      >
        <SimpleGrid columns={{ lg: 2, sm: 1 }}>
          <Box align={['center', 'left']}>
            <Image
              borderRadius={['100px', '125px']}
              boxSize={['200px', '250px']}
              objectFit="cover"
              src="me.png"
              alt="pic of me"
              boxShadow="lg"
              align="top"
            />
          </Box>
          <Box textAlign="center" mr={['0%', '15%']}>
            <Heading pb="10%">About Me</Heading>
            <Text>
              My name is Shane Gray, and I&apos;m a web developer from La
              Grange, Kentucky. I&apos;m currently attending Bloom Institute of
              Technology (formerly Lambda School) for Full Stack Web
              Development. This site as you see it is made from a bit of what
              I&apos;ve learned thus far. It will be updated throughout my time
              here, as I learn more.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
