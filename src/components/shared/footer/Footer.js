import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
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
    <footer className="footer bg-zinc-900 flex flex-col justify-center items-center py-10 text-center">
      <div className="flex gap-2 md:gap-5 pr-2 text-xl md:text-2xl text-zinc-100">
        <FaFacebook />
        <FaLinkedin />
        <FaYoutube />
        <FaTwitter />
        <FaWhatsapp />
      </div>
      <ul className="not-md:menu px-1 text-[18px] md:gap-7 md:flex text-left">
        {navItems}
      </ul>
      <p className="font-sans text-zinc-600 text-center">
        @2025 The News Portal. Design by Developer abdurrahman482937
      </p>
    </footer>
  );
}
