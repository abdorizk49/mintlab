import MiniHeader from '../components/MiniHeader';
import NavbarInnova from '../components/NavbarInnova';
import OrderPrice from '../components/OrderPrice';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

function PortfolioPage(){
  document.title = 'Our Portfolio';

  return (
    <>
      <NavbarInnova />
      <MiniHeader />
      <Portfolio />
      <OrderPrice />
      <Footer />
    </>
  );
};

export default PortfolioPage;