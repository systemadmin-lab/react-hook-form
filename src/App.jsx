import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";

export default function App({id}) {
  return <>
  <ProductList/>
  <div>
    <ProductDetails id={1}/>
  </div>
  
  </>;
}
