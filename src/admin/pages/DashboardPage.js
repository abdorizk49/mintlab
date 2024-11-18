import { useEffect } from "react";
import Sidbar from "../components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

// Importing all components
import UpdateAdminPage from "./UpdateAdminPage";
import Logos from "./Logos";
import LogoUpdatePage from "./LogoUpdatePage";
import SlidersPage from "./SlidersPage";
import AddSliderPage from "./AddSliderPage";
import SliderUpdatePage from "./SliderUpdatePage";
import HeadServicesPage from "./HeadServicesPage";
import HeadServicesUpdatePage from "./HeadServicesUpdatePage";
import HeadPortfolioPage from "./HeadPortfolioPage";
import HeadPortfolioUpdatePage from "./HeadPortfolioUpdatePage";
import HeadContactRequestPage from "./HeadContactRequestPage";
import HeadContactRequestUpdatePage from "./HeadContactRequestUpdatePage";
import SubSlidersPage from "./SubSlidersPage";
import SubSliderUpdatePage from "./SubSliderUpdatePage";
import Links from "./Links";
import AddLinkPage from "./AddLinkPage";
import LinkUpdatePage from "./LinkUpdatePage";
import Users from "./Users";
import AddUserPage from "./AddUserPage";
import UserUpdatePage from "./UserUpdatePage";
import AboutSectionPage from "./AboutSectionPage";
import AboutHomeUpdatePage from "./AboutHomeUpdatePage";
import ServicesAdminPage from "./ServicesAdminPage";
import AddServicePage from "./AddServicePage";
import ServiceUpdatePage from "./ServiceUpdatePage";
import ContactFormPage from "./ContactFormPage";
import HeadContactPage from "./HeadContactPage";
import HeadContactUpdatePage from "./HeadContactUpdatePage";
import PortfolioAdminPage from "./PortfolioAdminPage";
import AddPortfolioPage from "./AddPortfolioPage";
import PortfolioImagesPage from "./PortfolioImagesPage";
import AddProjectImagePage from "./AddProjectImagePage";
import PortfolioUpdatePage from "./PortfolioUpdatePage";
import OrderContactPage from "./OrderContactPage";
import OrderPricePage from "./OrderPricePage";
import AboutUsPage from "./AboutUsPage";
import AddAboutMorePage from "./AddAboutMorePage";
import AboutMoreUpdatePage from "./AboutMoreUpdatePage";

function DashboardPage() {
    let { productId } = useParams();
    const url = window.location.href;
    const navigate = useNavigate();

    useEffect(() => {
        const currentUrl = window.location.href;
        if (currentUrl.includes('?')) {
            const cleanUrl = currentUrl.split('?')[0];
            navigate(cleanUrl, { replace: true });
        }
    }, [navigate]);

    document.title = 'Dashboard';

    // Mapping URLs to components for cleaner conditional rendering
    const urlToComponent = {
        'http://localhost:3000/admin/update': <UpdateAdminPage />,
        'http://localhost:3000/admin/logos': <Logos />,
        [`http://localhost:3000/admin/logos/${productId}`]: <LogoUpdatePage />,
        'http://localhost:3000/admin/sliders': <SlidersPage />,
        'http://localhost:3000/admin/sliders/addslider': <AddSliderPage />,
        [`http://localhost:3000/admin/sliders/${productId}`]: <SliderUpdatePage />,
        'http://localhost:3000/admin/headservices': <HeadServicesPage />,
        [`http://localhost:3000/admin/headservices/${productId}`]: <HeadServicesUpdatePage />,
        'http://localhost:3000/admin/headportfolio': <HeadPortfolioPage />,
        [`http://localhost:3000/admin/headportfolio/${productId}`]: <HeadPortfolioUpdatePage />,
        'http://localhost:3000/admin/headContactRequest': <HeadContactRequestPage />,
        [`http://localhost:3000/admin/headContactRequest/${productId}`]: <HeadContactRequestUpdatePage />,
        'http://localhost:3000/admin/subsliders': <SubSlidersPage />,
        [`http://localhost:3000/admin/subsliders/${productId}`]: <SubSliderUpdatePage />,
        'http://localhost:3000/admin/links': <Links />,
        'http://localhost:3000/admin/links/addlink': <AddLinkPage />,
        [`http://localhost:3000/admin/links/${productId}`]: <LinkUpdatePage />,
        'http://localhost:3000/admin/users': <Users />,
        'http://localhost:3000/admin/users/adduser': <AddUserPage />,
        [`http://localhost:3000/admin/users/${productId}`]: <UserUpdatePage />,
        'http://localhost:3000/admin/aboutHome': <AboutSectionPage />,
        [`http://localhost:3000/admin/aboutHome/${productId}`]: <AboutHomeUpdatePage />,
        'http://localhost:3000/admin/services': <ServicesAdminPage />,
        'http://localhost:3000/admin/services/addservice': <AddServicePage />,
        [`http://localhost:3000/admin/services/${productId}`]: <ServiceUpdatePage />,
        'http://localhost:3000/admin/messages': <ContactFormPage />,
        'http://localhost:3000/admin/headcontact': <HeadContactPage />,
        [`http://localhost:3000/admin/headcontact/${productId}`]: <HeadContactUpdatePage />,
        'http://localhost:3000/admin/portfolio': <PortfolioAdminPage />,
        'http://localhost:3000/admin/portfolio/addportfolio': <AddPortfolioPage />,
        [`http://localhost:3000/admin/portfolio/${productId}/images`]: <PortfolioImagesPage />,
        [`http://localhost:3000/admin/portfolio/${productId}/images/addimage`]: <AddProjectImagePage />,
        [`http://localhost:3000/admin/portfolio/${productId}/update`]: <PortfolioUpdatePage />,
        'http://localhost:3000/admin/orderContact': <OrderContactPage />,
        'http://localhost:3000/admin/orderPrice': <OrderPricePage />,
        'http://localhost:3000/admin/about': <AboutUsPage />,
        'http://localhost:3000/admin/about/addAboutMore': <AddAboutMorePage />,
        [`http://localhost:3000/admin/about/${productId}`]: <AboutMoreUpdatePage />
    };

    const ComponentToRender = urlToComponent[url] || null;

    return (
        <>
            <main className="dashboard">
                <Sidbar />
                <Link className="nav-link logoutLink" to="/admin">
                    <span>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </span>
                </Link>
                <div className="admin sliders">
                    <Container>
                        {ComponentToRender}
                    </Container>
                </div>
            </main>
        </>
    );
}

export default DashboardPage;
