import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sass/generalStyles.scss'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioItemPage from './pages/PortfolioItemPage';
import LoginPage from './admin/pages/Loginpage';
import DashboardPage from './admin/pages/DashboardPage';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <div className="App">
      <Toaster position='top-center' reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Outlet />} >
            
            <Route path="/admin" element={<LoginPage />} ></Route>
            <Route path="/admin/dashboard" element={<DashboardPage />} ></Route>
            <Route path="/admin/update" element={<DashboardPage />} ></Route>
            
            <Route path="/admin/logos" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/sliders" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path="addslider" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/headservices" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/headportfolio" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/headContactRequest" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/subsliders" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/links" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path="addlink" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/users" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path="adduser" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/aboutHome" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/services" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path="addservice" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/messages" element={<DashboardPage />} ></Route>

            <Route path="/admin/headcontact" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/portfolio" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path="addportfolio" element={<DashboardPage />} ></Route>
              <Route path=":productId/images" element={<Outlet />}>
                <Route path="" element={<DashboardPage />} ></Route>
                <Route path="addimage" element={<DashboardPage />} ></Route>
              </Route>
              <Route path=":productId/update" element={<DashboardPage />} ></Route>
            </Route>

            <Route path="/admin/orderContact" element={<DashboardPage />} ></Route>
            <Route path="/admin/orderPrice" element={<DashboardPage />} ></Route>

            <Route path="/admin/about" element={<Outlet />}>
              <Route path="" element={<DashboardPage />} ></Route>
              <Route path="addAboutMore" element={<DashboardPage />} ></Route>
              <Route path=":productId" element={<DashboardPage />} ></Route>
            </Route>
          </Route>

          <Route path="/" element={<HomePage />} ></Route>
          <Route path='/about' element={<AboutPage />} ></Route>
          <Route path='/services' element={<ServicesPage />} ></Route>
          <Route path='/portfolio' element={<PortfolioPage />} ></Route>
          <Route path='/contact' element={<ContactPage />} ></Route>
          <Route path='/ar'></Route>
          <Route path='/portfolio' element={<Outlet />}>
            <Route path='' element={<PortfolioPage />}></Route>
              <Route path='portfolioItem' element={<PortfolioItemPage />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
