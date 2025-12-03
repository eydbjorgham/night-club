import Image from "next/image";
import Button from "@/app/components/Button";

const BlogInfo = () => {
  return (
    <div className="flex gap-10">
      <Image
        src="/assets/content-img/blog_full1.jpg"
        alt="Illustration"
        width={600}
        height={600}
        className="object-cover w-180 h-100"
      />
      <div className="flex flex-col gap-5">
        <h2 className="mt-4 text-2xl font-semibold text-(--secondary-color)">
          Blog Title
        </h2>
        <h3 className="text-(--tertiary-color)">Pink text</h3>
        <p className="mt-2 w-lg text-(--secondary-color)">
          Detailed blog information goes here. This section can include multiple
          paragraphs, images, and other media to provide a comprehensive
          overview of the blog topic.
        </p>
        <div className="place-self-end">
        <Button text="Read More" href="/blog/post1" />
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
