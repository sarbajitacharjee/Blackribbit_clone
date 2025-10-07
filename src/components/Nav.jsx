import React from "react";

export default function Nav() {
  return (
    <nav className="py-6 px-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-bold">
          Blackribbit
        </a>

        <ul className="hidden md:flex gap-8 items-center text-sm text-gray-700">
          <li>
            <a href="#work" className="hover:underline">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#podcast" className="hover:underline">
              Podcast
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <details>
      <summary className="cursor-pointer">Menu</summary>
      <div className="mt-2 bg-white rounded shadow p-3">
        <a href="#work" className="block py-1">Work</a>
        <a href="#about" className="block py-1">About</a>
        <a href="#podcast" className="block py-1">Podcast</a>
        <a href="#contact" className="block py-1">Contact</a>
      </div>
    </details>
  );
}
