import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
      <footer className="m-auto w-[90%]">
        <div className="flex space-between gap-4">
          <div className="text-white uppercase">
            <h1 className="text-3xl">
              night<span className="text-(--tertiary-color)">club</span>
            </h1>
            <p className="text-[0.6em] tracking-[0.5em]">have a good time</p>
            <h2 className="text-(--tertiary-color)">location</h2>
            <p>
              Kompagnistræde 278 <br />
              1265 København K
            </p>
            <h2 className="text-(--tertiary-color)">opening hours</h2>
            <p>
              wed - thu: 10:30 pm to 3 am <br />
              sat - sun: 11 pm to 5 am
            </p>
          </div>
          <div className="flex">
            <div>
              <h2 className="text-(--tertiary-color)">recent posts</h2>
              <div className="flex">
                <Image
                  src="/assets/content-img/recent_post1.jpg"
                  alt="Recent Post 1"
                  width={50}
                  height={50}
                  className=""
                />
                <div>
                  <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias soluta optio natus quasi numquam. Autem quisquam
                    sed perspiciatis sequi voluptas consequatur dignissimos,
                    molestias assumenda a. Labore harum iure rerum incidunt!
                  </p>
                  <p className="text-white">april 17, 2018</p>
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/assets/content-img/recent_post2.jpg"
                  alt="Recent Post 2"
                  width={50}
                  height={50}
                  className=""
                />
                <div>
                  <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias soluta optio natus quasi numquam. Autem quisquam
                    sed perspiciatis sequi voluptas consequatur dignissimos,
                    molestias assumenda a. Labore harum iure rerum incidunt!
                  </p>
                  <p className="text-white">april 17, 2018</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-(--tertiary-color)">recent posts</h2>
              <div className="flex">
                <Image
                  src="/assets/content-img/recent_post1.jpg"
                  alt="Recent Post 1"
                  width={50}
                  height={50}
                  className=""
                />
                <div>
                  <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias soluta optio natus quasi numquam. Autem quisquam
                    sed perspiciatis sequi voluptas consequatur dignissimos,
                    molestias assumenda a. Labore harum iure rerum incidunt!
                  </p>
                  <p className="text-white">5 hours ago</p>
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/assets/content-img/recent_post2.jpg"
                  alt="Recent Post 2"
                  width={50}
                  height={50}
                  className=""
                />
                <div>
                  <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias soluta optio natus quasi numquam. Autem quisquam
                    sed perspiciatis sequi voluptas consequatur dignissimos,
                    molestias assumenda a. Labore harum iure rerum incidunt!
                  </p>
                  <p className="text-white">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;