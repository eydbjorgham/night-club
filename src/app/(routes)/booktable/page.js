import { Ubuntu } from "next/font/google";
import Nav from "@/app/components/Nav";
import Overskrift from "@/app/components/Overskrift";
import Footer from "@/app/components/Footer";
import BookTable from "@/app/components/BookTable";
import BookTableForm from "@/app/components/BookTableForm";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function BookTablePage () {
  return (
    <div className={ubuntu.className}>
      <div className="bg-(--primary-color)">
        <header>
          <nav className="bg-(--tertiary-color)">
            <Nav />
          </nav>
        </header>
        <main>
          <Overskrift text="Book Table" />
          <BookTable />
          <BookTableForm />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
