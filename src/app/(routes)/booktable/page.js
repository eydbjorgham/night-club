"use client";
import { useState } from "react";
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

export default function BookTablePage() {
  const [selectedTable, setSelectedTable] = useState("");
  return (
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
            <Overskrift text="Book table" />
          </div>
          <BookTable onTableSelect={setSelectedTable} />
          <BookTableForm selectedTable={selectedTable} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
