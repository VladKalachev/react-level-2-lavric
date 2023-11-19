import useApiRequest from "../../hooks/useApiRequest";

function ProductSlider({ id }: { id: number }){
	const { done, success, data } = useApiRequest('products.gallery', id);

	return <div>
		{ !done && <div>Spinner...</div> }
		{ success && <div>{JSON.stringify(data)}</div> }
	</div>;
}

export default ProductSlider;