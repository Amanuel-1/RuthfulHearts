import logo from "../images/logo/logo.png";

export default function Navigation() {
  return (
    <div className="flex justify-between border-b border-b-cyan-950 border-opacity-50 p-5 items-center sticky top-0 left-0 right-0 bg-[#151515] backdrop-blur-xl bg-opacity-80 z-50">
      <img src={logo} alt="logo" className="w-72"></img>
      <div className="flex items-center justify-between gap-4 font-bold text-base hover:[&>a]:text-cyan-400 uppercase cursor-pointer duration-300">
        <a href="#home" rel="noreferrer">
          <span> Home </span>
        </a>
        <a href="#about" rel="noreferrer">
          <span> About </span>
        </a>
        <a href="#contact" rel="noreferrer">
          <span> Contact </span>
        </a>
        <a href="#donate" rel="noreferrer">
          <div className="bg-cyan-500 hover:bg-emerald-500 duration-300 px-5 py-2 rounded-full text-black">
            <span> Donate </span>
          </div>
        </a>
        <a href="#thanks" rel="noreferrer">
          <div className="bg-pink-400 hover:bg-white duration-300 px-6 py-2 rounded-full text-black">
            <span> Thank You </span>
          </div>
        </a>
      </div>
    </div>
  );
}
