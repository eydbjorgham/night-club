import { Ubuntu } from "next/font/google";
import Nav from "@/app/components/Nav";
import Overskrift from "@/app/components/Overskrift";
import BlogInfo from "@/app/components/BlogInfo";
import PageSwitch from "@/app/components/PageSwitch";
import Footer from "@/app/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function BlogPage() {
  return (
    <>
      <div className={ubuntu.className}>
        <div className="bg-(--primary-color)">
          <nav className="sticky top-0 z-50 bg-(--tertiary-color)">
            <Nav />
          </nav>
          <main>
            <div
              className="mb-(--section-padding) bg-cover bg-center pt-6 pb-6"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/assets/bg/footerbg.jpg')",
              }}
            >
              <Overskrift text="Blog" />
            </div>
            <BlogInfo />
            <PageSwitch currentPage={1} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
