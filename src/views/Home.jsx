import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { motion } from "framer-motion";
import { } from "react-scroll";
import cloud from "../assets/cloudBg-1.png";


const Home = () => {

  return (
    <>
      <div
        style={

             { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Welcome to Rosarios Website

              <span className="block text-orange-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Religion",
                    10000,
                    "Gospel Videos",
                    10000,
                    "Spread the Word",
                    10000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p className= "mt-3 text-base font-extrabold tracking-light text-black sm:mt-7 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-7 md:text-xl lg:mx-0">
              A man who wants to enlighten the world with Gods Word
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />

                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
              </div>
            </div>
          </div>
          {/* <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          /> */}
        </main>
      </div>
    </>
  );
};

export default Home;
