import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: '/assets/content-img/gallery1_big.jpg', alt: 'Party night' },
    { src: '/assets/content-img/gallery2_big.jpg', alt: 'Dance floor' },
    { src: '/assets/content-img/gallery3_big.jpg', alt: 'DJ booth' },
    { src: '/assets/content-img/gallery4_big.jpg', alt: 'Crowd enjoying' },
    { src: '/assets/content-img/gallery5_big.jpg', alt: 'Bar area' },
    { src: '/assets/content-img/gallery6_big.jpg', alt: 'Light show' },
    { src: '/assets/content-img/gallery7_big.jpg', alt: 'VIP lounge' },
];

  return (
    <div className="mt-(--padding)">
        <div className="grid grid-cols-4">
            {images.slice(0, 4).map((image, index) => (
                <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="h-50 object-cover"
                />
            ))}
        </div>

        <div className="grid grid-cols-3">
            {images.slice(4, 7).map((image, index) => (
                <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full object-cover"
                />
            ))}
        </div>
    </div>
  );
};

export default Gallery;
