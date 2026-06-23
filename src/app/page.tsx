import Navbar from "../components/Navbar";
import About from "../components/About";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyChooseus from "../components/WhyChooseUs";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Services/>
      <ProductGrid />
      <WhyChooseus />
      <Footer />
      <WhatsAppButton />
    </>
  );
}