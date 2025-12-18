import { Ubuntu } from "next/font/google";
import Overskrift from "@/app/components/Overskrift";
import Nav from "@/app/components/Nav";
import BlogPost from "@/app/components/BlogPost";
import Comments from "@/app/components/Comments";
import LeaveComment from "@/app/components/LeaveComment";
import Footer from "@/app/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  
  return (
    <div
      style={{
        backgroundImage: "url('/assets/bg/pattern_bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={ubuntu.className}>
        <div className="bg-(--primary-color)">
          <nav className="sticky top-0 z-50 bg-(--tertiary-color)">
            <Nav />
          </nav>
          <section>
            <div
              className="mb-(--section-padding) bg-cover bg-center pt-6 pb-6"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/assets/bg/footerbg.jpg')",
              }}
            >
              <Overskrift text="Blog post" />
            </div>

            <BlogPost id={id} />

            <Comments />

            <LeaveComment />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
