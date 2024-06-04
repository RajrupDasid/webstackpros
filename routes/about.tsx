import About from "../components/About.tsx";
import Footer from "../components/footer.tsx";
import NavBar from "../islands/NavBar.tsx";

const about = () => {
  return (
    <>
      <NavBar />
      <About />
      <Footer />
    </>
  );
};

export default about;
