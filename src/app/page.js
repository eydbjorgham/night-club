import { Ubuntu } from "next/font/google";
import Hero from "./components/Hero";
import Nav from "@/app/components/Nav";
import Overskrift from "./components/Overskrift";
import Welcome from "./components/Welcome";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SubmitEmail from "./components/SubmitEmail";
import Staff from "./components/Staff";
import RecentBlog from "./components/RecentBlog";
import MusicGallery from "./components/MusicGallery";
import VideoGallery from "./components/VideoGallery";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <div className={ubuntu.className}>
        <div className="bg-(--primary-color)">
          
            <Hero />
            <nav className="sticky top-0 z-50 bg-(--tertiary-color)">
              <Nav />
            </nav>
          
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
              <Overskrift className="capitalize" text="night club track" />
              <MusicGallery />
            </section>
            <section>
              <Overskrift className="capitalize" text="latest video" />
              <VideoGallery />
            </section>
            <section>
              <Overskrift text="Staff" />
              <Staff />
            </section>
            <section>
              <Overskrift text="Recent Blog" />
              <RecentBlog />
            </section>
            <section>
              <SubmitEmail />
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
