import logo from "../../public/images/logo.png";

function NavLinks() {
  return (
    <div className="flex">
      <a href="">
        <div className="flex">
          <img
            className="bg-[#fff] rounded-3xl border-white border mb-5 -ml-1"
            src={logo}
            alt="oficial logo"
          />
          <p className="top">Abstract</p>
        </div>
      </a>
      <a href="">Help Center</a>
    </div>
  );
}

export default NavLinks;
