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
      <div
        style={{
          backgroundImage: "url('/assets/bg/pattern_bg.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className={ubuntu.className}>
          <div className="bg-(--primary-color)">
            <Hero />
            <nav className="sticky top-0 z-50 bg-(--tertiary-color)">
              <Nav />
            </nav>

            <main>
              <section>
                <div className="max-sm:m-auto max-sm:w-[80%]">
                  <Overskrift text="Welcome in nightclub" />
                </div>
                <Welcome />
                <div
                  className=""
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.6)), url('/assets/bg/slider_bg_overlay.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                  }}
                >
                  <div className="max-sm:m-auto max-sm:w-[80%]">
                    <Overskrift text="Events of the month" />
                  </div>
                  <Events />
                </div>
                <div className="max-sm:m-auto max-sm:w-[70%]">
                  <Overskrift text=" night club Gallery" />
                </div>
                <Gallery />

                <Overskrift text="night club track" />
                <MusicGallery />

                <Overskrift text="latest video" />
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
      </div>
    </>
  );
}
