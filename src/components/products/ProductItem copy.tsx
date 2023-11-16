

import useApi from "../../hooks/useApi";
import { TProduct, TProductItem } from "../../types/data";
import { useState, useEffect } from 'react'

function ProductItem({ product }: { product: TProduct }){
	const { products: prApi } = useApi();
	const [ info, setInfo ] = useState<TProductItem | null>(null);

	useEffect(() => {
		prApi.one(product.id).then(data => setInfo(data));
	}, [ product, prApi ])

	return <div>
		<h1>ProductItem: {product.title}</h1>
		{ info && 
		<div>
			Reviews: { info.reviews.length }
		</div> }
	</div>;
}

export default ProductItem;