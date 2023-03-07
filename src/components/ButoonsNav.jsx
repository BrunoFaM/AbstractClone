import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ButoonsNav() {
  // estado que controla icono
  const [icon, setIcon] = useState(0);
  function handleClick() {
    //controla el menu desplegable
    const menu2 = document.querySelector("#desplegable");
    console.log(menu2);
    //este condicional ajusta el display del menu segun el estado del icono
    if(icon === 0){
      menu2.setAttribute('class', "text-white bg-black border-t flex flex-col pt-12 pb-12 lg:hidden absolute w-screen");
    }else{
      menu2.setAttribute('class', "text-white bg-black border-t flex flex-col pt-12 pb-12 hidden w-screen");
    }
  }
  function handleIcon(){
    // controla es estado del icono
    if(icon === 0){
      setIcon(1);
    }else{
      setIcon(0);
    }
  }
  return (
    <>
      <div className="flex gap-4 text-2xl mr-3 xl:hidden">
        <button>
          <FontAwesomeIcon
            icon={faSearch}
            className="hover:text-3xl hover:mt-1 transition-all duration-300"
          />
        </button>
        <button id="barraIcon" onClick={handleClick}>
        <FontAwesomeIcon
            icon={icon === 0 ? faBars : faXmark}
            onClick={handleIcon}
            className="hover:text-3xl hover:mt-1 transition-all duration-300"
          />
        </button>
      </div>
      {/* for xl screens */}
      <div className="hidden xl:flex gap-3 mr-12 ">
        <button className="border text-2xl pl-5 pr-5 pt-2 pb-2 font-sans font-semibold rounded-lg bg-stone-900 border-solid ">
          Submit a request
        </button>
        <button
          title="Open a dialog"
          className=" text-2xl pl-7 pr-7 pt-2 pb-2 font-sans  rounded-lg bg-[#4C5FD5] hover:text-black hover:bg-white duration-200"
        >
          Sign in
        </button>
      </div>
    </>
  );
}

export default ButoonsNav;
