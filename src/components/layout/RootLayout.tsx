import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import PageContainer from "./PageContainer";
import Footer from "../footer/Footer";
import { Toaster } from "../ui/toaster";
// import Footer from "../footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Toaster />
      <Footer />
    </div>
  );
};

export default RootLayout;
