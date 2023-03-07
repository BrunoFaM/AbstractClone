import React from "react";

function MenuDesplegable() {
  return (
    <div
      id="desplegable"
      className="text-white bg-black border-t flex flex-col pt-12 pb-12 w-screen"
    >
      <button className="w-max text-2xl pl-3 pr-3 pt-2 pb-4 font-sans border-b self-center">
        Submit a request
      </button>
      <button
        title="Open a dialog"
        className="w-max self-center text-2xl pt-4 pb-2 font-sans "
      >
        Sign in
      </button>
    </div>
  );
}

export default MenuDesplegable;
