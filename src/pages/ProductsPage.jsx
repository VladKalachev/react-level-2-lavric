import { Link } from "react-router-dom";
import useStore from "../hooks/useStore";
import { observer } from "mobx-react";

function ProductsPage() {
  const { catalog } = useStore();

  return <div className="row">
    <h1>Catalog</h1>
    {catalog.products.map(pr => (<div className="col col-4 mt-3" key={pr.id}>
        <h3>{pr.name}</h3>
        <Link to={`/catalog/${pr.id}`}>Read more</Link>
    </div>))}
  </div>
}

const ProductsPageObserver = observer(ProductsPage)

export default ProductsPageObserver;