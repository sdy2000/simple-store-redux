import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../parts";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
