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
          <Overskrift text="Book Table" />
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
