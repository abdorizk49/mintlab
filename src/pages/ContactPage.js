import MiniHeader from '../components/MiniHeader';
import Contact from '../components/Contact';
import NavbarInnova from '../components/NavbarInnova';
import Footer from '../components/Footer';

function ContactPage(){
  document.title = 'Contact Us';

  return (
    <>
      <NavbarInnova />
      <MiniHeader />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;