import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Selects from './components/Selects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Box
        pos="absolute"
        w="100%"
        h="100vh"
        backgroundImage="url('https://media.giphy.com/media/l0HlIo3bPNiMUABt6/giphy.gif')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      <Header />
      <main>
        <Selects
          region="select a region"
          vendor="select a vendor"
          item="select an item"
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
