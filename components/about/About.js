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
import classes from './About.module.css';
import {
  SiNextdotjs,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiChakraui,
  SiMaterialui,
  SiAntdesign,
} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { DiGit } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';

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
              src="me.png"
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
            <Heading pb="2%">About Me</Heading>
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
            <Heading pb="3%" pt="1%">
              Technologies
            </Heading>
            {/* <Flex justify="center"> */}
            <SimpleGrid columns={[3, 7]}>
              <AiFillGithub className={classes.iconSize} />
              <DiGit className={classes.iconSize} />
              <FaReact className={classes.iconSize} />
              <SiJavascript className={classes.iconSize} />
              <SiCss3 className={classes.iconSize} />
              <SiHtml5 className={classes.iconSize} />
              <SiNodedotjs className={classes.iconSize} />
              {/* </Flex>
            <Flex justify="center"> */}
              <SiNextdotjs className={classes.iconSize} />
              <SiPostgresql className={classes.iconSize} />
              <SiSqlite className={classes.iconSize} />
              <SiMongodb className={classes.iconSize} />
              <SiChakraui className={classes.iconSize} />
              <SiMaterialui className={classes.iconSize} />
              <SiAntdesign className={classes.iconSize} />
              {/* </Flex> */}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
