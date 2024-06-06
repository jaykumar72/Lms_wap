
import AboutUsFeatures from "../Common/AboutUs/AboutUsFeatures";
import UserLogin from "../Common/Login/UserLogin";
import Registration from "../Common/Registration/Registration";
import ServicesInfo from "../Common/ServicesInfo/ServicesInfo";
import LandingPage from "../Components/LandingPage/Landingpage";





const PublicRoutes = [
  {
    path: "/",
    exact: true,
    layout: LandingPage,
    element: <LandingPage/>,
  },
  {
    path: "/login",
    exact: true,
    layout: UserLogin,
    element: <UserLogin/>
  },
  {
    path: "/Registration",
    exact: true,
    layout: Registration,
    element: <Registration/>
  },
  {
    path: "/AboutUs",
    exact: true,
    layout: AboutUsFeatures,
    element: <AboutUsFeatures/>
  },
  {
    path: "/Services-Info",
    exact: true,
    layout: ServicesInfo,
    element: <ServicesInfo/>
  },
  
];

export default PublicRoutes;


