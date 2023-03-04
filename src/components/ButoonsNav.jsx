import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

function ButoonsNav() {
  return (
    <>
      <div className="flex gap-4 text-2xl mr-3 xl:hidden">
        <button>
          <FontAwesomeIcon
            icon={faSearch}
            className="hover:text-3xl hover:mt-1 transition-all duration-300"
          />
        </button>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* for xl screens */}
      <div className="hidden xl:flex gap-3 mr-12 ">
        <button className="border text-2xl pl-5 pr-5 pt-2 pb-2 font-sans font-semibold rounded-lg bg-stone-900 border-solid ">Submit a request</button>
        <button title="Open a dialog" className=" text-2xl pl-7 pr-7 pt-2 pb-2 font-sans  rounded-lg bg-[#4C5FD5] hover:text-black hover:bg-white duration-200">Sign in</button>
      </div>
    </>
  );
}

export default ButoonsNav;
