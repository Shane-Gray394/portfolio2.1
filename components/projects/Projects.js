import {
  Flex,
  Box,
  SimpleGrid,
  Container,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import classes from './Projects.module.css';
import { data } from '../../data';
import { useState } from 'react';
import { Project } from './Project';

export const Projects = () => {
  const [projects, setProjects] = useState(data);
  return (
    <Flex className={classes.scrollSnapChild} justify="center">
      <Flex
        p={8}
        mt={[16, 16]}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="gray"
        height="85vh"
        overflow="scroll"
        className="scroll"
        width={['80%', '80%']}
        justify="center"
      >
        <SimpleGrid columns={{ lg: 3, sm: 1 }} spacing={6}>
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
