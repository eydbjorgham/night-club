import { Ubuntu } from "next/font/google";
import Overskrift from "@/app/components/Overskrift";
import Nav from "@/app/components/Nav";
import BlogPost from "@/app/components/BlogPost";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function BlogPostPage() {
  return (
    <div className={ubuntu.className}>
      <div className="bg-(--primary-color)">
        <section>
          <Nav />
          <Overskrift className="uppercase" text="blog post" />
        </section>
        <section>
            <BlogPost />
        </section>
      </div>
    </div>
  );
}
