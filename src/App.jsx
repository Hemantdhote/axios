import axios, { Axios } from "axios";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setdata] = useState([]);

  const datafun = async () => {
    const data = await axios.get("https://fakestoreapi.in/api/products");
    setdata(data.data.products);
  };
  useEffect(() => {
    datafun();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  
  

  return (
    <div className="flex p-3 gap-3 flex-wrap">
      {data.map((elem,index)=>(
        <Card key={index} data={elem}  />
      ))}

     
    </div>
  );
};

export default App;
