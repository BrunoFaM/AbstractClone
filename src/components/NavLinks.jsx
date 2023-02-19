import { createElement } from "react";
import logo from "../../public/images/logo.png";

function NavLinks() {
  return (
    <div className="flex text-2xl pl-5">
      <a title="Go to abstract.com" href="https://www.abstract.com/" className="mr-2 font-bold hover:text-gray-300 peer">
        Abstract
      </a>
      |
      <a
        title="Home"
        href=""
        className="ml-2 font-semibold hover:underline peer"
      >
        Help Center
      </a>
    </div>
  );
}

export default NavLinks;
