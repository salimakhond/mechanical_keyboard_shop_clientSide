import Featured from "../components/ui/homePage/Featured";
import HeroArea from "../components/ui/homePage/HeroArea";
import Review from "../components/ui/homePage/Review";
import ServiceAdvertisement from "../components/ui/homePage/ServiceAdvertisement";

const HomePage = () => {
  return (
    <div>
      <HeroArea />
      <ServiceAdvertisement />
      <Featured />
      <Review />
    </div>
  );
};

export default HomePage;
