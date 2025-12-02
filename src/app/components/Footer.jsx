import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="m-auto mt-16 w-[90%] pb-16">
        <div className="space-between flex gap-4">
          <div className="flex-1 flex flex-col justify-evenly text-white uppercase">
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

          <div className="flex-1">
            <h2 className="mb-8 text-(--tertiary-color) uppercase">
              recent posts
            </h2>
            <div className="mb-8 flex gap-4">
              <Image
                src="/assets/content-img/recent_post1.jpg"
                alt="Recent Post 1"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-cover"
              />
              <div>
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias soluta optio
                </p>
                <p className="mt-6 text-white capitalize">april 17, 2018</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/assets/content-img/recent_post2.jpg"
                alt="Recent Post 2"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-cover"
              />
              <div>
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias soluta optio
                </p>
                <p className="mt-6 text-white capitalize">april 17, 2018</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="mb-8 text-(--tertiary-color) uppercase">
              recent posts
            </h2>
            <div className="mb-8 flex">
              <FaTwitter
                size={50}
                height={50}
                className="mr-4 text-(--tertiary-color)"
              />
              <div>
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias soluta optio
                </p>
                <p className="mt-6 text-white capitalize">5 hours ago</p>
              </div>
            </div>
            <div className="flex">
              <FaTwitter
                size={50}
                height={50}
                className="mr-4 text-(--tertiary-color)"
              />
              <div>
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias soluta optio
                </p>
                <p className="mt-6 text-white capitalize">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 flex text-white">
          <div className="flex-1 place-items-center">
            <p>Night Club PSD Template - All Rights Reserved</p>
          </div>
          <div className="m-auto flex-1 place-items-center capitalize">
            <p className="place-self-center">stay connected with us </p>
            <div className="mt-4 flex justify-center gap-4">
              <div className="border-2 border-white p-2">
                <FaFacebookF size={20} color={"white"} />
              </div>
              <div className="border-2 border-white p-2">
                <FaTwitter size={20} color={"white"} />
              </div>
              <div className="border-2 border-white p-2">
                <FaSnapchatGhost size={20} color={"white"} />
              </div>
            </div>
          </div>
          <div className="flex-1 place-items-center">
            <p>Copyright © NightClub</p>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;