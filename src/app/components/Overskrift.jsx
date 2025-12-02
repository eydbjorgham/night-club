import Image from "next/image";

const Overskrift = ({ text }) => {
  return (
    <div className="mt-(--overskrift-padding-top) flex flex-col items-center gap-5">
      <h1 className="text-center text-5xl text-white uppercase">{text}</h1>
      <Image
        src="/assets/bottom_line2.png"
        alt="Illustration"
        width={400}
        height={200}
        className=""
      />
    </div>
  );
};

export default Overskrift;
