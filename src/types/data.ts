export type TProduct = {
	id: number,
	title: string,
	price: number,
	rest: number
}

export type TReview = {
	id: number,
	name: string,
	text: string,
	value: number
}

export type TProductItem = TProduct & {
	reviews: TReview[]
}