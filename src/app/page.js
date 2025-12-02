import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Nav from "@/app/components/Nav";
import Overskrift from "./components/Overskrift";
import Welcome from "./components/Welcome";
import Events from "./components/Events";

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
            <nav>
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
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
}
