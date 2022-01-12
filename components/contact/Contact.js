import { Flex, Box, SimpleGrid, Container, Image } from '@chakra-ui/react';
import classes from './Contact.module.css';

export const Contact = () => {
  return (
    <Flex className={classes.scrollSnapChild} justify="center" height="85vh">
      <Flex
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="#81b29a"
        height="40vh"
        overflow="scroll"
        className="scroll"
        width={['80%', '40%']}
        mt="10%"
      ></Flex>
    </Flex>
  );
};
