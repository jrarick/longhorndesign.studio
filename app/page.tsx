import ContactForm from "./components/page-sections/home/contact-form";
import Hero from "./components/page-sections/home/hero";
import Info from "./components/page-sections/home/info";
import Steps from "./components/page-sections/home/steps";

export default function Page() {
  return (
    <>
      <Hero />
      <Info />
      <Steps />
      <ContactForm />
    </>
  );
}
