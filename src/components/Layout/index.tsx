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
    <div className="bg-[#293448] p-4 ">
      <div className="bg-[#091A2E]  m-auto w-[1280px] rounded-2xl">
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
          <div className="bg- w-[80%]">
            <p className="text-bermuda text-md">HI, my name is</p>
            <p className="text-[#B3BACD] text-[70px] font-serif my-4">
              {"SAIFULLAH KHAN ".split("").map((item: any) => (
                <span
                  key={item}
                  className="text font-bold  hover:text-bermuda hover:text-[80px]"
                >
                  {item}
                </span>
              ))}
            </p>
            <p className=" mb-2 text-[#B3BACD]  text-[50px] font-serif">
              I build things for web.
            </p>
            <p className="w-[70%]  text-[#B3BACD] text-normal">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-bermuda">controversy</span>, laying out
              pages with meaningless filler text can be very useful when the
              focus is meant to be on design, not content.
            </p>
            <button className="px-5 py-3 my-5 mt-10 text-xs text-bermuda border-2 border-bermuda">
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
            <div className="neon">
              <h1 className="text-[35px] my-5 text-[#222]">About Me</h1>
            </div>

            <p className="w-3/4  text-[#B3BACD] text-md">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-bermuda">
                controversy and there is more over
              </span>
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
            </p>
            <p className="text-[#B3BACD] text-md">
              laying out pages with meaningless filler text ca
            </p>
            <p className="w-3/4 mt-3  text-[#B3BACD] text-md">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-bermuda">
                controversy and there is more over
              </span>
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
            </p>
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
                  <div className="text-[#8892B0]">{renderText()}</div>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
