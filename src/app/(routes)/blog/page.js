import Footer from "@/app/components/Footer";
import Overskrift from "@/app/components/Overskrift";
import Nav from "@/app/components/Nav";
import { Ubuntu } from "next/font/google";
import Button from "@/app/components/Button";

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

            <Button text="Read More" href="/blog/post1" />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
