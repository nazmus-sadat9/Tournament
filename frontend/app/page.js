export default function Home() {
  return (
    <div className="bg-[#1a1a1a] w-screen h-screen px-[5%] py-[15%]">
      <h2 className="text-[#fff]">Free Fire Tournament 2026</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[8%]">

        <div className="flex flex-col justify-evenly items-center py-[5%] border-[0.1em] border-[#555] bg-[#222]">
          <span>DATE</span>
          <span className="text-[#ff9364] text-[1.5rem]">0/8/2026</span>
        </div>

        <div className="flex flex-col justify-evenly items-center py-[5%] border-[0.1em] border-[#555] bg-[#222]">
          <span>PRIZE</span>
          <span className="text-[#ff9364] text-[1.5rem]">000</span>
        </div>
      </div>

    </div>
  );
}
