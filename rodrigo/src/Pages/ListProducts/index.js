import { BASE_URL_API } from "../../Api"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsId/style.css"


export const ListProducts = () => {

  const [data, setData] = useState([]);

  const ListDataProducts = async () =>{
    const res = await fetch(`${BASE_URL_API}products`);
    const response = await res.json();
    console.log(response)
    setData(response)
  }
    
 

  useEffect(() => {
    ListDataProducts();
  }, []);

  

  return (
    <div className={'container'}>

        <div className={'list'}> 

          {data.map((item, i) => {

              return(

                <div key={i}>
                <Link to={`ProductsId/${item.id}`}>
                <img src={item.image} width={"200px"} />
                <h2>{item.title}</h2>
                <br />
                <button>Mais informações</button>
                </Link>
                </div>
        )
      })}
    </div></div>

  )
    }

