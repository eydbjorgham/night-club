// import Image from "next/image";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <div className={ubuntu.className}>



      </div>
    </>
  );
}
