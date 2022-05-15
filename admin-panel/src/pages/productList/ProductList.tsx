import React from 'react';
import './ProductList.scss';
import ProductDatatable from '../../components/datatable/ProductDatatable';

const ProductList = () => {
	return (
		<div className="productList">
			<ProductDatatable />
		</div>
	);
};

export default ProductList;
