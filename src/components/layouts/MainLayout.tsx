import { Outlet } from "react-router-dom";
import Header from "../ui/homePage/Header";
import Footer from "../ui/homePage/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
