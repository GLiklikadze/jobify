import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import PageContainer from "./PageContainer";
import Footer from "../footer/Footer";
// import Footer from "../footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default RootLayout;
