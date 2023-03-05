import ButoonsNav from "./ButoonsNav";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav id="Navegador" className=" flex md:pl-8 md:pr-8 justify-between  items-center  bg-[#000000] text-[#fff] w-full h-20">
      <NavLinks />
      <ButoonsNav />
    </nav>
  );
}

export default Navbar;
