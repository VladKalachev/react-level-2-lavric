import useStore from "../hooks/useStore";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import Error404 from "../components/erorrs/Error404";
import ProductItem from "../components/products/ProductItem";

const ProductItemPage = observer(() => {
  const { catalog, page } = useStore();
  const { id } = useParams();

  const validId = /^[1-9]+\d*$/.test(id);
  const product = catalog.one(+id)

  
  if (!validId || !product) {
    return <Error404 title="Product not found" />
  }
  
  page?.update(`${product?.name}`);

  return <ProductItem product={product}/>
})

export default ProductItemPage;