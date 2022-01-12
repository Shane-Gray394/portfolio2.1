import { ChakraProvider } from '@chakra-ui/react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
