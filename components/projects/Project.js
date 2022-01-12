import {
  Text,
  Flex,
  Button,
  Image,
  Heading,
  Center,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export const Project = (props) => {
  const { title, image, webURL, gitHubURL, description } = props.project;
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="dark-lg"
        padding={4}
        background="#f4f1de"
      >
        <Flex flex={1}>
          <Image
            objectFit="cover"
            boxSize="100%"
            src={image}
            alt="website photo"
            align="left"
          />
        </Flex>
        <Stack
          textAlign="center"
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {title}
          </Heading>

          <Text textAlign={'center'} px={3}>
            {description}
          </Text>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <a href={webURL} target="_blank" rel="noreferrer">
              <Button
                bg="#f7f5fb"
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
              >
                Website
              </Button>
            </a>
            <a href={gitHubURL} target="_blank" rel="noreferrer">
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg="#003049"
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                Repo
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};
