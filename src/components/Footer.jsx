import React from "react";
import Copyright from "./Copyright";

function Footer() {
  return (
    <>
      <footer className="bg-[#000000] text-[#fff]  pt-8 pb-8">
        <div className="gridcontainer grid grid-cols-2 sm:w-[50%] md:w-[70%]">
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2">Abstract</h2>
            <ul>
              <li>
                <a href="">Start Trial</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
            </ul>
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2">Resources</h2>
            <ul>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Release Notes</a>
              </li>
              <li>
                <a href="">Status</a>
              </li>
            </ul>
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2">Community</h2>
            <ul>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Dribbble</a>
              </li>
              <li>
                <a href="">Podcast</a>
              </li>
            </ul>
          </div>
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2">Company</h2>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Carrers</a>
              </li>
              <li>
                <a href="">Legal</a>
              </li>
            </ul>
            <div className="mt-5">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <a href="" className="hover:underline">
                info@abstract.com
              </a>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
}

export default Footer;
