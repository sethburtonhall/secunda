import Header from './components/Header';
import Selects from './components/Selects';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Selects
        region="select a region"
        vendor="select a vendor"
        item="select an item"
      />
      <Footer />
    </>
  );
};

export default App;
