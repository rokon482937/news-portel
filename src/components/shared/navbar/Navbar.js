import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
            <li>
              <Link href="/category">All News</Link>
            </li>
            <li>
              <Link href="/category">Gaza</Link>
            </li>
            <li>
              <Link href="/category">Technology</Link>
            </li>
            <li>
              <Link href="/category">Sports</Link>
            </li>
            <li>
              <Link href="/category">Entertainment</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/recent-news">Recent News</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-zinc-900 shadow-sm px-0 md:px-20 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-zinc-900 rounded-box z-1 mt-3 w-52 p-2 shadow text-[18px]"
          >
            {navItems}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/logo2.webp" alt="logo" width={150} height={150}></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px] gap-3">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 md:gap-5 pr-2 text-xl md:text-2xl text-zinc-100">
          <FaFacebook />
          <FaLinkedin />
          <FaYoutube />
          <FaTwitter />
          <FaWhatsapp />
        </div>
      </div>
    </nav>
  );
}
