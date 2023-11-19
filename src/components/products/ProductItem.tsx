import useApiRequest from "../../hooks/useApiRequest";
import { TProduct } from "../../types/data";
import ProductSlider from "./ProductSlider";

function ProductItem({ product }: { product: TProduct }){
	const { success, data } = useApiRequest('products.one', product.id);

	return <div>
		<h1>ProductItem: {product.title}</h1>
		{ success && 
		<>
			<div>
				Reviews: { data.reviews.length }
			</div>
			<ProductSlider id={product.id} />
		</>}
	</div>;
}

export default ProductItem;