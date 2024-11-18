import MiniHeader from '../components/MiniHeader';
import NavbarInnova from '../components/NavbarInnova';
import Services from '../components/Services';
import Footer from '../components/Footer';

function ServicesPage(){
  document.title = 'Our Services';


      
  return (
    <>
      <NavbarInnova />
      <MiniHeader />
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;