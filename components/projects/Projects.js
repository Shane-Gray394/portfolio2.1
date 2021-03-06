import { Flex, SimpleGrid } from '@chakra-ui/react';
import classes from './Projects.module.css';
import { data } from '../../data';
import { useState } from 'react';
import { Project } from './Project';

export const Projects = () => {
  const [projects] = useState(data);
  return (
    <Flex
      className={classes.scrollSnapChild}
      justify="center"
      paddingTop={['4rem']}
    >
      <Flex
        mt={[16]}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="#81b29a"
        height="85vh"
        overflow="scroll"
        className="scroll"
        width={['80%']}
        justify="center"
        p={5}
      >
        <SimpleGrid columns={{ xl: 2, lg: 1, md: 1, sm: 1 }} spacing={6}>
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
