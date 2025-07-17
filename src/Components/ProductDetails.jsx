import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const retriveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = ({ id }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retriveProduct,
  });
console.log(id)
  return <div></div>;
};

export default ProductDetails;
