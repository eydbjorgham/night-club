import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Nav from "@/app/components/Nav";

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
            <Image
              src="/orange-thread.png"
              alt="Illustration"
              width={500}
              height={300}
              className="absolute top-0 right-0 z-0 h-200 w-300 object-contain"
            />
            <nav>
              <Nav />
            </nav>
          </header>
          <main></main>
          <footer></footer>
        </div>
      </body>
    </>
  );
}
