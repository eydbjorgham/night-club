import { Ubuntu } from "next/font/google";
import Nav from "@/app/components/Nav";
import Overskrift from "@/app/components/Overskrift";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function ContactUsPage () {
  return (
    <div className={ubuntu.className}>
      <div className="bg-(--primary-color)">
        <header>
          <nav className="bg-(--tertiary-color)">
            <Nav />
          </nav>
        </header>
        <main>
          <Overskrift text="Contact us" />
          <ContactForm />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
