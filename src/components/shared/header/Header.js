import Image from "next/image";
import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className="header text-center py-5 flex flex-col items-center justify-center gap-2">
        <div className="px-10">
            <Image className="block mx-auto px-" src="/logo1.webp" alt="logo" width={600} height={300} />
            <p className="text-xl md:text-3xl font-semibold">Journalist Without Fear or Favour</p>
            <p className="text-lg md:text-xl font-base">Friday, March 21, 2025</p>
        </div>
        <Navbar></Navbar>
    </header>
  )
}
