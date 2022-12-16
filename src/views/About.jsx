import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              few fwoj ew owefj wpefo pwoej fpwoefj wpeofj wef jw
              wefioj wefioj wefpowej fpeojf wefpo wjefpowe jfwef
              efoiwj eifj weofij weofij weofiwej fwepifj wepfoij wjefpoweefpoiwj 
              fwpeojf wepofj wepofjwe fpoewj fpweofj wepfowjefpowej fwepifjewifoj wefoipejw fpoewj f
              efpweoijf wepofj ewpfoj wepfojew fpewojf ewpofjwe fpoewjf ewpofjweewpf
              epfoj wepofjew fp;oejw fp;owedsjf pwsofj 
            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              What is this about?
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Ughnelkr gh;elirgh ;leirhg ;eorijg ;leirjg ;eirkjg console.errorgergioj erigjer 
              regihe jrgirej gl;erojg ;oerlkgjnm es;rlkfgnmse ;origj er;logkj er'pgo
              reigj erigj;erpoigj er'pgij e'rpoigj erpo;'igj e';lriokgj e'priogj e'rpg
              rgoi;klhj esr;gioje r'pgoij er'pogj er'pogj esr'pgoj e'sprgo jerg'
              rgpj 'esrgj 'eprogj 'perogj 'perogj re'pog jer'pgoj es'prgo js'eprgj;
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
