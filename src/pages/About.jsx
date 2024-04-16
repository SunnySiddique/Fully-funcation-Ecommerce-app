import HeroSection from "../Components/HeroSection";

const About = () => {
  const data = {
    name: "Sunny Ecommerce",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
