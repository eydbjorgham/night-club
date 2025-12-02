import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Nav from "@/app/components/Nav";
import Overskrift from "./components/Overskrift";
import Welcome from "./components/Welcome";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import Staff from "./components/Staff";
import RecentBlog from "./components/RecentBlog";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <div className={ubuntu.className}>
        <div className="bg-(--primary-color)">
          <header>
            <Image
              src="/assets/bg/header_bg_2.jpg"
              alt="Illustration"
              width={500}
              height={300}
              className="h-auto w-full object-cover"
            />
            <nav className="bg-(--tertiary-color)">
              <Nav />
            </nav>
          </header>
          <main>
            <section>
              <Overskrift text="Welcome in nightclub" />
              <Welcome />
            </section>
            <section>
              <Overskrift text="Events of the month" />
              <Events />
            </section>
            <section>
              <Overskrift text="Gallery" />
              <Gallery />
            </section>
            <section>
              <Overskrift text="Staff" />
              <Staff />
            </section>
            <section>
              <Overskrift text="Recent Blog" />
              <RecentBlog />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
