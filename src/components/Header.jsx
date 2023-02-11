function Header() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 bg-[#dadbf1]  h-1/2">
      <h1 className="text-6xl font-bold ">How can we help?</h1>
      <input
        className="w-[95%] p-4 outline-none outline-black outline-1 rounded-md hover:outline-blue-800 focus:outline-blue-800 bg-[#ffff] text-lg"
        placeholder="Search"
      />
    </section>
  );
}

export default Header;
