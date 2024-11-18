import MiniHeader from '../components/MiniHeader';
import NavbarInnova from '../components/NavbarInnova';
import Footer from '../components/Footer';
import AboutPage0 from '../components/AboutPage0';

function AboutPage(){
  document.title = 'About Us';

  return (
    <>
      <NavbarInnova />
      <MiniHeader />
      <AboutPage0 />
      <Footer />
    </>
  );
};

export default AboutPage;