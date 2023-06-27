import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen mt-[100px] bg-[#f9e6e5]">
      <div>
        <img
          className="w-[200px]"
          src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/0a6e50a9be235a6382cd452d/2.png"
          alt="img"
        />

        <div>
          Hi, I'm Linda, the owner and lead planner of Weddings - the agency for
          high class, unique proposals, bespoke elopements, breathtaking
          destination weddings, stylish celebrations and event design in
          Austria, currently expanding our team to France and Italy.
        </div>
        <img
          className="w-[200px]"
          src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/0a6e50a9be235a6382cd452d/2.png"
          alt="img"
        />
      </div>
    </div>
  );
}
