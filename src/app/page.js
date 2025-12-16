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
            
              <Overskrift text="Events of the month" />
              <Events />
            
              <Overskrift text="Gallery" />
              <Gallery />
           
              <Overskrift className="capitalize" text="night club track" />
              <MusicGallery />
            
              <Overskrift className="capitalize" text="latest video" />
              <VideoGallery />
            
              
              <Staff />
            
              <Overskrift text="Recent Blog" />
              <RecentBlog />
            
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
