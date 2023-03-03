function MainItem({ dato }) {
  return (
    <div className="self-start flex w-[80%] gap-5 md:gap-0 p-5 text-2xl ">
      <div className="w-[200px]">
        <img className="" src={dato.icon} />
      </div>
      <div>
        <h2 className="font-bold text-2xl">{dato.title}</h2>
        <p className="mt-2 text-xl mb-5">{dato.description}</p>
        <a href="" className="text-xl hover:text-blue-500 underline ">
          Learn More →
        </a>
      </div>
    </div>
  );
}

export default MainItem;
