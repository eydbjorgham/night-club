import Image from "next/image";

const RecentBlog = () => {
  return (
    <div className="mt-(--section-padding) flex justify-center gap-8 leading-8">
      <div>
        <Image
          src="/assets/content-img/blog_full1.jpg"
          alt="Illustration"
          width={500}
          height={500}
          className="h-auto w-full"
        />
        <h2 className="text-lg font-semibold text-(--secondary-color) truncate">Text</h2>
        <h3 className="text-(--tertiary-color)">Pink text</h3>
        <p className="text-(--secondary-color)">Longer text</p>
      </div>
      <div>
        <Image
          src="/assets/content-img/blog_full2.jpg"
          alt="Illustration"
          width={500}
          height={500}
          className="h-auto w-full"
        />
        <h2 className="text-lg font-semibold text-(--secondary-color) truncate">Text</h2>
        <h3 className="text-(--tertiary-color)">Pink text</h3>
        <p className="text-(--secondary-color)">Longer text</p>
      </div>
      <div>
        <Image
          src="/assets/content-img/blog_full3.jpg"
          alt="Illustration"
          width={500}
          height={500}
          className="h-auto w-full"
        />
        <h2 className="text-lg font-semibold text-(--secondary-color) truncate">Text</h2>
        <h3 className="text-(--tertiary-color)">Pink text</h3>
        <p className="text-(--secondary-color)">Longer text</p>
      </div>
    </div>
  );
};

export default RecentBlog;
