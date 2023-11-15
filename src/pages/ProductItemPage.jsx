import useStore from "../hooks/useStore";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";

function ProductItemPage() {
  const { catalog } = useStore();
  const { id } = useParams();
  console.log('ProductItemPage', catalog.one(Number(id)))
  const validId = /^[1-9]+\d*$/.test(id);
  const product = catalog.one(+id)

  if (!validId || !product) {
    return <div>404</div>
  }
  
  return <div>Name: {product.name}</div>
}

const ProductItemPageObserver = observer(ProductItemPage)

export default ProductItemPageObserver;