import Image from "next/image";

export default function Layout() {
  return (
    <div className="bg-[#293448] p-4">
      <div className="bg-[#091A2E]  m-auto w-[1280px] rounded-2xl">
        {
          // navebar
        }
        <div className="flex justify-between items-center font-mono ">
          <div className="flex text-[#5EEAD4] font-semibold m-10 uppercase">
            saif
          </div>
          <div className="flex text-[#5EEAD4] text-xs">
            <p className="mx-3">About me</p>
            <p className="mx-3">Contact Us</p>
            <p className="mx-3">Experienced</p>
            <p className="mx-3">Projects</p>
          </div>
        </div>
        {
          // main
        }
        <div className="mx-40 mt-40">
          <p className="text-[#5EEAD4] text-md">HI, my name is</p>
          <p className="text-[#B3BACD] text-[58px]">Saifullah Khan</p>
          <p className=" mb-2 text-[#B3BACD]  text-[58px]">
            I build things for web.
          </p>
          <p className="w-2/4  text-[#B3BACD] text-xs">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout. A practice not without{" "}
            <span className="text-[#5EEAD4]">controversy</span>, laying out
            pages with meaningless filler text can be very useful when the focus
            is meant to be on design, not content.
          </p>
          <button className="px-5 py-3 my-5  text-xs text-[#5EEAD4] border-2 border-[#5EEAD4]">
            Get in Touch
          </button>
        </div>
        {
          // ABOUT ME
        }
        <div className="mx-40  my-20">
          <div>
            <h2 className="text-[35px] text-[#fff]">About Me</h2>
            <p className="w-3/4  text-[#B3BACD] text-xs">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
              <span className="text-[#5EEAD4]">
                controversy and there is more over
              </span>
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
            </p>
            <p className="text-[#B3BACD] text-xs">
              laying out pages with meaningless filler text ca
            </p>
            <p className="w-3/4  text-[#B3BACD] text-xs">
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
        <div className="mt-20"> xx</div>
      </div>
    </div>
  );
}
