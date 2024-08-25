import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProduct() {
  let { id } = useParams();
  
  let [data, setData] = useState([]);
  
  async function getProductById() {
    let result = await axios.get(
      `http://localhost:240/api/getProductById/${id}`
    );
    setData(result.data);
  }
  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div>
      {data.map((data) => (
        <div className="relative h-[400px] w-[300px] rounded-md" key={data.id}>
          <img
            src={`http://localhost:240/${data.image}`}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              ID :- {data.id}
            </h1>
            <h1 className="text-lg font-semibold text-white">
              Type :- {data.productType}
            </h1>
            <h1 className="text-lg font-semibold text-white">
              Brand :- {data.productBrand}
            </h1>
            <h1 className="text-lg font-semibold text-white">
              Price :- {data.productPrice}
            </h1>
            <h1 className="text-lg font-semibold text-white">
              Rating :- {data.productRating}
            </h1>
            <Link
              to="/admin"
              className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
            >
              Back &rarr;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
