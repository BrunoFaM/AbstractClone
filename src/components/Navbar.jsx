import ButoonsNav from "./ButoonsNav";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className=" flex justify-between items-center  bg-[#000000] text-[#fff] w-full h-20">
      <NavLinks />
      <ButoonsNav />
    </nav>
  );
}

export default Navbar;
