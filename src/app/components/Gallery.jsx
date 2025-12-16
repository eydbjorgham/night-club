"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import Button from "./Button";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const response = await fetch("http://localhost:4000/gallery");
      const data = await response.json();
      setImages(data);
    };
    fetchGallery();
  }, []);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previousImage = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  return (
    <>
      <div className="mt-(--padding)">
        <div className="flex flex-col items-center sm:grid sm:grid-cols-4">
          {images.slice(0, 4).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden"
              onClick={() => openLightbox(image, index)}
            >
              {/* Pink hjørner */}
              <div className="absolute inset-0 bg-(--tertiary-color) opacity-0 group-hover:opacity-100"></div>

              <img
                key={index}
                src={image.asset.url}
                alt={image.alt}
                width={400}
                height={300}
                className="h-50 w-200 object-cover group-hover:[clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 cursor-pointer bg-black opacity-0 transition-opacity duration-300 group-hover:border-2 group-hover:border-(--tertiary-color) group-hover:opacity-40 group-hover:[clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)]"></div>
            </motion.div>
          ))}
        </div>

        <div className="sm:grid sm:grid-cols-3">
          {images.slice(4, 7).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden"
              onClick={() => openLightbox(image, index)}
            >
              {/* Pink hjørner */}
              <div className="absolute inset-0 bg-(--tertiary-color) opacity-0 group-hover:opacity-100"></div>

              <img
                key={index}
                src={image.asset.url}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full object-cover group-hover:[clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)]"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 cursor-pointer bg-black opacity-0 transition-opacity duration-300 group-hover:border-2 group-hover:border-(--tertiary-color) group-hover:opacity-40 group-hover:[clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)]"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setSelectedImage(null)}
        >
          {/* Content - centeret */}
          <div
            className="flex items-center gap-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pil venstre */}
            <button
              onClick={previousImage}
              className="transition-duration-300 p-0.2 mx-auto flex items-center border-2 border-white text-center text-(--secondary-color) transition hover:border-(--tertiary-color) hover:text-(--tertiary-color)"
            >
              <MdOutlineArrowLeft size={40} />
            </button>

            {/* Billede + tekst */}
            <div className="flex flex-col gap-4 ml-4">
              <div className="bg-(--tertiary-color)">
              <img
                src={selectedImage.asset.url}
                alt={selectedImage.alt}
                className="max-h-96 max-w-lg w-auto img-border"
              />
              </div>
              <h2 className="text-md sm:text-xl ml-5 font-bold text-(--secondary-color)">
                Night club party
              </h2>
              <p className="line-clamp-4 max-w-md ml-5 leading-5 sm:max-w-lg text-xs sm:text-sm text-gray-300">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>

              {/* Button */}
              <div className="place-self-end mr-5">
                <Button text="Read more" href="/gallery" />
              </div>
            </div>

            {/* Pil højre */}
            <button
              onClick={nextImage}
              className="transition-duration-300 p-0.2 mx-auto flex items-center border-2 border-white text-center text-(--secondary-color) transition hover:border-(--tertiary-color) hover:text-(--tertiary-color)"
            >
              <MdOutlineArrowRight size={40} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
