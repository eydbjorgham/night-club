import { Ubuntu } from "next/font/google";
import Nav from "@/app/components/Nav";
import Overskrift from "@/app/components/Overskrift";
import BlogInfo from "@/app/components/BlogInfo";
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
          <header>
            <nav>
              <Nav />
            </nav>
          </header>
          <main>
            <Overskrift text="Blog" />
            <BlogInfo />
            
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
