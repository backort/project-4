import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
export default function index({ text, image }) {
  return (
    <>
      <Header />
      <Hero text={text} />
      <Description text={text} image={image} />
      <Footer />
    </>
  );
}
