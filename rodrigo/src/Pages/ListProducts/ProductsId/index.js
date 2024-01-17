import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { BASE_URL_API } from "../../../Api";
import { Link } from "react-router-dom";
import { ListProducts } from "..";

export const ProductsId = () => {
  const [itemId, setItemId] = useState([])
  const {id} = useParams();

  
const getItemId = async () =>{
  const res = await fetch(`${BASE_URL_API}products/${id}`);
  const response = await res.json();
  console.log(response)
  setItemId(response)
}



useEffect(() => {
  getItemId()
}, [])

    return (
      <>
        <div>
          <img src={itemId.image} width={'200px'} />
          <h2>{itemId.title}</h2>
          <h3>{itemId.category}</h3>
          <p>{itemId.price}$</p>
          <p>{itemId.description}</p>
          <button>
          <Link to="/ProductsId">Home</Link>
        </button>
        </div>
        
        </>
    )
  }
  
  