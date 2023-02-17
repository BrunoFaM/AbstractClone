import { data } from "../data/data";
import { useState, useEffect } from "react";
import MainItem from "./MainItem";

function Main() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos(data);
  }, []);

  return (
    <main className=" flex flex-col  items-center gap-8 pt-16 pb-16">{datos.map(dato => <MainItem key={dato.id} dato={dato} />)}</main>
  );
}

export default Main;
