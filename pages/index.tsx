import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar/Navbar"));
const Hero = dynamic(() => import("../components/Hero/Hero"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
