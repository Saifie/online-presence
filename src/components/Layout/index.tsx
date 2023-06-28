import Image from "next/image";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

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
    config: {
      mass: 4.7,
      tension: 170,
      friction: 120,
      precision: 0.3,
      velocity: 0,
    },
  });

  function renderText(): any {
    if (activeTab == "system") {
      return [
        "working as consultant development at systems limited.",
        "working on react , react router , tailwind CSS etc.",
        "Developing and implementing highly responsive user interface components using react concepts",
        "Writing application interface codes using JavaScript following react.js workflows",
        "Writing end to end testing script for react project using cypress.",
        "Optimization of over using react hooks and using better coding approaches.",
        " Implementation of authentication and authorization with keycloak provider using next Auth.",
        "Integration of open layer map with arcgis in caseworker.",
        "Integrate camunda tasklist.",
        "Worked on camunda tasklist to assign and claim tasks.",
        "Graphql setup for caseworker.",
        "Worked with graphql in camunda tasklist.",
        "Implementation of state management using redux toolkit for caseworker.",
        "Worked on react context for complex components and higher order functions.",
        "Optimizing components for maximum performance across a vast array of web-capable devices and browsers",
        " Documenting application changes and developing updates.",
        "working on vite instead web packs as vite is able to process your development build faster than Webpack",
        "working on typescript as vite has out of box support for typescript",
      ].map((item: any) => (
        <p className="m-1">
          <span className="mr-4 text-[#5EEAD4]">.</span>
          {item}
        </p>
      ));
    }
    if (activeTab == "teo") {
      return (
        <div className="mt-12">
          {[
            "working as consultant development at systems limited.",
            "working on react , react router , tailwind CSS etc.",
            "Developing and implementing highly responsive user interface components using react concepts",
            "Writing application interface codes using JavaScript following react.js workflows",
            "Writing end to end testing script for react project using cypress.",
            "Optimization of over using react hooks and using better coding approaches.",
          ].map((item: any) => (
            <p className="m-1">
              <span className="mr-4 text-[#5EEAD4]">.</span>
              {item}
            </p>
          ))}
        </div>
      );
    }
    if (activeTab == "currinda") {
      return (
        <div className="mt-20">
          {[
            "working as consultant development at systems limited.",
            "working on react , react router , tailwind CSS etc.",
            "Developing and implementing highly responsive user interface components using react concepts",
            "Writing application interface codes using JavaScript following react.js workflows",
            "Writing end to end testing script for react project using cypress.",
            "Optimization of over using react hooks and using better coding approaches.",
          ].map((item: any) => (
            <p className="m-1">
              <span className="mr-4 text-[#5EEAD4]">.</span>
              {item}
            </p>
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
          <div className="flex text-[#5EEAD4] font-semibold m-10 uppercase">
            <Image
              alt="logo"
              src="../images/logo1.svg"
              height={80}
              width={80}
              className="ml-4"
            />
          </div>
          <div className="flex text-[#5EEAD4] text-xs mr-8 cursor-pointer">
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
              boxShadow: "23px 23px 450px 100px blue",
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
        <div className="ml-40 mt-40 flex relative ">
          <div className="bg- w-[80%]">
            <p className="text-[#5EEAD4] text-md">HI, my name is</p>
            <p className="text-[#B3BACD] text-[50px] font-serif my-4">
              {"SAIFULLAH KHAN".split("").map((item: any) => (
                <span className="text hover:text-[#5EEAD4] hover:text-[60px]">
                  {item}
                </span>
              ))}
            </p>
            <p className=" mb-2 text-[#B3BACD]  text-[50px] font-serif">
              I build things for web.
            </p>
            <p className="w-[70%]  text-[#B3BACD] text-md">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-[#5EEAD4]">controversy</span>, laying out
              pages with meaningless filler text can be very useful when the
              focus is meant to be on design, not content.
            </p>
            <button className="px-5 py-3 my-5  text-xs text-[#5EEAD4] border-2 border-[#5EEAD4]">
              Get in Touch
            </button>
          </div>
          <div className="flex text-[#5EEAD4] font-semibold m-10 uppercase absolute top-[-53px] right-8">
            <img
              alt="logo"
              src="/../images/pres1.png"
              width={440}
              height={440}
              className="ml-4"
            />
          </div>
        </div>
        {
          // ABOUT ME
        }
        <div className="mx-40  my-20">
          <div>
            <h2 className="text-[35px] text-[#fff]">About Me</h2>
            <p className="w-3/4  text-[#B3BACD] text-md">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-[#5EEAD4]">
                controversy and there is more over
              </span>
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
            </p>
            <p className="text-[#B3BACD] text-md">
              laying out pages with meaningless filler text ca
            </p>
            <p className="w-3/4  text-[#B3BACD] text-md">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-[#5EEAD4]">
                controversy and there is more over
              </span>
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
            </p>
          </div>
        </div>
        <div className="mt-40 mx-40 text-[#B3BACD]">
          <h1 className=" text-[35px] uppercase"> where I've worked </h1>
          <div className="border-t-[1px] border-slate-700 mb-10	"></div>

          <div className={` `}>
            <div className="flex text-[15px] border-l-[2px] border-slate-700 mb-3  ">
              <div className="w-[20%]">
                <p
                  onClick={() => setActiveTab("system")}
                  className={`  self-start p-6 cursor-pointer hover:text-[#5EEAD4]
               

                ${
                  activeTab == "system"
                    ? "text-[#5EEAD4] underlined  border-l-2 border-[#5EEAD4]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  System Limited
                  {activeTab == "system" && (
                    <>
                      {" "}
                      <span className="block  text-[8px]">
                        Developement Consultant{" "}
                      </span>
                      <span className=" block text-[8px]">2022 - present</span>
                    </>
                  )}
                </p>
                <p
                  onClick={() => setActiveTab("teo")}
                  className={`  self-start p-6  cursor-pointer hover:text-[#5EEAD4]
               

                ${
                  activeTab == "teo"
                    ? "text-[#5EEAD4] underlined   border-l-2 border-[#5EEAD4]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  TEO International
                </p>
                <p
                  onClick={() => setActiveTab("currinda")}
                  className={`  self-start p-6     cursor-pointer hover:text-[#5EEAD4]
               

                ${
                  activeTab == "currinda"
                    ? "text-[#5EEAD4] underlined  border-l-2 border-[#5EEAD4]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  Currinda
                </p>
                <p
                  onClick={() => setActiveTab("currinda")}
                  className={`  self-start p-6  cursor-pointer hover:text-[#5EEAD4]
               

                ${
                  activeTab == "currinda"
                    ? "text-[#5EEAD4]   border-l-2 border-[#5EEAD4]"
                    : "border-l-[1px] border-slate-700 "
                }
              `}
                >
                  Friend It Solutions
                </p>
              </div>
              <div className=" transition-all ease-in font-serif	flex-1 cursor-pointer">
                <animated.div style={styles}> {renderText()}</animated.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
