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
    <div className={ubuntu.className}>
      <div className="bg-(--primary-color)">
        <nav className="bg-(--tertiary-color)">
          <Nav />
        </nav>
        <Overskrift className="uppercase" text="blog post" />
        <section>
          <BlogPost id={id} />
        </section>
        <section>
          <Comments />
        </section>
        <section>
          <LeaveComment />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
