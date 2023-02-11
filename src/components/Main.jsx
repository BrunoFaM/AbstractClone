import { data } from "../data/data";
import { useState, useEffect } from "react";
import MainItem from "./MainItem";

function Main() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos(data);
  }, []);

  return (
    <main>{datos.map(dato => <MainItem dato={dato} />)}</main>
  );
}

export default Main;
