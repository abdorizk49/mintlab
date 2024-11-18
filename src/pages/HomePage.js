import Slider from '../components/Slider';
import About from '../components/About';
import ServicesHome from '../components/ServicesHome';
import OrderContact from '../components/OrderContact';
import PortfolioHome from '../components/PortfolioHome';
import NavbarInnova from '../components/NavbarInnova';
import Footer from '../components/Footer';

function Home(){
  
  document.title = 'Innova Web Solutions';
  return (
    <>
      <NavbarInnova />
      <Slider />
      <About /> 
      <ServicesHome/>
      <PortfolioHome />
      <OrderContact />
      <Footer />
    </>
  );
};

export default Home;