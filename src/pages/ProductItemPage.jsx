import useStore from "../hooks/useStore";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";

function ProductItemPage() {
  const { catalog, page } = useStore();
  const { id } = useParams();

  const validId = /^[1-9]+\d*$/.test(id);
  const product = catalog.one(+id)

  page.update(`${product.name}`);

  if (!validId || !product) {
    return <div>404</div>
  }
  
  return <div>Name: {product.name}</div>
}

const ProductItemPageObserver = observer(ProductItemPage)

export default ProductItemPageObserver;