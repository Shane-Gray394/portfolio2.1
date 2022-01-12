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
              <AiFillGithub className={classes.iconSize} alt="github logo" />
              <DiGit className={classes.iconSize} alt="git logo" />
              <FaReact className={classes.iconSize} alt="react logo" />
              <SiJavascript
                className={classes.iconSize}
                alt="javascript logo"
              />
              <SiCss3 className={classes.iconSize} alt="css3 logo" />
              <SiHtml5 className={classes.iconSize} alt="html5 logo" />
              <SiNodedotjs className={classes.iconSize} alt="nodejs logo" />
              <SiNextdotjs className={classes.iconSize} alt="nextjs logo" />
              <SiPostgresql
                className={classes.iconSize}
                alt="postgresql logo"
              />
              <SiSqlite className={classes.iconSize} alt="sqlite logo" />
              <SiMongodb className={classes.iconSize} alt="mongodb logo" />
              <SiChakraui className={classes.iconSize} alt="chakra-ui logo" />
              <SiMaterialui
                className={classes.iconSize}
                alt="material-ui logo"
              />
              <SiAntdesign className={classes.iconSize} alt="ant-design logo" />
              <SiVisualstudiocode
                className={classes.iconSize}
                alt="vscode logo"
              />
              <SiVercel className={classes.iconSize} alt="vercel logo" />
              <SiHeroku className={classes.iconSize} alt="heroku logo" />
              <SiNetlify className={classes.iconSize} alt="netlify logo" />
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
