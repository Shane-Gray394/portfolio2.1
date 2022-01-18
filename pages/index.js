import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import { Header, About, Projects, Contact, Footer } from '../components';

export default function Home() {
  return (
    <Box width="100%">
      <Head>
        <title>Shane Gray&apos;s Portfolio</title>
      </Head>
      <Box backgroundColor="#f4f1de">
        <Header />
        <Box id="about" height="100vh" className="scrollSnapChild">
          <Box>
            <About />
          </Box>
        </Box>
        <Box id="projects" height="100vh">
          <Box>
            <Projects />
          </Box>
        </Box>
        <Box id="contact" height="100vh">
          <Flex direction="column">
            <Contact />
            <Footer />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
