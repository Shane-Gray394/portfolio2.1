import {
  Flex,
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
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
    <Flex justify="space-evenly" pt={[40]} className={classes.scrollSnapChild}>
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="#81b29a"
        height={['70vh', '80vh']}
        overflow="scroll"
        className="scroll"
        width={['80%', '80%', '60%']}
      >
        <SimpleGrid columns={[1, 1, 1, 1, 2]} spacing={10}>
          <Box align="center">
            <Heading>Shane Gray</Heading>
            <Text pb={['10%', '5%']}>Full Stack Software Engineer</Text>
            <Image
              borderRadius={['115px', '175px']}
              boxSize={['230px', '350px']}
              objectFit="cover"
              src="/image/me.png"
              aria-label="pic of me"
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
            <Stack spacing={7}>
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
          </Box>
          <Box
            width={['100%', '100%', '100%', '100%', '208%', '207.5%']}
            background="#f4f1de"
            p="5% 2%"
            borderRadius={8}
            boxShadow="dark-lg"
            textAlign="center"
            mr={['0%', '15%']}
            pl="8%"
          >
            <SimpleGrid columns={[3, 4, 5, 6, 9]} spacing={3}>
              <AiFillGithub
                className={classes.iconSize}
                aria-label="github logo"
              />
              <DiGit className={classes.iconSize} aria-label="git logo" />
              <FaReact className={classes.iconSize} aria-label="react logo" />
              <SiJavascript
                className={classes.iconSize}
                aria-label="javascript logo"
              />
              <SiCss3 className={classes.iconSize} aria-label="css3 logo" />
              <SiHtml5 className={classes.iconSize} aria-label="html5 logo" />
              <SiNodedotjs
                className={classes.iconSize}
                aria-label="nodejs logo"
              />
              <SiNextdotjs
                className={classes.iconSize}
                aria-label="nextjs logo"
              />
              <SiPostgresql
                className={classes.iconSize}
                aria-label="postgresql logo"
              />
              <SiSqlite className={classes.iconSize} aria-label="sqlite logo" />
              <SiMongodb
                className={classes.iconSize}
                aria-label="mongodb logo"
              />
              <SiChakraui
                className={classes.iconSize}
                aria-label="chakra-ui logo"
              />
              <SiMaterialui
                className={classes.iconSize}
                aria-label="material-ui logo"
              />
              <SiAntdesign
                className={classes.iconSize}
                aria-label="ant-design logo"
              />
              <SiVisualstudiocode
                className={classes.iconSize}
                aria-label="vscode logo"
              />
              <SiVercel className={classes.iconSize} aria-label="vercel logo" />
              <SiHeroku className={classes.iconSize} aria-label="heroku logo" />
              <SiNetlify
                className={classes.iconSize}
                aria-label="netlify logo"
              />
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
