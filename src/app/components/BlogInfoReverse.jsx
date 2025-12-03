import Image from "next/image";
import Button from "@/app/components/Button";

const BlogInfoReverse = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-5 pl-25 pt-10">
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
        <Button text="Read More" href="/blog/1" />
        </div>
      </div>
      
      <Image
        src="/assets/content-img/blog_full2.jpg"
        alt="Illustration"
        width={600}
        height={600}
        className="h-100 w-180 object-cover"
      />
    </div>
  );
};

export default BlogInfoReverse;
