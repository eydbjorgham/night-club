// import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Nav from "@/components/Nav";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <>
    <body className={ubuntu.className}>
      <div className="bg-(--primary-color)">
      <header>
        <nav>
          <Nav/>
        </nav>
      </header>
      <main>
      </main>
      <footer>
      </footer>
      </div>
    </body>
    </>
  );
}
