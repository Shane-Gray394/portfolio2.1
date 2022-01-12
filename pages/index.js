import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import { Header, About, Projects, Contact, Footer } from '../components';

export default function Home() {
  return (
    <Box width="100%">
      <Head>
        <title>Shane Gray&apos;s Portfolio</title>
      </Head>
      <Box backgroundColor="white">
        <Box id="about" height="100vh" className="scrollSnapChild">
          <Box>
            <Header />
            <About />
          </Box>
        </Box>
        <Box id="projects" height="100vh" className="scrollSnapChild">
          <Box>
            <Projects />
          </Box>
        </Box>
        <Box id="contact" height="100vh" className="scrollSnapChild">
          <Flex direction="column">
            <Contact />
            <Footer />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
