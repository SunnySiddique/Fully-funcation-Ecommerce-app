import FeatureProducts from "../Components/FeatureProducts";
import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import Trusted from "../Components/Trusted";

const Home = () => {
  const data = {
    name: "Sunny store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
