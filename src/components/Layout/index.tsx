import Image from "next/image";
import { useEffect, useState } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";

export default function Layout() {
  const [mousePos, setMousePos] = useState<any>({});
  const [activeTab, setActiveTab] = useState<any>("system");

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const styles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });
  const styles2 = useSpring({
    opacity: 1,
    from: { width: "100%", background: "transparent" },
    to: {
      width: "90%",
      background: "transparent",
    },
    config: { duration: 3000 },
  });

  function renderText(): any {
    if (activeTab == "system") {
      let dataSys = [
        `working as consultant development at systems limited.working on react , react router , 
        tailwind CSS etc.orking on typescript as vite has out of box support for typescript
        Worked on react context for complex components and higher order functions.`,

        `Developing and implementing highly responsive user interface components using react concepts
        Writing application interface codes using JavaScript following react.js workflows
        working on vite instead web packs as vite is able to process your development build faster than Webpack
        `,
        `Writing end to end testing script for react project using cypress.
        Optimization of over using react hooks and using better coding approaches.
        Optimizing components for maximum performance across a vast array of web-capable devices and browsers
        `,

        `Implementation of authentication and authorization with keycloak provider using next Auth.
        Implementation of state management using redux toolkit for caseworker.
        `,

        `Integration of open layer map with arcgis in caseworker.`,
        `Integrate camunda tasklist.
        Worked on camunda tasklist to assign and claim tasks.`,
        "Graphql setup for caseworker. Worked with graphql in camunda tasklist.",
        " Documenting application changes and developing updates.",
      ];

      return (
        <div className="mt-4">
          <p className="text-[20px] text-white   font-medium">
            Developement Consultant{" "}
            <span className="text-bermuda"> @System Limited</span>
          </p>
          <p className="mb-4 italic">2022 - present</p>
          {dataSys.map((item: any) => (
            <div className="m-3 px-5 cus-mono flex items-start" key={item}>
              <p className="mr-6  mt-1 text-xs text-bermuda">✓</p>
              <p> {item}</p>
            </div>
          ))}
        </div>
      );
    }
    if (activeTab == "teo") {
      return (
        <div className="mt-4">
          <p className="text-[20px] text-white   font-medium">
            Senior Software Engineer
            <span className="text-bermuda"> @TEO International</span>
          </p>
          <p className="mb-4 italic">2022 - 2022</p>
          {[
            "working as consultant development at systems limited.",
            "working on react , react router , tailwind CSS etc.",
            "Developing and implementing highly responsive user interface components using react concepts",
            "Writing application interface codes using JavaScript following react.js workflows",
            "Writing end to end testing script for react project using cypress.",
            "Optimization of over using react hooks and using better coding approaches.",
          ].map((item: any) => (
            <div className="m-3 px-5 flex items-start" key={item}>
              <p className="mr-6  mt-1 text-xs text-bermuda">✓</p>
              <p> {item}</p>
            </div>
          ))}
        </div>
      );
    }
    if (activeTab == "currinda") {
      return (
        <div className="mt-4">
          <p className="text-[20px] text-white   font-medium">
            Full stack Developer
            <span className="text-bermuda"> @Currinda</span>
          </p>
          <p className="mb-4 italic">2021 - 2022</p>
          {[
            "working as consultant development at systems limited.",
            "working on react , react router , tailwind CSS etc.",
            "Developing and implementing highly responsive user interface components using react concepts",
            "Writing application interface codes using JavaScript following react.js workflows",
            "Writing end to end testing script for react project using cypress.",
            "Optimization of over using react hooks and using better coding approaches.",
          ].map((item: any) => (
            <div className="m-3 px-5 flex items-start" key={item}>
              <p className="mr-6  mt-1 text-xs text-bermuda">✓</p>
              <p> {item}</p>
            </div>
          ))}
        </div>
      );
    }
    if (activeTab == "currinda") {
      return (
        <div className="mt-4">
          <p className="text-[20px] text-white   font-medium">
            Full stack Developer
            <span className="text-bermuda"> @Currinda</span>
          </p>
          <p className="mb-4 italic">2021 - 2022</p>
          {[
            "working as consultant development at systems limited.",
            "working on react , react router , tailwind CSS etc.",
            "Developing and implementing highly responsive user interface components using react concepts",
            "Writing application interface codes using JavaScript following react.js workflows",
            "Writing end to end testing script for react project using cypress.",
            "Optimization of over using react hooks and using better coding approaches.",
          ].map((item: any) => (
            <div className="m-3 px-5 flex items-start" key={item}>
              <p className="mr-6  mt-1 text-xs text-bermuda">✓</p>
              <p> {item}</p>
            </div>
          ))}
        </div>
      );
    }
    if (activeTab == "friend") {
      return (
        <div className="mt-4">
          <p className="text-[20px] text-white   font-medium">
            Full stack Developer
            <span className="text-bermuda"> @Friend It Solution</span>
          </p>
          <p className="mb-4 italic">2020 - 2022</p>
          {[
            "working as consultant development at systems limited.",
            "working on react , react router , tailwind CSS etc.",
            "Developing and implementing highly responsive user interface components using react concepts",
            "Writing application interface codes using JavaScript following react.js workflows",
            "Writing end to end testing script for react project using cypress.",
            "Optimization of over using react hooks and using better coding approaches.",
          ].map((item: any) => (
            <div className="m-3 px-5 flex items-start" key={item}>
              <p className="mr-6  mt-1 text-xs text-bermuda">✓</p>
              <p> {item}</p>
            </div>
          ))}
        </div>
      );
    }
    if (activeTab == "freelance") {
      return (
        <div className="mt-4">
          <p className="text-[20px] text-white   font-medium">
            Full stack Developer
            <span className="text-bermuda"> @Freelance</span>
          </p>
          <p className="mb-4 italic">2029 - 2020</p>
          {[
            "working as consultant development at systems limited.",
            "working on react , react router , tailwind CSS etc.",
            "Developing and implementing highly responsive user interface components using react concepts",
            "Writing application interface codes using JavaScript following react.js workflows",
            "Writing end to end testing script for react project using cypress.",
            "Optimization of over using react hooks and using better coding approaches.",
          ].map((item: any) => (
            <div className="m-3 px-5 flex items-start" key={item}>
              <p className="mr-6  mt-1 text-xs text-bermuda">✓</p>
              <p> {item}</p>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <div className="bg-[#293448] p-4 relative ">
      <div className="bg-[#091A2E]  m-auto w-[1280px] rounded-2xl overflow-scroll">
        {
          // navebar
        }
        <div className="flex justify-between items-center font-mono ">
          <div className="flex text-bermuda font-semibold m-10 uppercase">
            <Image
              alt="logo"
              src="../images/logo1.svg"
              height={80}
              width={80}
              className="ml-4"
            />
          </div>
          <div className="flex text-bermuda text-xs mr-8 cursor-pointer">
            <p className="mx-3">About me</p>
            <p className="mx-3">Contact Us</p>
            <p className="mx-3">Experienced</p>
            <p className="mx-5">Projects</p>
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          <svg
            width={50}
            height={50}
            style={{
              opacity: 0.2,
              boxShadow: "23px 23px 700px 130px #394763",
              width: "10px",
              height: "10px",
              background: "",
              borderRadius: "100px",

              position: "absolute",
              left: mousePos?.x,
              top: mousePos?.y,
              transform: "translate(-50%, -50%)",
            }}
          ></svg>
        </div>

        {
          // main
        }
        <animated.div style={styles2} className="ml-40 mt-32 flex relative ">
          <div className="bg- w-[80%] relative">
            <p className="text-bermuda text-md">HI, my name is</p>
            <p className="text-[#B3BACD] text-[70px] font-serif  absolute">
              {"Saifullah Khan ".split("").map((item: any) => (
                <span
                  key={item}
                  className="text-white cursor-pointer font-bold mx-1 hover:text-bermuda hover:scale-125"
                >
                  {item}
                </span>
              ))}
            </p>
            <p className="mt-24 mb-6 text-[#B3BACD]  text-[45px] font-serif">
              I develop applications for web.
            </p>
            <p className="w-[70%]  text-[#B3BACD] text-normal font-sans">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-bermuda">controversy</span>, laying out
              pages with meaningless filler text can be very useful when the
              focus is meant to be on design, not content.
            </p>
            <button className="transition-all px-5 py-3 my-5 mt-10 text-xs text-bermuda border-2 shadow-md	 border-bermuda hover:shadow-bermuda hover:translate-y-[-5px] hover:translate-x-[-5px]">
              Get in Touch
            </button>
          </div>
          <div className="flex text-bermuda font-semibold m-10 uppercase absolute top-[-53px] right-8">
            <img
              alt="logo"
              src="/../images/pres1.png"
              width={440}
              height={440}
              className="ml-4"
            />
          </div>
        </animated.div>
        {
          // ABOUT ME
        }
        <div className="mx-40  my-20">
          <div>
            <div className="neonMod">
              <h1 className="text-[25px] my-5 text-[#222]">About Me</h1>
            </div>

            <p className="w-3/4  text-[#8892B0] text-md font-sans">
              Hey Welcome! I'M Full Stack Developer. I'M currently working as
              <span className="text-bermuda ">
                {" "}
                consultant development at systems limited.
              </span>
              I have over 5 years of experienced working with different
              technologies like React ,Node , Vue JS etc with different
              companies and freelancing projects as{" "}
              <span className="text-bermuda">
                {" "}
                Frontend and full stack developer
              </span>{" "}
              . my experienced includes technology like Reactjs, vue js, node ,
              express js ,java, data science,django,saas, firebase,docker,
              kubernetes,skaffold, vagrant etc.
            </p>
            <p className="my-4 text-[#8892B0]">
              Technologies I’ve been working with recently:
            </p>
            <div className=" text-[#8892B0] flex justify-between items-center w-80 text-xs ">
              <div>
                <p className=" my-3">
                  {" "}
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  JavaScript (ES6+)
                </p>
                <p className=" my-3">
                  {" "}
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Node JS
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Django
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Docker
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Git
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  C++/java/python
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Ds/alogs
                </p>
              </div>
              <div>
                <p className=" my-3">
                  {" "}
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  TypeScript
                </p>
                <p className=" my-3">
                  {" "}
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  React JS
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Next JS
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Microsoft Azure
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Firebase
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Competitive programming
                </p>
                <p className=" my-3">
                  <span className="mr-2  mt-1 text-xs text-bermuda">✓</span>
                  Dynamic programming
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 mx-40 text-[#B3BACD]">
          <div className="neon">
            <h1 className=" text-[35px] uppercase">
              {" "}
              <span>where</span> I've worked{" "}
            </h1>
          </div>

          <div className="border-t-[1px] border-slate-700 mb-10	"></div>

          <div className={` `}>
            <div className="flex text-[15px] mb-3  ">
              <div className="w-[30%] text-sm">
                <p
                  onClick={() => setActiveTab("system")}
                  className={`  self-start p-5 cursor-pointer hover:text-bermuda
               

                ${
                  activeTab == "system"
                    ? "text-bermuda underlined  border-l-4 border-bermuda bg-[#1a375055]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  System Limited
                </p>
                <p
                  onClick={() => setActiveTab("teo")}
                  className={`  self-start p-5  cursor-pointer hover:text-bermuda hover:bg-[#1a375055]
               

                ${
                  activeTab == "teo"
                    ? "text-bermuda underlined   border-l-4 border-bermuda bg-[#1a375055]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  TEO International
                </p>
                <p
                  onClick={() => setActiveTab("currinda")}
                  className={`  self-start p-5     cursor-pointer hover:text-bermuda hover:bg-[#1a375055]
               

                ${
                  activeTab == "currinda"
                    ? "text-bermuda underlined  border-l-4 border-bermuda bg-[#1a375055]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  Currinda
                </p>
                <p
                  onClick={() => setActiveTab("friend")}
                  className={`  self-start p-5  cursor-pointer hover:text-bermuda hover:bg-[#1a375055]
               

                ${
                  activeTab == "friend"
                    ? "text-bermuda   border-l-4 border-bermuda bg-[#1a375055]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  Friend It Solutions
                </p>
                <p
                  onClick={() => setActiveTab("freelance")}
                  className={`  self-start p-5  cursor-pointer hover:text-bermuda hover:bg-[#1a375055]
               

                ${
                  activeTab == "freelance"
                    ? "text-bermuda   border-l-4 border-bermuda bg-[#1a375055]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  Freelance Developer
                </p>
              </div>
              <div className=" transition-all ease-in font-serif	flex-1 cursor-pointer">
                <animated.div style={styles}>
                  {" "}
                  <div className="text-[#8892B0] font-sans">{renderText()}</div>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed text-white bottom-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github m-6 mb-8"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#B3BACD"
          fill="none"
          id="github-icon"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />{" "}
        </svg>
        {/***
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          stroke="#B3BACD"
          fill="none"
          id="github-icon"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="m-4"
        >
          {" "}
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
     */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          stroke="#B3BACD"
          fill="none"
          id="github-icon"
          stroke-width="1.5"
          stroke-linecap="round"
          className="m-6"
          stroke-linejoin="round"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          stroke="#B3BACD"
          fill="none"
          id="github-icon"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="m-6"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          stroke="#B3BACD"
          fill="none"
          id="github-icon"
          className="m-6"
        >
          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          stroke="#B3BACD"
          fill="none"
          id="github-icon"
          className="m-6"
        >
          {" "}
          <g>
            {" "}
            <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z" />{" "}
          </g>{" "}
        </svg>
        <div className="h-[80px]  mt-4 ml-8 border-l-2 border-l-[#8892B0] "></div>
      </div>
      <div className="fixed flex flex-col text-white top-[450px] right-[-70px]">
        <p id="emailId" className="rotate-90 cus-sf	text-[#B3BACD]">
          {"saifiekhan@icloud.com".split("").map((item: any) => (
            <span key={item} className="m-[1px] text-sm">
              {item}
            </span>
          ))}
        </p>
      </div>
      <div className="fixed flex flex-col text-white bottom-3 right-10">
        <div className="h-[80px] ml-4 border-l-2 border-l-[#8892B0] "></div>
      </div>
    </div>
  );
}
