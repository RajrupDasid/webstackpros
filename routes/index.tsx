import About from "../components/About.tsx";
import HomePage from "../components/HomePage.tsx";
import Techstack from "../components/Techstack.tsx";
import Footer from "../components/footer.tsx";
import NavBar from "../islands/NavBar.tsx";

const index = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <About />
      <Techstack />
      <Footer />
    </>
  );
};

export default index;
