import {
  Flex,
  Box,
  SimpleGrid,
  Container,
  Image,
  Text,
  Heading,
  Spacer,
  Stack,
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
  SiVisualstudiocode,
  SiVercel,
  SiHeroku,
  SiNetlify,
} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { DiGit } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';

export const About = () => {
  return (
    <Flex justify="space-evenly" pt={[30, 10]}>
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="#81b29a"
        height={['70vh', '70vh']}
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
              src="/image/me.png"
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
            <Stack>
              <Heading pb="2%">About Me</Heading>
              <Text>
                In everything I have ever done, I have always sought to learn
                the most I could, as fast as I could, and with the best possible
                practices in mind.
              </Text>
              <Text>
                This mindset and way of approaching life and problems that need
                solving has always put me in a forward position in any endeavor
                I pursue.
              </Text>
              <Text>
                Now I aim to bring that ideology with me on my adventure into
                the world of tech.
              </Text>
            </Stack>
            <Heading pb="3%" pt="1%">
              Technologies
            </Heading>
            <SimpleGrid columns={[3, 6]}>
              <AiFillGithub className={classes.iconSize} />
              <DiGit className={classes.iconSize} />
              <FaReact className={classes.iconSize} />
              <SiJavascript className={classes.iconSize} />
              <SiCss3 className={classes.iconSize} />
              <SiHtml5 className={classes.iconSize} />
              <SiNodedotjs className={classes.iconSize} />
              <SiNextdotjs className={classes.iconSize} />
              <SiPostgresql className={classes.iconSize} />
              <SiSqlite className={classes.iconSize} />
              <SiMongodb className={classes.iconSize} />
              <SiChakraui className={classes.iconSize} />
              <SiMaterialui className={classes.iconSize} />
              <SiAntdesign className={classes.iconSize} />
              <SiVisualstudiocode className={classes.iconSize} />
              <SiVercel className={classes.iconSize} />
              <SiHeroku className={classes.iconSize} />
              <SiNetlify className={classes.iconSize} />
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
