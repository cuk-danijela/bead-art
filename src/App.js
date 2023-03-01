import './App.css';
import HeaderTop from './components/Header/HeaderTop';
import Logo from './components/Header/Logo';
import HeaderNav from './components/Header/HeaderNav';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Jewellery from './components/Jewellery/Jewellery';




function App() {
  return (
    <>
      <div className="banner_bg_main">
        <HeaderTop />
        {/* <Logo /> */}
        {/* <HeaderNav /> */}
      </div>
      <Jewellery />
      {/* <Banner /> */}
      <Footer />
    </>
  );
}

export default App;
