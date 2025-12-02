import Image from "next/image";


const Welcome = () => {
  return (
    <div className="mt-(--section-padding) flex justify-center gap-8">
      <Image
        src="/assets/content-img/thumb1.jpg"
        alt="Illustration"
        width={300}
        height={300}
        className=""
      />
      <Image
        src="/assets/content-img/reastaurant_1.jpg"
        alt="Illustration"
        width={300}
        height={300}
        className=""
      />
      <Image
        src="/assets/content-img/thumb2.jpg"
        alt="Illustration"
        width={300}
        height={300}
        className=""
      />
    </div>
  );
};

export default Welcome;
