import { Flex, SimpleGrid } from '@chakra-ui/react';
import classes from './Projects.module.css';
import { data } from '../../data';
import { useState } from 'react';
import { Project } from './Project';

export const Projects = () => {
  const [projects] = useState(data);
  return (
    <Flex className={classes.scrollSnapChild} justify="center">
      <Flex
        mt={[16, 16]}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="#81b29a"
        height="85vh"
        overflow="scroll"
        className="scroll"
        width={['80%']}
        justify="center"
        p={8}
      >
        <SimpleGrid columns={{ xl: 2, lg: 2, md: 1, sm: 1 }} spacing={4}>
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
