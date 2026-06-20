import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import About from "../components/About";
import ProductGrid from "../components/ProductGrid";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <ProductGrid />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}